(function() {
var exports = {};
exports.id = "pages/[...slug]";
exports.ids = ["pages/[...slug]"];
exports.modules = {

/***/ "./src/pages/[...slug].js":
/*!********************************!*\
  !*** ./src/pages/[...slug].js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var module_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! module-shared */ "../training-shared/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,module_shared__WEBPACK_IMPORTED_MODULE_0__.createFederatedCatchAll)(["restaurant"]));

/***/ }),

/***/ "../training-shared/index.js":
/*!***********************************!*\
  !*** ../training-shared/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchFederatedPage": function() { return /* binding */ matchFederatedPage; },
/* harmony export */   "createFederatedCatchAll": function() { return /* binding */ createFederatedCatchAll; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var feather_route_matcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! feather-route-matcher */ "../training-shared/node_modules/feather-route-matcher/feather-route-matcher.js");
/* harmony import */ var feather_route_matcher__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(feather_route_matcher__WEBPACK_IMPORTED_MODULE_1__);



async function matchFederatedPage(remotes, path) {
    const maps = await Promise.all(
        remotes.map((remote) =>
            window[remote]
                .get("./pages-map")
                .then((factory) => {
                    console.log(({remote, config: factory().default}))
                    return ({remote, config: factory().default})
                })
                .catch(() => null)
        )
    );

    const config = {};

    for (let map of maps) {
        if (!map) continue;

        for (let [path, mod] of Object.entries(map.config)) {
            config[path] = {
                remote: map.remote,
                module: mod,
            };
        }
    }

    const matcher = feather_route_matcher__WEBPACK_IMPORTED_MODULE_1___default()(config);
    const match = matcher(path);

    return match;
}

