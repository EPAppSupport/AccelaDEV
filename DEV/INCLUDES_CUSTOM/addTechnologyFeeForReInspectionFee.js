
function addTechnologyFeeForReInspectionFee()
{
/*------------------------------------------------------------------------------------------------------/
| Jose L. Yañez
| El Paso Accela Team 2015.
| Copyright (C): 2015
|
| Function: addTechnologyFeeForReInspectionFee
| Event   : 
| 
| Usage   : Applies Technology Fee for a Building  Re-inspection Fee
|        Designed for Record Types:
|                                        "Building/Plumbing/Completion/NA"
|                                        "Building/Plumbing/NA/NA"
|                                        "Building/Plumbing/Consumer Health Protection/NA"
|                                        "Building/Reroof/NA/NA"
|                                        "Building/Siding/NA/NA"
|                                        "Building/Windows/NA/NA"
|                                        "Building/Mechanical/NA/NA"
|
| Client  : N/A
| Action# : N/A
|
| Notes   :
|
|
/------------------------------------------------------------------------------------------------------*/
    var  flag = 0;
    var  amt = 0;
    var cap     = aa.cap.getCap(capId).getOutput();
    var capType = cap.getCapType();
/*------------------------------------------------------------------------------------------------------/
| Building Record Types Array 
/------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------/
| Building Record Types Array 
/------------------------------------------------------------------------------------------------------*/
    var types = new Array(  "Building/Plumbing/Completion/NA",
                            "Building/Plumbing/NA/NA"        , 
                            "Building/Plumbing/Consumer Health Protection/NA",
                            "Building/Reroof/NA/NA"          ,     
                            "Building/Siding/NA/NA"          , 
                            "Building/Windows/NA/NA"         ,
                            "Building/Mechanical/NA/NA"      ,
                            "Building/Electrical/NA/NA"      ,
                            "Building/Fences/NA/NA"         );
                                        
/*---------------------------------------------------------------------------------------------------------------------/
| Building Record Types Fee Schedules (schedfee Fee Schedule Array position must match with Record Type position in the types Array ) 
/---------------------------------------------------------------------------------------------------------------------*/
    var schedfee = new Array( "BLDGPLUMB"    ,
                              "BLDGPLUMB"    ,
                              "BLDGPLMCHP"   ,
                              "BLDGROOF"     ,
                              "BLDGGEN"      ,
                              "BLDGGEN"      ,
                              "BLDGMECH"     ,
                              "BLDGELEC"     ,
                              "BLDGGEN"     );

    for(x in types)
    {
          if (capType == types[x]) /* If Record type is Fpund in the Record Type Array */
          {
            sched = schedfee[x];
            fee = aa.finance.getFeeItemByCapID(capId).getOutput();
            feeitems = aa.fee.getFeeItems(capId).getOutput();

            if(feeitems.length != 0)    /* If Record already has Fees applied (Any Kind) */
            {
                for(i in feeitems)
                {
                    /* Check if it has the Re-inspection Fee */
                    if(feeitems[i].getFeeCod()=="FB082")
                    {
                        flag = 1;
                        feecode = aa.finance.getFeeItemByFeeCode(capId,"FB082","STANDARD").getOutput();
                        amt =  feecode[0].getFee();
                    }
                    if(feeitems[i].getFeeCod()=="FB158")
                    {
                        flag = 1;
                        feecode = aa.finance.getFeeItemByFeeCode(capId,"FB158","STANDARD").getOutput();
                        amt =  feecode[0].getFee();
                    }
                }
                
                /* If it has the Re-inspection Fee applied, then apply the corresponding Tech Fee */
                if(flag == 1)
                {
                    addFee("TF001A",sched,"STANDARD",amt,"Y");
                }
            }
        }
    }
}

