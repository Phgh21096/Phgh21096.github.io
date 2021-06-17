self.addEventListener("install", e=> {
    e.waitUntil(
        caches.open("static").then(cache=>
            {
                return cache.addAll(["./foreignathletes.html","./form.html","./index.html","./table2.html","./table3.html","./table4.html","./tennisHistory.html","./thank-you.html"
                ])
            })
    );
        });

       
        self.addEventListener("fetch",e =>
{
    e.respondWith(
        caches.match(e.request).then( response =>
            {
                return response || fetch(e.request);
            })
        
    );
    
});