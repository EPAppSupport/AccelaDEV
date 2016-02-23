
function wfGetHistDatePlusOne(wfHistCapID,wfHistTask,wfHistTaskStatus)
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
           var _Year = wfTask.getStatusDate().getYear()+1901;
           var _Day = wfTask.getStatusDate().getDate();
           var _Month = wfTask.getStatusDate().getMonth()+1;
           var myDate = _Month + "/" + _Day + "/" + _Year;

            //myDate = wfTask.getStatusDate();
               myDate = _Month + "/" + _Day + "/" + _Year;
           var myDateStatus = new Date(wfDateMMDDYYYY);
           var _YearStatus = myDateStatus.getYear()+1900;
           var _DayStatus = myDateStatus.getDate();
           var _MonthStatus = myDateStatus.getMonth()+1;
               myDate2 = _MonthStatus + "/" + _DayStatus + "/" + _YearStatus;



            if(expireDatePlusOne(_Year,_Month,_Day,_YearStatus,_MonthStatus,_DayStatus) == true)
            {
              return true;
            }
            else
            {
              return false;
            }
         }
      }
   }
}
