const var TargetMIDIValue = Content.getComponent("TargetMIDIValue");

var thePlayedID = 0;
function onNoteOn()
{
    Message.ignoreEvent(true);
    if (Message.getNoteNumber() == TargetMIDIValue.getValue())
        {
            Console.print("played the target note:" + Message.getNoteNumber());
            Console.print("target IS:" + TargetMIDIValue.getValue());
            thePlayedID = Synth.playNote(36, Message.getVelocity());
        
        }
}
 function onNoteOff()
{
     if (Message.getNoteNumber() == TargetMIDIValue.getValue())
     {
        
        Message.ignoreEvent(true);
        if (thePlayedID != 0)
        {
            Synth.noteOffByEventId(thePlayedID);
            Console.print("ended the target note");
            thePlayedID = 0;
        };
     };
	
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
 