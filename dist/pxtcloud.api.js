!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).PxtCloudAPI=t()}}(function(){return function i(a,u,f){function s(e,t){if(!u[e]){if(!a[e]){var r="function"==typeof require&&require;if(!t&&r)return r(e,!0);if(c)return c(e,!0);var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}var o=u[e]={exports:{}};a[e][0].call(o.exports,function(t){return s(a[e][1][t]||t)},o,o.exports,i,a,u,f)}return u[e].exports}for(var c="function"==typeof require&&require,t=0;t<f.length;t++)s(f[t]);return s}({1:[function(t,e,r){"use strict";var n;Object.defineProperty(r,"__esModule",{value:!0}),(n=r.Events||(r.Events={})).ChatNewMessage="new message",n.UserAddSelf="add self",n.UserLeft="user left",n.UserJoined="user joined",n.UserRemoveSelf="remove self",n.UserSelfInfo="self info"},{}],2:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=t("clone-deep"),i=t("deep-diff"),n=function(){function t(){this._synceddata={}}return t.prototype.addDataSource=function(t,e){var r=this._synceddata[t];return r||(this._synceddata[t]={source:e}),!!r},t.prototype.removeDataSource=function(t){return delete this._synceddata[t]},t.prototype.currentSynced=function(t){var e=this._synceddata[t];if(e)return e.latest},t.prototype.syncToData=function(t){var e=this._synceddata[t];if(e){var r=e.source.cloner?e.source.cloner(e.source,o):o(e.source),n=i(e.latest||{},r);if(n)return e.latest=r,n}},t}();r.DataRepo=n},{"clone-deep":6,"deep-diff":7}],3:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),function(t){for(var e in t)r.hasOwnProperty(e)||(r[e]=t[e])}(t("./api"))},{"./api":1}],4:[function(t,e,r){"use strict";r.byteLength=function(t){var e=p(t),r=e[0],n=e[1];return 3*(r+n)/4-n},r.toByteArray=function(t){for(var e,r=p(t),n=r[0],o=r[1],i=new l((s=n,c=o,3*(s+c)/4-c)),a=0,u=0<o?n-4:n,f=0;f<u;f+=4)e=h[t.charCodeAt(f)]<<18|h[t.charCodeAt(f+1)]<<12|h[t.charCodeAt(f+2)]<<6|h[t.charCodeAt(f+3)],i[a++]=e>>16&255,i[a++]=e>>8&255,i[a++]=255&e;var s,c;2===o&&(e=h[t.charCodeAt(f)]<<2|h[t.charCodeAt(f+1)]>>4,i[a++]=255&e);1===o&&(e=h[t.charCodeAt(f)]<<10|h[t.charCodeAt(f+1)]<<4|h[t.charCodeAt(f+2)]>>2,i[a++]=e>>8&255,i[a++]=255&e);return i},r.fromByteArray=function(t){for(var e,r=t.length,n=r%3,o=[],i=0,a=r-n;i<a;i+=16383)o.push(f(t,i,a<i+16383?a:i+16383));1===n?(e=t[r-1],o.push(u[e>>2]+u[e<<4&63]+"==")):2===n&&(e=(t[r-2]<<8)+t[r-1],o.push(u[e>>10]+u[e>>4&63]+u[e<<2&63]+"="));return o.join("")};for(var u=[],h=[],l="undefined"!=typeof Uint8Array?Uint8Array:Array,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=0,i=n.length;o<i;++o)u[o]=n[o],h[n.charCodeAt(o)]=o;function p(t){var e=t.length;if(0<e%4)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function f(t,e,r){for(var n,o,i=[],a=e;a<r;a+=3)n=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]),i.push(u[(o=n)>>18&63]+u[o>>12&63]+u[o>>6&63]+u[63&o]);return i.join("")}h["-".charCodeAt(0)]=62,h["_".charCodeAt(0)]=63},{}],5:[function(t,e,r){"use strict";var n=t("base64-js"),i=t("ieee754");r.Buffer=h,r.SlowBuffer=function(t){+t!=t&&(t=0);return h.alloc(+t)},r.INSPECT_MAX_BYTES=50;var o=2147483647;function a(t){if(o<t)throw new RangeError("Invalid typed array length");var e=new Uint8Array(t);return e.__proto__=h.prototype,e}function h(t,e,r){if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return s(t)}return u(t,e,r)}function u(t,e,r){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return T(t)||t&&T(t.buffer)?function(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');var n;n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r);return n.__proto__=h.prototype,n}(t,e,r):"string"==typeof t?function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!h.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var r=0|p(t,e),n=a(r),o=n.write(t,e);o!==r&&(n=n.slice(0,o));return n}(t,e):function(t){if(h.isBuffer(t)){var e=0|l(t.length),r=a(e);return 0===r.length||t.copy(r,0,0,e),r}if(t){if(ArrayBuffer.isView(t)||"length"in t)return"number"!=typeof t.length||N(t.length)?a(0):c(t);if("Buffer"===t.type&&Array.isArray(t.data))return c(t.data)}throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object.")}(t)}function f(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('"size" argument must not be negative')}function s(t){return f(t),a(t<0?0:0|l(t))}function c(t){for(var e=t.length<0?0:0|l(t.length),r=a(e),n=0;n<e;n+=1)r[n]=255&t[n];return r}function l(t){if(o<=t)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return 0|t}function p(t,e){if(h.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||T(t))return t.byteLength;"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return D(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return M(t).length;default:if(n)return D(t).length;e=(""+e).toLowerCase(),n=!0}}function y(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function g(t,e,r,n,o){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):2147483647<r?r=2147483647:r<-2147483648&&(r=-2147483648),N(r=+r)&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return-1;r=t.length-1}else if(r<0){if(!o)return-1;r=0}if("string"==typeof e&&(e=h.from(e,n)),h.isBuffer(e))return 0===e.length?-1:d(t,e,r,n,o);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):d(t,[e],r,n,o);throw new TypeError("val must be string, number or Buffer")}function d(t,e,r,n,o){var i,a=1,u=t.length,f=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;u/=a=2,f/=2,r/=2}function s(t,e){return 1===a?t[e]:t.readUInt16BE(e*a)}if(o){var c=-1;for(i=r;i<u;i++)if(s(t,i)===s(e,-1===c?0:i-c)){if(-1===c&&(c=i),i-c+1===f)return c*a}else-1!==c&&(i-=i-c),c=-1}else for(u<r+f&&(r=u-f),i=r;0<=i;i--){for(var h=!0,l=0;l<f;l++)if(s(t,i+l)!==s(e,l)){h=!1;break}if(h)return i}return-1}function b(t,e,r,n){r=Number(r)||0;var o=t.length-r;n?o<(n=Number(n))&&(n=o):n=o;var i=e.length;i/2<n&&(n=i/2);for(var a=0;a<n;++a){var u=parseInt(e.substr(2*a,2),16);if(N(u))return a;t[r+a]=u}return a}function v(t,e,r,n){return L(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function w(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function m(t,e,r){r=Math.min(t.length,r);for(var n=[],o=e;o<r;){var i,a,u,f,s=t[o],c=null,h=239<s?4:223<s?3:191<s?2:1;if(o+h<=r)switch(h){case 1:s<128&&(c=s);break;case 2:128==(192&(i=t[o+1]))&&127<(f=(31&s)<<6|63&i)&&(c=f);break;case 3:i=t[o+1],a=t[o+2],128==(192&i)&&128==(192&a)&&2047<(f=(15&s)<<12|(63&i)<<6|63&a)&&(f<55296||57343<f)&&(c=f);break;case 4:i=t[o+1],a=t[o+2],u=t[o+3],128==(192&i)&&128==(192&a)&&128==(192&u)&&65535<(f=(15&s)<<18|(63&i)<<12|(63&a)<<6|63&u)&&f<1114112&&(c=f)}null===c?(c=65533,h=1):65535<c&&(c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),o+=h}return function(t){var e=t.length;if(e<=E)return String.fromCharCode.apply(String,t);var r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=E));return r}(n)}r.kMaxLength=o,(h.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()}catch(t){return!1}}())||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(h.prototype,"parent",{get:function(){if(this instanceof h)return this.buffer}}),Object.defineProperty(h.prototype,"offset",{get:function(){if(this instanceof h)return this.byteOffset}}),"undefined"!=typeof Symbol&&Symbol.species&&h[Symbol.species]===h&&Object.defineProperty(h,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1}),h.poolSize=8192,h.from=function(t,e,r){return u(t,e,r)},h.prototype.__proto__=Uint8Array.prototype,h.__proto__=Uint8Array,h.alloc=function(t,e,r){return o=e,i=r,f(n=t),n<=0?a(n):void 0!==o?"string"==typeof i?a(n).fill(o,i):a(n).fill(o):a(n);var n,o,i},h.allocUnsafe=function(t){return s(t)},h.allocUnsafeSlow=function(t){return s(t)},h.isBuffer=function(t){return null!=t&&!0===t._isBuffer},h.compare=function(t,e){if(!h.isBuffer(t)||!h.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},h.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return h.alloc(0);var r;if(void 0===e)for(r=e=0;r<t.length;++r)e+=t[r].length;var n=h.allocUnsafe(e),o=0;for(r=0;r<t.length;++r){var i=t[r];if(ArrayBuffer.isView(i)&&(i=h.from(i)),!h.isBuffer(i))throw new TypeError('"list" argument must be an Array of Buffers');i.copy(n,o),o+=i.length}return n},h.byteLength=p,h.prototype._isBuffer=!0,h.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)y(this,e,e+1);return this},h.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)y(this,e,e+3),y(this,e+1,e+2);return this},h.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)y(this,e,e+7),y(this,e+1,e+6),y(this,e+2,e+5),y(this,e+3,e+4);return this},h.prototype.toLocaleString=h.prototype.toString=function(){var t=this.length;return 0===t?"":0===arguments.length?m(this,0,t):function(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return S(this,e,r);case"utf8":case"utf-8":return m(this,e,r);case"ascii":return A(this,e,r);case"latin1":case"binary":return B(this,e,r);case"base64":return w(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}.apply(this,arguments)},h.prototype.equals=function(t){if(!h.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===h.compare(this,t)},h.prototype.inspect=function(){var t="",e=r.INSPECT_MAX_BYTES;return 0<this.length&&(t=this.toString("hex",0,e).match(/.{2}/g).join(" "),this.length>e&&(t+=" ... ")),"<Buffer "+t+">"},h.prototype.compare=function(t,e,r,n,o){if(!h.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(o<=n&&r<=e)return 0;if(o<=n)return-1;if(r<=e)return 1;if(this===t)return 0;for(var i=(o>>>=0)-(n>>>=0),a=(r>>>=0)-(e>>>=0),u=Math.min(i,a),f=this.slice(n,o),s=t.slice(e,r),c=0;c<u;++c)if(f[c]!==s[c]){i=f[c],a=s[c];break}return i<a?-1:a<i?1:0},h.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},h.prototype.indexOf=function(t,e,r){return g(this,t,e,r,!0)},h.prototype.lastIndexOf=function(t,e,r){return g(this,t,e,r,!1)},h.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var o=this.length-e;if((void 0===r||o<r)&&(r=o),0<t.length&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i,a,u,f,s,c,h,l,p,y=!1;;)switch(n){case"hex":return b(this,t,e,r);case"utf8":case"utf-8":return l=e,p=r,L(D(t,(h=this).length-l),h,l,p);case"ascii":return v(this,t,e,r);case"latin1":case"binary":return v(this,t,e,r);case"base64":return f=this,s=e,c=r,L(M(t),f,s,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return a=e,u=r,L(function(t,e){for(var r,n,o,i=[],a=0;a<t.length&&!((e-=2)<0);++a)r=t.charCodeAt(a),n=r>>8,o=r%256,i.push(o),i.push(n);return i}(t,(i=this).length-a),i,a,u);default:if(y)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),y=!0}},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var E=4096;function A(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}function B(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}function S(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||n<r)&&(r=n);for(var o="",i=e;i<r;++i)o+=C(t[i]);return o}function _(t,e,r){for(var n=t.slice(e,r),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function I(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(r<t+e)throw new RangeError("Trying to access beyond buffer length")}function U(t,e,r,n,o,i){if(!h.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(o<e||e<i)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function x(t,e,r,n,o,i){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function k(t,e,r,n,o){return e=+e,r>>>=0,o||x(t,0,r,4),i.write(t,e,r,n,23,4),r+4}function j(t,e,r,n,o){return e=+e,r>>>=0,o||x(t,0,r,8),i.write(t,e,r,n,52,8),r+8}h.prototype.slice=function(t,e){var r=this.length;(t=~~t)<0?(t+=r)<0&&(t=0):r<t&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):r<e&&(e=r),e<t&&(e=t);var n=this.subarray(t,e);return n.__proto__=h.prototype,n},h.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||I(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n},h.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||I(t,e,this.length);for(var n=this[t+--e],o=1;0<e&&(o*=256);)n+=this[t+--e]*o;return n},h.prototype.readUInt8=function(t,e){return t>>>=0,e||I(t,1,this.length),this[t]},h.prototype.readUInt16LE=function(t,e){return t>>>=0,e||I(t,2,this.length),this[t]|this[t+1]<<8},h.prototype.readUInt16BE=function(t,e){return t>>>=0,e||I(t,2,this.length),this[t]<<8|this[t+1]},h.prototype.readUInt32LE=function(t,e){return t>>>=0,e||I(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},h.prototype.readUInt32BE=function(t,e){return t>>>=0,e||I(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},h.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||I(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return(o*=128)<=n&&(n-=Math.pow(2,8*e)),n},h.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||I(t,e,this.length);for(var n=e,o=1,i=this[t+--n];0<n&&(o*=256);)i+=this[t+--n]*o;return(o*=128)<=i&&(i-=Math.pow(2,8*e)),i},h.prototype.readInt8=function(t,e){return t>>>=0,e||I(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},h.prototype.readInt16LE=function(t,e){t>>>=0,e||I(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},h.prototype.readInt16BE=function(t,e){t>>>=0,e||I(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},h.prototype.readInt32LE=function(t,e){return t>>>=0,e||I(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},h.prototype.readInt32BE=function(t,e){return t>>>=0,e||I(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},h.prototype.readFloatLE=function(t,e){return t>>>=0,e||I(t,4,this.length),i.read(this,t,!0,23,4)},h.prototype.readFloatBE=function(t,e){return t>>>=0,e||I(t,4,this.length),i.read(this,t,!1,23,4)},h.prototype.readDoubleLE=function(t,e){return t>>>=0,e||I(t,8,this.length),i.read(this,t,!0,52,8)},h.prototype.readDoubleBE=function(t,e){return t>>>=0,e||I(t,8,this.length),i.read(this,t,!1,52,8)},h.prototype.writeUIntLE=function(t,e,r,n){(t=+t,e>>>=0,r>>>=0,n)||U(this,t,e,r,Math.pow(2,8*r)-1,0);var o=1,i=0;for(this[e]=255&t;++i<r&&(o*=256);)this[e+i]=t/o&255;return e+r},h.prototype.writeUIntBE=function(t,e,r,n){(t=+t,e>>>=0,r>>>=0,n)||U(this,t,e,r,Math.pow(2,8*r)-1,0);var o=r-1,i=1;for(this[e+o]=255&t;0<=--o&&(i*=256);)this[e+o]=t/i&255;return e+r},h.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,1,255,0),this[e]=255&t,e+1},h.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},h.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},h.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},h.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},h.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){var o=Math.pow(2,8*r-1);U(this,t,e,r,o-1,-o)}var i=0,a=1,u=0;for(this[e]=255&t;++i<r&&(a*=256);)t<0&&0===u&&0!==this[e+i-1]&&(u=1),this[e+i]=(t/a>>0)-u&255;return e+r},h.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){var o=Math.pow(2,8*r-1);U(this,t,e,r,o-1,-o)}var i=r-1,a=1,u=0;for(this[e+i]=255&t;0<=--i&&(a*=256);)t<0&&0===u&&0!==this[e+i+1]&&(u=1),this[e+i]=(t/a>>0)-u&255;return e+r},h.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},h.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},h.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},h.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},h.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||U(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},h.prototype.writeFloatLE=function(t,e,r){return k(this,t,e,!0,r)},h.prototype.writeFloatBE=function(t,e,r){return k(this,t,e,!1,r)},h.prototype.writeDoubleLE=function(t,e,r){return j(this,t,e,!0,r)},h.prototype.writeDoubleBE=function(t,e,r){return j(this,t,e,!1,r)},h.prototype.copy=function(t,e,r,n){if(!h.isBuffer(t))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),0<n&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var o=n-r;if(this===t&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(e,r,n);else if(this===t&&r<e&&e<n)for(var i=o-1;0<=i;--i)t[i+e]=this[i+r];else Uint8Array.prototype.set.call(t,this.subarray(r,n),e);return o},h.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!h.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===t.length){var o=t.charCodeAt(0);("utf8"===n&&o<128||"latin1"===n)&&(t=o)}}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var i;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(i=e;i<r;++i)this[i]=t;else{var a=h.isBuffer(t)?t:new h(t,n),u=a.length;if(0===u)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<r-e;++i)this[i+e]=a[i%u]}return this};var O=/[^+/0-9A-Za-z-_]/g;function C(t){return t<16?"0"+t.toString(16):t.toString(16)}function D(t,e){var r;e=e||1/0;for(var n=t.length,o=null,i=[],a=0;a<n;++a){if(55295<(r=t.charCodeAt(a))&&r<57344){if(!o){if(56319<r){-1<(e-=3)&&i.push(239,191,189);continue}if(a+1===n){-1<(e-=3)&&i.push(239,191,189);continue}o=r;continue}if(r<56320){-1<(e-=3)&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&-1<(e-=3)&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function M(t){return n.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(O,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function L(t,e,r,n){for(var o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o];return o}function T(t){return t instanceof ArrayBuffer||null!=t&&null!=t.constructor&&"ArrayBuffer"===t.constructor.name&&"number"==typeof t.byteLength}function N(t){return t!=t}},{"base64-js":4,ieee754:8}],6:[function(t,e,r){"use strict";var n=t("shallow-clone"),o=t("kind-of");function i(t,e){switch(o(t)){case"object":return function(t,e){if("function"==typeof e)return e(t);if("object"===o(t)){var r=new t.constructor;for(var n in t)r[n]=i(t[n],e);return r}return t}(t,e);case"array":return function(t,e){for(var r=new t.constructor(t.length),n=0;n<t.length;n++)r[n]=i(t[n],e);return r}(t,e);default:return n(t)}}e.exports=i},{"kind-of":9,"shallow-clone":10}],7:[function(t,o,i){"use strict";var U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,e){var r=function(t){var a=["N","E","A","D"];function e(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}function r(t,e){Object.defineProperty(this,"kind",{value:t,enumerable:!0}),e&&e.length&&Object.defineProperty(this,"path",{value:e,enumerable:!0})}function m(t,e,r){m.super_.call(this,"E",t),Object.defineProperty(this,"lhs",{value:e,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function E(t,e){E.super_.call(this,"N",t),Object.defineProperty(this,"rhs",{value:e,enumerable:!0})}function A(t,e){A.super_.call(this,"D",t),Object.defineProperty(this,"lhs",{value:e,enumerable:!0})}function B(t,e,r){B.super_.call(this,"A",t),Object.defineProperty(this,"index",{value:e,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function u(t,e,r){var n=t.slice((r||e)+1||t.length);return t.length=e<0?t.length+e:e,t.push.apply(t,n),t}function S(t){var e=void 0===t?"undefined":U(t);return"object"!==e?e:t===Math?"math":null===t?"null":Array.isArray(t)?"array":"[object Date]"===Object.prototype.toString.call(t)?"date":"function"==typeof t.toString&&/^\/.*\//.test(t.toString())?"regexp":"object"}function f(t){var e=0;if(0===t.length)return e;for(var r=0;r<t.length;r++){var n=t.charCodeAt(r);e=(e<<5)-e+n,e&=e}return e}function _(t){var e=0,r=S(t);if("array"===r){t.forEach(function(t){e+=_(t)});var n="[type: array, hash: "+e+"]";return e+f(n)}if("object"===r){for(var o in t)if(t.hasOwnProperty(o)){var i="[ type: object, key: "+o+", value hash: "+_(t[o])+"]";e+=f(i)}return e}var a="[ type: "+r+" ; value: "+t+"]";return e+f(a)}function I(t,e,r,n,o,i,a,u){r=r||[],a=a||[];var f=(o=o||[]).slice(0);if(null!=i){if(n){if("function"==typeof n&&n(f,i))return;if("object"===(void 0===n?"undefined":U(n))){if(n.prefilter&&n.prefilter(f,i))return;if(n.normalize){var s=n.normalize(f,i,t,e);s&&(t=s[0],e=s[1])}}}f.push(i)}"regexp"===S(t)&&"regexp"===S(e)&&(t=t.toString(),e=e.toString());var c,h,l,p,y=void 0===t?"undefined":U(t),g=void 0===e?"undefined":U(e),d="undefined"!==y||a&&0<a.length&&a[a.length-1].lhs&&Object.getOwnPropertyDescriptor(a[a.length-1].lhs,i),b="undefined"!==g||a&&0<a.length&&a[a.length-1].rhs&&Object.getOwnPropertyDescriptor(a[a.length-1].rhs,i);if(!d&&b)r.push(new E(f,e));else if(!b&&d)r.push(new A(f,t));else if(S(t)!==S(e))r.push(new m(f,t,e));else if("date"===S(t)&&t-e!=0)r.push(new m(f,t,e));else if("object"===y&&null!==t&&null!==e){for(c=a.length-1;-1<c;--c)if(a[c].lhs===t){p=!0;break}if(p)t!==e&&r.push(new m(f,t,e));else{if(a.push({lhs:t,rhs:e}),Array.isArray(t)){for(u&&(t.sort(function(t,e){return _(t)-_(e)}),e.sort(function(t,e){return _(t)-_(e)})),c=e.length-1,h=t.length-1;h<c;)r.push(new B(f,c,new E(void 0,e[c--])));for(;c<h;)r.push(new B(f,h,new A(void 0,t[h--])));for(;0<=c;--c)I(t[c],e[c],r,n,f,c,a,u)}else{var v=Object.keys(t),w=Object.keys(e);for(c=0;c<v.length;++c)l=v[c],0<=(p=w.indexOf(l))?(I(t[l],e[l],r,n,f,l,a,u),w[p]=null):I(t[l],void 0,r,n,f,l,a,u);for(c=0;c<w.length;++c)(l=w[c])&&I(void 0,e[l],r,n,f,l,a,u)}a.length=a.length-1}}else t!==e&&("number"===y&&isNaN(t)&&isNaN(e)||r.push(new m(f,t,e)))}function s(t,e,r,n,o){var i=[];if(I(t,e,i,n,null,null,null,o),r)for(var a=0;a<i.length;++a)r(i[a]);return i}function n(t,e,r,n){var o=n?function(t){t&&n.push(t)}:void 0,i=s(t,e,o,r);return n||(i.length?i:void 0)}function o(t,e,r){if(void 0===r&&e&&~a.indexOf(e.kind)&&(r=e),t&&r&&r.kind){for(var n=t,o=-1,i=r.path?r.path.length-1:0;++o<i;)void 0===n[r.path[o]]&&(n[r.path[o]]=void 0!==r.path[o+1]&&"number"==typeof r.path[o+1]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":r.path&&void 0===n[r.path[o]]&&(n[r.path[o]]=[]),function t(e,r,n){if(n.path&&n.path.length){var o,i=e[r],a=n.path.length-1;for(o=0;o<a;o++)i=i[n.path[o]];switch(n.kind){case"A":t(i[n.path[o]],n.index,n.item);break;case"D":delete i[n.path[o]];break;case"E":case"N":i[n.path[o]]=n.rhs}}else switch(n.kind){case"A":t(e[r],n.index,n.item);break;case"D":e=u(e,r);break;case"E":case"N":e[r]=n.rhs}return e}(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}return e(m,r),e(E,r),e(A,r),e(B,r),Object.defineProperties(n,{diff:{value:n,enumerable:!0},orderIndependentDiff:{value:function(t,e,r,n){var o=n?function(t){t&&n.push(t)}:void 0,i=s(t,e,o,r,!0);return n||(i.length?i:void 0)},enumerable:!0},observableDiff:{value:s,enumerable:!0},orderIndependentObservableDiff:{value:function(t,e,r,n,o,i,a){return I(t,e,r,n,o,i,a,!0)},enumerable:!0},orderIndepHash:{value:_,enumerable:!0},applyDiff:{value:function(e,r,n){e&&r&&s(e,r,function(t){n&&!n(e,r,t)||o(e,r,t)})},enumerable:!0},applyChange:{value:o,enumerable:!0},revertChange:{value:function(t,e,r){if(t&&e&&r&&r.kind){var n,o,i=t;for(o=r.path.length-1,n=0;n<o;n++)void 0===i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":!function t(e,r,n){if(n.path&&n.path.length){var o,i=e[r],a=n.path.length-1;for(o=0;o<a;o++)i=i[n.path[o]];switch(n.kind){case"A":t(i[n.path[o]],n.index,n.item);break;case"D":case"E":i[n.path[o]]=n.lhs;break;case"N":delete i[n.path[o]]}}else switch(n.kind){case"A":t(e[r],n.index,n.item);break;case"D":case"E":e[r]=n.lhs;break;case"N":e=u(e,r)}return e}(i[r.path[n]],r.index,r.item);break;case"D":case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}},enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof $conflict},enumerable:!0}}),n.DeepDiff=n,t.DeepDiff=n}(t);if("object"===(void 0===i?"undefined":U(i)))o.exports=r;else{var n=t.DeepDiff;r.noConflict=function(){return t.DeepDiff===r&&(t.DeepDiff=n),r},t.DeepDiff=r}}(void 0)},{}],8:[function(t,e,r){"use strict";r.read=function(t,e,r,n,o){var i,a,u=8*o-n-1,f=(1<<u)-1,s=f>>1,c=-7,h=r?o-1:0,l=r?-1:1,p=t[e+h];for(h+=l,i=p&(1<<-c)-1,p>>=-c,c+=u;0<c;i=256*i+t[e+h],h+=l,c-=8);for(a=i&(1<<-c)-1,i>>=-c,c+=n;0<c;a=256*a+t[e+h],h+=l,c-=8);if(0===i)i=1-s;else{if(i===f)return a?NaN:1/0*(p?-1:1);a+=Math.pow(2,n),i-=s}return(p?-1:1)*a*Math.pow(2,i-n)},r.write=function(t,e,r,n,o,i){var a,u,f,s=8*i-o-1,c=(1<<s)-1,h=c>>1,l=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:i-1,y=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,a=c):(a=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-a))<1&&(a--,f*=2),2<=(e+=1<=a+h?l/f:l*Math.pow(2,1-h))*f&&(a++,f/=2),c<=a+h?(u=0,a=c):1<=a+h?(u=(e*f-1)*Math.pow(2,o),a+=h):(u=e*Math.pow(2,h-1)*Math.pow(2,o),a=0));8<=o;t[r+p]=255&u,p+=y,u/=256,o-=8);for(a=a<<o|u,s+=o;0<s;t[r+p]=255&a,p+=y,a/=256,s-=8);t[r+p-y]|=128*g}},{}],9:[function(t,e,r){"use strict";var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f=Object.prototype.toString;function s(t){return t.constructor?t.constructor.name:null}e.exports=function(t){if(void 0===t)return"undefined";if(null===t)return"null";var e,r,n,o,i,a=void 0===t?"undefined":u(t);if("boolean"===a)return"boolean";if("string"===a)return"string";if("number"===a)return"number";if("symbol"===a)return"symbol";if("function"===a)return"GeneratorFunction"===s(t)?"generatorfunction":"function";if(e=t,Array.isArray?Array.isArray(e):e instanceof Array)return"array";if(function(t){if(t.constructor&&"function"==typeof t.constructor.isBuffer)return t.constructor.isBuffer(t);return!1}(t))return"buffer";if(function(t){try{if("number"==typeof t.length&&"function"==typeof t.callee)return!0}catch(t){if(-1!==t.message.indexOf("callee"))return!0}return!1}(t))return"arguments";if((r=t)instanceof Date||"function"==typeof r.toDateString&&"function"==typeof r.getDate&&"function"==typeof r.setDate)return"date";if((n=t)instanceof Error||"string"==typeof n.message&&n.constructor&&"number"==typeof n.constructor.stackTraceLimit)return"error";if((o=t)instanceof RegExp||"string"==typeof o.flags&&"boolean"==typeof o.ignoreCase&&"boolean"==typeof o.multiline&&"boolean"==typeof o.global)return"regexp";switch(s(t)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if("function"==typeof(i=t).throw&&"function"==typeof i.return&&"function"==typeof i.next)return"generator";switch(a=f.call(t)){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return a.slice(8,-1).toLowerCase().replace(/\s/g,"")}},{}],10:[function(t,e,r){(function(h){"use strict";var l=Symbol.prototype.valueOf,p=t("kind-of");e.exports=function(t,e){switch(p(t)){case"array":return t.slice();case"object":return Object.assign({},t);case"date":return new t.constructor(+t);case"map":return new Map(t);case"set":return new Set(t);case"buffer":return s=(f=t).length,c=h.allocUnsafe?h.allocUnsafe(s):new h(s),f.copy(c),c;case"symbol":return u=t,l?Object(l.call(u)):{};case"arraybuffer":return a=new(i=t).constructor(i.byteLength),new Uint8Array(a).set(new Uint8Array(i)),a;case"float32array":case"float64array":case"int16array":case"int32array":case"int8array":case"uint16array":case"uint32array":case"uint8clampedarray":case"uint8array":return new(o=t).constructor(o.buffer,o.byteOffset,o.length);case"regexp":return(n=new(r=t).constructor(r.source,/\w+$/.exec(r))).lastIndex=r.lastIndex,n;case"error":return Object.create(t);default:return t}var r,n,o,i,a,u,f,s,c}}).call(this,t("buffer").Buffer)},{buffer:5,"kind-of":9}]},{},[1,2,3])(3)});