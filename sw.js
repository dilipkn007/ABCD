self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open("static").then(Cache=>{
            return Cache.addAll(["./","./css.css","./logo520x520px.png"])
        })
    )
})
self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request)
        })
    )
})