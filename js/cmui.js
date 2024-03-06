///////////////////////////////////////////////////////////////////////////
// start: only publishing  ////////////////////////////////////////////////



// Avoid `console` errors in browsers that lack a console.
!function(){for(var o,e=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],r=n.length,i=window.console=window.console||{};r--;)o=n[r],i[o]||(i[o]=e)}();

//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map

function containerJS(){
(function($){
	setTimeout(function(){

		// GNB 메뉴    
		uiGnbMenu.init();

		// 가로/세로 모드 변경
		uiSetOrientation.init();

		//listToggle
		uiCompareAnnins.init();

		//toggleTarget
		uiToggleAnnins.init();
		uiToggleAnninsType.init();

		//toggle
		uiAddSpecOption.init();

		// validate
		validateForm.init();

		//check info
		uiCheckInfoSlc.init();

		//파일 첨부
		uiFileAdd.init();

		//textarea 높이설정
		uiTextareaH.init();

		//수정 input 포커스
		uiEditForm.init();

		// 자동차 정보 선택
		uiSelectJob.init();

		uiPushSetup.init();

		// 운전자 범위
		uiDrvRange.init();

		// 자동차 검색 탭
		uiCarSearchTab.init();

		// tab
		uiSearchTab.init();
		
		uiYoutube.init();
		
		$('input').each(function(idx, obj){
			$(this).on('focusin', function(e){
				$(this).closest('.group').addClass('focus');
			}).on('focusout', function(e){
				$(this).closest('.group').removeClass('focus');
			});
		});

		// 버튼 비활성화
		$('.btn_disabled').each(function(){
			$(this).on({
				click : function(e){
					e.preventDefault();
				}
			});
		});

		// placeholder 버그
/* 주석처리 (20171205 김명석)
		// type = number
		$('input[type="number"]').each(function(){
			$(this).attr('type', 'text');

			$(this).on({
				focusin : function(){
					$(this).attr('type', 'number');
				},
				focusout : function(){
					$(this).attr('type', 'text');
				}
			});
		});

		// type = tel
		$('input[type="tel"]').each(function(){
			$(this).attr('type', 'text');

			$(this).on({
				focusin : function(){
					$(this).attr('type', 'tel');
				},
				focusout : function(){
					$(this).attr('type', 'text');
				}
			});
		});
*/
		
		// 완료 페이지
		if($('.compt_msg').length){
			if($('.compt_msg span em').length){
				$('.compt_msg').addClass('two_line');
			}
			else{
				$('.compt_msg').removeClass('two_line');
			}
		}

		(function($){
			setTimeout(function(){
				selectMethod();	
				
			}, 500);
		})(jQuery);
//		setTimeout(function(){
//			if((".et_datepicker").length>0){window.etribe.ui.comm.datePicker.init();}		
//		},1500);
//		
		// 20200514 : WYJ : 자동차 성능 상태점검 책임보험
		
		
	}, 500);
	
})(jQuery);




// start: only publishing  ////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// ================== 윗라인은 퍼블리싱 전용입니다. 개발 시 포함되지 않아야 합니다. ==================

// Avoid `console` errors in browsers that lack a console.
!function(){for(var o,e=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],r=n.length,i=window.console=window.console||{};r--;)o=n[r],i[o]||(i[o]=e)}();

