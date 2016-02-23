
asiDate = new Date(AInfo['GENERAL.Start Date'] +' ' + AInfo['GENERAL.Start Time']).getTime();
currentDate = new Date().getTime();
diffDate = new Number((asiDate.toString()-currentDate.toString())/3600000).toFixed(0);
if (diffDate < 72 && AInfo['PERMIT INFO.Section'] == '9.12.070C1') {
	addFee('FH083','HLTHTEMP','STANDARD',1,'N');
	}

if (diffDate < 72 && AInfo['PERMIT INFO.Section'] == '9.12.070D1') {
	addFee('FH084','HLTHTEMP','STANDARD',1,'N');
	}

