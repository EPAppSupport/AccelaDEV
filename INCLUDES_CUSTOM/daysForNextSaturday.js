
/* #############################################################
  Method daysForNextSaturday( )
  Will return the number ahead for next Saturday
  if day is 
  Sunday 0, Monday 1, Tuesday 2, Wednesday 3, Thursday 4, Friday 5, Saturday 6
  Author: Jose L Yanez
############################################################## */
function daysForNextSaturday()
{    
     var startDate = new Date();
     var todayDate = startDate.getDay();
     var saturday = 0;

     switch(todayDate)
     {
         case 0:
                    saturday =  6;
                    break;
         case 1:
                    saturday =  5;
                    break;
         case 2:
                    saturday =  4;
                    break;
         case 3:
                    saturday =  3;
                    break;
         case 4:
                    saturday =  2;
                    break;
         case 5:
                    saturday =  1;
                    break;
         case 6:
                    saturday =  7;
                    break;
     }
     return  saturday;
}
