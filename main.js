$(document).ready(function(){

	var typed = new Typed("#command", {
		strings: ['<font color="lime">./Silent was here</font>^1000 `<br><font color="red">root@silent:~# </font><font color="lime">Silent Website Install</font>` ^1000 `<br><font color="red">root@silent:~# </font><font color="lime">installing JavaScript...</font>`^1000 `<br><font color="red">root@silent:~# </font><font color="lime">installing HTML5...</font>`^1000 `<br><font color="red">root@silent:~# </font><font color="lime">installing CSS3...</font>` ^1000 `<br><font color="red">root@silent:~# </font><font color="lime">installing PHP...</font>`^1000 `<br><font color="red">root@silent:~# </font><font color="lime">Fetching from source...</font>`^1000 `<br><font color="red">root@silent:~# </font><font color="lime">installing Complete...</font>`^1000 `<br><font color="red">root@silent:~# </font><font color="lime">Welcome to my Website...</font>`^2000'],
		typeSpeed: 0, 
	    backSpeed: 0, 
        smartBackspace: true, // this is a default loop: true
        cursorChar: '_',
        loop: true
	});

	var index = 0;
	$(document).scroll(function(){
		var top = $('.technical').height() - $(window).scrollTop();
		if(top<-300){
			if(index == 0){
				$('.chart').easyPieChart({
					easing: 'easeOutBounce',
					onStep: function(from, to, percent){
						$(this.el).find('.percent').text(Math.round(percent));
					},
					lineCap: 'round',
					trackColor: '#bdc3c7',
					barColor: '#e74c3c',
					size: 152,
					scaleColor: '#bdc3c7',
					scaleLength: 5
				});
			}
			index++;
		}
	});
	
});
