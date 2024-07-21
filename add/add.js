const request =require("request")
// const url =
//   "http://api.weatherapi.com/v1/current.json?key=3862b8222de1439489d113623242007&q=London&aqi=no";

//   request({ url }, (error, response) => {
//     const data1 = JSON.parse(response.body);
//     console.log(data1.location.name);
//     console.log(data1.current.condition.text)
//   });

//     request({ url, json: true }, (error, response) => {
//       console.log(response.body.location.name);
//       console.log(response.body.current.condition.text);
//     });

    
 const url = "http://api.weatherstack.com/current?access_key=aaf8d75230687617eaa10d75e38c7550&query=germany"

// request ({url , json : true  } , (error , response) => {


//    console.log(response.body.location.name)
//  console.log(response.body.current.weather_descriptions[0])

//   if (error) {
//     console.log("ERROR HAS OCCURED");
//   } else if (response.body.error) {
//     console.log(response.body.error.message);
//   } else {
//     console.log(
//       response.body.location.name,
//       response.body.current.weather_descriptions[0]
//     );
//   }
// })





request({ url, json: true }, (error, response) => {
  if (error) {
    console.log("ERROR HAS OCCURED");
  } else if (response.body.error) {
    console.log(response.body.error.message);
  } else {
    console.log(
      response.body.location.name,
      response.body.current.weather_descriptions[0]
    );
  }
});

 const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.yJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"
//  request({ url, json: true }, (error, response)=>{
// if(error){
// console.error("ERROR HAS OCCURED");
// }else if(response.body.message){
// console.log(response.body.message)

// }else if (response.body.features.length == 0) {
//   console.error();
//   ("Unable to find location");
// } else {
//   const longtitude1 = response.body.features[0].center[0];
//   const latitude2 = response.body.features[0].center[1];
//   console.log(longtitude1, latitude2);
// }

//  });

   const forecast = require("./data/forecast");

   const geocode = require("./data/geocode");


   const country = process.argv[2];

   geocode(country, (error, data) => {
     console.log("ERROR : ", error);
     console.log("DATA : ", data);

     forecast(data.latitude, data.longtitude, (error, data) => {
       console.log("ERROR : ", error);
       console.log("DATA : ", data);
     });
   });
