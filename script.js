function tempc() {
  var t = parseInt(document.getElementById("temp").value);
  var f = ((t * 9/5) + 32).toFixed(3);
  var k = (t + 273.15).toFixed(3);
  document.getElementById("result").innerHTML = "Temperature in Fahrenheit: " + f + "F and Kelvin: " + k + "K";
}

function tempf() {
  var t = parseInt(document.getElementById("temp").value);
  var c = ((t - 32) * 5/9).toFixed(3);
  var k = ((t - 32) * 5/9 + 273.15).toFixed(3);
  document.getElementById("result").innerHTML = "Temperature in Celsius: " + c + "C and Kelvin: " + k + "K";
}

function tempk() {
  var t = parseInt(document.getElementById("temp").value);
  var c = (t - 273.15).toFixed(3);
  var f = ((t - 273.15) * 9/5 + 32).toFixed(3);
  document.getElementById("result").innerHTML = "Temperature in Celsius: " + c + "C and Fahrenheit: " + f + "F";
}

function performOperation() {
  var options = document.getElementsByName('temp');
  var selectedOption;

  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      selectedOption = options[i].value;
      break;
    }
  }

  if (selectedOption === 'celsius') {
    tempc();
  } else if (selectedOption === 'farheneit') {
    tempf();
  } else {
    tempk();
  }
}
