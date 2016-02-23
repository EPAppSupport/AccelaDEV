

//start replaced branch: COEP_ADD_ASIT_ENV_COMPLAINTS
 {

addRowArray2 = new Array;
addRowArray2['Resource Type'] = 'E-Hand Tools';
addRowArray2['Resource Quanitity'] = '1';
addRowArray2['Cost per Hour/Day'] = '5.00';
addRowArray2['Units'] = '';
addRowArray2['# of Minutes'] = '';
addRowArray2['Total'] = '5.00';
addRowArray3 = new Array;
addRowArray3['Resource Type'] = 'O-Administrative Fee';
addRowArray3['Resource Quanitity'] = '1';
addRowArray3['Cost per Hour/Day'] = '15.00';
addRowArray3['Units'] = '';
addRowArray3['# of Minutes'] = '';
addRowArray3['Total'] = '15.00';
addRowArray1 = new Array;
addRowArray1['Resource Type'] = 'L-Supervisor';
addRowArray1['Resource Quanitity'] = '1';
addRowArray1['Cost per Hour/Day'] = '23.00';
addRowArray1['Units'] = '';
addRowArray1['# of Minutes'] = '';
addRowArray1['Total'] = '23.00';
if (PROPERTYCLEANUPBILLING.length < 1) {
	addToASITable('PROPERTY CLEAN UP BILLING', addRowArray1);
	addToASITable('PROPERTY CLEAN UP BILLING', addRowArray2);
	addToASITable('PROPERTY CLEAN UP BILLING', addRowArray3);
	}

}
//end replaced branch: COEP_ADD_ASIT_ENV_COMPLAINTS;

//start replaced branch: COEP_SUM_TOTAL_PROPERTY_CLEANUP_BILLING
 {
totalSum = 0;
tax = .0825;
totalTax = 0;
if (typeof(PROPERTYCLEANUPBILLING) == 'object') {
	for(eachrow in PROPERTYCLEANUPBILLING) 
//start replaced branch: COEP_SUM_TOTAL_PROPERTY_CLEANUP_BILLING_LOOP
 {
totalRow = PROPERTYCLEANUPBILLING[eachrow];
totalSum = totalSum + parseFloat(totalRow['Total']);

}
//end replaced branch: COEP_SUM_TOTAL_PROPERTY_CLEANUP_BILLING_LOOP;
	}

if (totalSum > 0) {
	totalTax = Math.round((totalSum * parseFloat(tax))*100)/100;
	}

if (totalSum > 0) {
	editAppSpecific('Clean Up Cost', totalSum);
	editAppSpecific('Clean Up Tax', totalTax);
	}

}
//end replaced branch: COEP_SUM_TOTAL_PROPERTY_CLEANUP_BILLING;

//replaced branch(ES_PROJECT_NAME)
ES_PROJECT_NAME();

