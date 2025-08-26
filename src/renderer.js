
/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';

console.log('👋 Modern Admin Dashboard loaded successfully');

// Tab switching functionality
document.addEventListener('DOMContentLoaded', function() {
  const navTabs = document.querySelectorAll('.nav-tab');
  const tabContents = document.querySelectorAll('.tab-content');

  navTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const targetTab = this.dataset.tab;
      
      // Remove active class from all tabs and contents
      navTabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked tab
      this.classList.add('active');
      
      // Show corresponding content
      const targetContent = document.getElementById(`${targetTab}-content`);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  // Add hover effects to action buttons
  const actionButtons = document.querySelectorAll('.action-button');
  actionButtons.forEach(button => {
    button.addEventListener('click', function() {
      const icon = this.querySelector('i');
      const span = this.querySelector('span');
      
      // Add a subtle click animation
      this.style.transform = 'scale(0.98)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 100);
      
      console.log(`Action clicked: ${span.textContent}`);
    });
  });

  // Search functionality
  const searchInput = document.querySelector('input[placeholder="Search..."]');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      console.log(`Searching for: ${this.value}`);
      // Add search functionality here
    });
  }

  // Add smooth transitions for sidebar items
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  sidebarItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      console.log(`Sidebar item clicked: ${this.textContent.trim()}`);
      // Add navigation logic here
    });
  });
});

// Add some dynamic data updates (simulated)
function updateStats() {
  const stats = document.querySelectorAll('.stat-card p:nth-child(2)');
  stats.forEach(stat => {
    // Add subtle animation when stats update
    stat.style.opacity = '0.7';
    setTimeout(() => {
      stat.style.opacity = '1';
    }, 200);
  });
}

// Simulate real-time updates every 30 seconds
setInterval(updateStats, 30000);
