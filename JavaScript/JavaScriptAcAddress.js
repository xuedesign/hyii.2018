/******************************************************************************
  AJAX AUTO COMPLETE TAIWAN ADDRESS - JavaScript
  Version Modified By Janara.
  Based upon:  http://www.eion.com.tw
*******************************************************************************/
var theAjaxFileUrl="";
function GetAddressData(RType,KeyData){
	xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
	if(theAjaxFileUrl=="") {
		var strURL='GetAddressData7492.html?RType=' + RType + '&KeyData=' + KeyData;
	} else {
		var strURL='GetAddressData7492.html?RType=' + RType + '&KeyData=' + KeyData;
	}
	xmlhttp.open('POST.html',strURL,false);
	xmlhttp.Send(null);
	var rc=xmlhttp.responseText;
	return rc;
}

function RmOption(RType){
	var sltx=window.document.getElementById('slt' + RType);
	var oOption;
	var ooptcnt=sltx.options.length;
	for(var ii=1;ii<ooptcnt;ii++)
	{
		sltx.options[1].removeNode(true);
	}
}


function GenSlt(RType,rc){
	RmOption(RType);
	var sltx=window.document.getElementById('slt' + RType);
	var rca=rc.split(',');
	for(var idx=0;idx<rca.length;idx++)
	{
		oOption=window.document.createElement('OPTION');
		sltx.options.add(oOption);
		oOption.innerText=rca[idx];
		oOption.value=rca[idx];
	}
}


function sltCity_onChange(eType) {
	theAjaxFileUrl=eType;
	if(window.event.srcElement.value!='')
	{
		var KeyData;
		KeyData=window.document.DataSenderForm.sltCity.value;
		var rc=GetAddressData('Area',KeyData);
		GenSlt('Area',rc);
	}
	else
	{
		RmOption('Area');	
	}
	RmOption('Road');
	RmOption('Num');
	window.document.DataSenderForm.rSenderAddress.value='';
}

function sltArea_onChange() {
	if(window.event.srcElement.value!='')
	{
		var KeyData;
		KeyData=window.document.DataSenderForm.sltCity.value + ',' + window.document.DataSenderForm.sltArea.value;
		var rc=GetAddressData('Road',KeyData);
		GenSlt('Road',rc);
	}
	else
	{
		RmOption('Road');
	}
	RmOption('Num');
	window.document.DataSenderForm.rSenderAddress.value='';
}

function sltRoad_onChange() {
	if(window.event.srcElement.value!='')
	{
		var KeyData;
		KeyData=window.document.DataSenderForm.sltCity.value + ',' + window.document.DataSenderForm.sltArea.value + ',' + window.document.DataSenderForm.sltRoad.value;
		var rc=GetAddressData('Num',KeyData);
		GenSlt('Num',rc);
	}
	else
	{
		RmOption('Num');
	}
	window.document.DataSenderForm.rSenderAddress.value='';
}

function sltNum_onChange() {
	if(window.event.srcElement.value!='')
	{
		var KeyData;
		KeyData=window.document.DataSenderForm.sltCity.value + ',' + window.document.DataSenderForm.sltArea.value + ',' + window.document.DataSenderForm.sltRoad.value + ',' + window.document.DataSenderForm.sltNum.value;
		var rc=GetAddressData('Post',KeyData);
		bySltCity = window.document.DataSenderForm.sltCity.value
		bySltArea = window.document.DataSenderForm.sltArea.value
		bySltRoad = window.document.DataSenderForm.sltRoad.value
		window.document.DataSenderForm.rSenderAddress.value=bySltCity + bySltArea + bySltRoad + "  ¸¹";
		window.document.DataSenderForm.rSenderPostNumber.value=rc;
	}
	else
	{
		window.document.DataSenderForm.rSenderAddress.value='';
	}
}