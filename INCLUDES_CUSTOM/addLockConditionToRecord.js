
/**
Creates a lock condition to the specified record. 
This is working for all Building records
when the workflow task 'Close' has a "Closed" status.

By: David Rivera
Created on: 1/28/2015
**/
function addLockConditionToRecord(capId, cType, cName, cComment, cSeverity, cStatus)
{
	var sysDate = aa.date.getCurrentDate();
	var currentUserID = aa.env.getValue("CurrentUserID");
	var systemUserObj = aa.person.getUser(currentUserID).getOutput();
	//var addCapCondResult = aa.capCondition.addCapCondition(capId, "Record", "TEst", "Test", sysDate, null, sysDate, null,null, "Lock", systemUserObj, systemUserObj, "Applied(Applied)", currentUserID, "A");
	var addCapCondResult = aa.capCondition.addCapCondition(capId, cType, cName, cComment, sysDate, null, sysDate, null,null, cSeverity, systemUserObj, systemUserObj, cStatus, currentUserID, "A");
	if (addCapCondResult.getSuccess())
        	{
		logDebug("Successfully added condition");
		}
	else
		{
		logDebug( "**ERROR: adding condition (" + cSeverity+ "): " + addCapCondResult.getErrorMessage());
		}	
}
