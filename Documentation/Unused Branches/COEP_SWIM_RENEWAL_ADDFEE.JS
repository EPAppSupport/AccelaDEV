
if (numberOfYears == 1) {
	addFee('FL097','LICPOOL','STANDARD',1,'N');
	editAppSpecific('Expiration Date', dateAddMonths(null, 12));
	}

if (numberOfYears == 2) {
	addFee('FL097','LICPOOL','STANDARD',2,'N');
	editAppSpecific('Expiration Date', dateAddMonths(null, 24));
	}

