(this["webpackJsonpreact-twenty-two-projects"]=this["webpackJsonpreact-twenty-two-projects"]||[]).push([[4],{65:function(t,e,n){},69:function(t,e,n){"use strict";n.r(e);var a=n(43),c=n.n(a),o=n(67),s=n(45),i=n(66),r=n(46),u=n.n(r),l=n(0),d=(n(65),n(1));e.default=function(){var t,e,n,a=Object(l.useState)({loading:!0,quote:{text:"",author:""}}),r=Object(i.a)(a,2),j=r[0],b=r[1];Object(l.useEffect)((function(){document.title="21 Projects - Quote Generator",p()}),[]);var p=function(){var t=Object(s.a)(c.a.mark((function t(){var e,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://goquotes-api.herokuapp.com/api/v1/random?count=1",b(Object(o.a)(Object(o.a)({},j),{},{loading:!0})),t.next=4,u.a.get("https://goquotes-api.herokuapp.com/api/v1/random?count=1");case 4:e=t.sent,n=e.data.quotes[0],setTimeout((function(){b(Object(o.a)(Object(o.a)({},j),{},{loading:!1,quote:n}))}),500);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"quote-generator-container",children:j.loading?Object(d.jsx)("div",{className:"loading-container",children:Object(d.jsx)("img",{src:"/images/loading-simple-spinner-blue.svg",alt:"Loading",className:"loading"})}):Object(d.jsxs)("div",{className:"quote-container",children:[Object(d.jsxs)("div",{className:"quote-text "+((null===(t=j.quote)||void 0===t?void 0:t.text.length)>70?"long":""),children:[Object(d.jsx)("i",{className:"fas fa-quote-left"}),Object(d.jsx)("span",{className:"quote",children:null===(e=j.quote)||void 0===e?void 0:e.text})]}),Object(d.jsx)("div",{className:"quote-author",children:Object(d.jsx)("span",{className:"author",children:null===(n=j.quote)||void 0===n?void 0:n.author})}),Object(d.jsxs)("div",{className:"btn-container",children:[Object(d.jsx)("button",{className:"twitter-btn",title:"Tweet This!",onClick:function(){var t="https://twitter.com/intent/tweet?text=".concat(j.quote.text,"-").concat(j.quote.text);window.open(t,"_blank")},children:Object(d.jsx)("i",{className:"fab fa-twitter"})}),Object(d.jsx)("button",{className:"new-quote-btn",onClick:function(){return p()},children:"New Quote"})]})]})})}}}]);
//# sourceMappingURL=4.a8194488.chunk.js.map