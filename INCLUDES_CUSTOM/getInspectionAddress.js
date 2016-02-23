function  getInspectionAddress(capId){
var InspAddress = "";
capAddressResult1 = aa.address.getAddressByCapId(capId);
if (capAddressResult1.getSuccess())
            {
            Address = capAddressResult1.getOutput();
            for (yy in Address)
                        {
                        InspAddress = Address[yy].getHouseNumberStart();
                        if (Address[yy].getStreetDirection())
                                    InspAddress += " " + Address[yy].getStreetDirection();
                        InspAddress += " " + Address[yy].getStreetName();
                        if (Address[yy].getStreetSuffix())
                                    InspAddress += " " + Address[yy].getStreetSuffix();
                        if (Address[yy].getUnitStart())
                                    InspAddress += " " + Address[yy].getUnitStart();
                        InspAddress += ", " + Address[yy].getCity();
                        InspAddress += " " + Address[yy].getZip();
                        }
            }           
            
logDebug("InspAddress = " + InspAddress);

return InspAddress;

}

