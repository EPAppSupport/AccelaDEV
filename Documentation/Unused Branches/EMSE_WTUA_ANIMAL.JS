
if (appMatch('Animal/Complaint/NA/NA') && wfTask=='Assessment' && wfStatus=='Impound') {
	var newChild=createChild('Animal','Animal','NA','NA','');
	updateTask('Submittal','Complete','Updated via EMSE Script','Updated via EMSE Script','', newChild);
	copyAppSpecific(newChild);
	}

