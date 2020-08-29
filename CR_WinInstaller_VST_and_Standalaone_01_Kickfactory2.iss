[Setup]
#define AppName "KickFactory2"
#define DevDir "ChannelRobot"
AppName={#AppName}
AppVersion=1.0.0

DefaultDirName={pf}\{#DevDir}\{#AppName}
DefaultGroupName={#AppName}
Compression=lzma2
SolidCompression=yes
OutputDir=.\installerbuild
ArchitecturesInstallIn64BitMode=x64
OutputBaseFilename={#AppName} Installer 1.0.0
LicenseFile=".\installerAssets\EULA.txt"
PrivilegesRequired=admin
WizardSmallImageFile=".\installerAssets\CRLogo55x58.bmp"
WizardImageFile=".\installerAssets\CRLogo164x314.bmp"
DisableWelcomePage=no

SetupLogging=yes
ChangesAssociations=no

[Types]
Name: "full"; Description: "Full installation"
Name: "custom"; Description: "Custom installation"; Flags: iscustom

[Dirs]
Name: "{app}\"; Permissions: users-modify powerusers-modify admins-modify system-modify

[Components]
Name: "vst2_64"; Description: "{#AppName} 64-bit VSTi Plugin"; Types: full custom;



[Files]

; VST

Source: "Binaries\Compiled\VST\KickFactory x64.dll"; DestDir: "{code:GetVST2Dir_64}\{#DevDir}"; Flags: ignoreversion; Components: vst2_64;

; MANUAL
 Source: ".\installerAssets\{#AppName}_Manual.pdf"; DestDir: "{app}"; Flags: ignoreversion;


[Icons]
Name: "{group}\Uninstall {#AppName}"; Filename: "{app}\unins000.exe"    
Name: "{group}\{#AppName}_Manual"; Filename: "{app}\{#AppName}_Manual.pdf"   


[Code]
var
  OkToCopyLog : Boolean;
  VST2DirPage_64: TInputDirWizardPage;


procedure InitializeWizard;

begin

  VST2DirPage_64 := CreateInputDirPage(wpSelectDir,
  'Select the 64-Bit VST2 Plugin Directory', '',
  'Select the folder in which setup should install the 64-bit VST2 Plugin(you can choose not to install this version later),  then click Next.',
  False, '');
  VST2DirPage_64.Add('');
  VST2DirPage_64.Values[0] := ExpandConstant('{reg:HKLM\SOFTWARE\VST,VSTPluginsPath|{pf}\Steinberg\VSTPlugins}\');

end;



function GetVST2Dir_64(Param: String): String;
begin
  Result := VST2DirPage_64.Values[0]
end;



procedure CurStepChanged(CurStep: TSetupStep);
begin
  if CurStep = ssDone then
    OkToCopyLog := True;
end;

procedure DeinitializeSetup();
begin
  if OkToCopyLog then
    FileCopy (ExpandConstant ('{log}'), ExpandConstant ('{app}\InstallationLogFile.log'), FALSE);
  RestartReplace (ExpandConstant ('{log}'), '');
end;

[UninstallDelete]
Type: files; Name: "{app}\InstallationLogFile.log"
