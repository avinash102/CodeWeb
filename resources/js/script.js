$(document).ready(function(){
    
    $('.js--section-project,.js--section-about,.js--section-Introduction').waypoint(function(direction) {
     if (direction == "down") {
            $('nav').addClass("sticky");
        } else {
            $('nav').removeClass("sticky");
        }
    },{
         offset: '-70px'
    })  
  
$('.js--wp-1,.js--wp-2,.js--wp-3').waypoint(function(direction){
         $('.js--wp-1,.js--wp-2,.js--wp-3').addClass('animated fadeInUp');

},{
    offset:'70%'
});
    
$('.js--wp-4').waypoint(function(direction){
         $('.js--wp-4').addClass('animated  pulse');

},{
    offset:'70%'
});
    
$('.js--wp-5').waypoint(function(direction){
         $('.js--wp-5').addClass('animated  fadeInLeft');

},{
    offset:'70%'
});
    
    
 
/* header image */

$('#image1').delay(50).addClass("animate").animate({
    right:"+=220px",
},1000);
$('#image2').delay(50).addClass("animate").animate(
        {
         top:"0px",
         right:"-=160px",
        },1000);
$('#image3').delay(50).addClass("animate").animate({
        top:"+=-30px",
        right:"-=130px",
    },1000); 
  
    
   /*   mobile.nav      */   

$('.js--nav-icon').click(function(){
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    
    nav.slideToggle(250);
    
    if(icon.hasClass('ion-navicon-round')){
        icon.removeClass('ion-navicon-round');
        icon.addClass('ion-close');    
    }else{
        icon.removeClass('ion-close');
        icon.addClass('ion-navicon-round');
    }        
})
    
    

 
    
});
    

  
  
  










 
   


















































