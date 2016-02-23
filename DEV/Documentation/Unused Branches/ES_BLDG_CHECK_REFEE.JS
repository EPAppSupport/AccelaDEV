
reFee = false;
inspCode = inspType.substr(0,3);
comment('inspCode is: ' + inspCode);
if (!appMatch('Building/Irrigation/*/*') && AInfo['EPISD'] != 'Yes' && (feeBalance('FB082') > 0 || feeBalance('FB046') > 0 || feeBalance('FB105') > 0 || feeBalance('FB115') > 0 || feeBalance('FB158') > 0)) {
	reFee = true;
	}

if (appMatch('Building/Irrigation/*/*') && AInfo['EPISD'] != 'Yes' && feeBalance('FB137') > 0) {
	reFee = true;
	}

if (reFee == true && matches(inspCode,'640','630','320','220','740','915','800','902','907','420','400','940','200')) {
	showMessage = true;
	comment('This inspection cannot be scheduled. There is a balance on the record.');
	cancel = true;
	}

if (reFee == true && matches(inspCode,'640','630','320','220','740','915','800','902','907','420','400','940','200')) {
	showMessage = true;
	comment('This inspection cannot be scheduled. There is a re-inspection fee balance on the record.');
	cancel = true;
	}

