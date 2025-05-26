<template>
  <div class="app-container">
    <AppHeader />
    <div class="main-content">
      <AppSidebar />
      <div class="content-area">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppSidebar from './components/AppSidebar.vue'

export default {
  components: {
    AppHeader,
    AppSidebar
  }
}
</script>

<style>
/* Reset CSS */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  display: flex;
  flex: 1;
}

/* Content Area - Full Screen Layout */
.content-area {
  position: fixed;
  top: 80px; /* Tinggi header yang sudah disesuaikan */
  left: 280px; /* Lebar sidebar yang sudah disesuaikan */
  right: 0;
  bottom: 0;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  background-attachment: fixed;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}

/* Ketika sidebar collapsed */
.content-area.sidebar-collapsed {
  left: 80px;
}

/* Background pattern overlay */
.content-area::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="0.5" fill="%23ffffff" opacity="0.1"/><circle cx="75" cy="75" r="0.5" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  pointer-events: none;
  z-index: -1;
}

/* Custom scrollbar untuk content area */
.content-area::-webkit-scrollbar {
  width: 8px;
}

.content-area::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.content-area::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.content-area::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}

/* Alternative layout menggunakan CSS Grid */
.app-layout {
  display: grid;
  grid-template-areas: 
    "header header"
    "sidebar content";
  grid-template-columns: 280px 1fr;
  grid-template-rows: 80px 1fr;
  height: 100vh;
  overflow: hidden;
}

.app-layout.sidebar-collapsed {
  grid-template-columns: 80px 1fr;
}

.app-header {
  grid-area: header;
}

.app-sidebar {
  grid-area: sidebar;
}

.content-area-grid {
  grid-area: content;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .content-area {
    left: 0;
    top: 80px;
    padding: 1.5rem;
  }
  
  .app-layout {
    grid-template-areas: 
      "header"
      "sidebar"
      "content";
    grid-template-columns: 1fr;
    grid-template-rows: 80px auto 1fr;
  }
  
  .app-layout.sidebar-collapsed {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .content-area {
    padding: 1rem;
    top: 80px;
    left: 0;
  }
  
  .content-area-grid {
    padding: 1rem;
  }
  
  .app-layout {
    grid-template-rows: 80px auto 1fr;
  }
}

@media (max-width: 480px) {
  .content-area {
    padding: 0.75rem;
  }
  
  .content-area-grid {
    padding: 0.75rem;
  }
}

/* Container untuk konten di dalam content area */
.content-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

/* Efek masuk untuk konten */
.content-fade-enter-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.content-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.content-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* Loading state untuk content area */
.content-area.loading {
  position: relative;
}

.content-area.loading::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

/* Breadcrumb area */
.breadcrumb-area {
  margin-bottom: 2rem;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(44, 62, 80, 0.7);
  font-size: 0.9rem;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.breadcrumb-separator {
  color: rgba(44, 62, 80, 0.5);
}

.breadcrumb-current {
  color: var(--primary-color);
  font-weight: 500;
}

/* Floating action button */
.fab {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
}

.fab:hover {
  transform: scale(1.1) translateY(-2px);
  box-shadow: 0 12px 35px rgba(102, 126, 234, 0.6);
}

/* Print styles untuk content area */
@media print {
  .content-area,
  .content-area-grid {
    position: static;
    padding: 0;
    background: white;
    overflow: visible;
  }
  
  .app-layout {
    display: block;
  }
  
  .fab {
    display: none;
  }
}

@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
  }
  
  .content-area {
    margin-left: 0;
  }
}
</style>