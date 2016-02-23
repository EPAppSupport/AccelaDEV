/*
 * Send notification
 */
function sendNotification(emailFrom,emailTo,emailCC,templateName,params,reportFile)
{
	var id1 = capId.ID1;
 	var id2 = capId.ID2;
 	var id3 = capId.ID3;

	var capIDScriptModel = aa.cap.createCapIDScriptModel(id1, id2, id3);


	var result = null;
	result = aa.document.sendEmailAndSaveAsDocument(emailFrom, emailTo, emailCC, templateName, params, capIDScriptModel, reportFile);
	if(result.getSuccess())
	{
		logDebug("Sent email successfully!");
		return true;
	}
	else
	{
		logDebug("Failed to send mail. - " + result.getErrorType());
		return false;
	}
}
