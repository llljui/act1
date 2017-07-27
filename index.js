$('.l_h4').click(function() {
    $("html,body").animate({scrollTop: $("#img1").offset().top}, 500);
});
$('.l_h3').click(function() {
    $("html,body").animate({scrollTop: $("#img8").offset().top}, 500);
});
$('.l_h2').click(function() {
    $("html,body").animate({scrollTop: $("#img7").offset().top}, 500);
});
$('.l_h1').click(function() {
    $("html,body").animate({scrollTop: $("#img3").offset().top}, 500);
});
$('.l_h0').click(function() {
    $("html,body").animate({scrollTop: $("#img2").offset().top}, 500);
});
/*onclick="window.location.href='#img1'"*/
    //锚点跳转滑动效果  
    $('.btn5').click(
    	 function () {
    	$(".borders").css({
    		'display': 'block',
    		'transition': '0.2s'
    	});
    	$(".onborder").css({
    		'transform':'scale(1,1)',
    		'display': 'block',
    		'transition': '1s'
    	});
    });
      $('.back').click(
    	 function () {
    	$(".borders").css({
    		'display': 'none',
    		'transition': '0.2s'
    	});
    	$(".onborder").css({
    		'transform':'scale(0,0)',
    		'display': 'none',
    		'transition': '1s'
    	});
    })
  $('.btn4').click(function () {
			var fr_m=$(".cpu1").val();
			var fr_t=$(".cpu2").val();
			var get=(Number(fr_m)*0.002)/12*Number(fr_t);
			var g=Math.round(get*100)/100;
			if (fr_m&&fr_t) {
				console.log(g);
				$(".myget").html("我的佣金:"+g+"元");
			}
			else{
				$(".myget").html("请输入金额,日期");
			}

		});