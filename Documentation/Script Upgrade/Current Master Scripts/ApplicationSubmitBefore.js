/*------------------------------------------------------------------------------------------------------/
| SVN $Id: ApplicationSubmitBefore.js 3600 2008-10-27 21:36:24Z dane.quatacker $
| Program : ApplicationSubmitBeforeV1.5.js
| Event   : ApplicationSubmitBefore
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
var showMessage = false;			// Set to true to see results in popup window
var showDebug = true;				// Set to true to see debug messages in popup window
var controlString = &quot;ApplicationSubmitBefore&quot;; 	// Standard choice for control
var preExecute = &quot;PreExecuteForBeforeEvents&quot;
var cancel = false ; 				// Setting cancel to true in standard choices will cancel the event
var documentOnly = false;			// Document Only -- displays hierarchy of std choice steps
var disableTokens = false;			// turn off tokenizing of App Specific and Parcel Attributes
var useAppSpecificGroupName = false;		// Use Group name when populating App Specific Info Values
var useTaskSpecificGroupName = false;		// Use Group name when populating Task Specific Info Values
var enableVariableBranching = false;					// Allows use of variable names in branching.  Branches are not followed in Doc Only
var maxEntries = 99;				// Maximum number of std choice entries.  Must be Left Zero Padded
/*------------------------------------------------------------------------------------------------------/
| END User Configurable Parameters
/------------------------------------------------------------------------------------------------------*/
var startDate = new Date();
var startTime = startDate.getTime();
var message =	&quot;&quot;;					// Message String
var debug = &quot;&quot;;
var br = &quot;&lt;BR&gt;&quot;;					// Break Tag

if (documentOnly) {
	doStandardChoiceActions(controlString,false,0);
	aa.env.setValue(&quot;ScriptReturnCode&quot;, &quot;0&quot;);
	aa.env.setValue(&quot;ScriptReturnMessage&quot;, &quot;Documentation Successful.  No actions executed.&quot;);
	aa.abortScript();
	}

logDebug(&quot;&lt;B&gt;EMSE Script Results&lt;/B&gt;&quot;);

/*------------------------------------------------------------------------------------------------------/
| BEGIN Event Specific Variables
/------------------------------------------------------------------------------------------------------*/

