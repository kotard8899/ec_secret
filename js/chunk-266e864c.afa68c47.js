(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-266e864c"],{"057f":function(t,e,r){var i=r("fc6a"),n=r("241c").f,c={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return n(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==c.call(t)?o(t):n(i(t))}},"07ac":function(t,e,r){var i=r("23e7"),n=r("6f53").values;i({target:"Object",stat:!0},{values:function(t){return n(t)}})},"159b":function(t,e,r){var i=r("da84"),n=r("fdbc"),c=r("17c2"),a=r("9112");for(var o in n){var s=i[o],u=s&&s.prototype;if(u&&u.forEach!==c)try{a(u,"forEach",c)}catch(f){u.forEach=c}}},"17c2":function(t,e,r){"use strict";var i=r("b727").forEach,n=r("a640"),c=r("ae40"),a=n("forEach"),o=c("forEach");t.exports=a&&o?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"29e4":function(t,e,r){t.exports=r.p+"img/checkmark-ok2.12cced5e.gif"},4160:function(t,e,r){"use strict";var i=r("23e7"),n=r("17c2");i({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"6f53":function(t,e,r){var i=r("83ab"),n=r("df75"),c=r("fc6a"),a=r("d1e7").f,o=function(t){return function(e){var r,o=c(e),s=n(o),u=s.length,f=0,l=[];while(u>f)r=s[f++],i&&!a.call(o,r)||l.push(t?[r,o[r]]:o[r]);return l}};t.exports={entries:o(!0),values:o(!1)}},"746f":function(t,e,r){var i=r("428f"),n=r("5135"),c=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});n(e,t)||a(e,t,{value:c.f(t)})}},a4d3:function(t,e,r){"use strict";var i=r("23e7"),n=r("da84"),c=r("d066"),a=r("c430"),o=r("83ab"),s=r("4930"),u=r("fdbf"),f=r("d039"),l=r("5135"),d=r("e8b5"),p=r("861d"),b=r("825a"),v=r("7b0b"),h=r("fc6a"),g=r("c04e"),m=r("5c6c"),y=r("7c73"),C=r("df75"),O=r("241c"),w=r("057f"),_=r("7418"),S=r("06cf"),j=r("9bf2"),P=r("d1e7"),L=r("9112"),k=r("6eeb"),x=r("5692"),E=r("f772"),T=r("d012"),D=r("90e3"),M=r("b622"),I=r("e538"),N=r("746f"),A=r("d44e"),G=r("69f3"),$=r("b727").forEach,V=E("hidden"),F="Symbol",R="prototype",H=M("toPrimitive"),J=G.set,q=G.getterFor(F),Q=Object[R],U=n.Symbol,B=c("JSON","stringify"),W=S.f,z=j.f,K=w.f,X=P.f,Y=x("symbols"),Z=x("op-symbols"),tt=x("string-to-symbol-registry"),et=x("symbol-to-string-registry"),rt=x("wks"),it=n.QObject,nt=!it||!it[R]||!it[R].findChild,ct=o&&f((function(){return 7!=y(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,r){var i=W(Q,e);i&&delete Q[e],z(t,e,r),i&&t!==Q&&z(Q,e,i)}:z,at=function(t,e){var r=Y[t]=y(U[R]);return J(r,{type:F,tag:t,description:e}),o||(r.description=e),r},ot=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof U},st=function(t,e,r){t===Q&&st(Z,e,r),b(t);var i=g(e,!0);return b(r),l(Y,i)?(r.enumerable?(l(t,V)&&t[V][i]&&(t[V][i]=!1),r=y(r,{enumerable:m(0,!1)})):(l(t,V)||z(t,V,m(1,{})),t[V][i]=!0),ct(t,i,r)):z(t,i,r)},ut=function(t,e){b(t);var r=h(e),i=C(r).concat(bt(r));return $(i,(function(e){o&&!lt.call(r,e)||st(t,e,r[e])})),t},ft=function(t,e){return void 0===e?y(t):ut(y(t),e)},lt=function(t){var e=g(t,!0),r=X.call(this,e);return!(this===Q&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,V)&&this[V][e])||r)},dt=function(t,e){var r=h(t),i=g(e,!0);if(r!==Q||!l(Y,i)||l(Z,i)){var n=W(r,i);return!n||!l(Y,i)||l(r,V)&&r[V][i]||(n.enumerable=!0),n}},pt=function(t){var e=K(h(t)),r=[];return $(e,(function(t){l(Y,t)||l(T,t)||r.push(t)})),r},bt=function(t){var e=t===Q,r=K(e?Z:h(t)),i=[];return $(r,(function(t){!l(Y,t)||e&&!l(Q,t)||i.push(Y[t])})),i};if(s||(U=function(){if(this instanceof U)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=D(t),r=function(t){this===Q&&r.call(Z,t),l(this,V)&&l(this[V],e)&&(this[V][e]=!1),ct(this,e,m(1,t))};return o&&nt&&ct(Q,e,{configurable:!0,set:r}),at(e,t)},k(U[R],"toString",(function(){return q(this).tag})),k(U,"withoutSetter",(function(t){return at(D(t),t)})),P.f=lt,j.f=st,S.f=dt,O.f=w.f=pt,_.f=bt,I.f=function(t){return at(M(t),t)},o&&(z(U[R],"description",{configurable:!0,get:function(){return q(this).description}}),a||k(Q,"propertyIsEnumerable",lt,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:U}),$(C(rt),(function(t){N(t)})),i({target:F,stat:!0,forced:!s},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=U(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),i({target:"Object",stat:!0,forced:!s,sham:!o},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:dt}),i({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:pt,getOwnPropertySymbols:bt}),i({target:"Object",stat:!0,forced:f((function(){_.f(1)}))},{getOwnPropertySymbols:function(t){return _.f(v(t))}}),B){var vt=!s||f((function(){var t=U();return"[null]"!=B([t])||"{}"!=B({a:t})||"{}"!=B(Object(t))}));i({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var i,n=[t],c=1;while(arguments.length>c)n.push(arguments[c++]);if(i=e,(p(e)||void 0!==t)&&!ot(t))return d(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!ot(e))return e}),n[1]=e,B.apply(null,n)}})}U[R][H]||L(U[R],H,U[R].valueOf),A(U,F),T[V]=!0},a640:function(t,e,r){"use strict";var i=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&i((function(){r.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,r){var i=r("23e7"),n=r("7b0b"),c=r("df75"),a=r("d039"),o=a((function(){c(1)}));i({target:"Object",stat:!0,forced:o},{keys:function(t){return c(n(t))}})},dbb4:function(t,e,r){var i=r("23e7"),n=r("83ab"),c=r("56ef"),a=r("fc6a"),o=r("06cf"),s=r("8418");i({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,r,i=a(t),n=o.f,u=c(i),f={},l=0;while(u.length>l)r=n(i,e=u[l++]),void 0!==r&&s(f,e,r);return f}})},e439:function(t,e,r){var i=r("23e7"),n=r("d039"),c=r("fc6a"),a=r("06cf").f,o=r("83ab"),s=n((function(){a(1)})),u=!o||s;i({target:"Object",stat:!0,forced:u,sham:!o},{getOwnPropertyDescriptor:function(t,e){return a(c(t),e)}})},e538:function(t,e,r){var i=r("b622");e.f=i},fa92:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bg-dark pt-5"},[i("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-2"},[i("div",{staticClass:"cus-list-group"},[i("a",{attrs:{href:"#"},on:{click:function(e){return t.$router.go(-1)}}},[i("span",{staticClass:"material-icons mi-big"},[t._v(" keyboard_return ")])])])]),i("div",{staticClass:"col-md-5 bg-cover detail-img",style:{backgroundImage:"url("+t.product.imageUrl+")"}}),i("div",{staticClass:"col-md-5 text-white pl-4"},[i("div",{staticClass:"h1"},[t._v(t._s(t.product.title))]),i("div",{staticClass:"h2"},[t._v("品種："+t._s(t.product.category))]),i("div",{staticClass:"h5"},[t._v(t._s(t.product.description))]),i("div",{staticClass:"d-flex justify-content-between align-items-baseline py-3"},[i("del",[t._v("原價 ＄"+t._s(t.product.origin_price))]),i("span",{staticClass:"h3 text-danger"},[t._v("優惠價 ＄"+t._s(t.product.price))])]),i("div",{staticClass:"hr-white mb-4"}),i("div",{staticClass:"h4 mb-3"},[t._v("您可獲得的資訊有：")]),i("p",{staticClass:"h5 py-1 mb-0"},[t._v("地址")]),i("p",{staticClass:"h5 py-1 mb-0"},[t._v("電話")]),i("p",{staticClass:"h5 py-1 mb-0"},[t._v("LINE")]),i("p",{staticClass:"h5 py-1 mb-0"},[t._v("起床時間")]),i("p",{staticClass:"h5 py-1 mb-0"},[t._v("興趣")]),i("p",{staticClass:"h5 py-1 mb-0"},[t._v("常去餐廳")]),i("p",{staticClass:"h5 py-1 mb-0"},[t._v("愛吃的食物")]),i("div",{staticClass:"text-right pt-4"},[i("button",{staticClass:"btn btn-outline-light btn-lg rounded-0 btn-detail ls-2",on:{click:function(e){return e.preventDefault(),t.addToCart(t.product.id)}}},[t.runGif!==t.product.id?i("span",[t._v("立即購買")]):t._e(),t.runGif===t.product.id?i("img",{staticClass:"pb-1",attrs:{src:r("29e4"),width:"20"}}):t._e()])])])]),i("h5",{staticClass:"text-danger mt-3 pt-5 pb-3 ml-minus"},[t._v("買了此商品的人，也買了...")]),i("div",{staticClass:"row"},t._l(t.randomFour,(function(e){return i("div",{key:e.id,staticClass:"col-md-3 px-2 pb-4"},[i("a",{staticClass:"image-wrap",attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),t.toDetail(e.id)}}},[i("div",{staticClass:"rectangle-image bg-cover",style:{backgroundImage:"url("+e.imageUrl+")"}})]),i("a",{staticClass:"detail-name",attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),t.toDetail(e.id)}}},[t._v(" "+t._s(e.title)+" ")]),i("div",{staticClass:"pt-1"},[i("span",{staticClass:"detail-price"},[t._v("特價 "+t._s(e.price))]),i("del",{staticClass:"detail-origin-price"},[t._v("原價 "+t._s(e.origin_price))])])])})),0),t._m(0)])],1)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-8 ls-2 lh-30"},[r("h5",{staticClass:"text-danger ml-minus py-4"},[t._v("購物說明")]),r("p",{staticClass:"text-white"},[t._v("若您具有法人身份為常態性且大量購買者，或有特殊作業需求，建議您可洽詢「企業採購」。")]),r("p",{staticClass:"text-about pt-2"},[t._v("退換貨說明")]),r("p",{staticClass:"text-white"},[t._v(" 會員所購買的商品均享有到貨十天的猶豫期（含例假日）。退回之商品必須於猶豫期內寄回。 "),r("br"),t._v(" 辦理退換貨時，商品必須是全新狀態與完整包裝(請注意保持商品本體、 配件、贈品、保證書、 原廠包裝及所有附隨文件或資料的完整性，切勿缺漏任何配件或損毀原廠外盒)。 退回商品無法回復原狀者，恐將影響退貨權益或需負擔部分費用。 "),r("br"),t._v(" 訂購本商品前請務必詳閱商品退換貨原則。 ")])])])}],c=(r("4de4"),r("fb6a"),r("07ac"),r("5530")),a=r("2f62"),o={name:"Detail",data:function(){return{productId:""}},inject:["reload"],methods:Object(c["a"])(Object(c["a"])({},Object(a["b"])(["getProducts"])),{},{getProduct:function(t){this.$store.dispatch("getProductToPage",t),this.product_num=1},addToCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=this.carts.carts.filter((function(e){return e.product_id===t}));if(r.length>0){var i=r[0],n=i.qty,c=i.id,a=i.product.id,o=n+e;this.$store.dispatch("updateProductQty",{originCartId:c,originProductId:a,newQty:o})}else this.$store.dispatch("addToCart",{id:t,qty:e})},toDetail:function(t){this.reload(),this.$router.push("/detail/".concat(t))}}),computed:Object(c["a"])(Object(c["a"])({},Object(a["c"])(["isLoading","products","product","loadingId","carts","runGif"])),{},{randomFour:function(){var t=Math.floor(17*Math.random());return Object.values(this.products).slice(t,t+4)}}),created:function(){this.productId=this.$route.params.productId,this.getProduct(this.productId),this.getProducts()},mounted:function(){window.scrollTo(0,0)}},s=o,u=r("2877"),f=Object(u["a"])(s,i,n,!1,null,null,null);e["default"]=f.exports},fb6a:function(t,e,r){"use strict";var i=r("23e7"),n=r("861d"),c=r("e8b5"),a=r("23cb"),o=r("50c4"),s=r("fc6a"),u=r("8418"),f=r("b622"),l=r("1dde"),d=r("ae40"),p=l("slice"),b=d("slice",{ACCESSORS:!0,0:0,1:2}),v=f("species"),h=[].slice,g=Math.max;i({target:"Array",proto:!0,forced:!p||!b},{slice:function(t,e){var r,i,f,l=s(this),d=o(l.length),p=a(t,d),b=a(void 0===e?d:e,d);if(c(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!c(r.prototype)?n(r)&&(r=r[v],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return h.call(l,p,b);for(i=new(void 0===r?Array:r)(g(b-p,0)),f=0;p<b;p++,f++)p in l&&u(i,f,l[p]);return i.length=f,i}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-266e864c.afa68c47.js.map