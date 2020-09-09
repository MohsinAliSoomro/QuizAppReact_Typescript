console.warn('Pulic foder registers');

let cachedata = 'QuizApp';

this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cachedata)
            .then(cache => {
                cache.addAll(
                    [
                        "/static/js/bundle.js",
                        "/static/js/1.chunk.js",
                        "/static/js/main.chunk.js",
                        "index.html",
                        "/"
                    ]
                )
            })
    )
})
this.addEventListener('fetch', (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request)
                .then(result => {
                    console.log(result);
                    if (result) {
                        return result;
                    }
                })
        )
    }
})