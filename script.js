const urlDelhi = "http://api.weatherapi.com/v1/current.json?key=479f806fb04b468e88455648252402&q=delhi,india&aqi=no";
const urlMumbai = "http://api.weatherapi.com/v1/current.json?key=479f806fb04b468e88455648252402&q=mumbai,india&aqi=no";
const urlKolkata = "http://api.weatherapi.com/v1/current.json?key=479f806fb04b468e88455648252402&q=kolkata,india&aqi=no";
const urlChennai = "http://api.weatherapi.com/v1/current.json?key=479f806fb04b468e88455648252402&q=chennai,india&aqi=no";
let city_array = [];
let val = document.getElementById("town").value;

async function fetchDataResponseDelhi(){
    try{
        const response = await fetch(urlDelhi);
        if (!response.ok) {
            if (response.status === 404) throw new Error('404, Not found');
            if (response.status === 500) throw new Error('500, internal server error');
            throw new Error(`Request failed with status ${response.status}`);
        }
        const res = await response.json();
        document.getElementById("spanDelhi").innerHTML += `<table>
        <tr>
        <td style="text-align:left;">${res.current.temp_c}<sup><sup>o</sup>c</sup></td>
        <td align="right" style="width:150px;"><img src="${res.current.condition.icon}"></td>
        </tr>
        <tr>
        <td style="text-align:left;">${res.location.name}, <br/>${res.location.country}</td>
        <td style="text-align:right; width:150px;">${res.current.condition.text}</td>
        </tr>
        <tr>
        <td style="text-align:left;"><br/>Wind:</td>
        <td style="text-align:center; width:150px"><br/>${res.current.wind_kph} km/h</td>
        </tr>
        <tr>
        <td style="text-align:left;">Humidity:</td>
        <td style="text-align:center; width:150px">${res.current.humidity}%</td>
        </tr>
        </table>`;      
    }    
    catch(error){
        document.getElementById("spanDelhi").innerHTML += "Error :- " + error;
    }
}

async function fetchDataResponseMumbai(){
    try{
        const response = await fetch(urlMumbai);
        if (!response.ok) {
            if (response.status === 404) throw new Error('404, Not found');
            if (response.status === 500) throw new Error('500, internal server error');
            throw new Error(`Request failed with status ${response.status}`);
        }
        const res = await response.json();
        document.getElementById("spanMumbai").innerHTML += `<table>
        <tr>
        <td style="text-align:left;">${res.current.temp_c}<sup><sup>o</sup>c</sup></td>
        <td align="right" style="width:150px;"><img src="${res.current.condition.icon}"></td>
        </tr>
        <tr>
        <td style="text-align:left;">${res.location.name}, <br/>${res.location.country}</td>
        <td style="text-align:right; width:150px;">${res.current.condition.text}</td>
        </tr>
        <tr>
        <td style="text-align:left;"><br/>Wind:</td>
        <td style="text-align:center; width:150px"><br/>${res.current.wind_kph} km/h</td>
        </tr>
        <tr>
        <td style="text-align:left;">Humidity:</td>
        <td style="text-align:center; width:150px">${res.current.humidity}%</td>
        </tr>
        </table>`; 
    }    
    catch(error){
        document.getElementById("spanMumbai").innerHTML += "Error :- " + error;
    }
}

async function fetchDataResponseKolkata(){
    try{
        const response = await fetch(urlKolkata);
        if (!response.ok) {
            if (response.status === 404) throw new Error('404, Not found');
            if (response.status === 500) throw new Error('500, internal server error');
            throw new Error(`Request failed with status ${response.status}`);
        }
        const res = await response.json();
        document.getElementById("spanKolkata").innerHTML += `<table>
        <tr>
        <td style="text-align:left;">${res.current.temp_c}<sup><sup>o</sup>c</sup></td>
        <td align="right" style="width:150px;"><img src="${res.current.condition.icon}"></td>
        </tr>
        <tr>
        <td style="text-align:left;">${res.location.name}, <br/>${res.location.country}</td>
        <td style="text-align:right; width:150px;">${res.current.condition.text}</td>
        </tr>
        <tr>
        <td style="text-align:left;"><br/>Wind:</td>
        <td style="text-align:center; width:150px"><br/>${res.current.wind_kph} km/h</td>
        </tr>
        <tr>
        <td style="text-align:left;">Humidity:</td>
        <td style="text-align:center; width:150px">${res.current.humidity}%</td>
        </tr>
        </table>`;      
    }    
    catch(error){
        document.getElementById("spanKolkata").innerHTML += "Error :- " + error;
    }
}

