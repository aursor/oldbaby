import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as _export_sfc, a as __nuxt_component_0$3 } from '../server.mjs';
import { useSSRContext, mergeProps, computed, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { M as Meta } from './components-980a57c1.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _imports_0 = "" + publicAssetsURL("logo.svg");
const _sfc_main$2 = {
  __name: "HeaderBar",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const actived = computed(() => route.name);
    console.log(route);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "headerBar" }, _attrs))} data-v-dae5b902><div class="content" data-v-dae5b902><img${ssrRenderAttr("src", _imports_0)} data-v-dae5b902><div class="menu" data-v-dae5b902><div style="${ssrRenderStyle({
        color: actived.value == "index" ? "#49e" : ""
      })}" class="item" data-v-dae5b902>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u9996\u9875`);
          } else {
            return [
              createTextVNode("\u9996\u9875")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div style="${ssrRenderStyle({
        color: actived.value == "product" ? "#49e" : ""
      })}" class="item" data-v-dae5b902>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/product" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u4EA7\u54C1\u4E2D\u5FC3`);
          } else {
            return [
              createTextVNode("\u4EA7\u54C1\u4E2D\u5FC3")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div style="${ssrRenderStyle({
        color: actived.value == "about" ? "#49e" : ""
      })}" class="item" data-v-dae5b902>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u5173\u4E8E\u6211\u4EEC`);
          } else {
            return [
              createTextVNode("\u5173\u4E8E\u6211\u4EEC")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-dae5b902"]]);
const _imports_1 = "" + publicAssetsURL("connect.svg");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_Meta = Meta;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "footerBar" }, _attrs))} data-v-2ccbc1c3>`);
  _push(ssrRenderComponent(_component_Meta, {
    name: "keyowrds",
    content: "\u8054\u7CFB\u6211\u4EEC-\u6E56\u5317\u8001baby\u7F51\u7EDC\u79D1\u6280\u5DE5\u4F5C\u5BA4"
  }, null, _parent));
  _push(`<div class="content" data-v-2ccbc1c3><div style="${ssrRenderStyle({ "display": "flex" })}" data-v-2ccbc1c3><img${ssrRenderAttr("src", _imports_0)} data-v-2ccbc1c3><div data-v-2ccbc1c3><h2 style="${ssrRenderStyle({ "width": "100px" })}" data-v-2ccbc1c3>\u6E56\u5317\u8001baby</h2><h2 style="${ssrRenderStyle({ "width": "100px", "font-size": "14px" })}" data-v-2ccbc1c3>\u7F51\u7EDC\u79D1\u6280\u5DE5\u4F5C\u5BA4</h2></div></div><div style="${ssrRenderStyle({ "font-size": "14px" })}" data-v-2ccbc1c3><p data-v-2ccbc1c3>\u5BA2\u670D\u90AE\u7BB1\uFF1Aaursordev@gmail.com</p><p data-v-2ccbc1c3>\u52A0\u76DF\u90AE\u7BB1\uFF1Aaursordev@gmail.com</p><p data-v-2ccbc1c3>\u8054\u7CFB\u5730\u5740\uFF1A\u6E56\u5317\u7701\u8346\u5DDE\u5E02</p></div></div><div class="qrcode" data-v-2ccbc1c3><img width="120"${ssrRenderAttr("src", _imports_1)} alt="" data-v-2ccbc1c3><h1 style="${ssrRenderStyle({ "text-align": "center", "margin-top": "12px" })}" data-v-2ccbc1c3>\u8054\u7CFB\u6211\u4EEC</h1></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-2ccbc1c3"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HeaderBar = __nuxt_component_0;
  const _component_FooterBar = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "defaultLayoutRoot" }, _attrs))} data-v-12f9424f>`);
  _push(ssrRenderComponent(_component_HeaderBar, null, null, _parent));
  _push(`<div class="basicContent" data-v-12f9424f>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_FooterBar, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-12f9424f"]]);

export { _default as default };
//# sourceMappingURL=default-f8eaba78.mjs.map