(function($){

	var prevFocus;      // 이전 focus element

	/**
	 * desc: 공통 팝업 스크롤 높이 다시 계산
	 */
	window.popupScrollRefresh = function(){
		if(window.popupIscroll){
			popupIscroll.refresh();
			//console.log('script ::::: popupScrollRefresh()');
		}
	}

	/**
	 * desc: 공통 팝업 스크롤 해당 요소로 애니메이션
	 */
	window.popupScrollTo = function(target, time){
		if(window.popupIscroll){
			if(!time){
				time = 500;
			}
			popupIscroll.scrollToElement(target, time);
			//console.log('script ::::: popupScrollTo()');
		}
	}

	/**
	 * desc : gnb 메뉴 ARS 형태로 변경
	 */
	window.uiGnbMenu = (function(){
		
		function init(){
			
			gnbOpen();
			
			function gnbOpen(){
				var posY;
				$('#header .btn_allmenu_new').on('click' , function(e){
					e.preventDefault();
					posY = $(window).scrollTop();
					$('body , html').addClass('not_scroll');
					$('.gnb_wrap').addClass('on');
				});
				$('.gnb_wrap .gnb_btn_close').on('click' , function(e){
					e.preventDefault();
					$('body , html').removeClass('not_scroll');
					$('.gnb_wrap').removeClass('on');
					posY = $(window).scrollTop(posY);
				});
				gnbScroll();
			}

			$('.gnb_menu_depth01 li a').each(function(scrollTarget , t_pos , scrollValue){
				scrollTarget = $(this).data('menu'),
				t_pos = $(this).data('pos') - 3,
				scrollValue = $('#'+ scrollTarget).data('pos') - t_pos;
				$(this).on('click' , function(e){ e.preventDefault();
					moveScroll(Math.abs(scrollValue))
				})
			})
			$('#depth02_02 .tit_depth02').on('click' , function(e){ e.preventDefault();
				$("a[data-menu='depth02_02']").trigger('click');
			})
			function gnbScroll(){
				$('.gnb_menu_depth01 li a , .depth02_box').each(function(t_top){
					t_top = $(this).position().top;
					$(this).attr('data-pos' , t_top);
				});
				$('.gnb_wrap .gnb_contents .gnb_menu_depth02').scroll(function(){
					var this_top = $(this).scrollTop();
					$('.depth02_box').each(function(check_id , check_pos , menu_pos , cal_pos){
						check_id = $(this).attr('id'),
						check_pos = $(this).data('pos') - 3;
						menu_pos = $('.gnb_menu_depth01').find("a[data-menu=" + check_id + "]").data('pos');
						cal_pos = check_pos - menu_pos;
						if( cal_pos <= this_top ) {
							$('.gnb_menu_depth01').find("a[data-menu=" + check_id + "]").parent('li').addClass('on').siblings('li').removeClass('on');
						}
					})
				});
				var chHeight = $('.gnb_menu_depth01').outerHeight();
				var pdvalue = $('.gnb_menu_depth01 li:last a').data('pos') + 80;
				$('.gnb_menu_depth02').css({"padding-bottom" : chHeight - pdvalue });
			}
			function moveScroll(value){
				$('.gnb_wrap .gnb_contents .gnb_menu_depth02').stop().animate({scrollTop : value}, 200);
			}
		}
			
		return{
			init: init
		}
	})();



	window.uiCompareAnnins = (function(){
		var el;
		function init(){
			el = $('.list_toggle');
			el2 = $(".acc_title");
			bindEvents();
			if(el2.length > 0) {
				bindEvents2();
			}
			
			
		}
		function bindEvents(){
			$('.tbl_toggle').css({'display':'none'});
			el.find('a').off('click').on('click', function(e){
				e.preventDefault();
				if($(this).hasClass('on')){
					var target = $(this).next('.tbl_toggle');
					target.hide();
					$(this).removeClass('on');
				}
				else{
					var target = $(this).next('.tbl_toggle');
					target.show();
					$(this).addClass('on');
				}
			})
		}
		
		function bindEvents2(){
			el2.off('click').on('click',function(e) {
				e.preventDefault();
				if($(this).next("div").is(":visible")){
					$(this).next("div").slideUp("300");
				} else {
					$(".acc_sub").slideUp("300");
					$(this).next("div").slideDown("300");
					$('.acc_title a').removeClass('on')
					$(this).children('a').addClass('on');
				}
			});
		}

		return{
			init: init
		}
	})();

	window.uiPushSetup = (function(){
		var el;
		function init(){
			el = $('.push_setup');
			bindEvents();
		}
		function bindEvents(){
			el.find('.cnt_push a').on('click', function(e){
				e.preventDefault();

				if($(this).closest('.cnt_push').hasClass('on')){
					$(this).closest('.cnt_push').removeClass('on');
				}
				else{
					$(this).closest('.cnt_push').addClass('on');
				}


			})
		}

		return{
			init: init
		}
	})();


	window.uiToggleAnnins = (function(){
		var el;
		function init(){
			el = $('.bx_show');
			bindEvents();
		}
		function bindEvents(){
			$('.bx_show_group').css({'display':'none'});
			el.find(' > a').off('click').on('click', function(e){
				e.preventDefault();
				if($(this).hasClass('on')){
					var target = $(this).next('.bx_show_group');
					target.hide();
					$(this).removeClass('on');
				}
				else{
					var target = $(this).next('.bx_show_group');
					target.show();
					$(this).addClass('on');
				}
			})
		}

		return{
			init: init
		}
	})();

	window.uiToggleAnninsType = (function(){
		var el;
		function init(){
			el = $('.bx_show');
			bindEvents();
		}
		function bindEvents(){
			$('.bx_show_group').css({'display':'none'});
			el.find('.btn_group_tw .btn_w01').off('click').on('click', function(e){
				e.preventDefault();
				if($(this).hasClass('on')){
					var target = $(this).closest('.bx_show').find('.bx_show_group');
					target.hide();
					$(this).removeClass('on');
				}
				else{
					var target = $(this).closest('.bx_show').find('.bx_show_group');
					target.show();
					$(this).addClass('on');
				}
			})
		}

		return{
			init: init
		}
	})();

	window.uiAddSpecOption = (function(){
		var el;
		function init(){
			el = $('.s_toggle');
			bindEvents();
		}

		function bindEvents(){
			el.on('click', '>a', function(e){
				if($(this).hasClass('on')){
					el.find('>.cont').slideUp();
					$(this).removeClass('on');
				}
				else{
					el.find('>.cont').slideDown();
					$(this).addClass('on');
				}
			})
		}

		return{
			init: init
		}
	})();

	window.uiCheckInfoSlc = (function(){
		var el;
		function init(){
			el = $('.check_info.chk');
			bindEvents();
		}

		function bindEvents(){
			if($('.input_radio').length){
				el.on('click', 'label', function(e){
					el.removeClass('current');
					$(this).closest('.check_info.chk').addClass('current');
				})
			}
			else if($('.input_checkbox').length){
				el.on('click', '.title label', function(e){ // 泥댄겕諛뺤뒪 �좏깮�� 異붽� 
					if($(this).closest('.check_info.chk').hasClass('current')){
						$(this).closest('.check_info.chk').removeClass('current');
					}
					else{
						$(this).closest('.check_info.chk').addClass('current');
					}

				})
			}

		}

		return{
			init: init
		}
	})();

	window.uiFileAdd = (function(){
		var el;
		function init(){
			el = $('.tooltip_area');
			bindEvents();
		}

		function bindEvents(){
			$('.tooltip_file').hide();
			el.on('click', '> a', function(e){
				e.stopPropagation();
				if($(this).hasClass('on')){
					var target = $(this).next('.tooltip_file');
					target.css({display : 'none'});
					$(this).removeClass('on');
				}
				else{
					var target = $(this).next('.tooltip_file');
					target.css({display : 'table'});
					$(this).addClass('on');
				}

				$(document).on('click', function(e){
					if($(e.target).next('.tooltip_file').size() == 0){
						target.css({display : 'none'});
						$('.tooltip_area > a.btn').removeClass('on');
						$(document).off("click");
					}
				});
			});
			el.on('click' , '.tooltip_file > a', function(e){
				if($(this).closest('.tooltip_file').prev('a').hasClass('on')){
					var target = $(this).closest('.tooltip_area > .tooltip_file');
					$(this).closest('.tooltip_file').prev('a').removeClass('on');
					target.css({display : 'none'});
				}
			});


		}

		return{
			init: init
		}
	})();

	window.uiTextareaH = (function(){
		var el;
		function init(){
			el = $('.bx_valid textarea');
			bindEvents();
		}

		function bindEvents(){
			el.on({
				keyup : function(){
					$(this).css('height', 'auto' );
					$(this).height( this.scrollHeight);
				},
				focusout : function(){
					if($(this).val().length == false){
						$(this).outerHeight(25);
					}
				}
			});
		}

		return{
			init: init
		}
	})();

	window.uiEditForm = (function(){
		var el;
		function init(){
			el = $('.bx_valid .ipt_edit .btn_edit');
			bindEvents();
		}

		function bindEvents(){
			el.on({
				click : function(){
					$(this).closest('.ipt_edit').find('.input_txt input').focus();
				}
			});
		}

		return{
			init: init
		}
	})();


	// validate
	window.validateForm = (function(){
		var el;
		function init(){
			bindEvents();
			return this;
		}
		function bindEvents(){
			$('input[type=text], input[type=number], input[type=password]').each(function(idx, obj){
				$(obj).off('focusin').on('focusin', function(){
					// focus in
				}).off('focusout').on('focusout', function(){
					// focus out
				})
			})
		}

		function error(id){
			clear($(id));
			$(id).closest('.bx_valid').addClass('error');
		}

		function clear(id){
			$(id).closest('.bx_valid').removeClass('error');
			$(id).closest('.group').removeClass('notnull');
		}

		return{
			init: init
			, error: error
			, clear: clear
		}
	})();



	window.uiSelectJob = (function(){
		var el;
		var location;
		var swiper;
		var innerHeight;
		var outerHeight;
		var arrIscroll = [];
		var stepIndex;
		var swiperIndex;

		var leftIndex;
		var rightIndex;
		var winwith = $(window).width();
		var arrLabels = [];

		function init(){
			$('.select_car_btn_area').hide();
			$('#pop_content').css("overflow","visible");
			el = $('.ui_job_content');
			outerHeight = 233;	// small
			innerHeight = $(window).height() - outerHeight;

			location = el.find('.job_location');
			if(el.length <= 0){
				return;
			}
			if($('.ui_car_find').length>0){
				arrLabels = ['제조사', '자동차 명', '등록 연도', '세부 차명', '세부 옵션'];
			}
			else{
				arrLabels = ['대분류', '중분류', '소분류', '직업명 '];
			}

			bindEvents();
		}
		function bindEvents(){

			// setting size
			$('.job_type').css({'width': winwith/2 });
			$('.job_type').eq(4).css({'width': winwith });
			$('.job_inner').css({'width': winwith*3});
			$('.job_type').css({'display':'none'});
			$('.job_type').eq(0).css({'display':'block'});

			el.find('.job_type>.bx_job').each(function(idx, obj){
				$(obj).css({height:innerHeight, overflow:'hidden', position:'relative'});

				arrIscroll[idx] = new IScroll($(obj)[0],{
					scrollbars: true
					, click: false
					, interactiveScrollbars: true
					, shrinkScrollbars: 'scale'
					, preventDefaultException: { tagName:/.*/ }
					// , fadeScrollbars: true
				})

				arrIscroll[idx].refresh();
			});

			// clicked item
			el.off('.effect_on').on('click.effect_on', 'a', function(e){
				if($(this).closest('.btn_area').length > 0){
					return;
				}
				else{
					e.preventDefault();
				}

				var closestLi = $(this).closest('li');
				var index = closestLi.index();
				stepIndex = $(this).closest('.job_type').index();
				swiperIndex = $(this).closest('.swiper-slide').index();

				if(stepIndex > $('.job_type').length-3){
					$('.select_car_btn_area').show();
				}
				else{
					$('.select_car_btn_area').hide();
				}

				// 선택한 아이템 on
				closestLi.siblings().removeClass('on');
				closestLi.addClass('on');

				// 자동차선택 화면일 경우
				if($('.ui_car_find').length>0){
					// 상단에 선택값 표시(작업선택일 경우는 패스)
					if($(this).closest('li>a').html().indexOf('span')!=-1 && stepIndex == 4){
						assignLabels($(this).closest('li>a').find('>span').eq(0).html());
					}
					else{
						assignLabels($(this).closest('li>a').html());
					}
				}

				//
				removeItems();
				$('.job_type').eq(stepIndex+1).css({display:'block'});
				refreshScroll();

				getCarsData(stepIndex);
			});

			// swiper
			swiper = new Swiper('.swiper-container',{
				direction: 'horizontal'
				, setWrapperSize: true
				, slidesPerView: 'auto'
				, spaceBetween: 0
				, width:parseInt($(window).width()/2)
				, onSlideChangeEnd: function(activeIndex){
					if(swiper.activeIndex == 3){
						$('.select_car_btn_area').show();
					}else if(swiper.activeIndex < 3){
						$('.select_car_btn_area').hide();
					}
				}
			})

			// move swiper
			function moveSwiper(index){
				if( swiper.activeIndex == index ){
					return;
				}

				if( index == 3 ){
					if($('.ui_car_find').length>0){
						swiper.slideTo($('.swiper-slide').length);
					}
					return;
				}

				if( index != 0 ){
					swiper.slideNext();
				}
			}

			// get data
			function getCarsData(index){
				swiper.update();
				moveSwiper(index);
			}

			// 리스트 삭제하는 함수
			function removeItems(){
				for(var i=0 ; i<$('.job_type').length; i++){
					if( i >= stepIndex+1 ){
						$('.job_type').eq(i).css({display:'none'});
					}
				}
			}

			// 임시 차명 코드로 검색할 경우 5단계 UI 스크립트/////////////////////////////////////
			var job_type = $('.job_type').eq(4);
			var bx_form = job_type.find('.list_job .radio_list .bx_form');
			var input_radio = job_type.find('.list_job .radio_list .input_radio');
			var li_index = -1;
			if($('.ui_tname_car').length > 0){
				bx_form.hide();
				input_radio.on('click', function(e){
					$('.select_car_btn_area').show();
					bx_form.hide();
					job_type.find('.radio_list>li').removeClass('on');
					$(this).closest('li').addClass('on');
					li_index = $(this).closest('li').index();
					bx_form.eq(li_index).show();
					arrIscroll[5].refresh();
				})
			}
			// 임시 차명 코드로 검색할 경우 5단계 UI 스크립트/////////////////////////////////////
		}

		function assignLabels(label){
			if( stepIndex == 2){
				if($('.ui_car_find').length>0){
					label = label.substr(0, label.indexOf('년')+1);
				}
				else{

				}
			}
			for(var i=0 ; i<arrLabels.length; i++){
				if(stepIndex<i){
					$('.job_location>span').eq(i).html(arrLabels[i]);
					$('.job_location>span').eq(i).removeClass('on');
				}
			}
			label = label.replace('<br>', '').replace(' ', '');
			$('.job_location>span').eq(stepIndex).html(label);
			$('.job_location>span').eq(stepIndex).addClass('on');
		}

		function selectItem(step, idx) {
			if ($('.job_type').length > 0) {
				$('.job_type').eq(step).find('li').eq(idx).find('a').trigger('click');
				// 잘못된 스크립트
				//var _el = document.querySelector('.job_type li:nth-child('+(idx+1)+')');
				var _el = document.querySelector('.job_type:nth-child(' + (step + 1) + ') li:nth-child(' + (idx + 1) + ')');
				arrIscroll[step].scrollToElement(_el);
			}
		}

		function setPosition(step, idx) {
			// if( arrIscroll[step] != null){
			// 	var _el = document.querySelector('.job_type li:nth-child(' + (idx + 1) + ')');
			// 	arrIscroll[step].scrollToElement(_el);
			// }
		}

		function refreshScroll() {
			for (var i = 0; i < arrIscroll.length; i++) {
				arrIscroll[i].refresh();
			}
		}

		function refreshScrolls(i) {
			arrIscroll[i].refresh();
		}
		function conso() {
			//console.log(arrIscroll);
		}

		return {
			init: init,
			arrIscroll: arrIscroll,
			selectItem: selectItem,
			setPosition: setPosition,
			assignLabels: assignLabels,
			refreshScroll: refreshScroll,
			refreshScrolls: refreshScrolls
		}
	})();


	// selectbox
	window.uiSelectBox = function(){
		var el;
		var $text, $list, $select;
		var selectedIndex, htmlSelectList, selectListTimer = -1;
		function init(_el){

			el = $(_el);
			//
			setup();
			el.addClass('ui_complete');

			//el.find('>select').css({opacity:0});
			el.find('>select').css({
				opacity:0
				, filter: 'alpha(opacity=0)'
				, visibility:'hidden'
				, width:0
				, height:0
				, fontSize:0
				, textIndent:-9999
				, position:'absolute'
				, top:-99999
				, left:-99999
			})

			return this;
		}

		function setup(){
			$text = el.find('>.target_select');
			$list = el.find('>.select_list');
			$select = el.find('>select');//$select = el.find('>ul>li');

			selectedIndex = -1;

			htmlSelectList = '';


			setList();

			setSelectedIndex(selectedIndex);

			if($select.attr('disabled')){
				el.addClass('disabled');
				$text.off('click').on('click', function(e){
					e.preventDefault();
				})
				return;
			}
			setDefault();
			bindEvents();
		}

		function setDefault(){
			if( el.closest('.group').hasClass('default_sel') ){
				$text.text('선택하세요');
			}
		}

		function bindEvents(){
			$select.off('change').on('change', function(e){
				setSelectedIndex();
			})

			$text.off('click').on('click', function(e){
				e.preventDefault();
				if(!el.hasClass('active')){
					showList();
				}
				else{
					hideList();
				}
			})
		}

		function showList(){
			el.addClass('active');
			if($select.find('>option').length <= 6 || $select.hasClass('nobox')){


				$list.removeClass('more').show().css({zIndex:10});
			}
			else{
				$list.removeClass('more').addClass('more').show().css({zIndex:10});
			}

			$list.off('.listEvent').on('click.listEvent', '>ul>li>a', function(e){
				e.preventDefault();
				var index = $(this).closest('li').index();
				$select.get(0).selectedIndex = index;
				$select.trigger('change');
				setSelectedIndex();
				hideList();
			}).on('focusin.listEvent', function(e){
				clearTimeout(selectListTimer);

				$list.find('>ul>li').removeClass('on');
				$(e.target).closest('li').addClass('on');
			}).on('focusout.listEvent', function(e){
				selectListTimer = setTimeout(function(){
					hideList(true);
				}, 100);
			}).on('mouseover.listEvent', function(e){
				$list.find('>ul>>li').removeClass('on');
				$(e.target).closest('li').addClass('on');
			}).on('mouseout.listEvent', function(e){
				$list.find('>ul>>li').removeClass('on');
				$(e.target).closest('li').removeClass('on');
			})

			$('body').off('mousedown').on('mousedown.listEvent', function(e){
				if($(e.target).closest(el).length <= 0){
					hideList(true);
				}
			})

			$(document).off('keyup').on('keyup.listEvent', function(e){
				if(e.keyCode == 27){
					hideList();
				}
			})
		}

		function hideList(notFocus){
			el.removeClass('active');
			$list.hide().css({zIndex:5});

			$list.off('.listEvent');
			if(!notFocus){
				$text.focus();
			}

			$('body').off('.listEvent');
			$(document).off('.listEvent');
		}

		function setList(){
			//htmlSelectList += '<label fot="sel01" class="select_btn on">통신사선택</label>';
			//htmlSelectList += '<span class="input_select">';
			htmlSelectList += '<a href class="target_select"></a>';
			//htmlSelectList += '</span>';
			htmlSelectList += '<div class="select_list more">';
			htmlSelectList += '<ul class="clfix">';
			/*
			$select.find('>option').each(function(idx, obj){
				var value = $(this).attr('value');
				if(value){
					value = 'data-value="' + value + '"';
				}
				else{
					value = '';
				}
				htmlSelectList += '<li><a href="#"'+value+'>'+$(this).text()+'</a></li>';
			});
			*/
			var rem = 0;	// 4의 나머지
			if($select.find('>option').length%4 != 0){
				rem = 4 - $select.find('>option').length%4;
			}

			$select.find('>option').each(function(idx, obj){
				var value = $(this).attr('value');
				if(value){
					value = 'data-value="' + value + '"';
				}
				else{
					value = '';
				}
				if($(this).attr('disabled')){
					htmlSelectList += '<li><a title="선택할 수 없습니다."'+value+' class="disabled">'+$(this).text()+'</a></li>';
				}
				else{
					htmlSelectList += '<li><a href="#"'+value+'>'+$(this).text()+'</a></li>';
				}

				//console.log($(this).attr('disabled'));
			});

			for(var i=0 ; i<rem ; i++){
				if($select.find('>option').length > 6){
					htmlSelectList += '<li><span></span></li>';
				}
			}

			htmlSelectList += '</ul>';
			htmlSelectList += '</div>';

			$list.remove();
			//el.find('>.select_btn').remove();
			//el.find('>span').remove();
			el.find('>.target_select').remove();
			//el.find('>.txt_error').remove();
			el.append(htmlSelectList);
			$list = el.find('>.select_list');
			$text = el.find('>.target_select');
			//$list.width(el.width());
			//$text.width(el.width()-20);
		}

		function setSelectedIndex(){
			if($select.length <= 0){
				selectedIndex = 0;
			}
			else{
				selectedIndex = $select.get(0).selectedIndex;
			}
			$text.text($list.find('>ul>li').eq(selectedIndex).text());
			$text.attr({title: $select.attr('title')});
			$list.find('>ul>li').removeClass('on').eq(selectedIndex).addClass('on');
		}

		function refresh(){
			setup();
		}

		return{
			init: init
			, refresh: refresh
		}
	};

	window.uiDrvRange = (function(){
		var driver_select = $('.driver_select');
		var sIdx;
		function init(){
			$('.bx_coverage>.coverage').removeClass('on');
			$('.bx_coverage>.coverage').eq(0).addClass('on');
			$('.driver_select>.add').hide();
			$('.driver_select>.add').eq(1).show();
			sIdx = 0;
			bindEvents();
		}
		function bindEvents(){
			$('.driver_select>li label').on('click', function(e){
				
				if( $(this).closest('li').index() < 5 ){
					sIdx = $(this).closest('li').index();

					$('#i_scope06')[0].checked = false;

					// 2016.10.01 지정1인 한정특약폐지
					//var insValdt = $('#insValdt').val();
					//if((sIdx == 1 || sIdx == 2) && insValdt > 20160930) {
					//	sIdx = 3;
					//}
					
					if(sIdx==0){
						$('.driver_select>.add').hide();
						$('.driver_select>.add').eq(0).show();
						$('.bx_coverage>.coverage').removeClass('on');
						$('.bx_coverage>.coverage').eq(sIdx+1).addClass('on');
					}
					else{
						$('.driver_select>.add').hide();
						$('.driver_select>.add').eq(1).show();
						$('.bx_coverage>.coverage').removeClass('on');
						$('.bx_coverage>.coverage').eq(sIdx+1).addClass('on');
					}
				}else if( $(this).closest('li').index() == 5){
					if($('#i_scope06')[0].checked){
						$('.bx_coverage>.coverage').removeClass('on');
						$('.bx_coverage>.coverage').eq(sIdx+1).addClass('on');
					}
					else{
						$('.bx_coverage>.coverage').removeClass('on');
						$('.bx_coverage>.coverage').eq(sIdx+6).addClass('on');
					}
				}
				if( sIdx == $(this).closest('li').index() ) return;
			})
		}
		return{
			init: init
		}
	})();

	/**
	 * desc: 오리엔테이션 셋팅(가로/세로)
	 * files:
	 * 		전 페이지
	 */
	window.uiSetOrientation = (function(){
		var type;
		function init(){
			$(window).on('orientationchange', handler);
			handler();

			function handler(){
				switch(window.orientation){
					case 0:
						type = 'portrait'; // portrait
						$('body').addClass('portrait').removeClass('landscape')
					break;
					case 90:
						type = 'landscape'; // landscape
						$('body').addClass('landscape').removeClass('portrait')
					break;
					case -90:
						type = 'landscape';// landscape
						$('body').addClass('landscape').removeClass('portrait')
					break;
					case 180:
						type = 'portrait';// portrait
						$('body').addClass('portrait').removeClass('landscape')
					break;
				}
				//console.log('mode : '+type);
			}
		}
		return{
			init: init
		}
	})();
	
	
	 // namespace
	if (typeof window.etribe === 'undefined') window.etribe = {}
	  if(typeof window.etribe.ui === 'undefined') window.etribe.ui = {};
	  if(typeof window.etribe.ui.comm === 'undefined') window.etribe.ui.comm = {};

	  var nsUiComm = window.etribe.ui.comm;
	  
	  nsUiComm.datePicker = (function(){
			function init(){				
				
				$( ".et_datepicker,.et_datepicker1" ).datepicker({		
					showAnim:'slideDown',
					dateFormat: 'yymmdd',
					prevText: '<',
					nextText: '>',
					monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
					monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
					dayNames: ['일','월','화','수','목','금','토'],
					dayNamesShort: ['일','월','화','수','목','금','토'],
					dayNamesMin: ['일','월','화','수','목','금','토'],
					showOn:'button',
					buttonImage:'/default/images/common/ico_calendar.gif',
					buttonImageOnly:true,
					showMonthAfterYear: true,
					 changeMonth: true,
					changeYear: true,
					yearSuffix: '.',
					allowInputToggle:true,						
				});								

				$(".et_datepicker2").datepicker({
					showAnim: 'slideDown',
					dateFormat: 'yy-mm-dd',
					defaultDate: '1980-01-01',
					prevText: '<',
					nextText: '>',
					monthNames:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
					monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
					dayNames: ['일','월','화','수','목','금','토'],
					dayNamesShort: ['일','월','화','수','목','금','토'],
					dayNamesMin: ['일','월','화','수','목','금','토'],
					showOn: 'button',
					buttonImage: '/default/images/common/ico_calendar.gif',
					buttonImageOnly: true,
					showMonthAfterYear: true,
					changeMonth: true,
					changeYear: true,
					yearSuffix: '.',
					yearRange: 'c-30:c+30',
					allowInputToggle: true
				});
				
				$(".et_datepicker3").datepicker({
					showAnim: 'slideDown',
					dateFormat: 'yy-mm-dd',
//					defaultDate: '1980-01-01',
					prevText: '<',
					nextText: '>',
					monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
					monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
					dayNames: ['일','월','화','수','목','금','토'],
					dayNamesShort:['일','월','화','수','목','금','토'],
					dayNamesMin: ['일','월','화','수','목','금','토'],
					showOn: 'button',
					buttonImage: '/default/images/common/ico_calendar2.gif',
					buttonImageOnly: true,
					showMonthAfterYear: true,
					changeMonth: true,
					changeYear: true,
					yearSuffix: '.',
					yearRange: 'c-30:c+30',
					allowInputToggle: true
				});
				
				$(".et_datepicker4").datepicker({
					showAnim: 'fadeIn',
					dateFormat: 'yymmdd',
//					defaultDate: '1980-01-01',
					prevText: '<',
					nextText: '>',
					monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
					monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
					dayNames: ['일','월','화','수','목','금','토'],
					dayNamesShort: ['일','월','화','수','목','금','토'],
					dayNamesMin: ['일','월','화','수','목','금','토'],
					showOn: 'button',
					buttonImage: '/default/images/renewal/common/ico_calendar2.svg',
					buttonImageOnly: true,
					showMonthAfterYear: true,
					changeMonth: true,
					changeYear: true,
					yearSuffix: '',
					yearRange: 'c-30:c+30',
					allowInputToggle: true,
					beforeShow: function(input, instance){
						if($(input).prop("disabled")){
							return false;
						} 
					}
				});
				
				// $('.ui-datepicker-trigger').on({
				// 	'click':function(){
				// 		$( ".et_datepicker,.et_datepicker1" ).attr('readonly',true);		
				// 		$( ".et_datepicker,.et_datepicker4" ).attr('readonly',true);		
				// 	}
				// 	,
				// 	'blur':function(){
				// 		$( ".et_datepicker,.et_datepicker1" ).attr('readonly',false); 
				// 		$( ".et_datepicker,.et_datepicker4" ).attr('readonly',false);
				// 	}
				// });
				
				// 2023-09-07 '달력 아이콘' click 이벤트 관련 추가
				var timer = setTimeout(function() {
					$('.ui-datepicker-trigger').on('click', function() {
						$('.et_datepicker, .et_datepicker1, .et_datepicker4').attr('readonly', true);
					});

					clearTimeout(timer);
				}, 150);

				$('.et_datepicker4').on('focus', function() {
				    $(this).siblings('.ui-datepicker-trigger').css('pointer-events', 'none');
				}).on('blur', function() {
				    $(this).siblings('.ui-datepicker-trigger').css('pointer-events', 'all');
				}).on('click', function() {
					$(this).datepicker('hide');
				});
				
				$( ".et_datepicker,.et_datepicker4" ).on('click',function(){		
					$(this).attr('readonly',false);
					//$(this).datepicker('show');
				});
				$( ".et_datepicker,.et_datepicker1" ).on('click',function(){		
					$(this).attr('readonly',false);
					//$(this).datepicker('show');
				});
				// $( ".et_datepicker2" ).on('click',function(){					
				// 	$(this).datepicker('show');
				// });
	
			}
			return { init:init};
		})();
	  
})(jQuery);
};


