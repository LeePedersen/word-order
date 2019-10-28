$(document).ready(function() {

  $('form#input').submit(function(event) {
    event.preventDefault();
    var input = $('#words').val();
    var inputArray = input.split(" ");
    var alreadySeen = {};
    inputArray.forEach(function(word) {
      var counter = 1;
      if (alreadySeen[word]) {
        alreadySeen[word] += 1;
      }
      else {
        alreadySeen[word] = 1;

        // alert(alreadySeen);
      }
      console.log(alreadySeen);
      $("ul").append("<li>" + word + alreadySeen[word] + "</li>");
      // var output = Object.keys(alreadySeen);
      // console.log(output);
    });


  });
});
