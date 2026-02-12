/* ============================
   Contador boda Daniel & Bia
   ============================ */

// 1) Fecha objetivo: 7 nov 2026 a las 12:00 en la zona de España peninsular.
//    Si prefieres otra hora, cambia HH:MM:SS.
//    Uso formato ISO para evitar problemas de parseo en distintos navegadores.
const target = new Date('2026-11-07T12:00:00+01:00'); // 7 noviembre 2026 12:00 CET/CEST

// 2) Selección segura de nodos
const $d = document.getElementById('cd-days');
const $h = document.getElementById('cd-hours');
const $m = document.getElementById('cd-mins');
const $s = document.getElementById('cd-secs');

// Si algo no existe, avisamos en consola y no seguimos
if (!$d || !$h || !$m || !$s) {
  console.warn('[Countdown] No se encontraron los elementos del contador. Revisa los IDs: cd-days, cd-hours, cd-mins, cd-secs.');
} else {
  // 3) Funciones utilitarias
  const pad = (n) => (n < 10 ? '0' + n : '' + n);

  function updateCountdown() {
    const now = new Date();
    let diff = target.getTime() - now.getTime();

    if (isNaN(diff)) {
      console.error('[Countdown] La fecha objetivo no es válida. Revisa el string de la fecha.');
      return;
    }

    if (diff < 0) {
      // Ya pasó la fecha → fijamos a 00:00:00
      $d.textContent = '00';
      $h.textContent = '00';
      $m.textContent = '00';
      $s.textContent = '00';
      return;
    }

    const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff       -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff       -= hours * (1000 * 60 * 60);

    const mins  = Math.floor(diff / (1000 * 60));
    diff       -= mins * (1000 * 60);

    const secs  = Math.floor(diff / 1000);

    $d.textContent = pad(days);
    $h.textContent = pad(hours);
    $m.textContent = pad(mins);
    $s.textContent = pad(secs);
  }

  // Primera actualización inmediata
  updateCountdown();
  // Actualización cada segundo
  setInterval(updateCountdown, 1000);
}

// 4) (Opcional) Animaciones de aparición si añadiste el CSS/JS de "reveal"
try {
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
  }, { threshold: 0.15 });

  document.querySelectorAll('.section, .hero .hero__content, .mapbox').forEach(el => {
    el.classList.add('reveal');
    io.observe(el);
  });
} catch (e) {
  // Si el navegador es muy viejo o hay CSP estricta, lo ignoramos.
}
