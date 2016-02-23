
classCode = '';
feeQuantity = 0;
tblLiquorClass = null;
parentId = getParentLicenseCapID(capId);
logDebug('Parent ID: ' + parentId);
if (AInfo['Term of License'] == '1 Year')
	feeQuantity = 1;
if (AInfo['Term of License'] == '2 Year')
	feeQuantity = 2;
if (parentId != false)
	tblLiquorClass = loadASITable('LIQUOR CLASS', parentId);
if (typeof(tblLiquorClass) == 'object') {
	for (rec in tblLiquorClass)
		if (!matches(tblLiquorClass[rec]['Class'], 'Dancing', 'MI-Mini Bar After 3rd year')) {
			// replaced branch: RENEWAL:ALCHOHOL_FEES_01
			feeCode = '';
			classCode = tblLiquorClass[rec]['Class'];
			classCode = classCode.toString();
			if (classCode.indexOf('-') > -1) {
				classCode = classCode.substring(0, classCode.indexOf('-'));
				classCode = classCode.trim();
				feeCode = lookup('LIC_ALCOHOL_RENEWAL_FEE_MAPPING', classCode);
			}

			if (feeCode != '') {
				updateFee(feeCode, 'RENEWALLICALC', 'STANDARD', feeQuantity, 'Y', 'N');
				updateFee('CC003', 'RENEWALLICALC', 'STANDARD', 1, 'Y', 'N');
			}

			if (feeCode == undefined) {
				logDebug('Fee Code was not found for classCode: ' + classCode);
			}

		}
	// end replaced branch:RENEWAL:ALCHOHOL_FEES_01
}
