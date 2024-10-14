$(function() {
	window.addEventListener("wheel", function(e){
        e.preventDefault();
    },{passive : false});

    var $html = $("html");
    var page = 1;  
    var lastPage = $(".contents").length; 
    //console.log(lastPage) 
    $html.animate({scrollTop:0},10);
    
    $(window).on("wheel", function(e){
 
        if($html.is(":animated")) return;
     
        if(e.originalEvent.deltaY > 0){
            if(page== lastPage) return;
     
            page++;
        }else if(e.originalEvent.deltaY < 0){
            if(page == 1) return;
     
            page--;
        }
        var posTop = (page-1) * $(window).height();
     
        $html.animate({scrollTop : posTop});
     
    });
/* swiper  */
$('.first_web').hover(
    function() {
        $(this).next('.subFirst_web').css('max-height', '300px');
    },
    function() {
        
        const subMenu = $(this).next('.subFirst_web');
        if (!subMenu.is(':hover')) { // subFirst_web 위에 마우스가 없으면
            subMenu.css('max-height', '0'); // 숨김
        }
    }
);

$('.subFirst_web').hover(
    function() {
        // subFirst_web에 마우스가 들어올 때
        $(this).css('max-height', '300px'); // 필요에 따라 높이 조정
    },
    function() {
        // subFirst_web에 마우스가 나갈 때
        $(this).css('max-height', '0'); // 숨김
    }
);
});




