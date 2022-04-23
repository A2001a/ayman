
$(function() {
    //script Go Up and Down
    var  scrollToTopSpeed = 300 ,
         scrollToTopthems = "defaul" , / / defaul or radius
        Tobody = $("body"),
        Tomain = $("#main"),
        html = "<!-- scrollToTop Widgets her START --><ul class='flickering' id='scrollToTop'><li class='Animat-slideInTop'><a class='BounceToTop' herf='javascript:;'><i class='fa fa-chevron-up'/></a></li><b:if cond='data:view.isSingleItem'><li class='Animat-slideInRight'><a class='GoToComments' herf='javascript:;'><i class='fa fa-comment'/></a></li></b:if><li class='Animat-slideInDown'><a class='GoToDown' herf='javascript:;'><i class='fa fa-chevron-down'/></a></li></ul><!-- scrollToTop Widgets her END -->";

    $(html).appendTo(Tobody);

    var ToGo = $("#scrollToTop"),
        ToUp = $(".BounceToTop"),
        ToDown = $(".GoToDown"),
        ToCom = $(".GoToComments");
    if (ToGo.length > 0) {
        ToGo.addClass(scrollToTopthems);
        $(window).scroll(function() {
            if ($(this).scrollTop() + $(window).height() > $(document).height() - 300) {
                ToGo.fadeOut(300);
            } else if ($(this).scrollTop() > 10) {
                ToGo.fadeIn(300);
            } else {
                ToGo.fadeOut(300);
            }
        });
        ToUp.click(function() {
            $("body,html").animate({
                scrollTop: 0
            }, scrollToTopSpeed).animate({
                scrollTop: 25
            }, 200).animate({
                scrollTop: 0
            }, 150).animate({
                scrollTop: 0
            }, 50);
        });
        ToDown.click(function() {
            $("body,html").animate({
                scrollTop: Tobody.height()
            }, scrollToTopSpeed);
        });
        ToCom.click(function() {
            $("body,html").animate({
                scrollTop: Tomain.height()
            }, scrollToTopSpeed)
        });
    } //if
}); //$f
/!function(h,k,b,m,a,j){function g(d,c){j?m(d,c||32):a.push(d,c)}function l(f,d,o,c){return d&&k.getElementById(d)||(c=k.createElement(f||"SCRIPT"),d&&(c.id=d),o&&(c.onload=o),k.head.appendChild(c)),c||{}}j=/p/.test(k.readyState),h.addEventListener("on"+b in h?b:"load",function(){for(j=1;a[0];){g(a.shift(),a.shift())}}),g._=l,h.defer=g,h.deferscript=function(f,d,o,c){g(function(){l("",d,c).src=f},o)}}(this,document,"pageshow",setTimeout,[]);
$("body").append($('<span class="mteffect"></span>')),$(document).on("click",function(n){var i=n.clientX,a=n.clientY;$(".mteffect").css({top:a-30,left:i-30}).addClass("active")}),$(".mteffect").on("animationend webkitAnimationEnd oAnimationEnd oanimationend MSAnimationEnd",function(){$(".mteffect").removeClass("active")});
var timeLeft=10,downloadBtn=document.querySelector(".fileLink"),countdown=document.querySelector(".textd");function DwnTmrFunction(){document.getElementById("notesDn").style.marginTop="-22px",document.getElementById("filelink1").style.pointerEvents="none",document.getElementById("filelink1").style.opacity=".6"}downloadBtn.addEventListener("click",()=>{var e=document.querySelector(".DnTargetLink").innerText,t=setInterval(function(){timeLeft-=1,countdown.innerHTML="انتظر قليلا <Dncolor>"+timeLeft+"</Dncolor> ثانية.",timeLeft<=0&&(clearInterval(t),window.location.href=e,setTimeout())},1e3)});
/function darkMode(){localStorage.setItem("mode","darkmode"===localStorage.getItem("mode")?"light":"darkmode"),"darkmode"===localStorage.getItem("mode")?document.querySelector("#mainContent").classList.add("darkMode"):document.querySelector("#mainContent").classList.remove("darkMode")}function listMode(){localStorage.setItem("list","listmode"===localStorage.getItem("list")?"grid":"listmode"),"listmode"===localStorage.getItem("list")?document.querySelector("#Blog00").classList.add("list-mode"):document.querySelector("#Blog00").classList.remove("list-mode")}defer(function(){window.lazySizesConfig=window.lazySizesConfig||{},lazySizesConfig.loadMode=1,lazySizesConfig.preloadAfterLoad=!1,function(b){var a=function(ag,M,af){var W,C;if(function(){var d,c={lazyClass:"lazy",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:0.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};C=ag.lazySizesConfig||ag.lazysizesConfig||{};for(d in c){d in C||(C[d]=c[d])}}(),!M||!M.getElementsByClassName){return{init:function(){},cfg:C,noSupport:!0}}var x=M.documentElement,ab=ag.HTMLPictureElement,w="addEventListener",p="getAttribute",S=ag[w].bind(ag),B=ag.setTimeout,m=ag.requestAnimationFrame||B,L=ag.requestIdleCallback,aa=/^picture$/i,ah=["load","error","lazyincluded","_lazyloaded"],T={},E=Array.prototype.forEach,A=function(d,c){return T[c]||(T[c]=new RegExp("(\\s|^)"+c+"(\\s|$)")),T[c].test(d[p]("class")||"")&&T[c]},z=function(d,c){A(d,c)||d.setAttribute("class",(d[p]("class")||"").trim()+" "+c)},u=function(d,c){var j;(j=A(d,c))&&d.setAttribute("class",(d[p]("class")||"").replace(j," "))},l=function(d,k,j){var c=j?w:"removeEventListener";j&&l(d,k),ah.forEach(function(n){d[c](n,k)})},h=function(k,j,r,d,c){var q=M.createEvent("Event");return r||(r={}),r.instance=W,q.initEvent(j,!d,!c),q.detail=r,k.dispatchEvent(q),q},g=function(d,c){var j;!ab&&(j=ag.picturefill||C.pf)?(c&&c.src&&!d[p]("srcset")&&d.setAttribute("srcset",c.src),j({reevaluate:!0,elements:[d]})):c&&c.src&&(d.src=c.src)},f=function(d,c){return(getComputedStyle(d,null)||{})[c]},N=function(d,c,j){for(j=j||d.offsetWidth;j<C.minSize&&c&&!d._lazysizesWidth;){j=c.offsetWidth,c=c.parentNode}return j},o=function(){var D,j,d=[],c=[],s=d,k=function(){var n=s;for(s=d.length?c:d,D=!0,j=!1;n.length;){n.shift()()}D=!1},q=function(r,n){D&&!n?r.apply(this,arguments):(s.push(r),j||(j=!0,(M.hidden?B:m)(k)))};return q._lsFlush=k,q}(),y=function(d,c){return c?function(){o(d)}:function(){var k=this,j=arguments;o(function(){d.apply(k,j)})}},v=function(q){var D,j=0,c=C.throttleDelay,s=C.ricTimeout,d=function(){D=!1,j=af.now(),q()},k=L&&s>49?function(){L(d,{timeout:s}),s!==C.ricTimeout&&(s=C.ricTimeout)}:y(function(){B(d)},!0);return function(r){var n;(r=!0===r)&&(s=33),D||(D=!0,n=c-(af.now()-j),n<0&&(n=0),r||n<9?k():B(k,n))}},R=function(k){var j,r,d=99,c=function(){j=null,k()},q=function(){var n=af.now()-r;n<d?B(q,d-n):(L||c)(c)};return function(){r=af.now(),j||(j=B(q,d))}},ac=function(){var H,am,Q,I,at,ap,O,aq,aj,Z,au,ai,ak=/^img$/i,ar=/^iframe$/i,V="onscroll" in ag&&!/(gle|ing)bot/.test(navigator.userAgent),aw=0,K=0,D=0,q=-1,j=function(n){D--,(!n||D<0||!n.target)&&(D=0)},J=function(n){return null==ai&&(ai="hidden"==f(M.body,"visibility")),ai||!("hidden"==f(n.parentNode,"visibility")&&"hidden"==f(n,"visibility"))},c=function(ay,ax){var az,s=ay,r=J(ay);for(aq-=ax,au+=ax,aj-=ax,Z+=ax;r&&(s=s.offsetParent)&&s!=M.body&&s!=x;){(r=(f(s,"opacity")||1)>0)&&"visible"!=f(s,"overflow")&&(az=s.getBoundingClientRect(),r=Z>az.left&&aj<az.right&&au>az.top-1&&aq<az.bottom+1)}return r},U=function(){var aD,aI,az,aB,aG,ay,ax,aJ,aA,aF,aE,aH,aC=W.elements;if((I=C.loadMode)&&D<8&&(aD=aC.length)){for(aI=0,q++;aI<aD;aI++){if(aC[aI]&&!aC[aI]._lazyRace){if(!V||W.prematureUnveil&&W.prematureUnveil(aC[aI])){k(aC[aI])}else{if((aJ=aC[aI][p]("data-expand"))&&(ay=1*aJ)||(ay=K),aF||(aF=!C.expand||C.expand<1?x.clientHeight>500&&x.clientWidth>500?500:370:C.expand,W._defEx=aF,aE=aF*C.expFactor,aH=C.hFac,ai=null,K<aE&&D<1&&q>2&&I>2&&!M.hidden?(K=aE,q=0):K=I>1&&q>1&&D<6?aF:aw),aA!==ay&&(ap=innerWidth+ay*aH,O=innerHeight+ay,ax=-1*ay,aA=ay),az=aC[aI].getBoundingClientRect(),(au=az.bottom)>=ax&&(aq=az.top)<=O&&(Z=az.right)>=ax*aH&&(aj=az.left)<=ap&&(au||Z||aj||aq)&&(C.loadHidden||J(aC[aI]))&&(am&&D<3&&!aJ&&(I<3||q<4)||c(aC[aI],ay))){if(k(aC[aI]),aG=!0,D>9){break}}else{!aG&&am&&!aB&&D<4&&q<4&&I>2&&(H[0]||C.preloadAfterLoad)&&(H[0]||!aJ&&(au||Z||aj||aq||"auto"!=aC[aI][p](C.sizesAttr)))&&(aB=H[0]||aC[aI])}}}}aB&&!aG&&k(aB)}},al=v(U),G=function(r){var n=r.target;if(n._lazyCache){return void delete n._lazyCache}j(r),z(n,C.loadedClass),u(n,C.loadingClass),l(n,ae),h(n,"lazyloaded")},ao=y(G),ae=function(n){ao({target:n.target})},d=function(r,ax){try{r.contentWindow.location.replace(ax)}catch(s){r.src=ax}},P=function(s){var r,ax=s[p](C.srcsetAttr);(r=C.customMedia[s[p]("data-media")||s[p]("media")])&&s.setAttribute("media",r),ax&&s.setAttribute("srcset",ax)},Y=y(function(aG,aC,az,aB,aF){var ay,ax,aH,aA,aE,aD;(aE=h(aG,"lazybeforeunveil",aC)).defaultPrevented||(aB&&(az?z(aG,C.autosizesClass):aG.setAttribute("sizes",aB)),ax=aG[p](C.srcsetAttr),ay=aG[p](C.srcAttr),aF&&(aH=aG.parentNode,aA=aH&&aa.test(aH.nodeName||"")),aD=aC.firesLoad||"src" in aG&&(ax||ay||aA),aE={target:aG},z(aG,C.loadingClass),aD&&(clearTimeout(Q),Q=B(j,2500),l(aG,ae,!0)),aA&&E.call(aH.getElementsByTagName("source"),P),ax?aG.setAttribute("srcset",ax):ay&&!aA&&(ar.test(aG.nodeName)?d(aG,ay):aG.src=ay),aF&&(ax||aA)&&g(aG,{src:ay})),aG._lazyRace&&delete aG._lazyRace,u(aG,C.lazyClass),o(function(){var n=aG.complete&&aG.naturalWidth>1;aD&&!n||(n&&z(aG,"ls-is-cached"),G(aE),aG._lazyCache=!0,B(function(){"_lazyCache" in aG&&delete aG._lazyCache},9)),"lazy"==aG.loading&&D--},!0)}),k=function(ay){if(!ay._lazyRace){var ax,az=ak.test(ay.nodeName),s=az&&(ay[p](C.sizesAttr)||ay[p]("sizes")),r="auto"==s;(!r&&am||!az||!ay[p]("src")&&!ay.srcset||ay.complete||A(ay,C.errorClass)||!A(ay,C.lazyClass))&&(ax=h(ay,"lazyunveilread").detail,r&&ad.updateElem(ay,!0,ay.offsetWidth),ay._lazyRace=!0,D++,Y(ay,ax,r,s,az))}},av=R(function(){C.loadMode=3,al()}),X=function(){3==C.loadMode&&(C.loadMode=2),av()},an=function(){if(!am){if(af.now()-at<999){return void B(an,999)}am=!0,C.loadMode=3,al(),S("scroll",X,!0)}};return{_:function(){at=af.now(),W.elements=M.getElementsByClassName(C.lazyClass),H=M.getElementsByClassName(C.lazyClass+" "+C.preloadClass),S("scroll",al,!0),S("resize",al,!0),S("pageshow",function(r){if(r.persisted){var n=M.querySelectorAll("."+C.loadingClass);n.length&&n.forEach&&m(function(){n.forEach(function(s){s.complete&&k(s)})})}}),ag.MutationObserver?new MutationObserver(al).observe(x,{childList:!0,subtree:!0,attributes:!0}):(x[w]("DOMNodeInserted",al,!0),x[w]("DOMAttrModified",al,!0),setInterval(al,999)),S("hashchange",al,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(n){M[w](n,al,!0)}),/d$|^c/.test(M.readyState)?an():(S("load",an),M[w]("DOMContentLoaded",al),B(an,20000)),W.elements.length?(U(),o._lsFlush()):al()},checkElems:al,unveil:k,_aLSL:X}}(),ad=function(){var q,k=y(function(I,G,K,D){var s,J,H;if(I._lazysizesWidth=D,D+="px",I.setAttribute("sizes",D),aa.test(G.nodeName||"")){for(s=G.getElementsByTagName("source"),J=0,H=s.length;J<H;J++){s[J].setAttribute("sizes",D)}}K.detail.dataAttr||g(I,K.detail)}),d=function(G,D,H){var s,r=G.parentNode;r&&(H=N(G,r,H),s=h(G,"lazybeforesizes",{width:H,dataAttr:!!D}),s.defaultPrevented||(H=s.detail.width)&&H!==G._lazysizesWidth&&k(G,r,s,H))},j=function(){var r,n=q.length;if(n){for(r=0;r<n;r++){d(q[r])}}},c=R(j);return{_:function(){q=M.getElementsByClassName(C.autosizesClass),S("resize",c)},checkElems:c,updateElem:d}}(),F=function(){!F.i&&M.getElementsByClassName&&(F.i=!0,ad._(),ac._())};return B(function(){C.init&&F()}),W={cfg:C,autoSizer:ad,loader:ac,init:F,uP:g,aC:z,rC:u,hC:A,fire:h,gW:N,rAF:o}}(b,b.document,Date);b.lazySizes=a,"object"==typeof module&&module.exports&&(module.exports=a)}("undefined"!=typeof window?window:{})});(function(){var b=document.querySelectorAll(".lazy-youtube");for(var a=0;a<b.length;a++){var c="https://img.youtube.com/vi/"+b[a].dataset.embed+"/sddefault.jpg";var d=new Image();d.setAttribute("class","lazy");d.setAttribute("data-src",c);d.setAttribute("src","data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=");d.setAttribute("alt","Youtube video");d.addEventListener("load",function(){b[a].appendChild(d)}(a));b[a].addEventListener("click",function(){var e=document.createElement("iframe");e.setAttribute("frameborder","0");e.setAttribute("allowfullscreen","");e.setAttribute("src","https://www.youtube.com/embed/"+this.dataset.embed+"?rel=0&showinfo=0&autoplay=1");this.innerHTML="";this.appendChild(e)})}})();function changeFont(){var a=document.getElementById("post-font");if(a.classList){a.classList.toggle("active")}else{var b=a.className.split(" ");0<=(t=b.indexOf("active"))?b.splice(t,1):b.push("active"),a.className=b.join(" ")}}function copyFunction(){document.getElementById("getlink").select(),document.execCommand("copy"),document.getElementById("share-notif").innerHTML="<span>تم نسخ الرابط!</span>"}var uri=window.location.toString();if(uri.indexOf("?m=1","?m=1")>0){var clean_uri=uri.substring(0,uri.indexOf("?m=1"));window.history.replaceState({},document.title,clean_uri)}
function addCopyButtons(e){document.querySelectorAll("pre > code").forEach(function(t){var n=document.createElement("btn");n.className="copy-code-button",n.type="btn",n.innerText="نسخ",n.addEventListener("click",function(){e.writeText(t.innerText).then(function(){n.blur(),n.innerText="تم النسخ",setTimeout(function(){n.innerText="نسخ"},2e3)},function(e){n.innerText="خطأ"})});var o=t.parentNode;if(o.parentNode.classList.contains("highlight")){var r=o.parentNode;r.parentNode.insertBefore(n,r)}else o.parentNode.insertBefore(n,o)})}if(navigator&&navigator.clipboard)addCopyButtons(navigator.clipboard);else{var script=document.createElement("script");script.src="https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.7.0/clipboard-polyfill.promise.js",script.integrity="sha256-waClS2re9NUbXRsryKoof+F9qc1gjjIhc2eT7ZbIv94=",script.crossOrigin="anonymous",script.onload=function(){addCopyButtons(clipboard)},document.body.appendChild(script)}
function nocontext(e) {var clickedTag = (e==null) ? event.srcElement.tagName : e.target.tagName; if (clickedTag == "IMG") {alert(alertMsg);return false;}} var alertMsg = "الصور عليها حقوق لذلك ممنوع النسخ";document.oncontextmenu = nocontext;
function loadCSS(e, t, o) {
    'use strict';
    var x = window['document']['createElement']('link'),
        t = t || window['document']['getElementsByTagName']('script')[0];
    x['rel'] = 'stylesheet', x['href'] = e, x['media'] = 'only x', t['parentNode']['insertBefore'](x, t), setTimeout(function () {
        x['media'] = o || 'all'
    })
}
var zPlugins3 = !1;
window['addEventListener']('scroll', function () {
    (0 != document['documentElement']['scrollTop'] && !1 === zPlugins3 || 0 != document['body']['scrollTop'] && !1 === zPlugins3) && (function () {
        var e = document['createElement']('script');
        e['type'] = 'text/javascript', e['async'] = !0, e['src'] = 'https://cdn.jsdelivr.net/gh/shrkt-smile/rico/cost.js';
        var t = document['getElementsByTagName']('script')[0];
        t['parentNode']['insertBefore'](e, t)
    }(), zPlugins3 = !0)
}, !0), document['documentElement']['style']['setProperty']('--body-font', fontGoogle);
var getFontawesome = document['createElement']('link');
getFontawesome['rel'] = 'stylesheet', getFontawesome['type'] = 'text/css', getFontawesome['href'] = '//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css', document['querySelector']('body')['appendChild'](getFontawesome);
var getFlatJooza = document['createElement']('link');
getFlatJooza['rel'] = 'stylesheet', getFlatJooza['type'] = 'text/css', getFlatJooza['href'] = 'https://fonts.googleapis.com/css2?family=' + fontGoogle + ':wght@400;500;700&display=swap', document['querySelector']('body')['appendChild'](getFlatJooza);
function loadCSS(e, t, o) {
    'use strict';
    var x = window['document']['createElement']('link'),
        t = t || window['document']['getElementsByTagName']('script')[0];
    x['rel'] = 'stylesheet', x['href'] = e, x['media'] = 'only x', t['parentNode']['insertBefore'](x, t), setTimeout(function () {
        x['media'] = o || 'all'
    })
}
var zPlugins3 = !1;
window['addEventListener']('scroll', function () {
    (0 != document['documentElement']['scrollTop'] && !1 === zPlugins3 || 0 != document['body']['scrollTop'] && !1 === zPlugins3) && (function () {
        var e = document['createElement']('script');
        e['type'] = 'text/javascript', e['async'] = !0, e['src'] = 'https://cdn.jsdelivr.net/gh/shrkt-smile/rico/cost.js';
        var t = document['getElementsByTagName']('script')[0];
        t['parentNode']['insertBefore'](e, t)
    }(), zPlugins3 = !0)
}, !0), document['documentElement']['style']['setProperty']('--body-font', fontGoogle);
var getFontawesome = document['createElement']('link');
getFontawesome['rel'] = 'stylesheet', getFontawesome['type'] = 'text/css', getFontawesome['href'] = '//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css', document['querySelector']('body')['appendChild'](getFontawesome);
var getFlatJooza = document['createElement']('link');
getFlatJooza['rel'] = 'stylesheet', getFlatJooza['type'] = 'text/css', getFlatJooza['href'] = 'https://fonts.googleapis.com/css2?family=' + fontGoogle + ':wght@400;500;700&display=swap', document['querySelector']('body')['appendChild'](getFlatJooza);
