/*------------------------------------------------------------------------------------------------------/
| SVN $Id: DocumentReviewUpdateAfter.js 
| Program : DocumentReviewUpdateAfterV2.0.js
| Event   : DocumentReviewUpdateAfter
|
| Usage   : Master Script by Accela.  See accompanying documentation and release notes.
|
| Client  : N/A
| Action# : N/A
|
| Notes   : This Master Script uses the Productized Includes files that are deployed with the software, not the manually installed scripts.
|
|
/------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------/
| START User Configurable Parameters
|
|     Only variables in the following section may be changed.  If any other section is modified, this
|     will no longer be considered a "Master" script and will not be supported in future releases.  If
|     changes are made, please add notes above.
/------------------------------------------------------------------------------------------------------*/

var controlString = "DocumentReviewUpdateAfter"; 				// Standard choice for control
var preExecute = "PreExecuteForAfterEvents"				// Standard choice to execute first (for globals, etc)
var documentOnly = false;						// Document Only -- displays hierarchy of std choice steps

/*------------------------------------------------------------------------------------------------------/
| END User Configurable Parameters
/------------------------------------------------------------------------------------------------------*/
var SCRIPT_VERSION = 2.0

/*------------------------------------------------------------------------------------------------------/
| BEGIN Event Specific Variables
/------------------------------------------------------------------------------------------------------*/
var documentReviewModel = aa.env.getValue("DocumentReviewModel");
var id1 = documentReviewModel.getID1();
var id2 = documentReviewModel.getID2();
var id3 = documentReviewModel.getID3();
aa.env.setValue("PermitId1",id1);
aa.env.setValue("PermitId2",id2);
aa.env.setValue("PermitId3",id3);
/*------------------------------------------------------------------------------------------------------/
| END Event Specific Variables
/------------------------------------------------------------------------------------------------------*/

eval(getScriptText("INCLUDES_ACCELA_FUNCTIONS"));
eval(getScriptText("INCLUDES_ACCELA_GLOBALS"));
eval(getScriptText("INCLUDES_CUSTOM"));

if (documentOnly) {
	doStandardChoiceActions(controlString,false,0);
	aa.env.setValue("ScriptReturnCode", "0");
	aa.env.setValue("ScriptReturnMessage", "Documentation Successful.  No actions executed.");
	aa.abortScript();
	}
	
function getScriptText(vScriptName){
                vScriptName = vScriptName.toUpperCase();
                var emseBiz = aa.proxyInvoker.newInstance("com.accela.aa.emse.emse.EMSEBusiness").getOutput();
                var emseScript = emseBiz.getMasterScript(aa.getServiceProviderCode(),vScriptName);
                return emseScript.getScriptText() + "";
}

/*------------------------------------------------------------------------------------------------------/
| BEGIN Event Specific Variables
/------------------------------------------------------------------------------------------------------*/
logDebug("documentReviewModel = " + documentReviewModel);

//values added by Lu, different names
var wfComment = documentReviewModel.getTaskReviewComments(); logDebug("wfComment = " + wfComment);
var wfTask = documentReviewModel.getTaskName(); logDebug("wfTask = " + wfTask);
var wfStatus = documentReviewModel.getStatus(); logDebug("wfStatus = " + wfStatus);

//Default 'standard' values below
var taskReviewComments = documentReviewModel.getTaskReviewComments(); logDebug("taskReviewComments = " + taskReviewComments);
var taskName = documentReviewModel.getTaskName(); logDebug("taskName = " + taskName);
var status = documentReviewModel.getStatus(); logDebug("status = " + status);

var wfDateMMDDYYYY = sysDateMMDDYYYY; logDebug("date = " + wfDateMMDDYYYY);
var taskReviewPages = documentReviewModel.getTaskReviewPages(); logDebug("taskReviewPages = " + taskReviewPages);
var entityType = documentReviewModel.getEntityType(); logDebug("entityType = " + entityType);
var documentID = documentReviewModel.getDocumentID(); logDebug("documentID = " + documentID);
//var wfProcess =


var originalDocumentReviewModel = aa.env.getValue("OriginalDocumentReviewModel");	//logDebug("originalDocumentReviewModel = " + originalDocumentReviewModel);
logDebug(documentReviewModel);
/*------------------------------------------------------------------------------------------------------/
| END Event Specific Variables
/------------------------------------------------------------------------------------------------------*/


if (preExecute.length) doStandardChoiceActions(preExecute,true,0); 	// run Pre-execution code

logGlobals(AInfo);

/*------------------------------------------------------------------------------------------------------/
| &lt;===========Main=Loop================&gt;
|
/-----------------------------------------------------------------------------------------------------*/
//
//
//  Get the Standard choices entry we'll use for this App type
//  Then, get the action/criteria pairs for this app
//

doStandardChoiceActions(controlString,true,0);
//
// Check for invoicing of fees
//
if (feeSeqList.length)
	{
	invoiceResult = aa.finance.createInvoice(capId, feeSeqList, paymentPeriodList);
	if (invoiceResult.getSuccess())
		logMessage("Invoicing assessed fee items is successful.");
	else
		logMessage("**ERROR: Invoicing the fee items assessed to app # " + capIDString + " was not successful.  Reason: " +  invoiceResult.getErrorMessage());
	}

/*------------------------------------------------------------------------------------------------------/
| &lt;===========END=Main=Loop================&gt;
/-----------------------------------------------------------------------------------------------------*/

if (debug.indexOf("**ERROR") &gt; 0)
	{
	aa.env.setValue("ScriptReturnCode", "1");
	aa.env.setValue("ScriptReturnMessage", debug);
	}
else
	{
	aa.env.setValue("ScriptReturnCode", "0");
	if (showMessage) aa.env.setValue("ScriptReturnMessage", message);
	if (showDebug) 	aa.env.setValue("ScriptReturnMessage", debug);
	}


/*------------------------------------------------------------------------------------------------------/
| &lt;===========External Functions (used by Action entries)
/------------------------------------------------------------------------------------------------------*/