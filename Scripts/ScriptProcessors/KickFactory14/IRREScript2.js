const var IRREPitch2 = Synth.getModulator("IRREPitch2");
const var IRREPercent2 = Content.getComponent("IRREPercent2");
const var IRREEQ2 = Synth.getEffect("IRREEQ2");function onNoteOn()
{
	local eqdx = 0 * IRREEQ2.BandOffset + IRREEQ2.Gain;
	local rnd = ((Math.random()* 16) - 8) * IRREPercent2.getValue();
	IRREEQ2.setAttribute(eqdx, rnd);
	rnd = ((Math.random()* 4) - 2) * IRREPercent2.getValue();
	IRREPitch2.setIntensity(rnd);
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
 