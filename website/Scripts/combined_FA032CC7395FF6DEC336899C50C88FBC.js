﻿function numbersonly(n){var t=n.charCode?n.charCode:n.keyCode;if(8!=t&&(48>t||t>57))return!1}function funSendEMail(n){document.getElementById("div_Facebook").style.display="none",document.getElementById("td_SendEmail").style.display="none","facebook"==n?document.getElementById("div_Facebook").style.display="none"==document.getElementById("div_Facebook").style.display?"":"none":document.getElementById("td_SendEmail").style.display="none"==document.getElementById("td_SendEmail").style.display?"":"none"}function funAdsManage(n){var t;return"0"==n?(t=confirm("هل انت متأكد من إعادة تفعيل الإعلان لمدة 10 ايام ؟ "),t?!0:!1):(t=confirm("هل انت متأكد من حذف هذا الإعلان ؟ "),t?!0:!1)}this.screenshotPreview=function(){xOffset=10,yOffset=30,$("a.screenshot").hover(function(n){this.t=this.title;var t=this.t!=""?"<br/>"+this.t:"";$("body").append("<p id='screenshot'><img src='"+this.rel+"' alt='url preview' width='300' height='200'  />"+t+"</p>"),$("#screenshot").css("top",n.pageY-xOffset+"px").css("left",n.pageX+yOffset+"px").fadeIn("fast")},function(){this.title=this.t,$("#screenshot").remove()}),$("a.screenshot").mousemove(function(n){$("#screenshot").css("top",n.pageY-xOffset+"px").css("left",n.pageX+yOffset+"px")})},$(document).ready(function(){screenshotPreview()});(function(n){var r={},t={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){}};n.fn.bxSlider=function(u){var f,e;if(this.length==0)return this;if(this.length>1)return this.each(function(){n(this).bxSlider(u)}),this;f={},e=this,r.el=this;var nt=n(window).width(),tt=n(window).height(),it=function(){f.settings=n.extend({},t,u),f.settings.slideWidth=parseInt(f.settings.slideWidth),f.children=e.children(f.settings.slideSelector),f.children.length<f.settings.minSlides&&(f.settings.minSlides=f.children.length),f.children.length<f.settings.maxSlides&&(f.settings.maxSlides=f.children.length),f.settings.randomStart&&(f.settings.startSlide=Math.floor(Math.random()*f.children.length)),f.active={index:f.settings.startSlide},f.carousel=f.settings.minSlides>1||f.settings.maxSlides>1,f.carousel&&(f.settings.preloadImages="all"),f.minThreshold=f.settings.minSlides*f.settings.slideWidth+(f.settings.minSlides-1)*f.settings.slideMargin,f.maxThreshold=f.settings.maxSlides*f.settings.slideWidth+(f.settings.maxSlides-1)*f.settings.slideMargin,f.working=!1,f.controls={},f.interval=null,f.animProp=f.settings.mode=="vertical"?"top":"left",f.usingCSS=f.settings.useCSS&&f.settings.mode!="fade"&&function(){var i=document.createElement("div"),t=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"],n;for(n in t)if(i.style[t[n]]!==undefined)return f.cssPrefix=t[n].replace("Perspective","").toLowerCase(),f.animProp="-"+f.cssPrefix+"-transform",!0;return!1}(),f.settings.mode=="vertical"&&(f.settings.maxSlides=f.settings.minSlides),e.data("origStyle",e.attr("style")),e.children(f.settings.slideSelector).each(function(){n(this).data("origStyle",n(this).attr("style"))}),ft()},ft=function(){var i,t;e.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),f.viewport=e.parent(),f.loader=n('<div class="bx-loading" />'),f.viewport.prepend(f.loader),e.css({width:f.settings.mode=="horizontal"?f.children.length*100+215+"%":"auto",position:"relative"}),f.usingCSS&&f.settings.easing?e.css("-"+f.cssPrefix+"-transition-timing-function",f.settings.easing):f.settings.easing||(f.settings.easing="swing"),i=h(),f.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),f.viewport.parent().css({maxWidth:bt()}),f.settings.pager||f.viewport.parent().css({margin:"0 auto 0px"}),f.children.css({float:f.settings.mode=="horizontal"?"left":"none",listStyle:"none",position:"relative"}),f.children.css("width",ut()),f.settings.mode=="horizontal"&&f.settings.slideMargin>0&&f.children.css("marginRight",f.settings.slideMargin),f.settings.mode=="vertical"&&f.settings.slideMargin>0&&f.children.css("marginBottom",f.settings.slideMargin),f.settings.mode=="fade"&&(f.children.css({position:"",zIndex:0,display:"none"}),f.children.eq(f.settings.startSlide).css({zIndex:50,display:"block"})),f.controls.el=n('<div class="bx-controls" />'),f.settings.captions&&yt(),f.active.last=f.settings.startSlide==s()-1,f.settings.video&&e.fitVids(),t=f.children.eq(f.settings.startSlide),f.settings.preloadImages=="all"&&(t=f.children),f.settings.ticker?f.settings.pager=!1:(f.settings.pager&&pt(),f.settings.controls&&ht(),f.settings.auto&&f.settings.autoControls&&wt(),(f.settings.controls||f.settings.autoControls||f.settings.pager)&&f.viewport.after(f.controls.el)),ot(t,kt)},ot=function(t,i){var u=t.find("img, iframe").length,r;if(u==0){i();return}r=0,t.find("img, iframe").each(function(){n(this).one("load",function(){++r==u&&i()}).each(function(){this.complete&&n(this).load()})})},kt=function(){if(f.settings.infiniteLoop&&f.settings.mode!="fade"&&!f.settings.ticker){var t=f.settings.mode=="vertical"?f.settings.minSlides:f.settings.maxSlides,r=f.children.slice(0,t).clone().addClass("bx-clone"),i=f.children.slice(-t).clone().addClass("bx-clone");e.append(r).prepend(i)}f.loader.remove(),rt(),f.settings.mode=="vertical"&&(f.settings.adaptiveHeight=!0),f.viewport.height(l()),e.redrawSlider();f.settings.onSliderLoad(f.active.index);f.initialized=!0,f.settings.responsive&&n(window).bind("resize",d),f.settings.auto&&f.settings.autoStart&&et(),f.settings.ticker&&st(),f.settings.pager&&p(f.settings.startSlide),f.settings.controls&&g(),f.settings.touchEnabled&&!f.settings.ticker&&lt()},l=function(){var u=0,t=n(),r;if(f.settings.mode=="vertical"||f.settings.adaptiveHeight)if(f.carousel)for(r=f.settings.moveSlides==1?f.active.index:f.active.index*c(),t=f.children.eq(r),i=1;i<=f.settings.maxSlides-1;i++)t=r+i>=f.children.length?t.add(f.children.eq(i-1)):t.add(f.children.eq(r+i));else t=f.children.eq(f.active.index);else t=f.children;return f.settings.mode=="vertical"?(t.each(function(){u+=n(this).outerHeight()}),f.settings.slideMargin>0&&(u+=f.settings.slideMargin*(f.settings.minSlides-1))):u=Math.max.apply(Math,t.map(function(){return n(this).outerHeight(!1)}).get()),u},bt=function(){var n="100%";return f.settings.slideWidth>0&&(n=f.settings.mode=="horizontal"?f.settings.maxSlides*f.settings.slideWidth+(f.settings.maxSlides-1)*f.settings.slideMargin:f.settings.slideWidth),n},ut=function(){var t=f.settings.slideWidth,n=f.viewport.width();return f.settings.slideWidth==0||f.settings.slideWidth>n&&!f.carousel||f.settings.mode=="vertical"?t=n:f.settings.maxSlides>1&&f.settings.mode=="horizontal"&&(n>f.maxThreshold||n<f.minThreshold&&(t=(n-f.settings.slideMargin*(f.settings.minSlides-1))/f.settings.minSlides)),t},h=function(){var n=1,t;return f.settings.mode=="horizontal"&&f.settings.slideWidth>0?f.viewport.width()<f.minThreshold?n=f.settings.minSlides:f.viewport.width()>f.maxThreshold?n=f.settings.maxSlides:(t=f.children.first().width(),n=Math.floor(f.viewport.width()/t)):f.settings.mode=="vertical"&&(n=f.settings.minSlides),n},s=function(){var n=0,i,t;if(f.settings.moveSlides>0)if(f.settings.infiniteLoop)n=f.children.length/c();else for(i=0,t=0;i<f.children.length;)++n,i=t+h(),t+=f.settings.moveSlides<=h()?f.settings.moveSlides:h();else n=Math.ceil(f.children.length/h());return n},c=function(){return f.settings.moveSlides>0&&f.settings.moveSlides<=h()?f.settings.moveSlides:h()},rt=function(){var t,i,n;f.children.length>f.settings.maxSlides&&f.active.last&&!f.settings.infiniteLoop?f.settings.mode=="horizontal"?(t=f.children.last(),n=t.position(),o(-(n.left-(f.viewport.width()-t.width())),"reset",0)):f.settings.mode=="vertical"&&(i=f.children.length-f.settings.minSlides,n=f.children.eq(i).position(),o(-n.top,"reset",0)):(n=f.children.eq(f.active.index*c()).position(),f.active.index==s()-1&&(f.active.last=!0),n!=undefined&&(f.settings.mode=="horizontal"?o(-n.left,"reset",0):f.settings.mode=="vertical"&&o(-n.top,"reset",0)))},o=function(n,t,i,r){var s,u;f.usingCSS?(s=f.settings.mode=="vertical"?"translate3d(0, "+n+"px, 0)":"translate3d("+n+"px, 0, 0)",e.css("-"+f.cssPrefix+"-transition-duration",i/1e3+"s"),t=="slide"?(e.css(f.animProp,s),e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),v()})):t=="reset"?e.css(f.animProp,s):t=="ticker"&&(e.css("-"+f.cssPrefix+"-transition-timing-function","linear"),e.css(f.animProp,s),e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),o(r.resetValue,"reset",0),a()}))):(u={},u[f.animProp]=n,t=="slide"?e.animate(u,i,f.settings.easing,function(){v()}):t=="reset"?e.css(f.animProp,n):t=="ticker"&&e.animate(u,speed,"linear",function(){o(r.resetValue,"reset",0),a()}))},b=function(){for(var r="",u=s(),i,t=0;t<u;t++)i="",f.settings.buildPager&&n.isFunction(f.settings.buildPager)?(i=f.settings.buildPager(t),f.pagerEl.addClass("bx-custom-pager")):(i=t+1,f.pagerEl.addClass("bx-default-pager")),r+='<div class="bx-pager-item"><a href="" data-slide-index="'+t+'" class="bx-pager-link">'+i+"</a></div>";f.pagerEl.html(r)},pt=function(){f.settings.pagerCustom?f.pagerEl=n(f.settings.pagerCustom):(f.pagerEl=n('<div class="bx-pager" />'),f.settings.pagerSelector?n(f.settings.pagerSelector).html(f.pagerEl):f.controls.el.addClass("bx-has-pager").append(f.pagerEl),b()),f.pagerEl.delegate("a","click",dt)},ht=function(){f.controls.next=n('<a class="bx-next" href="">'+f.settings.nextText+"</a>"),f.controls.prev=n('<a class="bx-prev" href="">'+f.settings.prevText+"</a>"),f.controls.next.bind("click",at),f.controls.prev.bind("click",vt),f.settings.nextSelector&&n(f.settings.nextSelector).append(f.controls.next),f.settings.prevSelector&&n(f.settings.prevSelector).append(f.controls.prev),f.settings.nextSelector||f.settings.prevSelector||(f.controls.directionEl=n('<div class="bx-controls-direction" />'),f.controls.directionEl.append(f.controls.prev).append(f.controls.next),f.controls.el.addClass("bx-has-controls-direction").append(f.controls.directionEl))},wt=function(){f.controls.start=n('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+f.settings.startText+"</a></div>"),f.controls.stop=n('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+f.settings.stopText+"</a></div>"),f.controls.autoEl=n('<div class="bx-controls-auto" />'),f.controls.autoEl.delegate(".bx-start","click",gt),f.controls.autoEl.delegate(".bx-stop","click",ni),f.settings.autoControlsCombine?f.controls.autoEl.append(f.controls.start):f.controls.autoEl.append(f.controls.start).append(f.controls.stop),f.settings.autoControlsSelector?n(f.settings.autoControlsSelector).html(f.controls.autoEl):f.controls.el.addClass("bx-has-controls-auto").append(f.controls.autoEl),y(f.settings.autoStart?"stop":"start")},yt=function(){f.children.each(function(){var i=n(this).find("img:first").attr("title");i!=undefined&&(""+i).length&&n(this).append('<div class="bx-caption"><span>'+i+"</span></div>")})},at=function(n){f.settings.auto&&e.stopAuto(),e.goToNextSlide(),n.preventDefault()},vt=function(n){f.settings.auto&&e.stopAuto(),e.goToPrevSlide(),n.preventDefault()},gt=function(n){e.startAuto(),n.preventDefault()},ni=function(n){e.stopAuto(),n.preventDefault()},dt=function(t){f.settings.auto&&e.stopAuto();var r=n(t.currentTarget),i=parseInt(r.attr("data-slide-index"));i!=f.active.index&&e.goToSlide(i),t.preventDefault()},p=function(t){var i=f.children.length;if(f.settings.pagerType=="short"){f.settings.maxSlides>1&&(i=Math.ceil(f.children.length/f.settings.maxSlides)),f.pagerEl.html(t+1+f.settings.pagerShortSeparator+i);return}f.pagerEl.find("a").removeClass("active"),f.pagerEl.each(function(i,r){n(r).find("a").eq(t).addClass("active")})},v=function(){if(f.settings.infiniteLoop){var n="";f.active.index==0?n=f.children.eq(0).position():f.active.index==s()-1&&f.carousel?n=f.children.eq((s()-1)*c()).position():f.active.index==f.children.length-1&&(n=f.children.eq(f.children.length-1).position()),f.settings.mode=="horizontal"?o(-n.left,"reset",0):f.settings.mode=="vertical"&&o(-n.top,"reset",0)}f.working=!1;f.settings.onSlideAfter(f.children.eq(f.active.index),f.oldIndex,f.active.index)},y=function(n){f.settings.autoControlsCombine?f.controls.autoEl.html(f.controls[n]):(f.controls.autoEl.find("a").removeClass("active"),f.controls.autoEl.find("a:not(.bx-"+n+")").addClass("active"))},g=function(){s()==1?(f.controls.prev.addClass("disabled"),f.controls.next.addClass("disabled")):!f.settings.infiniteLoop&&f.settings.hideControlOnEnd&&(f.active.index==0?(f.controls.prev.addClass("disabled"),f.controls.next.removeClass("disabled")):f.active.index==s()-1?(f.controls.next.addClass("disabled"),f.controls.prev.removeClass("disabled")):(f.controls.prev.removeClass("disabled"),f.controls.next.removeClass("disabled")))},et=function(){if(f.settings.autoDelay>0)var n=setTimeout(e.startAuto,f.settings.autoDelay);else e.startAuto();f.settings.autoHover&&e.hover(function(){f.interval&&(e.stopAuto(!0),f.autoPaused=!0)},function(){f.autoPaused&&(e.startAuto(!0),f.autoPaused=null)})},st=function(){var i=0,t;f.settings.autoDirection=="next"?e.append(f.children.clone().addClass("bx-clone")):(e.prepend(f.children.clone().addClass("bx-clone")),t=f.children.first().position(),i=f.settings.mode=="horizontal"?-t.left:-t.top),o(i,"reset",0),f.settings.pager=!1,f.settings.controls=!1,f.settings.autoControls=!1,f.settings.tickerHover&&!f.usingCSS&&f.viewport.hover(function(){e.stop()},function(){var t=0;f.children.each(function(){t+=f.settings.mode=="horizontal"?n(this).outerWidth(!0):n(this).outerHeight(!0)});var u=f.settings.speed/t,r=f.settings.mode=="horizontal"?"left":"top",i=u*(t-Math.abs(parseInt(e.css(r))));a(i)}),a()},a=function(n){var i,t;speed=n?n:f.settings.speed,i={left:0,top:0},t={left:0,top:0},f.settings.autoDirection=="next"?i=e.find(".bx-clone").first().position():t=f.children.first().position();var s=f.settings.mode=="horizontal"?-i.left:-i.top,u=f.settings.mode=="horizontal"?-t.left:-t.top,r={resetValue:u};o(s,"ticker",speed,r)},lt=function(){f.touch={start:{x:0,y:0},end:{x:0,y:0}},f.viewport.bind("touchstart",ct)},ct=function(n){if(f.working)n.preventDefault();else{f.touch.originalPos=e.position();var t=n.originalEvent;f.touch.start.x=t.changedTouches[0].pageX,f.touch.start.y=t.changedTouches[0].pageY,f.viewport.bind("touchmove",w),f.viewport.bind("touchend",k)}},w=function(n){var r=n.originalEvent,u=Math.abs(r.changedTouches[0].pageX-f.touch.start.x),e=Math.abs(r.changedTouches[0].pageY-f.touch.start.y),t,i;u*3>e&&f.settings.preventDefaultSwipeX?n.preventDefault():e*3>u&&f.settings.preventDefaultSwipeY&&n.preventDefault(),f.settings.mode!="fade"&&f.settings.oneToOneTouch&&(t=0,f.settings.mode=="horizontal"?(i=r.changedTouches[0].pageX-f.touch.start.x,t=f.touch.originalPos.left+i):(i=r.changedTouches[0].pageY-f.touch.start.y,t=f.touch.originalPos.top+i),o(t,"reset",0))},k=function(n){var r,i,t;f.viewport.unbind("touchmove",w),r=n.originalEvent,i=0,f.touch.end.x=r.changedTouches[0].pageX,f.touch.end.y=r.changedTouches[0].pageY,f.settings.mode=="fade"?(t=Math.abs(f.touch.start.x-f.touch.end.x),t>=f.settings.swipeThreshold&&(f.touch.start.x>f.touch.end.x?e.goToNextSlide():e.goToPrevSlide(),e.stopAuto())):(t=0,f.settings.mode=="horizontal"?(t=f.touch.end.x-f.touch.start.x,i=f.touch.originalPos.left):(t=f.touch.end.y-f.touch.start.y,i=f.touch.originalPos.top),!f.settings.infiniteLoop&&(f.active.index==0&&t>0||f.active.last&&t<0)?o(i,"reset",200):Math.abs(t)>=f.settings.swipeThreshold?(t<0?e.goToNextSlide():e.goToPrevSlide(),e.stopAuto()):o(i,"reset",200)),f.viewport.unbind("touchend",k)},d=function(){var r=n(window).width(),i=n(window).height();(nt!=r||tt!=i)&&(nt=r,tt=i,e.redrawSlider())};return e.goToSlide=function(t,i){var h,r,w,b,u,a,y;if(!f.working&&f.active.index!=t){f.working=!0,f.oldIndex=f.active.index,f.active.index=t<0?s()-1:t>=s()?0:t;f.settings.onSlideBefore(f.children.eq(f.active.index),f.oldIndex,f.active.index);if(i=="next")f.settings.onSlideNext(f.children.eq(f.active.index),f.oldIndex,f.active.index);else if(i=="prev")f.settings.onSlidePrev(f.children.eq(f.active.index),f.oldIndex,f.active.index);f.active.last=f.active.index>=s()-1,f.settings.pager&&p(f.active.index),f.settings.controls&&g(),f.settings.mode=="fade"?(f.settings.adaptiveHeight&&f.viewport.height()!=l()&&f.viewport.animate({height:l()},f.settings.adaptiveHeightSpeed),f.children.filter(":visible").fadeOut(f.settings.speed).css({zIndex:0}),f.children.eq(f.active.index).css("zIndex",51).fadeIn(f.settings.speed,function(){n(this).css("zIndex",50),v()})):(f.settings.adaptiveHeight&&f.viewport.height()!=l()&&f.viewport.animate({height:l()},f.settings.adaptiveHeightSpeed),h=0,r={left:0,top:0},!f.settings.infiniteLoop&&f.carousel&&f.active.last?f.settings.mode=="horizontal"?(u=f.children.eq(f.children.length-1),r=u.position(),h=f.viewport.width()-u.outerWidth()):(w=f.children.length-f.settings.minSlides,r=f.children.eq(w).position()):f.carousel&&f.active.last&&i=="prev"?(b=f.settings.moveSlides==1?f.settings.maxSlides-c():(s()-1)*c()-(f.children.length-f.settings.maxSlides),u=e.children(".bx-clone").eq(b),r=u.position()):i=="next"&&f.active.index==0?(r=e.find("> .bx-clone").eq(f.settings.maxSlides).position(),f.active.last=!1):t>=0&&(a=t*c(),r=f.children.eq(a).position()),"undefined"!=typeof r&&(y=f.settings.mode=="horizontal"?-(r.left-h):-r.top,o(y,"slide",f.settings.speed)))}},e.goToNextSlide=function(){if(f.settings.infiniteLoop||!f.active.last){var n=parseInt(f.active.index)+1;e.goToSlide(n,"next")}},e.goToPrevSlide=function(){if(f.settings.infiniteLoop||f.active.index!=0){var n=parseInt(f.active.index)-1;e.goToSlide(n,"prev")}},e.startAuto=function(n){f.interval||(f.interval=setInterval(function(){f.settings.autoDirection=="next"?e.goToNextSlide():e.goToPrevSlide()},f.settings.pause),f.settings.autoControls&&n!=!0&&y("stop"))},e.stopAuto=function(n){f.interval&&(clearInterval(f.interval),f.interval=null,f.settings.autoControls&&n!=!0&&y("start"))},e.getCurrentSlide=function(){return f.active.index},e.getSlideCount=function(){return f.children.length},e.redrawSlider=function(){f.children.add(e.find(".bx-clone")).outerWidth(ut()),f.viewport.css("height",l()),f.settings.ticker||rt(),f.active.last&&(f.active.index=s()-1),f.active.index>=s()&&(f.active.last=!0),f.settings.pager&&!f.settings.pagerCustom&&(b(),p(f.active.index))},e.destroySlider=function(){f.initialized&&(f.initialized=!1,n(".bx-clone",this).remove(),f.children.each(function(){n(this).data("origStyle")!=undefined?n(this).attr("style",n(this).data("origStyle")):n(this).removeAttr("style")}),n(this).data("origStyle")!=undefined?this.attr("style",n(this).data("origStyle")):n(this).removeAttr("style"),n(this).unwrap().unwrap(),f.controls.el&&f.controls.el.remove(),f.controls.next&&f.controls.next.remove(),f.controls.prev&&f.controls.prev.remove(),f.pagerEl&&f.pagerEl.remove(),n(".bx-caption",this).remove(),f.controls.autoEl&&f.controls.autoEl.remove(),clearInterval(f.interval),f.settings.responsive&&n(window).unbind("resize",d))},e.reloadSlider=function(n){n!=undefined&&(u=n),e.destroySlider(),it()},it(),this}})(jQuery);window.jQuery&&function(n){n.fn.MultiFile=function(t){var i,t;if(this.length==0)return this;if(typeof arguments[0]=="string")return this.length>1?(i=arguments,this.each(function(){n.fn.MultiFile.apply(n(this),i)})):(n.fn.MultiFile[arguments[0]].apply(this,n.makeArray(arguments).slice(1)||[]),this);t=n.extend({},n.fn.MultiFile.options,t||{}),n("form").not("MultiFile-intercepted").addClass("MultiFile-intercepted").submit(n.fn.MultiFile.disableEmpty),n.fn.MultiFile.options.autoIntercept&&(n.fn.MultiFile.intercept(n.fn.MultiFile.options.autoIntercept),n.fn.MultiFile.options.autoIntercept=null),this.not(".MultiFile-applied").addClass("MultiFile-applied").each(function(){var u,i,r;window.MultiFile=(window.MultiFile||0)+1,u=window.MultiFile,i={e:this,E:n(this),clone:n(this).clone()},typeof t=="number"&&(t={max:t}),r=n.extend({},n.fn.MultiFile.options,t||{},(n.metadata?i.E.metadata():n.meta?i.E.data():null)||{},{}),r.max>0||(r.max=i.E.attr("maxlength")),r.max>0||(r.max=(String(i.e.className.match(/\b(max|limit)\-([0-9]+)\b/gi)||[""]).match(/[0-9]+/gi)||[""])[0],r.max=r.max>0?String(r.max).match(/[0-9]+/gi)[0]:-1),r.max=new Number(r.max),r.accept=r.accept||i.E.attr("accept")||"",r.accept||(r.accept=i.e.className.match(/\b(accept\-[\w\|]+)\b/gi)||"",r.accept=new String(r.accept).replace(/^(accept|ext)\-/i,"")),n.extend(i,r||{}),i.STRING=n.extend({},n.fn.MultiFile.options.STRING,i.STRING),n.extend(i,{n:0,slaves:[],files:[],instanceKey:i.e.id||"MultiFile"+String(u),generateID:function(n){return i.instanceKey+(n>0?"_F"+String(n):"")},trigger:function(t,r){var f=i[t],e=n(r).attr("value"),u;return f&&(u=f(r,e,i),u!=null)?u:!0}}),String(i.accept).length>1&&(i.accept=i.accept.replace(/\W+/g,"|").replace(/^\W|\W$/g,""),i.rxAccept=new RegExp("\\.("+(i.accept?i.accept:"")+")$","gi")),i.wrapID=i.instanceKey+"_wrap",i.E.wrap('<div class="MultiFile-wrap" id="'+i.wrapID+'"></div>'),i.wrapper=n("#"+i.wrapID+""),i.e.name=i.e.name||"file"+u+"[]",i.list||(i.wrapper.append('<div class="MultiFile-list" id="'+i.wrapID+'_list"></div>'),i.list=n("#"+i.wrapID+"_list")),i.list=n(i.list),i.addSlave=function(t,r){i.n++,t.MultiFile=i,r>0&&(t.id=t.name=""),r>0&&(t.id=i.generateID(r)),t.name=String(i.namePattern.replace(/\$name/gi,n(i.clone).attr("name")).replace(/\$id/gi,n(i.clone).attr("id")).replace(/\$g/gi,u).replace(/\$i/gi,r)),i.max>0&&i.n-1>i.max&&(t.disabled=!0),i.current=i.slaves[r]=t,t=n(t),t.val("").attr("value","")[0].value="",t.addClass("MultiFile-applied"),t.change(function(){var e,f,o,u;if(n(this).blur(),!i.trigger("onFileSelect",this,i))return!1;e="",f=String(this.value||""),i.accept&&f&&!f.match(i.rxAccept)&&(e=i.STRING.denied.replace("$ext",String(f.match(/\.\w{1,4}$/gi))));for(o in i.slaves)i.slaves[o]&&i.slaves[o]!=this&&i.slaves[o].value==f&&(e=i.STRING.duplicate.replace("$file",f.match(/[^\/\\]+$/gi)));return(u=n(i.clone).clone(),u.addClass("MultiFile"),e!="")?(i.error(e),i.n--,i.addSlave(u[0],r),t.parent().prepend(u),t.remove(),!1):(n(this).css({position:"absolute",top:"-3000px"}),t.after(u),i.addToList(this,r),i.addSlave(u[0],r+1),i.trigger("afterFileSelect",this,i)?void 0:!1)}),n(t).data("MultiFile",i)},i.addToList=function(t,r){if(!i.trigger("onFileAppend",t,i))return!1;var e=n('<div class="MultiFile-label"></div>'),u=String(t.value||""),o=n('<span class="MultiFile-title" title="'+i.STRING.selected.replace("$file",u)+'">'+i.STRING.file.replace("$file",u.match(/[^\/\\]+$/gi)[0])+"</span>"),f=n('<a class="MultiFile-remove" href="#'+i.wrapID+'">'+i.STRING.remove+"</a>");return i.list.append(e.append(f," ",o)),f.click(function(){return i.trigger("onFileRemove",t,i)?(i.n--,i.current.disabled=!1,i.slaves[r]=null,n(t).remove(),n(this).parent().remove(),n(i.current).css({position:"",top:""}),n(i.current).reset().val("").attr("value","")[0].value="",!i.trigger("afterFileRemove",t,i),!1):!1}),i.trigger("afterFileAppend",t,i)?void 0:!1},i.MultiFile||i.addSlave(i.e,0),i.n++,i.E.data("MultiFile",i)})},n.extend(n.fn.MultiFile,{reset:function(){var t=n(this).data("MultiFile");return t&&t.list.find("a.MultiFile-remove").click(),n(this)},disableEmpty:function(t){t=(typeof t=="string"?t:"")||"mfD";var i=[];return n("input:file.MultiFile").each(function(){n(this).val()==""&&(i[i.length]=this)}),n(i).each(function(){this.disabled=!0}).addClass(t)},reEnableEmpty:function(t){return t=(typeof t=="string"?t:"")||"mfD",n("input:file."+t).removeClass(t).each(function(){this.disabled=!1})},intercepted:{},intercept:function(t,i,r){var e,f,u;if(r=r||[],r.constructor.toString().indexOf("Array")<0&&(r=[r]),typeof t=="function")return n.fn.MultiFile.disableEmpty(),f=t.apply(i||window,r),setTimeout(function(){n.fn.MultiFile.reEnableEmpty()},1e3),f;for(t.constructor.toString().indexOf("Array")<0&&(t=[t]),u=0;u<t.length;u++)e=t[u]+"",e&&function(t){n.fn.MultiFile.intercepted[t]=n.fn[t]||function(){},n.fn[t]=function(){return n.fn.MultiFile.disableEmpty(),f=n.fn.MultiFile.intercepted[t].apply(this,arguments),setTimeout(function(){n.fn.MultiFile.reEnableEmpty()},1e3),f}}(e)}}),n.fn.MultiFile.options={accept:"",max:-1,namePattern:"$name",STRING:{remove:'<img src="../images/DeleteMessage.png" alt="remove image ArabiSky" style="width: 15px;height: 15px;" />',denied:"إمتداد الصورة غير مقبول يمكنك إختيار .png او .jpg",file:"$file",selected:"File selected: $file",duplicate:"لقد قمت بإختيار هذه الصورة من قبل"},autoIntercept:["submit","ajaxSubmit","ajaxForm","validate","valid"],error:function(n){alert(n)}},n.fn.reset=function(){return this.each(function(){try{this.reset()}catch(n){}})},n(function(){n("input[type=file].multi").MultiFile()})}(jQuery);