
if (appMatch('Planning/Subdivision/Easement/NA') && AInfo['APPLICATION.Right-of-Way Type'] == 'Dedication') {
	addFee('FP016','PLNEASE','STANDARD',1,'N');
	}

if (appMatch('Planning/Subdivision/Easement/NA') && AInfo['APPLICATION.Right-of-Way Type'] == 'Vacation') {
	addFee('FP015','PLNEASE','STANDARD',1,'N');
	}

if (appMatch('Planning/Subdivision/Right of Way/NA')  && AInfo['APPLICATION.Right-of-Way Type'] == 'Vacation') {
	addFee('FP017','PLNROW','STANDARD',1,'N');
	}

if (appMatch('Planning/Subdivision/Right of Way/NA')  && AInfo['APPLICATION.Right-of-Way Type'] == 'Dedication') {
	addFee('FP018','PLNROW','STANDARD',1,'N');
	}

if (appMatch('Planning/Subdivision/Subdivision/Final')  && AInfo['GENERAL I.Type'] == 'Major') {
	addFee('FP002B','PLNSDSD','STANDARD',1,'N');
	}

if (appMatch('Planning/Subdivision/Subdivision/Final')  && AInfo['GENERAL I.Type'] == 'Minor') {
	addFee('FP002E','PLNSDSD','STANDARD',1,'N');
	}

if (appMatch('Planning/Subdivision/Subdivision/Final')  && AInfo['GENERAL I.Type'] == 'Resubdivision') {
	addFee('FP002F','PLNSDSD','STANDARD',1,'N');
	}

if (appMatch('Planning/Subdivision/Subdivision/Preliminary')  && AInfo['GENERAL I.Type'] == 'Major') {
	addFee('FP002','PLNSDSD','STANDARD',1,'N');
	}

if (appMatch('Planning/Subdivision/Subdivision/Preliminary')  && AInfo['GENERAL I.Type'] == 'Minor') {
	addFee('FP002E','PLNSDSD','STANDARD',1,'N');
	}

if (appMatch('Planning/Subdivision/Subdivision/Preliminary')  && AInfo['GENERAL I.Type'] == 'Resubdivision') {
	addFee('FP002D','PLNSDSD','STANDARD',1,'N');
	}

if (appMatch('Planning/Subdivision/Subdivision/Combo')  && AInfo['GENERAL I.Type'] == 'Major') {
	addFee('FP002C','PLNSDSD','STANDARD',1,'N');
	}

if (appMatch('Planning/Subdivision/Subdivision/Combo')  && AInfo['GENERAL I.Type'] == 'Minor') {
	addFee('FP002E','PLNSDSD','STANDARD',1,'N');
	}

if (appMatch('Planning/Subdivision/Subdivision/Combo')  && AInfo['GENERAL I.Type'] == 'Resubdivision') {
	addFee('FP002G','PLNSDSD','STANDARD',1,'N');
	}

