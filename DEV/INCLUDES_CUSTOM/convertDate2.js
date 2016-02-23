
function convertDate2(thisDate)
// convert ScriptDateTime to Javascript Date Object
	{
	return new Date(thisDate.getMonth() + "/" + thisDate.getDayOfMonth() + "/" + thisDate.getYear());
	}
