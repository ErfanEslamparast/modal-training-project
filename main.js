$(document).ready(function () {
    $(".modal-trigger").click(function (e) { 
        $(".modal").css("display","block") 
        $(".modal-box").slideDown(500)
     });

     $(".modal-sandbox,.close-modal").click(function (e) { 
         $(".modal-box").slideUp(500)
         $(".modal,.modal-sandbox").fadeOut(500)
        
     });
});