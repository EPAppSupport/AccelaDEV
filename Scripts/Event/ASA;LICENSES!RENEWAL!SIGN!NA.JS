
if (AInfo['Type of License'] == 'Sign Painting Only') {
	updateFee('FL086','RENEWALLICSIGN','STANDARD',0,'Y','N');
	updateFee('FL087','RENEWALLICSIGN','STANDARD',0,'Y','N');
	updateFee('FL088','RENEWALLICSIGN','STANDARD',0,'Y','N');
	updateFee('FL085','RENEWALLICSIGN','STANDARD',1,'Y','N');
	}

if (AInfo['Type of License'] == 'On/Off Premise') {
	updateFee('FL086','RENEWALLICSIGN','STANDARD',1,'Y','N');
	updateFee('FL087','RENEWALLICSIGN','STANDARD',0,'Y','N');
	updateFee('FL088','RENEWALLICSIGN','STANDARD',0,'Y','N');
	updateFee('FL085','RENEWALLICSIGN','STANDARD',0,'Y','N');
	}

if (AInfo['Type of License'] == 'Inflatable Sign B-3') {
	updateFee('FL086','RENEWALLICSIGN','STANDARD',0,'Y','N');
	updateFee('FL087','RENEWALLICSIGN','STANDARD',1,'Y','N');
	updateFee('FL088','RENEWALLICSIGN','STANDARD',0,'Y','N');
	updateFee('FL085','RENEWALLICSIGN','STANDARD',0,'Y','N');
	}

if (AInfo['Type of License'] == 'Inflatable Sign B-4') {
	updateFee('FL086','RENEWALLICSIGN','STANDARD',0,'Y','N');
	updateFee('FL087','RENEWALLICSIGN','STANDARD',0,'Y','N');
	updateFee('FL088','RENEWALLICSIGN','STANDARD',1,'Y','N');
	updateFee('FL085','RENEWALLICSIGN','STANDARD',0,'Y','N');
	}

if (publicUser) {
	updateFee('TF001','RENEWALLICSIGN','STANDARD',1,'Y','N');
	updateFee('CC003','RENEWALLICSIGN','STANDARD',1,'Y','N');
	}

