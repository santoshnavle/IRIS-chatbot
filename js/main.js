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
         
         $('#close-chat').slideDown(500);
    })

    $('#close-chat').click(function(){
        $('#chat-box').slideUp();    
        $(this).hide();
    })
})