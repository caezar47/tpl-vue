'use strict';

$.noConflict();

[[azbntple tpl="/src/common/bootstrap/js/bootstrap.js" ]]
[[azbntple tpl="/src/common/fancybox3/js/fancybox.js" ]]
[[azbntple tpl="/src/_/concat.jquery.plugin.js" ]]

(function($){
	var __body = $(document.body);
	var ns = 'azbn';
	var _ns = '.azbn';

	window.onerror = function(error, url, lineNumber, column, errorObj) {
		console.dir(arguments);
		return;
	}

	/* 
	Создание триггеров на элементы, в основном, на body
	*/
	[[azbntple tpl="/src/_/concat.jquery.event.js" ]]

	/*
	Основная логика сайта
	*/
	[[azbntple tpl="/src/_/concat.jquery.main.js" ]]

	/*
	Событие смены размера экрана, генерация этого события
	*/
	$(window).on('resize',function(event){
		[[azbntple tpl="/src/_/concat.jquery.resize.js" ]]
	}).trigger('resize');

	/*
	Событие скроллинга экрана, генерация этого события
	*/
	$(window).on('scroll',function(event){
		[[azbntple tpl="/src/_/concat.jquery.scroll.js" ]]
	}).trigger('scroll');
	
	
	/*
	Событие ухода со страницы
	*/
	window.onbeforeunload = function(event) {
		
		//__body.trigger('unload', [event]);
		return;//return false;

	}
	
	/*
	Событие инициализации .trigger('azbn7.init');
	*/
	
})(jQuery);