$(function() {
  
 /* if div with class="card" is visible in actual viewport, 
 fade it in with bounce effect */
  
    $('.filter').each( function(i){
      
            //current viewport's top position
            var scrollTop = $(window).scrollTop(); 
            var height = $(window).height();
            var obj = $(this).position().top + $(this).outerHeight();
            //current viewport's bottom position
            var scrollBottom = scrollTop + height+$(this).height();
                 
           if(scrollBottom > obj){
            $(this)
                .animate({'opacity':'1'},{queue:false,duration: 800})
                .animate({'marginTop':'0px'},600,"easeOutBack")}    
    }); 

 /* scrolling to bottom: if visible in viewport, fade div in with delay */
    $(window).scroll( function(){

        $('.filter').each( function(i){
               
            var scrollTop = $(window).scrollTop();
            var height = $(window).height();
            var obj = $(this).position().top + $(this).outerHeight();
            var scrollBottom = scrollTop + height +$(this).height();
            
      if(scrollBottom > obj){
            $(this).delay(600)
                .animate({'opacity':'1'},{queue:false,duration: 1100})
                .animate({'marginTop':'0px'},{queue:false,duration: 1600, easing:"easeOutElastic"})}      

        }); 
    
    });
    
 });