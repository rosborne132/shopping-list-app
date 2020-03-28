if (!self.define) {
    const e = e => {
            'require' !== e && (e += '.js')
            let i = Promise.resolve()
            return (
                n[e] ||
                    (i = new Promise(async i => {
                        if ('document' in self) {
                            const n = document.createElement('script')
                            ;(n.src = e),
                                document.head.appendChild(n),
                                (n.onload = i)
                        } else importScripts(e), i()
                    })),
                i.then(() => {
                    if (!n[e])
                        throw new Error(
                            `Module ${e} didn’t register its module`
                        )
                    return n[e]
                })
            )
        },
        i = (i, n) => {
            Promise.all(i.map(e)).then(e => n(1 === e.length ? e[0] : e))
        },
        n = { require: Promise.resolve(i) }
    self.define = (i, c, a) => {
        n[i] ||
            (n[i] = Promise.resolve().then(() => {
                let n = {}
                const s = { uri: location.origin + i.slice(1) }
                return Promise.all(
                    c.map(i => {
                        switch (i) {
                            case 'exports':
                                return n
                            case 'module':
                                return s
                            default:
                                return e(i)
                        }
                    })
                ).then(e => {
                    const i = a(...e)
                    return n.default || (n.default = i), n
                })
            }))
    }
}
define('./sw.js', ['./workbox-6f0d2936'], function(e) {
    'use strict'
    importScripts(),
        e.skipWaiting(),
        e.clientsClaim(),
        e.precacheAndRoute(
            [
                { url: '/', revision: 'SFtx7v-GuNCi63tu7jSMe' },
                {
                    url:
                        '/_next/static/SFtx7v-GuNCi63tu7jSMe/_buildManifest.js',
                    revision: 'db78e146c6d3c1c742ad111cdbfe5466'
                },
                {
                    url: '/_next/static/SFtx7v-GuNCi63tu7jSMe/_ssgManifest.js',
                    revision: 'abee47769bf307639ace4945f9cfd4ff'
                },
                {
                    url: '/_next/static/SFtx7v-GuNCi63tu7jSMe/pages/_app.js',
                    revision: 'b6d25f1c96cffd0090971b9f99b004df'
                },
                {
                    url: '/_next/static/SFtx7v-GuNCi63tu7jSMe/pages/_error.js',
                    revision: '9ad7f916fb992ac0429222f8f32df4d8'
                },
                {
                    url: '/_next/static/SFtx7v-GuNCi63tu7jSMe/pages/app.js',
                    revision: 'a4c61ad2e3f05ba1312d604919e8c853'
                },
                {
                    url: '/_next/static/SFtx7v-GuNCi63tu7jSMe/pages/index.js',
                    revision: '4f65db6ef6b5f0a816c9c0e34bbd96c0'
                },
                {
                    url:
                        '/_next/static/chunks/05d954cf.061b2fb7e7e7fc669734.js',
                    revision: 'a78537b70c05125de6250e3d50154ad9'
                },
                {
                    url:
                        '/_next/static/chunks/a4ee5581298224b76eb81f5a1d22cd102a3c9c47.bbc0396b051d2d7b6bc6.js',
                    revision: '1db40b169b953c63537fcbd0143b6ced'
                },
                {
                    url:
                        '/_next/static/chunks/cb1608f2.f9813b2e58d78697cd52.js',
                    revision: '1e27e534f35dea45c3369d31de814edf'
                },
                {
                    url: '/_next/static/chunks/commons.9ea944bac089a9901ff2.js',
                    revision: '69e940b0d31a77b43fd8c06291a6599a'
                },
                {
                    url:
                        '/_next/static/chunks/e0c2ced9417672c8b0646da0ba89667739faedf1.85fd0deaea294e1fcc6e.js',
                    revision: 'f67080271f0b5422f7055d66bdfefdf6'
                },
                {
                    url:
                        '/_next/static/chunks/framework.308e38c37968bd8b614c.js',
                    revision: 'bfb4edf278496d3e79aef41637033d0e'
                },
                {
                    url: '/_next/static/css/5020b8844a5b8d289dd6.css',
                    revision: 'bfcbdcd31398b180df6733a3a01a1ff4'
                },
                {
                    url: '/_next/static/runtime/main-c1af368bbc7cc3622ad4.js',
                    revision: '37c99b087210ee377d88e6af2407535a'
                },
                {
                    url:
                        '/_next/static/runtime/polyfills-b59c2e652f7ed0f032dc.js',
                    revision: '9695e650b5d6919d57e7547af38d3853'
                },
                {
                    url:
                        '/_next/static/runtime/webpack-91b117697e716c22a78b.js',
                    revision: '40b4095b5b68a142c856f388ccb756f2'
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
            { ignoreURLParametersMatching: [] }
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
