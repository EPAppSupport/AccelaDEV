function removeParent(parentAppNum)
//
// removes the current application from the parent
//
{
   var getCapResult = aa.cap.getCapID(parentAppNum);
   if (getCapResult.getSuccess())
   {
      var parentId = getCapResult.getOutput();
      var linkResult = aa.cap.removeAppHierarchy(parentId, capId);
      if (linkResult.getSuccess())
      logDebug("Successfully removed Parent Application : " + parentAppNum);
      else
      logDebug( "**ERROR: Removing parent application parent cap id (" + parentAppNum + "): " + linkResult.getErrorMessage());
   }
   else
   {
      logDebug( "**ERROR: getting parent cap id (" + parentAppNum + "): " + getCapResult.getErrorMessage())
   }
}
