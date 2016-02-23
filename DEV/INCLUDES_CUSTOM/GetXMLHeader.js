function GetXMLHeader(sURL, SOAPAction, SOAPNamespace)
{
	var sb = aa.util.newStringBuffer();
	sb.append("<?xml version=\"1.0\" encoding=\"utf-8\"?>");
	sb.append("<soap:Envelope");
	sb.append("	xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" ");
	sb.append("	xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" ");
	sb.append("	xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">");
	sb.append("	<soap:Body>");
	sb.append("<" + SOAPAction + " xmlns=\"");
	sb.append(SOAPNamespace);
	sb.append("\">");
	return sb;
}