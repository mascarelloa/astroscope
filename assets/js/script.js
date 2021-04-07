var nasaApi = "ON1XUNBwBpzxjo5RrwxFeAVrnOwZAeD0mpSD0RFP";

var containerEl = document.querySelector(".nasaContainer");

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




  var aquariusCard = document.querySelector ("#aquarius")
  var piscesCard = document.querySelector ("#pisces")
  var ariesCard = document.querySelector ("#aries")
  var taurusCard = document.querySelector ("#taurus")
  var geminiCard = document.querySelector ("#gemini")
  var cancerCard = document.querySelector ("#cancer")
  var leoCard = document.querySelector ("#leo")
  var virgoCard = document.querySelector ("#virgo")
  var libraCard = document.querySelector ("#libra")
  var scorpioCard = document.querySelector ("#scorpio")
  var sagittariusCard = document.querySelector ("#sagittarius")
  var capricornCard = document.querySelector ("#capricorn")




  var aquariusBtn = document.querySelector(".aquarius-button");
  var piscesBtn = document.querySelector(".pisces-button");
  var ariesBtn = document.querySelector(".aries-button");
  var taurusBtn = document.querySelector(".taurus-button");
  var geminiBtn = document.querySelector(".gemini-button");
  var cancerBtn = document.querySelector(".cancer-button");
  var leoBtn = document.querySelector(".leo-button");
  var virgoBtn = document.querySelector(".virgo-button");
  var libraBtn = document.querySelector(".libra-button");
  var scorpioBtn = document.querySelector(".scorpio-button");
  var sagittariusBtn = document.querySelector(".sagittarius-button");
  var capricornBtn = document.querySelector(".capricorn-button");
 

aquariusBtn.addEventListener("click", getAquarius);

  function getAquarius() {

    fetch("https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=aquarius", {
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
    console.log(data);
  

  
  var aquariusDesc = data.description;
  var aquariusDescEl = document.createElement("p");
  aquariusDescEl.textContent = aquariusDesc ;
  aquariusCard.append(aquariusDescEl);

  var aquariusNum = "Lucky Number: " + data.lucky_number;
  var aquariusNumEl = document.createElement ("p");
  aquariusNumEl.textContent = aquariusNum;
  aquariusCard.append(aquariusNumEl);


});

}

