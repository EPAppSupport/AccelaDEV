function esScheduleAuditInspection() {

	pCapId = getParent();
	if (pCapId != false) {

		//start replaced branch: ES_SCHEDULE_AUDIT_INSPECTION_
		{
			pCapId = getParent();
			if (pCapId != false)
				pCapObj = aa.cap.getCap(pCapId).getOutput();
			pCapIDString = pCapObj.getCapType().toString();
			if (pCapIDString != null && matches(pCapIDString, 'Building/Residential/New/NA', 'Building/Commercial/New/NA', 'Building/3rd/Residential/New')) {
				cCapId = childGetByCapType('Building/Audit/NA/NA', pCapId);
			}

			if (cCapId != false) {
				tempCap = capId;
				capId = cCapId;
				scheduleInspectDate('500 Audit', (dateAdd(inspSchedDate, 1, true)), null, null, ('Auditing Inspection : ' + inspType));
			}

		}
		//end replaced branch: ES_SCHEDULE_AUDIT_INSPECTION_;
	}

}
