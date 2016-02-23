
function expireDatePlusOne(histYear, histMonth, histDay, wfYear, wfMonth, wfDay)
         {

         var returnValue = false;
         var returnAppMonth = histMonth;
         var returnAppDay = histDay;
         var returnAppYear = histYear;


         var returnSysMonth = wfMonth;
         var returnSysDay = wfDay;
         var returnSysYear = wfYear;

            if(returnAppYear == returnSysYear)
            {
                if(returnAppMonth > returnSysMonth)
                {
                  returnValue = true;
                }
                else
                {
                   if(returnAppMonth == returnSysMonth)
                   {
                      if(returnAppDay >= returnSysDay)
                      {
                         returnValue = true;
                      }
                   }
                }
            }
            else
            {
               if(returnAppYear > returnSysYear)
               {
                   returnValue = true;
               }
            }
         return returnValue;
         }

