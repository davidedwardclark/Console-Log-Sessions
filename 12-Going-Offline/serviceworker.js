addEventListener('install', function (event) {
     console.log('The service worker is installing...');
});
addEventListener('activate', function (event) {
     console.log('The service worker is activated.');
});
addEventListener('fetch', fetchEvent => {
  const request = fetchEvent.request; console.log(request);
});
addEventListener('fetch', fetchEvent => {
  fetchEvent.respondWith(
    new Response('Hello, world!')
  ); // end respondWith
}); // end addEventListener
