function ExecWebService(URL, SOAPNamespace, SOAPAction, ParamKeyValueList)
{
	var SoapActionURL=SOAPNamespace + SOAPAction;
	var wsUser='';
	var wsPassword='';

	var wsDoc = aa.util.newStringBuffer();
	
	wsDoc.append(GetXMLHeader(URL,SOAPAction,SOAPNamespace));
	
	// loop over all key/values
	var arrPairs=ParamKeyValueList.split('|');
	var arrKeyValue;
	
	for(var i=0; i<arrPairs.length; i++)
	{
		arrKeyValue=arrPairs[i].split('=');
		
		wsDoc.append(CreateXMLElement(wsDoc, arrKeyValue[0], arrKeyValue[1]));
	}
		
	wsDoc.append(GetXMLFooter(SOAPAction));
	
	aa.print("WebService Request = "+wsDoc+"\n");
	
	var returnObj = aa.util.httpPostToSoapWebService(URL, wsDoc, wsUser, wsPassword, SoapActionURL);


	aa.print("WebService Result = "+returnObj.getSuccess()+"\n");
		
	var Result='';
	
	if(returnObj.getSuccess())
	{
		Result = returnObj.getOutput();		
		
		aa.print("WebService Result = "+Result+"\n");
	}
	
	
	return Result;
}
