globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';
import gracefulShutdown from 'http-graceful-shutdown';

const inlineAppConfig = {
  "ui": {
    "primary": "green",
    "gray": "cool",
    "colors": [
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
      "primary"
    ]
  }
};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {}
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const script = "\"use strict\";(()=>{const a=window,e=document.documentElement,m=[\"dark\",\"light\"],c=window.localStorage.getItem(\"nuxt-color-mode\")||\"system\";let n=c===\"system\"?f():c;const l=e.getAttribute(\"data-color-mode-forced\");l&&(n=l),i(n),a[\"__NUXT_COLOR_MODE__\"]={preference:c,value:n,getColorScheme:f,addColorScheme:i,removeColorScheme:d};function i(o){const t=\"\"+o+\"\",s=\"\";e.classList?e.classList.add(t):e.className+=\" \"+t,s&&e.setAttribute(\"data-\"+s,o)}function d(o){const t=\"\"+o+\"\",s=\"\";e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp(t,\"g\"),\"\"),s&&e.removeAttribute(\"data-\"+s)}function r(o){return a.matchMedia(\"(prefers-color-scheme\"+o+\")\")}function f(){if(a.matchMedia&&r(\"\").media!==\"not all\"){for(const o of m)if(r(\":\"+o).matches)return o}return\"light\"}})();\n";

const _DJcxfnsX30 = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  _DJcxfnsX30
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function trapUnhandledNodeErrors() {
  {
    process.on(
      "unhandledRejection",
      (err) => console.error("[nitro] [unhandledRejection] " + err)
    );
    process.on(
      "uncaughtException",
      (err) => console.error("[nitro]  [uncaughtException] " + err)
    );
  }
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(html);
});

