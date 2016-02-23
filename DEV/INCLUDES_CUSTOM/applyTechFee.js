function applyTechFee()
{
/*------------------------------------------------------------------------------------------------------/
| Jose L. Yañez
| El Paso Accela Team 2015.
| Copyright (C): 2015
|
| Function: applyTechFee
| Event   : 
| 
| Usage   : Applies Technology Fee for a Building Record in its corresponding Fee Schedule.
|
| Client  : N/A
| Action# : N/A
|
| Notes   : 
|				Added Planning/Zoning/Legal Non-Conforming/NA and fee schedule to both main arrays:	9/30/2015 by David Rivera
|
|
/------------------------------------------------------------------------------------------------------*/
	var flag 	= 0;
	var cap 	= aa.cap.getCap(capId).getOutput();
	var capType = cap.getCapType();
/*------------------------------------------------------------------------------------------------------/
| Building Record Types Array 
/------------------------------------------------------------------------------------------------------*/
	var types = new Array(	"Building/3rd/Demolition/NA"		 					,	
							"Building/3rd/Electrical/NA"		 					,
							"Building/3rd/Mechanical/NA"							,
							"Building/3rd/Plumbing/NA"								,
							"Building/3rd/Retaining Walls/NA"						,
							"Building/Demolition/NA/NA"								,
							"Building/Electrical/Completion/NA"						,
							"Building/Electrical/NA/NA"								,
							"Building/Fences/NA/NA"									,
							"Building/Mechanical/Completion/NA"						,
							"Building/Mechanical/NA/NA"								,
							"Building/Placement/NA/NA"								,
							"Building/Plumbing/Completion/NA"						,
							"Building/Plumbing/NA/NA"								,
							"Building/Reroof/NA/NA"									,
							"Building/Residential/Swimming Pool-Spa/NA"				,
							"Building/Retaining Walls/NA/NA"						,
							"Building/Siding/NA/NA"									,
							"Building/Temporary Placement/NA/NA"					,
							"Building/Windows/NA/NA"								,

							"Building/3rd/Commercial/Addition"						,
					      	"Building/3rd/Commercial/New"							,
							"Building/3rd/Commercial/Shell"							,
							"Building/3rd/Commercial/Tenant Improvement"			,
							"Building/3rd/Residential/Accessory Structure"			,
							"Building/3rd/Residential/Addition"						,
							"Building/3rd/Residential/Alteration"					,
							"Building/3rd/Residential/New"							,
							"Building/3rd/Residential/Swimming Pool"				,
							"Building/3rd/Solar/NA"									,
							"Building/After Hours Construction/NA/NA"				,
							"Building/Commercial/Addition/NA"						,
							"Building/Commercial/Completion/NA"						,
							"Building/Commercial/Demising Walls/NA"					,
							"Building/Commercial/New/NA"							,
							"Building/Commercial/Shell/NA"							,
							"Building/Commercial/Swimming Pool-Spa/NA"				,
							"Building/Commercial/Tenant Improvement/NA"				,			
							"Building/Existing Building C of O/NA/NA"				,
							"Building/Foundation/NA/NA"								,
							"Building/Irrigation/NA/NA"								,
							"Building/Land Development/Flood Zone/NA"				,
							"Building/Land Development/Grading/Commercial"			,
							"Building/Land Development/Grading/Mountain Development",
							"Building/Land Development/Grading/Residential"			,
							"Building/Land Development/Grading/Subdivision"			,
							"Building/Land Development/SWP3/Construction"			,
							"Building/Land Development/SWP3/Dewatering"				,
							"Building/Land Development/SWP3/Industrial"				,
							"Building/Mixed Use/NA/NA"								,
							"Building/Plumbing/Consumer Health Protection/NA"		,
							"Building/Residential/Accessory Structure/NA"			,
							"Building/Residential/Addition/NA"						,
							"Building/Residential/Alteration/NA"					,
							"Building/Residential/Completion/NA"					,
							"Building/Residential/New/NA"							,
							"Building/Right of Way/NA/NA"							,
							"Building/Shared Parking/NA/NA"							,
							"Building/Solar Panel/NA/NA"							,
							"Building/Temporary Amusement/NA/NA"					,
							"Building/Tents/NA/NA"				,
							"Planning/Zoning/Legal Non-Conforming/NA" 		//Added by David Rivera on 9/30/2015
	);

/*---------------------------------------------------------------------------------------------------------------------/
| Building Record Types Fee Schedules (schedfee Array position must match with Record Type position in the types Array ) 
/---------------------------------------------------------------------------------------------------------------------*/
	var schedfee = new Array(   "BLDGGEN" 		,
								"BLDGELEC"		,
								"BLDGMECH"		,
								"BLDGPLUMB"		,
								"BLDGGEN"		,
								"BLDGGEN"		,
								"BLDGELEC"		,
								"BLDGELEC"		,
								"BLDGGEN"		,
								"BLDGMECH"		,
								"BLDGMECH"		,
								"BLDGGEN"		,
								"BLDGPLUMB"		,
								"BLDGPLUMB"		,
								"BLDGROOF"		,
								"BLDGGEN"		,
								"BLDGGEN"		,
								"BLDGGEN"		,
								"BLDGGEN"		,
								"BLDGGEN"		,

								"COMM3P"		,
								"COMM3P"		,
								"COMM3P"		,
								"COMM3P"		,
								"RES3RD"		,
								"RES3RD"		,
								"RES3RD"		,
								"BLDTHIRD"		,
								"POOL"			,
								"SOLARTHIRD"	,
								"AFTERHOURSPERMIT",
								"COMMADD"		,
								"BCCOMP"		,
								"COMMSHELL"		,
								"COMMNEW"		,
								"COMMSHELL"		,
								"COMMPOOL"		,
								"COMMTI"		,
								"BLDEBCOO"		,
								"BLDGFOUNDATION",
								"BLDGIRR"		,
								"BLDLANDEVFLZON",
								"PLNGRD"		,
								"PLNGRD"		,
								"PLNGRD"		,
								"PLNGRD"		,
								"PLNSWP3"		,
								"PLNSWP3"		,
								"PLNSWP3"		,
								"COMMNEW"		,
								"BLDGPLMCHP"	,
								"RESACC"		,
								"RESADD"		,
								"RESALT"		,
								"BRCOMP"		,
								"RESNEW"		,
								"BLDGROW"		,
								"BLDGSHAREDPARKING",
								"BLDGSOLAR"		,
								"BLDGTMPAMUS"	,
								"BLDGTENT"	,
								"PLNLEGALNC"		//Added by David Rivera on 9/30/2015
	);

	for(x in types)
	{
	  	if (capType == types[x]) /* If Record type is Fpund in the Record Type Array */
	  	{
	  		//aa.print("Array Index: " + x + " " + types[x] + " " + schedfee[x]);
	  		sched = schedfee[x];
	    	fee = aa.finance.getFeeItemByCapID(capId).getOutput();
			f1 = aa.fee.getFeeItems(capId).getOutput();

			if(f1.length != 0)	/* If Record already has Fees applied (Any Kind) */
			{
				for(i in f1)
				{
					/* Check if already has the Technology Fee */
					if(f1[i].getFeeCod()=="TF001" || f1[i].getFeeCod()=="TF001A")
					{
						flag = 1;
						//aa.print(f1.length + " FLAG iNDEX: " + i );
					}
				}

				/* If it doesnt have the Technology Fee applied, then apply the corresponding one */
				if(flag == 0)
				{
					rr = aa.finance.createFeeItem(capId,sched,"TF001","STANDARD",1);
					//aa.print("FEES: " + f1.length + " TF001 " + rr.getSuccess());
				}
			}
			else
			{
				/* If Record has no Fees At All */
				rr = aa.finance.createFeeItem(capId,sched,"TF001","STANDARD",1);
				//aa.print("NO FEES: " + f1.length + " TF001 " + rr.getSuccess());
			}
		}
	}
}





