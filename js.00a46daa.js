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
      var location = ymaps.geolocation.get();

// Асинхронная обработка ответа.
location.then(
  function(result) {
    // Добавление местоположения на карту.
    myMap.geoObjects.add(result.geoObjects)
  },
  function(err) {
    console.log('Ошибка: ' + err)
  }
);
  
  navigator.geolocation.getCurrentPosition(updUserPosition, locatError);
  
  function updUserPosition(pos) {
    console.log(pos);
  };
    
   function locatError (err) {
      console.log(err);
   };
  
  var myMap = new ymaps.Map("map", {
    center: [55.6891, 37.7882],
    zoom: 14
  }, {
    searchControlProvider: 'yandex#search'
  });
  
  myMap.geoObjects.add(new ymaps.Placemark([55.6876577, 37.7580098], {
    balloonContentHeader: "Старт",
    balloonContentBody: "Замок",
  }, 
    {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_S.gif',
    iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6883118, 37.7633283], {
     balloonContentHeader: "1.Трубы (Водяная мельница)",
     balloonContentBody: "Взберись на мельницу и смотри против течение реки, прям туда где реки изгибается. Там ты найдешь обелиск.",
    }, {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_1.png',
    iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6866717, 37.8167412], {
      balloonContentHeader: "2.Дорога за рощей черной ольхи. (Покров тьмы)",
      balloonContentBody: "В самой темной части наших лесов, прямо на границе с землями мертвых под вечным покровом тьмы находится Обелиск. Будь внимателен добрый герой.",
     }, {
      preset: 'islands#icon',
      iconColor: '#735184',
      iconLayout: 'default#image',
      iconImageHref: 'img/H_2.png',
      iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6812839, 37.8051892], {
      balloonContentHeader: "3.Просека (Проклятая земля)",
      balloonContentBody: "Две тысячи зим назад в тех местах проходила великая битва с армией мертвых. Будь осторожней, король Личь проклял те земли. Там же был установлен обелиск, на перекрестке двух дорог у границы леса.",
    }, {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_3.png',
    iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6838542, 37.7923428], {
      balloonContentHeader: "4.Дорога в сосновом бору (Поляна единорогов)",
      balloonContentBody: "Отправляйся в королевство Цитадель, в глухом сосновом лесу отыщи поляну единорогов, рядом с ней ты найдешь обелиск. Ориентир - перекресток двух больших дорог. Но помни, это очень темные леса и в них легко потеряться.",
    }, {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_4.png',
    iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6879391, 37.7964610], {
    balloonContentHeader: "5.Пристань (Сирены)",
      balloonContentBody: "На берегу большого озера, есть каменная лестница ведущая вниз прямо к воде. Там же стоит обелиск, но остерегайся пенья Сирен."
      }, {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_5.png',
    iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6881066, 37.7944272], {
    balloonContentHeader: "6.Между двух мостов (Маяк)",
      balloonContentBody: "На озере есть остров, туда ведут два моста, прям между этих мостов стоит обелиск. Луч маяка укажет тебе путь."
    }, {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_6.png',
    iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6920996, 37.7881995], {
    balloonContentHeader: "7.Мост в глуши (Обелиск)",
      balloonContentBody: "В лесу, есть старый канал, через который построен мост, прям на нем стоит обелиск.",
    }, {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_7.png',
    iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6893995, 37.7852604], {
    balloonContentHeader: "8.Кони (Конюшня)",
      balloonContentBody: "Между двух могучих единорогов стоит обелиск.",
  }, {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_8.png',
    iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6952883, 37.7851377], {
    balloonContentHeader: "9.Дальний пруд (Озеро драгоценностей)",
      balloonContentBody: "Отправляйся на север озера, там ты найдешь все ответы.",
  }, {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_9.png',
    iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6919450, 37.7792546], {
    balloonContentHeader: "10.Дерево знаний (Дерево знаний)",
      balloonContentBody: "Говорят, что дерево знаний это старый спящий дендроид, который охраняет один из обелисков. Возможно, вам придется его разбудить.",
  }, {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_10.png',
    iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6917376, 37.7734758], {
    balloonContentHeader: "11.Водопад (Фонтан Юности)",
      balloonContentBody: "Посмотри на воду внимательно. Белая вода укажет расположение обелиска.",
  }, {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_11.png',
    iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6910559, 37.7692838], {
   balloonContentHeader: "12.Хижина ведьмы",
      balloonContentBody: "Рядом с хижиной ведьмы в роще черной ольхи за Таинственным садом, ты найдешь упавший могучий тополь. Взберись на него, обелиск в его корнях.",
  }, {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_12.png',
    iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6912645, 37.7656759], {
    balloonContentHeader: "13.Заводь (Заколдованный источник)",
      balloonContentBody: "Спустись по тропе ближе к реке, там ты увидишь небольшую, почти пересохшую заводь из которой торчат мощные корни старого дерева. Обелиск там.",
  }, {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_13.png',
    iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6922591, 37.7724351], {
    balloonContentHeader: "14.Маг",
      balloonContentBody: "Возле озера, растет черное дерево нависая над старой дорогой. Под деревом тебя будет ждать Маг.",
  }, {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_14.png',
    iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6891638, 37.7882802], {
    balloonContentHeader: "15.Бараки",
      balloonContentBody: "На западной окраине нашего королевства, находится лагерь войнов. Отыщи рыцаря. Скорее всего он находится рядом с медведем.",
  }, {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_15.png',
    iconImageSize: [55, 55],
  })).add(new ymaps.Placemark([55.6891638, 37.7882802], {
    balloonContentHeader: "16.Тюрьма",
      balloonContentBody: "В тюрьме ты найдешь старого гнома, только он знает где обелиск.",
  }, {
    preset: 'islands#icon',
    iconColor: '#735184',
    iconLayout: 'default#image',
    iconImageHref: 'img/H_16.png',
    iconImageSize: [55, 55],
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
