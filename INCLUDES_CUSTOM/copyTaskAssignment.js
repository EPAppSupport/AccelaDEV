function copyTaskAssignment(taskFrom,taskTo) {
   var workflowResult = aa.workflow.getTasks(capId); 
   var wfObj = workflowResult.getOutput(); 
   var procId = wfObj[0].getProcessID();
   var currentTask = aa.workflow.getTaskItemByTaskDes(capId, taskFrom, procId); 
   
   var nextTask = aa.workflow.getTaskItemByTaskDes(capId, taskTo, procId);    
   var currentUser = currentTask.getAssignedStaff();
   currentTask = currentTask.getOutput();
   nextTask = nextTask.getOutput();
 
    if (currentUser) {

     nextTask.setAssignedUser(currentUser);
     assignCap(currentUser);
     aa.workflow.assignTask(nextTask.getTaskItem());
   }
}
