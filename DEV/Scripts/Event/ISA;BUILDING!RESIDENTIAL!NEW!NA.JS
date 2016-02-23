
cCapId = childGetByCapType('Building/Audit/NA/NA',capId);
comment('cCapId is: ' + cCapId);
if ((cCapId != undefined && cCapId != false)) {
	tempCap = capId;
	capId = cCapId;
	scheduleInspectDate('500 Audit',(dateAdd(inspSchedDate, 1,true)),null,null,('Auditing Inspection : ' + inspType));
	}

