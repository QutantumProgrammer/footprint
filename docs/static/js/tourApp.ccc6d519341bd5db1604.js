webpackJsonp([0],{"+D99":function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},"+QdQ":function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},"+z6C":function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},"2Fi5":function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},"2NaA":function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},"3yxQ":function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},"6CHW":function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},"6SZY":function(e,t){},"8PGE":function(e,t){},"8alU":function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},"90RD":function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},"9D57":function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},A7CY:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},C8wJ:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},Dii1:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},EuId:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},GO2z:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},Go8i:function(e,t,r){e.exports=r.p+"static/img/head-icon.97ee4bb.jpg"},Llld:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},MA1h:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("7+uW"),a={scrollLocked:!1},n={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"header"},[o("div",{staticClass:"head-icon",on:{click:function(t){e.goHome()}}},[o("img",{attrs:{src:r("Go8i")}}),e._v(" "),o("span",[e._v("Footprint")])])])},staticRenderFns:[]};var i={name:"App",components:{Header:r("VU/8")({data:function(){return{}},methods:{goHome:function(e){this.$router.push({name:"HomePage"})}}},n,!1,function(e){r("6SZY")},"data-v-932fa900",null).exports},data:function(){return{globalData:a}}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{class:{"scroll-lock":this.globalData.scrollLocked},attrs:{id:"app"}},[t("Header"),this._v(" "),t("div",{staticClass:"content"},[t("router-view")],1)],1)},staticRenderFns:[]};var c=r("VU/8")(i,d,!1,function(e){r("8PGE")},null,null).exports,l=r("/ocq"),p={name:"HomePage",components:{},data:function(){return{hover:!1,footprints:[{title:"很重要",previewImg:"../static/preview/date.jpg",id:"date"},{title:"HK",previewImg:"../static/preview/hk.jpg",id:"hk"},{title:"にほんこ",previewImg:"../static/preview/jp.jpg",id:"jp"},{title:"渝",previewImg:"../static/preview/cq.jpg",id:"cq"},{title:"其他",previewImg:"../static/preview/other.jpg",id:"other"}],globalData:a}},methods:{goDetail:function(e){this.$router.push({name:"Pictures",params:{id:e}})},focus:function(){this.hover=!0},leave:function(){this.hover=!1}}},h={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},e._l(e.footprints,function(t,o){return r("div",{key:o,staticClass:"collection",on:{click:function(r){e.goDetail(t.id)},touchstart:function(t){e.focus()},touchend:function(t){e.leave()}}},[r("img",{attrs:{src:t.previewImg}}),e._v(" "),r("div",{staticClass:"cover-top",class:{active:e.hover}}),e._v(" "),r("div",{staticClass:"cover-bottom",class:{active:e.hover}}),e._v(" "),r("div",{staticClass:"title",class:{active:e.hover}},[e._v(e._s(t.title))])])}))},staticRenderFns:[]};var s=r("VU/8")(p,h,!1,function(e){r("fM08")},"data-v-27510ce5",null).exports,f={name:"imgDialog",data:function(){return{globalData:a,display:!1,loading:!0,switchingImg:!1,touchStartX:0,offsetX:0,offsetPercentX:50,imgIndex:0,lastClick:0,timeId:null,oneFinger:!0,url:""}},props:["imgs"],methods:{show:function(e,t){var r=this;this.offsetPercentX=50;var o=new Image;o.src=e,o.onload=function(){r.url=e,r.loading=!1,r.imgIndex=t},this.display=!0,this.globalData.scrollLocked=!0},hide:function(){this.url=null,this.loading=!0,this.display=!1,this.globalData.scrollLocked=!1},moveStart:function(e){if(!this.switchingImg&&1==e.changedTouches.length){this.oneFinger=!0;var t=e.changedTouches[0];this.touchStartX=t.clientX,this.offsetPercentX=50}},moving:function(e){if(!this.switchingImg)if(e.changedTouches.length>1)this.oneFinger=!1;else{var t=e.changedTouches[0].clientX;this.offsetX=t-this.touchStartX}},moveEnd:function(e){if(!this.switchingImg&&(this.offsetX=0,this.oneFinger&&1==e.changedTouches.length)){var t=e.changedTouches[0].clientX-this.touchStartX;Math.abs(t)<45||t>0&&this.imgIndex<=0||t<0&&this.imgIndex>=this.imgs.length-1||(this.offsetPercentX=t<0?-100:100,t<0?this.imgIndex++:this.imgIndex--,this.switchingImg=!0)}},afterLeave:function(){console.log("leaving"),this.switchingImg&&(this.switchingImg=!1,this.url=null,this.loading=!0,this.show(this.imgs[this.imgIndex].url,this.imgIndex))},dbClickCheck:function(e){var t=this;if(e.stopPropagation(),this.timeId)return clearTimeout(this.timeId),void(this.timeId=null);this.timeId=setTimeout(function(){clearTimeout(t.timeId),t.timeId=null,t.hide()},300)}}},u={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"scope-root"},[e.display?r("div",{staticClass:"cover",on:{click:function(t){e.hide()}}}):e._e(),e._v(" "),e.display?r("div",{staticClass:"loading"},[r("span"),e._v(" "),r("span"),e._v(" "),r("span")]):e._e(),e._v(" "),r("div",{staticClass:"img-container",class:{show:e.display&&!e.loading},on:{click:function(t){e.hide()}}},[r("img",{class:{"img-move-transition":e.switchingImg},style:{left:"calc("+e.offsetPercentX+"% + "+e.offsetX+"px)"},attrs:{src:e.url},on:{touchstart:e.moveStart,touchmove:e.moving,touchend:e.moveEnd,transitionend:e.afterLeave,click:e.dbClickCheck}})])])},staticRenderFns:[]};var m=r("VU/8")(f,u,!1,function(e){r("PprQ")},"data-v-0ed0b34a",null).exports,y={};r("pDj+").keys().forEach(function(e){var t=e.indexOf("/"),r=e.lastIndexOf("/"),o=e.substring(t+1,r),a=e.substring(r);y[o]||(y[o]=[]),y[o].push({url:"../static/origin-img/"+o+a,previewUrl:"../static/low-quality-img/"+o+a})});var w=y,g={name:"Pictures",components:{imgDialog:m},data:function(){return{globalData:a,imgs:[]}},methods:{zoom:function(e,t){this.$refs.zoomImg.show(e,t)}},mounted:function(){this.imgs=w[this.$route.params.id],console.log(this.$route.params.id)}},v={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e._l(e.imgs,function(t,o){return r("div",{key:o,staticClass:"collection",on:{click:function(r){e.zoom(t.url,o)}}},[r("img",{attrs:{src:t.previewUrl}})])}),e._v(" "),r("img-dialog",{ref:"zoomImg",attrs:{imgs:e.imgs}})],2)},staticRenderFns:[]};var P=r("VU/8")(g,v,!1,function(e){r("zQ0K")},"data-v-3e508cb2",null).exports;o.a.use(l.a);var _=new l.a({routes:[{path:"/",redirect:"/homepage"},{path:"/homepage",name:"HomePage",component:s},{path:"/pictures/:id",name:"Pictures",component:P}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:_,components:{App:c},template:"<App/>"})},MF31:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},MnTH:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},P8eq:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},PBA4:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},Pg1i:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},PprQ:function(e,t){},QDrn:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},Qp27:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},RNTF:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},SYrP:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},UJgA:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},UqZl:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},V4Rr:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},VJlQ:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},W9PU:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},XXa3:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},Xw3L:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},ZCVh:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},bnCB:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},cQtc:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},cnVT:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},"d+wX":function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},fL7P:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},fM08:function(e,t){},fSGx:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},fq5a:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},fqnh:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},hBUb:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},hokd:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},ini1:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},insF:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},kF9U:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},lC3j:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},lfp4:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},mJUY:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},ohpZ:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},"pDj+":function(e,t,r){var o={"./cq/cq_1.JPG":"VJlQ","./cq/cq_2.JPG":"fq5a","./cq/cq_3.JPG":"+z6C","./cq/cq_4.JPG":"cQtc","./cq/cq_5.JPG":"rcKU","./cq/cq_6.JPG":"Pg1i","./date/date_01.JPG":"UJgA","./date/date_02.JPG":"90RD","./date/date_03.JPG":"Xw3L","./date/date_04.JPG":"3yxQ","./hk/hk_1.JPG":"lC3j","./hk/hk_10.JPG":"x6On","./hk/hk_11.JPG":"tpuv","./hk/hk_12.JPG":"hBUb","./hk/hk_13.JPG":"8alU","./hk/hk_2.JPG":"RNTF","./hk/hk_3.JPG":"txfj","./hk/hk_4.JPG":"Qp27","./hk/hk_5.JPG":"P8eq","./hk/hk_6.JPG":"Llld","./hk/hk_7.JPG":"ZCVh","./hk/hk_8.JPG":"uxru","./hk/hk_9.JPG":"sKWc","./jp/jp_1.JPG":"9D57","./jp/jp_10.JPG":"2NaA","./jp/jp_11.JPG":"+QdQ","./jp/jp_12.JPG":"MF31","./jp/jp_13.JPG":"6CHW","./jp/jp_14.JPG":"ohpZ","./jp/jp_15.JPG":"XXa3","./jp/jp_16.JPG":"QDrn","./jp/jp_17.JPG":"MnTH","./jp/jp_19.JPG":"2Fi5","./jp/jp_2.JPG":"EuId","./jp/jp_20.JPG":"A7CY","./jp/jp_21.JPG":"ini1","./jp/jp_22.JPG":"vJs/","./jp/jp_23.JPG":"fSGx","./jp/jp_24.JPG":"Dii1","./jp/jp_25.JPG":"lfp4","./jp/jp_26.JPG":"cnVT","./jp/jp_27.JPG":"fL7P","./jp/jp_28.JPG":"tsyk","./jp/jp_29.JPG":"UqZl","./jp/jp_3.JPG":"+D99","./jp/jp_30.JPG":"V4Rr","./jp/jp_31.JPG":"yZwm","./jp/jp_32.JPG":"d+wX","./jp/jp_33.JPG":"bnCB","./jp/jp_34.JPG":"C8wJ","./jp/jp_35.JPG":"fqnh","./jp/jp_36.JPG":"SYrP","./jp/jp_4.JPG":"W9PU","./jp/jp_5.JPG":"mJUY","./jp/jp_6.JPG":"PBA4","./jp/jp_7.JPG":"kF9U","./jp/jp_8.JPG":"insF","./jp/jp_9.JPG":"GO2z","./other/other_1.JPG":"wEIg","./other/other_2.JPG":"hokd"};function a(e){return r(n(e))}function n(e){var t=o[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}a.keys=function(){return Object.keys(o)},a.resolve=n,e.exports=a,a.id="pDj+"},rcKU:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},sKWc:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},tpuv:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},tsyk:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},txfj:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},uxru:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},"vJs/":function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},wEIg:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},x6On:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},yZwm:function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)")},zQ0K:function(e,t){}},["MA1h"]);
//# sourceMappingURL=tourApp.ccc6d519341bd5db1604.js.map