var AdditionalInfoBuildingCount 	= aa.env.getValue(&quot;AdditionalInfoBuildingCount&quot;);
var AdditionalInfoConstructionTypeCode 	= aa.env.getValue(&quot;AdditionalInfoConstructionTypeCode&quot;);
var AdditionalInfoHouseCount 		= aa.env.getValue(&quot;AdditionalInfoHouseCount&quot;);
var AdditionalInfoPublicOwnedFlag 	= aa.env.getValue(&quot;AdditionalInfoPublicOwnedFlag&quot;);
var AdditionalInfoValuation 		= aa.env.getValue(&quot;AdditionalInfoValuation&quot;);
var AdditionalInfoWorkDescription 	= aa.env.getValue(&quot;AdditionalInfoWorkDescription&quot;);
var AddressCity 			= aa.env.getValue(&quot;AddressCity&quot;);
var AddressHouseFraction 		= aa.env.getValue(&quot;AddressHouseFraction&quot;);
var AddressHouseNumber 			= aa.env.getValue(&quot;AddressHouseNumber&quot;);
var AddressPrimaryFlag 			= aa.env.getValue(&quot;AddressPrimaryFlag&quot;);
var AddressState 			= aa.env.getValue(&quot;AddressState&quot;);
var AddressStreetDirection 		= aa.env.getValue(&quot;AddressStreetDirection&quot;);
var AddressStreetName 			= aa.env.getValue(&quot;AddressStreetName&quot;);
var AddressStreetSuffix 		= aa.env.getValue(&quot;AddressStreetSuffix&quot;);
var AddressUnitNumber 			= aa.env.getValue(&quot;AddressUnitNumber&quot;);
var AddressUnitType 			= aa.env.getValue(&quot;AddressUnitType&quot;);
var AddressValidatedNumber 		= aa.env.getValue(&quot;AddressValidatedNumber&quot;);
var AddressZip 				= aa.env.getValue(&quot;AddressZip&quot;);
var AppSpecificInfoModels 		= aa.env.getValue(&quot;AppSpecificInfoModels&quot;);
var ApplicantAddressLine1 		= aa.env.getValue(&quot;ApplicantAddressLine1&quot;);
var ApplicantAddressLine2 		= aa.env.getValue(&quot;ApplicantAddressLine2&quot;);
var ApplicantAddressLine3 		= aa.env.getValue(&quot;ApplicantAddressLine3&quot;);
var ApplicantBusinessName 		= aa.env.getValue(&quot;ApplicantBusinessName&quot;);
var ApplicantCity 			= aa.env.getValue(&quot;ApplicantCity&quot;);
var ApplicantContactType 		= aa.env.getValue(&quot;ApplicantContactType&quot;);
var ApplicantCountry 			= aa.env.getValue(&quot;ApplicantCountry&quot;);
var ApplicantEmail 			= aa.env.getValue(&quot;ApplicantEmail&quot;);
var ApplicantFirstName 			= aa.env.getValue(&quot;ApplicantFirstName&quot;);
var ApplicantId 			= aa.env.getValue(&quot;ApplicantId&quot;);
var ApplicantLastName 			= aa.env.getValue(&quot;ApplicantLastName&quot;);
var ApplicantMiddleName 		= aa.env.getValue(&quot;ApplicantMiddleName&quot;);
var ApplicantPhone1 			= aa.env.getValue(&quot;ApplicantPhone1&quot;);
var ApplicantPhone2 			= aa.env.getValue(&quot;ApplicantPhone2&quot;);
var ApplicantRelation 			= aa.env.getValue(&quot;ApplicantRelation&quot;);
var ApplicantState 			= aa.env.getValue(&quot;ApplicantState&quot;);
var ApplicantZip 			= aa.env.getValue(&quot;ApplicantZip&quot;);
var ApplicationSubmitMode 		= aa.env.getValue(&quot;ApplicationSubmitMode&quot;);
var ApplicationName 			= aa.env.getValue(&quot;AppSpecialText&quot;);
var ApplicationTypeLevel1 		= aa.env.getValue(&quot;ApplicationTypeLevel1&quot;);
var ApplicationTypeLevel2 		= aa.env.getValue(&quot;ApplicationTypeLevel2&quot;);
var ApplicationTypeLevel3 		= aa.env.getValue(&quot;ApplicationTypeLevel3&quot;);
var ApplicationTypeLevel4 		= aa.env.getValue(&quot;ApplicationTypeLevel4&quot;);
var CAEAddressLine1 			= aa.env.getValue(&quot;CAEAddressLine1&quot;);
var CAEAddressLine2 			= aa.env.getValue(&quot;CAEAddressLine2&quot;);
var CAEAddressLine3 			= aa.env.getValue(&quot;CAEAddressLine3&quot;);
var CAEBusinessName 			= aa.env.getValue(&quot;CAEBusinessName&quot;);
var CAECity 				= aa.env.getValue(&quot;CAECity&quot;);
var CAEEmail 				= aa.env.getValue(&quot;CAEEmail&quot;);
var CAEFirstName 			= aa.env.getValue(&quot;CAEFirstName&quot;);
var CAELastName 			= aa.env.getValue(&quot;CAELastName&quot;);
var CAELienseNumber 			= aa.env.getValue(&quot;CAELienseNumber&quot;);
var CAELienseType 			= aa.env.getValue(&quot;CAELienseType&quot;);
var CAEMiddleName 			= aa.env.getValue(&quot;CAEMiddleName&quot;);
var CAEPhone1 				= aa.env.getValue(&quot;CAEPhone1&quot;);
var CAEPhone2 				= aa.env.getValue(&quot;CAEPhone2&quot;);
var CAEState 				= aa.env.getValue(&quot;CAEState&quot;);
var CAEValidatedNumber 			= aa.env.getValue(&quot;CAEValidatedNumber&quot;);
var CAEZip 				= aa.env.getValue(&quot;CAEZip&quot;);
var ComplainantAddressLine1 		= aa.env.getValue(&quot;ComplainantAddressLine1&quot;);
var ComplainantAddressLine2 		= aa.env.getValue(&quot;ComplainantAddressLine2&quot;);
var ComplainantAddressLine3 		= aa.env.getValue(&quot;ComplainantAddressLine3&quot;);
var ComplainantBusinessName 		= aa.env.getValue(&quot;ComplainantBusinessName&quot;);
var ComplainantCity 			= aa.env.getValue(&quot;ComplainantCity&quot;);
var ComplainantContactType 		= aa.env.getValue(&quot;ComplainantContactType&quot;);
var ComplainantCountry 			= aa.env.getValue(&quot;ComplainantCountry&quot;);
var ComplainantEmail 			= aa.env.getValue(&quot;ComplainantEmail&quot;);
var ComplainantFax 			= aa.env.getValue(&quot;ComplainantFax&quot;);
var ComplainantFirstName 		= aa.env.getValue(&quot;ComplainantFirstName&quot;);
var ComplainantId 			= aa.env.getValue(&quot;ComplainantId&quot;);
var ComplainantLastName 		= aa.env.getValue(&quot;ComplainantLastName&quot;);
var ComplainantMiddleName 		= aa.env.getValue(&quot;ComplainantMiddleName&quot;);
var ComplainantPhone1 			= aa.env.getValue(&quot;ComplainantPhone1&quot;);
var ComplainantRelation 		= aa.env.getValue(&quot;ComplainantRelation&quot;);
var ComplainantState 			= aa.env.getValue(&quot;ComplainantState&quot;);
var ComplainantZip 			= aa.env.getValue(&quot;ComplainantZip&quot;);
var ComplaintDate 			= aa.env.getValue(&quot;ComplaintDate&quot;);
var ComplaintReferenceId1 		= aa.env.getValue(&quot;ComplaintReferenceId1&quot;);
var ComplaintReferenceId2 		= aa.env.getValue(&quot;ComplaintReferenceId2&quot;);
var ComplaintReferenceId3 		= aa.env.getValue(&quot;ComplaintReferenceId3&quot;);
var ComplaintReferenceSource 		= aa.env.getValue(&quot;ComplaintReferenceSource&quot;);
var ComplaintReferenceType 		= aa.env.getValue(&quot;ComplaintReferenceType&quot;);
var CurrentUserID 			= aa.env.getValue(&quot;CurrentUserID&quot;);
var OwnerFirstName 			= aa.env.getValue(&quot;OwnerFirstName&quot;);
var OwnerFullName 			= aa.env.getValue(&quot;OwnerFullName&quot;);
var OwnerLastName 			= aa.env.getValue(&quot;OwnerLastName&quot;);
var OwnerMailAddressLine1 		= aa.env.getValue(&quot;OwnerMailAddressLine1&quot;);
var OwnerMailAddressLine2 		= aa.env.getValue(&quot;OwnerMailAddressLine2&quot;);
var OwnerMailAddressLine3 		= aa.env.getValue(&quot;OwnerMailAddressLine3&quot;);
var OwnerMailCity 			= aa.env.getValue(&quot;OwnerMailCity&quot;);
var OwnerMailState 			= aa.env.getValue(&quot;OwnerMailState&quot;);
var OwnerMailZip 			= aa.env.getValue(&quot;OwnerMailZip&quot;);
var OwnerMiddleName 			= aa.env.getValue(&quot;OwnerMiddleName&quot;);
var OwnerPhone 				= aa.env.getValue(&quot;OwnerPhone&quot;);
var OwnerPrimaryFlag 			= aa.env.getValue(&quot;OwnerPrimaryFlag&quot;);
var OwnerValidatedNumber 		= aa.env.getValue(&quot;OwnerValidatedNumber&quot;);
var ParcelArea 				= aa.env.getValue(&quot;ParcelArea&quot;);
var ParcelBlock 			= aa.env.getValue(&quot;ParcelBlock&quot;);
var ParcelBook 				= aa.env.getValue(&quot;ParcelBook&quot;);
var ParcelExcemptValue 			= aa.env.getValue(&quot;ParcelExcemptValue&quot;);
var ParcelImprovedValue 		= aa.env.getValue(&quot;ParcelImprovedValue&quot;);
var ParcelLandValue 			= aa.env.getValue(&quot;ParcelLandValue&quot;);
var ParcelLegalDescription 		= aa.env.getValue(&quot;ParcelLegalDescription&quot;);
var ParcelLot 				= aa.env.getValue(&quot;ParcelLot&quot;);
var ParcelPage 				= aa.env.getValue(&quot;ParcelPage&quot;);
var ParcelParcel 			= aa.env.getValue(&quot;ParcelParcel&quot;);
var ParcelTract 			= aa.env.getValue(&quot;ParcelTract&quot;);
var ParcelValidatedNumber 		= aa.env.getValue(&quot;ParcelValidatedNumber&quot;);
var ViolationAddressLine1 		= aa.env.getValue(&quot;ViolationAddressLine1&quot;);
var ViolationAddressLine2 		= aa.env.getValue(&quot;ViolationAddressLine2&quot;);
var ViolationCity 			= aa.env.getValue(&quot;ViolationCity&quot;);
var ViolationComment 			= aa.env.getValue(&quot;ViolationComment&quot;);
var ViolationLocation 			= aa.env.getValue(&quot;ViolationLocation&quot;);
var ViolationState 			= aa.env.getValue(&quot;ViolationState&quot;);
var ViolationZip  			= aa.env.getValue(&quot;ViolationZip&quot;);

