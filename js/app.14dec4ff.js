(function(e){function t(t){for(var r,a,s=t[0],c=t[1],l=t[2],p=0,d=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/bodypix-study/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"037f":function(e,t,n){"use strict";var r=n("9511"),o=n.n(r);o.a},1:function(e,t){},2:function(e,t){},"2cc6":function(e,t,n){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("342d"),i=n.n(o),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wapper",attrs:{id:"app"}},[n("h1",[e._v("body-pixで「zoomのバーチャル背景みたいなの作って」に応える")]),n("a",{attrs:{href:"https://github.com/tensorflow/tfjs-models/tree/master/body-pix"}},[e._v("https://github.com/tensorflow/tfjs-models/tree/master/body-pix")]),n("br"),n("button",{on:{click:function(t){e.page--}}},[e._v("←")]),n("button",{on:{click:function(t){e.page++}}},[e._v("→")]),1===e.page?[n("h2",[e._v("画像から人物抽出")]),n("ImagePix")]:2===e.page?[n("h2",[e._v("映像から人物抽出")]),n("VideoJSRecord")]:e._e()],2)},s=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{on:{click:e.mask}},[e._v("body-pix: 抽出")]),n("button",{on:{click:e.maskWithBokeh}},[e._v("body-pix: ボケ")]),n("button",{on:{click:function(t){e.stop=!0}}},[e._v("stop")]),n("br"),n("label",{attrs:{for:"segmentationThreshold"}},[e._v("segmentationThreshold:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.segmentationThreshold,expression:"segmentationThreshold"}],attrs:{type:"number",name:"segmentationThreshold",min:"0.0",max:"1.0",step:"0.1"},domProps:{value:e.segmentationThreshold},on:{input:function(t){t.target.composing||(e.segmentationThreshold=t.target.value)}}}),n("br"),n("div",{staticClass:"flex"},[n("video",{staticClass:"video-js vjs-default-skin",attrs:{id:"myVideo",playsinline:""}}),n("canvas",{ref:"output",staticClass:"video-canvas",attrs:{id:"video-canvas"}})])])},l=[],u=(n("a9e3"),n("96cf"),n("1da1")),p=(n("fda2"),n("d52a"),n("f0e2")),d=(n("d093"),n("a9ee")),m=n.n(d),f=(n("3966"),n("5479")),h={data:function(){return{segmentationThreshold:.7,stop:!1,player:"",options:{controls:!0,autoplay:!1,fluid:!1,loop:!0,width:640,height:480,bigPlayButton:!1,controlBar:{volumePanel:!1,pictureInPictureToggle:!1,fullscreenToggle:!1},plugins:{record:{audio:!1,video:{width:640,height:480},debug:!0}}}}},mounted:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.player=Object(p["default"])("#myVideo",e.options,(function(){var e="Using video.js "+p["default"].VERSION+" with videojs-record "+p["default"].getPluginVersion("record")+" and recordrtc "+m.a.version;p["default"].log(e)})),e.player.on("deviceReady",(function(){console.log("device is ready!")})),e.player.on("startRecord",(function(){console.log("started recording!")})),e.player.on("finishRecord",(function(){console.log("finished recording: ",e.player.recordedData)})),e.player.on("error",(function(e,t){console.warn(t)})),e.player.on("deviceError",(function(){console.error("device error:",e.player.deviceErrorCode)})),t.next=8,f["c"]();case 8:e.net=t.sent;case 9:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){this.player&&(this.player.dispose(),this.player)},methods:{mask:function(){this.stop=!1,this.doBodyPix()},maskWithBokeh:function(){this.stop=!1,console.log("bokeh"),this.bokeh()},doBodyPix:function(){var e=document.getElementById("video-canvas");e.setAttribute("width",640),e.setAttribute("height",480);var t=document.getElementById("myVideo_html5_api");t.setAttribute("width",640),t.setAttribute("height",480);var n=this;function r(){return o.apply(this,arguments)}function o(){return o=Object(u["a"])(regeneratorRuntime.mark((function o(){var i;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,n.net.segmentPerson(t,{segmentationThreshold:Number(n.segmentationThreshold)});case 3:i=o.sent,n.drawMask(i,e,t,{r:61,g:220,b:132,a:255}),o.next=11;break;case 7:o.prev=7,o.t0=o["catch"](0),console.log(o.t0),window.console.log("Retrying...");case 11:if(o.prev=11,!n.stop){o.next=14;break}return o.abrupt("return");case 14:return requestAnimationFrame(r),o.finish(11);case 16:case"end":return o.stop()}}),o,null,[[0,7,11,16]])}))),o.apply(this,arguments)}r()},drawMask:function(e,t,n,r){var o=f["d"](e,{r:0,g:0,b:0,a:0},r,!1);f["b"](t,n,o,1,0,!1)},bokeh:function(){var e=document.getElementById("video-canvas");e.setAttribute("width",640),e.setAttribute("height",480);var t=document.getElementById("myVideo_html5_api");t.setAttribute("width",640),t.setAttribute("height",480);var n=this;function r(){return o.apply(this,arguments)}function o(){return o=Object(u["a"])(regeneratorRuntime.mark((function o(){var i;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,n.net.segmentPerson(t);case 3:i=o.sent,f["a"](e,t,i,3,3,!1),o.next=11;break;case 7:o.prev=7,o.t0=o["catch"](0),console.log(o.t0),window.console.log("Retrying...");case 11:if(o.prev=11,!n.stop){o.next=14;break}return o.abrupt("return");case 14:return requestAnimationFrame(r),o.finish(11);case 16:case"end":return o.stop()}}),o,null,[[0,7,11,16]])}))),o.apply(this,arguments)}r()}}},v=h,g=(n("037f"),n("2877")),b=Object(g["a"])(v,c,l,!1,null,null,null),y=b.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"paramater"},[n("button",{on:{click:function(t){return e.loadAndPredict("MobileNetV1")}}},[e._v("MobileNetV1 抽出")]),n("button",{on:{click:function(t){return e.loadAndPredict("ResNet50")}}},[e._v("ResNet50 抽出")]),n("br"),n("label",{attrs:{for:"multiplier"}},[e._v("multiplier:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.multiplier,expression:"multiplier"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.multiplier=t.target.multiple?n:n[0]}}},[n("option",[e._v("0.50")]),n("option",[e._v("0.75")]),n("option",[e._v("1.0")])]),n("label",{attrs:{for:"segmentationThreshold"}},[e._v("segmentationThreshold:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.segmentationThreshold,expression:"segmentationThreshold"}],attrs:{type:"number",name:"segmentationThreshold",min:"0.0",max:"1.0",step:"0.1"},domProps:{value:e.segmentationThreshold},on:{input:function(t){t.target.composing||(e.segmentationThreshold=t.target.value)}}}),n("label",{attrs:{for:"opacity"}},[e._v("opacity:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.opacity,expression:"opacity"}],attrs:{type:"number",name:"opacity",min:"0.0",max:"1.0",step:"0.1"},domProps:{value:e.opacity},on:{input:function(t){t.target.composing||(e.opacity=t.target.value)}}}),n("label",{attrs:{for:"checkbox"}},[e._v("flipHorizontal: "+e._s(e.flipHorizontal))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.flipHorizontal,expression:"flipHorizontal"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(e.flipHorizontal)?e._i(e.flipHorizontal,null)>-1:e.flipHorizontal},on:{change:function(t){var n=e.flipHorizontal,r=t.target,o=!!r.checked;if(Array.isArray(n)){var i=null,a=e._i(n,i);r.checked?a<0&&(e.flipHorizontal=n.concat([i])):a>-1&&(e.flipHorizontal=n.slice(0,a).concat(n.slice(a+1)))}else e.flipHorizontal=o}}})]),e._m(0),e._m(1)])},w=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"photo-block"},[r("img",{staticClass:"photo",attrs:{id:"photo",alt:"photo",src:n("8311")}}),r("canvas",{staticClass:"canvas",attrs:{id:"MobileNetV1"}}),r("canvas",{staticClass:"canvas",attrs:{id:"ResNet50"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" Photo by "),n("a",{attrs:{href:"https://stocksnap.io/author/mattmoloney"}},[e._v("Matt Moloney")]),e._v(" from "),n("a",{attrs:{href:"https://stocksnap.io"}},[e._v("StockSnap")])])}],x={data:function(){return{opacity:.7,flipHorizontal:!1,maskBlurAmount:0,multiplier:.75,segmentationThreshold:.7}},methods:{loadAndPredict:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){var r,o,i,a,s,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=document.getElementById("photo"),o="MobileNetV1"===e?t.multiplier:1,n.next=4,f["c"]({architecture:e,multiplier:Number(o)});case 4:return i=n.sent,n.next=7,i.segmentPerson(r,{segmentationThreshold:Number(t.segmentationThreshold)});case 7:a=n.sent,console.log(a),s=f["d"](a),c=document.getElementById(e),f["b"](c,r,s,t.opacity,t.maskBlurAmount,t.flipHorizontal);case 12:case"end":return n.stop()}}),n)})))()}},mounted:function(){return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("mounted");case 1:case"end":return e.stop()}}),e)})))()}},k=x,P=(n("61e0"),Object(g["a"])(k,_,w,!1,null,null,null)),j=P.exports,T={name:"App",components:{VideoJSRecord:y,ImagePix:j},data:function(){return{page:1}},head:{title:{inner:"body-pixで「zoomのバーチャル背景みたいなの作って」に応える"},link:[{rel:"stylesheet",href:"https://cdn.rawgit.com/kimeiga/bahunya/css/bahunya-0.1.3.css"}]}},A=T,O=(n("034f"),Object(g["a"])(A,a,s,!1,null,null,null)),R=O.exports;r["a"].use(i.a),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(R)}}).$mount("#app")},"61e0":function(e,t,n){"use strict";var r=n("2cc6"),o=n.n(r);o.a},8311:function(e,t,n){e.exports=n.p+"img/photo.83b3a64f.jpg"},"85ec":function(e,t,n){},9511:function(e,t,n){}});
//# sourceMappingURL=app.14dec4ff.js.map