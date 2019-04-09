$(document).ready(function(){

  const display = $('.calculator-display');
  const keypad = $(".calculator-keys");

  keypad.button
  // console.log(numbers);

  //Listen to all button clicks...

  var buttonNumbers = keypad.button;
  // console.log(buttonNumbers);

  $("button").click(function() {
    var a = display.html();
    var keyNumber = $(this).attr("data-key");
    if (keyNumber == "+") {
      console.log(a);
    }

    if (keyNumber == "=") {
      var b = display.html()
      var x = 89;
      var c = b + x;
      display.html(c);
    }
    var figures = display.html();
    if (figures == 0) {
      display.html(keyNumber);
    } else {
    display.html(figures + keyNumber);
    }

  });

//Operator functions

  //Clear screen function
  $(".clear").click(function() {
    display.html("0");
  });


  // $(".equals").click(function() {
  //   var x = a + b;
  //   display.html(x);
  // });
  //
  // minus function() {
  //
  // }
  //
  // multiply function() {
  //
  // }
  //
  // divide function() {
  //
  // }

});
