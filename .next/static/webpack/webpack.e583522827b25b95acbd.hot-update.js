self["webpackHotUpdate_N_E"]("webpack",{},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "0f75ec02b0b890de17ff"; }
/******/ }();
/******/ 
/******/ /* webpack/runtime/consumes */
/******/ !function() {
/******/ 	var parseVersion = function(str) {
/******/ 		// see webpack/lib/util/semver.js for original code
/******/ 		var p=function(p){return p.split(".").map((function(p){return+p==p?+p:p}))},n=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(str),r=n[1]?p(n[1]):[];return n[2]&&(r.length++,r.push.apply(r,p(n[2]))),n[3]&&(r.push([]),r.push.apply(r,p(n[3]))),r;
/******/ 	}
/******/ 	var versionLt = function(a, b) {
/******/ 		// see webpack/lib/util/semver.js for original code
/******/ 		a=parseVersion(a),b=parseVersion(b);for(var r=0;;){if(r>=a.length)return r<b.length&&"u"!=(typeof b[r])[0];var e=a[r],n=(typeof e)[0];if(r>=b.length)return"u"==n;var t=b[r],f=(typeof t)[0];if(n!=f)return"o"==n&&"n"==f||("s"==f||"u"==n);if("o"!=n&&"u"!=n&&e!=t)return e<t;r++}
/******/ 	}
/******/ 	var rangeToString = function(range) {
/******/ 		// see webpack/lib/util/semver.js for original code
/******/ 		var r=range[0],n="";if(1===range.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var e=1,a=1;a<range.length;a++){e--,n+="u"==(typeof(t=range[a]))[0]?"-":(e>0?".":"")+(e=2,t)}return n}var g=[];for(a=1;a<range.length;a++){var t=range[a];g.push(0===t?"not("+o()+")":1===t?"("+o()+" || "+o()+")":2===t?g.pop()+" "+g.pop():rangeToString(t))}return o();function o(){return g.pop().replace(/^\((.+)\)$/,"$1")}
/******/ 	}
/******/ 	var satisfy = function(range, version) {
/******/ 		// see webpack/lib/util/semver.js for original code
/******/ 		if(0 in range){version=parseVersion(version);var e=range[0],r=e<0;r&&(e=-e-1);for(var n=0,i=1,a=!0;;i++,n++){var f,s,g=i<range.length?(typeof range[i])[0]:"";if(n>=version.length||"o"==(s=(typeof(f=version[n]))[0]))return!a||("u"==g?i>e&&!r:""==g!=r);if("u"==s){if(!a||"u"!=g)return!1}else if(a)if(g==s)if(i<=e){if(f!=range[i])return!1}else{if(r?f>range[i]:f<range[i])return!1;f!=range[i]&&(a=!1)}else if("s"!=g&&"n"!=g){if(r||i<=e)return!1;a=!1,i--}else{if(i<=e||s<g!=r)return!1;a=!1}else"s"!=g&&"n"!=g&&(a=!1,i--)}}var t=[],o=t.pop.bind(t);for(n=1;n<range.length;n++){var u=range[n];t.push(1==u?o()|o():2==u?o()&o():u?satisfy(u,version):!o())}return!!o();
/******/ 	}
/******/ 	var ensureExistence = function(scopeName, key) {
/******/ 		var scope = __webpack_require__.S[scopeName];
/******/ 		if(!scope || !__webpack_require__.o(scope, key)) throw new Error("Shared module " + key + " doesn't exist in shared scope " + scopeName);
/******/ 		return scope;
/******/ 	};
/******/ 	var findVersion = function(scope, key) {
/******/ 		var versions = scope[key];
/******/ 		var key = Object.keys(versions).reduce(function(a, b) {
/******/ 			return !a || versionLt(a, b) ? b : a;
/******/ 		}, 0);
/******/ 		return key && versions[key]
/******/ 	};
/******/ 	var findSingletonVersionKey = function(scope, key) {
/******/ 		var versions = scope[key];
/******/ 		return Object.keys(versions).reduce(function(a, b) {
/******/ 			return !a || (!versions[a].loaded && versionLt(a, b)) ? b : a;
/******/ 		}, 0);
/******/ 	};
/******/ 	var getInvalidSingletonVersionMessage = function(key, version, requiredVersion) {
/******/ 		return "Unsatisfied version " + version + " of shared singleton module " + key + " (required " + rangeToString(requiredVersion) + ")"
/******/ 	};
/******/ 	var getSingletonVersion = function(scope, scopeName, key, requiredVersion) {
/******/ 		var version = findSingletonVersionKey(scope, key);
/******/ 		if (!satisfy(requiredVersion, version)) typeof console !== "undefined" && console.warn && console.warn(getInvalidSingletonVersionMessage(key, version, requiredVersion));
/******/ 		return get(scope[key][version]);
/******/ 	};
/******/ 	var getStrictSingletonVersion = function(scope, scopeName, key, requiredVersion) {
/******/ 		var version = findSingletonVersionKey(scope, key);
/******/ 		if (!satisfy(requiredVersion, version)) throw new Error(getInvalidSingletonVersionMessage(key, version, requiredVersion));
/******/ 		return get(scope[key][version]);
/******/ 	};
/******/ 	var findValidVersion = function(scope, key, requiredVersion) {
/******/ 		var versions = scope[key];
/******/ 		var key = Object.keys(versions).reduce(function(a, b) {
/******/ 			if (!satisfy(requiredVersion, b)) return a;
/******/ 			return !a || versionLt(a, b) ? b : a;
/******/ 		}, 0);
/******/ 		return key && versions[key]
/******/ 	};
/******/ 	var getInvalidVersionMessage = function(scope, scopeName, key, requiredVersion) {
/******/ 		var versions = scope[key];
/******/ 		return "No satisfying version (" + rangeToString(requiredVersion) + ") of shared module " + key + " found in shared scope " + scopeName + ".\n" +
/******/ 			"Available versions: " + Object.keys(versions).map(function(key) {
/******/ 			return key + " from " + versions[key].from;
/******/ 		}).join(", ");
/******/ 	};
/******/ 	var getValidVersion = function(scope, scopeName, key, requiredVersion) {
/******/ 		var entry = findValidVersion(scope, key, requiredVersion);
/******/ 		if(entry) return get(entry);
/******/ 		throw new Error(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
/******/ 	};
/******/ 	var warnInvalidVersion = function(scope, scopeName, key, requiredVersion) {
/******/ 		typeof console !== "undefined" && console.warn && console.warn(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
/******/ 	};
/******/ 	var get = function(entry) {
/******/ 		entry.loaded = 1;
/******/ 		return entry.get()
/******/ 	};
/******/ 	var init = function(fn) { return function(scopeName, a, b, c) {
/******/ 		var promise = __webpack_require__.I(scopeName);
/******/ 		if (promise && promise.then) return promise.then(fn.bind(fn, scopeName, __webpack_require__.S[scopeName], a, b, c));
/******/ 		return fn(scopeName, __webpack_require__.S[scopeName], a, b, c);
/******/ 	}; };
/******/ 	
/******/ 	var load = /*#__PURE__*/ init(function(scopeName, scope, key) {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return get(findVersion(scope, key));
/******/ 	});
/******/ 	var loadFallback = /*#__PURE__*/ init(function(scopeName, scope, key, fallback) {
/******/ 		return scope && __webpack_require__.o(scope, key) ? get(findVersion(scope, key)) : fallback();
/******/ 	});
/******/ 	var loadVersionCheck = /*#__PURE__*/ init(function(scopeName, scope, key, version) {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
/******/ 	});
/******/ 	var loadSingletonVersionCheck = /*#__PURE__*/ init(function(scopeName, scope, key, version) {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return getSingletonVersion(scope, scopeName, key, version);
/******/ 	});
/******/ 	var loadStrictVersionCheck = /*#__PURE__*/ init(function(scopeName, scope, key, version) {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return getValidVersion(scope, scopeName, key, version);
/******/ 	});
/******/ 	var loadStrictSingletonVersionCheck = /*#__PURE__*/ init(function(scopeName, scope, key, version) {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return getStrictSingletonVersion(scope, scopeName, key, version);
/******/ 	});
/******/ 	var loadVersionCheckFallback = /*#__PURE__*/ init(function(scopeName, scope, key, version, fallback) {
/******/ 		if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 		return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
/******/ 	});
/******/ 	var loadSingletonVersionCheckFallback = /*#__PURE__*/ init(function(scopeName, scope, key, version, fallback) {
/******/ 		if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 		return getSingletonVersion(scope, scopeName, key, version);
/******/ 	});
/******/ 	var loadStrictVersionCheckFallback = /*#__PURE__*/ init(function(scopeName, scope, key, version, fallback) {
/******/ 		var entry = scope && __webpack_require__.o(scope, key) && findValidVersion(scope, key, version);
/******/ 		return entry ? get(entry) : fallback();
/******/ 	});
/******/ 	var loadStrictSingletonVersionCheckFallback = /*#__PURE__*/ init(function(scopeName, scope, key, version, fallback) {
/******/ 		if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 		return getStrictSingletonVersion(scope, scopeName, key, version);
/******/ 	});
/******/ 	var installedModules = {};
/******/ 	var moduleToHandlerMapping = {
/******/ 		"webpack/sharing/consume/default/react/react?e49e": function() { return loadFallback("default", "react", function() { return function() { return __webpack_require__(/*! react */ "./node_modules/react/index.js"); }; }); },
/******/ 		"webpack/sharing/consume/default/react/react?b7dd": function() { return loadFallback("default", "react", function() { return function() { return __webpack_require__(/*! react */ "../training-shared/node_modules/react/index.js"); }; }); }
/******/ 	};
/******/ 	var initialConsumes = ["webpack/sharing/consume/default/react/react?e49e","webpack/sharing/consume/default/react/react?b7dd"];
/******/ 	initialConsumes.forEach(function(id) {
/******/ 		__webpack_require__.m[id] = function(module) {
/******/ 			// Handle case when module is used sync
/******/ 			installedModules[id] = 0;
/******/ 			delete __webpack_require__.c[id];
/******/ 			var factory = moduleToHandlerMapping[id]();
/******/ 			if(typeof factory !== "function") throw new Error("Shared module is not available for eager consumption: " + id);
/******/ 			module.exports = factory();
/******/ 		}
/******/ 	});
/******/ 	var chunkMapping = {};
/******/ 	__webpack_require__.f.consumes = function(chunkId, promises) {
/******/ 		if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 			chunkMapping[chunkId].forEach(function(id) {
/******/ 				if(__webpack_require__.o(installedModules, id)) return promises.push(installedModules[id]);
/******/ 				var onFactory = function(factory) {
/******/ 					installedModules[id] = 0;
/******/ 					__webpack_require__.m[id] = function(module) {
/******/ 						delete __webpack_require__.c[id];
/******/ 						module.exports = factory();
/******/ 					}
/******/ 				};
/******/ 				var onError = function(error) {
/******/ 					delete installedModules[id];
/******/ 					__webpack_require__.m[id] = function(module) {
/******/ 						delete __webpack_require__.c[id];
/******/ 						throw error;
/******/ 					}
/******/ 				};
/******/ 				try {
/******/ 					var promise = moduleToHandlerMapping[id]();
/******/ 					if(promise.then) {
/******/ 						promises.push(installedModules[id] = promise.then(onFactory).catch(onError));
/******/ 					} else onFactory(promise);
/******/ 				} catch(e) { onError(e); }
/******/ 			});
/******/ 		}
/******/ 	}
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCIsIndlYnBhY2s6Ly9fTl9FL3dlYnBhY2svcnVudGltZS9jb25zdW1lcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7VUFBQSxvQ0FBb0MsK0JBQStCLEU7Ozs7O1VDQW5FO1VBQ0E7VUFDQSxtQkFBbUIscUNBQXFDLGlCQUFpQixHQUFHLHFFQUFxRTtVQUNqSjtVQUNBO1VBQ0E7VUFDQSxxQ0FBcUMsYUFBYSxFQUFFLHdEQUF3RCwyQkFBMkIsNEJBQTRCLDJCQUEyQiwrQ0FBK0MsbUNBQW1DO1VBQ2hSO1VBQ0E7VUFDQTtVQUNBLHFCQUFxQiw4QkFBOEIsU0FBUyxzREFBc0QsZ0JBQWdCLGVBQWUsS0FBSyw2REFBNkQsU0FBUyxTQUFTLFFBQVEsZUFBZSxLQUFLLGVBQWUscUdBQXFHLFdBQVcsYUFBYTtVQUM3WTtVQUNBO1VBQ0E7VUFDQSxnQkFBZ0IsOEJBQThCLHFCQUFxQixZQUFZLHNCQUFzQixTQUFTLGlEQUFpRCw2RkFBNkYsV0FBVyx1QkFBdUIsMkJBQTJCLHdCQUF3QixLQUFLLG9DQUFvQyxvQkFBb0Isd0JBQXdCLG9CQUFvQixTQUFTLEtBQUsseUJBQXlCLEtBQUssZ0NBQWdDLHlCQUF5QixRQUFRLGVBQWUsS0FBSyxlQUFlLDREQUE0RDtVQUN0b0I7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxFQUFFO1VBQ0Y7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsRUFBRTtVQUNGO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsRUFBRTtVQUNGO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsRUFBRTtVQUNGO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EseUJBQXlCO1VBQ3pCO1VBQ0E7VUFDQTtVQUNBLEVBQUU7O1VBRUY7VUFDQTtVQUNBO1VBQ0EsQ0FBQztVQUNEO1VBQ0E7VUFDQSxDQUFDO1VBQ0Q7VUFDQTtVQUNBO1VBQ0EsQ0FBQztVQUNEO1VBQ0E7VUFDQTtVQUNBLENBQUM7VUFDRDtVQUNBO1VBQ0E7VUFDQSxDQUFDO1VBQ0Q7VUFDQTtVQUNBO1VBQ0EsQ0FBQztVQUNEO1VBQ0E7VUFDQTtVQUNBLENBQUM7VUFDRDtVQUNBO1VBQ0E7VUFDQSxDQUFDO1VBQ0Q7VUFDQTtVQUNBO1VBQ0EsQ0FBQztVQUNEO1VBQ0E7VUFDQTtVQUNBLENBQUM7VUFDRDtVQUNBO1VBQ0EsaUVBQWlFLHFEQUFxRCxvQkFBb0IsMEVBQTBFLEdBQUcsRUFBRSxFQUFFLEVBQUU7VUFDN04saUVBQWlFLHFEQUFxRCxvQkFBb0IsMkZBQTJGLEdBQUcsRUFBRSxFQUFFO1VBQzVPO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxDQUFDO1VBQ0Q7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLEtBQUs7VUFDTCxJQUFJLFdBQVcsWUFBWTtVQUMzQixHQUFHO1VBQ0g7VUFDQSxDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3dlYnBhY2suZTU4MzUyMjgyN2IyNWI5NWFjYmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIwZjc1ZWMwMmIwYjg5MGRlMTdmZlwiOyB9IiwidmFyIHBhcnNlVmVyc2lvbiA9IGZ1bmN0aW9uKHN0cikge1xuXHQvLyBzZWUgd2VicGFjay9saWIvdXRpbC9zZW12ZXIuanMgZm9yIG9yaWdpbmFsIGNvZGVcblx0dmFyIHA9ZnVuY3Rpb24ocCl7cmV0dXJuIHAuc3BsaXQoXCIuXCIpLm1hcCgoZnVuY3Rpb24ocCl7cmV0dXJuK3A9PXA/K3A6cH0pKX0sbj0vXihbXi0rXSspPyg/Oi0oW14rXSspKT8oPzpcXCsoLispKT8kLy5leGVjKHN0cikscj1uWzFdP3AoblsxXSk6W107cmV0dXJuIG5bMl0mJihyLmxlbmd0aCsrLHIucHVzaC5hcHBseShyLHAoblsyXSkpKSxuWzNdJiYoci5wdXNoKFtdKSxyLnB1c2guYXBwbHkocixwKG5bM10pKSkscjtcbn1cbnZhciB2ZXJzaW9uTHQgPSBmdW5jdGlvbihhLCBiKSB7XG5cdC8vIHNlZSB3ZWJwYWNrL2xpYi91dGlsL3NlbXZlci5qcyBmb3Igb3JpZ2luYWwgY29kZVxuXHRhPXBhcnNlVmVyc2lvbihhKSxiPXBhcnNlVmVyc2lvbihiKTtmb3IodmFyIHI9MDs7KXtpZihyPj1hLmxlbmd0aClyZXR1cm4gcjxiLmxlbmd0aCYmXCJ1XCIhPSh0eXBlb2YgYltyXSlbMF07dmFyIGU9YVtyXSxuPSh0eXBlb2YgZSlbMF07aWYocj49Yi5sZW5ndGgpcmV0dXJuXCJ1XCI9PW47dmFyIHQ9YltyXSxmPSh0eXBlb2YgdClbMF07aWYobiE9ZilyZXR1cm5cIm9cIj09biYmXCJuXCI9PWZ8fChcInNcIj09Znx8XCJ1XCI9PW4pO2lmKFwib1wiIT1uJiZcInVcIiE9biYmZSE9dClyZXR1cm4gZTx0O3IrK31cbn1cbnZhciByYW5nZVRvU3RyaW5nID0gZnVuY3Rpb24ocmFuZ2UpIHtcblx0Ly8gc2VlIHdlYnBhY2svbGliL3V0aWwvc2VtdmVyLmpzIGZvciBvcmlnaW5hbCBjb2RlXG5cdHZhciByPXJhbmdlWzBdLG49XCJcIjtpZigxPT09cmFuZ2UubGVuZ3RoKXJldHVyblwiKlwiO2lmKHIrLjUpe24rPTA9PXI/XCI+PVwiOi0xPT1yP1wiPFwiOjE9PXI/XCJeXCI6Mj09cj9cIn5cIjpyPjA/XCI9XCI6XCIhPVwiO2Zvcih2YXIgZT0xLGE9MTthPHJhbmdlLmxlbmd0aDthKyspe2UtLSxuKz1cInVcIj09KHR5cGVvZih0PXJhbmdlW2FdKSlbMF0/XCItXCI6KGU+MD9cIi5cIjpcIlwiKSsoZT0yLHQpfXJldHVybiBufXZhciBnPVtdO2ZvcihhPTE7YTxyYW5nZS5sZW5ndGg7YSsrKXt2YXIgdD1yYW5nZVthXTtnLnB1c2goMD09PXQ/XCJub3QoXCIrbygpK1wiKVwiOjE9PT10P1wiKFwiK28oKStcIiB8fCBcIitvKCkrXCIpXCI6Mj09PXQ/Zy5wb3AoKStcIiBcIitnLnBvcCgpOnJhbmdlVG9TdHJpbmcodCkpfXJldHVybiBvKCk7ZnVuY3Rpb24gbygpe3JldHVybiBnLnBvcCgpLnJlcGxhY2UoL15cXCgoLispXFwpJC8sXCIkMVwiKX1cbn1cbnZhciBzYXRpc2Z5ID0gZnVuY3Rpb24ocmFuZ2UsIHZlcnNpb24pIHtcblx0Ly8gc2VlIHdlYnBhY2svbGliL3V0aWwvc2VtdmVyLmpzIGZvciBvcmlnaW5hbCBjb2RlXG5cdGlmKDAgaW4gcmFuZ2Upe3ZlcnNpb249cGFyc2VWZXJzaW9uKHZlcnNpb24pO3ZhciBlPXJhbmdlWzBdLHI9ZTwwO3ImJihlPS1lLTEpO2Zvcih2YXIgbj0wLGk9MSxhPSEwOztpKyssbisrKXt2YXIgZixzLGc9aTxyYW5nZS5sZW5ndGg/KHR5cGVvZiByYW5nZVtpXSlbMF06XCJcIjtpZihuPj12ZXJzaW9uLmxlbmd0aHx8XCJvXCI9PShzPSh0eXBlb2YoZj12ZXJzaW9uW25dKSlbMF0pKXJldHVybiFhfHwoXCJ1XCI9PWc/aT5lJiYhcjpcIlwiPT1nIT1yKTtpZihcInVcIj09cyl7aWYoIWF8fFwidVwiIT1nKXJldHVybiExfWVsc2UgaWYoYSlpZihnPT1zKWlmKGk8PWUpe2lmKGYhPXJhbmdlW2ldKXJldHVybiExfWVsc2V7aWYocj9mPnJhbmdlW2ldOmY8cmFuZ2VbaV0pcmV0dXJuITE7ZiE9cmFuZ2VbaV0mJihhPSExKX1lbHNlIGlmKFwic1wiIT1nJiZcIm5cIiE9Zyl7aWYocnx8aTw9ZSlyZXR1cm4hMTthPSExLGktLX1lbHNle2lmKGk8PWV8fHM8ZyE9cilyZXR1cm4hMTthPSExfWVsc2VcInNcIiE9ZyYmXCJuXCIhPWcmJihhPSExLGktLSl9fXZhciB0PVtdLG89dC5wb3AuYmluZCh0KTtmb3Iobj0xO248cmFuZ2UubGVuZ3RoO24rKyl7dmFyIHU9cmFuZ2Vbbl07dC5wdXNoKDE9PXU/bygpfG8oKToyPT11P28oKSZvKCk6dT9zYXRpc2Z5KHUsdmVyc2lvbik6IW8oKSl9cmV0dXJuISFvKCk7XG59XG52YXIgZW5zdXJlRXhpc3RlbmNlID0gZnVuY3Rpb24oc2NvcGVOYW1lLCBrZXkpIHtcblx0dmFyIHNjb3BlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5TW3Njb3BlTmFtZV07XG5cdGlmKCFzY29wZSB8fCAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKHNjb3BlLCBrZXkpKSB0aHJvdyBuZXcgRXJyb3IoXCJTaGFyZWQgbW9kdWxlIFwiICsga2V5ICsgXCIgZG9lc24ndCBleGlzdCBpbiBzaGFyZWQgc2NvcGUgXCIgKyBzY29wZU5hbWUpO1xuXHRyZXR1cm4gc2NvcGU7XG59O1xudmFyIGZpbmRWZXJzaW9uID0gZnVuY3Rpb24oc2NvcGUsIGtleSkge1xuXHR2YXIgdmVyc2lvbnMgPSBzY29wZVtrZXldO1xuXHR2YXIga2V5ID0gT2JqZWN0LmtleXModmVyc2lvbnMpLnJlZHVjZShmdW5jdGlvbihhLCBiKSB7XG5cdFx0cmV0dXJuICFhIHx8IHZlcnNpb25MdChhLCBiKSA/IGIgOiBhO1xuXHR9LCAwKTtcblx0cmV0dXJuIGtleSAmJiB2ZXJzaW9uc1trZXldXG59O1xudmFyIGZpbmRTaW5nbGV0b25WZXJzaW9uS2V5ID0gZnVuY3Rpb24oc2NvcGUsIGtleSkge1xuXHR2YXIgdmVyc2lvbnMgPSBzY29wZVtrZXldO1xuXHRyZXR1cm4gT2JqZWN0LmtleXModmVyc2lvbnMpLnJlZHVjZShmdW5jdGlvbihhLCBiKSB7XG5cdFx0cmV0dXJuICFhIHx8ICghdmVyc2lvbnNbYV0ubG9hZGVkICYmIHZlcnNpb25MdChhLCBiKSkgPyBiIDogYTtcblx0fSwgMCk7XG59O1xudmFyIGdldEludmFsaWRTaW5nbGV0b25WZXJzaW9uTWVzc2FnZSA9IGZ1bmN0aW9uKGtleSwgdmVyc2lvbiwgcmVxdWlyZWRWZXJzaW9uKSB7XG5cdHJldHVybiBcIlVuc2F0aXNmaWVkIHZlcnNpb24gXCIgKyB2ZXJzaW9uICsgXCIgb2Ygc2hhcmVkIHNpbmdsZXRvbiBtb2R1bGUgXCIgKyBrZXkgKyBcIiAocmVxdWlyZWQgXCIgKyByYW5nZVRvU3RyaW5nKHJlcXVpcmVkVmVyc2lvbikgKyBcIilcIlxufTtcbnZhciBnZXRTaW5nbGV0b25WZXJzaW9uID0gZnVuY3Rpb24oc2NvcGUsIHNjb3BlTmFtZSwga2V5LCByZXF1aXJlZFZlcnNpb24pIHtcblx0dmFyIHZlcnNpb24gPSBmaW5kU2luZ2xldG9uVmVyc2lvbktleShzY29wZSwga2V5KTtcblx0aWYgKCFzYXRpc2Z5KHJlcXVpcmVkVmVyc2lvbiwgdmVyc2lvbikpIHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiICYmIGNvbnNvbGUud2FybiAmJiBjb25zb2xlLndhcm4oZ2V0SW52YWxpZFNpbmdsZXRvblZlcnNpb25NZXNzYWdlKGtleSwgdmVyc2lvbiwgcmVxdWlyZWRWZXJzaW9uKSk7XG5cdHJldHVybiBnZXQoc2NvcGVba2V5XVt2ZXJzaW9uXSk7XG59O1xudmFyIGdldFN0cmljdFNpbmdsZXRvblZlcnNpb24gPSBmdW5jdGlvbihzY29wZSwgc2NvcGVOYW1lLCBrZXksIHJlcXVpcmVkVmVyc2lvbikge1xuXHR2YXIgdmVyc2lvbiA9IGZpbmRTaW5nbGV0b25WZXJzaW9uS2V5KHNjb3BlLCBrZXkpO1xuXHRpZiAoIXNhdGlzZnkocmVxdWlyZWRWZXJzaW9uLCB2ZXJzaW9uKSkgdGhyb3cgbmV3IEVycm9yKGdldEludmFsaWRTaW5nbGV0b25WZXJzaW9uTWVzc2FnZShrZXksIHZlcnNpb24sIHJlcXVpcmVkVmVyc2lvbikpO1xuXHRyZXR1cm4gZ2V0KHNjb3BlW2tleV1bdmVyc2lvbl0pO1xufTtcbnZhciBmaW5kVmFsaWRWZXJzaW9uID0gZnVuY3Rpb24oc2NvcGUsIGtleSwgcmVxdWlyZWRWZXJzaW9uKSB7XG5cdHZhciB2ZXJzaW9ucyA9IHNjb3BlW2tleV07XG5cdHZhciBrZXkgPSBPYmplY3Qua2V5cyh2ZXJzaW9ucykucmVkdWNlKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRpZiAoIXNhdGlzZnkocmVxdWlyZWRWZXJzaW9uLCBiKSkgcmV0dXJuIGE7XG5cdFx0cmV0dXJuICFhIHx8IHZlcnNpb25MdChhLCBiKSA/IGIgOiBhO1xuXHR9LCAwKTtcblx0cmV0dXJuIGtleSAmJiB2ZXJzaW9uc1trZXldXG59O1xudmFyIGdldEludmFsaWRWZXJzaW9uTWVzc2FnZSA9IGZ1bmN0aW9uKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgcmVxdWlyZWRWZXJzaW9uKSB7XG5cdHZhciB2ZXJzaW9ucyA9IHNjb3BlW2tleV07XG5cdHJldHVybiBcIk5vIHNhdGlzZnlpbmcgdmVyc2lvbiAoXCIgKyByYW5nZVRvU3RyaW5nKHJlcXVpcmVkVmVyc2lvbikgKyBcIikgb2Ygc2hhcmVkIG1vZHVsZSBcIiArIGtleSArIFwiIGZvdW5kIGluIHNoYXJlZCBzY29wZSBcIiArIHNjb3BlTmFtZSArIFwiLlxcblwiICtcblx0XHRcIkF2YWlsYWJsZSB2ZXJzaW9uczogXCIgKyBPYmplY3Qua2V5cyh2ZXJzaW9ucykubWFwKGZ1bmN0aW9uKGtleSkge1xuXHRcdHJldHVybiBrZXkgKyBcIiBmcm9tIFwiICsgdmVyc2lvbnNba2V5XS5mcm9tO1xuXHR9KS5qb2luKFwiLCBcIik7XG59O1xudmFyIGdldFZhbGlkVmVyc2lvbiA9IGZ1bmN0aW9uKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgcmVxdWlyZWRWZXJzaW9uKSB7XG5cdHZhciBlbnRyeSA9IGZpbmRWYWxpZFZlcnNpb24oc2NvcGUsIGtleSwgcmVxdWlyZWRWZXJzaW9uKTtcblx0aWYoZW50cnkpIHJldHVybiBnZXQoZW50cnkpO1xuXHR0aHJvdyBuZXcgRXJyb3IoZ2V0SW52YWxpZFZlcnNpb25NZXNzYWdlKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgcmVxdWlyZWRWZXJzaW9uKSk7XG59O1xudmFyIHdhcm5JbnZhbGlkVmVyc2lvbiA9IGZ1bmN0aW9uKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgcmVxdWlyZWRWZXJzaW9uKSB7XG5cdHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiICYmIGNvbnNvbGUud2FybiAmJiBjb25zb2xlLndhcm4oZ2V0SW52YWxpZFZlcnNpb25NZXNzYWdlKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgcmVxdWlyZWRWZXJzaW9uKSk7XG59O1xudmFyIGdldCA9IGZ1bmN0aW9uKGVudHJ5KSB7XG5cdGVudHJ5LmxvYWRlZCA9IDE7XG5cdHJldHVybiBlbnRyeS5nZXQoKVxufTtcbnZhciBpbml0ID0gZnVuY3Rpb24oZm4pIHsgcmV0dXJuIGZ1bmN0aW9uKHNjb3BlTmFtZSwgYSwgYiwgYykge1xuXHR2YXIgcHJvbWlzZSA9IF9fd2VicGFja19yZXF1aXJlX18uSShzY29wZU5hbWUpO1xuXHRpZiAocHJvbWlzZSAmJiBwcm9taXNlLnRoZW4pIHJldHVybiBwcm9taXNlLnRoZW4oZm4uYmluZChmbiwgc2NvcGVOYW1lLCBfX3dlYnBhY2tfcmVxdWlyZV9fLlNbc2NvcGVOYW1lXSwgYSwgYiwgYykpO1xuXHRyZXR1cm4gZm4oc2NvcGVOYW1lLCBfX3dlYnBhY2tfcmVxdWlyZV9fLlNbc2NvcGVOYW1lXSwgYSwgYiwgYyk7XG59OyB9O1xuXG52YXIgbG9hZCA9IC8qI19fUFVSRV9fKi8gaW5pdChmdW5jdGlvbihzY29wZU5hbWUsIHNjb3BlLCBrZXkpIHtcblx0ZW5zdXJlRXhpc3RlbmNlKHNjb3BlTmFtZSwga2V5KTtcblx0cmV0dXJuIGdldChmaW5kVmVyc2lvbihzY29wZSwga2V5KSk7XG59KTtcbnZhciBsb2FkRmFsbGJhY2sgPSAvKiNfX1BVUkVfXyovIGluaXQoZnVuY3Rpb24oc2NvcGVOYW1lLCBzY29wZSwga2V5LCBmYWxsYmFjaykge1xuXHRyZXR1cm4gc2NvcGUgJiYgX193ZWJwYWNrX3JlcXVpcmVfXy5vKHNjb3BlLCBrZXkpID8gZ2V0KGZpbmRWZXJzaW9uKHNjb3BlLCBrZXkpKSA6IGZhbGxiYWNrKCk7XG59KTtcbnZhciBsb2FkVmVyc2lvbkNoZWNrID0gLyojX19QVVJFX18qLyBpbml0KGZ1bmN0aW9uKHNjb3BlTmFtZSwgc2NvcGUsIGtleSwgdmVyc2lvbikge1xuXHRlbnN1cmVFeGlzdGVuY2Uoc2NvcGVOYW1lLCBrZXkpO1xuXHRyZXR1cm4gZ2V0KGZpbmRWYWxpZFZlcnNpb24oc2NvcGUsIGtleSwgdmVyc2lvbikgfHwgd2FybkludmFsaWRWZXJzaW9uKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgdmVyc2lvbikgfHwgZmluZFZlcnNpb24oc2NvcGUsIGtleSkpO1xufSk7XG52YXIgbG9hZFNpbmdsZXRvblZlcnNpb25DaGVjayA9IC8qI19fUFVSRV9fKi8gaW5pdChmdW5jdGlvbihzY29wZU5hbWUsIHNjb3BlLCBrZXksIHZlcnNpb24pIHtcblx0ZW5zdXJlRXhpc3RlbmNlKHNjb3BlTmFtZSwga2V5KTtcblx0cmV0dXJuIGdldFNpbmdsZXRvblZlcnNpb24oc2NvcGUsIHNjb3BlTmFtZSwga2V5LCB2ZXJzaW9uKTtcbn0pO1xudmFyIGxvYWRTdHJpY3RWZXJzaW9uQ2hlY2sgPSAvKiNfX1BVUkVfXyovIGluaXQoZnVuY3Rpb24oc2NvcGVOYW1lLCBzY29wZSwga2V5LCB2ZXJzaW9uKSB7XG5cdGVuc3VyZUV4aXN0ZW5jZShzY29wZU5hbWUsIGtleSk7XG5cdHJldHVybiBnZXRWYWxpZFZlcnNpb24oc2NvcGUsIHNjb3BlTmFtZSwga2V5LCB2ZXJzaW9uKTtcbn0pO1xudmFyIGxvYWRTdHJpY3RTaW5nbGV0b25WZXJzaW9uQ2hlY2sgPSAvKiNfX1BVUkVfXyovIGluaXQoZnVuY3Rpb24oc2NvcGVOYW1lLCBzY29wZSwga2V5LCB2ZXJzaW9uKSB7XG5cdGVuc3VyZUV4aXN0ZW5jZShzY29wZU5hbWUsIGtleSk7XG5cdHJldHVybiBnZXRTdHJpY3RTaW5nbGV0b25WZXJzaW9uKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgdmVyc2lvbik7XG59KTtcbnZhciBsb2FkVmVyc2lvbkNoZWNrRmFsbGJhY2sgPSAvKiNfX1BVUkVfXyovIGluaXQoZnVuY3Rpb24oc2NvcGVOYW1lLCBzY29wZSwga2V5LCB2ZXJzaW9uLCBmYWxsYmFjaykge1xuXHRpZighc2NvcGUgfHwgIV9fd2VicGFja19yZXF1aXJlX18ubyhzY29wZSwga2V5KSkgcmV0dXJuIGZhbGxiYWNrKCk7XG5cdHJldHVybiBnZXQoZmluZFZhbGlkVmVyc2lvbihzY29wZSwga2V5LCB2ZXJzaW9uKSB8fCB3YXJuSW52YWxpZFZlcnNpb24oc2NvcGUsIHNjb3BlTmFtZSwga2V5LCB2ZXJzaW9uKSB8fCBmaW5kVmVyc2lvbihzY29wZSwga2V5KSk7XG59KTtcbnZhciBsb2FkU2luZ2xldG9uVmVyc2lvbkNoZWNrRmFsbGJhY2sgPSAvKiNfX1BVUkVfXyovIGluaXQoZnVuY3Rpb24oc2NvcGVOYW1lLCBzY29wZSwga2V5LCB2ZXJzaW9uLCBmYWxsYmFjaykge1xuXHRpZighc2NvcGUgfHwgIV9fd2VicGFja19yZXF1aXJlX18ubyhzY29wZSwga2V5KSkgcmV0dXJuIGZhbGxiYWNrKCk7XG5cdHJldHVybiBnZXRTaW5nbGV0b25WZXJzaW9uKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgdmVyc2lvbik7XG59KTtcbnZhciBsb2FkU3RyaWN0VmVyc2lvbkNoZWNrRmFsbGJhY2sgPSAvKiNfX1BVUkVfXyovIGluaXQoZnVuY3Rpb24oc2NvcGVOYW1lLCBzY29wZSwga2V5LCB2ZXJzaW9uLCBmYWxsYmFjaykge1xuXHR2YXIgZW50cnkgPSBzY29wZSAmJiBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oc2NvcGUsIGtleSkgJiYgZmluZFZhbGlkVmVyc2lvbihzY29wZSwga2V5LCB2ZXJzaW9uKTtcblx0cmV0dXJuIGVudHJ5ID8gZ2V0KGVudHJ5KSA6IGZhbGxiYWNrKCk7XG59KTtcbnZhciBsb2FkU3RyaWN0U2luZ2xldG9uVmVyc2lvbkNoZWNrRmFsbGJhY2sgPSAvKiNfX1BVUkVfXyovIGluaXQoZnVuY3Rpb24oc2NvcGVOYW1lLCBzY29wZSwga2V5LCB2ZXJzaW9uLCBmYWxsYmFjaykge1xuXHRpZighc2NvcGUgfHwgIV9fd2VicGFja19yZXF1aXJlX18ubyhzY29wZSwga2V5KSkgcmV0dXJuIGZhbGxiYWNrKCk7XG5cdHJldHVybiBnZXRTdHJpY3RTaW5nbGV0b25WZXJzaW9uKHNjb3BlLCBzY29wZU5hbWUsIGtleSwgdmVyc2lvbik7XG59KTtcbnZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG52YXIgbW9kdWxlVG9IYW5kbGVyTWFwcGluZyA9IHtcblx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L3JlYWN0L3JlYWN0P2U0OWVcIjogZnVuY3Rpb24oKSB7IHJldHVybiBsb2FkRmFsbGJhY2soXCJkZWZhdWx0XCIsIFwicmVhY3RcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oLyohIHJlYWN0ICovIFwiLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanNcIik7IH07IH0pOyB9LFxuXHRcIndlYnBhY2svc2hhcmluZy9jb25zdW1lL2RlZmF1bHQvcmVhY3QvcmVhY3Q/YjdkZFwiOiBmdW5jdGlvbigpIHsgcmV0dXJuIGxvYWRGYWxsYmFjayhcImRlZmF1bHRcIiwgXCJyZWFjdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgcmVhY3QgKi8gXCIuLi90cmFpbmluZy1zaGFyZWQvbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzXCIpOyB9OyB9KTsgfVxufTtcbnZhciBpbml0aWFsQ29uc3VtZXMgPSBbXCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L3JlYWN0L3JlYWN0P2U0OWVcIixcIndlYnBhY2svc2hhcmluZy9jb25zdW1lL2RlZmF1bHQvcmVhY3QvcmVhY3Q/YjdkZFwiXTtcbmluaXRpYWxDb25zdW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGlkKSB7XG5cdF9fd2VicGFja19yZXF1aXJlX18ubVtpZF0gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0XHQvLyBIYW5kbGUgY2FzZSB3aGVuIG1vZHVsZSBpcyB1c2VkIHN5bmNcblx0XHRpbnN0YWxsZWRNb2R1bGVzW2lkXSA9IDA7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uY1tpZF07XG5cdFx0dmFyIGZhY3RvcnkgPSBtb2R1bGVUb0hhbmRsZXJNYXBwaW5nW2lkXSgpO1xuXHRcdGlmKHR5cGVvZiBmYWN0b3J5ICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcihcIlNoYXJlZCBtb2R1bGUgaXMgbm90IGF2YWlsYWJsZSBmb3IgZWFnZXIgY29uc3VtcHRpb246IFwiICsgaWQpO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHR9XG59KTtcbnZhciBjaHVua01hcHBpbmcgPSB7fTtcbl9fd2VicGFja19yZXF1aXJlX18uZi5jb25zdW1lcyA9IGZ1bmN0aW9uKGNodW5rSWQsIHByb21pc2VzKSB7XG5cdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhjaHVua01hcHBpbmcsIGNodW5rSWQpKSB7XG5cdFx0Y2h1bmtNYXBwaW5nW2NodW5rSWRdLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRNb2R1bGVzLCBpZCkpIHJldHVybiBwcm9taXNlcy5wdXNoKGluc3RhbGxlZE1vZHVsZXNbaWRdKTtcblx0XHRcdHZhciBvbkZhY3RvcnkgPSBmdW5jdGlvbihmYWN0b3J5KSB7XG5cdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbaWRdID0gMDtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW2lkXSA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRcdFx0XHRcdGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbaWRdO1xuXHRcdFx0XHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0dmFyIG9uRXJyb3IgPSBmdW5jdGlvbihlcnJvcikge1xuXHRcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1tpZF07XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVtpZF0gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0XHRcdFx0XHRkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5jW2lkXTtcblx0XHRcdFx0XHR0aHJvdyBlcnJvcjtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhciBwcm9taXNlID0gbW9kdWxlVG9IYW5kbGVyTWFwcGluZ1tpZF0oKTtcblx0XHRcdFx0aWYocHJvbWlzZS50aGVuKSB7XG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRNb2R1bGVzW2lkXSA9IHByb21pc2UudGhlbihvbkZhY3RvcnkpLmNhdGNoKG9uRXJyb3IpKTtcblx0XHRcdFx0fSBlbHNlIG9uRmFjdG9yeShwcm9taXNlKTtcblx0XHRcdH0gY2F0Y2goZSkgeyBvbkVycm9yKGUpOyB9XG5cdFx0fSk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6IiJ9