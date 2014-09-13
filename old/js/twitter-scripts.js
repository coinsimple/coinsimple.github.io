		function randomString(length) {
			var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
			var str = '';
			for (var i = 0; i < length; i++) {
				str += chars[Math.floor(Math.random() * chars.length)];
			}
			return str;
		}
		var rnd = randomString(8);

	jQuery(function($){
		$("#ticker").tweet({
					username: "passionthemes",
					page: 1,
			modpath: '/demo/flat-landing/demo-1/twitter/',
					avatar_size: 32,
					count: 20,
					loading_text: "loading ..."
				})
		});
	
	$(document).ready(function() {
		var ticker = $('.tweet_list');
		ticker.children('li:first').show().siblings().hide();
		
		setInterval(function() {
			ticker.find('li:visible').fadeOut(500,function() {
				$(this).appendTo(ticker);
				ticker.children('li:first').fadeIn(500);
			});
		},3500);
	});