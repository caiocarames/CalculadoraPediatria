const CACHE_NAME = "horinhas-v1";
const urlsToCache = ["index.html", "manifest.json", "icons/icon-192.png", "icons/icon-512.png"];

// Instala e adiciona ao cache
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Responde com cache se estiver offline
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