function createFederatedCatchAll(remotes) {
    console.log(remotes)
    const FederatedCatchAll = (initialProps) => {
        const [lazyProps, setProps] = react__WEBPACK_IMPORTED_MODULE_0___default().useState({});

        const { FederatedPage, render404, renderError, needsReload, ...props } = {
            ...lazyProps,
            ...initialProps,
        };
        console.log("FederatedPage : ",FederatedPage);
        console.log("Render404 : ",render404)
        console.log("RenderError : ", renderError)
        console.log("needsReload : ", needsReload)
        react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(async () => {
            if (needsReload) {
                const federatedProps = await FederatedCatchAll.getInitialProps(props);
                setProps(federatedProps);
                console.log(lazyProps);
            }
        }, []);

        if (render404) {
            // TODO: Render 404 page
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {}, "404 Not Found");
        }
        if (renderError) {
            // TODO: Render error page
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {}, "Oops, something went wrong.");
        }

        if (FederatedPage) {
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FederatedPage, props);
        }

        return null;
    };

    FederatedCatchAll.getInitialProps = async (ctx) => {
        const { err, req, res, AppTree, ...props } = ctx;

        if (err) {
            // TODO: Run getInitialProps for error page
            return { renderError: true, ...props };
        }

        if (true) {
            return { needsReload: true, ...props };
        }

        try {
            const matchedPage = await matchFederatedPage(remotes, ctx.asPath);
            console.log("matchedPage", matchedPage);

            const remote = matchedPage?.value?.remote;
            const mod = matchedPage?.value?.module;

            if (!remote || !mod) {
                // TODO: Run getInitialProps for 404 page
                return { render404: true, ...props };
            }

            console.log("loading exposed module", mod, "from remote", remote);
            try {
                if (!window[remote].__initialized) {
                    window[remote].__initialized = true;
                    await window[remote].init(__webpack_require__.S.default);
                }
            } catch (initErr) {
                console.log("initErr", initErr);
            }

            const FederatedPage = await window[remote]
                .get(mod)
                .then((factory) => factory().default);
            console.log("FederatedPage", FederatedPage);
            if (!FederatedPage) {
                // TODO: Run getInitialProps for 404 page
                return { render404: true, ...props };
            }

            const modifiedContext = {
                ...ctx,
                query: matchedPage.params,
            };
            const federatedPageProps =
                (await FederatedPage.getInitialProps?.(modifiedContext)) || {};
            return { ...federatedPageProps, FederatedPage };
        } catch (err) {
            console.log("err", err);
            // TODO: Run getInitialProps for error page
            return { renderError: true, ...props };
        }
    };

    return FederatedCatchAll;
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-training-shared_node_modules_feather-route-matcher_feather-route-matcher_js"], function() { return __webpack_exec__("./src/pages/[...slug].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmFpbmluZy1mcm9udC8uL3NyYy9wYWdlcy9bLi4uc2x1Z10uanMiLCJ3ZWJwYWNrOi8vdHJhaW5pbmctZnJvbnQvLi4vdHJhaW5pbmctc2hhcmVkL2luZGV4LmpzIiwid2VicGFjazovL3RyYWluaW5nLWZyb250L2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJjcmVhdGVGZWRlcmF0ZWRDYXRjaEFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSwrREFBZUEsc0VBQXVCLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBdEMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGMEI7QUFDd0I7O0FBRTNDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxrQ0FBa0M7QUFDcEUsNkJBQTZCLGtDQUFrQztBQUMvRCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDREQUFhO0FBQ2pDOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0Esc0NBQXNDLHFEQUFjLEdBQUc7O0FBRXZELGVBQWUsK0RBQStEO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBZTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsbUJBQW1CLDBEQUFtQixTQUFTO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwREFBbUIsU0FBUztBQUMvQzs7QUFFQTtBQUNBLG1CQUFtQiwwREFBbUI7QUFDdEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGVBQWUsbUNBQW1DOztBQUVsRDtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVBLFlBQVksSUFBZ0I7QUFDNUIsb0JBQW9CO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMscUJBQXdCO0FBQ3RFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixTQUFTO0FBQ1Q7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUNsSUEsbUMiLCJmaWxlIjoicGFnZXMvWy4uLnNsdWddLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRmVkZXJhdGVkQ2F0Y2hBbGwgfSBmcm9tIFwibW9kdWxlLXNoYXJlZFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGZWRlcmF0ZWRDYXRjaEFsbChbXCJyZXN0YXVyYW50XCJdKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY3JlYXRlTWF0Y2hlciBmcm9tIFwiZmVhdGhlci1yb3V0ZS1tYXRjaGVyXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWF0Y2hGZWRlcmF0ZWRQYWdlKHJlbW90ZXMsIHBhdGgpIHtcclxuICAgIGNvbnN0IG1hcHMgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgICByZW1vdGVzLm1hcCgocmVtb3RlKSA9PlxyXG4gICAgICAgICAgICB3aW5kb3dbcmVtb3RlXVxyXG4gICAgICAgICAgICAgICAgLmdldChcIi4vcGFnZXMtbWFwXCIpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoZmFjdG9yeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCh7cmVtb3RlLCBjb25maWc6IGZhY3RvcnkoKS5kZWZhdWx0fSkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh7cmVtb3RlLCBjb25maWc6IGZhY3RvcnkoKS5kZWZhdWx0fSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4gbnVsbClcclxuICAgICAgICApXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGNvbmZpZyA9IHt9O1xyXG5cclxuICAgIGZvciAobGV0IG1hcCBvZiBtYXBzKSB7XHJcbiAgICAgICAgaWYgKCFtYXApIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBbcGF0aCwgbW9kXSBvZiBPYmplY3QuZW50cmllcyhtYXAuY29uZmlnKSkge1xyXG4gICAgICAgICAgICBjb25maWdbcGF0aF0gPSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdGU6IG1hcC5yZW1vdGUsXHJcbiAgICAgICAgICAgICAgICBtb2R1bGU6IG1vZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWF0Y2hlciA9IGNyZWF0ZU1hdGNoZXIoY29uZmlnKTtcclxuICAgIGNvbnN0IG1hdGNoID0gbWF0Y2hlcihwYXRoKTtcclxuXHJcbiAgICByZXR1cm4gbWF0Y2g7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGZWRlcmF0ZWRDYXRjaEFsbChyZW1vdGVzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhyZW1vdGVzKVxyXG4gICAgY29uc3QgRmVkZXJhdGVkQ2F0Y2hBbGwgPSAoaW5pdGlhbFByb3BzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgW2xhenlQcm9wcywgc2V0UHJvcHNdID0gUmVhY3QudXNlU3RhdGUoe30pO1xyXG5cclxuICAgICAgICBjb25zdCB7IEZlZGVyYXRlZFBhZ2UsIHJlbmRlcjQwNCwgcmVuZGVyRXJyb3IsIG5lZWRzUmVsb2FkLCAuLi5wcm9wcyB9ID0ge1xyXG4gICAgICAgICAgICAuLi5sYXp5UHJvcHMsXHJcbiAgICAgICAgICAgIC4uLmluaXRpYWxQcm9wcyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmVkZXJhdGVkUGFnZSA6IFwiLEZlZGVyYXRlZFBhZ2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVuZGVyNDA0IDogXCIscmVuZGVyNDA0KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVuZGVyRXJyb3IgOiBcIiwgcmVuZGVyRXJyb3IpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuZWVkc1JlbG9hZCA6IFwiLCBuZWVkc1JlbG9hZClcclxuICAgICAgICBSZWFjdC51c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobmVlZHNSZWxvYWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZlZGVyYXRlZFByb3BzID0gYXdhaXQgRmVkZXJhdGVkQ2F0Y2hBbGwuZ2V0SW5pdGlhbFByb3BzKHByb3BzKTtcclxuICAgICAgICAgICAgICAgIHNldFByb3BzKGZlZGVyYXRlZFByb3BzKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxhenlQcm9wcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbXSk7XHJcblxyXG4gICAgICAgIGlmIChyZW5kZXI0MDQpIHtcclxuICAgICAgICAgICAgLy8gVE9ETzogUmVuZGVyIDQwNCBwYWdlXHJcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwge30sIFwiNDA0IE5vdCBGb3VuZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlbmRlckVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IFJlbmRlciBlcnJvciBwYWdlXHJcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwge30sIFwiT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKEZlZGVyYXRlZFBhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmVkZXJhdGVkUGFnZSwgcHJvcHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIEZlZGVyYXRlZENhdGNoQWxsLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGVyciwgcmVxLCByZXMsIEFwcFRyZWUsIC4uLnByb3BzIH0gPSBjdHg7XHJcblxyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgLy8gVE9ETzogUnVuIGdldEluaXRpYWxQcm9wcyBmb3IgZXJyb3IgcGFnZVxyXG4gICAgICAgICAgICByZXR1cm4geyByZW5kZXJFcnJvcjogdHJ1ZSwgLi4ucHJvcHMgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghcHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IG5lZWRzUmVsb2FkOiB0cnVlLCAuLi5wcm9wcyB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hlZFBhZ2UgPSBhd2FpdCBtYXRjaEZlZGVyYXRlZFBhZ2UocmVtb3RlcywgY3R4LmFzUGF0aCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibWF0Y2hlZFBhZ2VcIiwgbWF0Y2hlZFBhZ2UpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVtb3RlID0gbWF0Y2hlZFBhZ2U/LnZhbHVlPy5yZW1vdGU7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZCA9IG1hdGNoZWRQYWdlPy52YWx1ZT8ubW9kdWxlO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFyZW1vdGUgfHwgIW1vZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogUnVuIGdldEluaXRpYWxQcm9wcyBmb3IgNDA0IHBhZ2VcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IHJlbmRlcjQwNDogdHJ1ZSwgLi4ucHJvcHMgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2FkaW5nIGV4cG9zZWQgbW9kdWxlXCIsIG1vZCwgXCJmcm9tIHJlbW90ZVwiLCByZW1vdGUpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF3aW5kb3dbcmVtb3RlXS5fX2luaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93W3JlbW90ZV0uX19pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgd2luZG93W3JlbW90ZV0uaW5pdChfX3dlYnBhY2tfc2hhcmVfc2NvcGVzX18uZGVmYXVsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGluaXRFcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdEVyclwiLCBpbml0RXJyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgRmVkZXJhdGVkUGFnZSA9IGF3YWl0IHdpbmRvd1tyZW1vdGVdXHJcbiAgICAgICAgICAgICAgICAuZ2V0KG1vZClcclxuICAgICAgICAgICAgICAgIC50aGVuKChmYWN0b3J5KSA9PiBmYWN0b3J5KCkuZGVmYXVsdCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmVkZXJhdGVkUGFnZVwiLCBGZWRlcmF0ZWRQYWdlKTtcclxuICAgICAgICAgICAgaWYgKCFGZWRlcmF0ZWRQYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBSdW4gZ2V0SW5pdGlhbFByb3BzIGZvciA0MDQgcGFnZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgcmVuZGVyNDA0OiB0cnVlLCAuLi5wcm9wcyB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtb2RpZmllZENvbnRleHQgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5jdHgsXHJcbiAgICAgICAgICAgICAgICBxdWVyeTogbWF0Y2hlZFBhZ2UucGFyYW1zLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBmZWRlcmF0ZWRQYWdlUHJvcHMgPVxyXG4gICAgICAgICAgICAgICAgKGF3YWl0IEZlZGVyYXRlZFBhZ2UuZ2V0SW5pdGlhbFByb3BzPy4obW9kaWZpZWRDb250ZXh0KSkgfHwge307XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLmZlZGVyYXRlZFBhZ2VQcm9wcywgRmVkZXJhdGVkUGFnZSB9O1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVyclwiLCBlcnIpO1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBSdW4gZ2V0SW5pdGlhbFByb3BzIGZvciBlcnJvciBwYWdlXHJcbiAgICAgICAgICAgIHJldHVybiB7IHJlbmRlckVycm9yOiB0cnVlLCAuLi5wcm9wcyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIEZlZGVyYXRlZENhdGNoQWxsO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=