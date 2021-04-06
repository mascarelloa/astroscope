 var apiId = "00fa6f8a-216f-498e-a835-b47f060556b7";
var nasaApi = "ON1XUNBwBpzxjo5RrwxFeAVrnOwZAeD0mpSD0RFP"
var apiSecret = "a00e9fcb2364fb0c33413b8af6fc648d3cecc331329ed8e65704eb97cc80273891f9c7876355d4e919177ed1492ea3b56568e9fec24ab949173e41ed21655ac0f56b83e1e35a8b2a5e1ea481ff9d8861eba34db4518220110ae4a2eb4620b768c1e97e94ac7036ce350b40270a71f309";
// let applicationId="f103f387-7039-4c23-a7c6-857bcdbee29c"
// let applicationSecret = "d1368efb8d30eaf84f4560e30a2e0d90a8dfc85f3b01ea9ef9b5ea433a33cf261931c912d2d41c32da23bec18e0030bc3ec60640eae599422c81e83d606f65cb7fa4ce4fc79afd3c75b0e4a04ec1da1480516234fa04518675104fe8c514510fc24e56c76173f4369e5b679b38ea9ffb"
// const hash = btoa(`${applicationId}:${applicationSecret}`);

const hash = btoa(`${apiId}:${apiSecret}`);
// Id - 00fa6f8a-216f-498e-a835-b47f060556b7

function getNasa () {
    var queryUrl = "https://api.nasa.gov/planetary/apod?api_key=" + nasaApi 
    fetch(queryUrl)
        .then(function (response) {
            return response.json()

        }).then(function (data) {
            console.log(data);

            var imgUrl = "https://api.nasa.gov/planetary/apod?" + data.hdurl + ".png";
            console.log(imgUrl);
        }) 
    
}
getNasa();




    fetch("https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=cancer&day=today", {
    method: 'POST',
    headers: {
        "x-rapidapi-key": "0e38836ee3msh75e0c7b966ff27fp1d6f8fjsn836a36a493f8",
        "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
        "useQueryString": true,
        'Authorization': 'Basic ' + hash
    }
  }).then((response)=> {
      console.log(response.status)
      return response.json()
    }).then((data)=>{
        console.log(data)
    });











// fetch("https://api.nasa.gov/planetary/apod" + nasaApi) {
    
// 	"method": "GET",
// 	"headers": {
// 		"content-type": "application/json",
//         "Authorization": "Basic ", hash
// 	},
	
// })
// .then(function (response) {
// 	return response.json();
// })
// .then(function (data){
// 	console.log(data);
// });
