(this["webpackJsonpsneaker-app"]=this["webpackJsonpsneaker-app"]||[]).push([[0],{16:function(e,t,a){e.exports={shoe:"shoe_shoe__2uOBt",img:"shoe_img__1BNRS",name:"shoe_name__Ul3iJ",cart:"shoe_cart__3NLg2"}},52:function(e,t,a){},54:function(e,t,a){e.exports=a.p+"static/media/addCart.7ea3811d.png"},55:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAD+UlEQVR4Xu2bO6wOQRSAv98jVzwiERUKlQQREhEEodEQ0UhEQiJRoRClQqNQ6ohCiWgoRDQUXpEQUUgInQaFZ7xzPXN+d2XN3dk9Mzu7s7t2yvufmXPON+fMa88d0LdMAoOeSzaBHowlMnowBWDmAmuUafUduKCUba2YRMwvT+s7HW1lwJwHtnlCbXy3MmDEuc5GTeLYAWC3YhqXGTKdB6NgMhQx16PJgCzGnWuuM34XWJGi8AWY2jkqnmuEGTWucFvB0cepHoxlanswFjC3gdWp394Cs1qRHw5G+qRS1u7koLIVom96MIFv1773q1aES5kj/T7geGu8dDd01DeVstYZ37HK7HJywJyS8juUDSO+A3UdzCAkmOXAffeoHXf/crEpRMRMBz6Yl2MXI0yfdwBnA9y2Y6fST+NqdAnYUgZMqHSKDSZTfw9m/FPKkElZMPIWM9FjXWlylyBgZgLvmuylo21ngJ0hIqZr96a/GVQ2lXowOSFpruqngV0OIRxrV1oH3LAdN0JEzGzgZYnzTCwwpt7NwOXEjxBgyp5nmgLmHxZVgZng8Om302CeAAtS6fQYWKhcZ2KA2Q6cy0v/UBEj48idI920Y8cAY+rcAFz3MV4z+W1+1Rs3idpZ7cFoCFhkHgBLSvSP1TXzM3PIiGnrKXgEGDVnpWowmvHrXnxV+jSGu4S4qVROxa8LBlAZahnD52lTpS80mGPAwZQT8l4jNTR5TWVoIDA3gbWaY0VoMD7XgzrBqAuf/ncwVv/rALMSkEosW4sZMbWC2QOcclmxI8neAVbZdFcRMW05z+T63oOxhExVYKTCquj8EimDhmr3AifzDKgKTEyng+juwdScSqY621uN3MiXBpniP4OYJ+/00E5B4CTs4cAi4KGiXwg7NA9l+4ETCntKf7vO0yHX+a8aI8ZkysDRQElMKTpwDuXKGFPks4uxyVg+9lSix8eQIiDyuxQUSWFRuk0DPqf+cFEKdAwZH3tMMM+Aeca4psxzQP7d0dp8DNGAMQ2Rz6G3Mjqaco+AxRoFYzLrgWsKuFlp3YiTb54RZS6RUjsnNXRJ2wpIJGY1Jz11RUxVYD4CkqJJyyuQbBWY98CMlGMvgDkOqXQEOJySF+fl83BjI8b8ZCuGmlEjhcvyZptuPhFsRsJG4KoxbtbOFWWNEbts2+hTYL5lVkOASYZ+BchjfFYr1FMo4BDWpugh4KhDf5cKCXNYl7OMKl2rBCPGy3VArgVFTXaWT0VCOb8L1B/K/iqfVUJKhTaxScC3nDFC2pAXOVKWIuUpqhbSKI1CObxJHc0VQLbaqprUHm8CJG3u+SipG4yPjVH69GB8t60o09UApX3EWCbhNxZbuTGFBg3MAAAAAElFTkSuQmCC"},63:function(e,t,a){e.exports=a(81)},68:function(e,t,a){},74:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),s=a.n(c),o=(a(68),a(33),a(7)),l=a.n(o),i=a(12),u=a(13),m=a(41),p=a(42),d=a(19),f=a(60),g=a(6),E=a(11),h=(a(74),a(16)),v=a.n(h),b=a(54),y=a.n(b),N=function(e){var t=e.names,a=e.image_url,n=e.site,c=e.category,s=e.gender,o=Object(E.c)((function(e){return e.isLogged})),u=Object(E.c)((function(e){return e.Email}));var m=function(){var e=Object(i.a)(l.a.mark((function e(){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:u,name:t,image_url:a,site:n,category:c,gender:s})},e.next=3,fetch("https://sneakers-api.herokuapp.com/cart",r);case 3:e.sent.ok&&alert("Added Item to Cart");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:v.a.shoe},o?r.a.createElement("img",{className:v.a.cart,src:y.a,alt:"Logo",onClick:m}):r.a.createElement("div",null),r.a.createElement("p",{className:v.a.name}," ",r.a.createElement("b",null," ",t," ")," "),r.a.createElement("img",{className:v.a.image,src:a,alt:"",width:"200",height:"200",onClick:function(){return function(e){console.log(e.site),window.open(e.site)}({site:n})}}),r.a.createElement("p",{className:v.a.name}," ",r.a.createElement("b",null," ",c," ")," "))},O=a(55),w=a.n(O),A=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),o=Object(u.a)(s,2),h=o[0],v=o[1],b=Object(g.e)(),y=Object(E.c)((function(e){return e.isLogged})),O=Object(E.c)((function(e){return e.FirstName}));Object(n.useEffect)((function(){A()}),[]);var A=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://sneakers-api.herokuapp.com/shoes");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a),v(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://sneakers-api.herokuapp.com/nikeShoes");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a),v(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://sneakers-api.herokuapp.com/adidasShoes");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a),v(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://sneakers-api.herokuapp.com/underarmourShoes");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a),v(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"Home"},y?r.a.createElement("img",{className:"shopping-Logo",src:w.a,alt:"Logo",onClick:function(){b.push("/Cart")}}):null,r.a.createElement("h1",{className:"h1"},"Newly Released Sneakers"),r.a.createElement(m.a,{className:"navbar",collapseOnSelect:!0,expand:"lg",variant:"light"},r.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(p.a,{className:"mr-auto"},r.a.createElement(d.a,{title:"Brand",id:"collasible-nav-dropdown",onSelect:function(e){"Adidas"===e&&k(),"Nike"===e&&j(),"UnderArmour"===e&&S()}},r.a.createElement(d.a.Item,{eventKey:"Nike"},"Nike"),r.a.createElement(d.a.Item,{eventKey:"Adidas"},"Adidas"),r.a.createElement(d.a.Item,{eventKey:"UnderArmour"},"Under Armour")),r.a.createElement(d.a,{title:"Gender",id:"collasible-nav-dropdown",onSelect:function(e){var t=[];"Kid"===e?h.filter((function(t){return t.gender===e})).map((function(e){return t.push(e)})):h.filter((function(t){return t.gender===e||"Unisex"===t.gender})).map((function(e){return t.push(e)})),c(t)}},r.a.createElement(d.a.Item,{eventKey:"Male"},"Male"),r.a.createElement(d.a.Item,{eventKey:"Female"},"Female"),r.a.createElement(d.a.Item,{eventKey:"Unisex"},"Unisex"),r.a.createElement(d.a.Item,{eventKey:"Kid"},"Kids"))),y?r.a.createElement(p.a,null,r.a.createElement("h3",null,"Hi ",O,"!")):r.a.createElement(p.a,null,r.a.createElement(f.a,{variant:"outline-primary",onClick:function(){b.push("/Login")}},"Login")))),r.a.createElement("br",null),r.a.createElement("div",{className:"shoes"},a.map((function(e){return r.a.createElement(N,{key:e.image_url,names:e.name,image_url:e.image_url,site:e.site,category:e.category,gender:e.gender})}))))},j=a(21),k=(a(52),function(e){return{type:"NAME",payload:e}}),S=function(e){return{type:"EMAIL",payload:e}},x=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),o=Object(u.a)(s,2),m=o[0],p=o[1],d=Object(g.e)(),f=Object(E.b)(),h=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),"/pass/",n=(n=(n="https://sneakers-api.herokuapp.com/user/").concat(a,"/pass/")).concat(m),console.log(n),e.next=8,fetch(n);case 8:return r=e.sent,e.next=11,r.json();case 11:c=e.sent,console.log(c),r.ok?(f({type:"SIGN_IN"}),f(k(c.first)),f(S(c.email)),d.push("/")):alert(c.message);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"Login"},r.a.createElement("div",{className:"Login-small"},r.a.createElement("form",null,r.a.createElement("h3",null,"Sign In"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email address"),r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter email",onChange:function(e){c(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Enter password",onChange:function(e){p(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",onClick:h},"Submit"),r.a.createElement("p",{className:"forgot-password text-right"},"Don't have an account ",r.a.createElement(j.b,{to:"/Register"},"Sign Up?")))))},C=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),o=Object(u.a)(s,2),m=o[0],p=o[1],d=Object(n.useState)(""),f=Object(u.a)(d,2),h=f[0],v=f[1],b=Object(n.useState)(""),y=Object(u.a)(b,2),N=y[0],O=y[1],w=Object(g.e)(),A=Object(E.b)(),x=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({first:a,last:m,email:h,password:N})},e.next=4,fetch("https://sneakers-api.herokuapp.com/user",n);case 4:return r=e.sent,e.next=7,r.json();case 7:c=e.sent,r.ok?(A({type:"SIGN_IN"}),A(k(a)),A(S(h)),w.push("/")):alert(c.message);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"Login"},r.a.createElement("div",{className:"Login-small"},r.a.createElement("form",null,r.a.createElement("h3",null,"Sign Up"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First name"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"First name",onChange:function(e){c(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last name"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Last name",onChange:function(e){p(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email address"),r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter email",onChange:function(e){v(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Enter password",onChange:function(e){O(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",onClick:x},"Sign Up"),r.a.createElement("p",{className:"forgot-password text-right"},"Already registered ",r.a.createElement(j.b,{to:"/Login"},"Sign In?")))))},M=(a(79),function(e){var t=e.names,a=e.image_url,n=e.site,c=e.category;e.gender;return r.a.createElement("div",{className:v.a.shoe},r.a.createElement("p",{className:v.a.name}," ",r.a.createElement("b",null," ",t," ")," "),r.a.createElement("img",{className:v.a.image,src:a,alt:"",width:"200",height:"200",onClick:function(){return function(e){console.log(e.site),window.open(e.site)}({site:n})}}),r.a.createElement("p",{className:v.a.name}," ",r.a.createElement("b",null," ",c," ")," "))}),I=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(E.c)((function(e){return e.Email}));Object(n.useEffect)((function(){o()}));var o=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://sneakers-api.herokuapp.com/cart/"+s,e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,c(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"Cart"},r.a.createElement("div",{className:"shoes"},a.map((function(e){return r.a.createElement(M,{key:e.image_url,names:e.name,image_url:e.image_url,site:e.site,category:e.category,gender:e.gender})}))))},K=(a(80),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g.a,{exact:!0,path:"/",component:A}),r.a.createElement(g.a,{exact:!0,path:"/Login",component:x}),r.a.createElement(g.a,{exact:!0,path:"/Register",component:C}),r.a.createElement(g.a,{exact:!0,path:"/Cart",component:I}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=a(25),L=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return!0;default:return e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NAME":return t.payload;default:return e}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EMAIL":return t.payload;default:return e}},R=Object(_.b)({isLogged:L,FirstName:T,Email:U}),G=Object(_.c)(R,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E.a,{store:G},r.a.createElement(j.a,null,r.a.createElement(K,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.82697a94.chunk.js.map