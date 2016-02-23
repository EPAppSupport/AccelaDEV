function getInspectorUserName(inspType)

{
	var inspResultObj = aa.inspection.getInspections(capId);
	var inspectorFName = "";
	var inspectorMName = "";
	var inspectorLName = "";
	var wsURL = "http://dev.elpasotexas.gov/getUserID/getUserID.asmx/getAccelaUserID";
	if (inspResultObj.getSuccess())
		{
		inspList = inspResultObj.getOutput();
		for (xx in inspList)
			if (String(inspType).equals(inspList[xx].getInspectionType()))
				{
				// have to re-grab the user since the id won't show up in this object.
				//inspUserObj = aa.person.getUser(inspList[xx].getInspector().getFirstName(),inspList[xx].getInspector().getMiddleName(),inspList[xx].getInspector().getLastName()).getOutput();
				//return inspUserObj.getUserID();
				inspectorLName = inspList[xx].getInspector().getLastName();
				inspectorMName = inspList[xx].getInspector().getMiddleName();
				inspectorFName = inspList[xx].getInspector().getFirstName();	
			        //inspectorFName + " " + inspectorMName + " " + inspectorLName;
				}
		}
          if(inspectorLName)
          {
	  var client = aa.httpClient;
          var params = client.initPostParameters();
          params.put('FirstName', inspectorFName);


          params.put('LastName', inspectorLName);
          var scriptResult = client.post(wsURL, params);
          logDebug(scriptResult.getOutput());
          eval("var test = " + scriptResult.getOutput());
          var returnedUserID = (test[0].ListUserID.toString());
          logDebug(test[0].ListUserID.toString());
	  return returnedUserID;
          }
          else
          return false;
}

