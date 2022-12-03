$(function(){
  $('#console-box').append('<br/>console is ready...');
  
  $('button').click(function(){
    $('#console-box').prepend('<br>class:'+$(this).attr("class")+'|value:'+$(this).text()+'.');
; 
  });
  
});


$('.grade').click(function(){
  
    $('.numdetail').removeClass('notAvailable initialAvailable');
    
    $('#plus').empty().append($(this).attr("id") + '7-' + $(this).attr("id")+'9+');
  
    $('#neutral').empty().append($(this).attr("id") + '3-' + $(this).attr("id")+'6');
  
    $('.detail').removeClass('notAvailable initialAvailable');
  
    $('#minus').empty().append($(this).attr("id") + '0-' + $(this).attr("id")+'2');
; 
});


$('.nonnum').click(function(){
  
    $('.numdetail').addClass('notAvailable');
    $('.detail').removeClass('initialAvailable');
  
    $('#plus').empty().append('-');
    $('#minus').empty().append('-');
    $('#neutral').empty().append('-');
;
});


$('#5').click(function(){
  
    $('.detail').removeClass('initialAvailable');
  
    $('#plus').empty().append('45-59+');
    $('#minus').empty().append('0-24');
    $('#neutral').empty().append('25-44');
;
});