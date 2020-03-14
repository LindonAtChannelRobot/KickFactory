Content.makeFrontInterface(700, 670);

Engine.loadAudioFilesIntoPool();



//==== the painting functions  ============
//=========================================

function paintVolumeSelector(g){
    // this.data.VoiceNum contains the voice number

    // check if the velocity mod is on
    if (TheGainVelocities[this.data.VoiceNum].isBypassed() == true)
    {
        g.setColour(MOD_OFF_COLOUR);
        //Console.print("off colur being set");
    }else{
        g.setColour(MOD_ON_COLOUR);
        //Console.print("ON colur being set");
    };
    g.drawLine(0, (this.getWidth()/3)-2, this.getHeight()-2, this.getHeight()-2, 1.5);
    // check to see if the envelope is on
    if (TheGainEnvelopes[this.data.VoiceNum].isBypassed() == true)
    {
        g.setColour(MOD_OFF_COLOUR);
        //Console.print("off colur being set");
    }else{
        g.setColour(MOD_ON_COLOUR);
        //Console.print("ON colur being set");
    };
    g.drawLine((this.getWidth()/3), ((this.getWidth()/3)*2)-2, this.getHeight()-2, this.getHeight()-2, 1.5);
    // check to see if the LFO is on
    if (TheGainLFOs[this.data.VoiceNum].isBypassed() == true)
    {
        g.setColour(MOD_OFF_COLOUR);
        //Console.print("off colur being set");
    }else{
        g.setColour(MOD_ON_COLOUR);
        //Console.print("ON colur being set");
    };
    g.drawLine(((this.getWidth()/3)*2), ((this.getWidth()/3)*3), this.getHeight()-2, this.getHeight()-2, 1.5);
};

function paintPanSelector(g){
    // this.data.VoiceNum contains the voice number

    // check if the pan LFO mod is on
    if (ThePanLFOs[this.data.VoiceNum].isBypassed() == true)
    {
        g.setColour(MOD_OFF_COLOUR);
        //Console.print("off colur being set");
    }else{
        g.setColour(MOD_ON_COLOUR);
        //Console.print("ON colur being set");
    };
    g.drawLine(0, this.getWidth(), this.getHeight()-2, this.getHeight()-2, 1.5);
};

function paintPitchSelector(g){
    // this.data.VoiceNum contains the voice number

    // check if the velocity mod is on
    if (ThePitchVelocities[this.data.VoiceNum].isBypassed() == true)
    {
        g.setColour(MOD_OFF_COLOUR);
        //Console.print("off colur being set");
    }else{
        g.setColour(MOD_ON_COLOUR);
        //Console.print("ON colur being set");
    };
    g.drawLine(0, (this.getWidth()/3)-2, this.getHeight()-2, this.getHeight()-2, 1.5);
    // check to see if the envelope is on
    if (ThePitchEnvelopes[this.data.VoiceNum].isBypassed() == true)
    {
        g.setColour(MOD_OFF_COLOUR);
        //Console.print("off colur being set");
    }else{
        g.setColour(MOD_ON_COLOUR);
        //Console.print("ON colur being set");
    };
    g.drawLine((this.getWidth()/3), ((this.getWidth()/3)*2)-2, this.getHeight()-2, this.getHeight()-2, 1.5);
    // check to see if the LFO is on
    if (ThePitchLFOs[this.data.VoiceNum].isBypassed() == true)
    {
        g.setColour(MOD_OFF_COLOUR);
        //Console.print("off colur being set");
    }else{
        g.setColour(MOD_ON_COLOUR);
        //Console.print("ON colur being set");
    };
    g.drawLine(((this.getWidth()/3)*2), ((this.getWidth()/3)*3), this.getHeight()-2, this.getHeight()-2, 1.5);
};

function paintFreqSelector(g){
    // this.data.VoiceNum contains the voice number

    // check if the velocity mod is on
    if (TheFreqVelocities[this.data.VoiceNum].isBypassed() == true)
    {
        g.setColour(MOD_OFF_COLOUR);
        //Console.print("off colur being set");
    }else{
        g.setColour(MOD_ON_COLOUR);
        //Console.print("ON colur being set");
    };
    g.drawLine(0, (this.getWidth()/3)-2, this.getHeight()-2, this.getHeight()-2, 1.5);
    // check to see if the envelope is on
    if (TheFreqEnvelopes[this.data.VoiceNum].isBypassed() == true)
    {
        g.setColour(MOD_OFF_COLOUR);
        //Console.print("off colur being set");
    }else{
        g.setColour(MOD_ON_COLOUR);
        //Console.print("ON colur being set");
    };
    g.drawLine((this.getWidth()/3), ((this.getWidth()/3)*2)-2, this.getHeight()-2, this.getHeight()-2, 1.5);
    // check to see if the LFO is on
    if (TheFreqLFOs[this.data.VoiceNum].isBypassed() == true)
    {
        g.setColour(MOD_OFF_COLOUR);
        //Console.print("off colur being set");
    }else{
        g.setColour(MOD_ON_COLOUR);
        //Console.print("ON colur being set");
    };
    g.drawLine(((this.getWidth()/3)*2), ((this.getWidth()/3)*3), this.getHeight()-2, this.getHeight()-2, 1.5);
};

//========= ON MOUSE CALLBACK Functions
//=====================================


function onVolumeModPanel(event) 
{
    
    if (event.clicked)  
    {
        VELVelocityTable.set("processorId","GainVelocity" + (this.data.VoiceNum+1));
        VELEnvelopeTile.set("Data","{\r\n  \"ProcessorId\": \"" + "GainEnvelope" + (this.data.VoiceNum+1) + "\",\r\n  \"Index\": -1\r\n}" );
        VELLFOTable.set("processorId","GainLFO" + (this.data.VoiceNum+1));
        VELTargetNameDisplay.set("text","VOLUME MODULATORS VOICE " + (this.data.VoiceNum+1));
        
        targetVelocity = TheGainVelocities[this.data.VoiceNum];
        targetEnvelope = TheGainEnvelopes[this.data.VoiceNum];
        targetLFO = TheGainLFOs[this.data.VoiceNum];
        targetType = 1; //1 = gain, 2 = Pitch, 3 = Freq
        targetVoice = this.data.VoiceNum;
        //set up the knobs to show the correct values...
        VELVelocityOnOff.setValue(1 - targetVelocity.isBypassed());
        VELVelocityDepthKnob.setValue(targetVelocity.getIntensity());
        VELEnvelopeOnOff.setValue(1 - targetEnvelope.isBypassed());
        VELEnvelopeAmountKnob.setValue(targetEnvelope.getIntensity());
        VELEnvelopeAttackKnob.setValue(targetEnvelope.getAttribute(targetEnvelope.Attack));
        VELEnvelopeDecayKnob.setValue(targetEnvelope.getAttribute(targetEnvelope.Decay));
        VELEnvelopeSustainKnob.setValue(targetEnvelope.getAttribute(targetEnvelope.Sustain));
        VELEnvelopeReleaseKnob.setValue(targetEnvelope.getAttribute(targetEnvelope.Release));
        VELLFOOnOff.setValue(1 - targetLFO.isBypassed());
        VELLFOSpeedKnob.setValue(targetLFO.getAttribute(targetLFO.Frequency));
        VELLFODepthKnob.setValue(targetLFO.getIntensity());
        VELLFOSmoothKnob.setValue(targetLFO.getAttribute(targetLFO.SmoothingTime));
        //
        for (i = 0; i < NUM_VOICES; i++)
        {
            SampleMapSelectors[i].setValue(0);
        };
        VoiceSelectorPanel.showControl(false);
        VELPanel.showControl(true);
    };
};

