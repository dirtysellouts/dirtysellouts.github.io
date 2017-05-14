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
	
	
	$(".student_thumbnail").click(function(){
		student_click(this);
	});
	
	$(".thumbnail_name").click(function(){
		student_click(this);
	});
	
	
	$(".student_thumbnail").mouseenter(function(){
		student_hover(this,0);
	});
	
	$(".thumbnail_name").mouseenter(function(){
		student_hover(this,0);
	});
	
	
	$(".student_thumbnail").mouseleave(function(){
		student_hover(this,1);
	});
	
	$(".thumbnail_name").mouseleave(function(){
		student_hover(this,1);
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
	
	
	function student_click(e){
		_id = Number($(e).closest(".student").attr("id"));
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
		
		$('html,body').animate({
		     scrollTop: $(_info).offset().top - 80},
		'slow');
	}
	
	
	function student_hover(e, action){
		_id = Number($(e).closest(".student").attr("id"));
		
		if (action == 0){
			$("#" + _id + " .abv_img").css("display","block");
			$("#" + _id + " .blw_name").css("display","block");
			$("#" + _id + " .thumbnail_name").css("display","block");
		}else if (action == 1){
			$("#" + _id + " .abv_img").css("display","none");
			$("#" + _id + " .blw_name").css("display","none");
			$("#" + _id + " .thumbnail_name").css("display","none");
		}
	}
	
	
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
				<div class="abv_img"></div>\
				<img class="student_thumbnail" src="img/' + n + '.jpg">\
				<h2 class="thumbnail_name">' + student_name[n] + '</h2>\
				<div class="blw_name"></div>\
			</div>\
			<div class="info row">\
				<div class="container img_container">\
					<img class="student_img" src="img/' + n + '.jpg">\
				</div>\
				<div class="container text_container">\
					<h2 class="student_name">' + student_name[n] + '</h2>\
					<div class="student_bio">' + student_bio[n] + '</div>\
					<a class="portfolio_link" target="_blank" href="http://' + student_web[n] + '/">' + student_web[n] + '</a>\
				</div>\
			</div>\
		</div>\
		');
	}
});