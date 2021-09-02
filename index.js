// Switch FROM and TO city

function switchText() {
    var obj1 = document.getElementById('fromCity').value;
    var obj2 = document.getElementById('toCity').value;

    var temp = obj1;
    obj1 = obj2;
    obj2 = temp;
    
    document.getElementById('fromCity').value = obj1;
    document.getElementById('toCity').value = obj2;
  }

// Airport

function getAirports() {
  var arr = [];
  for (var temp in airports) {
      if (airports.hasOwnProperty(temp)) {
          arr.push(airports[temp].iata + " - " + airports[temp].name);
      }
  }
  return arr;
}

$("#fromCity, #toCity").autocomplete({
  minLength: 2,
  autoFocus: true,
  delay: 0,
  source: getAirports()
});

// Redirecting URL

function redirectURL() {

  var fromname = document.getElementById('fromCity').value;
  var fromCityName = fromname.split("- ")[1];

  let result1 = airports.filter(obj => {
    return obj.name === fromCityName;
  })
  var fromCityCountry = result1[0].country;
  var fromCode = result1[0].iata;
  // fromCityName = fromCityName.toLowerCase();
  fromCityName = fromCityName.replaceAll(' ','-');


  var toname = document.getElementById('toCity').value;
  var toCityName = toname.split("- ")[1];

  let result2 = airports.filter(obj => {
    return obj.name === toCityName;
  })
  var toCityCountry = result2[0].country;
  var toCode = result2[0].iata;
  // toCityName = toCityName.toLowerCase();
  toCityName = toCityName.replaceAll(' ','-');


  if (fromCityCountry == toCityCountry) {
    console.log("domestic");
    var countryLocation = "domestic";
  }
  else {
    console.log("international");
    var countryLocation = "international";
  }


  var trip = document.getElementById('trip').value;
  var fromdate = document.getElementById('datetoday').value;
  var todate = document.getElementById('toDate').value;
  var traveller = document.getElementById('traveller').value;

  console.log(trip);
  console.log(fromdate);
  console.log(todate);
  console.log(traveller);

  location.href = "flights/" + countryLocation + "/" + 'results.html?' + 'trip=' + trip + '&sourceCity=' + fromCityName + '&destinationCity=' + toCityName + '&fromCode=' + fromCode + '&toCode=' + toCode + '&fromDate=' + fromdate + '&toDate=' + todate + '&travellers=' + traveller;

  return false;

}

// From date

document.getElementById('datetoday').valueAsDate = new Date();

//Trip change

function ToCity(){

  var trip = document.getElementById('trip').value;

  if(trip == "OneWay") {
    document.getElementById("toDate").style.display = "none";
  }

  if(trip == "RoundTrip") {
    document.getElementById("toDate").style.display = "block";
  }

  if(trip == "MultiCity") {
    document.getElementById("toDate").style.display = "block";
  }
}