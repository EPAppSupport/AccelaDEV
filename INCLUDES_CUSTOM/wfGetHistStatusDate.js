function wfGetHistStatusDate(pCapID,wfHistTask,wfHistTaskStatus)
{
   var returnStatusDate="";
   var wfHistStatusDate="";
   var workflowResult=aa.workflow.getHistory(pCapID);
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
            var _Year = wfTask.getStatusDate().getYear()+1900;
            var _Day = wfTask.getStatusDate().getDate();
            var _Month = wfTask.getStatusDate().getMonth()+1;
            var myDate = _Month + "/" + _Day + "/" + _Year;
            return myDate;
         }
      }
   }
  return myDate;
}
