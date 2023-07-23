import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './layout-cd22b796.mjs';
import { M as Meta } from './components-980a57c1.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectCreative } from 'swiper/modules';
import { mergeProps, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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
import 'vue-router';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _imports_0 = "" + publicAssetsURL("ask.png");
const _imports_1 = "" + publicAssetsURL("tec.png");
const _imports_2 = "" + publicAssetsURL("repair.png");
const _imports_3 = "" + publicAssetsURL("answer1.png");
const _imports_4 = "" + publicAssetsURL("answer2.png");
const _imports_5 = "" + publicAssetsURL("answer3.png");
const _imports_6 = "" + publicAssetsURL("answer4.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_Meta = Meta;
  const _component_Swiper = Swiper;
  const _component_SwiperSlide = SwiperSlide;
  _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "default" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Meta, {
          name: "keywords",
          content: "\u6E56\u5317\u8001baby\u7F51\u7EDC\u79D1\u6280\u5DE5\u4F5C\u5BA4"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Meta, {
          name: "description",
          content: "\u6E56\u5317\u8F6F\u4EF6\u5F00\u53D1,\u5C0F\u7A0B\u5E8F\u5F00\u53D1,App\u5F00\u53D1,\u8F6F\u4EF6\u4E13\u5229\u6CE8\u518C,\u6280\u672F\u670D\u52A1,\u6280\u672F\u652F\u6301"
        }, null, _parent2, _scopeId));
        _push2(`<div class="homePageSwiper" data-v-ccf3f164${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Swiper, {
          modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay), "SwiperEffectCreative" in _ctx ? _ctx.SwiperEffectCreative : unref(EffectCreative)],
          "slides-per-view": 1,
          loop: true,
          effect: "creative",
          autoplay: {
            delay: 3e3,
            disableOnInteraction: true
          },
          pagination: true,
          "creative-effect": {
            prev: {
              shadow: true,
              translate: ["-20%", 0, -1]
            },
            next: {
              translate: ["100%", 0, 0]
            }
          }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_SwiperSlide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="img-cover" style="${ssrRenderStyle({ "background-image": "url('/demo1.jpg')" })}" data-v-ccf3f164${_scopeId3}></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "img-cover",
                        style: { "background-image": "url('/demo1.jpg')" }
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_SwiperSlide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="img-cover" style="${ssrRenderStyle({ "background-image": "url('/demo2.jpg')" })}" data-v-ccf3f164${_scopeId3}></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "img-cover",
                        style: { "background-image": "url('/demo2.jpg')" }
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_SwiperSlide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="img-cover" style="${ssrRenderStyle({ "background-image": "url('/demo3.jpg')" })}" data-v-ccf3f164${_scopeId3}></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "img-cover",
                        style: { "background-image": "url('/demo3.jpg')" }
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_SwiperSlide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="img-cover" style="${ssrRenderStyle({ "background-image": "url('/demo4.jpg')" })}" data-v-ccf3f164${_scopeId3}></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "img-cover",
                        style: { "background-image": "url('/demo4.jpg')" }
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_SwiperSlide, null, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "img-cover",
                      style: { "background-image": "url('/demo1.jpg')" }
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_SwiperSlide, null, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "img-cover",
                      style: { "background-image": "url('/demo2.jpg')" }
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_SwiperSlide, null, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "img-cover",
                      style: { "background-image": "url('/demo3.jpg')" }
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_SwiperSlide, null, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "img-cover",
                      style: { "background-image": "url('/demo4.jpg')" }
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><main class="homePanel" data-v-ccf3f164${_scopeId}><h1 class="title" data-v-ccf3f164${_scopeId}>\u6EE1\u8DB3\u5BA2\u6237\u5E7F\u6CDB\u7684\u4E1A\u52A1\u9700\u6C42</h1><div class="productions" data-v-ccf3f164${_scopeId}><div class="item" data-v-ccf3f164${_scopeId}><img class="icon"${ssrRenderAttr("src", _imports_0)} alt="" data-v-ccf3f164${_scopeId}><h2 class="subtitle" data-v-ccf3f164${_scopeId}>\u54A8\u8BE2\u670D\u52A1</h2><div class="desc" data-v-ccf3f164${_scopeId}> \u63D0\u4F9B\u5E94\u7528\u7CFB\u7EDF\u5B9E\u65BD\u3001\u4FE1\u606F\u5316\u7BA1\u7406\u548C\u6280\u672F\u65B9\u6848\u652F\u6301\u7B49\u4E00\u7CFB\u5217\u54A8\u8BE2\u548C\u670D\u52A1\uFF0C\u5339\u914D\u5BA2\u6237\u4ECE\u4FE1\u606F\u5316\u6218\u7565\u5230\u7CFB\u7EDF\u843D\u5730\u7684\u5404\u65B9\u9762\u9700\u6C42\uFF1B </div></div><div class="item" data-v-ccf3f164${_scopeId}><img class="icon"${ssrRenderAttr("src", _imports_1)} alt="" data-v-ccf3f164${_scopeId}><h2 class="subtitle" data-v-ccf3f164${_scopeId}>\u6280\u672F\u670D\u52A1</h2><div class="desc" data-v-ccf3f164${_scopeId}> \u63D0\u4F9B\u5E94\u7528\u7CFB\u7EDF\u5B9E\u65BD\u3001\u4FE1\u606F\u5316\u7BA1\u7406\u548C\u6280\u672F\u65B9\u6848\u652F\u6301\u7B49\u4E00\u7CFB\u5217\u54A8\u8BE2\u548C\u670D\u52A1\uFF0C\u5339\u914D\u5BA2\u6237\u4ECE\u4FE1\u606F\u5316\u6218\u7565\u5230\u7CFB\u7EDF\u843D\u5730\u7684\u5404\u65B9\u9762\u9700\u6C42\uFF1B </div></div><div class="item" data-v-ccf3f164${_scopeId}><img class="icon"${ssrRenderAttr("src", _imports_2)} alt="" data-v-ccf3f164${_scopeId}><h2 class="subtitle" data-v-ccf3f164${_scopeId}>\u7EF4\u4FDD\u670D\u52A1</h2><div class="desc" data-v-ccf3f164${_scopeId}> \u63D0\u4F9B\u5E94\u7528\u7CFB\u7EDF\u5B9E\u65BD\u3001\u4FE1\u606F\u5316\u7BA1\u7406\u548C\u6280\u672F\u65B9\u6848\u652F\u6301\u7B49\u4E00\u7CFB\u5217\u54A8\u8BE2\u548C\u670D\u52A1\uFF0C\u5339\u914D\u5BA2\u6237\u4ECE\u4FE1\u606F\u5316\u6218\u7565\u5230\u7CFB\u7EDF\u843D\u5730\u7684\u5404\u65B9\u9762\u9700\u6C42\uFF1B </div></div></div></main><main class="homePanel" style="${ssrRenderStyle({ "padding": "24px 0" })}" data-v-ccf3f164${_scopeId}><h1 class="title" data-v-ccf3f164${_scopeId}>\u6211\u4EEC\u7684\u89E3\u51B3\u65B9\u6848</h1><div class="answerPanel" data-v-ccf3f164${_scopeId}><div class="answers" data-v-ccf3f164${_scopeId}><div class="answer" data-v-ccf3f164${_scopeId}><div class="container" data-v-ccf3f164${_scopeId}><img${ssrRenderAttr("src", _imports_3)} class="icon" data-v-ccf3f164${_scopeId}><h2 data-v-ccf3f164${_scopeId}>\u4F01\u4E1A\u4FE1\u606F\u5316\u89E3\u51B3\u65B9\u6848</h2><div class="desc" data-v-ccf3f164${_scopeId}> \u4F01\u4E1A\u8BA4\u8BC6\u5230\u4FE1\u606F\u5316\u7684\u91CD\u8981\u6027\uFF0C\u786E\u5B9A\u8981\u4E0A\u4FE1\u606F\u5316\u7CFB\u7EDF\u540E\uFF0C\u8981\u9009\u62E9\u5230\u5E95\u8981\u4E0A\u4EC0\u4E48\u7CFB\u7EDF\uFF0C\u5982\u4F55\u9009\u62E9 </div></div></div><div class="answer" data-v-ccf3f164${_scopeId}><div class="container" data-v-ccf3f164${_scopeId}><img${ssrRenderAttr("src", _imports_4)} class="icon" data-v-ccf3f164${_scopeId}><h2 data-v-ccf3f164${_scopeId}>\u79FB\u52A8\u7AEF\u5E94\u7528\u89E3\u51B3\u65B9\u6848</h2><div class="desc" data-v-ccf3f164${_scopeId}> \u4F01\u4E1A\u8BA4\u8BC6\u5230\u4FE1\u606F\u5316\u7684\u91CD\u8981\u6027\uFF0C\u786E\u5B9A\u8981\u4E0A\u4FE1\u606F\u5316\u7CFB\u7EDF\u540E\uFF0C\u8981\u9009\u62E9\u5230\u5E95\u8981\u4E0A\u4EC0\u4E48\u7CFB\u7EDF\uFF0C\u5982\u4F55\u9009\u62E9 </div></div></div><div class="answer" data-v-ccf3f164${_scopeId}><div class="container" data-v-ccf3f164${_scopeId}><img${ssrRenderAttr("src", _imports_5)} class="icon" data-v-ccf3f164${_scopeId}><h2 data-v-ccf3f164${_scopeId}>\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u89E3\u51B3\u65B9\u6848</h2><div class="desc" data-v-ccf3f164${_scopeId}> \u4F01\u4E1A\u8BA4\u8BC6\u5230\u4FE1\u606F\u5316\u7684\u91CD\u8981\u6027\uFF0C\u786E\u5B9A\u8981\u4E0A\u4FE1\u606F\u5316\u7CFB\u7EDF\u540E\uFF0C\u8981\u9009\u62E9\u5230\u5E95\u8981\u4E0A\u4EC0\u4E48\u7CFB\u7EDF\uFF0C\u5982\u4F55\u9009\u62E9 </div></div></div><div class="answer" data-v-ccf3f164${_scopeId}><div class="container" data-v-ccf3f164${_scopeId}><img${ssrRenderAttr("src", _imports_6)} class="icon" data-v-ccf3f164${_scopeId}><h2 data-v-ccf3f164${_scopeId}>\u5B89\u5168\u5E94\u7528\u89E3\u51B3\u65B9\u6848</h2><div class="desc" data-v-ccf3f164${_scopeId}> \u4F01\u4E1A\u8BA4\u8BC6\u5230\u4FE1\u606F\u5316\u7684\u91CD\u8981\u6027\uFF0C\u786E\u5B9A\u8981\u4E0A\u4FE1\u606F\u5316\u7CFB\u7EDF\u540E\uFF0C\u8981\u9009\u62E9\u5230\u5E95\u8981\u4E0A\u4EC0\u4E48\u7CFB\u7EDF\uFF0C\u5982\u4F55\u9009\u62E9 </div></div></div></div></div></main>`);
      } else {
        return [
          createVNode(_component_Meta, {
            name: "keywords",
            content: "\u6E56\u5317\u8001baby\u7F51\u7EDC\u79D1\u6280\u5DE5\u4F5C\u5BA4"
          }),
          createVNode(_component_Meta, {
            name: "description",
            content: "\u6E56\u5317\u8F6F\u4EF6\u5F00\u53D1,\u5C0F\u7A0B\u5E8F\u5F00\u53D1,App\u5F00\u53D1,\u8F6F\u4EF6\u4E13\u5229\u6CE8\u518C,\u6280\u672F\u670D\u52A1,\u6280\u672F\u652F\u6301"
          }),
          createVNode("div", { class: "homePageSwiper" }, [
            createVNode(_component_Swiper, {
              modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay), "SwiperEffectCreative" in _ctx ? _ctx.SwiperEffectCreative : unref(EffectCreative)],
              "slides-per-view": 1,
              loop: true,
              effect: "creative",
              autoplay: {
                delay: 3e3,
                disableOnInteraction: true
              },
              pagination: true,
              "creative-effect": {
                prev: {
                  shadow: true,
                  translate: ["-20%", 0, -1]
                },
                next: {
                  translate: ["100%", 0, 0]
                }
              }
            }, {
              default: withCtx(() => [
                createVNode(_component_SwiperSlide, null, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "img-cover",
                      style: { "background-image": "url('/demo1.jpg')" }
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_SwiperSlide, null, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "img-cover",
                      style: { "background-image": "url('/demo2.jpg')" }
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_SwiperSlide, null, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "img-cover",
                      style: { "background-image": "url('/demo3.jpg')" }
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_SwiperSlide, null, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "img-cover",
                      style: { "background-image": "url('/demo4.jpg')" }
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modules"])
          ]),
          createVNode("main", { class: "homePanel" }, [
            createVNode("h1", { class: "title" }, "\u6EE1\u8DB3\u5BA2\u6237\u5E7F\u6CDB\u7684\u4E1A\u52A1\u9700\u6C42"),
            createVNode("div", { class: "productions" }, [
              createVNode("div", { class: "item" }, [
                createVNode("img", {
                  class: "icon",
                  src: _imports_0,
                  alt: ""
                }),
                createVNode("h2", { class: "subtitle" }, "\u54A8\u8BE2\u670D\u52A1"),
                createVNode("div", { class: "desc" }, " \u63D0\u4F9B\u5E94\u7528\u7CFB\u7EDF\u5B9E\u65BD\u3001\u4FE1\u606F\u5316\u7BA1\u7406\u548C\u6280\u672F\u65B9\u6848\u652F\u6301\u7B49\u4E00\u7CFB\u5217\u54A8\u8BE2\u548C\u670D\u52A1\uFF0C\u5339\u914D\u5BA2\u6237\u4ECE\u4FE1\u606F\u5316\u6218\u7565\u5230\u7CFB\u7EDF\u843D\u5730\u7684\u5404\u65B9\u9762\u9700\u6C42\uFF1B ")
              ]),
              createVNode("div", { class: "item" }, [
                createVNode("img", {
                  class: "icon",
                  src: _imports_1,
                  alt: ""
                }),
                createVNode("h2", { class: "subtitle" }, "\u6280\u672F\u670D\u52A1"),
                createVNode("div", { class: "desc" }, " \u63D0\u4F9B\u5E94\u7528\u7CFB\u7EDF\u5B9E\u65BD\u3001\u4FE1\u606F\u5316\u7BA1\u7406\u548C\u6280\u672F\u65B9\u6848\u652F\u6301\u7B49\u4E00\u7CFB\u5217\u54A8\u8BE2\u548C\u670D\u52A1\uFF0C\u5339\u914D\u5BA2\u6237\u4ECE\u4FE1\u606F\u5316\u6218\u7565\u5230\u7CFB\u7EDF\u843D\u5730\u7684\u5404\u65B9\u9762\u9700\u6C42\uFF1B ")
              ]),
              createVNode("div", { class: "item" }, [
                createVNode("img", {
                  class: "icon",
                  src: _imports_2,
                  alt: ""
                }),
                createVNode("h2", { class: "subtitle" }, "\u7EF4\u4FDD\u670D\u52A1"),
                createVNode("div", { class: "desc" }, " \u63D0\u4F9B\u5E94\u7528\u7CFB\u7EDF\u5B9E\u65BD\u3001\u4FE1\u606F\u5316\u7BA1\u7406\u548C\u6280\u672F\u65B9\u6848\u652F\u6301\u7B49\u4E00\u7CFB\u5217\u54A8\u8BE2\u548C\u670D\u52A1\uFF0C\u5339\u914D\u5BA2\u6237\u4ECE\u4FE1\u606F\u5316\u6218\u7565\u5230\u7CFB\u7EDF\u843D\u5730\u7684\u5404\u65B9\u9762\u9700\u6C42\uFF1B ")
              ])
            ])
          ]),
          createVNode("main", {
            class: "homePanel",
            style: { "padding": "24px 0" }
          }, [
            createVNode("h1", { class: "title" }, "\u6211\u4EEC\u7684\u89E3\u51B3\u65B9\u6848"),
            createVNode("div", { class: "answerPanel" }, [
              createVNode("div", { class: "answers" }, [
                createVNode("div", { class: "answer" }, [
                  createVNode("div", { class: "container" }, [
                    createVNode("img", {
                      src: _imports_3,
                      class: "icon"
                    }),
                    createVNode("h2", null, "\u4F01\u4E1A\u4FE1\u606F\u5316\u89E3\u51B3\u65B9\u6848"),
                    createVNode("div", { class: "desc" }, " \u4F01\u4E1A\u8BA4\u8BC6\u5230\u4FE1\u606F\u5316\u7684\u91CD\u8981\u6027\uFF0C\u786E\u5B9A\u8981\u4E0A\u4FE1\u606F\u5316\u7CFB\u7EDF\u540E\uFF0C\u8981\u9009\u62E9\u5230\u5E95\u8981\u4E0A\u4EC0\u4E48\u7CFB\u7EDF\uFF0C\u5982\u4F55\u9009\u62E9 ")
                  ])
                ]),
                createVNode("div", { class: "answer" }, [
                  createVNode("div", { class: "container" }, [
                    createVNode("img", {
                      src: _imports_4,
                      class: "icon"
                    }),
                    createVNode("h2", null, "\u79FB\u52A8\u7AEF\u5E94\u7528\u89E3\u51B3\u65B9\u6848"),
                    createVNode("div", { class: "desc" }, " \u4F01\u4E1A\u8BA4\u8BC6\u5230\u4FE1\u606F\u5316\u7684\u91CD\u8981\u6027\uFF0C\u786E\u5B9A\u8981\u4E0A\u4FE1\u606F\u5316\u7CFB\u7EDF\u540E\uFF0C\u8981\u9009\u62E9\u5230\u5E95\u8981\u4E0A\u4EC0\u4E48\u7CFB\u7EDF\uFF0C\u5982\u4F55\u9009\u62E9 ")
                  ])
                ]),
                createVNode("div", { class: "answer" }, [
                  createVNode("div", { class: "container" }, [
                    createVNode("img", {
                      src: _imports_5,
                      class: "icon"
                    }),
                    createVNode("h2", null, "\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u89E3\u51B3\u65B9\u6848"),
                    createVNode("div", { class: "desc" }, " \u4F01\u4E1A\u8BA4\u8BC6\u5230\u4FE1\u606F\u5316\u7684\u91CD\u8981\u6027\uFF0C\u786E\u5B9A\u8981\u4E0A\u4FE1\u606F\u5316\u7CFB\u7EDF\u540E\uFF0C\u8981\u9009\u62E9\u5230\u5E95\u8981\u4E0A\u4EC0\u4E48\u7CFB\u7EDF\uFF0C\u5982\u4F55\u9009\u62E9 ")
                  ])
                ]),
                createVNode("div", { class: "answer" }, [
                  createVNode("div", { class: "container" }, [
                    createVNode("img", {
                      src: _imports_6,
                      class: "icon"
                    }),
                    createVNode("h2", null, "\u5B89\u5168\u5E94\u7528\u89E3\u51B3\u65B9\u6848"),
                    createVNode("div", { class: "desc" }, " \u4F01\u4E1A\u8BA4\u8BC6\u5230\u4FE1\u606F\u5316\u7684\u91CD\u8981\u6027\uFF0C\u786E\u5B9A\u8981\u4E0A\u4FE1\u606F\u5316\u7CFB\u7EDF\u540E\uFF0C\u8981\u9009\u62E9\u5230\u5E95\u8981\u4E0A\u4EC0\u4E48\u7CFB\u7EDF\uFF0C\u5982\u4F55\u9009\u62E9 ")
                  ])
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ccf3f164"]]);

export { index as default };
//# sourceMappingURL=index-daa9083c.mjs.map
