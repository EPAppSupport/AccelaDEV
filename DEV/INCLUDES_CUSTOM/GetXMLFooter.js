function GetXMLFooter(SOAPAction)
{
	var sb = aa.util.newStringBuffer();
	sb.append("</" + SOAPAction + ">");
	sb.append("	</soap:Body>");
	sb.append("</soap:Envelope>");
	return sb;
}