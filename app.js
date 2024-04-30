let getweather = "https://api.openweathermap.org/data/2.5/weather?q=";
let appid = "appid=7a87cf718ad5c21c6a008b81e36ee31f";

let searchinput = document.querySelector("#search");

let searchbtn = document.querySelector("#searchbtn");

let cloudimage = document.querySelector("#cloudimage");

let temp = document.querySelector(".temp");
let city = document.querySelector(".city");

let humid = document.querySelector("#humid");
let windspeed = document.querySelector("#windspeed");

let desccription = document.querySelector(".desccription");

let celcius = document.querySelector("#celcius");
let farenheight = document.querySelector("#farenheight");

searchbtn.addEventListener("click", async function () {
	newapi = getweather + searchinput.value + "&" + appid;
	response = await fetch(newapi);
	data = await response.json();
	console.log(data);
	cloudimage.setAttribute("src", data.weather[0].main + ".png");

	temp.innerText = (data.main.temp - 273).toFixed(0) + "°C";
	city.innerText = data.name;
	desccription.innerText =
		"(" + " " + data.weather[0].description.toUpperCase() + " " + ")";
	humid.innerText = data.main.humidity + "%";
	windspeed.innerText = data.wind.speed + "Km/hr";
});

farenheight.addEventListener("click", async function () {
	newapi = getweather + searchinput.value + "&" + appid + "&units=imperial";
	response = await fetch(newapi);
	data = await response.json();
	console.log(data);
	temp.innerText = (data.main.temp).toFixed(0) + "°F";
	city.innerText = data.name;
	
});

celcius.addEventListener("click", async function () {
	newapi = getweather + searchinput.value + "&" + appid + "&units=metric";
	response = await fetch(newapi);
	data = await response.json();
	console.log(data);
	temp.innerText = (data.main.temp).toFixed(0) + "°C";
	city.innerText = data.name;
	
});
window.onload = async function () {
    let newapi = getweather + "delhi" + "&" + appid;
    
    
        let response = await fetch(newapi);
        let data = await response.json();
        
        console.log(data);
        
        cloudimage.setAttribute("src", data.weather[0].main + ".png");
        temp.innerText = (data.main.temp - 273).toFixed(0) + "°C";
        city.innerText = data.name;
        desccription.innerText = "(" + data.weather[0].description.toUpperCase() + ")";
        humid.innerText = data.main.humidity + "%";
        windspeed.innerText = data.wind.speed + " Km/hr";
        searchinput.value="Delhi";
}
