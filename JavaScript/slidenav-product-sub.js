var BallScrewMenu=[
'<a href="../ballscrew/internal-ball.html">���`���u�]����</a>',
'<a href="../ballscrew/external-ball.html">�~�`���u�]����</a>',
'<a href="../ballscrew/high-lead.html">���ɵ{�u�]����</a>',
'<a href="../ballscrew/heavy-load.html">���t���u�]����</a>',
'<a href="../ballscrew/end-deflector.html">�ݶ뫬�u�]����</a>',
'<a href="../ballscrew/end-cap.html">�ݻ\���u�]����</a>',
'<a href="../ballscrew/miniature.html">�p�]�|�u�]����</a>',
'<a href="../ballscrew/info.html" class="cc">�u�]����t�C</a>']
var ControllerMenu=[
'<a href="../rolled-ballscrews/info.html">��y�źu�]����</a>',
'<a href="../rolled-ballscrews/low-noise.html"><strong>FA</strong>�����R���u�]����</a>',
'<a href="../rolled-ballscrews/hollow-cooling.html">���ŧN�o�t��</a>']
var LinearGuidewayMenu=[
'<a href="../linear-guideway/heavy-load.html"><strong>MSA</strong>���t�����t�C</a>',
'<a href="../linear-guideway/compact.html"><strong>MSB</strong>�C�ո˫��t�C</a>',
'<a href="../linear-guideway/full-roller.html"><strong>MSR</strong>���u�W���t�C</a>',
'<a href="../linear-guideway/miniature.html"><strong>MSC</strong>�L�p���t�C</a>',
'<a href="../linear-guideway/ball-chain.html"><strong>SME</strong>���]��a���t�C</a>',
'<a href="../linear-guideway/roller-chainhtml"><strong>SMR</strong>�u�W��a���t�C</a>',
'<a href="../linear-guideway/info.html" class="cc">�u�ʷƭy�t�C</a>']
function changeButtonImage(element,eName){element.src=eName;}
function PreLoader(imgObj,imgSrc){if(document.images){eval(imgObj+' = new Image()')
eval(imgObj+'.src = "'+imgSrc+'"')}}
function IsInt(v)
{var vArr=v.match(/^[0-9]+$/);if(vArr==null)
{return false;}
else
{return true;}}
function doCookieSetup(name,value){var argv=doCookieSetup.arguments;var argc=doCookieSetup.arguments.length;var expires=(argc>2)?argv[2]:null;var path=(argc>3)?argv[3]:null;var domain=(argc>4)?argv[4]:null;var secure=(argc>5)?argv[5]:null;document.cookie=escape(name)+"="+escape(value)+((expires==null)?"":("; expires="+expires.toGMTString()))+((path==null)?"":("; path="+path))+((domain==null)?"":("; domain="+domain))+((secure==null)?"":("; secure="+secure));}
var DataDetailsReceptacleName=null;var xmlhttp;function createXMLHttpRequest(){if(window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();}
else if(window.ActiveXObject){xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}}
function GetinnerHtmFills(){if(xmlhttp.readyState==4){if(xmlhttp.status==200){document.getElementById(DataDetailsReceptacleName).innerHTML=xmlhttp.responseText;}}}
function CalculateLeftOffset(embraceSettings){var offset=0;while(embraceSettings){offset+=embraceSettings["offsetLeft"];embraceSettings=embraceSettings.offsetParent;}
return offset;}
function CalculateTopOffset(embraceSettings){var offset=0;while(embraceSettings){offset+=embraceSettings["offsetTop"];embraceSettings=embraceSettings.offsetParent;}
return offset;}
function fadeObjectHighligh(objNeme,speedValue){}
function fadeObjectLowligh(objNeme,opacityValue){}
function fadeObjectProcess(fadeProcessObject){if(fadeProcessObject.filters.alpha.opacity<90)
fadeProcessObject.filters.alpha.opacity+=30
else if(window.fadeProcessWork)
clearInterval(fadeProcessWork)}
getNewWindow=null;function openWindow(ContentUrl,theWidth,theHeight,theScroll,theStatusbar,theMenubar,theResizable){if(getNewWindow==null){var CoordX=(screen.width/2)-(theWidth/2);var CoordY=(screen.height/2)-(theHeight/2);getNewWindow=window.open(ContentUrl,'PMD','Left='+CoordX+',Top='+CoordY+',Width='+theWidth+',Height='+theHeight+',ScrollBars='+theScroll+',Status='+theStatusbar+',Menubar='+theMenubar+',Resizable='+theResizable+'');}else{try{getNewWindow.status;alreadyOpenMsg="_______________________________________________________\t\n";alert(alreadyOpenMsg+"\n This sub- Windows already opened, if rewill open please first closes the sub- Windows !\n Inspects whether hid to behind ! \n"+alreadyOpenMsg+"\n");}catch(e){getNewWindow=null;openWindow(ContentUrl,theWidth,theHeight,theScroll,theStatusbar,theMenubar,theResizable);}}}
function PopupModalDialog(ContentUrl,theWidth,theHeight){var showWindow=window.showModalDialog(ContentUrl,'PMD','dialogWidth='+theWidth+'px;dialogHeight='+theHeight+'px;Scrollbars=Yes;Center=1;Status=No;Help=No');}
is=new BrowserNavigationCheck()
function BrowserNavigationCheck(){var bnCheck=navigator.appName
if(bnCheck=="Netscape")this.bnCheck="ns"
else if(bnCheck=="Microsoft Internet Explorer")this.bnCheck="ie"
else this.bnCheck="ie";}
var diagnoseNavigation;var elementPointX;var elementPointY;function echoAlert(eInfo,element){returnElementObj=element;elementPointX=CalculateLeftOffset(returnElementObj);elementPointY=CalculateTopOffset(returnElementObj);echoAlertHidden();diagnoseNavigation.style.visibility="visible"
diagnoseNavigation.style.top=elementPointY+"px";diagnoseNavigation.style.left=elementPointX+"px";echoAlertShow();}
function echoAlertShow(){diagnoseNavigation.style.top=elementPointY+"px";diagnoseNavigation.style.left=elementPointX+"px";diagnoseNavigation.style.top=(document.body.clientWidth/2)-(260);diagnoseNavigation.style.left=(document.body.clientHeight/2)-(60);diagnoseNavigation.style.width=320+"px";diagnoseNavigation.style.height=120+"px";}
function echoAlertHidden(){diagnoseNavigation=document.getElementById("extNavigation");diagnoseNavigation.style.visibility="hidden"
diagnoseNavigation.style.width=10+"px";diagnoseNavigation.style.height=10+"px";}
function confirmDeleteCommand(ItemNAMEs){return(confirm('\n�T�{���O !\n�нT�w�i���ƧR���u�@ ?\t\t\n'));}
function confirmSaveCommand(ItemNAMEs){return(confirm('\n�T�{���O !\n�нT�w�i���Ƨ�s�u�@ ?\t\t\n'));}
function get_support(strName,strdoname){top.location.href='mailto:'+strName+'@'+strdoname}
function addWebTofavority(myAddress,myWebName){try{window.external.addFavorite(myAddress,myWebName);}
catch(e){try{window.sidebar.addPanel(myWebName,myAddress,"");}
catch(e){alert("�۰ʥ[�J���ÿ��~ !");}}}
function addWebTofavorityOldVersion(favName,favUrl){var myWebName;var myAddress;myWebName=favName;myAddress=favUrl;if(navigator.appName!="Netscape"){window.external.AddFavorite(myAddress,myWebName);}else{window.location=myAddress;}}
function GotoUrl(linkObjValue){top.location.href=linkObjValue;}
function jumpTo(s){if(s.selectedIndex!=0)top.location.href=s.options[s.selectedIndex].value;return 1;}
function changeExchangeObjColor(theMmID,theMmColor){document.getElementById(theMmID).style.backgroundColor=theMmColor;}
function ceCols(theMmID){document.getElementById(theMmID).style.backgroundColor="#194a92";document.getElementById(theMmID).style.color="#ffffff";}
function ceDols(theMmID){document.getElementById(theMmID).style.backgroundColor="#f0f0f0";document.getElementById(theMmID).style.color="#1f1f1f";}
function stopDiagnoseForm(){alert("\n �Ы����������x�s�ϥ� ! \t")
return false;}