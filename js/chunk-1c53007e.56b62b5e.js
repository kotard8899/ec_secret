(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c53007e"],{1336:function(t,s,e){},"294f":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"text-center"},[e("form",{staticClass:"form-signin",on:{submit:function(s){return s.preventDefault(),t.login(s)}}},[e("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("請登入")]),e("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("Email address")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:t.user.username},on:{input:function(s){s.target.composing||t.$set(t.user,"username",s.target.value)}}}),e("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(s){s.target.composing||t.$set(t.user,"password",s.target.value)}}}),t._m(0),e("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[t._v("登入")]),e("p",{staticClass:"mt-5 mb-3 text-muted"},[t._v("© 2017-2019")])])])},r=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"checkbox mb-3"},[e("label",[e("input",{attrs:{type:"checkbox",value:"remember-me"}}),t._v(" 記住我 ")])])}],n={name:"Login",data:function(){return{user:{username:"",password:""}}},methods:{login:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io/","admin/signin");t.$http.post(s,t.user).then((function(s){s.data.success&&t.$router.push("/admin/products")}))}}},o=n,i=(e("cf8a"),e("2877")),u=Object(i["a"])(o,a,r,!1,null,"f8cb2fa8",null);s["default"]=u.exports},cf8a:function(t,s,e){"use strict";var a=e("1336"),r=e.n(a);r.a}}]);
//# sourceMappingURL=chunk-1c53007e.56b62b5e.js.map