/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (() => {

// Navigation toggle
window.addEventListener('load', function () {
  var main_navigation = document.querySelector('.primary-menu');
  document.querySelector('#primary-menu-toggle').addEventListener('click', function (e) {
    e.preventDefault();
    main_navigation.classList.toggle('hidden');
  });
});

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/editor-style.css":
/*!****************************************!*\
  !*** ./resources/css/editor-style.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/editor-style": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktailpress"] = self["webpackChunktailpress"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/editor-style","css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	__webpack_require__.O(undefined, ["css/editor-style","css/app"], () => (__webpack_require__("./resources/css/app.css")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/editor-style","css/app"], () => (__webpack_require__("./resources/css/editor-style.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
(function ($) {

  var style_tag = $('<style>').appendTo('body');
  var letsee_custom_css = {};
  
  if (window.letsee_custom_css)
      letsee_custom_css = window.letsee_custom_css;
  
  function set_css(css) {
      style_tag.text(css);
  }
  
  
  function gen_base_css() {
      return ('*:not(.letsee-guard) {' +
              '   line-height: 1.3 !important;' +
              '   text-shadow: none !important;' +
              '}' +
              'a:not(.letsee-guard) {' +
              '   text-decoration: underline !important;' +
              '}')
  }
  
  
  function gen_font_size_css(font_size) {
      if (font_size == null)
          return '';
  
      return ('*:not(.letsee-guard) {'
            + '     font-size: ' + font_size + 'px !important;'
            + '}');
  }
  
  function gen_images_css(hide) {
      if (! hide)
          return '';
  
      return (letsee_custom_css.images_hidden || '') + 'img { display: none !important; }';
  }
  
  function gen_colors_css(colors) {
      if (! colors)
          return '';
  
      var props;
      switch (colors)
      {
          case 'bonw': props = 'color: #000 !important; background: #fff !important;'; break;
          case 'wonb': props = 'color: #fff !important; background: #000 !important;'; break;
      }
  
      if (props)
          return (letsee_custom_css.colors && letsee_custom_css.colors[colors] || '') + '*:not(.letsee-guard) {' + props + '}';
      else
          return '';
  }
  
  function gen_css(options) {
      if (!options.enabled)
          return '';
  
      return (
          (letsee_custom_css.enabled || '') +
          gen_base_css() +
          gen_font_size_css(options.font_size) +
          gen_images_css(options.hide_images) +
          gen_colors_css(options.colors)
      );
  }
  
  
  var panel = $(
          '<dl id="letsee-panel">'
        +     '<dt>Размер шрифта:</dt>'
        +     '<dd>'
        +         '<a href="#" class="letsee-change-fontsize letsee-fontsize-small letsee-fontsize-active" data-letsee-fontsize="17">A</a>'
        +         '<a href="#" class="letsee-change-fontsize letsee-fontsize-medium" data-letsee-fontsize="21">A</a>'
        +         '<a href="#" class="letsee-change-fontsize letsee-fontsize-large"  data-letsee-fontsize="25">A</a>'
        +     '</dd>'
        +     '<dt>'
        +         '<label for="letsee-hide-images">'
        +             'Отключить изображения'
        +             '<input type="checkbox" id="letsee-hide-images" class="letsee-hide-images"/>'
        +         '</label>'
        +     '</dt>'
        +     '<dt>Цвета:</dt>'
        +     '<dd>'
        +         '<a href="#" class="letsee-colors letsee-colors-bonw letsee-colors-active" data-letsee-colors="bonw"><span>A</span></a>'
        +         '<a href="#" class="letsee-colors letsee-colors-wonb" data-letsee-colors="wonb"><span>A</span></a>'
        +     '</dd>'
  
        +     '<dt><a href="#" class="letsee-turn-off">Выключить</a></dt>'
        + '</dl>'
      )
      .addClass('letsee-guard')
      .find('*')
          .addClass('letsee-guard')
          .end()
  
      .find('.letsee-change-fontsize')
          .on('click', function () {
              $(this).closest('dl').find('.letsee-change-fontsize').removeClass('letsee-fontsize-active');
              $(this).addClass('letsee-fontsize-active');
              apply_panel();
              return false;
          })
          .end()
  
      .find('.letsee-colors')
          .on('click', function () {
              $(this).closest('dl').find('.letsee-colors').removeClass('letsee-colors-active');
              $(this).addClass('letsee-colors-active');
              apply_panel();
              return false;
          })
          .end()
  
      .find('.letsee-hide-images')
          .on('change', apply_panel)
          .end()
  
      .on('click', '.letsee-turn-off', function () {
          letsee_toggle_panel();
          return false;
      })
  
      .prependTo('body');
  
  function panel2options() {
      return {
          enabled: $('body').hasClass('letsee-active'),
          font_size: panel.find('.letsee-fontsize-active').attr('data-letsee-fontsize'),
          hide_images: panel.find('.letsee-hide-images').prop('checked'),
          colors: panel.find('.letsee-colors-active').attr('data-letsee-colors')
      };
  }
  function options2panel(options) {
      $('body').toggleClass('letsee-active', !!options.enabled);
  
      panel.find('.letsee-change-fontsize')
           .removeClass('letsee-fontsize-active')
           .filter('[data-letsee-fontsize="' + (options.font_size || 17) + '"]')
           .addClass('letsee-fontsize-active');
  
      panel.find('.letsee-hide-images').prop('checked', !!options.hide_images);
  
      panel.find('.letsee-colors')
           .removeClass('letsee-colors-active')
           .filter('[data-letsee-colors="' + (options.colors || 'bonw') + '"]')
           .addClass('letsee-colors-active');
  }
  
  function apply_panel() {
      set_css(gen_css(panel2options()));
      save_options(panel2options());
  }
  
  
  function set_cookie(name, value) {
      document.cookie = name + '=' + encodeURIComponent(value) + ';expires=Mon,01-Jan-2050 00:00:00 GMT;path=/';
  }
  function get_cookie(name) {
      if (!document.cookie) return null;
  
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++)
      {
          var cookie = $.trim(cookies[i]);
          if (cookie.substring(0, name.length + 1) == (name + '='))
              return decodeURIComponent(cookie.substring(name.length + 1));
      }
  }
  function save_options(options) {
      set_cookie('letsee', JSON.stringify(options));
  }
  function load_options() {
      try
      {
          return JSON.parse(get_cookie('letsee'));
      }
      catch (e)
      {
          return {}
      }
  }
  
  
  window.letsee_toggle_panel = function () {
      $('body').toggleClass('letsee-active');
      apply_panel();
  }
  
  
  var options = load_options();
  options2panel(options);
  set_css(gen_css(options));
  
  })(jQuery);
  