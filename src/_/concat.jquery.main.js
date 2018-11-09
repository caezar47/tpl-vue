$('img').addClass('img-responsive');
$(".form__control[type='tel']").mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
$(".form__panel").validationEngine(
	'attach', {
		promptPosition : "bottomLeft",
		//scrollOffset: 200,		
		scroll: false 
	}
); 
//humb
var humb = $(".navbar__hamburger-card"),
	toggle_navbar = humb.data("toggle-nav"),
	toggle_body = humb.data("body"),
	toggle_collapse = humb.data("collapse-nav"); 
humb.on('click',function() {				
	$(toggle_body).toggleClass("is--open-navbar");
	$(toggle_navbar).toggleClass("is--open");
	$(toggle_collapse).toggleClass("is--open");
	$(this).toggleClass("is--active");
});	
$(document.body).on('click', function(event) {
	if($(event.target).closest('.navbar__block').length == 0){	
		$(toggle_body).removeClass("is--open-navbar");
		$(toggle_navbar).removeClass("is--open");
		$(toggle_collapse).removeClass("is--open");
		humb.removeClass("is--active");
	}		
});		

var url = window.location.pathname;
//var url = window.location.href;
$('.navbar__nav a[href="'+url+'"]').parent().addClass('is--active'); 
$('.navbar-aside__nav a[href="'+url+'"]').parent().addClass('is--active'); 
$('.tabs__nav a[href="'+url+'"]').parent().addClass('is--active'); 
$('[data-azbn-toggle="dropdown"]').on('click', function(e) {
	$(".azbn-dropdown").toggleClass('open');
});	
$('.navbar-aside__dropdown [data-toggle="dropdown"]').on('click', function(e) {
	e.preventDefault();
	e.stopPropagation();
	$(this).parent().siblings().removeClass('open');
	$(this).parent().toggleClass('open');
});
$('.azbn__search-dropdown').on('shown.bs.dropdown', function(e) {
	$('.azbn__search-input').focus();
});

var $range = $(".js-range-slider");
$range.ionRangeSlider({
    step: 1,
});

console.debug('default.main.js');

$(document.body).on('click.fecss.scrollto', '.scrollto', {}, function(event){
	event.preventDefault();
	
	console.log('body trigger:click.fecss.scrollto');
	
	var btn = $(this);
	
	var el = $(btn.attr('href')).eq(0);
	var diff = parseInt(btn.attr('data-scrollto-diff')) || 0;
	var speed = parseInt(btn.attr('data-scrollto-speed')) || 777;
	
	$('html, body').animate({
		scrollTop: (el.offset().top + diff)
	}, speed);
	$(".navbar__nav .navbar__nav-item").removeClass("is--active");
	btn.parent().addClass("is--active");
});	
$(document.body).on('click', '.navbar__collapse.is--open .navbar__nav-link.scrollto', {}, function(event){	
	if(screenJS.isXS() || screenJS.isSM() || screenJS.isMD()) {
		event.preventDefault();		
		$('.navbar__hamburger-btn').trigger('click');
	}	
});
'use strict';
$(function() { 
	var header = $('[data-slider-slick="slick-header"]');	
	var gallery = $('[data-slider-slick="slick-gallery"]');	
	var CMS__TPL_PATH = '/wp-content/themes/azbn7theme';  
	//var CMS__TPL_PATH = '/tpl';  
	var CMS__TPL_PATH = '';  
	//local
	var prevArrow = '<button type="button" class="slick-btn  is--prev"><span class="sr-only">Предыдущий слайд</span><svg class="icon-svg icon-icon-prev" role="img"><use xlink:href="'+ CMS__TPL_PATH +'/img/svg/sprite.svg#icon-prev"></use></svg></button>';
	var nextArrow = '<button type="button" class="slick-btn  is--next"><span class="sr-only">Следующий слайд</span><svg class="icon-svg icon-icon-next" role="img"><use xlink:href="'+ CMS__TPL_PATH +'/img/svg/sprite.svg#icon-next"></use></svg></button>';	
	
	$('.slick-cloned .content-block__preview').removeAttr('data-fancybox');
	
	/*header.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		//infinite: true, 
		autoplay: true,
  		autoplaySpeed: 4000,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		fade: true
	});*/
	gallery.slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		dots: true,
		infinite: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [
		    {
				breakpoint: 1600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
		    },
		    {
				breakpoint: 768,
				settings: {
					arrows: false,
					//dots: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
		    }
		]
	});
}); 
//$('.text-block ul').addClass('ul-site');
$('.text__block table').addClass('table table-bordered');
$('.text__block ol').addClass('is--counts'); 
$('.text__block ul').addClass('is--styled'); 
$('.text__block .table.table-bordered').wrap('<div class="table-responsive"></div>'); 
//$('.text-block img').parent().addClass('_tb__img'); 