function onFreqModPanel(event) 
{
    
    if (event.clicked)  
    {
        VELVelocityTable.set("processorId","FreqVelocity" + (this.data.VoiceNum+1));
        VELEnvelopeTile.set("Data","{\r\n  \"ProcessorId\": \"" + "FreqEnvelope" + (this.data.VoiceNum+1) + "\",\r\n  \"Index\": -1\r\n}" );
        VELLFOTable.set("processorId","FreqLFO" + (this.data.VoiceNum+1));
        VELTargetNameDisplay.set("text","FREQUENCY MODULATORS VOICE " + (this.data.VoiceNum+1));
        
        targetVelocity = TheFreqVelocities[this.data.VoiceNum];
        targetEnvelope = TheFreqEnvelopes[this.data.VoiceNum];
        targetLFO = TheFreqLFOs[this.data.VoiceNum];
        targetVoice = this.data.VoiceNum;
        targetType = 3; //1 = gain, 2 = Pitch, 3 = Freq
        //set up the knobs to show the correct values...
        VELVelocityOnOff.setValue(1 - targetVelocity.isBypassed());
        VELVelocityDepthKnob.setValue(targetVelocity.getIntensity());
        VELEnvelopeOnOff.setValue(1 - targetEnvelope.isBypassed());
        VELEnvelopeAmountKnob.setValue(targetEnvelope.getIntensity());
        VELEnvelopeAttackKnob.setValue(targetEnvelope.getAttribute(targetEnvelope.Attack));
        VELEnvelopeDecayKnob.setValue(targetEnvelope.getAttribute(targetEnvelope.Decay));
        VELEnvelopeSustainKnob.setValue(targetEnvelope.getAttribute(targetEnvelope.Sustain));
        VELEnvelopeReleaseKnob.setValue(targetEnvelope.getAttribute(targetEnvelope.Release));
        VELLFOOnOff.setValue(1 - targetLFO.isBypassed());
        VELLFOSpeedKnob.setValue(targetLFO.getAttribute(targetLFO.Frequency));
        VELLFODepthKnob.setValue(targetLFO.getIntensity());
        VELLFOSmoothKnob.setValue(targetLFO.getAttribute(targetLFO.SmoothingTime));
        //
        VELPanel.showControl(true);
    };
};
function onPitchModPanel(event) 
{
    
    if (event.clicked)  
    {
        VELVelocityTable.set("processorId","PitchVelocity" + (this.data.VoiceNum+1));
        VELEnvelopeTile.set("Data","{\r\n  \"ProcessorId\": \"" + "PitchEnvelope" + (this.data.VoiceNum+1) + "\",\r\n  \"Index\": -1\r\n}" );
        VELLFOTable.set("processorId","PitchLFO" + (this.data.VoiceNum+1));
        VELTargetNameDisplay.set("text","PITCH MODULATORS VOICE " + (this.data.VoiceNum+1));
        
        targetVelocity = ThePitchVelocities[this.data.VoiceNum];
        targetEnvelope = ThePitchEnvelopes[this.data.VoiceNum];
        targetLFO = ThePitchLFOs[this.data.VoiceNum];
        targetVoice = this.data.VoiceNum;
        targetType = 2; //1 = gain, 2 = Pitch, 3 = Freq
        //set up the knobs to show the correct values...
        VELVelocityOnOff.setValue(1 - targetVelocity.isBypassed());
        VELVelocityDepthKnob.setValue(targetVelocity.getIntensity());
        VELEnvelopeOnOff.setValue(1 - targetEnvelope.isBypassed());
        VELEnvelopeAmountKnob.setValue(targetEnvelope.getIntensity());
        VELEnvelopeAttackKnob.setValue(targetEnvelope.getAttribute(targetEnvelope.Attack));
        VELEnvelopeDecayKnob.setValue(targetEnvelope.getAttribute(targetEnvelope.Decay));
        VELEnvelopeSustainKnob.setValue(targetEnvelope.getAttribute(targetEnvelope.Sustain));
        VELEnvelopeReleaseKnob.setValue(targetEnvelope.getAttribute(targetEnvelope.Release));
        VELLFOOnOff.setValue(1 - targetLFO.isBypassed());
        VELLFOSpeedKnob.setValue(targetLFO.getAttribute(targetLFO.Frequency));
        VELLFODepthKnob.setValue(targetLFO.getIntensity());
        VELLFOSmoothKnob.setValue(targetLFO.getAttribute(targetLFO.SmoothingTime));
        //
        VELPanel.showControl(true);
    };
};

function onPanModPanel(event) 
{
    
    if (event.clicked)  
    {
        VELPanel.showControl(false);
        APTable.set("processorId","PanLFO" + (this.data.VoiceNum+1));
        targetLFO = ThePanLFOs[this.data.VoiceNum];
        targetVoice = this.data.VoiceNum;
        APOnOff.setValue(1 - targetLFO.isBypassed());
        APSpeedKnob.setValue(targetLFO.getAttribute(targetLFO.Frequency));
        APDepthKnob.setValue(targetLFO.getIntensity());
        APSmoothKnob.setValue(targetLFO.getAttribute(targetLFO.SmoothingTime));
        
        APPanel.showControl(true);
    };
};


// ====== GENERAL FUNCTIONS ==========
//====================================
inline function setVoicePositions()
{
    /*if (PanelExpanders[0].getValue() == 0 && PanelExpanders[1].getValue() == 0 && PanelExpanders[2].getValue() == 0)
    {
        Console.print("getting defensive");
        PanelExpanders[0].setValue(1);

    };
*/
        
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
        

};




function loadVoiceByName(voiceNumber, voiceName)
{
    
    //
    //Console.print("trying to change voice num:" + voiceNumber + " to:" + voiceName);
    TheSamplers[voiceNumber].asSampler().loadSampleMap(voiceName);
    //Console.print("setting the index to 1 for Audiowaveform:" + AudioWaveForms[voiceNumber]);
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
        Console.print("found a favourite");
        VoiceFavouritesButton.setValue(1);
        trimmedName = selectedName.substring(3,selectedName.length);
    }else{
        VoiceFavouritesButton.setValue(0);
        trimmedName = selectedName;
    };
    //Console.print("in load voice:" + trimmedName);
    

    SampleMapNames[voiceNum].set("text",trimmedName);
    VoiceBarNames[voiceNum].set("text",trimmedName);
    
    Console.print("ccccccccccccc");
    
    loadVoiceByName(voiceNum, trimmedName);
    // TheSamplers[voiceNum].asSampler().loadSampleMap(trimmedName);
    
};

inline function setShape(voice,shape)  // sets the curve of the vioice shaper
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

// SEQUENCER FUNCTIONS
const var VelocityLikelihood = Content.getComponent("VelocityLikelihood");
const var Envelope1Likelihood = Content.getComponent("Envelope1Likelihood");
const var Envelope2Likelihood = Content.getComponent("Envelope2Likelihood");
const var Envelope3Likelihood = Content.getComponent("Envelope3Likelihood");
const var FX1Likelihood = Content.getComponent("FX1Likelihood");
const var FX2Likelihood = Content.getComponent("FX2Likelihood");
const var FX3Likelihood = Content.getComponent("FX3Likelihood");
const var FX4Likelihood = Content.getComponent("FX4Likelihood");
const var FX1Selector = Content.getComponent("FX1Selector");
const var FX2Selector = Content.getComponent("FX2Selector");
const var FX3Selector = Content.getComponent("FX3Selector");
const var FX4Selector = Content.getComponent("FX4Selector");


