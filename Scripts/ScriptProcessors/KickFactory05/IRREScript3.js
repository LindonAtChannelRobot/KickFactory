const var IRREEQ3 = Synth.getEffect("IRREEQ3");
const var IRREPitch3 = Synth.getModulator("IRREPitch3");
const var IRREPercent3 = Content.getComponent("IRREPercent3");function onNoteOn()
{
	local eqdx = 0 * IRREEQ3.BandOffset + IRREEQ3.Gain;
	local rnd = ((Math.random()* 16) - 8) * IRREPercent3.getValue();
	IRREEQ3.setAttribute(eqdx, rnd);
	rnd = ((Math.random()* 4) - 2) * IRREPercent3.getValue();
	IRREPitch3.setIntensity(rnd);
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
 