(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4228"],{"04c1":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"text-right mt-4"},[e("button",{staticClass:"btn btn-sm btn-cart",attrs:{"data-toggle":"dropdown","data-flip":"false"}},[e("i",{staticClass:"fa fa-shopping-cart text-dark fa-2x",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"badge badge-pill badge-danger"},[t._v(t._s(t.carts.carts.length))])]),e("div",{staticClass:"dropdown-menu dropdown-menu-right p-3",staticStyle:{"min-width":"300px"},attrs:{"data-offset":"400"}},[e("h6",[t._v("已選擇商品")]),e("table",{staticClass:"table table-sm"},[e("tbody",t._l(t.carts.carts,(function(a){return e("tr",{key:a.id},[e("td",{staticClass:"align-middle text-center"},[e("a",{staticClass:"text-muted",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.removeCart(a.id)}}},[e("i",{staticClass:"fa fa-trash-o",attrs:{"aria-hidden":"true"}})])]),e("td",{staticClass:"align-middle"},[t._v(t._s(a.product.title))]),e("td",{staticClass:"align-middle"},[t._v(t._s(a.qty)+t._s(a.product.unit))]),e("td",{staticClass:"align-middle text-right"},[t._v(t._s(a.total))])])})),0)]),t._m(0)])]),e("div",{staticClass:"row my-4"},t._l(t.products,(function(a){return e("div",{key:a.id,staticClass:"col-md-4 mb-4"},[e("div",{staticClass:"card border-0 shadow-sm"},[e("div",{staticStyle:{height:"150px","background-size":"cover","background-position":"center"},style:{background:"url("+a.imageUrl+")"}}),e("div",{staticClass:"card-body"},[e("span",{staticClass:"badge badge-secondary float-right ml-2"},[t._v(t._s(a.category))]),e("h5",{staticClass:"card-title"},[e("a",{staticClass:"text-dark",attrs:{href:"#"}},[t._v(t._s(a.title))])]),e("p",{staticClass:"card-text"},[t._v(t._s(a.content))]),e("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[a.price===a.origin_price?e("div",{staticClass:"h5"},[t._v(" "+t._s(a.origin_price)+" 元")]):t._e(),a.price!==a.origin_price?e("del",{staticClass:"h6"},[t._v(" 原價 "+t._s(a.origin_price)+" 元")]):t._e(),a.price!==a.origin_price?e("div",{staticClass:"h5"},[t._v(" 現在只要 "+t._s(a.price)+" 元")]):t._e()])]),e("div",{staticClass:"card-footer d-flex"},[e("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"},on:{click:function(e){return t.getProduct(a)}}},[t.loadingId===a.id?e("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v(" 查看更多 ")]),e("button",{staticClass:"btn btn-outline-danger btn-sm ml-auto",attrs:{type:"button"},on:{click:function(e){return t.addToCart(a.id)}}},[t.loadingId===a.id?e("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v(" 加到購物車 ")])])])])})),0),e("div",{staticClass:"row my-3 justify-content-center"},[e("div",{staticClass:"col-md-6"},[e("table",{staticClass:"table"},[t._m(1),e("tbody",t._l(t.carts.carts,(function(a){return e("tr",{key:a.id},[e("td",{staticClass:"align-middle"},[e("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(e){return t.removeCart(a.id)}}},[e("i",{staticClass:"far fa-trash-alt"})])]),e("td",{staticClass:"align-middle"},[t._v(" "+t._s(a.product.title)+" "),a.coupon?e("div",{staticClass:"text-success"},[t._v(" 已套用優惠券 ")]):t._e()]),e("td",{staticClass:"align-middle"},[t._v(t._s(a.qty)+"/"+t._s(a.product.unit))]),e("td",{staticClass:"align-middle text-right"},[t._v(t._s(t._f("currency")(a.final_total)))])])})),0),e("tfoot",[e("tr",[e("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("總計")]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.carts.total)))])]),t.carts.final_total!==t.carts.total?e("tr",[e("td",{staticClass:"text-right text-success",attrs:{colspan:"3"}},[t._v("折扣價")]),e("td",{staticClass:"text-right text-success"},[t._v(t._s(t._f("currency")(t.carts.final_total)))])]):t._e()])]),e("div",{staticClass:"input-group mb-3 input-group-sm"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.couponCode,expression:"couponCode"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.couponCode},on:{input:function(a){a.target.composing||(t.couponCode=a.target.value)}}}),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:t.addCouponCode}},[t._v(" 套用優惠碼 ")])])]),t.message?e("div",{staticClass:"text-danger"},[t._v(t._s(t.message))]):t._e(),e("ValidationObserver",{ref:"form"},[e("form",{staticClass:"mt-5",on:{submit:function(a){return a.preventDefault(),t.createOrder(a)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"useremail"}},[t._v("Email")]),e("validation-provider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.failed,r=a.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"}],staticClass:"form-control",class:{"is-invalid":s},attrs:{type:"email",name:"email",id:"useremail",placeholder:"請輸入 Email"},domProps:{value:t.form.user.email},on:{input:function(a){a.target.composing||t.$set(t.form.user,"email",a.target.value)}}}),e("span",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}])})],1),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"username"}},[t._v("收件人姓名")]),e("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.failed,r=a.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"}],staticClass:"form-control",class:{"is-invalid":s},attrs:{type:"text",name:"姓名",id:"username",placeholder:"請輸入姓名"},domProps:{value:t.form.user.name},on:{input:function(a){a.target.composing||t.$set(t.form.user,"name",a.target.value)}}}),e("span",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}])})],1),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"usertel"}},[t._v("收件人電話")]),e("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.failed,r=a.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",class:{"is-invalid":s},attrs:{type:"tel",id:"usertel",name:"電話",placeholder:"請輸入電話"},domProps:{value:t.form.user.tel},on:{input:function(a){a.target.composing||t.$set(t.form.user,"tel",a.target.value)}}}),e("span",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}])})],1),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"useraddress"}},[t._v("收件人地址")]),e("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.failed,r=a.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control",class:{"is-invalid":s},attrs:{type:"text",name:"住址",id:"useraddress",placeholder:"請輸入地址"},domProps:{value:t.form.user.address},on:{input:function(a){a.target.composing||t.$set(t.form.user,"address",a.target.value)}}}),e("span",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}])})],1),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"comment"}},[t._v("留言")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"comment",cols:"30",rows:"10"},domProps:{value:t.form.message},on:{input:function(a){a.target.composing||t.$set(t.form,"message",a.target.value)}}})]),e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-danger"},[t._v("送出訂單")])])])])],1)]),e("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.product.title))]),t._m(2)]),e("div",{staticClass:"modal-body"},[e("img",{staticClass:"img-fluid",attrs:{src:t.product.imageUrl}}),e("blockquote",{staticClass:"blockquote mt-3"},[e("p",{staticClass:"mb-0"},[t._v(t._s(t.product.content))]),e("footer",{staticClass:"blockquote-footer text-right"},[t._v(t._s(t.product.description))])]),e("div",{staticClass:"d-flex justify-content-between align-items baseline"},[t.product.price===t.product.origin_price?e("div",{staticClass:"h4"},[t._v(" "+t._s(t.product.origin_price)+" 元")]):t._e(),t.product.price!==t.product.origin_price?e("div",{staticClass:"h6"},[t._v(" 原價 "+t._s(t.product.origin_price)+" 元")]):t._e(),t.product.price!==t.product.origin_price?e("div",{staticClass:"h4"},[t._v(" 現在只要 "+t._s(t.product.price)+" 元")]):t._e()]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.product_num,expression:"product_num"}],staticClass:"form-control mt-3",attrs:{name:""},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.product_num=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"",selected:""}},[t._v("--請選擇數量--")]),t._l(10,(function(a){return e("option",{key:a,domProps:{value:a}},[t._v(" 選購 "+t._s(a)+" "+t._s(t.product.unit)+" ")])}))],2)]),e("div",{staticClass:"modal-footer"},[e("div",{staticClass:"text-muted text-nowrap mr-3"},[t._v(" 小記 "),e("strong",[t._v(t._s(t.product_num*t.product.price))]),t._v(" 元 ")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.addToCart(t.product.id,t.product_num)}}},[t._v(" 加到購物車 ")])])])])])],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"btn btn-primary btn-block"},[e("i",{staticClass:"fa fa-cart-plus",attrs:{"aria-hidden":"true"}}),t._v(" 結帳去 ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("th"),e("th",[t._v("品名")]),e("th",[t._v("數量")]),e("th",[t._v("單價")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],i=(e("99af"),e("5530")),o=e("2f62"),n=e("7bb1"),c=e("4c93");Object(n["c"])("required",Object(i["a"])(Object(i["a"])({},c["b"]),{},{message:"{_field_}欄位不得為空"})),Object(n["c"])("email",Object(i["a"])(Object(i["a"])({},c["a"]),{},{message:"信箱格式不正確"}));var d={name:"CustomerOrder",components:{ValidationProvider:n["b"],ValidationObserver:n["a"]},data:function(){return{product_num:1,couponCode:"",message:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["getProducts","getCarts"])),{},{getProduct:function(t){this.$store.dispatch("getProduct",t),this.product_num=1},addToCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$store.dispatch("addToCart",{id:t,qty:a})},removeCart:function(t){this.$store.dispatch("removeCart",t)},addCouponCode:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io/","api/").concat("kotard","/coupon"),e={code:t.couponCode};t.$store.dispatch("updateLoading",!0),t.$http.post(a,{data:e}).then((function(a){a.data.success?(t.$store.dispatch("updateLoading",!1),t.message="",t.getCarts()):(t.message=a.data.message,t.$store.dispatch("updateLoading",!1))}))},createOrder:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io/","api/").concat("kotard","/order");t.$refs.form.validate().then((function(e){e&&(t.$store.dispatch("updateLoading",!0),t.$http.post(a,{data:t.form}).then((function(a){a.data.success&&t.$router.push("/customer_checkout/".concat(a.data.orderId)),t.$store.dispatch("updateLoading",!1)})))}))}}),created:function(){this.getProducts(),this.getCarts()},computed:Object(i["a"])({},Object(o["c"])(["isLoading","products","product","loadingId","carts"]))},l=d,u=e("2877"),m=Object(u["a"])(l,s,r,!1,null,null,null);a["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0a4228.8655d238.js.map