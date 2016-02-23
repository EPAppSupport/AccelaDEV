function CreateXMLElement(sb, sTag, sChildren)
{
	var sb = aa.util.newStringBuffer();
	// Future Enh: hash table of attribute key value pairs.
	// sChildren is assumed to already be well-formed XML data in String or StringBuffer format.
	if (sb == null)
	{
		sb = aa.util.newStringBuffer();
	}
	sb.append("<");
	sb.append(sTag);
	sb.append(">");
	sb.append(sChildren);
	sb.append("</");
	sb.append(sTag);
	sb.append(">");
	return sb;
	}