(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["polyfills"],{

/***/ "./node_modules/next/dist/client/polyfills.js":
/*!****************************************************!*\
  !*** ./node_modules/next/dist/client/polyfills.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


__webpack_require__(/*! next/dist/build/polyfills/polyfill-nomodule */ "./node_modules/next/dist/build/polyfills/polyfill-nomodule.js");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/polyfill-nomodule.js":
/*!*********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/polyfill-nomodule.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function e(t){var e={exports:{}};return t(e,e.exports),e.exports}var r=function(t){return t&&t.Math==Math&&t},n=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof t&&t)||Function("return this")(),o=function(t){try{return!!t()}catch(t){return!0}},i=!o(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}),a={}.propertyIsEnumerable,u=Object.getOwnPropertyDescriptor,s={f:u&&!a.call({1:2},1)?function(t){var e=u(this,t);return!!e&&e.enumerable}:a},c=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},f={}.toString,l=function(t){return f.call(t).slice(8,-1)},h="".split,p=o(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==l(t)?h.call(t,""):Object(t)}:Object,d=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},v=function(t){return p(d(t))},g=function(t){return"object"==typeof t?null!==t:"function"==typeof t},y=function(t,e){if(!g(t))return t;var r,n;if(e&&"function"==typeof(r=t.toString)&&!g(n=r.call(t)))return n;if("function"==typeof(r=t.valueOf)&&!g(n=r.call(t)))return n;if(!e&&"function"==typeof(r=t.toString)&&!g(n=r.call(t)))return n;throw TypeError("Can't convert object to primitive value")},m={}.hasOwnProperty,b=function(t,e){return m.call(t,e)},w=n.document,S=g(w)&&g(w.createElement),E=function(t){return S?w.createElement(t):{}},x=!i&&!o(function(){return 7!=Object.defineProperty(E("div"),"a",{get:function(){return 7}}).a}),A=Object.getOwnPropertyDescriptor,O={f:i?A:function(t,e){if(t=v(t),e=y(e,!0),x)try{return A(t,e)}catch(t){}if(b(t,e))return c(!s.f.call(t,e),t[e])}},R=function(t){if(!g(t))throw TypeError(String(t)+" is not an object");return t},j=Object.defineProperty,P={f:i?j:function(t,e,r){if(R(t),e=y(e,!0),R(r),x)try{return j(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},I=i?function(t,e,r){return P.f(t,e,c(1,r))}:function(t,e,r){return t[e]=r,t},T=function(t,e){try{I(n,t,e)}catch(r){n[t]=e}return e},k="__core-js_shared__",L=n[k]||T(k,{}),U=Function.toString;"function"!=typeof L.inspectSource&&(L.inspectSource=function(t){return U.call(t)});var M,_,N,C=L.inspectSource,F=n.WeakMap,B="function"==typeof F&&/native code/.test(C(F)),D=!1,q=e(function(t){(t.exports=function(t,e){return L[t]||(L[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})}),z=0,W=Math.random(),K=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++z+W).toString(36)},G=q("keys"),$=function(t){return G[t]||(G[t]=K(t))},V={};if(B){var H=new(0,n.WeakMap),X=H.get,Y=H.has,J=H.set;M=function(t,e){return J.call(H,t,e),e},_=function(t){return X.call(H,t)||{}},N=function(t){return Y.call(H,t)}}else{var Q=$("state");V[Q]=!0,M=function(t,e){return I(t,Q,e),e},_=function(t){return b(t,Q)?t[Q]:{}},N=function(t){return b(t,Q)}}var Z,tt={set:M,get:_,has:N,enforce:function(t){return N(t)?_(t):M(t,{})},getterFor:function(t){return function(e){var r;if(!g(e)||(r=_(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}},et=e(function(t){var e=tt.get,r=tt.enforce,o=String(String).split("String");(t.exports=function(t,e,i,a){var u=!!a&&!!a.unsafe,s=!!a&&!!a.enumerable,c=!!a&&!!a.noTargetGet;"function"==typeof i&&("string"!=typeof e||b(i,"name")||I(i,"name",e),r(i).source=o.join("string"==typeof e?e:"")),t!==n?(u?!c&&t[e]&&(s=!0):delete t[e],s?t[e]=i:I(t,e,i)):s?t[e]=i:T(e,i)})(Function.prototype,"toString",function(){return"function"==typeof this&&e(this).source||C(this)})}),rt=n,nt=function(t){return"function"==typeof t?t:void 0},ot=function(t,e){return arguments.length<2?nt(rt[t])||nt(n[t]):rt[t]&&rt[t][e]||n[t]&&n[t][e]},it=Math.ceil,at=Math.floor,ut=function(t){return isNaN(t=+t)?0:(t>0?at:it)(t)},st=Math.min,ct=function(t){return t>0?st(ut(t),9007199254740991):0},ft=Math.max,lt=Math.min,ht=function(t,e){var r=ut(t);return r<0?ft(r+e,0):lt(r,e)},pt=function(t){return function(e,r,n){var o,i=v(e),a=ct(i.length),u=ht(n,a);if(t&&r!=r){for(;a>u;)if((o=i[u++])!=o)return!0}else for(;a>u;u++)if((t||u in i)&&i[u]===r)return t||u||0;return!t&&-1}},dt={includes:pt(!0),indexOf:pt(!1)},vt=dt.indexOf,gt=function(t,e){var r,n=v(t),o=0,i=[];for(r in n)!b(V,r)&&b(n,r)&&i.push(r);for(;e.length>o;)b(n,r=e[o++])&&(~vt(i,r)||i.push(r));return i},yt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],mt=yt.concat("length","prototype"),bt={f:Object.getOwnPropertyNames||function(t){return gt(t,mt)}},wt={f:Object.getOwnPropertySymbols},St=ot("Reflect","ownKeys")||function(t){var e=bt.f(R(t)),r=wt.f;return r?e.concat(r(t)):e},Et=function(t,e){for(var r=St(e),n=P.f,o=O.f,i=0;i<r.length;i++){var a=r[i];b(t,a)||n(t,a,o(e,a))}},xt=/#|\.prototype\./,At=function(t,e){var r=Rt[Ot(t)];return r==Pt||r!=jt&&("function"==typeof e?o(e):!!e)},Ot=At.normalize=function(t){return String(t).replace(xt,".").toLowerCase()},Rt=At.data={},jt=At.NATIVE="N",Pt=At.POLYFILL="P",It=At,Tt=O.f,kt=function(t,e){var r,o,i,a,u,s=t.target,c=t.global,f=t.stat;if(r=c?n:f?n[s]||T(s,{}):(n[s]||{}).prototype)for(o in e){if(a=e[o],i=t.noTargetGet?(u=Tt(r,o))&&u.value:r[o],!It(c?o:s+(f?".":"#")+o,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;Et(a,i)}(t.sham||i&&i.sham)&&I(a,"sham",!0),et(r,o,a,t)}},Lt=function(t){return Object(d(t))},Ut=Math.min,Mt=[].copyWithin||function(t,e){var r=Lt(this),n=ct(r.length),o=ht(t,n),i=ht(e,n),a=arguments.length>2?arguments[2]:void 0,u=Ut((void 0===a?n:ht(a,n))-i,n-o),s=1;for(i<o&&o<i+u&&(s=-1,i+=u-1,o+=u-1);u-- >0;)i in r?r[o]=r[i]:delete r[o],o+=s,i+=s;return r},_t=!!Object.getOwnPropertySymbols&&!o(function(){return!String(Symbol())}),Nt=_t&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ct=q("wks"),Ft=n.Symbol,Bt=Nt?Ft:Ft&&Ft.withoutSetter||K,Dt=function(t){return b(Ct,t)||(Ct[t]=_t&&b(Ft,t)?Ft[t]:Bt("Symbol."+t)),Ct[t]},qt=Object.keys||function(t){return gt(t,yt)},zt=i?Object.defineProperties:function(t,e){R(t);for(var r,n=qt(e),o=n.length,i=0;o>i;)P.f(t,r=n[i++],e[r]);return t},Wt=ot("document","documentElement"),Kt=$("IE_PROTO"),Gt=function(){},$t=function(t){return"<script>"+t+"<\/script>"},Vt=function(){try{Z=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;Vt=Z?function(t){t.write($t("")),t.close();var e=t.parentWindow.Object;return t=null,e}(Z):((e=E("iframe")).style.display="none",Wt.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write($t("document.F=Object")),t.close(),t.F);for(var r=yt.length;r--;)delete Vt.prototype[yt[r]];return Vt()};V[Kt]=!0;var Ht=Object.create||function(t,e){var r;return null!==t?(Gt.prototype=R(t),r=new Gt,Gt.prototype=null,r[Kt]=t):r=Vt(),void 0===e?r:zt(r,e)},Xt=Dt("unscopables"),Yt=Array.prototype;null==Yt[Xt]&&P.f(Yt,Xt,{configurable:!0,value:Ht(null)});var Jt=function(t){Yt[Xt][t]=!0};kt({target:"Array",proto:!0},{copyWithin:Mt}),Jt("copyWithin");var Qt=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},Zt=function(t,e,r){if(Qt(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}},te=Function.call,ee=function(t,e,r){return Zt(te,n[t].prototype[e],r)};ee("Array","copyWithin"),kt({target:"Array",proto:!0},{fill:function(t){for(var e=Lt(this),r=ct(e.length),n=arguments.length,o=ht(n>1?arguments[1]:void 0,r),i=n>2?arguments[2]:void 0,a=void 0===i?r:ht(i,r);a>o;)e[o++]=t;return e}}),Jt("fill"),ee("Array","fill");var re=Array.isArray||function(t){return"Array"==l(t)},ne=Dt("species"),oe=function(t,e){var r;return re(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!re(r.prototype)?g(r)&&null===(r=r[ne])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)},ie=[].push,ae=function(t){var e=1==t,r=2==t,n=3==t,o=4==t,i=6==t,a=5==t||i;return function(u,s,c,f){for(var l,h,d=Lt(u),v=p(d),g=Zt(s,c,3),y=ct(v.length),m=0,b=f||oe,w=e?b(u,y):r?b(u,0):void 0;y>m;m++)if((a||m in v)&&(h=g(l=v[m],m,d),t))if(e)w[m]=h;else if(h)switch(t){case 3:return!0;case 5:return l;case 6:return m;case 2:ie.call(w,l)}else if(o)return!1;return i?-1:n||o?o:w}},ue={forEach:ae(0),map:ae(1),filter:ae(2),some:ae(3),every:ae(4),find:ae(5),findIndex:ae(6)},se=Object.defineProperty,ce={},fe=function(t){throw t},le=function(t,e){if(b(ce,t))return ce[t];e||(e={});var r=[][t],n=!!b(e,"ACCESSORS")&&e.ACCESSORS,a=b(e,0)?e[0]:fe,u=b(e,1)?e[1]:void 0;return ce[t]=!!r&&!o(function(){if(n&&!i)return!0;var t={length:-1};n?se(t,1,{enumerable:!0,get:fe}):t[1]=1,r.call(t,a,u)})},he=ue.find,pe="find",de=!0,ve=le(pe);pe in[]&&Array(1).find(function(){de=!1}),kt({target:"Array",proto:!0,forced:de||!ve},{find:function(t){return he(this,t,arguments.length>1?arguments[1]:void 0)}}),Jt(pe),ee("Array","find");var ge=ue.findIndex,ye="findIndex",me=!0,be=le(ye);ye in[]&&Array(1).findIndex(function(){me=!1}),kt({target:"Array",proto:!0,forced:me||!be},{findIndex:function(t){return ge(this,t,arguments.length>1?arguments[1]:void 0)}}),Jt(ye),ee("Array","findIndex");var we=function t(e,r,n,o,i,a,u,s){for(var c,f=i,l=0,h=!!u&&Zt(u,s,3);l<o;){if(l in n){if(c=h?h(n[l],l,r):n[l],a>0&&re(c))f=t(e,r,c,ct(c.length),f,a-1)-1;else{if(f>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[f]=c}f++}l++}return f};kt({target:"Array",proto:!0},{flatMap:function(t){var e,r=Lt(this),n=ct(r.length);return Qt(t),(e=oe(r,0)).length=we(e,r,r,n,0,1,t,arguments.length>1?arguments[1]:void 0),e}}),Jt("flatMap"),ee("Array","flatMap"),kt({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=Lt(this),r=ct(e.length),n=oe(e,0);return n.length=we(n,e,e,r,0,void 0===t?1:ut(t)),n}}),Jt("flat"),ee("Array","flat");var Se,Ee,xe,Ae=function(t){return function(e,r){var n,o,i=String(d(e)),a=ut(r),u=i.length;return a<0||a>=u?t?"":void 0:(n=i.charCodeAt(a))<55296||n>56319||a+1===u||(o=i.charCodeAt(a+1))<56320||o>57343?t?i.charAt(a):n:t?i.slice(a,a+2):o-56320+(n-55296<<10)+65536}},Oe={codeAt:Ae(!1),charAt:Ae(!0)},Re=!o(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}),je=$("IE_PROTO"),Pe=Object.prototype,Ie=Re?Object.getPrototypeOf:function(t){return t=Lt(t),b(t,je)?t[je]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Pe:null},Te=Dt("iterator"),ke=!1;[].keys&&("next"in(xe=[].keys())?(Ee=Ie(Ie(xe)))!==Object.prototype&&(Se=Ee):ke=!0),null==Se&&(Se={}),b(Se,Te)||I(Se,Te,function(){return this});var Le={IteratorPrototype:Se,BUGGY_SAFARI_ITERATORS:ke},Ue=P.f,Me=Dt("toStringTag"),_e=function(t,e,r){t&&!b(t=r?t:t.prototype,Me)&&Ue(t,Me,{configurable:!0,value:e})},Ne={},Ce=Le.IteratorPrototype,Fe=function(){return this},Be=function(t,e,r){var n=e+" Iterator";return t.prototype=Ht(Ce,{next:c(1,r)}),_e(t,n,!1),Ne[n]=Fe,t},De=function(t){if(!g(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t},qe=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return R(r),De(n),e?t.call(r,n):r.__proto__=n,r}}():void 0),ze=Le.IteratorPrototype,We=Le.BUGGY_SAFARI_ITERATORS,Ke=Dt("iterator"),Ge="keys",$e="values",Ve="entries",He=function(){return this},Xe=function(t,e,r,n,o,i,a){Be(r,e,n);var u,s,c,f=function(t){if(t===o&&v)return v;if(!We&&t in p)return p[t];switch(t){case Ge:case $e:case Ve:return function(){return new r(this,t)}}return function(){return new r(this)}},l=e+" Iterator",h=!1,p=t.prototype,d=p[Ke]||p["@@iterator"]||o&&p[o],v=!We&&d||f(o),g="Array"==e&&p.entries||d;if(g&&(u=Ie(g.call(new t)),ze!==Object.prototype&&u.next&&(Ie(u)!==ze&&(qe?qe(u,ze):"function"!=typeof u[Ke]&&I(u,Ke,He)),_e(u,l,!0))),o==$e&&d&&d.name!==$e&&(h=!0,v=function(){return d.call(this)}),p[Ke]!==v&&I(p,Ke,v),Ne[e]=v,o)if(s={values:f($e),keys:i?v:f(Ge),entries:f(Ve)},a)for(c in s)(We||h||!(c in p))&&et(p,c,s[c]);else kt({target:e,proto:!0,forced:We||h},s);return s},Ye=Oe.charAt,Je="String Iterator",Qe=tt.set,Ze=tt.getterFor(Je);Xe(String,"String",function(t){Qe(this,{type:Je,string:String(t),index:0})},function(){var t,e=Ze(this),r=e.string,n=e.index;return n>=r.length?{value:void 0,done:!0}:(t=Ye(r,n),e.index+=t.length,{value:t,done:!1})});var tr=function(t,e,r,n){try{return n?e(R(r)[0],r[1]):e(r)}catch(e){var o=t.return;throw void 0!==o&&R(o.call(t)),e}},er=Dt("iterator"),rr=Array.prototype,nr=function(t){return void 0!==t&&(Ne.Array===t||rr[er]===t)},or=function(t,e,r){var n=y(e);n in t?P.f(t,n,c(0,r)):t[n]=r},ir={};ir[Dt("toStringTag")]="z";var ar="[object z]"===String(ir),ur=Dt("toStringTag"),sr="Arguments"==l(function(){return arguments}()),cr=ar?l:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),ur))?r:sr?l(e):"Object"==(n=l(e))&&"function"==typeof e.callee?"Arguments":n},fr=Dt("iterator"),lr=function(t){if(null!=t)return t[fr]||t["@@iterator"]||Ne[cr(t)]},hr=function(t){var e,r,n,o,i,a,u=Lt(t),s="function"==typeof this?this:Array,c=arguments.length,f=c>1?arguments[1]:void 0,l=void 0!==f,h=lr(u),p=0;if(l&&(f=Zt(f,c>2?arguments[2]:void 0,2)),null==h||s==Array&&nr(h))for(r=new s(e=ct(u.length));e>p;p++)a=l?f(u[p],p):u[p],or(r,p,a);else for(i=(o=h.call(u)).next,r=new s;!(n=i.call(o)).done;p++)a=l?tr(o,f,[n.value,p],!0):n.value,or(r,p,a);return r.length=p,r},pr=Dt("iterator"),dr=!1;try{var vr=0,gr={next:function(){return{done:!!vr++}},return:function(){dr=!0}};gr[pr]=function(){return this},Array.from(gr,function(){throw 2})}catch(t){}var yr=function(t,e){if(!e&&!dr)return!1;var r=!1;try{var n={};n[pr]=function(){return{next:function(){return{done:r=!0}}}},t(n)}catch(t){}return r},mr=!yr(function(t){Array.from(t)});kt({target:"Array",stat:!0,forced:mr},{from:hr});var br=dt.includes,wr=le("indexOf",{ACCESSORS:!0,1:0});kt({target:"Array",proto:!0,forced:!wr},{includes:function(t){return br(this,t,arguments.length>1?arguments[1]:void 0)}}),Jt("includes"),ee("Array","includes");var Sr="Array Iterator",Er=tt.set,xr=tt.getterFor(Sr),Ar=Xe(Array,"Array",function(t,e){Er(this,{type:Sr,target:v(t),index:0,kind:e})},function(){var t=xr(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}},"values");Ne.Arguments=Ne.Array,Jt("keys"),Jt("values"),Jt("entries"),ee("Array","values");var Or=o(function(){function t(){}return!(Array.of.call(t)instanceof t)});kt({target:"Array",stat:!0,forced:Or},{of:function(){for(var t=0,e=arguments.length,r=new("function"==typeof this?this:Array)(e);e>t;)or(r,t,arguments[t++]);return r.length=e,r}});var Rr=Dt("hasInstance"),jr=Function.prototype;Rr in jr||P.f(jr,Rr,{value:function(t){if("function"!=typeof this||!g(t))return!1;if(!g(this.prototype))return t instanceof this;for(;t=Ie(t);)if(this.prototype===t)return!0;return!1}}),Dt("hasInstance");var Pr=Function.prototype,Ir=Pr.toString,Tr=/^\s*function ([^ (]*)/,kr="name";i&&!(kr in Pr)&&(0,P.f)(Pr,kr,{configurable:!0,get:function(){try{return Ir.call(this).match(Tr)[1]}catch(t){return""}}});var Lr=!o(function(){return Object.isExtensible(Object.preventExtensions({}))}),Ur=e(function(t){var e=P.f,r=K("meta"),n=0,o=Object.isExtensible||function(){return!0},i=function(t){e(t,r,{value:{objectID:"O"+ ++n,weakData:{}}})},a=t.exports={REQUIRED:!1,fastKey:function(t,e){if(!g(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!b(t,r)){if(!o(t))return"F";if(!e)return"E";i(t)}return t[r].objectID},getWeakData:function(t,e){if(!b(t,r)){if(!o(t))return!0;if(!e)return!1;i(t)}return t[r].weakData},onFreeze:function(t){return Lr&&a.REQUIRED&&o(t)&&!b(t,r)&&i(t),t}};V[r]=!0}),Mr=e(function(t){var e=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,r,n,o,i){var a,u,s,c,f,l,h,p=Zt(r,n,o?2:1);if(i)a=t;else{if("function"!=typeof(u=lr(t)))throw TypeError("Target is not iterable");if(nr(u)){for(s=0,c=ct(t.length);c>s;s++)if((f=o?p(R(h=t[s])[0],h[1]):p(t[s]))&&f instanceof e)return f;return new e(!1)}a=u.call(t)}for(l=a.next;!(h=l.call(a)).done;)if("object"==typeof(f=tr(a,p,h.value,o))&&f&&f instanceof e)return f;return new e(!1)}).stop=function(t){return new e(!0,t)}}),_r=function(t,e,r){if(!(t instanceof e))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation");return t},Nr=function(t,e,r){var n,o;return qe&&"function"==typeof(n=e.constructor)&&n!==r&&g(o=n.prototype)&&o!==r.prototype&&qe(t,o),t},Cr=function(t,e,r){var i=-1!==t.indexOf("Map"),a=-1!==t.indexOf("Weak"),u=i?"set":"add",s=n[t],c=s&&s.prototype,f=s,l={},h=function(t){var e=c[t];et(c,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(a&&!g(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return a&&!g(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(a&&!g(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(It(t,"function"!=typeof s||!(a||c.forEach&&!o(function(){(new s).entries().next()}))))f=r.getConstructor(e,t,i,u),Ur.REQUIRED=!0;else if(It(t,!0)){var p=new f,d=p[u](a?{}:-0,1)!=p,v=o(function(){p.has(1)}),y=yr(function(t){new s(t)}),m=!a&&o(function(){for(var t=new s,e=5;e--;)t[u](e,e);return!t.has(-0)});y||((f=e(function(e,r){_r(e,f,t);var n=Nr(new s,e,f);return null!=r&&Mr(r,n[u],n,i),n})).prototype=c,c.constructor=f),(v||m)&&(h("delete"),h("has"),i&&h("get")),(m||d)&&h(u),a&&c.clear&&delete c.clear}return l[t]=f,kt({global:!0,forced:f!=s},l),_e(f,t),a||r.setStrong(f,t,i),f},Fr=function(t,e,r){for(var n in e)et(t,n,e[n],r);return t},Br=Dt("species"),Dr=function(t){var e=ot(t);i&&e&&!e[Br]&&(0,P.f)(e,Br,{configurable:!0,get:function(){return this}})},qr=P.f,zr=Ur.fastKey,Wr=tt.set,Kr=tt.getterFor,Gr={getConstructor:function(t,e,r,n){var o=t(function(t,a){_r(t,o,e),Wr(t,{type:e,index:Ht(null),first:void 0,last:void 0,size:0}),i||(t.size=0),null!=a&&Mr(a,t[n],t,r)}),a=Kr(e),u=function(t,e,r){var n,o,u=a(t),c=s(t,e);return c?c.value=r:(u.last=c={index:o=zr(e,!0),key:e,value:r,previous:n=u.last,next:void 0,removed:!1},u.first||(u.first=c),n&&(n.next=c),i?u.size++:t.size++,"F"!==o&&(u.index[o]=c)),t},s=function(t,e){var r,n=a(t),o=zr(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==e)return r};return Fr(o.prototype,{clear:function(){for(var t=a(this),e=t.index,r=t.first;r;)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete e[r.index],r=r.next;t.first=t.last=void 0,i?t.size=0:this.size=0},delete:function(t){var e=this,r=a(e),n=s(e,t);if(n){var o=n.next,u=n.previous;delete r.index[n.index],n.removed=!0,u&&(u.next=o),o&&(o.previous=u),r.first==n&&(r.first=o),r.last==n&&(r.last=u),i?r.size--:e.size--}return!!n},forEach:function(t){for(var e,r=a(this),n=Zt(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!s(this,t)}}),Fr(o.prototype,r?{get:function(t){var e=s(this,t);return e&&e.value},set:function(t,e){return u(this,0===t?0:t,e)}}:{add:function(t){return u(this,t=0===t?0:t,t)}}),i&&qr(o.prototype,"size",{get:function(){return a(this).size}}),o},setStrong:function(t,e,r){var n=e+" Iterator",o=Kr(e),i=Kr(n);Xe(t,e,function(t,e){Wr(this,{type:n,target:t,state:o(t),kind:e,last:void 0})},function(){for(var t=i(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})},r?"entries":"values",!r,!0),Dr(e)}},$r=Cr("Map",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},Gr);ar||et(Object.prototype,"toString",ar?{}.toString:function(){return"[object "+cr(this)+"]"},{unsafe:!0});var Vr={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Hr=Dt("iterator"),Xr=Dt("toStringTag"),Yr=Ar.values;for(var Jr in Vr){var Qr=n[Jr],Zr=Qr&&Qr.prototype;if(Zr){if(Zr[Hr]!==Yr)try{I(Zr,Hr,Yr)}catch(t){Zr[Hr]=Yr}if(Zr[Xr]||I(Zr,Xr,Jr),Vr[Jr])for(var tn in Ar)if(Zr[tn]!==Ar[tn])try{I(Zr,tn,Ar[tn])}catch(t){Zr[tn]=Ar[tn]}}}var en=function(t){var e,r,n,o,i=arguments.length,a=i>1?arguments[1]:void 0;return Qt(this),(e=void 0!==a)&&Qt(a),null==t?new this:(r=[],e?(n=0,o=Zt(a,i>2?arguments[2]:void 0,2),Mr(t,function(t){r.push(o(t,n++))})):Mr(t,r.push,r),new this(r))};kt({target:"Map",stat:!0},{from:en});var rn=function(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return new this(e)};kt({target:"Map",stat:!0},{of:rn});var nn=function(){for(var t,e=R(this),r=Qt(e.delete),n=!0,o=0,i=arguments.length;o<i;o++)t=r.call(e,arguments[o]),n=n&&t;return!!n};kt({target:"Map",proto:!0,real:!0,forced:D},{deleteAll:function(){return nn.apply(this,arguments)}});var on=function(t){var e=lr(t);if("function"!=typeof e)throw TypeError(String(t)+" is not iterable");return R(e.call(t))},an=function(t){return Map.prototype.entries.call(t)};kt({target:"Map",proto:!0,real:!0,forced:D},{every:function(t){var e=R(this),r=an(e),n=Zt(t,arguments.length>1?arguments[1]:void 0,3);return!Mr(r,function(t,r){if(!n(r,t,e))return Mr.stop()},void 0,!0,!0).stopped}});var un=Dt("species"),sn=function(t,e){var r,n=R(t).constructor;return void 0===n||null==(r=R(n)[un])?e:Qt(r)};kt({target:"Map",proto:!0,real:!0,forced:D},{filter:function(t){var e=R(this),r=an(e),n=Zt(t,arguments.length>1?arguments[1]:void 0,3),o=new(sn(e,ot("Map"))),i=Qt(o.set);return Mr(r,function(t,r){n(r,t,e)&&i.call(o,t,r)},void 0,!0,!0),o}}),kt({target:"Map",proto:!0,real:!0,forced:D},{find:function(t){var e=R(this),r=an(e),n=Zt(t,arguments.length>1?arguments[1]:void 0,3);return Mr(r,function(t,r){if(n(r,t,e))return Mr.stop(r)},void 0,!0,!0).result}}),kt({target:"Map",proto:!0,real:!0,forced:D},{findKey:function(t){var e=R(this),r=an(e),n=Zt(t,arguments.length>1?arguments[1]:void 0,3);return Mr(r,function(t,r){if(n(r,t,e))return Mr.stop(t)},void 0,!0,!0).result}}),kt({target:"Map",stat:!0},{groupBy:function(t,e){var r=new this;Qt(e);var n=Qt(r.has),o=Qt(r.get),i=Qt(r.set);return Mr(t,function(t){var a=e(t);n.call(r,a)?o.call(r,a).push(t):i.call(r,a,[t])}),r}}),kt({target:"Map",proto:!0,real:!0,forced:D},{includes:function(t){return Mr(an(R(this)),function(e,r){if((n=r)===(o=t)||n!=n&&o!=o)return Mr.stop();var n,o},void 0,!0,!0).stopped}}),kt({target:"Map",stat:!0},{keyBy:function(t,e){var r=new this;Qt(e);var n=Qt(r.set);return Mr(t,function(t){n.call(r,e(t),t)}),r}}),kt({target:"Map",proto:!0,real:!0,forced:D},{keyOf:function(t){return Mr(an(R(this)),function(e,r){if(r===t)return Mr.stop(e)},void 0,!0,!0).result}}),kt({target:"Map",proto:!0,real:!0,forced:D},{mapKeys:function(t){var e=R(this),r=an(e),n=Zt(t,arguments.length>1?arguments[1]:void 0,3),o=new(sn(e,ot("Map"))),i=Qt(o.set);return Mr(r,function(t,r){i.call(o,n(r,t,e),r)},void 0,!0,!0),o}}),kt({target:"Map",proto:!0,real:!0,forced:D},{mapValues:function(t){var e=R(this),r=an(e),n=Zt(t,arguments.length>1?arguments[1]:void 0,3),o=new(sn(e,ot("Map"))),i=Qt(o.set);return Mr(r,function(t,r){i.call(o,t,n(r,t,e))},void 0,!0,!0),o}}),kt({target:"Map",proto:!0,real:!0,forced:D},{merge:function(t){for(var e=R(this),r=Qt(e.set),n=0;n<arguments.length;)Mr(arguments[n++],r,e,!0);return e}}),kt({target:"Map",proto:!0,real:!0,forced:D},{reduce:function(t){var e=R(this),r=an(e),n=arguments.length<2,o=n?void 0:arguments[1];if(Qt(t),Mr(r,function(r,i){n?(n=!1,o=i):o=t(o,i,r,e)},void 0,!0,!0),n)throw TypeError("Reduce of empty map with no initial value");return o}}),kt({target:"Map",proto:!0,real:!0,forced:D},{some:function(t){var e=R(this),r=an(e),n=Zt(t,arguments.length>1?arguments[1]:void 0,3);return Mr(r,function(t,r){if(n(r,t,e))return Mr.stop()},void 0,!0,!0).stopped}}),kt({target:"Map",proto:!0,real:!0,forced:D},{update:function(t,e){var r=R(this),n=arguments.length;Qt(e);var o=r.has(t);if(!o&&n<3)throw TypeError("Updating absent value");var i=o?r.get(t):Qt(n>2?arguments[2]:void 0)(t,r);return r.set(t,e(i,t,r)),r}});var cn=function(t,e){var r,n=R(this),o=arguments.length>2?arguments[2]:void 0;if("function"!=typeof e&&"function"!=typeof o)throw TypeError("At least one callback required");return n.has(t)?(r=n.get(t),"function"==typeof e&&(r=e(r),n.set(t,r))):"function"==typeof o&&(r=o(),n.set(t,r)),r};kt({target:"Map",proto:!0,real:!0,forced:D},{upsert:cn}),kt({target:"Map",proto:!0,real:!0,forced:D},{updateOrInsert:cn});var fn="\t\n\v\f\r                　\u2028\u2029\ufeff",ln="["+fn+"]",hn=RegExp("^"+ln+ln+"*"),pn=RegExp(ln+ln+"*$"),dn=function(t){return function(e){var r=String(d(e));return 1&t&&(r=r.replace(hn,"")),2&t&&(r=r.replace(pn,"")),r}},vn={start:dn(1),end:dn(2),trim:dn(3)},gn=bt.f,yn=O.f,mn=P.f,bn=vn.trim,wn="Number",Sn=n.Number,En=Sn.prototype,xn=l(Ht(En))==wn,An=function(t){var e,r,n,o,i,a,u,s,c=y(t,!1);if("string"==typeof c&&c.length>2)if(43===(e=(c=bn(c)).charCodeAt(0))||45===e){if(88===(r=c.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+c}for(a=(i=c.slice(2)).length,u=0;u<a;u++)if((s=i.charCodeAt(u))<48||s>o)return NaN;return parseInt(i,n)}return+c};if(It(wn,!Sn(" 0o1")||!Sn("0b1")||Sn("+0x1"))){for(var On,Rn=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof Rn&&(xn?o(function(){En.valueOf.call(r)}):l(r)!=wn)?Nr(new Sn(An(e)),r,Rn):An(e)},jn=i?gn(Sn):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),Pn=0;jn.length>Pn;Pn++)b(Sn,On=jn[Pn])&&!b(Rn,On)&&mn(Rn,On,yn(Sn,On));Rn.prototype=En,En.constructor=Rn,et(n,wn,Rn)}kt({target:"Number",stat:!0},{EPSILON:Math.pow(2,-52)});var In=n.isFinite;kt({target:"Number",stat:!0},{isFinite:Number.isFinite||function(t){return"number"==typeof t&&In(t)}});var Tn=Math.floor,kn=function(t){return!g(t)&&isFinite(t)&&Tn(t)===t};kt({target:"Number",stat:!0},{isInteger:kn}),kt({target:"Number",stat:!0},{isNaN:function(t){return t!=t}});var Ln=Math.abs;kt({target:"Number",stat:!0},{isSafeInteger:function(t){return kn(t)&&Ln(t)<=9007199254740991}}),kt({target:"Number",stat:!0},{MAX_SAFE_INTEGER:9007199254740991}),kt({target:"Number",stat:!0},{MIN_SAFE_INTEGER:-9007199254740991});var Un=vn.trim,Mn=n.parseFloat,_n=1/Mn(fn+"-0")!=-Infinity?function(t){var e=Un(String(t)),r=Mn(e);return 0===r&&"-"==e.charAt(0)?-0:r}:Mn;kt({target:"Number",stat:!0,forced:Number.parseFloat!=_n},{parseFloat:_n});var Nn=vn.trim,Cn=n.parseInt,Fn=/^[+-]?0[Xx]/,Bn=8!==Cn(fn+"08")||22!==Cn(fn+"0x16")?function(t,e){var r=Nn(String(t));return Cn(r,e>>>0||(Fn.test(r)?16:10))}:Cn;kt({target:"Number",stat:!0,forced:Number.parseInt!=Bn},{parseInt:Bn});var Dn=s.f,qn=function(t){return function(e){for(var r,n=v(e),o=qt(n),a=o.length,u=0,s=[];a>u;)r=o[u++],i&&!Dn.call(n,r)||s.push(t?[r,n[r]]:n[r]);return s}},zn={entries:qn(!0),values:qn(!1)},Wn=zn.entries;kt({target:"Object",stat:!0},{entries:function(t){return Wn(t)}}),kt({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){for(var e,r,n=v(t),o=O.f,i=St(n),a={},u=0;i.length>u;)void 0!==(r=o(n,e=i[u++]))&&or(a,e,r);return a}});var Kn=o(function(){qt(1)});kt({target:"Object",stat:!0,forced:Kn},{keys:function(t){return qt(Lt(t))}});var Gn=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e};kt({target:"Object",stat:!0},{is:Gn});var $n=zn.values;kt({target:"Object",stat:!0},{values:function(t){return $n(t)}});var Vn=ot("Reflect","apply"),Hn=Function.apply,Xn=!o(function(){Vn(function(){})});kt({target:"Reflect",stat:!0,forced:Xn},{apply:function(t,e,r){return Qt(t),R(r),Vn?Vn(t,e,r):Hn.call(t,e,r)}});var Yn=[].slice,Jn={},Qn=function(t,e,r){if(!(e in Jn)){for(var n=[],o=0;o<e;o++)n[o]="a["+o+"]";Jn[e]=Function("C,a","return new C("+n.join(",")+")")}return Jn[e](t,r)},Zn=Function.bind||function(t){var e=Qt(this),r=Yn.call(arguments,1),n=function(){var o=r.concat(Yn.call(arguments));return this instanceof n?Qn(e,o.length,o):e.apply(t,o)};return g(e.prototype)&&(n.prototype=e.prototype),n},to=ot("Reflect","construct"),eo=o(function(){function t(){}return!(to(function(){},[],t)instanceof t)}),ro=!o(function(){to(function(){})}),no=eo||ro;kt({target:"Reflect",stat:!0,forced:no,sham:no},{construct:function(t,e){Qt(t),R(e);var r=arguments.length<3?t:Qt(arguments[2]);if(ro&&!eo)return to(t,e,r);if(t==r){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var n=[null];return n.push.apply(n,e),new(Zn.apply(t,n))}var o=r.prototype,i=Ht(g(o)?o:Object.prototype),a=Function.apply.call(t,i,e);return g(a)?a:i}});var oo=o(function(){Reflect.defineProperty(P.f({},1,{value:1}),1,{value:2})});kt({target:"Reflect",stat:!0,forced:oo,sham:!i},{defineProperty:function(t,e,r){R(t);var n=y(e,!0);R(r);try{return P.f(t,n,r),!0}catch(t){return!1}}});var io=O.f;kt({target:"Reflect",stat:!0},{deleteProperty:function(t,e){var r=io(R(t),e);return!(r&&!r.configurable)&&delete t[e]}}),kt({target:"Reflect",stat:!0},{get:function t(e,r){var n,o,i=arguments.length<3?e:arguments[2];return R(e)===i?e[r]:(n=O.f(e,r))?b(n,"value")?n.value:void 0===n.get?void 0:n.get.call(i):g(o=Ie(e))?t(o,r,i):void 0}}),kt({target:"Reflect",stat:!0,sham:!i},{getOwnPropertyDescriptor:function(t,e){return O.f(R(t),e)}}),kt({target:"Reflect",stat:!0,sham:!Re},{getPrototypeOf:function(t){return Ie(R(t))}}),kt({target:"Reflect",stat:!0},{has:function(t,e){return e in t}});var ao=Object.isExtensible;kt({target:"Reflect",stat:!0},{isExtensible:function(t){return R(t),!ao||ao(t)}}),kt({target:"Reflect",stat:!0},{ownKeys:St}),kt({target:"Reflect",stat:!0,sham:!Lr},{preventExtensions:function(t){R(t);try{var e=ot("Object","preventExtensions");return e&&e(t),!0}catch(t){return!1}}});var uo=o(function(){var t=P.f({},"a",{configurable:!0});return!1!==Reflect.set(Ie(t),"a",1,t)});kt({target:"Reflect",stat:!0,forced:uo},{set:function t(e,r,n){var o,i,a=arguments.length<4?e:arguments[3],u=O.f(R(e),r);if(!u){if(g(i=Ie(e)))return t(i,r,n,a);u=c(0)}if(b(u,"value")){if(!1===u.writable||!g(a))return!1;if(o=O.f(a,r)){if(o.get||o.set||!1===o.writable)return!1;o.value=n,P.f(a,r,o)}else P.f(a,r,c(0,n));return!0}return void 0!==u.set&&(u.set.call(a,n),!0)}}),qe&&kt({target:"Reflect",stat:!0},{setPrototypeOf:function(t,e){R(t),De(e);try{return qe(t,e),!0}catch(t){return!1}}});var so=Ur.getWeakData,co=tt.set,fo=tt.getterFor,lo=ue.find,ho=ue.findIndex,po=0,vo=function(t){return t.frozen||(t.frozen=new go)},go=function(){this.entries=[]},yo=function(t,e){return lo(t.entries,function(t){return t[0]===e})};go.prototype={get:function(t){var e=yo(this,t);if(e)return e[1]},has:function(t){return!!yo(this,t)},set:function(t,e){var r=yo(this,t);r?r[1]=e:this.entries.push([t,e])},delete:function(t){var e=ho(this.entries,function(e){return e[0]===t});return~e&&this.entries.splice(e,1),!!~e}};var mo={getConstructor:function(t,e,r,n){var o=t(function(t,i){_r(t,o,e),co(t,{type:e,id:po++,frozen:void 0}),null!=i&&Mr(i,t[n],t,r)}),i=fo(e),a=function(t,e,r){var n=i(t),o=so(R(e),!0);return!0===o?vo(n).set(e,r):o[n.id]=r,t};return Fr(o.prototype,{delete:function(t){var e=i(this);if(!g(t))return!1;var r=so(t);return!0===r?vo(e).delete(t):r&&b(r,e.id)&&delete r[e.id]},has:function(t){var e=i(this);if(!g(t))return!1;var r=so(t);return!0===r?vo(e).has(t):r&&b(r,e.id)}}),Fr(o.prototype,r?{get:function(t){var e=i(this);if(g(t)){var r=so(t);return!0===r?vo(e).get(t):r?r[e.id]:void 0}},set:function(t,e){return a(this,t,e)}}:{add:function(t){return a(this,t,!0)}}),o}},bo=e(function(t){var e,r=tt.enforce,o=!n.ActiveXObject&&"ActiveXObject"in n,i=Object.isExtensible,a=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},u=t.exports=Cr("WeakMap",a,mo);if(B&&o){e=mo.getConstructor(a,"WeakMap",!0),Ur.REQUIRED=!0;var s=u.prototype,c=s.delete,f=s.has,l=s.get,h=s.set;Fr(s,{delete:function(t){if(g(t)&&!i(t)){var n=r(this);return n.frozen||(n.frozen=new e),c.call(this,t)||n.frozen.delete(t)}return c.call(this,t)},has:function(t){if(g(t)&&!i(t)){var n=r(this);return n.frozen||(n.frozen=new e),f.call(this,t)||n.frozen.has(t)}return f.call(this,t)},get:function(t){if(g(t)&&!i(t)){var n=r(this);return n.frozen||(n.frozen=new e),f.call(this,t)?l.call(this,t):n.frozen.get(t)}return l.call(this,t)},set:function(t,n){if(g(t)&&!i(t)){var o=r(this);o.frozen||(o.frozen=new e),f.call(this,t)?h.call(this,t,n):o.frozen.set(t,n)}else h.call(this,t,n);return this}})}}),wo=q("metadata"),So=wo.store||(wo.store=new bo),Eo=function(t,e,r){var n=So.get(t);if(!n){if(!r)return;So.set(t,n=new $r)}var o=n.get(e);if(!o){if(!r)return;n.set(e,o=new $r)}return o},xo={store:So,getMap:Eo,has:function(t,e,r){var n=Eo(e,r,!1);return void 0!==n&&n.has(t)},get:function(t,e,r){var n=Eo(e,r,!1);return void 0===n?void 0:n.get(t)},set:function(t,e,r,n){Eo(r,n,!0).set(t,e)},keys:function(t,e){var r=Eo(t,e,!1),n=[];return r&&r.forEach(function(t,e){n.push(e)}),n},toKey:function(t){return void 0===t||"symbol"==typeof t?t:String(t)}},Ao=xo.toKey,Oo=xo.set;kt({target:"Reflect",stat:!0},{defineMetadata:function(t,e,r){var n=arguments.length<4?void 0:Ao(arguments[3]);Oo(t,e,R(r),n)}});var Ro=xo.toKey,jo=xo.getMap,Po=xo.store;kt({target:"Reflect",stat:!0},{deleteMetadata:function(t,e){var r=arguments.length<3?void 0:Ro(arguments[2]),n=jo(R(e),r,!1);if(void 0===n||!n.delete(t))return!1;if(n.size)return!0;var o=Po.get(e);return o.delete(r),!!o.size||Po.delete(e)}});var Io=xo.has,To=xo.get,ko=xo.toKey,Lo=function t(e,r,n){if(Io(e,r,n))return To(e,r,n);var o=Ie(r);return null!==o?t(e,o,n):void 0};kt({target:"Reflect",stat:!0},{getMetadata:function(t,e){var r=arguments.length<3?void 0:ko(arguments[2]);return Lo(t,R(e),r)}});var Uo=Cr("Set",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},Gr),Mo=xo.keys,_o=xo.toKey,No=function t(e,r){var n=Mo(e,r),o=Ie(e);if(null===o)return n;var i,a,u=t(o,r);return u.length?n.length?(i=new Uo(n.concat(u)),Mr(i,(a=[]).push,a),a):u:n};kt({target:"Reflect",stat:!0},{getMetadataKeys:function(t){var e=arguments.length<2?void 0:_o(arguments[1]);return No(R(t),e)}});var Co=xo.get,Fo=xo.toKey;kt({target:"Reflect",stat:!0},{getOwnMetadata:function(t,e){var r=arguments.length<3?void 0:Fo(arguments[2]);return Co(t,R(e),r)}});var Bo=xo.keys,Do=xo.toKey;kt({target:"Reflect",stat:!0},{getOwnMetadataKeys:function(t){var e=arguments.length<2?void 0:Do(arguments[1]);return Bo(R(t),e)}});var qo=xo.has,zo=xo.toKey,Wo=function t(e,r,n){if(qo(e,r,n))return!0;var o=Ie(r);return null!==o&&t(e,o,n)};kt({target:"Reflect",stat:!0},{hasMetadata:function(t,e){var r=arguments.length<3?void 0:zo(arguments[2]);return Wo(t,R(e),r)}});var Ko=xo.has,Go=xo.toKey;kt({target:"Reflect",stat:!0},{hasOwnMetadata:function(t,e){var r=arguments.length<3?void 0:Go(arguments[2]);return Ko(t,R(e),r)}});var $o=xo.toKey,Vo=xo.set;kt({target:"Reflect",stat:!0},{metadata:function(t,e){return function(r,n){Vo(t,e,R(r),$o(n))}}});var Ho=Dt("match"),Xo=function(t){var e;return g(t)&&(void 0!==(e=t[Ho])?!!e:"RegExp"==l(t))},Yo=function(){var t=R(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e};function Jo(t,e){return RegExp(t,e)}var Qo={UNSUPPORTED_Y:o(function(){var t=Jo("a","y");return t.lastIndex=2,null!=t.exec("abcd")}),BROKEN_CARET:o(function(){var t=Jo("^r","gy");return t.lastIndex=2,null!=t.exec("str")})},Zo=P.f,ti=bt.f,ei=tt.set,ri=Dt("match"),ni=n.RegExp,oi=ni.prototype,ii=/a/g,ai=/a/g,ui=new ni(ii)!==ii,si=Qo.UNSUPPORTED_Y;if(i&&It("RegExp",!ui||si||o(function(){return ai[ri]=!1,ni(ii)!=ii||ni(ai)==ai||"/a/i"!=ni(ii,"i")}))){for(var ci=function(t,e){var r,n=this instanceof ci,o=Xo(t),i=void 0===e;if(!n&&o&&t.constructor===ci&&i)return t;ui?o&&!i&&(t=t.source):t instanceof ci&&(i&&(e=Yo.call(t)),t=t.source),si&&(r=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var a=Nr(ui?new ni(t,e):ni(t,e),n?this:oi,ci);return si&&r&&ei(a,{sticky:r}),a},fi=function(t){t in ci||Zo(ci,t,{configurable:!0,get:function(){return ni[t]},set:function(e){ni[t]=e}})},li=ti(ni),hi=0;li.length>hi;)fi(li[hi++]);oi.constructor=ci,ci.prototype=oi,et(n,"RegExp",ci)}Dr("RegExp");var pi="toString",di=RegExp.prototype,vi=di.toString;(o(function(){return"/a/b"!=vi.call({source:"a",flags:"b"})})||vi.name!=pi)&&et(RegExp.prototype,pi,function(){var t=R(this),e=String(t.source),r=t.flags;return"/"+e+"/"+String(void 0===r&&t instanceof RegExp&&!("flags"in di)?Yo.call(t):r)},{unsafe:!0});var gi=RegExp.prototype.exec,yi=String.prototype.replace,mi=gi,bi=function(){var t=/a/,e=/b*/g;return gi.call(t,"a"),gi.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),wi=Qo.UNSUPPORTED_Y||Qo.BROKEN_CARET,Si=void 0!==/()??/.exec("")[1];(bi||Si||wi)&&(mi=function(t){var e,r,n,o,i=this,a=wi&&i.sticky,u=Yo.call(i),s=i.source,c=0,f=t;return a&&(-1===(u=u.replace("y","")).indexOf("g")&&(u+="g"),f=String(t).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&"\n"!==t[i.lastIndex-1])&&(s="(?: "+s+")",f=" "+f,c++),r=new RegExp("^(?:"+s+")",u)),Si&&(r=new RegExp("^"+s+"$(?!\\s)",u)),bi&&(e=i.lastIndex),n=gi.call(a?r:i,f),a?n?(n.input=n.input.slice(c),n[0]=n[0].slice(c),n.index=i.lastIndex,i.lastIndex+=n[0].length):i.lastIndex=0:bi&&n&&(i.lastIndex=i.global?n.index+n[0].length:e),Si&&n&&n.length>1&&yi.call(n[0],r,function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)}),n});var Ei=mi;kt({target:"RegExp",proto:!0,forced:/./.exec!==Ei},{exec:Ei}),i&&("g"!=/./g.flags||Qo.UNSUPPORTED_Y)&&P.f(RegExp.prototype,"flags",{configurable:!0,get:Yo});var xi=tt.get,Ai=RegExp.prototype;i&&Qo.UNSUPPORTED_Y&&(0,P.f)(RegExp.prototype,"sticky",{configurable:!0,get:function(){if(this!==Ai){if(this instanceof RegExp)return!!xi(this).sticky;throw TypeError("Incompatible receiver, RegExp required")}}});var Oi,Ri,ji=(Oi=!1,(Ri=/[ac]/).exec=function(){return Oi=!0,/./.exec.apply(this,arguments)},!0===Ri.test("abc")&&Oi),Pi=/./.test;kt({target:"RegExp",proto:!0,forced:!ji},{test:function(t){if("function"!=typeof this.exec)return Pi.call(this,t);var e=this.exec(t);if(null!==e&&!g(e))throw new Error("RegExp exec method returned something other than an Object or null");return!!e}});var Ii=Dt("species"),Ti=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),ki="$0"==="a".replace(/./,"$0"),Li=Dt("replace"),Ui=!!/./[Li]&&""===/./[Li]("a","$0"),Mi=!o(function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}),_i=function(t,e,r,n){var i=Dt(t),a=!o(function(){var e={};return e[i]=function(){return 7},7!=""[t](e)}),u=a&&!o(function(){var e=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[Ii]=function(){return r},r.flags="",r[i]=/./[i]),r.exec=function(){return e=!0,null},r[i](""),!e});if(!a||!u||"replace"===t&&(!Ti||!ki||Ui)||"split"===t&&!Mi){var s=/./[i],c=r(i,""[t],function(t,e,r,n,o){return e.exec===Ei?a&&!o?{done:!0,value:s.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}},{REPLACE_KEEPS_$0:ki,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:Ui}),f=c[1];et(String.prototype,t,c[0]),et(RegExp.prototype,i,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)})}n&&I(RegExp.prototype[i],"sham",!0)},Ni=Oe.charAt,Ci=function(t,e,r){return e+(r?Ni(t,e).length:1)},Fi=function(t,e){var r=t.exec;if("function"==typeof r){var n=r.call(t,e);if("object"!=typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==l(t))throw TypeError("RegExp#exec called on incompatible receiver");return Ei.call(t,e)};_i("match",1,function(t,e,r){return[function(e){var r=d(this),n=null==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var o=R(t),i=String(this);if(!o.global)return Fi(o,i);var a=o.unicode;o.lastIndex=0;for(var u,s=[],c=0;null!==(u=Fi(o,i));){var f=String(u[0]);s[c]=f,""===f&&(o.lastIndex=Ci(i,ct(o.lastIndex),a)),c++}return 0===c?null:s}]});var Bi=Math.max,Di=Math.min,qi=Math.floor,zi=/\$([$&'`]|\d\d?|<[^>]*>)/g,Wi=/\$([$&'`]|\d\d?)/g;_i("replace",2,function(t,e,r,n){var o=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,i=n.REPLACE_KEEPS_$0,a=o?"$":"$0";return[function(r,n){var o=d(this),i=null==r?void 0:r[t];return void 0!==i?i.call(r,o,n):e.call(String(o),r,n)},function(t,n){if(!o&&i||"string"==typeof n&&-1===n.indexOf(a)){var s=r(e,t,this,n);if(s.done)return s.value}var c=R(t),f=String(this),l="function"==typeof n;l||(n=String(n));var h=c.global;if(h){var p=c.unicode;c.lastIndex=0}for(var d=[];;){var v=Fi(c,f);if(null===v)break;if(d.push(v),!h)break;""===String(v[0])&&(c.lastIndex=Ci(f,ct(c.lastIndex),p))}for(var g,y="",m=0,b=0;b<d.length;b++){v=d[b];for(var w=String(v[0]),S=Bi(Di(ut(v.index),f.length),0),E=[],x=1;x<v.length;x++)E.push(void 0===(g=v[x])?g:String(g));var A=v.groups;if(l){var O=[w].concat(E,S,f);void 0!==A&&O.push(A);var j=String(n.apply(void 0,O))}else j=u(w,f,S,E,A,n);S>=m&&(y+=f.slice(m,S)+j,m=S+w.length)}return y+f.slice(m)}];function u(t,r,n,o,i,a){var u=n+t.length,s=o.length,c=Wi;return void 0!==i&&(i=Lt(i),c=zi),e.call(a,c,function(e,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(u);case"<":c=i[a.slice(1,-1)];break;default:var f=+a;if(0===f)return e;if(f>s){var l=qi(f/10);return 0===l?e:l<=s?void 0===o[l-1]?a.charAt(1):o[l-1]+a.charAt(1):e}c=o[f-1]}return void 0===c?"":c})}}),_i("search",1,function(t,e,r){return[function(e){var r=d(this),n=null==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var o=R(t),i=String(this),a=o.lastIndex;Gn(a,0)||(o.lastIndex=0);var u=Fi(o,i);return Gn(o.lastIndex,a)||(o.lastIndex=a),null===u?-1:u.index}]});var Ki=[].push,Gi=Math.min,$i=4294967295,Vi=!o(function(){return!RegExp($i,"y")});_i("split",2,function(t,e,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var n=String(d(this)),o=void 0===r?$i:r>>>0;if(0===o)return[];if(void 0===t)return[n];if(!Xo(t))return e.call(n,t,o);for(var i,a,u,s=[],c=0,f=new RegExp(t.source,(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":"")+"g");(i=Ei.call(f,n))&&!((a=f.lastIndex)>c&&(s.push(n.slice(c,i.index)),i.length>1&&i.index<n.length&&Ki.apply(s,i.slice(1)),u=i[0].length,c=a,s.length>=o));)f.lastIndex===i.index&&f.lastIndex++;return c===n.length?!u&&f.test("")||s.push(""):s.push(n.slice(c)),s.length>o?s.slice(0,o):s}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var o=d(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,r):n.call(String(o),e,r)},function(t,o){var i=r(n,t,this,o,n!==e);if(i.done)return i.value;var a=R(t),u=String(this),s=sn(a,RegExp),c=a.unicode,f=new s(Vi?a:"^(?:"+a.source+")",(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(Vi?"y":"g")),l=void 0===o?$i:o>>>0;if(0===l)return[];if(0===u.length)return null===Fi(f,u)?[u]:[];for(var h=0,p=0,d=[];p<u.length;){f.lastIndex=Vi?p:0;var v,g=Fi(f,Vi?u:u.slice(p));if(null===g||(v=Gi(ct(f.lastIndex+(Vi?0:p)),u.length))===h)p=Ci(u,p,c);else{if(d.push(u.slice(h,p)),d.length===l)return d;for(var y=1;y<=g.length-1;y++)if(d.push(g[y]),d.length===l)return d;p=h=v}}return d.push(u.slice(h)),d}]},!Vi),kt({target:"Set",stat:!0},{from:en}),kt({target:"Set",stat:!0},{of:rn});var Hi=function(){for(var t=R(this),e=Qt(t.add),r=0,n=arguments.length;r<n;r++)e.call(t,arguments[r]);return t};kt({target:"Set",proto:!0,real:!0,forced:D},{addAll:function(){return Hi.apply(this,arguments)}}),kt({target:"Set",proto:!0,real:!0,forced:D},{deleteAll:function(){return nn.apply(this,arguments)}});var Xi=function(t){return Set.prototype.values.call(t)};kt({target:"Set",proto:!0,real:!0,forced:D},{every:function(t){var e=R(this),r=Xi(e),n=Zt(t,arguments.length>1?arguments[1]:void 0,3);return!Mr(r,function(t){if(!n(t,t,e))return Mr.stop()},void 0,!1,!0).stopped}}),kt({target:"Set",proto:!0,real:!0,forced:D},{difference:function(t){var e=R(this),r=new(sn(e,ot("Set")))(e),n=Qt(r.delete);return Mr(t,function(t){n.call(r,t)}),r}}),kt({target:"Set",proto:!0,real:!0,forced:D},{filter:function(t){var e=R(this),r=Xi(e),n=Zt(t,arguments.length>1?arguments[1]:void 0,3),o=new(sn(e,ot("Set"))),i=Qt(o.add);return Mr(r,function(t){n(t,t,e)&&i.call(o,t)},void 0,!1,!0),o}}),kt({target:"Set",proto:!0,real:!0,forced:D},{find:function(t){var e=R(this),r=Xi(e),n=Zt(t,arguments.length>1?arguments[1]:void 0,3);return Mr(r,function(t){if(n(t,t,e))return Mr.stop(t)},void 0,!1,!0).result}}),kt({target:"Set",proto:!0,real:!0,forced:D},{intersection:function(t){var e=R(this),r=new(sn(e,ot("Set"))),n=Qt(e.has),o=Qt(r.add);return Mr(t,function(t){n.call(e,t)&&o.call(r,t)}),r}}),kt({target:"Set",proto:!0,real:!0,forced:D},{isDisjointFrom:function(t){var e=R(this),r=Qt(e.has);return!Mr(t,function(t){if(!0===r.call(e,t))return Mr.stop()}).stopped}}),kt({target:"Set",proto:!0,real:!0,forced:D},{isSubsetOf:function(t){var e=on(this),r=R(t),n=r.has;return"function"!=typeof n&&(r=new(ot("Set"))(t),n=Qt(r.has)),!Mr(e,function(t){if(!1===n.call(r,t))return Mr.stop()},void 0,!1,!0).stopped}}),kt({target:"Set",proto:!0,real:!0,forced:D},{isSupersetOf:function(t){var e=R(this),r=Qt(e.has);return!Mr(t,function(t){if(!1===r.call(e,t))return Mr.stop()}).stopped}}),kt({target:"Set",proto:!0,real:!0,forced:D},{join:function(t){var e=R(this),r=Xi(e),n=void 0===t?",":String(t),o=[];return Mr(r,o.push,o,!1,!0),o.join(n)}}),kt({target:"Set",proto:!0,real:!0,forced:D},{map:function(t){var e=R(this),r=Xi(e),n=Zt(t,arguments.length>1?arguments[1]:void 0,3),o=new(sn(e,ot("Set"))),i=Qt(o.add);return Mr(r,function(t){i.call(o,n(t,t,e))},void 0,!1,!0),o}}),kt({target:"Set",proto:!0,real:!0,forced:D},{reduce:function(t){var e=R(this),r=Xi(e),n=arguments.length<2,o=n?void 0:arguments[1];if(Qt(t),Mr(r,function(r){n?(n=!1,o=r):o=t(o,r,r,e)},void 0,!1,!0),n)throw TypeError("Reduce of empty set with no initial value");return o}}),kt({target:"Set",proto:!0,real:!0,forced:D},{some:function(t){var e=R(this),r=Xi(e),n=Zt(t,arguments.length>1?arguments[1]:void 0,3);return Mr(r,function(t){if(n(t,t,e))return Mr.stop()},void 0,!1,!0).stopped}}),kt({target:"Set",proto:!0,real:!0,forced:D},{symmetricDifference:function(t){var e=R(this),r=new(sn(e,ot("Set")))(e),n=Qt(r.delete),o=Qt(r.add);return Mr(t,function(t){n.call(r,t)||o.call(r,t)}),r}}),kt({target:"Set",proto:!0,real:!0,forced:D},{union:function(t){var e=R(this),r=new(sn(e,ot("Set")))(e);return Mr(t,Qt(r.add),r),r}});var Yi,Ji,Qi=ot("navigator","userAgent")||"",Zi=n.process,ta=Zi&&Zi.versions,ea=ta&&ta.v8;ea?Ji=(Yi=ea.split("."))[0]+Yi[1]:Qi&&(!(Yi=Qi.match(/Edge\/(\d+)/))||Yi[1]>=74)&&(Yi=Qi.match(/Chrome\/(\d+)/))&&(Ji=Yi[1]);var ra=Ji&&+Ji,na=Dt("species"),oa=Dt("isConcatSpreadable"),ia=9007199254740991,aa="Maximum allowed index exceeded",ua=ra>=51||!o(function(){var t=[];return t[oa]=!1,t.concat()[0]!==t}),sa=ra>=51||!o(function(){var t=[];return(t.constructor={})[na]=function(){return{foo:1}},1!==t.concat(Boolean).foo}),ca=function(t){if(!g(t))return!1;var e=t[oa];return void 0!==e?!!e:re(t)};kt({target:"Array",proto:!0,forced:!ua||!sa},{concat:function(t){var e,r,n,o,i,a=Lt(this),u=oe(a,0),s=0;for(e=-1,n=arguments.length;e<n;e++)if(ca(i=-1===e?a:arguments[e])){if(s+(o=ct(i.length))>ia)throw TypeError(aa);for(r=0;r<o;r++,s++)r in i&&or(u,s,i[r])}else{if(s>=ia)throw TypeError(aa);or(u,s++,i)}return u.length=s,u}});var fa=bt.f,la={}.toString,ha="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],pa={f:function(t){return ha&&"[object Window]"==la.call(t)?function(t){try{return fa(t)}catch(t){return ha.slice()}}(t):fa(v(t))}},da={f:Dt},va=P.f,ga=function(t){var e=rt.Symbol||(rt.Symbol={});b(e,t)||va(e,t,{value:da.f(t)})},ya=ue.forEach,ma=$("hidden"),ba="Symbol",wa=Dt("toPrimitive"),Sa=tt.set,Ea=tt.getterFor(ba),xa=Object.prototype,Aa=n.Symbol,Oa=ot("JSON","stringify"),Ra=O.f,ja=P.f,Pa=pa.f,Ia=s.f,Ta=q("symbols"),ka=q("op-symbols"),La=q("string-to-symbol-registry"),Ua=q("symbol-to-string-registry"),Ma=q("wks"),_a=n.QObject,Na=!_a||!_a.prototype||!_a.prototype.findChild,Ca=i&&o(function(){return 7!=Ht(ja({},"a",{get:function(){return ja(this,"a",{value:7}).a}})).a})?function(t,e,r){var n=Ra(xa,e);n&&delete xa[e],ja(t,e,r),n&&t!==xa&&ja(xa,e,n)}:ja,Fa=function(t,e){var r=Ta[t]=Ht(Aa.prototype);return Sa(r,{type:ba,tag:t,description:e}),i||(r.description=e),r},Ba=Nt?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Aa},Da=function(t,e,r){t===xa&&Da(ka,e,r),R(t);var n=y(e,!0);return R(r),b(Ta,n)?(r.enumerable?(b(t,ma)&&t[ma][n]&&(t[ma][n]=!1),r=Ht(r,{enumerable:c(0,!1)})):(b(t,ma)||ja(t,ma,c(1,{})),t[ma][n]=!0),Ca(t,n,r)):ja(t,n,r)},qa=function(t,e){R(t);var r=v(e),n=qt(r).concat(Ga(r));return ya(n,function(e){i&&!za.call(r,e)||Da(t,e,r[e])}),t},za=function(t){var e=y(t,!0),r=Ia.call(this,e);return!(this===xa&&b(Ta,e)&&!b(ka,e))&&(!(r||!b(this,e)||!b(Ta,e)||b(this,ma)&&this[ma][e])||r)},Wa=function(t,e){var r=v(t),n=y(e,!0);if(r!==xa||!b(Ta,n)||b(ka,n)){var o=Ra(r,n);return!o||!b(Ta,n)||b(r,ma)&&r[ma][n]||(o.enumerable=!0),o}},Ka=function(t){var e=Pa(v(t)),r=[];return ya(e,function(t){b(Ta,t)||b(V,t)||r.push(t)}),r},Ga=function(t){var e=t===xa,r=Pa(e?ka:v(t)),n=[];return ya(r,function(t){!b(Ta,t)||e&&!b(xa,t)||n.push(Ta[t])}),n};if(_t||(et((Aa=function(){if(this instanceof Aa)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=K(t),r=function t(r){this===xa&&t.call(ka,r),b(this,ma)&&b(this[ma],e)&&(this[ma][e]=!1),Ca(this,e,c(1,r))};return i&&Na&&Ca(xa,e,{configurable:!0,set:r}),Fa(e,t)}).prototype,"toString",function(){return Ea(this).tag}),et(Aa,"withoutSetter",function(t){return Fa(K(t),t)}),s.f=za,P.f=Da,O.f=Wa,bt.f=pa.f=Ka,wt.f=Ga,da.f=function(t){return Fa(Dt(t),t)},i&&(ja(Aa.prototype,"description",{configurable:!0,get:function(){return Ea(this).description}}),et(xa,"propertyIsEnumerable",za,{unsafe:!0}))),kt({global:!0,wrap:!0,forced:!_t,sham:!_t},{Symbol:Aa}),ya(qt(Ma),function(t){ga(t)}),kt({target:ba,stat:!0,forced:!_t},{for:function(t){var e=String(t);if(b(La,e))return La[e];var r=Aa(e);return La[e]=r,Ua[r]=e,r},keyFor:function(t){if(!Ba(t))throw TypeError(t+" is not a symbol");if(b(Ua,t))return Ua[t]},useSetter:function(){Na=!0},useSimple:function(){Na=!1}}),kt({target:"Object",stat:!0,forced:!_t,sham:!i},{create:function(t,e){return void 0===e?Ht(t):qa(Ht(t),e)},defineProperty:Da,defineProperties:qa,getOwnPropertyDescriptor:Wa}),kt({target:"Object",stat:!0,forced:!_t},{getOwnPropertyNames:Ka,getOwnPropertySymbols:Ga}),kt({target:"Object",stat:!0,forced:o(function(){wt.f(1)})},{getOwnPropertySymbols:function(t){return wt.f(Lt(t))}}),Oa){var $a=!_t||o(function(){var t=Aa();return"[null]"!=Oa([t])||"{}"!=Oa({a:t})||"{}"!=Oa(Object(t))});kt({target:"JSON",stat:!0,forced:$a},{stringify:function(t,e,r){for(var n,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(n=e,(g(e)||void 0!==t)&&!Ba(t))return re(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!Ba(e))return e}),o[1]=e,Oa.apply(null,o)}})}Aa.prototype[wa]||I(Aa.prototype,wa,Aa.prototype.valueOf),_e(Aa,ba),V[ma]=!0,ga("asyncIterator");var Va=P.f,Ha=n.Symbol;if(i&&"function"==typeof Ha&&(!("description"in Ha.prototype)||void 0!==Ha().description)){var Xa={},Ya=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof Ya?new Ha(t):void 0===t?Ha():Ha(t);return""===t&&(Xa[e]=!0),e};Et(Ya,Ha);var Ja=Ya.prototype=Ha.prototype;Ja.constructor=Ya;var Qa=Ja.toString,Za="Symbol(test)"==String(Ha("test")),tu=/^Symbol\((.*)\)[^)]+$/;Va(Ja,"description",{configurable:!0,get:function(){var t=g(this)?this.valueOf():this,e=Qa.call(t);if(b(Xa,t))return"";var r=Za?e.slice(7,-1):e.replace(tu,"$1");return""===r?void 0:r}}),kt({global:!0,forced:!0},{Symbol:Ya})}ga("hasInstance"),ga("isConcatSpreadable"),ga("iterator"),ga("match"),ga("matchAll"),ga("replace"),ga("search"),ga("species"),ga("split"),ga("toPrimitive"),ga("toStringTag"),ga("unscopables"),_e(Math,"Math",!0),_e(n.JSON,"JSON",!0),ga("asyncDispose"),ga("dispose"),ga("observable"),ga("patternMatch"),ga("replaceAll"),da.f("asyncIterator");var eu=Oe.codeAt;kt({target:"String",proto:!0},{codePointAt:function(t){return eu(this,t)}}),ee("String","codePointAt");var ru,nu=function(t){if(Xo(t))throw TypeError("The method doesn't accept regular expressions");return t},ou=Dt("match"),iu=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[ou]=!1,"/./"[t](e)}catch(t){}}return!1},au=O.f,uu="".endsWith,su=Math.min,cu=iu("endsWith"),fu=!(cu||(ru=au(String.prototype,"endsWith"),!ru||ru.writable));kt({target:"String",proto:!0,forced:!fu&&!cu},{endsWith:function(t){var e=String(d(this));nu(t);var r=arguments.length>1?arguments[1]:void 0,n=ct(e.length),o=void 0===r?n:su(ct(r),n),i=String(t);return uu?uu.call(e,i,o):e.slice(o-i.length,o)===i}}),ee("String","endsWith");var lu=String.fromCharCode,hu=String.fromCodePoint;kt({target:"String",stat:!0,forced:!!hu&&1!=hu.length},{fromCodePoint:function(t){for(var e,r=[],n=arguments.length,o=0;n>o;){if(e=+arguments[o++],ht(e,1114111)!==e)throw RangeError(e+" is not a valid code point");r.push(e<65536?lu(e):lu(55296+((e-=65536)>>10),e%1024+56320))}return r.join("")}}),kt({target:"String",proto:!0,forced:!iu("includes")},{includes:function(t){return!!~String(d(this)).indexOf(nu(t),arguments.length>1?arguments[1]:void 0)}}),ee("String","includes");var pu="".repeat||function(t){var e=String(d(this)),r="",n=ut(t);if(n<0||Infinity==n)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(r+=e);return r},du=Math.ceil,vu=function(t){return function(e,r,n){var o,i,a=String(d(e)),u=a.length,s=void 0===n?" ":String(n),c=ct(r);return c<=u||""==s?a:((i=pu.call(s,du((o=c-u)/s.length))).length>o&&(i=i.slice(0,o)),t?a+i:i+a)}},gu={start:vu(!1),end:vu(!0)},yu=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(Qi),mu=gu.start;kt({target:"String",proto:!0,forced:yu},{padStart:function(t){return mu(this,t,arguments.length>1?arguments[1]:void 0)}}),ee("String","padStart");var bu=gu.end;kt({target:"String",proto:!0,forced:yu},{padEnd:function(t){return bu(this,t,arguments.length>1?arguments[1]:void 0)}}),ee("String","padEnd"),kt({target:"String",stat:!0},{raw:function(t){for(var e=v(t.raw),r=ct(e.length),n=arguments.length,o=[],i=0;r>i;)o.push(String(e[i++])),i<n&&o.push(String(arguments[i]));return o.join("")}}),kt({target:"String",proto:!0},{repeat:pu}),ee("String","repeat");var wu=O.f,Su="".startsWith,Eu=Math.min,xu=iu("startsWith"),Au=!xu&&!!function(){var t=wu(String.prototype,"startsWith");return t&&!t.writable}();kt({target:"String",proto:!0,forced:!Au&&!xu},{startsWith:function(t){var e=String(d(this));nu(t);var r=ct(Eu(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return Su?Su.call(e,n,r):e.slice(r,r+n.length)===n}}),ee("String","startsWith");var Ou=function(t){return o(function(){return!!fn[t]()||"​᠎"!="​᠎"[t]()||fn[t].name!==t})},Ru=vn.start,ju=Ou("trimStart"),Pu=ju?function(){return Ru(this)}:"".trimStart;kt({target:"String",proto:!0,forced:ju},{trimStart:Pu,trimLeft:Pu}),ee("String","trimLeft");var Iu=vn.end,Tu=Ou("trimEnd"),ku=Tu?function(){return Iu(this)}:"".trimEnd;kt({target:"String",proto:!0,forced:Tu},{trimEnd:ku,trimRight:ku}),ee("String","trimRight");var Lu=Dt("iterator"),Uu=!o(function(){var t=new URL("b?a=1&b=2&c=3","http://a"),e=t.searchParams,r="";return t.pathname="c%20d",e.forEach(function(t,n){e.delete("b"),r+=n+t}),!e.sort||"http://a/c%20d?a=1&c=3"!==t.href||"3"!==e.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!e[Lu]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==r||"x"!==new URL("http://x",void 0).host}),Mu=Object.assign,_u=Object.defineProperty,Nu=!Mu||o(function(){if(i&&1!==Mu({b:1},Mu(_u({},"a",{enumerable:!0,get:function(){_u(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach(function(t){e[t]=t}),7!=Mu({},t)[r]||qt(Mu({},e)).join("")!=n})?function(t,e){for(var r=Lt(t),n=arguments.length,o=1,a=wt.f,u=s.f;n>o;)for(var c,f=p(arguments[o++]),l=a?qt(f).concat(a(f)):qt(f),h=l.length,d=0;h>d;)c=l[d++],i&&!u.call(f,c)||(r[c]=f[c]);return r}:Mu,Cu=2147483647,Fu=/[^\0-\u007E]/,Bu=/[.\u3002\uFF0E\uFF61]/g,Du="Overflow: input needs wider integers to process",qu=Math.floor,zu=String.fromCharCode,Wu=function(t){return t+22+75*(t<26)},Ku=function(t,e,r){var n=0;for(t=r?qu(t/700):t>>1,t+=qu(t/e);t>455;n+=36)t=qu(t/35);return qu(n+36*t/(t+38))},Gu=function(t){var e,r,n=[],o=(t=function(t){for(var e=[],r=0,n=t.length;r<n;){var o=t.charCodeAt(r++);if(o>=55296&&o<=56319&&r<n){var i=t.charCodeAt(r++);56320==(64512&i)?e.push(((1023&o)<<10)+(1023&i)+65536):(e.push(o),r--)}else e.push(o)}return e}(t)).length,i=128,a=0,u=72;for(e=0;e<t.length;e++)(r=t[e])<128&&n.push(zu(r));var s=n.length,c=s;for(s&&n.push("-");c<o;){var f=Cu;for(e=0;e<t.length;e++)(r=t[e])>=i&&r<f&&(f=r);var l=c+1;if(f-i>qu((Cu-a)/l))throw RangeError(Du);for(a+=(f-i)*l,i=f,e=0;e<t.length;e++){if((r=t[e])<i&&++a>Cu)throw RangeError(Du);if(r==i){for(var h=a,p=36;;p+=36){var d=p<=u?1:p>=u+26?26:p-u;if(h<d)break;var v=h-d,g=36-d;n.push(zu(Wu(d+v%g))),h=qu(v/g)}n.push(zu(Wu(h))),u=Ku(a,l,c==s),a=0,++c}}++a,++i}return n.join("")},$u=ot("fetch"),Vu=ot("Headers"),Hu=Dt("iterator"),Xu="URLSearchParams",Yu="URLSearchParamsIterator",Ju=tt.set,Qu=tt.getterFor(Xu),Zu=tt.getterFor(Yu),ts=/\+/g,es=Array(4),rs=function(t){return es[t-1]||(es[t-1]=RegExp("((?:%[\\da-f]{2}){"+t+"})","gi"))},ns=function(t){try{return decodeURIComponent(t)}catch(e){return t}},os=function(t){var e=t.replace(ts," "),r=4;try{return decodeURIComponent(e)}catch(t){for(;r;)e=e.replace(rs(r--),ns);return e}},is=/[!'()~]|%20/g,as={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},us=function(t){return as[t]},ss=function(t){return encodeURIComponent(t).replace(is,us)},cs=function(t,e){if(e)for(var r,n,o=e.split("&"),i=0;i<o.length;)(r=o[i++]).length&&(n=r.split("="),t.push({key:os(n.shift()),value:os(n.join("="))}))},fs=function(t){this.entries.length=0,cs(this.entries,t)},ls=function(t,e){if(t<e)throw TypeError("Not enough arguments")},hs=Be(function(t,e){Ju(this,{type:Yu,iterator:on(Qu(t).entries),kind:e})},"Iterator",function(){var t=Zu(this),e=t.kind,r=t.iterator.next(),n=r.value;return r.done||(r.value="keys"===e?n.key:"values"===e?n.value:[n.key,n.value]),r}),ps=function(){_r(this,ps,Xu);var t,e,r,n,o,i,a,u,s,c=arguments.length>0?arguments[0]:void 0,f=this,l=[];if(Ju(f,{type:Xu,entries:l,updateURL:function(){},updateSearchParams:fs}),void 0!==c)if(g(c))if("function"==typeof(t=lr(c)))for(r=(e=t.call(c)).next;!(n=r.call(e)).done;){if((a=(i=(o=on(R(n.value))).next).call(o)).done||(u=i.call(o)).done||!i.call(o).done)throw TypeError("Expected sequence with length 2");l.push({key:a.value+"",value:u.value+""})}else for(s in c)b(c,s)&&l.push({key:s,value:c[s]+""});else cs(l,"string"==typeof c?"?"===c.charAt(0)?c.slice(1):c:c+"")},ds=ps.prototype;Fr(ds,{append:function(t,e){ls(arguments.length,2);var r=Qu(this);r.entries.push({key:t+"",value:e+""}),r.updateURL()},delete:function(t){ls(arguments.length,1);for(var e=Qu(this),r=e.entries,n=t+"",o=0;o<r.length;)r[o].key===n?r.splice(o,1):o++;e.updateURL()},get:function(t){ls(arguments.length,1);for(var e=Qu(this).entries,r=t+"",n=0;n<e.length;n++)if(e[n].key===r)return e[n].value;return null},getAll:function(t){ls(arguments.length,1);for(var e=Qu(this).entries,r=t+"",n=[],o=0;o<e.length;o++)e[o].key===r&&n.push(e[o].value);return n},has:function(t){ls(arguments.length,1);for(var e=Qu(this).entries,r=t+"",n=0;n<e.length;)if(e[n++].key===r)return!0;return!1},set:function(t,e){ls(arguments.length,1);for(var r,n=Qu(this),o=n.entries,i=!1,a=t+"",u=e+"",s=0;s<o.length;s++)(r=o[s]).key===a&&(i?o.splice(s--,1):(i=!0,r.value=u));i||o.push({key:a,value:u}),n.updateURL()},sort:function(){var t,e,r,n=Qu(this),o=n.entries,i=o.slice();for(o.length=0,r=0;r<i.length;r++){for(t=i[r],e=0;e<r;e++)if(o[e].key>t.key){o.splice(e,0,t);break}e===r&&o.push(t)}n.updateURL()},forEach:function(t){for(var e,r=Qu(this).entries,n=Zt(t,arguments.length>1?arguments[1]:void 0,3),o=0;o<r.length;)n((e=r[o++]).value,e.key,this)},keys:function(){return new hs(this,"keys")},values:function(){return new hs(this,"values")},entries:function(){return new hs(this,"entries")}},{enumerable:!0}),et(ds,Hu,ds.entries),et(ds,"toString",function(){for(var t,e=Qu(this).entries,r=[],n=0;n<e.length;)t=e[n++],r.push(ss(t.key)+"="+ss(t.value));return r.join("&")},{enumerable:!0}),_e(ps,Xu),kt({global:!0,forced:!Uu},{URLSearchParams:ps}),Uu||"function"!=typeof $u||"function"!=typeof Vu||kt({global:!0,enumerable:!0,forced:!0},{fetch:function(t){var e,r,n,o=[t];return arguments.length>1&&(g(e=arguments[1])&&cr(r=e.body)===Xu&&((n=e.headers?new Vu(e.headers):new Vu).has("content-type")||n.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),e=Ht(e,{body:c(0,String(r)),headers:c(0,n)})),o.push(e)),$u.apply(this,o)}});var vs,gs={URLSearchParams:ps,getState:Qu},ys=Oe.codeAt,ms=n.URL,bs=gs.URLSearchParams,ws=gs.getState,Ss=tt.set,Es=tt.getterFor("URL"),xs=Math.floor,As=Math.pow,Os="Invalid scheme",Rs="Invalid host",js="Invalid port",Ps=/[A-Za-z]/,Is=/[\d+-.A-Za-z]/,Ts=/\d/,ks=/^(0x|0X)/,Ls=/^[0-7]+$/,Us=/^\d+$/,Ms=/^[\dA-Fa-f]+$/,_s=/[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,Ns=/[\u0000\u0009\u000A\u000D #/:?@[\\]]/,Cs=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,Fs=/[\u0009\u000A\u000D]/g,Bs=function(t,e){var r,n,o;if("["==e.charAt(0)){if("]"!=e.charAt(e.length-1))return Rs;if(!(r=qs(e.slice(1,-1))))return Rs;t.host=r}else if(Xs(t)){if(e=function(t){var e,r,n=[],o=t.toLowerCase().replace(Bu,".").split(".");for(e=0;e<o.length;e++)n.push(Fu.test(r=o[e])?"xn--"+Gu(r):r);return n.join(".")}(e),_s.test(e))return Rs;if(null===(r=Ds(e)))return Rs;t.host=r}else{if(Ns.test(e))return Rs;for(r="",n=hr(e),o=0;o<n.length;o++)r+=Vs(n[o],Ws);t.host=r}},Ds=function(t){var e,r,n,o,i,a,u,s=t.split(".");if(s.length&&""==s[s.length-1]&&s.pop(),(e=s.length)>4)return t;for(r=[],n=0;n<e;n++){if(""==(o=s[n]))return t;if(i=10,o.length>1&&"0"==o.charAt(0)&&(i=ks.test(o)?16:8,o=o.slice(8==i?1:2)),""===o)a=0;else{if(!(10==i?Us:8==i?Ls:Ms).test(o))return t;a=parseInt(o,i)}r.push(a)}for(n=0;n<e;n++)if(a=r[n],n==e-1){if(a>=As(256,5-e))return null}else if(a>255)return null;for(u=r.pop(),n=0;n<r.length;n++)u+=r[n]*As(256,3-n);return u},qs=function(t){var e,r,n,o,i,a,u,s=[0,0,0,0,0,0,0,0],c=0,f=null,l=0,h=function(){return t.charAt(l)};if(":"==h()){if(":"!=t.charAt(1))return;l+=2,f=++c}for(;h();){if(8==c)return;if(":"!=h()){for(e=r=0;r<4&&Ms.test(h());)e=16*e+parseInt(h(),16),l++,r++;if("."==h()){if(0==r)return;if(l-=r,c>6)return;for(n=0;h();){if(o=null,n>0){if(!("."==h()&&n<4))return;l++}if(!Ts.test(h()))return;for(;Ts.test(h());){if(i=parseInt(h(),10),null===o)o=i;else{if(0==o)return;o=10*o+i}if(o>255)return;l++}s[c]=256*s[c]+o,2!=++n&&4!=n||c++}if(4!=n)return;break}if(":"==h()){if(l++,!h())return}else if(h())return;s[c++]=e}else{if(null!==f)return;l++,f=++c}}if(null!==f)for(a=c-f,c=7;0!=c&&a>0;)u=s[c],s[c--]=s[f+a-1],s[f+--a]=u;else if(8!=c)return;return s},zs=function(t){var e,r,n,o;if("number"==typeof t){for(e=[],r=0;r<4;r++)e.unshift(t%256),t=xs(t/256);return e.join(".")}if("object"==typeof t){for(e="",n=function(t){for(var e=null,r=1,n=null,o=0,i=0;i<8;i++)0!==t[i]?(o>r&&(e=n,r=o),n=null,o=0):(null===n&&(n=i),++o);return o>r&&(e=n,r=o),e}(t),r=0;r<8;r++)o&&0===t[r]||(o&&(o=!1),n===r?(e+=r?":":"::",o=!0):(e+=t[r].toString(16),r<7&&(e+=":")));return"["+e+"]"}return t},Ws={},Ks=Nu({},Ws,{" ":1,'"':1,"<":1,">":1,"`":1}),Gs=Nu({},Ks,{"#":1,"?":1,"{":1,"}":1}),$s=Nu({},Gs,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),Vs=function(t,e){var r=ys(t,0);return r>32&&r<127&&!b(e,t)?t:encodeURIComponent(t)},Hs={ftp:21,file:null,http:80,https:443,ws:80,wss:443},Xs=function(t){return b(Hs,t.scheme)},Ys=function(t){return""!=t.username||""!=t.password},Js=function(t){return!t.host||t.cannotBeABaseURL||"file"==t.scheme},Qs=function(t,e){var r;return 2==t.length&&Ps.test(t.charAt(0))&&(":"==(r=t.charAt(1))||!e&&"|"==r)},Zs=function(t){var e;return t.length>1&&Qs(t.slice(0,2))&&(2==t.length||"/"===(e=t.charAt(2))||"\\"===e||"?"===e||"#"===e)},tc=function(t){var e=t.path,r=e.length;!r||"file"==t.scheme&&1==r&&Qs(e[0],!0)||e.pop()},ec=function(t){return"."===t||"%2e"===t.toLowerCase()},rc={},nc={},oc={},ic={},ac={},uc={},sc={},cc={},fc={},lc={},hc={},pc={},dc={},vc={},gc={},yc={},mc={},bc={},wc={},Sc={},Ec={},xc=function(t,e,r,n){var o,i,a,u,s,c=r||rc,f=0,l="",h=!1,p=!1,d=!1;for(r||(t.scheme="",t.username="",t.password="",t.host=null,t.port=null,t.path=[],t.query=null,t.fragment=null,t.cannotBeABaseURL=!1,e=e.replace(Cs,"")),e=e.replace(Fs,""),o=hr(e);f<=o.length;){switch(i=o[f],c){case rc:if(!i||!Ps.test(i)){if(r)return Os;c=oc;continue}l+=i.toLowerCase(),c=nc;break;case nc:if(i&&(Is.test(i)||"+"==i||"-"==i||"."==i))l+=i.toLowerCase();else{if(":"!=i){if(r)return Os;l="",c=oc,f=0;continue}if(r&&(Xs(t)!=b(Hs,l)||"file"==l&&(Ys(t)||null!==t.port)||"file"==t.scheme&&!t.host))return;if(t.scheme=l,r)return void(Xs(t)&&Hs[t.scheme]==t.port&&(t.port=null));l="","file"==t.scheme?c=vc:Xs(t)&&n&&n.scheme==t.scheme?c=ic:Xs(t)?c=cc:"/"==o[f+1]?(c=ac,f++):(t.cannotBeABaseURL=!0,t.path.push(""),c=wc)}break;case oc:if(!n||n.cannotBeABaseURL&&"#"!=i)return Os;if(n.cannotBeABaseURL&&"#"==i){t.scheme=n.scheme,t.path=n.path.slice(),t.query=n.query,t.fragment="",t.cannotBeABaseURL=!0,c=Ec;break}c="file"==n.scheme?vc:uc;continue;case ic:if("/"!=i||"/"!=o[f+1]){c=uc;continue}c=fc,f++;break;case ac:if("/"==i){c=lc;break}c=bc;continue;case uc:if(t.scheme=n.scheme,i==vs)t.username=n.username,t.password=n.password,t.host=n.host,t.port=n.port,t.path=n.path.slice(),t.query=n.query;else if("/"==i||"\\"==i&&Xs(t))c=sc;else if("?"==i)t.username=n.username,t.password=n.password,t.host=n.host,t.port=n.port,t.path=n.path.slice(),t.query="",c=Sc;else{if("#"!=i){t.username=n.username,t.password=n.password,t.host=n.host,t.port=n.port,t.path=n.path.slice(),t.path.pop(),c=bc;continue}t.username=n.username,t.password=n.password,t.host=n.host,t.port=n.port,t.path=n.path.slice(),t.query=n.query,t.fragment="",c=Ec}break;case sc:if(!Xs(t)||"/"!=i&&"\\"!=i){if("/"!=i){t.username=n.username,t.password=n.password,t.host=n.host,t.port=n.port,c=bc;continue}c=lc}else c=fc;break;case cc:if(c=fc,"/"!=i||"/"!=l.charAt(f+1))continue;f++;break;case fc:if("/"!=i&&"\\"!=i){c=lc;continue}break;case lc:if("@"==i){h&&(l="%40"+l),h=!0,a=hr(l);for(var v=0;v<a.length;v++){var g=a[v];if(":"!=g||d){var y=Vs(g,$s);d?t.password+=y:t.username+=y}else d=!0}l=""}else if(i==vs||"/"==i||"?"==i||"#"==i||"\\"==i&&Xs(t)){if(h&&""==l)return"Invalid authority";f-=hr(l).length+1,l="",c=hc}else l+=i;break;case hc:case pc:if(r&&"file"==t.scheme){c=yc;continue}if(":"!=i||p){if(i==vs||"/"==i||"?"==i||"#"==i||"\\"==i&&Xs(t)){if(Xs(t)&&""==l)return Rs;if(r&&""==l&&(Ys(t)||null!==t.port))return;if(u=Bs(t,l))return u;if(l="",c=mc,r)return;continue}"["==i?p=!0:"]"==i&&(p=!1),l+=i}else{if(""==l)return Rs;if(u=Bs(t,l))return u;if(l="",c=dc,r==pc)return}break;case dc:if(!Ts.test(i)){if(i==vs||"/"==i||"?"==i||"#"==i||"\\"==i&&Xs(t)||r){if(""!=l){var m=parseInt(l,10);if(m>65535)return js;t.port=Xs(t)&&m===Hs[t.scheme]?null:m,l=""}if(r)return;c=mc;continue}return js}l+=i;break;case vc:if(t.scheme="file","/"==i||"\\"==i)c=gc;else{if(!n||"file"!=n.scheme){c=bc;continue}if(i==vs)t.host=n.host,t.path=n.path.slice(),t.query=n.query;else if("?"==i)t.host=n.host,t.path=n.path.slice(),t.query="",c=Sc;else{if("#"!=i){Zs(o.slice(f).join(""))||(t.host=n.host,t.path=n.path.slice(),tc(t)),c=bc;continue}t.host=n.host,t.path=n.path.slice(),t.query=n.query,t.fragment="",c=Ec}}break;case gc:if("/"==i||"\\"==i){c=yc;break}n&&"file"==n.scheme&&!Zs(o.slice(f).join(""))&&(Qs(n.path[0],!0)?t.path.push(n.path[0]):t.host=n.host),c=bc;continue;case yc:if(i==vs||"/"==i||"\\"==i||"?"==i||"#"==i){if(!r&&Qs(l))c=bc;else if(""==l){if(t.host="",r)return;c=mc}else{if(u=Bs(t,l))return u;if("localhost"==t.host&&(t.host=""),r)return;l="",c=mc}continue}l+=i;break;case mc:if(Xs(t)){if(c=bc,"/"!=i&&"\\"!=i)continue}else if(r||"?"!=i)if(r||"#"!=i){if(i!=vs&&(c=bc,"/"!=i))continue}else t.fragment="",c=Ec;else t.query="",c=Sc;break;case bc:if(i==vs||"/"==i||"\\"==i&&Xs(t)||!r&&("?"==i||"#"==i)){if(".."===(s=(s=l).toLowerCase())||"%2e."===s||".%2e"===s||"%2e%2e"===s?(tc(t),"/"==i||"\\"==i&&Xs(t)||t.path.push("")):ec(l)?"/"==i||"\\"==i&&Xs(t)||t.path.push(""):("file"==t.scheme&&!t.path.length&&Qs(l)&&(t.host&&(t.host=""),l=l.charAt(0)+":"),t.path.push(l)),l="","file"==t.scheme&&(i==vs||"?"==i||"#"==i))for(;t.path.length>1&&""===t.path[0];)t.path.shift();"?"==i?(t.query="",c=Sc):"#"==i&&(t.fragment="",c=Ec)}else l+=Vs(i,Gs);break;case wc:"?"==i?(t.query="",c=Sc):"#"==i?(t.fragment="",c=Ec):i!=vs&&(t.path[0]+=Vs(i,Ws));break;case Sc:r||"#"!=i?i!=vs&&("'"==i&&Xs(t)?t.query+="%27":t.query+="#"==i?"%23":Vs(i,Ws)):(t.fragment="",c=Ec);break;case Ec:i!=vs&&(t.fragment+=Vs(i,Ks))}f++}},Ac=function(t){var e,r,n=_r(this,Ac,"URL"),o=arguments.length>1?arguments[1]:void 0,a=String(t),u=Ss(n,{type:"URL"});if(void 0!==o)if(o instanceof Ac)e=Es(o);else if(r=xc(e={},String(o)))throw TypeError(r);if(r=xc(u,a,null,e))throw TypeError(r);var s=u.searchParams=new bs,c=ws(s);c.updateSearchParams(u.query),c.updateURL=function(){u.query=String(s)||null},i||(n.href=Rc.call(n),n.origin=jc.call(n),n.protocol=Pc.call(n),n.username=Ic.call(n),n.password=Tc.call(n),n.host=kc.call(n),n.hostname=Lc.call(n),n.port=Uc.call(n),n.pathname=Mc.call(n),n.search=_c.call(n),n.searchParams=Nc.call(n),n.hash=Cc.call(n))},Oc=Ac.prototype,Rc=function(){var t=Es(this),e=t.scheme,r=t.username,n=t.password,o=t.host,i=t.port,a=t.path,u=t.query,s=t.fragment,c=e+":";return null!==o?(c+="//",Ys(t)&&(c+=r+(n?":"+n:"")+"@"),c+=zs(o),null!==i&&(c+=":"+i)):"file"==e&&(c+="//"),c+=t.cannotBeABaseURL?a[0]:a.length?"/"+a.join("/"):"",null!==u&&(c+="?"+u),null!==s&&(c+="#"+s),c},jc=function(){var t=Es(this),e=t.scheme,r=t.port;if("blob"==e)try{return new URL(e.path[0]).origin}catch(t){return"null"}return"file"!=e&&Xs(t)?e+"://"+zs(t.host)+(null!==r?":"+r:""):"null"},Pc=function(){return Es(this).scheme+":"},Ic=function(){return Es(this).username},Tc=function(){return Es(this).password},kc=function(){var t=Es(this),e=t.host,r=t.port;return null===e?"":null===r?zs(e):zs(e)+":"+r},Lc=function(){var t=Es(this).host;return null===t?"":zs(t)},Uc=function(){var t=Es(this).port;return null===t?"":String(t)},Mc=function(){var t=Es(this),e=t.path;return t.cannotBeABaseURL?e[0]:e.length?"/"+e.join("/"):""},_c=function(){var t=Es(this).query;return t?"?"+t:""},Nc=function(){return Es(this).searchParams},Cc=function(){var t=Es(this).fragment;return t?"#"+t:""},Fc=function(t,e){return{get:t,set:e,configurable:!0,enumerable:!0}};if(i&&zt(Oc,{href:Fc(Rc,function(t){var e=Es(this),r=String(t),n=xc(e,r);if(n)throw TypeError(n);ws(e.searchParams).updateSearchParams(e.query)}),origin:Fc(jc),protocol:Fc(Pc,function(t){var e=Es(this);xc(e,String(t)+":",rc)}),username:Fc(Ic,function(t){var e=Es(this),r=hr(String(t));if(!Js(e)){e.username="";for(var n=0;n<r.length;n++)e.username+=Vs(r[n],$s)}}),password:Fc(Tc,function(t){var e=Es(this),r=hr(String(t));if(!Js(e)){e.password="";for(var n=0;n<r.length;n++)e.password+=Vs(r[n],$s)}}),host:Fc(kc,function(t){var e=Es(this);e.cannotBeABaseURL||xc(e,String(t),hc)}),hostname:Fc(Lc,function(t){var e=Es(this);e.cannotBeABaseURL||xc(e,String(t),pc)}),port:Fc(Uc,function(t){var e=Es(this);Js(e)||(""==(t=String(t))?e.port=null:xc(e,t,dc))}),pathname:Fc(Mc,function(t){var e=Es(this);e.cannotBeABaseURL||(e.path=[],xc(e,t+"",mc))}),search:Fc(_c,function(t){var e=Es(this);""==(t=String(t))?e.query=null:("?"==t.charAt(0)&&(t=t.slice(1)),e.query="",xc(e,t,Sc)),ws(e.searchParams).updateSearchParams(e.query)}),searchParams:Fc(Nc),hash:Fc(Cc,function(t){var e=Es(this);""!=(t=String(t))?("#"==t.charAt(0)&&(t=t.slice(1)),e.fragment="",xc(e,t,Ec)):e.fragment=null})}),et(Oc,"toJSON",function(){return Rc.call(this)},{enumerable:!0}),et(Oc,"toString",function(){return Rc.call(this)},{enumerable:!0}),ms){var Bc=ms.createObjectURL,Dc=ms.revokeObjectURL;Bc&&et(Ac,"createObjectURL",function(t){return Bc.apply(ms,arguments)}),Dc&&et(Ac,"revokeObjectURL",function(t){return Dc.apply(ms,arguments)})}_e(Ac,"URL"),kt({global:!0,forced:!Uu,sham:!i},{URL:Ac}),kt({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}}),kt({target:"WeakMap",stat:!0},{from:en}),kt({target:"WeakMap",stat:!0},{of:rn}),kt({target:"WeakMap",proto:!0,real:!0,forced:D},{deleteAll:function(){return nn.apply(this,arguments)}}),kt({target:"WeakMap",proto:!0,real:!0,forced:D},{upsert:cn}),Cr("WeakSet",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},mo),kt({target:"WeakSet",proto:!0,real:!0,forced:D},{addAll:function(){return Hi.apply(this,arguments)}}),kt({target:"WeakSet",proto:!0,real:!0,forced:D},{deleteAll:function(){return nn.apply(this,arguments)}}),kt({target:"WeakSet",stat:!0},{from:en}),kt({target:"WeakSet",stat:!0},{of:rn});var qc,zc,Wc,Kc=n.Promise,Gc=/(iphone|ipod|ipad).*applewebkit/i.test(Qi),$c=n.location,Vc=n.setImmediate,Hc=n.clearImmediate,Xc=n.process,Yc=n.MessageChannel,Jc=n.Dispatch,Qc=0,Zc={},tf=function(t){if(Zc.hasOwnProperty(t)){var e=Zc[t];delete Zc[t],e()}},ef=function(t){return function(){tf(t)}},rf=function(t){tf(t.data)},nf=function(t){n.postMessage(t+"",$c.protocol+"//"+$c.host)};Vc&&Hc||(Vc=function(t){for(var e=[],r=1;arguments.length>r;)e.push(arguments[r++]);return Zc[++Qc]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},qc(Qc),Qc},Hc=function(t){delete Zc[t]},"process"==l(Xc)?qc=function(t){Xc.nextTick(ef(t))}:Jc&&Jc.now?qc=function(t){Jc.now(ef(t))}:Yc&&!Gc?(Wc=(zc=new Yc).port2,zc.port1.onmessage=rf,qc=Zt(Wc.postMessage,Wc,1)):!n.addEventListener||"function"!=typeof postMessage||n.importScripts||o(nf)||"file:"===$c.protocol?qc="onreadystatechange"in E("script")?function(t){Wt.appendChild(E("script")).onreadystatechange=function(){Wt.removeChild(this),tf(t)}}:function(t){setTimeout(ef(t),0)}:(qc=nf,n.addEventListener("message",rf,!1)));var of,af,uf,sf,cf,ff,lf,hf,pf={set:Vc,clear:Hc},df=O.f,vf=pf.set,gf=n.MutationObserver||n.WebKitMutationObserver,yf=n.process,mf=n.Promise,bf="process"==l(yf),wf=df(n,"queueMicrotask"),Sf=wf&&wf.value;Sf||(of=function(){var t,e;for(bf&&(t=yf.domain)&&t.exit();af;){e=af.fn,af=af.next;try{e()}catch(t){throw af?sf():uf=void 0,t}}uf=void 0,t&&t.enter()},bf?sf=function(){yf.nextTick(of)}:gf&&!Gc?(cf=!0,ff=document.createTextNode(""),new gf(of).observe(ff,{characterData:!0}),sf=function(){ff.data=cf=!cf}):mf&&mf.resolve?(lf=mf.resolve(void 0),hf=lf.then,sf=function(){hf.call(lf,of)}):sf=function(){vf.call(n,of)});var Ef,xf,Af,Of,Rf=Sf||function(t){var e={fn:t,next:void 0};uf&&(uf.next=e),af||(af=e,sf()),uf=e},jf=function(t){var e,r;this.promise=new t(function(t,n){if(void 0!==e||void 0!==r)throw TypeError("Bad Promise constructor");e=t,r=n}),this.resolve=Qt(e),this.reject=Qt(r)},Pf={f:function(t){return new jf(t)}},If=function(t,e){if(R(t),g(e)&&e.constructor===t)return e;var r=Pf.f(t);return(0,r.resolve)(e),r.promise},Tf=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},kf=pf.set,Lf=Dt("species"),Uf="Promise",Mf=tt.get,_f=tt.set,Nf=tt.getterFor(Uf),Cf=Kc,Ff=n.TypeError,Bf=n.document,Df=n.process,qf=ot("fetch"),zf=Pf.f,Wf=zf,Kf="process"==l(Df),Gf=!!(Bf&&Bf.createEvent&&n.dispatchEvent),$f="unhandledrejection",Vf=It(Uf,function(){if(C(Cf)===String(Cf)){if(66===ra)return!0;if(!Kf&&"function"!=typeof PromiseRejectionEvent)return!0}if(ra>=51&&/native code/.test(Cf))return!1;var t=Cf.resolve(1),e=function(t){t(function(){},function(){})};return(t.constructor={})[Lf]=e,!(t.then(function(){})instanceof e)}),Hf=Vf||!yr(function(t){Cf.all(t).catch(function(){})}),Xf=function(t){var e;return!(!g(t)||"function"!=typeof(e=t.then))&&e},Yf=function(t,e,r){if(!e.notified){e.notified=!0;var n=e.reactions;Rf(function(){for(var o=e.value,i=1==e.state,a=0;n.length>a;){var u,s,c,f=n[a++],l=i?f.ok:f.fail,h=f.resolve,p=f.reject,d=f.domain;try{l?(i||(2===e.rejection&&tl(t,e),e.rejection=1),!0===l?u=o:(d&&d.enter(),u=l(o),d&&(d.exit(),c=!0)),u===f.promise?p(Ff("Promise-chain cycle")):(s=Xf(u))?s.call(u,h,p):h(u)):p(o)}catch(t){d&&!c&&d.exit(),p(t)}}e.reactions=[],e.notified=!1,r&&!e.rejection&&Qf(t,e)})}},Jf=function(t,e,r){var o,i;Gf?((o=Bf.createEvent("Event")).promise=e,o.reason=r,o.initEvent(t,!1,!0),n.dispatchEvent(o)):o={promise:e,reason:r},(i=n["on"+t])?i(o):t===$f&&function(t,e){var r=n.console;r&&r.error&&(1===arguments.length?r.error(t):r.error(t,e))}("Unhandled promise rejection",r)},Qf=function(t,e){kf.call(n,function(){var r,n=e.value;if(Zf(e)&&(r=Tf(function(){Kf?Df.emit("unhandledRejection",n,t):Jf($f,t,n)}),e.rejection=Kf||Zf(e)?2:1,r.error))throw r.value})},Zf=function(t){return 1!==t.rejection&&!t.parent},tl=function(t,e){kf.call(n,function(){Kf?Df.emit("rejectionHandled",t):Jf("rejectionhandled",t,e.value)})},el=function(t,e,r,n){return function(o){t(e,r,o,n)}},rl=function(t,e,r,n){e.done||(e.done=!0,n&&(e=n),e.value=r,e.state=2,Yf(t,e,!0))},nl=function t(e,r,n,o){if(!r.done){r.done=!0,o&&(r=o);try{if(e===n)throw Ff("Promise can't be resolved itself");var i=Xf(n);i?Rf(function(){var o={done:!1};try{i.call(n,el(t,e,o,r),el(rl,e,o,r))}catch(t){rl(e,o,t,r)}}):(r.value=n,r.state=1,Yf(e,r,!1))}catch(t){rl(e,{done:!1},t,r)}}};Vf&&(Cf=function(t){_r(this,Cf,Uf),Qt(t),Ef.call(this);var e=Mf(this);try{t(el(nl,this,e),el(rl,this,e))}catch(t){rl(this,e,t)}},(Ef=function(t){_f(this,{type:Uf,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=Fr(Cf.prototype,{then:function(t,e){var r=Nf(this),n=zf(sn(this,Cf));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=Kf?Df.domain:void 0,r.parent=!0,r.reactions.push(n),0!=r.state&&Yf(this,r,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),xf=function(){var t=new Ef,e=Mf(t);this.promise=t,this.resolve=el(nl,t,e),this.reject=el(rl,t,e)},Pf.f=zf=function(t){return t===Cf||t===Af?new xf(t):Wf(t)},"function"==typeof Kc&&(Of=Kc.prototype.then,et(Kc.prototype,"then",function(t,e){var r=this;return new Cf(function(t,e){Of.call(r,t,e)}).then(t,e)},{unsafe:!0}),"function"==typeof qf&&kt({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return If(Cf,qf.apply(n,arguments))}}))),kt({global:!0,wrap:!0,forced:Vf},{Promise:Cf}),_e(Cf,Uf,!1),Dr(Uf),Af=ot(Uf),kt({target:Uf,stat:!0,forced:Vf},{reject:function(t){var e=zf(this);return e.reject.call(void 0,t),e.promise}}),kt({target:Uf,stat:!0,forced:Vf},{resolve:function(t){return If(this,t)}}),kt({target:Uf,stat:!0,forced:Hf},{all:function(t){var e=this,r=zf(e),n=r.resolve,o=r.reject,i=Tf(function(){var r=Qt(e.resolve),i=[],a=0,u=1;Mr(t,function(t){var s=a++,c=!1;i.push(void 0),u++,r.call(e,t).then(function(t){c||(c=!0,i[s]=t,--u||n(i))},o)}),--u||n(i)});return i.error&&o(i.value),r.promise},race:function(t){var e=this,r=zf(e),n=r.reject,o=Tf(function(){var o=Qt(e.resolve);Mr(t,function(t){o.call(e,t).then(r.resolve,n)})});return o.error&&n(o.value),r.promise}}),kt({target:"Promise",stat:!0},{allSettled:function(t){var e=this,r=Pf.f(e),n=r.resolve,o=r.reject,i=Tf(function(){var r=Qt(e.resolve),o=[],i=0,a=1;Mr(t,function(t){var u=i++,s=!1;o.push(void 0),a++,r.call(e,t).then(function(t){s||(s=!0,o[u]={status:"fulfilled",value:t},--a||n(o))},function(t){s||(s=!0,o[u]={status:"rejected",reason:t},--a||n(o))})}),--a||n(o)});return i.error&&o(i.value),r.promise}});var ol=!!Kc&&o(function(){Kc.prototype.finally.call({then:function(){}},function(){})});kt({target:"Promise",proto:!0,real:!0,forced:ol},{finally:function(t){var e=sn(this,ot("Promise")),r="function"==typeof t;return this.then(r?function(r){return If(e,t()).then(function(){return r})}:t,r?function(r){return If(e,t()).then(function(){throw r})}:t)}}),"function"!=typeof Kc||Kc.prototype.finally||et(Kc.prototype,"finally",ot("Promise").prototype.finally);var il=tt.set,al=tt.getterFor("AggregateError"),ul=function(t,e){var r=this;if(!(r instanceof ul))return new ul(t,e);qe&&(r=qe(new Error(e),Ie(r)));var n=[];return Mr(t,n.push,n),i?il(r,{errors:n,type:"AggregateError"}):r.errors=n,void 0!==e&&I(r,"message",String(e)),r};ul.prototype=Ht(Error.prototype,{constructor:c(5,ul),message:c(5,""),name:c(5,"AggregateError")}),i&&P.f(ul.prototype,"errors",{get:function(){return al(this).errors},configurable:!0}),kt({global:!0},{AggregateError:ul}),kt({target:"Promise",stat:!0},{try:function(t){var e=Pf.f(this),r=Tf(t);return(r.error?e.reject:e.resolve)(r.value),e.promise}});var sl="No one promise resolved";kt({target:"Promise",stat:!0},{any:function(t){var e=this,r=Pf.f(e),n=r.resolve,o=r.reject,i=Tf(function(){var r=Qt(e.resolve),i=[],a=0,u=1,s=!1;Mr(t,function(t){var c=a++,f=!1;i.push(void 0),u++,r.call(e,t).then(function(t){f||s||(s=!0,n(t))},function(t){f||s||(f=!0,i[c]=t,--u||o(new(ot("AggregateError"))(i,sl)))})}),--u||o(new(ot("AggregateError"))(i,sl))});return i.error&&o(i.value),r.promise}}),ee("Promise","finally");var cl="URLSearchParams"in self,fl="Symbol"in self&&"iterator"in Symbol,ll="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),hl="FormData"in self,pl="ArrayBuffer"in self;if(pl)var dl=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],vl=ArrayBuffer.isView||function(t){return t&&dl.indexOf(Object.prototype.toString.call(t))>-1};function gl(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function yl(t){return"string"!=typeof t&&(t=String(t)),t}function ml(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return fl&&(e[Symbol.iterator]=function(){return e}),e}function bl(t){this.map={},t instanceof bl?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function wl(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function Sl(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function El(t){var e=new FileReader,r=Sl(e);return e.readAsArrayBuffer(t),r}function xl(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function Al(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:ll&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:hl&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:cl&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():pl&&ll&&(e=t)&&DataView.prototype.isPrototypeOf(e)?(this._bodyArrayBuffer=xl(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):pl&&(ArrayBuffer.prototype.isPrototypeOf(t)||vl(t))?this._bodyArrayBuffer=xl(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):cl&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},ll&&(this.blob=function(){var t=wl(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?wl(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(El)}),this.text=function(){var t=wl(this);if(t)return t;if(this._bodyBlob)return function(t){var e=new FileReader,r=Sl(e);return e.readAsText(t),r}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},hl&&(this.formData=function(){return this.text().then(jl)}),this.json=function(){return this.text().then(JSON.parse)},this}bl.prototype.append=function(t,e){t=gl(t),e=yl(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},bl.prototype.delete=function(t){delete this.map[gl(t)]},bl.prototype.get=function(t){return t=gl(t),this.has(t)?this.map[t]:null},bl.prototype.has=function(t){return this.map.hasOwnProperty(gl(t))},bl.prototype.set=function(t,e){this.map[gl(t)]=yl(e)},bl.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},bl.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),ml(t)},bl.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),ml(t)},bl.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),ml(t)},fl&&(bl.prototype[Symbol.iterator]=bl.prototype.entries);var Ol=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function Rl(t,e){var r,n,o=(e=e||{}).body;if(t instanceof Rl){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new bl(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new bl(e.headers)),this.method=(n=(r=e.method||this.method||"GET").toUpperCase(),Ol.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function jl(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function Pl(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new bl(e.headers),this.url=e.url||"",this._initBody(t)}Rl.prototype.clone=function(){return new Rl(this,{body:this._bodyInit})},Al.call(Rl.prototype),Al.call(Pl.prototype),Pl.prototype.clone=function(){return new Pl(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new bl(this.headers),url:this.url})},Pl.error=function(){var t=new Pl(null,{status:0,statusText:""});return t.type="error",t};var Il=[301,302,303,307,308];Pl.redirect=function(t,e){if(-1===Il.indexOf(e))throw new RangeError("Invalid status code");return new Pl(null,{status:e,headers:{location:t}})};var Tl=self.DOMException;try{new Tl}catch(t){(Tl=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),Tl.prototype.constructor=Tl}function kl(t,e){return new Promise(function(r,n){var o=new Rl(t,e);if(o.signal&&o.signal.aborted)return n(new Tl("Aborted","AbortError"));var i=new XMLHttpRequest;function a(){i.abort()}i.onload=function(){var t,e,n={status:i.status,statusText:i.statusText,headers:(t=i.getAllResponseHeaders()||"",e=new bl,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e)};n.url="responseURL"in i?i.responseURL:n.headers.get("X-Request-URL"),r(new Pl("response"in i?i.response:i.responseText,n))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.onabort=function(){n(new Tl("Aborted","AbortError"))},i.open(o.method,o.url,!0),"include"===o.credentials?i.withCredentials=!0:"omit"===o.credentials&&(i.withCredentials=!1),"responseType"in i&&ll&&(i.responseType="blob"),o.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),o.signal&&(o.signal.addEventListener("abort",a),i.onreadystatechange=function(){4===i.readyState&&o.signal.removeEventListener("abort",a)}),i.send(void 0===o._bodyInit?null:o._bodyInit)})}kl.polyfill=!0,self.fetch||(self.fetch=kl,self.Headers=bl,self.Request=Rl,self.Response=Pl);var Ll=Object.getOwnPropertySymbols,Ul=Object.prototype.hasOwnProperty,Ml=Object.prototype.propertyIsEnumerable;function _l(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var Nl=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var r,n,o=_l(t),i=1;i<arguments.length;i++){for(var a in r=Object(arguments[i]))Ul.call(r,a)&&(o[a]=r[a]);if(Ll){n=Ll(r);for(var u=0;u<n.length;u++)Ml.call(r,n[u])&&(o[n[u]]=r[n[u]])}}return o};Object.assign=Nl}();


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.2';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "../training-shared/node_modules/react/cjs/react.development.js":
/*!**********************************************************************!*\
  !*** ../training-shared/node_modules/react/cjs/react.development.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.2';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "../training-shared/node_modules/react/index.js":
/*!******************************************************!*\
  !*** ../training-shared/node_modules/react/index.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "../training-shared/node_modules/react/cjs/react.development.js");
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/client/polyfills.js"));
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL2NsaWVudC9wb2x5ZmlsbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL3BvbHlmaWxsLW5vbW9kdWxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi90cmFpbmluZy1zaGFyZWQvbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL3RyYWluaW5nLXNoYXJlZC9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBYSxzQ0FBc0Msc0JBQXNCLHNCQUFzQjtBQUMvRix5Qzs7Ozs7Ozs7OztBQ0RBLFlBQVksc0dBQXNHLHFCQUFNLENBQUMscUJBQU0sa0NBQWtDLGNBQWMsT0FBTyxZQUFZLGdDQUFnQyxrQkFBa0IsMEJBQTBCLHFMQUFxTCxJQUFJLFlBQVksU0FBUyxVQUFVLGlCQUFpQixrQ0FBa0MsSUFBSSxlQUFlLFVBQVUsS0FBSyxNQUFNLDJEQUEyRCxjQUFjLElBQUksZ0JBQWdCLGdCQUFnQix3QkFBd0IsR0FBRyxpQkFBaUIsT0FBTywrREFBK0QsS0FBSyx3QkFBd0IsNkJBQTZCLDJCQUEyQiwyQ0FBMkMsY0FBYyw0Q0FBNEMsc0JBQXNCLHNEQUFzRCxTQUFTLGVBQWUsZUFB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OztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0EseUNBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLFNBQVM7QUFDVCx3QkFBd0I7QUFDeEI7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNULHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1Qsa0NBQWtDO0FBQ2xDO0FBQ0EsU0FBUztBQUNULDRCQUE0QjtBQUM1QjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRDs7QUFFMUQ7QUFDQTs7QUFFQTtBQUNBLDBEQUEwRDtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxrQkFBa0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7OztBQUdqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIQUEwSDtBQUMxSDtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbURBQW1EOztBQUVuRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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O0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksYUFBYTtBQUN6QjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSEFBMEg7QUFDMUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtRUFBbUU7O0FBRW5FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsRUFBRTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7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ZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL3BvbHlmaWxsLW5vbW9kdWxlJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIGFzc2lnbj1PYmplY3QuYXNzaWduLmJpbmQoT2JqZWN0KTttb2R1bGUuZXhwb3J0cz1hc3NpZ247bW9kdWxlLmV4cG9ydHMuZGVmYXVsdD1tb2R1bGUuZXhwb3J0cztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9iamVjdC1hc3NpZ24uanMubWFwIiwiIWZ1bmN0aW9uKCl7dmFyIHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczpcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnt9O2Z1bmN0aW9uIGUodCl7dmFyIGU9e2V4cG9ydHM6e319O3JldHVybiB0KGUsZS5leHBvcnRzKSxlLmV4cG9ydHN9dmFyIHI9ZnVuY3Rpb24odCl7cmV0dXJuIHQmJnQuTWF0aD09TWF0aCYmdH0sbj1yKFwib2JqZWN0XCI9PXR5cGVvZiBnbG9iYWxUaGlzJiZnbG9iYWxUaGlzKXx8cihcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3cpfHxyKFwib2JqZWN0XCI9PXR5cGVvZiBzZWxmJiZzZWxmKXx8cihcIm9iamVjdFwiPT10eXBlb2YgdCYmdCl8fEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSxvPWZ1bmN0aW9uKHQpe3RyeXtyZXR1cm4hIXQoKX1jYXRjaCh0KXtyZXR1cm4hMH19LGk9IW8oZnVuY3Rpb24oKXtyZXR1cm4gNyE9T2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LDEse2dldDpmdW5jdGlvbigpe3JldHVybiA3fX0pWzFdfSksYT17fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSx1PU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iscz17Zjp1JiYhYS5jYWxsKHsxOjJ9LDEpP2Z1bmN0aW9uKHQpe3ZhciBlPXUodGhpcyx0KTtyZXR1cm4hIWUmJmUuZW51bWVyYWJsZX06YX0sYz1mdW5jdGlvbih0LGUpe3JldHVybntlbnVtZXJhYmxlOiEoMSZ0KSxjb25maWd1cmFibGU6ISgyJnQpLHdyaXRhYmxlOiEoNCZ0KSx2YWx1ZTplfX0sZj17fS50b1N0cmluZyxsPWZ1bmN0aW9uKHQpe3JldHVybiBmLmNhbGwodCkuc2xpY2UoOCwtMSl9LGg9XCJcIi5zcGxpdCxwPW8oZnVuY3Rpb24oKXtyZXR1cm4hT2JqZWN0KFwielwiKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKX0pP2Z1bmN0aW9uKHQpe3JldHVyblwiU3RyaW5nXCI9PWwodCk/aC5jYWxsKHQsXCJcIik6T2JqZWN0KHQpfTpPYmplY3QsZD1mdW5jdGlvbih0KXtpZihudWxsPT10KXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiK3QpO3JldHVybiB0fSx2PWZ1bmN0aW9uKHQpe3JldHVybiBwKGQodCkpfSxnPWZ1bmN0aW9uKHQpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiB0P251bGwhPT10OlwiZnVuY3Rpb25cIj09dHlwZW9mIHR9LHk9ZnVuY3Rpb24odCxlKXtpZighZyh0KSlyZXR1cm4gdDt2YXIgcixuO2lmKGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mKHI9dC50b1N0cmluZykmJiFnKG49ci5jYWxsKHQpKSlyZXR1cm4gbjtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZihyPXQudmFsdWVPZikmJiFnKG49ci5jYWxsKHQpKSlyZXR1cm4gbjtpZighZSYmXCJmdW5jdGlvblwiPT10eXBlb2Yocj10LnRvU3RyaW5nKSYmIWcobj1yLmNhbGwodCkpKXJldHVybiBuO3Rocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKX0sbT17fS5oYXNPd25Qcm9wZXJ0eSxiPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIG0uY2FsbCh0LGUpfSx3PW4uZG9jdW1lbnQsUz1nKHcpJiZnKHcuY3JlYXRlRWxlbWVudCksRT1mdW5jdGlvbih0KXtyZXR1cm4gUz93LmNyZWF0ZUVsZW1lbnQodCk6e319LHg9IWkmJiFvKGZ1bmN0aW9uKCl7cmV0dXJuIDchPU9iamVjdC5kZWZpbmVQcm9wZXJ0eShFKFwiZGl2XCIpLFwiYVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gN319KS5hfSksQT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLE89e2Y6aT9BOmZ1bmN0aW9uKHQsZSl7aWYodD12KHQpLGU9eShlLCEwKSx4KXRyeXtyZXR1cm4gQSh0LGUpfWNhdGNoKHQpe31pZihiKHQsZSkpcmV0dXJuIGMoIXMuZi5jYWxsKHQsZSksdFtlXSl9fSxSPWZ1bmN0aW9uKHQpe2lmKCFnKHQpKXRocm93IFR5cGVFcnJvcihTdHJpbmcodCkrXCIgaXMgbm90IGFuIG9iamVjdFwiKTtyZXR1cm4gdH0saj1PYmplY3QuZGVmaW5lUHJvcGVydHksUD17ZjppP2o6ZnVuY3Rpb24odCxlLHIpe2lmKFIodCksZT15KGUsITApLFIocikseCl0cnl7cmV0dXJuIGoodCxlLHIpfWNhdGNoKHQpe31pZihcImdldFwiaW4gcnx8XCJzZXRcImluIHIpdGhyb3cgVHlwZUVycm9yKFwiQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWRcIik7cmV0dXJuXCJ2YWx1ZVwiaW4gciYmKHRbZV09ci52YWx1ZSksdH19LEk9aT9mdW5jdGlvbih0LGUscil7cmV0dXJuIFAuZih0LGUsYygxLHIpKX06ZnVuY3Rpb24odCxlLHIpe3JldHVybiB0W2VdPXIsdH0sVD1mdW5jdGlvbih0LGUpe3RyeXtJKG4sdCxlKX1jYXRjaChyKXtuW3RdPWV9cmV0dXJuIGV9LGs9XCJfX2NvcmUtanNfc2hhcmVkX19cIixMPW5ba118fFQoayx7fSksVT1GdW5jdGlvbi50b1N0cmluZztcImZ1bmN0aW9uXCIhPXR5cGVvZiBMLmluc3BlY3RTb3VyY2UmJihMLmluc3BlY3RTb3VyY2U9ZnVuY3Rpb24odCl7cmV0dXJuIFUuY2FsbCh0KX0pO3ZhciBNLF8sTixDPUwuaW5zcGVjdFNvdXJjZSxGPW4uV2Vha01hcCxCPVwiZnVuY3Rpb25cIj09dHlwZW9mIEYmJi9uYXRpdmUgY29kZS8udGVzdChDKEYpKSxEPSExLHE9ZShmdW5jdGlvbih0KXsodC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIExbdF18fChMW3RdPXZvaWQgMCE9PWU/ZTp7fSl9KShcInZlcnNpb25zXCIsW10pLnB1c2goe3ZlcnNpb246XCIzLjYuNVwiLG1vZGU6XCJnbG9iYWxcIixjb3B5cmlnaHQ6XCLCqSAyMDIwIERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpXCJ9KX0pLHo9MCxXPU1hdGgucmFuZG9tKCksSz1mdW5jdGlvbih0KXtyZXR1cm5cIlN5bWJvbChcIitTdHJpbmcodm9pZCAwPT09dD9cIlwiOnQpK1wiKV9cIisoKyt6K1cpLnRvU3RyaW5nKDM2KX0sRz1xKFwia2V5c1wiKSwkPWZ1bmN0aW9uKHQpe3JldHVybiBHW3RdfHwoR1t0XT1LKHQpKX0sVj17fTtpZihCKXt2YXIgSD1uZXcoMCxuLldlYWtNYXApLFg9SC5nZXQsWT1ILmhhcyxKPUguc2V0O009ZnVuY3Rpb24odCxlKXtyZXR1cm4gSi5jYWxsKEgsdCxlKSxlfSxfPWZ1bmN0aW9uKHQpe3JldHVybiBYLmNhbGwoSCx0KXx8e319LE49ZnVuY3Rpb24odCl7cmV0dXJuIFkuY2FsbChILHQpfX1lbHNle3ZhciBRPSQoXCJzdGF0ZVwiKTtWW1FdPSEwLE09ZnVuY3Rpb24odCxlKXtyZXR1cm4gSSh0LFEsZSksZX0sXz1mdW5jdGlvbih0KXtyZXR1cm4gYih0LFEpP3RbUV06e319LE49ZnVuY3Rpb24odCl7cmV0dXJuIGIodCxRKX19dmFyIFosdHQ9e3NldDpNLGdldDpfLGhhczpOLGVuZm9yY2U6ZnVuY3Rpb24odCl7cmV0dXJuIE4odCk/Xyh0KTpNKHQse30pfSxnZXR0ZXJGb3I6ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciByO2lmKCFnKGUpfHwocj1fKGUpKS50eXBlIT09dCl0aHJvdyBUeXBlRXJyb3IoXCJJbmNvbXBhdGlibGUgcmVjZWl2ZXIsIFwiK3QrXCIgcmVxdWlyZWRcIik7cmV0dXJuIHJ9fX0sZXQ9ZShmdW5jdGlvbih0KXt2YXIgZT10dC5nZXQscj10dC5lbmZvcmNlLG89U3RyaW5nKFN0cmluZykuc3BsaXQoXCJTdHJpbmdcIik7KHQuZXhwb3J0cz1mdW5jdGlvbih0LGUsaSxhKXt2YXIgdT0hIWEmJiEhYS51bnNhZmUscz0hIWEmJiEhYS5lbnVtZXJhYmxlLGM9ISFhJiYhIWEubm9UYXJnZXRHZXQ7XCJmdW5jdGlvblwiPT10eXBlb2YgaSYmKFwic3RyaW5nXCIhPXR5cGVvZiBlfHxiKGksXCJuYW1lXCIpfHxJKGksXCJuYW1lXCIsZSkscihpKS5zb3VyY2U9by5qb2luKFwic3RyaW5nXCI9PXR5cGVvZiBlP2U6XCJcIikpLHQhPT1uPyh1PyFjJiZ0W2VdJiYocz0hMCk6ZGVsZXRlIHRbZV0scz90W2VdPWk6SSh0LGUsaSkpOnM/dFtlXT1pOlQoZSxpKX0pKEZ1bmN0aW9uLnByb3RvdHlwZSxcInRvU3RyaW5nXCIsZnVuY3Rpb24oKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzJiZlKHRoaXMpLnNvdXJjZXx8Qyh0aGlzKX0pfSkscnQ9bixudD1mdW5jdGlvbih0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6dm9pZCAwfSxvdD1mdW5jdGlvbih0LGUpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPDI/bnQocnRbdF0pfHxudChuW3RdKTpydFt0XSYmcnRbdF1bZV18fG5bdF0mJm5bdF1bZV19LGl0PU1hdGguY2VpbCxhdD1NYXRoLmZsb29yLHV0PWZ1bmN0aW9uKHQpe3JldHVybiBpc05hTih0PSt0KT8wOih0PjA/YXQ6aXQpKHQpfSxzdD1NYXRoLm1pbixjdD1mdW5jdGlvbih0KXtyZXR1cm4gdD4wP3N0KHV0KHQpLDkwMDcxOTkyNTQ3NDA5OTEpOjB9LGZ0PU1hdGgubWF4LGx0PU1hdGgubWluLGh0PWZ1bmN0aW9uKHQsZSl7dmFyIHI9dXQodCk7cmV0dXJuIHI8MD9mdChyK2UsMCk6bHQocixlKX0scHQ9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUscixuKXt2YXIgbyxpPXYoZSksYT1jdChpLmxlbmd0aCksdT1odChuLGEpO2lmKHQmJnIhPXIpe2Zvcig7YT51OylpZigobz1pW3UrK10pIT1vKXJldHVybiEwfWVsc2UgZm9yKDthPnU7dSsrKWlmKCh0fHx1IGluIGkpJiZpW3VdPT09cilyZXR1cm4gdHx8dXx8MDtyZXR1cm4hdCYmLTF9fSxkdD17aW5jbHVkZXM6cHQoITApLGluZGV4T2Y6cHQoITEpfSx2dD1kdC5pbmRleE9mLGd0PWZ1bmN0aW9uKHQsZSl7dmFyIHIsbj12KHQpLG89MCxpPVtdO2ZvcihyIGluIG4pIWIoVixyKSYmYihuLHIpJiZpLnB1c2gocik7Zm9yKDtlLmxlbmd0aD5vOyliKG4scj1lW28rK10pJiYofnZ0KGkscil8fGkucHVzaChyKSk7cmV0dXJuIGl9LHl0PVtcImNvbnN0cnVjdG9yXCIsXCJoYXNPd25Qcm9wZXJ0eVwiLFwiaXNQcm90b3R5cGVPZlwiLFwicHJvcGVydHlJc0VudW1lcmFibGVcIixcInRvTG9jYWxlU3RyaW5nXCIsXCJ0b1N0cmluZ1wiLFwidmFsdWVPZlwiXSxtdD15dC5jb25jYXQoXCJsZW5ndGhcIixcInByb3RvdHlwZVwiKSxidD17ZjpPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc3x8ZnVuY3Rpb24odCl7cmV0dXJuIGd0KHQsbXQpfX0sd3Q9e2Y6T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sc30sU3Q9b3QoXCJSZWZsZWN0XCIsXCJvd25LZXlzXCIpfHxmdW5jdGlvbih0KXt2YXIgZT1idC5mKFIodCkpLHI9d3QuZjtyZXR1cm4gcj9lLmNvbmNhdChyKHQpKTplfSxFdD1mdW5jdGlvbih0LGUpe2Zvcih2YXIgcj1TdChlKSxuPVAuZixvPU8uZixpPTA7aTxyLmxlbmd0aDtpKyspe3ZhciBhPXJbaV07Yih0LGEpfHxuKHQsYSxvKGUsYSkpfX0seHQ9LyN8XFwucHJvdG90eXBlXFwuLyxBdD1mdW5jdGlvbih0LGUpe3ZhciByPVJ0W090KHQpXTtyZXR1cm4gcj09UHR8fHIhPWp0JiYoXCJmdW5jdGlvblwiPT10eXBlb2YgZT9vKGUpOiEhZSl9LE90PUF0Lm5vcm1hbGl6ZT1mdW5jdGlvbih0KXtyZXR1cm4gU3RyaW5nKHQpLnJlcGxhY2UoeHQsXCIuXCIpLnRvTG93ZXJDYXNlKCl9LFJ0PUF0LmRhdGE9e30sanQ9QXQuTkFUSVZFPVwiTlwiLFB0PUF0LlBPTFlGSUxMPVwiUFwiLEl0PUF0LFR0PU8uZixrdD1mdW5jdGlvbih0LGUpe3ZhciByLG8saSxhLHUscz10LnRhcmdldCxjPXQuZ2xvYmFsLGY9dC5zdGF0O2lmKHI9Yz9uOmY/bltzXXx8VChzLHt9KToobltzXXx8e30pLnByb3RvdHlwZSlmb3IobyBpbiBlKXtpZihhPWVbb10saT10Lm5vVGFyZ2V0R2V0Pyh1PVR0KHIsbykpJiZ1LnZhbHVlOnJbb10sIUl0KGM/bzpzKyhmP1wiLlwiOlwiI1wiKStvLHQuZm9yY2VkKSYmdm9pZCAwIT09aSl7aWYodHlwZW9mIGE9PXR5cGVvZiBpKWNvbnRpbnVlO0V0KGEsaSl9KHQuc2hhbXx8aSYmaS5zaGFtKSYmSShhLFwic2hhbVwiLCEwKSxldChyLG8sYSx0KX19LEx0PWZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QoZCh0KSl9LFV0PU1hdGgubWluLE10PVtdLmNvcHlXaXRoaW58fGZ1bmN0aW9uKHQsZSl7dmFyIHI9THQodGhpcyksbj1jdChyLmxlbmd0aCksbz1odCh0LG4pLGk9aHQoZSxuKSxhPWFyZ3VtZW50cy5sZW5ndGg+Mj9hcmd1bWVudHNbMl06dm9pZCAwLHU9VXQoKHZvaWQgMD09PWE/bjpodChhLG4pKS1pLG4tbykscz0xO2ZvcihpPG8mJm88aSt1JiYocz0tMSxpKz11LTEsbys9dS0xKTt1LS0gPjA7KWkgaW4gcj9yW29dPXJbaV06ZGVsZXRlIHJbb10sbys9cyxpKz1zO3JldHVybiByfSxfdD0hIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMmJiFvKGZ1bmN0aW9uKCl7cmV0dXJuIVN0cmluZyhTeW1ib2woKSl9KSxOdD1fdCYmIVN5bWJvbC5zaGFtJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yLEN0PXEoXCJ3a3NcIiksRnQ9bi5TeW1ib2wsQnQ9TnQ/RnQ6RnQmJkZ0LndpdGhvdXRTZXR0ZXJ8fEssRHQ9ZnVuY3Rpb24odCl7cmV0dXJuIGIoQ3QsdCl8fChDdFt0XT1fdCYmYihGdCx0KT9GdFt0XTpCdChcIlN5bWJvbC5cIit0KSksQ3RbdF19LHF0PU9iamVjdC5rZXlzfHxmdW5jdGlvbih0KXtyZXR1cm4gZ3QodCx5dCl9LHp0PWk/T2JqZWN0LmRlZmluZVByb3BlcnRpZXM6ZnVuY3Rpb24odCxlKXtSKHQpO2Zvcih2YXIgcixuPXF0KGUpLG89bi5sZW5ndGgsaT0wO28+aTspUC5mKHQscj1uW2krK10sZVtyXSk7cmV0dXJuIHR9LFd0PW90KFwiZG9jdW1lbnRcIixcImRvY3VtZW50RWxlbWVudFwiKSxLdD0kKFwiSUVfUFJPVE9cIiksR3Q9ZnVuY3Rpb24oKXt9LCR0PWZ1bmN0aW9uKHQpe3JldHVyblwiPHNjcmlwdD5cIit0K1wiPFxcL3NjcmlwdD5cIn0sVnQ9ZnVuY3Rpb24oKXt0cnl7Wj1kb2N1bWVudC5kb21haW4mJm5ldyBBY3RpdmVYT2JqZWN0KFwiaHRtbGZpbGVcIil9Y2F0Y2godCl7fXZhciB0LGU7VnQ9Wj9mdW5jdGlvbih0KXt0LndyaXRlKCR0KFwiXCIpKSx0LmNsb3NlKCk7dmFyIGU9dC5wYXJlbnRXaW5kb3cuT2JqZWN0O3JldHVybiB0PW51bGwsZX0oWik6KChlPUUoXCJpZnJhbWVcIikpLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsV3QuYXBwZW5kQ2hpbGQoZSksZS5zcmM9U3RyaW5nKFwiamF2YXNjcmlwdDpcIiksKHQ9ZS5jb250ZW50V2luZG93LmRvY3VtZW50KS5vcGVuKCksdC53cml0ZSgkdChcImRvY3VtZW50LkY9T2JqZWN0XCIpKSx0LmNsb3NlKCksdC5GKTtmb3IodmFyIHI9eXQubGVuZ3RoO3ItLTspZGVsZXRlIFZ0LnByb3RvdHlwZVt5dFtyXV07cmV0dXJuIFZ0KCl9O1ZbS3RdPSEwO3ZhciBIdD1PYmplY3QuY3JlYXRlfHxmdW5jdGlvbih0LGUpe3ZhciByO3JldHVybiBudWxsIT09dD8oR3QucHJvdG90eXBlPVIodCkscj1uZXcgR3QsR3QucHJvdG90eXBlPW51bGwscltLdF09dCk6cj1WdCgpLHZvaWQgMD09PWU/cjp6dChyLGUpfSxYdD1EdChcInVuc2NvcGFibGVzXCIpLFl0PUFycmF5LnByb3RvdHlwZTtudWxsPT1ZdFtYdF0mJlAuZihZdCxYdCx7Y29uZmlndXJhYmxlOiEwLHZhbHVlOkh0KG51bGwpfSk7dmFyIEp0PWZ1bmN0aW9uKHQpe1l0W1h0XVt0XT0hMH07a3Qoe3RhcmdldDpcIkFycmF5XCIscHJvdG86ITB9LHtjb3B5V2l0aGluOk10fSksSnQoXCJjb3B5V2l0aGluXCIpO3ZhciBRdD1mdW5jdGlvbih0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXRocm93IFR5cGVFcnJvcihTdHJpbmcodCkrXCIgaXMgbm90IGEgZnVuY3Rpb25cIik7cmV0dXJuIHR9LFp0PWZ1bmN0aW9uKHQsZSxyKXtpZihRdCh0KSx2b2lkIDA9PT1lKXJldHVybiB0O3N3aXRjaChyKXtjYXNlIDA6cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHQuY2FsbChlKX07Y2FzZSAxOnJldHVybiBmdW5jdGlvbihyKXtyZXR1cm4gdC5jYWxsKGUscil9O2Nhc2UgMjpyZXR1cm4gZnVuY3Rpb24ocixuKXtyZXR1cm4gdC5jYWxsKGUscixuKX07Y2FzZSAzOnJldHVybiBmdW5jdGlvbihyLG4sbyl7cmV0dXJuIHQuY2FsbChlLHIsbixvKX19cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHQuYXBwbHkoZSxhcmd1bWVudHMpfX0sdGU9RnVuY3Rpb24uY2FsbCxlZT1mdW5jdGlvbih0LGUscil7cmV0dXJuIFp0KHRlLG5bdF0ucHJvdG90eXBlW2VdLHIpfTtlZShcIkFycmF5XCIsXCJjb3B5V2l0aGluXCIpLGt0KHt0YXJnZXQ6XCJBcnJheVwiLHByb3RvOiEwfSx7ZmlsbDpmdW5jdGlvbih0KXtmb3IodmFyIGU9THQodGhpcykscj1jdChlLmxlbmd0aCksbj1hcmd1bWVudHMubGVuZ3RoLG89aHQobj4xP2FyZ3VtZW50c1sxXTp2b2lkIDAsciksaT1uPjI/YXJndW1lbnRzWzJdOnZvaWQgMCxhPXZvaWQgMD09PWk/cjpodChpLHIpO2E+bzspZVtvKytdPXQ7cmV0dXJuIGV9fSksSnQoXCJmaWxsXCIpLGVlKFwiQXJyYXlcIixcImZpbGxcIik7dmFyIHJlPUFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uKHQpe3JldHVyblwiQXJyYXlcIj09bCh0KX0sbmU9RHQoXCJzcGVjaWVzXCIpLG9lPWZ1bmN0aW9uKHQsZSl7dmFyIHI7cmV0dXJuIHJlKHQpJiYoXCJmdW5jdGlvblwiIT10eXBlb2Yocj10LmNvbnN0cnVjdG9yKXx8ciE9PUFycmF5JiYhcmUoci5wcm90b3R5cGUpP2cocikmJm51bGw9PT0ocj1yW25lXSkmJihyPXZvaWQgMCk6cj12b2lkIDApLG5ldyh2b2lkIDA9PT1yP0FycmF5OnIpKDA9PT1lPzA6ZSl9LGllPVtdLnB1c2gsYWU9ZnVuY3Rpb24odCl7dmFyIGU9MT09dCxyPTI9PXQsbj0zPT10LG89ND09dCxpPTY9PXQsYT01PT10fHxpO3JldHVybiBmdW5jdGlvbih1LHMsYyxmKXtmb3IodmFyIGwsaCxkPUx0KHUpLHY9cChkKSxnPVp0KHMsYywzKSx5PWN0KHYubGVuZ3RoKSxtPTAsYj1mfHxvZSx3PWU/Yih1LHkpOnI/Yih1LDApOnZvaWQgMDt5Pm07bSsrKWlmKChhfHxtIGluIHYpJiYoaD1nKGw9dlttXSxtLGQpLHQpKWlmKGUpd1ttXT1oO2Vsc2UgaWYoaClzd2l0Y2godCl7Y2FzZSAzOnJldHVybiEwO2Nhc2UgNTpyZXR1cm4gbDtjYXNlIDY6cmV0dXJuIG07Y2FzZSAyOmllLmNhbGwodyxsKX1lbHNlIGlmKG8pcmV0dXJuITE7cmV0dXJuIGk/LTE6bnx8bz9vOnd9fSx1ZT17Zm9yRWFjaDphZSgwKSxtYXA6YWUoMSksZmlsdGVyOmFlKDIpLHNvbWU6YWUoMyksZXZlcnk6YWUoNCksZmluZDphZSg1KSxmaW5kSW5kZXg6YWUoNil9LHNlPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSxjZT17fSxmZT1mdW5jdGlvbih0KXt0aHJvdyB0fSxsZT1mdW5jdGlvbih0LGUpe2lmKGIoY2UsdCkpcmV0dXJuIGNlW3RdO2V8fChlPXt9KTt2YXIgcj1bXVt0XSxuPSEhYihlLFwiQUNDRVNTT1JTXCIpJiZlLkFDQ0VTU09SUyxhPWIoZSwwKT9lWzBdOmZlLHU9YihlLDEpP2VbMV06dm9pZCAwO3JldHVybiBjZVt0XT0hIXImJiFvKGZ1bmN0aW9uKCl7aWYobiYmIWkpcmV0dXJuITA7dmFyIHQ9e2xlbmd0aDotMX07bj9zZSh0LDEse2VudW1lcmFibGU6ITAsZ2V0OmZlfSk6dFsxXT0xLHIuY2FsbCh0LGEsdSl9KX0saGU9dWUuZmluZCxwZT1cImZpbmRcIixkZT0hMCx2ZT1sZShwZSk7cGUgaW5bXSYmQXJyYXkoMSkuZmluZChmdW5jdGlvbigpe2RlPSExfSksa3Qoe3RhcmdldDpcIkFycmF5XCIscHJvdG86ITAsZm9yY2VkOmRlfHwhdmV9LHtmaW5kOmZ1bmN0aW9uKHQpe3JldHVybiBoZSh0aGlzLHQsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDApfX0pLEp0KHBlKSxlZShcIkFycmF5XCIsXCJmaW5kXCIpO3ZhciBnZT11ZS5maW5kSW5kZXgseWU9XCJmaW5kSW5kZXhcIixtZT0hMCxiZT1sZSh5ZSk7eWUgaW5bXSYmQXJyYXkoMSkuZmluZEluZGV4KGZ1bmN0aW9uKCl7bWU9ITF9KSxrdCh7dGFyZ2V0OlwiQXJyYXlcIixwcm90bzohMCxmb3JjZWQ6bWV8fCFiZX0se2ZpbmRJbmRleDpmdW5jdGlvbih0KXtyZXR1cm4gZ2UodGhpcyx0LGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwKX19KSxKdCh5ZSksZWUoXCJBcnJheVwiLFwiZmluZEluZGV4XCIpO3ZhciB3ZT1mdW5jdGlvbiB0KGUscixuLG8saSxhLHUscyl7Zm9yKHZhciBjLGY9aSxsPTAsaD0hIXUmJlp0KHUscywzKTtsPG87KXtpZihsIGluIG4pe2lmKGM9aD9oKG5bbF0sbCxyKTpuW2xdLGE+MCYmcmUoYykpZj10KGUscixjLGN0KGMubGVuZ3RoKSxmLGEtMSktMTtlbHNle2lmKGY+PTkwMDcxOTkyNTQ3NDA5OTEpdGhyb3cgVHlwZUVycm9yKFwiRXhjZWVkIHRoZSBhY2NlcHRhYmxlIGFycmF5IGxlbmd0aFwiKTtlW2ZdPWN9ZisrfWwrK31yZXR1cm4gZn07a3Qoe3RhcmdldDpcIkFycmF5XCIscHJvdG86ITB9LHtmbGF0TWFwOmZ1bmN0aW9uKHQpe3ZhciBlLHI9THQodGhpcyksbj1jdChyLmxlbmd0aCk7cmV0dXJuIFF0KHQpLChlPW9lKHIsMCkpLmxlbmd0aD13ZShlLHIscixuLDAsMSx0LGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwKSxlfX0pLEp0KFwiZmxhdE1hcFwiKSxlZShcIkFycmF5XCIsXCJmbGF0TWFwXCIpLGt0KHt0YXJnZXQ6XCJBcnJheVwiLHByb3RvOiEwfSx7ZmxhdDpmdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg/YXJndW1lbnRzWzBdOnZvaWQgMCxlPUx0KHRoaXMpLHI9Y3QoZS5sZW5ndGgpLG49b2UoZSwwKTtyZXR1cm4gbi5sZW5ndGg9d2UobixlLGUsciwwLHZvaWQgMD09PXQ/MTp1dCh0KSksbn19KSxKdChcImZsYXRcIiksZWUoXCJBcnJheVwiLFwiZmxhdFwiKTt2YXIgU2UsRWUseGUsQWU9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUscil7dmFyIG4sbyxpPVN0cmluZyhkKGUpKSxhPXV0KHIpLHU9aS5sZW5ndGg7cmV0dXJuIGE8MHx8YT49dT90P1wiXCI6dm9pZCAwOihuPWkuY2hhckNvZGVBdChhKSk8NTUyOTZ8fG4+NTYzMTl8fGErMT09PXV8fChvPWkuY2hhckNvZGVBdChhKzEpKTw1NjMyMHx8bz41NzM0Mz90P2kuY2hhckF0KGEpOm46dD9pLnNsaWNlKGEsYSsyKTpvLTU2MzIwKyhuLTU1Mjk2PDwxMCkrNjU1MzZ9fSxPZT17Y29kZUF0OkFlKCExKSxjaGFyQXQ6QWUoITApfSxSZT0hbyhmdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt9cmV0dXJuIHQucHJvdG90eXBlLmNvbnN0cnVjdG9yPW51bGwsT2JqZWN0LmdldFByb3RvdHlwZU9mKG5ldyB0KSE9PXQucHJvdG90eXBlfSksamU9JChcIklFX1BST1RPXCIpLFBlPU9iamVjdC5wcm90b3R5cGUsSWU9UmU/T2JqZWN0LmdldFByb3RvdHlwZU9mOmZ1bmN0aW9uKHQpe3JldHVybiB0PUx0KHQpLGIodCxqZSk/dFtqZV06XCJmdW5jdGlvblwiPT10eXBlb2YgdC5jb25zdHJ1Y3RvciYmdCBpbnN0YW5jZW9mIHQuY29uc3RydWN0b3I/dC5jb25zdHJ1Y3Rvci5wcm90b3R5cGU6dCBpbnN0YW5jZW9mIE9iamVjdD9QZTpudWxsfSxUZT1EdChcIml0ZXJhdG9yXCIpLGtlPSExO1tdLmtleXMmJihcIm5leHRcImluKHhlPVtdLmtleXMoKSk/KEVlPUllKEllKHhlKSkpIT09T2JqZWN0LnByb3RvdHlwZSYmKFNlPUVlKTprZT0hMCksbnVsbD09U2UmJihTZT17fSksYihTZSxUZSl8fEkoU2UsVGUsZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30pO3ZhciBMZT17SXRlcmF0b3JQcm90b3R5cGU6U2UsQlVHR1lfU0FGQVJJX0lURVJBVE9SUzprZX0sVWU9UC5mLE1lPUR0KFwidG9TdHJpbmdUYWdcIiksX2U9ZnVuY3Rpb24odCxlLHIpe3QmJiFiKHQ9cj90OnQucHJvdG90eXBlLE1lKSYmVWUodCxNZSx7Y29uZmlndXJhYmxlOiEwLHZhbHVlOmV9KX0sTmU9e30sQ2U9TGUuSXRlcmF0b3JQcm90b3R5cGUsRmU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30sQmU9ZnVuY3Rpb24odCxlLHIpe3ZhciBuPWUrXCIgSXRlcmF0b3JcIjtyZXR1cm4gdC5wcm90b3R5cGU9SHQoQ2Use25leHQ6YygxLHIpfSksX2UodCxuLCExKSxOZVtuXT1GZSx0fSxEZT1mdW5jdGlvbih0KXtpZighZyh0KSYmbnVsbCE9PXQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3Qgc2V0IFwiK1N0cmluZyh0KStcIiBhcyBhIHByb3RvdHlwZVwiKTtyZXR1cm4gdH0scWU9T2JqZWN0LnNldFByb3RvdHlwZU9mfHwoXCJfX3Byb3RvX19cImlue30/ZnVuY3Rpb24oKXt2YXIgdCxlPSExLHI9e307dHJ5eyh0PU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LnByb3RvdHlwZSxcIl9fcHJvdG9fX1wiKS5zZXQpLmNhbGwocixbXSksZT1yIGluc3RhbmNlb2YgQXJyYXl9Y2F0Y2godCl7fXJldHVybiBmdW5jdGlvbihyLG4pe3JldHVybiBSKHIpLERlKG4pLGU/dC5jYWxsKHIsbik6ci5fX3Byb3RvX189bixyfX0oKTp2b2lkIDApLHplPUxlLkl0ZXJhdG9yUHJvdG90eXBlLFdlPUxlLkJVR0dZX1NBRkFSSV9JVEVSQVRPUlMsS2U9RHQoXCJpdGVyYXRvclwiKSxHZT1cImtleXNcIiwkZT1cInZhbHVlc1wiLFZlPVwiZW50cmllc1wiLEhlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9LFhlPWZ1bmN0aW9uKHQsZSxyLG4sbyxpLGEpe0JlKHIsZSxuKTt2YXIgdSxzLGMsZj1mdW5jdGlvbih0KXtpZih0PT09byYmdilyZXR1cm4gdjtpZighV2UmJnQgaW4gcClyZXR1cm4gcFt0XTtzd2l0Y2godCl7Y2FzZSBHZTpjYXNlICRlOmNhc2UgVmU6cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyByKHRoaXMsdCl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiBuZXcgcih0aGlzKX19LGw9ZStcIiBJdGVyYXRvclwiLGg9ITEscD10LnByb3RvdHlwZSxkPXBbS2VdfHxwW1wiQEBpdGVyYXRvclwiXXx8byYmcFtvXSx2PSFXZSYmZHx8ZihvKSxnPVwiQXJyYXlcIj09ZSYmcC5lbnRyaWVzfHxkO2lmKGcmJih1PUllKGcuY2FsbChuZXcgdCkpLHplIT09T2JqZWN0LnByb3RvdHlwZSYmdS5uZXh0JiYoSWUodSkhPT16ZSYmKHFlP3FlKHUsemUpOlwiZnVuY3Rpb25cIiE9dHlwZW9mIHVbS2VdJiZJKHUsS2UsSGUpKSxfZSh1LGwsITApKSksbz09JGUmJmQmJmQubmFtZSE9PSRlJiYoaD0hMCx2PWZ1bmN0aW9uKCl7cmV0dXJuIGQuY2FsbCh0aGlzKX0pLHBbS2VdIT09diYmSShwLEtlLHYpLE5lW2VdPXYsbylpZihzPXt2YWx1ZXM6ZigkZSksa2V5czppP3Y6ZihHZSksZW50cmllczpmKFZlKX0sYSlmb3IoYyBpbiBzKShXZXx8aHx8IShjIGluIHApKSYmZXQocCxjLHNbY10pO2Vsc2Uga3Qoe3RhcmdldDplLHByb3RvOiEwLGZvcmNlZDpXZXx8aH0scyk7cmV0dXJuIHN9LFllPU9lLmNoYXJBdCxKZT1cIlN0cmluZyBJdGVyYXRvclwiLFFlPXR0LnNldCxaZT10dC5nZXR0ZXJGb3IoSmUpO1hlKFN0cmluZyxcIlN0cmluZ1wiLGZ1bmN0aW9uKHQpe1FlKHRoaXMse3R5cGU6SmUsc3RyaW5nOlN0cmluZyh0KSxpbmRleDowfSl9LGZ1bmN0aW9uKCl7dmFyIHQsZT1aZSh0aGlzKSxyPWUuc3RyaW5nLG49ZS5pbmRleDtyZXR1cm4gbj49ci5sZW5ndGg/e3ZhbHVlOnZvaWQgMCxkb25lOiEwfToodD1ZZShyLG4pLGUuaW5kZXgrPXQubGVuZ3RoLHt2YWx1ZTp0LGRvbmU6ITF9KX0pO3ZhciB0cj1mdW5jdGlvbih0LGUscixuKXt0cnl7cmV0dXJuIG4/ZShSKHIpWzBdLHJbMV0pOmUocil9Y2F0Y2goZSl7dmFyIG89dC5yZXR1cm47dGhyb3cgdm9pZCAwIT09byYmUihvLmNhbGwodCkpLGV9fSxlcj1EdChcIml0ZXJhdG9yXCIpLHJyPUFycmF5LnByb3RvdHlwZSxucj1mdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwIT09dCYmKE5lLkFycmF5PT09dHx8cnJbZXJdPT09dCl9LG9yPWZ1bmN0aW9uKHQsZSxyKXt2YXIgbj15KGUpO24gaW4gdD9QLmYodCxuLGMoMCxyKSk6dFtuXT1yfSxpcj17fTtpcltEdChcInRvU3RyaW5nVGFnXCIpXT1cInpcIjt2YXIgYXI9XCJbb2JqZWN0IHpdXCI9PT1TdHJpbmcoaXIpLHVyPUR0KFwidG9TdHJpbmdUYWdcIiksc3I9XCJBcmd1bWVudHNcIj09bChmdW5jdGlvbigpe3JldHVybiBhcmd1bWVudHN9KCkpLGNyPWFyP2w6ZnVuY3Rpb24odCl7dmFyIGUscixuO3JldHVybiB2b2lkIDA9PT10P1wiVW5kZWZpbmVkXCI6bnVsbD09PXQ/XCJOdWxsXCI6XCJzdHJpbmdcIj09dHlwZW9mKHI9ZnVuY3Rpb24odCxlKXt0cnl7cmV0dXJuIHRbZV19Y2F0Y2godCl7fX0oZT1PYmplY3QodCksdXIpKT9yOnNyP2woZSk6XCJPYmplY3RcIj09KG49bChlKSkmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGUuY2FsbGVlP1wiQXJndW1lbnRzXCI6bn0sZnI9RHQoXCJpdGVyYXRvclwiKSxscj1mdW5jdGlvbih0KXtpZihudWxsIT10KXJldHVybiB0W2ZyXXx8dFtcIkBAaXRlcmF0b3JcIl18fE5lW2NyKHQpXX0saHI9ZnVuY3Rpb24odCl7dmFyIGUscixuLG8saSxhLHU9THQodCkscz1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzP3RoaXM6QXJyYXksYz1hcmd1bWVudHMubGVuZ3RoLGY9Yz4xP2FyZ3VtZW50c1sxXTp2b2lkIDAsbD12b2lkIDAhPT1mLGg9bHIodSkscD0wO2lmKGwmJihmPVp0KGYsYz4yP2FyZ3VtZW50c1syXTp2b2lkIDAsMikpLG51bGw9PWh8fHM9PUFycmF5JiZucihoKSlmb3Iocj1uZXcgcyhlPWN0KHUubGVuZ3RoKSk7ZT5wO3ArKylhPWw/Zih1W3BdLHApOnVbcF0sb3IocixwLGEpO2Vsc2UgZm9yKGk9KG89aC5jYWxsKHUpKS5uZXh0LHI9bmV3IHM7IShuPWkuY2FsbChvKSkuZG9uZTtwKyspYT1sP3RyKG8sZixbbi52YWx1ZSxwXSwhMCk6bi52YWx1ZSxvcihyLHAsYSk7cmV0dXJuIHIubGVuZ3RoPXAscn0scHI9RHQoXCJpdGVyYXRvclwiKSxkcj0hMTt0cnl7dmFyIHZyPTAsZ3I9e25leHQ6ZnVuY3Rpb24oKXtyZXR1cm57ZG9uZTohIXZyKyt9fSxyZXR1cm46ZnVuY3Rpb24oKXtkcj0hMH19O2dyW3ByXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSxBcnJheS5mcm9tKGdyLGZ1bmN0aW9uKCl7dGhyb3cgMn0pfWNhdGNoKHQpe312YXIgeXI9ZnVuY3Rpb24odCxlKXtpZighZSYmIWRyKXJldHVybiExO3ZhciByPSExO3RyeXt2YXIgbj17fTtuW3ByXT1mdW5jdGlvbigpe3JldHVybntuZXh0OmZ1bmN0aW9uKCl7cmV0dXJue2RvbmU6cj0hMH19fX0sdChuKX1jYXRjaCh0KXt9cmV0dXJuIHJ9LG1yPSF5cihmdW5jdGlvbih0KXtBcnJheS5mcm9tKHQpfSk7a3Qoe3RhcmdldDpcIkFycmF5XCIsc3RhdDohMCxmb3JjZWQ6bXJ9LHtmcm9tOmhyfSk7dmFyIGJyPWR0LmluY2x1ZGVzLHdyPWxlKFwiaW5kZXhPZlwiLHtBQ0NFU1NPUlM6ITAsMTowfSk7a3Qoe3RhcmdldDpcIkFycmF5XCIscHJvdG86ITAsZm9yY2VkOiF3cn0se2luY2x1ZGVzOmZ1bmN0aW9uKHQpe3JldHVybiBicih0aGlzLHQsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDApfX0pLEp0KFwiaW5jbHVkZXNcIiksZWUoXCJBcnJheVwiLFwiaW5jbHVkZXNcIik7dmFyIFNyPVwiQXJyYXkgSXRlcmF0b3JcIixFcj10dC5zZXQseHI9dHQuZ2V0dGVyRm9yKFNyKSxBcj1YZShBcnJheSxcIkFycmF5XCIsZnVuY3Rpb24odCxlKXtFcih0aGlzLHt0eXBlOlNyLHRhcmdldDp2KHQpLGluZGV4OjAsa2luZDplfSl9LGZ1bmN0aW9uKCl7dmFyIHQ9eHIodGhpcyksZT10LnRhcmdldCxyPXQua2luZCxuPXQuaW5kZXgrKztyZXR1cm4hZXx8bj49ZS5sZW5ndGg/KHQudGFyZ2V0PXZvaWQgMCx7dmFsdWU6dm9pZCAwLGRvbmU6ITB9KTpcImtleXNcIj09cj97dmFsdWU6bixkb25lOiExfTpcInZhbHVlc1wiPT1yP3t2YWx1ZTplW25dLGRvbmU6ITF9Ont2YWx1ZTpbbixlW25dXSxkb25lOiExfX0sXCJ2YWx1ZXNcIik7TmUuQXJndW1lbnRzPU5lLkFycmF5LEp0KFwia2V5c1wiKSxKdChcInZhbHVlc1wiKSxKdChcImVudHJpZXNcIiksZWUoXCJBcnJheVwiLFwidmFsdWVzXCIpO3ZhciBPcj1vKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe31yZXR1cm4hKEFycmF5Lm9mLmNhbGwodClpbnN0YW5jZW9mIHQpfSk7a3Qoe3RhcmdldDpcIkFycmF5XCIsc3RhdDohMCxmb3JjZWQ6T3J9LHtvZjpmdW5jdGlvbigpe2Zvcih2YXIgdD0wLGU9YXJndW1lbnRzLmxlbmd0aCxyPW5ldyhcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzP3RoaXM6QXJyYXkpKGUpO2U+dDspb3Iocix0LGFyZ3VtZW50c1t0KytdKTtyZXR1cm4gci5sZW5ndGg9ZSxyfX0pO3ZhciBScj1EdChcImhhc0luc3RhbmNlXCIpLGpyPUZ1bmN0aW9uLnByb3RvdHlwZTtSciBpbiBqcnx8UC5mKGpyLFJyLHt2YWx1ZTpmdW5jdGlvbih0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0aGlzfHwhZyh0KSlyZXR1cm4hMTtpZighZyh0aGlzLnByb3RvdHlwZSkpcmV0dXJuIHQgaW5zdGFuY2VvZiB0aGlzO2Zvcig7dD1JZSh0KTspaWYodGhpcy5wcm90b3R5cGU9PT10KXJldHVybiEwO3JldHVybiExfX0pLER0KFwiaGFzSW5zdGFuY2VcIik7dmFyIFByPUZ1bmN0aW9uLnByb3RvdHlwZSxJcj1Qci50b1N0cmluZyxUcj0vXlxccypmdW5jdGlvbiAoW14gKF0qKS8sa3I9XCJuYW1lXCI7aSYmIShrciBpbiBQcikmJigwLFAuZikoUHIsa3Ise2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIElyLmNhbGwodGhpcykubWF0Y2goVHIpWzFdfWNhdGNoKHQpe3JldHVyblwiXCJ9fX0pO3ZhciBMcj0hbyhmdW5jdGlvbigpe3JldHVybiBPYmplY3QuaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpfSksVXI9ZShmdW5jdGlvbih0KXt2YXIgZT1QLmYscj1LKFwibWV0YVwiKSxuPTAsbz1PYmplY3QuaXNFeHRlbnNpYmxlfHxmdW5jdGlvbigpe3JldHVybiEwfSxpPWZ1bmN0aW9uKHQpe2UodCxyLHt2YWx1ZTp7b2JqZWN0SUQ6XCJPXCIrICsrbix3ZWFrRGF0YTp7fX19KX0sYT10LmV4cG9ydHM9e1JFUVVJUkVEOiExLGZhc3RLZXk6ZnVuY3Rpb24odCxlKXtpZighZyh0KSlyZXR1cm5cInN5bWJvbFwiPT10eXBlb2YgdD90OihcInN0cmluZ1wiPT10eXBlb2YgdD9cIlNcIjpcIlBcIikrdDtpZighYih0LHIpKXtpZighbyh0KSlyZXR1cm5cIkZcIjtpZighZSlyZXR1cm5cIkVcIjtpKHQpfXJldHVybiB0W3JdLm9iamVjdElEfSxnZXRXZWFrRGF0YTpmdW5jdGlvbih0LGUpe2lmKCFiKHQscikpe2lmKCFvKHQpKXJldHVybiEwO2lmKCFlKXJldHVybiExO2kodCl9cmV0dXJuIHRbcl0ud2Vha0RhdGF9LG9uRnJlZXplOmZ1bmN0aW9uKHQpe3JldHVybiBMciYmYS5SRVFVSVJFRCYmbyh0KSYmIWIodCxyKSYmaSh0KSx0fX07VltyXT0hMH0pLE1yPWUoZnVuY3Rpb24odCl7dmFyIGU9ZnVuY3Rpb24odCxlKXt0aGlzLnN0b3BwZWQ9dCx0aGlzLnJlc3VsdD1lfTsodC5leHBvcnRzPWZ1bmN0aW9uKHQscixuLG8saSl7dmFyIGEsdSxzLGMsZixsLGgscD1adChyLG4sbz8yOjEpO2lmKGkpYT10O2Vsc2V7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YodT1scih0KSkpdGhyb3cgVHlwZUVycm9yKFwiVGFyZ2V0IGlzIG5vdCBpdGVyYWJsZVwiKTtpZihucih1KSl7Zm9yKHM9MCxjPWN0KHQubGVuZ3RoKTtjPnM7cysrKWlmKChmPW8/cChSKGg9dFtzXSlbMF0saFsxXSk6cCh0W3NdKSkmJmYgaW5zdGFuY2VvZiBlKXJldHVybiBmO3JldHVybiBuZXcgZSghMSl9YT11LmNhbGwodCl9Zm9yKGw9YS5uZXh0OyEoaD1sLmNhbGwoYSkpLmRvbmU7KWlmKFwib2JqZWN0XCI9PXR5cGVvZihmPXRyKGEscCxoLnZhbHVlLG8pKSYmZiYmZiBpbnN0YW5jZW9mIGUpcmV0dXJuIGY7cmV0dXJuIG5ldyBlKCExKX0pLnN0b3A9ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBlKCEwLHQpfX0pLF9yPWZ1bmN0aW9uKHQsZSxyKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBUeXBlRXJyb3IoXCJJbmNvcnJlY3QgXCIrKHI/citcIiBcIjpcIlwiKStcImludm9jYXRpb25cIik7cmV0dXJuIHR9LE5yPWZ1bmN0aW9uKHQsZSxyKXt2YXIgbixvO3JldHVybiBxZSYmXCJmdW5jdGlvblwiPT10eXBlb2Yobj1lLmNvbnN0cnVjdG9yKSYmbiE9PXImJmcobz1uLnByb3RvdHlwZSkmJm8hPT1yLnByb3RvdHlwZSYmcWUodCxvKSx0fSxDcj1mdW5jdGlvbih0LGUscil7dmFyIGk9LTEhPT10LmluZGV4T2YoXCJNYXBcIiksYT0tMSE9PXQuaW5kZXhPZihcIldlYWtcIiksdT1pP1wic2V0XCI6XCJhZGRcIixzPW5bdF0sYz1zJiZzLnByb3RvdHlwZSxmPXMsbD17fSxoPWZ1bmN0aW9uKHQpe3ZhciBlPWNbdF07ZXQoYyx0LFwiYWRkXCI9PXQ/ZnVuY3Rpb24odCl7cmV0dXJuIGUuY2FsbCh0aGlzLDA9PT10PzA6dCksdGhpc306XCJkZWxldGVcIj09dD9mdW5jdGlvbih0KXtyZXR1cm4hKGEmJiFnKHQpKSYmZS5jYWxsKHRoaXMsMD09PXQ/MDp0KX06XCJnZXRcIj09dD9mdW5jdGlvbih0KXtyZXR1cm4gYSYmIWcodCk/dm9pZCAwOmUuY2FsbCh0aGlzLDA9PT10PzA6dCl9OlwiaGFzXCI9PXQ/ZnVuY3Rpb24odCl7cmV0dXJuIShhJiYhZyh0KSkmJmUuY2FsbCh0aGlzLDA9PT10PzA6dCl9OmZ1bmN0aW9uKHQscil7cmV0dXJuIGUuY2FsbCh0aGlzLDA9PT10PzA6dCxyKSx0aGlzfSl9O2lmKEl0KHQsXCJmdW5jdGlvblwiIT10eXBlb2Ygc3x8IShhfHxjLmZvckVhY2gmJiFvKGZ1bmN0aW9uKCl7KG5ldyBzKS5lbnRyaWVzKCkubmV4dCgpfSkpKSlmPXIuZ2V0Q29uc3RydWN0b3IoZSx0LGksdSksVXIuUkVRVUlSRUQ9ITA7ZWxzZSBpZihJdCh0LCEwKSl7dmFyIHA9bmV3IGYsZD1wW3VdKGE/e306LTAsMSkhPXAsdj1vKGZ1bmN0aW9uKCl7cC5oYXMoMSl9KSx5PXlyKGZ1bmN0aW9uKHQpe25ldyBzKHQpfSksbT0hYSYmbyhmdW5jdGlvbigpe2Zvcih2YXIgdD1uZXcgcyxlPTU7ZS0tOyl0W3VdKGUsZSk7cmV0dXJuIXQuaGFzKC0wKX0pO3l8fCgoZj1lKGZ1bmN0aW9uKGUscil7X3IoZSxmLHQpO3ZhciBuPU5yKG5ldyBzLGUsZik7cmV0dXJuIG51bGwhPXImJk1yKHIsblt1XSxuLGkpLG59KSkucHJvdG90eXBlPWMsYy5jb25zdHJ1Y3Rvcj1mKSwodnx8bSkmJihoKFwiZGVsZXRlXCIpLGgoXCJoYXNcIiksaSYmaChcImdldFwiKSksKG18fGQpJiZoKHUpLGEmJmMuY2xlYXImJmRlbGV0ZSBjLmNsZWFyfXJldHVybiBsW3RdPWYsa3Qoe2dsb2JhbDohMCxmb3JjZWQ6ZiE9c30sbCksX2UoZix0KSxhfHxyLnNldFN0cm9uZyhmLHQsaSksZn0sRnI9ZnVuY3Rpb24odCxlLHIpe2Zvcih2YXIgbiBpbiBlKWV0KHQsbixlW25dLHIpO3JldHVybiB0fSxCcj1EdChcInNwZWNpZXNcIiksRHI9ZnVuY3Rpb24odCl7dmFyIGU9b3QodCk7aSYmZSYmIWVbQnJdJiYoMCxQLmYpKGUsQnIse2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc319KX0scXI9UC5mLHpyPVVyLmZhc3RLZXksV3I9dHQuc2V0LEtyPXR0LmdldHRlckZvcixHcj17Z2V0Q29uc3RydWN0b3I6ZnVuY3Rpb24odCxlLHIsbil7dmFyIG89dChmdW5jdGlvbih0LGEpe19yKHQsbyxlKSxXcih0LHt0eXBlOmUsaW5kZXg6SHQobnVsbCksZmlyc3Q6dm9pZCAwLGxhc3Q6dm9pZCAwLHNpemU6MH0pLGl8fCh0LnNpemU9MCksbnVsbCE9YSYmTXIoYSx0W25dLHQscil9KSxhPUtyKGUpLHU9ZnVuY3Rpb24odCxlLHIpe3ZhciBuLG8sdT1hKHQpLGM9cyh0LGUpO3JldHVybiBjP2MudmFsdWU9cjoodS5sYXN0PWM9e2luZGV4Om89enIoZSwhMCksa2V5OmUsdmFsdWU6cixwcmV2aW91czpuPXUubGFzdCxuZXh0OnZvaWQgMCxyZW1vdmVkOiExfSx1LmZpcnN0fHwodS5maXJzdD1jKSxuJiYobi5uZXh0PWMpLGk/dS5zaXplKys6dC5zaXplKyssXCJGXCIhPT1vJiYodS5pbmRleFtvXT1jKSksdH0scz1mdW5jdGlvbih0LGUpe3ZhciByLG49YSh0KSxvPXpyKGUpO2lmKFwiRlwiIT09bylyZXR1cm4gbi5pbmRleFtvXTtmb3Iocj1uLmZpcnN0O3I7cj1yLm5leHQpaWYoci5rZXk9PWUpcmV0dXJuIHJ9O3JldHVybiBGcihvLnByb3RvdHlwZSx7Y2xlYXI6ZnVuY3Rpb24oKXtmb3IodmFyIHQ9YSh0aGlzKSxlPXQuaW5kZXgscj10LmZpcnN0O3I7KXIucmVtb3ZlZD0hMCxyLnByZXZpb3VzJiYoci5wcmV2aW91cz1yLnByZXZpb3VzLm5leHQ9dm9pZCAwKSxkZWxldGUgZVtyLmluZGV4XSxyPXIubmV4dDt0LmZpcnN0PXQubGFzdD12b2lkIDAsaT90LnNpemU9MDp0aGlzLnNpemU9MH0sZGVsZXRlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMscj1hKGUpLG49cyhlLHQpO2lmKG4pe3ZhciBvPW4ubmV4dCx1PW4ucHJldmlvdXM7ZGVsZXRlIHIuaW5kZXhbbi5pbmRleF0sbi5yZW1vdmVkPSEwLHUmJih1Lm5leHQ9byksbyYmKG8ucHJldmlvdXM9dSksci5maXJzdD09biYmKHIuZmlyc3Q9byksci5sYXN0PT1uJiYoci5sYXN0PXUpLGk/ci5zaXplLS06ZS5zaXplLS19cmV0dXJuISFufSxmb3JFYWNoOmZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxyPWEodGhpcyksbj1adCh0LGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwLDMpO2U9ZT9lLm5leHQ6ci5maXJzdDspZm9yKG4oZS52YWx1ZSxlLmtleSx0aGlzKTtlJiZlLnJlbW92ZWQ7KWU9ZS5wcmV2aW91c30saGFzOmZ1bmN0aW9uKHQpe3JldHVybiEhcyh0aGlzLHQpfX0pLEZyKG8ucHJvdG90eXBlLHI/e2dldDpmdW5jdGlvbih0KXt2YXIgZT1zKHRoaXMsdCk7cmV0dXJuIGUmJmUudmFsdWV9LHNldDpmdW5jdGlvbih0LGUpe3JldHVybiB1KHRoaXMsMD09PXQ/MDp0LGUpfX06e2FkZDpmdW5jdGlvbih0KXtyZXR1cm4gdSh0aGlzLHQ9MD09PXQ/MDp0LHQpfX0pLGkmJnFyKG8ucHJvdG90eXBlLFwic2l6ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYSh0aGlzKS5zaXplfX0pLG99LHNldFN0cm9uZzpmdW5jdGlvbih0LGUscil7dmFyIG49ZStcIiBJdGVyYXRvclwiLG89S3IoZSksaT1LcihuKTtYZSh0LGUsZnVuY3Rpb24odCxlKXtXcih0aGlzLHt0eXBlOm4sdGFyZ2V0OnQsc3RhdGU6byh0KSxraW5kOmUsbGFzdDp2b2lkIDB9KX0sZnVuY3Rpb24oKXtmb3IodmFyIHQ9aSh0aGlzKSxlPXQua2luZCxyPXQubGFzdDtyJiZyLnJlbW92ZWQ7KXI9ci5wcmV2aW91cztyZXR1cm4gdC50YXJnZXQmJih0Lmxhc3Q9cj1yP3IubmV4dDp0LnN0YXRlLmZpcnN0KT9cImtleXNcIj09ZT97dmFsdWU6ci5rZXksZG9uZTohMX06XCJ2YWx1ZXNcIj09ZT97dmFsdWU6ci52YWx1ZSxkb25lOiExfTp7dmFsdWU6W3Iua2V5LHIudmFsdWVdLGRvbmU6ITF9Oih0LnRhcmdldD12b2lkIDAse3ZhbHVlOnZvaWQgMCxkb25lOiEwfSl9LHI/XCJlbnRyaWVzXCI6XCJ2YWx1ZXNcIiwhciwhMCksRHIoZSl9fSwkcj1DcihcIk1hcFwiLGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0KHRoaXMsYXJndW1lbnRzLmxlbmd0aD9hcmd1bWVudHNbMF06dm9pZCAwKX19LEdyKTthcnx8ZXQoT2JqZWN0LnByb3RvdHlwZSxcInRvU3RyaW5nXCIsYXI/e30udG9TdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm5cIltvYmplY3QgXCIrY3IodGhpcykrXCJdXCJ9LHt1bnNhZmU6ITB9KTt2YXIgVnI9e0NTU1J1bGVMaXN0OjAsQ1NTU3R5bGVEZWNsYXJhdGlvbjowLENTU1ZhbHVlTGlzdDowLENsaWVudFJlY3RMaXN0OjAsRE9NUmVjdExpc3Q6MCxET01TdHJpbmdMaXN0OjAsRE9NVG9rZW5MaXN0OjEsRGF0YVRyYW5zZmVySXRlbUxpc3Q6MCxGaWxlTGlzdDowLEhUTUxBbGxDb2xsZWN0aW9uOjAsSFRNTENvbGxlY3Rpb246MCxIVE1MRm9ybUVsZW1lbnQ6MCxIVE1MU2VsZWN0RWxlbWVudDowLE1lZGlhTGlzdDowLE1pbWVUeXBlQXJyYXk6MCxOYW1lZE5vZGVNYXA6MCxOb2RlTGlzdDoxLFBhaW50UmVxdWVzdExpc3Q6MCxQbHVnaW46MCxQbHVnaW5BcnJheTowLFNWR0xlbmd0aExpc3Q6MCxTVkdOdW1iZXJMaXN0OjAsU1ZHUGF0aFNlZ0xpc3Q6MCxTVkdQb2ludExpc3Q6MCxTVkdTdHJpbmdMaXN0OjAsU1ZHVHJhbnNmb3JtTGlzdDowLFNvdXJjZUJ1ZmZlckxpc3Q6MCxTdHlsZVNoZWV0TGlzdDowLFRleHRUcmFja0N1ZUxpc3Q6MCxUZXh0VHJhY2tMaXN0OjAsVG91Y2hMaXN0OjB9LEhyPUR0KFwiaXRlcmF0b3JcIiksWHI9RHQoXCJ0b1N0cmluZ1RhZ1wiKSxZcj1Bci52YWx1ZXM7Zm9yKHZhciBKciBpbiBWcil7dmFyIFFyPW5bSnJdLFpyPVFyJiZRci5wcm90b3R5cGU7aWYoWnIpe2lmKFpyW0hyXSE9PVlyKXRyeXtJKFpyLEhyLFlyKX1jYXRjaCh0KXtacltIcl09WXJ9aWYoWnJbWHJdfHxJKFpyLFhyLEpyKSxWcltKcl0pZm9yKHZhciB0biBpbiBBcilpZihaclt0bl0hPT1Bclt0bl0pdHJ5e0koWnIsdG4sQXJbdG5dKX1jYXRjaCh0KXtaclt0bl09QXJbdG5dfX19dmFyIGVuPWZ1bmN0aW9uKHQpe3ZhciBlLHIsbixvLGk9YXJndW1lbnRzLmxlbmd0aCxhPWk+MT9hcmd1bWVudHNbMV06dm9pZCAwO3JldHVybiBRdCh0aGlzKSwoZT12b2lkIDAhPT1hKSYmUXQoYSksbnVsbD09dD9uZXcgdGhpczoocj1bXSxlPyhuPTAsbz1adChhLGk+Mj9hcmd1bWVudHNbMl06dm9pZCAwLDIpLE1yKHQsZnVuY3Rpb24odCl7ci5wdXNoKG8odCxuKyspKX0pKTpNcih0LHIucHVzaCxyKSxuZXcgdGhpcyhyKSl9O2t0KHt0YXJnZXQ6XCJNYXBcIixzdGF0OiEwfSx7ZnJvbTplbn0pO3ZhciBybj1mdW5jdGlvbigpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLGU9bmV3IEFycmF5KHQpO3QtLTspZVt0XT1hcmd1bWVudHNbdF07cmV0dXJuIG5ldyB0aGlzKGUpfTtrdCh7dGFyZ2V0OlwiTWFwXCIsc3RhdDohMH0se29mOnJufSk7dmFyIG5uPWZ1bmN0aW9uKCl7Zm9yKHZhciB0LGU9Uih0aGlzKSxyPVF0KGUuZGVsZXRlKSxuPSEwLG89MCxpPWFyZ3VtZW50cy5sZW5ndGg7bzxpO28rKyl0PXIuY2FsbChlLGFyZ3VtZW50c1tvXSksbj1uJiZ0O3JldHVybiEhbn07a3Qoe3RhcmdldDpcIk1hcFwiLHByb3RvOiEwLHJlYWw6ITAsZm9yY2VkOkR9LHtkZWxldGVBbGw6ZnVuY3Rpb24oKXtyZXR1cm4gbm4uYXBwbHkodGhpcyxhcmd1bWVudHMpfX0pO3ZhciBvbj1mdW5jdGlvbih0KXt2YXIgZT1scih0KTtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IFR5cGVFcnJvcihTdHJpbmcodCkrXCIgaXMgbm90IGl0ZXJhYmxlXCIpO3JldHVybiBSKGUuY2FsbCh0KSl9LGFuPWZ1bmN0aW9uKHQpe3JldHVybiBNYXAucHJvdG90eXBlLmVudHJpZXMuY2FsbCh0KX07a3Qoe3RhcmdldDpcIk1hcFwiLHByb3RvOiEwLHJlYWw6ITAsZm9yY2VkOkR9LHtldmVyeTpmdW5jdGlvbih0KXt2YXIgZT1SKHRoaXMpLHI9YW4oZSksbj1adCh0LGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwLDMpO3JldHVybiFNcihyLGZ1bmN0aW9uKHQscil7aWYoIW4ocix0LGUpKXJldHVybiBNci5zdG9wKCl9LHZvaWQgMCwhMCwhMCkuc3RvcHBlZH19KTt2YXIgdW49RHQoXCJzcGVjaWVzXCIpLHNuPWZ1bmN0aW9uKHQsZSl7dmFyIHIsbj1SKHQpLmNvbnN0cnVjdG9yO3JldHVybiB2b2lkIDA9PT1ufHxudWxsPT0ocj1SKG4pW3VuXSk/ZTpRdChyKX07a3Qoe3RhcmdldDpcIk1hcFwiLHByb3RvOiEwLHJlYWw6ITAsZm9yY2VkOkR9LHtmaWx0ZXI6ZnVuY3Rpb24odCl7dmFyIGU9Uih0aGlzKSxyPWFuKGUpLG49WnQodCxhcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCwzKSxvPW5ldyhzbihlLG90KFwiTWFwXCIpKSksaT1RdChvLnNldCk7cmV0dXJuIE1yKHIsZnVuY3Rpb24odCxyKXtuKHIsdCxlKSYmaS5jYWxsKG8sdCxyKX0sdm9pZCAwLCEwLCEwKSxvfX0pLGt0KHt0YXJnZXQ6XCJNYXBcIixwcm90bzohMCxyZWFsOiEwLGZvcmNlZDpEfSx7ZmluZDpmdW5jdGlvbih0KXt2YXIgZT1SKHRoaXMpLHI9YW4oZSksbj1adCh0LGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwLDMpO3JldHVybiBNcihyLGZ1bmN0aW9uKHQscil7aWYobihyLHQsZSkpcmV0dXJuIE1yLnN0b3Aocil9LHZvaWQgMCwhMCwhMCkucmVzdWx0fX0pLGt0KHt0YXJnZXQ6XCJNYXBcIixwcm90bzohMCxyZWFsOiEwLGZvcmNlZDpEfSx7ZmluZEtleTpmdW5jdGlvbih0KXt2YXIgZT1SKHRoaXMpLHI9YW4oZSksbj1adCh0LGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwLDMpO3JldHVybiBNcihyLGZ1bmN0aW9uKHQscil7aWYobihyLHQsZSkpcmV0dXJuIE1yLnN0b3AodCl9LHZvaWQgMCwhMCwhMCkucmVzdWx0fX0pLGt0KHt0YXJnZXQ6XCJNYXBcIixzdGF0OiEwfSx7Z3JvdXBCeTpmdW5jdGlvbih0LGUpe3ZhciByPW5ldyB0aGlzO1F0KGUpO3ZhciBuPVF0KHIuaGFzKSxvPVF0KHIuZ2V0KSxpPVF0KHIuc2V0KTtyZXR1cm4gTXIodCxmdW5jdGlvbih0KXt2YXIgYT1lKHQpO24uY2FsbChyLGEpP28uY2FsbChyLGEpLnB1c2godCk6aS5jYWxsKHIsYSxbdF0pfSkscn19KSxrdCh7dGFyZ2V0OlwiTWFwXCIscHJvdG86ITAscmVhbDohMCxmb3JjZWQ6RH0se2luY2x1ZGVzOmZ1bmN0aW9uKHQpe3JldHVybiBNcihhbihSKHRoaXMpKSxmdW5jdGlvbihlLHIpe2lmKChuPXIpPT09KG89dCl8fG4hPW4mJm8hPW8pcmV0dXJuIE1yLnN0b3AoKTt2YXIgbixvfSx2b2lkIDAsITAsITApLnN0b3BwZWR9fSksa3Qoe3RhcmdldDpcIk1hcFwiLHN0YXQ6ITB9LHtrZXlCeTpmdW5jdGlvbih0LGUpe3ZhciByPW5ldyB0aGlzO1F0KGUpO3ZhciBuPVF0KHIuc2V0KTtyZXR1cm4gTXIodCxmdW5jdGlvbih0KXtuLmNhbGwocixlKHQpLHQpfSkscn19KSxrdCh7dGFyZ2V0OlwiTWFwXCIscHJvdG86ITAscmVhbDohMCxmb3JjZWQ6RH0se2tleU9mOmZ1bmN0aW9uKHQpe3JldHVybiBNcihhbihSKHRoaXMpKSxmdW5jdGlvbihlLHIpe2lmKHI9PT10KXJldHVybiBNci5zdG9wKGUpfSx2b2lkIDAsITAsITApLnJlc3VsdH19KSxrdCh7dGFyZ2V0OlwiTWFwXCIscHJvdG86ITAscmVhbDohMCxmb3JjZWQ6RH0se21hcEtleXM6ZnVuY3Rpb24odCl7dmFyIGU9Uih0aGlzKSxyPWFuKGUpLG49WnQodCxhcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCwzKSxvPW5ldyhzbihlLG90KFwiTWFwXCIpKSksaT1RdChvLnNldCk7cmV0dXJuIE1yKHIsZnVuY3Rpb24odCxyKXtpLmNhbGwobyxuKHIsdCxlKSxyKX0sdm9pZCAwLCEwLCEwKSxvfX0pLGt0KHt0YXJnZXQ6XCJNYXBcIixwcm90bzohMCxyZWFsOiEwLGZvcmNlZDpEfSx7bWFwVmFsdWVzOmZ1bmN0aW9uKHQpe3ZhciBlPVIodGhpcykscj1hbihlKSxuPVp0KHQsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDAsMyksbz1uZXcoc24oZSxvdChcIk1hcFwiKSkpLGk9UXQoby5zZXQpO3JldHVybiBNcihyLGZ1bmN0aW9uKHQscil7aS5jYWxsKG8sdCxuKHIsdCxlKSl9LHZvaWQgMCwhMCwhMCksb319KSxrdCh7dGFyZ2V0OlwiTWFwXCIscHJvdG86ITAscmVhbDohMCxmb3JjZWQ6RH0se21lcmdlOmZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1SKHRoaXMpLHI9UXQoZS5zZXQpLG49MDtuPGFyZ3VtZW50cy5sZW5ndGg7KU1yKGFyZ3VtZW50c1tuKytdLHIsZSwhMCk7cmV0dXJuIGV9fSksa3Qoe3RhcmdldDpcIk1hcFwiLHByb3RvOiEwLHJlYWw6ITAsZm9yY2VkOkR9LHtyZWR1Y2U6ZnVuY3Rpb24odCl7dmFyIGU9Uih0aGlzKSxyPWFuKGUpLG49YXJndW1lbnRzLmxlbmd0aDwyLG89bj92b2lkIDA6YXJndW1lbnRzWzFdO2lmKFF0KHQpLE1yKHIsZnVuY3Rpb24ocixpKXtuPyhuPSExLG89aSk6bz10KG8saSxyLGUpfSx2b2lkIDAsITAsITApLG4pdGhyb3cgVHlwZUVycm9yKFwiUmVkdWNlIG9mIGVtcHR5IG1hcCB3aXRoIG5vIGluaXRpYWwgdmFsdWVcIik7cmV0dXJuIG99fSksa3Qoe3RhcmdldDpcIk1hcFwiLHByb3RvOiEwLHJlYWw6ITAsZm9yY2VkOkR9LHtzb21lOmZ1bmN0aW9uKHQpe3ZhciBlPVIodGhpcykscj1hbihlKSxuPVp0KHQsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDAsMyk7cmV0dXJuIE1yKHIsZnVuY3Rpb24odCxyKXtpZihuKHIsdCxlKSlyZXR1cm4gTXIuc3RvcCgpfSx2b2lkIDAsITAsITApLnN0b3BwZWR9fSksa3Qoe3RhcmdldDpcIk1hcFwiLHByb3RvOiEwLHJlYWw6ITAsZm9yY2VkOkR9LHt1cGRhdGU6ZnVuY3Rpb24odCxlKXt2YXIgcj1SKHRoaXMpLG49YXJndW1lbnRzLmxlbmd0aDtRdChlKTt2YXIgbz1yLmhhcyh0KTtpZighbyYmbjwzKXRocm93IFR5cGVFcnJvcihcIlVwZGF0aW5nIGFic2VudCB2YWx1ZVwiKTt2YXIgaT1vP3IuZ2V0KHQpOlF0KG4+Mj9hcmd1bWVudHNbMl06dm9pZCAwKSh0LHIpO3JldHVybiByLnNldCh0LGUoaSx0LHIpKSxyfX0pO3ZhciBjbj1mdW5jdGlvbih0LGUpe3ZhciByLG49Uih0aGlzKSxvPWFyZ3VtZW50cy5sZW5ndGg+Mj9hcmd1bWVudHNbMl06dm9pZCAwO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIG8pdGhyb3cgVHlwZUVycm9yKFwiQXQgbGVhc3Qgb25lIGNhbGxiYWNrIHJlcXVpcmVkXCIpO3JldHVybiBuLmhhcyh0KT8ocj1uLmdldCh0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiYocj1lKHIpLG4uc2V0KHQscikpKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBvJiYocj1vKCksbi5zZXQodCxyKSkscn07a3Qoe3RhcmdldDpcIk1hcFwiLHByb3RvOiEwLHJlYWw6ITAsZm9yY2VkOkR9LHt1cHNlcnQ6Y259KSxrdCh7dGFyZ2V0OlwiTWFwXCIscHJvdG86ITAscmVhbDohMCxmb3JjZWQ6RH0se3VwZGF0ZU9ySW5zZXJ0OmNufSk7dmFyIGZuPVwiXFx0XFxuXFx2XFxmXFxyIMKg4ZqA4oCA4oCB4oCC4oCD4oCE4oCF4oCG4oCH4oCI4oCJ4oCK4oCv4oGf44CAXFx1MjAyOFxcdTIwMjlcXHVmZWZmXCIsbG49XCJbXCIrZm4rXCJdXCIsaG49UmVnRXhwKFwiXlwiK2xuK2xuK1wiKlwiKSxwbj1SZWdFeHAobG4rbG4rXCIqJFwiKSxkbj1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHI9U3RyaW5nKGQoZSkpO3JldHVybiAxJnQmJihyPXIucmVwbGFjZShobixcIlwiKSksMiZ0JiYocj1yLnJlcGxhY2UocG4sXCJcIikpLHJ9fSx2bj17c3RhcnQ6ZG4oMSksZW5kOmRuKDIpLHRyaW06ZG4oMyl9LGduPWJ0LmYseW49Ty5mLG1uPVAuZixibj12bi50cmltLHduPVwiTnVtYmVyXCIsU249bi5OdW1iZXIsRW49U24ucHJvdG90eXBlLHhuPWwoSHQoRW4pKT09d24sQW49ZnVuY3Rpb24odCl7dmFyIGUscixuLG8saSxhLHUscyxjPXkodCwhMSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGMmJmMubGVuZ3RoPjIpaWYoNDM9PT0oZT0oYz1ibihjKSkuY2hhckNvZGVBdCgwKSl8fDQ1PT09ZSl7aWYoODg9PT0ocj1jLmNoYXJDb2RlQXQoMikpfHwxMjA9PT1yKXJldHVybiBOYU59ZWxzZSBpZig0OD09PWUpe3N3aXRjaChjLmNoYXJDb2RlQXQoMSkpe2Nhc2UgNjY6Y2FzZSA5ODpuPTIsbz00OTticmVhaztjYXNlIDc5OmNhc2UgMTExOm49OCxvPTU1O2JyZWFrO2RlZmF1bHQ6cmV0dXJuK2N9Zm9yKGE9KGk9Yy5zbGljZSgyKSkubGVuZ3RoLHU9MDt1PGE7dSsrKWlmKChzPWkuY2hhckNvZGVBdCh1KSk8NDh8fHM+bylyZXR1cm4gTmFOO3JldHVybiBwYXJzZUludChpLG4pfXJldHVybitjfTtpZihJdCh3biwhU24oXCIgMG8xXCIpfHwhU24oXCIwYjFcIil8fFNuKFwiKzB4MVwiKSkpe2Zvcih2YXIgT24sUm49ZnVuY3Rpb24odCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aDwxPzA6dCxyPXRoaXM7cmV0dXJuIHIgaW5zdGFuY2VvZiBSbiYmKHhuP28oZnVuY3Rpb24oKXtFbi52YWx1ZU9mLmNhbGwocil9KTpsKHIpIT13bik/TnIobmV3IFNuKEFuKGUpKSxyLFJuKTpBbihlKX0sam49aT9nbihTbik6XCJNQVhfVkFMVUUsTUlOX1ZBTFVFLE5hTixORUdBVElWRV9JTkZJTklUWSxQT1NJVElWRV9JTkZJTklUWSxFUFNJTE9OLGlzRmluaXRlLGlzSW50ZWdlcixpc05hTixpc1NhZmVJbnRlZ2VyLE1BWF9TQUZFX0lOVEVHRVIsTUlOX1NBRkVfSU5URUdFUixwYXJzZUZsb2F0LHBhcnNlSW50LGlzSW50ZWdlclwiLnNwbGl0KFwiLFwiKSxQbj0wO2puLmxlbmd0aD5QbjtQbisrKWIoU24sT249am5bUG5dKSYmIWIoUm4sT24pJiZtbihSbixPbix5bihTbixPbikpO1JuLnByb3RvdHlwZT1FbixFbi5jb25zdHJ1Y3Rvcj1SbixldChuLHduLFJuKX1rdCh7dGFyZ2V0OlwiTnVtYmVyXCIsc3RhdDohMH0se0VQU0lMT046TWF0aC5wb3coMiwtNTIpfSk7dmFyIEluPW4uaXNGaW5pdGU7a3Qoe3RhcmdldDpcIk51bWJlclwiLHN0YXQ6ITB9LHtpc0Zpbml0ZTpOdW1iZXIuaXNGaW5pdGV8fGZ1bmN0aW9uKHQpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiB0JiZJbih0KX19KTt2YXIgVG49TWF0aC5mbG9vcixrbj1mdW5jdGlvbih0KXtyZXR1cm4hZyh0KSYmaXNGaW5pdGUodCkmJlRuKHQpPT09dH07a3Qoe3RhcmdldDpcIk51bWJlclwiLHN0YXQ6ITB9LHtpc0ludGVnZXI6a259KSxrdCh7dGFyZ2V0OlwiTnVtYmVyXCIsc3RhdDohMH0se2lzTmFOOmZ1bmN0aW9uKHQpe3JldHVybiB0IT10fX0pO3ZhciBMbj1NYXRoLmFicztrdCh7dGFyZ2V0OlwiTnVtYmVyXCIsc3RhdDohMH0se2lzU2FmZUludGVnZXI6ZnVuY3Rpb24odCl7cmV0dXJuIGtuKHQpJiZMbih0KTw9OTAwNzE5OTI1NDc0MDk5MX19KSxrdCh7dGFyZ2V0OlwiTnVtYmVyXCIsc3RhdDohMH0se01BWF9TQUZFX0lOVEVHRVI6OTAwNzE5OTI1NDc0MDk5MX0pLGt0KHt0YXJnZXQ6XCJOdW1iZXJcIixzdGF0OiEwfSx7TUlOX1NBRkVfSU5URUdFUjotOTAwNzE5OTI1NDc0MDk5MX0pO3ZhciBVbj12bi50cmltLE1uPW4ucGFyc2VGbG9hdCxfbj0xL01uKGZuK1wiLTBcIikhPS1JbmZpbml0eT9mdW5jdGlvbih0KXt2YXIgZT1VbihTdHJpbmcodCkpLHI9TW4oZSk7cmV0dXJuIDA9PT1yJiZcIi1cIj09ZS5jaGFyQXQoMCk/LTA6cn06TW47a3Qoe3RhcmdldDpcIk51bWJlclwiLHN0YXQ6ITAsZm9yY2VkOk51bWJlci5wYXJzZUZsb2F0IT1fbn0se3BhcnNlRmxvYXQ6X259KTt2YXIgTm49dm4udHJpbSxDbj1uLnBhcnNlSW50LEZuPS9eWystXT8wW1h4XS8sQm49OCE9PUNuKGZuK1wiMDhcIil8fDIyIT09Q24oZm4rXCIweDE2XCIpP2Z1bmN0aW9uKHQsZSl7dmFyIHI9Tm4oU3RyaW5nKHQpKTtyZXR1cm4gQ24ocixlPj4+MHx8KEZuLnRlc3Qocik/MTY6MTApKX06Q247a3Qoe3RhcmdldDpcIk51bWJlclwiLHN0YXQ6ITAsZm9yY2VkOk51bWJlci5wYXJzZUludCE9Qm59LHtwYXJzZUludDpCbn0pO3ZhciBEbj1zLmYscW49ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Zvcih2YXIgcixuPXYoZSksbz1xdChuKSxhPW8ubGVuZ3RoLHU9MCxzPVtdO2E+dTspcj1vW3UrK10saSYmIURuLmNhbGwobixyKXx8cy5wdXNoKHQ/W3IsbltyXV06bltyXSk7cmV0dXJuIHN9fSx6bj17ZW50cmllczpxbighMCksdmFsdWVzOnFuKCExKX0sV249em4uZW50cmllcztrdCh7dGFyZ2V0OlwiT2JqZWN0XCIsc3RhdDohMH0se2VudHJpZXM6ZnVuY3Rpb24odCl7cmV0dXJuIFduKHQpfX0pLGt0KHt0YXJnZXQ6XCJPYmplY3RcIixzdGF0OiEwLHNoYW06IWl9LHtnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzOmZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxyLG49dih0KSxvPU8uZixpPVN0KG4pLGE9e30sdT0wO2kubGVuZ3RoPnU7KXZvaWQgMCE9PShyPW8obixlPWlbdSsrXSkpJiZvcihhLGUscik7cmV0dXJuIGF9fSk7dmFyIEtuPW8oZnVuY3Rpb24oKXtxdCgxKX0pO2t0KHt0YXJnZXQ6XCJPYmplY3RcIixzdGF0OiEwLGZvcmNlZDpLbn0se2tleXM6ZnVuY3Rpb24odCl7cmV0dXJuIHF0KEx0KHQpKX19KTt2YXIgR249T2JqZWN0LmlzfHxmdW5jdGlvbih0LGUpe3JldHVybiB0PT09ZT8wIT09dHx8MS90PT0xL2U6dCE9dCYmZSE9ZX07a3Qoe3RhcmdldDpcIk9iamVjdFwiLHN0YXQ6ITB9LHtpczpHbn0pO3ZhciAkbj16bi52YWx1ZXM7a3Qoe3RhcmdldDpcIk9iamVjdFwiLHN0YXQ6ITB9LHt2YWx1ZXM6ZnVuY3Rpb24odCl7cmV0dXJuICRuKHQpfX0pO3ZhciBWbj1vdChcIlJlZmxlY3RcIixcImFwcGx5XCIpLEhuPUZ1bmN0aW9uLmFwcGx5LFhuPSFvKGZ1bmN0aW9uKCl7Vm4oZnVuY3Rpb24oKXt9KX0pO2t0KHt0YXJnZXQ6XCJSZWZsZWN0XCIsc3RhdDohMCxmb3JjZWQ6WG59LHthcHBseTpmdW5jdGlvbih0LGUscil7cmV0dXJuIFF0KHQpLFIociksVm4/Vm4odCxlLHIpOkhuLmNhbGwodCxlLHIpfX0pO3ZhciBZbj1bXS5zbGljZSxKbj17fSxRbj1mdW5jdGlvbih0LGUscil7aWYoIShlIGluIEpuKSl7Zm9yKHZhciBuPVtdLG89MDtvPGU7bysrKW5bb109XCJhW1wiK28rXCJdXCI7Sm5bZV09RnVuY3Rpb24oXCJDLGFcIixcInJldHVybiBuZXcgQyhcIituLmpvaW4oXCIsXCIpK1wiKVwiKX1yZXR1cm4gSm5bZV0odCxyKX0sWm49RnVuY3Rpb24uYmluZHx8ZnVuY3Rpb24odCl7dmFyIGU9UXQodGhpcykscj1Zbi5jYWxsKGFyZ3VtZW50cywxKSxuPWZ1bmN0aW9uKCl7dmFyIG89ci5jb25jYXQoWW4uY2FsbChhcmd1bWVudHMpKTtyZXR1cm4gdGhpcyBpbnN0YW5jZW9mIG4/UW4oZSxvLmxlbmd0aCxvKTplLmFwcGx5KHQsbyl9O3JldHVybiBnKGUucHJvdG90eXBlKSYmKG4ucHJvdG90eXBlPWUucHJvdG90eXBlKSxufSx0bz1vdChcIlJlZmxlY3RcIixcImNvbnN0cnVjdFwiKSxlbz1vKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe31yZXR1cm4hKHRvKGZ1bmN0aW9uKCl7fSxbXSx0KWluc3RhbmNlb2YgdCl9KSxybz0hbyhmdW5jdGlvbigpe3RvKGZ1bmN0aW9uKCl7fSl9KSxubz1lb3x8cm87a3Qoe3RhcmdldDpcIlJlZmxlY3RcIixzdGF0OiEwLGZvcmNlZDpubyxzaGFtOm5vfSx7Y29uc3RydWN0OmZ1bmN0aW9uKHQsZSl7UXQodCksUihlKTt2YXIgcj1hcmd1bWVudHMubGVuZ3RoPDM/dDpRdChhcmd1bWVudHNbMl0pO2lmKHJvJiYhZW8pcmV0dXJuIHRvKHQsZSxyKTtpZih0PT1yKXtzd2l0Y2goZS5sZW5ndGgpe2Nhc2UgMDpyZXR1cm4gbmV3IHQ7Y2FzZSAxOnJldHVybiBuZXcgdChlWzBdKTtjYXNlIDI6cmV0dXJuIG5ldyB0KGVbMF0sZVsxXSk7Y2FzZSAzOnJldHVybiBuZXcgdChlWzBdLGVbMV0sZVsyXSk7Y2FzZSA0OnJldHVybiBuZXcgdChlWzBdLGVbMV0sZVsyXSxlWzNdKX12YXIgbj1bbnVsbF07cmV0dXJuIG4ucHVzaC5hcHBseShuLGUpLG5ldyhabi5hcHBseSh0LG4pKX12YXIgbz1yLnByb3RvdHlwZSxpPUh0KGcobyk/bzpPYmplY3QucHJvdG90eXBlKSxhPUZ1bmN0aW9uLmFwcGx5LmNhbGwodCxpLGUpO3JldHVybiBnKGEpP2E6aX19KTt2YXIgb289byhmdW5jdGlvbigpe1JlZmxlY3QuZGVmaW5lUHJvcGVydHkoUC5mKHt9LDEse3ZhbHVlOjF9KSwxLHt2YWx1ZToyfSl9KTtrdCh7dGFyZ2V0OlwiUmVmbGVjdFwiLHN0YXQ6ITAsZm9yY2VkOm9vLHNoYW06IWl9LHtkZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbih0LGUscil7Uih0KTt2YXIgbj15KGUsITApO1Iocik7dHJ5e3JldHVybiBQLmYodCxuLHIpLCEwfWNhdGNoKHQpe3JldHVybiExfX19KTt2YXIgaW89Ty5mO2t0KHt0YXJnZXQ6XCJSZWZsZWN0XCIsc3RhdDohMH0se2RlbGV0ZVByb3BlcnR5OmZ1bmN0aW9uKHQsZSl7dmFyIHI9aW8oUih0KSxlKTtyZXR1cm4hKHImJiFyLmNvbmZpZ3VyYWJsZSkmJmRlbGV0ZSB0W2VdfX0pLGt0KHt0YXJnZXQ6XCJSZWZsZWN0XCIsc3RhdDohMH0se2dldDpmdW5jdGlvbiB0KGUscil7dmFyIG4sbyxpPWFyZ3VtZW50cy5sZW5ndGg8Mz9lOmFyZ3VtZW50c1syXTtyZXR1cm4gUihlKT09PWk/ZVtyXToobj1PLmYoZSxyKSk/YihuLFwidmFsdWVcIik/bi52YWx1ZTp2b2lkIDA9PT1uLmdldD92b2lkIDA6bi5nZXQuY2FsbChpKTpnKG89SWUoZSkpP3QobyxyLGkpOnZvaWQgMH19KSxrdCh7dGFyZ2V0OlwiUmVmbGVjdFwiLHN0YXQ6ITAsc2hhbTohaX0se2dldE93blByb3BlcnR5RGVzY3JpcHRvcjpmdW5jdGlvbih0LGUpe3JldHVybiBPLmYoUih0KSxlKX19KSxrdCh7dGFyZ2V0OlwiUmVmbGVjdFwiLHN0YXQ6ITAsc2hhbTohUmV9LHtnZXRQcm90b3R5cGVPZjpmdW5jdGlvbih0KXtyZXR1cm4gSWUoUih0KSl9fSksa3Qoe3RhcmdldDpcIlJlZmxlY3RcIixzdGF0OiEwfSx7aGFzOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIGUgaW4gdH19KTt2YXIgYW89T2JqZWN0LmlzRXh0ZW5zaWJsZTtrdCh7dGFyZ2V0OlwiUmVmbGVjdFwiLHN0YXQ6ITB9LHtpc0V4dGVuc2libGU6ZnVuY3Rpb24odCl7cmV0dXJuIFIodCksIWFvfHxhbyh0KX19KSxrdCh7dGFyZ2V0OlwiUmVmbGVjdFwiLHN0YXQ6ITB9LHtvd25LZXlzOlN0fSksa3Qoe3RhcmdldDpcIlJlZmxlY3RcIixzdGF0OiEwLHNoYW06IUxyfSx7cHJldmVudEV4dGVuc2lvbnM6ZnVuY3Rpb24odCl7Uih0KTt0cnl7dmFyIGU9b3QoXCJPYmplY3RcIixcInByZXZlbnRFeHRlbnNpb25zXCIpO3JldHVybiBlJiZlKHQpLCEwfWNhdGNoKHQpe3JldHVybiExfX19KTt2YXIgdW89byhmdW5jdGlvbigpe3ZhciB0PVAuZih7fSxcImFcIix7Y29uZmlndXJhYmxlOiEwfSk7cmV0dXJuITEhPT1SZWZsZWN0LnNldChJZSh0KSxcImFcIiwxLHQpfSk7a3Qoe3RhcmdldDpcIlJlZmxlY3RcIixzdGF0OiEwLGZvcmNlZDp1b30se3NldDpmdW5jdGlvbiB0KGUscixuKXt2YXIgbyxpLGE9YXJndW1lbnRzLmxlbmd0aDw0P2U6YXJndW1lbnRzWzNdLHU9Ty5mKFIoZSkscik7aWYoIXUpe2lmKGcoaT1JZShlKSkpcmV0dXJuIHQoaSxyLG4sYSk7dT1jKDApfWlmKGIodSxcInZhbHVlXCIpKXtpZighMT09PXUud3JpdGFibGV8fCFnKGEpKXJldHVybiExO2lmKG89Ty5mKGEscikpe2lmKG8uZ2V0fHxvLnNldHx8ITE9PT1vLndyaXRhYmxlKXJldHVybiExO28udmFsdWU9bixQLmYoYSxyLG8pfWVsc2UgUC5mKGEscixjKDAsbikpO3JldHVybiEwfXJldHVybiB2b2lkIDAhPT11LnNldCYmKHUuc2V0LmNhbGwoYSxuKSwhMCl9fSkscWUmJmt0KHt0YXJnZXQ6XCJSZWZsZWN0XCIsc3RhdDohMH0se3NldFByb3RvdHlwZU9mOmZ1bmN0aW9uKHQsZSl7Uih0KSxEZShlKTt0cnl7cmV0dXJuIHFlKHQsZSksITB9Y2F0Y2godCl7cmV0dXJuITF9fX0pO3ZhciBzbz1Vci5nZXRXZWFrRGF0YSxjbz10dC5zZXQsZm89dHQuZ2V0dGVyRm9yLGxvPXVlLmZpbmQsaG89dWUuZmluZEluZGV4LHBvPTAsdm89ZnVuY3Rpb24odCl7cmV0dXJuIHQuZnJvemVufHwodC5mcm96ZW49bmV3IGdvKX0sZ289ZnVuY3Rpb24oKXt0aGlzLmVudHJpZXM9W119LHlvPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGxvKHQuZW50cmllcyxmdW5jdGlvbih0KXtyZXR1cm4gdFswXT09PWV9KX07Z28ucHJvdG90eXBlPXtnZXQ6ZnVuY3Rpb24odCl7dmFyIGU9eW8odGhpcyx0KTtpZihlKXJldHVybiBlWzFdfSxoYXM6ZnVuY3Rpb24odCl7cmV0dXJuISF5byh0aGlzLHQpfSxzZXQ6ZnVuY3Rpb24odCxlKXt2YXIgcj15byh0aGlzLHQpO3I/clsxXT1lOnRoaXMuZW50cmllcy5wdXNoKFt0LGVdKX0sZGVsZXRlOmZ1bmN0aW9uKHQpe3ZhciBlPWhvKHRoaXMuZW50cmllcyxmdW5jdGlvbihlKXtyZXR1cm4gZVswXT09PXR9KTtyZXR1cm5+ZSYmdGhpcy5lbnRyaWVzLnNwbGljZShlLDEpLCEhfmV9fTt2YXIgbW89e2dldENvbnN0cnVjdG9yOmZ1bmN0aW9uKHQsZSxyLG4pe3ZhciBvPXQoZnVuY3Rpb24odCxpKXtfcih0LG8sZSksY28odCx7dHlwZTplLGlkOnBvKyssZnJvemVuOnZvaWQgMH0pLG51bGwhPWkmJk1yKGksdFtuXSx0LHIpfSksaT1mbyhlKSxhPWZ1bmN0aW9uKHQsZSxyKXt2YXIgbj1pKHQpLG89c28oUihlKSwhMCk7cmV0dXJuITA9PT1vP3ZvKG4pLnNldChlLHIpOm9bbi5pZF09cix0fTtyZXR1cm4gRnIoby5wcm90b3R5cGUse2RlbGV0ZTpmdW5jdGlvbih0KXt2YXIgZT1pKHRoaXMpO2lmKCFnKHQpKXJldHVybiExO3ZhciByPXNvKHQpO3JldHVybiEwPT09cj92byhlKS5kZWxldGUodCk6ciYmYihyLGUuaWQpJiZkZWxldGUgcltlLmlkXX0saGFzOmZ1bmN0aW9uKHQpe3ZhciBlPWkodGhpcyk7aWYoIWcodCkpcmV0dXJuITE7dmFyIHI9c28odCk7cmV0dXJuITA9PT1yP3ZvKGUpLmhhcyh0KTpyJiZiKHIsZS5pZCl9fSksRnIoby5wcm90b3R5cGUscj97Z2V0OmZ1bmN0aW9uKHQpe3ZhciBlPWkodGhpcyk7aWYoZyh0KSl7dmFyIHI9c28odCk7cmV0dXJuITA9PT1yP3ZvKGUpLmdldCh0KTpyP3JbZS5pZF06dm9pZCAwfX0sc2V0OmZ1bmN0aW9uKHQsZSl7cmV0dXJuIGEodGhpcyx0LGUpfX06e2FkZDpmdW5jdGlvbih0KXtyZXR1cm4gYSh0aGlzLHQsITApfX0pLG99fSxibz1lKGZ1bmN0aW9uKHQpe3ZhciBlLHI9dHQuZW5mb3JjZSxvPSFuLkFjdGl2ZVhPYmplY3QmJlwiQWN0aXZlWE9iamVjdFwiaW4gbixpPU9iamVjdC5pc0V4dGVuc2libGUsYT1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdCh0aGlzLGFyZ3VtZW50cy5sZW5ndGg/YXJndW1lbnRzWzBdOnZvaWQgMCl9fSx1PXQuZXhwb3J0cz1DcihcIldlYWtNYXBcIixhLG1vKTtpZihCJiZvKXtlPW1vLmdldENvbnN0cnVjdG9yKGEsXCJXZWFrTWFwXCIsITApLFVyLlJFUVVJUkVEPSEwO3ZhciBzPXUucHJvdG90eXBlLGM9cy5kZWxldGUsZj1zLmhhcyxsPXMuZ2V0LGg9cy5zZXQ7RnIocyx7ZGVsZXRlOmZ1bmN0aW9uKHQpe2lmKGcodCkmJiFpKHQpKXt2YXIgbj1yKHRoaXMpO3JldHVybiBuLmZyb3plbnx8KG4uZnJvemVuPW5ldyBlKSxjLmNhbGwodGhpcyx0KXx8bi5mcm96ZW4uZGVsZXRlKHQpfXJldHVybiBjLmNhbGwodGhpcyx0KX0saGFzOmZ1bmN0aW9uKHQpe2lmKGcodCkmJiFpKHQpKXt2YXIgbj1yKHRoaXMpO3JldHVybiBuLmZyb3plbnx8KG4uZnJvemVuPW5ldyBlKSxmLmNhbGwodGhpcyx0KXx8bi5mcm96ZW4uaGFzKHQpfXJldHVybiBmLmNhbGwodGhpcyx0KX0sZ2V0OmZ1bmN0aW9uKHQpe2lmKGcodCkmJiFpKHQpKXt2YXIgbj1yKHRoaXMpO3JldHVybiBuLmZyb3plbnx8KG4uZnJvemVuPW5ldyBlKSxmLmNhbGwodGhpcyx0KT9sLmNhbGwodGhpcyx0KTpuLmZyb3plbi5nZXQodCl9cmV0dXJuIGwuY2FsbCh0aGlzLHQpfSxzZXQ6ZnVuY3Rpb24odCxuKXtpZihnKHQpJiYhaSh0KSl7dmFyIG89cih0aGlzKTtvLmZyb3plbnx8KG8uZnJvemVuPW5ldyBlKSxmLmNhbGwodGhpcyx0KT9oLmNhbGwodGhpcyx0LG4pOm8uZnJvemVuLnNldCh0LG4pfWVsc2UgaC5jYWxsKHRoaXMsdCxuKTtyZXR1cm4gdGhpc319KX19KSx3bz1xKFwibWV0YWRhdGFcIiksU289d28uc3RvcmV8fCh3by5zdG9yZT1uZXcgYm8pLEVvPWZ1bmN0aW9uKHQsZSxyKXt2YXIgbj1Tby5nZXQodCk7aWYoIW4pe2lmKCFyKXJldHVybjtTby5zZXQodCxuPW5ldyAkcil9dmFyIG89bi5nZXQoZSk7aWYoIW8pe2lmKCFyKXJldHVybjtuLnNldChlLG89bmV3ICRyKX1yZXR1cm4gb30seG89e3N0b3JlOlNvLGdldE1hcDpFbyxoYXM6ZnVuY3Rpb24odCxlLHIpe3ZhciBuPUVvKGUsciwhMSk7cmV0dXJuIHZvaWQgMCE9PW4mJm4uaGFzKHQpfSxnZXQ6ZnVuY3Rpb24odCxlLHIpe3ZhciBuPUVvKGUsciwhMSk7cmV0dXJuIHZvaWQgMD09PW4/dm9pZCAwOm4uZ2V0KHQpfSxzZXQ6ZnVuY3Rpb24odCxlLHIsbil7RW8ocixuLCEwKS5zZXQodCxlKX0sa2V5czpmdW5jdGlvbih0LGUpe3ZhciByPUVvKHQsZSwhMSksbj1bXTtyZXR1cm4gciYmci5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7bi5wdXNoKGUpfSksbn0sdG9LZXk6ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXR8fFwic3ltYm9sXCI9PXR5cGVvZiB0P3Q6U3RyaW5nKHQpfX0sQW89eG8udG9LZXksT289eG8uc2V0O2t0KHt0YXJnZXQ6XCJSZWZsZWN0XCIsc3RhdDohMH0se2RlZmluZU1ldGFkYXRhOmZ1bmN0aW9uKHQsZSxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPDQ/dm9pZCAwOkFvKGFyZ3VtZW50c1szXSk7T28odCxlLFIociksbil9fSk7dmFyIFJvPXhvLnRvS2V5LGpvPXhvLmdldE1hcCxQbz14by5zdG9yZTtrdCh7dGFyZ2V0OlwiUmVmbGVjdFwiLHN0YXQ6ITB9LHtkZWxldGVNZXRhZGF0YTpmdW5jdGlvbih0LGUpe3ZhciByPWFyZ3VtZW50cy5sZW5ndGg8Mz92b2lkIDA6Um8oYXJndW1lbnRzWzJdKSxuPWpvKFIoZSksciwhMSk7aWYodm9pZCAwPT09bnx8IW4uZGVsZXRlKHQpKXJldHVybiExO2lmKG4uc2l6ZSlyZXR1cm4hMDt2YXIgbz1Qby5nZXQoZSk7cmV0dXJuIG8uZGVsZXRlKHIpLCEhby5zaXplfHxQby5kZWxldGUoZSl9fSk7dmFyIElvPXhvLmhhcyxUbz14by5nZXQsa289eG8udG9LZXksTG89ZnVuY3Rpb24gdChlLHIsbil7aWYoSW8oZSxyLG4pKXJldHVybiBUbyhlLHIsbik7dmFyIG89SWUocik7cmV0dXJuIG51bGwhPT1vP3QoZSxvLG4pOnZvaWQgMH07a3Qoe3RhcmdldDpcIlJlZmxlY3RcIixzdGF0OiEwfSx7Z2V0TWV0YWRhdGE6ZnVuY3Rpb24odCxlKXt2YXIgcj1hcmd1bWVudHMubGVuZ3RoPDM/dm9pZCAwOmtvKGFyZ3VtZW50c1syXSk7cmV0dXJuIExvKHQsUihlKSxyKX19KTt2YXIgVW89Q3IoXCJTZXRcIixmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdCh0aGlzLGFyZ3VtZW50cy5sZW5ndGg/YXJndW1lbnRzWzBdOnZvaWQgMCl9fSxHciksTW89eG8ua2V5cyxfbz14by50b0tleSxObz1mdW5jdGlvbiB0KGUscil7dmFyIG49TW8oZSxyKSxvPUllKGUpO2lmKG51bGw9PT1vKXJldHVybiBuO3ZhciBpLGEsdT10KG8scik7cmV0dXJuIHUubGVuZ3RoP24ubGVuZ3RoPyhpPW5ldyBVbyhuLmNvbmNhdCh1KSksTXIoaSwoYT1bXSkucHVzaCxhKSxhKTp1Om59O2t0KHt0YXJnZXQ6XCJSZWZsZWN0XCIsc3RhdDohMH0se2dldE1ldGFkYXRhS2V5czpmdW5jdGlvbih0KXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPDI/dm9pZCAwOl9vKGFyZ3VtZW50c1sxXSk7cmV0dXJuIE5vKFIodCksZSl9fSk7dmFyIENvPXhvLmdldCxGbz14by50b0tleTtrdCh7dGFyZ2V0OlwiUmVmbGVjdFwiLHN0YXQ6ITB9LHtnZXRPd25NZXRhZGF0YTpmdW5jdGlvbih0LGUpe3ZhciByPWFyZ3VtZW50cy5sZW5ndGg8Mz92b2lkIDA6Rm8oYXJndW1lbnRzWzJdKTtyZXR1cm4gQ28odCxSKGUpLHIpfX0pO3ZhciBCbz14by5rZXlzLERvPXhvLnRvS2V5O2t0KHt0YXJnZXQ6XCJSZWZsZWN0XCIsc3RhdDohMH0se2dldE93bk1ldGFkYXRhS2V5czpmdW5jdGlvbih0KXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPDI/dm9pZCAwOkRvKGFyZ3VtZW50c1sxXSk7cmV0dXJuIEJvKFIodCksZSl9fSk7dmFyIHFvPXhvLmhhcyx6bz14by50b0tleSxXbz1mdW5jdGlvbiB0KGUscixuKXtpZihxbyhlLHIsbikpcmV0dXJuITA7dmFyIG89SWUocik7cmV0dXJuIG51bGwhPT1vJiZ0KGUsbyxuKX07a3Qoe3RhcmdldDpcIlJlZmxlY3RcIixzdGF0OiEwfSx7aGFzTWV0YWRhdGE6ZnVuY3Rpb24odCxlKXt2YXIgcj1hcmd1bWVudHMubGVuZ3RoPDM/dm9pZCAwOnpvKGFyZ3VtZW50c1syXSk7cmV0dXJuIFdvKHQsUihlKSxyKX19KTt2YXIgS289eG8uaGFzLEdvPXhvLnRvS2V5O2t0KHt0YXJnZXQ6XCJSZWZsZWN0XCIsc3RhdDohMH0se2hhc093bk1ldGFkYXRhOmZ1bmN0aW9uKHQsZSl7dmFyIHI9YXJndW1lbnRzLmxlbmd0aDwzP3ZvaWQgMDpHbyhhcmd1bWVudHNbMl0pO3JldHVybiBLbyh0LFIoZSkscil9fSk7dmFyICRvPXhvLnRvS2V5LFZvPXhvLnNldDtrdCh7dGFyZ2V0OlwiUmVmbGVjdFwiLHN0YXQ6ITB9LHttZXRhZGF0YTpmdW5jdGlvbih0LGUpe3JldHVybiBmdW5jdGlvbihyLG4pe1ZvKHQsZSxSKHIpLCRvKG4pKX19fSk7dmFyIEhvPUR0KFwibWF0Y2hcIiksWG89ZnVuY3Rpb24odCl7dmFyIGU7cmV0dXJuIGcodCkmJih2b2lkIDAhPT0oZT10W0hvXSk/ISFlOlwiUmVnRXhwXCI9PWwodCkpfSxZbz1mdW5jdGlvbigpe3ZhciB0PVIodGhpcyksZT1cIlwiO3JldHVybiB0Lmdsb2JhbCYmKGUrPVwiZ1wiKSx0Lmlnbm9yZUNhc2UmJihlKz1cImlcIiksdC5tdWx0aWxpbmUmJihlKz1cIm1cIiksdC5kb3RBbGwmJihlKz1cInNcIiksdC51bmljb2RlJiYoZSs9XCJ1XCIpLHQuc3RpY2t5JiYoZSs9XCJ5XCIpLGV9O2Z1bmN0aW9uIEpvKHQsZSl7cmV0dXJuIFJlZ0V4cCh0LGUpfXZhciBRbz17VU5TVVBQT1JURURfWTpvKGZ1bmN0aW9uKCl7dmFyIHQ9Sm8oXCJhXCIsXCJ5XCIpO3JldHVybiB0Lmxhc3RJbmRleD0yLG51bGwhPXQuZXhlYyhcImFiY2RcIil9KSxCUk9LRU5fQ0FSRVQ6byhmdW5jdGlvbigpe3ZhciB0PUpvKFwiXnJcIixcImd5XCIpO3JldHVybiB0Lmxhc3RJbmRleD0yLG51bGwhPXQuZXhlYyhcInN0clwiKX0pfSxabz1QLmYsdGk9YnQuZixlaT10dC5zZXQscmk9RHQoXCJtYXRjaFwiKSxuaT1uLlJlZ0V4cCxvaT1uaS5wcm90b3R5cGUsaWk9L2EvZyxhaT0vYS9nLHVpPW5ldyBuaShpaSkhPT1paSxzaT1Rby5VTlNVUFBPUlRFRF9ZO2lmKGkmJkl0KFwiUmVnRXhwXCIsIXVpfHxzaXx8byhmdW5jdGlvbigpe3JldHVybiBhaVtyaV09ITEsbmkoaWkpIT1paXx8bmkoYWkpPT1haXx8XCIvYS9pXCIhPW5pKGlpLFwiaVwiKX0pKSl7Zm9yKHZhciBjaT1mdW5jdGlvbih0LGUpe3ZhciByLG49dGhpcyBpbnN0YW5jZW9mIGNpLG89WG8odCksaT12b2lkIDA9PT1lO2lmKCFuJiZvJiZ0LmNvbnN0cnVjdG9yPT09Y2kmJmkpcmV0dXJuIHQ7dWk/byYmIWkmJih0PXQuc291cmNlKTp0IGluc3RhbmNlb2YgY2kmJihpJiYoZT1Zby5jYWxsKHQpKSx0PXQuc291cmNlKSxzaSYmKHI9ISFlJiZlLmluZGV4T2YoXCJ5XCIpPi0xKSYmKGU9ZS5yZXBsYWNlKC95L2csXCJcIikpO3ZhciBhPU5yKHVpP25ldyBuaSh0LGUpOm5pKHQsZSksbj90aGlzOm9pLGNpKTtyZXR1cm4gc2kmJnImJmVpKGEse3N0aWNreTpyfSksYX0sZmk9ZnVuY3Rpb24odCl7dCBpbiBjaXx8Wm8oY2ksdCx7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBuaVt0XX0sc2V0OmZ1bmN0aW9uKGUpe25pW3RdPWV9fSl9LGxpPXRpKG5pKSxoaT0wO2xpLmxlbmd0aD5oaTspZmkobGlbaGkrK10pO29pLmNvbnN0cnVjdG9yPWNpLGNpLnByb3RvdHlwZT1vaSxldChuLFwiUmVnRXhwXCIsY2kpfURyKFwiUmVnRXhwXCIpO3ZhciBwaT1cInRvU3RyaW5nXCIsZGk9UmVnRXhwLnByb3RvdHlwZSx2aT1kaS50b1N0cmluZzsobyhmdW5jdGlvbigpe3JldHVyblwiL2EvYlwiIT12aS5jYWxsKHtzb3VyY2U6XCJhXCIsZmxhZ3M6XCJiXCJ9KX0pfHx2aS5uYW1lIT1waSkmJmV0KFJlZ0V4cC5wcm90b3R5cGUscGksZnVuY3Rpb24oKXt2YXIgdD1SKHRoaXMpLGU9U3RyaW5nKHQuc291cmNlKSxyPXQuZmxhZ3M7cmV0dXJuXCIvXCIrZStcIi9cIitTdHJpbmcodm9pZCAwPT09ciYmdCBpbnN0YW5jZW9mIFJlZ0V4cCYmIShcImZsYWdzXCJpbiBkaSk/WW8uY2FsbCh0KTpyKX0se3Vuc2FmZTohMH0pO3ZhciBnaT1SZWdFeHAucHJvdG90eXBlLmV4ZWMseWk9U3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlLG1pPWdpLGJpPWZ1bmN0aW9uKCl7dmFyIHQ9L2EvLGU9L2IqL2c7cmV0dXJuIGdpLmNhbGwodCxcImFcIiksZ2kuY2FsbChlLFwiYVwiKSwwIT09dC5sYXN0SW5kZXh8fDAhPT1lLmxhc3RJbmRleH0oKSx3aT1Rby5VTlNVUFBPUlRFRF9ZfHxRby5CUk9LRU5fQ0FSRVQsU2k9dm9pZCAwIT09LygpPz8vLmV4ZWMoXCJcIilbMV07KGJpfHxTaXx8d2kpJiYobWk9ZnVuY3Rpb24odCl7dmFyIGUscixuLG8saT10aGlzLGE9d2kmJmkuc3RpY2t5LHU9WW8uY2FsbChpKSxzPWkuc291cmNlLGM9MCxmPXQ7cmV0dXJuIGEmJigtMT09PSh1PXUucmVwbGFjZShcInlcIixcIlwiKSkuaW5kZXhPZihcImdcIikmJih1Kz1cImdcIiksZj1TdHJpbmcodCkuc2xpY2UoaS5sYXN0SW5kZXgpLGkubGFzdEluZGV4PjAmJighaS5tdWx0aWxpbmV8fGkubXVsdGlsaW5lJiZcIlxcblwiIT09dFtpLmxhc3RJbmRleC0xXSkmJihzPVwiKD86IFwiK3MrXCIpXCIsZj1cIiBcIitmLGMrKykscj1uZXcgUmVnRXhwKFwiXig/OlwiK3MrXCIpXCIsdSkpLFNpJiYocj1uZXcgUmVnRXhwKFwiXlwiK3MrXCIkKD8hXFxcXHMpXCIsdSkpLGJpJiYoZT1pLmxhc3RJbmRleCksbj1naS5jYWxsKGE/cjppLGYpLGE/bj8obi5pbnB1dD1uLmlucHV0LnNsaWNlKGMpLG5bMF09blswXS5zbGljZShjKSxuLmluZGV4PWkubGFzdEluZGV4LGkubGFzdEluZGV4Kz1uWzBdLmxlbmd0aCk6aS5sYXN0SW5kZXg9MDpiaSYmbiYmKGkubGFzdEluZGV4PWkuZ2xvYmFsP24uaW5kZXgrblswXS5sZW5ndGg6ZSksU2kmJm4mJm4ubGVuZ3RoPjEmJnlpLmNhbGwoblswXSxyLGZ1bmN0aW9uKCl7Zm9yKG89MTtvPGFyZ3VtZW50cy5sZW5ndGgtMjtvKyspdm9pZCAwPT09YXJndW1lbnRzW29dJiYobltvXT12b2lkIDApfSksbn0pO3ZhciBFaT1taTtrdCh7dGFyZ2V0OlwiUmVnRXhwXCIscHJvdG86ITAsZm9yY2VkOi8uLy5leGVjIT09RWl9LHtleGVjOkVpfSksaSYmKFwiZ1wiIT0vLi9nLmZsYWdzfHxRby5VTlNVUFBPUlRFRF9ZKSYmUC5mKFJlZ0V4cC5wcm90b3R5cGUsXCJmbGFnc1wiLHtjb25maWd1cmFibGU6ITAsZ2V0OllvfSk7dmFyIHhpPXR0LmdldCxBaT1SZWdFeHAucHJvdG90eXBlO2kmJlFvLlVOU1VQUE9SVEVEX1kmJigwLFAuZikoUmVnRXhwLnByb3RvdHlwZSxcInN0aWNreVwiLHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7aWYodGhpcyE9PUFpKXtpZih0aGlzIGluc3RhbmNlb2YgUmVnRXhwKXJldHVybiEheGkodGhpcykuc3RpY2t5O3Rocm93IFR5cGVFcnJvcihcIkluY29tcGF0aWJsZSByZWNlaXZlciwgUmVnRXhwIHJlcXVpcmVkXCIpfX19KTt2YXIgT2ksUmksamk9KE9pPSExLChSaT0vW2FjXS8pLmV4ZWM9ZnVuY3Rpb24oKXtyZXR1cm4gT2k9ITAsLy4vLmV4ZWMuYXBwbHkodGhpcyxhcmd1bWVudHMpfSwhMD09PVJpLnRlc3QoXCJhYmNcIikmJk9pKSxQaT0vLi8udGVzdDtrdCh7dGFyZ2V0OlwiUmVnRXhwXCIscHJvdG86ITAsZm9yY2VkOiFqaX0se3Rlc3Q6ZnVuY3Rpb24odCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdGhpcy5leGVjKXJldHVybiBQaS5jYWxsKHRoaXMsdCk7dmFyIGU9dGhpcy5leGVjKHQpO2lmKG51bGwhPT1lJiYhZyhlKSl0aHJvdyBuZXcgRXJyb3IoXCJSZWdFeHAgZXhlYyBtZXRob2QgcmV0dXJuZWQgc29tZXRoaW5nIG90aGVyIHRoYW4gYW4gT2JqZWN0IG9yIG51bGxcIik7cmV0dXJuISFlfX0pO3ZhciBJaT1EdChcInNwZWNpZXNcIiksVGk9IW8oZnVuY3Rpb24oKXt2YXIgdD0vLi87cmV0dXJuIHQuZXhlYz1mdW5jdGlvbigpe3ZhciB0PVtdO3JldHVybiB0Lmdyb3Vwcz17YTpcIjdcIn0sdH0sXCI3XCIhPT1cIlwiLnJlcGxhY2UodCxcIiQ8YT5cIil9KSxraT1cIiQwXCI9PT1cImFcIi5yZXBsYWNlKC8uLyxcIiQwXCIpLExpPUR0KFwicmVwbGFjZVwiKSxVaT0hIS8uL1tMaV0mJlwiXCI9PT0vLi9bTGldKFwiYVwiLFwiJDBcIiksTWk9IW8oZnVuY3Rpb24oKXt2YXIgdD0vKD86KS8sZT10LmV4ZWM7dC5leGVjPWZ1bmN0aW9uKCl7cmV0dXJuIGUuYXBwbHkodGhpcyxhcmd1bWVudHMpfTt2YXIgcj1cImFiXCIuc3BsaXQodCk7cmV0dXJuIDIhPT1yLmxlbmd0aHx8XCJhXCIhPT1yWzBdfHxcImJcIiE9PXJbMV19KSxfaT1mdW5jdGlvbih0LGUscixuKXt2YXIgaT1EdCh0KSxhPSFvKGZ1bmN0aW9uKCl7dmFyIGU9e307cmV0dXJuIGVbaV09ZnVuY3Rpb24oKXtyZXR1cm4gN30sNyE9XCJcIlt0XShlKX0pLHU9YSYmIW8oZnVuY3Rpb24oKXt2YXIgZT0hMSxyPS9hLztyZXR1cm5cInNwbGl0XCI9PT10JiYoKHI9e30pLmNvbnN0cnVjdG9yPXt9LHIuY29uc3RydWN0b3JbSWldPWZ1bmN0aW9uKCl7cmV0dXJuIHJ9LHIuZmxhZ3M9XCJcIixyW2ldPS8uL1tpXSksci5leGVjPWZ1bmN0aW9uKCl7cmV0dXJuIGU9ITAsbnVsbH0scltpXShcIlwiKSwhZX0pO2lmKCFhfHwhdXx8XCJyZXBsYWNlXCI9PT10JiYoIVRpfHwha2l8fFVpKXx8XCJzcGxpdFwiPT09dCYmIU1pKXt2YXIgcz0vLi9baV0sYz1yKGksXCJcIlt0XSxmdW5jdGlvbih0LGUscixuLG8pe3JldHVybiBlLmV4ZWM9PT1FaT9hJiYhbz97ZG9uZTohMCx2YWx1ZTpzLmNhbGwoZSxyLG4pfTp7ZG9uZTohMCx2YWx1ZTp0LmNhbGwocixlLG4pfTp7ZG9uZTohMX19LHtSRVBMQUNFX0tFRVBTXyQwOmtpLFJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFOlVpfSksZj1jWzFdO2V0KFN0cmluZy5wcm90b3R5cGUsdCxjWzBdKSxldChSZWdFeHAucHJvdG90eXBlLGksMj09ZT9mdW5jdGlvbih0LGUpe3JldHVybiBmLmNhbGwodCx0aGlzLGUpfTpmdW5jdGlvbih0KXtyZXR1cm4gZi5jYWxsKHQsdGhpcyl9KX1uJiZJKFJlZ0V4cC5wcm90b3R5cGVbaV0sXCJzaGFtXCIsITApfSxOaT1PZS5jaGFyQXQsQ2k9ZnVuY3Rpb24odCxlLHIpe3JldHVybiBlKyhyP05pKHQsZSkubGVuZ3RoOjEpfSxGaT1mdW5jdGlvbih0LGUpe3ZhciByPXQuZXhlYztpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiByKXt2YXIgbj1yLmNhbGwodCxlKTtpZihcIm9iamVjdFwiIT10eXBlb2Ygbil0aHJvdyBUeXBlRXJyb3IoXCJSZWdFeHAgZXhlYyBtZXRob2QgcmV0dXJuZWQgc29tZXRoaW5nIG90aGVyIHRoYW4gYW4gT2JqZWN0IG9yIG51bGxcIik7cmV0dXJuIG59aWYoXCJSZWdFeHBcIiE9PWwodCkpdGhyb3cgVHlwZUVycm9yKFwiUmVnRXhwI2V4ZWMgY2FsbGVkIG9uIGluY29tcGF0aWJsZSByZWNlaXZlclwiKTtyZXR1cm4gRWkuY2FsbCh0LGUpfTtfaShcIm1hdGNoXCIsMSxmdW5jdGlvbih0LGUscil7cmV0dXJuW2Z1bmN0aW9uKGUpe3ZhciByPWQodGhpcyksbj1udWxsPT1lP3ZvaWQgMDplW3RdO3JldHVybiB2b2lkIDAhPT1uP24uY2FsbChlLHIpOm5ldyBSZWdFeHAoZSlbdF0oU3RyaW5nKHIpKX0sZnVuY3Rpb24odCl7dmFyIG49cihlLHQsdGhpcyk7aWYobi5kb25lKXJldHVybiBuLnZhbHVlO3ZhciBvPVIodCksaT1TdHJpbmcodGhpcyk7aWYoIW8uZ2xvYmFsKXJldHVybiBGaShvLGkpO3ZhciBhPW8udW5pY29kZTtvLmxhc3RJbmRleD0wO2Zvcih2YXIgdSxzPVtdLGM9MDtudWxsIT09KHU9RmkobyxpKSk7KXt2YXIgZj1TdHJpbmcodVswXSk7c1tjXT1mLFwiXCI9PT1mJiYoby5sYXN0SW5kZXg9Q2koaSxjdChvLmxhc3RJbmRleCksYSkpLGMrK31yZXR1cm4gMD09PWM/bnVsbDpzfV19KTt2YXIgQmk9TWF0aC5tYXgsRGk9TWF0aC5taW4scWk9TWF0aC5mbG9vcix6aT0vXFwkKFskJidgXXxcXGRcXGQ/fDxbXj5dKj4pL2csV2k9L1xcJChbJCYnYF18XFxkXFxkPykvZztfaShcInJlcGxhY2VcIiwyLGZ1bmN0aW9uKHQsZSxyLG4pe3ZhciBvPW4uUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkUsaT1uLlJFUExBQ0VfS0VFUFNfJDAsYT1vP1wiJFwiOlwiJDBcIjtyZXR1cm5bZnVuY3Rpb24ocixuKXt2YXIgbz1kKHRoaXMpLGk9bnVsbD09cj92b2lkIDA6clt0XTtyZXR1cm4gdm9pZCAwIT09aT9pLmNhbGwocixvLG4pOmUuY2FsbChTdHJpbmcobykscixuKX0sZnVuY3Rpb24odCxuKXtpZighbyYmaXx8XCJzdHJpbmdcIj09dHlwZW9mIG4mJi0xPT09bi5pbmRleE9mKGEpKXt2YXIgcz1yKGUsdCx0aGlzLG4pO2lmKHMuZG9uZSlyZXR1cm4gcy52YWx1ZX12YXIgYz1SKHQpLGY9U3RyaW5nKHRoaXMpLGw9XCJmdW5jdGlvblwiPT10eXBlb2YgbjtsfHwobj1TdHJpbmcobikpO3ZhciBoPWMuZ2xvYmFsO2lmKGgpe3ZhciBwPWMudW5pY29kZTtjLmxhc3RJbmRleD0wfWZvcih2YXIgZD1bXTs7KXt2YXIgdj1GaShjLGYpO2lmKG51bGw9PT12KWJyZWFrO2lmKGQucHVzaCh2KSwhaClicmVhaztcIlwiPT09U3RyaW5nKHZbMF0pJiYoYy5sYXN0SW5kZXg9Q2koZixjdChjLmxhc3RJbmRleCkscCkpfWZvcih2YXIgZyx5PVwiXCIsbT0wLGI9MDtiPGQubGVuZ3RoO2IrKyl7dj1kW2JdO2Zvcih2YXIgdz1TdHJpbmcodlswXSksUz1CaShEaSh1dCh2LmluZGV4KSxmLmxlbmd0aCksMCksRT1bXSx4PTE7eDx2Lmxlbmd0aDt4KyspRS5wdXNoKHZvaWQgMD09PShnPXZbeF0pP2c6U3RyaW5nKGcpKTt2YXIgQT12Lmdyb3VwcztpZihsKXt2YXIgTz1bd10uY29uY2F0KEUsUyxmKTt2b2lkIDAhPT1BJiZPLnB1c2goQSk7dmFyIGo9U3RyaW5nKG4uYXBwbHkodm9pZCAwLE8pKX1lbHNlIGo9dSh3LGYsUyxFLEEsbik7Uz49bSYmKHkrPWYuc2xpY2UobSxTKStqLG09Uyt3Lmxlbmd0aCl9cmV0dXJuIHkrZi5zbGljZShtKX1dO2Z1bmN0aW9uIHUodCxyLG4sbyxpLGEpe3ZhciB1PW4rdC5sZW5ndGgscz1vLmxlbmd0aCxjPVdpO3JldHVybiB2b2lkIDAhPT1pJiYoaT1MdChpKSxjPXppKSxlLmNhbGwoYSxjLGZ1bmN0aW9uKGUsYSl7dmFyIGM7c3dpdGNoKGEuY2hhckF0KDApKXtjYXNlXCIkXCI6cmV0dXJuXCIkXCI7Y2FzZVwiJlwiOnJldHVybiB0O2Nhc2VcImBcIjpyZXR1cm4gci5zbGljZSgwLG4pO2Nhc2VcIidcIjpyZXR1cm4gci5zbGljZSh1KTtjYXNlXCI8XCI6Yz1pW2Euc2xpY2UoMSwtMSldO2JyZWFrO2RlZmF1bHQ6dmFyIGY9K2E7aWYoMD09PWYpcmV0dXJuIGU7aWYoZj5zKXt2YXIgbD1xaShmLzEwKTtyZXR1cm4gMD09PWw/ZTpsPD1zP3ZvaWQgMD09PW9bbC0xXT9hLmNoYXJBdCgxKTpvW2wtMV0rYS5jaGFyQXQoMSk6ZX1jPW9bZi0xXX1yZXR1cm4gdm9pZCAwPT09Yz9cIlwiOmN9KX19KSxfaShcInNlYXJjaFwiLDEsZnVuY3Rpb24odCxlLHIpe3JldHVybltmdW5jdGlvbihlKXt2YXIgcj1kKHRoaXMpLG49bnVsbD09ZT92b2lkIDA6ZVt0XTtyZXR1cm4gdm9pZCAwIT09bj9uLmNhbGwoZSxyKTpuZXcgUmVnRXhwKGUpW3RdKFN0cmluZyhyKSl9LGZ1bmN0aW9uKHQpe3ZhciBuPXIoZSx0LHRoaXMpO2lmKG4uZG9uZSlyZXR1cm4gbi52YWx1ZTt2YXIgbz1SKHQpLGk9U3RyaW5nKHRoaXMpLGE9by5sYXN0SW5kZXg7R24oYSwwKXx8KG8ubGFzdEluZGV4PTApO3ZhciB1PUZpKG8saSk7cmV0dXJuIEduKG8ubGFzdEluZGV4LGEpfHwoby5sYXN0SW5kZXg9YSksbnVsbD09PXU/LTE6dS5pbmRleH1dfSk7dmFyIEtpPVtdLnB1c2gsR2k9TWF0aC5taW4sJGk9NDI5NDk2NzI5NSxWaT0hbyhmdW5jdGlvbigpe3JldHVybiFSZWdFeHAoJGksXCJ5XCIpfSk7X2koXCJzcGxpdFwiLDIsZnVuY3Rpb24odCxlLHIpe3ZhciBuO3JldHVybiBuPVwiY1wiPT1cImFiYmNcIi5zcGxpdCgvKGIpKi8pWzFdfHw0IT1cInRlc3RcIi5zcGxpdCgvKD86KS8sLTEpLmxlbmd0aHx8MiE9XCJhYlwiLnNwbGl0KC8oPzphYikqLykubGVuZ3RofHw0IT1cIi5cIi5zcGxpdCgvKC4/KSguPykvKS5sZW5ndGh8fFwiLlwiLnNwbGl0KC8oKSgpLykubGVuZ3RoPjF8fFwiXCIuc3BsaXQoLy4/LykubGVuZ3RoP2Z1bmN0aW9uKHQscil7dmFyIG49U3RyaW5nKGQodGhpcykpLG89dm9pZCAwPT09cj8kaTpyPj4+MDtpZigwPT09bylyZXR1cm5bXTtpZih2b2lkIDA9PT10KXJldHVybltuXTtpZighWG8odCkpcmV0dXJuIGUuY2FsbChuLHQsbyk7Zm9yKHZhciBpLGEsdSxzPVtdLGM9MCxmPW5ldyBSZWdFeHAodC5zb3VyY2UsKHQuaWdub3JlQ2FzZT9cImlcIjpcIlwiKSsodC5tdWx0aWxpbmU/XCJtXCI6XCJcIikrKHQudW5pY29kZT9cInVcIjpcIlwiKSsodC5zdGlja3k/XCJ5XCI6XCJcIikrXCJnXCIpOyhpPUVpLmNhbGwoZixuKSkmJiEoKGE9Zi5sYXN0SW5kZXgpPmMmJihzLnB1c2gobi5zbGljZShjLGkuaW5kZXgpKSxpLmxlbmd0aD4xJiZpLmluZGV4PG4ubGVuZ3RoJiZLaS5hcHBseShzLGkuc2xpY2UoMSkpLHU9aVswXS5sZW5ndGgsYz1hLHMubGVuZ3RoPj1vKSk7KWYubGFzdEluZGV4PT09aS5pbmRleCYmZi5sYXN0SW5kZXgrKztyZXR1cm4gYz09PW4ubGVuZ3RoPyF1JiZmLnRlc3QoXCJcIil8fHMucHVzaChcIlwiKTpzLnB1c2gobi5zbGljZShjKSkscy5sZW5ndGg+bz9zLnNsaWNlKDAsbyk6c306XCIwXCIuc3BsaXQodm9pZCAwLDApLmxlbmd0aD9mdW5jdGlvbih0LHIpe3JldHVybiB2b2lkIDA9PT10JiYwPT09cj9bXTplLmNhbGwodGhpcyx0LHIpfTplLFtmdW5jdGlvbihlLHIpe3ZhciBvPWQodGhpcyksaT1udWxsPT1lP3ZvaWQgMDplW3RdO3JldHVybiB2b2lkIDAhPT1pP2kuY2FsbChlLG8scik6bi5jYWxsKFN0cmluZyhvKSxlLHIpfSxmdW5jdGlvbih0LG8pe3ZhciBpPXIobix0LHRoaXMsbyxuIT09ZSk7aWYoaS5kb25lKXJldHVybiBpLnZhbHVlO3ZhciBhPVIodCksdT1TdHJpbmcodGhpcykscz1zbihhLFJlZ0V4cCksYz1hLnVuaWNvZGUsZj1uZXcgcyhWaT9hOlwiXig/OlwiK2Euc291cmNlK1wiKVwiLChhLmlnbm9yZUNhc2U/XCJpXCI6XCJcIikrKGEubXVsdGlsaW5lP1wibVwiOlwiXCIpKyhhLnVuaWNvZGU/XCJ1XCI6XCJcIikrKFZpP1wieVwiOlwiZ1wiKSksbD12b2lkIDA9PT1vPyRpOm8+Pj4wO2lmKDA9PT1sKXJldHVybltdO2lmKDA9PT11Lmxlbmd0aClyZXR1cm4gbnVsbD09PUZpKGYsdSk/W3VdOltdO2Zvcih2YXIgaD0wLHA9MCxkPVtdO3A8dS5sZW5ndGg7KXtmLmxhc3RJbmRleD1WaT9wOjA7dmFyIHYsZz1GaShmLFZpP3U6dS5zbGljZShwKSk7aWYobnVsbD09PWd8fCh2PUdpKGN0KGYubGFzdEluZGV4KyhWaT8wOnApKSx1Lmxlbmd0aCkpPT09aClwPUNpKHUscCxjKTtlbHNle2lmKGQucHVzaCh1LnNsaWNlKGgscCkpLGQubGVuZ3RoPT09bClyZXR1cm4gZDtmb3IodmFyIHk9MTt5PD1nLmxlbmd0aC0xO3krKylpZihkLnB1c2goZ1t5XSksZC5sZW5ndGg9PT1sKXJldHVybiBkO3A9aD12fX1yZXR1cm4gZC5wdXNoKHUuc2xpY2UoaCkpLGR9XX0sIVZpKSxrdCh7dGFyZ2V0OlwiU2V0XCIsc3RhdDohMH0se2Zyb206ZW59KSxrdCh7dGFyZ2V0OlwiU2V0XCIsc3RhdDohMH0se29mOnJufSk7dmFyIEhpPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PVIodGhpcyksZT1RdCh0LmFkZCkscj0wLG49YXJndW1lbnRzLmxlbmd0aDtyPG47cisrKWUuY2FsbCh0LGFyZ3VtZW50c1tyXSk7cmV0dXJuIHR9O2t0KHt0YXJnZXQ6XCJTZXRcIixwcm90bzohMCxyZWFsOiEwLGZvcmNlZDpEfSx7YWRkQWxsOmZ1bmN0aW9uKCl7cmV0dXJuIEhpLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19KSxrdCh7dGFyZ2V0OlwiU2V0XCIscHJvdG86ITAscmVhbDohMCxmb3JjZWQ6RH0se2RlbGV0ZUFsbDpmdW5jdGlvbigpe3JldHVybiBubi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fSk7dmFyIFhpPWZ1bmN0aW9uKHQpe3JldHVybiBTZXQucHJvdG90eXBlLnZhbHVlcy5jYWxsKHQpfTtrdCh7dGFyZ2V0OlwiU2V0XCIscHJvdG86ITAscmVhbDohMCxmb3JjZWQ6RH0se2V2ZXJ5OmZ1bmN0aW9uKHQpe3ZhciBlPVIodGhpcykscj1YaShlKSxuPVp0KHQsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDAsMyk7cmV0dXJuIU1yKHIsZnVuY3Rpb24odCl7aWYoIW4odCx0LGUpKXJldHVybiBNci5zdG9wKCl9LHZvaWQgMCwhMSwhMCkuc3RvcHBlZH19KSxrdCh7dGFyZ2V0OlwiU2V0XCIscHJvdG86ITAscmVhbDohMCxmb3JjZWQ6RH0se2RpZmZlcmVuY2U6ZnVuY3Rpb24odCl7dmFyIGU9Uih0aGlzKSxyPW5ldyhzbihlLG90KFwiU2V0XCIpKSkoZSksbj1RdChyLmRlbGV0ZSk7cmV0dXJuIE1yKHQsZnVuY3Rpb24odCl7bi5jYWxsKHIsdCl9KSxyfX0pLGt0KHt0YXJnZXQ6XCJTZXRcIixwcm90bzohMCxyZWFsOiEwLGZvcmNlZDpEfSx7ZmlsdGVyOmZ1bmN0aW9uKHQpe3ZhciBlPVIodGhpcykscj1YaShlKSxuPVp0KHQsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDAsMyksbz1uZXcoc24oZSxvdChcIlNldFwiKSkpLGk9UXQoby5hZGQpO3JldHVybiBNcihyLGZ1bmN0aW9uKHQpe24odCx0LGUpJiZpLmNhbGwobyx0KX0sdm9pZCAwLCExLCEwKSxvfX0pLGt0KHt0YXJnZXQ6XCJTZXRcIixwcm90bzohMCxyZWFsOiEwLGZvcmNlZDpEfSx7ZmluZDpmdW5jdGlvbih0KXt2YXIgZT1SKHRoaXMpLHI9WGkoZSksbj1adCh0LGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwLDMpO3JldHVybiBNcihyLGZ1bmN0aW9uKHQpe2lmKG4odCx0LGUpKXJldHVybiBNci5zdG9wKHQpfSx2b2lkIDAsITEsITApLnJlc3VsdH19KSxrdCh7dGFyZ2V0OlwiU2V0XCIscHJvdG86ITAscmVhbDohMCxmb3JjZWQ6RH0se2ludGVyc2VjdGlvbjpmdW5jdGlvbih0KXt2YXIgZT1SKHRoaXMpLHI9bmV3KHNuKGUsb3QoXCJTZXRcIikpKSxuPVF0KGUuaGFzKSxvPVF0KHIuYWRkKTtyZXR1cm4gTXIodCxmdW5jdGlvbih0KXtuLmNhbGwoZSx0KSYmby5jYWxsKHIsdCl9KSxyfX0pLGt0KHt0YXJnZXQ6XCJTZXRcIixwcm90bzohMCxyZWFsOiEwLGZvcmNlZDpEfSx7aXNEaXNqb2ludEZyb206ZnVuY3Rpb24odCl7dmFyIGU9Uih0aGlzKSxyPVF0KGUuaGFzKTtyZXR1cm4hTXIodCxmdW5jdGlvbih0KXtpZighMD09PXIuY2FsbChlLHQpKXJldHVybiBNci5zdG9wKCl9KS5zdG9wcGVkfX0pLGt0KHt0YXJnZXQ6XCJTZXRcIixwcm90bzohMCxyZWFsOiEwLGZvcmNlZDpEfSx7aXNTdWJzZXRPZjpmdW5jdGlvbih0KXt2YXIgZT1vbih0aGlzKSxyPVIodCksbj1yLmhhcztyZXR1cm5cImZ1bmN0aW9uXCIhPXR5cGVvZiBuJiYocj1uZXcob3QoXCJTZXRcIikpKHQpLG49UXQoci5oYXMpKSwhTXIoZSxmdW5jdGlvbih0KXtpZighMT09PW4uY2FsbChyLHQpKXJldHVybiBNci5zdG9wKCl9LHZvaWQgMCwhMSwhMCkuc3RvcHBlZH19KSxrdCh7dGFyZ2V0OlwiU2V0XCIscHJvdG86ITAscmVhbDohMCxmb3JjZWQ6RH0se2lzU3VwZXJzZXRPZjpmdW5jdGlvbih0KXt2YXIgZT1SKHRoaXMpLHI9UXQoZS5oYXMpO3JldHVybiFNcih0LGZ1bmN0aW9uKHQpe2lmKCExPT09ci5jYWxsKGUsdCkpcmV0dXJuIE1yLnN0b3AoKX0pLnN0b3BwZWR9fSksa3Qoe3RhcmdldDpcIlNldFwiLHByb3RvOiEwLHJlYWw6ITAsZm9yY2VkOkR9LHtqb2luOmZ1bmN0aW9uKHQpe3ZhciBlPVIodGhpcykscj1YaShlKSxuPXZvaWQgMD09PXQ/XCIsXCI6U3RyaW5nKHQpLG89W107cmV0dXJuIE1yKHIsby5wdXNoLG8sITEsITApLG8uam9pbihuKX19KSxrdCh7dGFyZ2V0OlwiU2V0XCIscHJvdG86ITAscmVhbDohMCxmb3JjZWQ6RH0se21hcDpmdW5jdGlvbih0KXt2YXIgZT1SKHRoaXMpLHI9WGkoZSksbj1adCh0LGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwLDMpLG89bmV3KHNuKGUsb3QoXCJTZXRcIikpKSxpPVF0KG8uYWRkKTtyZXR1cm4gTXIocixmdW5jdGlvbih0KXtpLmNhbGwobyxuKHQsdCxlKSl9LHZvaWQgMCwhMSwhMCksb319KSxrdCh7dGFyZ2V0OlwiU2V0XCIscHJvdG86ITAscmVhbDohMCxmb3JjZWQ6RH0se3JlZHVjZTpmdW5jdGlvbih0KXt2YXIgZT1SKHRoaXMpLHI9WGkoZSksbj1hcmd1bWVudHMubGVuZ3RoPDIsbz1uP3ZvaWQgMDphcmd1bWVudHNbMV07aWYoUXQodCksTXIocixmdW5jdGlvbihyKXtuPyhuPSExLG89cik6bz10KG8scixyLGUpfSx2b2lkIDAsITEsITApLG4pdGhyb3cgVHlwZUVycm9yKFwiUmVkdWNlIG9mIGVtcHR5IHNldCB3aXRoIG5vIGluaXRpYWwgdmFsdWVcIik7cmV0dXJuIG99fSksa3Qoe3RhcmdldDpcIlNldFwiLHByb3RvOiEwLHJlYWw6ITAsZm9yY2VkOkR9LHtzb21lOmZ1bmN0aW9uKHQpe3ZhciBlPVIodGhpcykscj1YaShlKSxuPVp0KHQsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDAsMyk7cmV0dXJuIE1yKHIsZnVuY3Rpb24odCl7aWYobih0LHQsZSkpcmV0dXJuIE1yLnN0b3AoKX0sdm9pZCAwLCExLCEwKS5zdG9wcGVkfX0pLGt0KHt0YXJnZXQ6XCJTZXRcIixwcm90bzohMCxyZWFsOiEwLGZvcmNlZDpEfSx7c3ltbWV0cmljRGlmZmVyZW5jZTpmdW5jdGlvbih0KXt2YXIgZT1SKHRoaXMpLHI9bmV3KHNuKGUsb3QoXCJTZXRcIikpKShlKSxuPVF0KHIuZGVsZXRlKSxvPVF0KHIuYWRkKTtyZXR1cm4gTXIodCxmdW5jdGlvbih0KXtuLmNhbGwocix0KXx8by5jYWxsKHIsdCl9KSxyfX0pLGt0KHt0YXJnZXQ6XCJTZXRcIixwcm90bzohMCxyZWFsOiEwLGZvcmNlZDpEfSx7dW5pb246ZnVuY3Rpb24odCl7dmFyIGU9Uih0aGlzKSxyPW5ldyhzbihlLG90KFwiU2V0XCIpKSkoZSk7cmV0dXJuIE1yKHQsUXQoci5hZGQpLHIpLHJ9fSk7dmFyIFlpLEppLFFpPW90KFwibmF2aWdhdG9yXCIsXCJ1c2VyQWdlbnRcIil8fFwiXCIsWmk9bi5wcm9jZXNzLHRhPVppJiZaaS52ZXJzaW9ucyxlYT10YSYmdGEudjg7ZWE/Smk9KFlpPWVhLnNwbGl0KFwiLlwiKSlbMF0rWWlbMV06UWkmJighKFlpPVFpLm1hdGNoKC9FZGdlXFwvKFxcZCspLykpfHxZaVsxXT49NzQpJiYoWWk9UWkubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pKSYmKEppPVlpWzFdKTt2YXIgcmE9SmkmJitKaSxuYT1EdChcInNwZWNpZXNcIiksb2E9RHQoXCJpc0NvbmNhdFNwcmVhZGFibGVcIiksaWE9OTAwNzE5OTI1NDc0MDk5MSxhYT1cIk1heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZFwiLHVhPXJhPj01MXx8IW8oZnVuY3Rpb24oKXt2YXIgdD1bXTtyZXR1cm4gdFtvYV09ITEsdC5jb25jYXQoKVswXSE9PXR9KSxzYT1yYT49NTF8fCFvKGZ1bmN0aW9uKCl7dmFyIHQ9W107cmV0dXJuKHQuY29uc3RydWN0b3I9e30pW25hXT1mdW5jdGlvbigpe3JldHVybntmb286MX19LDEhPT10LmNvbmNhdChCb29sZWFuKS5mb299KSxjYT1mdW5jdGlvbih0KXtpZighZyh0KSlyZXR1cm4hMTt2YXIgZT10W29hXTtyZXR1cm4gdm9pZCAwIT09ZT8hIWU6cmUodCl9O2t0KHt0YXJnZXQ6XCJBcnJheVwiLHByb3RvOiEwLGZvcmNlZDohdWF8fCFzYX0se2NvbmNhdDpmdW5jdGlvbih0KXt2YXIgZSxyLG4sbyxpLGE9THQodGhpcyksdT1vZShhLDApLHM9MDtmb3IoZT0tMSxuPWFyZ3VtZW50cy5sZW5ndGg7ZTxuO2UrKylpZihjYShpPS0xPT09ZT9hOmFyZ3VtZW50c1tlXSkpe2lmKHMrKG89Y3QoaS5sZW5ndGgpKT5pYSl0aHJvdyBUeXBlRXJyb3IoYWEpO2ZvcihyPTA7cjxvO3IrKyxzKyspciBpbiBpJiZvcih1LHMsaVtyXSl9ZWxzZXtpZihzPj1pYSl0aHJvdyBUeXBlRXJyb3IoYWEpO29yKHUscysrLGkpfXJldHVybiB1Lmxlbmd0aD1zLHV9fSk7dmFyIGZhPWJ0LmYsbGE9e30udG9TdHJpbmcsaGE9XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmd2luZG93JiZPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcz9PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpOltdLHBhPXtmOmZ1bmN0aW9uKHQpe3JldHVybiBoYSYmXCJbb2JqZWN0IFdpbmRvd11cIj09bGEuY2FsbCh0KT9mdW5jdGlvbih0KXt0cnl7cmV0dXJuIGZhKHQpfWNhdGNoKHQpe3JldHVybiBoYS5zbGljZSgpfX0odCk6ZmEodih0KSl9fSxkYT17ZjpEdH0sdmE9UC5mLGdhPWZ1bmN0aW9uKHQpe3ZhciBlPXJ0LlN5bWJvbHx8KHJ0LlN5bWJvbD17fSk7YihlLHQpfHx2YShlLHQse3ZhbHVlOmRhLmYodCl9KX0seWE9dWUuZm9yRWFjaCxtYT0kKFwiaGlkZGVuXCIpLGJhPVwiU3ltYm9sXCIsd2E9RHQoXCJ0b1ByaW1pdGl2ZVwiKSxTYT10dC5zZXQsRWE9dHQuZ2V0dGVyRm9yKGJhKSx4YT1PYmplY3QucHJvdG90eXBlLEFhPW4uU3ltYm9sLE9hPW90KFwiSlNPTlwiLFwic3RyaW5naWZ5XCIpLFJhPU8uZixqYT1QLmYsUGE9cGEuZixJYT1zLmYsVGE9cShcInN5bWJvbHNcIiksa2E9cShcIm9wLXN5bWJvbHNcIiksTGE9cShcInN0cmluZy10by1zeW1ib2wtcmVnaXN0cnlcIiksVWE9cShcInN5bWJvbC10by1zdHJpbmctcmVnaXN0cnlcIiksTWE9cShcIndrc1wiKSxfYT1uLlFPYmplY3QsTmE9IV9hfHwhX2EucHJvdG90eXBlfHwhX2EucHJvdG90eXBlLmZpbmRDaGlsZCxDYT1pJiZvKGZ1bmN0aW9uKCl7cmV0dXJuIDchPUh0KGphKHt9LFwiYVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gamEodGhpcyxcImFcIix7dmFsdWU6N30pLmF9fSkpLmF9KT9mdW5jdGlvbih0LGUscil7dmFyIG49UmEoeGEsZSk7biYmZGVsZXRlIHhhW2VdLGphKHQsZSxyKSxuJiZ0IT09eGEmJmphKHhhLGUsbil9OmphLEZhPWZ1bmN0aW9uKHQsZSl7dmFyIHI9VGFbdF09SHQoQWEucHJvdG90eXBlKTtyZXR1cm4gU2Eocix7dHlwZTpiYSx0YWc6dCxkZXNjcmlwdGlvbjplfSksaXx8KHIuZGVzY3JpcHRpb249ZSkscn0sQmE9TnQ/ZnVuY3Rpb24odCl7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QodClpbnN0YW5jZW9mIEFhfSxEYT1mdW5jdGlvbih0LGUscil7dD09PXhhJiZEYShrYSxlLHIpLFIodCk7dmFyIG49eShlLCEwKTtyZXR1cm4gUihyKSxiKFRhLG4pPyhyLmVudW1lcmFibGU/KGIodCxtYSkmJnRbbWFdW25dJiYodFttYV1bbl09ITEpLHI9SHQocix7ZW51bWVyYWJsZTpjKDAsITEpfSkpOihiKHQsbWEpfHxqYSh0LG1hLGMoMSx7fSkpLHRbbWFdW25dPSEwKSxDYSh0LG4scikpOmphKHQsbixyKX0scWE9ZnVuY3Rpb24odCxlKXtSKHQpO3ZhciByPXYoZSksbj1xdChyKS5jb25jYXQoR2EocikpO3JldHVybiB5YShuLGZ1bmN0aW9uKGUpe2kmJiF6YS5jYWxsKHIsZSl8fERhKHQsZSxyW2VdKX0pLHR9LHphPWZ1bmN0aW9uKHQpe3ZhciBlPXkodCwhMCkscj1JYS5jYWxsKHRoaXMsZSk7cmV0dXJuISh0aGlzPT09eGEmJmIoVGEsZSkmJiFiKGthLGUpKSYmKCEocnx8IWIodGhpcyxlKXx8IWIoVGEsZSl8fGIodGhpcyxtYSkmJnRoaXNbbWFdW2VdKXx8cil9LFdhPWZ1bmN0aW9uKHQsZSl7dmFyIHI9dih0KSxuPXkoZSwhMCk7aWYociE9PXhhfHwhYihUYSxuKXx8YihrYSxuKSl7dmFyIG89UmEocixuKTtyZXR1cm4hb3x8IWIoVGEsbil8fGIocixtYSkmJnJbbWFdW25dfHwoby5lbnVtZXJhYmxlPSEwKSxvfX0sS2E9ZnVuY3Rpb24odCl7dmFyIGU9UGEodih0KSkscj1bXTtyZXR1cm4geWEoZSxmdW5jdGlvbih0KXtiKFRhLHQpfHxiKFYsdCl8fHIucHVzaCh0KX0pLHJ9LEdhPWZ1bmN0aW9uKHQpe3ZhciBlPXQ9PT14YSxyPVBhKGU/a2E6dih0KSksbj1bXTtyZXR1cm4geWEocixmdW5jdGlvbih0KXshYihUYSx0KXx8ZSYmIWIoeGEsdCl8fG4ucHVzaChUYVt0XSl9KSxufTtpZihfdHx8KGV0KChBYT1mdW5jdGlvbigpe2lmKHRoaXMgaW5zdGFuY2VvZiBBYSl0aHJvdyBUeXBlRXJyb3IoXCJTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3JcIik7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP1N0cmluZyhhcmd1bWVudHNbMF0pOnZvaWQgMCxlPUsodCkscj1mdW5jdGlvbiB0KHIpe3RoaXM9PT14YSYmdC5jYWxsKGthLHIpLGIodGhpcyxtYSkmJmIodGhpc1ttYV0sZSkmJih0aGlzW21hXVtlXT0hMSksQ2EodGhpcyxlLGMoMSxyKSl9O3JldHVybiBpJiZOYSYmQ2EoeGEsZSx7Y29uZmlndXJhYmxlOiEwLHNldDpyfSksRmEoZSx0KX0pLnByb3RvdHlwZSxcInRvU3RyaW5nXCIsZnVuY3Rpb24oKXtyZXR1cm4gRWEodGhpcykudGFnfSksZXQoQWEsXCJ3aXRob3V0U2V0dGVyXCIsZnVuY3Rpb24odCl7cmV0dXJuIEZhKEsodCksdCl9KSxzLmY9emEsUC5mPURhLE8uZj1XYSxidC5mPXBhLmY9S2Esd3QuZj1HYSxkYS5mPWZ1bmN0aW9uKHQpe3JldHVybiBGYShEdCh0KSx0KX0saSYmKGphKEFhLnByb3RvdHlwZSxcImRlc2NyaXB0aW9uXCIse2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gRWEodGhpcykuZGVzY3JpcHRpb259fSksZXQoeGEsXCJwcm9wZXJ0eUlzRW51bWVyYWJsZVwiLHphLHt1bnNhZmU6ITB9KSkpLGt0KHtnbG9iYWw6ITAsd3JhcDohMCxmb3JjZWQ6IV90LHNoYW06IV90fSx7U3ltYm9sOkFhfSkseWEocXQoTWEpLGZ1bmN0aW9uKHQpe2dhKHQpfSksa3Qoe3RhcmdldDpiYSxzdGF0OiEwLGZvcmNlZDohX3R9LHtmb3I6ZnVuY3Rpb24odCl7dmFyIGU9U3RyaW5nKHQpO2lmKGIoTGEsZSkpcmV0dXJuIExhW2VdO3ZhciByPUFhKGUpO3JldHVybiBMYVtlXT1yLFVhW3JdPWUscn0sa2V5Rm9yOmZ1bmN0aW9uKHQpe2lmKCFCYSh0KSl0aHJvdyBUeXBlRXJyb3IodCtcIiBpcyBub3QgYSBzeW1ib2xcIik7aWYoYihVYSx0KSlyZXR1cm4gVWFbdF19LHVzZVNldHRlcjpmdW5jdGlvbigpe05hPSEwfSx1c2VTaW1wbGU6ZnVuY3Rpb24oKXtOYT0hMX19KSxrdCh7dGFyZ2V0OlwiT2JqZWN0XCIsc3RhdDohMCxmb3JjZWQ6IV90LHNoYW06IWl9LHtjcmVhdGU6ZnVuY3Rpb24odCxlKXtyZXR1cm4gdm9pZCAwPT09ZT9IdCh0KTpxYShIdCh0KSxlKX0sZGVmaW5lUHJvcGVydHk6RGEsZGVmaW5lUHJvcGVydGllczpxYSxnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6V2F9KSxrdCh7dGFyZ2V0OlwiT2JqZWN0XCIsc3RhdDohMCxmb3JjZWQ6IV90fSx7Z2V0T3duUHJvcGVydHlOYW1lczpLYSxnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6R2F9KSxrdCh7dGFyZ2V0OlwiT2JqZWN0XCIsc3RhdDohMCxmb3JjZWQ6byhmdW5jdGlvbigpe3d0LmYoMSl9KX0se2dldE93blByb3BlcnR5U3ltYm9sczpmdW5jdGlvbih0KXtyZXR1cm4gd3QuZihMdCh0KSl9fSksT2Epe3ZhciAkYT0hX3R8fG8oZnVuY3Rpb24oKXt2YXIgdD1BYSgpO3JldHVyblwiW251bGxdXCIhPU9hKFt0XSl8fFwie31cIiE9T2Eoe2E6dH0pfHxcInt9XCIhPU9hKE9iamVjdCh0KSl9KTtrdCh7dGFyZ2V0OlwiSlNPTlwiLHN0YXQ6ITAsZm9yY2VkOiRhfSx7c3RyaW5naWZ5OmZ1bmN0aW9uKHQsZSxyKXtmb3IodmFyIG4sbz1bdF0saT0xO2FyZ3VtZW50cy5sZW5ndGg+aTspby5wdXNoKGFyZ3VtZW50c1tpKytdKTtpZihuPWUsKGcoZSl8fHZvaWQgMCE9PXQpJiYhQmEodCkpcmV0dXJuIHJlKGUpfHwoZT1mdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihlPW4uY2FsbCh0aGlzLHQsZSkpLCFCYShlKSlyZXR1cm4gZX0pLG9bMV09ZSxPYS5hcHBseShudWxsLG8pfX0pfUFhLnByb3RvdHlwZVt3YV18fEkoQWEucHJvdG90eXBlLHdhLEFhLnByb3RvdHlwZS52YWx1ZU9mKSxfZShBYSxiYSksVlttYV09ITAsZ2EoXCJhc3luY0l0ZXJhdG9yXCIpO3ZhciBWYT1QLmYsSGE9bi5TeW1ib2w7aWYoaSYmXCJmdW5jdGlvblwiPT10eXBlb2YgSGEmJighKFwiZGVzY3JpcHRpb25cImluIEhhLnByb3RvdHlwZSl8fHZvaWQgMCE9PUhhKCkuZGVzY3JpcHRpb24pKXt2YXIgWGE9e30sWWE9ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPDF8fHZvaWQgMD09PWFyZ3VtZW50c1swXT92b2lkIDA6U3RyaW5nKGFyZ3VtZW50c1swXSksZT10aGlzIGluc3RhbmNlb2YgWWE/bmV3IEhhKHQpOnZvaWQgMD09PXQ/SGEoKTpIYSh0KTtyZXR1cm5cIlwiPT09dCYmKFhhW2VdPSEwKSxlfTtFdChZYSxIYSk7dmFyIEphPVlhLnByb3RvdHlwZT1IYS5wcm90b3R5cGU7SmEuY29uc3RydWN0b3I9WWE7dmFyIFFhPUphLnRvU3RyaW5nLFphPVwiU3ltYm9sKHRlc3QpXCI9PVN0cmluZyhIYShcInRlc3RcIikpLHR1PS9eU3ltYm9sXFwoKC4qKVxcKVteKV0rJC87VmEoSmEsXCJkZXNjcmlwdGlvblwiLHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7dmFyIHQ9Zyh0aGlzKT90aGlzLnZhbHVlT2YoKTp0aGlzLGU9UWEuY2FsbCh0KTtpZihiKFhhLHQpKXJldHVyblwiXCI7dmFyIHI9WmE/ZS5zbGljZSg3LC0xKTplLnJlcGxhY2UodHUsXCIkMVwiKTtyZXR1cm5cIlwiPT09cj92b2lkIDA6cn19KSxrdCh7Z2xvYmFsOiEwLGZvcmNlZDohMH0se1N5bWJvbDpZYX0pfWdhKFwiaGFzSW5zdGFuY2VcIiksZ2EoXCJpc0NvbmNhdFNwcmVhZGFibGVcIiksZ2EoXCJpdGVyYXRvclwiKSxnYShcIm1hdGNoXCIpLGdhKFwibWF0Y2hBbGxcIiksZ2EoXCJyZXBsYWNlXCIpLGdhKFwic2VhcmNoXCIpLGdhKFwic3BlY2llc1wiKSxnYShcInNwbGl0XCIpLGdhKFwidG9QcmltaXRpdmVcIiksZ2EoXCJ0b1N0cmluZ1RhZ1wiKSxnYShcInVuc2NvcGFibGVzXCIpLF9lKE1hdGgsXCJNYXRoXCIsITApLF9lKG4uSlNPTixcIkpTT05cIiwhMCksZ2EoXCJhc3luY0Rpc3Bvc2VcIiksZ2EoXCJkaXNwb3NlXCIpLGdhKFwib2JzZXJ2YWJsZVwiKSxnYShcInBhdHRlcm5NYXRjaFwiKSxnYShcInJlcGxhY2VBbGxcIiksZGEuZihcImFzeW5jSXRlcmF0b3JcIik7dmFyIGV1PU9lLmNvZGVBdDtrdCh7dGFyZ2V0OlwiU3RyaW5nXCIscHJvdG86ITB9LHtjb2RlUG9pbnRBdDpmdW5jdGlvbih0KXtyZXR1cm4gZXUodGhpcyx0KX19KSxlZShcIlN0cmluZ1wiLFwiY29kZVBvaW50QXRcIik7dmFyIHJ1LG51PWZ1bmN0aW9uKHQpe2lmKFhvKHQpKXRocm93IFR5cGVFcnJvcihcIlRoZSBtZXRob2QgZG9lc24ndCBhY2NlcHQgcmVndWxhciBleHByZXNzaW9uc1wiKTtyZXR1cm4gdH0sb3U9RHQoXCJtYXRjaFwiKSxpdT1mdW5jdGlvbih0KXt2YXIgZT0vLi87dHJ5e1wiLy4vXCJbdF0oZSl9Y2F0Y2gocil7dHJ5e3JldHVybiBlW291XT0hMSxcIi8uL1wiW3RdKGUpfWNhdGNoKHQpe319cmV0dXJuITF9LGF1PU8uZix1dT1cIlwiLmVuZHNXaXRoLHN1PU1hdGgubWluLGN1PWl1KFwiZW5kc1dpdGhcIiksZnU9IShjdXx8KHJ1PWF1KFN0cmluZy5wcm90b3R5cGUsXCJlbmRzV2l0aFwiKSwhcnV8fHJ1LndyaXRhYmxlKSk7a3Qoe3RhcmdldDpcIlN0cmluZ1wiLHByb3RvOiEwLGZvcmNlZDohZnUmJiFjdX0se2VuZHNXaXRoOmZ1bmN0aW9uKHQpe3ZhciBlPVN0cmluZyhkKHRoaXMpKTtudSh0KTt2YXIgcj1hcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCxuPWN0KGUubGVuZ3RoKSxvPXZvaWQgMD09PXI/bjpzdShjdChyKSxuKSxpPVN0cmluZyh0KTtyZXR1cm4gdXU/dXUuY2FsbChlLGksbyk6ZS5zbGljZShvLWkubGVuZ3RoLG8pPT09aX19KSxlZShcIlN0cmluZ1wiLFwiZW5kc1dpdGhcIik7dmFyIGx1PVN0cmluZy5mcm9tQ2hhckNvZGUsaHU9U3RyaW5nLmZyb21Db2RlUG9pbnQ7a3Qoe3RhcmdldDpcIlN0cmluZ1wiLHN0YXQ6ITAsZm9yY2VkOiEhaHUmJjEhPWh1Lmxlbmd0aH0se2Zyb21Db2RlUG9pbnQ6ZnVuY3Rpb24odCl7Zm9yKHZhciBlLHI9W10sbj1hcmd1bWVudHMubGVuZ3RoLG89MDtuPm87KXtpZihlPSthcmd1bWVudHNbbysrXSxodChlLDExMTQxMTEpIT09ZSl0aHJvdyBSYW5nZUVycm9yKGUrXCIgaXMgbm90IGEgdmFsaWQgY29kZSBwb2ludFwiKTtyLnB1c2goZTw2NTUzNj9sdShlKTpsdSg1NTI5NisoKGUtPTY1NTM2KT4+MTApLGUlMTAyNCs1NjMyMCkpfXJldHVybiByLmpvaW4oXCJcIil9fSksa3Qoe3RhcmdldDpcIlN0cmluZ1wiLHByb3RvOiEwLGZvcmNlZDohaXUoXCJpbmNsdWRlc1wiKX0se2luY2x1ZGVzOmZ1bmN0aW9uKHQpe3JldHVybiEhflN0cmluZyhkKHRoaXMpKS5pbmRleE9mKG51KHQpLGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwKX19KSxlZShcIlN0cmluZ1wiLFwiaW5jbHVkZXNcIik7dmFyIHB1PVwiXCIucmVwZWF0fHxmdW5jdGlvbih0KXt2YXIgZT1TdHJpbmcoZCh0aGlzKSkscj1cIlwiLG49dXQodCk7aWYobjwwfHxJbmZpbml0eT09bil0aHJvdyBSYW5nZUVycm9yKFwiV3JvbmcgbnVtYmVyIG9mIHJlcGV0aXRpb25zXCIpO2Zvcig7bj4wOyhuPj4+PTEpJiYoZSs9ZSkpMSZuJiYocis9ZSk7cmV0dXJuIHJ9LGR1PU1hdGguY2VpbCx2dT1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxyLG4pe3ZhciBvLGksYT1TdHJpbmcoZChlKSksdT1hLmxlbmd0aCxzPXZvaWQgMD09PW4/XCIgXCI6U3RyaW5nKG4pLGM9Y3Qocik7cmV0dXJuIGM8PXV8fFwiXCI9PXM/YTooKGk9cHUuY2FsbChzLGR1KChvPWMtdSkvcy5sZW5ndGgpKSkubGVuZ3RoPm8mJihpPWkuc2xpY2UoMCxvKSksdD9hK2k6aSthKX19LGd1PXtzdGFydDp2dSghMSksZW5kOnZ1KCEwKX0seXU9L1ZlcnNpb25cXC8xMFxcLlxcZCsoXFwuXFxkKyk/KCBNb2JpbGVcXC9cXHcrKT8gU2FmYXJpXFwvLy50ZXN0KFFpKSxtdT1ndS5zdGFydDtrdCh7dGFyZ2V0OlwiU3RyaW5nXCIscHJvdG86ITAsZm9yY2VkOnl1fSx7cGFkU3RhcnQ6ZnVuY3Rpb24odCl7cmV0dXJuIG11KHRoaXMsdCxhcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCl9fSksZWUoXCJTdHJpbmdcIixcInBhZFN0YXJ0XCIpO3ZhciBidT1ndS5lbmQ7a3Qoe3RhcmdldDpcIlN0cmluZ1wiLHByb3RvOiEwLGZvcmNlZDp5dX0se3BhZEVuZDpmdW5jdGlvbih0KXtyZXR1cm4gYnUodGhpcyx0LGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwKX19KSxlZShcIlN0cmluZ1wiLFwicGFkRW5kXCIpLGt0KHt0YXJnZXQ6XCJTdHJpbmdcIixzdGF0OiEwfSx7cmF3OmZ1bmN0aW9uKHQpe2Zvcih2YXIgZT12KHQucmF3KSxyPWN0KGUubGVuZ3RoKSxuPWFyZ3VtZW50cy5sZW5ndGgsbz1bXSxpPTA7cj5pOylvLnB1c2goU3RyaW5nKGVbaSsrXSkpLGk8biYmby5wdXNoKFN0cmluZyhhcmd1bWVudHNbaV0pKTtyZXR1cm4gby5qb2luKFwiXCIpfX0pLGt0KHt0YXJnZXQ6XCJTdHJpbmdcIixwcm90bzohMH0se3JlcGVhdDpwdX0pLGVlKFwiU3RyaW5nXCIsXCJyZXBlYXRcIik7dmFyIHd1PU8uZixTdT1cIlwiLnN0YXJ0c1dpdGgsRXU9TWF0aC5taW4seHU9aXUoXCJzdGFydHNXaXRoXCIpLEF1PSF4dSYmISFmdW5jdGlvbigpe3ZhciB0PXd1KFN0cmluZy5wcm90b3R5cGUsXCJzdGFydHNXaXRoXCIpO3JldHVybiB0JiYhdC53cml0YWJsZX0oKTtrdCh7dGFyZ2V0OlwiU3RyaW5nXCIscHJvdG86ITAsZm9yY2VkOiFBdSYmIXh1fSx7c3RhcnRzV2l0aDpmdW5jdGlvbih0KXt2YXIgZT1TdHJpbmcoZCh0aGlzKSk7bnUodCk7dmFyIHI9Y3QoRXUoYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDAsZS5sZW5ndGgpKSxuPVN0cmluZyh0KTtyZXR1cm4gU3U/U3UuY2FsbChlLG4scik6ZS5zbGljZShyLHIrbi5sZW5ndGgpPT09bn19KSxlZShcIlN0cmluZ1wiLFwic3RhcnRzV2l0aFwiKTt2YXIgT3U9ZnVuY3Rpb24odCl7cmV0dXJuIG8oZnVuY3Rpb24oKXtyZXR1cm4hIWZuW3RdKCl8fFwi4oCLwoXhoI5cIiE9XCLigIvCheGgjlwiW3RdKCl8fGZuW3RdLm5hbWUhPT10fSl9LFJ1PXZuLnN0YXJ0LGp1PU91KFwidHJpbVN0YXJ0XCIpLFB1PWp1P2Z1bmN0aW9uKCl7cmV0dXJuIFJ1KHRoaXMpfTpcIlwiLnRyaW1TdGFydDtrdCh7dGFyZ2V0OlwiU3RyaW5nXCIscHJvdG86ITAsZm9yY2VkOmp1fSx7dHJpbVN0YXJ0OlB1LHRyaW1MZWZ0OlB1fSksZWUoXCJTdHJpbmdcIixcInRyaW1MZWZ0XCIpO3ZhciBJdT12bi5lbmQsVHU9T3UoXCJ0cmltRW5kXCIpLGt1PVR1P2Z1bmN0aW9uKCl7cmV0dXJuIEl1KHRoaXMpfTpcIlwiLnRyaW1FbmQ7a3Qoe3RhcmdldDpcIlN0cmluZ1wiLHByb3RvOiEwLGZvcmNlZDpUdX0se3RyaW1FbmQ6a3UsdHJpbVJpZ2h0Omt1fSksZWUoXCJTdHJpbmdcIixcInRyaW1SaWdodFwiKTt2YXIgTHU9RHQoXCJpdGVyYXRvclwiKSxVdT0hbyhmdW5jdGlvbigpe3ZhciB0PW5ldyBVUkwoXCJiP2E9MSZiPTImYz0zXCIsXCJodHRwOi8vYVwiKSxlPXQuc2VhcmNoUGFyYW1zLHI9XCJcIjtyZXR1cm4gdC5wYXRobmFtZT1cImMlMjBkXCIsZS5mb3JFYWNoKGZ1bmN0aW9uKHQsbil7ZS5kZWxldGUoXCJiXCIpLHIrPW4rdH0pLCFlLnNvcnR8fFwiaHR0cDovL2EvYyUyMGQ/YT0xJmM9M1wiIT09dC5ocmVmfHxcIjNcIiE9PWUuZ2V0KFwiY1wiKXx8XCJhPTFcIiE9PVN0cmluZyhuZXcgVVJMU2VhcmNoUGFyYW1zKFwiP2E9MVwiKSl8fCFlW0x1XXx8XCJhXCIhPT1uZXcgVVJMKFwiaHR0cHM6Ly9hQGJcIikudXNlcm5hbWV8fFwiYlwiIT09bmV3IFVSTFNlYXJjaFBhcmFtcyhuZXcgVVJMU2VhcmNoUGFyYW1zKFwiYT1iXCIpKS5nZXQoXCJhXCIpfHxcInhuLS1lMWF5YmNcIiE9PW5ldyBVUkwoXCJodHRwOi8v0YLQtdGB0YJcIikuaG9zdHx8XCIjJUQwJUIxXCIhPT1uZXcgVVJMKFwiaHR0cDovL2Ej0LFcIikuaGFzaHx8XCJhMWMzXCIhPT1yfHxcInhcIiE9PW5ldyBVUkwoXCJodHRwOi8veFwiLHZvaWQgMCkuaG9zdH0pLE11PU9iamVjdC5hc3NpZ24sX3U9T2JqZWN0LmRlZmluZVByb3BlcnR5LE51PSFNdXx8byhmdW5jdGlvbigpe2lmKGkmJjEhPT1NdSh7YjoxfSxNdShfdSh7fSxcImFcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtfdSh0aGlzLFwiYlwiLHt2YWx1ZTozLGVudW1lcmFibGU6ITF9KX19KSx7YjoyfSkpLmIpcmV0dXJuITA7dmFyIHQ9e30sZT17fSxyPVN5bWJvbCgpLG49XCJhYmNkZWZnaGlqa2xtbm9wcXJzdFwiO3JldHVybiB0W3JdPTcsbi5zcGxpdChcIlwiKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2VbdF09dH0pLDchPU11KHt9LHQpW3JdfHxxdChNdSh7fSxlKSkuam9pbihcIlwiKSE9bn0pP2Z1bmN0aW9uKHQsZSl7Zm9yKHZhciByPUx0KHQpLG49YXJndW1lbnRzLmxlbmd0aCxvPTEsYT13dC5mLHU9cy5mO24+bzspZm9yKHZhciBjLGY9cChhcmd1bWVudHNbbysrXSksbD1hP3F0KGYpLmNvbmNhdChhKGYpKTpxdChmKSxoPWwubGVuZ3RoLGQ9MDtoPmQ7KWM9bFtkKytdLGkmJiF1LmNhbGwoZixjKXx8KHJbY109ZltjXSk7cmV0dXJuIHJ9Ok11LEN1PTIxNDc0ODM2NDcsRnU9L1teXFwwLVxcdTAwN0VdLyxCdT0vWy5cXHUzMDAyXFx1RkYwRVxcdUZGNjFdL2csRHU9XCJPdmVyZmxvdzogaW5wdXQgbmVlZHMgd2lkZXIgaW50ZWdlcnMgdG8gcHJvY2Vzc1wiLHF1PU1hdGguZmxvb3IsenU9U3RyaW5nLmZyb21DaGFyQ29kZSxXdT1mdW5jdGlvbih0KXtyZXR1cm4gdCsyMis3NSoodDwyNil9LEt1PWZ1bmN0aW9uKHQsZSxyKXt2YXIgbj0wO2Zvcih0PXI/cXUodC83MDApOnQ+PjEsdCs9cXUodC9lKTt0PjQ1NTtuKz0zNil0PXF1KHQvMzUpO3JldHVybiBxdShuKzM2KnQvKHQrMzgpKX0sR3U9ZnVuY3Rpb24odCl7dmFyIGUscixuPVtdLG89KHQ9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPVtdLHI9MCxuPXQubGVuZ3RoO3I8bjspe3ZhciBvPXQuY2hhckNvZGVBdChyKyspO2lmKG8+PTU1Mjk2JiZvPD01NjMxOSYmcjxuKXt2YXIgaT10LmNoYXJDb2RlQXQocisrKTs1NjMyMD09KDY0NTEyJmkpP2UucHVzaCgoKDEwMjMmbyk8PDEwKSsoMTAyMyZpKSs2NTUzNik6KGUucHVzaChvKSxyLS0pfWVsc2UgZS5wdXNoKG8pfXJldHVybiBlfSh0KSkubGVuZ3RoLGk9MTI4LGE9MCx1PTcyO2ZvcihlPTA7ZTx0Lmxlbmd0aDtlKyspKHI9dFtlXSk8MTI4JiZuLnB1c2goenUocikpO3ZhciBzPW4ubGVuZ3RoLGM9cztmb3IocyYmbi5wdXNoKFwiLVwiKTtjPG87KXt2YXIgZj1DdTtmb3IoZT0wO2U8dC5sZW5ndGg7ZSsrKShyPXRbZV0pPj1pJiZyPGYmJihmPXIpO3ZhciBsPWMrMTtpZihmLWk+cXUoKEN1LWEpL2wpKXRocm93IFJhbmdlRXJyb3IoRHUpO2ZvcihhKz0oZi1pKSpsLGk9ZixlPTA7ZTx0Lmxlbmd0aDtlKyspe2lmKChyPXRbZV0pPGkmJisrYT5DdSl0aHJvdyBSYW5nZUVycm9yKER1KTtpZihyPT1pKXtmb3IodmFyIGg9YSxwPTM2OztwKz0zNil7dmFyIGQ9cDw9dT8xOnA+PXUrMjY/MjY6cC11O2lmKGg8ZClicmVhazt2YXIgdj1oLWQsZz0zNi1kO24ucHVzaCh6dShXdShkK3YlZykpKSxoPXF1KHYvZyl9bi5wdXNoKHp1KFd1KGgpKSksdT1LdShhLGwsYz09cyksYT0wLCsrY319KythLCsraX1yZXR1cm4gbi5qb2luKFwiXCIpfSwkdT1vdChcImZldGNoXCIpLFZ1PW90KFwiSGVhZGVyc1wiKSxIdT1EdChcIml0ZXJhdG9yXCIpLFh1PVwiVVJMU2VhcmNoUGFyYW1zXCIsWXU9XCJVUkxTZWFyY2hQYXJhbXNJdGVyYXRvclwiLEp1PXR0LnNldCxRdT10dC5nZXR0ZXJGb3IoWHUpLFp1PXR0LmdldHRlckZvcihZdSksdHM9L1xcKy9nLGVzPUFycmF5KDQpLHJzPWZ1bmN0aW9uKHQpe3JldHVybiBlc1t0LTFdfHwoZXNbdC0xXT1SZWdFeHAoXCIoKD86JVtcXFxcZGEtZl17Mn0pe1wiK3QrXCJ9KVwiLFwiZ2lcIikpfSxucz1mdW5jdGlvbih0KXt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh0KX1jYXRjaChlKXtyZXR1cm4gdH19LG9zPWZ1bmN0aW9uKHQpe3ZhciBlPXQucmVwbGFjZSh0cyxcIiBcIikscj00O3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGUpfWNhdGNoKHQpe2Zvcig7cjspZT1lLnJlcGxhY2UocnMoci0tKSxucyk7cmV0dXJuIGV9fSxpcz0vWyEnKCl+XXwlMjAvZyxhcz17XCIhXCI6XCIlMjFcIixcIidcIjpcIiUyN1wiLFwiKFwiOlwiJTI4XCIsXCIpXCI6XCIlMjlcIixcIn5cIjpcIiU3RVwiLFwiJTIwXCI6XCIrXCJ9LHVzPWZ1bmN0aW9uKHQpe3JldHVybiBhc1t0XX0sc3M9ZnVuY3Rpb24odCl7cmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh0KS5yZXBsYWNlKGlzLHVzKX0sY3M9ZnVuY3Rpb24odCxlKXtpZihlKWZvcih2YXIgcixuLG89ZS5zcGxpdChcIiZcIiksaT0wO2k8by5sZW5ndGg7KShyPW9baSsrXSkubGVuZ3RoJiYobj1yLnNwbGl0KFwiPVwiKSx0LnB1c2goe2tleTpvcyhuLnNoaWZ0KCkpLHZhbHVlOm9zKG4uam9pbihcIj1cIikpfSkpfSxmcz1mdW5jdGlvbih0KXt0aGlzLmVudHJpZXMubGVuZ3RoPTAsY3ModGhpcy5lbnRyaWVzLHQpfSxscz1mdW5jdGlvbih0LGUpe2lmKHQ8ZSl0aHJvdyBUeXBlRXJyb3IoXCJOb3QgZW5vdWdoIGFyZ3VtZW50c1wiKX0saHM9QmUoZnVuY3Rpb24odCxlKXtKdSh0aGlzLHt0eXBlOll1LGl0ZXJhdG9yOm9uKFF1KHQpLmVudHJpZXMpLGtpbmQ6ZX0pfSxcIkl0ZXJhdG9yXCIsZnVuY3Rpb24oKXt2YXIgdD1adSh0aGlzKSxlPXQua2luZCxyPXQuaXRlcmF0b3IubmV4dCgpLG49ci52YWx1ZTtyZXR1cm4gci5kb25lfHwoci52YWx1ZT1cImtleXNcIj09PWU/bi5rZXk6XCJ2YWx1ZXNcIj09PWU/bi52YWx1ZTpbbi5rZXksbi52YWx1ZV0pLHJ9KSxwcz1mdW5jdGlvbigpe19yKHRoaXMscHMsWHUpO3ZhciB0LGUscixuLG8saSxhLHUscyxjPWFyZ3VtZW50cy5sZW5ndGg+MD9hcmd1bWVudHNbMF06dm9pZCAwLGY9dGhpcyxsPVtdO2lmKEp1KGYse3R5cGU6WHUsZW50cmllczpsLHVwZGF0ZVVSTDpmdW5jdGlvbigpe30sdXBkYXRlU2VhcmNoUGFyYW1zOmZzfSksdm9pZCAwIT09YylpZihnKGMpKWlmKFwiZnVuY3Rpb25cIj09dHlwZW9mKHQ9bHIoYykpKWZvcihyPShlPXQuY2FsbChjKSkubmV4dDshKG49ci5jYWxsKGUpKS5kb25lOyl7aWYoKGE9KGk9KG89b24oUihuLnZhbHVlKSkpLm5leHQpLmNhbGwobykpLmRvbmV8fCh1PWkuY2FsbChvKSkuZG9uZXx8IWkuY2FsbChvKS5kb25lKXRocm93IFR5cGVFcnJvcihcIkV4cGVjdGVkIHNlcXVlbmNlIHdpdGggbGVuZ3RoIDJcIik7bC5wdXNoKHtrZXk6YS52YWx1ZStcIlwiLHZhbHVlOnUudmFsdWUrXCJcIn0pfWVsc2UgZm9yKHMgaW4gYyliKGMscykmJmwucHVzaCh7a2V5OnMsdmFsdWU6Y1tzXStcIlwifSk7ZWxzZSBjcyhsLFwic3RyaW5nXCI9PXR5cGVvZiBjP1wiP1wiPT09Yy5jaGFyQXQoMCk/Yy5zbGljZSgxKTpjOmMrXCJcIil9LGRzPXBzLnByb3RvdHlwZTtGcihkcyx7YXBwZW5kOmZ1bmN0aW9uKHQsZSl7bHMoYXJndW1lbnRzLmxlbmd0aCwyKTt2YXIgcj1RdSh0aGlzKTtyLmVudHJpZXMucHVzaCh7a2V5OnQrXCJcIix2YWx1ZTplK1wiXCJ9KSxyLnVwZGF0ZVVSTCgpfSxkZWxldGU6ZnVuY3Rpb24odCl7bHMoYXJndW1lbnRzLmxlbmd0aCwxKTtmb3IodmFyIGU9UXUodGhpcykscj1lLmVudHJpZXMsbj10K1wiXCIsbz0wO288ci5sZW5ndGg7KXJbb10ua2V5PT09bj9yLnNwbGljZShvLDEpOm8rKztlLnVwZGF0ZVVSTCgpfSxnZXQ6ZnVuY3Rpb24odCl7bHMoYXJndW1lbnRzLmxlbmd0aCwxKTtmb3IodmFyIGU9UXUodGhpcykuZW50cmllcyxyPXQrXCJcIixuPTA7bjxlLmxlbmd0aDtuKyspaWYoZVtuXS5rZXk9PT1yKXJldHVybiBlW25dLnZhbHVlO3JldHVybiBudWxsfSxnZXRBbGw6ZnVuY3Rpb24odCl7bHMoYXJndW1lbnRzLmxlbmd0aCwxKTtmb3IodmFyIGU9UXUodGhpcykuZW50cmllcyxyPXQrXCJcIixuPVtdLG89MDtvPGUubGVuZ3RoO28rKyllW29dLmtleT09PXImJm4ucHVzaChlW29dLnZhbHVlKTtyZXR1cm4gbn0saGFzOmZ1bmN0aW9uKHQpe2xzKGFyZ3VtZW50cy5sZW5ndGgsMSk7Zm9yKHZhciBlPVF1KHRoaXMpLmVudHJpZXMscj10K1wiXCIsbj0wO248ZS5sZW5ndGg7KWlmKGVbbisrXS5rZXk9PT1yKXJldHVybiEwO3JldHVybiExfSxzZXQ6ZnVuY3Rpb24odCxlKXtscyhhcmd1bWVudHMubGVuZ3RoLDEpO2Zvcih2YXIgcixuPVF1KHRoaXMpLG89bi5lbnRyaWVzLGk9ITEsYT10K1wiXCIsdT1lK1wiXCIscz0wO3M8by5sZW5ndGg7cysrKShyPW9bc10pLmtleT09PWEmJihpP28uc3BsaWNlKHMtLSwxKTooaT0hMCxyLnZhbHVlPXUpKTtpfHxvLnB1c2goe2tleTphLHZhbHVlOnV9KSxuLnVwZGF0ZVVSTCgpfSxzb3J0OmZ1bmN0aW9uKCl7dmFyIHQsZSxyLG49UXUodGhpcyksbz1uLmVudHJpZXMsaT1vLnNsaWNlKCk7Zm9yKG8ubGVuZ3RoPTAscj0wO3I8aS5sZW5ndGg7cisrKXtmb3IodD1pW3JdLGU9MDtlPHI7ZSsrKWlmKG9bZV0ua2V5PnQua2V5KXtvLnNwbGljZShlLDAsdCk7YnJlYWt9ZT09PXImJm8ucHVzaCh0KX1uLnVwZGF0ZVVSTCgpfSxmb3JFYWNoOmZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxyPVF1KHRoaXMpLmVudHJpZXMsbj1adCh0LGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwLDMpLG89MDtvPHIubGVuZ3RoOyluKChlPXJbbysrXSkudmFsdWUsZS5rZXksdGhpcyl9LGtleXM6ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGhzKHRoaXMsXCJrZXlzXCIpfSx2YWx1ZXM6ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGhzKHRoaXMsXCJ2YWx1ZXNcIil9LGVudHJpZXM6ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGhzKHRoaXMsXCJlbnRyaWVzXCIpfX0se2VudW1lcmFibGU6ITB9KSxldChkcyxIdSxkcy5lbnRyaWVzKSxldChkcyxcInRvU3RyaW5nXCIsZnVuY3Rpb24oKXtmb3IodmFyIHQsZT1RdSh0aGlzKS5lbnRyaWVzLHI9W10sbj0wO248ZS5sZW5ndGg7KXQ9ZVtuKytdLHIucHVzaChzcyh0LmtleSkrXCI9XCIrc3ModC52YWx1ZSkpO3JldHVybiByLmpvaW4oXCImXCIpfSx7ZW51bWVyYWJsZTohMH0pLF9lKHBzLFh1KSxrdCh7Z2xvYmFsOiEwLGZvcmNlZDohVXV9LHtVUkxTZWFyY2hQYXJhbXM6cHN9KSxVdXx8XCJmdW5jdGlvblwiIT10eXBlb2YgJHV8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIFZ1fHxrdCh7Z2xvYmFsOiEwLGVudW1lcmFibGU6ITAsZm9yY2VkOiEwfSx7ZmV0Y2g6ZnVuY3Rpb24odCl7dmFyIGUscixuLG89W3RdO3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjEmJihnKGU9YXJndW1lbnRzWzFdKSYmY3Iocj1lLmJvZHkpPT09WHUmJigobj1lLmhlYWRlcnM/bmV3IFZ1KGUuaGVhZGVycyk6bmV3IFZ1KS5oYXMoXCJjb250ZW50LXR5cGVcIil8fG4uc2V0KFwiY29udGVudC10eXBlXCIsXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOFwiKSxlPUh0KGUse2JvZHk6YygwLFN0cmluZyhyKSksaGVhZGVyczpjKDAsbil9KSksby5wdXNoKGUpKSwkdS5hcHBseSh0aGlzLG8pfX0pO3ZhciB2cyxncz17VVJMU2VhcmNoUGFyYW1zOnBzLGdldFN0YXRlOlF1fSx5cz1PZS5jb2RlQXQsbXM9bi5VUkwsYnM9Z3MuVVJMU2VhcmNoUGFyYW1zLHdzPWdzLmdldFN0YXRlLFNzPXR0LnNldCxFcz10dC5nZXR0ZXJGb3IoXCJVUkxcIikseHM9TWF0aC5mbG9vcixBcz1NYXRoLnBvdyxPcz1cIkludmFsaWQgc2NoZW1lXCIsUnM9XCJJbnZhbGlkIGhvc3RcIixqcz1cIkludmFsaWQgcG9ydFwiLFBzPS9bQS1aYS16XS8sSXM9L1tcXGQrLS5BLVphLXpdLyxUcz0vXFxkLyxrcz0vXigweHwwWCkvLExzPS9eWzAtN10rJC8sVXM9L15cXGQrJC8sTXM9L15bXFxkQS1GYS1mXSskLyxfcz0vW1xcdTAwMDBcXHUwMDA5XFx1MDAwQVxcdTAwMEQgIyUvOj9AW1xcXFxdXS8sTnM9L1tcXHUwMDAwXFx1MDAwOVxcdTAwMEFcXHUwMDBEICMvOj9AW1xcXFxdXS8sQ3M9L15bXFx1MDAwMC1cXHUwMDFGIF0rfFtcXHUwMDAwLVxcdTAwMUYgXSskL2csRnM9L1tcXHUwMDA5XFx1MDAwQVxcdTAwMERdL2csQnM9ZnVuY3Rpb24odCxlKXt2YXIgcixuLG87aWYoXCJbXCI9PWUuY2hhckF0KDApKXtpZihcIl1cIiE9ZS5jaGFyQXQoZS5sZW5ndGgtMSkpcmV0dXJuIFJzO2lmKCEocj1xcyhlLnNsaWNlKDEsLTEpKSkpcmV0dXJuIFJzO3QuaG9zdD1yfWVsc2UgaWYoWHModCkpe2lmKGU9ZnVuY3Rpb24odCl7dmFyIGUscixuPVtdLG89dC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoQnUsXCIuXCIpLnNwbGl0KFwiLlwiKTtmb3IoZT0wO2U8by5sZW5ndGg7ZSsrKW4ucHVzaChGdS50ZXN0KHI9b1tlXSk/XCJ4bi0tXCIrR3Uocik6cik7cmV0dXJuIG4uam9pbihcIi5cIil9KGUpLF9zLnRlc3QoZSkpcmV0dXJuIFJzO2lmKG51bGw9PT0ocj1EcyhlKSkpcmV0dXJuIFJzO3QuaG9zdD1yfWVsc2V7aWYoTnMudGVzdChlKSlyZXR1cm4gUnM7Zm9yKHI9XCJcIixuPWhyKGUpLG89MDtvPG4ubGVuZ3RoO28rKylyKz1WcyhuW29dLFdzKTt0Lmhvc3Q9cn19LERzPWZ1bmN0aW9uKHQpe3ZhciBlLHIsbixvLGksYSx1LHM9dC5zcGxpdChcIi5cIik7aWYocy5sZW5ndGgmJlwiXCI9PXNbcy5sZW5ndGgtMV0mJnMucG9wKCksKGU9cy5sZW5ndGgpPjQpcmV0dXJuIHQ7Zm9yKHI9W10sbj0wO248ZTtuKyspe2lmKFwiXCI9PShvPXNbbl0pKXJldHVybiB0O2lmKGk9MTAsby5sZW5ndGg+MSYmXCIwXCI9PW8uY2hhckF0KDApJiYoaT1rcy50ZXN0KG8pPzE2Ojgsbz1vLnNsaWNlKDg9PWk/MToyKSksXCJcIj09PW8pYT0wO2Vsc2V7aWYoISgxMD09aT9Vczo4PT1pP0xzOk1zKS50ZXN0KG8pKXJldHVybiB0O2E9cGFyc2VJbnQobyxpKX1yLnB1c2goYSl9Zm9yKG49MDtuPGU7bisrKWlmKGE9cltuXSxuPT1lLTEpe2lmKGE+PUFzKDI1Niw1LWUpKXJldHVybiBudWxsfWVsc2UgaWYoYT4yNTUpcmV0dXJuIG51bGw7Zm9yKHU9ci5wb3AoKSxuPTA7bjxyLmxlbmd0aDtuKyspdSs9cltuXSpBcygyNTYsMy1uKTtyZXR1cm4gdX0scXM9ZnVuY3Rpb24odCl7dmFyIGUscixuLG8saSxhLHUscz1bMCwwLDAsMCwwLDAsMCwwXSxjPTAsZj1udWxsLGw9MCxoPWZ1bmN0aW9uKCl7cmV0dXJuIHQuY2hhckF0KGwpfTtpZihcIjpcIj09aCgpKXtpZihcIjpcIiE9dC5jaGFyQXQoMSkpcmV0dXJuO2wrPTIsZj0rK2N9Zm9yKDtoKCk7KXtpZig4PT1jKXJldHVybjtpZihcIjpcIiE9aCgpKXtmb3IoZT1yPTA7cjw0JiZNcy50ZXN0KGgoKSk7KWU9MTYqZStwYXJzZUludChoKCksMTYpLGwrKyxyKys7aWYoXCIuXCI9PWgoKSl7aWYoMD09cilyZXR1cm47aWYobC09cixjPjYpcmV0dXJuO2ZvcihuPTA7aCgpOyl7aWYobz1udWxsLG4+MCl7aWYoIShcIi5cIj09aCgpJiZuPDQpKXJldHVybjtsKyt9aWYoIVRzLnRlc3QoaCgpKSlyZXR1cm47Zm9yKDtUcy50ZXN0KGgoKSk7KXtpZihpPXBhcnNlSW50KGgoKSwxMCksbnVsbD09PW8pbz1pO2Vsc2V7aWYoMD09bylyZXR1cm47bz0xMCpvK2l9aWYobz4yNTUpcmV0dXJuO2wrK31zW2NdPTI1NipzW2NdK28sMiE9KytuJiY0IT1ufHxjKyt9aWYoNCE9bilyZXR1cm47YnJlYWt9aWYoXCI6XCI9PWgoKSl7aWYobCsrLCFoKCkpcmV0dXJufWVsc2UgaWYoaCgpKXJldHVybjtzW2MrK109ZX1lbHNle2lmKG51bGwhPT1mKXJldHVybjtsKyssZj0rK2N9fWlmKG51bGwhPT1mKWZvcihhPWMtZixjPTc7MCE9YyYmYT4wOyl1PXNbY10sc1tjLS1dPXNbZithLTFdLHNbZistLWFdPXU7ZWxzZSBpZig4IT1jKXJldHVybjtyZXR1cm4gc30senM9ZnVuY3Rpb24odCl7dmFyIGUscixuLG87aWYoXCJudW1iZXJcIj09dHlwZW9mIHQpe2ZvcihlPVtdLHI9MDtyPDQ7cisrKWUudW5zaGlmdCh0JTI1NiksdD14cyh0LzI1Nik7cmV0dXJuIGUuam9pbihcIi5cIil9aWYoXCJvYmplY3RcIj09dHlwZW9mIHQpe2ZvcihlPVwiXCIsbj1mdW5jdGlvbih0KXtmb3IodmFyIGU9bnVsbCxyPTEsbj1udWxsLG89MCxpPTA7aTw4O2krKykwIT09dFtpXT8obz5yJiYoZT1uLHI9byksbj1udWxsLG89MCk6KG51bGw9PT1uJiYobj1pKSwrK28pO3JldHVybiBvPnImJihlPW4scj1vKSxlfSh0KSxyPTA7cjw4O3IrKylvJiYwPT09dFtyXXx8KG8mJihvPSExKSxuPT09cj8oZSs9cj9cIjpcIjpcIjo6XCIsbz0hMCk6KGUrPXRbcl0udG9TdHJpbmcoMTYpLHI8NyYmKGUrPVwiOlwiKSkpO3JldHVyblwiW1wiK2UrXCJdXCJ9cmV0dXJuIHR9LFdzPXt9LEtzPU51KHt9LFdzLHtcIiBcIjoxLCdcIic6MSxcIjxcIjoxLFwiPlwiOjEsXCJgXCI6MX0pLEdzPU51KHt9LEtzLHtcIiNcIjoxLFwiP1wiOjEsXCJ7XCI6MSxcIn1cIjoxfSksJHM9TnUoe30sR3Mse1wiL1wiOjEsXCI6XCI6MSxcIjtcIjoxLFwiPVwiOjEsXCJAXCI6MSxcIltcIjoxLFwiXFxcXFwiOjEsXCJdXCI6MSxcIl5cIjoxLFwifFwiOjF9KSxWcz1mdW5jdGlvbih0LGUpe3ZhciByPXlzKHQsMCk7cmV0dXJuIHI+MzImJnI8MTI3JiYhYihlLHQpP3Q6ZW5jb2RlVVJJQ29tcG9uZW50KHQpfSxIcz17ZnRwOjIxLGZpbGU6bnVsbCxodHRwOjgwLGh0dHBzOjQ0Myx3czo4MCx3c3M6NDQzfSxYcz1mdW5jdGlvbih0KXtyZXR1cm4gYihIcyx0LnNjaGVtZSl9LFlzPWZ1bmN0aW9uKHQpe3JldHVyblwiXCIhPXQudXNlcm5hbWV8fFwiXCIhPXQucGFzc3dvcmR9LEpzPWZ1bmN0aW9uKHQpe3JldHVybiF0Lmhvc3R8fHQuY2Fubm90QmVBQmFzZVVSTHx8XCJmaWxlXCI9PXQuc2NoZW1lfSxRcz1mdW5jdGlvbih0LGUpe3ZhciByO3JldHVybiAyPT10Lmxlbmd0aCYmUHMudGVzdCh0LmNoYXJBdCgwKSkmJihcIjpcIj09KHI9dC5jaGFyQXQoMSkpfHwhZSYmXCJ8XCI9PXIpfSxacz1mdW5jdGlvbih0KXt2YXIgZTtyZXR1cm4gdC5sZW5ndGg+MSYmUXModC5zbGljZSgwLDIpKSYmKDI9PXQubGVuZ3RofHxcIi9cIj09PShlPXQuY2hhckF0KDIpKXx8XCJcXFxcXCI9PT1lfHxcIj9cIj09PWV8fFwiI1wiPT09ZSl9LHRjPWZ1bmN0aW9uKHQpe3ZhciBlPXQucGF0aCxyPWUubGVuZ3RoOyFyfHxcImZpbGVcIj09dC5zY2hlbWUmJjE9PXImJlFzKGVbMF0sITApfHxlLnBvcCgpfSxlYz1mdW5jdGlvbih0KXtyZXR1cm5cIi5cIj09PXR8fFwiJTJlXCI9PT10LnRvTG93ZXJDYXNlKCl9LHJjPXt9LG5jPXt9LG9jPXt9LGljPXt9LGFjPXt9LHVjPXt9LHNjPXt9LGNjPXt9LGZjPXt9LGxjPXt9LGhjPXt9LHBjPXt9LGRjPXt9LHZjPXt9LGdjPXt9LHljPXt9LG1jPXt9LGJjPXt9LHdjPXt9LFNjPXt9LEVjPXt9LHhjPWZ1bmN0aW9uKHQsZSxyLG4pe3ZhciBvLGksYSx1LHMsYz1yfHxyYyxmPTAsbD1cIlwiLGg9ITEscD0hMSxkPSExO2ZvcihyfHwodC5zY2hlbWU9XCJcIix0LnVzZXJuYW1lPVwiXCIsdC5wYXNzd29yZD1cIlwiLHQuaG9zdD1udWxsLHQucG9ydD1udWxsLHQucGF0aD1bXSx0LnF1ZXJ5PW51bGwsdC5mcmFnbWVudD1udWxsLHQuY2Fubm90QmVBQmFzZVVSTD0hMSxlPWUucmVwbGFjZShDcyxcIlwiKSksZT1lLnJlcGxhY2UoRnMsXCJcIiksbz1ocihlKTtmPD1vLmxlbmd0aDspe3N3aXRjaChpPW9bZl0sYyl7Y2FzZSByYzppZighaXx8IVBzLnRlc3QoaSkpe2lmKHIpcmV0dXJuIE9zO2M9b2M7Y29udGludWV9bCs9aS50b0xvd2VyQ2FzZSgpLGM9bmM7YnJlYWs7Y2FzZSBuYzppZihpJiYoSXMudGVzdChpKXx8XCIrXCI9PWl8fFwiLVwiPT1pfHxcIi5cIj09aSkpbCs9aS50b0xvd2VyQ2FzZSgpO2Vsc2V7aWYoXCI6XCIhPWkpe2lmKHIpcmV0dXJuIE9zO2w9XCJcIixjPW9jLGY9MDtjb250aW51ZX1pZihyJiYoWHModCkhPWIoSHMsbCl8fFwiZmlsZVwiPT1sJiYoWXModCl8fG51bGwhPT10LnBvcnQpfHxcImZpbGVcIj09dC5zY2hlbWUmJiF0Lmhvc3QpKXJldHVybjtpZih0LnNjaGVtZT1sLHIpcmV0dXJuIHZvaWQoWHModCkmJkhzW3Quc2NoZW1lXT09dC5wb3J0JiYodC5wb3J0PW51bGwpKTtsPVwiXCIsXCJmaWxlXCI9PXQuc2NoZW1lP2M9dmM6WHModCkmJm4mJm4uc2NoZW1lPT10LnNjaGVtZT9jPWljOlhzKHQpP2M9Y2M6XCIvXCI9PW9bZisxXT8oYz1hYyxmKyspOih0LmNhbm5vdEJlQUJhc2VVUkw9ITAsdC5wYXRoLnB1c2goXCJcIiksYz13Yyl9YnJlYWs7Y2FzZSBvYzppZighbnx8bi5jYW5ub3RCZUFCYXNlVVJMJiZcIiNcIiE9aSlyZXR1cm4gT3M7aWYobi5jYW5ub3RCZUFCYXNlVVJMJiZcIiNcIj09aSl7dC5zY2hlbWU9bi5zY2hlbWUsdC5wYXRoPW4ucGF0aC5zbGljZSgpLHQucXVlcnk9bi5xdWVyeSx0LmZyYWdtZW50PVwiXCIsdC5jYW5ub3RCZUFCYXNlVVJMPSEwLGM9RWM7YnJlYWt9Yz1cImZpbGVcIj09bi5zY2hlbWU/dmM6dWM7Y29udGludWU7Y2FzZSBpYzppZihcIi9cIiE9aXx8XCIvXCIhPW9bZisxXSl7Yz11Yztjb250aW51ZX1jPWZjLGYrKzticmVhaztjYXNlIGFjOmlmKFwiL1wiPT1pKXtjPWxjO2JyZWFrfWM9YmM7Y29udGludWU7Y2FzZSB1YzppZih0LnNjaGVtZT1uLnNjaGVtZSxpPT12cyl0LnVzZXJuYW1lPW4udXNlcm5hbWUsdC5wYXNzd29yZD1uLnBhc3N3b3JkLHQuaG9zdD1uLmhvc3QsdC5wb3J0PW4ucG9ydCx0LnBhdGg9bi5wYXRoLnNsaWNlKCksdC5xdWVyeT1uLnF1ZXJ5O2Vsc2UgaWYoXCIvXCI9PWl8fFwiXFxcXFwiPT1pJiZYcyh0KSljPXNjO2Vsc2UgaWYoXCI/XCI9PWkpdC51c2VybmFtZT1uLnVzZXJuYW1lLHQucGFzc3dvcmQ9bi5wYXNzd29yZCx0Lmhvc3Q9bi5ob3N0LHQucG9ydD1uLnBvcnQsdC5wYXRoPW4ucGF0aC5zbGljZSgpLHQucXVlcnk9XCJcIixjPVNjO2Vsc2V7aWYoXCIjXCIhPWkpe3QudXNlcm5hbWU9bi51c2VybmFtZSx0LnBhc3N3b3JkPW4ucGFzc3dvcmQsdC5ob3N0PW4uaG9zdCx0LnBvcnQ9bi5wb3J0LHQucGF0aD1uLnBhdGguc2xpY2UoKSx0LnBhdGgucG9wKCksYz1iYztjb250aW51ZX10LnVzZXJuYW1lPW4udXNlcm5hbWUsdC5wYXNzd29yZD1uLnBhc3N3b3JkLHQuaG9zdD1uLmhvc3QsdC5wb3J0PW4ucG9ydCx0LnBhdGg9bi5wYXRoLnNsaWNlKCksdC5xdWVyeT1uLnF1ZXJ5LHQuZnJhZ21lbnQ9XCJcIixjPUVjfWJyZWFrO2Nhc2Ugc2M6aWYoIVhzKHQpfHxcIi9cIiE9aSYmXCJcXFxcXCIhPWkpe2lmKFwiL1wiIT1pKXt0LnVzZXJuYW1lPW4udXNlcm5hbWUsdC5wYXNzd29yZD1uLnBhc3N3b3JkLHQuaG9zdD1uLmhvc3QsdC5wb3J0PW4ucG9ydCxjPWJjO2NvbnRpbnVlfWM9bGN9ZWxzZSBjPWZjO2JyZWFrO2Nhc2UgY2M6aWYoYz1mYyxcIi9cIiE9aXx8XCIvXCIhPWwuY2hhckF0KGYrMSkpY29udGludWU7ZisrO2JyZWFrO2Nhc2UgZmM6aWYoXCIvXCIhPWkmJlwiXFxcXFwiIT1pKXtjPWxjO2NvbnRpbnVlfWJyZWFrO2Nhc2UgbGM6aWYoXCJAXCI9PWkpe2gmJihsPVwiJTQwXCIrbCksaD0hMCxhPWhyKGwpO2Zvcih2YXIgdj0wO3Y8YS5sZW5ndGg7disrKXt2YXIgZz1hW3ZdO2lmKFwiOlwiIT1nfHxkKXt2YXIgeT1WcyhnLCRzKTtkP3QucGFzc3dvcmQrPXk6dC51c2VybmFtZSs9eX1lbHNlIGQ9ITB9bD1cIlwifWVsc2UgaWYoaT09dnN8fFwiL1wiPT1pfHxcIj9cIj09aXx8XCIjXCI9PWl8fFwiXFxcXFwiPT1pJiZYcyh0KSl7aWYoaCYmXCJcIj09bClyZXR1cm5cIkludmFsaWQgYXV0aG9yaXR5XCI7Zi09aHIobCkubGVuZ3RoKzEsbD1cIlwiLGM9aGN9ZWxzZSBsKz1pO2JyZWFrO2Nhc2UgaGM6Y2FzZSBwYzppZihyJiZcImZpbGVcIj09dC5zY2hlbWUpe2M9eWM7Y29udGludWV9aWYoXCI6XCIhPWl8fHApe2lmKGk9PXZzfHxcIi9cIj09aXx8XCI/XCI9PWl8fFwiI1wiPT1pfHxcIlxcXFxcIj09aSYmWHModCkpe2lmKFhzKHQpJiZcIlwiPT1sKXJldHVybiBScztpZihyJiZcIlwiPT1sJiYoWXModCl8fG51bGwhPT10LnBvcnQpKXJldHVybjtpZih1PUJzKHQsbCkpcmV0dXJuIHU7aWYobD1cIlwiLGM9bWMscilyZXR1cm47Y29udGludWV9XCJbXCI9PWk/cD0hMDpcIl1cIj09aSYmKHA9ITEpLGwrPWl9ZWxzZXtpZihcIlwiPT1sKXJldHVybiBScztpZih1PUJzKHQsbCkpcmV0dXJuIHU7aWYobD1cIlwiLGM9ZGMscj09cGMpcmV0dXJufWJyZWFrO2Nhc2UgZGM6aWYoIVRzLnRlc3QoaSkpe2lmKGk9PXZzfHxcIi9cIj09aXx8XCI/XCI9PWl8fFwiI1wiPT1pfHxcIlxcXFxcIj09aSYmWHModCl8fHIpe2lmKFwiXCIhPWwpe3ZhciBtPXBhcnNlSW50KGwsMTApO2lmKG0+NjU1MzUpcmV0dXJuIGpzO3QucG9ydD1Ycyh0KSYmbT09PUhzW3Quc2NoZW1lXT9udWxsOm0sbD1cIlwifWlmKHIpcmV0dXJuO2M9bWM7Y29udGludWV9cmV0dXJuIGpzfWwrPWk7YnJlYWs7Y2FzZSB2YzppZih0LnNjaGVtZT1cImZpbGVcIixcIi9cIj09aXx8XCJcXFxcXCI9PWkpYz1nYztlbHNle2lmKCFufHxcImZpbGVcIiE9bi5zY2hlbWUpe2M9YmM7Y29udGludWV9aWYoaT09dnMpdC5ob3N0PW4uaG9zdCx0LnBhdGg9bi5wYXRoLnNsaWNlKCksdC5xdWVyeT1uLnF1ZXJ5O2Vsc2UgaWYoXCI/XCI9PWkpdC5ob3N0PW4uaG9zdCx0LnBhdGg9bi5wYXRoLnNsaWNlKCksdC5xdWVyeT1cIlwiLGM9U2M7ZWxzZXtpZihcIiNcIiE9aSl7WnMoby5zbGljZShmKS5qb2luKFwiXCIpKXx8KHQuaG9zdD1uLmhvc3QsdC5wYXRoPW4ucGF0aC5zbGljZSgpLHRjKHQpKSxjPWJjO2NvbnRpbnVlfXQuaG9zdD1uLmhvc3QsdC5wYXRoPW4ucGF0aC5zbGljZSgpLHQucXVlcnk9bi5xdWVyeSx0LmZyYWdtZW50PVwiXCIsYz1FY319YnJlYWs7Y2FzZSBnYzppZihcIi9cIj09aXx8XCJcXFxcXCI9PWkpe2M9eWM7YnJlYWt9biYmXCJmaWxlXCI9PW4uc2NoZW1lJiYhWnMoby5zbGljZShmKS5qb2luKFwiXCIpKSYmKFFzKG4ucGF0aFswXSwhMCk/dC5wYXRoLnB1c2gobi5wYXRoWzBdKTp0Lmhvc3Q9bi5ob3N0KSxjPWJjO2NvbnRpbnVlO2Nhc2UgeWM6aWYoaT09dnN8fFwiL1wiPT1pfHxcIlxcXFxcIj09aXx8XCI/XCI9PWl8fFwiI1wiPT1pKXtpZighciYmUXMobCkpYz1iYztlbHNlIGlmKFwiXCI9PWwpe2lmKHQuaG9zdD1cIlwiLHIpcmV0dXJuO2M9bWN9ZWxzZXtpZih1PUJzKHQsbCkpcmV0dXJuIHU7aWYoXCJsb2NhbGhvc3RcIj09dC5ob3N0JiYodC5ob3N0PVwiXCIpLHIpcmV0dXJuO2w9XCJcIixjPW1jfWNvbnRpbnVlfWwrPWk7YnJlYWs7Y2FzZSBtYzppZihYcyh0KSl7aWYoYz1iYyxcIi9cIiE9aSYmXCJcXFxcXCIhPWkpY29udGludWV9ZWxzZSBpZihyfHxcIj9cIiE9aSlpZihyfHxcIiNcIiE9aSl7aWYoaSE9dnMmJihjPWJjLFwiL1wiIT1pKSljb250aW51ZX1lbHNlIHQuZnJhZ21lbnQ9XCJcIixjPUVjO2Vsc2UgdC5xdWVyeT1cIlwiLGM9U2M7YnJlYWs7Y2FzZSBiYzppZihpPT12c3x8XCIvXCI9PWl8fFwiXFxcXFwiPT1pJiZYcyh0KXx8IXImJihcIj9cIj09aXx8XCIjXCI9PWkpKXtpZihcIi4uXCI9PT0ocz0ocz1sKS50b0xvd2VyQ2FzZSgpKXx8XCIlMmUuXCI9PT1zfHxcIi4lMmVcIj09PXN8fFwiJTJlJTJlXCI9PT1zPyh0Yyh0KSxcIi9cIj09aXx8XCJcXFxcXCI9PWkmJlhzKHQpfHx0LnBhdGgucHVzaChcIlwiKSk6ZWMobCk/XCIvXCI9PWl8fFwiXFxcXFwiPT1pJiZYcyh0KXx8dC5wYXRoLnB1c2goXCJcIik6KFwiZmlsZVwiPT10LnNjaGVtZSYmIXQucGF0aC5sZW5ndGgmJlFzKGwpJiYodC5ob3N0JiYodC5ob3N0PVwiXCIpLGw9bC5jaGFyQXQoMCkrXCI6XCIpLHQucGF0aC5wdXNoKGwpKSxsPVwiXCIsXCJmaWxlXCI9PXQuc2NoZW1lJiYoaT09dnN8fFwiP1wiPT1pfHxcIiNcIj09aSkpZm9yKDt0LnBhdGgubGVuZ3RoPjEmJlwiXCI9PT10LnBhdGhbMF07KXQucGF0aC5zaGlmdCgpO1wiP1wiPT1pPyh0LnF1ZXJ5PVwiXCIsYz1TYyk6XCIjXCI9PWkmJih0LmZyYWdtZW50PVwiXCIsYz1FYyl9ZWxzZSBsKz1WcyhpLEdzKTticmVhaztjYXNlIHdjOlwiP1wiPT1pPyh0LnF1ZXJ5PVwiXCIsYz1TYyk6XCIjXCI9PWk/KHQuZnJhZ21lbnQ9XCJcIixjPUVjKTppIT12cyYmKHQucGF0aFswXSs9VnMoaSxXcykpO2JyZWFrO2Nhc2UgU2M6cnx8XCIjXCIhPWk/aSE9dnMmJihcIidcIj09aSYmWHModCk/dC5xdWVyeSs9XCIlMjdcIjp0LnF1ZXJ5Kz1cIiNcIj09aT9cIiUyM1wiOlZzKGksV3MpKToodC5mcmFnbWVudD1cIlwiLGM9RWMpO2JyZWFrO2Nhc2UgRWM6aSE9dnMmJih0LmZyYWdtZW50Kz1WcyhpLEtzKSl9ZisrfX0sQWM9ZnVuY3Rpb24odCl7dmFyIGUscixuPV9yKHRoaXMsQWMsXCJVUkxcIiksbz1hcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCxhPVN0cmluZyh0KSx1PVNzKG4se3R5cGU6XCJVUkxcIn0pO2lmKHZvaWQgMCE9PW8paWYobyBpbnN0YW5jZW9mIEFjKWU9RXMobyk7ZWxzZSBpZihyPXhjKGU9e30sU3RyaW5nKG8pKSl0aHJvdyBUeXBlRXJyb3Iocik7aWYocj14Yyh1LGEsbnVsbCxlKSl0aHJvdyBUeXBlRXJyb3Iocik7dmFyIHM9dS5zZWFyY2hQYXJhbXM9bmV3IGJzLGM9d3Mocyk7Yy51cGRhdGVTZWFyY2hQYXJhbXModS5xdWVyeSksYy51cGRhdGVVUkw9ZnVuY3Rpb24oKXt1LnF1ZXJ5PVN0cmluZyhzKXx8bnVsbH0saXx8KG4uaHJlZj1SYy5jYWxsKG4pLG4ub3JpZ2luPWpjLmNhbGwobiksbi5wcm90b2NvbD1QYy5jYWxsKG4pLG4udXNlcm5hbWU9SWMuY2FsbChuKSxuLnBhc3N3b3JkPVRjLmNhbGwobiksbi5ob3N0PWtjLmNhbGwobiksbi5ob3N0bmFtZT1MYy5jYWxsKG4pLG4ucG9ydD1VYy5jYWxsKG4pLG4ucGF0aG5hbWU9TWMuY2FsbChuKSxuLnNlYXJjaD1fYy5jYWxsKG4pLG4uc2VhcmNoUGFyYW1zPU5jLmNhbGwobiksbi5oYXNoPUNjLmNhbGwobikpfSxPYz1BYy5wcm90b3R5cGUsUmM9ZnVuY3Rpb24oKXt2YXIgdD1Fcyh0aGlzKSxlPXQuc2NoZW1lLHI9dC51c2VybmFtZSxuPXQucGFzc3dvcmQsbz10Lmhvc3QsaT10LnBvcnQsYT10LnBhdGgsdT10LnF1ZXJ5LHM9dC5mcmFnbWVudCxjPWUrXCI6XCI7cmV0dXJuIG51bGwhPT1vPyhjKz1cIi8vXCIsWXModCkmJihjKz1yKyhuP1wiOlwiK246XCJcIikrXCJAXCIpLGMrPXpzKG8pLG51bGwhPT1pJiYoYys9XCI6XCIraSkpOlwiZmlsZVwiPT1lJiYoYys9XCIvL1wiKSxjKz10LmNhbm5vdEJlQUJhc2VVUkw/YVswXTphLmxlbmd0aD9cIi9cIithLmpvaW4oXCIvXCIpOlwiXCIsbnVsbCE9PXUmJihjKz1cIj9cIit1KSxudWxsIT09cyYmKGMrPVwiI1wiK3MpLGN9LGpjPWZ1bmN0aW9uKCl7dmFyIHQ9RXModGhpcyksZT10LnNjaGVtZSxyPXQucG9ydDtpZihcImJsb2JcIj09ZSl0cnl7cmV0dXJuIG5ldyBVUkwoZS5wYXRoWzBdKS5vcmlnaW59Y2F0Y2godCl7cmV0dXJuXCJudWxsXCJ9cmV0dXJuXCJmaWxlXCIhPWUmJlhzKHQpP2UrXCI6Ly9cIit6cyh0Lmhvc3QpKyhudWxsIT09cj9cIjpcIityOlwiXCIpOlwibnVsbFwifSxQYz1mdW5jdGlvbigpe3JldHVybiBFcyh0aGlzKS5zY2hlbWUrXCI6XCJ9LEljPWZ1bmN0aW9uKCl7cmV0dXJuIEVzKHRoaXMpLnVzZXJuYW1lfSxUYz1mdW5jdGlvbigpe3JldHVybiBFcyh0aGlzKS5wYXNzd29yZH0sa2M9ZnVuY3Rpb24oKXt2YXIgdD1Fcyh0aGlzKSxlPXQuaG9zdCxyPXQucG9ydDtyZXR1cm4gbnVsbD09PWU/XCJcIjpudWxsPT09cj96cyhlKTp6cyhlKStcIjpcIityfSxMYz1mdW5jdGlvbigpe3ZhciB0PUVzKHRoaXMpLmhvc3Q7cmV0dXJuIG51bGw9PT10P1wiXCI6enModCl9LFVjPWZ1bmN0aW9uKCl7dmFyIHQ9RXModGhpcykucG9ydDtyZXR1cm4gbnVsbD09PXQ/XCJcIjpTdHJpbmcodCl9LE1jPWZ1bmN0aW9uKCl7dmFyIHQ9RXModGhpcyksZT10LnBhdGg7cmV0dXJuIHQuY2Fubm90QmVBQmFzZVVSTD9lWzBdOmUubGVuZ3RoP1wiL1wiK2Uuam9pbihcIi9cIik6XCJcIn0sX2M9ZnVuY3Rpb24oKXt2YXIgdD1Fcyh0aGlzKS5xdWVyeTtyZXR1cm4gdD9cIj9cIit0OlwiXCJ9LE5jPWZ1bmN0aW9uKCl7cmV0dXJuIEVzKHRoaXMpLnNlYXJjaFBhcmFtc30sQ2M9ZnVuY3Rpb24oKXt2YXIgdD1Fcyh0aGlzKS5mcmFnbWVudDtyZXR1cm4gdD9cIiNcIit0OlwiXCJ9LEZjPWZ1bmN0aW9uKHQsZSl7cmV0dXJue2dldDp0LHNldDplLGNvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwfX07aWYoaSYmenQoT2Mse2hyZWY6RmMoUmMsZnVuY3Rpb24odCl7dmFyIGU9RXModGhpcykscj1TdHJpbmcodCksbj14YyhlLHIpO2lmKG4pdGhyb3cgVHlwZUVycm9yKG4pO3dzKGUuc2VhcmNoUGFyYW1zKS51cGRhdGVTZWFyY2hQYXJhbXMoZS5xdWVyeSl9KSxvcmlnaW46RmMoamMpLHByb3RvY29sOkZjKFBjLGZ1bmN0aW9uKHQpe3ZhciBlPUVzKHRoaXMpO3hjKGUsU3RyaW5nKHQpK1wiOlwiLHJjKX0pLHVzZXJuYW1lOkZjKEljLGZ1bmN0aW9uKHQpe3ZhciBlPUVzKHRoaXMpLHI9aHIoU3RyaW5nKHQpKTtpZighSnMoZSkpe2UudXNlcm5hbWU9XCJcIjtmb3IodmFyIG49MDtuPHIubGVuZ3RoO24rKyllLnVzZXJuYW1lKz1WcyhyW25dLCRzKX19KSxwYXNzd29yZDpGYyhUYyxmdW5jdGlvbih0KXt2YXIgZT1Fcyh0aGlzKSxyPWhyKFN0cmluZyh0KSk7aWYoIUpzKGUpKXtlLnBhc3N3b3JkPVwiXCI7Zm9yKHZhciBuPTA7bjxyLmxlbmd0aDtuKyspZS5wYXNzd29yZCs9VnMocltuXSwkcyl9fSksaG9zdDpGYyhrYyxmdW5jdGlvbih0KXt2YXIgZT1Fcyh0aGlzKTtlLmNhbm5vdEJlQUJhc2VVUkx8fHhjKGUsU3RyaW5nKHQpLGhjKX0pLGhvc3RuYW1lOkZjKExjLGZ1bmN0aW9uKHQpe3ZhciBlPUVzKHRoaXMpO2UuY2Fubm90QmVBQmFzZVVSTHx8eGMoZSxTdHJpbmcodCkscGMpfSkscG9ydDpGYyhVYyxmdW5jdGlvbih0KXt2YXIgZT1Fcyh0aGlzKTtKcyhlKXx8KFwiXCI9PSh0PVN0cmluZyh0KSk/ZS5wb3J0PW51bGw6eGMoZSx0LGRjKSl9KSxwYXRobmFtZTpGYyhNYyxmdW5jdGlvbih0KXt2YXIgZT1Fcyh0aGlzKTtlLmNhbm5vdEJlQUJhc2VVUkx8fChlLnBhdGg9W10seGMoZSx0K1wiXCIsbWMpKX0pLHNlYXJjaDpGYyhfYyxmdW5jdGlvbih0KXt2YXIgZT1Fcyh0aGlzKTtcIlwiPT0odD1TdHJpbmcodCkpP2UucXVlcnk9bnVsbDooXCI/XCI9PXQuY2hhckF0KDApJiYodD10LnNsaWNlKDEpKSxlLnF1ZXJ5PVwiXCIseGMoZSx0LFNjKSksd3MoZS5zZWFyY2hQYXJhbXMpLnVwZGF0ZVNlYXJjaFBhcmFtcyhlLnF1ZXJ5KX0pLHNlYXJjaFBhcmFtczpGYyhOYyksaGFzaDpGYyhDYyxmdW5jdGlvbih0KXt2YXIgZT1Fcyh0aGlzKTtcIlwiIT0odD1TdHJpbmcodCkpPyhcIiNcIj09dC5jaGFyQXQoMCkmJih0PXQuc2xpY2UoMSkpLGUuZnJhZ21lbnQ9XCJcIix4YyhlLHQsRWMpKTplLmZyYWdtZW50PW51bGx9KX0pLGV0KE9jLFwidG9KU09OXCIsZnVuY3Rpb24oKXtyZXR1cm4gUmMuY2FsbCh0aGlzKX0se2VudW1lcmFibGU6ITB9KSxldChPYyxcInRvU3RyaW5nXCIsZnVuY3Rpb24oKXtyZXR1cm4gUmMuY2FsbCh0aGlzKX0se2VudW1lcmFibGU6ITB9KSxtcyl7dmFyIEJjPW1zLmNyZWF0ZU9iamVjdFVSTCxEYz1tcy5yZXZva2VPYmplY3RVUkw7QmMmJmV0KEFjLFwiY3JlYXRlT2JqZWN0VVJMXCIsZnVuY3Rpb24odCl7cmV0dXJuIEJjLmFwcGx5KG1zLGFyZ3VtZW50cyl9KSxEYyYmZXQoQWMsXCJyZXZva2VPYmplY3RVUkxcIixmdW5jdGlvbih0KXtyZXR1cm4gRGMuYXBwbHkobXMsYXJndW1lbnRzKX0pfV9lKEFjLFwiVVJMXCIpLGt0KHtnbG9iYWw6ITAsZm9yY2VkOiFVdSxzaGFtOiFpfSx7VVJMOkFjfSksa3Qoe3RhcmdldDpcIlVSTFwiLHByb3RvOiEwLGVudW1lcmFibGU6ITB9LHt0b0pTT046ZnVuY3Rpb24oKXtyZXR1cm4gVVJMLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRoaXMpfX0pLGt0KHt0YXJnZXQ6XCJXZWFrTWFwXCIsc3RhdDohMH0se2Zyb206ZW59KSxrdCh7dGFyZ2V0OlwiV2Vha01hcFwiLHN0YXQ6ITB9LHtvZjpybn0pLGt0KHt0YXJnZXQ6XCJXZWFrTWFwXCIscHJvdG86ITAscmVhbDohMCxmb3JjZWQ6RH0se2RlbGV0ZUFsbDpmdW5jdGlvbigpe3JldHVybiBubi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fSksa3Qoe3RhcmdldDpcIldlYWtNYXBcIixwcm90bzohMCxyZWFsOiEwLGZvcmNlZDpEfSx7dXBzZXJ0OmNufSksQ3IoXCJXZWFrU2V0XCIsZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHQodGhpcyxhcmd1bWVudHMubGVuZ3RoP2FyZ3VtZW50c1swXTp2b2lkIDApfX0sbW8pLGt0KHt0YXJnZXQ6XCJXZWFrU2V0XCIscHJvdG86ITAscmVhbDohMCxmb3JjZWQ6RH0se2FkZEFsbDpmdW5jdGlvbigpe3JldHVybiBIaS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fSksa3Qoe3RhcmdldDpcIldlYWtTZXRcIixwcm90bzohMCxyZWFsOiEwLGZvcmNlZDpEfSx7ZGVsZXRlQWxsOmZ1bmN0aW9uKCl7cmV0dXJuIG5uLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19KSxrdCh7dGFyZ2V0OlwiV2Vha1NldFwiLHN0YXQ6ITB9LHtmcm9tOmVufSksa3Qoe3RhcmdldDpcIldlYWtTZXRcIixzdGF0OiEwfSx7b2Y6cm59KTt2YXIgcWMsemMsV2MsS2M9bi5Qcm9taXNlLEdjPS8oaXBob25lfGlwb2R8aXBhZCkuKmFwcGxld2Via2l0L2kudGVzdChRaSksJGM9bi5sb2NhdGlvbixWYz1uLnNldEltbWVkaWF0ZSxIYz1uLmNsZWFySW1tZWRpYXRlLFhjPW4ucHJvY2VzcyxZYz1uLk1lc3NhZ2VDaGFubmVsLEpjPW4uRGlzcGF0Y2gsUWM9MCxaYz17fSx0Zj1mdW5jdGlvbih0KXtpZihaYy5oYXNPd25Qcm9wZXJ0eSh0KSl7dmFyIGU9WmNbdF07ZGVsZXRlIFpjW3RdLGUoKX19LGVmPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbigpe3RmKHQpfX0scmY9ZnVuY3Rpb24odCl7dGYodC5kYXRhKX0sbmY9ZnVuY3Rpb24odCl7bi5wb3N0TWVzc2FnZSh0K1wiXCIsJGMucHJvdG9jb2wrXCIvL1wiKyRjLmhvc3QpfTtWYyYmSGN8fChWYz1mdW5jdGlvbih0KXtmb3IodmFyIGU9W10scj0xO2FyZ3VtZW50cy5sZW5ndGg+cjspZS5wdXNoKGFyZ3VtZW50c1tyKytdKTtyZXR1cm4gWmNbKytRY109ZnVuY3Rpb24oKXsoXCJmdW5jdGlvblwiPT10eXBlb2YgdD90OkZ1bmN0aW9uKHQpKS5hcHBseSh2b2lkIDAsZSl9LHFjKFFjKSxRY30sSGM9ZnVuY3Rpb24odCl7ZGVsZXRlIFpjW3RdfSxcInByb2Nlc3NcIj09bChYYyk/cWM9ZnVuY3Rpb24odCl7WGMubmV4dFRpY2soZWYodCkpfTpKYyYmSmMubm93P3FjPWZ1bmN0aW9uKHQpe0pjLm5vdyhlZih0KSl9OlljJiYhR2M/KFdjPSh6Yz1uZXcgWWMpLnBvcnQyLHpjLnBvcnQxLm9ubWVzc2FnZT1yZixxYz1adChXYy5wb3N0TWVzc2FnZSxXYywxKSk6IW4uYWRkRXZlbnRMaXN0ZW5lcnx8XCJmdW5jdGlvblwiIT10eXBlb2YgcG9zdE1lc3NhZ2V8fG4uaW1wb3J0U2NyaXB0c3x8byhuZil8fFwiZmlsZTpcIj09PSRjLnByb3RvY29sP3FjPVwib25yZWFkeXN0YXRlY2hhbmdlXCJpbiBFKFwic2NyaXB0XCIpP2Z1bmN0aW9uKHQpe1d0LmFwcGVuZENoaWxkKEUoXCJzY3JpcHRcIikpLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe1d0LnJlbW92ZUNoaWxkKHRoaXMpLHRmKHQpfX06ZnVuY3Rpb24odCl7c2V0VGltZW91dChlZih0KSwwKX06KHFjPW5mLG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixyZiwhMSkpKTt2YXIgb2YsYWYsdWYsc2YsY2YsZmYsbGYsaGYscGY9e3NldDpWYyxjbGVhcjpIY30sZGY9Ty5mLHZmPXBmLnNldCxnZj1uLk11dGF0aW9uT2JzZXJ2ZXJ8fG4uV2ViS2l0TXV0YXRpb25PYnNlcnZlcix5Zj1uLnByb2Nlc3MsbWY9bi5Qcm9taXNlLGJmPVwicHJvY2Vzc1wiPT1sKHlmKSx3Zj1kZihuLFwicXVldWVNaWNyb3Rhc2tcIiksU2Y9d2YmJndmLnZhbHVlO1NmfHwob2Y9ZnVuY3Rpb24oKXt2YXIgdCxlO2ZvcihiZiYmKHQ9eWYuZG9tYWluKSYmdC5leGl0KCk7YWY7KXtlPWFmLmZuLGFmPWFmLm5leHQ7dHJ5e2UoKX1jYXRjaCh0KXt0aHJvdyBhZj9zZigpOnVmPXZvaWQgMCx0fX11Zj12b2lkIDAsdCYmdC5lbnRlcigpfSxiZj9zZj1mdW5jdGlvbigpe3lmLm5leHRUaWNrKG9mKX06Z2YmJiFHYz8oY2Y9ITAsZmY9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIiksbmV3IGdmKG9mKS5vYnNlcnZlKGZmLHtjaGFyYWN0ZXJEYXRhOiEwfSksc2Y9ZnVuY3Rpb24oKXtmZi5kYXRhPWNmPSFjZn0pOm1mJiZtZi5yZXNvbHZlPyhsZj1tZi5yZXNvbHZlKHZvaWQgMCksaGY9bGYudGhlbixzZj1mdW5jdGlvbigpe2hmLmNhbGwobGYsb2YpfSk6c2Y9ZnVuY3Rpb24oKXt2Zi5jYWxsKG4sb2YpfSk7dmFyIEVmLHhmLEFmLE9mLFJmPVNmfHxmdW5jdGlvbih0KXt2YXIgZT17Zm46dCxuZXh0OnZvaWQgMH07dWYmJih1Zi5uZXh0PWUpLGFmfHwoYWY9ZSxzZigpKSx1Zj1lfSxqZj1mdW5jdGlvbih0KXt2YXIgZSxyO3RoaXMucHJvbWlzZT1uZXcgdChmdW5jdGlvbih0LG4pe2lmKHZvaWQgMCE9PWV8fHZvaWQgMCE9PXIpdGhyb3cgVHlwZUVycm9yKFwiQmFkIFByb21pc2UgY29uc3RydWN0b3JcIik7ZT10LHI9bn0pLHRoaXMucmVzb2x2ZT1RdChlKSx0aGlzLnJlamVjdD1RdChyKX0sUGY9e2Y6ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBqZih0KX19LElmPWZ1bmN0aW9uKHQsZSl7aWYoUih0KSxnKGUpJiZlLmNvbnN0cnVjdG9yPT09dClyZXR1cm4gZTt2YXIgcj1QZi5mKHQpO3JldHVybigwLHIucmVzb2x2ZSkoZSksci5wcm9taXNlfSxUZj1mdW5jdGlvbih0KXt0cnl7cmV0dXJue2Vycm9yOiExLHZhbHVlOnQoKX19Y2F0Y2godCl7cmV0dXJue2Vycm9yOiEwLHZhbHVlOnR9fX0sa2Y9cGYuc2V0LExmPUR0KFwic3BlY2llc1wiKSxVZj1cIlByb21pc2VcIixNZj10dC5nZXQsX2Y9dHQuc2V0LE5mPXR0LmdldHRlckZvcihVZiksQ2Y9S2MsRmY9bi5UeXBlRXJyb3IsQmY9bi5kb2N1bWVudCxEZj1uLnByb2Nlc3MscWY9b3QoXCJmZXRjaFwiKSx6Zj1QZi5mLFdmPXpmLEtmPVwicHJvY2Vzc1wiPT1sKERmKSxHZj0hIShCZiYmQmYuY3JlYXRlRXZlbnQmJm4uZGlzcGF0Y2hFdmVudCksJGY9XCJ1bmhhbmRsZWRyZWplY3Rpb25cIixWZj1JdChVZixmdW5jdGlvbigpe2lmKEMoQ2YpPT09U3RyaW5nKENmKSl7aWYoNjY9PT1yYSlyZXR1cm4hMDtpZighS2YmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudClyZXR1cm4hMH1pZihyYT49NTEmJi9uYXRpdmUgY29kZS8udGVzdChDZikpcmV0dXJuITE7dmFyIHQ9Q2YucmVzb2x2ZSgxKSxlPWZ1bmN0aW9uKHQpe3QoZnVuY3Rpb24oKXt9LGZ1bmN0aW9uKCl7fSl9O3JldHVybih0LmNvbnN0cnVjdG9yPXt9KVtMZl09ZSwhKHQudGhlbihmdW5jdGlvbigpe30paW5zdGFuY2VvZiBlKX0pLEhmPVZmfHwheXIoZnVuY3Rpb24odCl7Q2YuYWxsKHQpLmNhdGNoKGZ1bmN0aW9uKCl7fSl9KSxYZj1mdW5jdGlvbih0KXt2YXIgZTtyZXR1cm4hKCFnKHQpfHxcImZ1bmN0aW9uXCIhPXR5cGVvZihlPXQudGhlbikpJiZlfSxZZj1mdW5jdGlvbih0LGUscil7aWYoIWUubm90aWZpZWQpe2Uubm90aWZpZWQ9ITA7dmFyIG49ZS5yZWFjdGlvbnM7UmYoZnVuY3Rpb24oKXtmb3IodmFyIG89ZS52YWx1ZSxpPTE9PWUuc3RhdGUsYT0wO24ubGVuZ3RoPmE7KXt2YXIgdSxzLGMsZj1uW2ErK10sbD1pP2Yub2s6Zi5mYWlsLGg9Zi5yZXNvbHZlLHA9Zi5yZWplY3QsZD1mLmRvbWFpbjt0cnl7bD8oaXx8KDI9PT1lLnJlamVjdGlvbiYmdGwodCxlKSxlLnJlamVjdGlvbj0xKSwhMD09PWw/dT1vOihkJiZkLmVudGVyKCksdT1sKG8pLGQmJihkLmV4aXQoKSxjPSEwKSksdT09PWYucHJvbWlzZT9wKEZmKFwiUHJvbWlzZS1jaGFpbiBjeWNsZVwiKSk6KHM9WGYodSkpP3MuY2FsbCh1LGgscCk6aCh1KSk6cChvKX1jYXRjaCh0KXtkJiYhYyYmZC5leGl0KCkscCh0KX19ZS5yZWFjdGlvbnM9W10sZS5ub3RpZmllZD0hMSxyJiYhZS5yZWplY3Rpb24mJlFmKHQsZSl9KX19LEpmPWZ1bmN0aW9uKHQsZSxyKXt2YXIgbyxpO0dmPygobz1CZi5jcmVhdGVFdmVudChcIkV2ZW50XCIpKS5wcm9taXNlPWUsby5yZWFzb249cixvLmluaXRFdmVudCh0LCExLCEwKSxuLmRpc3BhdGNoRXZlbnQobykpOm89e3Byb21pc2U6ZSxyZWFzb246cn0sKGk9bltcIm9uXCIrdF0pP2kobyk6dD09PSRmJiZmdW5jdGlvbih0LGUpe3ZhciByPW4uY29uc29sZTtyJiZyLmVycm9yJiYoMT09PWFyZ3VtZW50cy5sZW5ndGg/ci5lcnJvcih0KTpyLmVycm9yKHQsZSkpfShcIlVuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvblwiLHIpfSxRZj1mdW5jdGlvbih0LGUpe2tmLmNhbGwobixmdW5jdGlvbigpe3ZhciByLG49ZS52YWx1ZTtpZihaZihlKSYmKHI9VGYoZnVuY3Rpb24oKXtLZj9EZi5lbWl0KFwidW5oYW5kbGVkUmVqZWN0aW9uXCIsbix0KTpKZigkZix0LG4pfSksZS5yZWplY3Rpb249S2Z8fFpmKGUpPzI6MSxyLmVycm9yKSl0aHJvdyByLnZhbHVlfSl9LFpmPWZ1bmN0aW9uKHQpe3JldHVybiAxIT09dC5yZWplY3Rpb24mJiF0LnBhcmVudH0sdGw9ZnVuY3Rpb24odCxlKXtrZi5jYWxsKG4sZnVuY3Rpb24oKXtLZj9EZi5lbWl0KFwicmVqZWN0aW9uSGFuZGxlZFwiLHQpOkpmKFwicmVqZWN0aW9uaGFuZGxlZFwiLHQsZS52YWx1ZSl9KX0sZWw9ZnVuY3Rpb24odCxlLHIsbil7cmV0dXJuIGZ1bmN0aW9uKG8pe3QoZSxyLG8sbil9fSxybD1mdW5jdGlvbih0LGUscixuKXtlLmRvbmV8fChlLmRvbmU9ITAsbiYmKGU9biksZS52YWx1ZT1yLGUuc3RhdGU9MixZZih0LGUsITApKX0sbmw9ZnVuY3Rpb24gdChlLHIsbixvKXtpZighci5kb25lKXtyLmRvbmU9ITAsbyYmKHI9byk7dHJ5e2lmKGU9PT1uKXRocm93IEZmKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7dmFyIGk9WGYobik7aT9SZihmdW5jdGlvbigpe3ZhciBvPXtkb25lOiExfTt0cnl7aS5jYWxsKG4sZWwodCxlLG8sciksZWwocmwsZSxvLHIpKX1jYXRjaCh0KXtybChlLG8sdCxyKX19KTooci52YWx1ZT1uLHIuc3RhdGU9MSxZZihlLHIsITEpKX1jYXRjaCh0KXtybChlLHtkb25lOiExfSx0LHIpfX19O1ZmJiYoQ2Y9ZnVuY3Rpb24odCl7X3IodGhpcyxDZixVZiksUXQodCksRWYuY2FsbCh0aGlzKTt2YXIgZT1NZih0aGlzKTt0cnl7dChlbChubCx0aGlzLGUpLGVsKHJsLHRoaXMsZSkpfWNhdGNoKHQpe3JsKHRoaXMsZSx0KX19LChFZj1mdW5jdGlvbih0KXtfZih0aGlzLHt0eXBlOlVmLGRvbmU6ITEsbm90aWZpZWQ6ITEscGFyZW50OiExLHJlYWN0aW9uczpbXSxyZWplY3Rpb246ITEsc3RhdGU6MCx2YWx1ZTp2b2lkIDB9KX0pLnByb3RvdHlwZT1GcihDZi5wcm90b3R5cGUse3RoZW46ZnVuY3Rpb24odCxlKXt2YXIgcj1OZih0aGlzKSxuPXpmKHNuKHRoaXMsQ2YpKTtyZXR1cm4gbi5vaz1cImZ1bmN0aW9uXCIhPXR5cGVvZiB0fHx0LG4uZmFpbD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlLG4uZG9tYWluPUtmP0RmLmRvbWFpbjp2b2lkIDAsci5wYXJlbnQ9ITAsci5yZWFjdGlvbnMucHVzaChuKSwwIT1yLnN0YXRlJiZZZih0aGlzLHIsITEpLG4ucHJvbWlzZX0sY2F0Y2g6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudGhlbih2b2lkIDAsdCl9fSkseGY9ZnVuY3Rpb24oKXt2YXIgdD1uZXcgRWYsZT1NZih0KTt0aGlzLnByb21pc2U9dCx0aGlzLnJlc29sdmU9ZWwobmwsdCxlKSx0aGlzLnJlamVjdD1lbChybCx0LGUpfSxQZi5mPXpmPWZ1bmN0aW9uKHQpe3JldHVybiB0PT09Q2Z8fHQ9PT1BZj9uZXcgeGYodCk6V2YodCl9LFwiZnVuY3Rpb25cIj09dHlwZW9mIEtjJiYoT2Y9S2MucHJvdG90eXBlLnRoZW4sZXQoS2MucHJvdG90eXBlLFwidGhlblwiLGZ1bmN0aW9uKHQsZSl7dmFyIHI9dGhpcztyZXR1cm4gbmV3IENmKGZ1bmN0aW9uKHQsZSl7T2YuY2FsbChyLHQsZSl9KS50aGVuKHQsZSl9LHt1bnNhZmU6ITB9KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBxZiYma3Qoe2dsb2JhbDohMCxlbnVtZXJhYmxlOiEwLGZvcmNlZDohMH0se2ZldGNoOmZ1bmN0aW9uKHQpe3JldHVybiBJZihDZixxZi5hcHBseShuLGFyZ3VtZW50cykpfX0pKSksa3Qoe2dsb2JhbDohMCx3cmFwOiEwLGZvcmNlZDpWZn0se1Byb21pc2U6Q2Z9KSxfZShDZixVZiwhMSksRHIoVWYpLEFmPW90KFVmKSxrdCh7dGFyZ2V0OlVmLHN0YXQ6ITAsZm9yY2VkOlZmfSx7cmVqZWN0OmZ1bmN0aW9uKHQpe3ZhciBlPXpmKHRoaXMpO3JldHVybiBlLnJlamVjdC5jYWxsKHZvaWQgMCx0KSxlLnByb21pc2V9fSksa3Qoe3RhcmdldDpVZixzdGF0OiEwLGZvcmNlZDpWZn0se3Jlc29sdmU6ZnVuY3Rpb24odCl7cmV0dXJuIElmKHRoaXMsdCl9fSksa3Qoe3RhcmdldDpVZixzdGF0OiEwLGZvcmNlZDpIZn0se2FsbDpmdW5jdGlvbih0KXt2YXIgZT10aGlzLHI9emYoZSksbj1yLnJlc29sdmUsbz1yLnJlamVjdCxpPVRmKGZ1bmN0aW9uKCl7dmFyIHI9UXQoZS5yZXNvbHZlKSxpPVtdLGE9MCx1PTE7TXIodCxmdW5jdGlvbih0KXt2YXIgcz1hKyssYz0hMTtpLnB1c2godm9pZCAwKSx1Kyssci5jYWxsKGUsdCkudGhlbihmdW5jdGlvbih0KXtjfHwoYz0hMCxpW3NdPXQsLS11fHxuKGkpKX0sbyl9KSwtLXV8fG4oaSl9KTtyZXR1cm4gaS5lcnJvciYmbyhpLnZhbHVlKSxyLnByb21pc2V9LHJhY2U6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxyPXpmKGUpLG49ci5yZWplY3Qsbz1UZihmdW5jdGlvbigpe3ZhciBvPVF0KGUucmVzb2x2ZSk7TXIodCxmdW5jdGlvbih0KXtvLmNhbGwoZSx0KS50aGVuKHIucmVzb2x2ZSxuKX0pfSk7cmV0dXJuIG8uZXJyb3ImJm4oby52YWx1ZSksci5wcm9taXNlfX0pLGt0KHt0YXJnZXQ6XCJQcm9taXNlXCIsc3RhdDohMH0se2FsbFNldHRsZWQ6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxyPVBmLmYoZSksbj1yLnJlc29sdmUsbz1yLnJlamVjdCxpPVRmKGZ1bmN0aW9uKCl7dmFyIHI9UXQoZS5yZXNvbHZlKSxvPVtdLGk9MCxhPTE7TXIodCxmdW5jdGlvbih0KXt2YXIgdT1pKysscz0hMTtvLnB1c2godm9pZCAwKSxhKyssci5jYWxsKGUsdCkudGhlbihmdW5jdGlvbih0KXtzfHwocz0hMCxvW3VdPXtzdGF0dXM6XCJmdWxmaWxsZWRcIix2YWx1ZTp0fSwtLWF8fG4obykpfSxmdW5jdGlvbih0KXtzfHwocz0hMCxvW3VdPXtzdGF0dXM6XCJyZWplY3RlZFwiLHJlYXNvbjp0fSwtLWF8fG4obykpfSl9KSwtLWF8fG4obyl9KTtyZXR1cm4gaS5lcnJvciYmbyhpLnZhbHVlKSxyLnByb21pc2V9fSk7dmFyIG9sPSEhS2MmJm8oZnVuY3Rpb24oKXtLYy5wcm90b3R5cGUuZmluYWxseS5jYWxsKHt0aGVuOmZ1bmN0aW9uKCl7fX0sZnVuY3Rpb24oKXt9KX0pO2t0KHt0YXJnZXQ6XCJQcm9taXNlXCIscHJvdG86ITAscmVhbDohMCxmb3JjZWQ6b2x9LHtmaW5hbGx5OmZ1bmN0aW9uKHQpe3ZhciBlPXNuKHRoaXMsb3QoXCJQcm9taXNlXCIpKSxyPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ7cmV0dXJuIHRoaXMudGhlbihyP2Z1bmN0aW9uKHIpe3JldHVybiBJZihlLHQoKSkudGhlbihmdW5jdGlvbigpe3JldHVybiByfSl9OnQscj9mdW5jdGlvbihyKXtyZXR1cm4gSWYoZSx0KCkpLnRoZW4oZnVuY3Rpb24oKXt0aHJvdyByfSl9OnQpfX0pLFwiZnVuY3Rpb25cIiE9dHlwZW9mIEtjfHxLYy5wcm90b3R5cGUuZmluYWxseXx8ZXQoS2MucHJvdG90eXBlLFwiZmluYWxseVwiLG90KFwiUHJvbWlzZVwiKS5wcm90b3R5cGUuZmluYWxseSk7dmFyIGlsPXR0LnNldCxhbD10dC5nZXR0ZXJGb3IoXCJBZ2dyZWdhdGVFcnJvclwiKSx1bD1mdW5jdGlvbih0LGUpe3ZhciByPXRoaXM7aWYoIShyIGluc3RhbmNlb2YgdWwpKXJldHVybiBuZXcgdWwodCxlKTtxZSYmKHI9cWUobmV3IEVycm9yKGUpLEllKHIpKSk7dmFyIG49W107cmV0dXJuIE1yKHQsbi5wdXNoLG4pLGk/aWwocix7ZXJyb3JzOm4sdHlwZTpcIkFnZ3JlZ2F0ZUVycm9yXCJ9KTpyLmVycm9ycz1uLHZvaWQgMCE9PWUmJkkocixcIm1lc3NhZ2VcIixTdHJpbmcoZSkpLHJ9O3VsLnByb3RvdHlwZT1IdChFcnJvci5wcm90b3R5cGUse2NvbnN0cnVjdG9yOmMoNSx1bCksbWVzc2FnZTpjKDUsXCJcIiksbmFtZTpjKDUsXCJBZ2dyZWdhdGVFcnJvclwiKX0pLGkmJlAuZih1bC5wcm90b3R5cGUsXCJlcnJvcnNcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGFsKHRoaXMpLmVycm9yc30sY29uZmlndXJhYmxlOiEwfSksa3Qoe2dsb2JhbDohMH0se0FnZ3JlZ2F0ZUVycm9yOnVsfSksa3Qoe3RhcmdldDpcIlByb21pc2VcIixzdGF0OiEwfSx7dHJ5OmZ1bmN0aW9uKHQpe3ZhciBlPVBmLmYodGhpcykscj1UZih0KTtyZXR1cm4oci5lcnJvcj9lLnJlamVjdDplLnJlc29sdmUpKHIudmFsdWUpLGUucHJvbWlzZX19KTt2YXIgc2w9XCJObyBvbmUgcHJvbWlzZSByZXNvbHZlZFwiO2t0KHt0YXJnZXQ6XCJQcm9taXNlXCIsc3RhdDohMH0se2FueTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLHI9UGYuZihlKSxuPXIucmVzb2x2ZSxvPXIucmVqZWN0LGk9VGYoZnVuY3Rpb24oKXt2YXIgcj1RdChlLnJlc29sdmUpLGk9W10sYT0wLHU9MSxzPSExO01yKHQsZnVuY3Rpb24odCl7dmFyIGM9YSsrLGY9ITE7aS5wdXNoKHZvaWQgMCksdSsrLHIuY2FsbChlLHQpLnRoZW4oZnVuY3Rpb24odCl7Znx8c3x8KHM9ITAsbih0KSl9LGZ1bmN0aW9uKHQpe2Z8fHN8fChmPSEwLGlbY109dCwtLXV8fG8obmV3KG90KFwiQWdncmVnYXRlRXJyb3JcIikpKGksc2wpKSl9KX0pLC0tdXx8byhuZXcob3QoXCJBZ2dyZWdhdGVFcnJvclwiKSkoaSxzbCkpfSk7cmV0dXJuIGkuZXJyb3ImJm8oaS52YWx1ZSksci5wcm9taXNlfX0pLGVlKFwiUHJvbWlzZVwiLFwiZmluYWxseVwiKTt2YXIgY2w9XCJVUkxTZWFyY2hQYXJhbXNcImluIHNlbGYsZmw9XCJTeW1ib2xcImluIHNlbGYmJlwiaXRlcmF0b3JcImluIFN5bWJvbCxsbD1cIkZpbGVSZWFkZXJcImluIHNlbGYmJlwiQmxvYlwiaW4gc2VsZiYmZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG5ldyBCbG9iLCEwfWNhdGNoKHQpe3JldHVybiExfX0oKSxobD1cIkZvcm1EYXRhXCJpbiBzZWxmLHBsPVwiQXJyYXlCdWZmZXJcImluIHNlbGY7aWYocGwpdmFyIGRsPVtcIltvYmplY3QgSW50OEFycmF5XVwiLFwiW29iamVjdCBVaW50OEFycmF5XVwiLFwiW29iamVjdCBVaW50OENsYW1wZWRBcnJheV1cIixcIltvYmplY3QgSW50MTZBcnJheV1cIixcIltvYmplY3QgVWludDE2QXJyYXldXCIsXCJbb2JqZWN0IEludDMyQXJyYXldXCIsXCJbb2JqZWN0IFVpbnQzMkFycmF5XVwiLFwiW29iamVjdCBGbG9hdDMyQXJyYXldXCIsXCJbb2JqZWN0IEZsb2F0NjRBcnJheV1cIl0sdmw9QXJyYXlCdWZmZXIuaXNWaWV3fHxmdW5jdGlvbih0KXtyZXR1cm4gdCYmZGwuaW5kZXhPZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkpPi0xfTtmdW5jdGlvbiBnbCh0KXtpZihcInN0cmluZ1wiIT10eXBlb2YgdCYmKHQ9U3RyaW5nKHQpKSwvW15hLXowLTlcXC0jJCUmJyorLl5fYHx+XS9pLnRlc3QodCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBmaWVsZCBuYW1lXCIpO3JldHVybiB0LnRvTG93ZXJDYXNlKCl9ZnVuY3Rpb24geWwodCl7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIHQmJih0PVN0cmluZyh0KSksdH1mdW5jdGlvbiBtbCh0KXt2YXIgZT17bmV4dDpmdW5jdGlvbigpe3ZhciBlPXQuc2hpZnQoKTtyZXR1cm57ZG9uZTp2b2lkIDA9PT1lLHZhbHVlOmV9fX07cmV0dXJuIGZsJiYoZVtTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIGV9KSxlfWZ1bmN0aW9uIGJsKHQpe3RoaXMubWFwPXt9LHQgaW5zdGFuY2VvZiBibD90LmZvckVhY2goZnVuY3Rpb24odCxlKXt0aGlzLmFwcGVuZChlLHQpfSx0aGlzKTpBcnJheS5pc0FycmF5KHQpP3QuZm9yRWFjaChmdW5jdGlvbih0KXt0aGlzLmFwcGVuZCh0WzBdLHRbMV0pfSx0aGlzKTp0JiZPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0KS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3RoaXMuYXBwZW5kKGUsdFtlXSl9LHRoaXMpfWZ1bmN0aW9uIHdsKHQpe2lmKHQuYm9keVVzZWQpcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoXCJBbHJlYWR5IHJlYWRcIikpO3QuYm9keVVzZWQ9ITB9ZnVuY3Rpb24gU2wodCl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGUscil7dC5vbmxvYWQ9ZnVuY3Rpb24oKXtlKHQucmVzdWx0KX0sdC5vbmVycm9yPWZ1bmN0aW9uKCl7cih0LmVycm9yKX19KX1mdW5jdGlvbiBFbCh0KXt2YXIgZT1uZXcgRmlsZVJlYWRlcixyPVNsKGUpO3JldHVybiBlLnJlYWRBc0FycmF5QnVmZmVyKHQpLHJ9ZnVuY3Rpb24geGwodCl7aWYodC5zbGljZSlyZXR1cm4gdC5zbGljZSgwKTt2YXIgZT1uZXcgVWludDhBcnJheSh0LmJ5dGVMZW5ndGgpO3JldHVybiBlLnNldChuZXcgVWludDhBcnJheSh0KSksZS5idWZmZXJ9ZnVuY3Rpb24gQWwoKXtyZXR1cm4gdGhpcy5ib2R5VXNlZD0hMSx0aGlzLl9pbml0Qm9keT1mdW5jdGlvbih0KXt2YXIgZTt0aGlzLl9ib2R5SW5pdD10LHQ/XCJzdHJpbmdcIj09dHlwZW9mIHQ/dGhpcy5fYm9keVRleHQ9dDpsbCYmQmxvYi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih0KT90aGlzLl9ib2R5QmxvYj10OmhsJiZGb3JtRGF0YS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih0KT90aGlzLl9ib2R5Rm9ybURhdGE9dDpjbCYmVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHQpP3RoaXMuX2JvZHlUZXh0PXQudG9TdHJpbmcoKTpwbCYmbGwmJihlPXQpJiZEYXRhVmlldy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihlKT8odGhpcy5fYm9keUFycmF5QnVmZmVyPXhsKHQuYnVmZmVyKSx0aGlzLl9ib2R5SW5pdD1uZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSkpOnBsJiYoQXJyYXlCdWZmZXIucHJvdG90eXBlLmlzUHJvdG90eXBlT2YodCl8fHZsKHQpKT90aGlzLl9ib2R5QXJyYXlCdWZmZXI9eGwodCk6dGhpcy5fYm9keVRleHQ9dD1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCk6dGhpcy5fYm9keVRleHQ9XCJcIix0aGlzLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpfHwoXCJzdHJpbmdcIj09dHlwZW9mIHQ/dGhpcy5oZWFkZXJzLnNldChcImNvbnRlbnQtdHlwZVwiLFwidGV4dC9wbGFpbjtjaGFyc2V0PVVURi04XCIpOnRoaXMuX2JvZHlCbG9iJiZ0aGlzLl9ib2R5QmxvYi50eXBlP3RoaXMuaGVhZGVycy5zZXQoXCJjb250ZW50LXR5cGVcIix0aGlzLl9ib2R5QmxvYi50eXBlKTpjbCYmVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHQpJiZ0aGlzLmhlYWRlcnMuc2V0KFwiY29udGVudC10eXBlXCIsXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOFwiKSl9LGxsJiYodGhpcy5ibG9iPWZ1bmN0aW9uKCl7dmFyIHQ9d2wodGhpcyk7aWYodClyZXR1cm4gdDtpZih0aGlzLl9ib2R5QmxvYilyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlCbG9iKTtpZih0aGlzLl9ib2R5QXJyYXlCdWZmZXIpcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSkpO2lmKHRoaXMuX2JvZHlGb3JtRGF0YSl0aHJvdyBuZXcgRXJyb3IoXCJjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIGJsb2JcIik7cmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keVRleHRdKSl9LHRoaXMuYXJyYXlCdWZmZXI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYm9keUFycmF5QnVmZmVyP3dsKHRoaXMpfHxQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUFycmF5QnVmZmVyKTp0aGlzLmJsb2IoKS50aGVuKEVsKX0pLHRoaXMudGV4dD1mdW5jdGlvbigpe3ZhciB0PXdsKHRoaXMpO2lmKHQpcmV0dXJuIHQ7aWYodGhpcy5fYm9keUJsb2IpcmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBlPW5ldyBGaWxlUmVhZGVyLHI9U2woZSk7cmV0dXJuIGUucmVhZEFzVGV4dCh0KSxyfSh0aGlzLl9ib2R5QmxvYik7aWYodGhpcy5fYm9keUFycmF5QnVmZmVyKXJldHVybiBQcm9taXNlLnJlc29sdmUoZnVuY3Rpb24odCl7Zm9yKHZhciBlPW5ldyBVaW50OEFycmF5KHQpLHI9bmV3IEFycmF5KGUubGVuZ3RoKSxuPTA7bjxlLmxlbmd0aDtuKyspcltuXT1TdHJpbmcuZnJvbUNoYXJDb2RlKGVbbl0pO3JldHVybiByLmpvaW4oXCJcIil9KHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikpO2lmKHRoaXMuX2JvZHlGb3JtRGF0YSl0aHJvdyBuZXcgRXJyb3IoXCJjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIHRleHRcIik7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5VGV4dCl9LGhsJiYodGhpcy5mb3JtRGF0YT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRleHQoKS50aGVuKGpsKX0pLHRoaXMuanNvbj1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRleHQoKS50aGVuKEpTT04ucGFyc2UpfSx0aGlzfWJsLnByb3RvdHlwZS5hcHBlbmQ9ZnVuY3Rpb24odCxlKXt0PWdsKHQpLGU9eWwoZSk7dmFyIHI9dGhpcy5tYXBbdF07dGhpcy5tYXBbdF09cj9yK1wiLCBcIitlOmV9LGJsLnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24odCl7ZGVsZXRlIHRoaXMubWFwW2dsKHQpXX0sYmwucHJvdG90eXBlLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gdD1nbCh0KSx0aGlzLmhhcyh0KT90aGlzLm1hcFt0XTpudWxsfSxibC5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShnbCh0KSl9LGJsLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24odCxlKXt0aGlzLm1hcFtnbCh0KV09eWwoZSl9LGJsLnByb3RvdHlwZS5mb3JFYWNoPWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByIGluIHRoaXMubWFwKXRoaXMubWFwLmhhc093blByb3BlcnR5KHIpJiZ0LmNhbGwoZSx0aGlzLm1hcFtyXSxyLHRoaXMpfSxibC5wcm90b3R5cGUua2V5cz1mdW5jdGlvbigpe3ZhciB0PVtdO3JldHVybiB0aGlzLmZvckVhY2goZnVuY3Rpb24oZSxyKXt0LnB1c2gocil9KSxtbCh0KX0sYmwucHJvdG90eXBlLnZhbHVlcz1mdW5jdGlvbigpe3ZhciB0PVtdO3JldHVybiB0aGlzLmZvckVhY2goZnVuY3Rpb24oZSl7dC5wdXNoKGUpfSksbWwodCl9LGJsLnByb3RvdHlwZS5lbnRyaWVzPWZ1bmN0aW9uKCl7dmFyIHQ9W107cmV0dXJuIHRoaXMuZm9yRWFjaChmdW5jdGlvbihlLHIpe3QucHVzaChbcixlXSl9KSxtbCh0KX0sZmwmJihibC5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXT1ibC5wcm90b3R5cGUuZW50cmllcyk7dmFyIE9sPVtcIkRFTEVURVwiLFwiR0VUXCIsXCJIRUFEXCIsXCJPUFRJT05TXCIsXCJQT1NUXCIsXCJQVVRcIl07ZnVuY3Rpb24gUmwodCxlKXt2YXIgcixuLG89KGU9ZXx8e30pLmJvZHk7aWYodCBpbnN0YW5jZW9mIFJsKXtpZih0LmJvZHlVc2VkKXRocm93IG5ldyBUeXBlRXJyb3IoXCJBbHJlYWR5IHJlYWRcIik7dGhpcy51cmw9dC51cmwsdGhpcy5jcmVkZW50aWFscz10LmNyZWRlbnRpYWxzLGUuaGVhZGVyc3x8KHRoaXMuaGVhZGVycz1uZXcgYmwodC5oZWFkZXJzKSksdGhpcy5tZXRob2Q9dC5tZXRob2QsdGhpcy5tb2RlPXQubW9kZSx0aGlzLnNpZ25hbD10LnNpZ25hbCxvfHxudWxsPT10Ll9ib2R5SW5pdHx8KG89dC5fYm9keUluaXQsdC5ib2R5VXNlZD0hMCl9ZWxzZSB0aGlzLnVybD1TdHJpbmcodCk7aWYodGhpcy5jcmVkZW50aWFscz1lLmNyZWRlbnRpYWxzfHx0aGlzLmNyZWRlbnRpYWxzfHxcInNhbWUtb3JpZ2luXCIsIWUuaGVhZGVycyYmdGhpcy5oZWFkZXJzfHwodGhpcy5oZWFkZXJzPW5ldyBibChlLmhlYWRlcnMpKSx0aGlzLm1ldGhvZD0obj0ocj1lLm1ldGhvZHx8dGhpcy5tZXRob2R8fFwiR0VUXCIpLnRvVXBwZXJDYXNlKCksT2wuaW5kZXhPZihuKT4tMT9uOnIpLHRoaXMubW9kZT1lLm1vZGV8fHRoaXMubW9kZXx8bnVsbCx0aGlzLnNpZ25hbD1lLnNpZ25hbHx8dGhpcy5zaWduYWwsdGhpcy5yZWZlcnJlcj1udWxsLChcIkdFVFwiPT09dGhpcy5tZXRob2R8fFwiSEVBRFwiPT09dGhpcy5tZXRob2QpJiZvKXRocm93IG5ldyBUeXBlRXJyb3IoXCJCb2R5IG5vdCBhbGxvd2VkIGZvciBHRVQgb3IgSEVBRCByZXF1ZXN0c1wiKTt0aGlzLl9pbml0Qm9keShvKX1mdW5jdGlvbiBqbCh0KXt2YXIgZT1uZXcgRm9ybURhdGE7cmV0dXJuIHQudHJpbSgpLnNwbGl0KFwiJlwiKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2lmKHQpe3ZhciByPXQuc3BsaXQoXCI9XCIpLG49ci5zaGlmdCgpLnJlcGxhY2UoL1xcKy9nLFwiIFwiKSxvPXIuam9pbihcIj1cIikucmVwbGFjZSgvXFwrL2csXCIgXCIpO2UuYXBwZW5kKGRlY29kZVVSSUNvbXBvbmVudChuKSxkZWNvZGVVUklDb21wb25lbnQobykpfX0pLGV9ZnVuY3Rpb24gUGwodCxlKXtlfHwoZT17fSksdGhpcy50eXBlPVwiZGVmYXVsdFwiLHRoaXMuc3RhdHVzPXZvaWQgMD09PWUuc3RhdHVzPzIwMDplLnN0YXR1cyx0aGlzLm9rPXRoaXMuc3RhdHVzPj0yMDAmJnRoaXMuc3RhdHVzPDMwMCx0aGlzLnN0YXR1c1RleHQ9XCJzdGF0dXNUZXh0XCJpbiBlP2Uuc3RhdHVzVGV4dDpcIk9LXCIsdGhpcy5oZWFkZXJzPW5ldyBibChlLmhlYWRlcnMpLHRoaXMudXJsPWUudXJsfHxcIlwiLHRoaXMuX2luaXRCb2R5KHQpfVJsLnByb3RvdHlwZS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBuZXcgUmwodGhpcyx7Ym9keTp0aGlzLl9ib2R5SW5pdH0pfSxBbC5jYWxsKFJsLnByb3RvdHlwZSksQWwuY2FsbChQbC5wcm90b3R5cGUpLFBsLnByb3RvdHlwZS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBuZXcgUGwodGhpcy5fYm9keUluaXQse3N0YXR1czp0aGlzLnN0YXR1cyxzdGF0dXNUZXh0OnRoaXMuc3RhdHVzVGV4dCxoZWFkZXJzOm5ldyBibCh0aGlzLmhlYWRlcnMpLHVybDp0aGlzLnVybH0pfSxQbC5lcnJvcj1mdW5jdGlvbigpe3ZhciB0PW5ldyBQbChudWxsLHtzdGF0dXM6MCxzdGF0dXNUZXh0OlwiXCJ9KTtyZXR1cm4gdC50eXBlPVwiZXJyb3JcIix0fTt2YXIgSWw9WzMwMSwzMDIsMzAzLDMwNywzMDhdO1BsLnJlZGlyZWN0PWZ1bmN0aW9uKHQsZSl7aWYoLTE9PT1JbC5pbmRleE9mKGUpKXRocm93IG5ldyBSYW5nZUVycm9yKFwiSW52YWxpZCBzdGF0dXMgY29kZVwiKTtyZXR1cm4gbmV3IFBsKG51bGwse3N0YXR1czplLGhlYWRlcnM6e2xvY2F0aW9uOnR9fSl9O3ZhciBUbD1zZWxmLkRPTUV4Y2VwdGlvbjt0cnl7bmV3IFRsfWNhdGNoKHQpeyhUbD1mdW5jdGlvbih0LGUpe3RoaXMubWVzc2FnZT10LHRoaXMubmFtZT1lO3ZhciByPUVycm9yKHQpO3RoaXMuc3RhY2s9ci5zdGFja30pLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSksVGwucHJvdG90eXBlLmNvbnN0cnVjdG9yPVRsfWZ1bmN0aW9uIGtsKHQsZSl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHIsbil7dmFyIG89bmV3IFJsKHQsZSk7aWYoby5zaWduYWwmJm8uc2lnbmFsLmFib3J0ZWQpcmV0dXJuIG4obmV3IFRsKFwiQWJvcnRlZFwiLFwiQWJvcnRFcnJvclwiKSk7dmFyIGk9bmV3IFhNTEh0dHBSZXF1ZXN0O2Z1bmN0aW9uIGEoKXtpLmFib3J0KCl9aS5vbmxvYWQ9ZnVuY3Rpb24oKXt2YXIgdCxlLG49e3N0YXR1czppLnN0YXR1cyxzdGF0dXNUZXh0Omkuc3RhdHVzVGV4dCxoZWFkZXJzOih0PWkuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCl8fFwiXCIsZT1uZXcgYmwsdC5yZXBsYWNlKC9cXHI/XFxuW1xcdCBdKy9nLFwiIFwiKS5zcGxpdCgvXFxyP1xcbi8pLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIHI9dC5zcGxpdChcIjpcIiksbj1yLnNoaWZ0KCkudHJpbSgpO2lmKG4pe3ZhciBvPXIuam9pbihcIjpcIikudHJpbSgpO2UuYXBwZW5kKG4sbyl9fSksZSl9O24udXJsPVwicmVzcG9uc2VVUkxcImluIGk/aS5yZXNwb25zZVVSTDpuLmhlYWRlcnMuZ2V0KFwiWC1SZXF1ZXN0LVVSTFwiKSxyKG5ldyBQbChcInJlc3BvbnNlXCJpbiBpP2kucmVzcG9uc2U6aS5yZXNwb25zZVRleHQsbikpfSxpLm9uZXJyb3I9ZnVuY3Rpb24oKXtuKG5ldyBUeXBlRXJyb3IoXCJOZXR3b3JrIHJlcXVlc3QgZmFpbGVkXCIpKX0saS5vbnRpbWVvdXQ9ZnVuY3Rpb24oKXtuKG5ldyBUeXBlRXJyb3IoXCJOZXR3b3JrIHJlcXVlc3QgZmFpbGVkXCIpKX0saS5vbmFib3J0PWZ1bmN0aW9uKCl7bihuZXcgVGwoXCJBYm9ydGVkXCIsXCJBYm9ydEVycm9yXCIpKX0saS5vcGVuKG8ubWV0aG9kLG8udXJsLCEwKSxcImluY2x1ZGVcIj09PW8uY3JlZGVudGlhbHM/aS53aXRoQ3JlZGVudGlhbHM9ITA6XCJvbWl0XCI9PT1vLmNyZWRlbnRpYWxzJiYoaS53aXRoQ3JlZGVudGlhbHM9ITEpLFwicmVzcG9uc2VUeXBlXCJpbiBpJiZsbCYmKGkucmVzcG9uc2VUeXBlPVwiYmxvYlwiKSxvLmhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih0LGUpe2kuc2V0UmVxdWVzdEhlYWRlcihlLHQpfSksby5zaWduYWwmJihvLnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIixhKSxpLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpezQ9PT1pLnJlYWR5U3RhdGUmJm8uc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLGEpfSksaS5zZW5kKHZvaWQgMD09PW8uX2JvZHlJbml0P251bGw6by5fYm9keUluaXQpfSl9a2wucG9seWZpbGw9ITAsc2VsZi5mZXRjaHx8KHNlbGYuZmV0Y2g9a2wsc2VsZi5IZWFkZXJzPWJsLHNlbGYuUmVxdWVzdD1SbCxzZWxmLlJlc3BvbnNlPVBsKTt2YXIgTGw9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxVbD1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LE1sPU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7ZnVuY3Rpb24gX2wodCl7aWYobnVsbD09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWRcIik7cmV0dXJuIE9iamVjdCh0KX12YXIgTmw9ZnVuY3Rpb24oKXt0cnl7aWYoIU9iamVjdC5hc3NpZ24pcmV0dXJuITE7dmFyIHQ9bmV3IFN0cmluZyhcImFiY1wiKTtpZih0WzVdPVwiZGVcIixcIjVcIj09PU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHQpWzBdKXJldHVybiExO2Zvcih2YXIgZT17fSxyPTA7cjwxMDtyKyspZVtcIl9cIitTdHJpbmcuZnJvbUNoYXJDb2RlKHIpXT1yO2lmKFwiMDEyMzQ1Njc4OVwiIT09T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZSkubWFwKGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfSkuam9pbihcIlwiKSlyZXR1cm4hMTt2YXIgbj17fTtyZXR1cm5cImFiY2RlZmdoaWprbG1ub3BxcnN0XCIuc3BsaXQoXCJcIikuZm9yRWFjaChmdW5jdGlvbih0KXtuW3RdPXR9KSxcImFiY2RlZmdoaWprbG1ub3BxcnN0XCI9PT1PYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LG4pKS5qb2luKFwiXCIpfWNhdGNoKHQpe3JldHVybiExfX0oKT9PYmplY3QuYXNzaWduOmZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByLG4sbz1fbCh0KSxpPTE7aTxhcmd1bWVudHMubGVuZ3RoO2krKyl7Zm9yKHZhciBhIGluIHI9T2JqZWN0KGFyZ3VtZW50c1tpXSkpVWwuY2FsbChyLGEpJiYob1thXT1yW2FdKTtpZihMbCl7bj1MbChyKTtmb3IodmFyIHU9MDt1PG4ubGVuZ3RoO3UrKylNbC5jYWxsKHIsblt1XSkmJihvW25bdV1dPXJbblt1XV0pfX1yZXR1cm4gb307T2JqZWN0LmFzc2lnbj1ObH0oKTtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBUT0RPOiB0aGlzIGlzIHNwZWNpYWwgYmVjYXVzZSBpdCBnZXRzIGltcG9ydGVkIGR1cmluZyBidWlsZC5cbnZhciBSZWFjdFZlcnNpb24gPSAnMTcuMC4yJztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XG5leHBvcnRzLlN0cmljdE1vZGUgPSAweGVhY2M7XG5leHBvcnRzLlByb2ZpbGVyID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG5leHBvcnRzLlN1c3BlbnNlID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgZXhwb3J0cy5GcmFnbWVudCA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgZXhwb3J0cy5TdHJpY3RNb2RlID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBleHBvcnRzLlByb2ZpbGVyID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgZXhwb3J0cy5TdXNwZW5zZSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGRpc3BhdGNoZXIuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgYmF0Y2gncyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgaG93IGxvbmcgYW4gdXBkYXRlXG4gKiBzaG91bGQgc3VzcGVuZCBmb3IgaWYgaXQgbmVlZHMgdG8uXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyA9IHtcbiAgdHJhbnNpdGlvbjogMFxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBvd25lci5cbiAqXG4gKiBUaGUgY3VycmVudCBvd25lciBpcyB0aGUgY29tcG9uZW50IHdobyBzaG91bGQgb3duIGFueSBjb21wb25lbnRzIHRoYXQgYXJlXG4gKiBjdXJyZW50bHkgYmVpbmcgY29uc3RydWN0ZWQuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IHt9O1xudmFyIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBudWxsO1xuZnVuY3Rpb24gc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKSB7XG4gIHtcbiAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gIH1cbn1cblxue1xuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZSA9IGZ1bmN0aW9uIChzdGFjaykge1xuICAgIHtcbiAgICAgIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBzdGFjaztcbiAgICB9XG4gIH07IC8vIFN0YWNrIGltcGxlbWVudGF0aW9uIGluamVjdGVkIGJ5IHRoZSBjdXJyZW50IHJlbmRlcmVyLlxuXG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2sgPSBudWxsO1xuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhY2sgPSAnJzsgLy8gQWRkIGFuIGV4dHJhIHRvcCBmcmFtZSB3aGlsZSBhbiBlbGVtZW50IGlzIGJlaW5nIHZhbGlkYXRlZFxuXG4gICAgaWYgKGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUpIHtcbiAgICAgIHN0YWNrICs9IGN1cnJlbnRFeHRyYVN0YWNrRnJhbWU7XG4gICAgfSAvLyBEZWxlZ2F0ZSB0byB0aGUgaW5qZWN0ZWQgcmVuZGVyZXItc3BlY2lmaWMgaW1wbGVtZW50YXRpb25cblxuXG4gICAgdmFyIGltcGwgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjaztcblxuICAgIGlmIChpbXBsKSB7XG4gICAgICBzdGFjayArPSBpbXBsKCkgfHwgJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xuICB9O1xufVxuXG4vKipcbiAqIFVzZWQgYnkgYWN0KCkgdG8gdHJhY2sgd2hldGhlciB5b3UncmUgaW5zaWRlIGFuIGFjdCgpIHNjb3BlLlxuICovXG52YXIgSXNTb21lUmVuZGVyZXJBY3RpbmcgPSB7XG4gIGN1cnJlbnQ6IGZhbHNlXG59O1xuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSB7XG4gIFJlYWN0Q3VycmVudERpc3BhdGNoZXI6IFJlYWN0Q3VycmVudERpc3BhdGNoZXIsXG4gIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOiBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyxcbiAgUmVhY3RDdXJyZW50T3duZXI6IFJlYWN0Q3VycmVudE93bmVyLFxuICBJc1NvbWVSZW5kZXJlckFjdGluZzogSXNTb21lUmVuZGVyZXJBY3RpbmcsXG4gIC8vIFVzZWQgYnkgcmVuZGVyZXJzIHRvIGF2b2lkIGJ1bmRsaW5nIG9iamVjdC1hc3NpZ24gdHdpY2UgaW4gVU1EIGJ1bmRsZXM6XG4gIGFzc2lnbjogX2Fzc2lnblxufTtcblxue1xuICBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbn1cblxuLy8gYnkgY2FsbHMgdG8gdGhlc2UgbWV0aG9kcyBieSBhIEJhYmVsIHBsdWdpbi5cbi8vXG4vLyBJbiBQUk9EIChvciBpbiBwYWNrYWdlcyB3aXRob3V0IGFjY2VzcyB0byBSZWFjdCBpbnRlcm5hbHMpLFxuLy8gdGhleSBhcmUgbGVmdCBhcyB0aGV5IGFyZSBpbnN0ZWFkLlxuXG5mdW5jdGlvbiB3YXJuKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCd3YXJuJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbnZhciBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQgPSB7fTtcblxuZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAge1xuICAgIHZhciBfY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IF9jb25zdHJ1Y3RvciAmJiAoX2NvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IF9jb25zdHJ1Y3Rvci5uYW1lKSB8fCAnUmVhY3RDbGFzcyc7XG4gICAgdmFyIHdhcm5pbmdLZXkgPSBjb21wb25lbnROYW1lICsgXCIuXCIgKyBjYWxsZXJOYW1lO1xuXG4gICAgaWYgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVycm9yKFwiQ2FuJ3QgY2FsbCAlcyBvbiBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB5ZXQgbW91bnRlZC4gXCIgKyAnVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgbWlnaHQgaW5kaWNhdGUgYSBidWcgaW4geW91ciBhcHBsaWNhdGlvbi4gJyArICdJbnN0ZWFkLCBhc3NpZ24gdG8gYHRoaXMuc3RhdGVgIGRpcmVjdGx5IG9yIGRlZmluZSBhIGBzdGF0ZSA9IHt9O2AgJyArICdjbGFzcyBwcm9wZXJ0eSB3aXRoIHRoZSBkZXNpcmVkIHN0YXRlIGluIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xuICB9XG59XG4vKipcbiAqIFRoaXMgaXMgdGhlIGFic3RyYWN0IEFQSSBmb3IgYW4gdXBkYXRlIHF1ZXVlLlxuICovXG5cblxudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHRoaXMgY29tcG9zaXRlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB3ZSB3YW50IHRvIHRlc3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbW91bnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBmaW5hbFxuICAgKi9cbiAgaXNNb3VudGVkOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAgICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAgICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gICAqXG4gICAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAgICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVwbGFjZXMgYWxsIG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIG9yIGBzZXRTdGF0ZWAgdG8gbXV0YXRlIHN0YXRlLlxuICAgKiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gICAqXG4gICAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gICAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVTdGF0ZSBOZXh0IHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdyZXBsYWNlU3RhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIFRoaXMgb25seSBleGlzdHMgYmVjYXVzZSBfcGVuZGluZ1N0YXRlIGlzXG4gICAqIGludGVybmFsLiBUaGlzIHByb3ZpZGVzIGEgbWVyZ2luZyBzdHJhdGVneSB0aGF0IGlzIG5vdCBhdmFpbGFibGUgdG8gZGVlcFxuICAgKiBwcm9wZXJ0aWVzIHdoaWNoIGlzIGNvbmZ1c2luZy4gVE9ETzogRXhwb3NlIHBlbmRpbmdTdGF0ZSBvciBkb24ndCB1c2UgaXRcbiAgICogZHVyaW5nIHRoZSBtZXJnZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IE5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3NldFN0YXRlJyk7XG4gIH1cbn07XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG57XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuXG5cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0OyAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cblxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG5Db21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcbi8qKlxuICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyB0byBtdXRhdGVcbiAqIHN0YXRlLiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCB3aWxsIHJ1biBzeW5jaHJvbm91c2x5LFxuICogYXMgdGhleSBtYXkgZXZlbnR1YWxseSBiZSBiYXRjaGVkIHRvZ2V0aGVyLiAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsXG4gKiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgY2FsbCB0byBzZXRTdGF0ZSBpcyBhY3R1YWxseVxuICogY29tcGxldGVkLlxuICpcbiAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwcm92aWRlZCB0byBzZXRTdGF0ZSwgaXQgd2lsbCBiZSBjYWxsZWQgYXQgc29tZSBwb2ludCBpblxuICogdGhlIGZ1dHVyZSAobm90IHN5bmNocm9ub3VzbHkpLiBJdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSB1cCB0byBkYXRlXG4gKiBjb21wb25lbnQgYXJndW1lbnRzIChzdGF0ZSwgcHJvcHMsIGNvbnRleHQpLiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGRpZmZlcmVudFxuICogZnJvbSB0aGlzLiogYmVjYXVzZSB5b3VyIGZ1bmN0aW9uIG1heSBiZSBjYWxsZWQgYWZ0ZXIgcmVjZWl2ZVByb3BzIGJ1dCBiZWZvcmVcbiAqIHNob3VsZENvbXBvbmVudFVwZGF0ZSwgYW5kIHRoaXMgbmV3IHN0YXRlLCBwcm9wcywgYW5kIGNvbnRleHQgd2lsbCBub3QgeWV0IGJlXG4gKiBhc3NpZ25lZCB0byB0aGlzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIG9yIGZ1bmN0aW9uIHRvXG4gKiAgICAgICAgcHJvZHVjZSBuZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xuICBpZiAoISh0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnZnVuY3Rpb24nIHx8IHBhcnRpYWxTdGF0ZSA9PSBudWxsKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcInNldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLlwiICk7XG4gICAgfVxuICB9XG5cbiAgdGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCAnc2V0U3RhdGUnKTtcbn07XG4vKipcbiAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICpcbiAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICpcbiAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gKlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciB1cGRhdGUgaXMgY29tcGxldGUuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLCBjYWxsYmFjaywgJ2ZvcmNlVXBkYXRlJyk7XG59O1xuLyoqXG4gKiBEZXByZWNhdGVkIEFQSXMuIFRoZXNlIEFQSXMgdXNlZCB0byBleGlzdCBvbiBjbGFzc2ljIFJlYWN0IGNsYXNzZXMgYnV0IHNpbmNlXG4gKiB3ZSB3b3VsZCBsaWtlIHRvIGRlcHJlY2F0ZSB0aGVtLCB3ZSdyZSBub3QgZ29pbmcgdG8gbW92ZSB0aGVtIG92ZXIgdG8gdGhpc1xuICogbW9kZXJuIGJhc2UgY2xhc3MuIEluc3RlYWQsIHdlIGRlZmluZSBhIGdldHRlciB0aGF0IHdhcm5zIGlmIGl0J3MgYWNjZXNzZWQuXG4gKi9cblxuXG57XG4gIHZhciBkZXByZWNhdGVkQVBJcyA9IHtcbiAgICBpc01vdW50ZWQ6IFsnaXNNb3VudGVkJywgJ0luc3RlYWQsIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCBzdWJzY3JpcHRpb25zIGFuZCBwZW5kaW5nIHJlcXVlc3RzIGluICcgKyAnY29tcG9uZW50V2lsbFVubW91bnQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuJ10sXG4gICAgcmVwbGFjZVN0YXRlOiBbJ3JlcGxhY2VTdGF0ZScsICdSZWZhY3RvciB5b3VyIGNvZGUgdG8gdXNlIHNldFN0YXRlIGluc3RlYWQgKHNlZSAnICsgJ2h0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzIzNikuJ11cbiAgfTtcblxuICB2YXIgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIGluZm8pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgbWV0aG9kTmFtZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJyVzKC4uLikgaXMgZGVwcmVjYXRlZCBpbiBwbGFpbiBKYXZhU2NyaXB0IFJlYWN0IGNsYXNzZXMuICVzJywgaW5mb1swXSwgaW5mb1sxXSk7XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBmbk5hbWUgaW4gZGVwcmVjYXRlZEFQSXMpIHtcbiAgICBpZiAoZGVwcmVjYXRlZEFQSXMuaGFzT3duUHJvcGVydHkoZm5OYW1lKSkge1xuICAgICAgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKGZuTmFtZSwgZGVwcmVjYXRlZEFQSXNbZm5OYW1lXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIENvbXBvbmVudER1bW15KCkge31cblxuQ29tcG9uZW50RHVtbXkucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbi8qKlxuICogQ29udmVuaWVuY2UgY29tcG9uZW50IHdpdGggZGVmYXVsdCBzaGFsbG93IGVxdWFsaXR5IGNoZWNrIGZvciBzQ1UuXG4gKi9cblxuZnVuY3Rpb24gUHVyZUNvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG52YXIgcHVyZUNvbXBvbmVudFByb3RvdHlwZSA9IFB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudER1bW15KCk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUHVyZUNvbXBvbmVudDsgLy8gQXZvaWQgYW4gZXh0cmEgcHJvdG90eXBlIGp1bXAgZm9yIHRoZXNlIG1ldGhvZHMuXG5cbl9hc3NpZ24ocHVyZUNvbXBvbmVudFByb3RvdHlwZSwgQ29tcG9uZW50LnByb3RvdHlwZSk7XG5cbnB1cmVDb21wb25lbnRQcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuXG4vLyBhbiBpbW11dGFibGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgbXV0YWJsZSB2YWx1ZVxuZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuICB2YXIgcmVmT2JqZWN0ID0ge1xuICAgIGN1cnJlbnQ6IG51bGxcbiAgfTtcblxuICB7XG4gICAgT2JqZWN0LnNlYWwocmVmT2JqZWN0KTtcbiAgfVxuXG4gIHJldHVybiByZWZPYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIGV4cG9ydHMuUHJvZmlsZXI6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgZXhwb3J0cy5TdHJpY3RNb2RlOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgZXhwb3J0cy5TdXNwZW5zZTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZykge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIGNvbmZpZy5fX3NlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IGNvbmZpZy5fX3NlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgY29tcG9uZW50TmFtZSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgcmVmID0gbnVsbDtcbiAgdmFyIHNlbGYgPSBudWxsO1xuICB2YXIgc291cmNlID0gbnVsbDtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcblxuICAgICAge1xuICAgICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIHNlbGYgPSBjb25maWcuX19zZWxmID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc2VsZjtcbiAgICBzb3VyY2UgPSBjb25maWcuX19zb3VyY2UgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zb3VyY2U7IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHtcbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbn1cbmZ1bmN0aW9uIGNsb25lQW5kUmVwbGFjZUtleShvbGRFbGVtZW50LCBuZXdLZXkpIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBSZWFjdEVsZW1lbnQob2xkRWxlbWVudC50eXBlLCBuZXdLZXksIG9sZEVsZW1lbnQucmVmLCBvbGRFbGVtZW50Ll9zZWxmLCBvbGRFbGVtZW50Ll9zb3VyY2UsIG9sZEVsZW1lbnQuX293bmVyLCBvbGRFbGVtZW50LnByb3BzKTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG4vKipcbiAqIENsb25lIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IHVzaW5nIGVsZW1lbnQgYXMgdGhlIHN0YXJ0aW5nIHBvaW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjbG9uZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICBpZiAoISEoZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB1bmRlZmluZWQpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgXCIgKyBlbGVtZW50ICsgXCIuXCIgKTtcbiAgICB9XG4gIH1cblxuICB2YXIgcHJvcE5hbWU7IC8vIE9yaWdpbmFsIHByb3BzIGFyZSBjb3BpZWRcblxuICB2YXIgcHJvcHMgPSBfYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG5cbiAgdmFyIGtleSA9IGVsZW1lbnQua2V5O1xuICB2YXIgcmVmID0gZWxlbWVudC5yZWY7IC8vIFNlbGYgaXMgcHJlc2VydmVkIHNpbmNlIHRoZSBvd25lciBpcyBwcmVzZXJ2ZWQuXG5cbiAgdmFyIHNlbGYgPSBlbGVtZW50Ll9zZWxmOyAvLyBTb3VyY2UgaXMgcHJlc2VydmVkIHNpbmNlIGNsb25lRWxlbWVudCBpcyB1bmxpa2VseSB0byBiZSB0YXJnZXRlZCBieSBhXG4gIC8vIHRyYW5zcGlsZXIsIGFuZCB0aGUgb3JpZ2luYWwgc291cmNlIGlzIHByb2JhYmx5IGEgYmV0dGVyIGluZGljYXRvciBvZiB0aGVcbiAgLy8gdHJ1ZSBvd25lci5cblxuICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlOyAvLyBPd25lciB3aWxsIGJlIHByZXNlcnZlZCwgdW5sZXNzIHJlZiBpcyBvdmVycmlkZGVuXG5cbiAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIG93bmVyID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudDtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgb3ZlcnJpZGUgZXhpc3RpbmcgcHJvcHNcblxuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcblxuICAgIGlmIChlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgZGVmYXVsdFByb3BzID0gZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcztcbiAgICB9XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbnZhciBTRVBBUkFUT1IgPSAnLic7XG52YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9IGtleS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5cbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcbn1cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGVsZW1lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gZWxlbWVudCBBIGVsZW1lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRLZXkoZWxlbWVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcgJiYgZWxlbWVudCAhPT0gbnVsbCAmJiBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAgcmV0dXJuIGVzY2FwZSgnJyArIGVsZW1lbnQua2V5KTtcbiAgfSAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuXG5cbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gbWFwSW50b0FycmF5KGNoaWxkcmVuLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmFtZVNvRmFyLCBjYWxsYmFjaykge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICB2YXIgX2NoaWxkID0gY2hpbGRyZW47XG4gICAgdmFyIG1hcHBlZENoaWxkID0gY2FsbGJhY2soX2NoaWxkKTsgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzOlxuXG4gICAgdmFyIGNoaWxkS2V5ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldEVsZW1lbnRLZXkoX2NoaWxkLCAwKSA6IG5hbWVTb0ZhcjtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KG1hcHBlZENoaWxkKSkge1xuICAgICAgdmFyIGVzY2FwZWRDaGlsZEtleSA9ICcnO1xuXG4gICAgICBpZiAoY2hpbGRLZXkgIT0gbnVsbCkge1xuICAgICAgICBlc2NhcGVkQ2hpbGRLZXkgPSBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoY2hpbGRLZXkpICsgJy8nO1xuICAgICAgfVxuXG4gICAgICBtYXBJbnRvQXJyYXkobWFwcGVkQ2hpbGQsIGFycmF5LCBlc2NhcGVkQ2hpbGRLZXksICcnLCBmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KG1hcHBlZENoaWxkKSkge1xuICAgICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCwgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgICAgLy8gdHJhdmVyc2VBbGxDaGlsZHJlbiB1c2VkIHRvIGRvIGZvciBvYmplY3RzIGFzIGNoaWxkcmVuXG4gICAgICAgIGVzY2FwZWRQcmVmaXggKyAoIC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgUmVhY3QuUG9ydGFsIGRvZXNuJ3QgaGF2ZSBhIGtleVxuICAgICAgICBtYXBwZWRDaGlsZC5rZXkgJiYgKCFfY2hpbGQgfHwgX2NoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgZXhpc3RpbmcgZWxlbWVudCdzIGtleSBjYW4gYmUgYSBudW1iZXJcbiAgICAgICAgZXNjYXBlVXNlclByb3ZpZGVkS2V5KCcnICsgbWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICAgIH1cblxuICAgICAgYXJyYXkucHVzaChtYXBwZWRDaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgY2hpbGQ7XG4gIHZhciBuZXh0TmFtZTtcbiAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXG5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldEVsZW1lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciBpdGVyYWJsZUNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBpdGVyYWJsZUNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1hcHMpIHtcbiAgICAgICAgICAgIHdhcm4oJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgbm90IHN1cHBvcnRlZC4gJyArICdVc2UgYW4gYXJyYXkgb2Yga2V5ZWQgUmVhY3RFbGVtZW50cyBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChpdGVyYWJsZUNoaWxkcmVuKTtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgdmFyIGlpID0gMDtcblxuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gJycgKyBjaGlsZHJlbjtcblxuICAgICAge1xuICAgICAgICB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoIFwiT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiBcIiArIChjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcpICsgXCIpLiBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5IGluc3RlYWQuXCIgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG5cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMgVGhlIG1hcCBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBtYXBGdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgY291bnQgPSAwO1xuICBtYXBJbnRvQXJyYXkoY2hpbGRyZW4sIHJlc3VsdCwgJycsICcnLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBjb3VudCsrKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhc1xuICogYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5jb3VudFxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuLlxuICovXG5cblxuZnVuY3Rpb24gY291bnRDaGlsZHJlbihjaGlsZHJlbikge1xuICB2YXIgbiA9IDA7XG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgbisrOyAvLyBEb24ndCByZXR1cm4gYW55dGhpbmdcbiAgfSk7XG4gIHJldHVybiBuO1xufVxuXG4vKipcbiAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmZvcmVhY2hcbiAqXG4gKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZm9yRWFjaEZ1bmNcbiAqIEBwYXJhbSB7Kn0gZm9yRWFjaENvbnRleHQgQ29udGV4dCBmb3IgZm9yRWFjaENvbnRleHQuXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2hDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KSB7XG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yRWFjaEZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nLlxuICB9LCBmb3JFYWNoQ29udGV4dCk7XG59XG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pIHx8IFtdO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBjaGlsZCBpbiBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4gYW5kIHZlcmlmaWVzIHRoYXQgdGhlcmVcbiAqIGlzIG9ubHkgb25lIGNoaWxkIGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm9ubHlcbiAqXG4gKiBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBhIHNpbmdsZSBjaGlsZCBnZXRzXG4gKiBwYXNzZWQgd2l0aG91dCBhIHdyYXBwZXIsIGJ1dCB0aGUgcHVycG9zZSBvZiB0aGlzIGhlbHBlciBmdW5jdGlvbiBpcyB0b1xuICogYWJzdHJhY3QgYXdheSB0aGUgcGFydGljdWxhciBzdHJ1Y3R1cmUgb2YgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHs/b2JqZWN0fSBjaGlsZHJlbiBDaGlsZCBjb2xsZWN0aW9uIHN0cnVjdHVyZS5cbiAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gVGhlIGZpcnN0IGFuZCBvbmx5IGBSZWFjdEVsZW1lbnRgIGNvbnRhaW5lZCBpbiB0aGVcbiAqIHN0cnVjdHVyZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICBpZiAoIWlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSwgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIHtcbiAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxjdWxhdGVDaGFuZ2VkQml0cyA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAge1xuICAgICAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzICE9PSBudWxsICYmIHR5cGVvZiBjYWxjdWxhdGVDaGFuZ2VkQml0cyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBlcnJvcignY3JlYXRlQ29udGV4dDogRXhwZWN0ZWQgdGhlIG9wdGlvbmFsIHNlY29uZCBhcmd1bWVudCB0byBiZSBhICcgKyAnZnVuY3Rpb24uIEluc3RlYWQgcmVjZWl2ZWQ6ICVzJywgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBjb250ZXh0ID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjYWxjdWxhdGVDaGFuZ2VkQml0cyxcbiAgICAvLyBBcyBhIHdvcmthcm91bmQgdG8gc3VwcG9ydCBtdWx0aXBsZSBjb25jdXJyZW50IHJlbmRlcmVycywgd2UgY2F0ZWdvcml6ZVxuICAgIC8vIHNvbWUgcmVuZGVyZXJzIGFzIHByaW1hcnkgYW5kIG90aGVycyBhcyBzZWNvbmRhcnkuIFdlIG9ubHkgZXhwZWN0XG4gICAgLy8gdGhlcmUgdG8gYmUgdHdvIGNvbmN1cnJlbnQgcmVuZGVyZXJzIGF0IG1vc3Q6IFJlYWN0IE5hdGl2ZSAocHJpbWFyeSkgYW5kXG4gICAgLy8gRmFicmljIChzZWNvbmRhcnkpOyBSZWFjdCBET00gKHByaW1hcnkpIGFuZCBSZWFjdCBBUlQgKHNlY29uZGFyeSkuXG4gICAgLy8gU2Vjb25kYXJ5IHJlbmRlcmVycyBzdG9yZSB0aGVpciBjb250ZXh0IHZhbHVlcyBvbiBzZXBhcmF0ZSBmaWVsZHMuXG4gICAgX2N1cnJlbnRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIF9jdXJyZW50VmFsdWUyOiBkZWZhdWx0VmFsdWUsXG4gICAgLy8gVXNlZCB0byB0cmFjayBob3cgbWFueSBjb25jdXJyZW50IHJlbmRlcmVycyB0aGlzIGNvbnRleHQgY3VycmVudGx5XG4gICAgLy8gc3VwcG9ydHMgd2l0aGluIGluIGEgc2luZ2xlIHJlbmRlcmVyLiBTdWNoIGFzIHBhcmFsbGVsIHNlcnZlciByZW5kZXJpbmcuXG4gICAgX3RocmVhZENvdW50OiAwLFxuICAgIC8vIFRoZXNlIGFyZSBjaXJjdWxhclxuICAgIFByb3ZpZGVyOiBudWxsLFxuICAgIENvbnN1bWVyOiBudWxsXG4gIH07XG4gIGNvbnRleHQuUHJvdmlkZXIgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX1BST1ZJREVSX1RZUEUsXG4gICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgfTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSBmYWxzZTtcblxuICB7XG4gICAgLy8gQSBzZXBhcmF0ZSBvYmplY3QsIGJ1dCBwcm94aWVzIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQgb2JqZWN0IGZvclxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBJdCBoYXMgYSBkaWZmZXJlbnQgJCR0eXBlb2YsIHNvIHdlIGNhbiBwcm9wZXJseVxuICAgIC8vIHdhcm4gZm9yIHRoZSBpbmNvcnJlY3QgdXNhZ2Ugb2YgQ29udGV4dCBhcyBhIENvbnN1bWVyLlxuICAgIHZhciBDb25zdW1lciA9IHtcbiAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgICBfY29udGV4dDogY29udGV4dCxcbiAgICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY29udGV4dC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHNcbiAgICB9OyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBub3Qgc2V0dGluZyBhIHZhbHVlLCB3aGljaCBpcyBpbnRlbnRpb25hbCBoZXJlXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb25zdW1lciwge1xuICAgICAgUHJvdmlkZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlcikge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLlByb3ZpZGVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LlByb3ZpZGVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LlByb3ZpZGVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfUHJvdmlkZXIpIHtcbiAgICAgICAgICBjb250ZXh0LlByb3ZpZGVyID0gX1Byb3ZpZGVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlID0gX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWUyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlMikge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTIgPSBfY3VycmVudFZhbHVlMjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF90aHJlYWRDb3VudDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fdGhyZWFkQ291bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF90aHJlYWRDb3VudCkge1xuICAgICAgICAgIGNvbnRleHQuX3RocmVhZENvdW50ID0gX3RocmVhZENvdW50O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgQ29uc3VtZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycykge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLkNvbnN1bWVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LkNvbnN1bWVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LkNvbnN1bWVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzcGxheU5hbWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuZGlzcGxheU5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lcikge1xuICAgICAgICAgICAgd2FybignU2V0dGluZyBgZGlzcGxheU5hbWVgIG9uIENvbnRleHQuQ29uc3VtZXIgaGFzIG5vIGVmZmVjdC4gJyArIFwiWW91IHNob3VsZCBzZXQgaXQgZGlyZWN0bHkgb24gdGhlIGNvbnRleHQgd2l0aCBDb250ZXh0LmRpc3BsYXlOYW1lID0gJyVzJy5cIiwgZGlzcGxheU5hbWUpO1xuXG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lciA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG1pc3NpbmcgcHJvcGVydGllcyBiZWNhdXNlIGl0IGRvZXNuJ3QgdW5kZXJzdGFuZCBkZWZpbmVQcm9wZXJ0eVxuXG4gICAgY29udGV4dC5Db25zdW1lciA9IENvbnN1bWVyO1xuICB9XG5cbiAge1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlciA9IG51bGw7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyMiA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxudmFyIFVuaW5pdGlhbGl6ZWQgPSAtMTtcbnZhciBQZW5kaW5nID0gMDtcbnZhciBSZXNvbHZlZCA9IDE7XG52YXIgUmVqZWN0ZWQgPSAyO1xuXG5mdW5jdGlvbiBsYXp5SW5pdGlhbGl6ZXIocGF5bG9hZCkge1xuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgdmFyIGN0b3IgPSBwYXlsb2FkLl9yZXN1bHQ7XG4gICAgdmFyIHRoZW5hYmxlID0gY3RvcigpOyAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuXG4gICAgdmFyIHBlbmRpbmcgPSBwYXlsb2FkO1xuICAgIHBlbmRpbmcuX3N0YXR1cyA9IFBlbmRpbmc7XG4gICAgcGVuZGluZy5fcmVzdWx0ID0gdGhlbmFibGU7XG4gICAgdGhlbmFibGUudGhlbihmdW5jdGlvbiAobW9kdWxlT2JqZWN0KSB7XG4gICAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBQZW5kaW5nKSB7XG4gICAgICAgIHZhciBkZWZhdWx0RXhwb3J0ID0gbW9kdWxlT2JqZWN0LmRlZmF1bHQ7XG5cbiAgICAgICAge1xuICAgICAgICAgIGlmIChkZWZhdWx0RXhwb3J0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVycm9yKCdsYXp5OiBFeHBlY3RlZCB0aGUgcmVzdWx0IG9mIGEgZHluYW1pYyBpbXBvcnQoKSBjYWxsLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgJyArIC8vIEJyZWFrIHVwIGltcG9ydHMgdG8gYXZvaWQgYWNjaWRlbnRhbGx5IHBhcnNpbmcgdGhlbSBhcyBkZXBlbmRlbmNpZXMuXG4gICAgICAgICAgICAnY29uc3QgTXlDb21wb25lbnQgPSBsYXp5KCgpID0+IGltcCcgKyBcIm9ydCgnLi9NeUNvbXBvbmVudCcpKVwiLCBtb2R1bGVPYmplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuXG5cbiAgICAgICAgdmFyIHJlc29sdmVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVzb2x2ZWQuX3N0YXR1cyA9IFJlc29sdmVkO1xuICAgICAgICByZXNvbHZlZC5fcmVzdWx0ID0gZGVmYXVsdEV4cG9ydDtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcpIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAgICAgdmFyIHJlamVjdGVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVqZWN0ZWQuX3N0YXR1cyA9IFJlamVjdGVkO1xuICAgICAgICByZWplY3RlZC5fcmVzdWx0ID0gZXJyb3I7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBSZXNvbHZlZCkge1xuICAgIHJldHVybiBwYXlsb2FkLl9yZXN1bHQ7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgcGF5bG9hZC5fcmVzdWx0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgcGF5bG9hZCA9IHtcbiAgICAvLyBXZSB1c2UgdGhlc2UgZmllbGRzIHRvIHN0b3JlIHRoZSByZXN1bHQuXG4gICAgX3N0YXR1czogLTEsXG4gICAgX3Jlc3VsdDogY3RvclxuICB9O1xuICB2YXIgbGF6eVR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfcGF5bG9hZDogcGF5bG9hZCxcbiAgICBfaW5pdDogbGF6eUluaXRpYWxpemVyXG4gIH07XG5cbiAge1xuICAgIC8vIEluIHByb2R1Y3Rpb24sIHRoaXMgd291bGQganVzdCBzZXQgaXQgb24gdGhlIG9iamVjdC5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuICAgIHZhciBwcm9wVHlwZXM7IC8vICRGbG93Rml4TWVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGxhenlUeXBlLCB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZGVmYXVsdFByb3BzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdEZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgZGVmYXVsdFByb3BzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgZGVmYXVsdFByb3BzID0gbmV3RGVmYXVsdFByb3BzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdQcm9wVHlwZXMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgcHJvcFR5cGVzID0gbmV3UHJvcFR5cGVzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdwcm9wVHlwZXMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsYXp5VHlwZTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAge1xuICAgIGlmIChyZW5kZXIgIT0gbnVsbCAmJiByZW5kZXIuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHJlY2VpdmVkIGEgYG1lbW9gICcgKyAnY29tcG9uZW50LiBJbnN0ZWFkIG9mIGZvcndhcmRSZWYobWVtbyguLi4pKSwgdXNlICcgKyAnbWVtbyhmb3J3YXJkUmVmKC4uLikpLicpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHdhcyBnaXZlbiAlcy4nLCByZW5kZXIgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcmVuZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJlbmRlci5sZW5ndGggIT09IDAgJiYgcmVuZGVyLmxlbmd0aCAhPT0gMikge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGFjY2VwdCBleGFjdGx5IHR3byBwYXJhbWV0ZXJzOiBwcm9wcyBhbmQgcmVmLiAlcycsIHJlbmRlci5sZW5ndGggPT09IDEgPyAnRGlkIHlvdSBmb3JnZXQgdG8gdXNlIHRoZSByZWYgcGFyYW1ldGVyPycgOiAnQW55IGFkZGl0aW9uYWwgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZW5kZXIgIT0gbnVsbCkge1xuICAgICAgaWYgKHJlbmRlci5kZWZhdWx0UHJvcHMgIT0gbnVsbCB8fCByZW5kZXIucHJvcFR5cGVzICE9IG51bGwpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBkbyBub3Qgc3VwcG9ydCBwcm9wVHlwZXMgb3IgZGVmYXVsdFByb3BzLiAnICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgYSBSZWFjdCBjb21wb25lbnQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTtcblxuICAgICAgICBpZiAocmVuZGVyLmRpc3BsYXlOYW1lID09IG51bGwpIHtcbiAgICAgICAgICByZW5kZXIuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50IHx8IHR5cGUgPT09IGV4cG9ydHMuUHJvZmlsZXIgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gZXhwb3J0cy5TdHJpY3RNb2RlIHx8IHR5cGUgPT09IGV4cG9ydHMuU3VzcGVuc2UgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG1lbW8odHlwZSwgY29tcGFyZSkge1xuICB7XG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkpIHtcbiAgICAgIGVycm9yKCdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9NRU1PX1RZUEUsXG4gICAgdHlwZTogdHlwZSxcbiAgICBjb21wYXJlOiBjb21wYXJlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29tcGFyZVxuICB9O1xuXG4gIHtcbiAgICB2YXIgb3duTmFtZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsICdkaXNwbGF5TmFtZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvd25OYW1lO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgb3duTmFtZSA9IG5hbWU7XG5cbiAgICAgICAgaWYgKHR5cGUuZGlzcGxheU5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgIHR5cGUuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDtcblxuICBpZiAoIShkaXNwYXRjaGVyICE9PSBudWxsKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIkludmFsaWQgaG9vayBjYWxsLiBIb29rcyBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIG9mIHRoZSBib2R5IG9mIGEgZnVuY3Rpb24gY29tcG9uZW50LiBUaGlzIGNvdWxkIGhhcHBlbiBmb3Igb25lIG9mIHRoZSBmb2xsb3dpbmcgcmVhc29uczpcXG4xLiBZb3UgbWlnaHQgaGF2ZSBtaXNtYXRjaGluZyB2ZXJzaW9ucyBvZiBSZWFjdCBhbmQgdGhlIHJlbmRlcmVyIChzdWNoIGFzIFJlYWN0IERPTSlcXG4yLiBZb3UgbWlnaHQgYmUgYnJlYWtpbmcgdGhlIFJ1bGVzIG9mIEhvb2tzXFxuMy4gWW91IG1pZ2h0IGhhdmUgbW9yZSB0aGFuIG9uZSBjb3B5IG9mIFJlYWN0IGluIHRoZSBzYW1lIGFwcFxcblNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcblxuICB7XG4gICAgaWYgKHVuc3RhYmxlX29ic2VydmVkQml0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvcigndXNlQ29udGV4dCgpIHNlY29uZCBhcmd1bWVudCBpcyByZXNlcnZlZCBmb3IgZnV0dXJlICcgKyAndXNlIGluIFJlYWN0LiBQYXNzaW5nIGl0IGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnWW91IHBhc3NlZDogJXMuJXMnLCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMsIHR5cGVvZiB1bnN0YWJsZV9vYnNlcnZlZEJpdHMgPT09ICdudW1iZXInICYmIEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzJdKSA/ICdcXG5cXG5EaWQgeW91IGNhbGwgYXJyYXkubWFwKHVzZUNvbnRleHQpPyAnICsgJ0NhbGxpbmcgSG9va3MgaW5zaWRlIGEgbG9vcCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0xlYXJuIG1vcmUgYXQgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3J1bGVzLW9mLWhvb2tzJyA6ICcnKTtcbiAgICB9IC8vIFRPRE86IGFkZCBhIG1vcmUgZ2VuZXJpYyB3YXJuaW5nIGZvciBpbnZhbGlkIHZhbHVlcy5cblxuXG4gICAgaWYgKENvbnRleHQuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlYWxDb250ZXh0ID0gQ29udGV4dC5fY29udGV4dDsgLy8gRG9uJ3QgZGVkdXBsaWNhdGUgYmVjYXVzZSB0aGlzIGxlZ2l0aW1hdGVseSBjYXVzZXMgYnVnc1xuICAgICAgLy8gYW5kIG5vYm9keSBzaG91bGQgYmUgdXNpbmcgdGhpcyBpbiBleGlzdGluZyBjb2RlLlxuXG4gICAgICBpZiAocmVhbENvbnRleHQuQ29uc3VtZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LkNvbnN1bWVyKSBpcyBub3Qgc3VwcG9ydGVkLCBtYXkgY2F1c2UgYnVncywgYW5kIHdpbGwgYmUgJyArICdyZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH0gZWxzZSBpZiAocmVhbENvbnRleHQuUHJvdmlkZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LlByb3ZpZGVyKSBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0RpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDb250ZXh0KENvbnRleHQsIHVuc3RhYmxlX29ic2VydmVkQml0cyk7XG59XG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xufVxuZnVuY3Rpb24gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KTtcbn1cbmZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWYoaW5pdGlhbFZhbHVlKTtcbn1cbmZ1bmN0aW9uIHVzZUVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTWVtbyhjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VNZW1vKGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbikge1xuICB7XG4gICAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICAgIHJldHVybiBkaXNwYXRjaGVyLnVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKTtcbiAgfVxufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuU3VzcGVuc2U6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhlbGVtZW50UHJvcHMpIHtcbiAgaWYgKGVsZW1lbnRQcm9wcyAhPT0gbnVsbCAmJiBlbGVtZW50UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShlbGVtZW50UHJvcHMuX19zb3VyY2UpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gIGlmICghaW5mbykge1xuICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5mbztcbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgfVxuXG4gIHtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICBpZiAoIXZhbGlkVHlwZSkge1xuICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMocHJvcHMpO1xuXG4gICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICB9XG5cbiAgICB2YXIgdHlwZVN0cmluZztcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgfVxuXG4gICAge1xuICAgICAgZXJyb3IoJ1JlYWN0LmNyZWF0ZUVsZW1lbnQ6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gIGlmICh2YWxpZFR5cGUpIHtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCB0eXBlKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCkge1xuICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxudmFyIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gZmFsc2U7XG5mdW5jdGlvbiBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24odHlwZSkge1xuICB2YXIgdmFsaWRhdGVkRmFjdG9yeSA9IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbi5iaW5kKG51bGwsIHR5cGUpO1xuICB2YWxpZGF0ZWRGYWN0b3J5LnR5cGUgPSB0eXBlO1xuXG4gIHtcbiAgICBpZiAoIWRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5KSB7XG4gICAgICBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IHRydWU7XG5cbiAgICAgIHdhcm4oJ1JlYWN0LmNyZWF0ZUZhY3RvcnkoKSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBDb25zaWRlciB1c2luZyBKU1ggJyArICdvciB1c2UgUmVhY3QuY3JlYXRlRWxlbWVudCgpIGRpcmVjdGx5IGluc3RlYWQuJyk7XG4gICAgfSAvLyBMZWdhY3kgaG9vazogcmVtb3ZlIGl0XG5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWxpZGF0ZWRGYWN0b3J5LCAndHlwZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJ0ZhY3RvcnkudHlwZSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdGhlIGNsYXNzIGRpcmVjdGx5ICcgKyAnYmVmb3JlIHBhc3NpbmcgaXQgdG8gY3JlYXRlRmFjdG9yeS4nKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3R5cGUnLCB7XG4gICAgICAgICAgdmFsdWU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlZEZhY3Rvcnk7XG59XG5mdW5jdGlvbiBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbihlbGVtZW50LCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBjbG9uZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgbmV3RWxlbWVudC50eXBlKTtcbiAgfVxuXG4gIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxue1xuXG4gIHRyeSB7XG4gICAgdmFyIGZyb3plbk9iamVjdCA9IE9iamVjdC5mcmVlemUoe30pO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuXG4gICAgbmV3IE1hcChbW2Zyb3plbk9iamVjdCwgbnVsbF1dKTtcbiAgICBuZXcgU2V0KFtmcm96ZW5PYmplY3RdKTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLW5ldyAqL1xuICB9IGNhdGNoIChlKSB7XG4gIH1cbn1cblxudmFyIGNyZWF0ZUVsZW1lbnQkMSA9ICBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNsb25lRWxlbWVudCQxID0gIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjcmVhdGVGYWN0b3J5ID0gIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbiA7XG52YXIgQ2hpbGRyZW4gPSB7XG4gIG1hcDogbWFwQ2hpbGRyZW4sXG4gIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgY291bnQ6IGNvdW50Q2hpbGRyZW4sXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIG9ubHk6IG9ubHlDaGlsZFxufTtcblxuZXhwb3J0cy5DaGlsZHJlbiA9IENoaWxkcmVuO1xuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5leHBvcnRzLlB1cmVDb21wb25lbnQgPSBQdXJlQ29tcG9uZW50O1xuZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzO1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQgPSBjbG9uZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ7XG5leHBvcnRzLmNyZWF0ZUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5O1xuZXhwb3J0cy5jcmVhdGVSZWYgPSBjcmVhdGVSZWY7XG5leHBvcnRzLmZvcndhcmRSZWYgPSBmb3J3YXJkUmVmO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudCA9IGlzVmFsaWRFbGVtZW50O1xuZXhwb3J0cy5sYXp5ID0gbGF6eTtcbmV4cG9ydHMubWVtbyA9IG1lbW87XG5leHBvcnRzLnVzZUNhbGxiYWNrID0gdXNlQ2FsbGJhY2s7XG5leHBvcnRzLnVzZUNvbnRleHQgPSB1c2VDb250ZXh0O1xuZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlID0gdXNlRGVidWdWYWx1ZTtcbmV4cG9ydHMudXNlRWZmZWN0ID0gdXNlRWZmZWN0O1xuZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlID0gdXNlSW1wZXJhdGl2ZUhhbmRsZTtcbmV4cG9ydHMudXNlTGF5b3V0RWZmZWN0ID0gdXNlTGF5b3V0RWZmZWN0O1xuZXhwb3J0cy51c2VNZW1vID0gdXNlTWVtbztcbmV4cG9ydHMudXNlUmVkdWNlciA9IHVzZVJlZHVjZXI7XG5leHBvcnRzLnVzZVJlZiA9IHVzZVJlZjtcbmV4cG9ydHMudXNlU3RhdGUgPSB1c2VTdGF0ZTtcbmV4cG9ydHMudmVyc2lvbiA9IFJlYWN0VmVyc2lvbjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIFRPRE86IHRoaXMgaXMgc3BlY2lhbCBiZWNhdXNlIGl0IGdldHMgaW1wb3J0ZWQgZHVyaW5nIGJ1aWxkLlxudmFyIFJlYWN0VmVyc2lvbiA9ICcxNy4wLjInO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xuZXhwb3J0cy5GcmFnbWVudCA9IDB4ZWFjYjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IDB4ZWFjYztcbmV4cG9ydHMuUHJvZmlsZXIgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbmV4cG9ydHMuU3VzcGVuc2UgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBleHBvcnRzLkZyYWdtZW50ID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBleHBvcnRzLlN0cmljdE1vZGUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIGV4cG9ydHMuUHJvZmlsZXIgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBleHBvcnRzLlN1c3BlbnNlID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgZGlzcGF0Y2hlci5cbiAqL1xudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBiYXRjaCdzIGNvbmZpZ3VyYXRpb24gc3VjaCBhcyBob3cgbG9uZyBhbiB1cGRhdGVcbiAqIHNob3VsZCBzdXNwZW5kIGZvciBpZiBpdCBuZWVkcyB0by5cbiAqL1xudmFyIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnID0ge1xuICB0cmFuc2l0aW9uOiAwXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IG93bmVyLlxuICpcbiAqIFRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBjb21wb25lbnQgd2hvIHNob3VsZCBvd24gYW55IGNvbXBvbmVudHMgdGhhdCBhcmVcbiAqIGN1cnJlbnRseSBiZWluZyBjb25zdHJ1Y3RlZC5cbiAqL1xudmFyIFJlYWN0Q3VycmVudE93bmVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0ge307XG52YXIgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IG51bGw7XG5mdW5jdGlvbiBzZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spIHtcbiAge1xuICAgIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBzdGFjaztcbiAgfVxufVxuXG57XG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lID0gZnVuY3Rpb24gKHN0YWNrKSB7XG4gICAge1xuICAgICAgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IHN0YWNrO1xuICAgIH1cbiAgfTsgLy8gU3RhY2sgaW1wbGVtZW50YXRpb24gaW5qZWN0ZWQgYnkgdGhlIGN1cnJlbnQgcmVuZGVyZXIuXG5cblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjayA9IG51bGw7XG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGFjayA9ICcnOyAvLyBBZGQgYW4gZXh0cmEgdG9wIGZyYW1lIHdoaWxlIGFuIGVsZW1lbnQgaXMgYmVpbmcgdmFsaWRhdGVkXG5cbiAgICBpZiAoY3VycmVudEV4dHJhU3RhY2tGcmFtZSkge1xuICAgICAgc3RhY2sgKz0gY3VycmVudEV4dHJhU3RhY2tGcmFtZTtcbiAgICB9IC8vIERlbGVnYXRlIHRvIHRoZSBpbmplY3RlZCByZW5kZXJlci1zcGVjaWZpYyBpbXBsZW1lbnRhdGlvblxuXG5cbiAgICB2YXIgaW1wbCA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrO1xuXG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHN0YWNrICs9IGltcGwoKSB8fCAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG59XG5cbi8qKlxuICogVXNlZCBieSBhY3QoKSB0byB0cmFjayB3aGV0aGVyIHlvdSdyZSBpbnNpZGUgYW4gYWN0KCkgc2NvcGUuXG4gKi9cbnZhciBJc1NvbWVSZW5kZXJlckFjdGluZyA9IHtcbiAgY3VycmVudDogZmFsc2Vcbn07XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcbiAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjogUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixcbiAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLFxuICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXIsXG4gIElzU29tZVJlbmRlcmVyQWN0aW5nOiBJc1NvbWVSZW5kZXJlckFjdGluZyxcbiAgLy8gVXNlZCBieSByZW5kZXJlcnMgdG8gYXZvaWQgYnVuZGxpbmcgb2JqZWN0LWFzc2lnbiB0d2ljZSBpbiBVTUQgYnVuZGxlczpcbiAgYXNzaWduOiBfYXNzaWduXG59O1xuXG57XG4gIFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lO1xufVxuXG4vLyBieSBjYWxscyB0byB0aGVzZSBtZXRob2RzIGJ5IGEgQmFiZWwgcGx1Z2luLlxuLy9cbi8vIEluIFBST0QgKG9yIGluIHBhY2thZ2VzIHdpdGhvdXQgYWNjZXNzIHRvIFJlYWN0IGludGVybmFscyksXG4vLyB0aGV5IGFyZSBsZWZ0IGFzIHRoZXkgYXJlIGluc3RlYWQuXG5cbmZ1bmN0aW9uIHdhcm4oZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ3dhcm4nLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH1cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxudmFyIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudCA9IHt9O1xuXG5mdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICB7XG4gICAgdmFyIF9jb25zdHJ1Y3RvciA9IHB1YmxpY0luc3RhbmNlLmNvbnN0cnVjdG9yO1xuICAgIHZhciBjb21wb25lbnROYW1lID0gX2NvbnN0cnVjdG9yICYmIChfY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgX2NvbnN0cnVjdG9yLm5hbWUpIHx8ICdSZWFjdENsYXNzJztcbiAgICB2YXIgd2FybmluZ0tleSA9IGNvbXBvbmVudE5hbWUgKyBcIi5cIiArIGNhbGxlck5hbWU7XG5cbiAgICBpZiAoZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXJyb3IoXCJDYW4ndCBjYWxsICVzIG9uIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHlldCBtb3VudGVkLiBcIiArICdUaGlzIGlzIGEgbm8tb3AsIGJ1dCBpdCBtaWdodCBpbmRpY2F0ZSBhIGJ1ZyBpbiB5b3VyIGFwcGxpY2F0aW9uLiAnICsgJ0luc3RlYWQsIGFzc2lnbiB0byBgdGhpcy5zdGF0ZWAgZGlyZWN0bHkgb3IgZGVmaW5lIGEgYHN0YXRlID0ge307YCAnICsgJ2NsYXNzIHByb3BlcnR5IHdpdGggdGhlIGRlc2lyZWQgc3RhdGUgaW4gdGhlICVzIGNvbXBvbmVudC4nLCBjYWxsZXJOYW1lLCBjb21wb25lbnROYW1lKTtcblxuICAgIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSA9IHRydWU7XG4gIH1cbn1cbi8qKlxuICogVGhpcyBpcyB0aGUgYWJzdHJhY3QgQVBJIGZvciBhbiB1cGRhdGUgcXVldWUuXG4gKi9cblxuXG52YXIgUmVhY3ROb29wVXBkYXRlUXVldWUgPSB7XG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhpcyBjb21wb3NpdGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHdlIHdhbnQgdG8gdGVzdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQGZpbmFsXG4gICAqL1xuICBpc01vdW50ZWQ6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICAgKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICAgKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAgICpcbiAgICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICAgKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZUZvcmNlVXBkYXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdmb3JjZVVwZGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhbGwgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgb3IgYHNldFN0YXRlYCB0byBtdXRhdGUgc3RhdGUuXG4gICAqIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAgICpcbiAgICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAgICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb21wbGV0ZVN0YXRlIE5leHQgc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY29tcGxldGVTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3JlcGxhY2VTdGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gVGhpcyBvbmx5IGV4aXN0cyBiZWNhdXNlIF9wZW5kaW5nU3RhdGUgaXNcbiAgICogaW50ZXJuYWwuIFRoaXMgcHJvdmlkZXMgYSBtZXJnaW5nIHN0cmF0ZWd5IHRoYXQgaXMgbm90IGF2YWlsYWJsZSB0byBkZWVwXG4gICAqIHByb3BlcnRpZXMgd2hpY2ggaXMgY29uZnVzaW5nLiBUT0RPOiBFeHBvc2UgcGVuZGluZ1N0YXRlIG9yIGRvbid0IHVzZSBpdFxuICAgKiBkdXJpbmcgdGhlIG1lcmdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gTmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnc2V0U3RhdGUnKTtcbiAgfVxufTtcblxudmFyIGVtcHR5T2JqZWN0ID0ge307XG5cbntcbiAgT2JqZWN0LmZyZWV6ZShlbXB0eU9iamVjdCk7XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgaGVscGVycyBmb3IgdGhlIHVwZGF0aW5nIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICovXG5cblxuZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7IC8vIFdlIGluaXRpYWxpemUgdGhlIGRlZmF1bHQgdXBkYXRlciBidXQgdGhlIHJlYWwgb25lIGdldHMgaW5qZWN0ZWQgYnkgdGhlXG4gIC8vIHJlbmRlcmVyLlxuXG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbkNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHt9O1xuLyoqXG4gKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIHRvIG11dGF0ZVxuICogc3RhdGUuIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBjYWxscyB0byBgc2V0U3RhdGVgIHdpbGwgcnVuIHN5bmNocm9ub3VzbHksXG4gKiBhcyB0aGV5IG1heSBldmVudHVhbGx5IGJlIGJhdGNoZWQgdG9nZXRoZXIuICBZb3UgY2FuIHByb3ZpZGUgYW4gb3B0aW9uYWxcbiAqIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBjYWxsIHRvIHNldFN0YXRlIGlzIGFjdHVhbGx5XG4gKiBjb21wbGV0ZWQuXG4gKlxuICogV2hlbiBhIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHRvIHNldFN0YXRlLCBpdCB3aWxsIGJlIGNhbGxlZCBhdCBzb21lIHBvaW50IGluXG4gKiB0aGUgZnV0dXJlIChub3Qgc3luY2hyb25vdXNseSkuIEl0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIHVwIHRvIGRhdGVcbiAqIGNvbXBvbmVudCBhcmd1bWVudHMgKHN0YXRlLCBwcm9wcywgY29udGV4dCkuIFRoZXNlIHZhbHVlcyBjYW4gYmUgZGlmZmVyZW50XG4gKiBmcm9tIHRoaXMuKiBiZWNhdXNlIHlvdXIgZnVuY3Rpb24gbWF5IGJlIGNhbGxlZCBhZnRlciByZWNlaXZlUHJvcHMgYnV0IGJlZm9yZVxuICogc2hvdWxkQ29tcG9uZW50VXBkYXRlLCBhbmQgdGhpcyBuZXcgc3RhdGUsIHByb3BzLCBhbmQgY29udGV4dCB3aWxsIG5vdCB5ZXQgYmVcbiAqIGFzc2lnbmVkIHRvIHRoaXMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgb3IgZnVuY3Rpb24gdG9cbiAqICAgICAgICBwcm9kdWNlIG5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBjdXJyZW50IHN0YXRlLlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBzdGF0ZSBpcyB1cGRhdGVkLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrKSB7XG4gIGlmICghKHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdmdW5jdGlvbicgfHwgcGFydGlhbFN0YXRlID09IG51bGwpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwic2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuXCIgKTtcbiAgICB9XG4gIH1cblxuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssICdzZXRTdGF0ZScpO1xufTtcbi8qKlxuICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gKlxuICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gKlxuICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAqXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cblxuQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsIGNhbGxiYWNrLCAnZm9yY2VVcGRhdGUnKTtcbn07XG4vKipcbiAqIERlcHJlY2F0ZWQgQVBJcy4gVGhlc2UgQVBJcyB1c2VkIHRvIGV4aXN0IG9uIGNsYXNzaWMgUmVhY3QgY2xhc3NlcyBidXQgc2luY2VcbiAqIHdlIHdvdWxkIGxpa2UgdG8gZGVwcmVjYXRlIHRoZW0sIHdlJ3JlIG5vdCBnb2luZyB0byBtb3ZlIHRoZW0gb3ZlciB0byB0aGlzXG4gKiBtb2Rlcm4gYmFzZSBjbGFzcy4gSW5zdGVhZCwgd2UgZGVmaW5lIGEgZ2V0dGVyIHRoYXQgd2FybnMgaWYgaXQncyBhY2Nlc3NlZC5cbiAqL1xuXG5cbntcbiAgdmFyIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgIGlzTW91bnRlZDogWydpc01vdW50ZWQnLCAnSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gJyArICdjb21wb25lbnRXaWxsVW5tb3VudCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy4nXSxcbiAgICByZXBsYWNlU3RhdGU6IFsncmVwbGFjZVN0YXRlJywgJ1JlZmFjdG9yIHlvdXIgY29kZSB0byB1c2Ugc2V0U3RhdGUgaW5zdGVhZCAoc2VlICcgKyAnaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8zMjM2KS4nXVxuICB9O1xuXG4gIHZhciBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSwgaW5mbykge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQucHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybignJXMoLi4uKSBpcyBkZXByZWNhdGVkIGluIHBsYWluIEphdmFTY3JpcHQgUmVhY3QgY2xhc3Nlcy4gJXMnLCBpbmZvWzBdLCBpbmZvWzFdKTtcblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcykge1xuICAgIGlmIChkZXByZWNhdGVkQVBJcy5oYXNPd25Qcm9wZXJ0eShmbk5hbWUpKSB7XG4gICAgICBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcoZm5OYW1lLCBkZXByZWNhdGVkQVBJc1tmbk5hbWVdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gQ29tcG9uZW50RHVtbXkoKSB7fVxuXG5Db21wb25lbnREdW1teS5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuLyoqXG4gKiBDb252ZW5pZW5jZSBjb21wb25lbnQgd2l0aCBkZWZhdWx0IHNoYWxsb3cgZXF1YWxpdHkgY2hlY2sgZm9yIHNDVS5cbiAqL1xuXG5mdW5jdGlvbiBQdXJlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbnZhciBwdXJlQ29tcG9uZW50UHJvdG90eXBlID0gUHVyZUNvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuY29uc3RydWN0b3IgPSBQdXJlQ29tcG9uZW50OyAvLyBBdm9pZCBhbiBleHRyYSBwcm90b3R5cGUganVtcCBmb3IgdGhlc2UgbWV0aG9kcy5cblxuX2Fzc2lnbihwdXJlQ29tcG9uZW50UHJvdG90eXBlLCBDb21wb25lbnQucHJvdG90eXBlKTtcblxucHVyZUNvbXBvbmVudFByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cbi8vIGFuIGltbXV0YWJsZSBvYmplY3Qgd2l0aCBhIHNpbmdsZSBtdXRhYmxlIHZhbHVlXG5mdW5jdGlvbiBjcmVhdGVSZWYoKSB7XG4gIHZhciByZWZPYmplY3QgPSB7XG4gICAgY3VycmVudDogbnVsbFxuICB9O1xuXG4gIHtcbiAgICBPYmplY3Quc2VhbChyZWZPYmplY3QpO1xuICB9XG5cbiAgcmV0dXJuIHJlZk9iamVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgZXhwb3J0cy5GcmFnbWVudDpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgZXhwb3J0cy5Qcm9maWxlcjpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBleHBvcnRzLlN0cmljdE1vZGU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBleHBvcnRzLlN1c3BlbnNlOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duLCBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biwgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgY29uZmlnLl9fc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gY29uZmlnLl9fc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBjb21wb25lbnROYW1lLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuICB2YXIgc2VsZiA9IG51bGw7XG4gIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuXG4gICAgICB7XG4gICAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTsgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAge1xuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIGlmICghIShlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdC5jbG9uZUVsZW1lbnQoLi4uKTogVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCBcIiArIGVsZW1lbnQgKyBcIi5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwcm9wTmFtZTsgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuXG4gIHZhciBwcm9wcyA9IF9hc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cblxuICB2YXIga2V5ID0gZWxlbWVudC5rZXk7XG4gIHZhciByZWYgPSBlbGVtZW50LnJlZjsgLy8gU2VsZiBpcyBwcmVzZXJ2ZWQgc2luY2UgdGhlIG93bmVyIGlzIHByZXNlcnZlZC5cblxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7IC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7IC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuXG5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuXG4gICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgIH1cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIGlmIChjb25maWdbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgJiYgZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQoZWxlbWVudC50eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cblxudmFyIFNFUEFSQVRPUiA9ICcuJztcbnZhciBTVUJTRVBBUkFUT1IgPSAnOic7XG4vKipcbiAqIEVzY2FwZSBhbmQgd3JhcCBrZXkgc28gaXQgaXMgc2FmZSB0byB1c2UgYXMgYSByZWFjdGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byBiZSBlc2NhcGVkLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZXNjYXBlZCBrZXkuXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICB2YXIgZXNjYXBlUmVnZXggPSAvWz06XS9nO1xuICB2YXIgZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPSc6ICc9MCcsXG4gICAgJzonOiAnPTInXG4gIH07XG4gIHZhciBlc2NhcGVkU3RyaW5nID0ga2V5LnJlcGxhY2UoZXNjYXBlUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBlc2NhcGVyTG9va3VwW21hdGNoXTtcbiAgfSk7XG4gIHJldHVybiAnJCcgKyBlc2NhcGVkU3RyaW5nO1xufVxuLyoqXG4gKiBUT0RPOiBUZXN0IHRoYXQgYSBzaW5nbGUgY2hpbGQgYW5kIGFuIGFycmF5IHdpdGggb25lIGl0ZW0gaGF2ZSB0aGUgc2FtZSBrZXlcbiAqIHBhdHRlcm4uXG4gKi9cblxuXG52YXIgZGlkV2FybkFib3V0TWFwcyA9IGZhbHNlO1xudmFyIHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4ID0gL1xcLysvZztcblxuZnVuY3Rpb24gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHRleHQpIHtcbiAgcmV0dXJuIHRleHQucmVwbGFjZSh1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCwgJyQmLycpO1xufVxuLyoqXG4gKiBHZW5lcmF0ZSBhIGtleSBzdHJpbmcgdGhhdCBpZGVudGlmaWVzIGEgZWxlbWVudCB3aXRoaW4gYSBzZXQuXG4gKlxuICogQHBhcmFtIHsqfSBlbGVtZW50IEEgZWxlbWVudCB0aGF0IGNvdWxkIGNvbnRhaW4gYSBtYW51YWwga2V5LlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4IHRoYXQgaXMgdXNlZCBpZiBhIG1hbnVhbCBrZXkgaXMgbm90IHByb3ZpZGVkLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cblxuZnVuY3Rpb24gZ2V0RWxlbWVudEtleShlbGVtZW50LCBpbmRleCkge1xuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnb2JqZWN0JyAmJiBlbGVtZW50ICE9PSBudWxsICYmIGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICByZXR1cm4gZXNjYXBlKCcnICsgZWxlbWVudC5rZXkpO1xuICB9IC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG5cblxuICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBtYXBJbnRvQXJyYXkoY2hpbGRyZW4sIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuYW1lU29GYXIsIGNhbGxiYWNrKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGNoaWxkcmVuO1xuXG4gIGlmICh0eXBlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAvLyBBbGwgb2YgdGhlIGFib3ZlIGFyZSBwZXJjZWl2ZWQgYXMgbnVsbC5cbiAgICBjaGlsZHJlbiA9IG51bGw7XG4gIH1cblxuICB2YXIgaW52b2tlQ2FsbGJhY2sgPSBmYWxzZTtcblxuICBpZiAoY2hpbGRyZW4gPT09IG51bGwpIHtcbiAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgc3dpdGNoIChjaGlsZHJlbi4kJHR5cGVvZikge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIGlmIChpbnZva2VDYWxsYmFjaykge1xuICAgIHZhciBfY2hpbGQgPSBjaGlsZHJlbjtcbiAgICB2YXIgbWFwcGVkQ2hpbGQgPSBjYWxsYmFjayhfY2hpbGQpOyAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3M6XG5cbiAgICB2YXIgY2hpbGRLZXkgPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SICsgZ2V0RWxlbWVudEtleShfY2hpbGQsIDApIDogbmFtZVNvRmFyO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgICB2YXIgZXNjYXBlZENoaWxkS2V5ID0gJyc7XG5cbiAgICAgIGlmIChjaGlsZEtleSAhPSBudWxsKSB7XG4gICAgICAgIGVzY2FwZWRDaGlsZEtleSA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShjaGlsZEtleSkgKyAnLyc7XG4gICAgICB9XG5cbiAgICAgIG1hcEludG9BcnJheShtYXBwZWRDaGlsZCwgYXJyYXksIGVzY2FwZWRDaGlsZEtleSwgJycsIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHJldHVybiBjO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChtYXBwZWRDaGlsZCAhPSBudWxsKSB7XG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XG4gICAgICAgIG1hcHBlZENoaWxkID0gY2xvbmVBbmRSZXBsYWNlS2V5KG1hcHBlZENoaWxkLCAvLyBLZWVwIGJvdGggdGhlIChtYXBwZWQpIGFuZCBvbGQga2V5cyBpZiB0aGV5IGRpZmZlciwganVzdCBhc1xuICAgICAgICAvLyB0cmF2ZXJzZUFsbENoaWxkcmVuIHVzZWQgdG8gZG8gZm9yIG9iamVjdHMgYXMgY2hpbGRyZW5cbiAgICAgICAgZXNjYXBlZFByZWZpeCArICggLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBSZWFjdC5Qb3J0YWwgZG9lc24ndCBoYXZlIGEga2V5XG4gICAgICAgIG1hcHBlZENoaWxkLmtleSAmJiAoIV9jaGlsZCB8fCBfY2hpbGQua2V5ICE9PSBtYXBwZWRDaGlsZC5rZXkpID8gLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBleGlzdGluZyBlbGVtZW50J3Mga2V5IGNhbiBiZSBhIG51bWJlclxuICAgICAgICBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoJycgKyBtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgICAgfVxuXG4gICAgICBhcnJheS5wdXNoKG1hcHBlZENoaWxkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHZhciBjaGlsZDtcbiAgdmFyIG5leHROYW1lO1xuICB2YXIgc3VidHJlZUNvdW50ID0gMDsgLy8gQ291bnQgb2YgY2hpbGRyZW4gZm91bmQgaW4gdGhlIGN1cnJlbnQgc3VidHJlZS5cblxuICB2YXIgbmV4dE5hbWVQcmVmaXggPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SIDogbmFtZVNvRmFyICsgU1VCU0VQQVJBVE9SO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0RWxlbWVudEtleShjaGlsZCwgaSk7XG4gICAgICBzdWJ0cmVlQ291bnQgKz0gbWFwSW50b0FycmF5KGNoaWxkLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmV4dE5hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKGNoaWxkcmVuKTtcblxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIGl0ZXJhYmxlQ2hpbGRyZW4gPSBjaGlsZHJlbjtcblxuICAgICAge1xuICAgICAgICAvLyBXYXJuIGFib3V0IHVzaW5nIE1hcHMgYXMgY2hpbGRyZW5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gPT09IGl0ZXJhYmxlQ2hpbGRyZW4uZW50cmllcykge1xuICAgICAgICAgIGlmICghZGlkV2FybkFib3V0TWFwcykge1xuICAgICAgICAgICAgd2FybignVXNpbmcgTWFwcyBhcyBjaGlsZHJlbiBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ1VzZSBhbiBhcnJheSBvZiBrZXllZCBSZWFjdEVsZW1lbnRzIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlkV2FybkFib3V0TWFwcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKGl0ZXJhYmxlQ2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB2YXIgaWkgPSAwO1xuXG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcbiAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldEVsZW1lbnRLZXkoY2hpbGQsIGlpKyspO1xuICAgICAgICBzdWJ0cmVlQ291bnQgKz0gbWFwSW50b0FycmF5KGNoaWxkLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmV4dE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgY2hpbGRyZW5TdHJpbmcgPSAnJyArIGNoaWxkcmVuO1xuXG4gICAgICB7XG4gICAgICAgIHtcbiAgICAgICAgICB0aHJvdyBFcnJvciggXCJPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6IFwiICsgKGNoaWxkcmVuU3RyaW5nID09PSAnW29iamVjdCBPYmplY3RdJyA/ICdvYmplY3Qgd2l0aCBrZXlzIHsnICsgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmpvaW4oJywgJykgKyAnfScgOiBjaGlsZHJlblN0cmluZykgKyBcIikuIElmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgaW5zdGVhZC5cIiApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnRyZWVDb3VudDtcbn1cblxuLyoqXG4gKiBNYXBzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5tYXBcbiAqXG4gKiBUaGUgcHJvdmlkZWQgbWFwRnVuY3Rpb24oY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBjb3VudCA9IDA7XG4gIG1hcEludG9BcnJheShjaGlsZHJlbiwgcmVzdWx0LCAnJywgJycsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGNvdW50KyspO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzXG4gKiBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmNvdW50XG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4uXG4gKi9cblxuXG5mdW5jdGlvbiBjb3VudENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHZhciBuID0gMDtcbiAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICBuKys7IC8vIERvbid0IHJldHVybiBhbnl0aGluZ1xuICB9KTtcbiAgcmV0dXJuIG47XG59XG5cbi8qKlxuICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuZm9yZWFjaFxuICpcbiAqIFRoZSBwcm92aWRlZCBmb3JFYWNoRnVuYyhjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmb3JFYWNoRnVuY1xuICogQHBhcmFtIHsqfSBmb3JFYWNoQ29udGV4dCBDb250ZXh0IGZvciBmb3JFYWNoQ29udGV4dC5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICBmb3JFYWNoRnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBEb24ndCByZXR1cm4gYW55dGhpbmcuXG4gIH0sIGZvckVhY2hDb250ZXh0KTtcbn1cbi8qKlxuICogRmxhdHRlbiBhIGNoaWxkcmVuIG9iamVjdCAodHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gKSBhbmRcbiAqIHJldHVybiBhbiBhcnJheSB3aXRoIGFwcHJvcHJpYXRlbHkgcmUta2V5ZWQgY2hpbGRyZW4uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVudG9hcnJheVxuICovXG5cblxuZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICByZXR1cm4gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfSkgfHwgW107XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5cblxuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuXCIgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykge1xuICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB7XG4gICAgICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgIT09IG51bGwgJiYgdHlwZW9mIGNhbGN1bGF0ZUNoYW5nZWRCaXRzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVycm9yKCdjcmVhdGVDb250ZXh0OiBFeHBlY3RlZCB0aGUgb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50IHRvIGJlIGEgJyArICdmdW5jdGlvbi4gSW5zdGVhZCByZWNlaXZlZDogJXMnLCBjYWxjdWxhdGVDaGFuZ2VkQml0cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRleHQgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNhbGN1bGF0ZUNoYW5nZWRCaXRzLFxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0byBzdXBwb3J0IG11bHRpcGxlIGNvbmN1cnJlbnQgcmVuZGVyZXJzLCB3ZSBjYXRlZ29yaXplXG4gICAgLy8gc29tZSByZW5kZXJlcnMgYXMgcHJpbWFyeSBhbmQgb3RoZXJzIGFzIHNlY29uZGFyeS4gV2Ugb25seSBleHBlY3RcbiAgICAvLyB0aGVyZSB0byBiZSB0d28gY29uY3VycmVudCByZW5kZXJlcnMgYXQgbW9zdDogUmVhY3QgTmF0aXZlIChwcmltYXJ5KSBhbmRcbiAgICAvLyBGYWJyaWMgKHNlY29uZGFyeSk7IFJlYWN0IERPTSAocHJpbWFyeSkgYW5kIFJlYWN0IEFSVCAoc2Vjb25kYXJ5KS5cbiAgICAvLyBTZWNvbmRhcnkgcmVuZGVyZXJzIHN0b3JlIHRoZWlyIGNvbnRleHQgdmFsdWVzIG9uIHNlcGFyYXRlIGZpZWxkcy5cbiAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAvLyBVc2VkIHRvIHRyYWNrIGhvdyBtYW55IGNvbmN1cnJlbnQgcmVuZGVyZXJzIHRoaXMgY29udGV4dCBjdXJyZW50bHlcbiAgICAvLyBzdXBwb3J0cyB3aXRoaW4gaW4gYSBzaW5nbGUgcmVuZGVyZXIuIFN1Y2ggYXMgcGFyYWxsZWwgc2VydmVyIHJlbmRlcmluZy5cbiAgICBfdGhyZWFkQ291bnQ6IDAsXG4gICAgLy8gVGhlc2UgYXJlIGNpcmN1bGFyXG4gICAgUHJvdmlkZXI6IG51bGwsXG4gICAgQ29uc3VtZXI6IG51bGxcbiAgfTtcbiAgY29udGV4dC5Qcm92aWRlciA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfUFJPVklERVJfVFlQRSxcbiAgICBfY29udGV4dDogY29udGV4dFxuICB9O1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lciA9IGZhbHNlO1xuXG4gIHtcbiAgICAvLyBBIHNlcGFyYXRlIG9iamVjdCwgYnV0IHByb3hpZXMgYmFjayB0byB0aGUgb3JpZ2luYWwgY29udGV4dCBvYmplY3QgZm9yXG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuIEl0IGhhcyBhIGRpZmZlcmVudCAkJHR5cGVvZiwgc28gd2UgY2FuIHByb3Blcmx5XG4gICAgLy8gd2FybiBmb3IgdGhlIGluY29ycmVjdCB1c2FnZSBvZiBDb250ZXh0IGFzIGEgQ29uc3VtZXIuXG4gICAgdmFyIENvbnN1bWVyID0ge1xuICAgICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICAgIF9jb250ZXh0OiBjb250ZXh0LFxuICAgICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjb250ZXh0Ll9jYWxjdWxhdGVDaGFuZ2VkQml0c1xuICAgIH07IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG5vdCBzZXR0aW5nIGEgdmFsdWUsIHdoaWNoIGlzIGludGVudGlvbmFsIGhlcmVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENvbnN1bWVyLCB7XG4gICAgICBQcm92aWRlcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuUHJvdmlkZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuUHJvdmlkZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9Qcm92aWRlcikge1xuICAgICAgICAgIGNvbnRleHQuUHJvdmlkZXIgPSBfUHJvdmlkZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUgPSBfY3VycmVudFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZTI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUyKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlMiA9IF9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX3RocmVhZENvdW50OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll90aHJlYWRDb3VudDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX3RocmVhZENvdW50KSB7XG4gICAgICAgICAgY29udGV4dC5fdGhyZWFkQ291bnQgPSBfdGhyZWFkQ291bnQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBDb25zdW1lcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuQ29uc3VtZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuQ29uc3VtZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuQ29uc3VtZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkaXNwbGF5TmFtZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5kaXNwbGF5TmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGlzcGxheU5hbWUpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyKSB7XG4gICAgICAgICAgICB3YXJuKCdTZXR0aW5nIGBkaXNwbGF5TmFtZWAgb24gQ29udGV4dC5Db25zdW1lciBoYXMgbm8gZWZmZWN0LiAnICsgXCJZb3Ugc2hvdWxkIHNldCBpdCBkaXJlY3RseSBvbiB0aGUgY29udGV4dCB3aXRoIENvbnRleHQuZGlzcGxheU5hbWUgPSAnJXMnLlwiLCBkaXNwbGF5TmFtZSk7XG5cbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbWlzc2luZyBwcm9wZXJ0aWVzIGJlY2F1c2UgaXQgZG9lc24ndCB1bmRlcnN0YW5kIGRlZmluZVByb3BlcnR5XG5cbiAgICBjb250ZXh0LkNvbnN1bWVyID0gQ29uc3VtZXI7XG4gIH1cblxuICB7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyID0gbnVsbDtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIyID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG52YXIgVW5pbml0aWFsaXplZCA9IC0xO1xudmFyIFBlbmRpbmcgPSAwO1xudmFyIFJlc29sdmVkID0gMTtcbnZhciBSZWplY3RlZCA9IDI7XG5cbmZ1bmN0aW9uIGxhenlJbml0aWFsaXplcihwYXlsb2FkKSB7XG4gIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICB2YXIgY3RvciA9IHBheWxvYWQuX3Jlc3VsdDtcbiAgICB2YXIgdGhlbmFibGUgPSBjdG9yKCk7IC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG5cbiAgICB2YXIgcGVuZGluZyA9IHBheWxvYWQ7XG4gICAgcGVuZGluZy5fc3RhdHVzID0gUGVuZGluZztcbiAgICBwZW5kaW5nLl9yZXN1bHQgPSB0aGVuYWJsZTtcbiAgICB0aGVuYWJsZS50aGVuKGZ1bmN0aW9uIChtb2R1bGVPYmplY3QpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRFeHBvcnQgPSBtb2R1bGVPYmplY3QuZGVmYXVsdDtcblxuICAgICAgICB7XG4gICAgICAgICAgaWYgKGRlZmF1bHRFeHBvcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZXJyb3IoJ2xhenk6IEV4cGVjdGVkIHRoZSByZXN1bHQgb2YgYSBkeW5hbWljIGltcG9ydCgpIGNhbGwuICcgKyAnSW5zdGVhZCByZWNlaXZlZDogJXNcXG5cXG5Zb3VyIGNvZGUgc2hvdWxkIGxvb2sgbGlrZTogXFxuICAnICsgLy8gQnJlYWsgdXAgaW1wb3J0cyB0byBhdm9pZCBhY2NpZGVudGFsbHkgcGFyc2luZyB0aGVtIGFzIGRlcGVuZGVuY2llcy5cbiAgICAgICAgICAgICdjb25zdCBNeUNvbXBvbmVudCA9IGxhenkoKCkgPT4gaW1wJyArIFwib3J0KCcuL015Q29tcG9uZW50JykpXCIsIG1vZHVsZU9iamVjdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG5cblxuICAgICAgICB2YXIgcmVzb2x2ZWQgPSBwYXlsb2FkO1xuICAgICAgICByZXNvbHZlZC5fc3RhdHVzID0gUmVzb2x2ZWQ7XG4gICAgICAgIHJlc29sdmVkLl9yZXN1bHQgPSBkZWZhdWx0RXhwb3J0O1xuICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZykge1xuICAgICAgICAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBwYXlsb2FkO1xuICAgICAgICByZWplY3RlZC5fc3RhdHVzID0gUmVqZWN0ZWQ7XG4gICAgICAgIHJlamVjdGVkLl9yZXN1bHQgPSBlcnJvcjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFJlc29sdmVkKSB7XG4gICAgcmV0dXJuIHBheWxvYWQuX3Jlc3VsdDtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBwYXlsb2FkLl9yZXN1bHQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGF6eShjdG9yKSB7XG4gIHZhciBwYXlsb2FkID0ge1xuICAgIC8vIFdlIHVzZSB0aGVzZSBmaWVsZHMgdG8gc3RvcmUgdGhlIHJlc3VsdC5cbiAgICBfc3RhdHVzOiAtMSxcbiAgICBfcmVzdWx0OiBjdG9yXG4gIH07XG4gIHZhciBsYXp5VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTEFaWV9UWVBFLFxuICAgIF9wYXlsb2FkOiBwYXlsb2FkLFxuICAgIF9pbml0OiBsYXp5SW5pdGlhbGl6ZXJcbiAgfTtcblxuICB7XG4gICAgLy8gSW4gcHJvZHVjdGlvbiwgdGhpcyB3b3VsZCBqdXN0IHNldCBpdCBvbiB0aGUgb2JqZWN0LlxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG4gICAgdmFyIHByb3BUeXBlczsgLy8gJEZsb3dGaXhNZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobGF6eVR5cGUsIHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBkZWZhdWx0UHJvcHM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld0RlZmF1bHRQcm9wcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBkZWZhdWx0UHJvcHNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBkZWZhdWx0UHJvcHMgPSBuZXdEZWZhdWx0UHJvcHM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIC8vICRGbG93Rml4TWVcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ2RlZmF1bHRQcm9wcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByb3BUeXBlczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBwcm9wVHlwZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld1Byb3BUeXBlcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBwcm9wVHlwZXNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBwcm9wVHlwZXMgPSBuZXdQcm9wVHlwZXM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIC8vICRGbG93Rml4TWVcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ3Byb3BUeXBlcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxhenlUeXBlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xuICB7XG4gICAgaWYgKHJlbmRlciAhPSBudWxsICYmIHJlbmRlci4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVuZGVyLmxlbmd0aCAhPT0gMCAmJiByZW5kZXIubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgYWNjZXB0IGV4YWN0bHkgdHdvIHBhcmFtZXRlcnM6IHByb3BzIGFuZCByZWYuICVzJywgcmVuZGVyLmxlbmd0aCA9PT0gMSA/ICdEaWQgeW91IGZvcmdldCB0byB1c2UgdGhlIHJlZiBwYXJhbWV0ZXI/JyA6ICdBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlciAhPSBudWxsKSB7XG4gICAgICBpZiAocmVuZGVyLmRlZmF1bHRQcm9wcyAhPSBudWxsIHx8IHJlbmRlci5wcm9wVHlwZXMgIT0gbnVsbCkge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IHByb3BUeXBlcyBvciBkZWZhdWx0UHJvcHMuICcgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudFR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUsXG4gICAgcmVuZGVyOiByZW5kZXJcbiAgfTtcblxuICB7XG4gICAgdmFyIG93bk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCAnZGlzcGxheU5hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG93bk5hbWUgPSBuYW1lO1xuXG4gICAgICAgIGlmIChyZW5kZXIuZGlzcGxheU5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgIHJlbmRlci5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50VHlwZTtcbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQgfHwgdHlwZSA9PT0gZXhwb3J0cy5Qcm9maWxlciB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBleHBvcnRzLlN0cmljdE1vZGUgfHwgdHlwZSA9PT0gZXhwb3J0cy5TdXNwZW5zZSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbWVtbyh0eXBlLCBjb21wYXJlKSB7XG4gIHtcbiAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSkge1xuICAgICAgZXJyb3IoJ21lbW86IFRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgY29tcG9uZW50LiBJbnN0ZWFkICcgKyAncmVjZWl2ZWQ6ICVzJywgdHlwZSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiB0eXBlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudFR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX01FTU9fVFlQRSxcbiAgICB0eXBlOiB0eXBlLFxuICAgIGNvbXBhcmU6IGNvbXBhcmUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb21wYXJlXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTtcblxuICAgICAgICBpZiAodHlwZS5kaXNwbGF5TmFtZSA9PSBudWxsKSB7XG4gICAgICAgICAgdHlwZS5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50VHlwZTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZURpc3BhdGNoZXIoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50O1xuXG4gIGlmICghKGRpc3BhdGNoZXIgIT09IG51bGwpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiSW52YWxpZCBob29rIGNhbGwuIEhvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgb2YgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuIFRoaXMgY291bGQgaGFwcGVuIGZvciBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbjEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbjIuIFlvdSBtaWdodCBiZSBicmVha2luZyB0aGUgUnVsZXMgb2YgSG9va3NcXG4zLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9pbnZhbGlkLWhvb2stY2FsbCBmb3IgdGlwcyBhYm91dCBob3cgdG8gZGVidWcgYW5kIGZpeCB0aGlzIHByb2JsZW0uXCIgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlzcGF0Y2hlcjtcbn1cblxuZnVuY3Rpb24gdXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuXG4gIHtcbiAgICBpZiAodW5zdGFibGVfb2JzZXJ2ZWRCaXRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yKCd1c2VDb250ZXh0KCkgc2Vjb25kIGFyZ3VtZW50IGlzIHJlc2VydmVkIGZvciBmdXR1cmUgJyArICd1c2UgaW4gUmVhY3QuIFBhc3NpbmcgaXQgaXMgbm90IHN1cHBvcnRlZC4gJyArICdZb3UgcGFzc2VkOiAlcy4lcycsIHVuc3RhYmxlX29ic2VydmVkQml0cywgdHlwZW9mIHVuc3RhYmxlX29ic2VydmVkQml0cyA9PT0gJ251bWJlcicgJiYgQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMl0pID8gJ1xcblxcbkRpZCB5b3UgY2FsbCBhcnJheS5tYXAodXNlQ29udGV4dCk/ICcgKyAnQ2FsbGluZyBIb29rcyBpbnNpZGUgYSBsb29wIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnTGVhcm4gbW9yZSBhdCBodHRwczovL3JlYWN0anMub3JnL2xpbmsvcnVsZXMtb2YtaG9va3MnIDogJycpO1xuICAgIH0gLy8gVE9ETzogYWRkIGEgbW9yZSBnZW5lcmljIHdhcm5pbmcgZm9yIGludmFsaWQgdmFsdWVzLlxuXG5cbiAgICBpZiAoQ29udGV4dC5fY29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgcmVhbENvbnRleHQgPSBDb250ZXh0Ll9jb250ZXh0OyAvLyBEb24ndCBkZWR1cGxpY2F0ZSBiZWNhdXNlIHRoaXMgbGVnaXRpbWF0ZWx5IGNhdXNlcyBidWdzXG4gICAgICAvLyBhbmQgbm9ib2R5IHNob3VsZCBiZSB1c2luZyB0aGlzIGluIGV4aXN0aW5nIGNvZGUuXG5cbiAgICAgIGlmIChyZWFsQ29udGV4dC5Db25zdW1lciA9PT0gQ29udGV4dCkge1xuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuQ29uc3VtZXIpIGlzIG5vdCBzdXBwb3J0ZWQsIG1heSBjYXVzZSBidWdzLCBhbmQgd2lsbCBiZSAnICsgJ3JlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfSBlbHNlIGlmIChyZWFsQ29udGV4dC5Qcm92aWRlciA9PT0gQ29udGV4dCkge1xuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuUHJvdmlkZXIpIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKTtcbn1cbmZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG59XG5mdW5jdGlvbiB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpO1xufVxuZnVuY3Rpb24gdXNlUmVmKGluaXRpYWxWYWx1ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZihpbml0aWFsVmFsdWUpO1xufVxuZnVuY3Rpb24gdXNlRWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VNZW1vKGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZU1lbW8oY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKSB7XG4gIHtcbiAgICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gICAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pO1xuICB9XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTtcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgZXhwb3J0cy5TdXNwZW5zZTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBzZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIGlmIChSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKGVsZW1lbnRQcm9wcykge1xuICBpZiAoZWxlbWVudFByb3BzICE9PSBudWxsICYmIGVsZW1lbnRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKGVsZW1lbnRQcm9wcy5fX3NvdXJjZSk7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgaWYgKCFpbmZvKSB7XG4gICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbmZvO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICB9XG5cbiAge1xuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gIGlmICghdmFsaWRUeXBlKSB7XG4gICAgdmFyIGluZm8gPSAnJztcblxuICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhwcm9wcyk7XG5cbiAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgIH1cblxuICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBlcnJvcignUmVhY3QuY3JlYXRlRWxlbWVudDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgaWYgKHZhbGlkVHlwZSkge1xuICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50KSB7XG4gICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG52YXIgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSBmYWxzZTtcbmZ1bmN0aW9uIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbih0eXBlKSB7XG4gIHZhciB2YWxpZGF0ZWRGYWN0b3J5ID0gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uLmJpbmQobnVsbCwgdHlwZSk7XG4gIHZhbGlkYXRlZEZhY3RvcnkudHlwZSA9IHR5cGU7XG5cbiAge1xuICAgIGlmICghZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkpIHtcbiAgICAgIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gdHJ1ZTtcblxuICAgICAgd2FybignUmVhY3QuY3JlYXRlRmFjdG9yeSgpIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIENvbnNpZGVyIHVzaW5nIEpTWCAnICsgJ29yIHVzZSBSZWFjdC5jcmVhdGVFbGVtZW50KCkgZGlyZWN0bHkgaW5zdGVhZC4nKTtcbiAgICB9IC8vIExlZ2FjeSBob29rOiByZW1vdmUgaXRcblxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbGlkYXRlZEZhY3RvcnksICd0eXBlJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybignRmFjdG9yeS50eXBlIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB0aGUgY2xhc3MgZGlyZWN0bHkgJyArICdiZWZvcmUgcGFzc2luZyBpdCB0byBjcmVhdGVGYWN0b3J5LicpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHlwZScsIHtcbiAgICAgICAgICB2YWx1ZTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVkRmFjdG9yeTtcbn1cbmZ1bmN0aW9uIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uKGVsZW1lbnQsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgbmV3RWxlbWVudCA9IGNsb25lRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCBuZXdFbGVtZW50LnR5cGUpO1xuICB9XG5cbiAgdmFsaWRhdGVQcm9wVHlwZXMobmV3RWxlbWVudCk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG57XG5cbiAgdHJ5IHtcbiAgICB2YXIgZnJvemVuT2JqZWN0ID0gT2JqZWN0LmZyZWV6ZSh7fSk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tbmV3ICovXG5cbiAgICBuZXcgTWFwKFtbZnJvemVuT2JqZWN0LCBudWxsXV0pO1xuICAgIG5ldyBTZXQoW2Zyb3plbk9iamVjdF0pO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tbmV3ICovXG4gIH0gY2F0Y2ggKGUpIHtcbiAgfVxufVxuXG52YXIgY3JlYXRlRWxlbWVudCQxID0gIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY2xvbmVFbGVtZW50JDEgPSAgY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNyZWF0ZUZhY3RvcnkgPSAgY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uIDtcbnZhciBDaGlsZHJlbiA9IHtcbiAgbWFwOiBtYXBDaGlsZHJlbixcbiAgZm9yRWFjaDogZm9yRWFjaENoaWxkcmVuLFxuICBjb3VudDogY291bnRDaGlsZHJlbixcbiAgdG9BcnJheTogdG9BcnJheSxcbiAgb25seTogb25seUNoaWxkXG59O1xuXG5leHBvcnRzLkNoaWxkcmVuID0gQ2hpbGRyZW47XG5leHBvcnRzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbmV4cG9ydHMuUHVyZUNvbXBvbmVudCA9IFB1cmVDb21wb25lbnQ7XG5leHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEID0gUmVhY3RTaGFyZWRJbnRlcm5hbHM7XG5leHBvcnRzLmNsb25lRWxlbWVudCA9IGNsb25lRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDtcbmV4cG9ydHMuY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlRmFjdG9yeSA9IGNyZWF0ZUZhY3Rvcnk7XG5leHBvcnRzLmNyZWF0ZVJlZiA9IGNyZWF0ZVJlZjtcbmV4cG9ydHMuZm9yd2FyZFJlZiA9IGZvcndhcmRSZWY7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50ID0gaXNWYWxpZEVsZW1lbnQ7XG5leHBvcnRzLmxhenkgPSBsYXp5O1xuZXhwb3J0cy5tZW1vID0gbWVtbztcbmV4cG9ydHMudXNlQ2FsbGJhY2sgPSB1c2VDYWxsYmFjaztcbmV4cG9ydHMudXNlQ29udGV4dCA9IHVzZUNvbnRleHQ7XG5leHBvcnRzLnVzZURlYnVnVmFsdWUgPSB1c2VEZWJ1Z1ZhbHVlO1xuZXhwb3J0cy51c2VFZmZlY3QgPSB1c2VFZmZlY3Q7XG5leHBvcnRzLnVzZUltcGVyYXRpdmVIYW5kbGUgPSB1c2VJbXBlcmF0aXZlSGFuZGxlO1xuZXhwb3J0cy51c2VMYXlvdXRFZmZlY3QgPSB1c2VMYXlvdXRFZmZlY3Q7XG5leHBvcnRzLnVzZU1lbW8gPSB1c2VNZW1vO1xuZXhwb3J0cy51c2VSZWR1Y2VyID0gdXNlUmVkdWNlcjtcbmV4cG9ydHMudXNlUmVmID0gdXNlUmVmO1xuZXhwb3J0cy51c2VTdGF0ZSA9IHVzZVN0YXRlO1xuZXhwb3J0cy52ZXJzaW9uID0gUmVhY3RWZXJzaW9uO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9