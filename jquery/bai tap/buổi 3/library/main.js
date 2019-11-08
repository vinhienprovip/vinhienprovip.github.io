//Bài 2
$('#check').click(function(){

    if($(this).attr('checked') == false){
         $('#btncheck').attr("disabled","disabled");   
    }
    else
        $('#btncheck').removeAttr('disabled');
    });
//Bài 3
var maxLength = 15;
$('textarea').keyup(function() {
  var textlen = maxLength - $(this).val().length;
  $('#rchars').text(textlen);
});
//Bài 4
function new_div() {
    $(document).ready(function() {
      var test = {
        id: "div",
        class: "divclass",
      };
      var $div = $("<div>", test);
      $div.html("New Division");
      $("body").append($div);
    });
    }
//Bài 21
$( "body" ).click(function( event ) {
    $( "#log" ).html( "Clicked a  " + event.target.nodeName );
  });
//Bài 22