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
