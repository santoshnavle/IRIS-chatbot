$(document).ready(function(){        
    $('#slide-chat').click(function(){
        $('#chat-box').slideDown();
        setTimeout(function(){ 
            $('.faq-box').fadeIn(800);           
         }, 300);

         setTimeout(function(){ 
            $(".faq-q ul li").each(function(i) {
                $(this).delay(2000 * i).fadeIn(1000);                               
            });         
         }, 2000);


        setTimeout(function(){ 
            $('.conversion-btn').fadeIn(800);           
         }, 300);
       
         
         $('#close-chat').show(500);
    })

    $('#close-chat').click(function(){
        $('#chat-box').slideUp();    
        $(this).hide();
    })

    if($('#chat-box').height() > 400+ 'px'){
        $('.chatboat .chat-head').css({'max-width': '100%'});
    }

    


    // custom scroll
    new PerfectScrollbar('.scroll-box');

     
})
