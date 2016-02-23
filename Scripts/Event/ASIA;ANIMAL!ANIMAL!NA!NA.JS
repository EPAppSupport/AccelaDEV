

//start replaced branch: ES_Animal_Animal_UpdateKennel
{
	if (AInfo['Kennel Number'] && AInfo['Kennel Section']) {
		var capPreFix = 'ASKL';
		var newAltID = capPreFix + String(AInfo['Kennel Section']) + '-' + String(zeroPad(AInfo['Kennel Number'], 5));
		var bDate = new Date();
		var bdateString = jsDateToASIDate(bDate);
	}

	if ((AInfo['Kennel Number'] && AInfo['Kennel Section']) && (AInfo['ParentAltId'] != newAltID)) {
		if (AInfo['ParentAltId'] != null)
			removeParent(AInfo['ParentAltId']);
		addParent(newAltID, capId);
		editAppSpecific('ParentAltId', newAltID);
		var tableRow = new Array();
		tableRow['Facility'] = String(AInfo['Facility']);
		tableRow['Kennel Section'] = String(AInfo['Kennel Section']);
		tableRow['Kennel Number'] = String(AInfo['Kennel Number']);
		tableRow['Time'] = String(bDate.getHours() + ':' + bDate.getMinutes());
		tableRow['Updated'] = String(bdateString);
		tableRow['Updated By'] = String(currentUserID);
		addToASITable('KENNEL', tableRow);
	}

}
//end replaced branch: ES_Animal_Animal_UpdateKennel;

//start replaced branch: ES_Animal_AppSpecInfoUpdateAfter
{
	if (appMatch('Animal/Complaint/*/*') && matches(AInfo['Condition'], 'Injured', 'Sick')) {
		email('aasr-animailservices@elpasotexas.gov', 'accela@elpasotexas.gov', String(capId.getCustomID() + 'Animal Complaint Information'), String(capId.getCustomID() + 'Animal being Transported is injured or sick.'));
	}

	if (appMatch('Animal/Animal/*/*') && TREATMENT.length > 0) {
		TreatmentASITTemp = loadASITTemp();
		for (treatmentRow in TREATMENT)
			if (TREATMENT[treatmentRow]['Inspection Scheduled'] == 'No')
				//start replaced branch: ES_Animal_ScheduleInspForTreatment
			{
				var tempRow = TreatmentASITTemp[treatmentRow];
				var tempRowProcedure = '';
				var tempRowTPD = 0;
				var tempRowNOD = 0;
				var inspType1 = '';
				var inspType2 = '';
				var insp1AssignTo = '';
				var insp2AssignTo = '';
				if (tempRow['Procedure'] != null) {
					tempRowProcedure = tempRow['Procedure'].toString();
					comment(tempRowProcedure);
				}

				if (tempRow['Number of days'] != null) {
					tempRowNOD = parseInt(tempRow['Number of days'].toString());
					comment(tempRowNOD);
				}

				if (tempRow['Times per day'] != null) {
					tempRowTPD = parseInt(tempRow['Times per day'].toString());
					comment(tempRowTPD);
				}

				if (tempRowProcedure == 'Quarantine Check') {
					inspType1 = '3208 Q Check';
					insp1AssignTo = 'VTECH';
					inspType2 = '3209 Vet Q Check';
					insp2AssignTo = 'VET';
				}

				if (tempRowProcedure == 'Medical Check') {
					inspType1 = '3210 Medical Check';
					insp1AssignTo = 'VET';
				}

				if (tempRowProcedure == 'Treatment') {
					inspType1 = '3207 Treatment';
					insp1AssignTo = 'VTECH';
				}

				if (tempRowNOD && tempRowTPD && inspType1) {
					for (var x = 0;
						x < tempRowNOD;
						x++)
						for (var y = 0;
							y < tempRowTPD;
							y++)
							scheduleInspection(inspType1, x, insp1AssignTo);
					TreatmentASITTemp[treatmentRow]['Inspection Scheduled'] = 'Yes';
				}

				if (tempRowNOD && tempRowTPD && inspType2) {
					for (var x = 0;
						x < tempRowNOD;
						x++)
						for (var y = 0;
							y < tempRowTPD;
							y++)
							scheduleInspection(inspType2, x, insp2AssignTo);
				}

			}
		//end replaced branch: ES_Animal_ScheduleInspForTreatment;
		removeASITable('TREATMENT');
		addASITable('TREATMENT', TreatmentASITTemp);
	}

	if (AInfo['Update ASI from Parent']) {

		//replaced branch(ES_Animal_Copy_ParentASI)
		ES_Animal_Copy_ParentASI()
	}

}
//end replaced branch: ES_Animal_AppSpecInfoUpdateAfter;
