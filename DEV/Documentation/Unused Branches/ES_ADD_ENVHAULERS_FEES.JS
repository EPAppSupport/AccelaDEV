
rowCount = 0;
D = new Date();
if (typeof(VEHICLE) == 'object') {
	for (eachrow in VEHICLE) 
//start replaced branch: ES_ADD_ENVHAULERS_FEES_LOOP
 {
rowCount = rowCount + 1;

}
//end replaced branch: ES_ADD_ENVHAULERS_FEES_LOOP;
	}

comment('rowCount = ' + rowCount);
if (D.getMonth() <=8) {
	showMessage=true;
	var T = ((8-D.getMonth())* rowCount);
	comment('Numb:'+T);
	addFee('EV210','ENVHP','STANDARD',T,'N');
	}

