const var ContentHeight = 691;
const var ContentWidth = 800;
Content.makeFrontInterface(ContentWidth, ContentHeight);

Engine.loadAudioFilesIntoPool();


//=========OBJETX============

namespace aSnapshot
{
    
    inline function newSnapshotSet(s1,s2,s3)
    {
        local obj = {};
        obj.snap1 = s1;
        obj.snap2 = s2;
        obj.snap3 = s3;
        
        return obj;
    }
    
    inline function newSnapshot(v1,v2,v3)
    {
        local obj = {};
        obj.voice1 = v1;
        obj.voice2 = v2;
        obj.voice3 = v3;
        
        return obj;
    }
    
    inline function loadASnapshot(snap)
    {
        aSnapshot.loadVoiceShot(snap.voice1,0);
        aSnapshot.loadVoiceShot(snap.voice2,1);
        aSnapshot.loadVoiceShot(snap.voice3,2);
    }
    
    
    inline function newVoiceShotObj(s)
    {
        local obj = {};
        obj.mute = MuteButtons[s].getValue();
        obj.filter = FilterSelectors[s].getValue();
        obj.trigger = TriggerSelectors[s].getValue();
        //Console.print("Trigger:" + s + " Value:" + obj.trigger);
        obj.volume = VolumeKnobs[s].getValue();
        obj.pan = PanKnobs[s].getValue();
        obj.pitch = PitchKnobs[s].getValue();
        obj.filterOnOff = FilterOnOffs[s].getValue();
        obj.filterFreq = FreqKnobs[s].getValue();
        obj.filterRes = ResKnobs[s].getValue();
        obj.shapeOnOff = ShapeOnOffs[s].getValue();
        obj.shapeCurve = ShapeSelectors[s].getValue();
        obj.shapeDrive = ShapeDrives[s].getValue();
        obj.shapeBias = ShapeBiass[s].getValue();
        obj.reverbOnOff = ReverbOnOffs[s].getValue();
        obj.reverbImpulse = ReverbSelectors[s].getValue();
        obj.reverbWet = ReverbWets[s].getValue();
        obj.reverbDry = ReverbDrys[s].getValue();
        obj.delayOnOff = DelayOnOffs[s].getValue();
        obj.delayTime = DelayTimes[s].getValue();
        obj.delayFeedback = DelayFeedbacks[s].getValue();
        obj.delayMix = DelayMixes[s].getValue();
        obj.compressorOnOff = CompOnOffs[s].getValue();
        obj.compressorThreshold = CompThresholds[s].getValue();
        obj.compressorRatio = CompRatios[s].getValue();
        obj.compressorAttack = CompAttacks[s].getValue();
        obj.compressorRelease = CompReleases[s].getValue();
        obj.FMDepth = FMDepths[s].getValue();
        obj.FMOctave = FMOctaves[s].getValue();
        return obj;
    };
    inline function loadVoiceShot(obj,v)
    {
        MuteButtons[v].setValue(obj.mute);
        FilterSelectors[v].setValue(obj.filter);
        TriggerSelectors[v].setValue(obj.trigger);
        //Console.print("Loading trigger:" + v + " with value:" + obj.trigger);
        VolumeKnobs[v].setValue(obj.volume);
        PanKnobs[v].setValue(obj.pan);
        PitchKnobs[v].setValue(obj.pitch);
        FilterOnOffs[v].setValue(obj.filterOnOff);
        FreqKnobs[v].setValue(obj.filterFreq);
        ResKnobs[v].setValue(obj.filterRes);
        ShapeOnOffs[v].setValue(obj.shapeOnOff);
        ShapeSelectors[v].setValue(obj.shapeCurve);
        ShapeDrives[v].setValue(obj.shapeDrive);
        ShapeBiass[v].setValue(obj.shapeBias);
        ReverbOnOffs[v].setValue(obj.reverbOnOff);
        ReverbSelectors[v].setValue(obj.reverbImpulse);
        ReverbWets[v].setValue(obj.reverbWet);
        ReverbDrys[v].setValue(obj.reverbDry);
        DelayOnOffs[v].setValue(obj.delayOnOff);
        DelayTimes[v].setValue(obj.delayTime);
        DelayFeedbacks[v].setValue(obj.delayFeedback);
        DelayMixes[v].setValue(obj.delayMix);
        CompOnOffs[v].setValue(obj.compressorOnOff);
        CompThresholds[v].setValue(obj.compressorThreshold);
        CompRatios[v].setValue(obj.compressorRatio);
        CompAttacks[v].setValue(obj.compressorAttack);
        CompReleases[v].setValue(obj.compressorRelease);
        FMDepths[v].setValue(obj.FMDepth);
        FMOctaves[v].setValue(obj.FMOctave);
        
        MuteButtons[v].changed();
        FilterSelectors[v].changed();
        TriggerSelectors[v].changed();
        VolumeKnobs[v].changed();
        PanKnobs[v].changed();
        PitchKnobs[v].changed();
        FilterOnOffs[v].changed();
        FreqKnobs[v].changed();
        ResKnobs[v].changed();
        ShapeOnOffs[v].changed();
        ShapeSelectors[v].changed();
        ShapeDrives[v].changed();
        ShapeBiass[v].changed();
        ReverbOnOffs[v].changed();
        ReverbSelectors[v].changed();
        ReverbWets[v].changed();
        ReverbDrys[v].changed();
        DelayOnOffs[v].changed();
        DelayTimes[v].changed();
        DelayFeedbacks[v].changed();
        DelayMixes[v].changed();
        CompOnOffs[v].changed();
        CompThresholds[v].changed();
        CompRatios[v].changed();
        CompAttacks[v].changed();
        CompReleases[v].changed();
        FMDepths[v].changed();
        FMOctaves[v].changed();
        
    };
    
    
    
    inline function updateAVoice(v)
    {
        if (!loadingSnapshot)
        {
            local myVoice = aSnapshot.newVoiceShotObj(v);
            local mySnap;
            //Console.print("set:" + trace(SnapShotSet));
            switch (currentSnap){
                case 1:
                    if (typeof SnapShotSet.snap1 == "object")
                        mySnap = SnapShotSet.snap1;
                    break;
                case 2:
                    if (typeof SnapShotSet.snap2 == "object")
                        mySnap = SnapShotSet.snap2;
                    break;
                case 3:
                    if (typeof SnapShotSet.snap3 == "object")
                        mySnap = SnapShotSet.snap3;
                    break;
                    
            };

            if (typeof mySnap == "object")
            {
                switch (v){
                    case 0:
                        mySnap.voice1 = myVoice;
                        break;
                    case 1:
                        mySnap.voice2 = myVoice;
                        break;
                    case 2:
                        mySnap.voice3 = myVoice;
                        break;
                };
            };
        
            /* Console.print(" ---post update-------------------" + currentSnap);
            Console.print("Voice 1 trigger is:" + mySnap.voice1.trigger);
            Console.print("Voice 2 trigger is:" + mySnap.voice2.trigger);
            Console.print("Voice 3 trigger is:" + mySnap.voice3.trigger);
            */
            if (typeof mySnap == "object")
            {
                SnapshotPanel.setValue(SnapShotSet);
            }
        
            //Console.print("my set is........"+ trace(SnapShotSet));
        }
    };
    
}