async function fetchDataResponseChennai(){
    try{
        const response = await fetch(urlChennai);
        if (!response.ok) {
            if (response.status === 404) throw new Error('404, Not found');
            if (response.status === 500) throw new Error('500, internal server error');
            throw new Error(`Request failed with status ${response.status}`);
        }
        const res = await response.json();
        document.getElementById("spanChennai").innerHTML += `<table>
        <tr>
        <td style="text-align:left;">${res.current.temp_c}<sup><sup>o</sup>c</sup></td>
        <td align="right" style="width:150px;"><img src="${res.current.condition.icon}"></td>
        </tr>
        <tr>
        <td style="text-align:left;">${res.location.name}, <br/>${res.location.country}</td>
        <td style="text-align:right; width:150px;">${res.current.condition.text}</td>
        </tr>
        <tr>
        <td style="text-align:left;"><br/>Wind:</td>
        <td style="text-align:center; width:150px"><br/>${res.current.wind_kph} km/h</td>
        </tr>
        <tr>
        <td style="text-align:left;">Humidity:</td>
        <td style="text-align:center; width:150px">${res.current.humidity}%</td>
        </tr>
        </table>`;       
    }    
    catch(error){
        document.getElementById("spanChennai").innerHTML += "Error :- " + error;
    }
}

async function fetchDataResponse(){
    document.getElementById("display_city").innerHTML = "";
    try{
        let val = document.getElementById("town").value;
        const url = "http://api.weatherapi.com/v1/forecast.json?key=479f806fb04b468e88455648252402&q="+val+"&days=6&aqi=no&alerts=no";
        const response = await fetch(url);
        if (!response.ok) {
            if (response.status === 404) throw new Error('404, Not found');
            if (response.status === 500) throw new Error('500, internal server error');
            throw new Error(`Request failed with status ${response.status}`);
        }
        const res = await response.json();
        if(`${res.current.condition.text}` === "Patchy light snow"){
            document.getElementById("background").style.backgroundImage = "url('./images/snow.gif')";
        }
        if(`${res.current.condition.text}` === "Partly cloudy" || `${res.current.condition.text}` === "Overcast"){
            document.getElementById("background").style.backgroundImage = "url('images/clouds.gif')";
        }
        if(`${res.current.condition.text}` === "Freezing fog"){
            document.getElementById("background").style.backgroundImage = "url('images/fog.gif')";
        }
        if(`${res.current.condition.text}` === "Heavy rain"){
            document.getElementById("background").style.backgroundImage = "url('images/thunderstorm.gif')";
        }
        if(`${res.current.condition.text}` === "Mist"){
            document.getElementById("background").style.backgroundImage = "url('images/mist.gif')";
        }
        if(`${res.current.condition.text}` === "Haze"){
            document.getElementById("background").style.backgroundImage = "url('images/haze.gif')";
        }
        if(`${res.current.condition.text}` === "Clear" || `${res.current.condition.text}` === "Sunny"){
            document.getElementById("background").style.backgroundImage = "url('images/clear.gif')";
        }
        if(`${res.current.condition.text}` === "Patchy rain nearby" || `${res.current.condition.text}` === "Moderate rain" || `${res.current.condition.text}` === "Light sleet showers" 
            || `${res.current.condition.text}` === "Light rain")
        {
            document.getElementById("background").style.backgroundImage = "url('images/rain.gif')";
        }
        document.getElementById("display_city").innerHTML += `<table>
        <tr>
        <td style="text-align:left;">${res.current.temp_c}<sup><sup>o</sup>c</sup></td>
        <td align="right" style="width:150px;"><img src="${res.current.condition.icon}"></td>
        </tr>
        <tr>
        <td style="text-align:left;">${res.location.name}, <br/>${res.location.country}</td>
        <td style="text-align:right; width:150px;">${res.current.condition.text}</td>
        </tr>
        <tr>
        <td style="text-align:left;"><br/>Wind:</td>
        <td style="text-align:center; width:150px"><br/>${res.current.wind_kph} km/h</td>
        </tr>
        <tr>
        <td style="text-align:left;">Humidity:</td>
        <td style="text-align:center; width:150px">${res.current.humidity}%</td>
        </tr>
        </table>`;  
        if(res.forecast != null && res.forecast.forecastday != null && res.forecast.forecastday.length >0)  
            {
                for(let i = 1; i<6; i++)
                {
                    document.getElementById("spanForecast"+i).innerHTML = getInnerHTML(res.forecast.forecastday[i])
                }
            }  
        let indexToRemove = city_array.indexOf(val);
        if(indexToRemove < 0)
        {
            city_array.push(val);
            setLocalStorage();
        }
    }    
    catch(error){
        var err = error;
        document.getElementById("display_city").innerHTML += "Error :- " + error;
    }
    document.getElementById("town").value = "";
    if(err){
        alert("Enter correct city name.");
        document.getElementById("forecastText").style.display = "none";
        document.getElementById("spanForecast1").style.display = "none";
        document.getElementById("spanForecast2").style.display = "none";
        document.getElementById("spanForecast3").style.display = "none";
        document.getElementById("spanForecast4").style.display = "none";
        document.getElementById("spanForecast5").style.display = "none";
    }
    else{
        document.getElementById("forecastText").style.display = "block";
        document.getElementById("spanForecast1").style.display = "inline-block";
        document.getElementById("spanForecast2").style.display = "inline-block";
        document.getElementById("spanForecast3").style.display = "inline-block";
        document.getElementById("spanForecast4").style.display = "inline-block";
        document.getElementById("spanForecast5").style.display = "inline-block";
    }
    document.getElementById("display_city").style.display = "block";  
    
   
}

