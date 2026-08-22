const name=document.querySelector('.city')
const temp=document.querySelector('.temp')
const hum=document.querySelector('.humidity')
const wind=document.querySelector('.wind')

 
const searchBox=document.querySelector('.search input');
const btn=document.querySelector('.search button')

const weather_icon=document.querySelector('.weather-icon')

const apikey = "233486e33daec23decd71ab7b8fad730";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function checkweather(city){
 
  const response =await fetch(apiurl + city +`&appid=${apikey}`);
var data=await response.json();
console.log(data);

if(response.status==404){
    document.querySelector('.error').style.display="block"
     document.querySelector('.weather').style.display="none"
}
else{
  name.innerHTML=data.name;
 temp.innerHTML=Math.round(data.main.temp )+ "°C";
 hum.innerHTML=data.main.humidity + "%";
 wind.innerHTML=data.wind.speed + " km/h";

  if(data.weather[0].main=="Clouds"){
    weather_icon.src="images/clouds.png"
  }
  else if(data.weather[0].main=="Clear"){
    weather_icon.src="images/clear.png"
  }
  else if(data.weather[0].main=="Rain"){
    weather_icon.src="images/rain.png"
  }
 else  if(data.weather[0].main=="Drizzle"){
    weather_icon.src="images/drizzle.png"
  }
  else  if(data.weather[0].main=="Mist"){
    weather_icon.src="images/mist.png"
  }
  document.querySelector('.weather').style.display="block"
   document.querySelector('.error').style.display="none" //if you enter correct nmae after wrong attempt..the error msg is disappeared
}
}
btn.addEventListener('click',()=>{
  checkweather(searchBox.value)
})

searchBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkweather(searchBox.value)
    }
});