inline function displayPattern(pidx)
{
    local iidx;
    
    Console.print("displaying pattern:" + pidx);
    SeqStepsKnob.setValue(patterns[pidx].stepCount);
    SeqStepsKnob.changed();
    SeqSwing.setValue(patterns[pidx].swingAmount);
    VelocityLikelihood.setValue(patterns[pidx].velocityRow.likelihood);
    Envelope1Likelihood.setValue(patterns[pidx].EnvelopeRowSet[0].likelihood);
    Envelope2Likelihood.setValue(patterns[pidx].EnvelopeRowSet[1].likelihood);
    Envelope3Likelihood.setValue(patterns[pidx].EnvelopeRowSet[2].likelihood);
    FX1Likelihood.setValue(patterns[pidx].FXRowSet[0].likelihood);
    FX2Likelihood.setValue(patterns[pidx].FXRowSet[1].likelihood);
    FX3Likelihood.setValue(patterns[pidx].FXRowSet[2].likelihood);
    FX4Likelihood.setValue(patterns[pidx].FXRowSet[3].likelihood);
    FX1Selector.setValue(patterns[pidx].FXRowSet[0].fxSelection + 1);
    FX2Selector.setValue(patterns[pidx].FXRowSet[1].fxSelection + 1);
    FX3Selector.setValue(patterns[pidx].FXRowSet[2].fxSelection + 1);
    FX4Selector.setValue(patterns[pidx].FXRowSet[3].fxSelection + 1);
    
    for (iidx= 0; iidx< NUM_STEPS; iidx++)
    {
        VelocitySetters[iidx].setValue(patterns[pidx].velocityRow.velocityValues[iidx]);
        Env1Setters[iidx].setValue(patterns[pidx].EnvelopeRowSet[0].envelopeValues[iidx].power);
        Env2Setters[iidx].setValue(patterns[pidx].EnvelopeRowSet[1].envelopeValues[iidx].power);
        Env3Setters[iidx].setValue(patterns[pidx].EnvelopeRowSet[2].envelopeValues[iidx].power);
        FX1Setters[iidx].setValue(patterns[pidx].FXRowSet[0].fxValues[iidx]);
        FX2Setters[iidx].setValue(patterns[pidx].FXRowSet[1].fxValues[iidx]);
        FX3Setters[iidx].setValue(patterns[pidx].FXRowSet[2].fxValues[iidx]);
        FX4Setters[iidx].setValue(patterns[pidx].FXRowSet[3].fxValues[iidx]);
    
    };
    /*
    myPattern = {
        stepCount: stepCount,
        swingAmount:swingAmt,
        velocityRow:velRow,
        EnvelopeRowSet:EnvRowSet,
        FXRowSet:FXRowSet
        */
        
};

inline function getFXTargetArray(selection)
{
    local FXTargetArray = []; // first element is the target, second is the param, third is ratio
    switch(selection)
    {
        case 1:  //OFF
            FXTargetArray[0] = -99;
            FXTargetArray[1] = -99;
            FXTargetArray[2] = -99;
            break;
        case 2:  //Layer 1 Filter freq
            FXTargetArray[0] = TheFilters[0];
            FXTargetArray[1] = TheFilters[0].Frequency;
            FXTargetArray[2] = (20000 - 20)/100;
            break;
        case 3:  //Layer 1 Shape Drive
            FXTargetArray[0] = ThePolyShapes[0];
            FXTargetArray[1] = ThePolyShapes[0].Drive;
            FXTargetArray[2] = 60/100;
            break;
        case 4:  //Layer 1 Rvb wet
            FXTargetArray[0] = TheReverbs[0];
            FXTargetArray[1] = TheReverbs[0].WetGain;
            FXTargetArray[2] = -1;
            break;
        case 5:  //Layer 1 Rvb dry
            FXTargetArray[0] = TheReverbs[0];
            FXTargetArray[1] = TheReverbs[0].DryGain;
            FXTargetArray[2] = -1;
            break;
        case 6:  //Layer 1 Delay Mix
            FXTargetArray[0] = TheDelays[0];
            FXTargetArray[1] = TheDelays[0].Mix;
            FXTargetArray[2] = 0.01;
            break;
                
    };
    return FXTargetArray;
};

function paintKeys()
{
    var kdx;
    for (kdx = 0;kdx <128; kdx++)
    {
        if (kdx == MIDINoteTarget)
        {
            Engine.setKeyColour(kdx, KEY_TARGET);
        }else{
            Engine.setKeyColour(kdx, KEY_DARK);
        };
        
        if (kdx >= (MIDINoteTarget + 4) && kdx <= (MIDINoteTarget + 11))
            Engine.setKeyColour(kdx, KEY_PATTERN);
    }; 
};
    

// CONSTANTS

const var NUM_VOICES = 3;
const var NUM_PATTERNS = 8;
const var NUM_STEPS = 16;
const var PANELSTARTY = 0;
const var CLOSEDPANELSIZE = 22;
const var OPENPANELSIZE = 421;
const var MOD_OFF_COLOUR = 0xFF666666;
const var MOD_ON_COLOUR = 0xFF4AA025;
const var KEY_DARK = 0x88112211;
const var KEY_TARGET = 0xAA44BB44;
const var KEY_PATTERN = 0x88BBBB44;
// GENERAL VARIABLES
var targetVelocity;
var targetEnvelope;
var targetLFO;
var targetVoice;
var targetType;
var currentSelectingVoice;
var playingPattern;
var currentSelectingPattern;
var currentSelectingEnvelopeVoice;
var currentSelectingEnvelopeSlot;
var list = [];
var MIDINoteTarget;

// OBJECTS
// Velocity Row
function newVelocityRow(likelihood, valueArray)
{
    var myVelo = {
        likelihood:likelihood,
        velocityValues:valueArray
    };
    return myVelo;
};


// Envelope
function newEnvelope(pwr, amt, atk, hold, dec, sust, rel){
  var myEnv = {
      power:pwr,
      amount:amt,
      attack:atk,
      hold:hold,
      decay:dec,
      sustain:sust,
      release:rel
  };
  return myEnv;
};

