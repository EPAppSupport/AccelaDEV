
showDebug = false;
showMessage = false;
InspectionsComplete = true;
if (checkInspectionResult('000 Building Investigation', 'Scheduled')||checkInspectionResult('1000 Residential Combination', 'Scheduled')||checkInspectionResult('1100 ESD Code Inspection', 'Scheduled')||checkInspectionResult('1600 Site Inspection45', 'Scheduled')||checkInspectionResult('200 Landscaping Inspection', 'Scheduled')||checkInspectionResult('205 Irrigation In-Progress', 'Scheduled')||checkInspectionResult('210 Landscaping Final Insp', 'Scheduled')||checkInspectionResult('220 Irrigation Final Insp', 'Scheduled')) {
	InspectionsComplete = false;
	}

if (checkInspectionResult('935 Storm Water Violations', 'Scheduled')||checkInspectionResult('940 Engineering Final Insp', 'Scheduled')||checkInspectionResult('950 MS4 - SWPPP Inspection', 'Scheduled')) {
	InspectionsComplete = false;
	}

if (checkInspectionResult('250 Building Investigation', 'Scheduled')||checkInspectionResult('300 Elec Temporary Service', 'Scheduled')||checkInspectionResult('301 Temp Power Pole Insp', 'Scheduled')||checkInspectionResult('305 Electrical Underground', 'Scheduled')||checkInspectionResult('310 Electrical Service Release', 'Scheduled')||checkInspectionResult('315 Electrical Service Release Inv', 'Scheduled')||checkInspectionResult('320 Electrical Final Insp', 'Scheduled')||checkInspectionResult('325 Electrical Investigation', 'Scheduled')) {
	InspectionsComplete = false;
	}

if (checkInspectionResult('330 Electrical Partial Insp', 'Scheduled')||checkInspectionResult('335 Electrical Pool Ground', 'Scheduled')||checkInspectionResult('340 Electrical Rough Insp', 'Scheduled')||checkInspectionResult('345 Electrical Slab Inspection', 'Scheduled')||checkInspectionResult('400 Fire Department Final', 'Scheduled')||checkInspectionResult('415 Fire Investigation', 'Scheduled')||checkInspectionResult('420 Fire Sprinkler Final', 'Scheduled')||checkInspectionResult('500 Audit', 'Scheduled')) {
	InspectionsComplete = false;
	}

if (checkInspectionResult('600 Mechanical Under Slab Duct', 'Scheduled')||checkInspectionResult('610 Mechanical Rough Insp', 'Scheduled')||checkInspectionResult('615 Mechanical Partial Insp', 'Scheduled')||checkInspectionResult('620 Mechanical Investigation', 'Scheduled')||checkInspectionResult('630 Mechanical Final Insp', 'Scheduled')||checkInspectionResult('640 Refrigeration Final Insp', 'Scheduled')||checkInspectionResult('700 Sewer Tap to Curb Insp', 'Scheduled')||checkInspectionResult('705 Plumbing Sewer Inspection', 'Scheduled')) {
	InspectionsComplete = false;
	}

if (checkInspectionResult('710 Plumbing Underground', 'Scheduled')||checkInspectionResult('720 Plumbing Rough-In Insp', 'Scheduled')||checkInspectionResult('725 Plumbing Top Out Insp', 'Scheduled')||checkInspectionResult('730 Plumbing Partial Insp', 'Scheduled')||checkInspectionResult('740 Plumbing Final Inspection', 'Scheduled')||checkInspectionResult('745 Plumbing Gas Inspection', 'Scheduled')||checkInspectionResult('750 Plumbing Investigation', 'Scheduled')||checkInspectionResult('755 CHP Inspection', 'Scheduled')) {
	InspectionsComplete = false;
	}

if (checkInspectionResult('755 CHP Inspection', 'Scheduled')||checkInspectionResult('800 Final Building  Inspection', 'Scheduled')||checkInspectionResult('800 Final Building Inspection', 'Scheduled')||checkInspectionResult('805 City Final Inspection', 'Scheduled')||checkInspectionResult('810 Foundation Inspection', 'Scheduled')||checkInspectionResult('815 Foundation Partial Insp', 'Scheduled')||checkInspectionResult('820 In-Progress Inspection', 'Scheduled')||checkInspectionResult('825 Insulation Inspection', 'Scheduled')) {
	InspectionsComplete = false;
	}

if (checkInspectionResult('830 Structural Inspection', 'Scheduled')||checkInspectionResult('835 Partial Structural Insp', 'Scheduled')||checkInspectionResult('840 Sheathing Inspection', 'Scheduled')||checkInspectionResult('845 Energy Inspection', 'Scheduled')||checkInspectionResult('850 Sheetrock Inspection', 'Scheduled')||checkInspectionResult('855 Retaining Wall Footing', 'Scheduled')||checkInspectionResult('860 Fire Investigation', 'Scheduled')||checkInspectionResult('900 Driveway Inspection', 'Scheduled')) {
	InspectionsComplete = false;
	}

if (checkInspectionResult('902 Driveway Final Inspection', 'Scheduled')||checkInspectionResult('905 Sidewalk Inspection', 'Scheduled')||checkInspectionResult('907 Sidewalk Final Inspection', 'Scheduled')||checkInspectionResult('910 Sidewalk/Driveway Insp', 'Scheduled')||checkInspectionResult('915 Sidewalk/Driveway Final', 'Scheduled')||checkInspectionResult('920 Site Grading Final Insp', 'Scheduled')||checkInspectionResult('925 Site Grading Inspection', 'Scheduled')||checkInspectionResult('930 Storm Water Inspection', 'Scheduled')) {
	InspectionsComplete = false;
	}

if (InspectionsComplete == false) {
	showMessage = true;
	comment('There are still pending inspections.  Please complete the inspections then return to the WorkFlowTask.');
	cancel = true;
	}

