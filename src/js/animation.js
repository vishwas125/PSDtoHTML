 --------------------------------------------------
// css animation
// --------------------------------------------------
	var v_count = '0';

	jQuery(window).load(function() {
				
		jQuery('.animated').fadeTo(0,0);
		jQuery('.animated').each(function(){
		var imagePos = jQuery(this).offset().top;
		var timedelay = jQuery(this).attr('data-delay');
		
		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+300) {
				jQuery(this).fadeTo(1,500);
				$anim = jQuery(this).attr('data-animation');
			}
		});
		

	});
		
	jQuery(window).scroll(function() {
		
		
				
// --------------------------------------------------
// counter
// --------------------------------------------------
	
		jQuery('.timer').each(function(){
		var imagePos = jQuery(this).offset().top;
				
		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+500 && v_count=='0') {		

					  jQuery(function ($) {

					  // start all the timers
					  jQuery('.timer').each(count);
					  
					  
					  function count(options) {
					 	v_count = '1';
						var $this = jQuery(this);
						options = $.extend({}, options || {}, $this.data('countToOptions') || {});
						$this.countTo(options);
					  }
					});
					
				}
			});
		
// --------------------------------------------------
// progress bar
// --------------------------------------------------
		jQuery('.de-progress').each(function(){
		var pos_y = jQuery(this).offset().top;
		var value = jQuery(this).find(".progress-bar").attr('data-value');
		
		var topOfWindow = jQuery(window).scrollTop();
			if (pos_y < topOfWindow+500) {		
				jQuery(this).find(".progress-bar").animate({'width': value },"slow");
			}
		});
	
	
		jQuery('.animated').each(function(){
		var imagePos = jQuery(this).offset().top;
		var timedelay = jQuery(this).attr('data-delay');
		
		var topOfWindow = jQuery(window).scrollTop();
			if (imagePos < topOfWindow+500) {		
				jQuery(this).delay(timedelay).queue(function(){
					jQuery(this).fadeTo(1,500);
					$anim = jQuery(this).attr('data-animation');
					jQuery(this).addClass($anim).clearQueue();
				});
				
			}
		});
	
	});



		