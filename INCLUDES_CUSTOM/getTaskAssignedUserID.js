
/**
Gets and returns the user id from the assigned staff to the task requested.

Params:
taskName: The task from where the user id is needed.

Returns:
staffID: The user id stored in Accela.

By: David Rivera
Created On: 3/19/2015

**/
function getTaskAssignedUserID(taskName)
{
	var wfRslt = aa.workflow.getTasks(capId);
	var wfObj = wfRslt.getOutput();
        var staffID = "";
	
	for(i in wfObj)
	{
		if(wfObj[i].getTaskDescription() == taskName)
		{
			var fullName = wfObj[i].getAssignedStaff().getFullName();
			var nameArray = fullName.split(' ');
			if (nameArray.length == 3)
			{
				usrObj = aa.person.getUser(nameArray[0],nameArray[1],nameArray[2]).getOutput();
				staffID = usrObj.getUserID();
				return staffID;
			}
			else if(nameArray.length == 2)
			{
				usrObj = aa.person.getUser(nameArray[0],"",nameArray[1]).getOutput();
				staffID = usrObj.getUserID();
				return staffID;
			}
			else
			{
				return staffID;
			}
		}
	}
}

