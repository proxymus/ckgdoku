var update_ckgdokuInternalLink,update_ckgdokuMediaLink;var fckgInternalInputId,fckgMediaInputId,ckgdokuIwikiData,ckgdokuIwikiIndex,ckgdokuInternalText;var ck_m_files_protocol,ckg_dialog,linkOpt;window.onbeforeunload=function(){};CKEDITOR.dialog.add("link",function(b){oDokuWiki_FCKEditorInstance.Lang=b.lang;ck_m_files_protocol=oDokuWiki_FCKEditorInstance.mfiles?["m-files://\u200E","m-files://"]:"";var z=oDokuWiki_FCKEditorInstance.dwiki_doku_base;var U=CKEDITOR.plugins.link;var g=new Object();g.doku_base=new RegExp("^"+z.replace(/\//g,"\\/"),"g");g.media_internal=/lib\/exe\/fetch\.php\/(.*)/;g.media_rewrite_1=/^_media\/(.*)/;g.media_rewrite_1Doku_Base=new RegExp("^"+z+"_media/(.*)");g.media_rewrite_2=/exe\/fetch.php\?media=(.*)/;g.internal_link=/doku.php\?id=(.*)/;g.internal_link_rewrite_2=/doku.php\/(.*)/;g.internal_link_rewrite_1=new RegExp("^"+z+"(?!_media)(.*)");g.samba=/file:\/\/\/\/\/(.*)/;g.interwiki=/^(.*?)oIWIKIo(.*?)cIWIKIc/;g.samba_unsaved=/^\\\\\w+(\\\w.*)/;ckg_dialog=CKEDITOR.dialog;var E;var K={InternalLink:"internal link",InternalMedia:"internal media",MediaFileLink:"link to media file",SMBLabel:"Samba Share",GetHeadingsLabel:"Get Headings",QStringLabel:"Query String (For example: value_1=1&value_2=2) ",ResetQS:"Reset Query String",NotSetOption:"Not Set",AdvancedInfo:"To create anchors from Dokuwiki headers, click on the Get Headings button, select the header, click OK. You can go back, select a new page and get new headers.",AdvancedTabPrompt:"Use the advanced tab to create page anchors and query strings",SMBExample:"Enter your share as: \\\\Server\\directory\\file",InterWikiLink:"Interwiki Link",InterWikiType:"Interwiki Type",InterwikiPlaceHolder:"Interwiki Replacement Text",InterwikiInfo:"<div style='max-width:350px; white-space: pre-wrap;border:1px solid #cccccc; margin:auto; overflow:auto; padding:4px;line-height:125%;'>Dokuwiki's interwiki links are short-cuts which look like this: <span style='font-weight:600'>[[wp&gt;Shakespeare]]</span>, which will create a link to the English Wikipedia article on Shakespeare.  The <span style='font-weight:600'>wp</span> part designates a link pattern;  the text following the '<span style='font-weight:900'>&gt;</span>' will be inserted into the link, replacing  a place holder, which is enclosed in curly brackets, as in <span style='font-weight:600'>{NAME}</span>. When there is no place holder, the replacement text will be appended to the end of the link.</div>",MediaFileLink:"link to media file"};var t=b.lang.fbrowser?b.lang.fbrowser:K;var k=function(X){if(t[X]&&t[X]!=""){return t[X]}return K[X]};var m=function(){var X;jQuery.ajax(DOKU_BASE+"lib/exe/ajax.php",{data:{call:"iwiki_list"},type:"POST",async:true,dataType:"json",success:function(Z,aa,Y){X=Z},error:function(Y,aa,Z){alert(aa);alert(Z)}});return X};var T=function(){var aa=this.getDialog();var ac=aa.getContentElement("advanced","internalAnchor").getInputElement().$.id;var X=document.getElementById(ac);var Z=aa.getContentElement("info","internal").getInputElement().$.id;Z=document.getElementById(Z).value;if(!Z){return}var Y={push:function(ae,ad){this.stack[this.Index]=(new Option(ae,ad,false,false));this.Index++},Index:0,stack:undefined,selection:"",ini:function(ad){this.stack=X.options;this.stack.length=0;this.Index=0;this.push(ad,"")}};var ab="dw_id="+Z;b.config.jquery.post(b.config.ckedit_path+"get_headers.php",ab,function(ah,ad){if(ad=="success"){var ai=decodeURIComponent(ah);if(ai.match(/^\s*__EMPTY__\s*$/)){Y.ini("No Headers Found");Y.selection="";return}Y.ini("Headings Menu");var ag=ai.split("@@");for(var af in ag){var ae=ag[af].split(/;;/);Y.push(ae[0],ae[1])}}},"html")};var D=function(){doku_linkwiz.init(jQuery("#dw__editform"),b);doku_linkwiz.val="global";doku_linkwiz.toggle()};var N=function(Y){var Z=Y;var X=0;var aa="dw_id="+encodeURIComponent(Y);b.config.jquery.ajax({url:b.config.ckedit_path+"useheading.php",async:true,data:aa,type:"POST",dataType:"html",success:function(ab){if(X){alert(ab)}Z=decodeURIComponent(ab)},error:function(ab,ad,ac){Z=Y}});return Z};var V=function(){return E};var r;var o=function(){oDokuWiki_FCKEditorInstance.isLocalDwikiBrowser=false;oDokuWiki_FCKEditorInstance.isUrlExtern=false;oDokuWiki_FCKEditorInstance.isDwikiMediaFile=false;var aa=this.getDialog(),ad=["urlOptions","anchorOptions","emailOptions","internalOptions","mediaOptions","sambaOptions","interwikiOptions"],ac=this.getValue(),ab=aa.definition.getContents("upload"),X=ab&&ab.hidden;aa.hidePage("advanced");if(ac=="internal"){oDokuWiki_FCKEditorInstance.isLocalDwikiBrowser=true;aa.showPage("advanced")}else{if(ac=="media"){oDokuWiki_FCKEditorInstance.isDwikiMediaFile=true}}if(ac=="url"){oDokuWiki_FCKEditorInstance.isUrlExtern=true;if(!X){aa.showPage("upload")}}else{if(!X){aa.hidePage("upload")}}for(var Z=0;Z<ad.length;Z++){var Y=aa.getContentElement("info",ad[Z]);if(!Y){continue}Y=Y.getElement().getParent().getParent();if(ad[Z]==ac+"Options"){Y.show()}else{Y.hide()}}aa.layout()};var M=/^javascript:/,O=/^mailto:([^?]+)(?:\?(.+))?$/,j=/subject=([^;?:@&=$,\/]*)/,W=/body=([^;?:@&=$,\/]*)/,w=/^#(.*)$/,c=/^((?:http|https|ftp|news|m-files):\/\/)?(.*)$/,x=/^(_(?:self|top|parent|blank))$/,q=/^javascript:void\(location\.href='mailto:'\+String\.fromCharCode\(([^)]+)\)(?:\+'(.*)')?\)$/,J=/^javascript:([^(]+)\(([^)]+)\)$/;var s=z.replace("/","/")+"doku.php?id=(.*)$";var a="/"+s+"/";var n=/\s*window.open\(\s*this\.href\s*,\s*(?:'([^']*)'|null)\s*,\s*'([^']*)'\s*\)\s*;\s*return\s*false;*\s*/;var B=/(?:^|,)([^=]+)=(\d+|yes|no)/gi;var p=function(aa,X){var aq=(X&&(X.data("cke-saved-href")||X.getAttribute("href")))||"",ae,ap,am,af,ah={};if((ae=aq.match(M))){if(l=="encode"){aq=aq.replace(q,function(av,ax,aw){return"mailto:"+String.fromCharCode.apply(String,ax.split(","))+(aw&&v(aw))})}else{if(l){aq.replace(J,function(aB,aD,ay){if(aD==L.name){ah.type="email";var aC=ah.email={};var aw=/[^,\s]+/g,ax=/(^')|('$)/g,av=ay.match(aw),aE=av.length,aA,aF;for(var az=0;az<aE;az++){aF=decodeURIComponent(v(av[az].replace(ax,"")));aA=L.params[az].toLowerCase();aC[aA]=aF}aC.address=[aC.name,aC.domain].join("@")}})}}}if(!ah.type){var an=X?X.getAttribute("class"):"";if((am=aq.match(w))){ah.type="anchor";ah.anchor={};ah.anchor.name=ah.anchor.id=am[1]}else{if((ap=aq.match(O))){var ag=aq.match(j),ai=aq.match(W);ah.type="email";var ak=(ah.email={});ak.address=ap[1];ag&&(ak.subject=decodeURIComponent(ag[1]));ai&&(ak.body=decodeURIComponent(ai[1]))}else{if((af=aq.match(g.media_internal))||(af=aq.match(g.media_rewrite_1))||(af=aq.match(g.media_rewrite_2))||(af=aq.match(g.media_rewrite_1Doku_Base))){ah.type="media";ah.url={};ah.url.protocol="";ah.url.url="";ah.url.selected=af[1]}else{if((af=aq.match(a))||(af=aq.match(g.internal_link_rewrite_2))||(af=aq.match(g.internal_link_rewrite_1))){ah.type="internal";ah.url={};var Z=af[1].split("=");ah.url.selected=Z[1];ah.url.protocol="";ah.url.url=""}else{if(af=aq.match(g.samba)){ah.type="samba";ah.url={};ah.url.url="";ah.url.protocol="";ah.url.selected="\\\\"+af[1].replace(/\//g,"\\")}else{if(af=aq.match(g.samba_unsaved)){ah.type="samba";ah.url={};ah.url.url="";ah.url.protocol="";ah.url.selected=af[0]}else{if(af=aq.match(g.interwiki)||an.match(/interwiki/)){var al="";if(af&&af[2]){al=decodeURIComponent(af[2])}ah.url={};r=X.getAttribute("class");var ad=ckg_dialog.getContentElement("info","iwiki_shortcut");var ar=ad.getInputElement().$.id;var aj=document.getElementById(ar);var ac=r.match(/iw_([^\s]+)/);var ab=ac[1].replace(/_/,".");if(!al){var ao=ckgdokuIwikiData[ab];ao=ao.replace(/\{\w+\}$/,"");var Y=new RegExp(ao+"(.*)");ac=aq.match(Y);al=ac[1]}ab=ckgdokuIwikiIndex[ab];if(ab){aj.selectedIndex=ab}else{aj.selectedIndex="0"}ad.disable();ah.type="interwiki";ah.url.selected=al;ah.url.url=al}else{if(aq&&(af=aq.match(c))){ah.type="url";ah.url={};ah.url.protocol=af[1];ah.url.url=af[2]}else{ah.type="url"}}}}}}}}}if(X){var au=X.getAttribute("target");ah.target={};ah.adv={};var at=this}this._.selectedElement=X;return ah};var F=function(X){if(!X){return}document.getElementById(fckgInternalInputId).disabled=true;document.getElementById(fckgInternalInputId).style.fontWeight="bold";document.getElementById(fckgInternalInputId).style.backgroundColor="#DDDDDD";X=X.replace(/^[\/\:]/,"");X=X.replace(/\//g,":");X=":"+X;document.getElementById(fckgInternalInputId).value=X};update_ckgdokuInternalLink=F;var d=function(X){if(!X){return}X=X.replace(/^[\/\:]/,"");X=X.replace(/\//g,":");X=":"+X;document.getElementById(fckgMediaInputId).value=X};update_ckgdokuMediaLink=d;var u=function(X){for(i in X){msg=i+"="+X[i];if(!confirm(msg)){break}}};var A=function(Y,X){if(X[Y]){this.setValue(X[Y][this.id]||"")}};var Q=function(X){return A.call(this,"target",X)};var P=function(X){return A.call(this,"adv",X)};var S=function(Y,X){if(!X[Y]){X[Y]={}}X[Y][this.id]=this.getValue()||""};var C=function(X){return S.call(this,"target",X)};var R=function(X){return S.call(this,"adv",X)};function v(X){return X.replace(/\\'/g,"'")}function G(X){return X.replace(/'/g,"\\$&")}var l=b.config.emailProtection||"";if(l&&l!="encode"){var L={};l.replace(/^([^(]+)\(([^)]+)\)$/,function(X,Y,Z){L.name=Y;L.params=[];Z.replace(/[^,\s]+/g,function(aa){L.params.push(aa)})})}function f(Z){var X,Y=L.name,ad=L.params,ab,ac;X=[Y,"("];for(var aa=0;aa<ad.length;aa++){ab=ad[aa].toLowerCase();ac=Z[ab];aa>0&&X.push(",");X.push("'",ac?G(encodeURIComponent(Z[ab])):"","'")}X.push(")");return X.join("")}function y(Y){var X,ab=Y.length,Z=[];for(var aa=0;aa<ab;aa++){X=Y.charCodeAt(aa);Z.push(X)}return"String.fromCharCode("+Z.join(",")+")"}function I(Y){var X=Y.getAttribute("class");return X?X.replace(/\s*(?:cke_anchor_empty|cke_anchor)(?:\s*$)?/g,""):""}var H=b.lang.common,h=b.lang.link;linkOpt={};var e=CKEDITOR.instances.wiki__text.config.filebrowserBrowseUrl;if(e.indexOf("fckeditor")===-1){linkOpt={type:"button",id:"browse1",label:H.browseServer,onClick:D}}else{linkOpt={type:"button",id:"browse1",label:H.browseServer,filebrowser:"info:url"}}return{title:h.title,minWidth:375,minHeight:250,contents:[{id:"info",label:h.info,title:h.info,elements:[{id:"linkType",type:"select",label:h.type,"default":"url",items:[[h.toUrl,"url"],[k("InternalLink"),"internal"],[k("InternalMedia"),"media"],[h.toEmail,"email"],[k("SMBLabel"),"samba"],[k("InterWikiLink"),"interwiki"]],onChange:o,setup:function(X){if(X.type){this.setValue(X.type)}},commit:function(X){X.type=this.getValue()}},{type:"vbox",id:"urlOptions",children:[{type:"hbox",widths:["25%","75%"],children:[{id:"protocol",type:"select",label:H.protocol,"default":"http://",items:[["http://\u200E","http://"],["https://\u200E","https://"],["ftp://\u200E","ftp://"],["news://\u200E","news://"],ck_m_files_protocol],setup:function(X){if(X.url){this.setValue(X.url.protocol||"")}},commit:function(X){if(!X.url){X.url={}}X.url.protocol=this.getValue()}},{type:"text",id:"url",label:H.url,required:true,onLoad:function(){this.allowOnChange=true},onKeyUp:function(){this.allowOnChange=false;var Z=this.getDialog().getContentElement("info","protocol"),X=this.getValue(),Y=/^(http|https|ftp|news|m-files):\/\/(?=.)/i,ab=/^((javascript:)|[#\/\.\?])/i;var aa=Y.exec(X);if(aa){this.setValue(X.substr(aa[0].length));Z.setValue(aa[0].toLowerCase())}else{if(ab.test(X)){Z.setValue("")}}this.allowOnChange=true},onChange:function(){if(this.allowOnChange){this.onKeyUp()}},validate:function(){var X=this.getDialog();if(X.getContentElement("info","linkType")&&X.getValueOf("info","linkType")!="url"){return true}if(this.getDialog().fakeObj){return true}var Y=CKEDITOR.dialog.validate.notEmpty(h.noUrl);return Y.apply(this)},setup:function(X){this.allowOnChange=false;if(X.url){this.setValue(X.url.url)}this.allowOnChange=true},commit:function(X){this.onChange();if(!X.url){X.url={}}X.url.url=this.getValue();this.allowOnChange=false}}],setup:function(X){if(!this.getDialog().getContentElement("info","linkType")){this.getElement().show()}}}]},{type:"vbox",id:"internalOptions",children:[linkOpt,{type:"text",id:"internal",label:k("InternalLink"),required:true,setup:function(X){if(X){if(X.url&&X.url.selected){var Y=X.url.selected.replace(/^\:/,"");this.setValue(":"+Y)}}}},{type:"text",id:"internal_text",label:"internal link text (optional)",required:true},{id:"anchorsmsg",type:"html",html:k("AdvancedTabPrompt")}]},{type:"vbox",id:"interwikiOptions",children:[{type:"text",id:"interwiki",label:k("InterwikiPlaceHolder"),required:true,setup:function(X){if(X){if(X.url&&X.url.selected){var Y=X.url.selected.replace(/^\:/,"");this.setValue(Y)}}},commit:function(X){if(!X.url){X.url={}}X.url.selection=this.getValue()}},{id:"iwiki_shortcut",type:"select",label:k("InterWikiType"),"default":"",items:[["Not Set","Not-Set"]],setup:function(X){if(X.url){this.setValue(X.url.iwiki_shortcut||"")}},commit:function(X){if(!X.url){X.url={}}X.url.iwiki_shortcut=this.getValue()}},{id:"iwikimsg",type:"html",html:k("InterwikiInfo")}]},{type:"vbox",id:"mediaOptions",children:[{type:"button",id:"browse2",filebrowser:"info:media",label:H.browseServer},{type:"text",id:"media",label:k("MediaFileLink"),required:true,setup:function(X){if(X){if(X.url&&X.url.selected){var Y=X.url.selected.replace(/^\:/,"");this.setValue(":"+Y)}}}}]},{type:"vbox",id:"sambaOptions",children:[{type:"html",id:"smb_msg",html:k("SMBExample")},{type:"text",id:"samba",width:"50",label:k("SMBLabel"),required:true,setup:function(X){if(X.url&&X.url.selected){this.setValue(X.url.selected)}}}]},{type:"vbox",id:"emailOptions",padding:1,children:[{type:"text",id:"emailAddress",label:h.emailAddress,required:true,validate:function(){var X=this.getDialog();if(!X.getContentElement("info","linkType")||X.getValueOf("info","linkType")!="email"){return true}var Y=CKEDITOR.dialog.validate.notEmpty(h.noEmail);return Y.apply(this)},setup:function(Y){if(Y.email){this.setValue(Y.email.address)}var X=this.getDialog().getContentElement("info","linkType");if(X&&X.getValue()=="email"){this.select()}},commit:function(X){if(!X.email){X.email={}}X.email.address=this.getValue()}},{type:"text",id:"emailSubject",label:h.emailSubject,setup:function(X){if(X.email){this.setValue(X.email.subject)}},commit:function(X){if(!X.email){X.email={}}X.email.subject=this.getValue()}},{type:"textarea",id:"emailBody",label:h.emailBody,rows:3,"default":"",setup:function(X){if(X.email){this.setValue(X.email.body)}},commit:function(X){if(!X.email){X.email={}}X.email.body=this.getValue()}}],setup:function(X){if(!this.getDialog().getContentElement("info","linkType")){this.getElement().hide()}}}]},{id:"upload",label:h.upload,title:h.upload,hidden:true,filebrowser:"uploadButton",elements:[{type:"file",id:"upload",label:H.upload,style:"height:40px",size:29},{type:"fileButton",id:"uploadButton",label:H.uploadSubmit,filebrowser:"info:url","for":["upload","upload"]}]},{id:"advanced",label:h.advanced,title:h.advanced,elements:[{id:"msg",type:"html",html:"<p style='max-width:350px; white-space: pre-wrap;'>"+k("AdvancedInfo")+"</p>"},{id:"internalAnchor",type:"select","default":"",items:[["Not Set",""]],setup:function(X){if(X.hash){this.setValue(X.hash)}},commit:function(X){X.hash=this.getValue()}},{type:"button",id:"getheaders",onClick:T,label:k("GetHeadingsLabel")},{type:"html",html:"<br />"},{type:"text",id:"queryString",label:k("QStringLabel"),setup:function(X){if(X.qstring){this.setValue(X.qstring)}},commit:function(X){X.qstring=this.getValue()}},{type:"button",id:"clearquerystring",onClick:function(){var Y=this.getDialog();var Z=Y.getContentElement("advanced","queryString").getInputElement().$.id;var X=document.getElementById(Z);X.value=""},label:k("ResetQS")},{type:"vbox",padding:1,hidden:true,children:[{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:h.cssClasses,"default":"",id:"advCSSClasses",setup:P,commit:R},{type:"text",label:h.charset,"default":"",id:"advCharset",setup:P,commit:R}]}]}]}],onShow:function(){var Z=this.getParentEditor(),Y=Z.getSelection(),X=null;if((X=U.getSelectedLink(Z))&&X.hasAttribute("href")){Y.selectElement(X)}else{X=null}this.setupContent(p.apply(this,[Z,X]))},onOk:function(){var az=false;var ah=new RegExp(oDokuWiki_FCKEditorInstance.imageUploadAllowedExtensions);var aj={},ac=[],aC={},aB=this,ae=this.getParentEditor();this.commitContent(aC);var av=false;var ak="";switch(aC.type||"url"){case"media":if(document.getElementById(fckgMediaInputId).value){aC.url.url=document.getElementById(fckgMediaInputId).value}aC.adv.advTitle=aC.url.url;var aA=aC.url.url.match(/(\.(\w+))$/);ak=aC.url.url.replace(/^:/,"");aC.url.url=top.dokuBase+"doku.php?id="+aC.url.url;if(aA[1].match(ah)){aC.adv.advContentType="linkonly"}else{aC.adv.advContentType="other_mime";aC.url.url=top.dokuBase+"lib/exe/fetch.php?media="+ak;av=true}aC.adv.advCSSClasses="media mediafile";if(aA){aC.adv.advCSSClasses+=" mf_"+aA[2]}var ap=(aC.url&&aC.url.protocol!=undefined)?aC.url.protocol:"http://",af=(aC.url&&CKEDITOR.tools.trim(aC.url.url))||"";aj["data-cke-saved-href"]=(af.indexOf("/")===0)?af:ap+af;break;case"internal":az=document.getElementById(ckgdokuInternalText).value?document.getElementById(ckgdokuInternalText).value:false;if(!aC.url.url){aC.url.url=document.getElementById(fckgInternalInputId).value;if(!aC.url.url.match(/^:?\w+:/)){var aE=top.getCurrentWikiNS()+":";aE=aE.replace(/:$/,"");var ab=new RegExp(":?"+aE+":");if(!aC.url.url.match(ab)){aC.url.url=aE+":"+aC.url.url;aC.url.url=aC.url.url.replace(/\:{2,}/g,":")}}}aC.url.url=aC.url.url.replace(/^.*?\/data\/pages\//,"");aC.url.url=aC.url.url.replace(/^\:/,"");aC.url.url=":"+aC.url.url.replace(/\//g,":");aC.adv.advCSSClasses="wikilink1";if(oDokuWiki_FCKEditorInstance.useheading=="y"){aC.adv.advTitle=N(aC.url.url)}else{aC.adv.advTitle=aC.url.url}aC.url.url=top.dokuBase+"doku.php?id="+aC.url.url;if(aC.hash){aC.url.url+="#"+aC.hash}if(aC.qstring){aC.url.url+="&"+aC.qstring}var ap=(aC.url&&aC.url.protocol!=undefined)?aC.url.protocol:"http://",af=(aC.url&&CKEDITOR.tools.trim(aC.url.url))||"";aj["data-cke-saved-href"]=(af.indexOf("/")===0)?af:ap+af;break;case"interwiki":if(r){aC.adv.advCSSClasses=r}else{aC.adv.advCSSClasses="interwiki iw_"+aC.url.iwiki_shortcut}var aw=ckgdokuIwikiData[aC.url.iwiki_shortcut];aC.adv.advTitle=aC.url.selection;aC.url.selection="oIWIKIo"+aC.url.selection+"cIWIKIc";if(aw.match(/\{.*?\}/)){aC.url.url=ckgdokuIwikiData[aC.url.iwiki_shortcut].replace(/{.*?}/,aC.url.selection)}else{aC.url.url=aw+aC.url.selection}aj["data-cke-saved-href"]=aC.url.url;break;case"url":var ap=(aC.url&&aC.url.protocol!=undefined)?aC.url.protocol:"http://",af=(aC.url&&CKEDITOR.tools.trim(aC.url.url))||"";aj["data-cke-saved-href"]=(af.indexOf("/")===0)?af:ap+af;break;case"anchor":var aF=(aC.anchor&&aC.anchor.name),aq=(aC.anchor&&aC.anchor.id);aj["data-cke-saved-href"]="#"+(aF||aq||"");break;case"samba":if(!aC.url.url){aC.url.url=document.getElementById(V()).value}if(!aC.url.url){alert("Missing Samba Url");return false}aC.url.protocol="";var ap="";af=(aC.url&&CKEDITOR.tools.trim(aC.url.url))||"";aj["data-cke-saved-href"]=(af.indexOf("/")===0)?af:ap+af;aC.adv.advCSSClasses="windows";aC.adv.advTitle=aC.url.url;break;case"email":var aa,at=aC.email,ad=at.address;switch(l){case"":case"encode":var ag=encodeURIComponent(at.subject||""),al=encodeURIComponent(at.body||"");var ai=[];al&&ai.push("body="+al);ag&&ai.push("subject="+ag);ai=ai.length?"?"+ai.join("&"):"";if(l=="encode"){aa=["javascript:void(location.href='mailto:'+",y(ad)];ai&&aa.push("+'",G(ai),"'");aa.push(")")}else{aa=["mailto:",ad,ai]}break;default:var ar=ad.split("@",2);at.name=ar[0];at.domain=ar[1];aa=["javascript:",f(at)]}aj["data-cke-saved-href"]=aa.join("");break}if(aC.adv){var au=function(aG,aH){var aI=aC.adv[aG];if(aI){aj[aH]=aI}else{ac.push(aH)}};au("advId","id");au("advLangDir","dir");au("advAccessKey","accessKey");if(aC.adv.advName){aj.name=aj["data-cke-saved-name"]=aC.adv.advName}else{ac=ac.concat(["data-cke-saved-name","name"])}au("advLangCode","lang");au("advTabIndex","tabindex");if(!av){au("advTitle","title")}au("advContentType","type");au("advCSSClasses","class");au("advCharset","charset");au("advStyles","style");au("advRel","rel")}var aD=ae.getSelection();var ao=aD.getSelectedText()?aD.getSelectedText():false;aj.href=aj["data-cke-saved-href"];if(!this._.selectedElement){var Z=aD.getRanges(true);if(Z.length==1&&Z[0].collapsed){var an=new CKEDITOR.dom.text(aC.type=="email"?aC.email.address:aj["data-cke-saved-href"],ae.document);Z[0].insertNode(an);Z[0].selectNodeContents(an);aD.selectRanges(Z)}if(navigator.userAgent.match(/(Trident|MSIE)/)){var X=ae.document.createElement("a");X.setAttribute("href",aj.href);if(!ao&&(aC.type=="media"||aC.type=="internal")){if(az){X.setHtml(az)}else{X.setHtml(aC.adv.advTitle)}}else{X.setHtml(aD.getSelectedText())}for(attr in aj){if(attr.match(/href/i)){continue}X.setAttribute(attr,aj[attr])}ae.insertElement(X)}else{var ay=new CKEDITOR.style({element:"a",attributes:aj});ay.type=CKEDITOR.STYLE_INLINE;ay.apply(ae.document)}}else{var Y=this._.selectedElement,ax=Y.data("cke-saved-href"),am=Y.getHtml();if(av){aj.type="other_mime";aj.title=":"+ak}Y.setAttributes(aj);Y.removeAttributes(ac);if(aC.adv&&aC.adv.advName&&CKEDITOR.plugins.link.synAnchorSelector){Y.addClass(Y.getChildCount()?"cke_anchor":"cke_anchor_empty")}if(ax==am||aC.type=="email"&&am.indexOf("@")!=-1){Y.setHtml(aC.type=="email"?aC.email.address:aj["data-cke-saved-href"])}aD.selectElement(Y);delete this._.selectedElement}if(az){an.setText(az)}else{if(an&&aC.adv.advTitle){an.setText(aC.adv.advTitle)}}},onLoad:function(){ckgdokuIwikiData=m();var ae=this.getContentElement("info","iwiki_shortcut").getInputElement().$.id;var X=document.getElementById(ae);this.stack=X.options;this.stack.length=0;this.stack[0]=(new Option("Not Set","not-set",false,false));ckgdokuIwikiIndex=new Array();var ac=1;for(var Z in ckgdokuIwikiData){this.stack[ac]=new Option(Z+" >> "+ckgdokuIwikiData[Z],Z,false,false);ckgdokuIwikiIndex[Z]=ac;ac++}oDokuWiki_FCKEditorInstance.isDwikiImage=false;fckgInternalInputId=this.getContentElement("info","internal").getInputElement().$.id;ckgdokuInternalText=this.getContentElement("info","internal_text").getInputElement().$.id;fckgMediaInputId=this.getContentElement("info","media").getInputElement().$.id;E=this.getContentElement("info","samba").getInputElement().$.id;var ab=this.getContentElement("info","iwiki_shortcut").getInputElement().$.id;this.getContentElement("info","media").disable();this.hidePage("advanced");this.showPage("info");ckg_dialog=this;var aa=this._.tabs.advanced&&this._.tabs.advanced[0];var Y=this;var ad=k("NotSetOption");aa.on("focus",function(ag){var ah=Y.getContentElement("advanced","internalAnchor").getInputElement().$.id;var af=document.getElementById(ah);af.selectedIndex=-1;af.options.length=0;af.options[0]=new Option(ad,"",false,false)})},onFocus:function(){var X=this.getContentElement("info","linkType"),Y;if(X&&X.getValue()=="url"){Y=this.getContentElement("info","url");Y.select()}}}});var doku_linkwiz={$wiz:null,$entry:null,result:null,timer:null,textArea:null,selected:null,$ck:null,init:function(b,a){var c=b.position();$ck=a;if(doku_linkwiz.$wiz){return}doku_linkwiz.$wiz=jQuery(document.createElement("div")).dialog({autoOpen:false,draggable:true,title:LANG.linkwiz,resizable:false}).html("<div>"+LANG.linkto+' <input type="text" class="edit" id="link__wiz_entry" autocomplete="off" /></div><div id="link__wiz_result"></div>').parent().attr("id","link__wiz").css({position:"absolute",top:(c.top+20)+"px",left:(c.left+80)+"px","z-index":"20000"}).hide().appendTo(".dokuwiki:first");doku_linkwiz.textArea=b[0];doku_linkwiz.result=jQuery("#link__wiz_result")[0];jQuery(doku_linkwiz.result).css("position","relative");doku_linkwiz.$entry=jQuery("#link__wiz_entry");if(JSINFO.namespace){doku_linkwiz.$entry.val(JSINFO.namespace+":")}jQuery("#link__wiz .ui-dialog-titlebar-close").click(doku_linkwiz.hide);doku_linkwiz.$entry.keyup(doku_linkwiz.onEntry);jQuery(doku_linkwiz.result).delegate("a","click",doku_linkwiz.onResultClick)},onEntry:function(a){if(a.keyCode==37||a.keyCode==39){return true}if(a.keyCode==27){doku_linkwiz.hide();a.preventDefault();a.stopPropagation();return false}if(a.keyCode==38){doku_linkwiz.select(doku_linkwiz.selected-1);a.preventDefault();a.stopPropagation();return false}if(a.keyCode==40){doku_linkwiz.select(doku_linkwiz.selected+1);a.preventDefault();a.stopPropagation();return false}if(a.keyCode==13){if(doku_linkwiz.selected>-1){var b=doku_linkwiz.$getResult(doku_linkwiz.selected);if(b.length>0){doku_linkwiz.resultClick(b.find("a")[0])}}else{if(doku_linkwiz.$entry.val()){doku_linkwiz.insertLink(doku_linkwiz.$entry.val())}}a.preventDefault();a.stopPropagation();return false}doku_linkwiz.autocomplete()},getResult:function(a){DEPRECATED("use doku_linkwiz.$getResult()[0] instead");return doku_linkwiz.$getResult()[0]||null},$getResult:function(a){return jQuery(doku_linkwiz.result).find("div").eq(a)},select:function(b){if(b<0){doku_linkwiz.deselect();return}var d=doku_linkwiz.$getResult(b);if(d.length===0){return}doku_linkwiz.deselect();d.addClass("selected");var a=d.position().top;var c=a+d.outerHeight()-jQuery(doku_linkwiz.result).innerHeight();if(a<0){jQuery(doku_linkwiz.result)[0].scrollTop+=a}else{if(c>0){jQuery(doku_linkwiz.result)[0].scrollTop+=c}}doku_linkwiz.selected=b},deselect:function(){if(doku_linkwiz.selected>-1){doku_linkwiz.$getResult(doku_linkwiz.selected).removeClass("selected")}doku_linkwiz.selected=-1},onResultClick:function(a){if(!jQuery(this).is("a")){return}a.stopPropagation();a.preventDefault();doku_linkwiz.resultClick(this);return false},resultClick:function(b){doku_linkwiz.$entry.val(b.title);if(b.title==""||b.title.substr(b.title.length-1)==":"){doku_linkwiz.autocomplete_exec()}else{if(jQuery(b.nextSibling).is("span")){doku_linkwiz.insertLink(b.nextSibling.innerHTML)}else{doku_linkwiz.insertLink("")}}},insertLink:function(e){var b=doku_linkwiz.$entry.val(),d,c;if(!b){return}var a=CKEDITOR.dialog.getCurrent();a.getContentElement("info","internal").setValue(b);doku_linkwiz.hide();doku_linkwiz.$entry.val(doku_linkwiz.$entry.val().replace(/[^:]*$/,""))},autocomplete:function(){if(doku_linkwiz.timer!==null){window.clearTimeout(doku_linkwiz.timer);doku_linkwiz.timer=null}doku_linkwiz.timer=window.setTimeout(doku_linkwiz.autocomplete_exec,350)},autocomplete_exec:function(){var a=jQuery(doku_linkwiz.result);doku_linkwiz.deselect();a.html('<img src="'+DOKU_BASE+'lib/images/throbber.gif" alt="" width="16" height="16" />').load(DOKU_BASE+"lib/exe/ajax.php",{call:"linkwiz",q:doku_linkwiz.$entry.val()})},show:function(){doku_linkwiz.$wiz.show();doku_linkwiz.$entry.focus();doku_linkwiz.autocomplete();var a=doku_linkwiz.$entry.val();doku_linkwiz.$entry.val("");doku_linkwiz.$entry.val(a)},hide:function(){doku_linkwiz.$wiz.hide();doku_linkwiz.textArea.focus()},toggle:function(){if(doku_linkwiz.$wiz.css("display")=="none"){doku_linkwiz.show()}else{doku_linkwiz.hide()}}};