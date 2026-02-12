// Fecha objetivo: 7 noviembre 2026 a las 12:00 (ajústalo si quieres otra hora)
const target = new Date('2026-11-07T12:00:00+01:00').getTime();

const $d = document.getElementById('cd-days');
const $h = document.getElementById('cd-hours');
const $m = document.getElementById('cd-mins');
const $s = document.getElementById('cd-secs');

function pad(n){ return n < 10 ? '0'+n : ''+n; }

function tick(){
  const now = Date.now();
  let diff = Math.max(0, target - now);

  const days  = Math.floor(diff / (1000*60*60*24));
  diff       -= days * (1000*60*60*24);
  const hours = Math.floor(diff / (1000*60*60));
  diff       -= hours * (1000*60*60);
  const mins  = Math.floor(diff / (1000*60));
  diff       -= mins * (1000*60);
  const secs  = Math.floor(diff / 1000);

  $d.textContent = pad(days);
  $h.textContent = pad(hours);
  $m.textContent = pad(mins);
  $s.textContent = pad(secs);
}

tick();
setInterval(tick, 1000);
