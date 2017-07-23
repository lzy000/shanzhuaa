$(function(){
	
	$(".all input").click(function(){
		$(".bottom>li").show()
		
		$(".big").css("display","none")
		var a=$(this).val()
		$(".bottom>li:not(:contains("+a+"))").hide()
		
		if($(this).val()=="全部"){
			$(".bottom>li").show()
		}
	})
	
	$(".fun").click(function(){
		$(".big").css("display","block")
	})
})
