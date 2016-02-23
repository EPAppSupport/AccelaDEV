
termOfLicense = AInfo['Term of License'];
if (termOfLicense == '2 Year') {
	updateFee('FL090A','RENEWALLICCARDEAL','STANDARD',0,'Y','N');
	updateFee('FL091','RENEWALLICCARDEAL','STANDARD',1,'Y','N');
	}

if (termOfLicense == '1 Year') {
	updateFee('FL091','RENEWALLICCARDEAL','STANDARD',0,'Y','N');
	updateFee('FL090A','RENEWALLICCARDEAL','STANDARD',1,'Y','N');
	}

if (publicUser) {
	updateFee('TF001','RENEWALLICCARDEAL','STANDARD',1,'Y','N');
	updateFee('CC003','RENEWALLICCARDEAL','STANDARD',1,'Y','N');
	}

