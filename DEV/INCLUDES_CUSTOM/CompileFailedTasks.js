

function CompileFailedTasks(myCapId)
{
var wfStep = null;
var wfProcess = null;
var wfComment = null;
var wfNote = null;
var wfDue = null;
var wfTaskObj = null;
var fTask = null;
var message = null;
var wfDate = null;
var wfTask = null;
var wfStatus = null;
var status = "Failed";
var failedTasks = null;
var pText = "";

var wfObj = aa.workflow.getTasks(capId).getOutput();
for (i in wfObj)
	{
	fTask = wfObj[i];

                wfTask = fTask.getTaskDescription();
                wfComment = fTask.getDispositionComment();
                wfStatus = fTask.getDisposition();
		wfTaskObj = fTask
		if (fTask.getDisposition().equals(status))
		{
                  failedTasks = failedTasks + "<b>" + wfTask + "</b> has a <b>" + wfStatus + "</b> review. Comments: <b>" + wfComment + "</b> <BR>";
                  //myVar = myVar + "<br><br>Following Task have Failed reviews, if you have any questions contact your case manager.<br><br> " +;
		   //aa.print(wfTask + " - " + wfStatus + " - " + wfComment);

		}

	  }
	  
	  if(failedTasks != null)
		  {
                    failedTasks = ("<br><br>The following Tasks have Failed reviews. If you have any questions please contact your Case Manager below:<br><br> "  + failedTasks);

                  }

return failedTasks;
}

