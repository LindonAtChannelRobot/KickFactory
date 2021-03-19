

// -------------- Authorisation & Demo ----------------------------
namespace Authorisation{

    const var authProductID = "ae6a9d36-8811-11eb-8dcd-0242ac130";

    var myResult = false;
    var AuthState = false;
    var CommsStartTime;


    const var UserEmail = Content.getComponent("UserEmail");
    const var Description = Content.getComponent("Description");
    const var UserPassword = Content.getComponent("UserPassword");
    const var StatusLabel = Content.getComponent("StatusLabel");
    const var WarpSpin = Content.getComponent("WarpSpin");
    const var StatusPanel = Content.getComponent("StatusPanel");
    const var ResponseLabel = Content.getComponent("ResponseLabel");
    const var RetryButton = Content.getComponent("RetryButton");

    var uEmail;
    var uPassword;
    var blindRetry = false;
    var licenseFileFound = false;

    Server.setBaseURL("https://samplehouse.herokuapp.com");

    const var AuthorisationDialogue = Content.getComponent("AuthorisationDialog");
    const var GlobalMute = Synth.getMidiProcessor("GlobalMute");
    

    //
    var masterByPass = 1;  // used to set the bypass
    //
    var temp = "api/user/login/" + authProductID;

     


    

    var machineId = FileSystem.getSystemId();
    var dir = FileSystem.getFolder(FileSystem.AppData);
//dir.getChildFile("license.dat").writeEncryptedObject(p, machineId);

//var myFile = dir.getChildFile("license.dat").loadEncryptedObject(machineId);
//Console.print(trace(myFile));
    
    
    
    
    
    
    
    
    
    
    inline function doServerValidation(Mail, Pass)
    {
        const var p =
        {
            "email": Mail,
            "password": Pass
        };
        var d;
        var eEnc;
        var pEnc;

        Server.callWithPOST(temp, p, function(status, response)
        {
            Console.print("status is:" + status);
            Console.print("response is:" + trace(response));
            AuthorisationDialogue.stopTimer();
            blindRetry = false;
            switch (status)
            {
                case 0:
                    StatusLabel.set("text", "Server Error");
                    WarpSpin.showControl(false);
                    blindRetry = true;
                    RetryButton.showControl(true);
                    break;
                case 200:
                    setValidLicense(true);
                    //Engine.dumpAsJSON(d, "../WebRegistrationInfo.js");
                    if (!licenseFileFound)
                    {
                        dir.getChildFile("license.dat").writeEncryptedObject(p, machineId);
                    }
                    break;
                case 400:
                    StatusLabel.set("text", "Invalid Email Format");
                    WarpSpin.showControl(false);
                    RetryButton.showControl(true);
                    break;
                case 401:
                    StatusLabel.set("text", response.msg);
                    WarpSpin.showControl(false);
                    RetryButton.showControl(true);
                    break;
                case 402:
                    StatusLabel.set("text", response.msg);
                    WarpSpin.showControl(false);
                    break;
                case 403:
                    StatusLabel.set("text", response.msg);
                    WarpSpin.showControl(false);
                    if (response.msg.substring(0,10) == "Your subsc")
                    {
                        RetryButton.showControl(false);
                    }else{
                        RetryButton.showControl(true);
                    }
                    break;
                case 404:
                    StatusLabel.set("text", response.msg);
                    WarpSpin.showControl(false);
                    break;
            };
            

        });

    };
    
    // 
    inline function onSubmitButtonControl(component, value)
    {
        if(!value) // Just execute once
            return;
        ResponseLabel.showControl(false);
        uEmail = UserEmail.getValue();
        uPassword = UserPassword.getValue();
        
        uEmail = uEmail.trim();
        uPassword = uPassword.trim();
        
        if (uEmail.indexOf("@") == -1 || uEmail.length == 0 || uPassword.length == 0)
        {
            ResponseLabel.set("text", "Please enter a valid email and a password...");
            ResponseLabel.showControl(true); 
        }else{
            CommsStartTime = Engine.getUptime();
            WarpSpin.showControl(true);
            StatusLabel.showControl(true);
            StatusLabel.set("text", "Checking Authorisation Server....");
            RetryButton.showControl(false);
            StatusPanel.showControl(true);
            AuthorisationDialogue.startTimer(300);
            doServerValidation(uEmail, uPassword);
        }
        

    };

    Content.getComponent("SubmitButton").setControlCallback(onSubmitButtonControl);


    inline function onRetryButtonControl(component, value)
    {
        
        if(blindRetry)
        {
            CommsStartTime = Engine.getUptime();
            WarpSpin.showControl(true);
            StatusLabel.showControl(true);
            StatusLabel.set("text", "Checking Authorisation Server....");
            RetryButton.showControl(false);
            StatusPanel.showControl(true);
            AuthorisationDialogue.startTimer(300);
            doServerValidation(uEmail, uPassword);
        }else{
            StatusPanel.showControl(false);
        };
    };

    Content.getComponent("RetryButton").setControlCallback(onRetryButtonControl);


    inline function setValidLicense(isValid)
    {
        // Do whatever you want to do here. I suggest a MIDI muter...

        // GlobalMute.setAttribute(0, 1 - isValid);
        GlobalMute.setBypassed(isValid);
        
        if(isValid)
        {
            //
            // a valid license...
            AuthorisationDialogue.set("visible", false);
            StatusPanel.showControl(false);
            AuthorisationDialogue.stopTimer();
            AuthState = true;

        }
        else
        {
            //not a valid license...
            AuthState = false;

        }
    }


    inline function checkOnLoad()
    {
        // Clear the input
        UserEmail.set("text", "");
        UserPassword.set("text", "");
        
        // start out in a not playing state...
        GlobalMute.setBypassed(false);
        
        // Load the user data  from the stored file
        //local pData = Engine.loadFromJSON("../WebRegistrationInfo.js");
        local pData = dir.getChildFile("license.dat").loadEncryptedObject(machineId);
        Console.print("Checking user.....");
    
            
    
        if(pData)    
        {
            licenseFileFound = true;
            uEmail = pData.email;
            uPassword = pData.password;
            Console.print("found user email: " + uEmail);
            Console.print("found user password: " + uPassword);
            AuthorisationDialogue.showControl(true);
            CommsStartTime = Engine.getUptime();
            WarpSpin.showControl(true);
            StatusLabel.showControl(true);
            StatusLabel.set("text", "Checking Authorisation Server....");
            StatusPanel.showControl(true);
            RetryButton.showControl(false);
            AuthorisationDialogue.startTimer(300);
            doServerValidation(uEmail, uPassword);

        }else{
            licenseFileFound = false;
            setValidLicense(false);
            Console.print("not found a user..");
            AuthorisationDialogue.showControl(true);
            StatusPanel.showControl(false);
        }
    

    }

    // Call this on startup
    checkOnLoad();


    //

    AuthorisationDialogue.setTimerCallback(function()
    {

        // run this to loop the animation, and to await a result...
        // the callback from the server will stop this timer...
        // unless we've reached 1.5 mins - when we decide there wont be a response and
        // we stop ourselves and tell teh user the comms failed.
        WarpSpin.setValue(((WarpSpin.getValue()+1) % 10) +1);

        // have we run out of time?
        if (Engine.getUptime() > (CommsStartTime + 10) )
        {
            StatusLabel.set("text", "No response from the authorisation server, please check your internet connection and retry");
            AuthorisationDialogue.stopTimer();
            WarpSpin.showControl(false);
            blindRetry = true;
            RetryButton.showControl(true);
        }
    });

    // ------------- end auth --------------------------

};