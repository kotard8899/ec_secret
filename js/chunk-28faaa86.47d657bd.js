(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28faaa86"],{"056d":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"my-5 row justify-content-center"},[r("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),r("form",{staticClass:"col-md-6",on:{submit:function(e){return e.preventDefault(),t.payOrder(e)}}},[r("table",{staticClass:"table"},[t._m(0),r("tbody",t._l(t.order.products,(function(e){return r("tr",{key:e.id},[r("td",{staticClass:"align-middle"},[t._v(t._s(e.product.title))]),r("td",{staticClass:"align-middle"},[t._v(t._s(e.qty)+"/"+t._s(e.product.unit))]),r("td",{staticClass:"align-middle text-right"},[t._v(t._s(e.final_total))])])})),0),r("tfoot",[r("tr",[r("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("總計")]),r("td",{staticClass:"text-right"},[t._v(t._s(t.order.total))])])])]),r("table",{staticClass:"table"},[r("tbody",[r("tr",[r("th",{attrs:{width:"100"}},[t._v("Email")]),r("td",[t._v(t._s(t.order.user.email))])]),r("tr",[r("th",[t._v("姓名")]),r("td",[t._v(t._s(t.order.user.name))])]),r("tr",[r("th",[t._v("收件人電話")]),r("td",[t._v(t._s(t.order.user.tel))])]),r("tr",[r("th",[t._v("收件人地址")]),r("td",[t._v(t._s(t.order.user.address))])]),r("tr",[r("th",[t._v("付款狀態")]),r("td",[t.order.is_paid?r("span",{staticClass:"text-success"},[t._v("付款完成")]):r("span",[t._v("尚未付款")])])])])]),!1===t.order.is_paid?r("div",{staticClass:"text-right"},[r("button",{staticClass:"btn btn-danger"},[t._v("確認付款去")])]):t._e()])],1)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("th",[t._v("品名")]),r("th",[t._v("數量")]),r("th",[t._v("單價")])])}],i=(r("99af"),r("5530")),a=r("2f62"),c={name:"CustomerCheckout",data:function(){return{orderId:"",order:{user:{}}}},methods:{getOrder:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io/","api/").concat("kotard","/order/").concat(t.orderId);t.$store.dispatch("updateLoading",!0),t.$http.get(e).then((function(e){e.data.success&&(t.$store.dispatch("updateLoading",!1),t.order=e.data.order)}))},payOrder:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io/","api/").concat("kotard","/pay/").concat(t.orderId);t.$store.dispatch("updateLoading",!0),t.$http.post(e).then((function(e){e.data.success&&t.getOrder(),t.$store.dispatch("updateLoading",!1)}))}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder()},computed:Object(i["a"])({},Object(a["c"])(["isLoading"]))},s=c,u=r("2877"),f=Object(u["a"])(s,n,o,!1,null,null,null);e["default"]=f.exports},"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?c(t):o(n(t))}},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("17c2"),a=r("9112");for(var c in o){var s=n[c],u=s&&s.prototype;if(u&&u.forEach!==i)try{a(u,"forEach",i)}catch(f){u.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),i=r("ae40"),a=o("forEach"),c=i("forEach");t.exports=a&&c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,r){"use strict";var n=r("23e7"),o=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),a=r("c430"),c=r("83ab"),s=r("4930"),u=r("fdbf"),f=r("d039"),d=r("5135"),l=r("e8b5"),p=r("861d"),b=r("825a"),h=r("7b0b"),v=r("fc6a"),g=r("c04e"),y=r("5c6c"),m=r("7c73"),O=r("df75"),S=r("241c"),_=r("057f"),w=r("7418"),L=r("06cf"),j=r("9bf2"),P=r("d1e7"),C=r("9112"),E=r("6eeb"),x=r("5692"),T=r("f772"),k=r("d012"),D=r("90e3"),M=r("b622"),N=r("e538"),$=r("746f"),I=r("d44e"),V=r("69f3"),G=r("b727").forEach,A=T("hidden"),F="Symbol",H="prototype",J=M("toPrimitive"),R=V.set,q=V.getterFor(F),B=Object[H],Q=o.Symbol,W=i("JSON","stringify"),z=L.f,K=j.f,U=_.f,X=P.f,Y=x("symbols"),Z=x("op-symbols"),tt=x("string-to-symbol-registry"),et=x("symbol-to-string-registry"),rt=x("wks"),nt=o.QObject,ot=!nt||!nt[H]||!nt[H].findChild,it=c&&f((function(){return 7!=m(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=z(B,e);n&&delete B[e],K(t,e,r),n&&t!==B&&K(B,e,n)}:K,at=function(t,e){var r=Y[t]=m(Q[H]);return R(r,{type:F,tag:t,description:e}),c||(r.description=e),r},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},st=function(t,e,r){t===B&&st(Z,e,r),b(t);var n=g(e,!0);return b(r),d(Y,n)?(r.enumerable?(d(t,A)&&t[A][n]&&(t[A][n]=!1),r=m(r,{enumerable:y(0,!1)})):(d(t,A)||K(t,A,y(1,{})),t[A][n]=!0),it(t,n,r)):K(t,n,r)},ut=function(t,e){b(t);var r=v(e),n=O(r).concat(bt(r));return G(n,(function(e){c&&!dt.call(r,e)||st(t,e,r[e])})),t},ft=function(t,e){return void 0===e?m(t):ut(m(t),e)},dt=function(t){var e=g(t,!0),r=X.call(this,e);return!(this===B&&d(Y,e)&&!d(Z,e))&&(!(r||!d(this,e)||!d(Y,e)||d(this,A)&&this[A][e])||r)},lt=function(t,e){var r=v(t),n=g(e,!0);if(r!==B||!d(Y,n)||d(Z,n)){var o=z(r,n);return!o||!d(Y,n)||d(r,A)&&r[A][n]||(o.enumerable=!0),o}},pt=function(t){var e=U(v(t)),r=[];return G(e,(function(t){d(Y,t)||d(k,t)||r.push(t)})),r},bt=function(t){var e=t===B,r=U(e?Z:v(t)),n=[];return G(r,(function(t){!d(Y,t)||e&&!d(B,t)||n.push(Y[t])})),n};if(s||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=D(t),r=function(t){this===B&&r.call(Z,t),d(this,A)&&d(this[A],e)&&(this[A][e]=!1),it(this,e,y(1,t))};return c&&ot&&it(B,e,{configurable:!0,set:r}),at(e,t)},E(Q[H],"toString",(function(){return q(this).tag})),E(Q,"withoutSetter",(function(t){return at(D(t),t)})),P.f=dt,j.f=st,L.f=lt,S.f=_.f=pt,w.f=bt,N.f=function(t){return at(M(t),t)},c&&(K(Q[H],"description",{configurable:!0,get:function(){return q(this).description}}),a||E(B,"propertyIsEnumerable",dt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:Q}),G(O(rt),(function(t){$(t)})),n({target:F,stat:!0,forced:!s},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var r=Q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:lt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:pt,getOwnPropertySymbols:bt}),n({target:"Object",stat:!0,forced:f((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(h(t))}}),W){var ht=!s||f((function(){var t=Q();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));n({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(p(e)||void 0!==t)&&!ct(t))return l(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),o[1]=e,W.apply(null,o)}})}Q[H][J]||C(Q[H],J,Q[H].valueOf),I(Q,F),k[A]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,r){var n=r("23e7"),o=r("7b0b"),i=r("df75"),a=r("d039"),c=a((function(){i(1)}));n({target:"Object",stat:!0,forced:c},{keys:function(t){return i(o(t))}})},dbb4:function(t,e,r){var n=r("23e7"),o=r("83ab"),i=r("56ef"),a=r("fc6a"),c=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,n=a(t),o=c.f,u=i(n),f={},d=0;while(u.length>d)r=o(n,e=u[d++]),void 0!==r&&s(f,e,r);return f}})},e439:function(t,e,r){var n=r("23e7"),o=r("d039"),i=r("fc6a"),a=r("06cf").f,c=r("83ab"),s=o((function(){a(1)})),u=!c||s;n({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(i(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-28faaa86.47d657bd.js.map