document.getElementById("town").addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        fetchDataResponse();
    }
  });

function getInnerHTML(forcast)
{
    let innerHTML ="";
    innerHTML += `<table>
        <tr>
        <td style="text-align:left;">${dateMonth(forcast.date)}</td>
        </tr>
        <tr>
        <td style="text-align:left;">${forcast.day.avgtemp_c}<sup><sup>o</sup>c</sup></td>
        </tr>
        <tr>
        <td align="right" style="width:150px;"><img src="${forcast.day.condition.icon}"></td>
        </tr>
        <tr>
        <td style="text-align:right; width:150px;">${forcast.day.condition.text}</td>
        </tr>        
        </table>`;
        return innerHTML;
}

async function currentLocation() {
    navigator.geolocation.getCurrentPosition(
      async  position =>  {
            const {latitude, longitude} = position.coords;
            
            document.getElementById("display_city").innerHTML = "";
            try{
                let val = document.getElementById("town").value;
                const reverse_geocoding_url = `http://api.weatherapi.com/v1/forecast.json?key=479f806fb04b468e88455648252402&q=${latitude},${longitude}&days=6&aqi=no&alerts=no`;
                const response = await fetch(reverse_geocoding_url);
                if (!response.ok) {
                        if (response.status === 404) throw new Error('404, Not found');
                        if (response.status === 500) throw new Error('500, internal server error');
                        throw new Error(`Request failed with status ${response.status}`);
                }
                const res = await response.json();
                if(`${res.current.condition.text}` === "Patchy light snow"){
            document.getElementById("background").style.backgroundImage = "url('./images/snow.gif')";
        }
        if(`${res.current.condition.text}` === "Partly cloudy" || `${res.current.condition.text}` === "Overcast"){
            document.getElementById("background").style.backgroundImage = "url('images/clouds.gif')";
        }
        if(`${res.current.condition.text}` === "Freezing fog"){
            document.getElementById("background").style.backgroundImage = "url('images/fog.gif')";
        }
        if(`${res.current.condition.text}` === "Heavy rain"){
            document.getElementById("background").style.backgroundImage = "url('images/thunderstorm.gif')";
        }
        if(`${res.current.condition.text}` === "Mist"){
            document.getElementById("background").style.backgroundImage = "url('images/mist.gif')";
        }
        if(`${res.current.condition.text}` === "Haze"){
            document.getElementById("background").style.backgroundImage = "url('images/haze.gif')";
        }
        if(`${res.current.condition.text}` === "Clear" || `${res.current.condition.text}` === "Sunny"){
            document.getElementById("background").style.backgroundImage = "url('images/clear.gif')";
        }
        if(`${res.current.condition.text}` === "Patchy rain nearby" || `${res.current.condition.text}` === "Moderate rain" || `${res.current.condition.text}` === "Light sleet showers" 
            || `${res.current.condition.text}` === "Light rain")
        {
            document.getElementById("background").style.backgroundImage = "url('images/rain.gif')";
        }
                document.getElementById("display_city").innerHTML += `<table>
                <tr>
                <td style="text-align:left;">${res.current.temp_c}<sup><sup>o</sup>c</sup></td>
                <td align="right" style="width:150px;"><img src="${res.current.condition.icon}"></td>
                </tr>
                <tr>
                <td style="text-align:left;">${res.location.name}, <br/>${res.location.country}</td>
                <td style="text-align:right; width:150px;">${res.current.condition.text}</td>
                </tr>
                <tr>
                <td style="text-align:left;"><br/>Wind:</td>
                <td style="text-align:center; width:150px"><br/>${res.current.wind_kph} km/h</td>
                </tr>
                <tr>
                <td style="text-align:left;">Humidity:</td>
                <td style="text-align:center; width:150px">${res.current.humidity}%</td>
                </tr>
                </table>`;
                   
                if(res.forecast != null && res.forecast.forecastday != null && res.forecast.forecastday.length >0)  
                {
                    for(let i = 1; i<6; i++)
                    {
                        document.getElementById("spanForecast"+i).innerHTML = getInnerHTML(res.forecast.forecastday[i])
                    }
                }  
            }    
            catch(error){
                document.getElementById("display_city").innerHTML += "Error :- " + error;
               
            }
            document.getElementById("town").value = "";
            document.getElementById("display_city").style.display = "block";
            document.getElementById("forecastText").style.display = "block";
            document.getElementById("spanForecast1").style.display = "inline-block";
            document.getElementById("spanForecast2").style.display = "inline-block";
            document.getElementById("spanForecast3").style.display = "inline-block";
            document.getElementById("spanForecast4").style.display = "inline-block";
            document.getElementById("spanForecast5").style.display = "inline-block";
        },
        error => {
            if(error.code === error.PERMISSION_DENIED) {
                alert("Geolocation request denied. Please reset location permission to grant access again");
            }
        }
    );
}
function setLocalStorage() {   
    localStorage.setItem("cities", city_array);
    var selectOptions = "<option>--select city--</option>";
            for(item of city_array)
                {
                    selectOptions += "<option value='"+item+"'>"+item+"</option>"           
                }
            document.getElementById("dropdown").innerHTML = selectOptions;
}

function dropdownList(){
    let val = document.getElementById("dropdown").value;
    document.getElementById("town").value="";
    if(val != "--select city--")
    {        
        document.getElementById("town").value = val;
    }
    
}

document.addEventListener('DOMContentLoaded', function() {
    setlocalstorageOnload();
    fetchDataResponseDelhi();
    fetchDataResponseMumbai();
    fetchDataResponseKolkata();
    fetchDataResponseChennai();
  });
  function setlocalstorageOnload() {
        var selectOptions = "<option>--select city--</option>";
        if(localStorage != null && localStorage.length > 0 && localStorage.getItem("cities") != null) {
            city_array = localStorage.getItem("cities").split(',');           
            for(item of city_array)
                {
                    selectOptions+="<option value='"+item+"'>"+item+"</option>"           
                }
        }
        document.getElementById("dropdown").innerHTML = selectOptions;
}

  


 