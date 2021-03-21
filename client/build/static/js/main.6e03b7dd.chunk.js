/*! For license information please see main.6e03b7dd.chunk.js.LICENSE.txt */
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(16),s=n.n(r),i=(n(21),n(3)),o=n.n(i),u=n(4),l=n(5),p=(n(23),n(24),n(7),n(0));function j(e){var t=e.pokemon,n=e.getTypeList,c=e.buttonText,a=e.addOrRelease,r=e.mainDiv,s=e.buttonClass,i=e.textClass,o=e.imgClass,u=t.name,l=t.height,j=t.weight,d=t.id,b=t.back_default,h=t.front_default,f=t.types;if(t){var x=f.map((function(e,t){return Object(p.jsx)("span",{className:"type",onClick:n,children:e},t)}));return Object(p.jsxs)("div",{className:"card ".concat(r),children:[Object(p.jsxs)("div",{className:"".concat(i),children:[Object(p.jsx)("span",{children:"name:"}),Object(p.jsx)("span",{children:" ".concat(u)}),Object(p.jsx)("br",{}),Object(p.jsx)("span",{children:"id:"}),Object(p.jsx)("span",{children:" ".concat(d)}),Object(p.jsx)("br",{}),Object(p.jsx)("span",{children:"height:"}),Object(p.jsx)("span",{children:" ".concat(l)}),Object(p.jsx)("br",{}),Object(p.jsx)("span",{children:"weight:"}),Object(p.jsx)("span",{children:" ".concat(j)}),Object(p.jsx)("br",{}),Object(p.jsx)("span",{children:"types:"})," ",Object(p.jsx)("span",{children:x})]}),Object(p.jsx)("button",{className:"release-or-catch-btn ".concat(s),onClick:function(){return a(t)},children:c}),Object(p.jsx)("img",{className:o,src:h,onMouseOver:function(e){return e.currentTarget.src=b},onMouseOut:function(e){return e.currentTarget.src=h},alt:"pokemon"})]})}return Object(p.jsx)(p.Fragment,{})}n(44);function d(e){var t=e.getTypeList,n=e.getPokemon,c=e.changeInputStr,a=e.pokemon,r=e.buttonText,s=e.addOrRelease,i=e.errorMessage,o=e.isHidden;return Object(p.jsxs)("div",{className:"search-area",children:[Object(p.jsx)("h1",{className:"main-title",children:"Pokedex"}),Object(p.jsxs)("div",{className:"search-container",children:[Object(p.jsx)("input",{onChange:c,className:"search-input",placeholder:"Look for a pokemon"}),Object(p.jsx)("button",{className:"search-button",onClick:n,children:"Search"})]}),Object(p.jsx)("div",{className:"error-message",hidden:o,children:"".concat(i)}),Object(p.jsx)(j,{mainDiv:"searched-card",buttonClass:"button-class",textClass:"text-class",imgClass:"img-class",pokemon:a,getTypeList:t,buttonText:r,addOrRelease:s})]})}function b(e){var t=e.typeList,n=e.getPokemonByTypes,c=t.map((function(e,t){return Object(p.jsx)("h1",{onClick:n,className:"type-poke-img",children:e.pokemon.name},t)}));return Object(p.jsx)("div",{children:c})}n(45);function h(e){var t=e.collection,n=e.addOrRelease,c=e.getTypeList,a=t.map((function(e,t){return Object(p.jsx)(j,{pokemon:e,buttonText:"release",addOrRelease:n,getTypeList:c},t)}));return Object(p.jsxs)("div",{className:"collection-section",children:[Object(p.jsx)("h2",{className:"collection-title",children:"collection"}),Object(p.jsx)("div",{className:"collection-inner",children:a})]})}var f=n(7);var x=function(){var e,t=Object(c.useState)([]),n=Object(l.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)("Catch"),i=Object(l.a)(s,2),j=i[0],x=i[1];function O(e){return m.apply(this,arguments)}function m(){return(m=Object(u.a)(o.a.mark((function e(t){var n,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.find((function(e){return e.name===t.name}))){e.next=24;break}return n=t.id,e.prev=3,e.next=6,f.delete("/api/collection/release/".concat(n));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),alert(e.t0);case 11:return e.prev=11,e.next=14,f.get("/api/collection");case 14:c=e.sent,r(c.data),e.next=21;break;case 18:e.prev=18,e.t1=e.catch(11),alert(e.t1);case 21:x("release"===j?"catch":"release"),e.next=36;break;case 24:return e.prev=24,e.next=27,f.post("/api/collection/catch",{name:t.name,height:t.height,weight:t.weight,id:t.id,back_default:t.back_default,front_default:t.front_default,types:t.types});case 27:e.next=32;break;case 29:e.prev=29,e.t2=e.catch(24),alert(e.t2);case 32:(s=a.slice()).push(t),r(s),x("release"===j?"catch":"release");case 36:case"end":return e.stop()}}),e,null,[[3,8],[11,18],[24,29]])})))).apply(this,arguments)}function g(e){var t=a.find((function(t){return t.name===e}));x(t?"release":"catch")}Object(c.useEffect)((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/api/collection");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var v=Object(c.useState)(""),k=Object(l.a)(v,2),y=k[0],w=k[1],T=Object(c.useState)(!0),N=Object(l.a)(T,2),C=N[0],L=N[1],S=Object(c.useState)(""),R=Object(l.a)(S,2),_=R[0],M=R[1],P=function(){var t=Object(u.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return");case 2:e=n.target.value;case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function B(){return(B=Object(u.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e,f.get("/api/pokemon/".concat(n)).then((function(e){w(""),L(!0),M(e.data)})).catch((function(e){w("".concat(n," is not a pokemon")),L(!1)})),g(n);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var I=Object(c.useState)([]),D=Object(l.a)(I,2),E=D[0],F=D[1];function H(e){return J.apply(this,arguments)}function J(){return(J=Object(u.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.innerText,e.next=3,f.get("/api/type/".concat(n));case 3:c=e.sent,F(c.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){return(q=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(n=t.target.innerText),f.get("/api/pokemon/".concat(n)).then((function(e){return M(e.data)})),F([]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(d,{getTypeList:H,getPokemon:function(){return B.apply(this,arguments)},changeInputStr:P,pokemon:_,buttonText:j,addOrRelease:O,errorMessage:y,isHidden:C}),Object(p.jsx)(h,{collection:a,addOrRelease:O,getTypeList:H}),Object(p.jsx)(b,{typeList:E,getPokemonByTypes:function(e){return q.apply(this,arguments)}})]})};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.6e03b7dd.chunk.js.map