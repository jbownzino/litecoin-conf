// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/harryhur/Desktop/codes/litecoinsummit.org/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/harryhur/Desktop/codes/litecoinsummit.org/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/harryhur/Desktop/codes/litecoinsummit.org/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/harryhur/Desktop/codes/litecoinsummit.org/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/harryhur/Desktop/codes/litecoinsummit.org/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/harryhur/Desktop/codes/litecoinsummit.org/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/harryhur/Desktop/codes/litecoinsummit.org/.cache/json/404.json"),
  "index.json": require("/Users/harryhur/Desktop/codes/litecoinsummit.org/.cache/json/index.json"),
  "404-html.json": require("/Users/harryhur/Desktop/codes/litecoinsummit.org/.cache/json/404-html.json")
}