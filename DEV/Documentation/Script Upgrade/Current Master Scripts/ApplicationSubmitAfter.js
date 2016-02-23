/*------------------------------------------------------------------------------------------------------/
| SVN $Id: ApplicationSubmitAfter.js 3600 2008-10-27 21:36:24Z dane.quatacker $
| Program : ApplicationSubmitAfterV1.5.js
| Event   : ApplicationSubmitAfter
|
| Usage   : Master Script by Accela.  See accompanying documentation and release notes.
|
| Client  : N/A
| Action# : N/A
|
| Notes   :
|
|
/------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------/
| START User Configurable Parameters
|
|     Only variables in the following section may be changed.  If any other section is modified, this
|     will no longer be considered a &quot;Master&quot; script and will not be supported in future releases.  If
|     changes are made, please add notes above.
/------------------------------------------------------------------------------------------------------*/
var showMessage = false;						// Set to true to see results in popup window
var showDebug = true;							// Set to true to see debug messages in popup window
var controlString = &quot;ApplicationSubmitAfter&quot;; 				// Standard choice for control
var preExecute = &quot;PreExecuteForAfterEvents&quot;				// Standard choice to execute first (for globals, etc)
var documentOnly = false;						// Document Only -- displays hierarchy of std choice steps
var disableTokens = false;						// turn off tokenizing of std choices (enables use of &quot;{} and []&quot;)
var useAppSpecificGroupName = true;					// Use Group name when populating App Specific Info Values
var useTaskSpecificGroupName = false;					// Use Group name when populating Task Specific Info Values
var enableVariableBranching = false;					// Allows use of variable names in branching.  Branches are not followed in Doc Only
var maxEntries = 99;							// Maximum number of std choice entries.  Entries must be Left Zero Padded
/*------------------------------------------------------------------------------------------------------/
| END User Configurable Parameters
/------------------------------------------------------------------------------------------------------*/
var startDate = new Date();
var startTime = startDate.getTime();
var message =	&quot;&quot;;							// Message String
var debug = &quot;&quot;;								// Debug String
var br = &quot;&lt;BR&gt;&quot;;							// Break Tag
var feeSeqList = new Array();						// invoicing fee list
var paymentPeriodList = new Array();					// invoicing pay periods

if (documentOnly) {
	doStandardChoiceActions(controlString,false,0);
	aa.env.setValue(&quot;ScriptReturnCode&quot;, &quot;0&quot;);
	aa.env.setValue(&quot;ScriptReturnMessage&quot;, &quot;Documentation Successful.  No actions executed.&quot;);
	aa.abortScript();
	}

var capId = getCapId();							// CapId object
var cap = aa.cap.getCap(capId).getOutput();				// Cap object
var servProvCode = capId.getServiceProviderCode()       		// Service Provider Code
var currentUserID = aa.env.getValue(&quot;CurrentUserID&quot;);   		// Current User
var capIDString = capId.getCustomID();					// alternate cap id string
var systemUserObj = aa.person.getUser(currentUserID).getOutput();  	// Current User Object
var appTypeResult = cap.getCapType();
var appTypeString = appTypeResult.toString();				// Convert application type to string (&quot;Building/A/B/C&quot;)
var appTypeArray = appTypeString.split(&quot;/&quot;);				// Array of application type string
var currentUserGroup;
var currentUserGroupObj = aa.userright.getUserRight(appTypeArray[0],currentUserID).getOutput()
if (currentUserGroupObj) currentUserGroup = currentUserGroupObj.getGroupName();

var capName = cap.getSpecialText();
var capStatus = cap.getCapStatus();
var fileDateObj = cap.getFileDate();					// File Date scriptdatetime
var fileDate = &quot;&quot; + fileDateObj.getMonth() + &quot;/&quot; + fileDateObj.getDayOfMonth() + &quot;/&quot; + fileDateObj.getYear();
var fileDateYYYYMMDD = dateFormatted(fileDateObj.getMonth(),fileDateObj.getDayOfMonth(),fileDateObj.getYear(),&quot;YYYY-MM-DD&quot;);
var sysDate = aa.date.getCurrentDate();
var sysDateMMDDYYYY = dateFormatted(sysDate.getMonth(),sysDate.getDayOfMonth(),sysDate.getYear(),&quot;YYYY-MM-DD&quot;);
var parcelArea = 0;

var estValue = 0; var calcValue = 0; var feeFactor			// Init Valuations
var valobj = aa.finance.getContractorSuppliedValuation(capId,null).getOutput();	// Calculated valuation
if (valobj.length) {
	estValue = valobj[0].getEstimatedValue();
	calcValue = valobj[0].getCalculatedValue();
	feeFactor = valobj[0].getbValuatn().getFeeFactorFlag();
	}

var balanceDue = 0 ; var houseCount = 0; feesInvoicedTotal = 0;		// Init detail Data
var capDetail = &quot;&quot;;
var capDetailObjResult = aa.cap.getCapDetail(capId);			// Detail
if (capDetailObjResult.getSuccess())
	{
	capDetail = capDetailObjResult.getOutput();
	var houseCount = capDetail.getHouseCount();
	var feesInvoicedTotal = capDetail.getTotalFee();
	var balanceDue = capDetail.getBalance();
	}

var AInfo = new Array();						// Create array for tokenized variables
loadAppSpecific(AInfo); 						// Add AppSpecific Info
loadTaskSpecific(AInfo);						// Add task specific info
loadParcelAttributes(AInfo);						// Add parcel attributes
loadASITables();

logDebug(&quot;&lt;B&gt;EMSE Script Results for &quot; + capIDString + &quot;&lt;/B&gt;&quot;);
logDebug(&quot;capId = &quot; + capId.getClass());
logDebug(&quot;cap = &quot; + cap.getClass());
logDebug(&quot;currentUserID = &quot; + currentUserID);
logDebug(&quot;currentUserGroup = &quot; + currentUserGroup);
logDebug(&quot;systemUserObj = &quot; + systemUserObj.getClass());
logDebug(&quot;appTypeString = &quot; + appTypeString);
logDebug(&quot;capName = &quot; + capName);
logDebug(&quot;capStatus = &quot; + capStatus);
logDebug(&quot;fileDate = &quot; + fileDate);
logDebug(&quot;fileDateYYYYMMDD = &quot; + fileDateYYYYMMDD);
logDebug(&quot;sysDate = &quot; + sysDate.getClass());
logDebug(&quot;parcelArea = &quot; + parcelArea);
logDebug(&quot;estValue = &quot; + estValue);
logDebug(&quot;calcValue = &quot; + calcValue);
logDebug(&quot;feeFactor = &quot; + feeFactor);

logDebug(&quot;houseCount = &quot; + houseCount);
logDebug(&quot;feesInvoicedTotal = &quot; + feesInvoicedTotal);
logDebug(&quot;balanceDue = &quot; + balanceDue);

/*------------------------------------------------------------------------------------------------------/
| BEGIN Event Specific Variables
/------------------------------------------------------------------------------------------------------*/
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
		logMessage(&quot;Invoicing assessed fee items is successful.&quot;);
	else
		logMessage(&quot;**ERROR: Invoicing the fee items assessed to app # &quot; + capIDString + &quot; was not successful.  Reason: &quot; +  invoiceResult.getErrorMessage());
	}

/*------------------------------------------------------------------------------------------------------/
| &lt;===========END=Main=Loop================&gt;
/-----------------------------------------------------------------------------------------------------*/

if (debug.indexOf(&quot;**ERROR&quot;) &gt; 0)
	{
	aa.env.setValue(&quot;ScriptReturnCode&quot;, &quot;1&quot;);
	aa.env.setValue(&quot;ScriptReturnMessage&quot;, debug);
	}
else
	{
	aa.env.setValue(&quot;ScriptReturnCode&quot;, &quot;0&quot;);
	if (showMessage) aa.env.setValue(&quot;ScriptReturnMessage&quot;, message);
	if (showDebug) 	aa.env.setValue(&quot;ScriptReturnMessage&quot;, debug);
	}


/*------------------------------------------------------------------------------------------------------/
| &lt;===========Internal Functions and Classes (Used by this script)
/------------------------------------------------------------------------------------------------------*/

function logGlobals(globArray) {

	for (loopGlob in globArray)
		logDebug(&quot;{&quot; + loopGlob + &quot;} = &quot; + globArray[loopGlob])
	}

function getCapId()  {

    var s_id1 = aa.env.getValue(&quot;PermitId1&quot;);
    var s_id2 = aa.env.getValue(&quot;PermitId2&quot;);
    var s_id3 = aa.env.getValue(&quot;PermitId3&quot;);

    var s_capResult = aa.cap.getCapID(s_id1, s_id2, s_id3);
    if(s_capResult.getSuccess())
      return s_capResult.getOutput();
    else
    {
      logMessage(&quot;**ERROR: Failed to get capId: &quot; + s_capResult.getErrorMessage());
      return null;
    }
  }


//
// matches:  returns true if value matches any of the following arguments
//
function matches(eVal,argList) {
   for (var i=1; i&lt;arguments.length;i++)
   	if (arguments[i] == eVal)
   		return true;

}

//
// exists:  return true if Value is in Array
//
function exists(eVal, eArray) {
	  for (ii in eArray)
	  	if (eArray[ii] == eVal) return true;
	  return false;
}

//
// Get the standard choices domain for this application type
//
function getScriptAction(strControl)
	{
	var actArray = new Array();
	var maxLength = String(&quot;&quot; + maxEntries).length;

	for (var count=1; count &lt;= maxEntries; count++)  // Must be sequential from 01 up to maxEntries
		{
		var countstr = &quot;000000&quot; + count;
		countstr = String(countstr).substring(countstr.length,countstr.length - maxLength);
		var bizDomScriptResult = aa.bizDomain.getBizDomainByValue(strControl,countstr);

	   	if (bizDomScriptResult.getSuccess())
	   		{
			bizDomScriptObj = bizDomScriptResult.getOutput();
			var myObj= new pairObj(bizDomScriptObj.getBizdomainValue());
			myObj.load(bizDomScriptObj.getDescription());
			if (bizDomScriptObj.getAuditStatus() == 'I') myObj.enabled = false;
			actArray.push(myObj);
			}
		else
			{
			break;
			}
		}
	return actArray;
	}

function doStandardChoiceActions(stdChoiceEntry,doExecution,docIndent)
	{
	var thisDate = new Date();
	var thisTime = thisDate.getTime();
	var lastEvalTrue = false;
	logDebug(&quot;Executing: &quot; + stdChoiceEntry + &quot;, Elapsed Time: &quot;  + ((thisTime - startTime) / 1000) + &quot; Seconds&quot;)

	var pairObjArray = getScriptAction(stdChoiceEntry);
	if (!doExecution) docWrite(stdChoiceEntry,true,docIndent);
	for (xx in pairObjArray)
		{
		doObj = pairObjArray[xx];
		if (doExecution)
			{
			if (doObj.enabled)
				if (eval(token(doObj.cri)) || (lastEvalTrue &amp;&amp; doObj.continuation))
					{
					eval(token(doObj.act));
					lastEvalTrue = true;
					}
				else
					{
					if (doObj.elseact)
						eval(token(doObj.elseact));
					lastEvalTrue = false;
					}
			}
		else // just document
			{
			docWrite(&quot;|  &quot;,false,docIndent);
			var disableString = &quot;&quot;;
			if (!doObj.enabled) disableString = &quot;&lt;DISABLED&gt;&quot;;

			if (doObj.elseact)
				docWrite(&quot;|  &quot; + doObj.ID + &quot; &quot; + disableString + &quot; &quot; + doObj.cri + &quot; ^ &quot; + doObj.act + &quot; ^ &quot; + doObj.elseact ,false,docIndent);
			else
				docWrite(&quot;|  &quot; + doObj.ID + &quot; &quot; + disableString + &quot; &quot; + doObj.cri + &quot; ^ &quot; + doObj.act,false,docIndent);

			for (yy in doObj.branch)
				{
				doStandardChoiceActions(doObj.branch[yy],false,docIndent+1);
				}
			}
		} // next sAction
	if (!doExecution) docWrite(null,true,docIndent);
	var thisDate = new Date();
	var thisTime = thisDate.getTime();
	logDebug(&quot;Finished: &quot; + stdChoiceEntry + &quot;, Elapsed Time: &quot;  + ((thisTime - startTime) / 1000) + &quot; Seconds&quot;)
	}

function docWrite(dstr,header,indent)
	{
	var istr = &quot;&quot;;
	for (i = 0 ; i &lt; indent ; i++)
		istr+=&quot;|  &quot;;
	if (header &amp;&amp; dstr)
		aa.print(istr + &quot;------------------------------------------------&quot;);
	if (dstr) aa.print(istr + dstr);
	if (header)
		aa.print(istr + &quot;------------------------------------------------&quot;);
	}


function token(tstr)
	{
	if (!disableTokens)
		{
		re = new RegExp(&quot;\\{&quot;,&quot;g&quot;) ; tstr = String(tstr).replace(re,&quot;AInfo[\&quot;&quot;);
		re = new RegExp(&quot;\\}&quot;,&quot;g&quot;) ; tstr = String(tstr).replace(re,&quot;\&quot;]&quot;);
		}
	return String(tstr);
  	}

function pairObj(actID)
	{
	this.ID = actID;
	this.cri = null;
	this.act = null;
	this.elseact = null;
	this.enabled = true;
	this.continuation = false;
	this.branch = new Array();

	this.load = function(loadStr) {
		//
		// load() : tokenizes and loades the criteria and action
		//
		loadArr = loadStr.split(&quot;\\^&quot;);
		if (loadArr.length &lt; 2 || loadArr.length &gt; 3)
			{
			logMessage(&quot;**ERROR: The following Criteria/Action pair is incorrectly formatted.  Two or three elements separated by a caret (\&quot;^\&quot;) are required. &quot; + br + br + loadStr)
			}
		else
			{
			this.cri     = loadArr[0];
			this.act     = loadArr[1];
			this.elseact = loadArr[2];

			if (this.cri.length() == 0) this.continuation = true; // if format is like (&quot;^action...&quot;) then it's a continuation of previous line

			var a = loadArr[1];
			var bb = a.indexOf(&quot;branch&quot;);
			while (!enableVariableBranching &amp;&amp; bb &gt;= 0)
			  {
			  var cc = a.substring(bb);
			  var dd = cc.indexOf(&quot;\&quot;)&quot;);
			  this.branch.push(cc.substring(8,dd));
			  a = cc.substring(dd);
			  bb = a.indexOf(&quot;branch&quot;);
			  }

			}
		}
	}

function convertDate(thisDate)
// convert ScriptDateTime to Javascript Date Object
	{
	return new Date(thisDate.getMonth() + &quot;/&quot; + thisDate.getDayOfMonth() + &quot;/&quot; + thisDate.getYear());
	}


function logDebug(dstr)
	{
	debug+=dstr + br;
	}

function logMessage(dstr)
	{
	message+=dstr + br;
	}

/*------------------------------------------------------------------------------------------------------/
| &lt;===========External Functions (used by Action entries)
/------------------------------------------------------------------------------------------------------*/

 
function activateTask(wfstr) // optional process name
	{
	var useProcess = false;
	var processName = &quot;&quot;;
	if (arguments.length == 2) 
		{
		processName = arguments[1]; // subprocess
		useProcess = true;
		}

	var workflowResult = aa.workflow.getTasks(capId);
 	if (workflowResult.getSuccess())
  	 	var wfObj = workflowResult.getOutput();
  	else
  	  	{ logMessage(&quot;**ERROR: Failed to get workflow object: &quot; + s_capResult.getErrorMessage()); return false; }
	
	for (i in wfObj)
		{
   		var fTask = wfObj[i];
 		if (fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase())  &amp;&amp; (!useProcess || fTask.getProcessCode().equals(processName)))
			{
			var stepnumber = fTask.getStepNumber();
			var processID = fTask.getProcessID();

			if (useProcess)
				aa.workflow.adjustTask(capId, stepnumber, processID, &quot;Y&quot;, &quot;N&quot;, null, null)
			else
				aa.workflow.adjustTask(capId, stepnumber, &quot;Y&quot;, &quot;N&quot;, null, null)

			logMessage(&quot;Activating Workflow Task: &quot; + wfstr);
			logDebug(&quot;Activating Workflow Task: &quot; + wfstr);
			}			
		}
	}

 

function addAddressCondition(addNum, cType,cStatus,cDesc,cComment,cImpact)
//if addNum is null, condition is added to all addresses on CAP
	{
	if (!addNum)
		{
		var capAddResult = aa.address.getAddressByCapId(capId);
		if (capAddResult.getSuccess())
			{
			var Adds = capAddResult.getOutput();
			for (zz in Adds)
				{
				
				if (Adds[zz].getRefAddressId())
					{
					var addAddCondResult = aa.addressCondition.addAddressCondition(Adds[zz].getRefAddressId(), cType, cDesc, cComment, null, null, cImpact, cStatus, sysDate, null, sysDate, sysDate, systemUserObj, systemUserObj);

						if (addAddCondResult.getSuccess())
							{
							logDebug(&quot;Successfully added condition to reference Address &quot; + Adds[zz].getRefAddressId() + &quot;  (&quot; + cImpact + &quot;) &quot; + cDesc);
							}
						else
							{
							logDebug( &quot;**ERROR: adding condition to reference Address &quot; + Adds[zz].getRefAddressId() + &quot;  (&quot; + cImpact + &quot;): &quot; + addAddCondResult.getErrorMessage());
							}
					}
				}
			}
		}
	else
		{
			var addAddCondResult = aa.addressCondition.addAddressCondition(addNum, cType, cDesc, cComment, null, null, cImpact, cStatus, sysDate, null, sysDate, sysDate, systemUserObj, systemUserObj);
			
	
		        if (addAddCondResult.getSuccess())
		        	{
				logDebug(&quot;Successfully added condition to Address &quot; + addNum + &quot;  (&quot; + cImpact + &quot;) &quot; + cDesc);
				}
			else
				{
				logDebug( &quot;**ERROR: adding condition to Address &quot; + addNum + &quot;  (&quot; + cImpact + &quot;): &quot; + addAddCondResult.getErrorMessage());
				}
		}
	}


 
function addAllFees(fsched,fperiod,fqty,finvoice) // Adds all fees for a given fee schedule
	{
	var arrFees = aa.finance.getFeeItemList(null,fsched,null).getOutput();
	for (xx in arrFees)
		{
		var feeCod = arrFees[xx].getFeeCod();
		var assessFeeResult = aa.finance.createFeeItem(capId,fsched,feeCod,fperiod,fqty);
		if (assessFeeResult.getSuccess())
			{
			var feeSeq = assessFeeResult.getOutput();
			logMessage(&quot;Added Fee &quot; + feeCod + &quot;, Qty &quot; + fqty);
			logDebug(&quot;The assessed fee Sequence Number &quot; + feeSeq);
			if (finvoice == &quot;Y&quot;)
			{
				feeSeqList.push(feeSeq);
				paymentPeriodList.push(fperiod);
				}
			}
		else
			{
			logDebug( &quot;**ERROR: assessing fee (&quot; + feeCod + &quot;): &quot; + assessFeeResult.getErrorMessage());
			}
		} // for xx
	} // function

 
function addAppCondition(cType,cStatus,cDesc,cComment,cImpact)
	{
	var addCapCondResult = aa.capCondition.addCapCondition(capId, cType, cDesc, cComment, sysDate, null, sysDate, null,null, cImpact, systemUserObj, systemUserObj, cStatus, currentUserID, &quot;A&quot;)
        if (addCapCondResult.getSuccess())
        	{
		aa.print(&quot;Successfully added condition (&quot; + cImpact + &quot;) &quot; + cDesc);
		aa.print(&quot;Successfully added condition (&quot; + cImpact + &quot;) &quot; + cDesc);
		}
	else
		{
		aa.print( &quot;**ERROR: adding condition (&quot; + cImpact + &quot;): &quot; + addCapCondResult.getErrorMessage());
		}
	}

 

  function addASITable(tableName,tableValueArray) // optional capId
  	{
	//  tableName is the name of the ASI table
	//  tableValueArray is an array of associative array values.  All elements MUST be strings.
  	var itemCap = capId
	if (arguments.length &gt; 2)
		itemCap = arguments[2]; // use cap ID specified in args

	var tssmResult = aa.appSpecificTableScript.getAppSpecificTableModel(itemCap,tableName)

	if (!tssmResult.getSuccess())
		{ logDebug(&quot;**WARNING: error retrieving app specific table &quot; + tableName + &quot; &quot; + tssmResult.getErrorMessage()) ; return false }

	var tssm = tssmResult.getOutput();
	var tsm = tssm.getAppSpecificTableModel();
	var fld = tsm.getTableField()

	for (thisrow in tableValueArray)
		{
		var col = tsm.getColumns()
		var coli = col.iterator();

		while (coli.hasNext())
			{
			var colname = coli.next();
			fld.add(tableValueArray[thisrow][colname.getColumnName()]);
			logDebug(&quot;Table: &quot; + tableName + &quot; Row:&quot; + thisrow + &quot; Column: &quot; + colname.getColumnName() + &quot; Value: &quot; + tableValueArray[thisrow][colname.getColumnName()]);
			}

		tsm.setTableField(fld);

		if (tsm.setReadonlyField) tsm.setReadonlyField(null);  // check for 6.6.1.   If so need to populate with null

		}

	var addResult = aa.appSpecificTableScript.editAppSpecificTableInfos(tsm, itemCap, currentUserID);

	// Even when this works it gives an index out of range error
	//if (!addResult .getSuccess())
	//	{ logDebug(&quot;**WARNING: error adding record to ASI Table:  &quot; + tableName + &quot; &quot; + addResult.getErrorMessage()) ; return false }
	//else
		logDebug(&quot;Successfully added record to ASI Table: &quot; + tableName);

	}

 
function addFee(fcode,fsched,fperiod,fqty,finvoice) // Adds a single fee, optional argument: fCap
	{
	// Updated Script will return feeSeq number or null if error encountered (SR5112) 
	var feeCap = capId;
	var feeCapMessage = &quot;&quot;;
	var feeSeq_L = new Array();				// invoicing fee for CAP in args
	var paymentPeriod_L = new Array();			// invoicing pay periods for CAP in args
	var feeSeq = null;
	if (arguments.length &gt; 5) 
		{
		feeCap = arguments[5]; // use cap ID specified in args
		feeCapMessage = &quot; to specified CAP&quot;;
		}

	assessFeeResult = aa.finance.createFeeItem(feeCap,fsched,fcode,fperiod,fqty);
	if (assessFeeResult.getSuccess())
		{
		feeSeq = assessFeeResult.getOutput();
		logMessage(&quot;Successfully added Fee &quot; + fcode + &quot;, Qty &quot; + fqty + feeCapMessage);
		logDebug(&quot;The assessed fee Sequence Number &quot; + feeSeq + feeCapMessage);

		if (finvoice == &quot;Y&quot; &amp;&amp; arguments.length == 5) // use current CAP
			{
			feeSeqList.push(feeSeq);
			paymentPeriodList.push(fperiod);
			}
		if (finvoice == &quot;Y&quot; &amp;&amp; arguments.length &gt; 5) // use CAP in args
			{
			feeSeq_L.push(feeSeq);
			paymentPeriod_L.push(fperiod);
			var invoiceResult_L = aa.finance.createInvoice(feeCap, feeSeq_L, paymentPeriod_L);
			if (invoiceResult_L.getSuccess())
				logMessage(&quot;Invoicing assessed fee items&quot; + feeCapMessage + &quot; is successful.&quot;);
			else
				logDebug(&quot;**ERROR: Invoicing the fee items assessed&quot; + feeCapMessage + &quot; was not successful.  Reason: &quot; +  invoiceResult.getErrorMessage());
			}
		}
	else
		{
		logDebug( &quot;**ERROR: assessing fee (&quot; + fcode + &quot;): &quot; + assessFeeResult.getErrorMessage());
		feeSeq = null;
		}
	
	return feeSeq;
	   
	}

 

function addLicenseCondition(cType,cStatus,cDesc,cComment,cImpact)
	{
	// Optional 6th argument is license number, otherwise add to all CAEs on CAP
	refLicArr = new Array();
	if (arguments.length == 6) // License Number provided
		{
		refLicArr.push(getRefLicenseProf(arguments[5]));
		}
	else // adding to cap lic profs
		{
		var capLicenseResult = aa.licenseScript.getLicenseProf(capId);
		if (capLicenseResult.getSuccess())
			{ var refLicArr = capLicenseResult.getOutput();  }
		else
			{ logDebug(&quot;**ERROR: getting lic profs from Cap: &quot; + capLicenseResult.getErrorMessage()); return false; }
		}

	for (var refLic in refLicArr)
		{
		if (arguments.length == 6) // use sequence number
			licSeq = refLicArr[refLic].getLicSeqNbr();
		else
			licSeq = refLicArr[refLic].getLicenseNbr();

		var addCAEResult = aa.caeCondition.addCAECondition(licSeq, cType, cDesc, cComment, null, null, cImpact, cStatus, sysDate, null, sysDate, sysDate, systemUserObj, systemUserObj)

		if (addCAEResult.getSuccess())
			{
			logDebug(&quot;Successfully added licensed professional (&quot; + licSeq + &quot;) condition (&quot; + cImpact + &quot;) &quot; + cDesc);
			}
		else
			{
			logDebug( &quot;**ERROR: adding licensed professional (&quot; + licSeq + &quot;) condition (&quot; + cImpact + &quot;): &quot; + addCAEResult.getErrorMessage());
			}
		}
	}

 
function addLookup(stdChoice,stdValue,stdDesc) 
	{
	//check if stdChoice and stdValue already exist; if they do, don't add
	var bizDomScriptResult = aa.bizDomain.getBizDomainByValue(stdChoice,stdValue);
	if (bizDomScriptResult.getSuccess())
		{
		logDebug(&quot;Standard Choices Item &quot;+stdChoice+&quot; and Value &quot;+stdValue+&quot; already exist.  Lookup is not added or updated.&quot;);
		return false;
		}

	//Proceed to add
	var strControl;
	
	if (stdChoice != null &amp;&amp; stdChoice.length &amp;&amp; stdValue != null &amp;&amp; stdValue.length &amp;&amp; stdDesc != null &amp;&amp; stdDesc.length)
		{
		var bizDomScriptResult = aa.bizDomain.createBizDomain(stdChoice, stdValue, &quot;A&quot;, stdDesc)

		if (bizDomScriptResult.getSuccess())

			//check if new Std Choice actually created



			logDebug(&quot;Successfully created Std Choice(&quot; + stdChoice + &quot;,&quot; + stdValue + &quot;) = &quot; + stdDesc);
		else
			logDebug(&quot;**ERROR creating Std Choice &quot; + bizDomScript.getErrorMessage());
		}
	else
		logDebug(&quot;Could not create std choice, one or more null values&quot;);
	}

 
