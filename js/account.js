Zepto(function($){
	
	document.addEventListener("tap",tap,false);
	
	function tap(){
		$(".t-top div").singleTap(function(){
			$(".account-add").css("display","block");
		});
		
		$(".back").singleTap(function(){
			location.href="account.html";
//			$(".account-add").css("display","none");
		});
		
		$(".account-add").swipeUp(function(){
			$(".account-add").css("display","none");
			
		})
		
//		$(".account-add-t div").singleTap(function(){
//			location.href="account.html";
//		})

		$(".day").singleTap(function(){
			location.href="disap.html";
		})
		
	}
	
	
	

	
	
	
	
	
	
	
	
})
