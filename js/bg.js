// Interaktivní pozadí reagující na pohyb myši + jemný pomalý drift
// Efekt je citlivý, ale ohraničený (nastavitelné amplitude), s plynulým easingem.
(function(){
  const body = document.body;
  if (!body) return;

  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // Konfigurovatelná intenzita (v % pro background-position offset)
  const MOUSE_AMPLITUDE_PERCENT = 6; // jak moc myš ovlivní pozici (±%)
  const DRIFT_AMPLITUDE_PERCENT = 1.2; // pomalý automatický drift (±%)
  const LERP = 0.08; // vyhlazení

  let normX = 0, normY = 0; // normalizované [-0.5,0.5]
  let curX = 0, curY = 0;

  function onMove(x, y){
    normX = (x / window.innerWidth - 0.5);
    normY = (y / window.innerHeight - 0.5);
  }

  if (!isTouch) {
    window.addEventListener('mousemove', e => onMove(e.clientX, e.clientY), { passive: true });
    // For pointer devices, also support touch-style pointermove if present
    window.addEventListener('pointermove', e => { if (e.pointerType === 'mouse') onMove(e.clientX, e.clientY); }, { passive: true });
  } else {
    // na mobile: jemné reakce na touchmove
    window.addEventListener('touchmove', e => {
      if (e.touches && e.touches[0]) onMove(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
  }

  function animate(){
    const t = Date.now() / 6000; // tempo drifta
    const driftX = Math.sin(t) * DRIFT_AMPLITUDE_PERCENT;
    const driftY = Math.cos(t * 1.1) * DRIFT_AMPLITUDE_PERCENT;

    // cílové pozice v procentech (50% je střed)
    const targetX = 50 + driftX + (normX * MOUSE_AMPLITUDE_PERCENT * 2);
    const targetY = 50 + driftY + (normY * MOUSE_AMPLITUDE_PERCENT * 2);

    // vyhlazení
    curX += (targetX - curX) * LERP;
    curY += (targetY - curY) * LERP;

    // aplikace: procenta, aby se vzor hezky posouval při resizingu
    body.style.backgroundPosition = `${curX.toFixed(2)}% ${curY.toFixed(2)}%`;

    requestAnimationFrame(animate);
  }

  // inicializace pozice uprostřed
  body.style.backgroundPosition = '50% 50%';
  requestAnimationFrame(animate);
})();
