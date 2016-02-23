function userRecordAudit()
{
   var pCapDetail;
   var pUserId;
   var userDept;
   var currentNumber;
   var newNumber = 0;
   var pCapDetailObj = aa.cap.getCapDetail(capId);
   
   if (pCapDetailObj.getSuccess())
      pCapDetail = pCapDetailObj.getOutput();
	  
   pUserId = getAssignedToStaff();

   userDept = getDepartmentName(pUserId);
   
   if(userDept == "ECM Building Plan Review" || userDept == "Development Assistance Center")
   {
      currentNumber = parseInt(lookup("USER_RECORD_AUDIT", pUserId));

	  if(isNaN(currentNumber))
	  {
	     addLookup("USER_RECORD_AUDIT", pUserId, "1");
		 return;
	  }

	  newNumber = parseInt(currentNumber) + 1;
	  
	  if(parseInt(newNumber) == 10)
	  {
	     auditCapId = createChild("Building", "Audit", "NA", "NA", "Building Audit Record", capId);
		 editLookup("USER_RECORD_AUDIT", pUserId, "0");
		 aa.sendMail("accela@elpasotexas.gov", "LamasMX@elpasotexas.gov; rothre@elpasotexas.gov; garciaaa@elpasotexas.gov; EstalaJO@elpasotexas.gov;ShippBA@elpasotexas.gov;AguinagaC@elpasotexas.gov;FranciaJX@elpasotexas.gov;ortizcc@elpasotexas.gov", "DeLaCruzJA@elpasotexas.gov;Morrison-VegaVX@elpasotexas.gov", "Audit Record Created "+ auditCapId.getCustomID(), "An audit record has been created for Record Number "+ capIDString);
	  }
	  else
	     editLookup("USER_RECORD_AUDIT", pUserId, newNumber);
   }
}

