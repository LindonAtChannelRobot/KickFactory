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
    VoicePanels[1].set("y",PANELSTARTY  + VoicePanels[0].get("height") );
    VoicePanels[2].set("y",PANELSTARTY  + (VoicePanels[0].get("height")+ VoicePanels[1].get("height")));
        

};

// CONSTANTS

const var NUM_VOICES = 3;
const var PANELSTARTY = 47;
const var CLOSEDPANELSIZE = 22;
const var OPENPANELSIZE = 421;

// UI widgets 

var VoicePanels = [];
var MuteButtons = [];
var VoiceBarNames = [];
var VoiceBarVolumes = [];
var PanelExpanders = [];

var PrevSounds = [];
var NextSounds = [];
var SampleMapNames = [];
var SampleMapSelectors = [];

var AudioWaveForms = [];

var VolumeKnobs = [];
var PanKnobs = [];
var PitchKnobs = [];
var VolumeModPanels = [];
var PanModPanels = [];
var PitchModPanels = [];

var FilterSelectors = [];
var FreqKnobs = [];
var ResKnobs = [];
var LFOSpeedKnobs = [];
var LFODepthKnobs = [];
var FreqModPanels = [];

var TriggerSelectors = [];
var EnvAttacks = [];
var EnvReleases = [];

var ShapeOnOffs = [];
var ShapeLocks = [];
var ShapeSelectors = [];
var ShapeDrives = [];
var ShapeBiass = [];

var ReverbOnOffs = [];
var ReverbSelectors = [];
var ReverbWets = [];
var ReverbDrys = [];

var DelayOnOffs = [];
var DelayTimes = [];
var DelayFeedbacks = [];
var DelayMixes = [];

var CompOnOffs = [];
var CompThresholds = [];
var CompRatios = [];
var CompAttacks = [];
var CompReleases = [];

// internal element arrays

var TheMidiMuters = [];
var TheGainVelocities = [];
var TheGainEnvelopes = [];
var TheGainLFOs = [];

var ThePitchConstants = [];
var ThePitchVelocities = [];
var ThePitchEnvelopes = [];
var ThePitchLFOs = [];
var ThePitchIRREs = [];


var TheFilters = [];
var TheFreqVelocities = [];
var TheFreqEnvelopes = [];
var TheFreqLFOs = [];

var ThePolyShapes = [];
var TheReverbs = [];
var TheDelays = [];
var TheComps = [];
var TheIRREEQs = [];
var TheGains = [];



// place ui widgets in their arrays

