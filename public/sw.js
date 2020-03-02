if (!self.define) {
    const e = async e => {
            if (
                ('require' !== e && (e += '.js'),
                !i[e] &&
                    (await new Promise(async n => {
                        if ('document' in self) {
                            const i = document.createElement('script')
                            ;(i.src = e),
                                document.head.appendChild(i),
                                (i.onload = n)
                        } else importScripts(e), n()
                    }),
                    !i[e]))
            )
                throw new Error(`Module ${e} didn’t register its module`)
            return i[e]
        },
        n = async (n, i) => {
            const c = await Promise.all(n.map(e))
            i(1 === c.length ? c[0] : c)
        },
        i = { require: Promise.resolve(n) }
    self.define = (n, c, a) => {
        i[n] ||
            (i[n] = new Promise(async i => {
                let s = {}
                const r = { uri: location.origin + n.slice(1) },
                    o = await Promise.all(
                        c.map(n =>
                            'exports' === n ? s : 'module' === n ? r : e(n)
                        )
                    ),
                    d = a(...o)
                s.default || (s.default = d), i(s)
            }))
    }
}
define('./sw.js', ['./workbox-eb42688b'], function(e) {
    'use strict'
    e.skipWaiting(),
        e.clientsClaim(),
        e.precacheAndRoute(
            [
                { url: '/', revision: '7Od8y9Dx8r8GwZLpK1-zE' },
                {
                    url: '/_next/static/7Od8y9Dx8r8GwZLpK1-zE/pages/_app.js',
                    revision: '6e5cbce1bc7356ffc46c1854e1f04012'
                },
                {
                    url: '/_next/static/7Od8y9Dx8r8GwZLpK1-zE/pages/_error.js',
                    revision: 'd1d4a359de96df7e674306ad7105d710'
                },
                {
                    url: '/_next/static/7Od8y9Dx8r8GwZLpK1-zE/pages/app.js',
                    revision: '60ce30d665ab79a62afa31c5240ae01d'
                },
                {
                    url: '/_next/static/7Od8y9Dx8r8GwZLpK1-zE/pages/index.js',
                    revision: '9761901238c94741ad262dc2cdf8512f'
                },
                {
                    url: '/_next/static/chunks/commons.40fe4f1e7932c5ae491f.js',
                    revision: 'e042c1ffeea81a2036fb266fea9c2826'
                },
                {
                    url: '/_next/static/chunks/styles.0cfd6b3124be0c4f384d.js',
                    revision: '61c3012f171fb5b60f176579d1104036'
                },
                {
                    url: '/_next/static/css/styles.a922daaa.chunk.css',
                    revision: 'cdf414d279d85642c74c6edec54b6611'
                },
                {
                    url: '/_next/static/runtime/main-b22b9183e3d96646b54d.js',
                    revision: '3335cdef68d24960075c5ea0278093c6'
                },
                {
                    url:
                        '/_next/static/runtime/polyfills-e16a3c6fbdef155ac22e.js',
                    revision: '5f3515baa545a76d48133cd7949ee3a2'
                },
                {
                    url:
                        '/_next/static/runtime/webpack-9369c5c69dbf6d4912cb.js',
                    revision: 'f5e6e2fca3144cc944812cfa3547f475'
                },
                {
                    url: '/android-icon-144x144.png',
                    revision: '07d244b0e154e1de914ee717744d529d'
                },
                {
                    url: '/android-icon-192x192.png',
                    revision: 'a69041dc5ca7e64e43c84a15a98bc28c'
                },
                {
                    url: '/android-icon-36x36.png',
                    revision: 'bdf25bfa55df8d7ba5e55bef7e58dcea'
                },
                {
                    url: '/android-icon-48x48.png',
                    revision: '146573ebee89ca1bfb1dcdd56638a18d'
                },
                {
                    url: '/android-icon-72x72.png',
                    revision: '14594022bb4e4f0d71a88a85a99bfa1b'
                },
                {
                    url: '/android-icon-96x96.png',
                    revision: '770d965173ccdd7f49f1a1271908a9f0'
                },
                {
                    url: '/apple-icon-114x114.png',
                    revision: '2f60854cf22ef63777a4802743a9e7b9'
                },
                {
                    url: '/apple-icon-120x120.png',
                    revision: '6bfbd6ec9a91648d1bcd096036d81a03'
                },
                {
                    url: '/apple-icon-144x144.png',
                    revision: '87d0133e1f18010032164beabf7662e2'
                },
                {
                    url: '/apple-icon-152x152.png',
                    revision: '791c932686939faefd611f98fda7d385'
                },
                {
                    url: '/apple-icon-180x180.png',
                    revision: '7edf7920d50d7032043708b325d172cc'
                },
                {
                    url: '/apple-icon-57x57.png',
                    revision: '47f85dab9105618ca5cdfcf943068bd5'
                },
                {
                    url: '/apple-icon-60x60.png',
                    revision: '8f8b2b3d2ede174d2cc3854a1fd1201f'
                },
                {
                    url: '/apple-icon-72x72.png',
                    revision: '4b6af7caffdd57a40cd9f1b5f046d171'
                },
                {
                    url: '/apple-icon-76x76.png',
                    revision: '56319432c68c90ad99a453ab2e67c8bc'
                },
                {
                    url: '/apple-icon-precomposed.png',
                    revision: '34539a295541aac25243302edf9a9d2a'
                },
                {
                    url: '/apple-icon.png',
                    revision: '3ee824ca3ff337278edd5155ea9923c1'
                },
                {
                    url: '/favicon-16x16.png',
                    revision: 'c86804fcb5629d4b5d5e8099439d9b7f'
                },
                {
                    url: '/favicon-32x32.png',
                    revision: '0cbcefe245f1bdfed30f1b48f8351ce6'
                },
                {
                    url: '/favicon-96x96.png',
                    revision: '4903eb1430037599667b0bbdf9c74ec5'
                },
                {
                    url: '/favicon.ico',
                    revision: '412192267449ea67eebabd3e62acfe51'
                },
                {
                    url: '/icons/icon-128x128.png',
                    revision: 'db7481a04968b3ad4716436d30b3e409'
                },
                {
                    url: '/icons/icon-144x144.png',
                    revision: '689a1926530ed6ca26db537029c1dfd7'
                },
                {
                    url: '/icons/icon-152x152.png',
                    revision: '98af072da209b3b297308717b06ea86c'
                },
                {
                    url: '/icons/icon-192x192.png',
                    revision: '7ab8c82581552c7558c5b009ffcb3cd2'
                },
                {
                    url: '/icons/icon-384x384.png',
                    revision: 'aae6d1f552c78e06bf42aae2462a98fa'
                },
                {
                    url: '/icons/icon-512x512.png',
                    revision: '837ab4469c705c188326cec571ecb227'
                },
                {
                    url: '/icons/icon-72x72.png',
                    revision: 'cb6e3fb9db7db52f0986da1ff9bab188'
                },
                {
                    url: '/icons/icon-96x96.png',
                    revision: '7d8348b60cdd985bd24b48cb56855c1a'
                },
                {
                    url: '/manifest.json',
                    revision: '688128be216cc2f753fe641590f2fcd3'
                },
                {
                    url: '/ms-icon-144x144.png',
                    revision: '497f7937d961fce92c945c426e5b1b30'
                },
                {
                    url: '/ms-icon-150x150.png',
                    revision: 'fcc5e1d449de106a7ba0dd67a532526f'
                },
                {
                    url: '/ms-icon-310x310.png',
                    revision: '02a82c256fdcf514f69f180c5064e2d5'
                },
                {
                    url: '/ms-icon-70x70.png',
                    revision: '09714d62a2274008b638fdf3f996135e'
                }
            ],
            {}
        ),
        e.cleanupOutdatedCaches(),
        e.registerRoute(
            /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
            new e.CacheFirst({
                cacheName: 'google-fonts',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 4,
                        maxAgeSeconds: 31536e3,
                        purgeOnQuotaError: !0
                    })
                ]
            }),
            'GET'
        ),
        e.registerRoute(
            /^https:\/\/use\.fontawesome\.com\/releases\/.*/i,
            new e.CacheFirst({
                cacheName: 'font-awesome',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 1,
                        maxAgeSeconds: 31536e3,
                        purgeOnQuotaError: !0
                    })
                ]
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-font-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 4,
                        maxAgeSeconds: 604800,
                        purgeOnQuotaError: !0
                    })
                ]
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-image-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 64,
                        maxAgeSeconds: 86400,
                        purgeOnQuotaError: !0
                    })
                ]
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:js)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-js-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 16,
                        maxAgeSeconds: 86400,
                        purgeOnQuotaError: !0
                    })
                ]
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:css|less)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-style-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 16,
                        maxAgeSeconds: 86400,
                        purgeOnQuotaError: !0
                    })
                ]
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:json|xml|csv)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-data-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 16,
                        maxAgeSeconds: 86400,
                        purgeOnQuotaError: !0
                    })
                ]
            }),
            'GET'
        ),
        e.registerRoute(
            /.*/i,
            new e.StaleWhileRevalidate({
                cacheName: 'others',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 16,
                        maxAgeSeconds: 86400,
                        purgeOnQuotaError: !0
                    })
                ]
            }),
            'GET'
        )
})