// ====== GENERAL FUNCTIONS ==========
//====================================
inline function setVoicePositions()
{
 
    for (pdx = 0; pdx < NUM_VOICES; pdx++)
    {
        //Console.print("checking panel state for panel" + pdx + " value is:" + PanelExpanders[pdx].getValue());
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
    VoicePanels[3].set("y",PANELSTARTY  + (VoicePanels[0].get("height")+ VoicePanels[1].get("height")+ VoicePanels[2].get("height")));
        

};




function loadVoiceByName(voiceNumber, voiceName)
{
    
    //
    //Console.print("trying to change voice num:" + voiceNumber + " to:" + voiceName);
    //Console.print("trying to load:" + voiceName);
    TheSamplers[voiceNumber].asSampler().loadSampleMap(voiceName);
    Console.print(voiceNumber + "--setting the index to 1 for Audiowaveform:" + AudioWaveForms[voiceNumber]);
    AudioWaveForms[voiceNumber].set("sampleIndex", 1);
    VoicePanels[voiceNumber].startTimer(500);
};

function loadVoice(voiceNum,selectedCategory,selectedVoice)
{
    //set voice
    var selectedName;
    var trimmedName;
    selectedName = Maps[selectedCategory][selectedVoice];
    
    if (selectedName.substring(0,3) == "(*)"){
        //Console.print("found a favourite");
        VoiceFavouritesButton.setValue(1);
        trimmedName = selectedName.substring(3,selectedName.length);
    }else{
        VoiceFavouritesButton.setValue(0);
        trimmedName = selectedName;
    };
    //Console.print("in load voice:" + trimmedName);
    

    SampleMapNames[voiceNum].set("text",trimmedName);
    SampleMapNames[voiceNum].changed();
    VoiceBarNames[voiceNum].set("text",trimmedName);
    

    
    //loadVoiceByName(voiceNum, trimmedName);
    // TheSamplers[voiceNum].asSampler().loadSampleMap(trimmedName);
    
};

inline function setShape(voice,shape)  // sets the curve of the voice shaper
{
    switch (shape){
      case 1:
        ThePolyShapes[voice].setAttribute(ThePolyShapes[voice].Mode, 1);
        break;
      case 2:
        ThePolyShapes[voice].setAttribute(ThePolyShapes[voice].Mode, 2);
        break;
      case 3:
        ThePolyShapes[voice].setAttribute(ThePolyShapes[voice].Mode, 4);
        break;
      case 4:
        ThePolyShapes[voice].setAttribute(ThePolyShapes[voice].Mode, 5);
        break;
      case 5:
        ThePolyShapes[voice].setAttribute(ThePolyShapes[voice].Mode, 9);
        break;
	  
    };
};


inline function setFilter(voice,type)
{
    switch (type) 
    {
      case 1:
        TheFilters[voice].setAttribute(TheFilters[voice].Mode, 6);
        break;
      case 2:
        TheFilters[voice].setAttribute(TheFilters[voice].Mode, 7);
        break;
      case 3:
        TheFilters[voice].setAttribute(TheFilters[voice].Mode, 12);
        break;
      case 4:
        TheFilters[voice].setAttribute(TheFilters[voice].Mode, 13);
        break;
      case 5:
        TheFilters[voice].setAttribute(TheFilters[voice].Mode, 9);
        break;
      case 6:
        TheFilters[voice].setAttribute(TheFilters[voice].Mode, 10);
        break;
      case 7:
        TheFilters[voice].setAttribute(TheFilters[voice].Mode, 0);
        break;
      case 8:
        TheFilters[voice].setAttribute(TheFilters[voice].Mode, 5);
        break;
      case 9:
        TheFilters[voice].setAttribute(TheFilters[voice].Mode, 1);
        break;
      case 10:
        TheFilters[voice].setAttribute(TheFilters[voice].Mode, 15);
        break;
    };
}

inline function setIRs(voice,irnum)
{
  switch(irnum)
        {
         case 1:
                TheReverbs[voice].setFile("{PROJECT_FOLDER}BathRoom 1_5 Seconds.wav");
                break;
         case 2:
                TheReverbs[voice].setFile("{PROJECT_FOLDER}BathRoom 2_5 Seconds.wav");
                break;
         case 3:
                TheReverbs[voice].setFile("{PROJECT_FOLDER}BathRoom 3_5 Seconds.wav");
                break;
         case 4:
                TheReverbs[voice].setFile("{PROJECT_FOLDER}Factory 1_5 Seconds.wav");
                break;
         case 5:
                TheReverbs[voice].setFile("{PROJECT_FOLDER}Factory 2_5 Seconds.wav");
                break;
         case 6:
                TheReverbs[voice].setFile("{PROJECT_FOLDER}Factory 3_5 Seconds.wav");
                break;
         case 7:
                TheReverbs[voice].setFile("{PROJECT_FOLDER}Room 0_4 Seconds.wav");
                break;
         case 8:
                TheReverbs[voice].setFile("{PROJECT_FOLDER}Room 1_5 Seconds.wav");
                break;
         case 9:
                TheReverbs[voice].setFile("{PROJECT_FOLDER}Room 2_5 Seconds.wav");
                break;
         case 10:
                TheReverbs[voice].setFile("{PROJECT_FOLDER}Room 3_5 Seconds.wav");
                break;
         case 11:
                TheReverbs[voice].setFile("{PROJECT_FOLDER}Room 4_4 Seconds.wav");
                break;
         case 12:
                TheReverbs[voice].setFile("{PROJECT_FOLDER}Room 5_5 Seconds.wav");
                break;
         case 13:
                TheReverbs[voice].setFile("{PROJECT_FOLDER}Room 6_5 Seconds.wav");
                break;
        };
};


inline function randVoiceParams(voc){
    VolumeKnobs[voc].setValue((Math.random()*26)-20);
    VolumeKnobs[voc].changed();
            
    PitchKnobs[voc].setValue((Math.random()*8)-4);
    PitchKnobs[voc].changed();
            
    FilterOnOffs[voc].setValue(Math.round(Math.random()));
    FilterOnOffs[voc].changed();
            
    FreqKnobs[voc].setValue(Math.round(Math.random()*1400)+25);
    FreqKnobs[voc].changed();
            
    ShapeOnOffs[voc].setValue(Math.round(Math.random()));
    ShapeOnOffs[voc].changed();
            
    ShapeDrives[voc].setValue((Math.random()*26)+14);
    ShapeDrives[voc].changed();
            
    ReverbOnOffs[voc].setValue(Math.round(Math.random()));
    ReverbOnOffs[voc].changed();
            
    if(Math.random() > 0.7)
    {
        DelayOnOffs[voc].setValue(Math.round(Math.random()));
    }else{
        DelayOnOffs[voc].setValue(0);
    };
    DelayOnOffs[voc].changed();
            
    CompOnOffs[voc].setValue(Math.round(Math.random()));
    CompOnOffs[voc].changed();
}









    
//--------------------------------------------------------
function paintKeys()
{
    var kdx;
    for (kdx = 0;kdx <128; kdx++)
    {
        Engine.setKeyColour(kdx, KEY_DARK);
        if (kdx == MIDINoteTarget)
            Engine.setKeyColour(kdx, KEY_TARGET);
        if (kdx == MIDINoteTarget + 1)
            if (Snapshot1OnOff.getValue() == 1)
            {
                Engine.setKeyColour(kdx, KEY_SNAPON);
            }else{
                Engine.setKeyColour(kdx, KEY_SNAPOFF);
            };
        if (kdx == MIDINoteTarget + 2)
            if (SnapshotOnOff2.getValue() == 1)
            {
                Engine.setKeyColour(kdx, KEY_SNAPON);
            }else{
                Engine.setKeyColour(kdx, KEY_SNAPOFF);
            };
        if (kdx == MIDINoteTarget + 3)
            if (SnapshotOnOff3.getValue() == 1)
            {
                Engine.setKeyColour(kdx, KEY_SNAPON);
            }else{
                Engine.setKeyColour(kdx, KEY_SNAPOFF);
            };
    }; 
};
    

// CONSTANTS

const var NUM_VOICES = 3;
const var NUM_PATTERNS = 8;
const var NUM_STEPS = 16;
const var PANELSTARTY = 4;
const var CLOSEDPANELSIZE = 22;
const var OPENPANELSIZE = 421;
const var MOD_OFF_COLOUR = 0xFF666666;
const var MOD_ON_COLOUR = 0xFF4AA025;
const var KEY_DARK = 0x88112211;
const var KEY_TARGET = 0xFF44BB44;
const var KEY_SNAPON = 0xFFFF8400;
const var KEY_SNAPOFF = 0x66FF8400;
const var KEY_PATTERN = 0x88BBBB44;
const var patternSwitches = [72,73,74,75,76,77,78,79];
const var PLAY_STOP_SWITCH = 69;
// GENERAL VARIABLES
var targetVelocity;
var targetModulator;
var targetLFO;
var targetVoice;
var targetType;
var currentSelectingVoice;
var playingPattern;
var currentSelectingPattern;
var currentSelectingModulatorVoice;
var currentSelectingModulatorSlot;
var list = [];
var MIDINoteTarget;



const var myPresetName = Content.getComponent("myPresetName");
const var PresetFrame = Content.getComponent("PresetFrame");
PresetFrame.setTimerCallback(function()
{
    if (Engine.getCurrentUserPresetName() == "")
    {
        myPresetName.set("text","---");
    }else{
        myPresetName.set("text", Engine.getCurrentUserPresetName());
    };
}
);



// Velocity Row
function newVelocityRow(likelihood, valueArray)
{
    var myVelo = {
        likelihood:likelihood,
        velocityValues:valueArray
    };
    return myVelo;
};





// Mod Row
function newModRow(likelihood,mod, valueArray){
      var myModRow = {
        likelihood:likelihood,
        modSelection: mod,
        modValues: valueArray
  };
  return myModRow;
};

// FX Row
function newFXRow(likelihood, fx, selection,valueArray){
  var myFXRow = {
        likelihood:likelihood,
        fxTarget: fx,
        fxSelection: selection,
        fxValues: valueArray
  };
  return myFXRow;
};

// Pattern
function newPattern(stepCount, swingAmt, velRow, ModRowSet, FXRowSet)
{
    var myPattern = {
        stepCount: stepCount,
        swingAmount:swingAmt,
        velocityRow:velRow,
        ModRowSet:ModRowSet,
        FXRowSet:FXRowSet
    };
    return myPattern;
    
}


var myVeloRow = newVelocityRow(99,[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);
//Console.print(myVeloRow.likelihood);
//Console.print(myVeloRow.velocityValues[15]);
//myRow.velocityValues[0] = 2345;
//Console.print(myVeloRow.velocityValues[0]);


// UI widgets 

// The Header widgets

const var Randomise = Content.getComponent("Randomise");



// the voice widgets
var VoicePanels = [];
var MuteButtons = [];
var VoiceBarNames = [];
var VoiceBarVolumes = [];
var PanelExpanders = [];
var VoiceAllRandButtons = [];
var VoiceInCatRandButtons = [];


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

var FilterOnOffs = [];
var FilterSelectors = [];
var FilterLocks = [];
var FreqKnobs = [];
var ResKnobs = [];
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
var ReverbLocks = [];
var ReverbSelectors = [];
var ReverbWets = [];
var ReverbDrys = [];

var DelayOnOffs = [];
var DelayLocks = [];
var DelayTimes = [];
var DelayFeedbacks = [];
var DelayMixes = [];

var CompOnOffs = [];
var CompLocks = [];
var CompThresholds = [];
var CompRatios = [];
var CompAttacks = [];
var CompReleases = [];
var FMDepths = [];
var FMOctaves = [];

const var MIDISelector = Content.getComponent("MIDISelector");


// internal element arrays

var TheSamplers = [];
var TheMidiMuters = [];
var TheGainVelocities = [];
var TheGainEnvelopes = [];
var TheGainEnvDefaults = [];
var TheGainLFOs = [];


var ThePanLFOs = [];

var ThePitchConstants = [];
var ThePitchVelocities = [];
var ThePitchModulators = [];
var ThePitchLFOs = [];
var ThePitchIRREs = [];


var TheFilters = [];
var TheFreqVelocities = [];
var TheFreqModulators = [];
var TheFreqLFOs = [];

var ThePolyShapes = [];
var TheReverbs = [];
var TheDelays = [];
var TheComps = [];
var TheIRREEQs = [];
var TheGains = [];
var FMConstants = [];
var SineWaveGenerators =[];

const var MasterGain = Synth.getEffect("MasterGain");


// the panels and their widgets
const var AllVoicesPanel = Content.getComponent("AllVoicesPanel");


const var VelocityTableVol = Content.getComponent("VelocityTableVol");
const var EnvelopeTileVol = Content.getComponent("EnvelopeTileVol");
const var LFOTableVol = Content.getComponent("LFOTableVol");
const var VelocityOnOffVol = Content.getComponent("VelocityOnOffVol");
const var VelocityDepthKnobVol = Content.getComponent("VelocityDepthKnobVol");
const var EnvelopeOnOffol = Content.getComponent("EnvelopeOnOffVol");
const var EnvelopeAmountKnobVol = Content.getComponent("EnvelopeAmountKnobVol");
const var EnvelopeAttackKnobVol = Content.getComponent("EnvelopeAttackKnobVol");
const var EnvelopeDecayKnobVol = Content.getComponent("EnvelopeDecayKnobVol");
const var EnvelopeSustainKnobVol = Content.getComponent("EnvelopeSustainKnobVol");
const var EnvelopeReleaseKnobVol = Content.getComponent("EnvelopeReleaseKnobVol");
const var LFOOnOffVol = Content.getComponent("LFOOnOffVol");
const var LFOSpeedKnobVol = Content.getComponent("LFOSpeedKnobVol");
const var LFODepthKnobVol = Content.getComponent("LFODepthKnobVol");




const var VoiceSelectorPanel = Content.getComponent("VoiceSelectorPanel");
const var DialogName = Content.getComponent("DialogName");



// MAP Management

const var CAT_COUNT = 16;
var Maps = [];
var Array808 = ["808_Kick01","808_Kick02","808_Kick03","808_Kick04","808_Kick05","808_Kick06","808_Kick07","808_Kick08","808_Kick09","808_Kick10","808_Kick11","808_Kick12","808_Kick13","808_Kick14","808_Kick15","808_Kick16"];
var Array909 = ["909_Bd01","909_Bd02","909_Bd03","909_Bd04","909_Bd05","909_Bd06","909_Bd07","909_Bd08","909_Bd09","909_Bd10","909_Bd11","909_Bd12","909_Bd13","909_Bd14","909_Bd15","909_Bd16","909_Bd17","909_Bd18","909_Bd19","909_Bd20","909_Bd21","909_Bd22","909_Bd23","909_Bd24","909_Bd25","909_Bd26","909_Bd27","909_Bd28","909_Bd29","909_Bd30","909_BDRUM1","909_BDRUM10","909_BDRUM11","909_BDRUM12","909_BDRUM13","909_BDRUM14","909_BDRUM15","909_BDRUM16","909_BDRUM17","909_BDRUM2","909_BDRUM3","909_BDRUM4","909_BDRUM5","909_BDRUM6","909_BDRUM7","909_BDRUM8","909_BDRUM9","909_BT0A0A7","909_BT0A0D0","909_BT0A0D3","909_BT0A0DA","909_BT0AAD0","909_BT0AADA","909_BT3A0D0","909_BT3A0D3","909_BT3A0D7","909_BT3A0DA","909_BT3AAD0","909_BT3AADA","909_BT7A0D0","909_BT7A0D3","909_BT7A0D7","909_BT7A0DA","909_BT7AAD0","909_BT7AADA","909_BTAA0D0","909_BTAA0D3","909_BTAA0D7","909_BTAA0DA","909_BTAAAD0","909_BTAAADA"];
var ArrayAccess = ["Access_B_01","Access_B_02","Access_B_03","Access_B_04","Access_B_05","Access_B_06","Access_B_07","Access_B_08","Access_B_09","Access_B_10","Access_B_11","Access_B_12","Access_B_13","Access_B_14","Access_B_15","Access_B_16","Access_B_17","Access_B_18","Access_B_19","Access_B_20","Access_B_21","Access_B_22","Access_B_23","Access_B_24","Access_B_25","Access_B_26","Access_B_27","Access_B_28","Access_B_29","Access_B_30","Access_TI_B10110","Access_TI_B103103","Access_TI_B1141114","Access_TI_B124124","Access_TI_B1351315","Access_TI_B145145","Access_TI_B1561516","Access_TI_B166166","Access_TI_B1771717","Access_TI_B187187","Access_TI_B1981918","Access_TI_B20220","Access_TI_B208208","Access_TI_B2192119","Access_TI_B229229","Access_TI_B3131","Access_TI_B41411","Access_TI_B51521","Access_TI_B62612","Access_TI_B7272","Access_TI_B82822","Access_TI_B93913","Access_TI_K23i23ckO"];
var ArrayAcoustic = ["Acc_24Dry","Acc_2HeadHi","Acc_2HeadLo","Acc_2HedMed1","Acc_2HedMed2","Acc_aftty1","Acc_aftty2","Acc_basc1","Acc_basc2","Acc_Basic","Acc_BigSofty","Acc_bonzo2","Acc_Bottom","Acc_Bushy","Acc_DRY 1","Acc_DRY 2","Acc_DRY 3","Acc_DRY 4","Acc_DRYB1","Acc_ersko1","Acc_evolvr","Acc_GATE1","Acc_GATE2","Acc_GateM","Acc_GMH","Acc_GMJ","Acc_GML","Acc_GMM","Acc_GMM2","Acc_GrCMute","Acc_GrnCassa","Acc_KONG1","Acc_MapleA20","Acc_MapleAmb","Acc_MapleV20","Acc_Metal","Acc_MONDO","Acc_NN04C","Acc_palmer","Acc_Pointy","Acc_Rock1","Acc_Rock2","Acc_ROOM2","Acc_ROOM3","Acc_ROOM4","Acc_ROOM5","Acc_Roomy","Acc_Soft","Acc_SoTight","Acc_stomp1","Acc_VeloRoom","Acc_vman","Acc_WudPoint"];
var ArrayAkai = ["Akai_021","Akai_421 F11f1 Mx1","Akai_Atm M22f2 Mx1","Akai_MPC21884b8","Akai_MPC21995b9","Akai_MPC2_1555","Akai_MPC2_2666","Akai_MPC2_3777","Akai_MPC5011339132","Akai_MPC507111111","Akai_MPC508121212","Akai_MPC50M1010106x2","Akai_MPCF_11515151","Akai_MPCF_11616162","Akai_MPCRo11717173","Akai_MPCX_11818184","Akai_MPC_11144014","Akai_Smmon44s_4 3","Akai_V3nyl33","kai_XR10_0191919151","Akai_XR10_0202020163","Akai_XR10_0212121174","Akai_XR10_0222222185","Akai_XR10_0232323196","Akai_XR10_0242424207","Akai_XR10_0252525218","Akai_XR10_0262626229","Akai_XR10_1272727230"];
var ArrayAlesis = ["Alesis_Kick101","Alesis_Kick1010","Alesis_Kick1111","Alesis_Kick1212","Alesis_Kick1313","Alesis_Kick1414","Alesis_Kick1515","Alesis_Kick1616","Alesis_Kick1717","Alesis_Kick1818","Alesis_Kick1919","Alesis_Kick202","Alesis_Kick2020","Alesis_Kick2121","Alesis_Kick2222","Alesis_Kick2323","Alesis_Kick2424","Alesis_Kick2525","Alesis_Kick2626","Alesis_Kick2727","Alesis_Kick2828","Alesis_Kick2929","Alesis_Kick303","Alesis_Kick3030","Alesis_Kick3131","Alesis_Kick3232","Alesis_Kick3333","Alesis_Kick3434","Alesis_Kick3535","Alesis_Kick3636","Alesis_Kick3737","Alesis_Kick3838","Alesis_Kick3939","Alesis_Kick404","Alesis_Kick4040","Alesis_Kick4141","Alesis_Kick4242","Alesis_Kick4343","Alesis_Kick4444","Alesis_Kick4545","Alesis_Kick4646","Alesis_Kick4747","Alesis_Kick4848","Alesis_Kick4949","Alesis_Kick505","Alesis_Kick5050","Alesis_Kick5151","Alesis_Kick5252","Alesis_Kick5353","Alesis_Kick5454","Alesis_Kick5555","Alesis_Kick5656","Alesis_Kick5757","Alesis_Kick5858","Alesis_Kick5959","Alesis_Kick606","Alesis_Kick6060","Alesis_Kick6161","Alesis_Kick6262","Alesis_Kick6363","Alesis_Kick6464","Alesis_Kick6565","Alesis_Kick6666","Alesis_Kick6767","Alesis_Kick6868","Alesis_Kick6969","Alesis_Kick707","Alesis_Kick7070","Alesis_Kick7171","Alesis_Kick7272","Alesis_Kick7373","Alesis_Kick7474","Alesis_Kick7575","Alesis_Kick7676","Alesis_Kick7777","Alesis_Kick7878","Alesis_Kick7979","Alesis_Kick808","Alesis_Kick8080","Alesis_Kick8181","Alesis_Kick8282","Alesis_Kick8383","Alesis_Kick8484","Alesis_Kick8585","Alesis_Kick8686","Alesis_Kick8787","Alesis_Kick8888","Alesis_Kick8989","Alesis_Kick909","Alesis_Kick9090","Alesis_Kick9191","Alesis_Kick9292","Alesis_Kick9393","Alesis_Kick9494","Alesis_Kick9595"];
var ArrayClavia = ["Clava_ 909 1Down Fast","Clava_ 909 2Down","Clava_ 909 3Up","Clavia_MODular_k 1","Clavia_MODular_k 2","Clavia_MODular_k 3","Clavia_MODular_k 4","Clavia_MODular_k 5","Clavia_Mod_Kick"];
var ArrayElektron = ["Elektron_Kicks 0000","Elektron_Kicks 0001","Elektron_Kicks 0002","Elektron_Kicks 0003","Elektron_Kicks 0004","Elektron_Kicks 0005","Elektron_Kicks 0006","Elektron_Kicks 0007","Elektron_Kicks 0008","Elektron_Kicks 0009","Elektron_Kicks 0010","Elektron_Kicks 0011","Elektron_Kicks 0012","Elektron_Kicks 0013","Elektron_Kicks 0014","Elektron_Kicks 0015","Elektron_Kicks 0016","Elektron_Kicks 0017","Elektron_Kicks 0018","Elektron_Kicks 0019","Elektron_Kicks 0020","Elektron_Kicks 0021","Elektron_Kicks 0022","Elektron_Kicks 0023","Elektron_00214","Elektron_00225","Elektron_00236","Elektron_00247","Elektron_00258","Elektron_00269","Elektron_003103","Elektron_003114","Elektron_003125","Elektron_003136","Elektron_003147","Elektron_003158","Elektron_003169","Elektron_00370","Elektron_00381","Elektron_00392","Elektron_004170","Elektron_004181","Elektron_004192","Elektron_004203","Elektron_004214","Elektron_004225","Elektron_004236","Elektron_004247","Elektron_004258","Elektron_004269","Elektron_005270","Elektron_005281","Elektron_005292","Elektron_005303","Elektron_005314","Elektron_005325","Elektron_005336","Elektron_005347","Elektron_005358","Elektron_005369"];
var ArrayEnsoniq = ["Ensoniq_01","Ensoniq_02","Ensoniq_03","Ensoniq_04","Ensoniq_05","Ensoniq_06","Ensoniq_07","Ensoniq_08","Ensoniq_09","Ensoniq_10","Ensoniq_11","Ensoniq_12","Ensoniq_13","Ensoniq_14","Ensoniq_15","Ensoniq_16","Ensoniq_17","Ensoniq_18","Ensoniq_19","Ensoniq_20","Ensoniq_21","Ensoniq_22","Ensoniq_23","Ensoniq_24","Ensoniq_25","Ensoniq_Kick1","Ensoniq_Kick2","Ensoniq_Kick3","Ensoniq_Kick4"];
var ArrayJomox = ["Jomox_01","Jomox_0111","Jomox_012","Jomox_02","Jomox_0222","Jomox_023","Jomox_03","Jomox_0333","Jomox_034","Jomox_04","Jomox_0444","Jomox_045","Jomox_0555","Jomox_056","Jomox_0666","Jomox_067","Jomox_0777","Jomox_078","Jomox_0888","Jomox_09","Jomox_0999","Jomox_101010","Jomox_11","Jomox_113","Jomox_124","Jomox_135","Jomox_146","Jomox_157","Jomox_168","Jomox_179","Jomox_214","Jomox_22","Jomox_225","Jomox_236","Jomox_247","Jomox_258","Jomox_269","Jomox_280","Jomox_315","Jomox_326","Jomox_33","Jomox_337","Jomox_348","Jomox_359","Jomox_370","Jomox_381","Jomox_416","Jomox_427","Jomox_438","Jomox_44","Jomox_449","Jomox_460","Jomox_471","Jomox_482","Jomox_517","Jomox_528","Jomox_539","Jomox_55","Jomox_550","Jomox_561","Jomox_572","Jomox_618","Jomox_629","Jomox_640","Jomox_651","Jomox_66","Jomox_662","Jomox_673","Jomox_719","Jomox_730","Jomox_741","Jomox_752","Jomox_763","Jomox_77","Jomox_774","Jomox_820","Jomox_83","Jomox_831","Jomox_84","Jomox_842","Jomox_853","Jomox_864","Jomox_875","Jomox_921","Jomox_932","Jomox_943","Jomox_954","Jomox_965","Jomox_976"]; 
var ArrayKorg = ["Korg_10","Korg_11","Korg_12","Korg_13","Korg_14","Korg_15","Korg_16","Korg_17","Korg_18","Korg_4","Korg_5","Korg_6","Korg_7","Korg_8","Korg_9","Korg_Ambi","Korg_BassDrum Orch","Korg_Crisp","Korg_Dance","Korg_DanceClub_(01)","Korg_DanceClub_(02)","Korg_DanceClub_(03)","Korg_DanceClub_(04)","Korg_DanceClub_(05)","Korg_DanceKit_(01)","Korg_DanceKit_(02)","Korg_DanceKit_(03)","Korg_DanceKit_(04)","Korg_DanceKit_(05)","Korg_Fat","Korg_Gated","Korg_Metal","Korg_Processed","Korg_Punch","Korg_Real","Korg_Rock","Korg_Syn 01","Korg_Syn 02","Korg_Syn 03"];
var ArrayRoland = ["Roland_Basm","Roland_Br2","Roland_Br7","Roland_Concert BD 1","Roland_Concert BD 2","Roland_Conert","Roland_CR-781","Roland_CR-782","Roland_Dane1","Roland_Dane2","Roland_Dry1","Roland_Dry2","Roland_Fol36","Roland_House","Roland_HpHop1","Roland_HpHop2","Roland_HpHop3","Roland_HpHop4","Roland_HpHop5","Roland_Jazz1","Roland_Jazz2","Roland_Jazz3","Roland_Jazz4","Roland_LD","Roland_MaxLow","Roland_Mex","Roland_Mix1","Roland_Mix2","Roland_Mix3","Roland_Mix4","Roland_Mix5","Roland_Plastic","Roland_Pop22","Roland_Power1","Roland_Power2","Roland_Power3","Roland_Power4","Roland_Room1","Roland_Room2","Roland_Room3","Roland_TY1","Roland_Warm","Roland_WD"]; 
var ArraySimmons = ["Simmons_01","Simmons_03","Simmons_04","Simmons_05","Simmons_06","Simmons_07","Simmons_08","Simmons_09","Simmons_1","Simmons_2","Simmons_5","Simmons_6","Simmons_7","Simmons_BD","Simmons_K1"]; 
var ArrayTama = ["Tama1","Tama2","Tama4","Tama_Bright Attack","Tama_Dull Attack","Tama_Fat Bend","Tama_Fat Low","Tama_Fat Short","Tama_Gate Rev Bright","Tama_Gate Rev Dull","Tama_Long 1","Tama_Long 2","Tama_Med 1","Tama_Med 2","Tama_Short 1A","Tama_Short 1B","Tama_Short 2A","Tama_Short 2B","Tama_Short 3A","Tama_Short 3B","Tama_Short 4A","Tama_Short 4B" ]; 
var ArrayVarious = ["Var_Acetone_K","Var_Acetone_K1","Var_Coron_01","Var_Cwejman_07","Var_Cwejman_11","Var_Cwejman_13","Var_Cwejman_14","Var_Cwejman_15","Var_Cwejman_16","Var_Cwejman_17","Var_Cwejman_22","Var_Cwejman_23","Var_CWejman_Dred ","Var_Doepher_drum","Var_Farfisa_","Var_Fricke__1","Var_GameBoy_1","Var_GameBoy_2","Var_GameBoy_3","Var_GameBoy_4","Var_Kay_1","Var_Kay_2","Var_Kay_3","Var_Kay_4","Var_Kay_5","Var_Kay_6","Var_Kay_7","Var_Kay_8","Var_Pearl_ 1","Var_Pearl_ 10","Var_Pearl_ 2","Var_Pearl_ 3","Var_Pearl_ 4","Var_Pearl_ 5","Var_Pearl_ 6","Var_Pearl_ 7","Var_Pearl_ 8","Var_Pearl_ 9"]; 
var ArrayYamaha = ["Yamaha_001","Yamaha_002","Yamaha_003","Yamaha_004","Yamaha_005","Yamaha_006","Yamaha_007","Yamaha_008","Yamaha_009","Yamaha_010","Yamaha_011","Yamaha_012","Yamaha_013","Yamaha_014","Yamaha_015","Yamaha_016","Yamaha_017","Yamaha_01AnaQuick","Yamaha_02ELEC2","Yamaha_03Rave6","Yamaha_04Rave7","Yamaha_05Rave8","Yamaha_06Dance1","Yamaha_07Dance2","Yamaha_08Dance3","Yamaha_09Dance4","Yamaha_1","Yamaha_10dance5","Yamaha_11Dance6","Yamaha_12Dance9","Yamaha_13long1","Yamaha_14Rave10","Yamaha_15Rave11","Yamaha_16Sub1","Yamaha_17Sub2","Yamaha_18Sub3","Yamaha_19QuikBuzz","Yamaha_2","Yamaha_20ELEC1","Yamaha_21digiro","Yamaha_22funky1","Yamaha_23indst1","Yamaha_24NIN1","Yamaha_25Revers","Yamaha_26udu1","Yamaha_27urban1","Yamaha_28urban2","Yamaha_29 BigBoy","Yamaha_3","Yamaha_30 MtlPoint","Yamaha_311","Yamaha_32 Walkik","Yamaha_33 fefifofm","Yamaha_4","Yamaha_Analog 1h","Yamaha_Analog 1l","Yamaha_Analog","Yamaha_H","Yamaha_H3","Yamaha_Hard Distortion","Yamaha_Hiphop1","Yamaha_Hiphop2","Yamaha_Jungle 1","Yamaha_Jungle 2","Yamaha_Jungle 4","Yamaha_Jungle 4long","Yamaha_Jungle 5","Yamaha_Jungle 6","Yamaha_K","Yamaha_K01","Yamaha_K02","Yamaha_L","Yamaha_T8 2cont","Yamaha_T8 2long","Yamaha_T8 4","Yamaha_T8 Low Long","Yamaha_T9 4","Yamaha_T9 Distortion"]; 


var Maps = Engine.loadFromJSON("VoiceSettings.js");
if (Maps ==""){
    Maps = [Array808, Array909, ArrayAccess, ArrayAcoustic, ArrayAkai, ArrayAlesis,ArrayClavia, ArrayElektron, ArrayEnsoniq, ArrayJomox, ArrayKorg, ArrayRoland, ArraySimmons, ArrayTama, ArrayVarious, ArrayYamaha];
    Engine.dumpAsJSON(Maps,"VoiceSettings.js");
};


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
    
    VoiceAllRandButtons[idx] = Content.getComponent("AllRandomVoice" + (idx+1));
    VoiceAllRandButtons[idx].setControlCallback(onVoiceRand);

    VoiceInCatRandButtons[idx] = Content.getComponent("InCatRandomVoice" + (idx+1));
    VoiceInCatRandButtons[idx].setControlCallback(onInCatRand);


    
    PrevSounds[idx] = Content.getComponent("PrevSound" + (idx+1));
    PrevSounds[idx].setControlCallback(onPrevSound);
    NextSounds[idx] = Content.getComponent("NextSound" + (idx+1));
    NextSounds[idx].setControlCallback(onNextSound);
    SampleMapNames[idx] = Content.getComponent("SampleMapNameVoice" + (idx+1));
    SampleMapNames[idx].setControlCallback(onSampleMapName);
    SampleMapSelectors[idx] = Content.getComponent("SampleMapSelectorVoice" + (idx+1));
    SampleMapSelectors[idx].setControlCallback(onSampleMapSelector);
    
    AudioWaveForms[idx] = Content.getComponent("AudioWaveform" + (idx+1));
    
    VolumeKnobs[idx] = Content.getComponent("VolumeKnob" + (idx+1));
    VolumeKnobs[idx].setControlCallback(onVolumeKnob);
    PanKnobs[idx] = Content.getComponent("PanKnob" + (idx+1));
    PanKnobs[idx].setControlCallback(onPanKnob);
    PitchKnobs[idx] = Content.getComponent("PitchKnob" + (idx+1));
    PitchKnobs[idx].setControlCallback(onPitchKnob);
    

    
    
    
    FilterOnOffs[idx] = Content.getComponent("FilterOnOff" + (idx+1));
    FilterOnOffs[idx].setControlCallback(onFilterOnOff);
    FilterLocks[idx] = Content.getComponent("FilterLock" + (idx+1));
    FilterLocks[idx].setControlCallback(onFilterLock);
    FilterSelectors[idx] = Content.getComponent("FilterSelector" + (idx+1));
    FilterSelectors[idx].setControlCallback(onFilterSelector);
    FreqKnobs[idx] = Content.getComponent("FreqKnob" + (idx+1));
    FreqKnobs[idx].setControlCallback(onFreqKnob);
    ResKnobs[idx] = Content.getComponent("ResKnob" + (idx+1));
    ResKnobs[idx].setControlCallback(onResKnob);

    FMDepths[idx] = Content.getComponent("FMDepthKnob" + (idx+1));
    FMDepths[idx].setControlCallback(onFMDepthKnob);
    
    FMOctaves[idx] = Content.getComponent("FMOctaveKnob" + (idx+1));
    FMOctaves[idx].setControlCallback(onFMOctaveKnob);
    
    TriggerSelectors[idx] = Content.getComponent("TriggerSelector" + (idx+1));
    TriggerSelectors[idx].setControlCallback(onTriggerSelector);


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
    ReverbLocks[idx] = Content.getComponent("ReverbLock" + (idx+1));
    ReverbLocks[idx].setControlCallback(onReverbLock);
    ReverbSelectors[idx] = Content.getComponent("ImpulseSelector" + (idx+1));
    ReverbSelectors[idx].setControlCallback(onReverbSelector);
    ReverbWets[idx] = Content.getComponent("ReverbWetKnob" + (idx+1));
    ReverbWets[idx].setControlCallback(onReverbWet);
    ReverbDrys[idx] = Content.getComponent("ReverbDryKnob" + (idx+1));
    ReverbDrys[idx].setControlCallback(onReverbDry);

    DelayOnOffs[idx] = Content.getComponent("DelayOnOff" + (idx+1));
    DelayOnOffs[idx].setControlCallback(onDelayOnOff);
    DelayLocks[idx] = Content.getComponent("DelayLock" + (idx+1));
    DelayLocks[idx].setControlCallback(onDelayLock);
    DelayTimes[idx] = Content.getComponent("DelayTimeKnob" + (idx+1));
    DelayTimes[idx].setControlCallback(onDelayTime);
    DelayFeedbacks[idx] = Content.getComponent("DelayFeedbackKnob" + (idx+1));
    DelayFeedbacks[idx].setControlCallback(onDelayFeedback);
    DelayMixes[idx] = Content.getComponent("DelayMixKnob" + (idx+1));
    DelayMixes[idx].setControlCallback(onDelayMix);

    CompOnOffs[idx] = Content.getComponent("CompOnOff" + (idx+1));
    CompOnOffs[idx].setControlCallback(onCompOnOff);
    CompLocks[idx] = Content.getComponent("CompLock" + (idx+1));
    CompLocks[idx].setControlCallback(onCompLock);
    CompThresholds[idx] = Content.getComponent("CompThresholdKnob" + (idx+1));
    CompThresholds[idx].setControlCallback(onCompThreshold);
    CompRatios[idx] = Content.getComponent("CompRatioKnob" + (idx+1));
    CompRatios[idx].setControlCallback(onCompRatio);
    CompAttacks[idx] = Content.getComponent("CompAttackKnob" + (idx+1));
    CompAttacks[idx].setControlCallback(onCompAttack);
    CompReleases[idx] = Content.getComponent("CompReleaseKnob" + (idx+1));
    CompReleases[idx].setControlCallback(onCompRelease);



    // ----------- THE internal processes
    TheSamplers[idx] = Synth.getChildSynth("Sampler" + (idx+1));
    TheMidiMuters[idx] = Synth.getMidiProcessor("MidiMuter" + (idx+1));
    TheGainVelocities[idx] = Synth.getModulator("GainVelocity" + (idx+1));
    TheGainEnvelopes[idx] = Synth.getModulator("GainEnvelope" + (idx+1));
    TheGainEnvDefaults[idx] = Synth.getModulator("Simple Envelope" + (idx+1));
    TheGainLFOs[idx] = Synth.getModulator("GainLFO" + (idx+1));

    ThePanLFOs[idx] = Synth.getModulator("PanLFO" + (idx+1));
    
    ThePitchConstants[idx] = Synth.getModulator("PitchConstant" + (idx+1));
    //ThePitchVelocities[idx] = Synth.getModulator("PitchVelocity" + (idx+1));
    //ThePitchEnvelopes[idx] = Synth.getModulator("PitchEnvelope" + (idx+1));
    //ThePitchLFOs[idx] = Synth.getModulator("PitchLFO" + (idx+1));
    ThePitchIRREs[idx] = Synth.getModulator("IRREPitch" + (idx+1));

    TheFilters[idx] = Synth.getEffect("Filter" + (idx+1));
    //TheFreqVelocities[idx] = Synth.getModulator("FreqVelocity" + (idx+1));
    //TheFreqEnvelopes[idx] = Synth.getModulator("FreqEnvelope" + (idx+1));
    //TheFreqLFOs[idx] = Synth.getModulator("FreqLFO" + (idx+1));

    ThePolyShapes[idx] = Synth.getEffect("Polyshape" + (idx+1));
    TheReverbs[idx] = Synth.getAudioSampleProcessor("ConvolutionReverb" + (idx+1));
    TheDelays[idx] = Synth.getEffect("Delay" + (idx+1));
    TheComps[idx] = Synth.getEffect("Comp" + (idx+1));
    TheIRREEQs[idx] = Synth.getEffect("IRREEQ" + (idx+1));
    TheGains[idx] = Synth.getEffect("Gain" + (idx+1));
    
    FMConstants[idx] = Synth.getModulator("FMConstant" + (idx+1));
    SineWaveGenerators[idx] = Synth.getChildSynth("Sine Wave Generator" + (idx+1));
};

// add the mod panel at the end

VoicePanels[3] = Content.getComponent("ModPanel");
PanelExpanders[idx] = Content.getComponent("OpenCloseButton4");
PanelExpanders[idx].setControlCallback(onPanelExpander);

// set up the timer call backs for the panels to display the wave shapes
VoicePanels[0].setTimerCallback(function()
{
    //Console.print("in the VP1 timer");
    if (AudioWaveForms[0].get("sampleIndex") == 1)
    {
        //Console.print("setting the index to 0 for audio waveform:" + AudioWaveForms[0]);
        AudioWaveForms[0].set("sampleIndex", 0);
        VoicePanels[0].stopTimer();
    };
});
VoicePanels[1].setTimerCallback(function()
{
    //Console.print("in the VP2 timer");
    if (AudioWaveForms[1].get("sampleIndex") == 1)
    {
        //Console.print("setting the index to 0 for audio waveform:" + AudioWaveForms[1]);
        AudioWaveForms[1].set("sampleIndex", 0);
        VoicePanels[1].stopTimer();
    };
});
VoicePanels[2].setTimerCallback(function()
{
    //Console.print("in the VP3 timer");
    if (AudioWaveForms[2].get("sampleIndex") == 1)
    {
        //Console.print("setting the index to 0 for audio waveform:" + AudioWaveForms[2]);
        AudioWaveForms[2].set("sampleIndex", 0);
        VoicePanels[2].stopTimer();
    };
});
// THE GLOBAL MODULATORS
const var GlobalVelocityGain = Synth.getModulator("GlobalVelocityGain");
const var GlobalVelocityPitch = Synth.getModulator("GlobalVelocityPitch");
const var GlobalVelocityFreq = Synth.getModulator("GlobalVelocityFreq");
const var GlobalLFOGain = Synth.getModulator("GlobalLFOGain");
const var GlobalLFOPitch = Synth.getModulator("GlobalLFOPitch");
const var GlobalLFOFreq = Synth.getModulator("GlobalLFOFreq");

// the snapshots - who are saved as data in the snapshot panel
var SnapShotSet = {};
const var SnapshotPanel = Content.getComponent("SnapshotPanel");
SnapshotPanel.setControlCallback(onSnapshotPanelControl);
var currentSnap;



inline function onSnapshotPanelControl(component, value)
{
	// load the set from the panel..
	SnapShotSet = value;
	
	if (typeof(SnapShotSet) != 'object')
    {
        //Console.print("retrieving:" + trace(SnapShotSet));
        local v1 = aSnapshot.newVoiceShotObj(0);
        local v2 = aSnapshot.newVoiceShotObj(1);
        local v3 = aSnapshot.newVoiceShotObj(2);
        local s1 = aSnapshot.newSnapshot(v1,v2,v3);
        local s2 = aSnapshot.newSnapshot(v2,v3,v1);
        local s3 = aSnapshot.newSnapshot(v3,v2,v1);
        SnapShotSet = aSnapshot.newSnapshotSet(s1,s2,s3);
	
        //Console.print("retrieving:" + trace(SnapShotSet));
    }
};


inline function onSnapshotGeneratorControl(component, value)
{
	//
	//Console.print("generatorAAAAAA:" +  typeof(SnapShotSet) );
	if (typeof(SnapShotSet) == 'undefined' || typeof(SnapShotSet) != 'object')
	{
        //Console.print("retrieving:" + trace(SnapShotSet));
        local v1 = aSnapshot.newVoiceShotObj(0);
        local v2 = aSnapshot.newVoiceShotObj(1);
        local v3 = aSnapshot.newVoiceShotObj(2);
        local s1 = aSnapshot.newSnapshot(v1,v2,v3);
        local s2 = aSnapshot.newSnapshot(v2,v3,v1);
        local s3 = aSnapshot.newSnapshot(v3,v2,v1);
        SnapShotSet = aSnapshot.newSnapshotSet(s1,s2,s3);
	
        //Console.print("retrieving:" + trace(SnapShotSet));
    }    
	var mySet = SnapShotSet;
	//Console.print("XXXXing:" + trace(SnapShotSet));
	mySet.snap2.voice1 = SnapShotSet.snap1.voice2;
	mySet.snap2.voice2 = SnapShotSet.snap1.voice3;
	mySet.snap2.voice3 = SnapShotSet.snap1.voice1;
	
	mySet.snap3.voice1 = SnapShotSet.snap1.voice3;
	mySet.snap3.voice2 = SnapShotSet.snap1.voice1;
	mySet.snap3.voice3 = SnapShotSet.snap1.voice2;
	
	SnapShotSet = mySet;
	//
	Snapshot1OnOff.setValue(1);
	SnapshotOnOff2.setValue(0);
	SnapshotOnOff3.setValue(0);
	Snapshot1OnOff.changed();
	
	component.setValue(0);
	paintKeys();

};
Content.getComponent("SnapshotGenerator").setControlCallback(onSnapshotGeneratorControl);

var Snapshot1OnOff = Content.getComponent("Snapshot1OnOff");
Snapshot1OnOff.setControlCallback(onSnapshot1OnOffControl);

var loadingSnapshot = false;

inline function onSnapshot1OnOffControl(component, value)
{
	//
	if (value)
    {
       //Console.print("xxxxxxxxxx:" + trace(SnapShotSet));
       loadingSnapshot = true;
       if (typeof SnapShotSet == "object")
        {
            // load snapshot 1 into the instrument
            currentSnap = 1;
            local mySnap = SnapShotSet.snap1;
            aSnapshot.loadASnapshot(mySnap);
            paintKeys();
            
        }
        loadingSnapshot = false;

    }
};

var SnapshotOnOff2 = Content.getComponent("SnapshotOnOff2");
SnapshotOnOff2.setControlCallback(onSnapshotOnOff2Control);

inline function onSnapshotOnOff2Control(component, value)
{
	//
	if (value)
    {
       loadingSnapshot = true;
       if (typeof SnapShotSet == "object")
        {
            // load snapshot 2 into the instrument
            currentSnap = 2;
            local mySnap = SnapShotSet.snap2;
            aSnapshot.loadASnapshot(mySnap);
            paintKeys();

            
        }
        
        loadingSnapshot = false;
    }
};


var SnapshotOnOff3 = Content.getComponent("SnapshotOnOff3");
SnapshotOnOff3.setControlCallback(onSnapshotOnOff3Control);

inline function onSnapshotOnOff3Control(component, value)
{
	//
	if (value)
    {
       loadingSnapshot = true;
       if (typeof SnapShotSet == "object")
        {
            // load snapshot 3 into the instrument
            currentSnap = 3;
            local mySnap = SnapShotSet.snap3;
            aSnapshot.loadASnapshot(mySnap);
            paintKeys();

            
        }
       loadingSnapshot = false;
        
    }
};





// -------------- Authorisation & Demo ----------------------------

include("Serials.js");



const var MasterContainer = Synth.getChildSynth("Container1");

var AuthState = false;
var DemoK = 0;
const var AuthoriseInInst = Content.getComponent("AuthoriseInInst");

const var SerialInput = Content.getComponent("SerialInput");
const var Description = Content.getComponent("Description");
// const var SerialStateLabel = Content.getComponent("SerialStateLabel");
const var AuthorisationDialogue = Content.getComponent("AuthorisationDialog");
const var GlobalMute = Synth.getMidiProcessor("GlobalMute");
    
const var OrText = Content.getComponent("OrText");
const var DemoCountText = Content.getComponent("DemoCountText");
// demo mode timer....
var engineStartTime = Engine.getUptime();
var timerState = 1;  // 1 = in the initial period, 2 = in the on/off period
var masterByPass = 1;  // used to set the bypass
// const var timer = Engine.createTimerObject();

inline function getDemoCounter(demoString)
{

	local kstr;
	local knum;
	local invK;

	kstr = demoString.substring(4,5);
	knum = parseInt(kstr,10);
	invK = 9 - knum;
	return invK;
}

inline function createOffset(num)
{
    local invKount = 9 - num;
    //Console.print("in bound num:" + num);
	local Kstring = "";
	for (k=0; k < 4; k++)
    {
        Kstring = Kstring.concat(Math.floor(Math.random()* 10));
    }
    Kstring = Kstring.concat(invKount);
    for (k=0; k < 4; k++)
    {
        Kstring = Kstring.concat(Math.floor(Math.random()* 10));
    }
    return Kstring;
}
// Checks if the serial input is valid and stores the result if successful. //
inline function onSubmitButtonControl(component, value)
{
    if(!value) // Just execute once
        return;
    
    local v = SerialInput.getValue();
    
    //Console.print(v);
    v = v.trim();
    // Checks if it's in the input
    if(serials.Data.contains(v))
    {
        Console.print("Serial number found");
        
        local data = 
        {
            "Serial": v
        };
        
        // Stores the file to the hard drive. In HISE it will be the project folder
        // but in the compiled plugin it will use the parent directory to the 
        // user preset directory (which is usually the app data folder).
        Engine.dumpAsJSON(data, "../RegistrationInfo.js");
            
        setValidLicense(true);
    }
    else
    {
        Console.print("Invalid serial number");
        Description.set("text", "Invalid serial number. The number you supplied does not match");
            
        setValidLicense(false);
    }
};

Content.getComponent("SubmitButton").setControlCallback(onSubmitButtonControl);


inline function onAuthoriseInInstControl(component, value)
{
    //
    //Console.print("this value is:" + value);

    local offsetKString;
    AuthorisationDialogue.set("visible", false);
    GlobalMute.setAttribute(0, false);
    DemoK--;
    offsetKString = createOffset(DemoK);
    //Console.print(offsetKString);
    local data = 
    {
        "Setting": offsetKString
    };
    Engine.dumpAsJSON(data, "../OffsetValues.js");
    AuthorisationDialogue.startTimer(900000);

};
Content.getComponent("AuthoriseInInst").setControlCallback(onAuthoriseInInstControl);


inline function setValidLicense(isValid)
{
    // Do whatever you want to do here. I suggest a MIDI muter...

    GlobalMute.setAttribute(0, 1 - isValid);
    
    if(isValid)
    {
        // Change this to any other visual indication...
        // a valid license...
        AuthorisationDialogue.set("visible", false);
        AuthorisationDialogue.stopTimer();
        AuthState = true;
        //AuthoriseInInst.showControl(false);
        // make sure we are currently unmuted.
        //MasterContainer.setBypassed(0);
    }
    else
    {
        //not a valid license...
        // AuthorisationDialogue.set("visible", true);
        AuthState = false;
        // make sure we are currently muted.
        //MasterContainer.setBypassed(1);
        //AuthorisationDialogue.showControl(true);
    }
}


inline function checkOnLoad()
{
    // Clear the input
    SerialInput.set("text", "");
        
    // Load the serial from the stored file
    local pData = Engine.loadFromJSON("../RegistrationInfo.js");
    local dataC = Engine.loadFromJSON("../OffsetValues.js");
    Console.print("Checking serial");
    
    if(dataC)
    {
        DemoK = getDemoCounter(dataC.Setting);
    }else{
        local offSets;
        offSets = createOffset(9);
        local data = 
        {
            "Setting": offSets
        };
        DemoK = 9;
        Engine.dumpAsJSON(data, "../OffsetValues.js");
    }
    
    
    if(pData)    
    {
        local v = pData.Serial;
        Console.print("Restored serial: " + v);
        
        if(serials.Data.contains(v))
        {
            setValidLicense(true);
            Console.print("valid license apparently..");
            return;
        }
    }else{
        setValidLicense(false);
        Console.print("not a valid license..");
        //Console.print("DemoK is:" + DemoK);
        if (DemoK <=0)
        {
            OrText.showControl(false);
            AuthoriseInInst.showControl(false);
            DemoCountText.showControl(false);
                
        }else{
            OrText.showControl(true);
            AuthoriseInInst.showControl(true);
            DemoCountText.showControl(true);
            DemoCountText.set("text",("Number of Demos left:" + DemoK));
        }
        Description.set("text", "Please enter your serial number below.");
        AuthorisationDialogue.showControl(true);
    }
    

}

// Call this on startup
checkOnLoad();


//  enable for the demo version......


MasterContainer.setBypassed(1 - masterByPass);

//AuthorisationDialogue.startTimer(5000);

// timer.startTimer(900000); // in milliseconds



AuthorisationDialogue.setTimerCallback(function()
{
    //Console.print(Engine.getUptime() - engineStartTime );
    checkOnLoad();
    /*
    if (timerState == 1){
        // check is the license valid yet
        if (AuthState == false)
        {
            timerState = 2;
            MasterContainer.setBypassed(masterByPass);
            AuthorisationDialogue.stopTimer();
            AuthorisationDialogue.startTimer(1000);
            AuthoriseInInst.setValue(1);
            AuthoriseInInst.changed();

        }else{
            // authorised so no need for a timer..
            AuthorisationDialogue.stopTimer();
        };
    };
    if (timerState == 2){
        if (AuthState == false)
        {
            masterByPass = 1 - masterByPass;
            MasterContainer.setBypassed(masterByPass);
        }else{
            // authorised so no need for a timer..
            AuthorisationDialogue.stopTimer();
        };
    };
    */
});

// ------------- end auth and demo --------------------------
    
    
// The UI call backs           



//  ---   VOICE LEVEL CALL BACKS   ---

inline function onPanelExpander(component, value)
{
    VoiceSelectorPanel.showControl(false);
	setVoicePositions();
};

inline function onMuteButton(component, value)
{
    local myVoc;
    for (i=0;i < NUM_VOICES;i++)
    {
        if (component == MuteButtons[i]){
            TheMidiMuters[i].setAttribute(0, value);  
            aSnapshot.updateAVoice(i);
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

// ---- the sample map seleting call backs go here.....




inline function onPrevSound(component, value)
{
    var CatNum = -1;
    var SoundNum = -1;
    if (value)
    {
        for (i=0;i < NUM_VOICES;i++)
        {
            if (component == PrevSounds[i])
            {

                // Ok look thru the maps to find the current voice name...
                for (cati=0;cati < CAT_COUNT ;cati++)
                {
                    if (Maps[cati].indexOf(SampleMapNames[i].getValue()) > -1)
                    {
                        CatNum = cati;
                        SoundNum = Maps[cati].indexOf(SampleMapNames[i].getValue());
                        //Console.print("found the category:" + cati);
                        //Console.print("found the voice:" + Maps[cati].indexOf(SampleMapNameLabels[i].getValue()));
                    };
                };
                if (CatNum == -1)
                {
                    // didnt find the name so add a '*' to it and try again
                    for (cati=0;cati < CAT_COUNT ;cati++)
                    {
                        if (Maps[cati].indexOf('(*)' +SampleMapNames[i].getValue()) > -1)
                        {
                            CatNum = cati;
                            SoundNum = Maps[cati].indexOf('(*)' + SampleMapNames[i].getValue());
                            //Console.print("found the category:" + cati);
                            //Console.print("found the starred voice:" + Maps[cati].indexOf('(*)' + SampleMapNameLabels[i].getValue()));
                        };
                    };
                };
                //Console.print("category is:" + CatNum);
                //Console.print("voice position is:" + SoundNum);
                // OK we should have hte category number and the sound number so calc the previous one...
                if (SoundNum - 1 < 0)
                {
                    //we are at the start of the category - go get the previous category
                    if (CatNum -1 < 0)
                    {
                      // we are at the first category load the last category..
                      CatNum = CAT_COUNT - 1;
                    }else{
                        // we are fine we can go back one category
                        CatNum = CatNum -1;
                    };
                    // and load the last sound in it...
                    SoundNum = Maps[CatNum].length -1;
                }else{
                    // we are fine in the category where we are get the previous sound
                    SoundNum = SoundNum - 1;
                };
                // ok go load the sound
                //Console.print("loading a sound - using category:"+ CatNum);
                //Console.print("loading a sound - and sound number:"+ SoundNum);
                
                
                loadVoice(i,CatNum, SoundNum);
            };

        };
    };
}



inline function onNextSound(component, value)
{
    var CatNum = -1;
    var SoundNum = -1;
    if (value)
    {

        for (i=0;i < NUM_VOICES;i++)
        {
            if (component == NextSounds[i])                
            {                
                if(SampleMapNames[i].getValue() == "Empty")
                {
                   loadVoice(i,0, 0);
                }else
                {
                    //Console.print(SampleMapNameLabels[i].getValue());
                    // Ok look thru the maps to find the current voice name...
                    for (cati=0;cati < CAT_COUNT ;cati++)
                    {
                        if (Maps[cati].indexOf(SampleMapNames[i].getValue()) > -1)
                        {
                            CatNum = cati;
                            SoundNum = Maps[cati].indexOf(SampleMapNames[i].getValue());
                        };
                    };
                    if (CatNum == -1)
                    {
                        // didnt find the name so add a '*' to it and try again
                        for (cati=0;cati < CAT_COUNT ;cati++)
                        {
                            if (Maps[cati].indexOf('(*)' +SampleMapNames[i].getValue()) > -1)
                            {
                                CatNum = cati;
                                SoundNum = Maps[cati].indexOf('(*)' + SampleMapNames[i].getValue());
                            };
                        };
                    };

                    // OK we should have hte category number and the sound number so calc the next  one...
                    if (SoundNum + 1 >= Maps[CatNum].length)
                    {
                        //we are at the end of this category - go get the next category
                        if (CatNum + 1 >= Maps.length)
                        {
                          // we are at the end of all the categories load the first category..
                          CatNum = 0;
                        }else{
                            // we are fine we can go fwd one category
                            CatNum = CatNum + 1;
                        };
                        // and load the first sound in it...
                        SoundNum = 0;
                    }else{
                        // we are fine in the category where we are get the previous sound
                        SoundNum = SoundNum + 1;
                    };
                    // ok go load the soun
                
                    loadVoice(i,CatNum, SoundNum);
                };
            };
        };
    };
}





inline function onVolumeKnob(component, value)
{

    for (i=0;i < NUM_VOICES;i++)
    {
        if (component == VolumeKnobs[i]){
            VoiceBarVolumes[i].setValue(value);
            TheGains[i].setAttribute(TheGains[i].Gain, value);
            aSnapshot.updateAVoice(i);
        };
    };
};


inline function onPanKnob(component, value)
{

    for (i=0;i < NUM_VOICES;i++)
    {
        if (component == PanKnobs[i]){
            TheGains[i].setAttribute(TheGains[i].Balance, value);
            aSnapshot.updateAVoice(i);
        };
    };
};


inline function onPitchKnob(component, value)
{

    for (i=0;i < NUM_VOICES;i++)
    {
        if (component == PitchKnobs[i]){
            ThePitchConstants[i].setIntensity(value);
            aSnapshot.updateAVoice(i);
        };
    };
};


//=========== FILTER CONTROLS ================

inline function onFilterOnOff(component, value)
{
    reg locSet;

    // are the locks set - they all will or none will so check lock zero
    locSet = FilterLocks[0].getValue();
    
    for (i=0;i < NUM_VOICES;i++)
    {
        if (locSet == 1)  // yep so set everyone...
        {
            TheFilters[i].setBypassed(1 - value);
            FilterOnOffs[i].setValue(value); //show the change we just made
            aSnapshot.updateAVoice(i);
        }else{           // nope - set just this one
            if (component == FilterOnOffs[i]){
                TheFilters[i].setBypassed(1 - value);
                aSnapshot.updateAVoice(i);
            };
        };
    };
};


inline function onFilterLock(component, value)
{
    reg i;
    reg j;
    reg powerVal;
    reg typeVal;
    reg freqVal;
    reg resVal;
    
    for (idx=0;idx < NUM_VOICES;idx++)
    {
        FilterLocks[idx].setValue(value); //set the shape lock either all on or all off
    };
    
    if (value == 1) // we are setting them all ON...look for this one
    {
        for (i=0;i < NUM_VOICES;i++)
        {
            if (component == FilterLocks[i])
            {
                  powerVal = FilterOnOffs[i].getValue();
                  typeVal = FilterSelectors[i].getValue();
                  freqVal = FreqKnobs[i].getValue();
                  resVal = ResKnobs[i].getValue();
                  // this voice is the selected master - iterate round all controls - setting them = this
                  for (j=0;j < NUM_VOICES;j++)
                  {
                    FilterOnOffs[j].setValue(powerVal);
                    FilterOnOffs[j].changed();
                    FilterSelectors[j].setValue(typeVal);
                    FilterSelectors[j].changed();
                    FreqKnobs[j].setValue(freqVal);
                    FreqKnobs[j].changed();
                    ResKnobs[j].setValue(resVal);
                    ResKnobs[j].changed();
                    aSnapshot.updateAVoice(j);
                  };
            };
        };
    };
};


inline function onFilterSelector(component, value)
{
	//
    reg locSet;
    // are the locks set - they all will or none will so check lock zero
    locSet = FilterLocks[0].getValue();
    //voice filter
	for (idx = 0; idx <NUM_VOICES;idx++)
    {
        if (locSet == 1)
        {
            setFilter(idx,value);  //on so set everyone
            FilterSelectors[idx].setValue(value);
            aSnapshot.updateAVoice(idx);
        }else{
            if (component == FilterSelectors[idx])  // off so set just this one
            {
                setFilter(idx,value);
                aSnapshot.updateAVoice(idx);
            };
        };
    };
};




inline function onFreqKnob(component, value)
{

    reg locSet;
    // are the locks set - they all will or none will so check lock zero
    locSet = FilterLocks[0].getValue();
    
    for (i=0;i < NUM_VOICES;i++)
    {
        if (locSet == 1)  // yep so set everyone...
        {
            TheFilters[i].setAttribute(TheFilters[i].Frequency,value);
            FreqKnobs[i].setValue(value);
            aSnapshot.updateAVoice(i);
        }else{          // nope - just set this one
            if (component == FreqKnobs[i]){
                TheFilters[i].setAttribute(TheFilters[i].Frequency,value);
                aSnapshot.updateAVoice(i);
            };
        };
    };
};


inline function onResKnob(component, value)
{
    reg locSet;
    // are the locks set - they all will or none will so check lock zero
    locSet = FilterLocks[0].getValue();
    
    for (i=0;i < NUM_VOICES;i++)
    {
        if (locSet == 1)  // yep so set everyone...
        {
            TheFilters[i].setAttribute(TheFilters[i].Q,value);
            ResKnobs[i].setValue(value);
            aSnapshot.updateAVoice(i);
        }else{          // nope - just set this one
            if (component == ResKnobs[i]){
                TheFilters[i].setAttribute(TheFilters[i].Q,value);
                aSnapshot.updateAVoice(i);
            };
        };
    };
    
};


inline function onTriggerSelector(component, value)
{

    for (i=0;i < NUM_VOICES;i++)
    {
        if (component == TriggerSelectors[i]){
            
            switch (value){
              case 1:   // normal
                TheSamplers[i].setAttribute(TheSamplers[i].OneShot, false);
                TheSamplers[i].setAttribute(TheSamplers[i].Reversed, false);
                break;
              case 2:  // OneShot
                TheSamplers[i].setAttribute(TheSamplers[i].OneShot, true);
                TheSamplers[i].setAttribute(TheSamplers[i].Reversed, false);
                break;
              case 3:  // Reversed
                TheSamplers[i].setAttribute(TheSamplers[i].OneShot, false);
                TheSamplers[i].setAttribute(TheSamplers[i].Reversed, true);
                break;
              case 3:  // Reversed OneShot
                TheSamplers[i].setAttribute(TheSamplers[i].OneShot, true);
                TheSamplers[i].setAttribute(TheSamplers[i].Reversed, true);
                break;

            };
            aSnapshot.updateAVoice(i);
        };
    };
};

//=========== SHAPE FX ============

inline function onShapeOnOff(component, value)
{
    reg locSet;
    // are the locks set - they all will or none will so check lock zero
    locSet = ShapeLocks[0].getValue();
    
    for (i=0;i < NUM_VOICES;i++)
    {
        if (locSet == 1)  // yep so set everyone...
        {
            ThePolyShapes[i].setBypassed(1 - value);
            ShapeOnOffs[i].setValue(value);
            aSnapshot.updateAVoice(i);
        }else{           // nope - set just this one
            if (component == ShapeOnOffs[i]){
                ThePolyShapes[i].setBypassed(1 - value);
                aSnapshot.updateAVoice(i);
            };
        };
    };
};


inline function onShapeLock(component, value)
{
    reg i;
    reg j;
    reg powerVal;
    reg curveVal;
    reg driveVal;
    reg biasVal;
    
    for (idx=0;idx < NUM_VOICES;idx++)
    {
        ShapeLocks[idx].setValue(value); //set the shape lock either all on or all off
    };
    
    if (value == 1) // we are setting them all ON...look for this one
    {
        for (i=0;i < NUM_VOICES;i++)
        {
            if (component == ShapeLocks[i])
            {
                  powerVal = ShapeOnOffs[i].getValue();
                  curveVal = ShapeSelectors[i].getValue();
                  driveVal = ShapeDrives[i].getValue();
                  biasVal = ShapeBiass[i].getValue();
                  // this voice is the selected master - iterate round all controls - setting them = this
                  for (j=0;j < NUM_VOICES;j++)
                  {
                    ShapeOnOffs[j].setValue(powerVal);
                    ShapeOnOffs[j].changed();
                    ShapeSelectors[j].setValue(curveVal);
                    ShapeSelectors[j].changed();
                    ShapeDrives[j].setValue(driveVal);
                    ShapeDrives[j].changed();
                    ShapeBiass[j].setValue(biasVal);
                    ShapeBiass[j].changed();
                    aSnapshot.updateAVoice(j);
                  };
                  
            };
        };
    };
};

inline function onShapeSelector(component, value)
{
    reg locSet;
    
    // are the locks set - they all will or none will so check lock zero
    locSet = ShapeLocks[0].getValue();
    //voice curve shape
	for (i = 0; i <NUM_VOICES;i++)
    {
        if (locSet == 1)
        {
            setShape(i,value);
            ShapeSelectors[i].setValue(value);
            aSnapshot.updateAVoice(i);
        }else{
            if (component == ShapeSelectors[i])
            {
                setShape(i,value);
                aSnapshot.updateAVoice(i);
            };
        };
    };
};

inline function onShapeDrive(component, value)
{
    reg locSet;
    // are the locks set - they all will or none will so check lock zero
    locSet = ShapeLocks[0].getValue();
    
    for (i=0;i < NUM_VOICES;i++)
    {
        if (locSet == 1)  // yep so set everyone...
        {
            ThePolyShapes[i].setAttribute(ThePolyShapes[i].Drive, value);
            ShapeDrives[i].setValue(value);
            aSnapshot.updateAVoice(i);
        }else{          // nope - just set this one
            if (component == ShapeDrives[i]){
                ThePolyShapes[i].setAttribute(ThePolyShapes[i].Drive, value);
                aSnapshot.updateAVoice(i);
            };
        };
    };
};

inline function onShapeBias(component, value)
{
    reg locSet;
    // are the locks set - they all will or none will so check lock zero
    locSet = ShapeLocks[0].getValue();
    
    for (i=0;i < NUM_VOICES;i++)
    {
        if (locSet == 1)  // yep so set everyone...
        {
            ThePolyShapes[i].setAttribute(ThePolyShapes[i].Bias, value);
            ShapeBiass[i].setValue(value);
            aSnapshot.updateAVoice(i);
        }else{
            if (component == ShapeBiass[i]){
                ThePolyShapes[i].setAttribute(ThePolyShapes[i].Bias, value);
                aSnapshot.updateAVoice(i);
            };
        };
    };
};

//======= REVERB FX =============

inline function onReverbOnOff(component, value)
{
    reg locSet;
    // are the locks set - they all will or none will so check lock zero
    locSet = ReverbLocks[0].getValue();
    
    for (i=0;i < NUM_VOICES;i++)
    {
        if (locSet == 1)  // yep so set everyone...
        {
            TheReverbs[i].setBypassed(1 - value);
            ReverbOnOffs[i].setValue(value);
            aSnapshot.updateAVoice(i);
        }else{           // nope - set just this one
            if (component == ReverbOnOffs[i]){
                TheReverbs[i].setBypassed(1 - value);
                aSnapshot.updateAVoice(i);
            };
        };
    };
    
};

inline function onReverbLock(component, value)
{
    reg i;
    reg j;
    reg powerVal;
    reg irVal;
    reg wetVal;
    reg dryVal;
    
    for (idx=0;idx < NUM_VOICES;idx++)
    {
        ReverbLocks[idx].setValue(value); //set the shape lock either all on or all off
    };
    
    if (value == 1) // we are setting them all ON...look for this one
    {
        for (i=0;i < NUM_VOICES;i++)
        {
            if (component == ReverbLocks[i])
            {
                  powerVal = ReverbOnOffs[i].getValue();
                  irVal = ReverbSelectors[i].getValue();
                  wetVal = ReverbWets[i].getValue();
                  dryVal = ReverbDrys[i].getValue();
                  // this voice is the selected master - iterate round all controls - setting them = this
                  for (j=0;j < NUM_VOICES;j++)
                  {
                    ReverbOnOffs[j].setValue(powerVal);
                    ReverbOnOffs[j].changed();
                    ReverbSelectors[j].setValue(irVal);
                    ReverbSelectors[j].changed();
                    ReverbWets[j].setValue(wetVal);
                    ReverbWets[j].changed();
                    ReverbDrys[j].setValue(dryVal);
                    ReverbDrys[j].changed();
                    aSnapshot.updateAVoice(j);
                  };
            };
        };
    };
};


inline function onReverbSelector(component, value)
{
	reg locSet;
    
    // are the locks set - they all will or none will so check lock zero
    locSet = ReverbLocks[0].getValue();
    //voice curve shape
	for (i = 0; i <NUM_VOICES;i++)
    {
        if (locSet == 1)
        {
            setIRs(i,value);
            ReverbSelectors[i].setValue(value);
            aSnapshot.updateAVoice(i);
        }else{
            if (component == ReverbSelectors[i])
            {
                setIRs(i,value);
                aSnapshot.updateAVoice(i);
            };
        };
    };
    
	
};

inline function onReverbWet(component, value)
{
    reg locSet;
    // are the locks set - they all will or none will so check lock zero
    locSet = ReverbLocks[0].getValue();
    
    for (i=0;i < NUM_VOICES;i++)
    {
        if (locSet == 1)  // yep so set everyone...
        {
            TheReverbs[i].setAttribute(TheReverbs[i].WetGain, value);
            ReverbWets[i].setValue(value);
            aSnapshot.updateAVoice(i);
        }else{
            if (component == ReverbWets[i]){
                TheReverbs[i].setAttribute(TheReverbs[i].WetGain, value);
                aSnapshot.updateAVoice(i);
            };
        };
    };
    
};
inline function onReverbDry(component, value)
{
    reg locSet;
    // are the locks set - they all will or none will so check lock zero
    locSet = ReverbLocks[0].getValue();
    
    for (i=0;i < NUM_VOICES;i++)
    {
        if (locSet == 1)  // yep so set everyone...
        {
            TheReverbs[i].setAttribute(TheReverbs[i].DryGain, value);
            ReverbDrys[i].setValue(value);
            aSnapshot.updateAVoice(i);
        }else{
            if (component == ReverbDrys[i]){
                TheReverbs[i].setAttribute(TheReverbs[i].DryGain, value);
                aSnapshot.updateAVoice(i);
            };
        };
    };
};


//======== DELAY FX =============
inline function onDelayOnOff(component, value)
{
    reg locSet;
    // are the locks set - they all will or none will so check lock zero
    locSet = DelayLocks[0].getValue();
    
    for (i=0;i < NUM_VOICES;i++)
    {
        if (locSet == 1)  // yep so set everyone...
        {
            TheDelays[i].setBypassed(1 - value);
            DelayOnOffs[i].setValue(value);
            aSnapshot.updateAVoice(i);
        }else{           // nope - set just this one
            if (component == DelayOnOffs[i]){
                TheDelays[i].setBypassed(1 - value);
                aSnapshot.updateAVoice(i);
            };
        };
    };
};

inline function onDelayLock(component, value)
{
    reg i;
    reg j;
    reg powerVal;
    reg timeVal;
    reg feedbackVal;
    reg mixVal;
    
    for (idx=0;idx < NUM_VOICES;idx++)
    {
        DelayLocks[idx].setValue(value); //set the shape lock either all on or all off
    };
    
    if (value == 1) // we are setting them all ON...look for this one
    {
        for (i=0;i < NUM_VOICES;i++)
        {
            if (component == DelayLocks[i])
            {
                  powerVal = DelayOnOffs[i].getValue();
                  timeVal = DelayTimes[i].getValue();
                  feedbackVal = DelayFeedbacks[i].getValue();
                  mixVal = DelayMixes[i].getValue();
                  // this voice is the selected master - iterate round all controls - setting them = this
                  for (j=0;j < NUM_VOICES;j++)
                  {
                    DelayOnOffs[j].setValue(powerVal);
                    DelayOnOffs[j].changed();
                    DelayTimes[j].setValue(timeVal);
                    DelayTimes[j].changed();
                    DelayFeedbacks[j].setValue(feedbackVal);
                    DelayFeedbacks[j].changed();
                    DelayMixes[j].setValue(mixVal);
                    DelayMixes[j].changed();
                    aSnapshot.updateAVoice(j);
                  };
            };
        };
    };
};




inline function onDelayTime(component, value)
{
    reg locSet;
    // are the locks set - they all will or none will so check lock zero
    locSet = DelayLocks[0].getValue();
    
    for (i=0;i < NUM_VOICES;i++)
    {
        if (locSet == 1)  // yep so set everyone...
        {
            TheDelays[i].setAttribute(TheDelays[i].DelayTimeLeft, value);
            TheDelays[i].setAttribute(TheDelays[i].DelayTimeRight, value);
            DelayTimes[i].setValue(value);
            aSnapshot.updateAVoice(i);
        }else{
            if (component == DelayTimes[i]){
                TheDelays[i].setAttribute(TheDelays[i].DelayTimeLeft, value);
                TheDelays[i].setAttribute(TheDelays[i].DelayTimeRight, value);
                aSnapshot.updateAVoice(i);
            };
        };
    };
    
};

inline function onDelayFeedback(component, value)
{
    reg locSet;
    // are the locks set - they all will or none will so check lock zero
    locSet = DelayLocks[0].getValue();
    
    for (i=0;i < NUM_VOICES;i++)
    {
        if (locSet == 1)  // yep so set everyone...
        {
            TheDelays[i].setAttribute(TheDelays[i].FeedbackLeft, value);
            TheDelays[i].setAttribute(TheDelays[i].FeedbackRight, value);
            DelayFeedbacks[i].setValue(value);
            aSnapshot.updateAVoice(i);
        }else{
            if (component == DelayFeedbacks[i]){
                TheDelays[i].setAttribute(TheDelays[i].FeedbackLeft, value);
                TheDelays[i].setAttribute(TheDelays[i].FeedbackRight, value);
                aSnapshot.updateAVoice(i);
            };
        };
    };
};
inline function onDelayMix(component, value)
{
    reg locSet;
    // are the locks set - they all will or none will so check lock zero
    locSet = DelayLocks[0].getValue();
    
    for (i=0;i < NUM_VOICES;i++)
    {
        if (locSet == 1)  // yep so set everyone...
        {
            TheDelays[i].setAttribute(TheDelays[i].Mix, value);
            DelayMixes[i].setValue(value);
            aSnapshot.updateAVoice(i);
        }else{
            if (component == DelayMixes[i]){
                TheDelays[i].setAttribute(TheDelays[i].Mix, value);
                aSnapshot.updateAVoice(i);
            };
        };
    };
    
};

//====== THE COMP FX ================

inline function onCompOnOff(component, value)
{
    reg locSet;
    // are the locks set - they all will or none will so check lock zero
    locSet = CompLocks[0].getValue();
    
    for (i=0;i < NUM_VOICES;i++)
    {
        if (locSet == 1)  // yep so set everyone...
        {
            TheComps[i].setBypassed(1 - value);
            CompOnOffs[i].setValue(value);
            aSnapshot.updateAVoice(i);
        }else{           // nope - set just this one
            if (component == CompOnOffs[i]){
                TheComps[i].setBypassed(1 - value);
                aSnapshot.updateAVoice(i);
            };
        };
    };
    
};

inline function onCompLock(component, value)
{
    reg i;
    reg j;
    reg powerVal;
    reg thresholdVal;
    reg ratioVal;
    reg attackVal;
    reg releaseVal;
    
    for (idx=0;idx < NUM_VOICES;idx++)
    {
        CompLocks[idx].setValue(value); //set the shape lock either all on or all off
    };
    
    if (value == 1) // we are setting them all ON...look for this one
    {
        for (i=0;i < NUM_VOICES;i++)
        {
            if (component == CompLocks[i])
            {
                  powerVal = CompOnOffs[i].getValue();
                  thresholdVal = CompThresholds[i].getValue();
                  ratioVal = CompRatios[i].getValue();
                  attackVal = CompAttacks[i].getValue();
                  releaseVal = CompReleases[i].getValue();
                  // this voice is the selected master - iterate round all controls - setting them = this
                  for (j=0;j < NUM_VOICES;j++)
                  {
                    CompOnOffs[j].setValue(powerVal);
                    CompOnOffs[j].changed();
                    CompThresholds[j].setValue(thresholdVal);
                    CompThresholds[j].changed();
                    CompRatios[j].setValue(ratioVal);
                    CompRatios[j].changed();
                    CompAttacks[j].setValue(attackVal);
                    CompAttacks[j].changed();
                    CompReleases[j].setValue(releaseVal);
                    CompReleases[j].changed();
                    aSnapshot.updateAVoice(j);
                  };
            };
        };
    };
};




inline function onCompThreshold(component, value)
{
    reg locSet;
    // are the locks set - they all will or none will so check lock zero
    locSet = CompLocks[0].getValue();
    
    for (i=0;i < NUM_VOICES;i++)
    {
        if (locSet == 1)  // yep so set everyone...
        {
            TheComps[i].setAttribute(TheComps[i].CompressorThreshold, value);
            CompThresholds[i].setValue(value);
            aSnapshot.updateAVoice(i);
        }else{
            if (component == CompThresholds[i]){
                TheComps[i].setAttribute(TheComps[i].CompressorThreshold, value);
                aSnapshot.updateAVoice(i);
            };
        };
    };
    
};

inline function onCompRatio(component, value)
{
    reg locSet;
    // are the locks set - they all will or none will so check lock zero
    locSet = CompLocks[0].getValue();
    
    for (i=0;i < NUM_VOICES;i++)
    {
        if (locSet == 1)  // yep so set everyone...
        {
            TheComps[i].setAttribute(TheComps[i].CompressorRatio, value);
            CompRatios[i].setValue(value);
            aSnapshot.updateAVoice(i);
        }else{
            if (component == CompRatios[i]){
                TheComps[i].setAttribute(TheComps[i].CompressorRatio, value);
                aSnapshot.updateAVoice(i);
            };
        };
    };
};

inline function onCompAttack(component, value)
{
    reg locSet;
    // are the locks set - they all will or none will so check lock zero
    locSet = CompLocks[0].getValue();
    
    for (i=0;i < NUM_VOICES;i++)
    {
        if (locSet == 1)  // yep so set everyone...
        {
            TheComps[i].setAttribute(TheComps[i].CompressorAttack, value);
            CompAttacks[i].setValue(value);
            aSnapshot.updateAVoice(i);
        }else{
            if (component == CompAttacks[i]){
                TheComps[i].setAttribute(TheComps[i].CompressorAttack, value);
                aSnapshot.updateAVoice(i);
            };
        };
    };
};

inline function onCompRelease(component, value)
{
    reg locSet;
    // are the locks set - they all will or none will so check lock zero
    locSet = CompLocks[0].getValue();
    
    for (i=0;i < NUM_VOICES;i++)
    {
        if (locSet == 1)  // yep so set everyone...
        {
            TheComps[i].setAttribute(TheComps[i].CompressorRelease, value);
            CompReleases[i].setValue(value);
            aSnapshot.updateAVoice(i);
        }else{
            if (component == CompReleases[i]){
                TheComps[i].setAttribute(TheComps[i].CompressorRelease, value);
                aSnapshot.updateAVoice(i);
            };
        };
    };
};





//                ---   MASTER CALL BACKS   ---

inline function onMasterVolumeKnobControl(component, value)
{
	MasterGain.setAttribute(MasterGain.Gain,value);
};

Content.getComponent("MasterVolumeKnob").setControlCallback(onMasterVolumeKnobControl);

// 
const var IRREScript1 = Synth.getMidiProcessor("IRREScript1");
const var IRREScript2 = Synth.getMidiProcessor("IRREScript2");
const var IRREScript3 = Synth.getMidiProcessor("IRREScript3");
inline function onMasterIRREKnobControl(component, value)
{
	//Add your custom logic here...
	IRREScript1.setAttribute(0, value);
	IRREScript2.setAttribute(0, value);
	IRREScript3.setAttribute(0, value);
};

Content.getComponent("MasterIRREKnob").setControlCallback(onMasterIRREKnobControl);

const var NoteRemapper = Synth.getMidiProcessor("NoteRemapper");
inline function onMIDISelectorControl(component, value)
{
	if (value == 1)
    {
	    NoteRemapper.setAttribute(0,36);
	    MIDINoteTarget = 36;
    }else{
        NoteRemapper.setAttribute(0,48);
	    MIDINoteTarget = 48;
    };
    paintKeys();
};

MIDISelector.setControlCallback(onMIDISelectorControl);





// =========================== the Modulator call backs  ==============



inline function onVelocityOnOffVolControl(component, value)
{
	GlobalVelocityGain.setBypassed(1 - value);
};
Content.getComponent("VelocityOnOffVol").setControlCallback(onVelocityOnOffVolControl);


inline function onVelocityDepthKnobVolControl(component, value)
{
    GlobalVelocityGain.setIntensity(value);
};
Content.getComponent("VelocityDepthKnobVol").setControlCallback(onVelocityDepthKnobVolControl);

const var GainEnvelope1 = Synth.getModulator("GainEnvelope1");
const var GainEnvelope2 = Synth.getModulator("GainEnvelope2");
const var GainEnvelope3 = Synth.getModulator("GainEnvelope3");
inline function onEnvelopeOnOffVolControl(component, value)
{
    /*for (dx = 0; dx < NUM_VOICES; dx++);
    {
        TheGainEnvelopes[dx].setBypassed(1 - value);
    };*/
    GainEnvelope1.setBypassed(1 - value);
    GainEnvelope2.setBypassed(1 - value);
    GainEnvelope3.setBypassed(1 - value);

};
Content.getComponent("EnvelopeOnOffVol").setControlCallback(onEnvelopeOnOffVolControl);


inline function onEnvelopeAmountKnobVolControl(component, value)
{
    for(dx = 0;dx < NUM_VOICES; dx++)
    {
        TheGainEnvelopes[dx].setIntensity(value);
    };
};
Content.getComponent("EnvelopeAmountKnobVol").setControlCallback(onEnvelopeAmountKnobVolControl);


inline function onEnvelopeAttackKnobVolControl(component, value)
{
    for(dx = 0;dx < NUM_VOICES; dx++)
        {
            TheGainEnvelopes[dx].setAttribute(TheGainEnvelopes[dx].Attack, value);
        };
};
Content.getComponent("EnvelopeAttackKnobVol").setControlCallback(onEnvelopeAttackKnobVolControl);


inline function onEnvelopeHoldKnobVolControl(component, value)
{
    local dx;
    for(dx = 0;dx < NUM_VOICES; dx++)
    {
        TheGainEnvelopes[dx].setAttribute(TheGainEnvelopes[dx].Hold, value);
    };
};

Content.getComponent("EnvelopeHoldKnobVol").setControlCallback(onEnvelopeHoldKnobVolControl);



inline function onEnvelopeDecayKnobVolControl(component, value)
{
    local dx;
    for(dx = 0;dx < NUM_VOICES; dx++)
    {
        TheGainEnvelopes[dx].setAttribute(TheGainEnvelopes[dx].Decay, value);           
    };
};
Content.getComponent("EnvelopeDecayKnobVol").setControlCallback(onEnvelopeDecayKnobVolControl);


inline function onEnvelopeSustainKnobVolControl(component, value)
{
    local dx;
    for(dx = 0;dx < NUM_VOICES; dx++)
    {
        TheGainEnvelopes[dx].setAttribute(TheGainEnvelopes[dx].Sustain, value);
    };
};
Content.getComponent("EnvelopeSustainKnobVol").setControlCallback(onEnvelopeSustainKnobVolControl);


inline function onEnvelopeReleaseKnobVolControl(component, value)
{
	local dx;

    for(dx = 0;dx < NUM_VOICES; dx++)
    {

        TheGainEnvelopes[dx].setAttribute(TheGainEnvelopes[dx].Release, value);
    };
};
Content.getComponent("EnvelopeReleaseKnobVol").setControlCallback(onEnvelopeReleaseKnobVolControl);


inline function onLFOOnOffVolControl(component, value)
{
	GlobalLFOGain.setBypassed(1 - value);
};
Content.getComponent("LFOOnOffVol").setControlCallback(onLFOOnOffVolControl);


inline function onLFOSpeedKnobVolControl(component, value)
{
	GlobalLFOGain.setAttribute(GlobalLFOGain.Frequency, value);
};
Content.getComponent("LFOSpeedKnobVol").setControlCallback(onLFOSpeedKnobVolControl);


inline function onLFODepthKnobVolControl(component, value)
{
	GlobalLFOGain.setIntensity(value);
};
Content.getComponent("LFODepthKnobVol").setControlCallback(onLFODepthKnobVolControl);


//=============

inline function onVelocityOnOffPitchControl(component, value)
{
	GlobalVelocityPitch.setBypassed(1 - value);
};
Content.getComponent("VelocityOnOffPitch").setControlCallback(onVelocityOnOffPitchControl);


inline function onVelocityDepthKnobPitchControl(component, value)
{
    GlobalVelocityPitch.setIntensity(value);
};
Content.getComponent("VelocityDepthKnobPitch").setControlCallback(onVelocityDepthKnobPitchControl);

const var PitchEnvelope1 = Synth.getModulator("PitchEnvelope1");
const var PitchEnvelope2 = Synth.getModulator("PitchEnvelope2");
const var PitchEnvelope3 = Synth.getModulator("PitchEnvelope3");
inline function onEnvelopeOnOffPitchControl(component, value)
{
    /*for (idx = 0; idx < NUM_VOICES; idx++);
    {
        ThePitchEnvelopes[idx].setBypassed(value);
    }; */
    PitchEnvelope1.setBypassed(1 - value);
    PitchEnvelope2.setBypassed(1 - value);
    PitchEnvelope3.setBypassed(1 - value);
};
Content.getComponent("EnvelopeOnOffPitch").setControlCallback(onEnvelopeOnOffPitchControl);


inline function onEnvelopeAmountKnobPitchControl(component, value)
{

    PitchEnvelope1.setIntensity(value);
    PitchEnvelope2.setIntensity(value);
    PitchEnvelope3.setIntensity(value);
};
Content.getComponent("EnvelopeAmountKnobPitch").setControlCallback(onEnvelopeAmountKnobPitchControl);


inline function onEnvelopeAttackKnobPitchControl(component, value)
{
    PitchEnvelope1.setAttribute(PitchEnvelope1.Attack, value);
    PitchEnvelope2.setAttribute(PitchEnvelope2.Attack, value);
    PitchEnvelope3.setAttribute(PitchEnvelope3.Attack, value);
};
Content.getComponent("EnvelopeAttackKnobPitch").setControlCallback(onEnvelopeAttackKnobPitchControl);


inline function onEnvelopeHoldKnobPitchControl(component, value)
{
    
    PitchEnvelope1.setAttribute(PitchEnvelope1.Hold, value);
    PitchEnvelope2.setAttribute(PitchEnvelope2.Hold, value);
    PitchEnvelope3.setAttribute(PitchEnvelope3.Hold, value);
};

Content.getComponent("EnvelopeHoldKnobPitch").setControlCallback(onEnvelopeHoldKnobPitchControl);



inline function onEnvelopeDecayKnobPitchControl(component, value)
{
    
    PitchEnvelope1.setAttribute(PitchEnvelope1.Decay, value);
    PitchEnvelope2.setAttribute(PitchEnvelope2.Decay, value);
    PitchEnvelope3.setAttribute(PitchEnvelope3.Decay, value);
};
Content.getComponent("EnvelopeDecayKnobPitch").setControlCallback(onEnvelopeDecayKnobPitchControl);


inline function onEnvelopeSustainKnobPitchControl(component, value)
{
    
    PitchEnvelope1.setAttribute(PitchEnvelope1.Sustain, value);
    PitchEnvelope2.setAttribute(PitchEnvelope2.Sustain, value);
    PitchEnvelope3.setAttribute(PitchEnvelope3.Sustain, value);
};
Content.getComponent("EnvelopeSustainKnobPitch").setControlCallback(onEnvelopeSustainKnobPitchControl);


inline function onEnvelopeReleaseKnobPitchControl(component, value)
{

    PitchEnvelope1.setAttribute(PitchEnvelope1.Release, value);
    PitchEnvelope2.setAttribute(PitchEnvelope2.Release, value);
    PitchEnvelope3.setAttribute(PitchEnvelope3.Release, value);
};
Content.getComponent("EnvelopeReleaseKnobPitch").setControlCallback(onEnvelopeReleaseKnobPitchControl);


const var PitchLFO1 = Synth.getModulator("PitchLFO1");
const var PitchLFO2 = Synth.getModulator("PitchLFO2");
const var PitchLFO3 = Synth.getModulator("PitchLFO3");
inline function onLFOOnOffPitchControl(component, value)
{
	GlobalLFOPitch.setBypassed(1 - value);
};
Content.getComponent("LFOOnOffPitch").setControlCallback(onLFOOnOffPitchControl);


inline function onLFOSpeedKnobPitchControl(component, value)
{
	GlobalLFOPitch.setAttribute(GlobalLFOPitch.Frequency, value);
};
Content.getComponent("LFOSpeedKnobPitch").setControlCallback(onLFOSpeedKnobPitchControl);

inline function onLFODepthKnobPitchControl(component, value)
{
	PitchLFO1.setIntensity(value);
	PitchLFO2.setIntensity(value);
	PitchLFO3.setIntensity(value);
};
Content.getComponent("LFODepthKnobPitch").setControlCallback(onLFODepthKnobPitchControl);


//=============

inline function onVelocityOnOffFreqControl(component, value)
{
    GlobalVelocityFreq.setBypassed(1 - value);
};
Content.getComponent("VelocityOnOffFreq").setControlCallback(onVelocityOnOffFreqControl);


inline function onVelocityDepthKnobFreqControl(component, value)
{
    GlobalVelocityFreq.setIntensity(value);
};
Content.getComponent("VelocityDepthKnobFreq").setControlCallback(onVelocityDepthKnobFreqControl);

const var FreqEnvelope1 = Synth.getModulator("FreqEnvelope1");
const var FreqEnvelope2 = Synth.getModulator("FreqEnvelope2");
const var FreqEnvelope3 = Synth.getModulator("FreqEnvelope3");
inline function onEnvelopeOnOffFreqControl(component, value)
{
    /*for (idx = 0; idx < NUM_VOICES; idx++);
    {
        TheFreqEnvelopes[idx].setBypassed(value);
    };*/
    FreqEnvelope1.setBypassed(1 - value);
    FreqEnvelope2.setBypassed(1 - value);
    FreqEnvelope3.setBypassed(1 - value);
};
Content.getComponent("EnvelopeOnOffFreq").setControlCallback(onEnvelopeOnOffFreqControl);


inline function onEnvelopeAmountKnobFreqControl(component, value)
{
    FreqEnvelope1.setIntensity(value);
    FreqEnvelope2.setIntensity(value);
    FreqEnvelope3.setIntensity(value);
};
Content.getComponent("EnvelopeAmountKnobFreq").setControlCallback(onEnvelopeAmountKnobFreqControl);


inline function onEnvelopeAttackKnobFreqControl(component, value)
{

    FreqEnvelope1.setAttribute(FreqEnvelope1.Attack, value);
    FreqEnvelope2.setAttribute(FreqEnvelope2.Attack, value);
    FreqEnvelope3.setAttribute(FreqEnvelope3.Attack, value);
};
Content.getComponent("EnvelopeAttackKnobFreq").setControlCallback(onEnvelopeAttackKnobFreqControl);


inline function onEnvelopeHoldKnobFreqControl(component, value)
{
    FreqEnvelope1.setAttribute(FreqEnvelope1.Hold, value);
    FreqEnvelope2.setAttribute(FreqEnvelope2.Hold, value);
    FreqEnvelope3.setAttribute(FreqEnvelope3.Hold, value);
};

Content.getComponent("EnvelopeHoldKnobFreq").setControlCallback(onEnvelopeHoldKnobFreqControl);



inline function onEnvelopeDecayKnobFreqControl(component, value)
{
    FreqEnvelope1.setAttribute(FreqEnvelope1.Decay, value);
    FreqEnvelope2.setAttribute(FreqEnvelope2.Decay, value);
    FreqEnvelope3.setAttribute(FreqEnvelope3.Decay, value);
};
Content.getComponent("EnvelopeDecayKnobFreq").setControlCallback(onEnvelopeDecayKnobFreqControl);


inline function onEnvelopeSustainKnobFreqControl(component, value)
{
    FreqEnvelope1.setAttribute(FreqEnvelope1.Sustain, value);
    FreqEnvelope2.setAttribute(FreqEnvelope2.Sustain, value);
    FreqEnvelope3.setAttribute(FreqEnvelope3.Sustain, value);
};
Content.getComponent("EnvelopeSustainKnobFreq").setControlCallback(onEnvelopeSustainKnobFreqControl);


inline function onEnvelopeReleaseKnobFreqControl(component, value)
{
    FreqEnvelope1.setAttribute(FreqEnvelope1.Release, value);
    FreqEnvelope2.setAttribute(FreqEnvelope2.Release, value);
    FreqEnvelope3.setAttribute(FreqEnvelope3.Release, value);
};
Content.getComponent("EnvelopeReleaseKnobFreq").setControlCallback(onEnvelopeReleaseKnobFreqControl);


inline function onLFOOnOffFreqControl(component, value)
{
    GlobalLFOFreq.setBypassed(1 - value);
};
Content.getComponent("LFOOnOffFreq").setControlCallback(onLFOOnOffFreqControl);


inline function onLFOSpeedKnobFreqControl(component, value)
{
    GlobalLFOFreq.setAttribute(GlobalLFOFreq.Frequency, value);
};
Content.getComponent("LFOSpeedKnobFreq").setControlCallback(onLFOSpeedKnobFreqControl);


inline function onLFODepthKnobFreqControl(component, value)
{
    GlobalLFOFreq.setIntensity(value);
};
Content.getComponent("LFODepthKnobFreq").setControlCallback(onLFODepthKnobFreqControl);


//=============

// BVOICE SELECTION DIALOG PANEL

inline function onDialogDismissControl(component, value)
{
	    //hide voice selector dialog - 
    VoiceSelectorPanel.showControl(false); 
    for (i=0;i < NUM_VOICES;i++)
    {
         SampleMapSelectors[i].setValue(0);
    };
};

Content.getComponent("DialogDismiss").setControlCallback(onDialogDismissControl);

const var VoiceSampleMaps = Content.getComponent("VoiceSampleMaps");


inline function onVoiceCategoriesControl(component, value)
{
    // Voice 1
    local myArray;
    myArray = Maps[value];
    //set the sample map list based on the category
    VoiceSampleMaps.set("items",myArray.join("\n"));
};

Content.getComponent("VoiceCategories").setControlCallback(onVoiceCategoriesControl);


const var VoiceCategories = Content.getComponent("VoiceCategories");
const var VoiceFavouritesButton = Content.getComponent("VoiceFavouritesButton");


inline function onVoiceSampleMapsControl(component, value)
{
    //set voice
    local selectedName;
    local trimmedName;
    local stateOfPlay;
    local buttonState = 0;
    for (i=0;i < NUM_VOICES;i++)
    {
        buttonState = buttonState + SampleMapSelectors[i].getValue();
    };

    if (buttonState > 0)   // in end user inspired activity
    {
        selectedName = Maps[VoiceCategories.getValue()][value];
        if (selectedName.substring(0,3) == "(*)"){
            //Console.print("found a favourite");
            VoiceFavouritesButton.setValue(1);
            trimmedName = selectedName.substring(3,selectedName.length);
        }else{
            VoiceFavouritesButton.setValue(0);
            trimmedName = selectedName;
        };
        //Console.print("XXXXXXXXXXX selected:" + trimmedName);
    

        SampleMapNames[currentSelectingVoice].set("text",trimmedName);
        VoiceBarNames[currentSelectingVoice].set("text",trimmedName);
        SampleMapNames[currentSelectingVoice].changed();
        //TheSamplers[currentSelectingVoice].asSampler().loadSampleMap(trimmedName);
        
        loadVoiceByName(currentSelectingVoice, trimmedName);
    };
    
};

Content.getComponent("VoiceSampleMaps").setControlCallback(onVoiceSampleMapsControl);


        
inline function onSampleMapSelector(component, value)
{
    //show 
    local loaded;
    local named;
	for (i=0;i < NUM_VOICES;i++)
    {
        if (component == SampleMapSelectors[i])
        {
            currentSelectingVoice = i;
            DialogName.set("text","VOICE " + (i + 1) + " DRUM SOUNDS");
            VoiceSelectorPanel.showControl(value);
            VoiceSampleMaps.setValue(VoiceSampleMaps.getValue());
            // if we are being called from a preset check the corrrect smaple is loaded...
            loaded = TheSamplers[currentSelectingVoice].asSampler().getCurrentSampleMapId();
            named = SampleMapNames[currentSelectingVoice].get("text");
            if (loaded != named)
            {
                loadVoiceByName(currentSelectingVoice, named);
            }
        }else{
        // not the selected voice make sure this selector is OFF
            SampleMapSelectors[i].setValue(0);
        };
    };
};

const var PresetPanel = Content.getComponent("PresetHolderPanel");


inline function onRandomiseControl(component, value)
{
    if (value)
    {
        local myMap;
        local mySound;
        local myTrimmedName;
        for (idx = 0; idx < 3; idx++)
        {
            myMap = Math.round(Math.random()*Maps.length);
            mySound = Maps[myMap][Math.round(Math.random() * Maps[myMap].length)];
            if (typeof(mySound) == 'undefined' || typeof(mySound) == 'void')
                mySound = Maps[0][0];
	
            
            if (mySound.substring(0,3) == "(*)"){
                myTrimmedName = mySound.substring(3,mySound.length);
            }else{
                myTrimmedName = mySound;
            };
        
        
    
            
            SampleMapNames[idx].set("text",myTrimmedName);
            VoiceBarNames[idx].set("text",myTrimmedName);
            SampleMapNames[idx].changed();     
            loadVoiceByName(idx, myTrimmedName);
            
            randVoiceParams(idx);
            
        };

    }
};

Content.getComponent("Randomise").setControlCallback(onRandomiseControl);







inline function onPresetsControl(component, value)
{

	if (value){
        PresetPanel.showControl(true);  
    // start the timer for displaying preset changes...
        PresetFrame.startTimer(500);
    }else{
        PresetPanel.showControl(false); 
        PresetFrame.stopTimer();
    };
	myPresetName.set("text",Engine.getCurrentUserPresetName());
};

Content.getComponent("Presets").setControlCallback(onPresetsControl);


inline function onDismissPresetsControl(component, value)
{
	//
	if (value)
    {
        Content.getComponent("Presets").setValue(0);
        Content.getComponent("Presets").changed();
    };
};

Content.getComponent("DismissPresets").setControlCallback(onDismissPresetsControl);



inline function onNextUserPresetControl(component, value)
{
	//next preset.
	if (value == 1){
	    Engine.loadNextUserPreset(false);
	    myPresetName.set("text", Engine.getCurrentUserPresetName());
	};
};

Content.getComponent("NextUserPreset").setControlCallback(onNextUserPresetControl);


inline function onPrevUserPresetControl(component, value)
{
	//prev preset
	if (value == 1){
	    Engine.loadPreviousUserPreset(false) ;
	    myPresetName.set("text", Engine.getCurrentUserPresetName());
	};
};

Content.getComponent("PrevUserPreset").setControlCallback(onPrevUserPresetControl);




paintKeys();






inline function onInCatRand(component, value)
{
	//find what cat we are using...put in catPos
	if(value)
    {
        local pos = VoiceInCatRandButtons.indexOf(component);
        local dispName = SampleMapNames[pos].get("text");
        local foundPos;
        local catPos = 0;
        local mySound;
        local myTrimmedName;
        Console.print("looking for a sample called:" + dispName);
        for (cdx = 0; cdx < Maps.length; cdx++ )
        {
            foundPos = Maps[cdx].indexOf(dispName);
            if (foundPos > -1)
                    catPos = cdx;
        }
        
        mySound = Maps[catPos][Math.round(Math.random() * Maps[catPos].length)];
        if (typeof(mySound) == 'undefined' || typeof(mySound) == 'void')
            mySound = Maps[catPos][0];
        
        Console.print("sound is:" +  mySound);
            
            
        if (mySound.substring(0,3) == "(*)"){
            myTrimmedName = mySound.substring(3,mySound.length);
        }else{
            myTrimmedName = mySound;
        };
        
        
    

        SampleMapNames[pos].set("text",myTrimmedName);
        VoiceBarNames[pos].set("text",myTrimmedName);
        SampleMapNames[pos].changed();     
        loadVoiceByName(pos, myTrimmedName);
            
            
            
        component.setValue(0);
    }
};



inline function onVoiceRand(component, value)
{
	//randomise just this...voice
	if(value)
    {
        local pos = VoiceAllRandButtons.indexOf(component);
        local myMap;
        local mySound;
        local myTrimmedName;

        myMap = Math.round(Math.random()*Maps.length);
        mySound = Maps[myMap][Math.round(Math.random() * Maps[myMap].length)];
        if (typeof(mySound) == 'undefined' || typeof(mySound) == 'void')
            mySound = Maps[0][0];
	
            
        if (mySound.substring(0,3) == "(*)"){
            myTrimmedName = mySound.substring(3,mySound.length);
        }else{
            myTrimmedName = mySound;
        };
        
        
    
            
        SampleMapNames[pos].set("text",myTrimmedName);
        VoiceBarNames[pos].set("text",myTrimmedName);
        SampleMapNames[pos].changed();     
        loadVoiceByName(pos, myTrimmedName);
            
        randVoiceParams(pos);
            

        component.setValue(0);
    }
}

const var SineWaveGenerator1 = Synth.getChildSynth("Sine Wave Generator1");
//const var Constant1 = Synth.getModulator("Constant1");
inline function onFMDepthKnob(component, value)
{
	//
	local pos = FMDepths.indexOf(component);
	FMConstants[pos].setIntensity(1 - value);
    aSnapshot.updateAVoice(pos);
	
};




inline function onFMOctaveKnob(component, value)
{
	//
	local pos = FMOctaves.indexOf(component);
	SineWaveGenerators[pos].setAttribute(SineWaveGenerators[pos].OctaveTranspose, value);
    aSnapshot.updateAVoice(pos);
};

inline function onSampleMapName(component, value)
{
	//
	local pos = SampleMapNames.indexOf(component);
	//Console.print("in the name..." + component.get("text") );
	loadVoiceByName(pos, SampleMapNames[pos].get("text"));
};

//
//loadVoiceByName(0, SampleMapNames[0].get("text"));
//loadVoiceByName(1, SampleMapNames[1].get("text"));
//loadVoiceByName(2, SampleMapNames[2].get("text"));

function onNoteOn()
{   
    // keyswitching
    if(Message.getNoteNumber() == MIDINoteTarget + 1)
    {
        Snapshot1OnOff.setValue(1);
        //Console.print("herereeee");
        Snapshot1OnOff.changed();
        SnapshotOnOff2.setValue(0);
        SnapshotOnOff2.changed();
        SnapshotOnOff3.setValue(0);
        SnapshotOnOff3.changed();
        paintKeys();
    }
    if(Message.getNoteNumber() == MIDINoteTarget + 2)
    {
        SnapshotOnOff2.setValue(1);
        SnapshotOnOff2.changed();
        Snapshot1OnOff.setValue(0);
        Snapshot1OnOff.changed();
        SnapshotOnOff3.setValue(0);
        SnapshotOnOff3.changed();
        paintKeys();
    }
    if(Message.getNoteNumber() == MIDINoteTarget + 3)
    {
        SnapshotOnOff3.setValue(1);
        SnapshotOnOff3.changed();
        SnapshotOnOff2.setValue(0);
        SnapshotOnOff2.changed();
        Snapshot1OnOff.setValue(0);
        Snapshot1OnOff.changed();
        paintKeys();
    }
    
    
    // note processing 
    if (Message.getNoteNumber() == 36 && MIDINoteTarget != 36)
        Message.ignoreEvent(true);
        
    if (Message.getNoteNumber() == MIDINoteTarget)
        Message.setNoteNumber(36);
        
    
    
}
 function onNoteOff()
{
	if (Message.getNoteNumber() == MIDINoteTarget)
        Message.setNoteNumber(36);
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
 