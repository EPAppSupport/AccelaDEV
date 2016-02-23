
var canSerialNumber = AInfo['Can Serial No.'];
parentCapId = getParent();
if (parentCapId != false) {
	pCapObj = aa.cap.getCap(parentCapId).getOutput();
	pGroupType = pCapObj.getCapType().getType();
	pGroupTypeString = pGroupType.toString();
	pSubType = pCapObj.getCapType().getSubType();
	pSubTypeString = pSubType.toString();
	pCategory = pCapObj.getCapType().getCategory();
	pCategoryString = pCategory.toString();
	}

if (parentCapId != false && pGroupTypeString == 'Solid Waste' && pSubTypeString == 'Residential' && pCategory == 'Recycling') {
	editAppSpecific('Can Serial No.',canSerialNumber,parentCapId);
	}

