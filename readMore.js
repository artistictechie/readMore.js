$.fn.readMore = function(params){
		
    $values = $.extend(
                  {
                     child_tag : "p",
                     minVisible : 2,
                     excludeTag : "",
                     minTextLengthToHide : 50,
                     readMoreOpenedText : "- Read Less",
                     readMoreClosedText : "+ Read More",
                     readMoreBtnClass : "",
                     animationSpeed : 500
                   },params);

		$excludeTagStr = "";
		$is_visible = true;
		$total_element = $(this).children( $values.child_tag ).size();
		$fisrtElement = $(this).children( $values.child_tag ).eq( $values.minVisible - 1 );
		
		if($values.excludeTag.length > 0)
			    $excludeTagStr = ":not(" + $values.excludeTag + ")";
		
		$nextAllElement = $fisrtElement.nextAll( $excludeTagStr );
		
		toogleAll = function() {
                    if($fisrtElement.text().length < $values.minTextLengthToHide){
                       $fisrtElement.slideToggle( $values.animationSpeed );
                    } 
                    $nextAllElement.slideToggle( $values.animationSpeed );		
                  }	
		
		toogleAll();
		
		if( $total_element > ($values.minVisible - 1) ) 
			  $(this).append( "<span style='cursor:pointer;' class='rd_more " + $values.readMoreBtnClass + "'>+ Read More</span>" );
        
    $(".rd_more").on("click" , function() {
          if($is_visible){
            toogleAll();
            $(this).html( $values.readMoreOpenedText );
            $is_visible = false;
          }
          else{
            toogleAll();
            $(this).html( $values.readMoreClosedText );
            $is_visible = true;
          } 
		});

};