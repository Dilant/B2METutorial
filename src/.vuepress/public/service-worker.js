if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let s = Promise.resolve();
      return (
        a[e] ||
          (s = new Promise(async (s) => {
            if ("document" in self) {
              const a = document.createElement("script");
              (a.src = e), document.head.appendChild(a), (a.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!a[e]) throw new Error(`Module ${e} didn’t register its module`);
          return a[e];
        })
      );
    },
    s = (s, a) => {
      Promise.all(s.map(e)).then((e) => a(1 === e.length ? e[0] : e));
    },
    a = { require: Promise.resolve(s) };
  self.define = (s, r, i) => {
    a[s] ||
      (a[s] = Promise.resolve().then(() => {
        let a = {};
        const l = { uri: location.origin + s.slice(1) };
        return Promise.all(
          r.map((s) => {
            switch (s) {
              case "exports":
                return a;
              case "module":
                return l;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = i(...e);
          return a.default || (a.default = s), a;
        });
      }));
  };
}
define("./service-worker.js", ["./workbox-543be79b"], function (e) {
  "use strict";
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .getRegistrations()
      .then(function (registrations) {
        for (let registration of registrations) {
          registration.unregister();
        }
      })
      .catch(function (err) {
        console.log("Service Worker registration failed: ", err);
      });
  }
});
