(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{214:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.forEach(function(t){n(e,t,a[t])})}return e}a.d(t,"a",function(){return r})},57:function(e,t,a){"use strict";a.r(t);var n=a(214),r=a(0),l=a.n(r),c=a(89),s=a(42),i=a(53),o=a(217),u=a.n(o);t.default=function(e){var t=e.nlp2API.status,a=Object(r.useContext)(s.a),o=a.state,m=a.dispatch,d=function(){if(o.wallet){var e=i.a.getInvokeScript.draw([o.wallet.address]);m.openInvoker(Object(n.a)({},e))}else m.openInvoker()};return l.a.createElement("div",{className:"card",style:{height:"100%"}},l.a.createElement("div",{className:"card-image is-centered is-flex",style:{justifyContent:"center",padding:10}},l.a.createElement("figure",{className:"image is-128x128"},l.a.createElement("img",{alt:"draw",src:"/assets/draw.svg"}))),l.a.createElement("div",{className:"card-content"},l.a.createElement("p",{className:"title is-5"},"Draw lottery"),l.a.createElement("p",{className:"subtitle is-7"},"Next drawing will be available at"," ",u()(t.nextDrawingAt).format("MM-DD hh:mm:ss")),l.a.createElement("div",{className:"content is-small"},l.a.createElement("ul",null,l.a.createElement("li",null,"Earn 5% of total ticket sales of the current game"),l.a.createElement("li",null,"You need to participate the current game to be qualified"),l.a.createElement("li",null,"First come first serve basis"))),l.a.createElement(c.a,{date:t.nextDrawingAt,renderer:function(e){var t=e.hours,a=e.minutes,n=e.seconds;return e.completed?l.a.createElement("button",{onClick:d,className:"button is-primary"},"Draw"):l.a.createElement("button",{disabled:!0,className:"button is-primary"},t,":",a,":",n," time left")}})))}}}]);
//# sourceMappingURL=14.b7120da0.chunk.js.map