
//function will check for required documents
function areAllRequiredDocumentsUploaded(stdchoice, appTypeString)
{
try
{  
var docList = new Array();
docList = getDocumentList();
var docCategoryArray = new Array();
var docCategoryList = lookup(stdchoice,appTypeString);
docCategoryArray = docCategoryList.split(",");
var numberOfRequiredDocs = docCategoryArray.length;
var numOfUploadedReqDocs = 0;


 var reqDocs = docCategoryArray.slice(0);
 logDebug("*** Num of Docs uploaded *** " + docList.length);
 if(docList.length <= 0)
  { logDebug("No Documents uploaded, please upload at least required documents"); return false; }

 if(docList.length < reqDocs.length)
  { logDebug("====> ERROR: Missing Documents. Need to upload all the required documents."); return test; }
else
{
 for(var i in docList)
 {
  for(var j in reqDocs)
  {
   if(docCategoryArray[j].equals(docList[i].getDocCategory()))
   {
     numOfUploadedReqDocs = numOfUploadedReqDocs + 1;
     reqDocs[j] = ""
   }
  }
 }
 if(numOfUploadedReqDocs < numberOfRequiredDocs)
 {
  logDebug("====> ERROR: Missing Required Documents.");
  logDebug("These are the required documents ");
  for(var x in reqDocs)
  {
    if(!reqDocs[x].equals(""))
      {logDebug(docCategoryArray[x]);}
  }
  return reqDocs;

 }
  return true;
}
}
catch(err)
{
 handleError(err,"My Script Test");
}
}
