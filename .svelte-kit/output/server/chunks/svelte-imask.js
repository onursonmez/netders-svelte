import require$$0 from "imask";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var svelteImaskExports = {};
var svelteImask = {
  get exports() {
    return svelteImaskExports;
  },
  set exports(v) {
    svelteImaskExports = v;
  }
};
(function(module, exports) {
  (function(global2, factory) {
    factory(exports, require$$0);
  })(commonjsGlobal, function(exports2, IMask) {
    function _interopDefaultLegacy(e) {
      return e && typeof e === "object" && "default" in e ? e : { "default": e };
    }
    var IMask__default = /* @__PURE__ */ _interopDefaultLegacy(IMask);
    function fireEvent(el, eventName, data) {
      var e = document.createEvent("CustomEvent");
      e.initCustomEvent(eventName, true, true, data);
      el.dispatchEvent(e);
    }
    function initMask(el, opts) {
      var maskRef = opts instanceof IMask__default["default"].InputMask ? opts : IMask__default["default"](el, opts);
      return maskRef.on("accept", function() {
        return fireEvent(el, "accept", maskRef);
      }).on("complete", function() {
        return fireEvent(el, "complete", maskRef);
      });
    }
    function IMaskAction(el, options) {
      var maskRef = options && initMask(el, options);
      function destroy() {
        if (maskRef) {
          maskRef.destroy();
          maskRef = void 0;
        }
      }
      function update(options2) {
        if (options2) {
          if (maskRef) {
            if (options2 instanceof IMask__default["default"].InputMask)
              maskRef = options2;
            else
              maskRef.updateOptions(options2);
          } else
            maskRef = initMask(el, options2);
        } else {
          destroy();
        }
      }
      return {
        update,
        destroy
      };
    }
    exports2.imask = IMaskAction;
    Object.defineProperty(exports2, "__esModule", { value: true });
  });
})(svelteImask, svelteImaskExports);
