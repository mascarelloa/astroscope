var nasaApi = "ON1XUNBwBpzxjo5RrwxFeAVrnOwZAeD0mpSD0RFP";

var containerEl = document.querySelector(".nasa-container");

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
      containerEl.append(backgroundImg);
    });
}
getNasa();

document.querySelectorAll(".sign-button").forEach(function (button) {
  button.addEventListener("click", function (event) {
    getHoroscope(event.target.getAttribute("data-sign"));
  });
});

function getHoroscope(signValue) {
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
      //clear the div before adding elements
      document.getElementById(`${signValue}`).innerHTML="";
      console.log(data);

      var currentDate = data.current_date;
      var currentDateEl = document.createElement("h3");
      currentDateEl.textContent = currentDate;
      document.getElementById(`${signValue}`).append(currentDateEl);


      var signDesc = data.description;
      var signDescEl = document.createElement("p");
      signDescEl.textContent = signDesc;
      document.getElementById(`${signValue}`).append(signDescEl);

      var mood = "Mood: " + data.mood;
      var moodEl = document.createElement("p");
      moodEl.textContent = mood;
      document.getElementById(`${signValue}`).append(moodEl);

      var signNum = "Lucky Number: " + data.lucky_number;
      var signNumEl = document.createElement("p");
      signNumEl.textContent = signNum;
      document.getElementById(`${signValue}`).append(signNumEl);


      var luckyColor = "Lucky Color: " + data.color;
      var luckyColorEl = document.createElement("p");
      luckyColorEl.textContent = luckyColor;
      document.getElementById(`${signValue}`).append(luckyColorEl);


      var luckyTime = "Lucky Time: " + data.lucky_time;
      var luckyTimeEl = document.createElement("p");
      luckyTimeEl.textContent = luckyTime;
      document.getElementById(`${signValue}`).append(luckyTimeEl);

    });
}

var year = moment().format("YYYY"); 

var copyrightYear = document.getElementById("year");

console.log(copyrightYear)

copyrightYear.innerHTML = year
//sets the year in the footer using moment to have the current year displayed next to copyright