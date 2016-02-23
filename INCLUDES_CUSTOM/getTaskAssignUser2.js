


function getTaskAssignUser2(wfstr) // optional process name.
{

var useProcess = false;

var processName = "";

if (arguments.length == 2)

{

processName = arguments[1]; // subprocess

useProcess = true;

}

var workflowResult = aa.workflow.getTasks(capId);

if (workflowResult.getSuccess())

 wfObj = workflowResult.getOutput();

 else

   { logMessage("**ERROR: Failed to get workflow object: " + s_capResult.getErrorMessage()); return false; }

for (i in wfObj)

{

 var fTask = wfObj[i];

 if ((fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase()) || wfstr == "*")  && (!useProcess || fTask.getProcessCode().equals(processName)))

{

var taskAssignUser = aa.person.getUser(fTask.getAssignedStaff().getFirstName(),fTask.getAssignedStaff().getMiddleName(),fTask.getAssignedStaff().getLastName()).getOutput();

if (taskAssignUser != null)

{

// re-grabbing for userid.

wfUserObj = aa.person.getUser(fTask.getAssignedStaff().getFirstName(),fTask.getAssignedStaff().getMiddleName(),fTask.getAssignedStaff().getLastName()).getOutput();

return wfUserObj.getUserID();

}

}

}

return false;

}





