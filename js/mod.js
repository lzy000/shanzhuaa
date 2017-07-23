$(function(){
	var a=0;
	
		$(".ear").click(function(){	
			a++;
			if(a%2!=0){
				$(".inp").attr("type","text");							
			    $(this).css("color","#666666")
		   }else{
		   	    $(".inp").attr("type","password");							
		         $(this).css("color","red")
		   }
	 	})
	$(".sure").click(function(){
		$("footer").show()
	})
	$("footer h3").click(function(){
		$("footer").hide()
	})
	
	//验证码倒计时
     $(".pass h4 a:first").click(function(){
     	var i = 59;
     	 $(this).hide().siblings().show()
         setInterval(function(){
         	if(i>=0){
         		$(".time").html(i--);
         	}
         },1000)
     })
     
     
     
     
	
})