//openLayerPopup
var openLayerPopup = function(id){
	
	if('Y' == mz.RENEW){
		this.openPopup(id);
		return; 
	}
	
	var $layer_pop = $('#'+id + " > div").eq(0);

	$layer_pop.fadeIn().addClass('on');
	$('#wrap').css('overflow' , 'hidden');
	$('#Wrap').css('overflow' , 'hidden');
	$('html, body').stop().animate({
        scrollTop: 0
    }, 0);
};

//closeLayerPopup
var closeLayerPopup = function(id){
	
	if('Y' == mz.RENEW){
		this.closePopup(id);
		return; 
	}
	
	var $layer_pop = $('#'+id + " > div").eq(0);

	$layer_pop.removeClass('on').fadeOut();
	$('#wrap').removeAttr('style', '')
};

var selectValue = function(id) {
	return $("#" + id).closest("div.selectbx").find("li.on a").eq(0).attr("data-value");
};

var setSelectText = function(id, label) {
	return $('#'+ id).find('span').removeClass('placeholder').html(label);
};

//openPopup (리뉴얼)
var openPopup = function(param){
	var popId = typeof(param) == 'string' ? param : typeof(param) == 'object' ? param.id : '',
		popObj = $('#'+ popId),
		dimArea = popObj.find('.dimmed_area'),
		popup = popObj.find('.popup');

	// 뒷화면 scroll 막기
    this.notScroll();
    
    dimArea.addClass('on');
    
    var timer = setTimeout(function() {
    	 popup.addClass('open');
    	 
    	 // 팝업 이외의 영역 클릭 시 팝업 닫기
         dimArea.find('.dimmed').on('click.popetc', function() {
//        	 closePopup(popId);
        	 popup.find('.pop_close').trigger('click');
         });
    	 
    	 clearTimeout(timer);
    }, 100);
};

