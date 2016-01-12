$(document).ready(function(){
     $(".button-collapse").sideNav();

     if (window.location.href.indexOf("#send") > -1) {
         Materialize.toast('Message Send!', 3000) // 4000 is the duration of the toast
     }
 });
