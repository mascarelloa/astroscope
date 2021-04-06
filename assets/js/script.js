var nasaApi = "ON1XUNBwBpzxjo5RrwxFeAVrnOwZAeD0mpSD0RFP"

var containerEl = document.querySelector(".container");




function getNasa() {
    var queryUrl = "https://api.nasa.gov/planetary/apod?api_key=" + nasaApi
    fetch(queryUrl)
        .then(function (response) {
            return response.json()

        }).then(function (data) {
            console.log(data);

            var imgUrl = data.hdurl;
            console.log(imgUrl);
            var backgroundImg = document.createElement("img");

            backgroundImg.setAttribute("src", imgUrl);

            containerEl.append(backgroundImg);
        })

}
getNasa();




fetch("https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=cancer&day=today", {
    method: 'POST',
    headers: {
        "x-rapidapi-key": "0e38836ee3msh75e0c7b966ff27fp1d6f8fjsn836a36a493f8",
        "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
        "useQueryString": true,

    }
}).then((response) => {
    console.log(response.status)
    return response.json()
}).then((data) => {
    console.log(data)
});