//closePopup (리뉴얼)
var closePopup = function(_id){
	
	var popObj = $('#'+ _id),
    popup = popObj.find('.popup'),
    dimArea = popObj.find('.dimmed_area');
	
	popup.removeClass('open');

    // 뒷화면 scroll 허용
    this.allowScroll();
    
    var timer = setTimeout(function() {
        // select box popup일 경우
        if (_id.indexOf('popSelect') > -1 || _id.indexOf('popAlert') > -1 || _id.indexOf('popConf') > -1) {
            popObj.remove();
        } else {
            dimArea.removeClass('on');
        }

        clearTimeout(timer);
    }, 500);
};

//popup open 시 뒷화면 scroll 허용
var notScroll = function() {
    var scrTop = $('html').scrollTop();
    $('html').css({ top: scrTop +'px', overflow: 'hidden' });
};

//popup close 시 뒷화면 scroll 허용
var allowScroll = function() {
    // 열려있는 팝업이 있을 경우 제외
    if ($('#layer_pop_container').find('.popup.open').length > 0) return false;
    $('html').removeAttr('style');
};

//이전 focus 요소 저장
var prevFocusSave = function() {
    $(document).on('click', function(e) {
        prevFocus = $(e.target);
    });
};

var selectValue = function(id) {
	return $("#" + id).closest("div.selectbx").find("li.on a").eq(0).attr("data-value");
};

