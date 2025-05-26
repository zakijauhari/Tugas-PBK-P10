<template>
  <aside class="app-sidebar" :class="{ 'collapsed': isCollapsed }">
    <div class="sidebar-header">
      <button @click="toggleSidebar" class="collapse-btn">
        <span class="collapse-icon">{{ isCollapsed ? '→' : '←' }}</span>
      </button>
    </div>
    
    <nav class="sidebar-nav">
      <ul class="sidebar-menu">
        <li v-for="(item, index) in menuItems" :key="index" class="menu-item">
          <router-link :to="item.path" class="menu-link" v-slot="{ isActive }">
            <div class="link-content" :class="{ active: isActive }">
              <span class="menu-icon">{{ item.icon }}</span>
              <span class="menu-text" v-show="!isCollapsed">{{ item.title }}</span>
              <div class="active-indicator" v-if="isActive"></div>
            </div>
          </router-link>
          <div class="tooltip" v-if="isCollapsed">{{ item.title }}</div>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'AppSidebar',
  data() {
    return {
      isCollapsed: false,
      menuItems: [
        { path: '/', title: 'Dashboard', icon: '📊' },
        { path: '/barang-masuk', title: 'Barang Masuk', icon: '📥' },
        { path: '/barang-keluar', title: 'Barang Keluar', icon: '📤' },
        { path: '/stok-barang', title: 'Stok Barang', icon: '📦' },
        { path: '/kategori', title: 'Kategori', icon: '🏷️' },
        { path: '/supplier', title: 'Supplier', icon: '🏢' },
        { path: '/laporan', title: 'Laporan', icon: '📑' },
        { path: '/pengaturan', title: 'Pengaturan', icon: '⚙️' },
        { path: '/profil', title: 'Profil', icon: '👤' },
        { path: '/bantuan', title: 'Bantuan', icon: '❓' }
      ]
    }
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    }
  }
}
</script>

<style scoped>
.app-sidebar {
  width: 280px;
  height: 100vh;
  background: linear-gradient(180deg, #2c3e50 0%, #3498db 50%, #2c3e50 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 80px;
  z-index: 999;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

.app-sidebar.collapsed {
  width: 80px;
}

.sidebar-header {
  position: absolute;
  top: 20px;
  right: 15px;
  z-index: 1001;
}

.collapse-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.collapse-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.collapse-icon {
  color: white;
  font-size: 1rem;
  font-weight: bold;
}

.sidebar-nav {
  padding: 1rem 0;
  height: calc(100vh - 80px); /* Diubah untuk mengisi seluruh tinggi tanpa footer */
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
}

.sidebar-nav::-webkit-scrollbar {
  width: 4px;
}

.sidebar-nav::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar-nav::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
}

.sidebar-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  position: relative;
  margin: 0.3rem 1rem;
  border-radius: 12px;
  overflow: hidden;
}

.menu-link {
  color: white;
  text-decoration: none;
  display: block;
  transition: all 0.3s ease;
  position: relative;
}

.link-content {
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.link-content:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateX(5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.link-content.active {
  background: linear-gradient(135deg, rgba(52, 152, 219, 0.8), rgba(41, 128, 185, 0.8));
  box-shadow: 0 8px 25px rgba(52, 152, 219, 0.3);
  border-color: rgba(255, 255, 255, 0.3);
}

.menu-icon {
  font-size: 1.3rem;
  width: 24px;
  display: flex;
  justify-content: center;
  margin-right: 1rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.menu-text {
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  flex: 1;
  transition: all 0.3s ease;
}

.active-indicator {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, #fff, #ecf0f1);
  border-radius: 2px 0 0 2px;
}

.tooltip {
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.8rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  margin-left: 10px;
  z-index: 1000;
  backdrop-filter: blur(10px);
}

.menu-item:hover .tooltip {
  opacity: 1;
  visibility: visible;
}

@media (max-width: 768px) {
  .app-sidebar {
    width: 100%;
    height: auto;
    position: relative;
    padding-top: 0;
    background: linear-gradient(90deg, #2c3e50 0%, #3498db 50%, #2c3e50 100%);
  }
  
  .app-sidebar.collapsed {
    width: 100%;
  }
  
  .sidebar-header {
    display: none;
  }
  
  .sidebar-nav {
    height: auto;
    padding: 1rem 0.5rem;
  }
  
  .sidebar-menu {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 0.5rem;
  }
  
  .menu-item {
    margin: 0;
  }
  
  .link-content {
    flex-direction: column;
    text-align: center;
    padding: 1rem 0.5rem;
  }
  
  .menu-icon {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
  
  .menu-text {
    font-size: 0.8rem;
  }
  
  .tooltip {
    display: none;
  }
}

/* Scrollbar untuk mobile */
@media (max-width: 768px) {
  .sidebar-nav {
    overflow-x: auto;
    overflow-y: visible;
  }
}
</style>