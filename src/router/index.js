import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Dashboard', component: () => import('../views/Dashboard.vue') },
  { path: '/BarangMasuk', name: 'BarangMasuk', component: () => import('../views/BarangMasuk.vue') },
  { path: '/BarangKeluar', name: 'BarangKeluar', component: () => import('../views/BarangKeluar.vue') },
  { path: '/StokBarang', name: 'StokBarang', component: () => import('../views/StockBarang.vue') },
  { path: '/Kategori', name: 'Kategori', component: () => import('../views/Kategori.vue') },
  { path: '/Supplier', name: 'Supplier', component: () => import('../views/Supplier.vue') },
  { path: '/Laporan', name: 'Laporan', component: () => import('../views/Laporan.vue') },
  { path: '/Pengaturan', name: 'Pengaturan', component: () => import('../views/Pengaturan.vue') },
  { path: '/Profil', name: 'Profil', component: () => import('../views/Profil.vue') },
  { path: '/Bantuan', name: 'Bantuan', component: () => import('../views/Bantuan.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router