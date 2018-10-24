/* Administrator JavaScript */

// Correlative Keyword
var theEditorCheck=true;
function GetCorrelativeKeywordData(theDs,theDsIndex,theDsSpan,theDsType) {
	
	if(theEditorCheck==true) {
		theEditorObject = theDs;
		theEditorDivName = theDsSpan;
		theEditorIndex = theDsIndex;
		theEditorType = theDsType;
		theEditorObject.className="DsDiagnoseColorOn"
		createXMLHttpRequest();
		var url = '../GetCommandAjaxValue7ad1.html?Operation=FillCorrelativeKeywordData&amp;Id='+theDsIndex+'&DsRowNumber='+theEditorType+'&G='+new Date().getMilliseconds();
		xmlhttp.open("GET.html", url);
		DataDetailsReceptacleName = theEditorDivName;
		xmlhttp.onreadystatechange = GetinnerHtmFills;
		xmlhttp.send(null);
		theEditorCheck=false ;
	} else{
		// Warning is Open
		if(theDs != theEditorObject){
		SaveCorrelativeKeywordDataData();
		theEditorCheck=true;
		}
	}
}

function SaveCorrelativeKeywordDataData(){
	var theDsValue = document.DsDiagnoseForm.DsDiagnoseValue.value;
	theIconValue=theDsValue;
	document.getElementById(theEditorDivName).innerHTML ="";
	theEditorObject.className="DsDiagnoseColorOff"
	if(theDsValue.length >0 && theDsValue !=""){
		createXMLHttpRequest();
		var url = '../GetCommandAjaxValue8df8.html?Operation=SaveingCorrelativeKeywordData&amp;Id='+theEditorIndex+'&DsValue='+theDsValue+'&DsRowNumber='+theEditorType+'&G='+new Date().getMilliseconds();
		xmlhttp.open("GET.html", url);
		DataDetailsReceptacleName = theEditorDivName;
		xmlhttp.onreadystatechange = GetinnerHtmFills;
		xmlhttp.send(null);
	}
	 theEditorCheck=true;
}

function GetCorrelativeKeywordInfo(element, eIndex){
	var returnObjDivName =element;
		returnElementId = document.getElementById("UnfoldedExtraNavigation");		
		var ObjOffsetLeft = CalculateLeftOffset(returnObjDivName) - 300;
		var ObjOffsetTop = CalculateTopOffset(returnObjDivName) - 1;
		returnElementId.style.height = 140 + "px";
		returnElementId.style.width = 300 + "px";	
		returnElementId.style.top = ObjOffsetTop + "px";
		returnElementId.style.left = ObjOffsetLeft + "px";		
		HiddenExtraUserDataDiv(true);

		createXMLHttpRequest();
		var url = "../GetCommandAjaxValuea95c.html?Operation=GetCorrelativeKeywordInfo&amp;IndexValue="+eIndex+"&G="+new Date().getMilliseconds()
		xmlhttp.open("GET.html", url);
		DataDetailsReceptacleName = "DetailsExtraReceptacle";
		xmlhttp.onreadystatechange = GetinnerHtmFills;
		xmlhttp.send(null);
}

function HiddenExtraUserDataDiv(isShow) {
	if (isShow) {
		document.getElementById("UnfoldedExtraNavigation").style.visibility='visible';
	} else {
		document.getElementById("UnfoldedExtraNavigation").style.visibility='hidden';
	}
}
// Analytics Reporting Script
function getAnalyticsReportPagesNavigator(setUserValue, setDateValue) {
	document.getElementById("tbAnalyticsReportSite").innerHTML ="<br><br><CENTER><IMG BORDER=0 Alt='' Src='../images/icon_loading.gif'></CENTER><br>&nbsp;<br>&nbsp;";
	createXMLHttpRequest();
	var url ="../GetAnalyticsReportAjaxValue3c4e.html?Operation=GetAnalyticsReportPageNavigator&amp;DataValue="+setUserValue+"&DateValue="+setDateValue+"&G="+new Date().getMilliseconds()
	xmlhttp.open("GET.html", url);
	DataDetailsReceptacleName = "tbAnalyticsReportSite";
	xmlhttp.onreadystatechange = GetinnerHtmFills;
	xmlhttp.send(null);
}

function getAnalyticsReportUserNavigator(setDateValue) {
	document.getElementById("tbAnalyticsReportUser").innerHTML ="<br><br><CENTER><IMG BORDER=0 Alt='' Src='../images/icon_loading.gif'></CENTER><br>&nbsp;<br>&nbsp;";
	createXMLHttpRequest();
	var url ="../GetAnalyticsReportAjaxValuef7cf.html?Operation=GetAnalyticsReportUserNavigator&amp;DataValue="+setDateValue+"&G="+new Date().getMilliseconds()
	xmlhttp.open("GET.html", url);
	DataDetailsReceptacleName = "tbAnalyticsReportUser";
	xmlhttp.onreadystatechange = GetinnerHtmFills;
	xmlhttp.send(null);
}

