'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "60f80b3d9221ba7e6a60ac4b63475e89",
"assets/FontManifest.json": "28098d04cc5da731b02d0cd2d01bfb0d",
"assets/fonts/Lobster_Regular.ttf": "9406d0ab606cf8cb91c41b65556bd836",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/aboutPage_image/20201203_093652.jpg": "d67f6a868fcbdf60943aa64dffaded77",
"assets/images/aboutPage_image/20201203_094008.jpg": "42a19b58a663a88eadca7a570ba6b278",
"assets/images/aboutPage_image/20201203_110907.jpg": "5c2ca5ed11fdbf3425f0c3e7cfd02de7",
"assets/images/aboutPage_image/20201203_110923.jpg": "7e35f013799f73dde93489c4f1b75216",
"assets/images/aboutPage_image/20211029_172853.jpg": "a11457c2e2d9d4c40435a988d59e3563",
"assets/images/aboutPage_image/9820201203_100235.jpg": "a3bfe741187e8764f3f7f6bd17243501",
"assets/images/aboutPage_image/courses.jpg": "4785492590180a855367d6215eaee234",
"assets/images/aboutPage_image/edu.png": "fa32c596a4f0b88a3dad377c5099b9cb",
"assets/images/aboutPage_image/skills.jpg": "4c9a1f85be58fde6b0ea3ebdc9f0f4d7",
"assets/images/blog/dart.png": "301c4a8bcab36ba8a45fbdf2e61b0884",
"assets/images/blog/features.jpg": "ccf6240eae38d61dd3132f4dd5197363",
"assets/images/blog/flutter.png": "d744440971931f937269e060e720f5a7",
"assets/images/blog/flutter_backend.png": "011a4a278bb94545c9dfe5ee70cb1577",
"assets/images/blog/flutter_react.png": "5e7114f7949631c625e4c57c98d3adcc",
"assets/images/blog/flutter_supported.png": "8c66e9c40ab68057c0698b31b443aa2a",
"assets/images/dark_logo.png": "56b43fc5fc80be484a56c93cf6e186f3",
"assets/images/logo4.json": "1a31978d144b28f532123776b8ff7777",
"assets/images/lotti_animation.json": "bc5ab66d897cb267ff6a33dfc32230b0",
"assets/images/myPic1.jpg": "fbbdac51506c9ac7212a3fbd3a82477c",
"assets/images/my_pic.JPG": "72dc1428c39a4dee504ba3cec61284f7",
"assets/images/my_pic_edit.jpg": "c98749027059c200728649ef44062253",
"assets/images/projects_image/A_adorsholopi_logo.jpg": "77c17e5a52bd1e93334646851e35e588",
"assets/images/projects_image/A_beta_browser.jpg": "6df44964ded0f0aefa81207baf06400c",
"assets/images/projects_image/A_calculaotr_logo.jpg": "9deaba41c25f54091bd1d06d086e06d8",
"assets/images/projects_image/A_eshop.png": "4fb6228701c52fe52e573fed02b0cfff",
"assets/images/projects_image/A_scanner_por.jpg": "861f8d58c54ce4eb987b7761c7733b8c",
"assets/images/projects_image/A_unique_trade_link.jpg": "1a78165e74a01b2288b0a6f769176234",
"assets/images/projects_image/D_emailSender.jpg": "a9af7987dbc2b32ee53cc6da610e66a1",
"assets/images/projects_image/D_fpi_StudentInfo.png": "7a28a54e91626d2fa04fe0df4ee9b9e1",
"assets/images/projects_image/D_hospitalManagement.jpg": "58ad69f59b6c834c86e4577f21ff0bf8",
"assets/images/projects_image/D_hostelManagement.jpg": "abce737462d7ad6e83b53baa670fa27a",
"assets/images/projects_image/D_inventorySystem.jpg": "d4fa66a606b75831f5e776b79ab4a99f",
"assets/images/projects_image/D_library.png": "f8a380d6490af5dd490dc91d07aac2a5",
"assets/images/projects_image/D_schoolManagement.jpg": "ee41a74c0aecf4d2acf37caa0de5d016",
"assets/images/projects_image/F_amarBangla.png": "fb25d70d736764787a7cda3fbe75e537",
"assets/images/projects_image/F_bmi.png": "f35375d51d51ad972e8659cb27b9866c",
"assets/images/projects_image/F_currencyConverter1.png": "2cfa197584a6c0c330306bb7d821d313",
"assets/images/projects_image/F_currencyConverter2.png": "e68e119c24cc8814c5d2a70bcbe1a1a2",
"assets/images/projects_image/F_news.png": "7bff67eb3fca28b83fdfe0e13d08e300",
"assets/images/projects_image/F_qrCodeScaner.png": "473f5d4517feaab0170df9876ad640b2",
"assets/images/red_logo.png": "be43146c0284367fcb85b0e2600ed91e",
"assets/images/white_logo.png": "a5db5b63c6049ab20baee80ba28aeb9c",
"assets/NOTICES": "e4a97da5f3913f0b8752c2cc96a12501",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.ico": "91f1b0315734950b221aa7409ea43b10",
"icons/Icon-192.png": "0bb5207502bedfedecddb6196729ab31",
"icons/Icon-512.png": "fe6eccbf860cd04233d67c3def8845c3",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0a9de5f0a0d9ab7bcc343c2a8bb4e58c",
"/": "0a9de5f0a0d9ab7bcc343c2a8bb4e58c",
"main.dart.js": "2f4328ce7f986eb38452220dbc9426fa",
"manifest.json": "d4c45a95e1dac5fd29814a893c8c175f",
"version.json": "b6fdc639e2b230ffc205be445cb71b01"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
