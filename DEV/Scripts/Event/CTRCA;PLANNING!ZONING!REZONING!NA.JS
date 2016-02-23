
if (currentUserID.indexOf('PUBLICUSER') >= -1) {
	email('chavezj1@elpasotexas.gov;AA-ZoningSection@elpasotexas.gov', 'accela@elpasotexas.gov', 'A new Rezoning Permit is submitted online, permit number is ' + capIDString + '.', 'A new Rezoning Permit is submitted online, permit number is ' + capIDString + '.');
}

if (publicUser && !matches(AInfo['Zoning Dist'], 'G-MU General Mixed Use', 'R-MU Residential Mixed Use', 'I-MU Industrial Mixed Use')) {

	//replaced branch(ES_PLANNING_REZONING_ACA_ADD_FEES)
	ES_PLANNING_REZONING_ACA_ADD_FEES();
}