// Envelope Row
function newEnvelopeRow(likelihood,defaultEnv){
    var envArray = [];
    var ii;
    var myEnvRow = {
        likelihood:likelihood,
        defaultEnvelope:defaultEnv,
        envelopeValues:envArray
    };
    for (ii = 0; ii <16; ii++)
    {
        myEnvRow.envelopeValues[ii] = defaultEnv;
    };
    return myEnvRow;
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
function newPattern(stepCount, swingAmt, velRow, EnvRowSet, FXRowSet)
{
    var myPattern = {
        stepCount: stepCount,
        swingAmount:swingAmt,
        velocityRow:velRow,
        EnvelopeRowSet:EnvRowSet,
        FXRowSet:FXRowSet
    };
    return myPattern;
    
}


var myVeloRow = newVelocityRow(99,[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);
Console.print(myVeloRow.likelihood);
Console.print(myVeloRow.velocityValues[15]);
//myRow.velocityValues[0] = 2345;
Console.print(myVeloRow.velocityValues[0]);


// UI widgets 

// The Header widgets
const var VoicesButton = Content.getComponent("VoicesButton");
const var SeqButton = Content.getComponent("SeqButton");
const var Randomise = Content.getComponent("Randomise");
const var Settings = Content.getComponent("Settings");


// the voice widgets
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


// the sequencer widgets
var PatternSelectors = [];
var VelocitySetters = [];
var Env1Setters = [];
var Env2Setters = [];
var Env3Setters = [];
var FX1Setters = [];;
var FX2Setters = [];;
var FX3Setters = [];;
var FX4Setters = [];

const var MIDISelector = Content.getComponent("MIDISelector");

const var SeqStepsKnob = Content.getComponent("SeqStepsKnob");




// internal element arrays

var TheSamplers = [];
var TheMidiMuters = [];
var TheGainVelocities = [];
var TheGainEnvelopes = [];
var TheGainLFOs = [];

var TheSeqDisplayEnvelopes = [];

var ThePanLFOs = [];

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

const var MasterGain = Synth.getEffect("MasterGain");


// the panels and their widgets
const var AllVoicesPanel = Content.getComponent("AllVoicesPanel");
const var SequencerPanel = Content.getComponent("SequencerPanel")


const var VELPanel = Content.getComponent("VELPanel");
const var VELPanelCloser = Content.getComponent("VELPanelCloser");
VELPanelCloser.setControlCallback(onVELPanelCloser);


const var VELTargetNameDisplay = Content.getComponent("VELTargetNameDisplay");
const var VELVelocityTable = Content.getComponent("VELVelocityTable");
const var VELEnvelopeTile = Content.getComponent("VELEnvelopeTile");
const var VELLFOTable = Content.getComponent("VELLFOTable");
const var VELVelocityOnOff = Content.getComponent("VELVelocityOnOff");
const var VELVelocityDepthKnob = Content.getComponent("VELVelocityDepthKnob");
const var VELEnvelopeOnOff = Content.getComponent("VELEnvelopeOnOff");
const var VELEnvelopeLock = Content.getComponent("VELEnvelopeLock");
const var VELEnvelopeAmountKnob = Content.getComponent("VELEnvelopeAmountKnob");
const var VELEnvelopeAttackKnob = Content.getComponent("VELEnvelopeAttackKnob");
const var VELEnvelopeDecayKnob = Content.getComponent("VELEnvelopeDecayKnob");
const var VELEnvelopeSustainKnob = Content.getComponent("VELEnvelopeSustainKnob");
const var VELEnvelopeReleaseKnob = Content.getComponent("VELEnvelopeReleaseKnob");
const var VELLFOOnOff = Content.getComponent("VELLFOOnOff");
const var VELLFOSpeedKnob = Content.getComponent("VELLFOSpeedKnob");
const var VELLFODepthKnob = Content.getComponent("VELLFODepthKnob");
const var VELLFOSmoothKnob = Content.getComponent("VELLFOSmoothKnob");




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

//set up a default - and a saved pattern set
include("patternStart.js");  //the default set
var patterns = Engine.loadFromJSON("PatternSettings.js");
if (patterns =="")
{
    patterns = patternStart;
    Engine.dumpAsJSON(patterns,"PatternSettings.js");
    
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
    VolumeModPanels[idx].setPaintRoutine(paintVolumeSelector);
    VolumeModPanels[idx].data.VoiceNum = idx;
    VolumeModPanels[idx].data.DisplayState = false;
    
    
    PitchModPanels[idx] = Content.getComponent("PitchModPanel" + (idx+1));
    PitchModPanels[idx].setMouseCallback(onPitchModPanel);
    PitchModPanels[idx].setPaintRoutine(paintPitchSelector);
    PitchModPanels[idx].data.VoiceNum = idx;
    PitchModPanels[idx].data.DisplayState = false;
    
    
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
    FreqModPanels[idx] = Content.getComponent("FreqModPanel" + (idx+1));
    FreqModPanels[idx].setMouseCallback(onFreqModPanel);
    FreqModPanels[idx].setPaintRoutine(paintFreqSelector);
    FreqModPanels[idx].data.VoiceNum = idx;
    FreqModPanels[idx].data.DisplayState = false;
    
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
    TheGainLFOs[idx] = Synth.getModulator("GainLFO" + (idx+1));

    TheSeqDisplayEnvelopes[idx] = Synth.getModulator("SeqDisplayEnvelope" + (idx+1));
    
    ThePanLFOs[idx] = Synth.getModulator("PanLFO" + (idx+1));
    
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



// ================   sequencer widget set ups ==============
    
for(idx = 0; idx < NUM_PATTERNS; idx++)
{
    PatternSelectors[idx] = Content.getComponent("PatternSelector" + (idx+1));
    PatternSelectors[idx].setControlCallback(onPatternSelector);

};
    
    
    
    
// The UI call backs           

// The header call backs


inline function onVoicesButtonControl(component, value)
{
	//
	if (PanelExpanders[0].getValue() == 0 && PanelExpanders[1].getValue() == 0 && PanelExpanders[2].getValue() == 0)
    {
        PanelExpanders[0].setValue(1);
        PanelExpanders[0].changed();
    }; 
	AllVoicesPanel.showControl(VoicesButton.getValue());
	SequencerPanel.showControl(SeqButton.getValue());
};

Content.getComponent("VoicesButton").setControlCallback(onVoicesButtonControl);


inline function onSeqButtonControl(component, value)
{
	//
	AllVoicesPanel.showControl(VoicesButton.getValue());
	SequencerPanel.showControl(SeqButton.getValue());
};

Content.getComponent("SeqButton").setControlCallback(onSeqButtonControl);



//  ---   VOICE LEVEL CALL BACKS   ---

inline function onPanelExpander(component, value)
{
    VoiceSelectorPanel.showControl(false);
    VELPanel.showControl(false);
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

inline function onSampleMapSelector(component, value)
{
    //show 
	for (i=0;i < NUM_VOICES;i++)
    {
        if (component == SampleMapSelectors[i])
        {
            currentSelectingVoice = i;
            DialogName.set("text","VOICE " + (i + 1) + " DRUM SOUNDS");
            VoiceSelectorPanel.showControl(value);
            VoiceSampleMaps.setValue(VoiceSampleMaps.getValue());
        }else{
        // not the selected voice make sure this selector is OFF
            SampleMapSelectors[i].setValue(0);
        };
    };
    VELPanel.showControl(false);
};


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
                Console.print("category is:" + CatNum);
                Console.print("voice position is:" + SoundNum);
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
                Console.print("loading a sound - using category:"+ CatNum);
                Console.print("loading a sound - and sound number:"+ SoundNum);
                
                
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
        }else{           // nope - set just this one
            if (component == FilterOnOffs[i]){
                TheFilters[i].setBypassed(1 - value);
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
        }else{
            if (component == FilterSelectors[idx])  // off so set just this one
            {
                setFilter(idx,value);
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
        }else{          // nope - just set this one
            if (component == FreqKnobs[i]){
                TheFilters[i].setAttribute(TheFilters[i].Frequency,value);
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
        }else{          // nope - just set this one
            if (component == ResKnobs[i]){
                TheFilters[i].setAttribute(TheFilters[i].Q,value);
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
        }else{           // nope - set just this one
            if (component == ShapeOnOffs[i]){
                ThePolyShapes[i].setBypassed(1 - value);
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
        }else{
            if (component == ShapeSelectors[i])
            {
                setShape(i,value);
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
        }else{          // nope - just set this one
            if (component == ShapeDrives[i]){
                ThePolyShapes[i].setAttribute(ThePolyShapes[i].Drive, value);
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
        }else{
            if (component == ShapeBiass[i]){
                ThePolyShapes[i].setAttribute(ThePolyShapes[i].Bias, value);
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
        }else{           // nope - set just this one
            if (component == ReverbOnOffs[i]){
                TheReverbs[i].setBypassed(1 - value);
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
        }else{
            if (component == ReverbSelectors[i])
            {
                setIRs(i,value);
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
        }else{
            if (component == ReverbWets[i]){
                TheReverbs[i].setAttribute(TheReverbs[i].WetGain, value);
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
        }else{
            if (component == ReverbDrys[i]){
                TheReverbs[i].setAttribute(TheReverbs[i].DryGain, value);
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
        }else{           // nope - set just this one
            if (component == DelayOnOffs[i]){
                TheDelays[i].setBypassed(1 - value);
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
        }else{
            if (component == DelayTimes[i]){
                TheDelays[i].setAttribute(TheDelays[i].DelayTimeLeft, value);
                TheDelays[i].setAttribute(TheDelays[i].DelayTimeRight, value);
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
        }else{
            if (component == DelayTimes[i]){
                TheDelays[i].setAttribute(TheDelays[i].FeedbackLeft, value);
                TheDelays[i].setAttribute(TheDelays[i].FeedbackRight, value);
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
        }else{
            if (component == DelayMixes[i]){
                TheDelays[i].setAttribute(TheDelays[i].Mix, value);
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
        }else{           // nope - set just this one
            if (component == CompOnOffs[i]){
                TheComps[i].setBypassed(1 - value);
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
        }else{
            if (component == CompThresholds[i]){
                TheComps[i].setAttribute(TheComps[i].CompressorThreshold, value);
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
        }else{
            if (component == CompRatios[i]){
                TheComps[i].setAttribute(TheComps[i].CompressorRatio, value);
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
        }else{
            if (component == CompAttacks[i]){
                TheComps[i].setAttribute(TheComps[i].CompressorAttack, value);
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
        }else{
            if (component == CompReleases[i]){
                TheComps[i].setAttribute(TheComps[i].CompressorRelease, value);
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





// =========================== the VEL dialog panel call backs  ==============
inline function onVELPanelCloser(component, value)
{
  VELPanel.showControl(false);
};


inline function onVELVelocityOnOffControl(component, value)
{
	targetVelocity.setBypassed(1 - value);
	VolumeModPanels[targetVoice].repaint();
	PitchModPanels[targetVoice].repaint();
	FreqModPanels[targetVoice].repaint();
};
Content.getComponent("VELVelocityOnOff").setControlCallback(onVELVelocityOnOffControl);


inline function onVELVelocityDepthKnobControl(component, value)
{
    targetVelocity.setIntensity(value);
};
Content.getComponent("VELVelocityDepthKnob").setControlCallback(onVELVelocityDepthKnobControl);


inline function onVELEnvelopeOnOffControl(component, value)
{
    local lock = VELEnvelopeLock.getValue();
    local dx;
    if (lock == 1)
    {
        for(dx = 0;dx < NUM_VOICES; dx++)
        {
            switch (targetType){
                case 1:  //Gain modulating
                    TheGainEnvelopes[dx].setBypassed(1 - value);
                    VolumeModPanels[dx].repaint();
                    break;
                case 2:  //Pitch modulating
                    ThePitchEnvelopes[dx].setBypassed(1 - value);
                    PitchModPanels[dx].repaint();
                    break;
                case 3:  //Freq modulating
                    TheFreqEnvelopes[dx].setBypassed(1 - value);
                    FreqModPanels[dx].repaint();
                    break;
            };
        };
    }else{
        targetEnvelope.setBypassed(1 - value);
        VolumeModPanels[targetVoice].repaint();
        PitchModPanels[targetVoice].repaint();
        FreqModPanels[targetVoice].repaint();
    };
};
Content.getComponent("VELEnvelopeOnOff").setControlCallback(onVELEnvelopeOnOffControl);



inline function onVELEnvelopeLockControl(component, value)
{
	//
	reg i;

    
    for (idx=0;idx < NUM_VOICES;idx++)
    {
        CompLocks[idx].setValue(value); //set the shape lock either all on or all off
    };
    
    if (value == 1) // we are setting them all ON...look for this one
    {
        for (i=0;i < NUM_VOICES;i++)
        {
            switch (targetType){
                case 1:  //Gain modulating
                    TheGainEnvelopes[i].setBypassed(1 - VELEnvelopeOnOff.getValue());
                    TheGainEnvelopes[i].setIntensity(VELEnvelopeAmountKnob.getValue());
                    TheGainEnvelopes[i].setAttribute(VELEnvelopeAttackKnob.Attack, value);
                    TheGainEnvelopes[i].setAttribute(VELEnvelopeHoldKnob.Hold, value);
                    TheGainEnvelopes[i].setAttribute(VELEnvelopeDecayKnob.Decay, value);
                    TheGainEnvelopes[i].setAttribute(VELEnvelopeSustainKnob.Sustain, value);
                    TheGainEnvelopes[i].setAttribute(VELEnvelopeReleaseKnob.Release, value);
                case 2:  //Pitch modulating
                    ThePitchEnvelopes[i].setBypassed(1 - VELEnvelopeOnOff.getValue());
                    ThePitchEnvelopes[i].setIntensity(VELEnvelopeAmountKnob.getValue());
                    ThePitchEnvelopes[i].setAttribute(VELEnvelopeAttackKnob.Attack, value);
                    ThePitchEnvelopes[i].setAttribute(VELEnvelopeHoldKnob.Hold, value);
                    ThePitchEnvelopes[i].setAttribute(VELEnvelopeDecayKnob.Decay, value);
                    ThePitchEnvelopes[i].setAttribute(VELEnvelopeSustainKnob.Sustain, value);
                    ThePitchEnvelopes[i].setAttribute(VELEnvelopeReleaseKnob.Release, value);
                case 3:  //Freq modulating
                    TheFreqEnvelopes[i].setBypassed(1 - VELEnvelopeOnOff.getValue());
                    TheFreqEnvelopes[i].setIntensity(VELEnvelopeAmountKnob.getValue());
                    TheFreqEnvelopes[i].setAttribute(VELEnvelopeAttackKnob.Attack, value);
                    TheFreqEnvelopes[i].setAttribute(VELEnvelopeHoldKnob.Hold, value);
                    TheFreqEnvelopes[i].setAttribute(VELEnvelopeDecayKnob.Decay, value);
                    TheFreqEnvelopes[i].setAttribute(VELEnvelopeSustainKnob.Sustain, value);
                    TheFreqEnvelopes[i].setAttribute(VELEnvelopeReleaseKnob.Release, value);
            };
        };
    };
    
};

Content.getComponent("VELEnvelopeLock").setControlCallback(onVELEnvelopeLockControl);



inline function onVELEnvelopeAmountKnobControl(component, value)
{
    local lock = VELEnvelopeLock.getValue();
    local dx;
    if (lock == 1)
    {
        for(dx = 0;dx < NUM_VOICES; dx++)
        {
            switch (targetType){
                case 1:  //Gain modulating
                    TheGainEnvelopes[dx].setIntensity(value);
                    break;
                case 2:  //Pitch modulating
                    ThePitchEnvelopes[dx].setIntensity(value);
                    break;
                case 3:  //Freq modulating
                    TheFreqEnvelopes[dx].setIntensity(value);
                    break;
            };
        };
    }else{
        if (targetType == 2) // pitch so we need the amount to be a multiple of 12
        {
            targetEnvelope.setIntensity(value *12);
        }else{
            targetEnvelope.setIntensity(value);
        };
    };
};
Content.getComponent("VELEnvelopeAmountKnob").setControlCallback(onVELEnvelopeAmountKnobControl);


inline function onVELEnvelopeAttackKnobControl(component, value)
{
    local lock = VELEnvelopeLock.getValue();
    local dx;
    if (lock == 1)
    {
        for(dx = 0;dx < NUM_VOICES; dx++)
        {
            switch (targetType){
                case 1:  //Gain modulating
                    TheGainEnvelopes[dx].setAttribute(targetEnvelope.Attack, value);
                    break;
                case 2:  //Pitch modulating
                    ThePitchEnvelopes[dx].setAttribute(targetEnvelope.Attack, value);
                    break;
                case 3:  //Freq modulating
                    TheFreqEnvelopes[dx].setAttribute(targetEnvelope.Attack, value);
                    break;
            };
        };
    }else{
	    targetEnvelope.setAttribute(targetEnvelope.Attack, value);
    };
};
Content.getComponent("VELEnvelopeAttackKnob").setControlCallback(onVELEnvelopeAttackKnobControl);





inline function onVELEnvelopeHoldKnobControl(component, value)
{
    local lock = VELEnvelopeLock.getValue();
    local dx;
    if (lock == 1)
    {
        for(dx = 0;dx < NUM_VOICES; dx++)
        {
            switch (targetType){
                case 1:  //Gain modulating
                    TheGainEnvelopes[dx].setAttribute(targetEnvelope.Hold, value);
                    break;
                case 2:  //Pitch modulating
                    ThePitchEnvelopes[dx].setAttribute(targetEnvelope.Hold, value);
                    break;
                case 3:  //Freq modulating
                    TheFreqEnvelopes[dx].setAttribute(targetEnvelope.Hold, value);
                    break;
            };
        };
    }else{
	    targetEnvelope.setAttribute(targetEnvelope.Hold, value);
    };
};

Content.getComponent("VELEnvelopeHoldKnob").setControlCallback(onVELEnvelopeHoldKnobControl);



inline function onVELEnvelopeDecayKnobControl(component, value)
{
    
    local lock = VELEnvelopeLock.getValue();
    local dx;
    if (lock == 1)
    {
        for(dx = 0;dx < NUM_VOICES; dx++)
        {
            switch (targetType){
                case 1:  //Gain modulating
                    TheGainEnvelopes[dx].setAttribute(targetEnvelope.Decay, value);
                    break;
                case 2:  //Pitch modulating
                    ThePitchEnvelopes[dx].setAttribute(targetEnvelope.Decay, value);
                    break;
                case 3:  //Freq modulating
                    TheFreqEnvelopes[dx].setAttribute(targetEnvelope.Decay, value);
                    break;
            };
        };
    }else{
	    targetEnvelope.setAttribute(targetEnvelope.Decay, value);
    };
};
Content.getComponent("VELEnvelopeDecayKnob").setControlCallback(onVELEnvelopeDecayKnobControl);


inline function onVELEnvelopeSustainKnobControl(component, value)
{
    local lock = VELEnvelopeLock.getValue();
    local dx;
    if (lock == 1)
    {
        for(dx = 0;dx < NUM_VOICES; dx++)
        {
            switch (targetType){
                case 1:  //Gain modulating
                    TheGainEnvelopes[dx].setAttribute(targetEnvelope.Sustain, value);
                    break;
                case 2:  //Pitch modulating
                    ThePitchEnvelopes[dx].setAttribute(targetEnvelope.Sustain, value);
                    break;
                case 3:  //Freq modulating
                    TheFreqEnvelopes[dx].setAttribute(targetEnvelope.Sustain, value);
                    break;
            };
        };
    }else{ 
	    targetEnvelope.setAttribute(targetEnvelope.Sustain, value);
    };
};
Content.getComponent("VELEnvelopeSustainKnob").setControlCallback(onVELEnvelopeSustainKnobControl);


inline function onVELEnvelopeReleaseKnobControl(component, value)
{
	local lock = VELEnvelopeLock.getValue();
    local dx;
    if (lock == 1)
    {
        for(dx = 0;dx < NUM_VOICES; dx++)
        {
            switch (targetType){
                case 1:  //Gain modulating
                    TheGainEnvelopes[dx].setAttribute(targetEnvelope.Release, value);
                    break;
                case 2:  //Pitch modulating
                    ThePitchEnvelopes[dx].setAttribute(targetEnvelope.Release, value);
                    break;
                case 3:  //Freq modulating
                    TheFreqEnvelopes[dx].setAttribute(targetEnvelope.Release, value);
                    break;
            };
        };
    }else{ 
	    targetEnvelope.setAttribute(targetEnvelope.Release, value);
    };
};
Content.getComponent("VELEnvelopeReleaseKnob").setControlCallback(onVELEnvelopeReleaseKnobControl);


inline function onVELLFOOnOffControl(component, value)
{
	targetLFO.setBypassed(1 - value);
	VolumeModPanels[targetVoice].repaint();
	PitchModPanels[targetVoice].repaint();
	FreqModPanels[targetVoice].repaint();
};
Content.getComponent("VELLFOOnOff").setControlCallback(onVELLFOOnOffControl);


inline function onVELLFOSpeedKnobControl(component, value)
{
	targetLFO.setAttribute(targetLFO.Frequency, value);
};
Content.getComponent("VELLFOSpeedKnob").setControlCallback(onVELLFOSpeedKnobControl);


inline function onVELLFODepthKnobControl(component, value)
{
	targetLFO.setIntensity(value);
};
Content.getComponent("VELLFODepthKnob").setControlCallback(onVELLFODepthKnobControl);


inline function onVELLFOSmoothKnobControl(component, value)
{
	targetLFO.setAttribute(targetLFO.SmoothingTime, value);
};
Content.getComponent("VELLFOSmoothKnob").setControlCallback(onVELLFOSmoothKnobControl);



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
            Console.print("found a favourite");
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


// ================SEQ Widget CALL BACKS==============



inline function onpatternsSaveControl(component, value)
{
	//
	Engine.dumpAsJSON(patterns,"PatternSettings.js");
	component.setValue(0);
};

Content.getComponent("patternsSave").setControlCallback(onpatternsSaveControl);



inline function onPatternSelector(component, value)
{
    if (value){
        for(i = 0 ;i < NUM_PATTERNS; i++)
        {
            if (component ==  PatternSelectors[i]){
                Console.print("pattern:::::" + patterns[i]);
                playingPattern = patterns[i];
                currentSelectingPattern = i;
                displayPattern(i);
            };
        };
    };
};


inline function onPatternGeneratorControl(component, value)
{
    local myNewPattern;
    local stepCount = 2 + Math.floor(Math.random()*15);
    local swingAmt = Math.random();
    local velRow;
    local valueSet = [];
    local EnvRowSet = [];
    local myEnv;
    local FXRowSet = [];
    local myFXRow;
    local myFX;
    local myFXSelection;
    local likelihood;
    local iidx;
    local jjdx;
    
	if (value)
    {
        // set up a  velocity row
        likelihood = Math.floor(Math.random()*201);
        for (iidx = 0; iidx < stepCount; iidx++)
        {
            valueSet[iidx] = Math.floor(Math.random()*128);
        };
        velRow = newVelocityRow(likelihood, valueSet);
        
        //set up the envelope rows
        myEnv = newEnvelope(0, 1, 500, 500, 800, -15, 6000);
        for (iidx = 0; iidx < 3; iidx++)
        {
            likelihood = Math.floor(Math.random()*201);
            EnvRowSet[iidx] = newEnvelopeRow(likelihood,myEnv);
        };
        // set up the fx rows
        for (iidx = 0; iidx < 4; iidx++)
        {
            likelihood = Math.floor(Math.random()*201);
            myFXSelection = Math.floor(Math.random()*7);   // just using the first 7 values for now...
            myFX = getFXTargetArray(myFXSelection);
            // create some values
            valueSet = [];
            for (jjdx=0; jjdx < 16; jjdx++)
            {
                valueSet[jjdx] = Math.floor(Math.random()*101);
            };
            FXRowSet[iidx] = newFXRow(likelihood, myFX, myFXSelection, valueSet);
        };
        myNewPattern = newPattern(stepCount, swingAmt, velRow, EnvRowSet, FXRowSet);
        patterns[currentSelectingPattern] = myNewPattern;
        component.setValue(0);
        displayPattern(currentSelectingPattern);
    }
};

Content.getComponent("PatternGenerator").setControlCallback(onPatternGeneratorControl);

SeqStepsKnob.setControlCallback(onSeqStepsKnob);


inline function onSeqStepsKnob(component, value)
{
	//
	for(kdx = 0; kdx < NUM_STEPS; kdx++)
    {
        if (kdx > (value -1))
        {
            VelocitySetters[kdx].showControl(false);
            Env1Setters[kdx].showControl(false);
            Env2Setters[kdx].showControl(false);
            Env3Setters[kdx].showControl(false);
            FX1Setters[kdx].showControl(false);
            FX2Setters[kdx].showControl(false);
            FX3Setters[kdx].showControl(false);
            FX4Setters[kdx].showControl(false);
        }else{
            
            VelocitySetters[kdx].showControl(true);
            Env1Setters[kdx].showControl(true);
            Env2Setters[kdx].showControl(true);
            Env3Setters[kdx].showControl(true);
            FX1Setters[kdx].showControl(true);
            FX2Setters[kdx].showControl(true);
            FX3Setters[kdx].showControl(true);
            FX4Setters[kdx].showControl(true);
        };
    
    };
    patterns[currentSelectingPattern].stepCount = value;
    //Engine.dumpAsJSON(patterns,"PatternSettings.js");
    
};
const var SeqSwing = Content.getComponent("SeqSwing");

// set up the arrays for the seq row widgets
for (idx=0;idx<NUM_STEPS;idx++)
{
    VelocitySetters[idx] = Content.getComponent("SeqVelocityStep" + (idx+1));
    VelocitySetters[idx].setControlCallback(onVelocitySetter);
    Env1Setters[idx] = Content.getComponent("SeqEnvelope1Step" + (idx+1));
    Env1Setters[idx].setControlCallback(onEnv1Setter);
    Env2Setters[idx] = Content.getComponent("SeqEnvelope2Step" + (idx+1));
    Env2Setters[idx].setControlCallback(onEnv2Setter);
    Env3Setters[idx] = Content.getComponent("SeqEnvelope3Step" + (idx+1));
    Env3Setters[idx].setControlCallback(onEnv3Setter);
    FX1Setters[idx] = Content.getComponent("SeqFX1Step" + (idx+1));
    FX1Setters[idx].setControlCallback(onFX1Setter);
    FX2Setters[idx] = Content.getComponent("SeqFX2Step" + (idx+1));
    FX2Setters[idx].setControlCallback(onFX2Setter);
    FX3Setters[idx] = Content.getComponent("SeqFX3Step" + (idx+1));
    FX3Setters[idx].setControlCallback(onFX3Setter);
    FX4Setters[idx] = Content.getComponent("SeqFX4Step" + (idx+1));
    FX4Setters[idx].setControlCallback(onFX4Setter);
};

// the edit envelope panle widgets..
const var SeqEnvelopeEditPanel = Content.getComponent("SeqEnvelopeEditPanel");
const var SeqEnvTitle = Content.getComponent("SeqEnvTitle");
const var SeqEnvelopeTile = Content.getComponent("SeqEnvelopeTile");
const var SeqEnvelopeAmountKnob = Content.getComponent("SeqEnvelopeAmountKnob");
SeqEnvelopeAmountKnob.setControlCallback(onSeqEnvelopeAmount);
const var SeqEnvelopeAttackKnob = Content.getComponent("SeqEnvelopeAttackKnob");
SeqEnvelopeAttackKnob.setControlCallback(onSeqEnvelopeAttack);
const var SeqEnvelopeHoldKnob = Content.getComponent("SeqEnvelopeHoldKnob");
SeqEnvelopeHoldKnob.setControlCallback(onSeqEnvelopeHold);
const var SeqEnvelopeDecayKnob = Content.getComponent("SeqEnvelopeDecayKnob");
SeqEnvelopeDecayKnob.setControlCallback(onSeqEnvelopeDecay);
const var SeqEnvelopeSustainKnob = Content.getComponent("SeqEnvelopeSustainKnob");
SeqEnvelopeSustainKnob.setControlCallback(onSeqEnvelopeSustain);
const var SeqEnvelopeReleaseKnob = Content.getComponent("SeqEnvelopeReleaseKnob");
SeqEnvelopeReleaseKnob.setControlCallback(onSeqEnvelopeRelease);



inline function onVelocitySetter(component, value)
{
	//
	for(kdx = 0; kdx < NUM_STEPS; kdx++)
    {
        if(component == VelocitySetters[kdx])
        {
            patterns[currentSelectingPattern].velocityRow.velocityValues[kdx] = value;
        };
    };
};


inline function onEnv1Setter(component, value)
{
	//
	currentSelectingEnvelopeVoice = 0;
	for(kdx = 0; kdx < NUM_STEPS; kdx++)
    {
        if(component == Env1Setters[kdx])
        {
            patterns[currentSelectingPattern].EnvelopeRowSet[0].envelopeValues[kdx].power = value;
            if (value) // turned on this envelope
            {   
                currentSelectingEnvelopeSlot = kdx;
                // we will want to see an envelope drawn so set the dialogs display to the display envelope for this voice
                SeqEnvelopeTile.set("Data", "{\r\n  \"ProcessorId\": \"SeqDisplayEnvelope1\",\r\n  \"Index\": -1\r\n}");
                // start by setting the panel values to this envelopes seq setting
                SeqEnvTitle.set("text","ENVELOPE 1 STEP " + (kdx+1));
                SeqEnvelopeAmountKnob.setValue(patterns[currentSelectingPattern].EnvelopeRowSet[currentSelectingEnvelopeVoice].envelopeValues[kdx].amount);
                SeqEnvelopeAmountKnob.changed();
                /*
                Console.print("setting sustainvalues......" + patterns[currentSelectingPattern].EnvelopeRowSet[currentSelectingEnvelopeVoice].envelopeValues[currentSelectingEnvelopeSlot].sustain);
                Console.print("for pattern:" + currentSelectingPattern);
                Console.print("for Row:" + currentSelectingEnvelopeVoice);
                Console.print("for Slot:" + currentSelectingEnvelopeSlot);
                */
                SeqEnvelopeAttackKnob.setValue(patterns[currentSelectingPattern].EnvelopeRowSet[currentSelectingEnvelopeVoice].envelopeValues[currentSelectingEnvelopeSlot].attack);
                SeqEnvelopeAttackKnob.changed();
                SeqEnvelopeHoldKnob.setValue(patterns[currentSelectingPattern].EnvelopeRowSet[currentSelectingEnvelopeVoice].envelopeValues[currentSelectingEnvelopeSlot].hold);
                SeqEnvelopeHoldKnob.changed();
                SeqEnvelopeDecayKnob.setValue(patterns[currentSelectingPattern].EnvelopeRowSet[currentSelectingEnvelopeVoice].envelopeValues[currentSelectingEnvelopeSlot].decay);
                SeqEnvelopeDecayKnob.changed();
                SeqEnvelopeSustainKnob.setValue(patterns[currentSelectingPattern].EnvelopeRowSet[currentSelectingEnvelopeVoice].envelopeValues[currentSelectingEnvelopeSlot].sustain);
                SeqEnvelopeSustainKnob.changed();
                SeqEnvelopeReleaseKnob.setValue(patterns[currentSelectingPattern].EnvelopeRowSet[currentSelectingEnvelopeVoice].envelopeValues[currentSelectingEnvelopeSlot].release);
                SeqEnvelopeReleaseKnob.changed();
                
                SeqEnvelopeEditPanel.showControl(true);
            }else{
                // ok so close the dialog - and set the envelope to the default 
                SeqEnvelopeEditPanel.showControl(false);
                //
            };
        };
    };
};


inline function onEnv2Setter(component, value)
{
	//
	currentSelectingEnvelopeVoice = 1;
	for(kdx = 0; kdx < NUM_STEPS; kdx++)
    {
        if(component == Env2Setters[kdx])
        {
            patterns[currentSelectingPattern].EnvelopeRowSet[currentSelectingEnvelopeVoice].envelopeValues[kdx].power = value;
            if (value) // turned on this envelope
            {   
                
                
                currentSelectingEnvelopeSlot = kdx;
                // we will want to see an envelope drawn so set the dialogs display to the display envelope for this voice
                SeqEnvelopeTile.set("Data", "{\r\n  \"ProcessorId\": \"SeqDisplayEnvelope2\",\r\n  \"Index\": -1\r\n}");
                // start by setting the panel values to this envelopes seq setting
                SeqEnvTitle.set("text","ENVELOPE 2 STEP " + (kdx+1));
                SeqEnvelopeAmountKnob.setValue(patterns[currentSelectingPattern].EnvelopeRowSet[currentSelectingEnvelopeVoice].envelopeValues[kdx].amount);
                SeqEnvelopeAmountKnob.changed();
                /*
                Console.print("setting sustainvalues......" + patterns[currentSelectingPattern].EnvelopeRowSet[currentSelectingEnvelopeVoice].envelopeValues[currentSelectingEnvelopeSlot].sustain);
                Console.print("for pattern:" + currentSelectingPattern);
                Console.print("for Row:" + currentSelectingEnvelopeVoice);
                Console.print("for Slot:" + currentSelectingEnvelopeSlot);
                */
                SeqEnvelopeAttackKnob.setValue(patterns[currentSelectingPattern].EnvelopeRowSet[currentSelectingEnvelopeVoice].envelopeValues[currentSelectingEnvelopeSlot].attack);
                SeqEnvelopeAttackKnob.changed();
                SeqEnvelopeHoldKnob.setValue(patterns[currentSelectingPattern].EnvelopeRowSet[currentSelectingEnvelopeVoice].envelopeValues[currentSelectingEnvelopeSlot].hold);
                SeqEnvelopeHoldKnob.changed();
                SeqEnvelopeDecayKnob.setValue(patterns[currentSelectingPattern].EnvelopeRowSet[currentSelectingEnvelopeVoice].envelopeValues[currentSelectingEnvelopeSlot].decay);
                SeqEnvelopeDecayKnob.changed();
                SeqEnvelopeSustainKnob.setValue(patterns[currentSelectingPattern].EnvelopeRowSet[currentSelectingEnvelopeVoice].envelopeValues[currentSelectingEnvelopeSlot].sustain);
                SeqEnvelopeSustainKnob.changed();
                SeqEnvelopeReleaseKnob.setValue(patterns[currentSelectingPattern].EnvelopeRowSet[currentSelectingEnvelopeVoice].envelopeValues[currentSelectingEnvelopeSlot].release);
                SeqEnvelopeReleaseKnob.changed();
                
                SeqEnvelopeEditPanel.showControl(true);
            }else{
                // ok so close the dialog - and set the envelope to the default 
                SeqEnvelopeEditPanel.showControl(false);
                //
            };
        };
    };
};
inline function onEnv3Setter(component, value)
{
	//
	currentSelectingEnvelopeVoice = 2;
	for(kdx = 0; kdx < NUM_STEPS; kdx++)
    {
        if(component == Env3Setters[kdx])
        {
            patterns[currentSelectingPattern].EnvelopeRowSet[currentSelectingEnvelopeVoice].envelopeValues[kdx].power = value;
            if (value) // turned on this envelope
            {   
                
                
                currentSelectingEnvelopeSlot = kdx;
                // we will want to see an envelope drawn so set the dialogs display to the display envelope for this voice
                SeqEnvelopeTile.set("Data", "{\r\n  \"ProcessorId\": \"SeqDisplayEnvelope2\",\r\n  \"Index\": -1\r\n}");
                // start by setting the panel values to this envelopes seq setting
                SeqEnvTitle.set("text","ENVELOPE 3 STEP " + (kdx+1));
                SeqEnvelopeAmountKnob.setValue(patterns[currentSelectingPattern].EnvelopeRowSet[currentSelectingEnvelopeVoice].envelopeValues[kdx].amount);
                SeqEnvelopeAmountKnob.changed();
                /*
                Console.print("setting sustainvalues......" + patterns[currentSelectingPattern].EnvelopeRowSet[currentSelectingEnvelopeVoice].envelopeValues[currentSelectingEnvelopeSlot].sustain);
                Console.print("for pattern:" + currentSelectingPattern);
                Console.print("for Row:" + currentSelectingEnvelopeVoice);
                Console.print("for Slot:" + currentSelectingEnvelopeSlot);
                */
                SeqEnvelopeAttackKnob.setValue(patterns[currentSelectingPattern].EnvelopeRowSet[currentSelectingEnvelopeVoice].envelopeValues[currentSelectingEnvelopeSlot].attack);
                SeqEnvelopeAttackKnob.changed();
                SeqEnvelopeHoldKnob.setValue(patterns[currentSelectingPattern].EnvelopeRowSet[currentSelectingEnvelopeVoice].envelopeValues[currentSelectingEnvelopeSlot].hold);
                SeqEnvelopeHoldKnob.changed();
                SeqEnvelopeDecayKnob.setValue(patterns[currentSelectingPattern].EnvelopeRowSet[currentSelectingEnvelopeVoice].envelopeValues[currentSelectingEnvelopeSlot].decay);
                SeqEnvelopeDecayKnob.changed();
                SeqEnvelopeSustainKnob.setValue(patterns[currentSelectingPattern].EnvelopeRowSet[currentSelectingEnvelopeVoice].envelopeValues[currentSelectingEnvelopeSlot].sustain);
                SeqEnvelopeSustainKnob.changed();
                SeqEnvelopeReleaseKnob.setValue(patterns[currentSelectingPattern].EnvelopeRowSet[currentSelectingEnvelopeVoice].envelopeValues[currentSelectingEnvelopeSlot].release);
                SeqEnvelopeReleaseKnob.changed();
                
                SeqEnvelopeEditPanel.showControl(true);
            }else{
                // ok so close the dialog - and set the envelope to the default 
                SeqEnvelopeEditPanel.showControl(false);
                //
            };
        };
    };
};


inline function onFX1Setter(component, value)
{
	//
	local fxRowis = 0;
	for(kdx = 0; kdx < NUM_STEPS; kdx++)
    {
        if(component == FX1Setters[kdx])
        {
            patterns[currentSelectingPattern].FXRowSet[fxRowis].fxValues[kdx] = value;
        };
    };
};

inline function onFX2Setter(component, value)
{
	//
	local fxRowis = 1;
	for(kdx = 0; kdx < NUM_STEPS; kdx++)
    {
        if(component == FX2Setters[kdx])
        {
            patterns[currentSelectingPattern].FXRowSet[fxRowis].fxValues[kdx] = value;
        };
    };
};

inline function onFX3Setter(component, value)
{
	//
	local fxRowis = 2;
	for(kdx = 0; kdx < NUM_STEPS; kdx++)
    {
        if(component == FX3Setters[kdx])
        {
            patterns[currentSelectingPattern].FXRowSet[fxRowis].fxValues[kdx] = value;
        };
    };
};

inline function onFX4Setter(component, value)
{
	//
	local fxRowis = 3;
	for(kdx = 0; kdx < NUM_STEPS; kdx++)
    {
        if(component == FX4Setters[kdx])
        {
            patterns[currentSelectingPattern].FXRowSet[fxRowis].fxValues[kdx] = value;
        };
    };
};
            
        

inline function onSeqEnvEditCloserControl(component, value)
{
	
    SeqEnvelopeEditPanel.showControl(false);
};

Content.getComponent("SeqEnvEditCloser").setControlCallback(onSeqEnvEditCloserControl);



inline function onSeqEnvelopeAmount(component, value)
{
	patterns[currentSelectingPattern].EnvelopeRowSet[currentSelectingEnvelopeVoice].envelopeValues[currentSelectingEnvelopeSlot].amount = value;
};


inline function onSeqEnvelopeAttack(component, value)
{   
    
    /*Console.print("in the attack call back....");
    Console.print("for pattern:" + currentSelectingPattern);
    Console.print("for Row:" + currentSelectingEnvelopeVoice);
    Console.print("for Slot:" + currentSelectingEnvelopeSlot);
    Console.print("Setting value>" + value);
    */
    //save the value in the seq
	patterns[currentSelectingPattern].EnvelopeRowSet[currentSelectingEnvelopeVoice].envelopeValues[currentSelectingEnvelopeSlot].attack = value;
	//modify the display envelope
	TheSeqDisplayEnvelopes[currentSelectingEnvelopeVoice].setAttribute(TheSeqDisplayEnvelopes[currentSelectingEnvelopeVoice].Attack, value);
};


inline function onSeqEnvelopeHold(component, value)
{
	//save the value in the seq
	patterns[currentSelectingPattern].EnvelopeRowSet[currentSelectingEnvelopeVoice].envelopeValues[currentSelectingEnvelopeSlot].hold = value;
	//modify the display envelope
	TheSeqDisplayEnvelopes[currentSelectingEnvelopeVoice].setAttribute(TheSeqDisplayEnvelopes[currentSelectingEnvelopeVoice].Hold, value);
};

inline function onSeqEnvelopeDecay(component, value)
{
	
	//save the value in the seq
	patterns[currentSelectingPattern].EnvelopeRowSet[currentSelectingEnvelopeVoice].envelopeValues[currentSelectingEnvelopeSlot].decay = value;
	//modify the display envelope
	TheSeqDisplayEnvelopes[currentSelectingEnvelopeVoice].setAttribute(TheSeqDisplayEnvelopes[currentSelectingEnvelopeVoice].Decay, value);
};

inline function onSeqEnvelopeSustain(component, value)
{
	
	//save the value in the seq
	//Console.print("setting sustain for slot:" + currentSelectingEnvelopeSlot);
	patterns[currentSelectingPattern].EnvelopeRowSet[currentSelectingEnvelopeVoice].envelopeValues[currentSelectingEnvelopeSlot].sustain = value;
	//modify the display envelope
	TheSeqDisplayEnvelopes[currentSelectingEnvelopeVoice].setAttribute(TheSeqDisplayEnvelopes[currentSelectingEnvelopeVoice].Sustain, value);
};

inline function onSeqEnvelopeRelease(component, value)
{
	
	//save the value in the seq
	patterns[currentSelectingPattern].EnvelopeRowSet[currentSelectingEnvelopeVoice].envelopeValues[currentSelectingEnvelopeSlot].release = value;
	//modify the display envelope
	TheSeqDisplayEnvelopes[currentSelectingEnvelopeVoice].setAttribute(TheSeqDisplayEnvelopes[currentSelectingEnvelopeVoice].Release, value);
};
/*

var currentSelectingEnvelopeVoice;
var currentSelectingEnvelopeSlot;

myPattern = {
        stepCount: stepCount,
        swingAmount:swingAmt,
        velocityRow:velRow,
        EnvelopeRowSet:EnvRowSet,
        FXRowSet:FXRowSet
        
        var myVelo = {
        likelihood:likelihood,
        velocityValues:valueArray
    };
        var myEnvRow = {
        likelihood:likelihood,
        defaultEnvelope:defaultEnv,
        envelopeValues:envArray
    };
    
    var myEnv = {
      power:pwr,
      amount:amt,
      attack:atk,
      hold:hold,
      decay:dec,
      sustain:sust,
      release:rel
  };
        var myFXRow = {
        likelihood:likelihood,
        fxTarget: fx,
        fxSelection: selection,
        fxValues: valueArray
  };
  
  
        */
        

  paintKeys();
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
 