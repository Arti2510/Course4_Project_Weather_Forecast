function dateTime(){

    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    
    const days = [
        'Sun', 'Mon', 'Tue', 'Wed',
        'Thurs', 'Fri', 'Sat'
    ];

    const date_Time = new Date();

    const year = date_Time.getFullYear();
    const dayOfWeek = days[date_Time.getDay()];
    const day = date_Time.getDate(); 
    const month = months[date_Time.getMonth()]; 

    let hours = date_Time.getHours();
    const minutes = date_Time.getMinutes();
    const seconds = date_Time.getSeconds();
    

    const amPM = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    document.getElementById("date").innerHTML = `${dayOfWeek}, ${day} ${month}, ${year}`;
    document.getElementById("time").innerHTML = `${hours}:${formattedMinutes}:${formattedSeconds} ${amPM}`;
}

document.addEventListener('DOMContentLoaded', function() {
    setInterval(dateTime, 1000);
    dateTime();
  });

function dateMonth(date_Time_Month){
    const datemonths = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const days = date_Time_Month.split('-')[2]; 
    const months = datemonths[date_Time_Month.split('-')[1]-1]; 

    let string = days + " " + months;
    return string;
    console.log(string);
 }