
var camaro = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(camaro) {
  camaro = camaro || {};

var e;e||(e=typeof camaro !== 'undefined' ? camaro : {});var q={},r;for(r in e)e.hasOwnProperty(r)&&(q[r]=e[r]);var t=!1,u=!1,aa=!1,ba=!1,ea=!1;t="object"===typeof window;u="function"===typeof importScripts;aa=(ba="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!t&&!u;ea=!t&&!aa&&!u;var v="",x,y,fa,ha;
if(aa)v=__dirname+"/",x=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},y=function(a){a=x(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||z("Assertion failed: undefined");return a},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(a){throw a;}),process.on("unhandledRejection",z),e.inspect=function(){return"[Emscripten Module object]"};else if(ea)"undefined"!=
typeof read&&(x=function(a){return read(a)}),y=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||z("Assertion failed: undefined");return a},"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(t||u)u?v=self.location.href:document.currentScript&&(v=document.currentScript.src),_scriptDir&&(v=_scriptDir),0!==v.indexOf("blob:")?
v=v.substr(0,v.lastIndexOf("/")+1):v="",x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(y=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});var ia=e.print||console.log.bind(console),A=e.printErr||console.warn.bind(console);for(r in q)q.hasOwnProperty(r)&&(e[r]=q[r]);q=null;var ja={"f64-rem":function(a,b){return a%b},"debugger":function(){}},B;e.wasmBinary&&(B=e.wasmBinary);
"object"!==typeof WebAssembly&&A("no native wasm support detected");var C,ka=new WebAssembly.Table({initial:116,maximum:116,element:"anyfunc"}),la=!1,ma="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function na(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&ma)return ma.decode(a.subarray(b,c));for(d="";b<c;){var f=a[b++];if(f&128){var h=a[b++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|h);else{var k=a[b++]&63;f=224==(f&240)?(f&15)<<12|h<<6|k:(f&7)<<18|h<<12|k<<6|a[b++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}return d}
function oa(a,b,c){var d=D;if(0<c){c=b+c-1;for(var f=0;f<a.length;++f){var h=a.charCodeAt(f);if(55296<=h&&57343>=h){var k=a.charCodeAt(++f);h=65536+((h&1023)<<10)|k&1023}if(127>=h){if(b>=c)break;d[b++]=h}else{if(2047>=h){if(b+1>=c)break;d[b++]=192|h>>6}else{if(65535>=h){if(b+2>=c)break;d[b++]=224|h>>12}else{if(b+3>=c)break;d[b++]=240|h>>18;d[b++]=128|h>>12&63}d[b++]=128|h>>6&63}d[b++]=128|h&63}}d[b]=0}}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");
function pa(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,E,D,qa,ra,F,G,sa,ta;function ua(a){buffer=a;e.HEAP8=E=new Int8Array(a);e.HEAP16=qa=new Int16Array(a);e.HEAP32=F=new Int32Array(a);e.HEAPU8=D=new Uint8Array(a);e.HEAPU16=ra=new Uint16Array(a);e.HEAPU32=G=new Uint32Array(a);e.HEAPF32=sa=new Float32Array(a);e.HEAPF64=ta=new Float64Array(a)}var wa=e.TOTAL_MEMORY||16777216;e.wasmMemory?C=e.wasmMemory:C=new WebAssembly.Memory({initial:wa/65536});C&&(buffer=C.buffer);wa=buffer.byteLength;ua(buffer);
F[3400]=5256672;function H(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.ga;"number"===typeof c?void 0===b.$?e.dynCall_v(c):e.dynCall_vi(c,b.$):c(void 0===b.$?null:b.$)}}}var xa=[],ya=[],za=[],Aa=[];function Ba(){var a=e.preRun.shift();xa.unshift(a)}var I=0,Ca=null,K=null;e.preloadedImages={};e.preloadedAudios={};function z(a){if(e.onAbort)e.onAbort(a);ia(a);A(a);la=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Da(){var a=M;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var M="camaro.wasm";if(!Da()){var Ea=M;M=e.locateFile?e.locateFile(Ea,v):v+Ea}function Fa(){try{if(B)return new Uint8Array(B);if(y)return y(M);throw"both async and sync fetching of the wasm failed";}catch(a){z(a)}}
function Ga(){return B||!t&&!u||"function"!==typeof fetch?new Promise(function(a){a(Fa())}):fetch(M,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+M+"'";return a.arrayBuffer()}).catch(function(){return Fa()})}
e.asm=function(){function a(a){e.asm=a.exports;I--;e.monitorRunDependencies&&e.monitorRunDependencies(I);0==I&&(null!==Ca&&(clearInterval(Ca),Ca=null),K&&(a=K,K=null,a()))}function b(b){a(b.instance)}function c(a){return Ga().then(function(a){return WebAssembly.instantiate(a,d)}).then(a,function(a){A("failed to asynchronously prepare wasm: "+a);z(a)})}var d={env:Ha,wasi_unstable:Ha,global:{NaN:NaN,Infinity:Infinity},"global.Math":Math,asm2wasm:ja};I++;e.monitorRunDependencies&&e.monitorRunDependencies(I);
if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return A("Module.instantiateWasm callback failed with error: "+f),!1}(function(){if(B||"function"!==typeof WebAssembly.instantiateStreaming||Da()||"function"!==typeof fetch)return c(b);fetch(M,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,d).then(b,function(a){A("wasm streaming compile failed: "+a);A("falling back to ArrayBuffer instantiation");c(b)})})})();return{}};ya.push({ga:function(){Ia()}});
var Ja=[null,[],[]];function Ka(){return 0}function La(){return 0}function Ma(a,b,c,d){try{for(var f=0,h=0;h<c;h++){for(var k=F[b+8*h>>2],g=F[b+(8*h+4)>>2],m=0;m<g;m++){var n=D[k+m],w=Ja[a];0===n||10===n?((1===a?ia:A)(na(w,0)),w.length=0):w.push(n)}f+=g}F[d>>2]=f;return 0}catch(p){return"undefined"!==typeof FS&&p instanceof FS.ra||z(p),p.sa}}var N={};function Na(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function O(a){return this.fromWireType(G[a>>2])}var P={},Q={},R={};
function Oa(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Pa(a,b){a=Oa(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}
function Qa(a){var b=Error,c=Pa(a,function(b){this.name=a;this.message=b;b=Error(b).stack;void 0!==b&&(this.stack=this.toString()+"\n"+b.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var Ra=void 0;
function Sa(a,b,c){function d(b){b=c(b);if(b.length!==a.length)throw new Ra("Mismatched type converter count");for(var d=0;d<a.length;++d)S(a[d],b[d])}a.forEach(function(a){R[a]=b});var f=Array(b.length),h=[],k=0;b.forEach(function(a,b){Q.hasOwnProperty(a)?f[b]=Q[a]:(h.push(a),P.hasOwnProperty(a)||(P[a]=[]),P[a].push(function(){f[b]=Q[a];++k;k===h.length&&d(f)}))});0===h.length&&d(f)}
function Ta(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Ua=void 0;function T(a){for(var b="";D[a];)b+=Ua[D[a++]];return b}var Va=void 0;function U(a){throw new Va(a);}
function S(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||U('type "'+d+'" must have a positive integer typeid pointer');if(Q.hasOwnProperty(a)){if(c.ka)return;U("Cannot register type '"+d+"' twice")}Q[a]=b;delete R[a];P.hasOwnProperty(a)&&(b=P[a],delete P[a],b.forEach(function(a){a()}))}var Wa=[],V=[{},{value:void 0},{value:null},{value:!0},{value:!1}];
function Xa(a){4<a&&0===--V[a].aa&&(V[a]=void 0,Wa.push(a))}function W(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Wa.length?Wa.pop():V.length;V[b]={aa:1,value:a};return b}}function Ya(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}
function Za(a,b){switch(b){case 2:return function(a){return this.fromWireType(sa[a>>2])};case 3:return function(a){return this.fromWireType(ta[a>>3])};default:throw new TypeError("Unknown float type: "+a);}}function ab(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Pa(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}
function bb(a,b){var c=e;if(void 0===c[a].Y){var d=c[a];c[a]=function(){c[a].Y.hasOwnProperty(arguments.length)||U("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].Y+")!");return c[a].Y[arguments.length].apply(this,arguments)};c[a].Y=[];c[a].Y[d.ea]=d}}
function cb(a,b,c){e.hasOwnProperty(a)?((void 0===c||void 0!==e[a].Y&&void 0!==e[a].Y[c])&&U("Cannot register public name '"+a+"' twice"),bb(a,a),e.hasOwnProperty(c)&&U("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),e[a].Y[c]=b):(e[a]=b,void 0!==c&&(e[a].ta=c))}function db(a,b){for(var c=[],d=0;d<a;d++)c.push(F[(b>>2)+d]);return c}
function X(a,b){a=T(a);if(void 0!==e["FUNCTION_TABLE_"+a])var c=e["FUNCTION_TABLE_"+a][b];else if("undefined"!==typeof FUNCTION_TABLE)c=FUNCTION_TABLE[b];else{c=e["dynCall_"+a];void 0===c&&(c=e["dynCall_"+a.replace(/f/g,"d")],void 0===c&&U("No dynCall invoker for signature: "+a));for(var d=[],f=1;f<a.length;++f)d.push("a"+f);f="return function "+("dynCall_"+a+"_"+b)+"("+d.join(", ")+") {\n";f+="    return dynCall(rawFunction"+(d.length?", ":"")+d.join(", ")+");\n";c=(new Function("dynCall","rawFunction",
f+"};\n"))(c,b)}"function"!==typeof c&&U("unknown function pointer with signature "+a+": "+b);return c}var eb=void 0;function fb(a){a=gb(a);var b=T(a);Y(a);return b}function hb(a,b){function c(a){f[a]||Q[a]||(R[a]?R[a].forEach(c):(d.push(a),f[a]=!0))}var d=[],f={};b.forEach(c);throw new eb(a+": "+d.map(fb).join([", "]));}
function ib(a,b,c){switch(b){case 0:return c?function(a){return E[a]}:function(a){return D[a]};case 1:return c?function(a){return qa[a>>1]}:function(a){return ra[a>>1]};case 2:return c?function(a){return F[a>>2]}:function(a){return G[a>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var jb={};function kb(a){var b=jb[a];return void 0===b?T(a):b}var lb=[];function mb(a){a||U("Cannot use deleted val. handle = "+a);return V[a].value}function nb(a){var b=lb.length;lb.push(a);return b}
function ob(a,b){var c=Q[a];void 0===c&&U(b+" has unknown type "+fb(a));return c}function pb(a,b){for(var c=Array(a),d=0;d<a;++d)c[d]=ob(F[(b>>2)+d],"parameter "+d);return c}function qb(){return E.length}Ra=e.InternalError=Qa("InternalError");for(var rb=Array(256),sb=0;256>sb;++sb)rb[sb]=String.fromCharCode(sb);Ua=rb;Va=e.BindingError=Qa("BindingError");e.count_emval_handles=function(){for(var a=0,b=5;b<V.length;++b)void 0!==V[b]&&++a;return a};
e.get_first_emval=function(){for(var a=5;a<V.length;++a)if(void 0!==V[a])return V[a];return null};eb=e.UnboundTypeError=Qa("UnboundTypeError");
var Ha={c:function(a){return tb(a)},b:function(a){"uncaught_exception"in ub?ub.da++:ub.da=1;throw a;},y:function(){return Ka.apply(null,arguments)},w:function(){return La.apply(null,arguments)},v:function(){return Ma.apply(null,arguments)},u:function(a){var b=N[a];delete N[a];var c=b.ma,d=b.na,f=b.ba,h=f.map(function(a){return a.ja}).concat(f.map(function(a){return a.pa}));Sa([a],h,function(a){var h={};f.forEach(function(b,c){var d=a[c],g=b.ha,n=b.ia,m=a[c+f.length],k=b.oa,da=b.qa;h[b.fa]={read:function(a){return d.fromWireType(g(n,
a))},write:function(a,b){var c=[];k(da,a,m.toWireType(c,b));Na(c)}}});return[{name:b.name,fromWireType:function(a){var b={},c;for(c in h)b[c]=h[c].read(a);d(a);return b},toWireType:function(a,b){for(var f in h)if(!(f in b))throw new TypeError("Missing field");var g=c();for(f in h)h[f].write(g,b[f]);null!==a&&a.push(d,g);return g},argPackAdvance:8,readValueFromPointer:O,Z:d}]})},t:function(a,b,c,d,f){var h=Ta(c);b=T(b);S(a,{name:b,fromWireType:function(a){return!!a},toWireType:function(a,b){return b?
d:f},argPackAdvance:8,readValueFromPointer:function(a){if(1===c)var d=E;else if(2===c)d=qa;else if(4===c)d=F;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(d[a>>h])},Z:null})},s:function(a,b){b=T(b);S(a,{name:b,fromWireType:function(a){var b=V[a].value;Xa(a);return b},toWireType:function(a,b){return W(b)},argPackAdvance:8,readValueFromPointer:O,Z:null})},q:function(a,b,c){c=Ta(c);b=T(b);S(a,{name:b,fromWireType:function(a){return a},toWireType:function(a,b){if("number"!==
typeof b&&"boolean"!==typeof b)throw new TypeError('Cannot convert "'+Ya(b)+'" to '+this.name);return b},argPackAdvance:8,readValueFromPointer:Za(b,c),Z:null})},m:function(a,b,c,d,f,h){var k=db(b,c);a=T(a);f=X(d,f);cb(a,function(){hb("Cannot call "+a+" due to unbound types",k)},b-1);Sa([],k,function(c){var d=[c[0],null].concat(c.slice(1)),g=c=a,k=f,p=d.length;2>p&&U("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var va=null!==d[1]&&!1,ca=!1,l=1;l<d.length;++l)if(null!==
d[l]&&void 0===d[l].Z){ca=!0;break}var da="void"!==d[0].name,J="",L="";for(l=0;l<p-2;++l)J+=(0!==l?", ":"")+"arg"+l,L+=(0!==l?", ":"")+"arg"+l+"Wired";g="return function "+Oa(g)+"("+J+") {\nif (arguments.length !== "+(p-2)+") {\nthrowBindingError('function "+g+" called with ' + arguments.length + ' arguments, expected "+(p-2)+" args!');\n}\n";ca&&(g+="var destructors = [];\n");var $a=ca?"destructors":"null";J="throwBindingError invoker fn runDestructors retType classParam".split(" ");k=[U,k,h,Na,
d[0],d[1]];va&&(g+="var thisWired = classParam.toWireType("+$a+", this);\n");for(l=0;l<p-2;++l)g+="var arg"+l+"Wired = argType"+l+".toWireType("+$a+", arg"+l+"); // "+d[l+2].name+"\n",J.push("argType"+l),k.push(d[l+2]);va&&(L="thisWired"+(0<L.length?", ":"")+L);g+=(da?"var rv = ":"")+"invoker(fn"+(0<L.length?", ":"")+L+");\n";if(ca)g+="runDestructors(destructors);\n";else for(l=va?1:2;l<d.length;++l)p=1===l?"thisWired":"arg"+(l-2)+"Wired",null!==d[l].Z&&(g+=p+"_dtor("+p+"); // "+d[l].name+"\n",J.push(p+
"_dtor"),k.push(d[l].Z));da&&(g+="var ret = retType.fromWireType(rv);\nreturn ret;\n");J.push(g+"}\n");d=ab(J).apply(null,k);l=b-1;if(!e.hasOwnProperty(c))throw new Ra("Replacing nonexistant public symbol");void 0!==e[c].Y&&void 0!==l?e[c].Y[l]=d:(e[c]=d,e[c].ea=l);return[]})},i:function(a,b,c,d,f){function h(a){return a}b=T(b);-1===f&&(f=4294967295);var k=Ta(c);if(0===d){var g=32-8*c;h=function(a){return a<<g>>>g}}var m=-1!=b.indexOf("unsigned");S(a,{name:b,fromWireType:h,toWireType:function(a,c){if("number"!==
typeof c&&"boolean"!==typeof c)throw new TypeError('Cannot convert "'+Ya(c)+'" to '+this.name);if(c<d||c>f)throw new TypeError('Passing a number "'+Ya(c)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+d+", "+f+"]!");return m?c>>>0:c|0},argPackAdvance:8,readValueFromPointer:ib(b,k,0!==d),Z:null})},f:function(a,b,c){function d(a){a>>=2;var b=G;return new f(b.buffer,b[a+1],b[a])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,
Float32Array,Float64Array][b];c=T(c);S(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{ka:!0})},r:function(a,b){b=T(b);var c="std::string"===b;S(a,{name:b,fromWireType:function(a){var b=G[a>>2];if(c){var d=D[a+4+b],k=0;0!=d&&(k=d,D[a+4+b]=0);var g=a+4;for(d=0;d<=b;++d){var m=a+4+d;if(0==D[m]){g=g?na(D,g,void 0):"";if(void 0===n)var n=g;else n+=String.fromCharCode(0),n+=g;g=m+1}}0!=k&&(D[a+4+b]=k)}else{n=Array(b);for(d=0;d<b;++d)n[d]=String.fromCharCode(D[a+4+d]);n=n.join("")}Y(a);
return n},toWireType:function(a,b){b instanceof ArrayBuffer&&(b=new Uint8Array(b));var d="string"===typeof b;d||b instanceof Uint8Array||b instanceof Uint8ClampedArray||b instanceof Int8Array||U("Cannot pass non-string to std::string");var f=(c&&d?function(){for(var a=0,c=0;c<b.length;++c){var d=b.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|b.charCodeAt(++c)&1023);127>=d?++a:a=2047>=d?a+2:65535>=d?a+3:a+4}return a}:function(){return b.length})(),g=tb(4+f+1);G[g>>2]=f;if(c&&d)oa(b,g+
4,f+1);else if(d)for(d=0;d<f;++d){var m=b.charCodeAt(d);255<m&&(Y(g),U("String has UTF-16 code units that do not fit in 8 bits"));D[g+4+d]=m}else for(d=0;d<f;++d)D[g+4+d]=b[d];null!==a&&a.push(Y,g);return g},argPackAdvance:8,readValueFromPointer:O,Z:function(a){Y(a)}})},F:function(a,b,c){c=T(c);if(2===b){var d=function(){return ra};var f=1}else 4===b&&(d=function(){return G},f=2);S(a,{name:c,fromWireType:function(a){for(var b=d(),c=G[a>>2],h=Array(c),n=a+4>>f,w=0;w<c;++w)h[w]=String.fromCharCode(b[n+
w]);Y(a);return h.join("")},toWireType:function(a,c){var g=c.length,h=tb(4+g*b),k=d();G[h>>2]=g;for(var w=h+4>>f,p=0;p<g;++p)k[w+p]=c.charCodeAt(p);null!==a&&a.push(Y,h);return h},argPackAdvance:8,readValueFromPointer:O,Z:function(a){Y(a)}})},E:function(a,b,c,d,f,h){N[a]={name:T(b),ma:X(c,d),na:X(f,h),ba:[]}},D:function(a,b,c,d,f,h,k,g,m,n){N[a].ba.push({fa:T(b),ja:c,ha:X(d,f),ia:h,pa:k,oa:X(g,m),qa:n})},C:function(a,b){b=T(b);S(a,{la:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},
B:function(a,b,c,d){a=lb[a];b=mb(b);c=kb(c);a(b,c,null,d)},d:Xa,A:function(a,b){b=pb(a,b);for(var c=b[0],d=c.name+"_$"+b.slice(1).map(function(a){return a.name}).join("_")+"$",f=["retType"],h=[c],k="",g=0;g<a-1;++g)k+=(0!==g?", ":"")+"arg"+g,f.push("argType"+g),h.push(b[1+g]);d="return function "+Oa("methodCaller_"+d)+"(handle, name, destructors, args) {\n";var m=0;for(g=0;g<a-1;++g)d+="    var arg"+g+" = argType"+g+".readValueFromPointer(args"+(m?"+"+m:"")+");\n",m+=b[g+1].argPackAdvance;d+="    var rv = handle[name]("+
k+");\n";for(g=0;g<a-1;++g)b[g+1].deleteObject&&(d+="    argType"+g+".deleteObject(arg"+g+");\n");c.la||(d+="    return retType.toWireType(destructors, rv);\n");f.push(d+"};\n");a=ab(f).apply(null,h);return nb(a)},h:function(a){4<a&&(V[a].aa+=1)},l:function(){return W([])},p:function(a){return W(kb(a))},j:function(){return W({})},k:function(a,b,c){a=mb(a);b=mb(b);c=mb(c);a[b]=c},e:function(a,b){a=ob(a,"_emval_take_value");a=a.readValueFromPointer(b);return W(a)},__memory_base:1024,__table_base:0,
a:function(){z()},o:qb,z:function(a,b,c){D.set(D.subarray(b,b+c),a)},n:function(a){if(2147418112<a)return!1;for(var b=Math.max(qb(),16777216);b<a;)536870912>=b?b=pa(2*b):b=Math.min(pa((3*b+2147483648)/4),2147418112);a:{try{C.grow(b-buffer.byteLength+65535>>16);ua(C.buffer);var c=1;break a}catch(d){}c=void 0}return c?!0:!1},g:z,memory:C,x:function(){},table:ka},vb=e.asm({},Ha,buffer);e.asm=vb;var ub=e.__ZSt18uncaught_exceptionv=function(){return e.asm.G.apply(null,arguments)};
e.___embind_register_native_and_builtin_types=function(){return e.asm.H.apply(null,arguments)};var gb=e.___getTypeName=function(){return e.asm.I.apply(null,arguments)},Y=e._free=function(){return e.asm.J.apply(null,arguments)},tb=e._malloc=function(){return e.asm.K.apply(null,arguments)},Ia=e.globalCtors=function(){return e.asm.X.apply(null,arguments)};e.dynCall_i=function(){return e.asm.L.apply(null,arguments)};e.dynCall_ii=function(){return e.asm.M.apply(null,arguments)};
e.dynCall_iii=function(){return e.asm.N.apply(null,arguments)};e.dynCall_iiii=function(){return e.asm.O.apply(null,arguments)};e.dynCall_iiiii=function(){return e.asm.P.apply(null,arguments)};e.dynCall_jiji=function(){return e.asm.Q.apply(null,arguments)};e.dynCall_vi=function(){return e.asm.R.apply(null,arguments)};e.dynCall_vii=function(){return e.asm.S.apply(null,arguments)};e.dynCall_viii=function(){return e.asm.T.apply(null,arguments)};e.dynCall_viiii=function(){return e.asm.U.apply(null,arguments)};
e.dynCall_viiiii=function(){return e.asm.V.apply(null,arguments)};e.dynCall_viiiiii=function(){return e.asm.W.apply(null,arguments)};e.asm=vb;var Z;e.then=function(a){if(Z)a(e);else{var b=e.onRuntimeInitialized;e.onRuntimeInitialized=function(){b&&b();a(e)}}return e};K=function wb(){Z||xb();Z||(K=wb)};
function xb(){function a(){if(!Z&&(Z=!0,!la)){H(ya);H(za);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var a=e.postRun.shift();Aa.unshift(a)}H(Aa)}}if(!(0<I)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ba();H(xa);0<I||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);a()},1)):a())}}e.run=xb;
if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();xb();


  return camaro
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = camaro;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return camaro; });
    else if (typeof exports === 'object')
      exports["camaro"] = camaro;
    