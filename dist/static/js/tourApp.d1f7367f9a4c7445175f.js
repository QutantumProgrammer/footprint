webpackJsonp([0],{"6BIB":function(t,i){},Go8i:function(t,i,e){t.exports=e.p+"static/img/head-icon.97ee4bb.jpg"},MA1h:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("7+uW"),s={scrollLocked:!1},c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"header"},[i("div",{staticClass:"head-icon"},[i("img",{attrs:{src:e("Go8i")}}),this._v(" "),i("span",[this._v("Footprint")])])])}]};var n={name:"App",components:{Header:e("VU/8")({data:function(){return{}},methods:{}},c,!1,function(t){e("jLFP")},"data-v-249138cd",null).exports},data:function(){return{globalData:s}}},r={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{class:{"scroll-lock":this.globalData.scrollLocked},attrs:{id:"app"}},[i("Header"),this._v(" "),i("div",{staticClass:"content"},[i("router-view")],1)],1)},staticRenderFns:[]};var o=e("VU/8")(n,r,!1,function(t){e("hOnm")},null,null).exports,l=e("/ocq"),u={name:"HomePage",components:{},data:function(){return{footprints:[{title:"HK",previewImg:"../static/preview/hk.jpg",id:"hk"},{title:"にほんこ",previewImg:"../static/preview/jp.jpg",id:"jp"},{title:"渝",previewImg:"../static/preview/cq.jpg",id:"cq"}],globalData:s}},methods:{goDetail:function(t){this.$router.push({name:"Pictures",params:{id:t}})}}},p={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"container"},t._l(t.footprints,function(i,a){return e("div",{key:a,staticClass:"collection",on:{click:function(e){t.goDetail(i.id)}}},[e("img",{attrs:{src:i.previewImg}}),t._v(" "),e("div",{staticClass:"cover-top"}),t._v(" "),e("div",{staticClass:"cover-bottom"}),t._v(" "),e("div",{staticClass:"title"},[t._v(t._s(i.title))])])}))},staticRenderFns:[]};var d=e("VU/8")(u,p,!1,function(t){e("MiAT")},"data-v-6262d60d",null).exports,h={name:"imgDialog",data:function(){return{globalData:s,display:!1,url:""}},methods:{show:function(t){this.url=t,this.display=!0,this.globalData.scrollLocked=!0},hide:function(){this.display=!1,this.globalData.scrollLocked=!1}}},m={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"scope-root"},[t.display?e("div",{staticClass:"cover",on:{click:function(i){t.hide()}}}):t._e(),t._v(" "),e("div",{staticClass:"img-container",class:{show:t.display},on:{click:function(i){t.hide()}}},[e("img",{attrs:{src:t.url}})])])},staticRenderFns:[]};var v={hk:[{url:"../static/hk/hk_1.JPG"},{url:"../static/hk/hk_2.JPG"},{url:"../static/hk/hk_3.JPG"},{url:"../static/hk/hk_4.JPG"},{url:"../static/hk/hk_5.JPG"},{url:"../static/hk/hk_6.JPG"},{url:"../static/hk/hk_7.JPG"},{url:"../static/hk/hk_8.JPG"},{url:"../static/hk/hk_9.JPG"}],jp:[{url:"../static/jp/jp_1.JPG"},{url:"../static/jp/jp_2.JPG"},{url:"../static/jp/jp_3.JPG"},{url:"../static/jp/jp_4.JPG"},{url:"../static/jp/jp_5.JPG"},{url:"../static/jp/jp_6.JPG"},{url:"../static/jp/jp_7.JPG"},{url:"../static/jp/jp_8.JPG"},{url:"../static/jp/jp_9.JPG"}],cq:[{url:"../static/cq/cq_1.JPG"},{url:"../static/cq/cq_2.JPG"},{url:"../static/cq/cq_3.JPG"},{url:"../static/cq/cq_4.JPG"},{url:"../static/cq/cq_5.JPG"}]},_={name:"Pictures",components:{imgDialog:e("VU/8")(h,m,!1,function(t){e("6BIB")},"data-v-0b9baea8",null).exports},data:function(){return{globalData:s,imgs:[]}},methods:{zoom:function(t){this.$refs.zoomImg.show(t)}},mounted:function(){this.imgs=v[this.$route.params.id]}},f={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"container"},[t._l(t.imgs,function(i,a){return e("div",{key:a,staticClass:"collection",on:{click:function(e){t.zoom(i.url)}}},[e("img",{attrs:{src:i.url}})])}),t._v(" "),e("img-dialog",{ref:"zoomImg"})],2)},staticRenderFns:[]};var g=e("VU/8")(_,f,!1,function(t){e("o4Jt")},"data-v-2b24ea42",null).exports;a.a.use(l.a);var k=new l.a({routes:[{path:"/",redirect:"/homepage"},{path:"/homepage",name:"HomePage",component:d},{path:"/pictures/:id",name:"Pictures",component:g}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:k,components:{App:o},template:"<App/>"})},MiAT:function(t,i){},hOnm:function(t,i){},jLFP:function(t,i){},o4Jt:function(t,i){}},["MA1h"]);
//# sourceMappingURL=tourApp.d1f7367f9a4c7445175f.js.map