function compareDate(expDate)
         {
         var returnSysDate = new Date();
         var returnAppDate = new Date(expDate);
         var returnValue = true;

            returnSysDate = startDate;

            var returnAppMonth = returnAppDate.getMonth()+1;
            var returnAppDay = returnAppDate.getDate();
            var returnAppYear = returnAppDate.getYear()+ 1900;


            var returnSysMonth = returnSysDate.getMonth()+1;
            var returnSysDay = returnSysDate.getDate();
            var returnSysYear = returnSysDate.getYear() + 1900;

            if(returnAppYear == returnSysYear)
            {
                if(returnAppMonth > returnSysMonth)
                {
                  returnValue = false;
                }
                else
                {
                   if(returnAppMonth == returnSysMonth)
                   {
                      if(returnAppDay > returnSysDay)
                      {
                         returnValue = false;
                      }
                   }
                }
            }
            else
            {
               if(returnAppYear > returnSysYear)
               {
                   returnValue = false;
               }
            }
         return returnValue;
         }

