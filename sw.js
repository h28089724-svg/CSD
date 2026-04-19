const CACHE_NAME = 'sangwon-v1';
// 오프라인에서 사용할 파일 목록
const ASSETS = [
  'index.html',
  'data_rs25.js', 'data_rs35.js', 'data_rs40.js', 'data_rs50.js',
  'data_rs60.js', 'data_rs80.js', 'data_rs100.js', 'data_rs120.js',
  'data_rs140.js', 'data_rs160.js'
];

// 설치 시 파일 캐싱
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// 네트워크가 안 되어도 캐시에서 파일 응답
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});