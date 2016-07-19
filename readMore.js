$.fn.readMore = function(params){
		
    return this.each(function(){
      
      var $this = [];

      $this.values = $.extend(
                    {
                       childTag : "p",
                       minVisible : 2,
                       excludeTag : "",
                       minTextLengthToHide : 50,
                       readMoreOpenedText : "- Read Less",
                       readMoreClosedText : "+ Read More",
                       readMoreBtnClass : "",
                       animationSpeed : 500
                     },params);
      
  		$this.excludeTagStr = "";
  		$this.is_visible = true;
  		$this.total_element = $(this).children( $this.values.childTag ).size();
  		$this.fisrtElement = $(this).children( $this.values.childTag ).eq( $this.values.minVisible - 1 );
  		
  		if($this.values.excludeTag.length > 0)
  			    $this.excludeTagStr = ":not(" + $this.values.excludeTag + ")";
  		
  		$this.nextAllElement = $this.fisrtElement.nextAll( $this.excludeTagStr );
  		
  		$this.toogleAll = function() {
                      if($this.fisrtElement.text().length < $this.values.minTextLengthToHide){
                         $this.fisrtElement.slideToggle( $this.values.animationSpeed );
                      } 
                      $this.nextAllElement.slideToggle( $this.values.animationSpeed );		
                    }	
  		
  		$this.toogleAll();
  		
      $this.rdMoreId = "rd_more_" + parseInt(Math.random()*100000);


  		if( $this.total_element > ($this.values.minVisible - 1) ) 
  			  $(this).append( "<span style='cursor:pointer;' id = '" + $this.rdMoreId + "'class='rd_more " + $this.values.readMoreBtnClass + "'>+ Read More</span>" );
          
           $(this).find("#" + $this.rdMoreId).on("click" , function() {
            if($this.is_visible){
              $this.toogleAll();
              $(this).html( $this.values.readMoreOpenedText );
              $this.is_visible = false;
            }
            else{
              $this.toogleAll();
              $(this).html( $this.values.readMoreClosedText );
              $this.is_visible = true;
            } 
  		});

      return $this;
    });
};