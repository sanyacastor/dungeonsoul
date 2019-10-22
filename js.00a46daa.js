// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/index.js":[function(require,module,exports) {
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.6849, 37.8089],
    zoom: 14
  }, {
    searchControlProvider: 'yandex#search'
  });
  myMap.geoObjects.add(new ymaps.Placemark([55.6876577, 37.7580098], {
    iconCaption: 'Старт'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'https://steamuserimages-a.akamaihd.net/ugc/622974311978456788/3640145C1619AF53D649820853547DE89A0DEFE3/',
    iconImageSize: [55, 55]
  })).add(new ymaps.Placemark([55.6883118, 37.7633283], {
    iconCaption: 'Трубы'
  }, {
    preset: 'islands#icon',
    iconColor: '#735184'
  })).add(new ymaps.Placemark([55.6866717, 37.8167412], {
    iconCaption: 'Дорога за рощей черной ольхи'
  }, {
    preset: 'islands#icon',
    iconColor: '#735184'
  })).add(new ymaps.Placemark([55.6812839, 37.8051892], {
    iconCaption: 'Просека'
  }, {
    preset: 'islands#icon',
    iconLayout: 'default#image',
    iconImageHref: 'http://www.might-and-magic.ru/uploads/gallery/album_48/gallery_3_48_53653.png',
    iconImageSize: [55, 55]
  })).add(new ymaps.Placemark([55.642063, 37.656123], {
    iconCaption: 'Дорога в сосновом бору'
  }, {
    preset: 'islands#icon',
    iconColor: '#735184'
  })).add(new ymaps.Placemark([55.6879391, 37.7964610], {
    iconCaption: 'Пристань'
  }, {
    preset: 'islands#icon',
    iconColor: '#735184'
  })).add(new ymaps.Placemark([55.6881066, 37.7944272], {
    iconCaption: 'Между двух мостов'
  }, {
    preset: 'islands#icon',
    iconLayout: 'default#image',
    iconImageHref: 'http://www.might-and-magic.ru/uploads/gallery/album_48/gallery_3_48_99759.png',
    iconImageSize: [55, 55]
  })).add(new ymaps.Placemark([55.6862000, 37.7899737], {
    iconCaption: 'Холм у озера'
  }, {
    preset: 'islands#icon',
    iconColor: '#735184'
  })).add(new ymaps.Placemark([55.6891638, 37.7882802], {
    iconCaption: 'Крепость'
  }, {
    preset: 'islands#icon',
    iconColor: '#735184'
  })).add(new ymaps.Placemark([55.6881045, 37.7891241], {
    iconCaption: 'Львы'
  }, {
    preset: 'islands#icon',
    iconColor: '#735184'
  })).add(new ymaps.Placemark([55.6920996, 37.7881995], {
    iconCaption: 'Мост в глуши'
  }, {
    preset: 'islands#icon',
    iconColor: '#735184'
  })).add(new ymaps.Placemark([55.6893995, 37.7852604], {
    iconCaption: 'Кони'
  }, {
    preset: 'islands#icon',
    iconColor: '#735184'
  })).add(new ymaps.Placemark([55.6952883, 37.7851377], {
    iconCaption: 'Дальний Пруд'
  }, {
    preset: 'islands#icon',
    iconColor: '#735184'
  })).add(new ymaps.Placemark([55.6919450, 37.7792546], {
    iconCaption: 'Дерево мудрости'
  }, {
    preset: 'islands#icon',
    iconColor: '#735184'
  })).add(new ymaps.Placemark([55.6917376, 37.7734758], {
    iconCaption: 'Водопад'
  }, {
    preset: 'islands#icon',
    iconColor: '#735184'
  })).add(new ymaps.Placemark([55.6922591, 37.7724351], {
    iconCaption: 'Апхилл логово драконов'
  }, {
    preset: 'islands#icon',
    iconColor: '#735184'
  })).add(new ymaps.Placemark([55.6910559, 37.7692838], {
    iconCaption: 'Поваленное дерево'
  }, {
    preset: 'islands#icon',
    iconColor: '#735184'
  })).add(new ymaps.Placemark([55.6910990, 37.7683541], {
    iconCaption: 'Остров на паномарке'
  }, {
    preset: 'islands#icon',
    iconColor: '#735184'
  })).add(new ymaps.Placemark([55.6920728, 37.7683809], {
    iconCaption: 'Яблоневый сад'
  }, {
    preset: 'islands#icon',
    iconColor: '#735184'
  })).add(new ymaps.Placemark([55.6912645, 37.7656759], {
    iconCaption: 'Заводь (Трубы 2)'
  }, {
    preset: 'islands#icon',
    iconColor: '#735184'
  })).add(new ymaps.Placemark([55.6931439, 37.7629464], {
    iconCaption: 'Медвежий угол'
  }, {
    preset: 'islands#icon',
    iconColor: '#735184'
  }));
}
},{}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50003" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map
