// ===================================================================
// Siwat Teimtad — Portfolio Scripts
// Reading Progress, Copy Email, X-Men Background & TH/EN Language Switch
// ===================================================================

document.addEventListener('DOMContentLoaded', () => {
  initXMenTunnel();
  initReadingProgress();
  initEmailCopy();
  initLanguageSwitcher();
});

// -------------------------------------------------------------
// Translation Dictionary (EN / TH)
// -------------------------------------------------------------
const translations = {
  en: {
    brand_role: "Economist",
    nav_projects: "Projects",
    nav_about: "About",
    nav_contact: "Contact",
    nav_back: "← Back to Portfolio",
    nav_next_essay: "Next Essay →",
    nav_prev_essay: "← Previous Essay",
    hero_badge: "Economic Research & Strategic Modeling",
    hero_quote: '"Master Economics, the Simple Way."',
    hero_sub: 'Welcome to the personal research archive of <span class="hero-author">Siwat Teimtad</span>. Demystifying complex market mechanisms, strategic incentives, and classical economic principles through rigorous, accessible analysis.',
    hero_btn_essays: 'Read Research Essays ↓',
    hero_btn_contact: 'Get in Touch',
    projects_tag: '// Research Projects & Essays',
    projects_title: 'Featured Economic Papers',
    p1_badge: 'Classical Macroeconomics',
    p1_title: 'Key Economic Concepts of <em>Economics in One Lesson</em> (Henry Hazlitt, 1946)',
    p1_desc: 'A comprehensive inquiry into Hazlitt\'s timeless thesis. Traces the pivotal distinction between immediate visible effects and unseen, long-run secondary consequences across all societal groups—deconstructing the Broken Window fallacy, public works spending illusions, tariffs, price floors, and inflationary distortions.',
    p1_read: 'Read Full Essay →',
    p2_badge: 'Microeconomics & Strategy',
    p2_title: 'Game Theory: Strategic Interactions, Equilibria, and Market Design',
    p2_desc: 'A rigorous exploration of strategic decision-making in multi-agent environments. Explores von Neumann-Morgenstern utility, Nash Equilibria, extensive vs. normal form games, repeated Prisoner\'s Dilemmas and the Folk Theorem, information asymmetry (signaling and screening), and modern mechanism design for auctions.',
    p2_read: 'Read Full Essay →',
    tag_broken_window: 'Broken Window Fallacy',
    tag_seen_unseen: 'Seen vs. Unseen',
    tag_price_controls: 'Price Controls',
    tag_inflation: 'Monetary Inflation',
    tag_debt: 'Public Debt',
    tag_nash: 'Nash Equilibrium',
    tag_prisoners: "Prisoner's Dilemma",
    tag_subgame: 'Subgame Perfection',
    tag_asymmetry: 'Information Asymmetry',
    tag_auction: 'Auction Theory',
    about_tag: '// Background & Inquiry',
    about_title: 'About Me',
    about_p1: 'I am <strong>Siwat Teimtad</strong>, an economist dedicated to clarifying economic theory, market behavior, and strategic decision structures. My work bridges foundational economic philosophy with rigorous formal models to uncover how incentives truly operate in real-world systems.',
    about_p2: 'Whether analyzing the unseen secondary consequences of fiscal policy or modeling competitive interactions through game-theoretic frameworks, my philosophy centers on clarity, intellectual honesty, and first-principles thinking: <em>Master Economics, the Simple Way.</em>',
    about_p3: 'My primary research interests include <strong>Classical & Austrian Economics</strong>, <strong>Microeconomic Market Design</strong>, <strong>Strategic Form Game Theory</strong>, and <strong>Incentive Architectures in Modern Digital Economies</strong>.',
    contact_card_title: 'Contact Details',
    contact_label_name: 'Full Name',
    contact_label_email: 'Direct Email',
    contact_copy_btn: 'Copy',
    contact_label_status: 'Status',
    contact_status_text: 'Open to research collaborations & discussions',
    footer_rights: 'All rights reserved.',
    footer_quote: '"Master Economics, the Simple Way."',
    footer_tech: 'Styled in <code>JetBrains Mono</code> • Hosted on GitHub Pages',
    essay_author: 'Author:',
    essay_published: 'Published:',
    essay_words: 'Word Count:',
    essay_return: '← Return to Portfolio',
    toast_copied: 'Email copied to clipboard!'
  },
  th: {
    brand_role: "นักเศรษฐศาสตร์",
    nav_projects: "ผลงานวิจัย",
    nav_about: "เกี่ยวกับฉัน",
    nav_contact: "ติดต่อ",
    nav_back: "← กลับสู่หน้าหลัก",
    nav_next_essay: "บทความถัดไป →",
    nav_prev_essay: "← บทความก่อนหน้า",
    hero_badge: "การวิจัยทางเศรษฐศาสตร์และตัวแบบเชิงกลยุทธ์",
    hero_quote: '"เข้าใจเศรษฐศาสตร์อย่างถ่องแท้ ในวิธีที่เรียบง่าย"',
    hero_sub: 'ยินดีต้อนรับสู่คลังงานวิจัยของ <span class="hero-author">ศิวัตม์ เติมทัด</span> ถอดรหัสกลไกตลาดที่ซับซ้อน โครงสร้างสิ่งจูงใจเชิงกลยุทธ์ และหลักเศรษฐศาสตร์คลาสสิกด้วยการวิเคราะห์ที่เฉียบคมและเข้าใจง่าย',
    hero_btn_essays: 'อ่านบทความวิจัย ↓',
    hero_btn_contact: 'ติดต่อเรา',
    projects_tag: '// ผลงานวิจัยและบทความทางเศรษฐศาสตร์',
    projects_title: 'บทความเศรษฐศาสตร์คัดสรร',
    p1_badge: 'เศรษฐศาสตร์มหภาคคลาสสิก',
    p1_title: 'หัวใจสำคัญของ <em>Economics in One Lesson</em> (เฮนรี ฮาซลิตต์, 1946)',
    p1_desc: 'การศึกษาวิจัยเชิงลึกต่อทฤษฎีอมตะของฮาซลิตต์ ชี้ชัดถึงความแตกต่างระหว่างผลลัพธ์ระยะสั้นที่มองเห็นได้ กับผลกระทบทางอ้อมระยะยาวที่มองไม่เห็นในทุกกลุ่มสังคม รื้อสร้างภาพลวงตาของหน้าต่างที่แตก การใช้จ่ายภาครัฐ กำแพงภาษี การควบคุมราคา และการบิดเบือนจากเงินเฟ้อ',
    p1_read: 'อ่านบทความฉบับเต็ม →',
    p2_badge: 'เศรษฐศาสตร์จุลภาคและกลยุทธ์',
    p2_title: 'ทฤษฎีเกม: ปฏิสัมพันธ์เชิงกลยุทธ์ ดุลยภาพ และการออกแบบกลไกตลาด',
    p2_desc: 'การศึกษาวิจัยการตัดสินใจเชิงกลยุทธ์ในระบบหลายตัวแสดง สำรวจอรรถประโยชน์วอน นอยมันน์-มอร์เกนสเติร์น, ดุลยภาพแนช, เกมรูปแบบตารางและต้นไม้, ปัญหานักโทษซ้ำซ้อนและทฤษฎีโฟล์ก, ข้อมูลอสมมาตร และการออกแบบกลไกการประมูลสมัยใหม่',
    p2_read: 'อ่านบทความฉบับเต็ม →',
    tag_broken_window: 'ภาพลวงตาหน้าต่างแตก',
    tag_seen_unseen: 'สิ่งที่เห็น vs ที่มองไม่เห็น',
    tag_price_controls: 'การควบคุมราคา',
    tag_inflation: 'ภาวะเงินเฟ้อ',
    tag_debt: 'หนี้สาธารณะ',
    tag_nash: 'ดุลยภาพแนช',
    tag_prisoners: 'ปัญหานักโทษ',
    tag_subgame: 'ดุลยภาพเกมย่อยสมบูรณ์',
    tag_asymmetry: 'ข้อมูลอสมมาตร',
    tag_auction: 'ทฤษฎีการประมูล',
    about_tag: '// ประวัติและความเชี่ยวชาญ',
    about_title: 'เกี่ยวกับฉัน',
    about_p1: 'ผมคือ <strong>ศิวัตม์ เติมทัด</strong> นักเศรษฐศาสตร์ผู้มุ่งมั่นในการถ่ายทอดทฤษฎีเศรษฐศาสตร์ พฤติกรรมตลาด และโครงสร้างการตัดสินใจเชิงกลยุทธ์ งานของผมเชื่อมโยงปรัชญาเศรษฐศาสตร์พื้นฐานเข้ากับตัวแบบเชิงคณิตศาสตร์เพื่อเปิดเผยว่าสิ่งจูงใจทำงานอย่างไรในโลกความเป็นจริง',
    about_p2: 'ไม่ว่าจะเป็นการวิเคราะห์ผลกระทบทางอ้อมที่มองไม่เห็นของนโยบายการคลัง หรือการสร้างตัวแบบการแข่งขันผ่านทฤษฎีเกม ปรัชญาของผมยึดมั่นในความชัดเจน ความซื่อสัตย์ทางวิชาการ และหลักคิดจากแก่นแท้: <em>เข้าใจเศรษฐศาสตร์อย่างถ่องแท้ ในวิธีที่เรียบง่าย</em>',
    about_p3: 'ความสนใจในการวิจัยหลัก ได้แก่ <strong>เศรษฐศาสตร์คลาสสิกและสำนักออสเตรีย</strong>, <strong>การออกแบบกลไกตลาด</strong>, <strong>ทฤษฎีเกมเชิงกลยุทธ์</strong> และ<strong>โครงสร้างสิ่งจูงใจในระบบเศรษฐกิจดิจิทัล</strong>',
    contact_card_title: 'ข้อมูลติดต่อ',
    contact_label_name: 'ชื่อ-นามสกุล',
    contact_label_email: 'อีเมลติดต่อ',
    contact_copy_btn: 'คัดลอก',
    contact_label_status: 'สถานะ',
    contact_status_text: 'พร้อมสำหรับความร่วมมือทางวิชาการและการแลกเปลี่ยนความคิดเห็น',
    footer_rights: 'สงวนลิขสิทธิ์',
    footer_quote: '"เข้าใจเศรษฐศาสตร์อย่างถ่องแท้ ในวิธีที่เรียบง่าย"',
    footer_tech: 'ออกแบบด้วย <code>JetBrains Mono</code> • โฮสต์บน GitHub Pages',
    essay_author: 'ผู้เขียน:',
    essay_published: 'เผยแพร่:',
    essay_words: 'จำนวนคำ:',
    essay_return: '← กลับสู่หน้าหลัก',
    toast_copied: 'คัดลอกอีเมลเรียบร้อยแล้ว!'
  }
};