/*------------------------------------------------------------------------------------------------------/
| END Event Specific Variables
/------------------------------------------------------------------------------------------------------*/
var appTypeString = ApplicationTypeLevel1 + &quot;/&quot; + ApplicationTypeLevel2 + &quot;/&quot; + ApplicationTypeLevel3 + &quot;/&quot; + ApplicationTypeLevel4;
var appTypeArray = appTypeString.split(&quot;/&quot;);		// Array of application type string
var currentUserID = aa.env.getValue(&quot;CurrentUserID&quot;);   // Current USer
var AppSpecificInfoModels = aa.env.getValue(&quot;AppSpecificInfoModels&quot;);
var servProvCode = aa.getServiceProviderCode();
var CAENumber = parseInt(CAEValidatedNumber);
var CAE;
var CAEAtt;

var AInfo = new Array()					// Associative array of appspecifc info
loadAppSpecificBefore(AInfo);

// Get CAE Attributes


if (CAENumber &gt; 0)
	{
	var CAEResult = aa.licenseScript.getRefLicenseProfBySeqNbr(servProvCode,CAENumber)
	if (CAEResult.getSuccess())
		{ CAE=CAEResult.getOutput(); }
	else
		{ logDebug(&quot;**ERROR: getting CAE : &quot; + CAEResult.getErrorMessage()); }
	}

