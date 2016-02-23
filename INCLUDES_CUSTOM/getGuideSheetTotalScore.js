//-----------------------V360INSPECTIONRESULTSUBMITAFTER-----------------------------

function getGuideSheetTotalScore(guideSheetName)
//Function created by: Joseph Cipriano/TruePoint Solutions 12/28/2009
//Description: Will return the Total Score for a Guidesheet.
{
         var totalScore = 0;
         //get Inspections associated to Cap
         var capInspResult = aa.inspection.getInspections(capId);
         if (capInspResult.getSuccess())
         {
             var inspList = capInspResult.getOutput();
             for (x in inspList)
             {
                 //find associating inspection
                 if (inspList[x].getIdNumber() == inspId)
                 {
                    //get Guidesheet associated to inspection
                    var guideSheetList = inspList[x].getInspection().getGuideSheets().toArray();

                    if (guideSheetList.length == 0)
                    {logDebug("**ERROR: no associating Guidesheets on Inspection: " + inspType + ", Completed on: "+ inspResultDate); return false;}
                    else
                    {
                        for (g in guideSheetList)
                        {
                            //find associating Guidesheet
                            if (guideSheetList[g].getGuideType() == guideSheetName)
                            {
                               //get guidesheet items associated to Guidesheet
                               var guideSheetItems = guideSheetList[g].getItems().toArray();
    
                               if (guideSheetItems.length == 0)
                               {logDebug("**ERROR: no associating Guidesheet with the name of: " +  guideSheetName + " on Inspection: " + inspType + ", Completed on: "+ inspResultDate); return false;}
                               else
                               {
                                   for (i in guideSheetItems)
                                   {
                                       //get guidesheet items score values
                                       var itemScore = guideSheetItems[i].getGuideItemScore();
                                       //check if guidesheet item score is a valid number
                                       if (!isNaN(itemScore))
                                       {
                                           //total up guidesheet item score values
                                           totalScore = totalScore + Number(itemScore);
                                       }
                                   }
                                   return totalScore;
                               }
                            }
                        }
                    }
                 }
             }
         }
         else
         {logDebug("**ERROR: getting Inspections for Cap.: " + capInspResult.getErrorMessage()); return false;}
}
