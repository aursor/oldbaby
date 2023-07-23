import { _ as __nuxt_component_0 } from './layout-cd22b796.mjs';
import { mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'vue-router';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import 'ufo';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'klona';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';

const _sfc_main = {
  __name: "product",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "default" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="productRoot" data-v-b9b9db8f${_scopeId}><div class="cover animate__animated animate__fadeIn" data-v-b9b9db8f${_scopeId}><h1 class="title animate__animated animate__fadeInLeft" data-v-b9b9db8f${_scopeId}> \u8BA9\u79D1\u6280\u6539\u53D8\u6211\u4EEC\u7684\u751F\u6D3B </h1><h2 class="subtitle animate__animated animate__fadeInLeft" data-v-b9b9db8f${_scopeId}> Making production easier through intelligent manufacturing </h2></div><div class="exampleBoxTitle" data-v-b9b9db8f${_scopeId}>\u5BA2\u6237\u6848\u4F8B</div><div class="exampleBox" data-v-b9b9db8f${_scopeId}><!--[-->`);
            ssrRenderList(8, (i) => {
              _push2(`<div class="exampleContainer" data-v-b9b9db8f${_scopeId}><div class="example animate__animated" data-v-b9b9db8f${_scopeId}><div class="virtual-cover" data-v-b9b9db8f${_scopeId}></div></div><section class="section" data-v-b9b9db8f${_scopeId}><p data-v-b9b9db8f${_scopeId}>Nuxt3.js</p><h1 data-v-b9b9db8f${_scopeId}>OA\u534F\u540C\u529E\u516C\u7CFB\u7EDF</h1></section></div>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "productRoot" }, [
                createVNode("div", { class: "cover animate__animated animate__fadeIn" }, [
                  createVNode("h1", { class: "title animate__animated animate__fadeInLeft" }, " \u8BA9\u79D1\u6280\u6539\u53D8\u6211\u4EEC\u7684\u751F\u6D3B "),
                  createVNode("h2", { class: "subtitle animate__animated animate__fadeInLeft" }, " Making production easier through intelligent manufacturing ")
                ]),
                createVNode("div", { class: "exampleBoxTitle" }, "\u5BA2\u6237\u6848\u4F8B"),
                createVNode("div", { class: "exampleBox" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(8, (i) => {
                    return createVNode("div", {
                      key: i,
                      class: "exampleContainer"
                    }, [
                      createVNode("div", { class: "example animate__animated" }, [
                        createVNode("div", { class: "virtual-cover" })
                      ]),
                      createVNode("section", { class: "section" }, [
                        createVNode("p", null, "Nuxt3.js"),
                        createVNode("h1", null, "OA\u534F\u540C\u529E\u516C\u7CFB\u7EDF")
                      ])
                    ]);
                  }), 64))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const product = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b9b9db8f"]]);

export { product as default };
//# sourceMappingURL=product-a581bc17.mjs.map