if (CAE)
	CAEAtt = CAE.getLicenseModel().getAttributes();

if (CAEAtt)
	{
	itr = CAEAtt.values().iterator();
	while(itr.hasNext())
		{
		y = itr.next()
		itr2 = y.iterator();
		while (itr2.hasNext())
			{
			pam = itr2.next();
			AInfo[&quot;CAEAttribute.&quot; + pam.getAttributeName()] = pam.getAttributeValue();
			}
		}
	}

var systemUserObj = aa.person.getUser(currentUserID).getOutput();  // Current User Object
var sysDate = aa.date.getCurrentDate();

if (preExecute.length) doStandardChoiceActions(preExecute,true,0); 	// run Pre-execution code

logGlobals(AInfo);
/*------------------------------------------------------------------------------------------------------/
| &lt;===========Main=Loop================&gt;
|
/-----------------------------------------------------------------------------------------------------*/
//
//  Get the Standard choices entry we'll use for this App type
//  Then, get the action/criteria pairs for this app
//

doStandardChoiceActions(controlString,true,0);

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
	if (cancel)
		{
		aa.env.setValue(&quot;ScriptReturnCode&quot;, &quot;1&quot;);
		if (showMessage) aa.env.setValue(&quot;ScriptReturnMessage&quot;, &quot;&lt;font color=red&gt;&lt;b&gt;Action Cancelled&lt;/b&gt;&lt;/font&gt;&lt;br&gt;&lt;br&gt;&quot; + message);
		if (showDebug) 	aa.env.setValue(&quot;ScriptReturnMessage&quot;, &quot;&lt;font color=red&gt;&lt;b&gt;Action Cancelled&lt;/b&gt;&lt;/font&gt;&lt;br&gt;&lt;br&gt;&quot; + debug);
		}
	else
		{
		aa.env.setValue(&quot;ScriptReturnCode&quot;, &quot;0&quot;);
		if (showMessage) aa.env.setValue(&quot;ScriptReturnMessage&quot;, message);
		if (showDebug) 	aa.env.setValue(&quot;ScriptReturnMessage&quot;, debug);
		}
	}


