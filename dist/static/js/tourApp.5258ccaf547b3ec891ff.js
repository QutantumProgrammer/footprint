webpackJsonp([0],{"0pz7":function(t,i){},B6ql:function(t,i){},DGDC:function(t,i){},Go8i:function(t,i,a){t.exports=a.p+"static/img/head-icon.97ee4bb.jpg"},H9DF:function(t,i){},MA1h:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var c=a("7+uW"),s={scrollLocked:!1},e={render:function(){var t=this,i=t.$createElement,c=t._self._c||i;return c("div",{staticClass:"header"},[c("div",{staticClass:"head-icon",on:{click:function(i){t.goHome()}}},[c("img",{attrs:{src:a("Go8i")}}),t._v(" "),c("span",[t._v("Footprint")])])])},staticRenderFns:[]};var r={name:"App",components:{Header:a("VU/8")({data:function(){return{}},methods:{goHome:function(t){this.$router.push({name:"HomePage"})}}},e,!1,function(t){a("DGDC")},"data-v-4c046090",null).exports},data:function(){return{globalData:s}}},n={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{class:{"scroll-lock":this.globalData.scrollLocked},attrs:{id:"app"}},[i("Header"),this._v(" "),i("div",{staticClass:"content"},[i("router-view")],1)],1)},staticRenderFns:[]};var o=a("VU/8")(r,n,!1,function(t){a("0pz7")},null,null).exports,l=a("/ocq"),u={name:"HomePage",components:{},data:function(){return{hover:!1,footprints:[{title:"HK",previewImg:"../static/preview/hk.jpg",id:"hk"},{title:"にほんこ",previewImg:"../static/preview/jp.jpg",id:"jp"},{title:"渝",previewImg:"../static/preview/cq.jpg",id:"cq"}],globalData:s}},methods:{goDetail:function(t){this.$router.push({name:"Pictures",params:{id:t}})},focus:function(){this.hover=!0},leave:function(){this.hover=!1}}},p={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"container"},t._l(t.footprints,function(i,c){return a("div",{key:c,staticClass:"collection",on:{click:function(a){t.goDetail(i.id)},touchstart:function(i){t.focus()},touchend:function(i){t.leave()}}},[a("img",{attrs:{src:i.previewImg}}),t._v(" "),a("div",{staticClass:"cover-top",class:{active:t.hover}}),t._v(" "),a("div",{staticClass:"cover-bottom",class:{active:t.hover}}),t._v(" "),a("div",{staticClass:"title",class:{active:t.hover}},[t._v(t._s(i.title))])])}))},staticRenderFns:[]};var j=a("VU/8")(u,p,!1,function(t){a("H9DF")},"data-v-ff264426",null).exports,_={name:"imgDialog",data:function(){return{globalData:s,display:!1,url:""}},methods:{show:function(t){this.url=t,this.display=!0,this.globalData.scrollLocked=!0},hide:function(){this.display=!1,this.globalData.scrollLocked=!1}}},h={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"scope-root"},[t.display?a("div",{staticClass:"cover",on:{click:function(i){t.hide()}}}):t._e(),t._v(" "),a("div",{staticClass:"img-container",class:{show:t.display},on:{click:function(i){t.hide()}}},[a("img",{attrs:{src:t.url}})])])},staticRenderFns:[]};var d={hk:[{url:"../static/hk/hk_1.JPG"},{url:"../static/hk/hk_2.JPG"},{url:"../static/hk/hk_3.JPG"},{url:"../static/hk/hk_4.JPG"},{url:"../static/hk/hk_5.JPG"},{url:"../static/hk/hk_6.JPG"},{url:"../static/hk/hk_7.JPG"},{url:"../static/hk/hk_8.JPG"},{url:"../static/hk/hk_9.JPG"},{url:"../static/hk/hk_10.JPG"},{url:"../static/hk/hk_11.JPG"},{url:"../static/hk/hk_12.JPG"}],jp:[{url:"../static/jp/jp_1.JPG"},{url:"../static/jp/jp_2.JPG"},{url:"../static/jp/jp_3.JPG"},{url:"../static/jp/jp_4.JPG"},{url:"../static/jp/jp_5.JPG"},{url:"../static/jp/jp_6.JPG"},{url:"../static/jp/jp_7.JPG"},{url:"../static/jp/jp_8.JPG"},{url:"../static/jp/jp_9.JPG"},{url:"../static/jp/jp_10.JPG"},{url:"../static/jp/jp_11.JPG"},{url:"../static/jp/jp_12.JPG"},{url:"../static/jp/jp_13.JPG"},{url:"../static/jp/jp_14.JPG"},{url:"../static/jp/jp_15.JPG"},{url:"../static/jp/jp_16.JPG"},{url:"../static/jp/jp_17.JPG"},{url:"../static/jp/jp_18.JPG"},{url:"../static/jp/jp_19.JPG"},{url:"../static/jp/jp_20.JPG"},{url:"../static/jp/jp_21.JPG"},{url:"../static/jp/jp_22.JPG"},{url:"../static/jp/jp_23.JPG"},{url:"../static/jp/jp_24.JPG"},{url:"../static/jp/jp_25.JPG"},{url:"../static/jp/jp_26.JPG"},{url:"../static/jp/jp_27.JPG"},{url:"../static/jp/jp_28.JPG"},{url:"../static/jp/jp_29.JPG"},{url:"../static/jp/jp_30.JPG"},{url:"../static/jp/jp_31.JPG"},{url:"../static/jp/jp_32.JPG"},{url:"../static/jp/jp_33.JPG"},{url:"../static/jp/jp_34.JPG"},{url:"../static/jp/jp_35.JPG"},{url:"../static/jp/jp_36.JPG"}],cq:[{url:"../static/cq/cq_1.JPG"},{url:"../static/cq/cq_2.JPG"},{url:"../static/cq/cq_3.JPG"},{url:"../static/cq/cq_4.JPG"},{url:"../static/cq/cq_5.JPG"},{url:"../static/cq/cq_6.JPG"}]},v={name:"Pictures",components:{imgDialog:a("VU/8")(_,h,!1,function(t){a("B6ql")},"data-v-25c6c85a",null).exports},data:function(){return{globalData:s,imgs:[]}},methods:{zoom:function(t){this.$refs.zoomImg.show(t)}},mounted:function(){this.imgs=d[this.$route.params.id]}},P={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"container"},[t._l(t.imgs,function(i,c){return a("div",{key:c,staticClass:"collection",on:{click:function(a){t.zoom(i.url)}}},[a("img",{attrs:{src:i.url}})])}),t._v(" "),a("img-dialog",{ref:"zoomImg"})],2)},staticRenderFns:[]};var G=a("VU/8")(v,P,!1,function(t){a("o4Jt")},"data-v-2b24ea42",null).exports;c.a.use(l.a);var m=new l.a({routes:[{path:"/",redirect:"/homepage"},{path:"/homepage",name:"HomePage",component:j},{path:"/pictures/:id",name:"Pictures",component:G}]});c.a.config.productionTip=!1,new c.a({el:"#app",router:m,components:{App:o},template:"<App/>"})},o4Jt:function(t,i){}},["MA1h"]);
//# sourceMappingURL=tourApp.5258ccaf547b3ec891ff.js.map