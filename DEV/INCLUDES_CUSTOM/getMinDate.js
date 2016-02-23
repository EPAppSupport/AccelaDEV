function getMinDate(date1, date2, date3, date4)
         {
           //Gets 4 String Dates, sorts them and return the minimum date
           var stringDates = new Array();
           var i = 0;
           var j = 0;
           var temp = "";
           stringDates[0] = date1;
           stringDates[1] = date2;
           stringDates[2] = date3;
           stringDates[3] = date4;

           for( i = 0; i < i < stringDates.length; i++)
           {
              for( j = 0; j < (stringDates.length-1); j++)
              {
                 if( !isNaN(jsDateToMMDDYYYY(stringDates[i])) || !isNaN(jsDateToMMDDYYYY(stringDates[j])) )
                 {
                   if( jsDateToMMDDYYYY(stringDates[i]) < jsDateToMMDDYYYY(stringDates[j]) )
                   {
                      temp = stringDates[i];
                      stringDates[i] = stringDates[j];
                      stringDates[j] = temp;
                   }
                 }
                 else
                 {
                    logMessage("WARNING","Date Field is blank or cannot be found. Cannot process record.");
                    continue;
                 }
              }
           }
           return stringDates[0];
         }