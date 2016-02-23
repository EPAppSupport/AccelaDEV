// TODO: review
if (matches(currentUserID, 'GUTIERREZMA', 'BSHIPP', 'CHAVEZJ1', 'RIVERALD', 'NUNEZR')) {
	showDebug = 3;
	showMessage = true;
}

if (appTypeArray[0] == 'Planning') {
	requiredReviewsStdChoice = 'PLAN REVIEW - REQUIRED REVIEWS';
	docTypesStdChoice = 'PLAN REVIEW - DOCUMENT TYPES';
	dueDateStdChoice = 'PLAN REVIEW - REVIEW TASK DUE DATES';
	docReviewStatusStdChoice = 'Plan Review Document Review Status - Planning';
	docStatusStdChoice = 'Plan Review Document Status - General';
	params = aa.util.newHashtable();
	acaUrl = 'https://acitdev/citizenaccessdev';
	getRecordParams4Notification(params);
	getACARecordParam4Notification(params, acaUrl);
	getContactParams4Notification(params, 'Applicant');
	getPrimaryAddressLineParam4Notification(params);
	getPrimaryOwnerParams4Notification(params);
}

if (appTypeArray[0] == 'Building') {
	requiredReviewsStdChoice = 'PLAN REVIEW - REQUIRED REVIEWS';
	docTypesStdChoice = 'PLAN REVIEW - DOCUMENT TYPES';
	dueDateStdChoice = 'PLAN REVIEW - REVIEW TASK DUE DATES';
	docReviewStatusStdChoice = 'Plan Review Document Review Status - Building';
	docStatusStdChoice = 'Plan Review Document Status - General';
	params = aa.util.newHashtable();
	acaUrl = 'https://acitdev/citizenaccessdev';
	getRecordParams4Notification(params);
	getACARecordParam4Notification(params, acaUrl);
	getContactParams4Notification(params, 'Applicant');
	getPrimaryAddressLineParam4Notification(params);
	getPrimaryOwnerParams4Notification(params);
}

enablePublicUserACADebug = 3;
if (currentUserID.indexOf('PUBLICUSER') > -1)
	enablePublicUserACADebug = 3;
