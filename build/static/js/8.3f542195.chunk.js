(window.webpackJsonp=window.webpackJsonp||[]).push([[8,14,15,16],{214:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},l=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),l.forEach(function(t){n(e,t,a[t])})}return e}a.d(t,"a",function(){return l})},57:function(e,t,a){"use strict";a.r(t);var n=a(214),l=a(0),c=a.n(l),r=a(89),s=a(42),i=a(53),o=a(217),m=a.n(o);t.default=function(e){var t=e.nlp2API.status,a=Object(l.useContext)(s.a),o=a.state,u=a.dispatch,d=function(){if(o.wallet){var e=i.a.getInvokeScript.draw([o.wallet.address]);u.openInvoker(Object(n.a)({},e))}else u.openInvoker()};return c.a.createElement("div",{className:"card",style:{height:"100%"}},c.a.createElement("div",{className:"card-image is-centered is-flex",style:{justifyContent:"center",padding:10}},c.a.createElement("figure",{className:"image is-128x128"},c.a.createElement("img",{alt:"draw",src:"/assets/draw.svg"}))),c.a.createElement("div",{className:"card-content"},c.a.createElement("p",{className:"title is-5"},"Draw lottery"),c.a.createElement("p",{className:"subtitle is-7"},"Next drawing will be available at"," ",m()(t.nextDrawingAt).format("MM-DD hh:mm:ss")),c.a.createElement("div",{className:"content is-small"},c.a.createElement("ul",null,c.a.createElement("li",null,"Earn 5% of total ticket sales of the current game"),c.a.createElement("li",null,"You need to participate the current game to be qualified"),c.a.createElement("li",null,"First come first serve basis"))),c.a.createElement(r.a,{date:t.nextDrawingAt,renderer:function(e){var t=e.hours,a=e.minutes,n=e.seconds;return e.completed?c.a.createElement("button",{onClick:d,className:"button is-primary"},"Draw"):c.a.createElement("button",{disabled:!0,className:"button is-primary"},t,":",a,":",n," time left")}})))}},58:function(e,t,a){"use strict";a.r(t);var n=a(214),l=a(0),c=a.n(l),r=a(42),s=a(53);t.default=function(e){var t=e.nlp2API.status,a=Object(l.useContext)(r.a),i=a.state,o=a.dispatch;return c.a.createElement("div",{className:"card",style:{height:"100%"}},c.a.createElement("div",{className:"card-image is-centered is-flex",style:{justifyContent:"center",padding:10}},c.a.createElement("figure",{className:"image is-128x128"},c.a.createElement("img",{alt:"verify",src:"/assets/verify.svg"}))),c.a.createElement("div",{className:"card-content"},c.a.createElement("p",{className:"title is-5"},"Verify tickets"),c.a.createElement("p",{className:"subtitle is-7"},"Total ",t.availableVerifications," tickets"),c.a.createElement("div",{className:"content is-small"},c.a.createElement("ul",null,c.a.createElement("li",null,"Earn 5% of each ticket price that you verify"),c.a.createElement("li",null,"New verification will be available right after new draws"),c.a.createElement("li",null,"First come first serve basis"))),c.a.createElement("button",{disabled:0===t.availableVerifications,onClick:function(){if(i.wallet){var e=s.a.getInvokeScript.verify([i.wallet.address]);o.openInvoker(Object(n.a)({},e))}else o.openInvoker()},className:"button is-primary"},"Verify")))}},59:function(e,t,a){"use strict";a.r(t);var n=a(214),l=a(0),c=a.n(l),r=a(42),s=a(53),i=a(48);t.default=function(e){var t=e.nlp2API,a=Object(l.useContext)(r.a),o=a.state,m=a.dispatch,u=function(e,t){if(o.wallet){var a=s.a.getInvokeScript.withdraw([o.wallet.address,e,i.u.num2fixed8(t)]);m.openInvoker(Object(n.a)({},a))}else m.openInvoker()};return c.a.createElement("div",{className:"card",style:{height:"100%"}},c.a.createElement("div",{className:"card-image is-centered is-flex",style:{justifyContent:"center",padding:10}},c.a.createElement("figure",{className:"image is-128x128"},c.a.createElement("img",{alt:"withdraw",src:"/assets/withdraw.svg"}))),c.a.createElement("div",{className:"card-content"},c.a.createElement("p",{className:"title is-5"},"Withdraw"),c.a.createElement("p",{className:"subtitle is-7"},"Balances in smart contract"),c.a.createElement("nav",{className:"panel"},c.a.createElement("a",{className:"panel-block",onClick:function(){return u(1,t.status.contractBalance.FTX)}},t.status.contractBalance.FTX.toLocaleString()," FTX"),c.a.createElement("a",{className:"panel-block",onClick:function(){return u(2,t.status.contractBalance.CNEO)}},t.status.contractBalance.CNEO.toLocaleString()," CNEO"),c.a.createElement("a",{className:"panel-block",onClick:function(){return u(3,t.status.contractBalance.CGAS)}},t.status.contractBalance.CGAS.toLocaleString()," CGAS"))))}},66:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(57),r=a(58),s=a(59),i=a(85);t.default=Object(i.a)(function(e){return console.log("Display: Maintain"),l.a.createElement("div",{className:"box"},l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column"},l.a.createElement(c.default,e)),l.a.createElement("div",{className:"column"},l.a.createElement(r.default,e)),l.a.createElement("div",{className:"column"},l.a.createElement(s.default,e))))})}}]);
//# sourceMappingURL=8.3f542195.chunk.js.map