$(function(){
    var pageX;
    var pageY;
    $('body').mousemove(function(event){//Don't forget ''event'', otherwise you would have a surprise on firefox XD
     
      pageX = event.pageX - 150 ;
      pageY = event.pageY- 150;
     
      
      $('#lamp').css('left',pageX);
      $('#lamp').css('top',pageY);
      
    });
  });