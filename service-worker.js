const CACHE_NAME = 'titan-halloween-tools-v8';
const APP_SHELL = [
  './',
  './index.html',
  './site.webmanifest',
  './images/Top image.png',
  './images/Witch.png',
  './images/Click to download.png',
  './images/favicon.png',
  './images/favicon.ico',
  './images/apple-touch-icon.png',
  './images/web-app-manifest-192x192.png',
  './images/web-app-manifest-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'ACTIVATE_UPDATE') self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key.startsWith('titan-halloween-tools-') && key !== CACHE_NAME).map(key => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).catch(() => caches.match('./index.html')));
    return;
  }

  event.respondWith(caches.match(request).then(cached => cached || fetch(request)));
});
