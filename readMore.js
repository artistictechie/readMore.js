$.fn.readMore = function(params){
		
    $values = $.extend(
                  {
                     child_tag : "p",	
                     minVisible : 2,
                     excludeTag : "",
                     read_more_btn_class : "",
                     animationSpeed : 500,
                   },params);

		$excludeTagStr = "";
		$is_visible = true;
		$total_element = $(this).children( $values.child_tag ).size();
		$fisrtElement = $(this).children( $values.child_tag ).eq( $values.minVisible - 1 );
		
		if($values.excludeTag.length > 0)
			    $excludeTagStr = ":not("+$values.excludeTag+")";
		
		$nextAllElement = $fisrtElement.nextAll($excludeTagStr);
		
		toogleAll = function() {
                    if($fisrtElement.text().length < 50){
                       $fisrtElement.slideToggle($values.animationSpeed);
                    }
                    
                    $nextAllElement.slideToggle($values.animationSpeed);		
                  }
		
		
		$(".rd_more").live("click" , function() {
        if($is_visible){
          toogleAll();
          $(this).html( "- Read Less" );
          $is_visible=false;
        }
        else{
          toogleAll();
          $(this).html( "+ Read More" );
          $is_visible=true;
        }
		});
		
		toogleAll();
		
		if( $total_element > ($values.minVisible - 1) ) 
			$(this).append( "<span style='float:right; cursor:pointer;' class='rd_more'>+ Read More</span>" );

};