
var dayBTN = document.getElementById("dayBTN")

function day() {
    document.getElementById("dayBTN").style.color = "white";
    document.getElementById("weekBTN").style.color = "hsl(236, 100%, 87%)";
    document.getElementById("monthBTN").style.color = "hsl(236, 100%, 87%)";

    document.getElementById("workHr").innerHTML     = "5hrs";
    document.getElementById("playHr").innerHTML     = "1hr";
    document.getElementById("studyHr").innerHTML    = "0hr";
    document.getElementById("exerciseHr").innerHTML = "1hr";
    document.getElementById("socialHr").innerHTML   = "1hr";
    document.getElementById("selfHr").innerHTML     = "0hr";

    document.getElementById("timeWork").innerHTML     = "Last Day - 7hrs";
    document.getElementById("timePlay").innerHTML     = "Last Day - 2hrs";
    document.getElementById("timeStudy").innerHTML    = "Last Day - 1hr";
    document.getElementById("timeExercise").innerHTML = "Last Day - 1hr";
    document.getElementById("timeSocial").innerHTML   = "Last Day - 3hrs";
    document.getElementById("timeSelf").innerHTML     = "Last Day - 1hr";
}

function week(){
    document.getElementById("dayBTN").style.color = "hsl(236, 100%, 87%)";
    document.getElementById("weekBTN").style.color = "white";
    document.getElementById("monthBTN").style.color = "hsl(236, 100%, 87%)";

    document.getElementById("workHr").innerHTML     = "32hrs";
    document.getElementById("playHr").innerHTML     = "10hrs";
    document.getElementById("studyHr").innerHTML    = "4hrs";
    document.getElementById("exerciseHr").innerHTML = "4hrs";
    document.getElementById("socialHr").innerHTML   = "5hrs";
    document.getElementById("selfHr").innerHTML     = "2hrs";

    document.getElementById("timeWork").innerHTML     = "Last Day - 36hrs";
    document.getElementById("timePlay").innerHTML     = "Last Day - 8hrs";
    document.getElementById("timeStudy").innerHTML    = "Last Day - 7hrs";
    document.getElementById("timeExercise").innerHTML = "Last Day - 5hrs";
    document.getElementById("timeSocial").innerHTML   = "Last Day - 10hrs";
    document.getElementById("timeSelf").innerHTML     = "Last Day - 2hrs";
}

function month(){
    document.getElementById("dayBTN").style.color = "hsl(236, 100%, 87%)";
    document.getElementById("weekBTN").style.color = "hsl(236, 100%, 87%)";
    document.getElementById("monthBTN").style.color = "white";

    document.getElementById("workHr").innerHTML     = "103hrs";
    document.getElementById("playHr").innerHTML     = "23hrs";
    document.getElementById("studyHr").innerHTML    = "13hrs";
    document.getElementById("exerciseHr").innerHTML = "11hrs";
    document.getElementById("socialHr").innerHTML   = "21hrs";
    document.getElementById("selfHr").innerHTML     = "7hrs";

    document.getElementById("timeWork").innerHTML     = "Last Day - 128hrs";
    document.getElementById("timePlay").innerHTML     = "Last Day - 29hrs";
    document.getElementById("timeStudy").innerHTML    = "Last Day - 19hrs";
    document.getElementById("timeExercise").innerHTML = "Last Day - 18hrs";
    document.getElementById("timeSocial").innerHTML   = "Last Day - 23hrs";
    document.getElementById("timeSelf").innerHTML     = "Last Day - 11hrs";
}