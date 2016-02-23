function copyDetailedDescription(srcCapId, targetCapId)
{
    //1. Get CapWorkDesModel with source CAPID.
    var srcCapWorkDesModel = getCapWorkDesModel(srcCapId);
    if (srcCapWorkDesModel == null)
    {
        return;
    }
    //2. Copy Detailed Description from source to target.
    var targetCapWorkDesModel = srcCapWorkDesModel.getCapWorkDesModel();
    targetCapWorkDesModel.setCapID(targetCapId);
    aa.cap.createCapWorkDes(targetCapWorkDesModel);
}


