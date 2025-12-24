(() => {
  function update() {
    const el = document.getElementById('topbar-datetime');
    if (!el) return;
    const now = new Date();
    const date = now.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    el.textContent = `${date}, ${time}`;
  }
  document.addEventListener('DOMContentLoaded', () => {
    update();
    setInterval(update, 60000);
  });
})();
