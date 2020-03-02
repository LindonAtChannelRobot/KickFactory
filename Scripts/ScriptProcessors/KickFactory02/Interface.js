Content.makeFrontInterface(700, 597);

function setVoicePositions()
{

    for (pdx = 0; pdx < NUM_VOICES; pdx++)
    {
        if (PanelExpanders[pdx].getValue() == 0)
        {
            VoicePanels[pdx].set("height",CLOSEDPANELSIZE);
        }else{
            VoicePanels[pdx].set("height",OPENPANELSIZE);
        };
    };
    VoicePanels[0].set("y",PANELSTARTY);
    VoicePanels[1].set("y",PANELSTARTY  + VoicePanels[0].get("height")+1 );
    VoicePanels[2].set("y",PANELSTARTY  + (VoicePanels[0].get("height")+ VoicePanels[1].get("height")) +1 );
        

};

// CONSTANTS

const var NUM_VOICES = 3;
const var PANELSTARTY = 47;
const var CLOSEDPANELSIZE = 22;
const var OPENPANELSIZE = 265;
// UI widgets 

var VoicePanels = [];
var MuteButtons = [];
var VoiceBarNames = [];
var VoiceBarVolumes = [];
var PanelExpanders = [];
var VolumeKnobs = [];
var PanKnobs = [];
var PitchKnobs = [];
var FreqKnobs = [];
var ResKnobs = [];
var LFOSpeedKnobs = [];
var LFODepthKnobs = [];
var VolumeModPanels = [];
var PanModPanels = [];
var PitchModPanels = [];
var FreqModPanels = [];
var EffectsPanels = [];




// place ui widgets in their arrays

for (idx = 0; idx < NUM_VOICES; idx++)
{
    VoicePanels[idx] = Content.getComponent("VoicePanel" + (idx+1));
    MuteButtons[idx] = Content.getComponent("MuteButton" + (idx+1));
    MuteButtons[idx].setControlCallback(onMuteButton);
    PanelExpanders[idx] = Content.getComponent("OpenCloseButton" + (idx+1));
    PanelExpanders[idx].setControlCallback(onPanelExpander);
    EffectsPanels[idx] = Content.getComponent("EffectsPanel" + (idx+1));
};



// The UI call backs ---

inline function onPanelExpander(component, value)
{
	//Add your custom logic here...
	setVoicePositions();
	for (idx = 0; idx < NUM_VOICES; idx++)
    {
        EffectsPanels[idx].showControl(PanelExpanders[idx].getValue());
    }
};





function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 