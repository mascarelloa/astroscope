//This is NASA API key
var nasaApi = "ON1XUNBwBpzxjo5RrwxFeAVrnOwZAeD0mpSD0RFP";

var photoEl = document.querySelector(".large-nasa")

//This grabs the HD photo of the day and appends it to the page.
function getNasa() {
  var queryUrl = "https://api.nasa.gov/planetary/apod?api_key=" + nasaApi;
  fetch(queryUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      var imgUrl = data.hdurl;
      console.log(imgUrl);
      var backgroundImg = document.createElement("img");

      backgroundImg.setAttribute("src", imgUrl);
      photoEl.append(backgroundImg);
    });
}
getNasa();


//This creates an event whenever a "view horoscope" button is clicked and grabs the value (the sign). 
document.querySelectorAll(".sign-button").forEach(function (button) {
  button.addEventListener("click", function (event) {
    getHoroscope(event.target.getAttribute("data-sign"));
  });
});

//The value (the sign) is passed through this function that grabs that sign's data from the API.
function getHoroscope(signValue) {

  //This is the API call
  fetch("https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=" + signValue, {
    method: "POST",
    headers: {
      "x-rapidapi-key": "0e38836ee3msh75e0c7b966ff27fp1d6f8fjsn836a36a493f8",
      "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
      useQueryString: true,
    },
  })
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => {

      //This clears the div before adding elements.
      document.getElementById(`${signValue}`).innerHTML="";
      console.log(data);

      // This drills into the data to grab the current date.
      var currentDate = "Today, " + data.current_date;
      //This creates an element in the HTML.
      var currentDateEl = document.createElement("h4");
      //This turns the data into a text value.
      currentDateEl.textContent = currentDate;
      //This appends the text to the corrosponding sign's modal using template literal to make the Id equal to the sign value.
      document.getElementById(`${signValue}`).append(currentDateEl);

      // This drills into the data to grab the description (or the Horoscope).
      var signDesc = data.description;
      //This creates an element in the HTML.
      var signDescEl = document.createElement("p");
      signDescEl.textContent = signDesc;
      //This appends the text to the corrosponding sign's modal using template literal to make the Id equal to the sign value.
      document.getElementById(`${signValue}`).append(signDescEl);

      // This drills into the data to grab today's mood.
      var mood = "Mood: " + data.mood;
      //This creates an element in the HTML.
      var moodEl = document.createElement("li");
      //This turns the data into a text value.
      moodEl.textContent = mood;
      //This appends the text to the corrosponding sign's modal using template literal to make the Id equal to the sign value.
      document.getElementById(`${signValue}`).append(moodEl);

      // This drills into the data to grab today's lucky number.
      var signNum = "Lucky Number: " + data.lucky_number;
      //This creates an element in the HTML.
      var signNumEl = document.createElement("li");
      //This turns the data into a text value.
      signNumEl.textContent = signNum;
      //This appends the text to the corrosponding sign's modal using template literal to make the Id equal to the sign value.
      document.getElementById(`${signValue}`).append(signNumEl);

      // This drills into the data to grab today's lucky color.
      var luckyColor = "Lucky Color: " + data.color;
      //This creates an element in the HTML.
      var luckyColorEl = document.createElement("li");
      //This turns the data into a text value.
      luckyColorEl.textContent = luckyColor;
      //This appends the text to the corrosponding sign's modal using template literal to make the Id equal to the sign value.
      document.getElementById(`${signValue}`).append(luckyColorEl);

      // This drills into the data to grab today's lucky time.
      var luckyTime = "Lucky Time: " + data.lucky_time;
      //This creates an element in the HTML.
      var luckyTimeEl = document.createElement("li");
      //This turns the data into a text value.
      luckyTimeEl.textContent = luckyTime;
      //This appends the text to the corrosponding sign's modal using template literal to make the Id equal to the sign value.
      document.getElementById(`${signValue}`).append(luckyTimeEl);

    });
}

//This is grabbing the current year from moment.js
var year = moment().format("YYYY"); 
//This is appending the year to the footer span.
var copyrightYear = document.getElementById("year");
copyrightYear.innerHTML = year
