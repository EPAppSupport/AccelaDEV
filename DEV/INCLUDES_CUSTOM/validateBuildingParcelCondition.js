function validateBuildingParcelCondition(l1parcelId, EXT_UID)
{
	/*
		Return true if active Parcel Condition exists with specific status.  
		Return false if no active Parcel Condition exists with specific status.
	
		The purpose of this function is to check a Parcel, during Building Pageflow, for an Active Lock or Hold Parcel Condition.
		
		This function is developed for the City of El Paso.
			 
		This function leverages the Generic Query Service.  The sql statement "Get_All_ParcelCondition_By_ParcelNumber" must
			be deployed to the av.biz server generic query xml file.
	*/

	logDebug("IN FUNCTION: validateBuildingParcelCondition");
	
	var qparaList = aa.util.newArrayList();
	var gqParam1 = aa.genericQuery.getParameterModel("SERV_PROV_CODE",aa.getServiceProviderCode()).getOutput(); 
	var gqParam2 = aa.genericQuery.getParameterModel("L1_PARCEL_NBR", l1parcelId).getOutput();
	var gqParam3 = aa.genericQuery.getParameterModel("EXT_UID", EXT_UID).getOutput();

	qparaList.add(gqParam1);
	qparaList.add(gqParam2);
	qparaList.add(gqParam3);

	var queryName = "Get_All_ParcelCondition_By_ParcelNumber";

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
				//Retrieve Parcel Condition field values from database query result
				var severityCode = vParcelConditions[index]["L1_CON_IMPACT_CODE"];
				var condStatus = vParcelConditions[index]["L1_CON_STATUS"];
				var condName = vParcelConditions[index]["L1_CON_DES"];
			
				logDebug("Check Parcel Condition with parameters: severityCode=" + severityCode + ", condition status= " + condStatus + ", condition name=" + condName );
			
				//CHECK FOR SPECIFIC PARCEL CONDITION VALUES
				if((condStatus == 'Applied' && (severityCode == "Lock" || severityCode == "Hold" || severityCode == "Notice")) || (condName == "Historic Property"))
				{
					//aa.debug("LockOrHold:","The parcel has an Applied Lock or Hold condition.");	//conditionModel.getConditionDescription()
					logDebug("Found Parcel Condition that matched criteria.  Do not allow user to proceed.  Return true.");
					
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
			
			logDebug("No Conditions found that met criteria.  Return false");
			return false;	//default if existing conditions do not meet criteria.
		}
		else
		{
			logDebug("No Parcel Condition returned by Query.  Return false");
		
			return false; //No Parcel Conditions found by query
			
			//aa.log("No Parcel Condition!");
		}

	}
	
	//aa.debug("ERROR", "Query did not return an output.  Is the query in the av.biz generic query XML file?");
	
	logDebug("Default: Query returned no output. Return false");
	
	return false;	//Default.  Query did not return an output.  Error?

}