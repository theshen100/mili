webpackJsonp([41],{"/zzu":function(t,i,n){"use strict";var o=n("V8bM"),e=n("b1Yp"),a=n("FhoZ"),r=n.n(a);i.a={data:function(){return{allowBaiduAd:r.a.allowBaiduAd}},asyncData:function(t){return o.a.getBooks({client:t.req}).then(function(t){return{books:t.data.books}}).catch(function(i){console.log(i),t.error({statusCode:404,message:"Page not found"})})},head:function(){return{title:"图书"}},filters:{entity2HTML:e.a.entity2HTML},mounted:function(){this.$nextTick(function(){this.createAd()})},methods:{createAd:function(){this.allowBaiduAd&&(window.BAIDU_CLB_fillSlotAsync(r.a.baiduAd.banner3,"banner"),window.BAIDU_CLB_fillSlotAsync(r.a.baiduAd.ad120x90,"ad120x90"))}}}},Xlu5:function(t,i,n){"use strict";function o(t){n("gt50")}Object.defineProperty(i,"__esModule",{value:!0});var e=n("/zzu"),a=n("h2iC"),r=n("VU/8"),s=o,l=r(e.a,a.a,!1,s,null,null);i.default=l.exports},b1Yp:function(t,i,n){"use strict";var o={trimImg:function(t){return t=t.replace(/<\s*img\s+.*?\/?\s*>/g,"")},entity2HTML:function(t){var i={lt:"<",gt:">",nbsp:" ",amp:"&",quot:'"'},n=/&(lt|gt|nbsp|amp|quot);/gi;return t.replace(n,function(t,n){return i[n]})}};i.a=o},gt50:function(t,i,n){var o=n("knj9");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n("rjj0")("71540f5e",o,!0)},h2iC:function(t,i,n){"use strict";var o=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("ul",{staticClass:"book-list"},t._l(t.books,function(i,o){return n("li",{staticClass:"book-item",style:{"margin-right":(o+1)%5==0?0:"20px"}},[n("div",{staticClass:"book-item-img"},[n("a",{attrs:{href:"/book/"+i.id,target:"_blank"}},[n("img",{attrs:{src:i.coverURL}})])]),n("h3",{staticClass:"book-item-title"},[t._v(t._s(t._f("entity2HTML")(i.name)))])])})),t.allowBaiduAd?n("div",{attrs:{id:"adBox"}},[n("div",{attrs:{id:"banner"}}),n("div",{attrs:{id:"ad120x90"}})]):t._e()])},e=[],a={render:o,staticRenderFns:e};i.a=a},knj9:function(t,i,n){i=t.exports=n("FZ+f")(!1),i.push([t.i,"body{background-color:#e1e1e1}.common-body-left{background:none}.book-list{padding:20px;background:#fff}.book-item{display:inline-block;vertical-align:top;margin-right:20px;margin-bottom:20px}.book-item-img{width:156px;height:198px;cursor:pointer}.book-item-img img{width:100%}.book-item-title{line-height:30px;font-size:14px;width:156px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.book-item-producer{font-size:12px}",""])}});
//# sourceMappingURL=index.ddf8a51ef9c13977c3fc.js.map