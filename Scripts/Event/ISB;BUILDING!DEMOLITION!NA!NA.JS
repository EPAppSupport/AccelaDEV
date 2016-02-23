

//start replaced branch: COEP_BLDG_DEMOLITION_GET_INSPECTION
{
	var inspResultObj = '';
	var inspList = '';
	var inspResultObj = aa.inspection.getInspections(capId);
	if (inspResultObj.getSuccess() != null) {
		inspList = inspResultObj.getOutput();
	}

	if (inspList != null) {
		for (xx in inspList)
			inspType = inspList[xx].getInspectionType();
		comment('inspection type is: ' + inspType);
	}

	if (appMatch('Building/Demolition/*/*') && inspType == '800 Final Building Inspection') {

		//start replaced branch: COEP_BLDG_DEMOLITION_PREVENT_800_FINAL_INSP
		{
			sibCapID = '';
			sibCapID = getChildren('Environmental/Permits/CDM/NA', capId);
			if (sibCapID != null && typeof(sibCapID) == 'object') {
				for (eachchild in sibCapID)
					//start replaced branch: COEP_BLDG_DEMOLITION_PREVENT_800_FINAL_INSP_LOOP
				{
					eachsibCapID = sibCapID[eachchild];
					if (eachsibCapID != false) {
						eachsibCapObj = aa.cap.getCap(eachsibCapID).getOutput();
						sibCapStatus = eachsibCapObj.getCapStatus();
						sibAppTypeResult = eachsibCapObj.getCapType();
						sibAppTypeString = sibAppTypeResult.toString();
						comment('Sib CAP status is: ' + sibCapStatus);
					}

					if (sibCapStatus != 'Passed') {
						comment("Cannot schedule a 800 Final Inspection if children record isn't complete, Child record is : " + sibAppTypeString);
						cancel = true;
					}

				}
				//end replaced branch: COEP_BLDG_DEMOLITION_PREVENT_800_FINAL_INSP_LOOP;
			}

		}
		//end replaced branch: COEP_BLDG_DEMOLITION_PREVENT_800_FINAL_INSP;
	}

}
//end replaced branch: COEP_BLDG_DEMOLITION_GET_INSPECTION;
