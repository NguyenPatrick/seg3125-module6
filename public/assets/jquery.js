// https://html.form.guide/jquery/validation-using-jquery-examples.html

// Wait for the DOM to be ready
$(function () {
  $("#subForm").submit(function (e) {
    e.preventDefault();
    var fruit = $("#fruitInput").val();
    var animal = $("#animalSelect").val();
    var time = $("#timeSelect").val();
    var color = $('input[name="color"]:checked').val();
    var streaming = $('input[name="streaming"]:checked').val();

    $("#fruitInput").next(".error").remove();
    $("#animalSelect").next(".error").remove();
    $("#timeSelect").next(".error").remove();
    $("#colorSelect").next(".error").remove();
    $("#streamingRadio").next(".error").remove();

    console.log(color);

    if (fruit.length < 1) {
      $("#fruitInput").after(
        '<span class="error">Please enter your favorite fruit</span>'
      );
    }

    if (!animal) {
      $("#animalSelect").after(
        '<span class="error">Please select your favorite animal</span>'
      );
    }

    if (!time) {
      $("#timeSelect").after(
        '<span class="error">Please select your favorite time of day</span>'
      );
    }

    if (!color) {
      $("#colorSelect").after(
        '<span class="error">Please select your favorite colors</span>'
      );
    }

    if (!streaming) {
      $("#streamingRadio").after(
        '<span class="error">Please select your favorite streaming service</span>'
      );
    }
  });
});
