function checkSiblingTasksComplete() // 
                {
                var ignoreArray = new Array();
                for (var i=1; i<arguments.length;i++) 
                                ignoreArray.push(arguments[i])

                // returns true if any of the subtasks are active

		var itemCap = capId;
		if (arguments.length == 1) itemCap = arguments[0]; // use cap ID specified in args

                var taskResult = aa.workflow.getTasks(itemCap);
                if (taskResult.getSuccess())
                                { taskArr = taskResult.getOutput(); }
                else
                                { logDebug( "**ERROR: CAP # "+capId.getCustomID()+" getting tasks : " + taskResult.getErrorMessage()); return false }
                                
                for (xx in taskArr)
                                if (taskArr[xx].getActiveFlag().equals("Y") && !exists(taskArr[xx].getTaskDescription(),ignoreArray))
                                                return false;
                return true;
                }