// Analytics Pages Script
var objDivNumber;
function getVisitorsAnalyticsRequest(setPageNameValue, setLanguage) {
objDivNumber = setPageNameValue;
	if(document.getElementById("ObjShowAnalytics"+objDivNumber).style.visibility == 'visible') {
		document.getElementById("ObjShowAnalytics"+objDivNumber).innerHTML = "";
		document.getElementById("ObjShowAnalytics"+objDivNumber).style.visibility ='hidden';
	} else {								
		document.getElementById("ObjShowAnalytics"+objDivNumber).style.visibility ='visible';
		createXMLHttpRequest();
		var url ="../GetAdministratorAjaxValued352.html?itemTextually=GetAnalyticsRecord&amp;DateValue="+setPageNameValue+"&siteLanguageValue="+setLanguage+"&G="+new Date().getMilliseconds()
		xmlhttp.open("GET.html", url);
		DataDetailsReceptacleName = "ObjShowAnalytics"+objDivNumber;
		xmlhttp.onreadystatechange = GetinnerHtmFills;
		xmlhttp.send(null);
	}
}

// Statistical Screen Script
function getVisitorsScreenRequest(setScreenPixelsValue,setTable) {

	var returnObjDivName = document.getElementById("tbScreenLister"+setTable);
		returnElementId = document.getElementById("UnfoldedExtraNavigation");		
		var ObjOffsetLeft = CalculateLeftOffset(returnObjDivName) + 5;
		var ObjOffsetTop = CalculateTopOffset(returnObjDivName) + 38;
		//alert(ObjOffsetTop)
		document.getElementById("DetailsExtraReceptacle").innerHTML ="<br><br><CENTER><IMG BORDER=0 Alt='' Src='../images/icon_loading.gif'></CENTER>";
		document.getElementById("DetailsExtraReceptacle").style.height = 260 + "px";	
		document.getElementById("DetailsExtraReceptacle").style.overflow  = "AUTO";
		returnElementId.style.height = 200 + "px";
		returnElementId.style.width = 240 + "px";	
		returnElementId.style.top = ObjOffsetTop + "px";
		returnElementId.style.left = ObjOffsetLeft + "px";
		HiddenExtraUserDataDiv(true);
		createXMLHttpRequest();
		var url = "../GetAdministratorAjaxValue93e4.html?Operation=GetVisitorsScreenRequest&amp;DateValue="+setScreenPixelsValue+"&G="+new Date().getMilliseconds()
		xmlhttp.open("GET.html", url);
		DataDetailsReceptacleName = "DetailsExtraReceptacle";
		xmlhttp.onreadystatechange = GetinnerHtmFills;
		xmlhttp.send(null);
}

// Statistical Script
var objDivNumber;
function getVisitorsRequest(setDateValue) {
objDivNumber = setDateValue;
	if(document.getElementById("ObjShowTable"+objDivNumber).style.visibility == 'visible') {
		document.getElementById("ObjShowTable"+objDivNumber).innerHTML = "";
		document.getElementById("ObjShowTable"+objDivNumber).style.visibility ='hidden';
	} else {								
		document.getElementById("ObjShowTable"+objDivNumber).style.visibility ='visible';
		createXMLHttpRequest();
		var url ="../GetAdministratorAjaxValue5948.html?itemTextually=GetStatisticsRecord&amp;DateValue="+setDateValue+"&G="+new Date().getMilliseconds()
		xmlhttp.open("GET.html", url);
		DataDetailsReceptacleName = "ObjShowTable"+objDivNumber;
		xmlhttp.onreadystatechange = GetinnerHtmFills;
		xmlhttp.send(null);
	}
}
// Statistical Search Analytics Script
function getSearchRequest(element, setDateValue) {
	var returnObjDivName =element;
		returnElementId = document.getElementById("UnfoldedExtraNavigation");		
		var ObjOffsetLeft = CalculateLeftOffset(returnObjDivName) - 480;
		var ObjOffsetTop = CalculateTopOffset(returnObjDivName) -24;
		document.getElementById("DetailsExtraReceptacle").innerHTML ="<br><br><CENTER><IMG BORDER=0 Alt='' Src='../images/icon_loading.gif'></CENTER>";
		document.getElementById("DetailsExtraReceptacle").style.height = 200 + "px";	
		document.getElementById("DetailsExtraReceptacle").style.overflow  = "AUTO";
		returnElementId.style.height = 160 + "px";
		returnElementId.style.width = 450 + "px";	
		returnElementId.style.top = ObjOffsetTop + "px";
		returnElementId.style.left = ObjOffsetLeft + "px";		
		HiddenExtraUserDataDiv(true);

		createXMLHttpRequest();
		var url = "../GetAdministratorAjaxValue6d90.html?Operation=GetSearchStatisticsRecord&amp;DateValue="+setDateValue+"&G="+new Date().getMilliseconds()
		xmlhttp.open("GET.html", url);
		DataDetailsReceptacleName = "DetailsExtraReceptacle";
		xmlhttp.onreadystatechange = GetinnerHtmFills;
		xmlhttp.send(null);
}

