
pCapID = false;
childrenCapID = false;
siblingCapID = false;
inspObj = aa.inspection.getInspection(capId, inspId).getOutput();
inspManualDate = inspObj.getInspectionDate().getMonth() + '/' + inspObj.getInspectionDate().getDayOfMonth() + '/' + inspObj.getInspectionDate().getYear();
comment('inspManualDate = ' + inspManualDate);