//직업 검색 탭
window.uiSearchTab = (function(){
	var el, tabBox, tabList;

	function init(){
		el = $('.ui_search_tab');
		tabBox = el.find('.tab_basic');
		tabList = tabBox.find('li');

		el.find('.inp_search').eq(2).hide();

		bindEvent();
	}

	function bindEvent(){
		tabList.on('click', 'a', function(){
			var liIdx = $(this).closest('li').index();
			var thisTxt = $(this).text();

			tabList.removeClass('on');
			$(this).closest('li').addClass('on');
			el.find('.inp_search').hide();
			if(liIdx == 0){
				el.find('.inp_search').eq(0).show();
				el.find('.inp_search').eq(1).show();
			}else{
				el.find('.inp_search').eq(2).show();
			}
			tabBox.next('.hide_txt').text(thisTxt);
		});
	}

	return{init:init}
})();

//나동차 검색 탭
window.uiCarSearchTab =(function(){

var el, tabList, tabListTarget;

function init(){
	el = $('.car_model_wrap');
	tabList = el.find('.tab_basic li');
	tabListTarget = tabList.find('>a');
	searchBox1 = el.find('.inp_search');

	searchBox1.hide();
	bindEvent();
}

function bindEvent(){
	tabListTarget.on('click', function(e){
		e.preventDefault();
		var thisTxt = $(this).text();

		tabList.removeClass('on');
		$(this).parent().addClass('on');
		tabList.parent().next('.hide_txt').text(thisTxt);

		if(tabList.eq(0).hasClass('on')){
			searchBox1.hide();
		}else if(tabList.eq(1).hasClass('on')){
			searchBox1.show();
		}
	});
}

return{init:init}
})();

