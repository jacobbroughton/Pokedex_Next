(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/h46":function(t,e,n){n("cHUd")("Map")},"8iia":function(t,e,n){var r=n("QMMT"),o=n("RRc/");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},LX0d:function(t,e,n){t.exports=n("UDep")},LxVV:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/comps/header",function(){return n("fRJ0")}])},"RRc/":function(t,e,n){var r=n("oioR");t.exports=function(t,e){var n=[];return r(t,!1,n.push,n,e),n}},UDep:function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),t.exports=n("WEpk").Map},Wu5q:function(t,e,n){"use strict";var r=n("2faE").f,o=n("oVml"),i=n("XJU/"),s=n("2GTP"),f=n("EXMj"),u=n("oioR"),a=n("MPFp"),c=n("UO39"),p=n("TJWN"),l=n("jmDH"),h=n("6/1s").fastKey,v=n("n3ko"),d=l?"_s":"size",_=function(t,e){var n,r=h(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,a){var c=t((function(t,r){f(t,c,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=r&&u(r,n,t[a],t)}));return i(c.prototype,{clear:function(){for(var t=v(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var n=v(this,e),r=_(n,t);if(r){var o=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),n._f==r&&(n._f=o),n._l==r&&(n._l=i),n[d]--}return!!r},forEach:function(t){v(this,e);for(var n,r=s(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!_(v(this,e),t)}}),l&&r(c.prototype,"size",{get:function(){return v(this,e)[d]}}),c},def:function(t,e,n){var r,o,i=_(t,e);return i?i.v=n:(t._l=i={i:o=h(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[d]++,"F"!==o&&(t._i[o]=i)),t},getEntry:_,setStrong:function(t,e,n){a(t,e,(function(t,n){this._t=v(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?c(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,c(1))}),n?"entries":"values",!n,!0),p(e)}}},XLbu:function(t,e,n){var r=n("Y7ZC");r(r.P+r.R,"Map",{toJSON:n("8iia")("Map")})},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("8+Nu"),o=n("/HRN"),i=n("WaGi"),s=n("ZDA2"),f=n("/+P4"),u=n("N9n2"),a=n("LX0d"),c=n("KI45"),p=n("5Uuq");e.__esModule=!0,e.default=void 0;var l,h=p(n("q1tI")),v=n("CxY0"),d=n("g/15"),_=c(n("nOHt"));function g(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var y=new a,k=window.IntersectionObserver,w={};function m(){return l||(k?l=new k((function(t){t.forEach((function(t){if(y.has(t.target)){var e=y.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(l.unobserve(t.target),y.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var E=function(t){function e(t){var n;return o(this,e),(n=s(this,f(e).call(this,t))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var s=t(o,i);return e=o,n=i,r=s,s}}((function(t,e){return{href:g(t),as:e?g(e):e}})),n.linkClicked=function(t){var e=t.currentTarget,r=e.nodeName,o=e.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),s=i.href,f=i.as;if(function(t){var e=(0,v.parse)(t,!1,!0),n=(0,v.parse)((0,d.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(s)){var u=window.location.pathname;s=(0,v.resolve)(u,s),f=f?(0,v.resolve)(u,f):s,t.preventDefault();var a=n.props.scroll;null==a&&(a=f.indexOf("#")<0),_.default[n.props.replace?"replace":"push"](s,f,{shallow:n.props.shallow}).then((function(t){t&&a&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==t.prefetch,n}return u(e,t),i(e,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,v.resolve)(t,n);return[o,r?(0,v.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this,n=w[this.getPaths()[0]];this.p&&k&&t&&t.tagName&&(this.cleanUpListeners(),n||(this.cleanUpListeners=function(t,e){var n=m();return n?(n.observe(t),y.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}y.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths(),n=r(e,2),o=n[0],i=n[1];_.default.prefetch(o,i,t),w[o]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=h.default.createElement("a",null,e));var i=h.Children.only(e),s={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=o||r),h.default.cloneElement(i,s)}}]),e}(h.Component);e.default=E},dVTT:function(t,e,n){n("aPfg")("Map")},fRJ0:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),i=n("YFqc"),s=n.n(i),f=(n("Pcfb"),o.a.createElement);e.default=function(){return f("div",{className:"motherDiv"},f(s.a,{href:"/"},f("h1",{className:"head"},"Pokedex")))}},g33z:function(t,e,n){"use strict";var r=n("Wu5q"),o=n("n3ko");t.exports=n("raTm")("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=r.getEntry(o(this,"Map"),t);return e&&e.v},set:function(t,e){return r.def(o(this,"Map"),0===t?0:t,e)}},r,!0)}},[["LxVV",1,2,0,3,4]]]);