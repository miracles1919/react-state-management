(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[755],{4642:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/recoil",function(){return r(3538)}])},4517:function(e,n){"use strict";n.Z={level:1,id:"1-1",value:"\ud83e\udd2b",children:[{level:2,id:"2-1",value:"\ud83e\udd2b",children:[{level:3,id:"3-1",value:"\ud83e\udd2b",children:[]},{level:3,id:"3-2",value:"\ud83e\udd2b",children:[]}]},{level:2,id:"2-2",value:"\ud83e\udd2b",children:[{level:3,id:"3-3",value:"\ud83e\udd2b",children:[]},{level:3,id:"3-4",value:"\ud83e\udd2b",children:[]}]},{level:2,id:"2-3",value:"\ud83e\udd2b",children:[{level:3,id:"3-5",value:"\ud83e\udd2b",children:[]},{level:3,id:"3-6",value:"\ud83e\udd2b",children:[]}]}]}},3538:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return v}});var t=r(2454),i=r(5362),a=r(2374),c=r(3901),l=r(833),o=r(5810),u=r(4517),s=r(145),d=(0,o.xu)({key:"Tree",default:function(e){return(0,s.Mk)(u.Z,e)}}),f=(0,a.memo)((function(e){var n=e.id,r=(0,a.useRef)(null),u=(0,i.Z)((0,o.FV)(d(n)),2),v=u[0],h=u[1];(0,a.useEffect)((function(){r.current.classList.add("rendered"),setTimeout((function(){r.current.classList.remove("rendered")}),500)}));var m=(0,a.useCallback)((function(){var e=(0,s.Ix)(v,n,String(Math.floor(1e4*Math.random())));h(e)}),[v,n]);return console.log("RecoilNode(".concat(n,") render")),(0,t.jsxs)("div",{className:"node-wrap",children:[(0,t.jsxs)("div",{className:"node",ref:r,children:[(0,t.jsx)("div",{children:n}),(0,t.jsx)("div",{className:"value",children:v.value}),(0,t.jsx)("div",{className:"action",onClick:m,children:"change"})]}),!!v.children.length&&(0,t.jsx)("div",{className:"children-wrap",children:v.children.map((function(e,n){var i=(0,l.w)(e,n);return(0,t.jsxs)("div",{className:"child-wrap",style:i,ref:function(e){if(e){var n=r.current.getBoundingClientRect(),t=e.getBoundingClientRect();(0,c.W)("recoil-demo",n.x+60,n.y+120,t.x+60,t.y)}},children:[" ",(0,t.jsx)(f,{id:e.id})," "]},e.id)}))})]})}));function v(){return(0,t.jsx)(o.Wh,{children:(0,t.jsxs)("div",{className:"section-redux-demo",children:[(0,t.jsx)("h2",{children:"Recoil demo"}),(0,t.jsx)(f,{id:"1-1"})]})})}},3901:function(e,n,r){"use strict";r.d(n,{W:function(){return i}});var t={};function i(e,n,r,i,a){r=scrollY+r,a=scrollY+a;var c=n-i,l=r-a,o=Math.sqrt(c*c+l*l),u=(n+i)/2-o/2,s=(r+a)/2,d=Math.PI-Math.atan2(-l,c);setTimeout((function(){var c="".concat(e,"-").concat(n,"-").concat(r,"-").concat(i,"-").concat(a);t[c]&&t[c].parentNode.removeChild(t[c]);var l=function(e,n,r,t){var i=document.createElement("div");i.className="line";var a="border: 1px solid #f76732; width: "+r+"px; height: 0px; -moz-transform: rotate("+t+"rad); -webkit-transform: rotate("+t+"rad); -o-transform: rotate("+t+"rad); -ms-transform: rotate("+t+"rad); position: absolute; top: "+n+"px; left: "+e+"px; ";return i.setAttribute("style",a),i}(u,s,o,d);t[c]=l,document.body.appendChild(l)}),100)}},145:function(e,n,r){"use strict";r.d(n,{Ix:function(){return l},Mk:function(){return c}});var t=r(8359),i=r.n(t),a=r(2912);function c(e,n){var r;return function e(t){t.id!==n?t.children.forEach((function(n){e(n)})):r=t}(e),r}function l(e,n,r){return(0,a.ZP)(e,(function(e){!function(e,n,r){var t=!1,a="";!function e(r){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)if(r.id===n)t=!0,a=i;else for(var c=0;c<r.children.length;c++)e(r.children[c],i?"".concat(i,".children[").concat(c,"]"):"children[".concat(c,"]"))}(e),""===a?e.value=r:i()(e,a).value=r}(e,n,r)}))}},833:function(e,n,r){"use strict";function t(e,n){var r={};if(2===e.level)switch(n){case 0:r.left="-400px",r.transform="translateX(-100%)";break;case 1:r.left=0,r.transform="translateX(0)";break;case 2:r.left="400px",r.transform="translateX(100%)"}else if(3===e.level)switch(e.id){case"3-1":r.left="-50px",r.transform="translateX(-100%)";break;case"3-2":case"3-4":case"3-6":r.left="150px",r.transform="translateX(0)";break;case"3-3":case"3-5":r.left="-150px",r.transform="translateX(0)"}return r}r.d(n,{w:function(){return t}})},5362:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(n,{Z:function(){return i}})}},function(e){e.O(0,[448,45,774,888,179],(function(){return n=4642,e(e.s=n);var n}));var n=e.O();_N_E=n}]);