// 셀렉트 박스
function selectMethod(){
	$('.selectbx').each(function(idx, obj){
		var $obj = $(obj);
		var $select = $obj.find('select');

		var selectbox = new uiSelectBox();
		selectbox.init($obj);
		$select.data('selectbox', selectbox);
	});
}
//셀렉트 박스 (타겟지정)
function selectMethodById(id){
	var $obj = $('#'+id);
	var $select = $obj.find('select');
	var selectbox = new uiSelectBox();
	selectbox.init($obj);
	$select.data('selectbox', selectbox);

}

window.selRefresh = function(idv){
	var $obj = $('#'+idv+'');
	var $obj2 = $obj.parent('.selectbx');
		$obj2.removeClass('bindE').removeClass('active');
	var $select = $obj2.find('select');
	var selectbox = new uiSelectBox();
	selectbox.init($obj2);
	$select.data('selectbox', selectbox);
};

/**
 * desc: 통신사 이용약관 동의 20160309
 * files:
 *
 */
/*
window.uiTabTerms = (function(){
	var el;
	var idx;
	var target;
	function init(){
		el = $('.my_certification_wrap');
		bindEvents();
	}
	function bindEvents(){
		$('.my_certification_wrap').on('click', ' .my_certification  > a', function(e){
			e.preventDefault();
			idx = $(this).index()
			$('.terms_cont_wrp .terms_cont').eq(idx).show();
			$('.terms_cont_wrp .terms_cont').eq(idx).siblings().hide();
		})

	}
	return{
		init: init
	}
})();
*/


