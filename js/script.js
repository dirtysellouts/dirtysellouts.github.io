$(document).ready(function(){
	var _swap_speed = 350;
	var _home = $("#home");
	var _about = $("#about");
	var _id, _info, _offset;
	
	
	$("#page_toggle").click(function(){
		if ($(this).html() == "About"){
			$(this).html("Home");
			
			$("#home").animate({"left":"-100%"},_swap_speed);
			$("#about").animate({"left":0},_swap_speed);
		}else {
			$(this).html("About");
			
			$("#home").animate({"left":0},_swap_speed);
			$("#about").animate({"left":"100%"},_swap_speed);
		};
	});
	
	
	for (i = 0; i < 36; i++){
		new_sudent(i);
	}
	
	
	$(".student").click(function(){
		_id = Number($(this).attr("id"));
		_info = $("#" + _id + " .info");
		
		$(".student:not(#" + _id + ") .info").hide();
		
		_offset = info_offset((_id+1) % 6);
		
		if ($(window).width() > 750){
			_info.css({"left":_offset});
		}else {
			_info.css({"left":0});
		};
		
		_info.width($(window).width());
		_info.slideToggle(200);
	});
	
	
	$(window).resize(function(){
		if (_info != undefined){
			_info.width($(this).width());
			
			if ($(this).width() <= 750){
				_info.css({"left":0});
			}else {
				_info.css({"left":_offset});
			};
		};
	});
	
	
	/* FUNCTIONS */
	
	function info_offset(n){
		switch(n){
			case 1:
				return 0;
				break;
			case 2:
				return "-100%";
				break;
			case 3:
				return "-200%";
				break;
			case 4:
				return "-300%";
				break;
			case 5:
				return "-400%";
				break;
			case 0:
				return "-500%";
				break;
			};
	}
	
	function new_sudent(n){
		_home.append('\
		<div id="' + n + '" class="student container col-sm-2">\
			<div class="row">\
				<img class="student_thumbnail" src="img/' + n + '.jpg">\
			</div>\
			<div class="info row">\
				<div class="container img_container">\
					<img class="student_img" src="img/' + n + '.jpg">\
				</div>\
				<div class="container text_container">\
					<p class="student_text">' + student_info[n] + '</p>\
					<a class="portfolio_link" href="http://' + student_web[n] + '/">' + student_web[n] + '</a>\
				</div>\
			</div>\
		</div>\
		');
	}
});