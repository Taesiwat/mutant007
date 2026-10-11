// ===================================================================
// Siwat Teimtad — Portfolio Scripts
// Reading Progress & Copy to Clipboard
// ===================================================================

document.addEventListener('DOMContentLoaded', () => {
  initReadingProgress();
  initEmailCopy();
});

// Update reading progress bar at top of window
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

// Copy email to clipboard with UI feedback
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
        // Fallback
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
