/* ============================
   Contador boda Daniel & Bia
   ============================ */

// 7 de noviembre de 2026 a las 12:00 (hora peninsular)
const target = new Date('2026-11-07T12:00:00+01:00');

const $d = document.getElementById('cd-days');
const $h = document.getElementById('cd-hours');
const $m = document.getElementById('cd-mins');
const $s = document.getElementById('cd-secs');

if (!$d || !$h || !$m || !$s) {
  console.warn('[Countdown] Faltan nodos del contador. IDs esperados: cd-days, cd-hours, cd-mins, cd-secs');
} else {
  const pad = n => (n < 10 ? '0' + n : '' + n);

  function updateCountdown() {
    const now = Date.now();
    let diff = target.getTime() - now;

    if (isNaN(diff)) {
      console.error('[Countdown] Fecha objetivo inválida');
      return;
    }

    if (diff < 0) {
      $d.textContent = '00'; $h.textContent = '00';
      $m.textContent = '00'; $s.textContent = '00';
      return;
    }

    const days  = Math.floor(diff / 86400000);    diff -= days  * 86400000;
    const hours = Math.floor(diff / 3600000);     diff -= hours * 3600000;
    const mins  = Math.floor(diff / 60000);       diff -= mins  * 60000;
    const secs  = Math.floor(diff / 1000);

    $d.textContent = pad(days);
    $h.textContent = pad(hours);
    $m.textContent = pad(mins);
    $s.textContent = pad(secs);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// (Opcional) animaciones de aparición si añadiste clases .reveal
try {
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
  }, { threshold: 0.15 });

  document.querySelectorAll('.section, .hero .hero__content, .mapbox').forEach(el => {
    el.classList.add('reveal');
    io.observe(el);
  });
} catch {}
