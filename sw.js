const V = 'nest-v3';
const ASSETS = ['/', '/index.html', '/home.html', '/prompts.html', '/memory.html', '/family.html',
  '/css/shared.css', '/css/login.css', '/css/home.css', '/css/prompts.css', '/css/memory.css', '/css/family.css',
  '/js/state.js', '/js/login.js', '/js/home.js', '/js/prompts.js', '/js/memory.js', '/js/family.js',
  '/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(ASSETS)).catch(()=>{}));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== V).map(k => caches.delete(k)))
  ));
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request)).catch(() => caches.match('/index.html'))
  );
});
