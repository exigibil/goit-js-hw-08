function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,l=c||f||Function("return this")(),m=Object.prototype.toString,s=Math.max,d=Math.min,v=function(){return l.Date.now()};function y(e,t,n){var o,r,i,a,u,c,f=0,l=!1,m=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,f=t,a=e.apply(i,n)}function S(e){return f=e,u=setTimeout(w,t),l?b(e):a}function q(e){var n=e-c;return void 0===c||n>=t||n<0||m&&e-f>=i}function w(){var e=v();if(q(e))return x(e);u=setTimeout(w,function(e){var n=t-(e-c);return m?d(n,i-(e-f)):n}(e))}function x(e){return u=void 0,y&&o?b(e):(o=r=void 0,a)}function j(){var e=v(),n=q(e);if(o=arguments,r=this,c=e,n){if(void 0===u)return S(c);if(m)return u=setTimeout(w,t),b(c)}return void 0===u&&(u=setTimeout(w,t)),a}return t=g(t)||0,p(n)&&(l=!!n.leading,i=(m="maxWait"in n)?s(g(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),j.cancel=function(){void 0!==u&&clearTimeout(u),f=0,o=c=r=u=void 0},j.flush=function(){return void 0===u?a:x(v())},j}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:o,maxWait:t,trailing:r})};document.querySelector("form.feedback-form");const b=e(t)((()=>{const e=document.querySelector('input[name="email"]'),t=document.querySelector('textarea[name="message"]'),n={email:e.value,message:t.value};localStorage.setItem("key",JSON.stringify(n))}),500);document.querySelector(".feedback-form").addEventListener("input",b),document.querySelector(".feedback-form").addEventListener("submit",(e=>{e.preventDefault();const t=document.querySelector('input[name="email"]').value,n=document.querySelector('textarea[name="message"]').value;localStorage.removeItem("feedback-form-state"),document.querySelector('input[name="email"]').value="",document.querySelector('textarea[name="message"]').value="",console.log("Form Submission Data:",{email:t,message:n})})),window.addEventListener("load",(()=>{const e=localStorage.getItem("key");if(e){const{email:t,message:n}=JSON.parse(e);document.querySelector('input[name="email"]').value=t,document.querySelector('textarea[name="message"]').value=n}}));
//# sourceMappingURL=03-feedback.ebf6a3fe.js.map