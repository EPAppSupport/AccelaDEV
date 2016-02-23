function workDescGet(pCapId)
	{
	//Gets work description
	//07SSP-00037/SP5017
	//
	var workDescResult = aa.cap.getCapWorkDesByPK(pCapId);
	
	if (!workDescResult.getSuccess())
		{
		logDebug("ERROR: Failed to get work description.  Returning null.  Error Message: " + workDescResult.getErrorMessage()); 
		return null;
		}
		
	var workDescObj = workDescResult.getOutput();
	var workDesc = workDescObj.getDescription();
	
	return workDesc;
	}


//-----------WorkflowTaskUpdateAfter--------------------

//added for ASI TABLE ASI FIELD UPDATE TEST
