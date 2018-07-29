



$(document).ready(function(){
   $('header').find($('.owl-carousel')).owlCarousel({
    loop:true,
  autoplay:true,
    margin:0,
   animateOut:'fadeOut',
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
})


  

    
    
    $('.reference').find($('.owl-carousel')).owlCarousel({
    loop:true,

    margin:20,
 autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:true
        }
    }
})
    
    $('.btn-header').click(function(){
        $(this).each(function(){
             ($('#modal_content')).show();
         $('#modal_content').addClass('animated bounceInUp');
       
        $('.transport').find('h2').addClass('animated bounceOut');
        })
    
    })

    $('#exampleModal').addClass('animated rubberBand');
  
    
 
    $('.spanHide').click(function(){
     
         $('#modal_content').addClass('animated bounceOut');
       
    })
    
       /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('h2').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
           
                $(this).addClass('animated rubberBand');
                    
            }
            
        }); 
    
    });
    $('.widget').hide();
   
  setTimeout(function(){
   
     
         $('.widget').addClass('animated bounceIn').show();
},1000);
    
    $('.btn-hamburger').click(function(){
      
        $('.nav-item').toggle();
        $('.nav-item').addClass('animated bounceInDown');
    
    })
})

