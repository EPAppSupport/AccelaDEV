function validateLicenseParcelCondition(licenseNumber)
{
	/*
		Return true if active Parcel Condition exists with specific status.  
		Return false if no active Parcel Condition exists with specific status.
	
		The purpose of this function is to check a Parcel, associated to a License Record, for an Active Lock or Hold Parcel Condition.
		This function is developed for the City of El Paso, and is intended to be used only during the License Renewal process, specifically during
		     the License Renewal Application process in ACA.  The License Number in question will be the Parent Record to the Renewal Application Record.
			 
		This function leverages the Generic Query Service.  The sql statement "Get_All_ParcelCondition_By_ParcelNumber_LicenseRenewal" must
			be deployed to the av.biz server generic query xml file.
	*/

	var qparaList = aa.util.newArrayList();
	//aa.debug('DEBUG', "License Number: " + licenseNumber);
	var gqParam1 = aa.genericQuery.getParameterModel("B1_ALT_ID", licenseNumber).getOutput();

	qparaList.add(gqParam1);

	var queryName = "Get_All_ParcelCondition_By_ParcelNumber_LicenseRenewal";

	var queryResult = aa.genericQuery.query(queryName,qparaList,1,2000);
	var queryResultOutput = queryResult.getOutput();

	if (queryResultOutput != null)
	{
		//aa.debug('DEBUG', "Query Executed, Result output is not null ...");

		var queryResultStr = queryResultOutput.getResult();

		var vParcelConditions = JSON.parse(queryResultStr);
		
		if(vParcelConditions != null)
		{
			for (var index in vParcelConditions) 
			{
			
				var severityCode = vParcelConditions[index]["L1_CON_IMPACT_CODE"];
				var condStatus = vParcelConditions[index]["L1_CON_STATUS"];
			
				if(condStatus == 'Applied' && (severityCode == "Lock" || severityCode == "Hold" || severityCode == "Notice"))
				{
					//aa.debug("LockOrHold:","The parcel has an Applied Lock or Hold condition.");	//conditionModel.getConditionDescription()
					
					return true;
				}

				/*
					FOR REFERENCE ONLY
				
					aa.log("SERV_PROV_CODE[" + index + "] - " + vParcelConditions[index]["SERV_PROV_CODE"]);
					aa.log("L1_PARCEL_NBR[" + index + "] - " + vParcelConditions[index]["L1_PARCEL_NBR"]);
					aa.log("L1_CON_NBR[" + index + "] - " + vParcelConditions[index]["L1_CON_NBR"]);
					
					//Type field
					aa.log("L1_CON_TYP[" + index + "] - " + vParcelConditions[index]["L1_CON_TYP"]);
					
					//Condition Name
					aa.log("L1_CON_DES[" + index + "] - " + vParcelConditions[index]["L1_CON_DES"]);
					
					//Status (i.e. "Applied", or "Met".  Front end shows "Applied(Applied)" or "Met(Not Applied)")
					aa.log("L1_CON_STATUS[" + index + "] - " + vParcelConditions[index]["L1_CON_STATUS"]);
					
					//Short Comments field
					aa.log("L1_CON_COMMENT[" + index + "] - " + vParcelConditions[index]["L1_CON_COMMENT"]);
					
					//Severity (Hold, Notice, Required, Lock)
					aa.log("L1_CON_IMPACT_CODE[" + index + "] - " + vParcelConditions[index]["L1_CON_IMPACT_CODE"]);
					
					//Priority field
					aa.log("PRIORITY[" + index + "] - " + vParcelConditions[index]["PRIORITY"]);
				
				*/
			}
			
			return false;	//default if existing conditions do not meet criteria.
		}
		else
		{
			return false; //No Parcel Conditions found by query
			
			//aa.log("No Parcel Condition!");
		}

	}
	
	//aa.debug("ERROR", "Query did not return an output.  Is the query in the av.biz generic query XML file?");
	
	return false;	//Default.  Query did not return an output.  Error?

}

