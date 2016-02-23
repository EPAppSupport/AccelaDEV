
if (currentUserID.indexOf('PUBLICUSER') >= -1) {
	email('chavezj1@elpasotexas.gov;mcelroyms@elpasotexas.gov;RubioAX@elpasotexas.gov;AA-ZoningSection@elpasotexas.gov', 'accela@elpasotexas.gov', '' + '' + 'A new Zoning Detail Site Permit is submitted online, permit number is ' + capIDString + '.', 'A new Zoning Detail Site Permit was submitted online, permit number is ' + capIDString + '.');
}

if (publicUser && !matches(AInfo['Zoning Dist'], 'G-MU General Mixed Use', 'R-MU Residential Mixed Use', 'I-MU Industrial Mixed Use')) {

	//replaced branch(ES_PLANNING_DETSITEP_ACA_ADD_FEES)
	ES_PLANNING_DETSITEP_ACA_ADD_FEES();
}