/*------------------------------------------------------------------------------------------------------/
| &lt;===========Internal Functions and Classes (Used by this script)
/------------------------------------------------------------------------------------------------------*/

function logGlobals(globArray) {

	for (loopGlob in globArray)
		logDebug(&quot;{&quot; + loopGlob + &quot;} = &quot; + globArray[loopGlob])
	}

function loadAppSpecificBefore(thisArr) {
	//
	// Returns an associative array of App Specific Info
	//
	for (loopk in AppSpecificInfoModels)
		{
		if (useAppSpecificGroupName)
			{
			thisArr[AppSpecificInfoModels[loopk].getCheckboxType() + &quot;.&quot; + AppSpecificInfoModels[loopk].checkboxDesc] = AppSpecificInfoModels[loopk].checklistComment;
			logDebug(&quot;{&quot; + AppSpecificInfoModels[loopk].getCheckboxType() + &quot;.&quot; + AppSpecificInfoModels[loopk].checkboxDesc + &quot;} = &quot; + AppSpecificInfoModels[loopk].checklistComment);
			}
			else
			{
			thisArr[AppSpecificInfoModels[loopk].checkboxDesc] = AppSpecificInfoModels[loopk].checklistComment;
			logDebug(&quot;{&quot; + AppSpecificInfoModels[loopk].checkboxDesc + &quot;} = &quot; + AppSpecificInfoModels[loopk].checklistComment);
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

function loadASITables() {

 	//
 	// Loads App Specific tables into their own array of arrays.  Creates global array objects
	//
	// Optional parameter, cap ID to load from
	//

	var itemCap = capId;
	if (arguments.length == 2) itemCap = arguments[0]; // use cap ID specified in args

	var gm = aa.appSpecificTableScript.getAppSpecificTableGroupModel(itemCap).getOutput();
	var ta = gm.getTablesArray()
	var tai = ta.iterator();

	while (tai.hasNext())
	  {
	  var tsm = tai.next();

	  var tempObject = new Array();
	  var tempArray = new Array();
	  var tn = tsm.getTableName();

	  tn = String(tn).replace(/[^a-zA-Z0-9]+/g,'');

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
	  logDebug(&quot;ASI Table Array : &quot; + tn + &quot; (&quot; + numrows + &quot; Rows)&quot;);
	  eval(copyStr);  // move to table name
	  }

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
		var parcelAttrObj = fcapParcelObj[i].getParcelAttribute().toArray();
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


function branch(stdChoice)
	{
	doStandardChoiceActions(stdChoice,true,0);
	}

function comment(cstr)
	{
	if (showDebug) logDebug(cstr);
	if (showMessage) logMessage(cstr);
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

function lookup(stdChoice,stdValue)
	{
	var strControl;
	var bizDomScriptResult = aa.bizDomain.getBizDomainByValue(stdChoice,stdValue);

   	if (bizDomScriptResult.getSuccess())
   		{
		bizDomScriptObj = bizDomScriptResult.getOutput();
		var strControl = &quot;&quot; + bizDomScriptObj.getDescription(); // had to do this or it bombs.  who knows why?
		logDebug(&quot;lookup(&quot; + stdChoice + &quot;,&quot; + stdValue + &quot;) = &quot; + strControl);
		}
	else
		{
		logDebug(&quot;lookup(&quot; + stdChoice + &quot;,&quot; + stdValue + &quot;) does not exist&quot;);
		}
	return strControl;
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

 
function getGISInfo(svc,layer,attributename)
{
	// use buffer info to get info on the current object by using distance 0
	// usage: 
	//
	// x = getGISInfo(&quot;flagstaff&quot;,&quot;Parcels&quot;,&quot;LOT_AREA&quot;);
	//
	// to be used with ApplicationSubmitBefore only
	
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
			
	var gisObjResult = aa.gis.getParcelGISObjects(ParcelValidatedNumber); // get gis objects on the parcel number
	if (gisObjResult.getSuccess()) 	
		var fGisObj = gisObjResult.getOutput();
	else
		{ logDebug(&quot;**ERROR: Getting GIS objects for Parcel.  Reason is: &quot; + gisObjResult.getErrorType() + &quot;:&quot; + gisObjResult.getErrorMessage()) ; return false }

	for (a1 in fGisObj) // for each GIS object on the Parcel.  We'll only send the last value
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
function getRelatedCapsByAddressBefore(ats) 
//
// returns the capId object of the parent.  Assumes only one parent!
//
	{
	var retArr = new Array();
	
	
	if (AddressValidatedNumber &gt; 0) // get the address info from lookup table
	  {
	  addObj = aa.address.getRefAddressByPK(parseInt(AddressValidatedNumber)).getOutput();
	  AddressStreetName = addObj.getStreetName();
	  AddressHouseNumber = addObj.getHouseNumberStart();
	  AddressStreetSuffix = addObj.getStreetSuffix();
	  AddressZip = addObj.getZip();
	  AddressStreetDirection = addObj.getStreetDirection();
	  }

	 if (AddressStreetDirection == &quot;&quot;) AddressStreetDirection = null;
	 if (AddressHouseNumber == &quot;&quot;) AddressHouseNumber = 0;
	 if (AddressStreetSuffix == &quot;&quot;) AddressStreetSuffix = null;
	 if (AddressZip == &quot;&quot;) AddressZip = null;
 
 	// get caps with same address
 	capAddResult = aa.cap.getCapListByDetailAddress(AddressStreetName,parseInt(AddressHouseNumber),AddressStreetSuffix,AddressZip,AddressStreetDirection,null);
	if (capAddResult.getSuccess())
		{ var capIdArray=capAddResult.getOutput(); }
	else
		{ logDebug(&quot;**ERROR: getting similar addresses: &quot; + capAddResult.getErrorMessage());  return false; }


	// loop through related caps
	for (cappy in capIdArray)
		{
		// get file date
		relcap = aa.cap.getCap(capIdArray[cappy].getCapID()).getOutput();

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

	if (retArr.length &gt; 0)
		return retArr;
		
	}
	 
function getRelatedCapsByParcelBefore(ats) 
//
// appsubmitBefore script only.  Returns an array of capids that match the parcelValidatedNumber
// ats, app type string to check for
//
	{
	var retArr = new Array();
	

	// get caps with same parcel
	var capAddResult = aa.cap.getCapListByParcelID(ParcelValidatedNumber,null);
	if (capAddResult.getSuccess())
		{ var capIdArray=capAddResult.getOutput(); }
	else
		{ logDebug(&quot;**ERROR: getting similar parcels: &quot; + capAddResult.getErrorMessage());  return false; }

	// loop through related caps
	for (cappy in capIdArray)
		{
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
		
	if (retArr.length &gt; 0)
		return retArr;
		
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
function proximity(svc,layer,numDistance)  // optional: distanceType
	{
	// returns true if the app has a gis object in proximity
	// to be used with ApplicationSubmitBefore only

	var distanceType = &quot;feet&quot;
	if (arguments.length == 4) distanceType = arguments[3]; // use distance type in arg list
   	
	bufferTargetResult = aa.gis.getGISType(svc,layer); // get the buffer target
	if (bufferTargetResult.getSuccess())
		{
		buf = bufferTargetResult.getOutput();
		buf.addAttributeName(layer + &quot;_ID&quot;);
		}
	else
		{ logDebug(&quot;**ERROR: Getting GIS Type for Buffer Target.  Reason is: &quot; + bufferTargetResult.getErrorType() + &quot;:&quot; + bufferTargetResult.getErrorMessage()) ; return false }
	
	
	var gisObjResult = aa.gis.getParcelGISObjects(ParcelValidatedNumber); // get gis objects on the parcel number
	if (gisObjResult.getSuccess()) 	
		var fGisObj = gisObjResult.getOutput();
	else
		{ logDebug(&quot;**ERROR: Getting GIS objects for Parcel.  Reason is: &quot; + gisObjResult.getErrorType() + &quot;:&quot; + gisObjResult.getErrorMessage()) ; return false }

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
		buf = bufferTargetResult.getOutput();
		buf.addAttributeName(attributeName);
		}
	else
		{ logDebug(&quot;**ERROR: Getting GIS Type for Buffer Target.  Reason is: &quot; + bufferTargetResult.getErrorType() + &quot;:&quot; + bufferTargetResult.getErrorMessage()) ; return false }
			
	var gisObjResult = aa.gis.getParcelGISObjects(ParcelValidatedNumber); // get gis objects on the parcel number
	if (gisObjResult.getSuccess()) 	
		var fGisObj = gisObjResult.getOutput();
	else
		{ logDebug(&quot;**ERROR: Getting GIS objects for Parcel.  Reason is: &quot; + gisObjResult.getErrorType() + &quot;:&quot; + gisObjResult.getErrorMessage()) ; return false }
	for (a1 in fGisObj) // for each GIS object on the Cap
		{
		var bufchk = aa.gis.getBufferByRadius(fGisObj[a1], numDistance, distanceType, buf);

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
				if (retString &amp;&amp; retString.equals(attributeValue))
					return true;
				}
			
			}
		}
	}
 
function refLicProfGetDate (pLicNum, pDateType)
	{
	//Returns expiration date from reference licensed professional record
	//pDateType parameter decides which date field is returned.  Options: &quot;EXPIRE&quot; (default), &quot;RENEW&quot;,&quot;ISSUE&quot;,&quot;BUSINESS&quot;,&quot;INSURANCE&quot;
	//Internal Functions needed: convertDate(), jsDateToMMDDYYYY()
	//07SSP-00033/SP5014
	//
	if (pDateType==null || pDateType.length==0)
		var dateType = &quot;EXPIRE&quot;;
	else 
		{
		var dateType = pDateType.toUpperCase();
		if ( !(dateType==&quot;ISSUE&quot; || dateType==&quot;RENEW&quot; || dateType==&quot;BUSINESS&quot; || dateType==&quot;INSURANCE&quot;) )
			dateType = &quot;EXPIRE&quot;;		
		}
		
	if (pLicNum==null || pLicNum.length==0)
		{
		logDebug(&quot;Invalid license number parameter&quot;);
		return (&quot;INVALID PARAMETER&quot;);
		}
		
	var refLicenseResult = aa.licenseScript.getRefLicensesProfByLicNbr(aa.getServiceProviderCode(),pLicNum);
	if (!refLicenseResult.getSuccess())
		{
		logDebug(&quot;**ERROR retrieving reference license professional: &quot; + refLicenseResult.getErrorMessage());
		return false; 
		}
		
	var newLicArray = refLicenseResult.getOutput();
	if (newLicArray)
		{
		newLic = newLicArray[0];
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
	else
		{
		logMessage(&quot;No reference licensed professional found with state license number of &quot;+pLicNum);
		logDebug(&quot;No reference licensed professional found with state license number of &quot;+pLicNum);
		return (&quot;NO LICENSE FOUND&quot;);
		}
	}
