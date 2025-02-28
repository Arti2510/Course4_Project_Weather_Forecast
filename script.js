const urlDelhi = "http://api.weatherapi.com/v1/current.json?key=479f806fb04b468e88455648252402&q=delhi, india&aqi=no";
const urlMumbai = "http://api.weatherapi.com/v1/current.json?key=479f806fb04b468e88455648252402&q=mumbai, india&aqi=no";
const urlKolkata = "http://api.weatherapi.com/v1/current.json?key=479f806fb04b468e88455648252402&q=kolkata, india&aqi=no";
const urlChennai = "http://api.weatherapi.com/v1/current.json?key=479f806fb04b468e88455648252402&q=chennai, india&aqi=no";


async function fetchDataResponseDelhi(){
    try{
        const response = await fetch(urlDelhi);
        if (!response.ok) {
            if (response.status === 404) throw new Error('404, Not found');
            if (response.status === 500) throw new Error('500, internal server error');
            throw new Error(`Request failed with status ${response.status}`);
        }
        debugger;
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
        debugger;
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
        debugger;
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
        debugger;
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
    document.getElementById("display_city").innerHTML = "";
    debugger
    try{
        let val = document.getElementById("town").value;
        console.log(val);
        const url = `http://api.weatherapi.com/v1/current.json?key=479f806fb04b468e88455648252402&q=${val}&aqi=no`;
        const response = await fetch(url);
        if (!response.ok) {
            if (response.status === 404) throw new Error('404, Not found');
            if (response.status === 500) throw new Error('500, internal server error');
            throw new Error(`Request failed with status ${response.status}`);
        }
        debugger;
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
    }    
    catch(error){
        document.getElementById("display_city").innerHTML += "Error :- " + error;
        console.log(error);
    }
    document.getElementById("town").value = "";
}

document.addEventListener('DOMContentLoaded', function() {
    fetchDataResponseDelhi();
    fetchDataResponseMumbai();
    fetchDataResponseKolkata();
    fetchDataResponseChennai();
  });


 