let cacheName = "appV1";
let assets = [
  "/",
  "/static/js/bundle.js",
  "/plates.jpg",
  "/camera.jpg",
  "/lens.jpg",
  "/podcast-set.jpg",
  "/blush.jpg",
  "/logo192.png",
  "/favicon.ico",
];

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});

//? web-push
this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    //? notification
    event.respondWith(
      caches.match(event.request).then((res) => {
        if (res) {
          return res;
        }
        fetch(event.request);
      })
    );
  }
});
