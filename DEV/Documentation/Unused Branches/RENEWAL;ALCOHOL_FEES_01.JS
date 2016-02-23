
feeCode = '';
classCode = tblLiquorClass[rec]['Class'];
classCode = classCode.toString();
if (classCode.indexOf('-') > -1) {
	classCode = classCode.substring(0, classCode.indexOf('-'));
	classCode = classCode.trim();
	feeCode = lookup('LIC_ALCOHOL_RENEWAL_FEE_MAPPING', classCode);
	}

if (feeCode != '') {
	updateFee(feeCode, 'RENEWALLICALC','STANDARD', feeQuantity,'Y','N');
	updateFee('CC003','RENEWALLICALC','STANDARD', 1, 'Y','N');
	}

if (feeCode == undefined) {
	logDebug('Fee Code was not found for classCode: ' + classCode);
	}

