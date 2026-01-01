// Interaktivní pozadí s tečkami které se odpuzují od myši
// Canvas-based efekt s animovanými částicemi
(function(){
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  // Nastavit canvas na fullscreen
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.zIndex = '-1';
  canvas.style.pointerEvents = 'none';
  canvas.style.display = 'block';
  
  document.body.insertBefore(canvas, document.body.firstChild);
  
  // Konfigurace
  const GRID_SIZE = 50; // vzdálenost mezi tečkami
  const DOT_RADIUS = 20; // poloměr tečky
  const DOT_COLOR = 'rgba(253, 198, 8, 0.08)'; // velmi jemná žlutá - gradient bude dominanní
  const MOUSE_REPEL_RADIUS = 100; // jak daleko myš odpuzuje
  const REPEL_STRENGTH = 0.35; // síla odpuzení (zvýšeno pro větší reaktivitu)
  const DRIFT_SPEED = 0.0002; // pomalý drift (0.0008 = velmi pomalý pohyb)
  const FRICTION = 0.88; // vyšší = rychlejší zpomalení (byl 0.92)
  
  let dots = [];
  let mouseX = 0;
  let mouseY = 0;
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initDots();
  }
  
  function initDots() {
    dots = [];
    for (let y = -GRID_SIZE; y < canvas.height + GRID_SIZE; y += GRID_SIZE) {
      for (let x = -GRID_SIZE; x < canvas.width + GRID_SIZE; x += GRID_SIZE) {
        dots.push({
          x: x,
          y: y,
          origX: x,
          origY: y,
          vx: 0,
          vy: 0,
          driftAngle: Math.random() * Math.PI * 2 // random směr driftu pro každou tečku
        });
      }
    }
  }
  
  function drawDots() {
    // Vyčistit canvas průhledně (ne černě) - tak bude vidět gradient za ním
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Vykreslit každou tečku žlutou
    ctx.fillStyle = 'rgba(253, 198, 8, 0.2)'; // všechny tečky žluté
    dots.forEach(dot => {
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, DOT_RADIUS, 0, Math.PI * 2);
      ctx.fill();
    });
  }
  
  function updateDots() {
    const t = Date.now() * DRIFT_SPEED; // čas pro drift
    
    dots.forEach(dot => {
      const dx = dot.x - mouseX;
      const dy = dot.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      // Odpuzení pokud je myš blízko
      if (dist < MOUSE_REPEL_RADIUS && dist > 0) {
        const angle = Math.atan2(dy, dx);
        const force = (MOUSE_REPEL_RADIUS - dist) / MOUSE_REPEL_RADIUS;
        dot.vx += Math.cos(angle) * force * REPEL_STRENGTH;
        dot.vy += Math.sin(angle) * force * REPEL_STRENGTH;
      }
      
      // Pomalý drift - tečky se pomalu pohybují sama
      dot.vx += Math.cos(dot.driftAngle + t) * 0.05;
      dot.vy += Math.sin(dot.driftAngle + t) * 0.05;
      
      // Aplikuj pohyb
      dot.x += dot.vx;
      dot.y += dot.vy;
      dot.vx *= FRICTION; // vyšší friction = rychlejší zastavení
      dot.vy *= FRICTION;
      
      // Návrat k původní pozici (pomalejší, aby drift byl vidět)
      dot.x += (dot.origX - dot.x) * 0.08;
      dot.y += (dot.origY - dot.y) * 0.08;
    });
  }
  
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });
  
  window.addEventListener('resize', resizeCanvas, { passive: true });
  
  function animate() {
    updateDots();
    drawDots();
    requestAnimationFrame(animate);
  }
  
  resizeCanvas();
  animate();
})();
