(window.webpackJsonp=window.webpackJsonp||[]).push([[10,24,25,35],{224:function(e,t,a){"use strict";a.r(t);var n=a(6),l=a(0),r=a.n(l);t.default=function(e){var t=Object(l.useState)(!1),a=Object(n.a)(t,2),c=a[0],s=a[1],u=e.account,i=e.onConnected;return r.a.createElement("div",null,r.a.createElement("div",{className:"notification is-info"},"You must save and backup the keys. If you lose them, you lose access to your assets."),r.a.createElement("div",{className:"content",style:{wordBreak:"break-all"}},r.a.createElement("ul",null,r.a.createElement("li",null,"Password: ",u.password),r.a.createElement("li",null,"Wallet address: ",u.address),r.a.createElement("li",null,"Encrypted key: ",u.encryptedKey),r.a.createElement("li",null,"Private key: ",u.privateKey))),r.a.createElement("hr",null),r.a.createElement("label",{className:"checkbox"},r.a.createElement("input",{type:"checkbox",checked:c,onChange:function(){return s(!c)}}),"\xa0\xa0I have saved the keys"),r.a.createElement("hr",null),r.a.createElement("button",{disabled:!c,className:"button is-link",onClick:function(){return i({provider:"LOCAL",address:u.address,encryptedKey:u.encryptedKey,privateKey:u.privateKey})}},"Open wallet"))}},240:function(e,t,a){"use strict";a.r(t);var n=a(6),l=a(0),r=a.n(l),c=a(4),s=a.n(c),u=a(216),i=a(215);t.default=function(e){var t=e.privateKey,a=e.onEncrypt,c=Object(l.useState)(""),o=Object(n.a)(c,2),d=o[0],m=o[1],y=Object(l.useState)(!1),f=Object(n.a)(y,2),v=f[0],p=f[1],b=Object(l.useState)(),E=Object(n.a)(b,2),k=E[0],h=E[1],O=function(){p(!0),s.a.create.account(t).encrypt(d).then(function(e){p(!1),a({provider:"LOCAL",encryptedKey:e.encrypted,address:e.address,privateKey:t,password:d})}).catch(function(e){h(e.message),p(!1)})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"label"},"Password"),r.a.createElement(u.default,{value:d,onChange:function(e){return m(e)},onKeyDown:function(){d&&O()}})),r.a.createElement("div",{className:"is-size-7 content"},r.a.createElement("ul",null,r.a.createElement("li",null,"Password must be at least 6 characters long."),r.a.createElement("li",null,"You will need this password to unlock your wallet."))),r.a.createElement("hr",null),!!k&&r.a.createElement(i.default,{message:k,onClose:function(){return h(void 0)}}),r.a.createElement("button",{disabled:!d,onClick:O,type:"button",className:"button is-link ".concat(v?"is-loading":"")},"Encrypt!"))}},241:function(e,t,a){"use strict";a.r(t);var n=a(6),l=a(0),r=a.n(l),c=a(4),s=a.n(c),u=a(215);t.default=function(e){var t=e.onVerify,a=Object(l.useState)(""),c=Object(n.a)(a,2),i=c[0],o=c[1],d=Object(l.useState)(),m=Object(n.a)(d,2),y=m[0],f=m[1],v=function(){i&&(s.a.is.privateKey(i)||s.a.is.wif(i)?t(i):f("Please check your private key. It it not a valid type."))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"privatekey",className:"label"},"Private key"),r.a.createElement("input",{id:"privatekey",className:"input",placeholder:"Private Key",value:i,onChange:function(e){return o(e.target.value)},onKeyDown:function(e){13===e.keyCode&&i&&v()}})),!!y&&r.a.createElement(u.default,{message:y,onClose:function(){return f(void 0)}}),r.a.createElement("button",{onClick:v,disabled:!i,className:"button is-link"},"Verify your private key"))}},266:function(e,t,a){"use strict";a.r(t);var n=a(6),l=a(0),r=a.n(l),c=a(224),s=a(241),u=a(240);t.default=function(e){var t=Object(l.useState)(""),a=Object(n.a)(t,2),i=a[0],o=a[1],d=Object(l.useState)(void 0),m=Object(n.a)(d,2),y=m[0],f=m[1];return y?r.a.createElement(c.default,Object.assign({},e,{account:y})):r.a.createElement(r.a.Fragment,null,i?r.a.createElement(u.default,{privateKey:i,onEncrypt:function(e){return f(e)}}):r.a.createElement(s.default,{onVerify:function(e){return o(e)}}))}}}]);
//# sourceMappingURL=10.e6db7f10.chunk.js.map