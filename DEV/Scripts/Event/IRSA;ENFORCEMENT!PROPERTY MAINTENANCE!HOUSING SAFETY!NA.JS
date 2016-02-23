
if (inspType == '215 Property Maint Inspection' && inspResult == 'Violation') {

	//start replaced branch: ES_ENHS_SCHEDULE_FOLLOWUP
	{
		var daysAhead;
		if (AInfo['Type of Violation'] == 'Auto Repair in Residential') {
			daysAhead = 2;
		}

		if (AInfo['Type of Violation'] == 'Vacant Building Registration Enforcement') {
			daysAhead = 31;
		}

		if (AInfo['Type of Violation'] == 'Building Without Permit') {
			daysAhead = 31;
		}

		if (AInfo['Type of Violation'] == 'Commercial Unapproved Surface') {
			daysAhead = 16;
		}

		if (AInfo['Type of Violation'] == 'Commercial Vehicles in Residential') {
			daysAhead = 2;
		}

		if (AInfo['Type of Violation'] == 'Dilapidated Structure') {
			daysAhead = 31;
		}

		if (AInfo['Type of Violation'] == 'Heavy Trucks (Land Use)') {
			daysAhead = 2;
		}

		if (AInfo['Type of Violation'] == 'Historic Violation') {
			daysAhead = 91;
		}

		if (AInfo['Type of Violation'] == 'Land Use Violation') {
			daysAhead = 16;
		}

		if (AInfo['Type of Violation'] == 'License Violation') {
			daysAhead = 31;
		}

		if (AInfo['Type of Violation'] == 'Open and Abandoned') {
			daysAhead = 31;
		}

		if (AInfo['Type of Violation'] == 'Prohibited Signs (not Title 15) removal only') {
			daysAhead = 2;
		}

		if (AInfo['Type of Violation'] == 'Prohibited Signs (permit required)') {
			daysAhead = 16;
		}

		if (AInfo['Type of Violation'] == 'Property Maintenance') {
			daysAhead = 16;
		}

		if (AInfo['Type of Violation'] == 'Public Restrooms - Unsanitary') {
			daysAhead = 2;
		}

		if (AInfo['Type of Violation'] == 'Residential Unapproved Surface') {
			daysAhead = 2;
		}

		if (AInfo['Type of Violation'] == 'Rockwall Repair') {
			daysAhead = 16;
		}

		if (AInfo['Type of Violation'] == 'Sewage') {
			daysAhead = 2;
		}

		if (AInfo['Type of Violation'] == 'Sidewalk Repair') {
			daysAhead = 16;
		}

		if (AInfo['Type of Violation'] == 'Sign Maintenance') {
			daysAhead = 16;
		}

		if (AInfo['Type of Violation'] == 'Storage Standards') {
			daysAhead = 16;
		}

		if (AInfo['Type of Violation'] == 'Tenant Complaint') {
			daysAhead = 16;
		}

		scheduleInspection('215 Property Maint Inspection', daysAhead, currentUserID);
		closeTask('Complaint Received', 'Assigned', 'via ES_ENHS_SCHEDULE_FOLLOWUP', 'via script');
		assignTask('Investigation', currentUserID);
		updateTask('Investigation', 'Violation', '', '');

	}
	//end replaced branch: ES_ENHS_SCHEDULE_FOLLOWUP;
}
