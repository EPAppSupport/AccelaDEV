
if (wfTask == 'HLC' && wfStatus == 'Denied w/o Appeal') {
	closeTask('Close', 'Closed', 'Closed because it was Denied w/o Appeal', '');
	addAppCondition('Parcel', 'Applied(Applied)', 'Denied w/o Appeal', 'Condition added because workflow HLC was Denied without Appeal', 'Lock');
}
