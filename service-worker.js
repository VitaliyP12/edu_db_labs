/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "064a2f17c7a31898219a460830f29623"
  },
  {
    "url": "assets/css/0.styles.83c7167e.css",
    "revision": "cefff3f8c27847bd006c320ad3563c8b"
  },
  {
    "url": "assets/img/1.9d759e4d.png",
    "revision": "9d759e4df93b6b29e4e3252a120b8c7d"
  },
  {
    "url": "assets/img/2.de6f2ed5.png",
    "revision": "de6f2ed55396af87b6a33e3dcd719d17"
  },
  {
    "url": "assets/img/3.15d501d1.png",
    "revision": "15d501d1e81420de969fe92bdf009c05"
  },
  {
    "url": "assets/img/4.2dfe714b.png",
    "revision": "2dfe714b4e383662f579c5cb5e3b460c"
  },
  {
    "url": "assets/img/5.95dcb8d2.png",
    "revision": "95dcb8d297683efca00ae847e507d849"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ede44feb.js",
    "revision": "a5fdc61680aa686098ead5585865520b"
  },
  {
    "url": "assets/js/11.a0526c92.js",
    "revision": "4a4cbe9dba2fe96205db2667a78b4de9"
  },
  {
    "url": "assets/js/12.dcaae35a.js",
    "revision": "43fa593a39277d240494bb4077ec736e"
  },
  {
    "url": "assets/js/13.11df99a0.js",
    "revision": "25a35efd8e52ec38819d15094c4864af"
  },
  {
    "url": "assets/js/14.97fcbc17.js",
    "revision": "2c539aaa66bda6a72a6712e0348d97cc"
  },
  {
    "url": "assets/js/15.45281765.js",
    "revision": "fea4e90cea45ab63a34aba03ad49ab14"
  },
  {
    "url": "assets/js/16.3dba8eef.js",
    "revision": "5a050beaf34665c19cd33fb4313e5fa0"
  },
  {
    "url": "assets/js/17.583de74f.js",
    "revision": "62a50cd121868374c4cd874ecc06953d"
  },
  {
    "url": "assets/js/18.43232f7c.js",
    "revision": "855892f3c264df6d50c68a5541820b0f"
  },
  {
    "url": "assets/js/19.0952c482.js",
    "revision": "dba6df2575ea2ef5ea1eb7a9a5d386a9"
  },
  {
    "url": "assets/js/2.eb1b2833.js",
    "revision": "96cf7e616365ba1d7ef3f6fa6c3cfaae"
  },
  {
    "url": "assets/js/20.a6f20cf1.js",
    "revision": "cdb5e3c20631935d97ee39084b5f10e4"
  },
  {
    "url": "assets/js/21.65e9b6f8.js",
    "revision": "bf8efcfcd7bc46f9e6b3f85fa9da7616"
  },
  {
    "url": "assets/js/22.3e3cb56d.js",
    "revision": "0b73453cc218bef3f535ed48121e49ec"
  },
  {
    "url": "assets/js/23.d9f4ddd7.js",
    "revision": "951fb3dd6ef117dbfe4058a15862ca54"
  },
  {
    "url": "assets/js/24.45de3d6b.js",
    "revision": "b86fb506e027c12f75ca0411a0e662f1"
  },
  {
    "url": "assets/js/26.8925e476.js",
    "revision": "60c5ae44e9de26fbdaa7a983ce917288"
  },
  {
    "url": "assets/js/3.5150b43c.js",
    "revision": "fe96fb31153dc665b460d75389e28951"
  },
  {
    "url": "assets/js/4.1ef7a39a.js",
    "revision": "117695ad4843e83069b85bf4d1bb0c3e"
  },
  {
    "url": "assets/js/5.b6c0f9fe.js",
    "revision": "1ca04c2f67208cdc138ff2bdb723dd11"
  },
  {
    "url": "assets/js/6.a5eceeec.js",
    "revision": "ccffa3b74a48481f4deecbdf9fdfb1ab"
  },
  {
    "url": "assets/js/7.9912ff25.js",
    "revision": "5dd096a048e9bd2b58f2104d1ff0aaae"
  },
  {
    "url": "assets/js/8.90af8cbb.js",
    "revision": "b6c4db4fa28fc934f623035634c9d82b"
  },
  {
    "url": "assets/js/9.2fa1b748.js",
    "revision": "7f44f36e25e9cc48e262a648b04ed443"
  },
  {
    "url": "assets/js/app.ea5c0c34.js",
    "revision": "c79d84209215c78b53cb19c6b74df990"
  },
  {
    "url": "conclusion/index.html",
    "revision": "7b3a3324a8dd52e9b9741e797998705c"
  },
  {
    "url": "design/index.html",
    "revision": "18fcd7f3c19f1a0ae92b87d0622b60f9"
  },
  {
    "url": "index.html",
    "revision": "aa79f15adbf501dbc4355613329048ff"
  },
  {
    "url": "intro/index.html",
    "revision": "73e9b993f94a4569f0352972037f42bc"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "cbcd896c232c8221d4b18ebaee77de5b"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "03c3a6da5dfe5cff47dc875618b8c0b3"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "76abb880017a13088e024a46b6117509"
  },
  {
    "url": "software/index.html",
    "revision": "e661388e63aaf66d8d1e2181546ee03f"
  },
  {
    "url": "test/index.html",
    "revision": "265111a257358dfec9844f4160283eff"
  },
  {
    "url": "use cases/index.html",
    "revision": "6f9dd582aa79f8d8bb6758269743fa11"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
