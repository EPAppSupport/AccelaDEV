
function wfGetHistStatuses(wfHistCapID)
{
   var returnString="";
   var workflowResult=aa.workflow.getHistory(wfHistCapID);
   var wfTask;

   if (!workflowResult.getSuccess())
   {
      logMessage("**ERROR: Failed to get workflow history object: " + workflowResult.getErrorMessage()); 
   }
   else
   {
      var wfObj = workflowResult.getOutput();
      for (i in wfObj)
      {
         wfTask = wfObj[i];

         returnString=returnString+"Task = "+wfTask.getTaskDescription().toUpperCase()+" Status = "+  wfTask.getDisposition().toUpperCase()+";\n";
      }
   }
   return returnString;
}
