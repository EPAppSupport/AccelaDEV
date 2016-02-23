//Used by ProcessDocsForReview to retrieve/set the EDMS Source for a document
function getVendor(sourceValue, sourceName)
{
	var _sourceVal = "STANDARD";
	if(sourceValue != null && sourceValue != '')
	{
		logDebug("sourceValue was not null or empty string.");
		_sourceVal = sourceValue;
	}
	else if(sourceName != null && sourceName != '')
	{
		logDebug("sourceName was not null or empty string.");
		var bizDomScriptResult = aa.bizDomain.getBizDomainByValue("EDMS",sourceName.toUpperCase());

		if (bizDomScriptResult.getSuccess())
	   {
			logDebug("bizDomScriptResult is successful.");
			bizDomScriptObj = bizDomScriptResult.getOutput();
			var bizDescStr = bizDomScriptObj.getDescription();
			var startPos = bizDescStr.indexOf("EDMS_VENDOR=");
			var endPos = bizDescStr.indexOf(";",startPos);
			if(startPos > -1 && endPos >-1)
			{
				_sourceVal = bizDescStr.substring(startPos+12,endPos).trim();
				logDebug("_sourceVal set to " + _sourceVal);
			}
		}
		else
			logDebug("bizDomScriptResult.getSuccess() was false.  Will not attempt to search for Vendor.");
	}
	
	logDebug("Function getVendor returns a value of " + _sourceVal);
	
	return _sourceVal;
}
