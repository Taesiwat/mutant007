// ===================================================================
// Siwat Teimtad — Portfolio Scripts
// Reading Progress, Copy Email, and X-Men DNA Warp Tunnel Background
// ===================================================================

document.addEventListener('DOMContentLoaded', () => {
  initXMenTunnel();
  initReadingProgress();
  initEmailCopy();
});

// -------------------------------------------------------------
// X-Men Opening Sequence: 3D DNA Helix & Cerebro Warp Tunnel
// -------------------------------------------------------------
function initXMenTunnel() {
  let canvas = document.getElementById('xmen-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'xmen-canvas';
    document.body.prepend(canvas);
  }

  const ctx = canvas.getContext('2d');
  let width, height, cx, cy;

  const fov = 420;
  const maxZ = 2400;
  const minZ = 90;
  const flightSpeed = 4.0;
  let time = 0;

  let targetMouseX = 0, targetMouseY = 0;
  let mouseX = 0, mouseY = 0;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    cx = width / 2;
    cy = height / 2;
  }
  window.addEventListener('resize', resize, { passive: true });
  resize();

  window.addEventListener('mousemove', (e) => {
    targetMouseX = (e.clientX - cx) * 0.22;
    targetMouseY = (e.clientY - cy) * 0.22;
  }, { passive: true });

  // Floating ambient synaptic particles
  const particleCount = 140;
  const particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: (Math.random() - 0.5) * 2400,
      y: (Math.random() - 0.5) * 1800,
      z: Math.random() * (maxZ - minZ) + minZ,
      size: Math.random() * 2.2 + 0.8,
      alpha: Math.random() * 0.5 + 0.35
    });
  }

  function render() {
    time += 0.016;
    mouseX += (targetMouseX - mouseX) * 0.04;
    mouseY += (targetMouseY - mouseY) * 0.04;

    ctx.clearRect(0, 0, width, height);

    // 1. Draw Star / Cerebro Warp Particle Dust
    for (let i = 0; i < particleCount; i++) {
      const p = particles[i];
      p.z -= flightSpeed * 1.35;
      if (p.z < minZ) {
        p.z = maxZ;
        p.x = (Math.random() - 0.5) * 2400;
        p.y = (Math.random() - 0.5) * 1800;
      }

      const scale = fov / p.z;
      const sx = cx + (p.x - mouseX) * scale;
      const sy = cy + (p.y - mouseY) * scale;

      if (sx >= 0 && sx <= width && sy >= 0 && sy <= height) {
        const depthAlpha = (1 - p.z / maxZ) * p.alpha;
        ctx.beginPath();
        ctx.arc(sx, sy, Math.max(0.6, p.size * scale * 1.8), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(130, 210, 255, ${depthAlpha * 0.75})`;
        ctx.fill();
      }
    }

    // 2. Generate 3D DNA Double-Helix Strands
    const numPoints = 60;
    const zStep = (maxZ - minZ) / numPoints;
    const strandA = [];
    const strandB = [];
    const baseRadius = 280;

    for (let i = 0; i < numPoints; i++) {
      const rawZ = maxZ - i * zStep - ((time * flightSpeed * 28) % zStep);
      const z = Math.max(minZ, rawZ);

      // Helix twist angle
      const theta = z * 0.0034 + time * 1.15;
      // Gentle biological undulation
      const r = baseRadius + Math.sin(z * 0.0022 + time * 0.6) * 36;

      const xA = Math.cos(theta) * r;
      const yA = Math.sin(theta) * r;

      const xB = Math.cos(theta + Math.PI) * r;
      const yB = Math.sin(theta + Math.PI) * r;

      const scale = fov / z;
      const sAx = cx + (xA - mouseX) * scale;
      const sAy = cy + (yA - mouseY) * scale;

      const sBx = cx + (xB - mouseX) * scale;
      const sBy = cy + (yB - mouseY) * scale;

      const depthAlpha = Math.pow(1 - z / maxZ, 1.35);

      strandA.push({ x: sAx, y: sAy, z, alpha: depthAlpha });
      strandB.push({ x: sBx, y: sBy, z, alpha: depthAlpha });
    }

    // Draw connecting rungs (Hydrogen Base Pairs)
    for (let i = 0; i < strandA.length; i += 2) {
      const ptA = strandA[i];
      const ptB = strandB[i];
      if (!ptA || !ptB) continue;

      const rungAlpha = Math.min(ptA.alpha, ptB.alpha) * 0.55;
      if (rungAlpha <= 0.02) continue;

      ctx.beginPath();
      ctx.moveTo(ptA.x, ptA.y);
      ctx.lineTo(ptB.x, ptB.y);
      ctx.strokeStyle = `rgba(88, 166, 255, ${rungAlpha * 0.6})`;
      ctx.lineWidth = Math.max(0.7, (fov / ptA.z) * 2.2);
      ctx.stroke();

      // Glowing central base-pair node
      const midX = (ptA.x + ptB.x) / 2;
      const midY = (ptA.y + ptB.y) / 2;
      ctx.beginPath();
      ctx.arc(midX, midY, Math.max(0.9, (fov / ptA.z) * 2.8), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 240, 255, ${rungAlpha * 0.85})`;
      ctx.fill();
    }

    // Draw continuous ribbon strands
    drawStrandRibbon(strandA, 'rgba(0, 225, 255, ', 'rgba(255, 255, 255, ');
    drawStrandRibbon(strandB, 'rgba(64, 150, 255, ', 'rgba(180, 230, 255, ');

    // 3. Electrical action potential pulses racing forward
    drawPulse(strandA, time * 1.5);
    drawPulse(strandB, time * 1.5 + 0.5);

    requestAnimationFrame(render);
  }

  function drawStrandRibbon(strand, colorPrefix, nodePrefix) {
    if (strand.length < 2) return;

    for (let i = 0; i < strand.length - 1; i++) {
      const p1 = strand[i];
      const p2 = strand[i + 1];
      const alpha = p1.alpha;
      if (alpha <= 0.02) continue;

      // Backbone line
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = `${colorPrefix}${alpha * 0.85})`;
      ctx.lineWidth = Math.max(1.2, (fov / p1.z) * 3.6);
      ctx.lineCap = 'round';
      ctx.stroke();

      // Glowing node bead
      if (i % 2 === 0) {
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, Math.max(1.4, (fov / p1.z) * 4.0), 0, Math.PI * 2);
        ctx.fillStyle = `${nodePrefix}${alpha * 0.95})`;
        ctx.fill();
      }
    }
  }

  function drawPulse(strand, pulseTime) {
    const pulseIndex = Math.floor((pulseTime % 1) * (strand.length - 1));
    const p = strand[pulseIndex];
    if (!p || p.alpha <= 0.05) return;

    const scale = fov / p.z;
    const pulseRadius = Math.max(4, scale * 14);

    const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, pulseRadius);
    grad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
    grad.addColorStop(0.35, 'rgba(0, 245, 255, 0.75)');
    grad.addColorStop(1, 'rgba(0, 150, 255, 0)');

    ctx.beginPath();
    ctx.arc(p.x, p.y, pulseRadius, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();
  }

  requestAnimationFrame(render);
}

// -------------------------------------------------------------
// Reading Progress Bar
// -------------------------------------------------------------
function initReadingProgress() {
  const progressBar = document.getElementById('reading-progress');
  if (!progressBar) return;

  const updateProgress = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (scrollHeight > 0) {
      const percentage = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
      progressBar.style.width = percentage + '%';
    }
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

// -------------------------------------------------------------
// Copy Email to Clipboard
// -------------------------------------------------------------
function initEmailCopy() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  const toast = document.getElementById('toast');

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const email = btn.getAttribute('data-email') || 'dx@outlook.com';
      try {
        await navigator.clipboard.writeText(email);
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.classList.add('copied');

        showToast(`Copied ${email} to clipboard!`);

        setTimeout(() => {
          btn.textContent = originalText;
          btn.classList.remove('copied');
        }, 2200);
      } catch (err) {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        showToast(`Copied ${email} to clipboard!`);
      }
    });
  });

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
}
