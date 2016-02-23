
logDebug('Plan Review Status = ' + status);
logDebug('Call function updatePlanReviewWorkflow');
assignedToUser = getAssignedToStaff(capId);
var user = aa.person.getUser(assignedToUser);
userEmail = undefined;
userFirst = undefined;
userLast = undefined;
userPhoneNumber = undefined;
updatedTaskReview = undefined;
if (user.getSuccess()) {
	user = user.getOutput();
	userEmail = user.getEmail();
	userFirst = user.getFirstName();
	userLast = user.getLastName();
	userPhoneNumber = user.getPhoneNumber();
	caseManager = ('Case Manager is:' + '<BR>' + userFirst + ' ' + userLast + '<BR>' + userEmail + '<BR>' + userPhoneNumber);
	updatedTaskReview = (taskReviewComments + '<BR>' + caseManager);
	showMessage = true;
	comment(userFirst + ' ' + userLast + ' ' + userEmail);
}

updatePlanReviewWorkflow(taskName, status, updatedTaskReview, 'W');
