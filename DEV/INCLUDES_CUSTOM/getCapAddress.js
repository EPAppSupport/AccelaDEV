
//---------------------------------------INSPECTIONRESULTSUBMITAFTER----------------------------------------------------
function getCapAddress(capId)
{
var CapAddress = "";
capAddressResult1 = aa.address.getAddressByCapId(capId);
if (capAddressResult1.getSuccess())
            {
            Address = capAddressResult1.getOutput();
            for (yy in Address)
                        {
                        CapAddress = Address[yy].getHouseNumberStart();
                        if (Address[yy].getStreetDirection())
                                    CapAddress += " " + Address[yy].getStreetDirection();
                        CapAddress += " " + Address[yy].getStreetName();
                        if (Address[yy].getStreetSuffix())
                                    CapAddress += " " + Address[yy].getStreetSuffix();
                        if (Address[yy].getUnitStart())
                                    CapAddress += " " + Address[yy].getUnitStart();
                        CapAddress += ", " + Address[yy].getCity();
                        CapAddress += " " + Address[yy].getZip();
                        }
            }

logDebug("CapAddress = " + CapAddress);
return CapAddress;
}

