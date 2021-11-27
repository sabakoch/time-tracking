
var dayBTN = document.getElementById("dayBTN")


function day() {
    // i am caling all qwerySelectors withe class name "hours" and changing text/ tet has changed to the last day ime track

    //chaingin button color for user can see withe one is active
    document.getElementById("dayBTN").style.color = "white";
    document.getElementById("weekBTN").style.color = "hsl(236, 100%, 87%)";
    document.getElementById("monthBTN").style.color = "hsl(236, 100%, 87%)";

    var hours = document.querySelectorAll(".hours");
    //changig time to the day
    hours[0].innerHTML = "5hrs";
    hours[1].innerHTML = "1hr";
    hours[2].innerHTML = "0hr";
    hours[3].innerHTML = "1hr";
    hours[4].innerHTML = "1hr";
    hours[5].innerHTML = "0hr";

    var pastTime = document.querySelectorAll(".past-time");
    //changing time to the past day
    pastTime[0].innerHTML = "Last Day - 7hrs";
    pastTime[1].innerHTML = "Last Day - 2hrs";
    pastTime[2].innerHTML = "Last Day - 1hr";
    pastTime[3].innerHTML = "Last Day - 1hr";
    pastTime[4].innerHTML = "Last Day - 3hrs";
    pastTime[5].innerHTML = "Last Day - 1hr";
}

function week(){
    // i am caling all qwerySelectors withe class name "hours" and changing text/ tet has changed to the last week ime track

    //chaingin button color for user can see withe one is active
    document.getElementById("dayBTN").style.color = "hsl(236, 100%, 87%)";
    document.getElementById("weekBTN").style.color = "white";
    document.getElementById("monthBTN").style.color = "hsl(236, 100%, 87%)";

    var hours = document.querySelectorAll(".hours");
    //changing time to the week
    hours[0].innerHTML = "32hrs";
    hours[1].innerHTML = "10hrs";
    hours[2].innerHTML = "4hrs";
    hours[3].innerHTML = "4hrs";
    hours[4].innerHTML = "5hrs";
    hours[5].innerHTML = "2hrs";

    var pastTime = document.querySelectorAll(".past-time");
    //changing time to the past week 
    pastTime[0].innerHTML = "Last Day - 36hrs";
    pastTime[1].innerHTML = "Last Day - 8hrs";
    pastTime[2].innerHTML = "Last Day - 7hrs";
    pastTime[3].innerHTML = "Last Day - 5hrs";
    pastTime[4].innerHTML = "Last Day - 10hrs";
    pastTime[5].innerHTML = "Last Day - 2hrs";
}

function month(){
    // i am caling all qwerySelectors withe class name "hours" and changing text/ tet has changed to the last month ime track
    
    //chaingin button color for user can see withe one is active
    document.getElementById("dayBTN").style.color = "hsl(236, 100%, 87%)";
    document.getElementById("weekBTN").style.color = "hsl(236, 100%, 87%)";
    document.getElementById("monthBTN").style.color = "white";

    var hours = document.querySelectorAll(".hours");
    //changing times to lats month
    hours[0].innerHTML = "103hrs";
    hours[1].innerHTML = "23hrs";
    hours[2].innerHTML = "13hrs";
    hours[3].innerHTML = "11hrs";
    hours[4].innerHTML = "21hrs";
    hours[5].innerHTML = "7hrs";

    var pastTime = document.querySelectorAll(".past-time");
    //changing timest to past month
    pastTime[0].innerHTML = "Last Day - 128hrs";
    pastTime[1].innerHTML = "Last Day - 29hrs";
    pastTime[2].innerHTML = "Last Day - 19hrs";
    pastTime[3].innerHTML = "Last Day - 18hrs";
    pastTime[4].innerHTML = "Last Day - 23hrs";
    pastTime[5].innerHTML = "Last Day - 11hrs";
}