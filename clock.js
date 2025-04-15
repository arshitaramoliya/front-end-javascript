// Enhanced clock — shows time and full date
function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const date = now.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    const clockEl = document.getElementById('clock');
    const dateEl = document.getElementById('date');

    if (clockEl) clockEl.innerText = time;
    if (dateEl) dateEl.innerText = date;
}

setInterval(updateClock, 1000);
updateClock();
