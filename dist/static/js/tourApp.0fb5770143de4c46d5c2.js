webpackJsonp([0],{"0pz7":function(t,i){},B6ql:function(t,i){},DGDC:function(t,i){},Go8i:function(t,i,e){t.exports=e.p+"static/img/head-icon.97ee4bb.jpg"},H9DF:function(t,i){},MA1h:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("7+uW"),c={scrollLocked:!1},s={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"header"},[a("div",{staticClass:"head-icon",on:{click:function(i){t.goHome()}}},[a("img",{attrs:{src:e("Go8i")}}),t._v(" "),a("span",[t._v("Footprint")])])])},staticRenderFns:[]};var n={name:"App",components:{Header:e("VU/8")({data:function(){return{}},methods:{goHome:function(t){this.$router.push({name:"HomePage"})}}},s,!1,function(t){e("DGDC")},"data-v-4c046090",null).exports},data:function(){return{globalData:c}}},o={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{class:{"scroll-lock":this.globalData.scrollLocked},attrs:{id:"app"}},[i("Header"),this._v(" "),i("div",{staticClass:"content"},[i("router-view")],1)],1)},staticRenderFns:[]};var r=e("VU/8")(n,o,!1,function(t){e("0pz7")},null,null).exports,l=e("/ocq"),u={name:"HomePage",components:{},data:function(){return{hover:!1,footprints:[{title:"HK",previewImg:"../static/preview/hk.jpg",id:"hk"},{title:"にほんこ",previewImg:"../static/preview/jp.jpg",id:"jp"},{title:"渝",previewImg:"../static/preview/cq.jpg",id:"cq"}],globalData:c}},methods:{goDetail:function(t){this.$router.push({name:"Pictures",params:{id:t}})},focus:function(){this.hover=!0},leave:function(){this.hover=!1}}},p={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"container"},t._l(t.footprints,function(i,a){return e("div",{key:a,staticClass:"collection",on:{click:function(e){t.goDetail(i.id)},touchstart:function(i){t.focus()},touchend:function(i){t.leave()}}},[e("img",{attrs:{src:i.previewImg}}),t._v(" "),e("div",{staticClass:"cover-top",class:{active:t.hover}}),t._v(" "),e("div",{staticClass:"cover-bottom",class:{active:t.hover}}),t._v(" "),e("div",{staticClass:"title",class:{active:t.hover}},[t._v(t._s(i.title))])])}))},staticRenderFns:[]};var h=e("VU/8")(u,p,!1,function(t){e("H9DF")},"data-v-ff264426",null).exports,d={name:"imgDialog",data:function(){return{globalData:c,display:!1,url:""}},methods:{show:function(t){this.url=t,this.display=!0,this.globalData.scrollLocked=!0},hide:function(){this.display=!1,this.globalData.scrollLocked=!1}}},v={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"scope-root"},[t.display?e("div",{staticClass:"cover",on:{click:function(i){t.hide()}}}):t._e(),t._v(" "),e("div",{staticClass:"img-container",class:{show:t.display},on:{click:function(i){t.hide()}}},[e("img",{attrs:{src:t.url}})])])},staticRenderFns:[]};var m={hk:[{url:"../static/hk/hk_1.JPG"},{url:"../static/hk/hk_2.JPG"},{url:"../static/hk/hk_3.JPG"},{url:"../static/hk/hk_4.JPG"},{url:"../static/hk/hk_5.JPG"},{url:"../static/hk/hk_6.JPG"},{url:"../static/hk/hk_7.JPG"},{url:"../static/hk/hk_8.JPG"},{url:"../static/hk/hk_9.JPG"}],jp:[{url:"../static/jp/jp_1.JPG"},{url:"../static/jp/jp_2.JPG"},{url:"../static/jp/jp_3.JPG"},{url:"../static/jp/jp_4.JPG"},{url:"../static/jp/jp_5.JPG"},{url:"../static/jp/jp_6.JPG"},{url:"../static/jp/jp_7.JPG"},{url:"../static/jp/jp_8.JPG"},{url:"../static/jp/jp_9.JPG"}],cq:[{url:"../static/cq/cq_1.JPG"},{url:"../static/cq/cq_2.JPG"},{url:"../static/cq/cq_3.JPG"},{url:"../static/cq/cq_4.JPG"},{url:"../static/cq/cq_5.JPG"}]},f={name:"Pictures",components:{imgDialog:e("VU/8")(d,v,!1,function(t){e("B6ql")},"data-v-25c6c85a",null).exports},data:function(){return{globalData:c,imgs:[]}},methods:{zoom:function(t){this.$refs.zoomImg.show(t)}},mounted:function(){this.imgs=m[this.$route.params.id]}},_={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"container"},[t._l(t.imgs,function(i,a){return e("div",{key:a,staticClass:"collection",on:{click:function(e){t.zoom(i.url)}}},[e("img",{attrs:{src:i.url}})])}),t._v(" "),e("img-dialog",{ref:"zoomImg"})],2)},staticRenderFns:[]};var g=e("VU/8")(f,_,!1,function(t){e("o4Jt")},"data-v-2b24ea42",null).exports;a.a.use(l.a);var k=new l.a({routes:[{path:"/",redirect:"/homepage"},{path:"/homepage",name:"HomePage",component:h},{path:"/pictures/:id",name:"Pictures",component:g}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:k,components:{App:r},template:"<App/>"})},o4Jt:function(t,i){}},["MA1h"]);
//# sourceMappingURL=tourApp.0fb5770143de4c46d5c2.js.map