const assets = {
  "/about.jpg": {
    "type": "image/jpeg",
    "etag": "\"14b34-g9h55rEhZgU8dnLiTU4gjTJdTt8\"",
    "mtime": "2023-07-23T07:51:26.437Z",
    "size": 84788,
    "path": "../public/about.jpg"
  },
  "/answer-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"1c5ebc-YLwZche8lW268DEQ0FEQEiXclcE\"",
    "mtime": "2023-07-23T04:03:54.383Z",
    "size": 1859260,
    "path": "../public/answer-bg.jpg"
  },
  "/answer1.png": {
    "type": "image/png",
    "etag": "\"110e-60RRFqA9yL0ok8ptb3uCu1NuG7o\"",
    "mtime": "2023-07-23T03:49:12.262Z",
    "size": 4366,
    "path": "../public/answer1.png"
  },
  "/answer2.png": {
    "type": "image/png",
    "etag": "\"a18-Hq8AEml6kcqrPuIQ51bntZPIa44\"",
    "mtime": "2023-07-23T03:49:59.619Z",
    "size": 2584,
    "path": "../public/answer2.png"
  },
  "/answer3.png": {
    "type": "image/png",
    "etag": "\"c28-SowQH10WFdPBsc0qVBZYWvlclAM\"",
    "mtime": "2023-07-23T03:50:23.110Z",
    "size": 3112,
    "path": "../public/answer3.png"
  },
  "/answer4.png": {
    "type": "image/png",
    "etag": "\"dda-T+1EHAb/nDHDrGoCqe/uPnv3AtA\"",
    "mtime": "2023-07-23T03:50:41.164Z",
    "size": 3546,
    "path": "../public/answer4.png"
  },
  "/ask.png": {
    "type": "image/png",
    "etag": "\"235a-JtiTB8kgRtXHcNe/aKhNoglIifE\"",
    "mtime": "2023-07-23T03:21:22.566Z",
    "size": 9050,
    "path": "../public/ask.png"
  },
  "/close.svg": {
    "type": "image/svg+xml",
    "etag": "\"436-KP/FYFpINCmJipV2+44G5tSvXy8\"",
    "mtime": "2023-07-23T08:32:33.652Z",
    "size": 1078,
    "path": "../public/close.svg"
  },
  "/connect.svg": {
    "type": "image/svg+xml",
    "etag": "\"5fde-nkM9405EeAvjlx9OGSktlKG0L+E\"",
    "mtime": "2023-07-23T05:39:23.050Z",
    "size": 24542,
    "path": "../public/connect.svg"
  },
  "/demo1.jpg": {
    "type": "image/jpeg",
    "etag": "\"18547d-d5hf2OSE/rzDqMUxUvcgQ4UcTtU\"",
    "mtime": "2023-07-23T03:00:11.867Z",
    "size": 1594493,
    "path": "../public/demo1.jpg"
  },
  "/demo1.webp": {
    "type": "image/webp",
    "etag": "\"7b28-wLZSTLiWcwP3wx7kWU+mhkbT/78\"",
    "mtime": "2023-07-23T02:53:07.320Z",
    "size": 31528,
    "path": "../public/demo1.webp"
  },
  "/demo2.jpg": {
    "type": "image/jpeg",
    "etag": "\"2f0144-BLgqkC5fQAi39xDAfFl3kYZRhoc\"",
    "mtime": "2023-07-23T03:00:20.976Z",
    "size": 3080516,
    "path": "../public/demo2.jpg"
  },
  "/demo2.png": {
    "type": "image/png",
    "etag": "\"1b38-GxAivRInXwhMZk2QXCi9qRzsEYw\"",
    "mtime": "2023-07-23T02:53:30.009Z",
    "size": 6968,
    "path": "../public/demo2.png"
  },
  "/demo3.jpg": {
    "type": "image/jpeg",
    "etag": "\"76a4c-C6rnBfrVzVFhV+3KR3PnCnTcpRU\"",
    "mtime": "2023-07-23T03:00:34.567Z",
    "size": 485964,
    "path": "../public/demo3.jpg"
  },
  "/demo4.jpg": {
    "type": "image/jpeg",
    "etag": "\"931c2-n83VIE1ClO/9UVuLl/rJN/SU1+Q\"",
    "mtime": "2023-07-23T03:00:48.351Z",
    "size": 602562,
    "path": "../public/demo4.jpg"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2023-07-22T14:58:51.000Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/js.jpg": {
    "type": "image/jpeg",
    "etag": "\"a90c5-ShDDovLbaLnm5E/Hlw5vzaDAp1Y\"",
    "mtime": "2023-07-23T07:55:17.987Z",
    "size": 692421,
    "path": "../public/js.jpg"
  },
  "/logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"10a1-Kn001E7W+acVkts0pQKaP8u2Nwc\"",
    "mtime": "2023-07-22T18:34:54.000Z",
    "size": 4257,
    "path": "../public/logo.svg"
  },
  "/OA.png": {
    "type": "image/png",
    "etag": "\"69ffa-ClpWPaIdIe9Bc/4KapomPNsSiA8\"",
    "mtime": "2023-07-23T07:38:28.356Z",
    "size": 434170,
    "path": "../public/OA.png"
  },
  "/product-cover.jpg": {
    "type": "image/jpeg",
    "etag": "\"2d39b-A2fYbbvjuIIIhupz0iS4ORDKvVM\"",
    "mtime": "2023-07-23T07:04:01.188Z",
    "size": 185243,
    "path": "../public/product-cover.jpg"
  },
  "/repair.png": {
    "type": "image/png",
    "etag": "\"f70-OFIzAKo+W2aWuPtwFlGZhDivr8c\"",
    "mtime": "2023-07-23T03:22:06.626Z",
    "size": 3952,
    "path": "../public/repair.png"
  },
  "/tec.png": {
    "type": "image/png",
    "etag": "\"1062-WrHyQSk5zjzW1MmxTVuRv/u52qE\"",
    "mtime": "2023-07-23T03:21:44.502Z",
    "size": 4194,
    "path": "../public/tec.png"
  },
  "/zx.png": {
    "type": "image/png",
    "etag": "\"d5e-CdQfDFqkN73niJIQ7OqatnmBtO4\"",
    "mtime": "2023-07-23T08:11:36.820Z",
    "size": 3422,
    "path": "../public/zx.png"
  },
  "/_nuxt/about.71215016.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2c1-q3Tz7U8usHRjCPGlUQci2rC4gkg\"",
    "mtime": "2023-07-23T08:35:19.502Z",
    "size": 705,
    "path": "../public/_nuxt/about.71215016.css"
  },
  "/_nuxt/about.77f9450e.js": {
    "type": "application/javascript",
    "etag": "\"a49-ZL/fHi9RMAkcQatq3YZHh28XVx8\"",
    "mtime": "2023-07-23T08:35:19.502Z",
    "size": 2633,
    "path": "../public/_nuxt/about.77f9450e.js"
  },
  "/_nuxt/components.cd76e39e.js": {
    "type": "application/javascript",
    "etag": "\"46a-wDoXdcos4m7+28W8hJIl0rQ/UVM\"",
    "mtime": "2023-07-23T08:35:19.502Z",
    "size": 1130,
    "path": "../public/_nuxt/components.cd76e39e.js"
  },
  "/_nuxt/default.7ce8ee04.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3a7-/B632wVNli6/uZZuRjSD/Mt/JTw\"",
    "mtime": "2023-07-23T08:35:19.502Z",
    "size": 935,
    "path": "../public/_nuxt/default.7ce8ee04.css"
  },
  "/_nuxt/default.acd42ed3.js": {
    "type": "application/javascript",
    "etag": "\"8b6-jJeHJ9BxWCf1XQAvgA/Aupj3Lus\"",
    "mtime": "2023-07-23T08:35:19.502Z",
    "size": 2230,
    "path": "../public/_nuxt/default.acd42ed3.js"
  },
  "/_nuxt/entry.59eb28c5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1c5-0z0XRMWt98aGpo2zv2gv/lEkFFM\"",
    "mtime": "2023-07-23T08:35:19.502Z",
    "size": 453,
    "path": "../public/_nuxt/entry.59eb28c5.css"
  },
  "/_nuxt/entry.b294e9da.js": {
    "type": "application/javascript",
    "etag": "\"1dd4f-0I80pf2K2qNI+tObOdC1gzunGZ8\"",
    "mtime": "2023-07-23T08:35:19.502Z",
    "size": 122191,
    "path": "../public/_nuxt/entry.b294e9da.js"
  },
  "/_nuxt/error-404.97b79d34.js": {
    "type": "application/javascript",
    "etag": "\"8d3-at3IoTwXGihUDhtSEtrk4gj3vAI\"",
    "mtime": "2023-07-23T08:35:19.502Z",
    "size": 2259,
    "path": "../public/_nuxt/error-404.97b79d34.js"
  },
  "/_nuxt/error-404.fdd90155.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e70-AO91NLYpiJ9IvhI8WzOcxQ5751U\"",
    "mtime": "2023-07-23T08:35:19.502Z",
    "size": 3696,
    "path": "../public/_nuxt/error-404.fdd90155.css"
  },
  "/_nuxt/error-500.d27dc258.js": {
    "type": "application/javascript",
    "etag": "\"77c-tVspmg94WGjec/IFdKWVZvU6cak\"",
    "mtime": "2023-07-23T08:35:19.502Z",
    "size": 1916,
    "path": "../public/_nuxt/error-500.d27dc258.js"
  },
  "/_nuxt/error-500.f4699d7d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7e0-6O+Y/kxH/LP9BixluxTukQJDmrs\"",
    "mtime": "2023-07-23T08:35:19.502Z",
    "size": 2016,
    "path": "../public/_nuxt/error-500.f4699d7d.css"
  },
  "/_nuxt/index.385c33a1.js": {
    "type": "application/javascript",
    "etag": "\"1087-FxR9C+jzqDMx0KkiElbuUsB2FWY\"",
    "mtime": "2023-07-23T08:35:19.502Z",
    "size": 4231,
    "path": "../public/_nuxt/index.385c33a1.js"
  },
  "/_nuxt/index.da60c0f3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7f2-pz32d6K0XmA5dqaX30DcOc4NR4Q\"",
    "mtime": "2023-07-23T08:35:19.502Z",
    "size": 2034,
    "path": "../public/_nuxt/index.da60c0f3.css"
  },
  "/_nuxt/layout.5bd1a1d3.js": {
    "type": "application/javascript",
    "etag": "\"550-bmbfJcCNbi7dj0/y/ceoDzFQpNE\"",
    "mtime": "2023-07-23T08:35:19.502Z",
    "size": 1360,
    "path": "../public/_nuxt/layout.5bd1a1d3.js"
  },
  "/_nuxt/product.074df816.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"595-ziw5hdCrmBAiwHPJLyqMlUfTzXg\"",
    "mtime": "2023-07-23T08:35:19.502Z",
    "size": 1429,
    "path": "../public/_nuxt/product.074df816.css"
  },
  "/_nuxt/product.aa53cb24.js": {
    "type": "application/javascript",
    "etag": "\"5e7-BCf44aM8okWcdDcNnASrTyAZzow\"",
    "mtime": "2023-07-23T08:35:19.502Z",
    "size": 1511,
    "path": "../public/_nuxt/product.aa53cb24.js"
  },
  "/_nuxt/swiper-vue.6810c334.js": {
    "type": "application/javascript",
    "etag": "\"260a8-BYHpwzV3jcoK1MQ2ZnzQ81qDugs\"",
    "mtime": "2023-07-23T08:35:19.502Z",
    "size": 155816,
    "path": "../public/_nuxt/swiper-vue.6810c334.js"
  },
  "/_nuxt/swiper-vue.b2fa9f9b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"47a9-+J9/uKoMtbfdtUfNtPsN85HlRaI\"",
    "mtime": "2023-07-23T08:35:19.502Z",
    "size": 18345,
    "path": "../public/_nuxt/swiper-vue.b2fa9f9b.css"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_E6bhpZ = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_E6bhpZ, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_E6bhpZ, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  gracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const listener = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
