
var subject = ('Regarding request ' + capIDString + '.');
var bodyText = 'Please disregard the Accela email associated with this record. It was sent to you in error. <BR><BR> Thank you.';
if (AInfo['Airport'] == 'CHECKED' && AInfo['Send Disregard Email'] == 'Yes') {
	email('AASR-Airport@elpasotexas.gov@faneuil.com@elpasotexas.gov','accela@elpasotexas.gov',subject, (bodyText));
	}

if (AInfo['Parks'] == 'CHECKED' && AInfo['Send Disregard Email'] == 'Yes') {
	email('AASR-Parks@elpasotexas.gov','accela@elpasotexas.gov',subject, (bodyText));
	}

if (AInfo['City Managers Office'] == 'CHECKED' && AInfo['Send Disregard Email'] == 'Yes') {
	email('AASR-CityManagersOffice@elpasotexas.gov','accela@elpasotexas.gov',subject, (bodyText));
	}

if (AInfo['General Services'] == 'CHECKED' && AInfo['Send Disregard Email'] == 'Yes') {
	email('AASR-GeneralServices@elpasotexas.gov','accela@elpasotexas.gov',subject, (bodyText));
	}

if (AInfo['Community Development'] == 'CHECKED' && AInfo['Send Disregard Email'] == 'Yes') {
	email('AASR-CommunityDevelopment@elpasotexas.gov','accela@elpasotexas.gov',subject, (bodyText));
	}

if (AInfo['Health'] == 'CHECKED' && AInfo['Send Disregard Email'] == 'Yes') {
	email('AASR-Health@elpasotexas.gov','accela@elpasotexas.gov',subject, (bodyText));
	}

if (AInfo['Municpal Court/Clerk'] == 'CHECKED' && AInfo['Send Disregard Email'] == 'Yes') {
	email('AASR-MunicipalCourt@elpasotexas.gov;
	AASR-MunicipalClerk@elpasotexas.gov','accela@elpasotexas.gov',subject, (bodyText));
	}

if (AInfo['Department of Transportation (City)'] == 'CHECKED' && AInfo['Send Disregard Email'] == 'Yes') {
	email('AASR-DepartmentofTransportationStreets@elpasotexas.gov','accela@elpasotexas.gov',subject, (bodyText));
	}

if (AInfo['Consolidated Tax Office'] == 'CHECKED' && AInfo['Send Disregard Email'] == 'Yes') {
	email('AASR-ConsolidatedTaxOffice@elpasotexas.gov','accela@elpasotexas.gov',subject, (bodyText));
	}

if (AInfo['Convention & Visitors Bureau'] == 'CHECKED' && AInfo['Send Disregard Email'] == 'Yes') {
	email('AASR-Convention&VisitorsBureau@elpasotexas.gov','accela@elpasotexas.gov',subject, (bodyText));
	}

if (AInfo['Sun Metro'] == 'CHECKED' && AInfo['Send Disregard Email'] == 'Yes') {
	email('AASR-SunMetro@elpasotexas.gov','accela@elpasotexas.gov',subject, (bodyText));
	}

if (AInfo['Museums & Cultural Affairs'] == 'CHECKED' && AInfo['Send Disregard Email'] == 'Yes') {
	email('AASR-Museums&CulturalAffairs@elpasotexas.gov','accela@elpasotexas.gov',subject, (bodyText));
	}

if (AInfo['Economic Development'] == 'CHECKED' || AInfo['Planning'] == 'CHECKED'  && AInfo['Send Disregard Email'] == 'Yes') {
	email('AASR-Planning@elpasotexas.gov;
	AASR-EconomicDevelopment@elpasotexas.gov','accela@elpasotexas.gov',subject, (bodyText));
	}

if (AInfo['Human Resources'] == 'CHECKED' && AInfo['Send Disregard Email'] == 'Yes') {
	email('AASR-HumanResources@elpasotexas.gov','accela@elpasotexas.gov',subject, (bodyText));
	}

if (AInfo['Engineering & Construction Management'] == 'CHECKED' && AInfo['Send Disregard Email'] == 'Yes') {
	email('AASR-Engineering&ConstructionMgmt@elpasotexas.gov','accela@elpasotexas.gov',subject, (bodyText));
	}

if (AInfo['International Bridges'] == 'CHECKED' && AInfo['Send Disregard Email'] == 'Yes') {
	email('AASR-InternationalBridges@elpasotexas.gov','accela@elpasotexas.gov',subject, (bodyText));
	}

if (AInfo['Financial Services/OMB/Internal Audit'] == 'CHECKED' && AInfo['Send Disregard Email'] == 'Yes') {
	email('AASR-FinancialServicesOMBAuditor@elpasotexas.gov','accela@elpasotexas.gov',subject, (bodyText));
	}

if (AInfo['Code Compliance'] == 'CHECKED' && AInfo['Send Disregard Email'] == 'Yes') {
	email('AASR-CodeCompliance@elpasotexas.gov','accela@elpasotexas.gov',subject, (bodyText));
	}

if (AInfo['Library'] == 'CHECKED' && AInfo['Send Disregard Email'] == 'Yes') {
	email('AASR-Library@elpasotexas.gov','accela@elpasotexas.gov',subject, (bodyText));
	}

if (AInfo['ESD Environmental Solid Waste'] == 'CHECKED' && AInfo['Send Disregard Email'] == 'Yes') {
	email('AASR-EnvironmentalSolidWaste@elpasotexas.gov','accela@elpasotexas.gov',subject, (bodyText));
	}

if (AInfo['Police-Central'] == 'CHECKED' || AInfo['Police-Mission Valley'] == 'CHECKED' || AInfo['Police-Northeast'] == 'CHECKED' == 'CHECKED' && AInfo['Send Disregard Email'] == 'Yes') {
	email('AASR-Police@elpasotexas.gov','accela@elpasotexas.gov',subject, (bodyText));
	}

if (AInfo['Zoo'] == 'CHECKED' && AInfo['Send Disregard Email'] == 'Yes') {
	email('AASR-Zoo@elpasotexas.gov','accela@elpasotexas.gov',subject, (bodyText));
	}

if (AInfo['Fire'] == 'CHECKED' && AInfo['Send Disregard Email'] == 'Yes') {
	email('AASR-Fire@elpasotexas.gov','accela@elpasotexas.gov',subject, (bodyText));
	}

if (AInfo['EPWU/Storm Water Utility'] == 'CHECKED' && AInfo['Send Disregard Email'] == 'Yes') {
	email('bettisenx@elpasotexas.gov','accela@elpasotexas.gov',subject, (bodyText));
	}

