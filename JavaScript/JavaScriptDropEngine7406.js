var disappearDelay=300,horizontaloffset=-5,verticaloffset=5,ie4=document.all,ns6=document.getElementById&&!document.all;(ie4||ns6)&&document.write('<div id="kawaDM" style="visibility:hidden;width:100px" onmouseover="clearDropHidemenu()" onmouseout="dynamichide(event)"></div>');function getposOffset(a,b){for(var d="left"==b?a.offsetLeft:a.offsetTop,c=a.offsetParent;null!=c;)d="left"==b?d+c.offsetLeft:d+c.offsetTop,c=c.offsetParent;return d}
function showhide(a,b,d,c,e){if(ie4||ns6)dropmenuobj.style.left=dropmenuobj.style.top=-500;dropmenuobj.widthobj=dropmenuobj.style;dropmenuobj.widthobj.width=e;"click"==b.type&&a.visibility==c||"mouseover"==b.type?a.visibility=d:"click"==b.type&&(a.visibility=c)}function iecompattest(){return document.compatMode&&"BackCompat"!=document.compatMode?document.documentElement:document.body}
function clearBrowserEdge(a,b){var d=0;if("rightedge"==b){var c=ie4&&!window.opera?iecompattest().scrollLeft+iecompattest().clientWidth-15:window.pageXOffset+window.innerWidth-15;dropmenuobj.contentmeasure=dropmenuobj.offsetWidth;c-dropmenuobj.x-a.offsetWidth<dropmenuobj.contentmeasure&&(d=dropmenuobj.contentmeasure+a.offsetWidth)}else{var e=ie4&&!window.opera?iecompattest().scrollTop:window.pageYOffset,c=ie4&&!window.opera?iecompattest().scrollTop+iecompattest().clientHeight-15:window.pageYOffset+
window.innerHeight-18;dropmenuobj.contentmeasure=dropmenuobj.offsetHeight;c-dropmenuobj.y<dropmenuobj.contentmeasure&&(d=dropmenuobj.contentmeasure-a.offsetHeight,dropmenuobj.y-e<dropmenuobj.contentmeasure&&(d=dropmenuobj.y))}return d}function popUlateMenu(a){if(ie4||ns6)dropmenuobj.innerHTML=a.join("")}
function dropShowSubmenu(a,b,d,c){window.event?event.cancelBubble=!0:b.stopPropagation&&b.stopPropagation();clearDropHidemenu();dropmenuobj=document.getElementById?document.getElementById("kawaDM"):kawaDM;popUlateMenu(d);if(ie4||ns6)showhide(dropmenuobj.style,b,"visible","hidden",c),dropmenuobj.x=getposOffset(a,"left"),dropmenuobj.y=getposOffset(a,"top"),dropmenuobj.style.left=dropmenuobj.x-clearBrowserEdge(a,"rightedge")+a.offsetWidth+horizontaloffset+"px",dropmenuobj.style.top=dropmenuobj.y-clearBrowserEdge(a,
"bottomedge")+verticaloffset+"px";return clickReturnValue()}function clickReturnValue(){return ie4||ns6?!1:!0}function contains_ns6(a,b){for(;b.parentNode;)if((b=b.parentNode)==a)return!0;return!1}function dynamichide(a){ie4&&!dropmenuobj.contains(a.toElement)?dropHideSubmenu():ns6&&a.currentTarget!=a.relatedTarget&&!contains_ns6(a.currentTarget,a.relatedTarget)&&dropHideSubmenu()}function hidemenu(a){"undefined"!=typeof dropmenuobj&&(ie4||ns6)&&(dropmenuobj.style.visibility="hidden")}
function dropHideSubmenu(){if(ie4||ns6)delayhide=setTimeout("hidemenu()",disappearDelay)}function clearDropHidemenu(){"undefined"!=typeof delayhide&&clearTimeout(delayhide)};