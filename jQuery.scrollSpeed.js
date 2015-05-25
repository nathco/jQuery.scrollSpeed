// Plugin: jQuery.scrollSpeed
// Source: github.com/mrtdeh/jQuery.scrollSpeed
// Author: Morteza Dehghani
// Update: 2.0.0

(function($) {
    
    jQuery.scrollSpeed = function(step, speed, easing) {
        
        var $document = $(document),
            $window = $(window),
            $body = $('html, body'),
            option = easing || 'default',
            root = 0,
            scroll = false,
            scrollY,
            scrollX,
            view;
            
            
			var down,up;
			
        $window.on('mousewheel DOMMouseScroll', function(e) {
		
            if(root==0) root = $(window).scrollTop(); 
			
            var evt = window.event || e ;
			evt = evt.originalEvent ? evt.originalEvent : evt;              
			var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta ;

			if(delta > 0) {
				up = true;
				down = false;
			}
			else{
				down = true;
				up = false;
			}
			
                scrollY = $document.height() > $window.height();
                scrollX = $document.width() > $window.width();
                scroll = true;
            
            if (scrollY) {
                
                view = $window.height();
                    
                if (down)
            
                    root = (root + view) >= $document.height() ? root : root += step;
                
                if (up)
            
                    root = root <= 0 ? 0 : root -= step;
                
                $body.stop().animate({
            
                    scrollTop: root
                
                }, speed, option, function() {
            
                    scroll = false;
                
                });
            }
            
            if (scrollX) {
                
                view = $window.width();
                    
                if (down)
            
                    root = (root + view) >= $document.width() ? root : root += step;
                
                if (up)
            
                    root = root <= 0 ? 0 : root -= step;
                
                $body.stop().animate({
            
                    scrollLeft: root
                
                }, speed, option, function() {
            
                    scroll = false;
                
                });
            }
            
            return false;
            
        }).on('scroll', function() {
            
            if (scrollY && !scroll) root = $window.scrollTop();
            if (scrollX && !scroll) root = $window.scrollLeft();
            
        }).on('resize', function() {
            
            if (scrollY && !scroll) view = $window.height();
            if (scrollX && !scroll) view = $window.width();
            
        });       
    };
    
    jQuery.easing.default = function (x,t,b,c,d) {
    
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    };
    
})(jQuery);