for (idx = 0; idx < NUM_VOICES; idx++)
{
    VoicePanels[idx] = Content.getComponent("VoicePanel" + (idx+1));
    MuteButtons[idx] = Content.getComponent("MuteButton" + (idx+1));
    MuteButtons[idx].setControlCallback(onMuteButton);
    PanelExpanders[idx] = Content.getComponent("OpenCloseButton" + (idx+1));
    PanelExpanders[idx].setControlCallback(onPanelExpander);
    VoiceBarNames[idx] = Content.getComponent("DisplayNameVoice" + (idx+1));
    VoiceBarVolumes[idx] = Content.getComponent("VolumeBarVoice" + (idx+1));
    VoiceBarVolumes[idx].setControlCallback(onVoiceBarVolume);
    
    PrevSounds[idx] = Content.getComponent("PrevSound" + (idx+1));
    PrevSounds[idx].setControlCallback(onPrevSound);
    NextSounds[idx] = Content.getComponent("NextSound" + (idx+1));
    NextSounds[idx].setControlCallback(onNextSound);
    SampleMapNames[idx] = Content.getComponent("SampleMapNameVoice" + (idx+1));
    SampleMapSelectors[idx] = Content.getComponent("SampleMapSelectorVoice" + (idx+1));
    SampleMapSelectors[idx].setControlCallback(onSampleMapSelector);
    
    AudioWaveForms[idx] = Content.getComponent("AudioWaveform" + (idx+1));
    
    VolumeKnobs[idx] = Content.getComponent("VolumeKnob" + (idx+1));
    VolumeKnobs[idx].setControlCallback(onVolumeKnob);
    PanKnobs[idx] = Content.getComponent("PanKnob" + (idx+1));
    PanKnobs[idx].setControlCallback(onPanKnob);
    PitchKnobs[idx] = Content.getComponent("PitchKnob" + (idx+1));
    PitchKnobs[idx].setControlCallback(onPitchKnob);
    
    VolumeModPanels[idx] = Content.getComponent("VolumeModPanel" + (idx+1));
    VolumeModPanels[idx].setMouseCallback(onVolumeModPanel);
    PanModPanels[idx] = Content.getComponent("PanModPanel" + (idx+1));
    PanModPanels[idx].setMouseCallback(onPanModPanel);
    PitchModPanels[idx] = Content.getComponent("PitchModPanel" + (idx+1));
    PitchModPanels[idx].setMouseCallback(onPitchModPanel);
    
    FilterSelectors[idx] = Content.getComponent("FilterSelector" + (idx+1));
    FilterSelectors[idx].setControlCallback(onFilterSelector);
    FreqKnobs[idx] = Content.getComponent("FreqKnob" + (idx+1));
    FreqKnobs[idx].setControlCallback(onFreqKnob);
    ResKnobs[idx] = Content.getComponent("ResKnob" + (idx+1));
    ResKnobs[idx].setControlCallback(onResKnob);
    LFOSpeedKnobs[idx] = Content.getComponent("LFOSpeedKnob" + (idx+1));
    LFOSpeedKnobs[idx].setControlCallback(onLFOSpeedKnob);
    LFODepthKnobs[idx] = Content.getComponent("LFODepthKnob" + (idx+1));
    LFODepthKnobs[idx].setControlCallback(onLFOdepthKnob);
    FreqModPanels[idx] = Content.getComponent("FreqModPanel" + (idx+1));
    FreqModPanels[idx].setMouseCallback(onFreqModPanel);
    
    TriggerSelectors[idx] = Content.getComponent("TriggerSelector" + (idx+1));
    TriggerSelectors[idx].setControlCallback(onTriggerSelector);
    EnvAttacks[idx] = Content.getComponent("EnvelopeAttack" + (idx+1));
    EnvAttacks[idx].setControlCallback(onEnvAttack);
    EnvReleases[idx] = Content.getComponent("EnvelopeRelease" + (idx+1));
    EnvReleases[idx].setControlCallback(onEnvRelease);

    ShapeOnOffs[idx] = Content.getComponent("ShapeOnOff" + (idx+1));
    ShapeOnOffs[idx].setControlCallback(onShapeOnOff);
    ShapeLocks[idx] = Content.getComponent("ShapeLock" + (idx+1));
    ShapeLocks[idx].setControlCallback(onShapeLock);
    ShapeSelectors[idx] = Content.getComponent("CurveSelector" + (idx+1));
    ShapeSelectors[idx].setControlCallback(onShapeSelector);
    ShapeDrives[idx] = Content.getComponent("DriveKnob" + (idx+1));
    ShapeDrives[idx].setControlCallback(onShapeDrive);
    ShapeBiass[idx] = Content.getComponent("BiasKnob" + (idx+1));
    ShapeBiass[idx].setControlCallback(onShapeBias);

    ReverbOnOffs[idx] = Content.getComponent("ReverbOnOff" + (idx+1));
    ReverbOnOffs[idx].setControlCallback(onReverbOnOff);
    ReverbSelectors[idx] = Content.getComponent("ImpulseSelector" + (idx+1));
    ReverbSelectors[idx].setControlCallback(onReverbSelector);
    ReverbWets[idx] = Content.getComponent("ReverbWetKnob" + (idx+1));
    ReverbWets[idx].setControlCallback(onReverbWet);
    ReverbDrys[idx] = Content.getComponent("ReverbDryKnob" + (idx+1));
    ReverbDrys[idx].setControlCallback(onReverbDry);

    DelayOnOffs[idx] = Content.getComponent("DelayOnOff" + (idx+1));
    DelayOnOffs[idx].setControlCallback(onDelayOnOff);
    DelayTimes[idx] = Content.getComponent("DelayTimeKnob" + (idx+1));
    DelayTimes[idx].setControlCallback(onDelayTime);
    DelayFeedbacks[idx] = Content.getComponent("DelayFeedbackKnob" + (idx+1));
    DelayFeedbacks[idx].setControlCallback(onDelayFeedback);
    DelayMixes[idx] = Content.getComponent("DelayMixKnob" + (idx+1));
    DelayMixes[idx].setControlCallback(onDelayMix);

    CompOnOffs[idx] = Content.getComponent("CompOnOff" + (idx+1));
    CompOnOffs[idx].setControlCallback(onCompOnOff);
    CompThresholds[idx] = Content.getComponent("CompThresholdKnob" + (idx+1));
    CompThresholds[idx].setControlCallback(onCompThreshold);
    CompRatios[idx] = Content.getComponent("CompRatioKnob" + (idx+1));
    CompRatios[idx].setControlCallback(onCompRatio);
    CompAttacks[idx] = Content.getComponent("CompAttackKnob" + (idx+1));
    CompAttacks[idx].setControlCallback(onCompAttack);
    CompReleases[idx] = Content.getComponent("CompReleaseKnob" + (idx+1));
    CompReleases[idx].setControlCallback(onCompRelease);


    // ----------- THE internal blocks
    TheMidiMuters[idx] = Synth.getMidiProcessor("MidiMuter" + (idx+1));
    TheGainVelocities[idx] = Synth.getModulator("GainVelocity" + (idx+1));
    TheGainEnvelopes[idx] = Synth.getModulator("GainEnvelope" + (idx+1));
    TheGainLFOs[idx] = Synth.getModulator("GainLFO" + (idx+1));

    ThePitchConstants[idx] = Synth.getModulator("PitchConstant" + (idx+1));
    ThePitchVelocities[idx] = Synth.getModulator("PitchVelocity" + (idx+1));
    ThePitchEnvelopes[idx] = Synth.getModulator("PitchEnvelope" + (idx+1));
    ThePitchLFOs[idx] = Synth.getModulator("PitchLFO" + (idx+1));
    ThePitchIRREs[idx] = Synth.getModulator("IRREPitch" + (idx+1));

    TheFilters[idx] = Synth.getEffect("Filter" + (idx+1));
    TheFreqVelocities[idx] = Synth.getModulator("FreqVelocity" + (idx+1));
    TheFreqEnvelopes[idx] = Synth.getModulator("FreqEnvelope" + (idx+1));
    TheFreqLFOs[idx] = Synth.getModulator("FreqLFO" + (idx+1));

    ThePolyShapes[idx] = Synth.getEffect("Polyshape" + (idx+1));
    TheReverbs[idx] = Synth.getAudioSampleProcessor("ConvolutionReverb" + (idx+1));
    TheDelays[idx] = Synth.getEffect("Delay" + (idx+1));
    TheComps[idx] = Synth.getEffect("Comp" + (idx+1));
    TheIRREEQs[idx] = Synth.getEffect("IRREEQ" + (idx+1));
    TheGains[idx] = Synth.getEffect("Gain" + (idx+1));
};



