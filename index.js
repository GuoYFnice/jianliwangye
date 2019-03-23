/*
* @Author: GuoYF
* @Date:   2018-03-26 16:28:13
* @Last Modified by:   GuoYF
* @Last Modified time: 2018-03-28 21:25:02
*/
// 导航栏效果
$(window).scroll(function(){
	scrollTop =$(window).scrollTop();
	if(scrollTop<700)
	{
		$("#both").removeClass("newboth");	
		$("nav").removeClass("fixnav");
	}else if(scrollTop>=700){
		$("#both").addClass("newboth");
		$("nav").addClass("fixnav");
	}
})
// menu
$('.jup-frist').click(function(){
	 To({'scrollTop':0});
})
$('#jup-info').click(function(){
	 To({'scrollTop':700});
})
$('#jup-ilove').click(function(){
	 To({'scrollTop':1298});
})
$('#jup-ican').click(function(){
	 To({'scrollTop':2598});
})
$('#jup-callme').click(function(){
	 To({'scrollTop':3684});
})
// 按键
$('.more').click(function(){
	 To({'scrollTop':700});
})
$('.open').click(function(){
	 $(".mask").fadeIn();
	 $(".menu").css('right',0);
})
$('.mask').click(function(){
	 $(".mask").fadeOut();
	 $(".menu").css('right',-200);
})
// 个人介绍动画
$('.icon').mouseover(function(){
	$(this).css('color','#D27D05');
	$(this).css('background','#fff');

})
$('.icon').mouseout(function(){
	$(this).css('color','#fff');
	$(this).css('background','#D27D05');
	
})
// 跳转函数
var To =function(data){
	scrollTop =$(window).scrollTop();
	 $('body,html').animate(data,100)
}






// $('#liaojie').click(function(){
// 	 scrollTop =$(window).scrollTop();
// 	 $('body,html').animate({'scrollTop':700},100)	
// })