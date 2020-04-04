'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "9f5fa43f8037c712e397f48269c228b4",
"/main.dart.js": "4f9a2adf664a898c4cc7dfe4d14b613b",
"/icons/favicon-16x16.png": "9cdb41b8f9b731da4f83bb0d0e84992c",
"/icons/favicon.ico": "3c0b06e426f3a5f2c9afcc1cf580d8d4",
"/icons/apple-icon.png": "cd326132486b0bff49f1e0227e7ce69c",
"/icons/apple-icon-144x144.png": "b3322b01e74213315d61ee1e8a4976c1",
"/icons/android-icon-192x192.png": "dd753a63a27f45bed45e1bae823f2f51",
"/icons/apple-icon-precomposed.png": "cd326132486b0bff49f1e0227e7ce69c",
"/icons/apple-icon-114x114.png": "701cac581175059238a414f6d19447db",
"/icons/ms-icon-310x310.png": "abe43d3cd618943c6f3be4fd07ff5068",
"/icons/ms-icon-144x144.png": "b3322b01e74213315d61ee1e8a4976c1",
"/icons/apple-icon-57x57.png": "b44cdaec2a501c911c039a4496394ad3",
"/icons/apple-icon-152x152.png": "c0374cd9bd6848c227818012a8aa419e",
"/icons/ms-icon-150x150.png": "e317aad0085615877abbf677e1be40d2",
"/icons/android-icon-72x72.png": "3bd0705c1c7e042641fbc44951cb258c",
"/icons/android-icon-96x96.png": "0b99066d0bc1cfd3b11fad65598558cf",
"/icons/android-icon-36x36.png": "96a3e622b59f0aba5c9cf10d1911abef",
"/icons/apple-icon-180x180.png": "e48a9935b340d147f3ec87fbd0b94005",
"/icons/favicon-96x96.png": "0b99066d0bc1cfd3b11fad65598558cf",
"/icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"/icons/android-icon-48x48.png": "b1306559376a5f20e6fb55e15125d019",
"/icons/apple-icon-76x76.png": "4e36958e440b044aac5b31c1e883371f",
"/icons/apple-icon-60x60.png": "0e76dbea8d4509dc8c103b4ebe1628ba",
"/icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"/icons/android-icon-144x144.png": "b3322b01e74213315d61ee1e8a4976c1",
"/icons/apple-icon-72x72.png": "3bd0705c1c7e042641fbc44951cb258c",
"/icons/apple-icon-120x120.png": "448b9431e2c58f8c931436032964e995",
"/icons/favicon-32x32.png": "b789218430188e48576b4aa67313a7f7",
"/icons/ms-icon-70x70.png": "15285b7e35c9cf31244b3ac626c9ec0d",
"/assets/LICENSE": "9f39ed880705dc88c91f7341cc8e348d",
"/assets/AssetManifest.json": "366419fd3d6dd380853e3a9a77622cb4",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/config/config_archive.json": "3ee15cb0fd2e85cbf2797cc60d369fe6",
"/assets/assets/config/config_life.json": "2164a353e3fa76382546dc782171511c",
"/assets/assets/config/config_topic.json": "59a2f007e42a6fc9091850b45d945056",
"/assets/assets/config/config_tag.json": "28b13463541f6ca621c27c3375f1fa33",
"/assets/assets/config/config_study.json": "d780b0d0aabb144f4bdcfaf9d77abf9c",
"/assets/assets/img/bugly.png": "a69b853aa47cbbca2c3a945dfa1cccd2",
"/assets/assets/img/sleep_early.png": "8bf9bc403d04984d83062fd17afc54ed",
"/assets/assets/img/api_2.png": "1e29f9a37e5d4ee0ed703d777e9db36f",
"/assets/assets/img/api_1.png": "acf11ff0bdcd9b78eaee9acf31dd01a8",
"/assets/assets/img/handler.jpg": "86c339e28256fcc027d0179d98faa5b2",
"/assets/assets/img/changlu.png": "db45516660102ce479929d3cf0e6f6e7",
"/assets/assets/img/github.png": "8e19edd9c39ab207200c51a5f2a95441",
"/assets/assets/img/data_binding.png": "7a57e06fe3d1c5e4b561f40bd1077b64",
"/assets/assets/img/new_day.png": "9a384a085357d08e1fb736c0fefa96b9",
"/assets/assets/img/steam.png": "4d601f62031ddc22684d3d2925005b47",
"/assets/assets/img/kotlin_1.png": "79e75e57505c9d9f6bd27d7298594f53",
"/assets/assets/img/guoqing_2019.png": "684191c50b526645af8e39f29f0b3627",
"/assets/assets/img/avatar.jpg": "b44b9db6638311ebc1846cc87cd218b6",
"/assets/assets/img/create_mvp.png": "46d86678abc625a0f12621cd00264cf2",
"/assets/assets/img/pic_text.png": "0e25c49ff018216c4b2845514c427c7e",
"/assets/assets/img/kotlin_2.png": "06bc549c3551be9b1832315ae62fd4a0",
"/assets/assets/img/kotlin_3.png": "8bce1b30e211e137b1f29e2c13afcfdf",
"/assets/assets/img/juejin.png": "e4f98e20c16cf47e62687e4d01afc8a0",
"/assets/assets/img/study_flutter.png": "3714e5aecf50aea98829c51ef365fca7",
"/assets/assets/img/kotlin_4.png": "08bee753c19dc3c38a5e4164c80a9701",
"/assets/assets/img/room_database.png": "12f7230c70accfbdf91701f000f52758",
"/assets/assets/img/wish_list.png": "2e5fcc14d0f0ce01d7c11729b5654bbd",
"/assets/assets/img/kotlin_5.png": "4b91717f23bbe0207c589df77e5969d2",
"/assets/assets/img/zongjie_2019.png": "9dc758759d0209893880d2fecd717c39",
"/assets/assets/img/hashmap.jpg": "b2c7e58ca8fc0100e00ff9a484a78cd2",
"/assets/assets/img/my_idea.png": "67338b884252a1fc2be773c471a3d0fa",
"/assets/assets/img/wechat_pay.png": "a2f2b42b37b353a720aa841bb1fd21c7",
"/assets/assets/img/play_1.png": "ab7843982d217ab0ffa1ef29450eb505",
"/assets/assets/img/chat_something.png": "f0cb4fe76874e5a835ce8a27c676d95b"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
