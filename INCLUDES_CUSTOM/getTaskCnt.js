function getTaskCnt(wfHistCapID,wfHistTask) // Optional variable to count Task by a Task Status. List each Task Status as a string.
{
   // Will return count of Task that have been resulted by a certain Task Status
   // wfHistTaskStatus - Names of Task Status to be counted with Task.  Enter one or more Task Statuses separated by commas and each in double-quotes.

   var count=0;
   var workflowResult=aa.workflow.getHistory(wfHistCapID);
   var wfTask;
   var useTaskStatus = false;
   var taskStatusArray = new Array();
   if (arguments.length > 2) //Array used to hold Task Status to count
      {
      useTaskStatus = true;
      for (var i=2; i<arguments.length; i++)
          taskStatusArray.push(arguments[i].toUpperCase());
      }

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
         if (wfTask.getTaskDescription().toUpperCase().equals(wfHistTask.toUpperCase()) && (!useTaskStatus || exists(wfTask.getDisposition().toUpperCase(),taskStatusArray)))
         {
            count=count+1;
         }
      }
   }
  return count;
}
