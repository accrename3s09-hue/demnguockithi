const examDate = new Date("2027-06-26T00:00:00");

function updateCountdown(){

    const now = new Date();
    const distance = examDate - now;

    const days = Math.floor(distance / (1000*60*60*24));
    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    const seconds = Math.floor((distance%(1000*60))/1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    document.getElementById("clock").innerText =
        now.toLocaleString("vi-VN");

    const start = new Date("2026-09-05");
    const total = examDate - start;
    const passed = now - start;

    let percent = (passed/total)*100;

    if(percent < 0) percent = 0;
    if(percent > 100) percent = 100;

    document.getElementById("progress").style.width =
        percent + "%";

    document.getElementById("progressText").innerHTML =
        `📈 Tiến độ năm học: ${percent.toFixed(2)}%`;
}

updateCountdown();
setInterval(updateCountdown,1000);
