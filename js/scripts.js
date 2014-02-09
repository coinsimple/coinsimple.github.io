	$(document).ready(function() {
		// main slider
		$('.typo-slider').bxSlider({
			mode: 'horizontal',
			captions: true,
			controls: false,
			slideWidth: 1024,
			minSlides: 1,
			maxSlides: 1,
			slideMargin: 0,
			auto: true,
			pause: 3000,
			autoHover: true,
			useCSS: false
		});
		$(".typo-slider").show();
		$(".product-box").fitVids();
	});
	$(window).load(function() {	
		// creating spans
		$(".typo-slider .slide img").each(function() {
			var slideImgTitle = $(this).attr('title');
			var pipe_pos = slideImgTitle.indexOf('|');
			var end_pos = slideImgTitle.length;
			var text_big = slideImgTitle.substring(0,pipe_pos);
			var text_small = slideImgTitle.substring(pipe_pos+1,end_pos);
			$(this).next().find("span").remove();
			$(this).next().append('<span class="big-text">' + text_big + '</span><span class="small-text">' + text_small + '</span>').hide().fadeIn(1000);
		});		
		// dynamic top margin
		function captionTop() {
			var slideImgHeight = $(".typo-slider .slide > img").height();
			var changedTop = (slideImgHeight/2)-40;
			$(".typo-slider .slide .bx-caption").css('top', changedTop + 'px');
		}		
		$(window).resize(function() {
			captionTop();
		});
		captionTop();
		//  mobile menu display
		$(".menu-button").click(function(){
			$("ul.menu-links").toggleClass("menu-show");
		})
	})
	//  scroll page to element
	function goToByScroll(id){
		$('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
	}
	// mobile hide URL bar
	var browser         = navigator.userAgent;
	var browserRegex    = /(Android|BlackBerry|IEMobile|Nokia|iP(ad|hone|od)|Opera M(obi|ini))/;
	var isMobile        = false;
	if(browser.match(browserRegex)) {
		isMobile            = true;
		addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);
		function hideURLbar(){
			window.scrollTo(0,1);
		}
	}