(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}},3646:function(e,t,r){var i=r(7228);e.exports=function(e){if(Array.isArray(e))return i(e)}},1506:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},4575:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},3913:function(e){function t(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}e.exports=function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},9754:function(e){function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(r)}e.exports=t},2205:function(e,t,r){var i=r(9489);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},8585:function(e,t,r){var i=r(8),n=r(1506);e.exports=function(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?n(e):t}},9489:function(e){function t(r,i){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(r,i)}e.exports=t},319:function(e,t,r){var i=r(3646),n=r(6860),a=r(379),s=r(8206);e.exports=function(e){return i(e)||n(e)||a(e)||s()}},8:function(e){function t(r){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(r)}e.exports=t},379:function(e,t,r){var i=r(7228);e.exports=function(e,t){if(e){if("string"===typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}},6086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},3367:function(e,t,r){"use strict";var i;t.__esModule=!0,t.AmpStateContext=void 0;var n=((i=r(7294))&&i.__esModule?i:{default:i}).default.createContext({});t.AmpStateContext=n},7845:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(n.default.useContext(a.AmpStateContext))};var i,n=(i=r(7294))&&i.__esModule?i:{default:i},a=r(3367);function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,i=e.hybrid,n=void 0!==i&&i,a=e.hasQuery,s=void 0!==a&&a;return r||n&&s}},4287:function(e,t,r){"use strict";var i;t.__esModule=!0,t.HeadManagerContext=void 0;var n=((i=r(7294))&&i.__esModule?i:{default:i}).default.createContext({});t.HeadManagerContext=n},7947:function(e,t,r){"use strict";var i=r(9713);function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var a,s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=i?Object.getOwnPropertyDescriptor(e,n):null;a&&(a.get||a.set)?Object.defineProperty(r,n,a):r[n]=e[n]}r.default=e,t&&t.set(e,r);return r}(r(7294)),o=(a=r(617))&&a.__esModule?a:{default:a},c=r(3367),l=r(4287),p=r(7845);function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[s.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function m(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var r=s.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(m,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,i={};return function(n){var a=!0,s=!1;if(n.key&&"number"!==typeof n.key&&n.key.indexOf("$")>0){s=!0;var o=n.key.slice(n.key.indexOf("$")+1);e.has(o)?a=!1:e.add(o)}switch(n.type){case"title":case"base":t.has(n.type)?a=!1:t.add(n.type);break;case"meta":for(var c=0,l=h.length;c<l;c++){var p=h[c];if(n.props.hasOwnProperty(p))if("charSet"===p)r.has(p)?a=!1:r.add(p);else{var u=n.props[p],d=i[p]||new Set;"name"===p&&s||!d.has(u)?(d.add(u),i[p]=d):a=!1}}}return a}}()).reverse().map((function(e,r){var a=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var o=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return o["data-href"]=o.href,o.href=void 0,s.default.cloneElement(e,o)}return s.default.cloneElement(e,{key:a})}))}function g(e){var t=e.children,r=(0,s.useContext)(c.AmpStateContext),i=(0,s.useContext)(l.HeadManagerContext);return s.default.createElement(o.default,{reduceComponentsToState:f,headManager:i,inAmpMode:(0,p.isInAmpMode)(r)},t)}g.rewind=function(){};var x=g;t.default=x},617:function(e,t,r){"use strict";var i=r(319),n=r(4575),a=r(3913),s=(r(1506),r(2205)),o=r(8585),c=r(9754);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=c(e);if(t){var n=c(this).constructor;r=Reflect.construct(i,arguments,n)}else r=i.apply(this,arguments);return o(this,r)}}t.__esModule=!0,t.default=void 0;var p=r(7294),u=function(e){s(r,e);var t=l(r);function r(e){var a;return n(this,r),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(i(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(p.Component);t.default=u},6993:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return D}});var i=r(5893),n=r(7294),a=r(9008),s=[{id:1,name:"Home",idName:"#home",url:"/home"},{id:2,name:"About",idName:"#about",url:"/about"},{id:3,name:"Menu",idName:"#menu",url:"/menu"},{id:4,name:"Reservations",idName:"#reservations",url:"/reservations"},{id:5,name:"Contact",idName:"#contact",url:"/contact"}],o=r(7434),c=r.n(o);function l(){var e=(0,n.useState)(s)[0],t=(0,n.useState)(!0),r=t[0],a=t[1],o=(0,n.useState)(!1),l=o[0],p=o[1],u=(0,n.useState)(!1),d=(u[0],u[1],function(){a(!r)}),m=function(){var e=window.scrollY;p(e>200)};return(0,n.useEffect)((function(){window.addEventListener("scroll",m)})),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("nav",{className:l?"navbar":"navbar scrolled",children:[(0,i.jsx)("div",{className:c().logo,children:(0,i.jsx)("a",{href:"#!",children:"Fiasco"})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{className:r?"navLinks":"navLinks show",children:e.map((function(e,t){return(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:e.idName,onClick:d,children:e.name})},t)}))})}),(0,i.jsxs)("div",{className:r?"toggler":"toggler close",onClick:d,children:[(0,i.jsx)("div",{className:"btnLine"}),(0,i.jsx)("div",{className:"btnLine"}),(0,i.jsx)("div",{className:"btnLine"})]})]}),(0,i.jsx)("div",{className:c().navLine})]})}function p(){return(0,i.jsxs)("div",{className:c().hero,id:"home",children:[(0,i.jsx)("div",{className:c().foodImg}),(0,i.jsxs)("div",{className:c().heroText,children:[(0,i.jsx)("p",{className:c().heading,children:"Lorem ipsum dolor sit."}),(0,i.jsxs)("p",{children:["Lorem, ipsum dolor."," ",(0,i.jsx)("i",{className:"fa fa-facebook","aria-hidden":"true"})]}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nisi."}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias temporibus ad provident quidem! Saepe, dolore? Aut incidunt odio, placeat doloribus animi unde! Veritatis minus dolore id sequi quam necessitatibus, veniam vero earum, ut iure cum iste blanditiis suscipit molestias consequatur."})]})]})}var u=r(8239),d=r.n(u);function m(){return(0,i.jsxs)("div",{className:d().about,id:"about",children:[(0,i.jsxs)("div",{className:d().aboutLeft,children:[(0,i.jsx)("p",{className:d().title,children:"about us"}),(0,i.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, ex?"}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquid numquam earum dolorum velit! Voluptatibus blanditiis repellendus similique? Nemo repellendus in, nostrum repudiandae natus unde nisi. Voluptate officiis sunt magni quo non hic quia dolorum illum laboriosam! Eaque, dolor doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos id earum cum distinctio quis expedita nihil? Repellendus, dolorum molestiae?"}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, alias quis? Rerum eaque voluptatem possimus."})]}),(0,i.jsxs)("div",{className:d().aboutRight,children:[(0,i.jsxs)("div",{className:d().contactInfo,children:[(0,i.jsxs)("header",{children:[(0,i.jsx)("h4",{className:d().contactTitle,children:"Contact"}),(0,i.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur"})]}),(0,i.jsxs)("main",{children:[(0,i.jsx)("h4",{className:d().contactTitle,children:"ADDRESS"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sitzz."}),(0,i.jsx)("p",{children:"Lorem, ipsum."}),(0,i.jsx)("p",{children:"JK 5566777"}),(0,i.jsx)("a",{href:"#!",children:"view-map"})]}),(0,i.jsxs)("footer",{className:d().footer,children:[(0,i.jsx)("h4",{className:d().contactTitle,children:"OPENING HOURS"}),(0,i.jsxs)("p",{children:["Monday - Friday ",(0,i.jsx)("span",{className:d().hoursLines}),"8:00am-11:00pm"]}),(0,i.jsxs)("p",{children:["Saturday - Sunday ",(0,i.jsx)("span",{className:d().hoursLines})," 8:00am-11:00pm"]})]}),(0,i.jsx)("button",{className:d().reservationBtn,type:"button",href:"#!",children:"Table Reservation"})]}),(0,i.jsx)("div",{className:d().aboutImg,children:(0,i.jsx)("img",{src:"./aboutBg.webp",width:"100%",height:"100%",alt:""})})]})]})}var h=r(5804),f=r.n(h);function g(e){var t=e.image,r=e.name,n=e.price;return(0,i.jsxs)("div",{className:f().singleSpecial,children:[(0,i.jsx)("div",{className:f().specialImg,children:(0,i.jsx)("img",{src:t,alt:r,width:"100%",height:"100%"})}),(0,i.jsx)("div",{className:f().specialText,children:(0,i.jsxs)("p",{children:[r,(0,i.jsxs)("span",{children:["$ ",n]})]})})]})}var x=[{id:1,image:"https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTc0NDI3ODYxNzA3NDY2MDg4/30-foods-you-should-eat-in-kenya.webp",name:"Ugali, Greens",price:30},{id:2,image:"https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTc0NjE5ODY0NDYyNDAzNTI5/30-foods-you-should-eat-in-kenya.webp",name:"Goat",price:30},{id:3,image:"https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_425/MTc0NjE5ODY0NDYzOTEwODU3/30-foods-you-should-eat-in-kenya.webp",name:"Beans and Maize",price:30},{id:4,image:"https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTc0NjE5ODY0NDYyODYyMjgx/30-foods-you-should-eat-in-kenya.webp",name:"Coastal Rice",price:35}];function j(){var e=(0,n.useState)(x)[0];return(0,i.jsxs)("div",{className:f().specials,id:"specials",children:[(0,i.jsxs)("div",{className:f().header,children:[(0,i.jsx)("p",{className:f().heading,children:"Our Specialities"}),(0,i.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo aliquam, labore provident atque in officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, officia."})]}),(0,i.jsx)("div",{className:f().footer,children:e.map((function(e){return(0,i.jsx)(g,{name:e.name,image:e.image,price:e.price},e.id)}))})]})}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function v(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=r(903),_=r.n(y),w=JSON.parse('{"p":[{"id":1,"title":"Fryer Bloomin Apples","image":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190724-air-fryer-blooming-apples-0340-portrait-pf-1564770188.png?crop=1xw:1xh;center,top&resize=980:*","category":"breakfast","price":400},{"id":2,"title":"Brownies","image":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190731-air-fryer-brownies-0045-portrait-pf-1565811497.jpg?crop=1xw:1xh;center,top&resize=980:*","category":"breakfast","price":230},{"id":3,"title":"Cannolis","image":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190807-cannolis-0219-portrait-pf-1565647072.jpg?crop=1xw:1xh;center,top&resize=980:*","category":"breakfast","price":250},{"id":4,"title":"Donuts","image":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190619-air-fryer-donuts-305-portrait-pf-1561758031.jpg?crop=0.9997369113391213xw:1xh;center,top&resize=980:*","category":"breakfast","price":150},{"id":5,"title":"Smores","image":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190731-air-fryer-smores-0269-portrait-pf-1565820637.jpg?crop=1xw:1xh;center,top&resize=980:*","category":"breakfast","price":420},{"id":6,"title":"Cinnamon Rolls","image":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190802-air-fryer-cinnamon-rolls-0181-portrait-pf-1567799820.jpg?crop=1xw:1xh;center,top&resize=980:*","category":"breakfast","price":200},{"id":7,"title":"Cheesy Ground Beef Tacos","image":"https://hips.hearstapps.com/del.h-cdn.co/assets/16/13/1459442142-delish-cheesy-ground-beef-tacos.jpg?crop=1xw:1xh;center,top&resize=980:*","category":"lunch","price":200},{"id":8,"title":"Creamy Tuscan Chicken","image":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20191011-creamy-tuscan-chicken-delish-ehg-2518-1571259200.jpg?crop=1xw:1xh;center,top&resize=980:*","category":"lunch","price":550},{"id":9,"title":"Tex-Mex Meatballs","image":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/singleimagebug-tex-mex-meatballs-1550684247.jpg?crop=1.00xw:0.938xh;0,0&resize=980:*","category":"lunch","price":340},{"id":10,"title":"Bacon Spinach Stuffed Chicken","image":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/07-bacon-spinach-stuffed-chicken-11866-v-1582648479.jpg?crop=1xw:1xh;center,top&resize=980:*","category":"lunch","price":450},{"id":11,"title":"Oven Fried Chicken","image":"https://hips.hearstapps.com/del.h-cdn.co/assets/17/33/1600x2399/gallery-1502991351-fried-chicken-delish1.jpg?resize=980:*","category":"lunch","price":350},{"id":12,"title":"Rainbow Stir-Fry","image":"https://hips.hearstapps.com/del.h-cdn.co/assets/16/13/1459442142-delish-cheesy-ground-beef-tacos.jpg?crop=1xw:1xh;center,top&resize=980:*","category":"lunch","price":300},{"id":13,"title":"Flan","image":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190410-flan-177-1555947946.jpg?crop=1xw:1xh;center,top&resize=980:*","category":"dessert","price":170},{"id":14,"title":"Churros","image":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/singleimagebug-churros-pin-1555698140.jpg?crop=1xw:0.9453781512605042xh;center,top&resize=980:*","category":"dessert","price":320},{"id":15,"title":"Margarita Cheesecake Mousse","image":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-margarita-cheesecake-parfaits-still001-1561649546.jpg?crop=0.378xw:1.00xh;0.445xw,0&resize=980:*","category":"dessert","price":410},{"id":16,"title":"Dulce de Leche","image":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/singleimagebug-dulce-de-leche-1556826153.jpg?crop=1.00xw:0.941xh;0,0&resize=980:*","category":"dessert","price":250},{"id":17,"title":"Churro Cookies","image":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-191119-churro-cookies-0603-portrait-pf-1574699076.jpg?crop=1xw:1xh;center,top&resize=768:*","category":"dessert","price":200},{"id":18,"title":"Rumchata Cupcakes","image":"https://hips.hearstapps.com/del.h-cdn.co/assets/17/39/1506622066-delish-rumchata-cupcakes-holduppin.jpg?crop=1xw:1xh;center,top&resize=980:*","category":"dessert","price":210},{"id":19,"title":"Spicy Lentil Dal","image":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-202101-dal-029-ls-1611342481.jpg?crop=1xw:1xh;center,top&resize=980:*","category":"dinner","price":100},{"id":20,"title":"Pizza Oatmeal","image":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pizza-oatmeal-vertical-1-jpg-1609886671.jpg?crop=1xw:1xh;center,top&resize=980:*","category":"dinner","price":200},{"id":21,"title":"Cheesy Spinach Pesto Flatbread","image":"https://hips.hearstapps.com/del.h-cdn.co/assets/17/22/1496355886-spinach-pesto-mozzarella-flatbread.jpg?crop=1xw:1xh;center,top&resize=980:*","category":"dinner","price":350},{"id":22,"title":"Turkey Ragu","image":"https://hips.hearstapps.com/del.h-cdn.co/assets/16/04/1453936103-delish-turkey-ragu-1.jpg?crop=1xw:1xh;center,top&resize=980:*","category":"dinner","price":550},{"id":23,"title":"Chicken Salad Sandwich","image":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gallery-1502305197-chicken-salad-sandwich-delish-1524971915.jpg?crop=1xw:1xh;center,top&resize=980:*","category":"dinner","price":300},{"id":24,"title":"Pad Thai","image":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gallery-1498148188-delish-easy-pad-thai-vertical-1024-1594739450.jpg?crop=1xw:1xh;center,top&resize=980:*","category":"dinner","price":230}]}');function N(e){var t,r=e.title,n=e.price;return(0,i.jsxs)("div",{className:_().menuItem,children:[(0,i.jsx)("h4",{className:_().title,children:r}),(0,i.jsx)("span",{children:"........................."}),(0,i.jsx)("p",{className:_().price,children:(t=n,"$ "+Number(t.toFixed(1)).toLocaleString()+" ")})]})}function C(e){var t=e.categories,r=e.filterMenu;return(0,i.jsx)("div",{className:_().categoryContainer,children:t.map((function(e,t){return(0,i.jsx)("button",{onClick:function(){return r(e)},children:e},t)}))})}function O(){var e=["all"].concat(v(new Set(w.p.map((function(e){return e.category}))))),t=(0,n.useState)(w.p),r=t[0],a=t[1],s=(0,n.useState)(e)[0];return(0,i.jsxs)("div",{className:_().menu,id:"menu",children:[(0,i.jsxs)("div",{className:_().header,children:[(0,i.jsx)("h4",{children:"Our Menu"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nulla."}),(0,i.jsx)("br",{})]}),(0,i.jsxs)("div",{className:_().container,children:[(0,i.jsx)("div",{children:(0,i.jsx)(C,{categories:s,filterMenu:function(e){if("all"===e)a(w.p);else{var t=w.p.filter((function(t){return t.category===e}));a(t)}}})}),(0,i.jsx)("div",{className:_().menuContainer,children:r.map((function(e,t){return(0,i.jsx)(N,{title:e.title,image:e.image,price:e.price},t)}))})]})]})}var k=r(7622),S=r.n(k);function z(){return(0,i.jsxs)("div",{className:S().book,id:"reservations",children:[(0,i.jsxs)("div",{className:S().header,children:[(0,i.jsx)("h4",{children:"Book a Table"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, minus culpa sint rem ducimus enim."})]}),(0,i.jsxs)("form",{className:S().form,children:[(0,i.jsxs)("div",{className:S().bookContainer,children:[(0,i.jsxs)("div",{className:S().item,children:[(0,i.jsx)("label",{htmlFor:"",children:"Choose A Date"}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("input",{type:"date"})]}),(0,i.jsxs)("div",{className:S().item,children:[(0,i.jsx)("label",{htmlFor:"",children:"Choose A Time"}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsxs)("select",{name:"",id:"",children:[(0,i.jsx)("option",{value:"",children:"9:00 am"}),(0,i.jsx)("option",{value:"",children:"11:00 am"}),(0,i.jsx)("option",{value:"",children:"3:00pm"}),(0,i.jsx)("option",{value:"",children:"8:00 pm"}),(0,i.jsx)("option",{value:"",children:"10:00 pm"})]})]}),(0,i.jsxs)("div",{className:S().item,children:[(0,i.jsx)("label",{htmlFor:"",children:"Number Of People"}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsxs)("select",{name:"",id:"",children:[(0,i.jsx)("option",{value:"",children:"2 People"}),(0,i.jsx)("option",{value:"",children:"4 People"}),(0,i.jsx)("option",{value:"",children:"8 People"}),(0,i.jsx)("option",{value:"",children:"Above 8"})]})]})]}),(0,i.jsx)("button",{className:S().bookBtn,children:"Book Now"})]})]})}var M=r(9583),A=r(8453),L=r.n(A);function T(){return(0,i.jsxs)("div",{className:L().footer,id:"contact",children:[(0,i.jsxs)("div",{className:L().footerContainer,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:L().heading,children:"Address"}),(0,i.jsx)("p",{children:"Off Avenue Lane, Nairobi Kenya"}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"SR 7488499 "}),(0,i.jsx)("br",{}),(0,i.jsx)("button",{className:L().btn,children:"view map"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:L().heading,children:"Opening Hours"}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("p",{children:["Monday-Friday ",(0,i.jsx)("span",{children:"----"})," 8:00am - 8:00pm"]}),(0,i.jsx)("br",{}),(0,i.jsxs)("p",{children:["Saturdays&Sunday ",(0,i.jsx)("span",{children:"----"})," 8:00am - 8:00pm"]}),(0,i.jsx)("br",{})]}),(0,i.jsx)("button",{className:L().btn,children:"Table Reservation"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:L().heading,children:"We Are Social"}),(0,i.jsx)("p",{children:"Dont forget to reach us on our socials"}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{className:L().socials,children:[(0,i.jsx)("div",{className:L().icon,children:(0,i.jsx)("a",{href:"#!",children:(0,i.jsx)(M.tBk,{})})}),(0,i.jsx)("div",{className:L().icon,children:(0,i.jsx)("a",{href:"#!",children:(0,i.jsx)(M.Zf_,{})})}),(0,i.jsx)("div",{className:L().icon,children:(0,i.jsx)("a",{href:"#!",children:(0,i.jsx)(M.fWC,{})})}),(0,i.jsx)("div",{className:L().icon,children:(0,i.jsx)("a",{href:"#!",children:(0,i.jsx)(M.xpo,{})})})]})]})]}),(0,i.jsx)("p",{className:L().copy,children:"\xa9 2021 -  Fiasco Restaurant All Rights Reserved"}),(0,i.jsx)("a",{className:L().scrollBtn,href:"#home",children:(0,i.jsx)(M.$Pg,{})})]})}function D(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.default,{children:[(0,i.jsx)("title",{children:"Fiasco Restaurant"}),(0,i.jsx)("meta",{name:"description",content:"Fiasco Restaurant, Get all your Meals from us today"}),(0,i.jsx)("meta",{name:"description",content:"Food, Recipes, Restaurant, Lunches, Breakfasts, Dinners"})]}),(0,i.jsx)("div",{className:"mainContainer",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("header",{className:"header",children:[(0,i.jsx)(l,{}),(0,i.jsx)(p,{})]}),(0,i.jsxs)("main",{className:"main",children:[(0,i.jsx)(m,{}),(0,i.jsx)(j,{}),(0,i.jsx)(O,{}),(0,i.jsx)(z,{})]}),(0,i.jsx)("footer",{className:"footer",id:"contact",children:(0,i.jsx)(T,{})})]})})]})}},8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6993)}])},8239:function(e){e.exports={about:"About_about__3ppl7",title:"About_title__3Xrz0",hoursLines:"About_hoursLines__1tNUF",aboutLeft:"About_aboutLeft__1vQVR",aboutRight:"About_aboutRight__3D31n",aboutImg:"About_aboutImg__15QGN",reservationBtn:"About_reservationBtn__zRcJs",contactInfo:"About_contactInfo__2nEcT",contactTitle:"About_contactTitle__1r_RO",footer:"About_footer__2Q7-2"}},7622:function(e){e.exports={book:"Book_book__wfsgf",header:"Book_header__2XeER",bookContainer:"Book_bookContainer__3I92J",form:"Book_form__2fvIx",item:"Book_item__2Uz69",bookBtn:"Book_bookBtn__2vUwx"}},8453:function(e){e.exports={footer:"Footer_footer__317iK",footerContainer:"Footer_footerContainer__1wS98",heading:"Footer_heading__1IVma",socials:"Footer_socials__reDLc",copy:"Footer_copy__EIDlR",btn:"Footer_btn__AeYF6",icon:"Footer_icon__BLpwU",scrollBtn:"Footer_scrollBtn__24jq-"}},7434:function(e){e.exports={navLine:"Header_navLine__1yW8U",logo:"Header_logo__2NvDa",hero:"Header_hero__TTTLK",heroText:"Header_heroText__3HA0p",heading:"Header_heading__3L11Q"}},903:function(e){e.exports={menu:"Menu_menu__3r-AG",container:"Menu_container__2FVMe",menuContainer:"Menu_menuContainer__DrHo0",header:"Menu_header__1UuNv",menuItem:"Menu_menuItem__1Np_k",price:"Menu_price__2wzhM",categoryContainer:"Menu_categoryContainer__2tgRe"}},5804:function(e){e.exports={specials:"Specials_specials__2Dkmw",header:"Specials_header__II5FD",heading:"Specials_heading__x3RPQ",footer:"Specials_footer__1ZW7A",specialImg:"Specials_specialImg__3lHdz",singleSpecial:"Specials_singleSpecial__14m4b",specialText:"Specials_specialText__2T_X1"}},9008:function(e,t,r){e.exports=r(7947)},4405:function(e,t,r){"use strict";r.d(t,{w_:function(){return l}});var i=r(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=i.createContext&&i.createContext(n),s=function(){return(s=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},o=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(r[i[n]]=e[i[n]])}return r};function c(e){return e&&e.map((function(e,t){return i.createElement(e.tag,s({key:t},e.attr),c(e.child))}))}function l(e){return function(t){return i.createElement(p,s({attr:s({},e.attr)},t),c(e.child))}}function p(e){var t=function(t){var r,n=e.attr,a=e.size,c=e.title,l=o(e,["attr","size","title"]),p=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),i.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,l,{className:r,style:s(s({color:e.color||t.color},t.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),c&&i.createElement("title",null,c),e.children)};return void 0!==a?i.createElement(a.Consumer,null,(function(e){return t(e)})):t(n)}}},function(e){e.O(0,[774,445],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);