// The UI call backs           ---   VOICE LEVEL CALL BACKS   ---

inline function onPanelExpander(component, value)
{
	//Add your custom logic here...
	setVoicePositions();
};

inline function onMuteButton(component, value)
{

    for (i=0;i < NUM_VOICES;i++)
    {
        if (component == MuteButtons[i]){
            TheMidiMuters[i].setAttribute(0, value);
        };
    };
}


inline function onVoiceBarVolume(component, value)
{

    for (i=0;i < NUM_VOICES;i++)
    {
        if (component == VoiceBarVolumes[i]){
            VolumeKnobs[i].setValue(value);
            VolumeKnobs[i].changed();
            
        };
    };
};

// ---- the smaple map seleting call backs go here.....

inline function onVolumeKnob(component, value)
{

    for (i=0;i < NUM_VOICES;i++)
    {
        if (component == VolumeKnobs[i]){
            VoiceBarVolumes[i].setValue(value);
            TheGains[i].setAttribute(TheGains[i].Gain, value);
        };
    };
};


inline function onPanKnob(component, value)
{

    for (i=0;i < NUM_VOICES;i++)
    {
        if (component == PanKnobs[i]){
            TheGains[i].setAttribute(TheGains[i].Balance, value);
        };
    };
};


inline function onPitchKnob(component, value)
{

    for (i=0;i < NUM_VOICES;i++)
    {
        if (component == PitchKnobs[i]){
            ThePitchConstants[i].setIntensity(value);
        };
    };
};


inline function onFilterSelector(component, value)
{
	//set the filter type
	for (i=0;i < NUM_VOICES;i++)
    {
        if (component == FilterSelectors[i])
        {
            switch (value) 
            {
              case 1:
                TheFilters[i].setAttribute(TheFilters[i].Mode, 6);
                break;
              case 2:
                TheFilters[i].setAttribute(TheFilters[i].Mode, 7);
                break;
              case 3:
                TheFilters[i].setAttribute(TheFilters[i].Mode, 12);
                break;
              case 4:
                TheFilters[i].setAttribute(TheFilters[i].Mode, 13);
                break;
              case 5:
                TheFilters[i].setAttribute(TheFilters[i].Mode, 9);
                break;
              case 6:
                TheFilters[i].setAttribute(TheFilters[i].Mode, 10);
                break;
              case 7:
                TheFilters[i].setAttribute(TheFilters[i].Mode, 0);
                break;
              case 8:
                TheFilters[i].setAttribute(TheFilters[i].Mode, 5);
                break;
              case 9:
                TheFilters[i].setAttribute(TheFilters[i].Mode, 1);
                break;
              case 10:
                TheFilters[i].setAttribute(TheFilters[i].Mode, 15);
                break;
            };
        };
    };
};




inline function onFreqKnob(component, value)
{

    for (i=0;i < NUM_VOICES;i++)
    {
        if (component == FreqKnobs[i]){
            TheFilters[i].setAttribute(TheFilters[i].Frequency,value);
        };
    };
};


inline function onResKnob(component, value)
{

    for (i=0;i < NUM_VOICES;i++)
    {
        if (component == ResKnobs[i]){
            TheFilters[i].setAttribute(TheFilters[i].Q,value);
        };
    };
};

// The UI call backs           ---   MASTER CALL BACKS   ---



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
 