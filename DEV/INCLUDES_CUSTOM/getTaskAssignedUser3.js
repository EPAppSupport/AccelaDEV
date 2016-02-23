
function getTaskAssignedUser3(wfstr) // optional process name
	{
	// Update the task assignment department
	//
	var useProcess = false;
	var processName = "";
	var taskUserFirstName = "";
	var taskUserLastName = "";
        var taskUserMiddleName = "";
        var iNameResult = "";
        var nameUser = "";
        var nameUserID = "";
        var inspectionID = "";
        var wsURL = "http://dev.elpasotexas.gov/getUserID/getUserID.asmx/getAccelaUserID";




	if (arguments.length == 2)
		{
		processName = arguments[1]; // subprocess
		useProcess = true;
		}
        if (arguments.length >= 3)
        	{
		processName = arguments[1]; // subprocess
		useProcess = true;
		inspectionID = arguments[2];
		}

        logDebug("**** Inspection ID is: " + inspectionID);
        //var assignBureau = "" + wfDepartment.split("/")[2];
	//var assignDivision = "" + wfDepartment.split("/")[3];
	var workflowResult = aa.workflow.getTasks(capId);
 	if (workflowResult.getSuccess())
  	 	wfObj = workflowResult.getOutput();
  	else
  	  	{ logDebug("**ERROR: Failed to get workflow object: " + s_capResult.getErrorMessage()); return false; }

        for (var i in wfObj)
		{
   		fTask = wfObj[i];
                if (fTask.getTaskDescription().toUpperCase().equals(wfstr.toUpperCase())  && (!useProcess || fTask.getProcessCode().equals(processName)))
 			{
                          var taskUserObj = fTask.getTaskItem()
                          nameUser = fTask.getAssignedStaff();
                          
                          taskUserFirstName = fTask.getTaskItem().getAssignedUser().getFirstName();
                          taskUserLastName = fTask.getTaskItem().getAssignedUser().getLastName();
                          taskUserMiddleName = fTask.getTaskItem().getAssignedUser().getMiddleName();

                          nameUserID = (taskUserFirstName + " " + taskUserMiddleName + " " + taskUserLastName);


                          logDebug("****************  fTask ***************" + fTask);
                        }

                }
          var client = aa.httpClient;
          var params = client.initPostParameters();       
          params.put('FirstName', taskUserFirstName);
          
          params.put('LastName', taskUserLastName);
          var scriptResult = client.post(wsURL, params);
          logDebug(scriptResult.getOutput());
          eval("var test = " + scriptResult.getOutput());
          
          var returnedUserID = (test[0].ListUserID.toString());
          logDebug(test[0].ListUserID.toString());
          

          //scheduleInspection(inspectionID,1,returnedUserID);
         //assignInspection(inspectionID,nameUserID);
         return returnedUserID;
	}