window.uiTabTerms = (function(){
		var el;
		var idx;
		var target;
		function init(){
			el = $('.my_certification_wrap');
			bindEvents();
		}
		function bindEvents(){
			$('.my_certification_wrap').on('click', ' .my_certification  > a', function(e){
				e.preventDefault();
				idx = $(this).index()
				$('.my_certification_wrap .my_certification  > a').removeClass('on')
				$(this).addClass('on')
				$('.terms_cont_wrp .terms_cont').eq(idx).show();
				$('.terms_cont_wrp .terms_cont').eq(idx).siblings().hide();
			
			})

		}
		return{
			init: init
		}
	})();

window.uiMainNew = (function(){
	
	function init(){
		menuToggle();
		directPickSwiper();
		
		//Customer Menu Toggle 
		function menuToggle() {
			var $btn = $('.btn_toggle');
			var $btnText = $btn.find('.text');
			var text = $btn.text();
			var $foldMenu = $('.menu_toggle');

			$('.btn_toggle').on('click', checkFoldMenu );

			function checkFoldMenu(){
				text = $btn.text();
				if ($foldMenu.css('display') == 'block') {
					$foldMenu.slideUp(500, function(){
						$btnText.html('더보기');
					});
				} else if ($foldMenu.css('display') == 'none') {
					$foldMenu.slideDown(500, function(){
						$btnText.html('닫기');
					});
				}
			}
		}

		//Direct PICK Swiper
		function directPickSwiper(){
			/*
			var swiper = new Swiper('.direct_pick', {
				slidePreView: 1,
				centeredSlides : true,
				spaceBetween : 5,
				pagination:".direct_pick .swiper-pagination"
			});
			*/
		}
	}

	return{init:init}
})();

window.uiYoutube = (function(){
	
	function init(){
		bindEvents();
	}
	
	function bindEvents(){
		$('.century_view .video_wrap button').on('click', function(){
			var youtubeSrc = $(this).attr('data-youtube');
			var youtubeIframe = $(this).closest('.video_wrap').find('iframe');
			$(this).hide();
			youtubeIframe.attr('src', youtubeSrc);
		});
	}
	
	return{
		init: init
	}
})();

/*
 * 리뉴얼 이후 스크립트들은 여기에 들어간다. 차수가 나뉘어져있어 당장은 common.js 를 뺄 수 없다
 */