let currentLang = localStorage.getItem('portfolio_lang') || 'en';

// -------------------------------------------------------------
// Language Switcher Controller
// -------------------------------------------------------------
function initLanguageSwitcher() {
  applyLanguage(currentLang);

  const toggleBtns = document.querySelectorAll('.lang-switch-btn');
  toggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'th' : 'en';
      localStorage.setItem('portfolio_lang', currentLang);
      applyLanguage(currentLang);
    });
  });
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;

  // Update translatable elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update button active classes
  document.querySelectorAll('.lang-switch-btn').forEach((btn) => {
    const enOpt = btn.querySelector('.lang-en');
    const thOpt = btn.querySelector('.lang-th');
    if (enOpt && thOpt) {
      if (lang === 'th') {
        thOpt.classList.add('active');
        enOpt.classList.remove('active');
      } else {
        enOpt.classList.add('active');
        thOpt.classList.remove('active');
      }
    }
  });

  // Adjust document lang attribute
  document.documentElement.lang = lang;
}

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

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = `${colorPrefix}${alpha * 0.85})`;
      ctx.lineWidth = Math.max(1.2, (fov / p1.z) * 3.6);
      ctx.lineCap = 'round';
      ctx.stroke();

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

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const email = btn.getAttribute('data-email') || 'dx@outlook.com';
      const dict = translations[currentLang] || translations.en;

      try {
        await navigator.clipboard.writeText(email);
        const originalText = btn.textContent;
        btn.textContent = currentLang === 'th' ? 'คัดลอกแล้ว!' : 'Copied!';
        btn.classList.add('copied');

        showToast(dict.toast_copied || 'Email copied to clipboard!');

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

        showToast(dict.toast_copied || 'Email copied to clipboard!');
      }
    });
  });

  function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
}
