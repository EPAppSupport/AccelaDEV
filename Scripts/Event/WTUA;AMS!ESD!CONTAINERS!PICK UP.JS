
if (wfTask == 'Work Order' && wfStatus == 'Customer Drop Off') {
	activateTask('Finance Review');
	updateAppStatus('Customer Drop Off', 'Status set by script');
}