window.uiMainRenewal = (function(){
	
	function init(){
        contractList();     // 계약 리스트 swiper
        srchBar();          // 검색바 관련
        promoSwiper();      // promotion swiper
	}
	
    function contractList() {
    	setTimeout(function(){
	        var swiper = new Swiper('.my_contract', {
	            slidesPerView: 'auto',
	            spaceBetween: 0,
	        });
    	}, 300);
    }
    
    // promotion swiper
    function promoSwiper() {
    	setTimeout(function(){
            var swiper = new Swiper('.promotion', {
                autoplay: true,
                speed: 400,
                delay: 300,
                pagination: {
                    el: '.swiper-pagination'
                }
            });
    	}, 300);
    }
    
    // 검색바
    function srchBar() {
    	
        var srchWrap = $('.search_wrap'),
            srchBar = srchWrap.find('input[name="srch_keyword"]'),
            srchBtn = srchWrap.find('.srch_btn'),
            srchWrapT = srchWrap.offset().top,
            headerH = $('#Header').outerHeight(),
            targetP = srchWrapT - headerH;
        
        // focus 시 scroll
        srchBar.on('click', function() {
        	var targetTemp = $('.search_wrap').offset().top -  $('#Header').outerHeight();
            $('html').animate({ scrollTop: targetTemp +'px' }, 300);
        });
        
        srchBtn.on('click', function(){
        	srchBar.focus();
        });
    }

    // '더보기' 버튼
    function moreViewMenu() {
        var menuBtn = $('#Header').find('.btn_menu');
        menuBtn.trigger('click');
    }

	return{init:init}
})();


window.uiGnbRenewalMenu = (function(){
	
	function init(){
		
		var gnbMenu = $('#GnbWrap'),
        openBtn = $('#Header').find('.btn_menu'),
        closeBtn = gnbMenu.find('.btn_menu_close');
		
	    // 초기화
	    gnbMenu.find('input, button, a').attr('tabindex', -1);
	
	    // 열기 버튼
	    openBtn.off('click.gnbopen').on('click.gnbopen', function() {
	        // 열기 전 focus 요소 저장
	    	parent.prevFocusSave();
	
	        $('body').find('input, button, a, select').attr('tabindex', -1);
	        gnbMenu.find('.gnb_body').scrollTop(0);
	        gnbMenu.addClass('open');
	        gnbMenu.find('input, button, a').attr('tabindex', 0);
	        
	        // 뒷화면 scroll 막기
	        parent.notScroll();
	    });
	
	    // 닫기 버튼
	    closeBtn.off('click.gnbclose').on('click.gnbclose', function() {
	    	
	        // 웹접근성 관련 tabindex 변경
	        $('body').find('input, button, a, select').attr('tabindex', 0);
	        gnbMenu.removeClass('open');
	        gnbMenu.find('input, button, a').attr('tabindex', -1);
	
	        // 열기 전 요소에 focus
	        prevFocus.focus();
	        
	        // 뒷화면 scroll 허용
	        parent.allowScroll();
	    });
	}
	
	return{init:init}
})();

window.uiFloatSelectBox = (function(){
	
	function init(opt){
		
        var id = opt.id,
	        title = opt.title,
	        optList = opt.optList,
	        nextFocus = opt.nextfocus,
	        selBtn = $('#'+ id),
	        initVal = opt.initVal,
	        popContainer = $('#float_selectBoxPop'),
	        popId = 'float_selectBoxPop';

        // 버튼 화살표 회전
        selBtn.addClass('open');

        var popObj = $('#'+ popId);     // 팝업
        popContainer.find('.popup').addClass('open');
        
        var optBtn = popObj.find('.opt_btn');
		
        // option list 선택
        optBtn.off('click.selectopt').on('click.selectopt', function() {

            optBtn.removeClass('active');
            $(this).addClass('active');

            // combo-popup 닫기
//            selectPopClose();

            // 버튼 화살표 회전
            selBtn.removeClass('open');
        });

        // 팝업 이외의 영역 클릭 시
        $('#'+ popId).find('.dimmed').off('click.combodim').on('click.combodim', function() {
            // 버튼 화살표 회전
            selBtn.removeClass('open');
        });

        // 팝업 닫기 버튼 클릭 시
        popObj.find('.pop_close').on('click', function() {
            // 버튼 화살표 회전
            selBtn.removeClass('open');
        });

        // combo-popup 닫기
        function selectPopClose() {
            // 버튼 화살표 회전
            selBtn.removeClass('open');

            // popup 닫기
            popObj.find('.popup').removeClass('open');
            renewalUI.allowScroll();

            var timer = setTimeout(function() {
                popObj.find('.dimmed_area').removeClass('on');
                popObj.remove();

                // 웹접근성 관련 tabindex 변경 
                if ($('.popup.open').length < 1) {
                    $('body').find('input:not([type="hidden"]), button, a, select').attr('tabindex', 0);
                }
    
                var lastPop = $('.popup.open').eq($('.popup.open').length - 1);
                popObj.find('input:not([type="hidden"]), button, a, select').attr('tabindex', -1);
                lastPop.find('input:not([type="hidden"]), button, a, select').attr('tabindex', 0);

                clearTimeout(timer);
            }, 300);
            
            // 다음 focus 이동
            nextFocus !== false && renewalUI.moveNextFocus();
        }
	}
	
	return{init:init}
})();



containerJS();

// funtcion carInsur() {}
	// $(function() {
		
	// });

/* 210714 : WYJ : 카카오인증 아코디언 */
var accordionMethod = function() {
	$(".certi_agree_box .agree_tit").on('click', function(e) {
		e.preventDefault();
		if ($(this).closest('.certi_agree_box').hasClass('on') == true) {
			$(this).attr('title', '�쇱튂湲�').closest('.certi_agree_box').removeClass('on').next('.agree_box').stop().slideUp(200);
		} else {
			$(".certi_agree_box .agree_tit").attr('title', '�쇱튂湲�');
			$(this).attr('title', '�묎린').closest('.certi_agree_box').addClass('on').next('.agree_box').stop().slideDown(200);
		}
	});
}