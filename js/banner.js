$(document).ready(function(){
	$(function() {
		var len=$("#NewWorld ul li").length;
		for (var i = 0; i<len; i++) {
			$("#NewWorld ul li").eq(i).css("left", 474*i);
		}
//滚动到第a个banner条
		function scroll(a) {
			var loc = -a * Bwidth;
			
			$("#NewWorld ul").stop(1,0).animate({left: loc},300);

			$("#NewWorld .btn span").stop(1,0).animate({opacity: "0.4"},300)

			.eq(a).stop(1,0).animate({opacity: "1"},300)
		}
//这里循环生成num个按钮
		var BTNgroup = "<div class='btn'>",num = $("#NewWorld ul li").length;
		for (var i = 0; i<num; i++) {
			BTNgroup += "<span></span>";
		}
		BTNgroup += "</div>";
		$("#NewWorld").append(BTNgroup);

		var banClock, Bwidth = $("#NewWorld").width(), portal = 0;
//跳转到按到的那个banner位置
		$("#NewWorld .btn span").click(function() {
			portal = $("#NewWorld .btn span").index(this),
			scroll(portal)
		}).eq(0).trigger("click");
//定义整个banner条总长度
		$("#NewWorld ul").css("width", Bwidth * num);
//当鼠标指向banner条时，鼠标指向时清除计时器，停止滚动
		// $("#NewWorld").hover(function() {
		// 	clearInterval(banClock)
		// },    //鼠标不指向时，设置计时器，开始滚动
		// function() {
		// 	banClock = setInterval(function() {
		// 		scroll(portal);
		// 		portal++;
		// 		if(portal == num) {portal = 0}
				
		// 	},1e3)
		// }).trigger("mouseleave")
	});

});
