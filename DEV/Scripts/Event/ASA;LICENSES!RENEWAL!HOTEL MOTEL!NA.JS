
updateFee('FL070','RENEWALLICHOTEL','STANDARD',1,'Y','N');
if (publicUser) {
	logDebug('Add Renewal fees');
	updateFee('FL070','RENEWALLICHOTEL','STANDARD',1,'Y');
	updateFee('TF001','RENEWALLICHOTEL','STANDARD',1,'Y');
	}

