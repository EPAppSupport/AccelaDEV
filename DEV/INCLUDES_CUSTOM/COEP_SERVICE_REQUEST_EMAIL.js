function COEP_SERVICE_REQUEST_EMAIL() {

	var gisArea = getGISInfo('Accela_map', 'PoliceRegion', 'DISTRICT');
	var complaintType = AInfo['Complaint Type'];
	var subject = ('You have been assigned a ( ' + complaintType + ' ) Service Request.  The record number is ' + capIDString + '.');
	var bodyText = '  You are requested to retrieve and process the request quickly.  If you believe you should not get this email, contact 311 Management at AASR-311@elpasotexas.gov.';
	showMessage = true;
	comment('GIS Area ' + gisArea);
	if (appMatch('ServiceRequest/Service Request/NA/NA') && matches(AInfo['Complaint Type'], 'ADA Complaint (Accessibility)', 'Environmental Dept Complaints', 'Illegal Activities')) {
		subject = ('You have been assigned an ( ' + complaintType + ' ) Service Request (GovQA).  The record number is ' + capIDString + '.');
	}

	if (appMatch('ServiceRequest/Service Request/NA/NA') && AInfo['EPIA'] == 'CHECKED' && (AInfo['Information Request Only'] != 'Call Only' || AInfo['Complaint Type'] != 'Information Only')) {
		email('AASR-Airport@elpasotexas.gov', 'accela@elpasotexas.gov', subject, (subject + '<BR>' + bodyText));
	}

	if (appMatch('ServiceRequest/Service Request/NA/NA') && AInfo['Parks and Recreation'] == 'CHECKED' && (AInfo['Information Request Only'] != 'Call Only' || AInfo['Complaint Type'] != 'Information Only')) {
		email('AASR-Parks&Recreation@elpasotexas.gov', 'accela@elpasotexas.gov', subject, (subject + '<BR>' + bodyText));
	}

	if (appMatch('ServiceRequest/Service Request/NA/NA') && AInfo['City Managers Office'] == 'CHECKED' && (AInfo['Information Request Only'] != 'Call Only' || AInfo['Complaint Type'] != 'Information Only')) {
		email('AASR-CityManagersOffice@elpasotexas.gov', 'accela@elpasotexas.gov', subject, (subject + '<BR>' + bodyText));
	}

	if (appMatch('ServiceRequest/Service Request/NA/NA') && AInfo['General Services'] == 'CHECKED' && (AInfo['Information Request Only'] != 'Call Only' || AInfo['Complaint Type'] != 'Information Only')) {
		email('AASR-GeneralServices@elpasotexas.gov', 'accela@elpasotexas.gov', subject, (subject + '<BR>' + bodyText));
	}

	if (appMatch('ServiceRequest/Service Request/NA/NA') && AInfo['Community Development'] == 'CHECKED' && (AInfo['Information Request Only'] != 'Call Only' || AInfo['Complaint Type'] != 'Information Only')) {
		email('AASR-CommunityDevelopment@elpasotexas.gov', 'accela@elpasotexas.gov', subject, (subject + '<BR>' + bodyText));
	}

	if (appMatch('ServiceRequest/Service Request/NA/NA') && AInfo['Health'] == 'CHECKED' && (AInfo['Information Request Only'] != 'Call Only' || AInfo['Complaint Type'] != 'Information Only')) {
		email('AASR-Health@elpasotexas.gov', 'accela@elpasotexas.gov', subject, (subject + '<BR>' + bodyText));
	}

	if (appMatch('ServiceRequest/Service Request/NA/NA') && AInfo['Municipal Court/Clerk'] == 'CHECKED' && (AInfo['Information Request Only'] != 'Call Only' || AInfo['Complaint Type'] != 'Information Only')) {
		email('AASR-MunicipalCourt@elpasotexas.gov;AASR-MunicipalClerk@elpasotexas.gov', 'accela@elpasotexas.gov', subject, (subject + '<BR>' + bodyText));
	}

	if (appMatch('ServiceRequest/Service Request/NA/NA') && AInfo['Department of Transportation (City)'] == 'CHECKED' && (AInfo['Information Request Only'] != 'Call Only' || AInfo['Complaint Type'] != 'Information Only')) {
		email('AASR-DepartmentofTransportationStreets@elpasotexas.gov', 'accela@elpasotexas.gov', subject, (subject + '<BR>' + bodyText));
	}

	if (appMatch('ServiceRequest/Service Request/NA/NA') && AInfo['Consolidated Tax Office'] == 'CHECKED' && (AInfo['Information Request Only'] != 'Call Only' || AInfo['Complaint Type'] != 'Information Only')) {
		email('AASR-ConsolidatedTaxOffice@elpasotexas.gov', 'accela@elpasotexas.gov', subject, (subject + '<BR>' + bodyText));
	}

	if (appMatch('ServiceRequest/Service Request/NA/NA') && AInfo['Convention & Visitors Bureau'] == 'CHECKED' && (AInfo['Information Request Only'] != 'Call Only' || AInfo['Complaint Type'] != 'Information Only')) {
		email('AASR-Convention&VisitorsBureau@elpasotexas.gov', 'accela@elpasotexas.gov', subject, (subject + '<BR>' + bodyText));
	}

	if (appMatch('ServiceRequest/Service Request/NA/NA') && AInfo['Sun Metro'] == 'CHECKED' && (AInfo['Information Request Only'] != 'Call Only' || AInfo['Complaint Type'] != 'Information Only')) {
		email('AASR-SunMetro@elpasotexas.gov', 'accela@elpasotexas.gov', subject, (subject + '<BR>' + bodyText));
	}

	if (appMatch('ServiceRequest/Service Request/NA/NA') && AInfo['Museums & Cultural Affairs'] == 'CHECKED' && (AInfo['Information Request Only'] != 'Call Only' || AInfo['Complaint Type'] != 'Information Only')) {
		email('AASR-Museums&CulturalAffairs@elpasotexas.gov', 'accela@elpasotexas.gov', subject, (subject + '<BR>' + bodyText));
	}

	if (appMatch('ServiceRequest/Service Request/NA/NA') && AInfo['Planning and Economic Development'] == 'CHECKED' && (AInfo['Information Request Only'] != 'Call Only' || AInfo['Complaint Type'] != 'Information Only')) {
		email('AASR-Planning@elpasotexas.gov;AASR-EconomicDevelopment@elpasotexas.gov', 'accela@elpasotexas.gov', subject, (subject + '<BR>' + bodyText));
	}

	if (appMatch('ServiceRequest/Service Request/NA/NA') && AInfo['Human Resources'] == 'CHECKED' && (AInfo['Information Request Only'] != 'Call Only' || AInfo['Complaint Type'] != 'Information Only')) {
		email('AASR-HumanResources@elpasotexas.gov', 'accela@elpasotexas.gov', subject, (subject + '<BR>' + bodyText));
	}

	if (appMatch('ServiceRequest/Service Request/NA/NA') && AInfo['Engineering and Construction Management'] == 'CHECKED' && (AInfo['Information Request Only'] != 'Call Only' || AInfo['Complaint Type'] != 'Information Only')) {
		email('AASR-Engineering&ConstructionMgmt@elpasotexas.gov', 'accela@elpasotexas.gov', subject, (subject + '<BR>' + bodyText));
	}

	if (appMatch('ServiceRequest/Service Request/NA/NA') && AInfo['International Bridges'] == 'CHECKED' && (AInfo['Information Request Only'] != 'Call Only' || AInfo['Complaint Type'] != 'Information Only')) {
		email('AASR-InternationalBridges@elpasotexas.gov', 'accela@elpasotexas.gov', subject, (subject + '<BR>' + bodyText));
	}

	if (appMatch('ServiceRequest/Service Request/NA/NA') && AInfo['Financial Services/OMB/Internal Audit'] == 'CHECKED' && (AInfo['Information Request Only'] != 'Call Only' || AInfo['Complaint Type'] != 'Information Only')) {
		email('AASR-FinancialServicesOMBAuditor@elpasotexas.gov', 'accela@elpasotexas.gov', subject, (subject + '<BR>' + bodyText));
	}

	if (appMatch('ServiceRequest/Service Request/NA/NA') && AInfo['Library'] == 'CHECKED' && (AInfo['Information Request Only'] != 'Call Only' || AInfo['Complaint Type'] != 'Information Only')) {
		email('AASR-Library@elpasotexas.gov', 'accela@elpasotexas.gov', subject, (subject + '<BR>' + bodyText));
	}

	if (appMatch('ServiceRequest/Service Request/NA/NA') && AInfo['Police'] == 'CHECKED' && (AInfo['Information Request Only'] != 'Call Only' || AInfo['Complaint Type'] != 'Information Only')) {
		email('AASR-Police@elpasotexas.gov', 'accela@elpasotexas.gov', subject, (subject + '<BR>' + bodyText));
	}

	if (appMatch('ServiceRequest/Service Request/NA/NA') && AInfo['Zoo'] == 'CHECKED' && (AInfo['Information Request Only'] != 'Call Only' || AInfo['Complaint Type'] != 'Information Only')) {
		email('AASR-Zoo@elpasotexas.gov', 'accela@elpasotexas.gov', subject, (subject + '<BR>' + bodyText));
	}

	if (appMatch('ServiceRequest/Service Request/NA/NA') && AInfo['Fire'] == 'CHECKED' && (AInfo['Information Request Only'] != 'Call Only' || AInfo['Complaint Type'] != 'Information Only')) {
		email('AASR-Fire@elpasotexas.gov', 'accela@elpasotexas.gov', subject, (subject + '<BR>' + bodyText));
	}

	if (appMatch('ServiceRequest/Service Request/NA/NA') && AInfo['IT'] == 'CHECKED' && (AInfo['Information Request Only'] != 'Call Only' || AInfo['Complaint Type'] != 'Information Only')) {
		email('AASR-InformationTechnology@elpasotexas.gov', 'accela@elpasotexas.gov', subject, (subject + '<BR>' + bodyText));
	}

	if (appMatch('ServiceRequest/Service Request/NA/NA') && AInfo['EPWU/Storm Water Utility'] == 'CHECKED' && (AInfo['Information Request Only'] != 'Call Only' || AInfo['Complaint Type'] != 'Information Only')) {
		email('bettisenx@elpasotexas.gov', 'accela@elpasotexas.gov', subject, (subject + '<BR>' + bodyText));
	}

	if (appMatch('ServiceRequest/Service Request/NA/NA') && AInfo['Complaint Type'] == 'Garbage/Billing') {
		email('eisertDA@elpasotexas.gov;WilliamsonAA@elpasotexas.gov;VegaMI@elpasotexas.gov', 'accela@elpasotexas.gov', (subject), (subject + bodyText));
	}

	if (appMatch('ServiceRequest/Service Request/NA/NA') && AInfo['Complaint Type'] == 'Garbage/Missed') {
		email('SettleBJ@elpasotexas.gov;CamargoCN@elpasotexas.gov', 'accela@elpasotexas.gov', (subject), (subject + bodyText));
	}

	if (appMatch('ServiceRequest/Service Request/NA/NA') && (AInfo['Complaint Type'] == 'Garbage/Dead Animal Pickup' || AInfo['Complaint Type'] == 'Garbage/Special Pickup/Bulk')) {
		email('hernandezMX@elpasotexas.gov;BustamanteLE@elpasotexas.gov;WilliamsonAA@elpasotexas.gov', 'accela@elpasotexas.gov', (subject), (subject + bodyText));
	}

	var da = 'Dead Animal Pickup - Farm Animal Request';
	if (AInfo['Farm Animal'] == 'Yes') {
		email('HernandezLX2@elpasotexas.gov;yamaguchij@elpasotexas.gov;OlivasMR@elpasotexas.gov', 'accela@elpasotexas.gov', (da), (subject + bodyText));
	}

}
