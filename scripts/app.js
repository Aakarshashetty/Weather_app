//here we define the main app js 

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
//-----class-----
//forecast = new Forecast();

//now add event listener
cityForm.addEventListener('submit', e => {
    //prevent default
    e.preventDefault();
    //get input value
    const city = cityForm.city.value.trim();//here 'city' is the name of the input value
    cityForm.reset();

    //here we get the weather details of city and since it is async which  returns promise we need to mention then and catch case
    //-----class----
    //forecast.updateCity
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err)); 
});
//-----class----
//forecast.updateCity
const updateCity = async(city) => {
    const cityDetails = await getCity(city);//since getCity returns a promise
    const weather = await getWeather(cityDetails.Key);

    //return both values as an object

    // return {                               
    //     cityDetails: cityDetails,            
    //     weather: weather
                  
    // };
    return {
        cityDetails,   //shorthand notataion if we have same name while returning object
        weather
    };
}

//function used to update the ui
const updateUI = (data) => {

    // const cityDetails = data.cityDetails;
    // const weather = data.weather;
    //since we are returning the data as object 

    //destructuring objects
    const { cityDetails, weather} = data;//here the values in the data and the values which we are assigning in to should be same

    // update details template
    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;
    // remove the d-none class if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

    //adding images to ui

let imgSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg'; //ternary operator

//adding img to the src attribute
time.setAttribute('src', imgSrc);

//icon
let iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
icon.setAttribute('src', iconSrc);

}

