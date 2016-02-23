function associateDoc2TaskAndReviewerDept(docs2Review,allTasksArray) {
	// creates the document review task for each required review, associate it to the
	// appropriate workflow task and assign to the user/dept on the workflow task

	logDebug("Inside associateDoc2TaskAndReviewerDept().  Params: docs2Review = " + docs2Review + ", allTasksArray = " + allTasksArray);

	for (rta in allTasksArray) {
		
		thisTask = allTasksArray[rta];
		
		logDebug("Checking " + AInfo[thisTask]);
		if(AInfo[thisTask] == "Yes") 
		{
			
			var reviewerList = aa.util.newArrayList();

			var taskItemResult = aa.workflow.getTask(capId,thisTask);

			if(taskItemResult.getSuccess()) {
				taskItem = taskItemResult.getOutput().getTaskItem();
				sysUserModel = taskItem.getAssignedUser();
				reviewerList.add(sysUserModel);
				var associateResult = aa.document.associateReviewer2Doc(docs2Review,reviewerList,taskItem);

				if(associateResult.getSuccess()) {
					logDebug("Added document review: " + thisTask);
					//If due dates need set
					//updateReviewTaskDueDate(dueDateStdChoice,requiredTasksArray[rta],true);
				} else {
					logDebug("Couldn't associate document review: " + thisTask);
				}
			} 
			else 
			{
				logDebug("Couldn't retrieve task: " + thisTask);
			}
		}
	}
}