function changeStatisticDerivational(isDerivational) {
		//alert(isDerivational);
		document.StatisticDerivationalForm.StatisticDerivationalValue.value = isDerivational;
		document.StatisticDerivationalForm.action = "defaultfa11.html?f=Statistics";
		document.StatisticDerivationalForm.target = "_self";
		document.StatisticDerivationalForm.submit();
}

function showBounceRateHelp(element) {
	var returnObjDivName =element;
		returnElementId = document.getElementById("UnfoldedExtraNavigation");		
		var ObjOffsetLeft = CalculateLeftOffset(returnObjDivName) - 230;
		var ObjOffsetTop = CalculateTopOffset(returnObjDivName) + 20;
		document.getElementById("DetailsExtraReceptacle").innerHTML ="<br><br><CENTER><IMG BORDER=0 Alt='' Src='../images/icon_loading.gif'></CENTER>";
		document.getElementById("DetailsExtraReceptacle").style.height = 100 + "px";	
		document.getElementById("DetailsExtraReceptacle").style.overflow  = "AUTO";
		returnElementId.style.height = 100 + "px";
		returnElementId.style.width = 250 + "px";	
		returnElementId.style.top = ObjOffsetTop + "px";
		returnElementId.style.left = ObjOffsetLeft + "px";		
		HiddenExtraUserDataDiv(true);

		createXMLHttpRequest();
		var url = "../GetAdministratorAjaxValue30fd.html?Operation=GetshowBounceRateHelp&amp;G="+new Date().getMilliseconds()
		xmlhttp.open("GET.html", url);
		DataDetailsReceptacleName = "DetailsExtraReceptacle";
		xmlhttp.onreadystatechange = GetinnerHtmFills;
		xmlhttp.send(null);
}

function getVisitorsPages(element, setDateValue, setDiaed) {
	var returnObjDivName =element;
		returnElementId = document.getElementById("UnfoldedExtraNavigation");		
		var ObjOffsetLeft = CalculateLeftOffset(returnObjDivName) - 420;
		var ObjOffsetTop = CalculateTopOffset(returnObjDivName) - 1;
		document.getElementById("DetailsExtraReceptacle").innerHTML ="<br><br><CENTER><IMG BORDER=0 Alt='' Src='../images/icon_loading.gif'></CENTER>";
		document.getElementById("DetailsExtraReceptacle").style.height = 360 + "px";	
		document.getElementById("DetailsExtraReceptacle").style.overflow  = "AUTO";
		returnElementId.style.height = 200 + "px";
		returnElementId.style.width = 420 + "px";	
		returnElementId.style.top = ObjOffsetTop + "px";
		returnElementId.style.left = ObjOffsetLeft + "px";		
		HiddenExtraUserDataDiv(true);

		createXMLHttpRequest();
		var url = "../GetAdministratorAjaxValuef796.html?Operation=GetVisitorsPagesDataDetails&amp;DateValue="+setDateValue+"&DiaedValue="+setDiaed+"&G="+new Date().getMilliseconds()
		xmlhttp.open("GET.html", url);
		DataDetailsReceptacleName = "DetailsExtraReceptacle";
		xmlhttp.onreadystatechange = GetinnerHtmFills;
		xmlhttp.send(null);
}

function getUnitVisitorsUser(element, setDateValue, strItemName, strItemOther) {
	var returnObjDivName =element;
		returnElementId = document.getElementById("UnfoldedExtraNavigation");		
		var ObjOffsetLeft = CalculateLeftOffset(returnObjDivName) -180;
		var ObjOffsetTop = CalculateTopOffset(returnObjDivName) +18;
		document.getElementById("DetailsExtraReceptacle").innerHTML ="<br><br><CENTER><IMG BORDER=0 Alt='' Src='../images/icon_loading.gif'></CENTER>";
		document.getElementById("DetailsExtraReceptacle").style.height = 220 + "px";	
		document.getElementById("DetailsExtraReceptacle").style.overflow  = "AUTO";
		returnElementId.style.height = 100 + "px";
		returnElementId.style.width = 220 + "px";	
		returnElementId.style.top = ObjOffsetTop + "px";
		returnElementId.style.left = ObjOffsetLeft + "px";		
		HiddenExtraUserDataDiv(true);

		createXMLHttpRequest();
		var url = "../GetAdministratorAjaxValueae9e.html?Operation=GetVisitorsUserDataDetails&amp;DateValue="+setDateValue+"&strItemName="+strItemName+"&strItemOther="+strItemOther+"&G="+new Date().getMilliseconds()
		xmlhttp.open("GET.html", url);
		DataDetailsReceptacleName = "DetailsExtraReceptacle";
		xmlhttp.onreadystatechange = GetinnerHtmFills;
		xmlhttp.send(null);
}