$(document).ready(function () {
     $("#search").on("keyup", function () {
       let inp = $("#search").val().toUpperCase();
       $(".row .colm").filter(function () {
         $(this).toggle($(this).text().toUpperCase().indexOf(inp) > -1);
       });
     });
   });