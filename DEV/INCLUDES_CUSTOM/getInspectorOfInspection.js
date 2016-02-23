
function getInspectorOfInspection(inspType)
{
	var inspResultObj = aa.inspection.getInspections(capId);
	var inspectorFName = "";
	var inspectorMName = "";
	var inspectorLName = "";
	if (inspResultObj.getSuccess())
		{
		inspList = inspResultObj.getOutput();
		for (xx in inspList)
			if (String(inspType).equals(inspList[xx].getInspectionType()))
				{
				inspectorLName = inspList[xx].getInspector().getLastName();
				inspectorMName = inspList[xx].getInspector().getMiddleName();
				inspectorFName = inspList[xx].getInspector().getFirstName();	
				return inspectorFName + " " + inspectorMName + " " + inspectorLName;
				}
		}
	return false;
}

