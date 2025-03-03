const urlDelhi = "http://api.weatherapi.com/v1/current.json?key=479f806fb04b468e88455648252402&q=delhi,india&aqi=no";
const urlMumbai = "http://api.weatherapi.com/v1/current.json?key=479f806fb04b468e88455648252402&q=mumbai,india&aqi=no";
const urlKolkata = "http://api.weatherapi.com/v1/current.json?key=479f806fb04b468e88455648252402&q=kolkata,india&aqi=no";
const urlChennai = "http://api.weatherapi.com/v1/current.json?key=479f806fb04b468e88455648252402&q=chennai,india&aqi=no";

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
        console.log(res.location.name);        
    }    
    catch(error){
        document.getElementById("spanDelhi").innerHTML += "Error :- " + error;
        console.log(error);
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
        console.log(res.location.name);        
    }    
    catch(error){
        document.getElementById("spanMumbai").innerHTML += "Error :- " + error;
        console.log(error);
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
        console.log(res.location.name);        
    }    
    catch(error){
        document.getElementById("spanKolkata").innerHTML += "Error :- " + error;
        console.log(error);
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
        console.log(res.location.name);        
    }    
    catch(error){
        document.getElementById("spanChennai").innerHTML += "Error :- " + error;
        console.log(error);
    }
}

async function fetchDataResponse(){
    let val = document.getElementById("town").value;
    document.getElementById("display_city").innerHTML = "";
    try{
        let val = document.getElementById("town").value;
        console.log(val);
        const url = "http://api.weatherapi.com/v1/forecast.json?key=479f806fb04b468e88455648252402&q="+val+"&days=5&aqi=no&alerts=no";
        const response = await fetch(url);
        if (!response.ok) {
            if (response.status === 404) throw new Error('404, Not found');
            if (response.status === 500) throw new Error('500, internal server error');
            throw new Error(`Request failed with status ${response.status}`);
        }
        const res = await response.json();
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
        console.log(res.location.name);    
        if(res.forecast != null && res.forecast.forecastday != null && res.forecast.forecastday.length >0)  
            {
                for(let i = 1; i<5; i++)
                {
                    document.getElementById("spanForecast"+i).innerHTML = getInnerHTML(res.forecast.forecastday[i])
                }
            }  
    }    
    catch(error){
        var err = error;
        document.getElementById("display_city").innerHTML += "Error :- " + error;
        console.log(error);
    }
    document.getElementById("town").value = "";
    if(err){
        alert("Enter correct city name.");
        document.getElementById("forecastText").style.display = "none";
        document.getElementById("spanForecast1").style.display = "none";
        document.getElementById("spanForecast2").style.display = "none";
        document.getElementById("spanForecast3").style.display = "none";
        document.getElementById("spanForecast4").style.display = "none";
    }
    else{
        document.getElementById("forecastText").style.display = "block";
        document.getElementById("spanForecast1").style.display = "inline-block";
        document.getElementById("spanForecast2").style.display = "inline-block";
        document.getElementById("spanForecast3").style.display = "inline-block";
        document.getElementById("spanForecast4").style.display = "inline-block";
    }
    document.getElementById("display_city").style.display = "block";   
}

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
            console.log("latitude:", latitude);
            console.log("longitude:",longitude);
            document.getElementById("display_city").innerHTML = "";
            try{
                let val = document.getElementById("town").value;
                console.log(val);
                const reverse_geocoding_url = `http://api.weatherapi.com/v1/forecast.json?key=479f806fb04b468e88455648252402&q=${latitude},${longitude}&days=5&aqi=no&alerts=no`;
                const response = await fetch(reverse_geocoding_url);
                if (!response.ok) {
                        if (response.status === 404) throw new Error('404, Not found');
                        if (response.status === 500) throw new Error('500, internal server error');
                        throw new Error(`Request failed with status ${response.status}`);
                }
                const res = await response.json();
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
                console.log(res.location.name);    
                if(res.forecast != null && res.forecast.forecastday != null && res.forecast.forecastday.length >0)  
                {
                    for(let i = 1; i<5; i++)
                    {
                        document.getElementById("spanForecast"+i).innerHTML = getInnerHTML(res.forecast.forecastday[i])
                    }
                }  
            }    
            catch(error){
                document.getElementById("display_city").innerHTML += "Error :- " + error;
                console.log(error);
            }
            document.getElementById("town").value = "";
            document.getElementById("display_city").style.display = "block";
            document.getElementById("forecastText").style.display = "block";
            document.getElementById("spanForecast1").style.display = "inline-block";
            document.getElementById("spanForecast2").style.display = "inline-block";
            document.getElementById("spanForecast3").style.display = "inline-block";
            document.getElementById("spanForecast4").style.display = "inline-block";
        },
        error => {
            if(error.code === error.PERMISSION_DENIED) {
                alert("Geolocation request denied. Please reset location permission to grant access again");
            }
        }
    );
}

document.addEventListener('DOMContentLoaded', function() {
    fetchDataResponseDelhi();
    fetchDataResponseMumbai();
    fetchDataResponseKolkata();
    fetchDataResponseChennai();
  });

  localStorage.setItem(cityname, val);


 