function addParcelCondition(parcelNum, cType,cStatus,cDesc,cComment,cImpact)
//if parcelNum is null, condition is added to all parcels on CAP
	{
	if (!parcelNum)
		{
		var capParcelResult = aa.parcel.getParcelandAttribute(capId,null);
		if (capParcelResult.getSuccess())
			{
			var Parcels = capParcelResult.getOutput().toArray();
			for (zz in Parcels)
				{
				logDebug(&quot;Adding Condition to parcel #&quot; + zz + &quot; = &quot; + Parcels[zz].getParcelNumber());
				var addParcelCondResult = aa.parcelCondition.addParcelCondition(Parcels[zz].getParcelNumber(), cType, cDesc, cComment, null, null, cImpact, cStatus, sysDate, null, sysDate, sysDate, systemUserObj, systemUserObj); 
					if (addParcelCondResult.getSuccess())
					        	{
						logMessage(&quot;Successfully added condition to Parcel &quot; + Parcels[zz].getParcelNumber() + &quot;  (&quot; + cImpact + &quot;) &quot; + cDesc);
						logDebug(&quot;Successfully added condition to Parcel &quot; + Parcels[zz].getParcelNumber() + &quot;  (&quot; + cImpact + &quot;) &quot; + cDesc);
						}
					else
						{
						logDebug( &quot;**ERROR: adding condition to Parcel &quot; + Parcels[zz].getParcelNumber() + &quot;  (&quot; + cImpact + &quot;): &quot; + addParcelCondResult.getErrorMessage());
						}
				}
			}
		}
	else
		{
			var addParcelCondResult = aa.parcelCondition.addParcelCondition(parcelNum, cType, cDesc, cComment, null, null, cImpact, cStatus, sysDate, null, sysDate, sysDate, systemUserObj, systemUserObj); 
	
		        if (addParcelCondResult.getSuccess())
		        	{
				logMessage(&quot;Successfully added condition to Parcel &quot; + parcelNum + &quot;  (&quot; + cImpact + &quot;) &quot; + cDesc);
				logDebug(&quot;Successfully added condition to Parcel &quot; + parcelNum + &quot;  (&quot; + cImpact + &quot;) &quot; + cDesc);
				}
			else
				{
			logDebug( &quot;**ERROR: adding condition to Parcel &quot; + parcelNum + &quot;  (&quot; + cImpact + &quot;): &quot; + addParcelCondResult.getErrorMessage());
				}
		}
	}

 
function addParcelDistrict(parcelNum, districtValue)
//if parcelNum is null, district is is added to all parcels on CAP
	{
	if (!parcelNum)
		{
		var capParcelResult = aa.parcel.getParcelandAttribute(capId,null);
		if (capParcelResult.getSuccess())
			{
			var Parcels = capParcelResult.getOutput().toArray();
			for (zz in Parcels)
				{
				apdResult = aa.parcel.addParceDistrictForDaily(capId.getID1(),capId.getID2(),capId.getID3(),Parcels[zz].getParcelNumber(),districtValue);
				
				if (!apdResult.getSuccess())
					{ logDebug(&quot;**ERROR Adding District &quot; + districtValue + &quot; to parcel #&quot; + Parcels[zz].getParcelNumber() + &quot; : &quot; + apdResult.getErrorMessage()) ; return false ; }
				else
					logDebug(&quot;Successfully added district &quot; + districtValue + &quot; to parcel #&quot; + Parcels[zz].getParcelNumber());

				}
			}
		}
	else
		{
		apdResult = aa.parcel.addParceDistrictForDaily(capId.getID1(),capId.getID2(),capId.getID3(),parcelNum,districtValue);

		if (!apdResult.getSuccess())
			{ logDebug(&quot;**ERROR Adding District &quot; + districtValue + &quot; to parcel #&quot; + parcelNum + &quot; : &quot; + apdResult.getErrorMessage()) ; return false ; }
		else
			logDebug(&quot;Successfully added district &quot; + districtValue + &quot; to parcel #&quot; + parcelNum);
		}
	}

 
function addParent(parentAppNum) 
//
// adds the current application to the parent
//
	{
	var getCapResult = aa.cap.getCapID(parentAppNum);
	if (getCapResult.getSuccess())
		{
		var parentId = getCapResult.getOutput();
		var linkResult = aa.cap.createAppHierarchy(parentId, capId);
		if (linkResult.getSuccess())
			logDebug(&quot;Successfully linked to Parent Application : &quot; + parentAppNum);
		else
			logDebug( &quot;**ERROR: linking to parent application parent cap id (&quot; + parentAppNum + &quot;): &quot; + linkResult.getErrorMessage());
		}
	else
		{ logDebug( &quot;**ERROR: getting parent cap id (&quot; + parentAppNum + &quot;): &quot; + getCapResult.getErrorMessage()) }
	}
			
 
function addrAddCondition(pAddrNum, pType, pStatus, pDesc, pComment, pImpact, pAllowDup)
	{
	//if pAddrNum is null, condition is added to all addresses on CAP
	//06SSP-00223
	//
	if (pAllowDup==&quot;Y&quot;)
		var noDup = false;
	else
		var noDup = true;
		
	var condAdded = false;
		
	if (!pAddrNum) //no address num, add condition to all addresses on CAP
		{
		var capAddrResult = aa.address.getAddressByCapId(capId);
		if (capAddrResult.getSuccess())
			{
			var addCondResult;
			var addCondResult2;
			var getCondResult;
			var condArray;
			var addresses = capAddrResult.getOutput();
			
			addCondLoop:  //loop identifier
			for (zz in addresses)
				{
				var addrRefId = addresses[zz].getRefAddressId();
				if (addrRefId==null)
					{
					logDebug(&quot;No reference address ID found for Address &quot;+zz);
					continue;
					}
					
				if (noDup) //Check if this address has duplicate condition
					{
					var cType;
					var cStatus;
					var cDesc;
					var cImpact;
					
					getCondResult = aa.addressCondition.getAddressConditions(addrRefId);
					condArray = getCondResult.getOutput();
					if (condArray.length&gt;0)
						{
						for (bb in condArray)
							{
							cType = condArray[bb].getConditionType();
							cStatus = condArray[bb].getConditionStatus();
							cDesc = condArray[bb].getConditionDescription();
							cImpact = condArray[bb].getImpactCode();
							if (cType==null)
								cType = &quot; &quot;;
							if (cStatus==null)
								cStatus = &quot; &quot;;
							if (cDesc==null)
								cDesc = &quot; &quot;;
							if (cImpact==null)
								cImpact = &quot; &quot;;
							if ( (pType==null || pType.toUpperCase()==cType.toUpperCase()) &amp;&amp; (pStatus==null || pStatus.toUpperCase()==cStatus.toUpperCase()) &amp;&amp; (pDesc==null || pDesc.toUpperCase()==cDesc.toUpperCase()) &amp;&amp; (pImpact==null || pImpact.toUpperCase()==cImpact.toUpperCase()) )
								{
								logMessage(&quot;Condition already exists: New condition not added to Address ID &quot;+addrRefId);
								logDebug(&quot;Condition already exists: New condition not added to Address ID &quot;+addrRefId);
								continue addCondLoop; //continue to next address without adding condition
								}
							}
						}
					}
					
				logDebug(&quot;Adding Condition to address &quot; + zz + &quot; = &quot; + addrRefId);
				addCondResult = aa.addressCondition.addAddressCondition(addrRefId, pType, pDesc, pComment, null, null, pImpact, pStatus, sysDate, null, sysDate, sysDate, systemUserObj, systemUserObj); 
				if (addCondResult.getSuccess())
					{
					logMessage(&quot;Successfully added condition to Address ID &quot; + addrRefId + &quot;  (&quot; + pImpact + &quot;) &quot; + pDesc);
					logDebug(&quot;Successfully added condition to Address ID &quot; + addrRefId + &quot;  (&quot; + pImpact + &quot;) &quot; + pDesc);
					condAdded=true;
					}
				else
					{
					logDebug( &quot;**ERROR: adding condition to Address &quot; + addrRefId + &quot;  (&quot; + pImpact + &quot;): &quot; + addCondResult.getErrorMessage());
					}
				}
			}
		}
	else //add condition to specified address only
		{
		if (noDup) //Check if this address has duplicate condition
			{
			var cType;
			var cStatus;
			var cDesc;
			var cImpact;
			
			getCondResult = aa.addressCondition.getAddressConditions(pAddrNum);
			condArray = getCondResult.getOutput();
			if (condArray.length&gt;0)
				{
				for (bb in condArray)
					{
					cType = condArray[bb].getConditionType();
					cStatus = condArray[bb].getConditionStatus();
					cDesc = condArray[bb].getConditionDescription();
					cImpact = condArray[bb].getImpactCode();
					if (cType==null)
						cType = &quot; &quot;;
					if (cStatus==null)
						cStatus = &quot; &quot;;
					if (cDesc==null)
						cDesc = &quot; &quot;;
					if (cImpact==null)
						cImpact = &quot; &quot;;
					if ( (pType==null || pType.toUpperCase()==cType.toUpperCase()) &amp;&amp; (pStatus==null || pStatus.toUpperCase()==cStatus.toUpperCase()) &amp;&amp; (pDesc==null || pDesc.toUpperCase()==cDesc.toUpperCase()) &amp;&amp; (pImpact==null || pImpact.toUpperCase()==cImpact.toUpperCase()) )
						{
						logMessage(&quot;Condition already exists: New condition not added to Address ID &quot;+pAddrNum);
						logDebug(&quot;Condition already exists: New condition not added to Address ID &quot;+pAddrNum);
						return false;
						}
					}
				}
			}
		var addCondResult = aa.addressCondition.addAddressCondition(pAddrNum, pType, pDesc, pComment, null, null, pImpact, pStatus, sysDate, null, sysDate, sysDate, systemUserObj, systemUserObj); 
	  if (addCondResult.getSuccess())
		  {
			logMessage(&quot;Successfully added condition to Address ID &quot; + pAddrNum + &quot;  (&quot; + pImpact + &quot;) &quot; + pDesc);
			logDebug(&quot;Successfully added condition to Address ID &quot; + pAddrNum + &quot;  (&quot; + pImpact + &quot;) &quot; + pDesc);
			condAdded=true;
			}
		else
			{
			logDebug( &quot;**ERROR: adding condition to Address &quot; + pAddrNum + &quot;  (&quot; + pImpact + &quot;): &quot; + addCondResult.getErrorMessage());
			}
		}
	return condAdded;
	}

 

function addStdCondition(cType,cDesc)
	{

	if (!aa.capCondition.getStandardConditions)
		{
		logDebug(&quot;addStdCondition function is not available in this version of Accela Automation.&quot;);
		}
        else
		{
		standardConditions = aa.capCondition.getStandardConditions(cType,cDesc).getOutput();
		for(i = 0; i&lt;standardConditions.length;i++)
			{
			standardCondition = standardConditions[i]
			var addCapCondResult = aa.capCondition.addCapCondition(capId, standardCondition.getConditionType(), standardCondition.getConditionDesc(), standardCondition.getConditionComment(), sysDate, null, sysDate, null, null, standardCondition.getImpactCode(), systemUserObj, systemUserObj, &quot;Applied&quot;, currentUserID, &quot;A&quot;)
	        	if (addCapCondResult.getSuccess())
	        		{
				logMessage(&quot;Successfully added condition (&quot; + standardCondition.getConditionDesc() + &quot;)&quot;);
				logDebug(&quot;Successfully added condition (&quot; + standardCondition.getConditionDesc() + &quot;)&quot;);
				}
			else
				{
				logDebug( &quot;**ERROR: adding condition (&quot; + standardCondition.getConditionDesc() + &quot;): &quot; + addCapCondResult.getErrorMessage());
				}
			}
		}
	}
 
  function addToASITable(tableName,tableValues) // optional capId
  	{
	//  tableName is the name of the ASI table
	//  tableValues is an associative array of values.  All elements MUST be strings.
  	itemCap = capId
	if (arguments.length &gt; 2)
		itemCap = arguments[2]; // use cap ID specified in args

	var tssmResult = aa.appSpecificTableScript.getAppSpecificTableModel(itemCap,tableName)

	if (!tssmResult.getSuccess())
		{ logDebug(&quot;**WARNING: error retrieving app specific table &quot; + tableName + &quot; &quot; + tssmResult.getErrorMessage()) ; return false }

	var tssm = tssmResult.getOutput();
	var tsm = tssm.getAppSpecificTableModel();
	var fld = tsm.getTableField()
	var col = tsm.getColumns()
	var coli = col.iterator();

	while (coli.hasNext())
		{
		colname = coli.next();
		fld.add(tableValues[colname.getColumnName()]);
		}

	tsm.setTableField(fld);

	if (tsm.setReadonlyField) tsm.setReadonlyField(null);  // check for 6.6.1.   If so need to populate with null

	addResult = aa.appSpecificTableScript.editAppSpecificTableInfos(tsm, itemCap, currentUserID);
	if (!addResult .getSuccess())
		{ logDebug(&quot;**WARNING: error adding record to ASI Table:  &quot; + tableName + &quot; &quot; + addResult.getErrorMessage()) ; return false }
	else
		logDebug(&quot;Successfully added record to ASI Table: &quot; + tableName);

	}

 
function allTasksComplete(stask) // optional tasks to ignore... for Sacramento
	{
	var ignoreArray = new Array();
	for (var i=1; i&lt;arguments.length;i++) 
		ignoreArray.push(arguments[i])

	// returns true if any of the subtasks are active
	var taskResult = aa.workflow.getTasks(capId);
	if (taskResult.getSuccess())
		{ taskArr = taskResult.getOutput(); }
	else
		{ logDebug( &quot;**ERROR: getting tasks : &quot; + taskResult.getErrorMessage()); return false }
		
	for (xx in taskArr)
		if (taskArr[xx].getProcessCode().equals(stask) &amp;&amp; taskArr[xx].getActiveFlag().equals(&quot;Y&quot;) &amp;&amp; !exists(taskArr[xx].getTaskDescription(),ignoreArray))
			return false;
	return true;
	}

 
function appHasCondition(pType,pStatus,pDesc,pImpact)
	{
	// Checks to see if conditions have been added to CAP
	// 06SSP-00223
	//
	if (pType==null)
		var condResult = aa.capCondition.getCapConditions(capId);
	else
		var condResult = aa.capCondition.getCapConditions(capId,pType);
		
	if (condResult.getSuccess())
		var capConds = condResult.getOutput();
	else
		{ 
		logMessage(&quot;**ERROR: getting cap conditions: &quot; + condResult.getErrorMessage());
		logDebug(&quot;**ERROR: getting cap conditions: &quot; + condResult.getErrorMessage());
		return false;
		}
	
	var cStatus;
	var cDesc;
	var cImpact;
	
	for (cc in capConds)
		{
		var thisCond = capConds[cc];
		var cStatus = thisCond.getConditionStatus();
		var cDesc = thisCond.getConditionDescription();
		var cImpact = thisCond.getImpactCode();
		var cType = thisCond.getConditionType();
		if (cStatus==null)
			cStatus = &quot; &quot;;
		if (cDesc==null)
			cDesc = &quot; &quot;;
		if (cImpact==null)
			cImpact = &quot; &quot;;
		//Look for matching condition
		
		if ( (pStatus==null || pStatus.toUpperCase().equals(cStatus.toUpperCase())) &amp;&amp; (pDesc==null || pDesc.toUpperCase().equals(cDesc.toUpperCase())) &amp;&amp; (pImpact==null || pImpact.toUpperCase().equals(cImpact.toUpperCase())))
			return true; //matching condition found
		}
	return false; //no matching condition found
	} //function
	
 
function appMatch(ats) // optional capId or CapID string
	{
	var matchArray = appTypeArray //default to current app
	if (arguments.length == 2) 
		{
		matchCapParm = arguments[1]
		if (typeof(matchCapParm) == &quot;string&quot;)
			matchCapId = aa.cap.getCapID(matchCapParm).getOutput();   // Cap ID to check
		else
			matchCapId = matchCapParm;
		if (!matchCapId)
			{
			logDebug(&quot;**WARNING: CapId passed to appMatch was not valid: &quot; + arguments[1]);
			return false
			}
		matchCap = aa.cap.getCap(matchCapId).getOutput();
		matchArray = matchCap.getCapType().toString().split(&quot;/&quot;);
		}
		
	var isMatch = true;
	var ata = ats.split(&quot;/&quot;);
	if (ata.length != 4)
		logDebug(&quot;**ERROR in appMatch.  The following Application Type String is incorrectly formatted: &quot; + ats);
	else
		for (xx in ata)
			if (!ata[xx].equals(matchArray[xx]) &amp;&amp; !ata[xx].equals(&quot;*&quot;))
				isMatch = false;
	return isMatch;
	}	


 
function appNameIsUnique(gaGroup,gaType,gaName)
//
// returns true if gaName application name has not been used in CAPs of gaGroup and gaType
// Bypasses current CAP
	{
	var getCapResult = aa.cap.getByAppType(gaGroup,gaType);
	if (getCapResult.getSuccess())
		var apsArray = getCapResult.getOutput();
	else
		{ logDebug( &quot;**ERROR: getting caps by app type: &quot; + getCapResult.getErrorMessage()) ; return null }
		
	for (aps in apsArray)
		{
		var myCap = aa.cap.getCap(apsArray[aps].getCapID()).getOutput();
		if (myCap.getSpecialText())
			if (myCap.getSpecialText().toUpperCase().equals(gaName.toUpperCase()) &amp;&amp; !capIDString.equals(apsArray[aps].getCapID().getCustomID()))
				return false;
		}
	return true;
	}

 

function assignCap(assignId) // option CapId
	{
	var itemCap = capId
	if (arguments.length &gt; 1) itemCap = arguments[1]; // use cap ID specified in args

	var cdScriptObjResult = aa.cap.getCapDetail(itemCap);
	if (!cdScriptObjResult.getSuccess())
		{ logDebug(&quot;**ERROR: No cap detail script object : &quot; + cdScriptObjResult.getErrorMessage()) ; return false; }
	
	var cdScriptObj = cdScriptObjResult.getOutput();

	if (!cdScriptObj)
		{ logDebug(&quot;**ERROR: No cap detail script object&quot;) ; return false; }
		
	cd = cdScriptObj.getCapDetailModel();
	
	iNameResult  = aa.person.getUser(assignId);

	if (!iNameResult.getSuccess())
		{ logDebug(&quot;**ERROR retrieving  user model &quot; + assignId + &quot; : &quot; + iNameResult.getErrorMessage()) ; return false ; }
	
	iName = iNameResult.getOutput();

	cd.setAsgnDept(iName.getDeptOfUser());
	cd.setAsgnStaff(assignId);
		
	cdWrite = aa.cap.editCapDetail(cd)
	
	if (cdWrite.getSuccess())
		{ logDebug(&quot;Assigned CAP to &quot; + assignId) }
	else
		{ logDebug(&quot;**ERROR writing capdetail : &quot; + cdWrite.getErrorMessage()) ; return false ; }
	} 
function assignInspection(iNumber,iName)
	{
	// updates the inspection and assigns to a new user
	// requires the inspection id and the user name
	//
	iObjResult = aa.inspection.getInspection(capId,iNumber);
	if (!iObjResult.getSuccess())
		{ logDebug(&quot;**ERROR retrieving inspection &quot; + iNumber + &quot; : &quot; + iObjResult.getErrorMessage()) ; return false ; }
	
	iObj = iObjResult.getOutput();
	
	iNameResult  = aa.person.getUser(iName);

	if (!iNameResult.getSuccess())
		{ logDebug(&quot;**ERROR retrieving inspector user model &quot; + iName + &quot; : &quot; + iNameResult.getErrorMessage()) ; return false ; }
	
	iInspector = iNameResult.getOutput();
	
	iObj.setInspector(iInspector);

	aa.inspection.editInspection(iObj)
	}

 
function assignTask(wfstr,username) // optional process name
	{
	// Assigns the task to a user.  No audit.
	//
	var useProcess = false;
	var processName = &quot;&quot;;
	if (arguments.length == 3) 
		{
		processName = arguments[2]; // subprocess
		useProcess = true;
		}
		
	var taskUserResult = aa.person.getUser(username);
	if (taskUserResult.getSuccess())
		taskUserObj = taskUserResult.getOutput();  //  User Object
	else
		{ logMessage(&quot;**ERROR: Failed to get user object: &quot; + taskUserResult.getErrorMessage()); return false; }
		
	var workflowResult = aa.workflow.getTasks(capId);
 	if (workflowResult.getSuccess())
  	 	var wfObj = workflowResult.getOutput();
  	else
  	  	{ logMessage(&quot;**ERROR: Failed to get workflow object: &quot; + s_capResult.getErrorMessage()); return false; }
	
	for (i in wfObj)
		{
   		var fTask = wfObj[i];
 		if (fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase())  &amp;&amp; (!useProcess || fTask.getProcessCode().equals(processName)))
			{
			fTask.setAssignedUser(taskUserObj);
			var taskItem = fTask.getTaskItem();
			var adjustResult = aa.workflow.assignTask(taskItem);
			
			logMessage(&quot;Assigned Workflow Task: &quot; + wfstr + &quot; to &quot; + username);
			logDebug(&quot;Assigned Workflow Task: &quot; + wfstr + &quot; to &quot; + username);
			}			
		}
	}

 
function autoAssignInspection(iNumber)
	{
	// updates the inspection and assigns to a new user
	// requires the inspection id
	//

	iObjResult = aa.inspection.getInspection(capId,iNumber);
	if (!iObjResult.getSuccess())
		{ logDebug(&quot;**ERROR retrieving inspection &quot; + iNumber + &quot; : &quot; + iObjResult.getErrorMessage()) ; return false ; }
	
	iObj = iObjResult.getOutput();


	inspTypeResult = aa.inspection.getInspectionType(iObj.getInspection().getInspectionGroup(), iObj.getInspectionType())

	if (!inspTypeResult.getSuccess())
		{ logDebug(&quot;**ERROR retrieving inspection Type &quot; + inspTypeResult.getErrorMessage()) ; return false ; }
	
	inspTypeArr = inspTypeResult.getOutput();

        if (inspTypeArr == null || inspTypeArr.length == 0)
		{ logDebug(&quot;**ERROR no inspection type found&quot;) ; return false ; }

	inspType = inspTypeArr[0]; // assume first

	inspSeq = inspType.getSequenceNumber();

	inspSchedDate = iObj.getScheduledDate().getYear() + &quot;-&quot; + iObj.getScheduledDate().getMonth() + &quot;-&quot; + iObj.getScheduledDate().getDayOfMonth()

 	logDebug(inspSchedDate)

	iout =  aa.inspection.autoAssignInspector(capId.getID1(),capId.getID2(),capId.getID3(), inspSeq, inspSchedDate)

	if (!iout.getSuccess())
		{ logDebug(&quot;**ERROR retrieving auto assign inspector &quot; + iout.getErrorMessage()) ; return false ; }

	inspectorArr = iout.getOutput();

	if (inspectorArr == null || inspectorArr.length == 0)
		{ logDebug(&quot;**WARNING no auto-assign inspector found&quot;) ; return false ; }
	
	inspectorObj = inspectorArr[0];  // assume first
	
	iObj.setInspector(inspectorObj);

	assignResult = aa.inspection.editInspection(iObj)

	if (!assignResult.getSuccess())
		{ logDebug(&quot;**ERROR re-assigning inspection &quot; + assignResult.getErrorMessage()) ; return false ; }
	else
		logDebug(&quot;Successfully reassigned inspection &quot; + iObj.getInspectionType() + &quot; to user &quot; + inspectorObj.getUserID());

	}
 
function branch(stdChoice)
	{
	doStandardChoiceActions(stdChoice,true,0);
	}

 
function branchTask(wfstr,wfstat,wfcomment,wfnote) // optional process name
	{
	var useProcess = false;
	var processName = &quot;&quot;;
	if (arguments.length == 5) 
		{
		processName = arguments[4]; // subprocess
		useProcess = true;
		}

	var workflowResult = aa.workflow.getTasks(capId);
 	if (workflowResult.getSuccess())
  	 	var wfObj = workflowResult.getOutput();
  	else
  	  	{ logMessage(&quot;**ERROR: Failed to get workflow object: &quot; + s_capResult.getErrorMessage()); return false; }
	
	if (!wfstat) wfstat = &quot;NA&quot;;
	
	for (i in wfObj)
		{
   		var fTask = wfObj[i];
 		if (fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase())  &amp;&amp; (!useProcess || fTask.getProcessCode().equals(processName)))
			{
			var dispositionDate = aa.date.getCurrentDate();
			var stepnumber = fTask.getStepNumber();
			var processID = fTask.getProcessID();

			if (useProcess)
				aa.workflow.handleDisposition(capId,stepnumber,processID,wfstat,dispositionDate, wfnote,wfcomment,systemUserObj ,&quot;B&quot;);
			else
				aa.workflow.handleDisposition(capId,stepnumber,wfstat,dispositionDate, wfnote,wfcomment,systemUserObj ,&quot;B&quot;);
			
			logMessage(&quot;Closing Workflow Task: &quot; + wfstr + &quot; with status &quot; + wfstat + &quot;, Branching...&quot;);
			logDebug(&quot;Closing Workflow Task: &quot; + wfstr + &quot; with status &quot; + wfstat + &quot;, Branching...&quot;);
			}			
		}
	}

 
function callWebService(wsSubScript, wsScriptParameters)
	{

		aa.env.setValue(&quot;wsScriptParameters&quot;,wsScriptParameters);
		aa.env.setValue(&quot;wsScriptDebug&quot;,&quot;&quot;);
		aa.env.setValue(&quot;wsScriptMessage&quot;,&quot;&quot;);
		
		var sSubDebug = &quot;&quot;;
		var sSubMessage = &quot;&quot;;
		
		logDebug(&quot;Executing Web Service wsSubScript: &quot; + wsSubScript);
		aa.runScriptInNewTransaction(wsSubScript);
		sSubDebug = aa.env.getValue(&quot;wsScriptDebug&quot;);
		sSubMessage = aa.env.getValue(&quot;wsScriptMessage&quot;);
		if (sSubDebug != &quot;&quot;)
		{
			//Logging
			logDebug(&quot;Debug from wsSubScript: &quot; + wsSubScript);
			logDebug(sSubDebug);
		}
		if (sSubMessage != &quot;&quot;)
		{
			//Logging
			logDebug(&quot;Message from wsSubScript: &quot; + wsSubScript);
			logDebug(sSubMessage);
		}
		
	} 
function capHasExpiredLicProf(pDateType, pLicType, pCapId)
	{
	//Checks if any licensed professional of specified type (optional) on CAP has expired,  Expiration date type specified by pDateType.
	//If any have expired, displays message and returns true.  If expiration date is on or before current date, it is expired.
	//If any date is blank, script assumes that date has not expired.
	//Uses functions: refLicProfGetDate, jsDateToMMDDYYYY(), matches()
	//SR5054B
	
	//Validate parameters
	var vDateType;
	if ( pDateType==null || pDateType==&quot;&quot; )
		{
		logDebug (&quot;Invalid expiration type parameter&quot;);
		return false;
		}
	else
		{
		vDateType = pDateType.toUpperCase();
		if ( !matches(vDateType, &quot;EXPIRE&quot;,&quot;INSURANCE&quot;,&quot;BUSINESS&quot;) )
			{
			logDebug (&quot;Invalid expiration type parameter&quot;);
			return false;
			}
		}
	var vCapId = pCapId;
	if ( pCapId==null || pCapId==&quot;&quot; ) //If no capid parameter, use current cap
		vCapId = capId;
	
	//get Licensed Profs on CAP
	var licProfResult = aa.licenseScript.getLicenseProf(capId);
	if (!licProfResult.getSuccess())
		{
		logDebug(&quot;Error getting CAP's license professional: &quot; +licProfResult.getErrorMessage());
		return false;
		}
	var vToday = new Date();
	var vExpired = false;
	var licProfList = licProfResult.getOutput();
	if (licProfList)
		{
		for (i in licProfList)
			{
			if ( pLicType==null || pLicType==&quot;&quot; || pLicType.equals(licProfList[i].getLicenseType()) )
				{
				var licNum = licProfList[i].getLicenseNbr();
				
				//Check if has expired
				var vResult = refLicProfGetDate(licNum, vDateType);

				if (vResult &lt; vToday)
					{
					vExpired = true;
					logMessage(&quot;WARNING: Licence # &quot;+licNum+&quot; expired on &quot;+jsDateToMMDDYYYY(vResult));
					logDebug(&quot;Licence # &quot;+licNum+&quot; expired on &quot;+jsDateToMMDDYYYY(vResult));
					}			
				}
			}
		}
	else
		{
		logDebug(&quot;No licensed professionals found on CAP&quot;);
		return false;
		}
	return vExpired;
	} 
function capIdsFilterByFileDate(pCapIdArray, pStartDate, pEndDate)
	{
	//Filters CAP's in pCapIdArray by file date, and returns only CAP's whose file date falls within pStartDate and pEndDate, as a capId Array
	//Parameter pCapIdArray must be array of capId's (CapIDModel objects)
	//07SSP-00034/SP5015
	
	if (pCapIdArray.length==0 || pCapIdArray[0]==undefined)
		{
		logDebug(&quot;Invalid 1st parameter&quot;);
		return false;
		}

	var filteredArray = new Array();
	var startDate = new Date(pStartDate);
	var endDate = new Date(pEndDate);
	var relcap;
	var fileDate;
	
	logDebug(&quot;Filtering CAP array by file date between &quot;+pStartDate+&quot; and &quot;+pEndDate);
	for (y in pCapIdArray)
		{
		relcap = aa.cap.getCap(pCapIdArray[y]).getOutput(); //returns CapScriptModel object
		fileDate = convertDate(relcap.getFileDate()); //returns javascript date
		//logDebug(&quot;CAP: &quot;+pCapIdArray[y]+&quot;, File Date: &quot;+fileDate);
		if (fileDate &gt;= startDate &amp;&amp; fileDate &lt;= endDate)
			filteredArray.push(pCapIdArray[y]); //add cap to array
		}
	
	return filteredArray;
	} 
function capIdsGetByAddr ()
	{
	//Gets CAPs with the same address as the current CAP, as capId (CapIDModel) object array (array includes current capId)
	//07SSP-00034/SP5015
	//
		
	//Get address(es) on current CAP
	var addrResult = aa.address.getAddressByCapId(capId);
	if (!addrResult.getSuccess())
		{
		logDebug(&quot;**ERROR: getting CAP addresses: &quot;+addrResult.getErrorMessage());
		return false;
		}
	
	var addrArray = new Array();
	var addrArray = addrResult.getOutput();
	if (addrArray.length==0 || addrArray==undefined)
		{
		logDebug(&quot;The current CAP has no address.  Unable to get CAPs with the same address.&quot;)
		return false;
		}
	
	//use 1st address for comparison
	var streetName = addrArray[0].getStreetName();
	var hseNum = addrArray[0].getHouseNumberStart();
	var streetSuffix = addrArray[0].getStreetSuffix();
	var zip = addrArray[0].getZip();
	var streetDir = addrArray[0].getStreetDirection();
	
	if (streetDir == &quot;&quot;) streetDir = null;
	if (streetSuffix == &quot;&quot;) streetSuffix = null;
	if (zip == &quot;&quot;) zip = null;
	
	// get caps with same address
	var capAddResult = aa.cap.getCapListByDetailAddress(streetName,parseInt(hseNum),streetSuffix,zip,streetDir,null);
	if (capAddResult.getSuccess())
	 	var capArray=capAddResult.getOutput(); 
	else
	 	{ 
		logDebug(&quot;**ERROR: getting similar addresses: &quot; + capAddResult.getErrorMessage()); 
		return false; 
		}
	
	var capIdArray = new Array();
	//convert CapIDScriptModel objects to CapIDModel objects
	for (i in capArray)
		capIdArray.push(capArray[i].getCapID());
		
	if (capIdArray)
		return (capIdArray);
	else
		return false;
	} 
function capIdsGetByParcel(pParcelNum)
	{
	//Gets CAPs that have parcel pParcelNum, as capId (CapIDModel object)  array (array includes current capId)
	//if parameter pParcelNum is null, uses 1st parcel on current CAP
	//07SSP-00034/SP5015
	//
	if (pParcelNum != null)
		var parcelNum = pParcelNum;
	else
		{
		var capParcelResult = aa.parcel.getParcelandAttribute(capId,null);
		if (!capParcelResult.getSuccess())
			{
			logDebug(&quot;**ERROR: Failed to get parcels: &quot; + capParcelResult.getErrorMessage()); 
			return false; 
			}
			
		var Parcels = capParcelResult.getOutput().toArray();
		if (Parcels[0]==undefined)
			{
			logDebug(&quot;Current CAP has no parcel&quot;);
			return false;
			}
		var parcelNum = Parcels[0].getParcelNumber();
		}
		
	capParcelResult = aa.cap.getCapListByParcelID(parcelNum, aa.util.newQueryFormat());
	
	if (!capParcelResult.getSuccess())
		{
		logDebug(&quot;**ERROR: Failed to get parcels: &quot; + capParcelResult.getErrorMessage()); 
		return false; 
		}
	
	var capParArray = capParcelResult.getOutput();
	var capIdParArray = new Array();
	//convert CapIDScriptModel objects to CapIDModel objects
	for (i in capParArray)
		capIdParArray.push(capParArray[i].getCapID());
		
	if (capIdParArray)
		return capIdParArray;
	else
		return false;
	}
		
	 
function checkInspectionResult(insp2Check,insp2Result)
	{
	var inspResultObj = aa.inspection.getInspections(capId);
	if (inspResultObj.getSuccess())
		{
		var inspList = inspResultObj.getOutput();
		for (xx in inspList)
			if (String(insp2Check).equals(inspList[xx].getInspectionType()) &amp;&amp; String(insp2Result).equals(inspList[xx].getInspectionStatus()))
				return true;
		}
	return false;
	}

 
function childGetByCapType(pCapType, pParentCapId) 
	{
	// Returns capId object of first child of pParentCapId whose cap type matches pCapType parameter
	// Wildcard * may be used in pCapType, e.g. &quot;Building/Commercial/*/*&quot;
	// Optional 3rd parameter pChildCapIdSkip: capId of child to skip
	// 06SSP-00219.C61201
  //
	if (pParentCapId!=null) //use cap in parameter 
		var vCapId = pParentCapId;
	else // use current cap
		var vCapId = capId;
		
	if (arguments.length&gt;2)
		var childCapIdSkip = arguments[2];
	else
		var childCapIdSkip = null;
		
	var typeArray = pCapType.split(&quot;/&quot;);
	if (typeArray.length != 4)
		logDebug(&quot;**ERROR in childGetByCapType function parameter.  The following cap type parameter is incorrectly formatted: &quot; + pCapType);
		
	var getCapResult = aa.cap.getChildByMasterID(vCapId);
	if (getCapResult.getSuccess())
		{
		var childArray = getCapResult.getOutput();
		if (childArray.length)
			{
			var childCapId;
			var capTypeStr = &quot;&quot;;
			var childTypeArray;
			var isMatch;
			for (xx in childArray)
				{
				childCapId = childArray[xx].getCapID();
				if (childCapIdSkip!=null &amp;&amp; childCapIdSkip.getCustomID().equals(childCapId.getCustomID())) //skip over this child
					continue;
				
				capTypeStr = aa.cap.getCap(childCapId).getOutput().getCapType().toString();	// Convert cap type to string (&quot;Building/A/B/C&quot;)
				childTypeArray = capTypeStr.split(&quot;/&quot;);
				isMatch = true;
				for (yy in childTypeArray) //looking for matching cap type
					{
					if (!typeArray[yy].equals(childTypeArray[yy]) &amp;&amp; !typeArray[yy].equals(&quot;*&quot;))
						{
						isMatch = false;
						break;
						}
					}
				if (isMatch)
					return childCapId;
				}
			}
		else
			logDebug( &quot;**WARNING: childGetByCapType function found no children&quot;);	
			
		return false;
		}
	else
		logDebug( &quot;**WARNING: childGetByCapType function found no children: &quot; + getCapResult.getErrorMessage());
	}
	
 
function closeTask(wfstr,wfstat,wfcomment,wfnote) // optional process name
	{
	var useProcess = false;
	var processName = &quot;&quot;;
	if (arguments.length == 5) 
		{
		processName = arguments[4]; // subprocess
		useProcess = true;
		}

	var workflowResult = aa.workflow.getTasks(capId);
 	if (workflowResult.getSuccess())
  	 	var wfObj = workflowResult.getOutput();
  	else
  	  	{ logMessage(&quot;**ERROR: Failed to get workflow object: &quot; + s_capResult.getErrorMessage()); return false; }
	
	if (!wfstat) wfstat = &quot;NA&quot;;
	
	for (i in wfObj)
		{
   		var fTask = wfObj[i];
 		if (fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase())  &amp;&amp; (!useProcess || fTask.getProcessCode().equals(processName)))
			{
			var dispositionDate = aa.date.getCurrentDate();
			var stepnumber = fTask.getStepNumber();
			var processID = fTask.getProcessID();

			if (useProcess)
				aa.workflow.handleDisposition(capId,stepnumber,processID,wfstat,dispositionDate, wfnote,wfcomment,systemUserObj ,&quot;Y&quot;);
			else
				aa.workflow.handleDisposition(capId,stepnumber,wfstat,dispositionDate, wfnote,wfcomment,systemUserObj ,&quot;Y&quot;);
			
			logMessage(&quot;Closing Workflow Task: &quot; + wfstr + &quot; with status &quot; + wfstat);
			logDebug(&quot;Closing Workflow Task: &quot; + wfstr + &quot; with status &quot; + wfstat);
			}			
		}
	}

 
function comment(cstr)
	{
	if (showDebug) logDebug(cstr);
	if (showMessage) logMessage(cstr);
	}
	
 
function completeCAP(userId) // option CapId
{
	var itemCap = capId
	if (arguments.length &gt; 1) itemCap = arguments[1]; // use cap ID specified in args

	var cdScriptObjResult = aa.cap.getCapDetail(itemCap);
	if (!cdScriptObjResult.getSuccess())
		{ 	logDebug(&quot;**ERROR: No cap detail script object : &quot; + cdScriptObjResult.getErrorMessage());
			return false; }
	
	var cdScriptObj = cdScriptObjResult.getOutput();

	if (!cdScriptObj)
		{ 	logDebug(&quot;**ERROR: No cap detail script object&quot;) ;
			return false; }
		
	cd = cdScriptObj.getCapDetailModel();
	
	iNameResult  = aa.person.getUser(userId);

	if (!iNameResult.getSuccess())
		{ 	logDebug(&quot;**ERROR retrieving  user model &quot; + userId + &quot; : &quot; + iNameResult.getErrorMessage()) ;
			return false ; }
	
	iName = iNameResult.getOutput();

	cd.setCompleteDept(iName.getDeptOfUser());
	cd.setCompleteStaff(userId);
	cdScriptObj.setCompleteDate(sysDate);
		
	cdWrite = aa.cap.editCapDetail(cd)
	
	if (cdWrite.getSuccess())
	{ 	
		logDebug(&quot;Set CAP *Completed by Staff* to &quot; + userId) + &quot;\nSet CAP *Completed by Dept* &quot; + iName.getDeptOfUser() + &quot;\nSet CAP *Completed Date* &quot; + sysDate.toString(); 
	}
	else
	{ 	
		logDebug(&quot;**ERROR writing capdetail : &quot; + cdWrite.getErrorMessage()) ;
		return false ; 
	}
} 
function contactAddFromUser(pUserId)
	{
	// Retrieves user's reference Contact record and adds to CAP
	// Returns contact seq nbr or false if contact not added
	// 06SSP-00186
	//
	if (arguments.length==1) //use parameter user
		{
		var personResult = aa.person.getUser(pUserId);
		if (personResult.getSuccess())
			{
			var personObj = personResult.getOutput();
			//logDebug(&quot;personObj class: &quot;+personObj.getClass());
			if (personObj==null) // no user found
				{
				logDebug(&quot;**ERROR: Failed to get User&quot;);
				return false;
				}
			}
		else
  	  { 
			logDebug(&quot;**ERROR: Failed to get User: &quot; + personResult.getErrorMessage()); 
			return false; 
			}
		}
	else //use current user
		var personObj = systemUserObj;
		
	var userFirst = personObj.getFirstName();
	var userMiddle = personObj.getMiddleName();
	var userLast = personObj.getLastName();
	
	//Find PeopleModel object for user 
	var peopleResult = aa.people.getPeopleByFMLName(userFirst, userMiddle, userLast);
	if (peopleResult.getSuccess())
		{
		var peopleObj = peopleResult.getOutput();
		//logDebug(&quot;peopleObj is &quot;+peopleObj.getClass());
		if (peopleObj==null)
			{
			logDebug(&quot;No reference user found.&quot;);
			return false;
			}
		logDebug(&quot;No. of reference contacts found: &quot;+peopleObj.length);
		}
	else
		{ 
			logDebug(&quot;**ERROR: Failed to get reference contact record: &quot; + peopleResult.getErrorMessage()); 
			return false; 
		}
	
	//Add the reference contact record to the current CAP 
	var contactAddResult = aa.people.createCapContactWithRefPeopleModel(capId, peopleObj[0]);
	if (contactAddResult.getSuccess())
		{
		logDebug(&quot;Contact successfully added to CAP.&quot;);
		var capContactResult = aa.people.getCapContactByCapID(capId);
		if (capContactResult.getSuccess())
			{
			var Contacts = capContactResult.getOutput();
			var idx = Contacts.length;
			var contactNbr = Contacts[idx-1].getCapContactModel().getPeople().getContactSeqNumber();
			logDebug (&quot;Contact Nbr = &quot;+contactNbr);
			return contactNbr;
			}
		else
			{
			logDebug(&quot;**ERROR: Failed to get Contact Nbr: &quot;+capContactResult.getErrorMessage());
			return false;
			}
		}
	else
		{ 
			logDebug(&quot;**ERROR: Cannot add contact: &quot; + contactAddResult.getErrorMessage()); 
			return false; 
		}	
	} 
	
 
function contactSetPrimary(pContactNbr)
	{
	// Makes contact the Primary Contact
	// 06SSP-00186
	//
	if (pContactNbr==null)
		{
		logDebug(&quot;**ERROR: ContactNbr parameter is null&quot;);
		return false;
		}
	else
		{
		var capContactResult = aa.people.getCapContactByPK(capId, pContactNbr);
		if (capContactResult.getSuccess())
			{
			var contact = capContactResult.getOutput();
			//logDebug(&quot;contact class is &quot;+contact.getClass());
			var peopleObj=contact.getCapContactModel().getPeople();
			peopleObj.setFlag(&quot;Y&quot;);
			contact.getCapContactModel().setPeople(peopleObj);
			var editResult = aa.people.editCapContact(contact.getCapContactModel());
			if (editResult.getSuccess())
				{
				logDebug(&quot;Contact successfully set to Primary&quot;);
				return true;
				}
			else
				{
				logDebug(&quot;**ERROR: Could not set contact to Primary: &quot;+editResult.getErrorMessage());
				return false;
				}
			}
		else
			{
			logDebug(&quot;**ERROR: Can't get contact: &quot;+capContactResult.getErrorMessage());
			return false;
			}
		}
	}
	
 
function contactSetRelation(pContactNbr, pRelation)
	{
	// Edits Contact Relationship for specified Contact
	//06SSP-00186
	//
	if (pContactNbr==null)
		{
		logDebug(&quot;ContactNbr parameter is null&quot;);
		return false;
		}
	else
		{
		var capContactResult = aa.people.getCapContactByPK(capId, pContactNbr);
		if (capContactResult.getSuccess())
			{
			var contact = capContactResult.getOutput();
			//logDebug(&quot;contact class is &quot;+contact.getClass());
			var peopleObj=contact.getCapContactModel().getPeople();
			peopleObj.setRelation(pRelation);
			contact.getCapContactModel().setPeople(peopleObj);
			var editResult = aa.people.editCapContact(contact.getCapContactModel());
			if (editResult.getSuccess())
				{
				logDebug(&quot;Contact relationship successfully changed to &quot;+pRelation);
				return true;
				}
			else
				{
				logDebug(&quot;**ERROR: Could not change contact relationship: &quot;+editResult.getErrorMessage());
				return false;
				}
			}
		else
			{
			logDebug(&quot;**ERROR: Can't get contact: &quot;+capContactResult.getErrorMessage());
			return false;
			}
		}
	}

 
function copyAddresses(pFromCapId, pToCapId)
	{
	//Copies all property addresses from pFromCapId to pToCapId
	//If pToCapId is null, copies to current CAP
	//07SSP-00037/SP5017
	//
	if (pToCapId==null)
		var vToCapId = capId;
	else
		var vToCapId = pToCapId;
		
	//check if target CAP has primary address	
	var priAddrExists = false;
	var capAddressResult = aa.address.getAddressByCapId(vToCapId);
	if (capAddressResult.getSuccess())
		{
		Address = capAddressResult.getOutput();
		for (yy in Address)
			{
			if (&quot;Y&quot;==Address[yy].getPrimaryFlag())
				{
				priAddrExists = true;
				logDebug(&quot;Target CAP has primary address&quot;);
				break;
				}
			}
		}
	else
		{
		logMessage(&quot;**ERROR: Failed to get addresses: &quot; + capAddressResult.getErrorMessage()); 
		return false; 
		}
		
	//get addresses from originating CAP	
	var capAddressResult = aa.address.getAddressByCapId(pFromCapId);
	var copied = 0;
	if (capAddressResult.getSuccess())
		{
		Address = capAddressResult.getOutput();
		for (yy in Address)
			{
			newAddress = Address[yy];
			newAddress.setCapID(vToCapId);
			if (priAddrExists)
				newAddress.setPrimaryFlag(&quot;N&quot;); //prevent target CAP from having more than 1 primary address
			aa.address.createAddress(newAddress);
			logDebug(&quot;Copied address from &quot;+pFromCapId.getCustomID()+&quot; to &quot;+vToCapId.getCustomID());
			copied++;
			}
		}
	else
		{
		logMessage(&quot;**ERROR: Failed to get addresses: &quot; + capAddressResult.getErrorMessage()); 
		return false; 
		}
	return copied;
	} 
function copyAppSpecific(newCap) // copy all App Specific info into new Cap
	{
	for (asi in AInfo)
	  	editAppSpecific(asi,AInfo[asi],newCap)
	}

 
function copyASIFields(sourceCapId,targetCapId)  // optional fields to ignore
	{
	var ignoreArray = new Array();
	for (var i=1; i&lt;arguments.length;i++)
		ignoreArray.push(arguments[i])

	var targetCap = aa.cap.getCap(targetCapId).getOutput();
	var targetCapType = targetCap.getCapType();
	var targetCapTypeString = targetCapType.toString();
	var targetCapTypeArray = targetCapTypeString.split(&quot;/&quot;);

	var sourceASIResult = aa.appSpecificInfo.getByCapID(sourceCapId)

	if (sourceASIResult.getSuccess())
		{ var sourceASI = sourceASIResult.getOutput(); }
	else
		{ aa.print( &quot;**ERROR: getting source ASI: &quot; + sourceASIResult.getErrorMessage()); return false }

	for (ASICount in sourceASI)
		  {
		  thisASI = sourceASI[ASICount];

		  if (!exists(thisASI.getCheckboxType(),ignoreArray))
		       {
		       thisASI.setPermitID1(targetCapId.getID1())
		       thisASI.setPermitID2(targetCapId.getID2())
		       thisASI.setPermitID3(targetCapId.getID3())
		       thisASI.setPerType(targetCapTypeArray[1])
		       thisASI.setPerSubType(targetCapTypeArray[2])
		       aa.cap.createCheckbox(thisASI)
		       }
  		  }
	}
 
function copyCalcVal(fromcap,newcap)
	{
	// 8/8/2008 JHS  creatBCalcValuatn method began using the script model after 6.4  updated this function
	if (!newcap)
		{ logMessage(&quot;**WARNING: copyCalcVal was passed a null new cap ID&quot;); return false; }

	var valResult = aa.finance.getCalculatedValuation(fromcap,null);
	if (valResult.getSuccess())
		var valArray = valResult.getOutput();
	else
		{ logMessage(&quot;**ERROR: Failed to get calc val array: &quot; + valResult.getErrorMessage()); return false; }

	for (thisCV in valArray)
		{
		var bcv = valArray[thisCV];
		bcv.setCapID(newcap);
		createResult = aa.finance.createBCalcValuatn(bcv);
		if (!createResult.getSuccess())
			{ logMessage(&quot;**ERROR: Creating new calc valuatn on target cap ID: &quot; + createResult.getErrorMessage()); return false; }
		}
	}
 
function copyConditions(fromCapId)
	{
	var getFromCondResult = aa.capCondition.getCapConditions(fromCapId);
	if (getFromCondResult.getSuccess())
		var condA = getFromCondResult.getOutput();
	else
		{ logDebug( &quot;**ERROR: getting cap conditions: &quot; + getFromCondResult.getErrorMessage()) ; return false}
		
	for (cc in condA)
		{
		var thisC = condA[cc];
		
		var addCapCondResult = aa.capCondition.addCapCondition(capId, thisC.getConditionType(), thisC.getConditionDescription(), thisC.getConditionComment(), thisC.getEffectDate(), thisC.getExpireDate(), sysDate, thisC.getRefNumber1(),thisC.getRefNumber2(), thisC.getImpactCode(), thisC.getIssuedByUser(), thisC.getStatusByUser(), thisC.getConditionStatus(), currentUserID, &quot;A&quot;)
		if (addCapCondResult.getSuccess())
			logDebug(&quot;Successfully added condition (&quot; +  thisC.getImpactCode() + &quot;) &quot; +  thisC.getConditionDescription());
		else
			logDebug( &quot;**ERROR: adding condition (&quot; + cImpact + &quot;): &quot; + addCapCondResult.getErrorMessage());
		}
	}

 
function copyConditionsFromParcel(parcelIdString)
		{
		var getFromCondResult = aa.parcelCondition.getParcelConditions(parcelIdString)
		if (getFromCondResult.getSuccess())
			var condA = getFromCondResult.getOutput();
		else
			{ logDebug( &quot;**WARNING: getting parcel conditions: &quot; + getFromCondResult.getErrorMessage()) ; return false}
			
		for (cc in condA)
			{
			var thisC = condA[cc];
			
			if (!appHasCondition(thisC.getConditionType(),null,thisC.getConditionDescription(),thisC.getImpactCode()))
				{
				var addCapCondResult = aa.capCondition.addCapCondition(capId, thisC.getConditionType(), thisC.getConditionDescription(), thisC.getConditionComment(), thisC.getEffectDate(), thisC.getExpireDate(), sysDate, thisC.getRefNumber1(),thisC.getRefNumber2(), thisC.getImpactCode(), thisC.getIssuedByUser(), thisC.getStatusByUser(), thisC.getConditionStatus(), currentUserID, &quot;A&quot;)
				if (addCapCondResult.getSuccess())
					logDebug(&quot;Successfully added condition (&quot; +  thisC.getImpactCode() + &quot;) &quot; +  thisC.getConditionDescription());
				else
					logDebug( &quot;**ERROR: adding condition (&quot; + thisC.getImpactCode() + &quot;): &quot; + addCapCondResult.getErrorMessage());
				}
			else
				logDebug( &quot;**WARNING: adding condition (&quot; + thisC.getImpactCode() + &quot;): condition already exists&quot;);
				
			}
		}
 
function copyContacts(pFromCapId, pToCapId)
	{
	//Copies all contacts from pFromCapId to pToCapId
	//07SSP-00037/SP5017
	//
	if (pToCapId==null)
		var vToCapId = capId;
	else
		var vToCapId = pToCapId;
		
	var capContactResult = aa.people.getCapContactByCapID(pFromCapId);
	var copied = 0;
	if (capContactResult.getSuccess())
		{
		var Contacts = capContactResult.getOutput();
		for (yy in Contacts)
			{
			var newContact = Contacts[yy].getCapContactModel();
			newContact.setCapID(vToCapId);
			aa.people.createCapContact(newContact);
			copied++;
			logDebug(&quot;Copied contact from &quot;+pFromCapId.getCustomID()+&quot; to &quot;+vToCapId.getCustomID());
			}
		}
	else
		{
		logMessage(&quot;**ERROR: Failed to get contacts: &quot; + capContactResult.getErrorMessage()); 
		return false; 
		}
	return copied;
	} 
function copyFees(sourceCapId,targetCapId)
	{

	var feeSeqArray = new Array();
	var invoiceNbrArray = new Array();
	var feeAllocationArray = new Array();

	var feeA = loadFees(sourceCapId)

	for (x in feeA)
		{
		thisFee = feeA[x];
		
		logMessage(&quot;We have a fee &quot; + thisFee.code + &quot; status : &quot; + thisFee.status);
		
		if (thisFee.status == &quot;INVOICED&quot;)
			{
			addFee(thisFee.code,thisFee.sched,thisFee.period,thisFee.unit,&quot;Y&quot;,targetCapId)

			var feeSeqArray = new Array();
			var paymentPeriodArray = new Array();

			feeSeqArray.push(thisFee.sequence);
			paymentPeriodArray.push(thisFee.period);
			var invoiceResult_L = aa.finance.createInvoice(sourceCapId, feeSeqArray, paymentPeriodArray);

			if (!invoiceResult_L.getSuccess())
				aa.print(&quot;**ERROR: Invoicing the fee items voided &quot; + thisFee.code + &quot; was not successful.  Reason: &quot; +  invoiceResult_L.getErrorMessage());
			}


		if (thisFee.status == &quot;NEW&quot;)
			{
			addFee(thisFee.code,thisFee.sched,thisFee.period,thisFee.unit,&quot;N&quot;,targetCapId)
			}

		}

	}
 
function copyParcelGisObjects() 
	{
	var capParcelResult = aa.parcel.getParcelandAttribute(capId,null);
	if (capParcelResult.getSuccess())
		{
		var Parcels = capParcelResult.getOutput().toArray();
		for (zz in Parcels)
			{
			var ParcelValidatedNumber = Parcels[zz].getParcelNumber();
			logDebug(&quot;Looking at parcel &quot; + ParcelValidatedNumber);
			var gisObjResult = aa.gis.getParcelGISObjects(ParcelValidatedNumber); // get gis objects on the parcel number
			if (gisObjResult.getSuccess()) 	
				var fGisObj = gisObjResult.getOutput();
			else
				{ logDebug(&quot;**ERROR: Getting GIS objects for Parcel.  Reason is: &quot; + gisObjResult.getErrorType() + &quot;:&quot; + gisObjResult.getErrorMessage()) ; return false }

			for (a1 in fGisObj) // for each GIS object on the Cap
				{
				var gisTypeScriptModel = fGisObj[a1];
                                var gisObjArray = gisTypeScriptModel.getGISObjects()
                                for (b1 in gisObjArray)
                                	{
  					var gisObjScriptModel = gisObjArray[b1];
  					var gisObjModel = gisObjScriptModel.getGisObjectModel() ;

					var retval = aa.gis.addCapGISObject(capId,gisObjModel.getServiceID(),gisObjModel.getLayerId(),gisObjModel.getGisId());

					if (retval.getSuccess())
						{ logDebug(&quot;Successfully added Cap GIS object: &quot; + gisObjModel.getGisId())}
					else
						{ logDebug(&quot;**ERROR: Could not add Cap GIS Object.  Reason is: &quot; + retval.getErrorType() + &quot;:&quot; + retval.getErrorMessage()) ; return false }	
					}
				}
			}
		}	
	else
		{ logDebug(&quot;**ERROR: Getting Parcels from Cap.  Reason is: &quot; + capParcelResult.getErrorType() + &quot;:&quot; + capParcelResult.getErrorMessage()) ; return false }
	}

 
function copyParcels(pFromCapId, pToCapId)
	{
	//Copies all parcels from pFromCapId to pToCapId
	//If pToCapId is null, copies to current CAP
	//07SSP-00037/SP5017
	//
	if (pToCapId==null)
		var vToCapId = capId;
	else
		var vToCapId = pToCapId;
				
	var capParcelResult = aa.parcel.getParcelandAttribute(pFromCapId,null);
	var copied = 0;
	if (capParcelResult.getSuccess())
		{
		var Parcels = capParcelResult.getOutput().toArray();
		for (zz in Parcels)
			{
			var newCapParcel = aa.parcel.getCapParcelModel().getOutput();
			newCapParcel.setParcelModel(Parcels[zz]);
			newCapParcel.setCapIDModel(vToCapId);
			newCapParcel.setL1ParcelNo(Parcels[zz].getParcelNumber());
			newCapParcel.setParcelNo(Parcels[zz].getParcelNumber());
			aa.parcel.createCapParcel(newCapParcel);
			logDebug(&quot;Copied parcel &quot;+Parcels[zz].getParcelNumber()+&quot; from &quot;+pFromCapId.getCustomID()+&quot; to &quot;+vToCapId.getCustomID());
			copied++;
			}
		}
	else
		{
		logMessage(&quot;**ERROR: Failed to get parcels: &quot; + capParcelResult.getErrorMessage()); 
		return false; 
		}
	return copied;
	} 
function copySchedInspections(pFromCapId, pToCapId)
	{
	//Copies all scheduled inspections from pFromCapId to pToCapId
	//If pToCapId is null, copies to current CAP
	//07SSP-00037/SP5017
	//
	if (pToCapId==null)
		var vToCapId = capId;
	else
		var vToCapId = pToCapId;
		
	var inspResultObj = aa.inspection.getInspections(pFromCapId);
	
	if (!inspResultObj.getSuccess())
		{
		logMessage(&quot;**ERROR: Failed to get inspections: &quot; + inspResultObj.getErrorMessage()); 
		return false;
		}
		
	var inspCount = 0;
	var schedRes;
	var inspector;
	var inspDate;
	var inspTime;
	var inspType;
	var inspComment;	
	
	var inspList = inspResultObj.getOutput();
	for (xx in inspList)
		{
		if (&quot;Insp Scheduled&quot;==inspList[xx].getDocumentDescription())
			{
			inspector = inspList[xx].getInspector();
			inspDate = inspList[xx].getScheduledDate();
			inspTime = inspList[xx].getScheduledTime();
			inspType = inspList[xx].getInspectionType();
			inspComment = inspList[xx].getInspectionComments();
			schedRes = aa.inspection.scheduleInspection(vToCapId, inspector, inspDate, inspTime, inspType, inspComment);
			if (schedRes.getSuccess())
				{
				logDebug(&quot;Copied scheduled inspection from &quot;+pFromCapId.getCustomID()+&quot; to &quot;+vToCapId.getCustomID());
				inspCount++;
				}
			else
				logDebug( &quot;**ERROR: copying scheduling inspection (&quot; + inspType + &quot;): &quot; + schedRes.getErrorMessage());
			}
		}
	return inspCount;	
	}


 
function countActiveTasks(processName)
	{
	// counts the number of active tasks on a given process
        var numOpen = 0;

	var workflowResult = aa.workflow.getTasks(capId);
 	if (workflowResult.getSuccess())
  	 	wfObj = workflowResult.getOutput();
  	else
  	  	{ logMessage(&quot;**ERROR: Failed to get workflow object: &quot; + s_capResult.getErrorMessage()); return false; }
	
	for (i in wfObj)
		{
   		fTask = wfObj[i];
		if (fTask.getProcessCode().equals(processName))
			if (fTask.getActiveFlag().equals(&quot;Y&quot;))
				numOpen++;
		}
	return numOpen;
	}
	
 
function countIdenticalInspections()
	{
	var cntResult = 0;
	var oldDateStr = &quot;01/01/1900&quot;;  // inspections older than this date count as 1
	if (arguments.length &gt; 0) oldDateStr = arguments[0]; // Option to override olddate in the parameter
	oldDate = new Date(&quot;oldDateStr&quot;);
	
	var oldInspectionFound = false;
	var inspResultObj = aa.inspection.getInspections(capId);
	if (inspResultObj.getSuccess())
		{
		inspList = inspResultObj.getOutput();
		for (xx in inspList)
			{
			if (String(inspType).equals(inspList[xx].getInspectionType()) &amp;&amp; String(inspResult).equals(inspList[xx].getInspectionStatus()))
				{
				if (convertDate(inspList[xx].getInspectionStatusDate()) &lt; oldDate)
					{
					if (!oldInspectionFound) { cntResult++ ; oldInspectionFound = true }
					}
				else
					{
					cntResult++
					}
				}
			}
		}	
	logDebug(&quot;countIdenticalInspections(&quot; + inspType + &quot;,&quot; + inspResult + &quot;, &quot; + oldDateStr +  &quot;) Returns &quot; + cntResult);
	return cntResult;
	}	
	 
function createCap(pCapType, pAppName) 
	{
	// creates a new application and returns the capID object
	// 07SSP-00037/SP5017
	//
	var aCapType = pCapType.split(&quot;/&quot;);
	if (aCapType.length != 4)
		{
		logDebug(&quot;**ERROR in createCap.  The following Application Type String is incorrectly formatted: &quot; + pCapType);
		return (&quot;INVALID PARAMETER&quot;);
		}
	
	var appCreateResult = aa.cap.createApp(aCapType[0],aCapType[1],aCapType[2],aCapType[3],pAppName);
	logDebug(&quot;Creating cap &quot; + pCapType);
	
	if (!appCreateResult.getSuccess())
		{
		logDebug( &quot;**ERROR: creating CAP &quot; + appCreateResult.getErrorMessage());
		return false;
		}

	var newId = appCreateResult.getOutput();
	logDebug(&quot;CAP of type &quot; + pCapType + &quot; created successfully &quot;);
	var newObj = aa.cap.getCap(newId).getOutput();	//Cap object
	
	return newId;
	}

 
function createChild(grp,typ,stype,cat,desc) 
//
// creates the new application and returns the capID object
//
	{
	var appCreateResult = aa.cap.createApp(grp,typ,stype,cat,desc);
	logDebug(&quot;creating cap &quot; + grp + &quot;/&quot; + typ + &quot;/&quot; + stype + &quot;/&quot; + cat);
	if (appCreateResult.getSuccess())
		{
		var newId = appCreateResult.getOutput();
		logDebug(&quot;cap &quot; + grp + &quot;/&quot; + typ + &quot;/&quot; + stype + &quot;/&quot; + cat + &quot; created successfully &quot;);
		
		// create Detail Record
		capModel = aa.cap.newCapScriptModel().getOutput();
		capDetailModel = capModel.getCapModel().getCapDetailModel();
		capDetailModel.setCapID(newId);
		aa.cap.createCapDetail(capDetailModel);

		var newObj = aa.cap.getCap(newId).getOutput();	//Cap object
		var result = aa.cap.createAppHierarchy(capId, newId); 
		if (result.getSuccess())
			logDebug(&quot;Child application successfully linked&quot;);
		else
			logDebug(&quot;Could not link applications&quot;);

		// Copy Parcels

		var capParcelResult = aa.parcel.getParcelandAttribute(capId,null);
		if (capParcelResult.getSuccess())
			{
			var Parcels = capParcelResult.getOutput().toArray();
			for (zz in Parcels)
				{
				logDebug(&quot;adding parcel #&quot; + zz + &quot; = &quot; + Parcels[zz].getParcelNumber());
				var newCapParcel = aa.parcel.getCapParcelModel().getOutput();
				newCapParcel.setParcelModel(Parcels[zz]);
				newCapParcel.setCapIDModel(newId);
				newCapParcel.setL1ParcelNo(Parcels[zz].getParcelNumber());
				newCapParcel.setParcelNo(Parcels[zz].getParcelNumber());
				aa.parcel.createCapParcel(newCapParcel);
				}
			}

		// Copy Contacts
		capContactResult = aa.people.getCapContactByCapID(capId);
		if (capContactResult.getSuccess())
			{
			Contacts = capContactResult.getOutput();
			for (yy in Contacts)
				{
				var newContact = Contacts[yy].getCapContactModel();
				newContact.setCapID(newId);
				aa.people.createCapContact(newContact);
				logDebug(&quot;added contact&quot;);
				}
			}	

		// Copy Addresses
		capAddressResult = aa.address.getAddressByCapId(capId);
		if (capAddressResult.getSuccess())
			{
			Address = capAddressResult.getOutput();
			for (yy in Address)
				{
				newAddress = Address[yy];
				newAddress.setCapID(newId);
				aa.address.createAddress(newAddress);
				logDebug(&quot;added address&quot;);
				}
			}
		
		return newId;
		}
	else
		{
		logDebug( &quot;**ERROR: adding child App: &quot; + appCreateResult.getErrorMessage());
		}
	}

 

function createRefLicProf(rlpId,rlpType,pContactType)
	{
	//Creates/updates a reference licensed prof from a Contact
	//06SSP-00074, modified for 06SSP-00238
	var updating = false;
	var capContResult = aa.people.getCapContactByCapID(capId);
	if (capContResult.getSuccess())
		{ conArr = capContResult.getOutput();  }
	else
		{
		logDebug (&quot;**ERROR: getting cap contact: &quot; + capAddResult.getErrorMessage());
		return false;
		}

	if (!conArr.length)
		{
		logDebug (&quot;**WARNING: No contact available&quot;);
		return false;
		}


	var newLic = getRefLicenseProf(rlpId)

	if (newLic)
		{
		updating = true;
		logDebug(&quot;Updating existing Ref Lic Prof : &quot; + rlpId);
		}
	else
		var newLic = aa.licenseScript.createLicenseScriptModel();

	//get contact record
	if (pContactType==null)
		var cont = conArr[0]; //if no contact type specified, use first contact
	else
		{
		var contFound = false;
		for (yy in conArr)
			{
			if (pContactType.equals(conArr[yy].getCapContactModel().getPeople().getContactType()))
				{
				cont = conArr[yy];
				contFound = true;
				break;
				}
			}
		if (!contFound)
			{
			logDebug (&quot;**WARNING: No Contact found of type: &quot;+pContactType);
			return false;
			}
		}

	peop = cont.getPeople();
	addr = peop.getCompactAddress();

	newLic.setContactFirstName(cont.getFirstName());
	//newLic.setContactMiddleName(cont.getMiddleName());  //method not available
	newLic.setContactLastName(cont.getLastName());
	newLic.setBusinessName(peop.getBusinessName());
	newLic.setAddress1(addr.getAddressLine1());
	newLic.setAddress2(addr.getAddressLine2());
	newLic.setAddress3(addr.getAddressLine3());
	newLic.setCity(addr.getCity());
	newLic.setState(addr.getState());
	newLic.setZip(addr.getZip());
	newLic.setPhone1(peop.getPhone1());
	newLic.setPhone2(peop.getPhone2());
	newLic.setEMailAddress(peop.getEmail());
	newLic.setFax(peop.getFax());

	newLic.setAgencyCode(aa.getServiceProviderCode());
	newLic.setAuditDate(sysDate);
	newLic.setAuditID(currentUserID);
	newLic.setAuditStatus(&quot;A&quot;);

	if (AInfo[&quot;Insurance Co&quot;]) 		newLic.setInsuranceCo(AInfo[&quot;Insurance Co&quot;]);
	if (AInfo[&quot;Insurance Amount&quot;]) 		newLic.setInsuranceAmount(parseFloat(AInfo[&quot;Insurance Amount&quot;]));
	if (AInfo[&quot;Insurance Exp Date&quot;]) 	newLic.setInsuranceExpDate(aa.date.parseDate(AInfo[&quot;Insurance Exp Date&quot;]));
	if (AInfo[&quot;Policy #&quot;]) 			newLic.setPolicy(AInfo[&quot;Policy #&quot;]);

	if (AInfo[&quot;Business License #&quot;]) 	newLic.setBusinessLicense(AInfo[&quot;Business License #&quot;]);
	if (AInfo[&quot;Business License Exp Date&quot;]) newLic.setBusinessLicExpDate(aa.date.parseDate(AInfo[&quot;Business License Exp Date&quot;]));

	newLic.setLicenseType(rlpType);
	newLic.setLicState(addr.getState());
	newLic.setStateLicense(rlpId);

	if (updating)
		myResult = aa.licenseScript.editRefLicenseProf(newLic);
	else
		myResult = aa.licenseScript.createRefLicenseProf(newLic);

	if (myResult.getSuccess())
		{
		logDebug(&quot;Successfully added/updated License No. &quot; + rlpId + &quot;, Type: &quot; + rlpType);
		logMessage(&quot;Successfully added/updated License No. &quot; + rlpId + &quot;, Type: &quot; + rlpType);
		return true;
		}
	else
		{
		logDebug(&quot;**ERROR: can't create ref lic prof: &quot; + myResult.getErrorMessage());
		logMessage(&quot;**ERROR: can't create ref lic prof: &quot; + myResult.getErrorMessage());
		return false;
		}
	}
 

function createRefLicProf(rlpId,rlpType,pContactType)
	{
	//Creates/updates a reference licensed prof from a Contact
	//06SSP-00074, modified for 06SSP-00238
	var updating = false;
	var capContResult = aa.people.getCapContactByCapID(capId);
	if (capContResult.getSuccess())
		{ conArr = capContResult.getOutput();  }
	else
		{
		logDebug (&quot;**ERROR: getting cap contact: &quot; + capAddResult.getErrorMessage());
		return false;
		}

	if (!conArr.length)
		{
		logDebug (&quot;**WARNING: No contact available&quot;);
		return false;
		}


	var newLic = getRefLicenseProf(rlpId)

	if (newLic)
		{
		updating = true;
		logDebug(&quot;Updating existing Ref Lic Prof : &quot; + rlpId);
		}
	else
		var newLic = aa.licenseScript.createLicenseScriptModel();

	//get contact record
	if (pContactType==null)
		var cont = conArr[0]; //if no contact type specified, use first contact
	else
		{
		var contFound = false;
		for (yy in conArr)
			{
			if (pContactType.equals(conArr[yy].getCapContactModel().getPeople().getContactType()))
				{
				cont = conArr[yy];
				contFound = true;
				break;
				}
			}
		if (!contFound)
			{
			logDebug (&quot;**WARNING: No Contact found of type: &quot;+pContactType);
			return false;
			}
		}

	peop = cont.getPeople();
	addr = peop.getCompactAddress();

	newLic.setContactFirstName(cont.getFirstName());
	//newLic.setContactMiddleName(cont.getMiddleName());  //method not available
	newLic.setContactLastName(cont.getLastName());
	newLic.setBusinessName(peop.getBusinessName());
	newLic.setAddress1(addr.getAddressLine1());
	newLic.setAddress2(addr.getAddressLine2());
	newLic.setAddress3(addr.getAddressLine3());
	newLic.setCity(addr.getCity());
	newLic.setState(addr.getState());
	newLic.setZip(addr.getZip());
	newLic.setPhone1(peop.getPhone1());
	newLic.setPhone2(peop.getPhone2());
	newLic.setEMailAddress(peop.getEmail());
	newLic.setFax(peop.getFax());

	newLic.setAgencyCode(aa.getServiceProviderCode());
	newLic.setAuditDate(sysDate);
	newLic.setAuditID(currentUserID);
	newLic.setAuditStatus(&quot;A&quot;);

	if (AInfo[&quot;Insurance Co&quot;]) 		newLic.setInsuranceCo(AInfo[&quot;Insurance Co&quot;]);
	if (AInfo[&quot;Insurance Amount&quot;]) 		newLic.setInsuranceAmount(parseFloat(AInfo[&quot;Insurance Amount&quot;]));
	if (AInfo[&quot;Insurance Exp Date&quot;]) 	newLic.setInsuranceExpDate(aa.date.parseDate(AInfo[&quot;Insurance Exp Date&quot;]));
	if (AInfo[&quot;Policy #&quot;]) 			newLic.setPolicy(AInfo[&quot;Policy #&quot;]);

	if (AInfo[&quot;Business License #&quot;]) 	newLic.setBusinessLicense(AInfo[&quot;Business License #&quot;]);
	if (AInfo[&quot;Business License Exp Date&quot;]) newLic.setBusinessLicExpDate(aa.date.parseDate(AInfo[&quot;Business License Exp Date&quot;]));

	newLic.setLicenseType(rlpType);
	newLic.setLicState(addr.getState());
	newLic.setStateLicense(rlpId);

	if (updating)
		myResult = aa.licenseScript.editRefLicenseProf(newLic);
	else
		myResult = aa.licenseScript.createRefLicenseProf(newLic);

	if (myResult.getSuccess())
		{
		logDebug(&quot;Successfully added/updated License No. &quot; + rlpId + &quot;, Type: &quot; + rlpType);
		logMessage(&quot;Successfully added/updated License No. &quot; + rlpId + &quot;, Type: &quot; + rlpType);
		return true;
		}
	else
		{
		logDebug(&quot;**ERROR: can't create ref lic prof: &quot; + myResult.getErrorMessage());
		logMessage(&quot;**ERROR: can't create ref lic prof: &quot; + myResult.getErrorMessage());
		return false;
		}
	}
 

function createRefLicProfFromLicProf()
	{
	//
	// Get the lic prof from the app
	//
	capLicenseResult = aa.licenseScript.getLicenseProf(capId);
	if (capLicenseResult.getSuccess())
		{ capLicenseArr = capLicenseResult.getOutput();  }
	else
		{ logDebug(&quot;**ERROR: getting lic prof: &quot; + capLicenseResult.getErrorMessage()); return false; }

	if (!capLicenseArr.length)
		{ logDebug(&quot;WARNING: no license professional available on the application:&quot;); return false; }

	licProfScriptModel = capLicenseArr[0];
	rlpId = licProfScriptModel.getLicenseNbr();
	//
	// Now see if a reference version exists
	//
	var updating = false;

	var newLic = getRefLicenseProf(rlpId)

	if (newLic)
		{
		updating = true;
		logDebug(&quot;Updating existing Ref Lic Prof : &quot; + rlpId);
		}
	else
		var newLic = aa.licenseScript.createLicenseScriptModel();

	//
	// Now add / update the ref lic prof
	//
	newLic.setStateLicense(rlpId);
	newLic.setAddress1(licProfScriptModel.getAddress1());
	newLic.setAddress2(licProfScriptModel.getAddress2());
	newLic.setAddress3(licProfScriptModel.getAddress3());
	newLic.setAgencyCode(licProfScriptModel.getAgencyCode());
	newLic.setAuditDate(licProfScriptModel.getAuditDate());
	newLic.setAuditID(licProfScriptModel.getAuditID());
	newLic.setAuditStatus(licProfScriptModel.getAuditStatus());
	newLic.setBusinessLicense(licProfScriptModel.getBusinessLicense());
	newLic.setBusinessName(licProfScriptModel.getBusinessName());
	newLic.setCity(licProfScriptModel.getCity());
	newLic.setCityCode(licProfScriptModel.getCityCode());
	newLic.setContactFirstName(licProfScriptModel.getContactFirstName());
	newLic.setContactLastName(licProfScriptModel.getContactLastName());
	newLic.setContactMiddleName(licProfScriptModel.getContactMiddleName());
	newLic.setContryCode(licProfScriptModel.getCountryCode());
	newLic.setCountry(licProfScriptModel.getCountry());
	newLic.setEinSs(licProfScriptModel.getEinSs());
	newLic.setEMailAddress(licProfScriptModel.getEmail());
	newLic.setFax(licProfScriptModel.getFax());
	newLic.setLicenseType(licProfScriptModel.getLicenseType());
	newLic.setLicOrigIssDate(licProfScriptModel.getLicesnseOrigIssueDate());
	newLic.setPhone1(licProfScriptModel.getPhone1());
	newLic.setPhone2(licProfScriptModel.getPhone2());
	newLic.setSelfIns(licProfScriptModel.getSelfIns());
	newLic.setState(licProfScriptModel.getState());
	newLic.setLicState(licProfScriptModel.getState());
	newLic.setSuffixName(licProfScriptModel.getSuffixName());
	newLic.setWcExempt(licProfScriptModel.getWorkCompExempt());
	newLic.setZip(licProfScriptModel.getZip());

	if (updating)
		myResult = aa.licenseScript.editRefLicenseProf(newLic);
	else
		myResult = aa.licenseScript.createRefLicenseProf(newLic);

	if (myResult.getSuccess())
		{
		logDebug(&quot;Successfully added/updated License ID : &quot; + rlpId)
		return rlpId;
		}
	else
		{ logDebug(&quot;**ERROR: can't create ref lic prof: &quot; + myResult.getErrorMessage()); }
	}

 
function dateAdd(td,amt)
	// perform date arithmetic on a string
	// td can be &quot;mm/dd/yyyy&quot; (or any string that will convert to JS date)
	// amt can be positive or negative (5, -3) days
	// if optional parameter #3 is present, use working days only
	{

	var useWorking = false;
	if (arguments.length == 3)
		useWorking = true;

	if (!td)
		dDate = new Date();
	else
		dDate = new Date(td);
	var i = 0;
	if (useWorking)
		if (!aa.calendar.getNextWorkDay)
			{
			logDebug(&quot;getNextWorkDay function is only available in Accela Automation 6.3.2 or higher.&quot;);
			while (i &lt; Math.abs(amt))
				{
				dDate.setTime(dDate.getTime() + (1000 * 60 * 60 * 24 * (amt &gt; 0 ? 1 : -1)));
				if (dDate.getDay() &gt; 0 &amp;&amp; dDate.getDay() &lt; 6)
					i++
				}
			}
		else
			{
			while (i &lt; Math.abs(amt))
				{
				dDate = new Date(aa.calendar.getNextWorkDay(aa.date.parseDate(dDate.getMonth()+1 + &quot;/&quot; + dDate.getDate() + &quot;/&quot; + dDate.getFullYear())).getOutput().getTime());
				i++;
				}
			}
	else
		dDate.setTime(dDate.getTime() + (1000 * 60 * 60 * 24 * amt));

	return (dDate.getMonth()+1) + &quot;/&quot; + dDate.getDate() + &quot;/&quot; + dDate.getFullYear();
	}

 
function dateAddMonths(pDate, pMonths)
	{
	// Adds specified # of months (pMonths) to pDate and returns new date as string in format MM/DD/YYYY
	// If pDate is null, uses current date
	// pMonths can be positive (to add) or negative (to subtract) integer
	// If pDate is on the last day of the month, the new date will also be end of month.
	// If pDate is not the last day of the month, the new date will have the same day of month, unless such a day doesn't exist in the month, in which case the new date will be on the last day of the month
	//
	if (!pDate)
		baseDate = new Date();
	else
		baseDate = new Date(pDate);

	var day = baseDate.getDate();
	baseDate.setMonth(baseDate.getMonth() + pMonths);
	if (baseDate.getDate() &lt; day)
		{
		baseDate.setDate(1);
		baseDate.setDate(baseDate.getDate() - 1);
		}
	return ((baseDate.getMonth() + 1) + &quot;/&quot; + baseDate.getDate() + &quot;/&quot; + baseDate.getFullYear());
	}

 
function dateFormatted(pMonth,pDay,pYear,pFormat)
//returns date string formatted as YYYY-MM-DD or MM/DD/YYYY (default)
	{
	var mth = &quot;&quot;;
	var day = &quot;&quot;;
	var ret = &quot;&quot;;
	if (pMonth &gt; 9)
		mth = pMonth.toString();
	else
		mth = &quot;0&quot;+pMonth.toString();

	if (pDay &gt; 9)
		day = pDay.toString();
	else
		day = &quot;0&quot;+pDay.toString();

	if (pFormat==&quot;YYYY-MM-DD&quot;)
		ret = pYear.toString()+&quot;-&quot;+mth+&quot;-&quot;+day;
	else
		ret = &quot;&quot;+mth+&quot;/&quot;+day+&quot;/&quot;+pYear.toString();

	return ret;
	}
 
function dateNextOccur (pMonth, pDay, pDate)
	//optional 4th param pOddEven:
	//'ODD' specifies that return date must be next odd year, 'EVEN' means return date is next even year.
	//allows wfDate variable to be used as pDate parameter
	{
	var vDate = new String(pDate);
	if (vDate.length==10 &amp;&amp; vDate.indexOf(&quot;-&quot;)==4 &amp;&amp; vDate.indexOf(&quot;-&quot;,7)==7) //is format YYYY-MM-DD
		var vBaseDate = new Date(vDate.substr(5,2)+&quot;/&quot;+vDate.substr(8,2)+&quot;/&quot;+vDate.substr(0,4));
	else
		var vBaseDate = new Date(vDate);

	var vCurrentYr = vBaseDate.getFullYear().toString();
	var vTestDate = new Date(pMonth+&quot;/&quot;+pDay+&quot;/&quot;+vCurrentYr);
	var vUseOddEven = false;
	var vOddEven;
	var vReturnDate = vTestDate;
	if (arguments.length&gt;3) //optional 4th parameter is used
		{
		var vOddEven = arguments[3].toUpperCase(); //return odd or even year
		vUseOddEven = true;
		}
		
	if (vTestDate &gt; vBaseDate)
		vReturnDate = vTestDate;
	else
		{	
		vTestDate.setFullYear(vTestDate.getFullYear()+1);
		vReturnDate = vTestDate;
		}
 		
	if (vUseOddEven) // use next ODD or EVEN year
		{
		if (vOddEven==&quot;ODD&quot; &amp;&amp; vReturnDate.getFullYear()%2==0) //vReturnDate is EVEN year
			vReturnDate.setFullYear(vReturnDate.getFullYear()+1);

		if (vOddEven==&quot;EVEN&quot; &amp;&amp; vReturnDate.getFullYear()%2)    //vReturnDate is ODD year
			vReturnDate.setFullYear(vReturnDate.getFullYear()+1);
		}

	return (vReturnDate.getMonth()+1) + &quot;/&quot; + vReturnDate.getDate() + &quot;/&quot; + vReturnDate.getFullYear();  
	}

 
function deactivateTask(wfstr) // optional process name
	{
	var useProcess = false;
	var processName = &quot;&quot;;
	if (arguments.length == 2) 
		{
		processName = arguments[1]; // subprocess
		useProcess = true;
		}

	var workflowResult = aa.workflow.getTasks(capId);
 	if (workflowResult.getSuccess())
  	 	var wfObj = workflowResult.getOutput();
  	else
  	  	{ logMessage(&quot;**ERROR: Failed to get workflow object: &quot; + s_capResult.getErrorMessage()); return false; }
	
	for (i in wfObj)
		{
   		var fTask = wfObj[i];
 		if (fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase())  &amp;&amp; (!useProcess || fTask.getProcessCode().equals(processName)))
			{
			var stepnumber = fTask.getStepNumber();
			var processID = fTask.getProcessID();
			var completeFlag = fTask.getCompleteFlag();

			if (useProcess)
				aa.workflow.adjustTask(capId, stepnumber, processID, &quot;N&quot;, completeFlag, null, null)
			else
				aa.workflow.adjustTask(capId, stepnumber, &quot;N&quot;, completeFlag, null, null)

			logMessage(&quot;deactivating Workflow Task: &quot; + wfstr);
			logDebug(&quot;deactivating Workflow Task: &quot; + wfstr);
			}			
		}
	}

 
function editAppName(newname)
	{
	// 4/30/08 - DQ - Corrected Error where option parameter was ignored
	var itemCap = capId;
	if (arguments.length == 2) itemCap = arguments[1]; // use cap ID specified in args

	capResult = aa.cap.getCap(itemCap)

	if (!capResult.getSuccess())
		{logDebug(&quot;**WARNING: error getting cap : &quot; + capResult.getErrorMessage()) ; return false }

	capModel = capResult.getOutput().getCapModel()

	capModel.setSpecialText(newname)

	setNameResult = aa.cap.editCapByPK(capModel)

	if (!setNameResult.getSuccess())
		{ logDebug(&quot;**WARNING: error setting cap name : &quot; + setNameResult.getErrorMessage()) ; return false }


	return true;
	}

 
function editAppSpecific(itemName,itemValue)  // optional: itemCap
	{
	var updated = false;
	var i=0;
	itemCap = capId;
	if (arguments.length == 3) itemCap = arguments[2]; // use cap ID specified in args
   	
  	if (useAppSpecificGroupName)
		{
		if (itemName.indexOf(&quot;.&quot;) &lt; 0)
			{ logDebug(&quot;**WARNING: editAppSpecific requires group name prefix when useAppSpecificGroupName is true&quot;) ; return false }
		
		
		var itemGroup = itemName.substr(0,itemName.indexOf(&quot;.&quot;));
		var itemName = itemName.substr(itemName.indexOf(&quot;.&quot;)+1);
		}
   	
    	var appSpecInfoResult = aa.appSpecificInfo.getByCapID(itemCap);
	if (appSpecInfoResult.getSuccess())
	 	{
		var appspecObj = appSpecInfoResult.getOutput();
		
		if (itemName != &quot;&quot;)
			{
				while (i &lt; appspecObj.length &amp;&amp; !updated)
				{
					if (appspecObj[i].getCheckboxDesc() == itemName &amp;&amp; (!useAppSpecificGroupName || appspecObj[i].getCheckboxType() == itemGroup))
					{
						appspecObj[i].setChecklistComment(itemValue);
						var actionResult = aa.appSpecificInfo.editAppSpecInfos(appspecObj);
						if (actionResult.getSuccess()) {
							logMessage(&quot;app spec info item &quot; + itemName + &quot; has been given a value of &quot; + itemValue);
							logDebug(&quot;app spec info item &quot; + itemName + &quot; has been given a value of &quot; + itemValue);
						} else {
							logDebug(&quot;**ERROR: Setting the app spec info item &quot; + itemName + &quot; to &quot; + itemValue + &quot; .\nReason is: &quot; +   actionResult.getErrorType() + &quot;:&quot; + actionResult.getErrorMessage());
						}
						updated = true;
						AInfo[itemName] = itemValue;  // Update array used by this script
					}
					i++;
				} // while loop
			} // item name blank
		} // got app specific object	
		else
		{ logDebug( &quot;**ERROR: getting app specific info for Cap : &quot; + appSpecInfoResult.getErrorMessage()) }
	}

 
function editChannelReported(channel) // option CapId
	{
	var itemCap = capId
	if (arguments.length &gt; 1) itemCap = arguments[1]; // use cap ID specified in args

	var cdScriptObjResult = aa.cap.getCapDetail(itemCap);
	if (!cdScriptObjResult.getSuccess())
		{ logDebug(&quot;**ERROR: No cap detail script object : &quot; + cdScriptObjResult.getErrorMessage()) ; return false; }
	
	var cdScriptObj = cdScriptObjResult.getOutput();

	if (!cdScriptObj)
		{ logDebug(&quot;**ERROR: No cap detail script object&quot;) ; return false; }
		
	cd = cdScriptObj.getCapDetailModel();
	
	cd.setReportedChannel(channel);
		
	cdWrite = aa.cap.editCapDetail(cd)
	
	if (cdWrite.getSuccess())
		{ logDebug(&quot;Updated channel reported to &quot; + channel) }
	else
		{ logDebug(&quot;**ERROR writing capdetail : &quot; + cdWrite.getErrorMessage()) ; return false ; }
	} 

function editContactType(existingType,newType)
//Function will change contact types from exsistingType to newType, 
//optional paramter capID
{
	var updateCap = capId
	if (arguments.length==3)
		updateCap=arguments[2]

	capContactResult = aa.people.getCapContactByCapID(updateCap);
	if (capContactResult.getSuccess())
		{
		Contacts = capContactResult.getOutput();
		for (yy in Contacts)
			{
			var theContact = Contacts[yy].getCapContactModel();
			if(theContact.getContactType() == existingType)
				{
				theContact.setContactType(newType);
				aa.people.editCapContact(theContact);
				logDebug(&quot;Contact for &quot; + theContact.getFullName() + &quot; Updated to &quot; + newType);
				}
			}
		}	
} 
function editHouseCount(numHouse) // option CapId
	{
	var itemCap = capId
	if (arguments.length &gt; 1) itemCap = arguments[1]; // use cap ID specified in args

	var cdScriptObjResult = aa.cap.getCapDetail(itemCap);
	if (!cdScriptObjResult.getSuccess())
		{ logDebug(&quot;**ERROR: No cap detail script object : &quot; + cdScriptObjResult.getErrorMessage()) ; return false; }
	
	var cdScriptObj = cdScriptObjResult.getOutput();

	if (!cdScriptObj)
		{ logDebug(&quot;**ERROR: No cap detail script object&quot;) ; return false; }
		
	cd = cdScriptObj.getCapDetailModel();
	
	cd.setHouseCount(parseFloat(numHouse));
		
	cdWrite = aa.cap.editCapDetail(cd)
	
	if (cdWrite.getSuccess())
		{ logDebug(&quot;Updated house count to &quot; + numHouse); return true; }
	else
		{ logDebug(&quot;**ERROR writing capdetail : &quot; + cdWrite.getErrorMessage()) ; return false ; }
	} 

function editLookup(stdChoice,stdValue,stdDesc) 
	{
	//check if stdChoice and stdValue already exist; if they do, update;
	var bizDomScriptResult = aa.bizDomain.getBizDomainByValue(stdChoice,stdValue);
	if (bizDomScriptResult.getSuccess())
		{
		bds = bizDomScriptResult.getOutput();
		}
	else
		{
		logDebug(&quot;Std Choice(&quot; + stdChoice + &quot;,&quot; + stdValue + &quot;) does not exist to edit, adding...&quot;);
		addLookup(stdChoice,stdValue,stdDesc);
		return false;
		}
	var bd = bds.getBizDomain()
		
	bd.setDescription(stdDesc);
	var editResult = aa.bizDomain.editBizDomain(bd)
	
	if (editResult.getSuccess())
		logDebug(&quot;Successfully edited Std Choice(&quot; + stdChoice + &quot;,&quot; + stdValue + &quot;) = &quot; + stdDesc);
	else
		logDebug(&quot;**ERROR editing Std Choice &quot; + editResult.getErrorMessage());
	}

 
function editPriority(priority) // option CapId
{
	var itemCap = capId
	if (arguments.length &gt; 1) itemCap = arguments[1]; // use cap ID specified in args

	var cdScriptObjResult = aa.cap.getCapDetail(itemCap);
	if (!cdScriptObjResult.getSuccess())
		{ logDebug(&quot;**ERROR: No cap detail script object : &quot; + cdScriptObjResult.getErrorMessage()) ; return false; }

	var cdScriptObj = cdScriptObjResult.getOutput();

	if (!cdScriptObj)
		{ logDebug(&quot;**ERROR: No cap detail script object&quot;) ; return false; }

	cd = cdScriptObj.getCapDetailModel();

	cd.setPriority(priority);

	cdWrite = aa.cap.editCapDetail(cd)

	if (cdWrite.getSuccess())
		{ logDebug(&quot;updated priority to &quot; + priority) ; return true; }
	else
		{ logDebug(&quot;**ERROR writing capdetail : &quot; + cdWrite.getErrorMessage()) ; return false ; }
} 

function editRefLicProfAttribute(pLicNum,pAttributeName,pNewAttributeValue)
	{

	var attrfound = false;
	var oldValue = null;

	licObj = getRefLicenseProf(pLicNum)

	if (!licObj)
		{ logDebug(&quot;**WARNING Licensed Professional : &quot; + pLicNum + &quot; not found&quot;) ; return false }

	licSeqNum = licObj.getLicSeqNbr();
	attributeType = licObj.getLicenseType();

	if (licSeqNum==0 || licSeqNum==null || attributeType==&quot;&quot; || attributeType==null)
		{ logDebug(&quot;**WARNING Licensed Professional Sequence Number or Attribute Type missing&quot;) ; return false }

	var peopAttrResult = aa.people.getPeopleAttributeByPeople(licSeqNum, attributeType);

	if (!peopAttrResult.getSuccess())
		{ logDebug(&quot;**WARNING retrieving reference license professional attribute: &quot; + peopAttrResult.getErrorMessage()); return false }

	var peopAttrArray = peopAttrResult.getOutput();

	for (i in peopAttrArray)
		{
		if ( pAttributeName.equals(peopAttrArray[i].getAttributeName()))
			{
			oldValue = peopAttrArray[i].getAttributeValue()
			attrfound = true;
			break;
			}
		}

	if (attrfound)
		{
		logDebug(&quot;Updated Ref Lic Prof: &quot; + pLicNum + &quot;, attribute: &quot; + pAttributeName + &quot; from: &quot; + oldValue + &quot; to: &quot; + pNewAttributeValue)
		peopAttrArray[i].setAttributeValue(pNewAttributeValue);
		aa.people.editPeopleAttribute(peopAttrArray[i].getPeopleAttributeModel());
		}
	else
		{
		logDebug(&quot;**WARNING attribute: &quot; + pAttributeName + &quot; not found for Ref Lic Prof: &quot;+ pLicNum)
		/* make a new one with the last model.  Not optimal but it should work
		newPAM = peopAttrArray[i].getPeopleAttributeModel();
		newPAM.setAttributeName(pAttributeName);
		newPAM.setAttributeValue(pNewAttributeValue);
		newPAM.setAttributeValueDataType(&quot;Number&quot;);
		aa.people.createPeopleAttribute(newPAM);
		*/
		}
	} 
function editReportedChannel(reportedChannel) // option CapId
{
	var itemCap = capId
	if (arguments.length &gt; 1) itemCap = arguments[1]; // use cap ID specified in args

	var cdScriptObjResult = aa.cap.getCapDetail(itemCap);
	if (!cdScriptObjResult.getSuccess())
		{ logDebug(&quot;**ERROR: No cap detail script object : &quot; + cdScriptObjResult.getErrorMessage()) ; return false; }

	var cdScriptObj = cdScriptObjResult.getOutput();

	if (!cdScriptObj)
		{ logDebug(&quot;**ERROR: No cap detail script object&quot;) ; return false; }

	cd = cdScriptObj.getCapDetailModel();

	cd.setReportedChannel(reportedChannel);

	cdWrite = aa.cap.editCapDetail(cd);

	if (cdWrite.getSuccess())
		{ logDebug(&quot;updated reported channel to &quot; + reportedChannel) ; return true; }
	else
		{ logDebug(&quot;**ERROR writing capdetail : &quot; + cdWrite.getErrorMessage()) ; return false ; }
} 
function editTaskComment(wfstr,wfcomment) // optional process name
	{
	var useProcess = false;
	var processName = &quot;&quot;;
	if (arguments.length == 3) 
		{
		processName = arguments[2]; // subprocess
		useProcess = true;
		}

	var workflowResult = aa.workflow.getTasks(capId);
 	if (workflowResult.getSuccess())
  	 	var wfObj = workflowResult.getOutput();
  	else
  	  	{ logMessage(&quot;**ERROR: Failed to get workflow object: &quot; + s_capResult.getErrorMessage()); return false; }
	
	for (i in wfObj)
		{
   		fTask = wfObj[i];
  		if (fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase())  &amp;&amp; (!useProcess || fTask.getProcessCode().equals(processName)))
			{
			wfObj[i].setDispositionComment(wfcomment);
			var fTaskModel = wfObj[i].getTaskItem();
			var tResult = aa.workflow.adjustTaskWithNoAudit(fTaskModel);
			if (tResult.getSuccess())
				logDebug(&quot;Set Workflow: &quot; + wfstr + &quot; comment &quot; + wfcomment);
		  	else
	  	  		{ logMessage(&quot;**ERROR: Failed to update comment on workflow task: &quot; + tResult.getErrorMessage()); return false; }
			}			
		}
	}

 
function editTaskDueDate(wfstr,wfdate) // optional process name.  if wfstr == &quot;*&quot;, set for all tasks
	{
	var useProcess = false;
	var processName = &quot;&quot;;
	if (arguments.length == 3) 
		{
		processName = arguments[2]; // subprocess
		useProcess = true;
		}

	var workflowResult = aa.workflow.getTasks(capId);
 	if (workflowResult.getSuccess())
  	 	wfObj = workflowResult.getOutput();
  	else
  	  	{ logMessage(&quot;**ERROR: Failed to get workflow object: &quot; + s_capResult.getErrorMessage()); return false; }
	
	for (i in wfObj)
		{
   		var fTask = wfObj[i];
  		if ((fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase()) || wfstr == &quot;*&quot;)  &amp;&amp; (!useProcess || fTask.getProcessCode().equals(processName)))
			{
			wfObj[i].setDueDate(aa.date.parseDate(wfdate));
			var fTaskModel = wfObj[i].getTaskItem();
			var tResult = aa.workflow.adjustTaskWithNoAudit(fTaskModel);
			if (tResult.getSuccess())
				logDebug(&quot;Set Workflow Task: &quot; + fTask.getTaskDescription() + &quot; due Date &quot; + wfdate);
		  	else
	  	  		{ logMessage(&quot;**ERROR: Failed to update due date on workflow: &quot; + tResult.getErrorMessage()); return false; }
			}			
		}
	}

 
function editTaskSpecific(wfName,itemName,itemValue)  // optional: itemCap
	{
	var updated = false;
	var i=0;
	itemCap = capId;
	if (arguments.length == 4) itemCap = arguments[3]; // use cap ID specified in args
	//
 	// Get the workflows
 	//
 	var workflowResult = aa.workflow.getTasks(itemCap);
 	if (workflowResult.getSuccess())
 		wfObj = workflowResult.getOutput();
 	else
 		{ logDebug(&quot;**ERROR: Failed to get workflow object: &quot; + s_capResult.getErrorMessage()); return false; }

 	//
 	// Loop through workflow tasks
 	//
 	for (i in wfObj)
 		{
 		fTask = wfObj[i];
 		stepnumber = fTask.getStepNumber();
 		processID = fTask.getProcessID();
 		if (wfName.equals(fTask.getTaskDescription())) // Found the right Workflow Task
 			{
  		TSIResult = aa.taskSpecificInfo.getTaskSpecifiInfoByDesc(itemCap,processID,stepnumber,itemName);
 			if (TSIResult.getSuccess())
 				{
	 			var TSI = TSIResult.getOutput();
				if (TSI != null)
					{
					var TSIArray = new Array();
					TSInfoModel = TSI.getTaskSpecificInfoModel();
					TSInfoModel.setChecklistComment(itemValue);
					TSIArray.push(TSInfoModel);
					TSIUResult = aa.taskSpecificInfo.editTaskSpecInfos(TSIArray);
					if (TSIUResult.getSuccess())
						{
						logDebug(&quot;Successfully updated TSI Task=&quot; + wfName + &quot; Item=&quot; + itemName + &quot; Value=&quot; + itemValue);
						AInfo[itemName] = itemValue;  // Update array used by this script
						}
					else
						{ logDebug(&quot;**ERROR: Failed to Update Task Specific Info : &quot; + TSIUResult.getErrorMessage()); return false; }
					}
				else
					logDebug(&quot;No task specific info field called &quot;+itemName+&quot; found for task &quot;+wfName);
	 			}
	 		else
	 			{
	 			logDebug(&quot;**ERROR: Failed to get Task Specific Info objects: &quot; + TSIResult.getErrorMessage());
	 			return false;
	 			}
	 		}  // found workflow task
		} // each task
	}

 
function email(pToEmail, pFromEmail, pSubject, pText) 
	{
	//Sends email to specified address
	//06SSP-00221
	//
	aa.sendMail(pFromEmail, pToEmail, &quot;&quot;, pSubject, pText);
	logDebug(&quot;Email sent to &quot;+pToEmail);
	return true;
	}

 
function emailContact(mSubj,mText)   // optional: Contact Type, default Applicant
	{
	var replyTo = &quot;noreply@accela.com&quot;;
	var contactType = &quot;Applicant&quot;
	var emailAddress = &quot;&quot;;
	
	if (arguments.length == 3) contactType = arguments[2]; // use contact type specified
   	
	var capContactResult = aa.people.getCapContactByCapID(capId);
	if (capContactResult.getSuccess())
		{
		var Contacts = capContactResult.getOutput();
		for (yy in Contacts)
			if (contactType.equals(Contacts[yy].getCapContactModel().getPeople().getContactType()))
				if (Contacts[yy].getEmail() != null)
					emailAddress = Contacts[yy].getEmail();
		}	

	if (emailAddress.length) 
		{
		aa.sendMail(replyTo, emailAddress, &quot;&quot;, mSubj, mText);
		logDebug(&quot;Successfully sent email to &quot; + contactType);
		}
	else
		logDebug(&quot;Couldn't send email to &quot; + contactType + &quot;, no email address&quot;);
	}

 
function executeASITable(tableArray)
	{
	// Executes an ASI table as if it were script commands
	// No capability for else or continuation statements
	// Assumes that there are at least three columns named &quot;Enabled&quot;, &quot;Criteria&quot;, &quot;Action&quot;
	// Will replace tokens in the controls
	
	//var thisDate = new Date();
	//var thisTime = thisDate.getTime();
	//logDebug(&quot;Executing ASI Table, Elapsed Time: &quot;  + ((thisTime - startTime) / 1000) + &quot; Seconds&quot;)

	for (xx in tableArray)
		{
 
		var doTableObj = tableArray[xx]; 
		var myCriteria = doTableObj[&quot;Criteria&quot;]; aa.print(&quot;cri: &quot; + myCriteria)
		var myAction = doTableObj[&quot;Action&quot;];  aa.print(&quot;act: &quot; + myAction)
		aa.print(&quot;enabled: &quot; + doTableObj[&quot;Enabled&quot;])
      
		if (doTableObj[&quot;Enabled&quot;] == &quot;Yes&quot;)
			if (eval(token(myCriteria)))
				eval(token(myAction));

		} // next action
	//var thisDate = new Date();
	//var thisTime = thisDate.getTime();
	//logDebug(&quot;Finished executing ASI Table, Elapsed Time: &quot;  + ((thisTime - startTime) / 1000) + &quot; Seconds&quot;)
	}

 
function feeAmount(feestr) 
	{
    // optional statuses to check for (SR5082)
    //
    var checkStatus = false;
	var statusArray = new Array(); 

	//get optional arguments 
	if (arguments.length &gt; 1)
		{
		checkStatus = true;
		for (var i=1; i&lt;arguments.length; i++)
			statusArray.push(arguments[i]);
		}
        
	var feeTotal = 0;
	var feeResult=aa.fee.getFeeItems(capId);
	if (feeResult.getSuccess())
		{ var feeObjArr = feeResult.getOutput(); }
	else
		{ logDebug( &quot;**ERROR: getting fee items: &quot; + capContResult.getErrorMessage()); return false }
	
	for (ff in feeObjArr)
		if ( feestr.equals(feeObjArr[ff].getFeeCod()) &amp;&amp; (!checkStatus || exists(feeObjArr[ff].getFeeitemStatus(),statusArray)) )
			feeTotal+=feeObjArr[ff].getFee()
			
	return feeTotal;
	} 

function feeBalance(feestr)
	{
	// Searches payment fee items and returns the unpaid balance of a fee item
	// Sums fee items if more than one exists.  Optional second parameter fee schedule
	var amtFee = 0;
	var amtPaid = 0;
	var feeSch;
	
	if (arguments.length == 2) feeSch = arguments[1]; 

	var feeResult=aa.fee.getFeeItems(capId);
	if (feeResult.getSuccess())
		{ var feeObjArr = feeResult.getOutput(); }
	else
		{ logDebug( &quot;**ERROR: getting fee items: &quot; + capContResult.getErrorMessage()); return false }
	
	for (ff in feeObjArr)
		if ((!feestr || feestr.equals(feeObjArr[ff].getFeeCod())) &amp;&amp; (!feeSch || feeSch.equals(feeObjArr[ff].getF4FeeItemModel().getFeeSchudle())))
			{
			amtFee+=feeObjArr[ff].getFee();
			var pfResult = aa.finance.getPaymentFeeItems(capId, null);
			if (pfResult.getSuccess())
				{
				var pfObj = pfResult.getOutput();
				for (ij in pfObj)
					if (feeObjArr[ff].getFeeSeqNbr() == pfObj[ij].getFeeSeqNbr())
						amtPaid+=pfObj[ij].getFeeAllocation()
				}
			}
	return amtFee - amtPaid;
	}

 
function feeExists(feestr) // optional statuses to check for
	{
	var checkStatus = false;
	var statusArray = new Array(); 

	//get optional arguments 
	if (arguments.length &gt; 1)
		{
		checkStatus = true;
		for (var i=1; i&lt;arguments.length; i++)
			statusArray.push(arguments[i]);
		}

	var feeResult=aa.fee.getFeeItems(capId);
	if (feeResult.getSuccess())
		{ var feeObjArr = feeResult.getOutput(); }
	else
		{ logDebug( &quot;**ERROR: getting fee items: &quot; + capContResult.getErrorMessage()); return false }
	
	for (ff in feeObjArr)
		if ( feestr.equals(feeObjArr[ff].getFeeCod()) &amp;&amp; (!checkStatus || exists(feeObjArr[ff].getFeeitemStatus(),statusArray) ) )
			return true;
			
	return false;
	}

 
function feeGetTotByDateRange(pStartDate, pEndDate) 
	// gets total for fees assessed during date range
	// optional fee statuses to check for						
	{
	//get End and Start Dates
	var jsStartDate = new Date(pStartDate);
	jsStartDate.setHours(0,0,0,0); //Bring StartDate to 00:00 AM
	var jsEndDate = new Date(pEndDate);
	jsEndDate.setHours(23,59,59,999); //Bring EndDate close to midnight
	
	//logDebug(&quot;Start Date: &quot;+ (jsStartDate.getMonth()+1).toString() +&quot;/&quot;+jsStartDate.getDate()+&quot;/&quot;+jsStartDate.getFullYear() + &quot; End Date: &quot; + (jsEndDate.getMonth()+1).toString() +&quot;/&quot;+jsEndDate.getDate()+&quot;/&quot;+jsEndDate.getFullYear());

	//get optional arguments 
	var checkStatus = false;
	var statusArray = new Array(); 
	if (arguments.length &gt; 2)
		{
		checkStatus = true;
		for (var i=2; i&lt;arguments.length; i++)
			statusArray.push(arguments[i]);
		}

	//get all feeitems on CAP
	var feeResult=aa.fee.getFeeItems(capId);
	if (feeResult.getSuccess())
		{ var feeObjArr = feeResult.getOutput(); }
	else
		{ logDebug( &quot;**ERROR: getting fee items: &quot; + capContResult.getErrorMessage()); return false }
	
	//get total applicable fees
	var feesTotal = 0;
	var jsFeeDate = new Date();
	for (ff in feeObjArr)
		{
		jsFeeDate.setTime(feeObjArr[ff].getApplyDate().getEpochMilliseconds());
		//logDebug(&quot;Fee Apply Date: &quot;+(jsFeeDate.getMonth()+1).toString() +&quot;/&quot;+ jsFeeDate.getDate()+&quot;/&quot;+jsFeeDate.getFullYear());
		if (jsFeeDate  &gt;= jsStartDate &amp;&amp; jsFeeDate &lt;= jsEndDate &amp;&amp; (!checkStatus || exists(feeObjArr[ff].getFeeitemStatus(),statusArray) ) )
			{
			feesTotal += feeObjArr[ff].getFee(); 
			//logDebug(&quot;Added to Total: &quot;+feeObjArr[ff].getFee());
			}
		}
			
	return feesTotal;
	}

 
function feeQty(feestr)
	{
	var feeQty = 0;
	var feeResult=aa.fee.getFeeItems(capId);
	if (feeResult.getSuccess())
		{ var feeObjArr = feeResult.getOutput(); }
	else
		{ logDebug( &quot;**ERROR: getting fee items: &quot; + capContResult.getErrorMessage()); return false }
	
	for (ff in feeObjArr)
		if (feestr.equals(feeObjArr[ff].getFeeCod()))
			feeQty+=feeObjArr[ff].getFeeUnit();
			
	return feeQty;
	}

 
function getAppIdByASI(ASIName,ASIValue,ats)
	//
	// returns the cap Id string of an application based on App-Specific Info and applicationtype.  Returns first result only!
	//
	{
	var ata = ats.split(&quot;/&quot;);
	if (ata.length != 4)
		logDebug(&quot;**ERROR: getAppIdByASI in appMatch.  The following Application Type String is incorrectly formatted: &quot; + ats);

	var getCapResult = aa.cap.getCapIDsByAppSpecificInfoField(ASIName,ASIValue);
	if (getCapResult.getSuccess())
		var apsArray = getCapResult.getOutput();
	else
		{ logDebug( &quot;**ERROR: getting caps by app type: &quot; + getCapResult.getErrorMessage()) ; return null }
		

	for (aps in apsArray)
		{
		myCap = aa.cap.getCap(apsArray[aps].getCapID()).getOutput();
		myAppTypeString = myCap.getCapType().toString();
		myAppTypeArray = myAppTypeString.split(&quot;/&quot;);

		isMatch = true;
		for (xx in ata)
			if (!ata[xx].equals(myAppTypeArray[xx]) &amp;&amp; !ata[xx].equals(&quot;*&quot;))
				isMatch = false;
		
		if (isMatch)
			{
			logDebug(&quot;getAppIdByName(&quot; + ASIName + &quot;,&quot; + ASIValue + &quot;,&quot; + ats + &quot;) Returns &quot; + apsArray[aps].getCapID().toString()); 
			return apsArray[aps].getCapID().toString()
			}
		}
	}

 
function getAppIdByName(gaGroup,gaType,gaName)
//
// returns the cap Id string of an application that has group,type,and name
//
	{
	getCapResult = aa.cap.getByAppType(gaGroup,gaType);
	if (getCapResult.getSuccess())
		var apsArray = getCapResult.getOutput();
	else
		{ logDebug( &quot;**ERROR: getting caps by app type: &quot; + getCapResult.getErrorMessage()) ; return null }
		

	for (aps in apsArray)
		{
		var myCap = aa.cap.getCap(apsArray[aps].getCapID()).getOutput();
		if (myCap.getSpecialText().equals(gaName))
			{
			logDebug(&quot;getAppIdByName(&quot; + gaGroup + &quot;,&quot; + gaType + &quot;,&quot; + gaName + &quot;) Returns &quot; + apsArray[aps].getCapID().toString()); 
			return apsArray[aps].getCapID().toString()
			}
		}
	}
 
function getApplication(appNum) 
//
// returns the capId object of an application
//
	{
	var getCapResult = aa.cap.getCapID(appNum);
	if (getCapResult.getSuccess())
		return getCapResult.getOutput();
	else
		{ logDebug( &quot;**ERROR: getting cap id (&quot; + appNum + &quot;): &quot; + getCapResult.getErrorMessage()) }
	}

 
function getAppSpecific(itemName)  // optional: itemCap
{
	var updated = false;
	var i=0;
	var itemCap = capId;
	if (arguments.length == 2) itemCap = arguments[1]; // use cap ID specified in args
   	
	if (useAppSpecificGroupName)
	{
		if (itemName.indexOf(&quot;.&quot;) &lt; 0)
			{ logDebug(&quot;**WARNING: editAppSpecific requires group name prefix when useAppSpecificGroupName is true&quot;) ; return false }
		
		
		var itemGroup = itemName.substr(0,itemName.indexOf(&quot;.&quot;));
		var itemName = itemName.substr(itemName.indexOf(&quot;.&quot;)+1);
	}
	
    var appSpecInfoResult = aa.appSpecificInfo.getByCapID(itemCap);
	if (appSpecInfoResult.getSuccess())
 	{
		var appspecObj = appSpecInfoResult.getOutput();
		
		if (itemName != &quot;&quot;)
		{
			for (i in appspecObj)
				if( appspecObj[i].getCheckboxDesc() == itemName &amp;&amp; (!useAppSpecificGroupName || appspecObj[i].getCheckboxType() == itemGroup) )
				{
					return appspecObj[i].getChecklistComment();
					break;
				}
		} // item name blank
	} 
	else
		{ logDebug( &quot;**ERROR: getting app specific info for Cap : &quot; + appSpecInfoResult.getErrorMessage()) }
}

 
function getCapByAddress(ats) 
//
// returns the capid that matches the current address and app type string
// if multiple records will return the first and warning.
//
	{
	var retArr = new Array();
	
	// get address data
	var addResult = aa.address.getAddressByCapId(capId);
	if (addResult.getSuccess())
		{ var aoArray = addResult.getOutput(); }
	else	
		{ logDebug(&quot;**ERROR: getting address by cap ID: &quot; + addResult.getErrorMessage()); return false; }
	
	if (aoArray.length)
		{ var ao = aoArray[0]; }
	else
		{ logDebug(&quot;**WARNING: no address for comparison:&quot;); return false; }
	
	// get caps with same address
	var capAddResult = aa.cap.getCapListByDetailAddress(ao.getStreetName(),ao.getHouseNumberStart(),ao.getStreetSuffix(),ao.getZip(),ao.getStreetDirection(),null);
	if (capAddResult.getSuccess())
	 	{ var capIdArray=capAddResult.getOutput(); }
	else
	 	{ logDebug(&quot;**ERROR: getting similar addresses: &quot; + capAddResult.getErrorMessage());  return false; }
	
	
	// loop through related caps
	for (cappy in capIdArray)
		{
		// get file date
		var relcap = aa.cap.getCap(capIdArray[cappy].getCapID()).getOutput();
		
		// get cap type
		
		reltype = relcap.getCapType().toString();
		
		var isMatch = true;
		var ata = ats.split(&quot;/&quot;);
		if (ata.length != 4)
			logDebug(&quot;**ERROR: The following Application Type String is incorrectly formatted: &quot; + ats);
		else
			for (xx in ata)
				if (!ata[xx].equals(appTypeArray[xx]) &amp;&amp; !ata[xx].equals(&quot;*&quot;))
					isMatch = false;

		if (isMatch)			
			retArr.push(capIdArray[cappy]);

		} // loop through related caps
		
	if (retArr.length &gt; 1)
		{
		logDebug(&quot;**WARNING: Multiple caps returned for this address/apptype&quot;) ; return retArr[0] 
		}
	
	if (retArr.length == 0)
		return retArr[0];
		
	}

 
function getChildren(pCapType, pParentCapId) 
	{
	// Returns an array of children capId objects whose cap type matches pCapType parameter
	// Wildcard * may be used in pCapType, e.g. &quot;Building/Commercial/*/*&quot;
	// Optional 3rd parameter pChildCapIdSkip: capId of child to skip

	var retArray = new Array();
	if (pParentCapId!=null) //use cap in parameter 
		var vCapId = pParentCapId;
	else // use current cap
		var vCapId = capId;
		
	if (arguments.length&gt;2)
		var childCapIdSkip = arguments[2];
	else
		var childCapIdSkip = null;
		
	var typeArray = pCapType.split(&quot;/&quot;);
	if (typeArray.length != 4)
		logDebug(&quot;**ERROR in childGetByCapType function parameter.  The following cap type parameter is incorrectly formatted: &quot; + pCapType);
		
	var getCapResult = aa.cap.getChildByMasterID(vCapId);
	if (!getCapResult.getSuccess())
		{ logDebug(&quot;**WARNING: getChildren returned an error: &quot; + getCapResult.getErrorMessage()); return null }
		
	var childArray = getCapResult.getOutput();
	if (!childArray.length)
		{ logDebug( &quot;**WARNING: getChildren function found no children&quot;); return null ; }

	var childCapId;
	var capTypeStr = &quot;&quot;;
	var childTypeArray;
	var isMatch;
	for (xx in childArray)
		{
		childCapId = childArray[xx].getCapID();
		if (childCapIdSkip!=null &amp;&amp; childCapIdSkip.getCustomID().equals(childCapId.getCustomID())) //skip over this child
			continue;

		capTypeStr = aa.cap.getCap(childCapId).getOutput().getCapType().toString();	// Convert cap type to string (&quot;Building/A/B/C&quot;)
		childTypeArray = capTypeStr.split(&quot;/&quot;);
		isMatch = true;
		for (yy in childTypeArray) //looking for matching cap type
			{
			if (!typeArray[yy].equals(childTypeArray[yy]) &amp;&amp; !typeArray[yy].equals(&quot;*&quot;))
				{
				isMatch = false;
				continue;
				}
			}
		if (isMatch)
			retArray.push(childCapId);
		}
		
	logDebug(&quot;getChildren returned &quot; + retArray.length + &quot; capIds&quot;);
	return retArray;

	}
	
 
function getContactArray()
	{
	// Returns an array of associative arrays with contact attributes.  Attributes are UPPER CASE
	// optional capid
	var thisCap = capId;
	if (arguments.length == 1) thisCap = arguments[0]; 

	var cArray = new Array();

	var capContactResult = aa.people.getCapContactByCapID(thisCap);
	if (capContactResult.getSuccess())
		{
		var capContactArray = capContactResult.getOutput();
		for (yy in capContactArray)
			{
			var aArray = new Array();
			aArray[&quot;lastName&quot;] = capContactArray[yy].getPeople().lastName;
			aArray[&quot;firstName&quot;] = capContactArray[yy].getPeople().firstName;
			aArray[&quot;businessName&quot;] = capContactArray[yy].getPeople().businessName;
			aArray[&quot;contactSeqNumber&quot;] =capContactArray[yy].getPeople().contactSeqNumber;
			aArray[&quot;contactType&quot;] =capContactArray[yy].getPeople().contactType;
			aArray[&quot;relation&quot;] = capContactArray[yy].getPeople().relation;
			aArray[&quot;phone1&quot;] = capContactArray[yy].getPeople().phone1;			
			aArray[&quot;phone2&quot;] = capContactArray[yy].getPeople().phone2;			
			aArray[&quot;email&quot;] = capContactArray[yy].getPeople().email;
			aArray[&quot;addressLine1&quot;] = capContactArray[yy].getPeople().getCompactAddress().getAddressLine1();
			aArray[&quot;addressLine2&quot;] = capContactArray[yy].getPeople().getCompactAddress().getAddressLine2();
			aArray[&quot;city&quot;] = capContactArray[yy].getPeople().getCompactAddress().getCity();
			aArray[&quot;state&quot;] = capContactArray[yy].getPeople().getCompactAddress().getState();
			aArray[&quot;zip&quot;] = capContactArray[yy].getPeople().getCompactAddress().getZip();
			aArray[&quot;fax&quot;] = capContactArray[yy].getPeople().fax;
			aArray[&quot;notes&quot;] = capContactArray[yy].getPeople().notes;
			aArray[&quot;country&quot;] = capContactArray[yy].getPeople().getCompactAddress().getCountry();
			aArray[&quot;fullName&quot;] = capContactArray[yy].getPeople().fullName;


			var pa = capContactArray[yy].getCapContactModel().getPeople().getAttributes().toArray();
	                for (xx1 in pa)
                   		aArray[pa[xx1].attributeName] = pa[xx1].attributeValue;
			cArray.push(aArray);                
			}
		}
	return cArray;
	}	

 
function getCSLBInfo(doPop,doWarning)   // doPop = true populate the cap lic prof with this data  
					// doWarning = true, message if license is expired.
	{
	// Requires getNode and getProp functions.
	//
	// Get the first lic prof from the app
	//
	var capLicenseResult = aa.licenseScript.getLicenseProf(capId);
	if (capLicenseResult.getSuccess())
		{ var capLicenseArr = capLicenseResult.getOutput();  }
	else
		{ logDebug(&quot;**ERROR: getting lic prof: &quot; + capLicenseResult.getErrorMessage()); return false; }
		
	if (capLicenseArr == null || !capLicenseArr.length)
		{ logDebug(&quot;**WARNING: no licensed professionals on this CAP&quot;); return false; }

	var licProfScriptModel = capLicenseArr[0];
	var rlpId = licProfScriptModel.getLicenseNbr();

	//
	// Now make the call to the California State License Board
	//
	
	var getout = aa.util.httpPost(&quot;http://www2.cslb.ca.gov/IVR/License+Detail.asp?LicNum=&quot; + rlpId,&quot;&quot;);
	if (getout.getSuccess())
	  var lpXML = getout.getOutput();
	else
	   { logDebug(&quot;**ERROR: communicating with CSLB: &quot; + getout.getErrorMessage()); return false; }
	
	// Check to see if error message in the XML:
	
	if (lpXML.indexOf(&quot;&lt;Error&gt;&quot;) &gt; 0 )
		{
		logDebug(&quot;**ERROR: CSLB information returned an error: &quot; + getNode(getNode(lpXML,&quot;License&quot;),&quot;**ERROR&quot;))
		return false;
		}
		
	var lpBiz = getNode(lpXML,&quot;BusinessInfo&quot;);
	var lpStatus = getNode(lpXML,&quot;PrimaryStatus&quot;);
	var lpClass = getNode(lpXML,&quot;Classifications&quot;);
	var lpBonds = getNode(lpXML,&quot;ContractorBond&quot;); 
	var lpWC = getNode(lpXML,&quot;WorkersComp&quot;);

	if (doWarning)
		{
		var expDate = new Date(getNode(lpBiz,&quot;ExpireDt&quot;));
		if (expDate &lt; startDate)		
			{
			showMessage = true ;
			comment(&quot;**WARNING: Professional License expired on &quot; + expDate.toString());
			}
		}

	if (doPop)  
		{ 	
		licProfScriptModel.setAddress1(getNode(lpBiz,&quot;Addr1&quot;).replace(/\+/g,&quot; &quot;)); 
		licProfScriptModel.setAddress2(getNode(lpBiz,&quot;Addr2&quot;).replace(/\+/g,&quot; &quot;));
		licProfScriptModel.setBusinessName(getNode(lpBiz,&quot;Name&quot;).replace(/\+/g,&quot; &quot;));
		licProfScriptModel.setCity(getNode(lpBiz,&quot;City&quot;).replace(/\+/g,&quot; &quot;));
		licProfScriptModel.setLicenseExpirDate(aa.date.parseDate(getNode(lpBiz,&quot;ExpireDt&quot;)))
		licProfScriptModel.setLicesnseOrigIssueDate(aa.date.parseDate(getNode(lpBiz,&quot;IssueDt&quot;)))  
		licProfScriptModel.setState(getNode(lpBiz,&quot;State&quot;).replace(/\+/g,&quot; &quot;))
		licProfScriptModel.setPhone1(getNode(lpBiz,&quot;BusinessPhoneNum&quot;))
		licProfScriptModel.setState(getNode(lpBiz,&quot;State&quot;).replace(/\+/g,&quot; &quot;))
		licProfScriptModel.setZip(getNode(lpBiz,&quot;Zip&quot;))
		aa.m_licenseProfessional.editLicensedProfessional(licProfScriptModel);
		}
	}
		
 
function getDepartmentName(username)
	{
	var suo = aa.person.getUser(username).getOutput(); 
	var dpt = aa.people.getDepartmentList(null).getOutput();
	for (var thisdpt in dpt)
	  	{
	  	var m = dpt[thisdpt]
	  	var  n = m.getServiceProviderCode() + &quot;/&quot; + m.getAgencyCode() + &quot;/&quot; + m.getBureauCode() + &quot;/&quot; + m.getDivisionCode() + &quot;/&quot; + m.getSectionCode() + &quot;/&quot; + m.getGroupCode() + &quot;/&quot; + m.getOfficeCode() 
	  
	  	if (n.equals(suo.deptOfUser)) 
	  	return(m.getDeptName())
  		}
  	}
  
   
function getGISBufferInfo(svc,layer,numDistance)
	{
	// returns an array of associative arrays
	// each additional parameter will return another value in the array
	//x = getGISBufferInfo(&quot;flagstaff&quot;,&quot;Parcels&quot;,&quot;50&quot;,&quot;PARCEL_ID1&quot;,&quot;MAP&quot;,&quot;BOOK&quot;,&quot;PARCEL&quot;,&quot;LOT_AREA&quot;);
	//
	//for (x1 in x)
	//   {
	//   aa.print(&quot;Object &quot; + x1)
	//   for (x2 in x[x1])
	//      aa.print(&quot;  &quot; + x2 + &quot; = &quot; + x[x1][x2])
	//   }

	var distanceType = &quot;feet&quot;;
	var retArray = new Array();
   	
	var bufferTargetResult = aa.gis.getGISType(svc,layer); // get the buffer target
	if (bufferTargetResult.getSuccess())
		{
		var buf = bufferTargetResult.getOutput();
		for (argnum = 3; argnum &lt; arguments.length ; argnum++)
			buf.addAttributeName(arguments[argnum]);
		}
	else
		{ aa.print(&quot;**ERROR: Getting GIS Type for Buffer Target.  Reason is: &quot; + bufferTargetResult.getErrorType() + &quot;:&quot; + bufferTargetResult.getErrorMessage()) ; return false }
			
	var gisObjResult = aa.gis.getCapGISObjects(capId); // get gis objects on the cap
	if (gisObjResult.getSuccess()) 	
		var fGisObj = gisObjResult.getOutput();
	else
		{ aa.print(&quot;**ERROR: Getting GIS objects for Cap.  Reason is: &quot; + gisObjResult.getErrorType() + &quot;:&quot; + gisObjResult.getErrorMessage()) ; return false }

	for (a1 in fGisObj) // for each GIS object on the Cap
		{
		var bufchk = aa.gis.getBufferByRadius(fGisObj[a1], numDistance, distanceType, buf);

		if (bufchk.getSuccess())
			var proxArr = bufchk.getOutput();
		else
			{ aa.print(&quot;**ERROR: Retrieving Buffer Check Results.  Reason is: &quot; + bufchk.getErrorType() + &quot;:&quot; + bufchk.getErrorMessage()) ; return false }	
		
		for (a2 in proxArr)
			{
			var proxObj = proxArr[a2].getGISObjects();  // if there are GIS Objects here, we're done
			for (z1 in proxObj)
				{
				var n = proxObj[z1].getAttributeNames();
				var v = proxObj[z1].getAttributeValues();
				
				var valArray = new Array();
				
				//
				// 09/18/08 JHS Explicitly adding the key field of the object, since getBufferByRadius will not pull down the key field
				// hardcoded this to GIS_ID
				//
				
				valArray[&quot;GIS_ID&quot;] = proxObj[z1].getGisId()
				for (n1 in n)
					{
					valArray[n[n1]] = v[n1];
					}
				retArray.push(valArray);
				}
			
			}
		}
	return retArray
	}

 
function getGISInfo(svc,layer,attributename)
	{
	// use buffer info to get info on the current object by using distance 0
	// usage: 
	//
	// x = getGISInfo(&quot;flagstaff&quot;,&quot;Parcels&quot;,&quot;LOT_AREA&quot;);
	//
	
	var distanceType = &quot;feet&quot;;
	var retString;
   	
	var bufferTargetResult = aa.gis.getGISType(svc,layer); // get the buffer target
	if (bufferTargetResult.getSuccess())
		{
		var buf = bufferTargetResult.getOutput();
		buf.addAttributeName(attributename);
		}
	else
		{ logDebug(&quot;**ERROR: Getting GIS Type for Buffer Target.  Reason is: &quot; + bufferTargetResult.getErrorType() + &quot;:&quot; + bufferTargetResult.getErrorMessage()) ; return false }
			
	var gisObjResult = aa.gis.getCapGISObjects(capId); // get gis objects on the cap
	if (gisObjResult.getSuccess()) 	
		var fGisObj = gisObjResult.getOutput();
	else
		{ logDebug(&quot;**ERROR: Getting GIS objects for Cap.  Reason is: &quot; + gisObjResult.getErrorType() + &quot;:&quot; + gisObjResult.getErrorMessage()) ; return false }

	for (a1 in fGisObj) // for each GIS object on the Cap.  We'll only send the last value
		{
		var bufchk = aa.gis.getBufferByRadius(fGisObj[a1], &quot;0&quot;, distanceType, buf);

		if (bufchk.getSuccess())
			var proxArr = bufchk.getOutput();
		else
			{ logDebug(&quot;**ERROR: Retrieving Buffer Check Results.  Reason is: &quot; + bufchk.getErrorType() + &quot;:&quot; + bufchk.getErrorMessage()) ; return false }	
		
		for (a2 in proxArr)
			{
			var proxObj = proxArr[a2].getGISObjects();  // if there are GIS Objects here, we're done
			for (z1 in proxObj)
				{
				var v = proxObj[z1].getAttributeValues()
				retString = v[0];
				}
			
			}
		}
	return retString
	}

 
function getGISInfoArray(svc,layer,attributename)
	{
	// use buffer info to get info on the current object by using distance 0
	// usage: 
	//
	// x = getGISInfo(&quot;flagstaff&quot;,&quot;Parcels&quot;,&quot;LOT_AREA&quot;);
	//
	
	var distanceType = &quot;feet&quot;;
	var retArray = new Array();
   	
	var bufferTargetResult = aa.gis.getGISType(svc,layer); // get the buffer target
	if (bufferTargetResult.getSuccess())
		{
		var buf = bufferTargetResult.getOutput();
		buf.addAttributeName(attributename);
		}
	else
		{ logDebug(&quot;**ERROR: Getting GIS Type for Buffer Target.  Reason is: &quot; + bufferTargetResult.getErrorType() + &quot;:&quot; + bufferTargetResult.getErrorMessage()) ; return false }
			
	var gisObjResult = aa.gis.getCapGISObjects(capId); // get gis objects on the cap
	if (gisObjResult.getSuccess()) 	
		var fGisObj = gisObjResult.getOutput();
	else
		{ logDebug(&quot;**ERROR: Getting GIS objects for Cap.  Reason is: &quot; + gisObjResult.getErrorType() + &quot;:&quot; + gisObjResult.getErrorMessage()) ; return false }

	for (a1 in fGisObj) // for each GIS object on the Cap.  We'll only send the last value
		{
		var bufchk = aa.gis.getBufferByRadius(fGisObj[a1], &quot;0&quot;, distanceType, buf);

		if (bufchk.getSuccess())
			var proxArr = bufchk.getOutput();
		else
			{ logDebug(&quot;**ERROR: Retrieving Buffer Check Results.  Reason is: &quot; + bufchk.getErrorType() + &quot;:&quot; + bufchk.getErrorMessage()) ; return false }	
		
		for (a2 in proxArr)
			{
			var proxObj = proxArr[a2].getGISObjects();  // if there are GIS Objects here, we're done
			for (z1 in proxObj)
				{
				var v = proxObj[z1].getAttributeValues();
				retArray.push(v[0]);
				}
			
			}
		}
	return retArray;
	}

 
// function getInspector: returns the inspector ID (string) of the scheduled inspection.  Returns the first result
//
function getInspector(insp2Check)
	{
	var inspResultObj = aa.inspection.getInspections(capId);
	if (inspResultObj.getSuccess())
		{
		inspList = inspResultObj.getOutput();
		for (xx in inspList)
			if (String(insp2Check).equals(inspList[xx].getInspectionType()))
				{
				// have to re-grab the user since the id won't show up in this object.
				inspUserObj = aa.person.getUser(inspList[xx].getInspector().getFirstName(),inspList[xx].getInspector().getMiddleName(),inspList[xx].getInspector().getLastName()).getOutput();
				return inspUserObj.getUserID();
				}
		}
	return false;
	}

 
function getLastInspector(insp2Check)
	// function getLastInspector: returns the inspector ID (string) of the last inspector to result the inspection.
	//
	{
	var inspResultObj = aa.inspection.getInspections(capId);
	if (inspResultObj.getSuccess())
		{
		inspList = inspResultObj.getOutput();
		
		inspList.sort(compareInspDateDesc)
		for (xx in inspList)
			if (String(insp2Check).equals(inspList[xx].getInspectionType()) &amp;&amp; !inspList[xx].getInspectionStatus().equals(&quot;Scheduled&quot;))
				{
				// have to re-grab the user since the id won't show up in this object.
				inspUserObj = aa.person.getUser(inspList[xx].getInspector().getFirstName(),inspList[xx].getInspector().getMiddleName(),inspList[xx].getInspector().getLastName()).getOutput();
				return inspUserObj.getUserID();
				}
		}
	return null;
	}

function compareInspDateDesc(a,b) { return (a.getScheduledDate().getEpochMilliseconds() &lt; b.getScheduledDate().getEpochMilliseconds()); }
 
function getNode(fString,fName)
	{
	 var fValue = &quot;&quot;;
	 var startTag = &quot;&lt;&quot;+fName+&quot;&gt;&quot;;
	 var endTag = &quot;&lt;/&quot;+fName+&quot;&gt;&quot;;

	 startPos = fString.indexOf(startTag) + startTag.length;
	 endPos = fString.indexOf(endTag);
	 // make sure startPos and endPos are valid before using them
	 if (startPos &gt; 0 &amp;&amp; startPos &lt; endPos)
		  fValue = fString.substring(startPos,endPos);

	 return unescape(fValue);
	}
	
 
function getParent() 
	{
	// returns the capId object of the parent.  Assumes only one parent!
	//
	getCapResult = aa.cap.getProjectParents(capId,1);
	if (getCapResult.getSuccess())
		{
		parentArray = getCapResult.getOutput();
		if (parentArray.length)
			return parentArray[0].getCapID();
		else
			{
			logDebug( &quot;**WARNING: GetParent found no project parent for this application&quot;);
			return false;
			}
		}
	else
		{ 
		logDebug( &quot;**WARNING: getting project parents:  &quot; + getCapResult.getErrorMessage());
		return false;
		}
	}

 
function getParents(pAppType) 
	{
		// returns the capId array of all parent caps
	    //Dependency: appMatch function
		//
        
		var i = 1;
        while (true)
        {
			if (!(aa.cap.getProjectParents(capId,i).getSuccess()))
				break;
         
			i += 1;
        }
        i -= 1;

		getCapResult = aa.cap.getProjectParents(capId,i);
        myArray = new Array();

		if (getCapResult.getSuccess())
		{
			parentArray = getCapResult.getOutput();
			
			if (parentArray.length)
			{
				for(x in parentArray)
				{
					if (pAppType != null)
					{
						//If parent type matches apType pattern passed in, add to return array
						if ( appMatch( pAppType, parentArray[x].getCapID() ) )
							myArray.push(parentArray[x].getCapID());
					}
					else
						myArray.push(parentArray[x].getCapID());
				}		
				
				return myArray;
			}
			else
			{
				logDebug( &quot;**WARNING: GetParent found no project parent for this application&quot;);
				return null;
			}
		}
		else
		{ 
			logDebug( &quot;**WARNING: getting project parents:  &quot; + getCapResult.getErrorMessage());
			return null;
		}
	}

 
function getProp(fString,fName)
	{
	 var fValue = &quot;&quot;;
	 var startTag = fName + &quot;='&quot;;
	 var endTag = &quot;'&quot;;
	 startPos = fString.indexOf(startTag) + startTag.length;
	 if (startPos &gt; 0)
	   fValue = fString.substring(startPos);

	 endPos = fValue.indexOf(endTag);
	 if (endPos &gt; 0)
	  fValue = fValue.substring(0,endPos);

	return unescape(fValue);
	}

 

function getRefLicenseProf(refstlic)
	{
	var refLicObj = null;
	var refLicenseResult = aa.licenseScript.getRefLicensesProfByLicNbr(aa.getServiceProviderCode(),refstlic);
	if (!refLicenseResult.getSuccess())
		{ logDebug(&quot;**ERROR retrieving Ref Lic Profs : &quot; + refLicenseResult.getErrorMessage()); return false; }
	else
		{
		var newLicArray = refLicenseResult.getOutput();
		if (!newLicArray) return null;
		for (var thisLic in newLicArray)
			if (refstlic &amp;&amp; refstlic.toUpperCase().equals(newLicArray[thisLic].getStateLicense().toUpperCase()))
				refLicObj = newLicArray[thisLic];
		}

	return refLicObj;
	} 

function getRelatedCapsByAddress(ats) 
//
// returns and array of capids that share the same address as the current cap
//
	{
	var retArr = new Array();
	
	// get address data
	var addResult = aa.address.getAddressByCapId(capId);
	if (addResult.getSuccess())
		{ var aoArray = addResult.getOutput(); }
	else	
		{ logDebug(&quot;**ERROR: getting address by cap ID: &quot; + addResult.getErrorMessage()); return false; }
	
	for (zzz in aoArray)
		{
		var ao = aoArray[zzz];
		// get caps with same address
		capAddResult = aa.cap.getCapListByDetailAddress(ao.getStreetName(),ao.getHouseNumberStart(),ao.getStreetSuffix(),null,ao.getStreetDirection(),null);
		if (capAddResult.getSuccess())
			{ var capIdArray=capAddResult.getOutput(); }
		else
			{ logDebug(&quot;**ERROR: getting similar addresses: &quot; + capAddResult.getErrorMessage());  return false; }


		// loop through related caps
		for (cappy in capIdArray)
			{
			// skip if current cap
			if (capId.getCustomID().equals(capIdArray[cappy].getCustomID()))
				continue;

			// get cap id
			var relcap = aa.cap.getCap(capIdArray[cappy].getCapID()).getOutput();


			// get cap type

			var reltypeArray = relcap.getCapType().toString().split(&quot;/&quot;);

			var isMatch = true;
			var ata = ats.split(&quot;/&quot;);
			if (ata.length != 4)
				logDebug(&quot;**ERROR: The following Application Type String is incorrectly formatted: &quot; + ats);
			else
				for (xx in ata)
					if (!ata[xx].equals(reltypeArray[xx]) &amp;&amp; !ata[xx].equals(&quot;*&quot;))
						isMatch = false;

			if (isMatch)			
				retArr.push(capIdArray[cappy]);

			} // loop through related caps
		
		}
	if (retArr.length &gt; 0)
		return retArr;
		
	}

 

function getRelatedCapsByParcel(ats) 
//
// returns and array of capids that match parcels on the current app.  Includes all parcels.
// ats, app type string to check for
//
	{
	var retArr = new Array();
	
	var capParcelResult = aa.parcel.getParcelandAttribute(capId,null);
	if (capParcelResult.getSuccess())
		{ var Parcels = capParcelResult.getOutput().toArray(); }
	else	
		{ logDebug(&quot;**ERROR: getting parcels by cap ID: &quot; + capParcelResult.getErrorMessage()); return false; }

	for (zz in Parcels)
		{
		var ParcelValidatedNumber = Parcels[zz].getParcelNumber();

		// get caps with same parcel
		var capAddResult = aa.cap.getCapListByParcelID(ParcelValidatedNumber,null);
		if (capAddResult.getSuccess())
			{ var capIdArray=capAddResult.getOutput(); }
		else
			{ logDebug(&quot;**ERROR: getting similar parcels: &quot; + capAddResult.getErrorMessage());  return false; }

		// loop through related caps
		for (cappy in capIdArray)
			{
			// skip if current cap
			if (capId.getCustomID().equals(capIdArray[cappy].getCustomID()))
				continue;
			
			// get cap ids			
			var relcap = aa.cap.getCap(capIdArray[cappy].getCapID()).getOutput();
			// get cap type
			var reltypeArray = relcap.getCapType().toString().split(&quot;/&quot;);

			var isMatch = true;
			var ata = ats.split(&quot;/&quot;);
			if (ata.length != 4)
				logDebug(&quot;**ERROR: The following Application Type String is incorrectly formatted: &quot; + ats);
			else
				for (xx in ata)
					if (!ata[xx].equals(reltypeArray[xx]) &amp;&amp; !ata[xx].equals(&quot;*&quot;))
						isMatch = false;

			if (isMatch)			
				retArr.push(capIdArray[cappy]);

			} // loop through related caps
		}
		
	if (retArr.length &gt; 0)
		return retArr;
		
	}

 
function getReportedChannel() // option CapId
{
	var itemCap = capId
	if (arguments.length &gt; 0) 
		itemCap = arguments[0]; // use cap ID specified in args

	var cdScriptObjResult = aa.cap.getCapDetail(itemCap);
	if (!cdScriptObjResult.getSuccess())
		{ logDebug(&quot;**ERROR: No cap detail script object : &quot; + cdScriptObjResult.getErrorMessage()) ; return false; }

	var cdScriptObj = cdScriptObjResult.getOutput();

	if (!cdScriptObj)
		{ logDebug(&quot;**ERROR: No cap detail script object&quot;) ; return false; }

	cd = cdScriptObj.getCapDetailModel();

	var sReturn = cd.getReportedChannel();
	
	if(sReturn != null)
		return sReturn;
	else
		return &quot;&quot;;
} 
function getScheduledInspId(insp2Check)
	{
	// warning, returns only the first scheduled occurrence
	var inspResultObj = aa.inspection.getInspections(capId);
	if (inspResultObj.getSuccess())
		{
		var inspList = inspResultObj.getOutput();
		for (xx in inspList)
			if (String(insp2Check).equals(inspList[xx].getInspectionType()) &amp;&amp; inspList[xx].getInspectionStatus().toUpperCase().equals(&quot;SCHEDULED&quot;))
				return inspList[xx].getIdNumber();
		}
	return false;
	}

 
function getShortNotes() // option CapId
{
	var itemCap = capId
	if (arguments.length &gt; 0) 
		itemCap = arguments[0]; // use cap ID specified in args

	var cdScriptObjResult = aa.cap.getCapDetail(itemCap);
	if (!cdScriptObjResult.getSuccess())
		{ logDebug(&quot;**ERROR: No cap detail script object : &quot; + cdScriptObjResult.getErrorMessage()) ; return false; }

	var cdScriptObj = cdScriptObjResult.getOutput();

	if (!cdScriptObj)
		{ logDebug(&quot;**ERROR: No cap detail script object&quot;) ; return false; }

	cd = cdScriptObj.getCapDetailModel();

	var sReturn = cd.getShortNotes();
	
	if(sReturn != null)
		return sReturn;
	else
		return &quot;&quot;;
} 
function getTaskDueDate(wfstr) // optional process name.
	{
	var useProcess = false;
	var processName = &quot;&quot;;
	if (arguments.length == 2) 
		{
		processName = arguments[1]; // subprocess
		useProcess = true;
		}

	var workflowResult = aa.workflow.getTasks(capId);
 	if (workflowResult.getSuccess())
  	 	wfObj = workflowResult.getOutput();
  	else
  	  	{ logMessage(&quot;**ERROR: Failed to get workflow object: &quot; + s_capResult.getErrorMessage()); return false; }
	
	for (i in wfObj)
		{
   		var fTask = wfObj[i];
  		if ((fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase()) || wfstr == &quot;*&quot;)  &amp;&amp; (!useProcess || fTask.getProcessCode().equals(processName)))
			{
			var dueDate = wfObj[i].getDueDate();
			if (dueDate)
				return new Date(dueDate.getMonth() + &quot;/&quot; + dueDate.getDayOfMonth() + &quot;/&quot; + dueDate.getYear());
			}			
		}
	}

 
function getTaskStatusForEmail(stask)
	{
	// returns a string of task statuses for a workflow group
	var returnStr = &quot;&quot;
	var taskResult = aa.workflow.getTasks(capId);
	if (taskResult.getSuccess())
		{ var taskArr = taskResult.getOutput(); }
	else
		{ logDebug( &quot;**ERROR: getting tasks : &quot; + taskResult.getErrorMessage()); return false }
		
	for (xx in taskArr)
		if (taskArr[xx].getProcessCode().equals(stask) &amp;&amp; taskArr[xx].getCompleteFlag().equals(&quot;Y&quot;))
			{
			returnStr+=&quot;Task Name: &quot; + taskArr[xx].getTaskDescription() + &quot;\n&quot;;
			returnStr+=&quot;Task Status: &quot; + taskArr[xx].getDisposition() + &quot;\n&quot;;
			if (taskArr[xx].getDispositionComment() != null) 
				returnStr+=&quot;Task Comments: &quot; + taskArr[xx].getDispositionComment() + &quot;\n&quot; ;
			returnStr+=&quot;\n&quot;;
			}
	logDebug(returnStr);
	return returnStr;
	}

 

function xmlEscapeXMLToHTML(xmlData) {
    /*************************************************************************************
    Function:       xmlEscapeXMLToHTML

    author:         xwisdom@yahoo.com

    description:
        Encodes XML data for use in a web page

    ************************************************************************************/
    var gt;

    var str = xmlData;

    //replace &amp; with &amp;amp;
    gt = -1;
    while (str.indexOf(&quot;&amp;&quot;, gt + 1) &gt; -1) {
        var gt = str.indexOf(&quot;&amp;&quot;, gt + 1);
        var newStr = str.substr(0, gt);
        newStr += &quot;&amp;amp;&quot;;
        newStr = newStr + str.substr(gt + 1, str.length);
        str = newStr;
    }

    //replace &lt; with &amp;lt;
    gt = -1;
    while (str.indexOf(&quot;&lt;&quot;, gt + 1) &gt; -1) {
        var gt = str.indexOf(&quot;&lt;&quot;, gt + 1);
        var newStr = str.substr(0, gt);
        newStr += &quot;&amp;lt;&quot;;
        newStr = newStr + str.substr(gt + 1, str.length);
        str = newStr;
    }

    //replace &gt; with &amp;gt;
    gt = -1;
    while (str.indexOf(&quot;&gt;&quot;, gt + 1) &gt; -1) {
        var gt = str.indexOf(&quot;&gt;&quot;, gt + 1);
        var newStr = str.substr(0, gt);
        newStr += &quot;&amp;gt;&quot;;
        newStr = newStr + str.substr(gt + 1, str.length);
        str = newStr;
    }

    //replace \n with &lt;br&gt;
    gt = -1;
    while (str.indexOf(&quot;\n&quot;, gt + 1) &gt; -1) {
        var gt = str.indexOf(&quot;\n&quot;, gt + 1);
        var newStr = str.substr(0, gt);
        newStr += &quot;&lt;br&gt;&quot;;
        newStr = newStr + str.substr(gt + 1, str.length);
        str = newStr;
    }

    return str

}  // end function xmlEscapeXMLToHTML

 
function inspCancelAll()
	{
	var isCancelled = false;
	var inspResults = aa.inspection.getInspections(capId);
	if (inspResults.getSuccess())
		{
		var inspAll = inspResults.getOutput();
		var inspectionId;
		var cancelResult;
		for (ii in inspAll)
			{
			if (inspAll[ii].getDocumentDescription().equals(&quot;Insp Scheduled&quot;) &amp;&amp; inspAll[ii].getAuditStatus().equals(&quot;A&quot;))
				{
				inspectionId = inspAll[ii].getIdNumber();		// Inspection identifier	
				cancelResult = aa.inspection.cancelInspection(capId,inspectionId);
				if (cancelResult.getSuccess())
					{
					logMessage(&quot;Cancelling inspection: &quot; + inspAll[ii].getInspectionType());
					isCancelled = true;
					}
				else
					logMessage(&quot;**ERROR&quot;,&quot;**ERROR: Cannot cancel inspection: &quot;+inspAll[ii].getInspectionType()+&quot;, &quot;+cancelResult.getErrorMessage());
				}
		  }
		}
	else
		logMessage(&quot;**ERROR: getting inspections: &quot; + inspResults.getErrorMessage());
	
	return isCancelled;
	}

 
function invoiceFee(fcode,fperiod)
    {
    //invoices all assessed fees having fcode and fperiod
    // SR5085 LL
    var feeFound=false;
    getFeeResult = aa.finance.getFeeItemByFeeCode(capId,fcode,fperiod);
    if (getFeeResult.getSuccess())
        {
        var feeList = getFeeResult.getOutput();
        for (feeNum in feeList)
			if (feeList[feeNum].getFeeitemStatus().equals(&quot;NEW&quot;))  
				{
				var feeSeq = feeList[feeNum].getFeeSeqNbr();
				feeSeqList.push(feeSeq);
				paymentPeriodList.push(fperiod);
                feeFound=true;
                logDebug(&quot;Assessed fee &quot;+fcode+&quot; found and tagged for invoicing&quot;);
                }
        }
    else
		{ logDebug( &quot;**ERROR: getting fee items (&quot; + fcode + &quot;): &quot; + getFeeResult.getErrorMessage())}
    return feeFound;
    } 
function isScheduled(inspType)
	{
	var found = false;
	var inspResultObj = aa.inspection.getInspections(capId);
	if (inspResultObj.getSuccess())
		{
		var inspList = inspResultObj.getOutput();
		for (xx in inspList)
			if (String(inspType).equals(inspList[xx].getInspectionType()))
				found = true;
		}
	return found;
	}

 
function isTaskActive(wfstr) // optional process name
	{
	var useProcess = false;
	var processName = &quot;&quot;;
	if (arguments.length == 2) 
		{
		processName = arguments[1]; // subprocess
		useProcess = true;
		}

	var workflowResult = aa.workflow.getTasks(capId);
 	if (workflowResult.getSuccess())
  	 	wfObj = workflowResult.getOutput();
  	else
  	  	{ logMessage(&quot;**ERROR: Failed to get workflow object: &quot; + s_capResult.getErrorMessage()); return false; }
	
	for (i in wfObj)
		{
   		fTask = wfObj[i];
 		if (fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase())  &amp;&amp; (!useProcess || fTask.getProcessCode().equals(processName)))
			if (fTask.getActiveFlag().equals(&quot;Y&quot;))
				return true;
			else
				return false;
		}
	}

 
function isTaskComplete(wfstr) // optional process name
	{
	var useProcess = false;
	var processName = &quot;&quot;;
	if (arguments.length == 2) 
		{
		processName = arguments[1]; // subprocess
		useProcess = true;
		}

	var workflowResult = aa.workflow.getTasks(capId);
 	if (workflowResult.getSuccess())
  	 	wfObj = workflowResult.getOutput();
  	else
  	  	{ logMessage(&quot;**ERROR: Failed to get workflow object: &quot; + s_capResult.getErrorMessage()); return false; }
	
	for (i in wfObj)
		{
   		fTask = wfObj[i];
 		if (fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase())  &amp;&amp; (!useProcess || fTask.getProcessCode().equals(processName)))
			if (fTask.getCompleteFlag().equals(&quot;Y&quot;))
				return true;
			else
				return false;
		}
	}
	
 
function isTaskStatus(wfstr,wfstat) // optional process name
	{
	var useProcess = false;
	var processName = &quot;&quot;;
	if (arguments.length &gt; 2) 
		{
		processName = arguments[2]; // subprocess
		useProcess = true;
		}

	var workflowResult = aa.workflow.getTasks(capId);
 	if (workflowResult.getSuccess())
  	 	var wfObj = workflowResult.getOutput();
  	else
  	  	{ 
		logMessage(&quot;**ERROR: Failed to get workflow object: &quot; + s_capResult.getErrorMessage()); 
		return false; 
		}
	
	for (i in wfObj)
		{
   		fTask = wfObj[i];
 		if (fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase())  &amp;&amp; (!useProcess || fTask.getProcessCode().equals(processName)))
			if (fTask.getDisposition()!=null)
				{
				if (fTask.getDisposition().toUpperCase().equals(wfstat.toUpperCase()))
					return true;
				else
					return false;
				}
		}
	return false;
	}

 

function jsDateToASIDate(dateValue)
{
  //Converts Javascript Date to ASI 0 pad MM/DD/YYYY
  //
  if (dateValue != null)
  {
	if (Date.prototype.isPrototypeOf(dateValue))
	{
	    var M = &quot;&quot; + (dateValue.getMonth()+1); 
	    var MM = &quot;0&quot; + M; 
	    MM = MM.substring(MM.length-2, MM.length); 
	    var D = &quot;&quot; + (dateValue.getDate()); 
	    var DD = &quot;0&quot; + D; 
	    DD = DD.substring(DD.length-2, DD.length); 
	    var YYYY = &quot;&quot; + (dateValue.getFullYear()); 
	    return MM + &quot;/&quot; + DD + &quot;/&quot; + YYYY;
	}
	else
	{
		logDebug(&quot;Parameter is not a javascript date&quot;);
		return (&quot;INVALID JAVASCRIPT DATE&quot;);
	}
  }
  else
  {
	logDebug(&quot;Parameter is null&quot;);
	return (&quot;NULL PARAMETER VALUE&quot;);
  }
}

 
function jsDateToMMDDYYYY(pJavaScriptDate)
	{
	//converts javascript date to string in MM/DD/YYYY format
	//
	if (pJavaScriptDate != null)
		{
		if (Date.prototype.isPrototypeOf(pJavaScriptDate))
	return (pJavaScriptDate.getMonth()+1).toString()+&quot;/&quot;+pJavaScriptDate.getDate()+&quot;/&quot;+pJavaScriptDate.getFullYear();
		else
			{
			logDebug(&quot;Parameter is not a javascript date&quot;);
			return (&quot;INVALID JAVASCRIPT DATE&quot;);
			}
		}
	else
		{
		logDebug(&quot;Parameter is null&quot;);
		return (&quot;NULL PARAMETER VALUE&quot;);
		}
	} 
function licEditExpInfo (pExpStatus, pExpDate)
	{
	//Edits expiration status and/or date
	//Needs licenseObject function
	//06SSP-00238
	//
	var lic = new licenseObject(null);
	if (pExpStatus!=null)
		{
		lic.setStatus(pExpStatus);
		}
		
	if (pExpDate!=null)
		{
		lic.setExpiration(pExpDate);
		}
	}
	
 

function licenseObject(licnumber)
	{
	// available statuses (from various R1_SERVER_CONSTANT values
	var licenseStatus = new Array(&quot;&quot;,&quot;Active&quot;,&quot;About To Expire&quot;,&quot;Delinquent&quot;,&quot;Expired&quot;,&quot;Invalid&quot;,&quot;Pending&quot;);

	this.refProf = null;		// licenseScriptModel (reference licensed professional)
	this.b1Exp = null;		// b1Expiration record (renewal status on application)
	this.b1ExpDate = null;
	this.b1ExpCode = null;
	this.b1Status = null;
	this.refExpDate = null;
	this.licNum = licnumber;	// License Number


	// Load the reference License Professional if we're linking the two
	if (licnumber) // we're linking
		{
		var newLic = getRefLicenseProf(licnumber)

		if (newLic)
				{
				this.refProf = newLic;
				tmpDate = newLic.getLicenseExpirationDate();
				if (tmpDate)
						this.refExpDate = tmpDate.getMonth() + &quot;/&quot; + tmpDate.getDayOfMonth() + &quot;/&quot; + tmpDate.getYear();
				logDebug(&quot;Loaded reference license professional with Expiration of &quot; + this.refExpDate);
				}
		}

   	// Load the renewal info (B1 Expiration)
   	// The only way to pull up a renewal is to supply a status.  I don't understand since it has a 1 to 1 relationship with b1permit, but oh well.
   	// the silly thing returns a blank record, so have to check the B1expirationModel to see if it's valid

   	for (myStatus in licenseStatus)
   		{
   		b1ExpResult = aa.expiration.getLicensesByCapID(capId,licenseStatus[myStatus]);
   		if (b1ExpResult.getSuccess())
   			{
   			this.b1Exp = b1ExpResult.getOutput();
   			exptest = this.b1Exp.getB1Expiration();
    			if (exptest)
    				{
    				tmpDate = this.b1Exp.getExpDate();
    				if (tmpDate)
    					this.b1ExpDate = tmpDate.getMonth() + &quot;/&quot; + tmpDate.getDayOfMonth() + &quot;/&quot; + tmpDate.getYear();
    				this.b1Status = this.b1Exp.getExpStatus();
    				logDebug(&quot;Found renewal record of status : &quot; + this.b1Status + &quot;, Expires on &quot; + this.b1ExpDate);
    				break
    				}
			}
		else
			{ logDebug(&quot;**ERROR: Getting B1Expiration Object for Cap.  Reason is: &quot; + b1ExpResult.getErrorType() + &quot;:&quot; + gisObjResult.getErrorMessage()) ; return false }
		}


   	this.setExpiration = function(expDate)
   		// Update expiration date
   		{
   		var expAADate = aa.date.parseDate(expDate);

   		if (this.refProf) {
   			this.refProf.setLicenseExpirationDate(expAADate);
   			aa.licenseScript.editRefLicenseProf(this.refProf);
   			logDebug(&quot;Updated reference license expiration to &quot; + expDate); }

   		if (this.b1Exp)  {
 				this.b1Exp.setExpDate(expAADate);
				aa.expiration.editB1Expiration(this.b1Exp.getB1Expiration());
				logDebug(&quot;Updated renewal to &quot; + expDate); }
   		}

	this.setIssued = function(expDate)
		// Update Issued date
		{
		var expAADate = aa.date.parseDate(expDate);

		if (this.refProf) {
			this.refProf.setLicenseIssueDate(expAADate);
			aa.licenseScript.editRefLicenseProf(this.refProf);
			logDebug(&quot;Updated reference license issued to &quot; + expDate); }

		}
	this.setLastRenewal = function(expDate)
		// Update expiration date
		{
		var expAADate = aa.date.parseDate(expDate)

		if (this.refProf) {
			this.refProf.setLicenseLastRenewalDate(expAADate);
			aa.licenseScript.editRefLicenseProf(this.refProf);
			logDebug(&quot;Updated reference license issued to &quot; + expDate); }
		}

	this.setStatus = function(licStat)
		// Update expiration status
		{
		if (this.b1Exp)  {
			this.b1Exp.setExpStatus(licStat);
			aa.expiration.editB1Expiration(this.b1Exp.getB1Expiration());
			logDebug(&quot;Updated renewal to status &quot; + licStat); }
		}

	this.getStatus = function()
		// Get Expiration Status
		{
		if (this.b1Exp) {
			return this.b1Exp.getExpStatus();
			}
		}

	this.getCode = function()
		// Get Expiration Status
		{
		if (this.b1Exp) {
			return this.b1Exp.getExpCode();
			}
		}
	}

 
function loadAppSpecific(thisArr) {
	// 
	// Returns an associative array of App Specific Info
	// Optional second parameter, cap ID to load from
	//
	
	var itemCap = capId;
	if (arguments.length == 2) itemCap = arguments[1]; // use cap ID specified in args

    	var appSpecInfoResult = aa.appSpecificInfo.getByCapID(itemCap);
	if (appSpecInfoResult.getSuccess())
	 	{
		var fAppSpecInfoObj = appSpecInfoResult.getOutput();

		for (loopk in fAppSpecInfoObj)
			{
			if (useAppSpecificGroupName)
				thisArr[fAppSpecInfoObj[loopk].getCheckboxType() + &quot;.&quot; + fAppSpecInfoObj[loopk].checkboxDesc] = fAppSpecInfoObj[loopk].checklistComment;
			else
				thisArr[fAppSpecInfoObj[loopk].checkboxDesc] = fAppSpecInfoObj[loopk].checklistComment;
			}
		}
	}

 
function loadASITable(tname) {

 	//
 	// Returns a single ASI Table array of arrays
	// Optional parameter, cap ID to load from
	//

	var itemCap = capId;
	if (arguments.length == 2) itemCap = arguments[1]; // use cap ID specified in args

	var gm = aa.appSpecificTableScript.getAppSpecificTableGroupModel(itemCap).getOutput();
	var ta = gm.getTablesArray()
	var tai = ta.iterator();

	while (tai.hasNext())
	  {
	  var tsm = tai.next();
	  var tn = tsm.getTableName();

      if (!tn.equals(tname)) continue;

	  if (tsm.rowIndex.isEmpty())
	  	{
			logDebug(&quot;Couldn't load ASI Table &quot; + tname + &quot; it is empty&quot;);
			return false;
		}

   	  var tempObject = new Array();
	  var tempArray = new Array();

  	  var tsmfldi = tsm.getTableField().iterator();
	  var tsmcoli = tsm.getColumns().iterator();
	  var numrows = 1;

	  while (tsmfldi.hasNext())  // cycle through fields
		{
		if (!tsmcoli.hasNext())  // cycle through columns
			{
			var tsmcoli = tsm.getColumns().iterator();
			tempArray.push(tempObject);  // end of record
			var tempObject = new Array();  // clear the temp obj
			numrows++;
			}
		var tcol = tsmcoli.next();
		var tval = tsmfldi.next();
		tempObject[tcol.getColumnName()] = tval;
		}
	  tempArray.push(tempObject);  // end of record
	  }
	  return tempArray;
	} 
function loadASITables() {

 	//
 	// Loads App Specific tables into their own array of arrays.  Creates global array objects
	//
	// Optional parameter, cap ID to load from
	//

	var itemCap = capId;
	if (arguments.length == 1) itemCap = arguments[0]; // use cap ID specified in args

	var gm = aa.appSpecificTableScript.getAppSpecificTableGroupModel(itemCap).getOutput();
	var ta = gm.getTablesArray()
	var tai = ta.iterator();

	while (tai.hasNext())
	  {
	  var tsm = tai.next();

	  if (tsm.rowIndex.isEmpty()) continue;  // empty table

	  var tempObject = new Array();
	  var tempArray = new Array();
	  var tn = tsm.getTableName();

	  tn = String(tn).replace(/[^a-zA-Z0-9]+/g,'');

	  if (!isNaN(tn.substring(0,1))) tn = &quot;TBL&quot; + tn  // prepend with TBL if it starts with a number

  	  var tsmfldi = tsm.getTableField().iterator();
	  var tsmcoli = tsm.getColumns().iterator();
	  var numrows = 1;

	  while (tsmfldi.hasNext())  // cycle through fields
		{
		if (!tsmcoli.hasNext())  // cycle through columns
			{

			var tsmcoli = tsm.getColumns().iterator();
			tempArray.push(tempObject);  // end of record
			var tempObject = new Array();  // clear the temp obj
			numrows++;
			}
		var tcol = tsmcoli.next();
		var tval = tsmfldi.next();
		tempObject[tcol.getColumnName()] = tval;
		}
	  tempArray.push(tempObject);  // end of record
	  var copyStr = &quot;&quot; + tn + &quot; = tempArray&quot;;
	  aa.print(&quot;ASI Table Array : &quot; + tn + &quot; (&quot; + numrows + &quot; Rows)&quot;);
	  eval(copyStr);  // move to table name
	  }

	}
 

function loadFees()  // option CapId
	{
	//  load the fees into an array of objects.  Does not
	var itemCap = capId
	if (arguments.length &gt; 0)
		{
		ltcapidstr = arguments[0]; // use cap ID specified in args
		if (typeof(ltcapidstr) == &quot;string&quot;)
                {
				var ltresult = aa.cap.getCapID(ltcapidstr);
	 			if (ltresult.getSuccess())
  				 	itemCap = ltresult.getOutput();
	  			else
  				  	{ logMessage(&quot;**ERROR: Failed to get cap ID: &quot; + ltcapidstr + &quot; error: &quot; +  ltresult.getErrorMessage()); return false; }
                }
		else
			itemCap = ltcapidstr;
		}

  	var feeArr = new Array();

	var feeResult=aa.fee.getFeeItems(itemCap);
		if (feeResult.getSuccess())
			{ var feeObjArr = feeResult.getOutput(); }
		else
			{ logDebug( &quot;**ERROR: getting fee items: &quot; + capContResult.getErrorMessage()); return false }

		for (ff in feeObjArr)
			{
			fFee = feeObjArr[ff];
			var myFee = new Fee();
			var amtPaid = 0;

			var pfResult = aa.finance.getPaymentFeeItems(itemCap, null);
			if (pfResult.getSuccess())
				{
				var pfObj = pfResult.getOutput();
				for (ij in pfObj)
					if (fFee.getFeeSeqNbr() == pfObj[ij].getFeeSeqNbr())
						amtPaid+=pfObj[ij].getFeeAllocation()
				}

			myFee.sequence = fFee.getFeeSeqNbr();
			myFee.code =  fFee.getFeeCod();
			myFee.description = fFee.getFeeDescription();
			myFee.unit = fFee.getFeeUnit();
			myFee.amount = fFee.getFee();
			myFee.amountPaid = amtPaid;
			if (fFee.getApplyDate()) myFee.applyDate = convertDate(fFee.getApplyDate());
			if (fFee.getEffectDate()) myFee.effectDate = convertDate(fFee.getEffectDate());
			if (fFee.getExpireDate()) myFee.expireDate = convertDate(fFee.getExpireDate());
			myFee.status = fFee.getFeeitemStatus();
			myFee.period = fFee.getPaymentPeriod();
			myFee.display = fFee.getDisplay();
			myFee.accCodeL1 = fFee.getAccCodeL1();
			myFee.accCodeL2 = fFee.getAccCodeL2();
			myFee.accCodeL3 = fFee.getAccCodeL3();
			myFee.formula = fFee.getFormula();
			myFee.udes = fFee.getUdes();
			myFee.UDF1 = fFee.getUdf1();
			myFee.UDF2 = fFee.getUdf2();
			myFee.UDF3 = fFee.getUdf3();
			myFee.UDF4 = fFee.getUdf4();
			myFee.subGroup = fFee.getSubGroup();
			myFee.calcFlag = fFee.getCalcFlag();;
			myFee.calcProc = fFee.getFeeCalcProc();

			feeArr.push(myFee)
			}

		return feeArr;
		}


//////////////////

function Fee() // Fee Object
	{
	this.sequence = null;
	this.code =  null;
	this.description = null;  // getFeeDescription()
	this.unit = null; //  getFeeUnit()
	this.amount = null; //  getFee()
	this.amountPaid = null;
	this.applyDate = null; // getApplyDate()
	this.effectDate = null; // getEffectDate();
	this.expireDate = null; // getExpireDate();
	this.status = null; // getFeeitemStatus()
	this.recDate = null;
	this.period = null; // getPaymentPeriod()
	this.display = null; // getDisplay()
	this.accCodeL1 = null; // getAccCodeL1()
	this.accCodeL2 = null; // getAccCodeL2()
	this.accCodeL3 = null; // getAccCodeL3()
	this.formula = null; // getFormula()
	this.udes = null; // String getUdes()
	this.UDF1 = null; // getUdf1()
	this.UDF2 = null; // getUdf2()
	this.UDF3 = null; // getUdf3()
	this.UDF4 = null; // getUdf4()
	this.subGroup = null; // getSubGroup()
	this.calcFlag = null; // getCalcFlag();
	this.calcProc = null; // getFeeCalcProc()
	this.auditDate = null; // getAuditDate()
	this.auditID = null; // getAuditID()
	this.auditStatus = null; // getAuditStatus()
	}

 
function loadParcelAttributes(thisArr) {
	//
	// Returns an associative array of Parcel Attributes
	// Optional second parameter, cap ID to load from
	//
	
	var itemCap = capId;
	if (arguments.length == 2) itemCap = arguments[1]; // use cap ID specified in args

	var fcapParcelObj = null;
   	var capParcelResult = aa.parcel.getParcelandAttribute(itemCap, null);
   	if (capParcelResult.getSuccess())
   		var fcapParcelObj = capParcelResult.getOutput().toArray();
   	else
     		logDebug(&quot;**ERROR: Failed to get Parcel object: &quot; + capParcelResult.getErrorType() + &quot;:&quot; + capParcelResult.getErrorMessage())
  	
  	for (i in fcapParcelObj)
  		{
  		parcelArea += fcapParcelObj[i].getParcelArea()
  		parcelAttrObj = fcapParcelObj[i].getParcelAttribute().toArray();
  		for (z in parcelAttrObj)
			thisArr[&quot;ParcelAttribute.&quot; + parcelAttrObj[z].getB1AttributeName()]=parcelAttrObj[z].getB1AttributeValue();

		// Explicitly load some standard values
		thisArr[&quot;ParcelAttribute.Block&quot;] = fcapParcelObj[i].getBlock();
		thisArr[&quot;ParcelAttribute.Book&quot;] = fcapParcelObj[i].getBook();
		thisArr[&quot;ParcelAttribute.CensusTract&quot;] = fcapParcelObj[i].getCensusTract();
		thisArr[&quot;ParcelAttribute.CouncilDistrict&quot;] = fcapParcelObj[i].getCouncilDistrict();
		thisArr[&quot;ParcelAttribute.ExemptValue&quot;] = fcapParcelObj[i].getExemptValue();
		thisArr[&quot;ParcelAttribute.ImprovedValue&quot;] = fcapParcelObj[i].getImprovedValue();
		thisArr[&quot;ParcelAttribute.InspectionDistrict&quot;] = fcapParcelObj[i].getInspectionDistrict();
		thisArr[&quot;ParcelAttribute.LandValue&quot;] = fcapParcelObj[i].getLandValue();
		thisArr[&quot;ParcelAttribute.LegalDesc&quot;] = fcapParcelObj[i].getLegalDesc();
		thisArr[&quot;ParcelAttribute.Lot&quot;] = fcapParcelObj[i].getLot();
		thisArr[&quot;ParcelAttribute.MapNo&quot;] = fcapParcelObj[i].getMapNo();
		thisArr[&quot;ParcelAttribute.MapRef&quot;] = fcapParcelObj[i].getMapRef();
		thisArr[&quot;ParcelAttribute.ParcelStatus&quot;] = fcapParcelObj[i].getParcelStatus();
		thisArr[&quot;ParcelAttribute.SupervisorDistrict&quot;] = fcapParcelObj[i].getSupervisorDistrict();
		thisArr[&quot;ParcelAttribute.Tract&quot;] = fcapParcelObj[i].getTract();
		thisArr[&quot;ParcelAttribute.PlanArea&quot;] = fcapParcelObj[i].getPlanArea();
  		}
	}
 
function loadTasks(ltcapidstr)
	{
	if (typeof(ltcapidstr) == &quot;string&quot;)
                {
		var ltresult = aa.cap.getCapID(ltcapidstr); 
	 	if (ltresult.getSuccess())
  		 	ltCapId = ltresult.getOutput();
	  	else
  		  	{ logMessage(&quot;**ERROR: Failed to get cap ID: &quot; + ltcapidstr + &quot; error: &quot; +  ltresult.getErrorMessage()); return false; }
                }
	else
		ltCapId = ltcapidstr;

  	var taskArr = new Array();
  	
	var workflowResult = aa.workflow.getTasks(ltCapId);
	if (workflowResult.getSuccess())
		wfObj = workflowResult.getOutput();
	else
		{ logMessage(&quot;**ERROR: Failed to get workflow object: &quot; + s_capResult.getErrorMessage()); return false; }

	for (i in wfObj)
		{
		fTask = wfObj[i];
		var myTask = new Task();
		myTask.status = fTask.getDisposition();
		myTask.comment = fTask.getDispositionComment();
		myTask.process = fTask.getProcessCode();
                if (fTask.getStatusDate()) myTask.statusdate = &quot;&quot; + fTask.getStatusDate().getMonth() + &quot;/&quot; + fTask.getStatusDate().getDate() + &quot;/&quot; + (fTask.getStatusDate().getYear() + 1900);
		myTask.processID = fTask.getProcessID();
		myTask.note = fTask.getDispositionNote();
		taskArr[fTask.getTaskDescription()] = myTask;
		}			
	return taskArr;
	}

function Task() // Task Object
	{
	this.status = null
	this.comment = null;
	this.note = null;
        this.statusdate = null;
	this.process = null;
	this.processID = null;
	}	
 
function loadTaskSpecific(thisArr) 
	{
 	// 
 	// Appends the Task Specific Info to App Specific Array
 	// If useTaskSpecificGroupName==true, appends wf process code.wftask. to TSI field label
	// Optional second parameter, cap ID to load from
	//
	
	var itemCap = capId;
	if (arguments.length == 2) itemCap = arguments[1]; // use cap ID specified in args

 	var workflowResult = aa.workflow.getTasks(itemCap);
 	if (workflowResult.getSuccess())
 		var wfObj = workflowResult.getOutput();
 	else
 		{ logMessage(&quot;**ERROR: Failed to get workflow object: &quot; + s_capResult.getErrorMessage()) ; return false; }
 
 	for (i in wfObj)
 		{
 		var fTask = wfObj[i];
 		var stepnumber = fTask.getStepNumber();
 		var processID = fTask.getProcessID();
 		var TSIResult = aa.taskSpecificInfo.getTaskSpecificInfoByTask(itemCap, processID, stepnumber)
 		if (TSIResult.getSuccess())
 			{
 			var TSI = TSIResult.getOutput();
 			for (a1 in TSI)
  				{
  				if (useTaskSpecificGroupName)
  	  				thisArr[fTask.getProcessCode() + &quot;.&quot; + fTask.getTaskDescription() + &quot;.&quot; + TSI[a1].getCheckboxDesc()] = TSI[a1].getChecklistComment();
  	  			else
	  				thisArr[TSI[a1].getCheckboxDesc()] = TSI[a1].getChecklistComment();
				}
 			}
 		}
	}
 
function lookup(stdChoice,stdValue) 
	{
	var strControl;
	var bizDomScriptResult = aa.bizDomain.getBizDomainByValue(stdChoice,stdValue);
	
   	if (bizDomScriptResult.getSuccess())
   		{
		var bizDomScriptObj = bizDomScriptResult.getOutput();
		var strControl = &quot;&quot; + bizDomScriptObj.getDescription(); // had to do this or it bombs.  who knows why?
		logDebug(&quot;lookup(&quot; + stdChoice + &quot;,&quot; + stdValue + &quot;) = &quot; + strControl);
		}
	else
		{
		logDebug(&quot;lookup(&quot; + stdChoice + &quot;,&quot; + stdValue + &quot;) does not exist&quot;);
		}
	return strControl;
	}

 
function lookupDateRange(stdChoiceEntry,dateValue) // optional val number 
	{
	var valNumber = 1;
	if (arguments.length == 3) valNumber = arguments[2];

	var compDate = new Date(dateValue);
	var domArr
	for (var count=1; count &lt;= 9999; count++)  // Must be sequential from 01 up to 9999
		{
		var countstr = &quot;0000&quot; + count;
		var countstr = String(countstr).substring(countstr.length,countstr.length - 4);
		var bizDomScriptResult = aa.bizDomain.getBizDomainByValue(stdChoiceEntry,countstr);
	   	
	   	if (bizDomScriptResult.getSuccess())
	   		{
			var bizDomScriptObj = bizDomScriptResult.getOutput();
			var domVal = bizDomScriptObj.getDescription();
			if (bizDomScriptObj.getAuditStatus() != 'I')
				{
				var domOld = domArr;
				var domArr = domVal.split(&quot;\\^&quot;)
				var domDate = new Date(domArr[0])
				if (domDate &gt;= compDate)     //  found the next tier, use the last value
					if (domOld)
						return domOld[valNumber];
					else
						break;
				}					
			}
		else
			if (domArr)
				return domArr[valNumber];
			else
				break;
		}
	}	
 
function lookupFeesByValuation(stdChoiceEntry,stdChoiceValue,capval) // optional arg number 
	{
	var valNumber = 1;
	if (arguments.length == 4) valNumber = arguments[3];

	var saveVal ; 
	var lookupStr = lookup(stdChoiceEntry,stdChoiceValue);
	
	if (lookupStr)
		{
		workArr = lookupStr.split(&quot;^&quot;);
		for (var i in workArr)
			{
                        aa.print(workArr[i]);
			workVals = workArr[i].split(&quot;|&quot;);
			if (workVals[0] &gt; capval) 
				return saveVal;
			else
				if (valNumber == 1)
					saveVal = workVals[valNumber];
				else
					{
					saveVal = parseInt((capval - workVals[0])/100);
					if ((capval - workVals[0]) % 100 &gt; 0) saveVal++;
					saveVal = saveVal * workVals[valNumber];
					}
			}
		}
	return saveVal;
	}


 
function loopTask(wfstr,wfstat,wfcomment,wfnote) // optional process name
	{
	var useProcess = false;
	var processName = &quot;&quot;;
	if (arguments.length == 5) 
		{
		processName = arguments[4]; // subprocess
		useProcess = true;
		}

	var workflowResult = aa.workflow.getTasks(capId);
 	if (workflowResult.getSuccess())
  	 	var wfObj = workflowResult.getOutput();
  	else
  	  	{ logMessage(&quot;**ERROR: Failed to get workflow object: &quot; + s_capResult.getErrorMessage()); return false; }
	
	if (!wfstat) wfstat = &quot;NA&quot;;
	
	for (i in wfObj)
		{
   		var fTask = wfObj[i];
 		if (fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase())  &amp;&amp; (!useProcess || fTask.getProcessCode().equals(processName)))
			{
			var dispositionDate = aa.date.getCurrentDate();
			var stepnumber = fTask.getStepNumber();
			var processID = fTask.getProcessID();

			if (useProcess)
				aa.workflow.handleDisposition(capId,stepnumber,processID,wfstat,dispositionDate, wfnote,wfcomment,systemUserObj ,&quot;L&quot;);
			else
				aa.workflow.handleDisposition(capId,stepnumber,wfstat,dispositionDate, wfnote,wfcomment,systemUserObj ,&quot;L&quot;);
			
			logMessage(&quot;Closing Workflow Task: &quot; + wfstr + &quot; with status &quot; + wfstat + &quot;, Looping...&quot;);
			logDebug(&quot;Closing Workflow Task: &quot; + wfstr + &quot; with status &quot; + wfstat + &quot;, Looping...&quot;);
			}			
		}
	}

 
function nextWorkDay(td)   
	// uses app server to return the next work day.
	// Only available in 6.3.2
	// td can be &quot;mm/dd/yyyy&quot; (or anything that will convert to JS date)
	{
	
	if (!td) 
		dDate = new Date();
	else
		dDate = new Date(td);

	if (!aa.calendar.getNextWorkDay)
		{
		logDebug(&quot;getNextWorkDay function is only available in Accela Automation 6.3.2 or higher.&quot;);
		}
	else
		{
		var dDate = new Date(aa.calendar.getNextWorkDay(aa.date.parseDate(dDate.getMonth()+1 + &quot;/&quot; + dDate.getDate() + &quot;/&quot; + dDate.getFullYear())).getOutput().getTime());
		}

	return (dDate.getMonth()+1) + &quot;/&quot; + dDate.getDate() + &quot;/&quot; + dDate.getFullYear();;
	}


 
function openUrlInNewWindow(myurl)
 {
 //
 // showDebug or showMessage must be true for this to work
 //
 newurl = &quot;&lt;SCRIPT LANGUAGE=\&quot;JavaScript\&quot;&gt;\r\n&lt;!--\r\n newwin = window.open(\&quot;&quot;
 newurl+=myurl
 newurl+=&quot;\&quot;); \r\n  //--&gt; \r\n &lt;/SCRIPT&gt;&quot;
 
 comment(newurl)
 }

 
function parcelConditionExists(condtype)
	{
	var capParcelResult = aa.parcel.getParcelandAttribute(capId,null);
	if (!capParcelResult.getSuccess())
		{ logDebug(&quot;**WARNING: error getting cap parcels : &quot; + capParcelResult.getErrorMessage()) ; return false }

	var Parcels = capParcelResult.getOutput().toArray();
	for (zz in Parcels)
		{
		pcResult = aa.parcelCondition.getParcelConditions(Parcels[zz].getParcelNumber());
		if (!pcResult.getSuccess())
			{ logDebug(&quot;**WARNING: error getting parcel conditions : &quot; + pcResult.getErrorMessage()) ; return false }
		pcs = pcResult.getOutput();
		for (pc1 in pcs)
			if (pcs[pc1].getConditionType().equals(condtype)) return true;
		}
	}

 
function paymentGetNotAppliedTot() //gets total Amount Not Applied on current CAP
	{
	var amtResult = aa.cashier.getSumNotAllocated(capId);
	if (amtResult.getSuccess())
		{
		var appliedTot = amtResult.getOutput();
		//logDebug(&quot;Total Amount Not Applied = $&quot;+appliedTot.toString());
		return parseFloat(appliedTot);
		}
	else
		{
		logDebug(&quot;**ERROR: Getting total not applied: &quot; + amtResult.getErrorMessage()); 
		return false;
		}
	return false;
	}

 
function proximity(svc,layer,numDistance)  // optional: distanceType
	{
	// returns true if the app has a gis object in proximity
	// use with all events except ApplicationSubmitBefore
	// 6/20/07 JHS - Changed errors to Warnings in case GIS server unavailable.

	var distanceType = &quot;feet&quot;
	if (arguments.length == 4) distanceType = arguments[3]; // use distance type in arg list

	var bufferTargetResult = aa.gis.getGISType(svc,layer); // get the buffer target
	if (bufferTargetResult.getSuccess())
		{
		var buf = bufferTargetResult.getOutput();
		buf.addAttributeName(layer + &quot;_ID&quot;);
		}
	else
		{ logDebug(&quot;**WARNING: Getting GIS Type for Buffer Target.  Reason is: &quot; + bufferTargetResult.getErrorType() + &quot;:&quot; + bufferTargetResult.getErrorMessage()) ; return false }

	var gisObjResult = aa.gis.getCapGISObjects(capId); // get gis objects on the cap
	if (gisObjResult.getSuccess())
		var fGisObj = gisObjResult.getOutput();
	else
		{ logDebug(&quot;**WARNING: Getting GIS objects for Cap.  Reason is: &quot; + gisObjResult.getErrorType() + &quot;:&quot; + gisObjResult.getErrorMessage()) ; return false }

	for (a1 in fGisObj) // for each GIS object on the Cap
		{
		var bufchk = aa.gis.getBufferByRadius(fGisObj[a1], numDistance, distanceType, buf);

		if (bufchk.getSuccess())
			var proxArr = bufchk.getOutput();
		else
			{ logDebug(&quot;**WARNING: Retrieving Buffer Check Results.  Reason is: &quot; + bufchk.getErrorType() + &quot;:&quot; + bufchk.getErrorMessage()) ; return false }

		for (a2 in proxArr)
			{
			var proxObj = proxArr[a2].getGISObjects();  // if there are GIS Objects here, we're done
			if (proxObj.length)
				{
				return true;
				}
			}
		}
	}

 
function proximityToAttribute(svc,layer,numDistance,distanceType,attributeName,attributeValue)
	{
	// returns true if the app has a gis object in proximity that contains the attributeName = attributeValue
	// use with all events except ApplicationSubmitBefore
	// example usage:
	// 01 proximityToAttribute(&quot;flagstaff&quot;,&quot;Parcels&quot;,&quot;50&quot;,&quot;feet&quot;,&quot;BOOK&quot;,&quot;107&quot;) ^ DoStuff...

	var bufferTargetResult = aa.gis.getGISType(svc,layer); // get the buffer target
	if (bufferTargetResult.getSuccess())
		{
		var buf = bufferTargetResult.getOutput();
		buf.addAttributeName(attributeName);
		}
	else
		{ logDebug(&quot;**ERROR: Getting GIS Type for Buffer Target.  Reason is: &quot; + bufferTargetResult.getErrorType() + &quot;:&quot; + bufferTargetResult.getErrorMessage()) ; return false }
			
	var gisObjResult = aa.gis.getCapGISObjects(capId); // get gis objects on the cap
	if (gisObjResult.getSuccess()) 	
		var fGisObj = gisObjResult.getOutput();
	else
		{ logDebug(&quot;**ERROR: Getting GIS objects for Cap.  Reason is: &quot; + gisObjResult.getErrorType() + &quot;:&quot; + gisObjResult.getErrorMessage()) ; return false }

	for (a1 in fGisObj) // for each GIS object on the Cap
		{
		var bufchk = aa.gis.getBufferByRadius(fGisObj[a1], numDistance, distanceType, buf);

		if (bufchk.getSuccess())
			var proxArr = bufchk.getOutput();
		else
			{ logDebug(&quot;**ERROR: Retrieving Buffer Check Results.  Reason is: &quot; + bufchk.getErrorType() + &quot;:&quot; + bufchk.getErrorMessage()) ; return false }	
		
		for (a2 in proxArr)
			{
			proxObj = proxArr[a2].getGISObjects();  // if there are GIS Objects here, we're done
			for (z1 in proxObj)
				{
				var v = proxObj[z1].getAttributeValues()
				retString = v[0];
				
				if (retString &amp;&amp; retString.equals(attributeValue))
					return true;
				}
			
			}
		}
	}

 
function refLicProfGetAttribute(pLicNum, pAttributeName)
	{
	//Gets value of custom attribute from reference license prof record
	//07SSP-00033/SP5014

	//validate parameter values
	if (pLicNum==null || pLicNum.length==0 || pAttributeName==null || pAttributeName.length==0)
		{
		logDebug(&quot;Invalid license number or attribute name parameter&quot;);
		return (&quot;INVALID PARAMETER&quot;);
		}

	//get reference License Professional record

	var newLic = getRefLicenseProf(pLicNum)

	//get reference License Professional's license seq num
	var licSeqNum = 0;
	var attributeType = &quot;&quot;;
	if (newLic)
		{
		licSeqNum = newLic.getLicSeqNbr();
		attributeType = newLic.getLicenseType();
		logDebug(&quot;License Seq Num: &quot;+licSeqNum + &quot;, License Type: &quot;+attributeType);
		}
	else
		{
		logMessage(&quot;No reference licensed professional found with state license number of &quot;+pLicNum);
		logDebug(&quot;No reference licensed professional found with state license number of &quot;+pLicNum);
		return (&quot;NO LICENSE FOUND&quot;);
		}

	//get ref Lic Prof custom attribute using license seq num &amp; attribute type
	if ( !(licSeqNum==0 || licSeqNum==null || attributeType==&quot;&quot; || attributeType==null) )
		{
		var peopAttrResult = aa.people.getPeopleAttributeByPeople(licSeqNum, attributeType);
			if (!peopAttrResult.getSuccess())
			{
			logDebug(&quot;**ERROR retrieving reference license professional attribute: &quot; + peopAttrResult.getErrorMessage());
			return false;
			}

		var peopAttrArray = peopAttrResult.getOutput();
		if (peopAttrArray)
			{
			for (i in peopAttrArray)
				{
				if ( pAttributeName.equals(peopAttrArray[i].getAttributeName()) )
					{
					logDebug(&quot;Reference record for license &quot;+pLicNum+&quot;, attribute &quot;+pAttributeName+&quot;: &quot;+peopAttrArray[i].getAttributeValue());
					return peopAttrArray[i].getAttributeValue();
					}
				}
			logDebug(&quot;Reference record for license &quot;+pLicNum+&quot; has no attribute named &quot;+pAttributeName);
			return (&quot;ATTRIBUTE NOT FOUND&quot;);
			}
		else
			{
			logDebug(&quot;Reference record for license &quot;+pLicNum+&quot; has no custom attributes&quot;);
			return (&quot;ATTRIBUTE NOT FOUND&quot;);
			}
		}
	else
		{
		logDebug(&quot;Missing seq nbr or license type&quot;);
		return false;
		}
	}
 
function refLicProfGetDate (pLicNum, pDateType)
	{
	//Returns expiration date from reference licensed professional record.  Skips disabled reference licensed professionals.
	//pDateType parameter decides which date field is returned.  Options: &quot;EXPIRE&quot; (default), &quot;RENEW&quot;,&quot;ISSUE&quot;,&quot;BUSINESS&quot;,&quot;INSURANCE&quot;
	//Internal Functions needed: convertDate(), jsDateToMMDDYYYY()
	//07SSP-00033/SP5014  Edited for SR5054A.R70925
	//
	if (pDateType==null || pDateType==&quot;&quot;)
		var dateType = &quot;EXPIRE&quot;;
	else
		{
		var dateType = pDateType.toUpperCase();
		if ( !(dateType==&quot;ISSUE&quot; || dateType==&quot;RENEW&quot; || dateType==&quot;BUSINESS&quot; || dateType==&quot;INSURANCE&quot;) )
			dateType = &quot;EXPIRE&quot;;
		}

	if (pLicNum==null || pLicNum==&quot;&quot;)
		{
		logDebug(&quot;Invalid license number parameter&quot;);
		return (&quot;INVALID PARAMETER&quot;);
		}

	var newLic = getRefLicenseProf(pLicNum)

	if (newLic)
		{
		var jsExpDate = new Date();

 		if (dateType==&quot;EXPIRE&quot;)
			{
			if (newLic.getLicenseExpirationDate())
				{
				jsExpDate = convertDate(newLic.getLicenseExpirationDate());
				logDebug(pLicNum+&quot; License Expiration Date: &quot;+jsDateToMMDDYYYY(jsExpDate));
				return jsExpDate;
				}
			else
				{
				logDebug(&quot;Reference record for license &quot;+pLicNum+&quot; has no License Expiration Date&quot;);
				return (&quot;NO DATE FOUND&quot;);
				}
			}
		else if (dateType==&quot;INSURANCE&quot;)
			{
			if (newLic.getInsuranceExpDate())
				{
				jsExpDate = convertDate(newLic.getInsuranceExpDate());
				logDebug(pLicNum+&quot; Insurance Expiration Date: &quot;+jsDateToMMDDYYYY(jsExpDate));
				return jsExpDate;
				}
			else
				{
				logDebug(&quot;Reference record for license &quot;+pLicNum+&quot; has no Insurance Expiration Date&quot;);
				return (&quot;NO DATE FOUND&quot;);
				}
			}
		else if (dateType==&quot;BUSINESS&quot;)
			{
			if (newLic.getBusinessLicExpDate())
				{
				jsExpDate = convertDate(newLic.getBusinessLicExpDate());
				logDebug(pLicNum+&quot; Business Lic Expiration Date: &quot;+jsDateToMMDDYYYY(jsExpDate));
				return jsExpDate;
				}
			else
				{
				logDebug(&quot;Reference record for license &quot;+pLicNum+&quot; has no Business Lic Exp Date&quot;);
				return (&quot;NO DATE FOUND&quot;);
				}
			}
		else if (dateType==&quot;ISSUE&quot;)
			{
			if (newLic.getLicenseIssueDate())
				{
				jsExpDate = convertDate(newLic.getLicenseIssueDate());
				logDebug(pLicNum+&quot; License Issue Date: &quot;+jsDateToMMDDYYYY(jsExpDate));
				return jsExpDate;
				}
			else
				{
				logDebug(&quot;Reference record for license &quot;+pLicNum+&quot; has no Issue Date&quot;);
				return (&quot;NO DATE FOUND&quot;);
				}
			}
		else if (dateType==&quot;RENEW&quot;)
			{
			if (newLic.getLicenseLastRenewalDate())
				{
				jsExpDate = convertDate(newLic.getLicenseLastRenewalDate());
				logDebug(pLicNum+&quot; License Last Renewal Date: &quot;+jsDateToMMDDYYYY(jsExpDate));
				return jsExpDate;
				}
			else
				{
				logDebug(&quot;Reference record for license &quot;+pLicNum+&quot; has no Last Renewal Date&quot;);
				return (&quot;NO DATE FOUND&quot;);
				}
			}
		else
			return (&quot;NO DATE FOUND&quot;);
		}
	} 
  function removeASITable(tableName) // optional capId
  	{
	//  tableName is the name of the ASI table
	//  tableValues is an associative array of values.  All elements MUST be strings.
  	var itemCap = capId
	if (arguments.length &gt; 2) 
		itemCap = arguments[2]; // use cap ID specified in args

	var tssmResult = aa.appSpecificTableScript.getAppSpecificTableModel(itemCap,tableName)
	
	if (!tssmResult.getSuccess())
		{ logDebug(&quot;**WARNING: error retrieving app specific table &quot; + tableName + &quot; &quot; + tssmResult.getErrorMessage()) ; return false }
		
	var tssm = tssmResult.getOutput();
	var tsm = tssm.getAppSpecificTableModel();
	var fld = tsm.getTableField();
	
	tsm.getColumns().clear();

	tsm.setTableField(fld);
	
	var addResult = aa.appSpecificTableScript.editAppSpecificTableInfos(tsm, itemCap, currentUserID);
	
	// Even when this works it gives an error of &quot;0&quot;
	//if (!addResult .getSuccess())
	//	{ logDebug(&quot;**WARNING: error removing all rows from ASI Table:  &quot; + tableName + &quot; &quot; + addResult.getErrorMessage()) ; return false }
	//else
		logDebug(&quot;Successfully removed all rows from ASI Table: &quot; + tableName);

	}



 
function removeCapCondition(cType,cDesc)
	{
	var itemCap = capId;
	if (arguments.length == 3) itemCap = arguments[2]; // use cap ID specified in args

	var capCondResult = aa.capCondition.getCapConditions(itemCap,cType);

	if (!capCondResult.getSuccess())
		{logDebug(&quot;**WARNING: error getting cap conditions : &quot; + capCondResult.getErrorMessage()) ; return false }
	
	var ccs = capCondResult.getOutput();
		for (pc1 in ccs)
			{
			if (ccs[pc1].getConditionDescription().equals(cDesc))
				{
				var rmCapCondResult = aa.capCondition.deleteCapCondition(itemCap,ccs[pc1].getConditionNumber()); 
				if (rmCapCondResult.getSuccess())
					logDebug(&quot;Successfully removed condition to CAP : &quot; + itemCap + &quot;  (&quot; + cType + &quot;) &quot; + cDesc);
				else
					logDebug( &quot;**ERROR: removing condition to Parcel &quot; + parcelNum + &quot;  (&quot; + cType + &quot;): &quot; + addParcelCondResult.getErrorMessage());
				}
			}
	}

 

function removeFee(fcode,fperiod) // Removes all fee items for a fee code and period
	{
	getFeeResult = aa.finance.getFeeItemByFeeCode(capId,fcode,fperiod);
	if (getFeeResult.getSuccess())
		{	
		var feeList = getFeeResult.getOutput();
		for (feeNum in feeList)
			{
			if (feeList[feeNum].getFeeitemStatus().equals(&quot;NEW&quot;)) 
				{
				var feeSeq = feeList[feeNum].getFeeSeqNbr();
				
				var editResult = aa.finance.removeFeeItem(capId, feeSeq);
				if (editResult.getSuccess())
					{
					logDebug(&quot;Removed existing Fee Item: &quot; + fcode);
					}
				else
					{ logDebug( &quot;**ERROR: removing fee item (&quot; + fcode + &quot;): &quot; + editResult.getErrorMessage()); break }
				}
			if (feeList[feeNum].getFeeitemStatus().equals(&quot;INVOICED&quot;))
				{
				logDebug(&quot;Invoiced fee &quot;+fcode+&quot; found, not removed&quot;);
				}
			}
		}		
	else
		{ logDebug( &quot;**ERROR: getting fee items (&quot; + fcode + &quot;): &quot; + getFeeResult.getErrorMessage())}
	
	}

 
function removeParcelCondition(parcelNum,cType,cDesc)
//if parcelNum is null, condition is added to all parcels on CAP
	{
	if (!parcelNum)
		{
		var capParcelResult = aa.parcel.getParcelandAttribute(capId,null);
		if (capParcelResult.getSuccess())
			{
			var Parcels = capParcelResult.getOutput().toArray();
			for (zz in Parcels)
				{
				parcelNum = Parcels[zz].getParcelNumber()
				logDebug(&quot;Adding Condition to parcel #&quot; + zz + &quot; = &quot; + parcelNum);
				var pcResult = aa.parcelCondition.getParcelConditions(parcelNum);
				if (!pcResult.getSuccess())
					{ logDebug(&quot;**WARNING: error getting parcel conditions : &quot; + pcResult.getErrorMessage()) ; return false }
				var pcs = pcResult.getOutput();
				for (pc1 in pcs)
					{
					if (pcs[pc1].getConditionType().equals(cType) &amp;&amp; pcs[pc1].getConditionDescription().equals(cDesc))
						{
						var rmParcelCondResult = aa.parcelCondition.removeParcelCondition(pcs[pc1].getConditionNumber(),parcelNum); 
						if (rmParcelCondResult.getSuccess())
							logDebug(&quot;Successfully removed condition to Parcel &quot; + parcelNum + &quot;  (&quot; + cType + &quot;) &quot; + cDesc);
						}
					else
						logDebug( &quot;**ERROR: removing condition to Parcel &quot; + parcelNum + &quot;  (&quot; + cType + &quot;): &quot; + addParcelCondResult.getErrorMessage());
					}
				}
			}
		}
	else
		{
		var pcResult = aa.parcelCondition.getParcelConditions(parcelNum);
		if (!pcResult.getSuccess())
			{ logDebug(&quot;**WARNING: error getting parcel conditions : &quot; + pcResult.getErrorMessage()) ; return false }
		var pcs = pcResult.getOutput();
		for (pc1 in pcs)
			{
			if (pcs[pc1].getConditionType().equals(cType) &amp;&amp; pcs[pc1].getConditionDescription().equals(cDesc))
				{
				var rmParcelCondResult = aa.parcelCondition.removeParcelCondition(pcs[pc1].getConditionNumber(),parcelNum); 
			        if (rmParcelCondResult.getSuccess())
					logDebug(&quot;Successfully removed condition to Parcel &quot; + parcelNum + &quot;  (&quot; + cType + &quot;) &quot; + cDesc);
				}
			else
				logDebug( &quot;**ERROR: removing condition to Parcel &quot; + parcelNum + &quot;  (&quot; + cType + &quot;): &quot; + addParcelCondResult.getErrorMessage());
			}
		}
	}

 


function replaceNode(fString,fName,fContents)
	{
	 var fValue = &quot;&quot;;
	var startTag = &quot;&lt;&quot;+fName+&quot;&gt;&quot;;
	 var endTag = &quot;&lt;/&quot;+fName+&quot;&gt;&quot;;

		 startPos = fString.indexOf(startTag) + startTag.length;
		 endPos = fString.indexOf(endTag);
		 // make sure startPos and endPos are valid before using them
		 if (startPos &gt; 0 &amp;&amp; startPos &lt;= endPos)
		 		{
				  fValue = fString.substring(0,startPos) + fContents + fString.substring(endPos);
 					return unescape(fValue);
			}

	}

 
function resultInspection(inspType,inspStatus,resultDate,resultComment)  //optional capId
	{
	var itemCap = capId
	if (arguments.length &gt; 4) itemCap = arguments[4]; // use cap ID specified in args

	var foundID;
	var inspResultObj = aa.inspection.getInspections(itemCap);
	if (inspResultObj.getSuccess())
		{
		var inspList = inspResultObj.getOutput();
		for (xx in inspList)
			if (String(inspType).equals(inspList[xx].getInspectionType()) &amp;&amp; inspList[xx].getInspectionStatus().toUpperCase().equals(&quot;SCHEDULED&quot;))
				foundID = inspList[xx].getIdNumber();
		}

	if (foundID)
		{
		resultResult = aa.inspection.resultInspection(itemCap, foundID, inspStatus, resultDate, resultComment, currentUserID)

		if (resultResult.getSuccess())
			logDebug(&quot;Successfully resulted inspection: &quot; + inspType + &quot; to Status: &quot; + inspStatus)
		else
			logDebug(&quot;**WARNING could not result inspection : &quot; + inspType + &quot;, &quot; + resultResult.getErrorMessage())
		}
	else
			logDebug(&quot;Could not result inspection : &quot; + inspType + &quot;, not scheduled&quot;)

	}

 
function scheduleInspectDate(iType,DateToSched) // optional inspector ID. 
// DQ - Added Optional 4th parameter inspTime Valid format is HH12:MIAM or AM (SR5110)
// DQ - Added Optional 5th parameter inspComm 
	{
	var inspectorObj = null;
	var inspTime = null;
	var inspComm = &quot;Scheduled via Script&quot;;
	if (arguments.length &gt;= 3) 
		if (arguments[2] != null)
		{
		var inspRes = aa.person.getUser(arguments[2])
		if (inspRes.getSuccess())
			inspectorObj = inspRes.getOutput();
		}
	
        if (arguments.length &gt;= 4)
            if(arguments[3] != null)
		        inspTime = arguments[3];
		        
		if (arguments.length &gt;= 5)
		    if(arguments[4] != null)
		        inspComm = arguments[4];

	var schedRes = aa.inspection.scheduleInspection(capId, inspectorObj, aa.date.parseDate(DateToSched), inspTime, iType, inspComm)
	
	if (schedRes.getSuccess())
		logDebug(&quot;Successfully scheduled inspection : &quot; + iType + &quot; for &quot; + DateToSched);
	else
		logDebug( &quot;**ERROR: adding scheduling inspection (&quot; + iType + &quot;): &quot; + schedRes.getErrorMessage());
	}

 
function scheduleInspection(iType,DaysAhead) // optional inspector ID.  This function requires dateAdd function
	{
	// DQ - Added Optional 4th parameter inspTime Valid format is HH12:MIAM or AM (SR5110) 
	// DQ - Added Optional 5th parameter inspComm ex. to call without specifying other options params scheduleInspection(&quot;Type&quot;,5,null,null,&quot;Schedule Comment&quot;);
	var inspectorObj = null;
	var inspTime = null;
	var inspComm = &quot;Scheduled via Script&quot;;
	if (arguments.length &gt;= 3) 
		if (arguments[2] != null)
		{
		var inspRes = aa.person.getUser(arguments[2])
		if (inspRes.getSuccess())
			var inspectorObj = inspRes.getOutput();
		}

	if (arguments.length &gt;= 4)
	    if (arguments[3] != null)
		    inspTime = arguments[3];
	
	if (arguments.length == 5)
	    if (arguments[4] != null)
	        inspComm = arguments[4];

	var schedRes = aa.inspection.scheduleInspection(capId, inspectorObj, aa.date.parseDate(dateAdd(null,DaysAhead)), inspTime, iType, inspComm)
	
	if (schedRes.getSuccess())
		logDebug(&quot;Successfully scheduled inspection : &quot; + iType + &quot; for &quot; + dateAdd(null,DaysAhead));
	else
		logDebug( &quot;**ERROR: adding scheduling inspection (&quot; + iType + &quot;): &quot; + schedRes.getErrorMessage());
	}

 

function searchProject(pProjType,pSearchType) 
{
	// Searches Related Caps
	// pProjType = Application type marking highest point to search.  Ex. Building/Project/NA/NA
	// pSearchType = Application type to search for. Ex. Building/Permit/NA/NA 
	// Returns CapID array of all unique matching SearchTypes
	
    var i = 1;
	var typeArray;
	var duplicate = false;
	var childArray = new Array();
	var tempArray = new Array();
	var temp2Array = new Array();
	var searchArray = new Array();
	var childrenFound = false;
	var isMatch;
        while (true)
        {
	 if (!(aa.cap.getProjectParents(capId,i).getSuccess()))
             break;
         i += 1;
        }
        i -= 1;

	getCapResult = aa.cap.getProjectParents(capId,i);
        myArray = new Array();
	myOutArray = new Array();
	
	if(pProjType != null)
	{
		var typeArray = pProjType.split(&quot;/&quot;);
		if (typeArray.length != 4)
			logDebug(&quot;**ERROR in childGetByCapType function parameter.  The following cap type parameter is incorrectly formatted: &quot; + pCapType);
	}

	if (getCapResult.getSuccess())
	{
		parentArray = getCapResult.getOutput();
		if (parentArray.length)
		{
			for(x in parentArray)
				childTypeArray = parentArray[x].getCapType().toString().split(&quot;/&quot;);
				isMatch = true;
				for (yy in childTypeArray) //looking for matching cap type
				{
				if (!typeArray[yy].equals(childTypeArray[yy]) &amp;&amp; !typeArray[yy].equals(&quot;*&quot;))
					{
						isMatch = false;
						break;	 
					}
				}
				if(isMatch)
					myArray.push(parentArray[x].getCapID());
		}
	}

	if (!myArray.length)
		return childArray;

	searchArray = myArray;
	var temp = &quot;&quot;


	if(pSearchType != null)
	{
		typeArray = pSearchType.split(&quot;/&quot;);
		if (typeArray.length != 4)
			logDebug(&quot;**ERROR in childGetByCapType function parameter.  The following cap type parameter is incorrectly formatted: &quot; + pSearchType);
	}


	while (true)
		{
			for(x in searchArray)
				{
					tempArray = getChildren(&quot;*/*/*/*&quot;,searchArray[x]);
					if (tempArray == null)
						continue;
					for(y in tempArray)
						{
							duplicate = false;
							for(z in childArray)
							{
								if ( childArray[z].getCustomID().equals(tempArray[y].getCustomID()) )
									{duplicate = true; break;}
							}			
							if (!duplicate)
							{
								temp2Array.push(tempArray[y]);
								if(!capId.getCustomID().equals(tempArray[y].getCustomID()))
								{
									var chkTypeArray = aa.cap.getCap(tempArray[y]).getOutput().getCapType().toString().split(&quot;/&quot;);
									isMatch = true;
									for (p in chkTypeArray) //looking for matching cap type
									{
										if (typeArray[p] != chkTypeArray[p] &amp;&amp; typeArray[p] != &quot;*&quot;)
										{
											isMatch = false;
											break;
										}
									}
									if(isMatch)
										{childArray.push(tempArray[y]);}
								}		 
							}
						}

				}

			if(temp2Array.length)
				searchArray = temp2Array;
			else
				break;
			temp2Array = new Array();
		}
	return childArray;
}

 
function setIVR(ivrnum)
	{
	capModel = cap.getCapModel();
	capIDModel = capModel.getCapID();
	 
	capModel.setCapID(capIDModel);
	 
	aa.cap.editCapByPK(capModel);
	
	// new a CapScriptModel 
	var scriptModel = aa.cap.newCapScriptModel().getOutput();

	// get a new CapModel 
	var capModel = scriptModel.getCapModel(); 
	var capIDModel = capModel.getCapID(); 

	capIDModel.setServiceProviderCode(scriptModel.getServiceProviderCode()); 
	capIDModel.setID1(aa.env.getValue(&quot;PermitId1&quot;)); 
	capIDModel.setID2(aa.env.getValue(&quot;PermitId2&quot;)); 
	capIDModel.setID3(aa.env.getValue(&quot;PermitId3&quot;)); 

	capModel.setTrackingNbr(ivrnum);
	capModel.setCapID(capIDModel); 

	// update tracking number 
	aa.cap.editCapByPK(capModel); 
	comment(&quot;IVR Tracking Number updated to &quot; + ivrnum);
	}


 
function taskCloseAllExcept(pStatus,pComment) 
	{
	// Closes all tasks in CAP with specified status and comment
	// Optional task names to exclude
	// 06SSP-00152
	//
	var taskArray = new Array();
	var closeAll = false;
	if (arguments.length &gt; 2) //Check for task names to exclude
		{
		for (var i=2; i&lt;arguments.length; i++)
			taskArray.push(arguments[i]);
		}
	else
		closeAll = true;

	var workflowResult = aa.workflow.getTasks(capId);
 	if (workflowResult.getSuccess())
  	 	var wfObj = workflowResult.getOutput();
  else
  	{ 
		logMessage(&quot;**ERROR: Failed to get workflow object: &quot; + workflowResult.getErrorMessage()); 
		return false; 
		}
	
	var fTask;
	var stepnumber;
	var processID;
	var dispositionDate = aa.date.getCurrentDate();
	var wfnote = &quot; &quot;;
	var wftask;
	
	for (i in wfObj)
		{
   	fTask = wfObj[i];
		wftask = fTask.getTaskDescription();
		stepnumber = fTask.getStepNumber();
		//processID = fTask.getProcessID();
		if (closeAll)
			{
			aa.workflow.handleDisposition(capId,stepnumber,pStatus,dispositionDate,wfnote,pComment,systemUserObj,&quot;Y&quot;);
			logMessage(&quot;Closing Workflow Task &quot; + wftask + &quot; with status &quot; + pStatus);
			logDebug(&quot;Closing Workflow Task &quot; + wftask + &quot; with status &quot; + pStatus);
			}
		else
			{
			if (!exists(wftask,taskArray))
				{
				aa.workflow.handleDisposition(capId,stepnumber,pStatus,dispositionDate,wfnote,pComment,systemUserObj,&quot;Y&quot;);
				logMessage(&quot;Closing Workflow Task &quot; + wftask + &quot; with status &quot; + pStatus);
				logDebug(&quot;Closing Workflow Task &quot; + wftask + &quot; with status &quot; + pStatus);
				}
			}
		}
	}

 
function taskStatus(wfstr) // optional process name and capID
	{
	var useProcess = false;
	var processName = &quot;&quot;;
	var itemCap = capId;
	if (arguments.length &gt;= 2)
		{
		processName = arguments[1]; // subprocess
		if (processName) useProcess = true;
		}

	if (arguments.length == 3) itemCap = arguments[2]; // use cap ID specified in args



	var workflowResult = aa.workflow.getTasks(itemCap);
 	if (workflowResult.getSuccess())
  	 	var wfObj = workflowResult.getOutput();
  	else
  	  	{ logMessage(&quot;**ERROR: Failed to get workflow object: &quot; + workflowResult.getErrorMessage()); return false; }

	for (i in wfObj)
		{
   		var fTask = wfObj[i];
 		if (fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase())  &amp;&amp; (!useProcess || fTask.getProcessCode().equals(processName)))
			return fTask.getDisposition()
		}
	}

 
function taskStatusDate(wfstr) // optional process name, capId
	{
    
    var itemCap = capId;
	if (arguments.length == 3) itemCap = arguments[2]; // use cap ID specified in args

	var useProcess = false;
	var processName = &quot;&quot;;
	if (arguments.length &gt; 1 &amp;&amp; arguments[1] != null) 
		{
		processName = arguments[1]; // subprocess
		useProcess = true;
		}

	var workflowResult = aa.workflow.getTasks(itemCap);
 	if (workflowResult.getSuccess())
  	 	var wfObj = workflowResult.getOutput();
  	else
  	  	{ logMessage(&quot;**ERROR: Failed to get workflow object: &quot; + wfObj.getErrorMessage()); return false; }
	
	for (i in wfObj)
		{
   		var fTask = wfObj[i];
 		if (fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase())  &amp;&amp; (!useProcess || fTask.getProcessCode().equals(processName)))
			return &quot;&quot;+(fTask.getStatusDate().getMonth()+1)+&quot;/&quot;+fTask.getStatusDate().getDate()+&quot;/&quot;+(parseInt(fTask.getStatusDate().getYear())+1900);
		}
	} 
function transferFunds(parentAppNum,dollarAmount) 
// does fund transfer from current app to parentAppNum, but only if current app has enough non-applied funds
// needs function paymentGetNotAppliedTot()
	{
	//validate dollarAmount is number 
	var checkNum = parseFloat(dollarAmount);
	if (isNaN(checkNum))
		{
		logDebug(&quot;dollarAmount parameter is not a number, no funds will be transferred&quot;);
		return false;
		}

	//check that enough non-applied funds are available
	var fundsAvail = paymentGetNotAppliedTot();
	if (fundsAvail &lt; parseFloat(dollarAmount))
		{
		logDebug(&quot;Insufficient funds $&quot;+fundsAvail.toString()+ &quot; available. Fund transfer of $&quot;+dollarAmount.toString()+&quot; not done.&quot;);
		logMessage(&quot;Insufficient funds available. No funds transferred.&quot;);
		return false;
		}

	//enough funds - proceed with transfer
	var getCapResult = aa.cap.getCapID(parentAppNum);
	if (getCapResult.getSuccess())
		{
		var parentId = getCapResult.getOutput();
		
		var xferResult = aa.finance.makeFundTransfer(capId, parentId, currentUserID, &quot;&quot;, &quot;&quot;, sysDate, sysDate, &quot;&quot;, sysDate, dollarAmount, &quot;NA&quot;, &quot;Fund Transfer&quot;, &quot;NA&quot;, &quot;R&quot;, null, &quot;&quot;, &quot;NA&quot;, &quot;&quot;);

		
		if (xferResult.getSuccess())
			logDebug(&quot;Successfully did fund transfer to : &quot; + parentAppNum);
		else
			logDebug( &quot;**ERROR: doing fund transfer to (&quot; + parentAppNum + &quot;): &quot; + xferResult.getErrorMessage());
		}
	else
		{ 
		logDebug( &quot;**ERROR: getting parent cap id (&quot; + parentAppNum + &quot;): &quot; + getCapResult.getErrorMessage()) 
		}
	}

 
function updateAppStatus(stat,cmt) // optional cap id
	{
	
	var itemCap = capId;
	if (arguments.length == 3) itemCap = arguments[2]; // use cap ID specified in args

	var updateStatusResult = aa.cap.updateAppStatus(itemCap,&quot;APPLICATION&quot;,stat, sysDate, cmt ,systemUserObj);
	if (updateStatusResult.getSuccess())
		logDebug(&quot;Updated application status to &quot; + stat + &quot; successfully.&quot;);
	else
		logDebug(&quot;**ERROR: application status update to &quot; + stat + &quot; was unsuccessful.  The reason is &quot;  + updateStatusResult.getErrorType() + &quot;:&quot; + updateStatusResult.getErrorMessage());
	}

 
function updateFee(fcode,fsched,fperiod,fqty,finvoice,pDuplicate,pFeeSeq) 
	{
    // Updates an assessed fee with a new Qty.  If not found, adds it; else if invoiced fee found, adds another with adjusted qty.
    // optional param pDuplicate -if &quot;N&quot;, won't add another if invoiced fee exists (SR5085)
    // Script will return fee sequence number if new fee is added otherwise it will return null (SR5112)
    // Optional param pSeqNumber, Will attempt to update the specified Fee Sequence Number or Add new (SR5112)
        
    // If optional argument is blank, use default logic (i.e. allow duplicate fee if invoiced fee is found)        
    if ( pDuplicate==null || pDuplicate.length==0 )
        pDuplicate = &quot;Y&quot;;
    else
        pDuplicate = pDuplicate.toUpperCase();
        
    var invFeeFound=false;    
    var adjustedQty=fqty;
    var feeSeq = null;
	feeUpdated = false;

	if(pFeeSeq == null)
		getFeeResult = aa.finance.getFeeItemByFeeCode(capId,fcode,fperiod);
	else
		getFeeResult = aa.finance.getFeeItemByPK(capId,pFeeSeq);


	if (getFeeResult.getSuccess())
		{
		if(pFeeSeq == null)
			var feeList = getFeeResult.getOutput();
		else
		     {
			var feeList = new Array();
			feeList[0] = getFeeResult.getOutput();
		     }
		for (feeNum in feeList)
			if (feeList[feeNum].getFeeitemStatus().equals(&quot;INVOICED&quot;))
				{
                    if (pDuplicate==&quot;Y&quot;)
                        {
                        logDebug(&quot;Invoiced fee &quot;+fcode+&quot; found, subtracting invoiced amount from update qty.&quot;);
        				adjustedQty = fqty - feeList[feeNum].getFeeUnit();
                        invFeeFound=true;
                        }
                    else
                        {
                        invFeeFound=true;
                        logDebug(&quot;Invoiced fee &quot;+fcode+&quot; found.  Not updating this fee. Not assessing new fee &quot;+fcode);
                        }
				}

		for (feeNum in feeList)
			if (feeList[feeNum].getFeeitemStatus().equals(&quot;NEW&quot;) &amp;&amp; !feeUpdated)  // update this fee item
				{
				var feeSeq = feeList[feeNum].getFeeSeqNbr();
				var editResult = aa.finance.editFeeItemUnit(capId, fqty, feeSeq);
				feeUpdated = true;
				if (editResult.getSuccess())
					{
					logDebug(&quot;Updated Qty on Existing Fee Item: &quot; + fcode + &quot; to Qty: &quot; + fqty);
					if (finvoice == &quot;Y&quot;)
						{
						feeSeqList.push(feeSeq);
						paymentPeriodList.push(fperiod);
						}
					}
				else
					{ logDebug( &quot;**ERROR: updating qty on fee item (&quot; + fcode + &quot;): &quot; + editResult.getErrorMessage()); break }
				}
		}
	else
		{ logDebug( &quot;**ERROR: getting fee items (&quot; + fcode + &quot;): &quot; + getFeeResult.getErrorMessage())}

    // Add fee if no fee has been updated OR invoiced fee already exists and duplicates are allowed
	if ( !feeUpdated &amp;&amp; adjustedQty != 0 &amp;&amp; (!invFeeFound || invFeeFound &amp;&amp; pDuplicate==&quot;Y&quot;) ) 
		feeSeq = addFee(fcode,fsched,fperiod,adjustedQty,finvoice);
	else
		feeSeq = null;
			
	return feeSeq;
	} 

function updateShortNotes(newSN) // option CapId
	{
	var itemCap = capId
	if (arguments.length &gt; 1) itemCap = arguments[1]; // use cap ID specified in args

	var cdScriptObjResult = aa.cap.getCapDetail(itemCap);
	if (!cdScriptObjResult.getSuccess())
		{ logDebug(&quot;**ERROR: No cap detail script object : &quot; + cdScriptObjResult.getErrorMessage()) ; return false; }

	var cdScriptObj = cdScriptObjResult.getOutput();

	if (!cdScriptObj)
		{ logDebug(&quot;**ERROR: No cap detail script object&quot;) ; return false; }

	cd = cdScriptObj.getCapDetailModel();

	cd.setShortNotes(newSN);

	cdWrite = aa.cap.editCapDetail(cd)

	if (cdWrite.getSuccess())
		{ logDebug(&quot;updated short notes to &quot; + newSN) }
	else
		{ logDebug(&quot;**ERROR writing capdetail : &quot; + cdWrite.getErrorMessage()) ; return false ; }
	} 
function updateTask(wfstr,wfstat,wfcomment,wfnote) // optional process name, cap id
	{
	var useProcess = false;
	var processName = &quot;&quot;;
	if (arguments.length &gt; 4) 
		{
		if (arguments[4] != &quot;&quot;)
			{
			processName = arguments[4]; // subprocess
			useProcess = true;
			}
		}
	var itemCap = capId;
	if (arguments.length == 6) itemCap = arguments[5]; // use cap ID specified in args
 
	var workflowResult = aa.workflow.getTasks(itemCap);
	if (workflowResult.getSuccess())
		var wfObj = workflowResult.getOutput();
	else
	{ logMessage(&quot;**ERROR: Failed to get workflow object: &quot; + s_capResult.getErrorMessage()); return false; }
            
	if (!wfstat) wfstat = &quot;NA&quot;;
            
	for (i in wfObj)
		{
		var fTask = wfObj[i];
		if (fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase())  &amp;&amp; (!useProcess || fTask.getProcessCode().equals(processName)))
			{
			var dispositionDate = aa.date.getCurrentDate();
			var stepnumber = fTask.getStepNumber();
			var processID = fTask.getProcessID();
			if (useProcess)
				aa.workflow.handleDisposition(itemCap,stepnumber,processID,wfstat,dispositionDate, wfnote,wfcomment,systemUserObj,&quot;U&quot;);
			else
				aa.workflow.handleDisposition(itemCap,stepnumber,wfstat,dispositionDate,wfnote,wfcomment,systemUserObj,&quot;U&quot;);
			logMessage(&quot;Updating Workflow Task &quot; + wfstr + &quot; with status &quot; + wfstat);
			logDebug(&quot;Updating Workflow Task &quot; + wfstr + &quot; with status &quot; + wfstat);
			}                                   
		}
	}

 

function updateTaskAssignedDate(wfstr,wfAssignDate) // optional process name
	{
	// Update the task assignment date
	//
	var useProcess = false;
	var processName = &quot;&quot;;
	if (arguments.length == 3)
		{
		processName = arguments[2]; // subprocess
		useProcess = true;
		}



	var workflowResult = aa.workflow.getTasks(capId);
 	if (workflowResult.getSuccess())
  	 	var wfObj = workflowResult.getOutput();
  	else
  	  	{ logDebug(&quot;**ERROR: Failed to get workflow object: &quot; + s_capResult.getErrorMessage()); return false; }

	for (i in wfObj)
		{
   		var fTask = wfObj[i];
 		if (fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase())  &amp;&amp; (!useProcess || fTask.getProcessCode().equals(processName)))
			{
                        var assignDate = aa.util.now();
                        var tempDate = new Date(wfAssignDate);
                        assignDate.setTime(tempDate.getTime())
			if (assignDate)
				{
				var taskItem = fTask.getTaskItem();
				taskItem.setAssignmentDate(assignDate);

				var adjustResult = aa.workflow.adjustTaskWithNoAudit(taskItem);
                                if (adjustResult.getSuccess())
              				logDebug(&quot;Updated Workflow Task : &quot; + wfstr + &quot; Assigned Date to &quot; + wfAssignDate);
                                else
                                        logDebug(&quot;Error updating wfTask : &quot; + adjustResult.getErrorMessage());
				}
			else
				logDebug(&quot;Couldn't update assigned date.  Invalid date : &quot; + wfAssignDate);
			}
		}
	}



 
	
function updateWorkDesc(newWorkDes)  // optional CapId
	{
	 var itemCap = capId
	if (arguments.length &gt; 1) itemCap = arguments[1]; // use cap ID specified in args
	

	var workDescResult = aa.cap.getCapWorkDesByPK(itemCap);
	var workDesObj;
	
	if (!workDescResult.getSuccess())
		{
		aa.print(&quot;**ERROR: Failed to get work description: &quot; + workDescResult.getErrorMessage()); 
		return false;
		}
		
	var workDesScriptObj = workDescResult.getOutput();
	if (workDesScriptObj)
		workDesObj = workDesScriptObj.getCapWorkDesModel() 
	else
		{
		aa.print(&quot;**ERROR: Failed to get workdes Obj: &quot; + workDescResult.getErrorMessage()); 
		return false;
		}
	
	
	workDesObj.setDescription(newWorkDes);
	aa.cap.editCapWorkDes(workDesObj);
	
	aa.print(&quot;Updated Work Description to : &quot; + newWorkDes);
		
	}	
 
function validateGisObjects()
	{
	// returns true if the app has GIS objects that validate in GIS
	//
	var gisObjResult = aa.gis.getCapGISObjects(capId); // get gis objects on the cap
	if (gisObjResult.getSuccess()) 	
		var fGisObj = gisObjResult.getOutput();
	else
		{ logDebug(&quot;**ERROR: Getting GIS objects for Cap.  Reason is: &quot; + gisObjResult.getErrorType() + &quot;:&quot; + gisObjResult.getErrorMessage()) ; return false }

	for (a1 in fGisObj) // for each GIS object on the Cap
		{
		var gischk = aa.gis.getGISObjectAttributes(fGisObj[a1]);

		if (gischk.getSuccess())
			var gisres = gischk.getOutput();
		else
			{ logDebug(&quot;**ERROR: Retrieving GIS Attributes.  Reason is: &quot; + gischk.getErrorType() + &quot;:&quot; + gischk.getErrorMessage()) ; return false }	
		
		if (gisres != null)
			return true;  // we have a gis object from GIS
		}
	}

 
function workDescGet(pCapId)
	{
	//Gets work description
	//07SSP-00037/SP5017
	//
	var workDescResult = aa.cap.getCapWorkDesByPK(pCapId);
	
	if (!workDescResult.getSuccess())
		{
		logMessage(&quot;**ERROR: Failed to get work description: &quot; + workDescResult.getErrorMessage()); 
		return false;
		}
		
	var workDescObj = workDescResult.getOutput();
	var workDesc = workDescObj.getDescription();
	
	return workDesc;
	}
	 
function zeroPad(num,count)
{ 
var numZeropad = num + '';
while(numZeropad.length &lt; count) {

numZeropad = &quot;0&quot; + numZeropad; 
}
return numZeropad;
}