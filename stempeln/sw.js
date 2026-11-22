/* Offline-Dateien bleiben auf den Installationspfad beschränkt.
 * API-Antworten und Dateien anderer Apps werden niemals gespeichert. */
var SCOPE = new URL(self.registration.scope);
var PREFIX = 'stempeluhr:' + SCOPE.pathname + ':';
var CACHE = PREFIX + 'v12';
var CORE = ["./", "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png", "fonts/dm-sans-latin.woff2", "fonts/dm-sans-latin-ext.woff2"];
var FILES = CORE.map(function (p) { return new URL(p, SCOPE).href; });

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) {
      // Nur eigene Versionen; Familien-Cockpit und andere Apps behalten ihre Caches.
      return k !== CACHE && (k.indexOf(PREFIX) === 0 || /^stempeluhr-v\d+$/.test(k));
    }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  var req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== SCOPE.origin || url.pathname.indexOf(SCOPE.pathname) !== 0) return;
  if (url.pathname.indexOf(SCOPE.pathname + 'api/') === 0) return;
  var appPage = req.mode === 'navigate' && (url.pathname === SCOPE.pathname || url.pathname === SCOPE.pathname + 'index.html');
  if (!appPage && FILES.indexOf(url.href) === -1) return;
  var key = appPage ? SCOPE.href : req;
  var result = fetch(req).then(function (res) {
    if (res.ok && res.type === 'basic' && !res.redirected) {
      var copy = res.clone();
      return caches.open(CACHE).then(function (c) { return c.put(key, copy); }).then(function () { return res; });
    }
    return res;
  }).catch(function () {
    return caches.open(CACHE).then(function (c) { return c.match(key); }).then(function (hit) { return hit || Response.error(); });
  });
  e.respondWith(result);
});
