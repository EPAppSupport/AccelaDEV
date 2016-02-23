function wfGetHistCount(wfHistCapID,wfHistTask,wfHistTaskStatus)
{
   var count=0;
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
         if (wfTask.getTaskDescription().toUpperCase().equals(wfHistTask.toUpperCase()) && wfTask.getDisposition().toUpperCase().equals(wfHistTaskStatus.toUpperCase()))
         {
            count=count+1;
         }   
      }
   }
  return count;
}
