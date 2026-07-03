document.addEventListener('DOMContentLoaded', () => {
  const basePath = window.BASE_PATH || '.';

  // Render Header
  const headerContainer = document.getElementById('header-container');
  if (headerContainer) {
    headerContainer.innerHTML = `
      <header class="site-header">
        <div class="container">
          <a href="/" class="logo">
            <img src="${basePath}/assets/icon.png" class="logo-icon-img" alt="Introvee Icon">
            Introvee
          </a>
          
          <button class="mobile-menu-toggle" aria-label="Toggle menu">☰</button>
          
          <nav>
            <ul class="nav-links">
              <li><a href="/#about">About</a></li>
              <li><a href="/#features">Features</a></li>
              <li><a href="/#how-it-works">How It Works</a></li>
              <li><a href="/support">Support</a></li>
            </ul>
          </nav>
        </div>
      </header>
    `;
    
    // Mobile menu toggle logic
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (toggleBtn && navLinks) {
      toggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });
    }
  }

  // Render Footer
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    footerContainer.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <a href="/" class="logo">
                <img src="${basePath}/assets/icon.png" class="logo-icon-img" alt="Introvee Icon">
                Introvee
              </a>
              <p>Become more confident, one small dare at a time.</p>
            </div>
            
            <div class="footer-links">
              <h4>Legal</h4>
              <ul>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms & Conditions</a></li>
              </ul>
            </div>
            
            <div class="footer-links">
              <h4>Support</h4>
              <ul>
                <li><a href="/support">Help & Support</a></li>
                <li><a href="/delete-account">Delete Account</a></li>
                <li><a href="mailto:support@introvee.com">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div class="footer-bottom">
            <p>&copy; 2026 Introvee. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
  }
});
