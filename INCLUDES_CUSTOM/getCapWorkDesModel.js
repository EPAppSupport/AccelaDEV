function getCapWorkDesModel(capId)
{
	capWorkDesModel = null;
	var s_result = aa.cap.getCapWorkDesByPK(capId);
	if(s_result.getSuccess())
	{
		capWorkDesModel = s_result.getOutput();
	}
	else
	{
		aa.print("ERROR: Failed to get CapWorkDesModel: " + s_result.getErrorMessage());
		capWorkDesModel = null;	
	}
	return capWorkDesModel;
}
