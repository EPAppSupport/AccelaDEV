
if (publicUser) {
	email('chavezj1@elpasotexas.gov;mcelroyms@elpasotexas.gov;rubioax@elpasotexas.gov;AA-ZoningSection@elpasotexas.gov', 'accela@elpasotexas.gov', ' ' + ' ' + 'A new Zoning Permit is submitted online, permit number is ' + capIDString + '.', ' A new Zoning Permit is submitted online, permit number is ' + capIDString + '.');
}

if (publicUser && !matches(AInfo['Zoning Dist'], 'G-MU General Mixed Use', 'R-MU Residential Mixed Use', 'I-MU Industrial Mixed Use')) {

	//replaced branch(ES_PLANNING_AMENDMNT_ACA_ADD_FEES)
	ES_PLANNING_AMENDMNT_ACA_ADD_FEES();
}
