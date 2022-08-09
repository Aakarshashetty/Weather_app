//first we will get the city details using 'location api key' using that we will generate 'city key' which is used to get the weather of the city
const key = 'ErkArRzqanrdOuGBgp527hlydOIbbfrc';

//Here we will get the city information using key
const getCity = async(city) => {
    const base  = 'http://dataservice.accuweather.com/locations/v1/cities/search';//endpoint
    //for this endpoint we will add our paramatere according to the city that we want to get the weather info to add that we need to add at the end of the api starting with '?' and if we want to add multiple parameters we need to add '&' in b/w the parameters
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base+query);//it will concatenates with the endpoint
    const data = await response.json();
    return data[0];//since it will give the data which have similar data to the city we mention the first one will be closure to the city so we will fetch data[0]
};

//get weather of city
const getWeather = async(id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;//since parameters should start with '?'
    const response = await fetch(base+query);
    const data = await response.json();
    return data[0];
};

// getCity('manchester')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// getWeather("329260")
// .then(data => console.log(data))
// .catch(err => console.log(err));

// getCity('manchester')
// .then(data => {
//     return getWeather(data.Key);
// }).then(data => console.log(data))//since getWeather is also a promise
// .catch(err => console.log(err));


//-----------------------------------------------------------------------------//
//using class
// class Forecast{
//     constructor(){
//         //setup properties
//         this.key = "ErkArRzqanrdOuGBgp527hlydOIbbfrc";
//         this.cityURI = "http://dataservice.accuweather.com/locations/v1/cities/search";
//         this.wheatherURI = "http://dataservice.accuweather.com/currentconditions/v1/";
//     }
//         //setup methods
//         async updateCity(city){
//             const cityDetails = await this.getCity(city);
//             const weather = await this.getWeather(cityDetails.Key);
//             return {
//                 cityDetails,
//                 weather
//             }
//         }
//         async getCity(city){
//             const query = `?apikey=${this.key}&q=${city}`;
//             const response = await fetch(this.cityURI+query);
//             const data = await response.json();
//             return data[0];
//         }
//         async getWeather(id){
//             const query = `${id}?apikey=${this.key}`;
//             const response = await fetch(this.wheatherURI+query);
//             const data = await response.json();
//             return data[0];
//         }
    
// }