
wfTask == 'Application Submittal' && wfStatus == 'Submitted';
if (wfTask == 'Application Submittal' && wfStatus == 'Submitted' && pCapID != false) {
	editAppSpecific('Charitable Solicitation Permit No.',pCapID.getCustomID());
	}

