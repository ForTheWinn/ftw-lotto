(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{214:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},c=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(c=c.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),c.forEach(function(t){n(e,t,a[t])})}return e}a.d(t,"a",function(){return c})},59:function(e,t,a){"use strict";a.r(t);var n=a(214),c=a(0),r=a.n(c),l=a(42),s=a(53),o=a(48);t.default=function(e){var t=e.nlp2API,a=Object(c.useContext)(l.a),i=a.state,u=a.dispatch,m=function(e,t){if(i.wallet){var a=s.a.getInvokeScript.withdraw([i.wallet.address,e,o.u.num2fixed8(t)]);u.openInvoker(Object(n.a)({},a))}else u.openInvoker()};return r.a.createElement("div",{className:"card",style:{height:"100%"}},r.a.createElement("div",{className:"card-image is-centered is-flex",style:{justifyContent:"center",padding:10}},r.a.createElement("figure",{className:"image is-128x128"},r.a.createElement("img",{alt:"withdraw",src:"/assets/withdraw.svg"}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"title is-5"},"Withdraw"),r.a.createElement("p",{className:"subtitle is-7"},"Balances in smart contract"),r.a.createElement("nav",{className:"panel"},r.a.createElement("a",{className:"panel-block",onClick:function(){return m(1,t.status.contractBalance.FTX)}},t.status.contractBalance.FTX.toLocaleString()," FTX"),r.a.createElement("a",{className:"panel-block",onClick:function(){return m(2,t.status.contractBalance.CNEO)}},t.status.contractBalance.CNEO.toLocaleString()," CNEO"),r.a.createElement("a",{className:"panel-block",onClick:function(){return m(3,t.status.contractBalance.CGAS)}},t.status.contractBalance.CGAS.toLocaleString()," CGAS"))))}}}]);
//# sourceMappingURL=16.c67862be.chunk.js.map