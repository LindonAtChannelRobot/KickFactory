const var IRREEQ1 = Synth.getEffect("IRREEQ1");
const var IRREPitch1 = Synth.getModulator("IRREPitch1");
const var IRREPercent1 = Content.getComponent("IRREPercent1");





function onNoteOn()
{
	local eqdx = 0 * IRREEQ1.BandOffset + IRREEQ1.Gain;
	local rnd = ((Math.random()* 16) - 8) * IRREPercent1.getValue();
	IRREEQ1.setAttribute(eqdx, rnd);
	rnd = ((Math.random()* 4) - 2) * IRREPercent1.getValue();
	IRREPitch1.setIntensity(rnd);
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
 