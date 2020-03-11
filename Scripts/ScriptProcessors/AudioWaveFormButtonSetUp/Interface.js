Content.makeFrontInterface(600, 500);

const var AudioWaveform1 = Content.getComponent("AudioWaveform1");



const var ComboBox1 = Content.getComponent("ComboBox1");
const var Sampler1 = Synth.getSampler("Sampler1");


inline function onRefreshControl(component, value)
{
    local list = [];
    
    
	for(sound in Sampler1.createSelection(".*"))
    {
        list.push(sound.get(Sampler1.FileName));
    }
    
    ComboBox1.set("items", list.join("\n"));
};

Content.getComponent("Refresh").setControlCallback(onRefreshControl);






inline function onButton1Control(component, value)
{
	AudioWaveform1.set("sampleIndex", 0);
};

Content.getComponent("Button1").setControlCallback(onButton1Control);

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
 