// bài 10
$('input:radio[value=female]').prop("checked", true );;

// bài 15
$(".1" ).click(function() {
    $( this ).slideUp();
  });

// bài 16

// Bài 17
$("body").delegate( ".2", "click", function() {
    $(this).after( "<h1>Nguyễn Vinh Hiển</h1>" );
  });

// Bài 18
$(".3").on( "click", "button", function( event ) {
    $(event.delegateTarget ).css( "background-color", "green");
  });

// Bài 19
$( "input[type=text]" ).focus(function() {
    $( this ).blur();
  });