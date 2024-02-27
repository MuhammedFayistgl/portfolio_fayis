import{g as Cr,r as d,j as s}from"./index-2c2e5a00.js";import{r as Nr,d as Re,e as Or,k as Ye,i as ve,a as qe,b as wr,c as Rr,f as Mr,g as ze,s as Lr,h as _r,j as Je,l as Vr,U as Me,S as Le,m as Qe,n as he,o as z,p as Ze,q as Xe,t as $r,u as Dr,v as Ur,w as Pr,x as Br,y as kr,z as Gr,A as Hr,B as Wr,C as _e}from"./toString-4968b34f.js";var er=Nr,Kr={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Yr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},rr={};rr[er.ForwardRef]=Kr;rr[er.Memo]=Yr;var qr=function(r){return zr(r)&&!Jr(r)};function zr(e){return!!e&&typeof e=="object"}function Jr(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||Xr(e)}var Qr=typeof Symbol=="function"&&Symbol.for,Zr=Qr?Symbol.for("react.element"):60103;function Xr(e){return e.$$typeof===Zr}function et(e){return Array.isArray(e)?[]:{}}function J(e,r){return r.clone!==!1&&r.isMergeableObject(e)?H(et(e),e,r):e}function rt(e,r,t){return e.concat(r).map(function(a){return J(a,t)})}function tt(e,r,t){var a={};return t.isMergeableObject(e)&&Object.keys(e).forEach(function(i){a[i]=J(e[i],t)}),Object.keys(r).forEach(function(i){!t.isMergeableObject(r[i])||!e[i]?a[i]=J(r[i],t):a[i]=H(e[i],r[i],t)}),a}function H(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||rt,t.isMergeableObject=t.isMergeableObject||qr;var a=Array.isArray(r),i=Array.isArray(e),o=a===i;return o?a?t.arrayMerge(e,r,t):tt(e,r,t):J(r,t)}H.all=function(r,t){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(a,i){return H(a,i,t)},{})};var fe=H,Ve=Array.isArray,$e=Object.keys,nt=Object.prototype.hasOwnProperty,at=typeof Element<"u";function de(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){var t=Ve(e),a=Ve(r),i,o,u;if(t&&a){if(o=e.length,o!=r.length)return!1;for(i=o;i--!==0;)if(!de(e[i],r[i]))return!1;return!0}if(t!=a)return!1;var v=e instanceof Date,E=r instanceof Date;if(v!=E)return!1;if(v&&E)return e.getTime()==r.getTime();var S=e instanceof RegExp,M=r instanceof RegExp;if(S!=M)return!1;if(S&&M)return e.toString()==r.toString();var x=$e(e);if(o=x.length,o!==$e(r).length)return!1;for(i=o;i--!==0;)if(!nt.call(r,x[i]))return!1;if(at&&e instanceof Element&&r instanceof Element)return e===r;for(i=o;i--!==0;)if(u=x[i],!(u==="_owner"&&e.$$typeof)&&!de(e[u],r[u]))return!1;return!0}return e!==e&&r!==r}var it=function(r,t){try{return de(r,t)}catch(a){if(a.message&&a.message.match(/stack|recursion/i)||a.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",a.name,a.message),!1;throw a}};const D=Cr(it);var ot=!0;function st(e,r){if(!ot){if(e)return;var t="Warning: "+r;typeof console<"u"&&console.warn(t);try{throw Error(t)}catch{}}}function tr(e,r,t){r=="__proto__"&&Re?Re(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}var lt=Object.prototype,ut=lt.hasOwnProperty;function nr(e,r,t){var a=e[r];(!(ut.call(e,r)&&Or(a,t))||t===void 0&&!(r in e))&&tr(e,r,t)}function Q(e,r,t,a){var i=!t;t||(t={});for(var o=-1,u=r.length;++o<u;){var v=r[o],E=a?a(t[v],e[v],v,t,e):void 0;E===void 0&&(E=e[v]),i?tr(t,v,E):nr(t,v,E)}return t}function ct(e,r){return e&&Q(r,Ye(r),e)}function ft(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var dt=Object.prototype,mt=dt.hasOwnProperty;function vt(e){if(!ve(e))return ft(e);var r=qe(e),t=[];for(var a in e)a=="constructor"&&(r||!mt.call(e,a))||t.push(a);return t}function pe(e){return wr(e)?Rr(e,!0):vt(e)}function ht(e,r){return e&&Q(r,pe(r),e)}var ar=typeof exports=="object"&&exports&&!exports.nodeType&&exports,De=ar&&typeof module=="object"&&module&&!module.nodeType&&module,pt=De&&De.exports===ar,Ue=pt?Mr.Buffer:void 0,Pe=Ue?Ue.allocUnsafe:void 0;function yt(e,r){if(r)return e.slice();var t=e.length,a=Pe?Pe(t):new e.constructor(t);return e.copy(a),a}function ir(e,r){var t=-1,a=e.length;for(r||(r=Array(a));++t<a;)r[t]=e[t];return r}function gt(e,r){return Q(e,ze(e),r)}var bt=Object.getOwnPropertySymbols,Tt=bt?function(e){for(var r=[];e;)_r(r,ze(e)),e=Je(e);return r}:Lr;const or=Tt;function Et(e,r){return Q(e,or(e),r)}function St(e){return Vr(e,pe,or)}var jt=Object.prototype,At=jt.hasOwnProperty;function Ft(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&At.call(e,"index")&&(t.index=e.index,t.input=e.input),t}function ye(e){var r=new e.constructor(e.byteLength);return new Me(r).set(new Me(e)),r}function It(e,r){var t=r?ye(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var xt=/\w*$/;function Ct(e){var r=new e.constructor(e.source,xt.exec(e));return r.lastIndex=e.lastIndex,r}var Be=Le?Le.prototype:void 0,ke=Be?Be.valueOf:void 0;function Nt(e){return ke?Object(ke.call(e)):{}}function Ot(e,r){var t=r?ye(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var wt="[object Boolean]",Rt="[object Date]",Mt="[object Map]",Lt="[object Number]",_t="[object RegExp]",Vt="[object Set]",$t="[object String]",Dt="[object Symbol]",Ut="[object ArrayBuffer]",Pt="[object DataView]",Bt="[object Float32Array]",kt="[object Float64Array]",Gt="[object Int8Array]",Ht="[object Int16Array]",Wt="[object Int32Array]",Kt="[object Uint8Array]",Yt="[object Uint8ClampedArray]",qt="[object Uint16Array]",zt="[object Uint32Array]";function Jt(e,r,t){var a=e.constructor;switch(r){case Ut:return ye(e);case wt:case Rt:return new a(+e);case Pt:return It(e,t);case Bt:case kt:case Gt:case Ht:case Wt:case Kt:case Yt:case qt:case zt:return Ot(e,t);case Mt:return new a;case Lt:case $t:return new a(e);case _t:return Ct(e);case Vt:return new a;case Dt:return Nt(e)}}var Ge=Object.create,Qt=function(){function e(){}return function(r){if(!ve(r))return{};if(Ge)return Ge(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}();const Zt=Qt;function Xt(e){return typeof e.constructor=="function"&&!qe(e)?Zt(Je(e)):{}}var en="[object Map]";function rn(e){return Qe(e)&&he(e)==en}var He=z&&z.isMap,tn=He?Ze(He):rn;const nn=tn;var an="[object Set]";function on(e){return Qe(e)&&he(e)==an}var We=z&&z.isSet,sn=We?Ze(We):on;const ln=sn;var un=1,cn=2,fn=4,sr="[object Arguments]",dn="[object Array]",mn="[object Boolean]",vn="[object Date]",hn="[object Error]",lr="[object Function]",pn="[object GeneratorFunction]",yn="[object Map]",gn="[object Number]",ur="[object Object]",bn="[object RegExp]",Tn="[object Set]",En="[object String]",Sn="[object Symbol]",jn="[object WeakMap]",An="[object ArrayBuffer]",Fn="[object DataView]",In="[object Float32Array]",xn="[object Float64Array]",Cn="[object Int8Array]",Nn="[object Int16Array]",On="[object Int32Array]",wn="[object Uint8Array]",Rn="[object Uint8ClampedArray]",Mn="[object Uint16Array]",Ln="[object Uint32Array]",b={};b[sr]=b[dn]=b[An]=b[Fn]=b[mn]=b[vn]=b[In]=b[xn]=b[Cn]=b[Nn]=b[On]=b[yn]=b[gn]=b[ur]=b[bn]=b[Tn]=b[En]=b[Sn]=b[wn]=b[Rn]=b[Mn]=b[Ln]=!0;b[hn]=b[lr]=b[jn]=!1;function q(e,r,t,a,i,o){var u,v=r&un,E=r&cn,S=r&fn;if(t&&(u=i?t(e,a,i,o):t(e)),u!==void 0)return u;if(!ve(e))return e;var M=Xe(e);if(M){if(u=Ft(e),!v)return ir(e,u)}else{var x=he(e),f=x==lr||x==pn;if($r(e))return yt(e,v);if(x==ur||x==sr||f&&!i){if(u=E||f?{}:Xt(e),!v)return E?Et(e,ht(u,e)):gt(e,ct(u,e))}else{if(!b[x])return i?e:{};u=Jt(e,x,v)}}o||(o=new Dr);var F=o.get(e);if(F)return F;o.set(e,u),ln(e)?e.forEach(function(I){u.add(q(I,r,t,I,e,o))}):nn(e)&&e.forEach(function(I,j){u.set(j,q(I,r,t,j,e,o))});var O=S?E?St:Pr:E?pe:Ye,w=M?void 0:O(e);return Ur(w||e,function(I,j){w&&(j=I,I=e[j]),nr(u,j,q(I,r,t,j,e,o))}),u}var _n=4;function Ke(e){return q(e,_n)}function cr(e){return Xe(e)?Br(e,Wr):kr(e)?[e]:ir(Gr(Hr(e)))}function T(){return T=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},T.apply(this,arguments)}function k(e,r){if(e==null)return{};var t={},a=Object.keys(e),i,o;for(o=0;o<a.length;o++)i=a[o],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var Z=d.createContext(void 0);Z.displayName="FormikContext";var Vn=Z.Provider;Z.Consumer;function fr(){var e=d.useContext(Z);return e||st(!1),e}var N=function(r){return typeof r=="function"},X=function(r){return r!==null&&typeof r=="object"},$n=function(r){return String(Math.floor(Number(r)))===r},le=function(r){return Object.prototype.toString.call(r)==="[object String]"},Dn=function(r){return d.Children.count(r)===0},ue=function(r){return X(r)&&N(r.then)};function C(e,r,t,a){a===void 0&&(a=0);for(var i=cr(r);e&&a<i.length;)e=e[i[a++]];return a!==i.length&&!e||e===void 0?t:e}function U(e,r,t){for(var a=Ke(e),i=a,o=0,u=cr(r);o<u.length-1;o++){var v=u[o],E=C(e,u.slice(0,o+1));if(E&&(X(E)||Array.isArray(E)))i=i[v]=Ke(E);else{var S=u[o+1];i=i[v]=$n(S)&&Number(S)>=0?[]:{}}}return(o===0?e:i)[u[o]]===t?e:(t===void 0?delete i[u[o]]:i[u[o]]=t,o===0&&t===void 0&&delete a[u[o]],a)}function dr(e,r,t,a){t===void 0&&(t=new WeakMap),a===void 0&&(a={});for(var i=0,o=Object.keys(e);i<o.length;i++){var u=o[i],v=e[u];X(v)?t.get(v)||(t.set(v,!0),a[u]=Array.isArray(v)?[]:{},dr(v,r,t,a[u])):a[u]=r}return a}function Un(e,r){switch(r.type){case"SET_VALUES":return T({},e,{values:r.payload});case"SET_TOUCHED":return T({},e,{touched:r.payload});case"SET_ERRORS":return D(e.errors,r.payload)?e:T({},e,{errors:r.payload});case"SET_STATUS":return T({},e,{status:r.payload});case"SET_ISSUBMITTING":return T({},e,{isSubmitting:r.payload});case"SET_ISVALIDATING":return T({},e,{isValidating:r.payload});case"SET_FIELD_VALUE":return T({},e,{values:U(e.values,r.payload.field,r.payload.value)});case"SET_FIELD_TOUCHED":return T({},e,{touched:U(e.touched,r.payload.field,r.payload.value)});case"SET_FIELD_ERROR":return T({},e,{errors:U(e.errors,r.payload.field,r.payload.value)});case"RESET_FORM":return T({},e,r.payload);case"SET_FORMIK_STATE":return r.payload(e);case"SUBMIT_ATTEMPT":return T({},e,{touched:dr(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return T({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return T({},e,{isSubmitting:!1});default:return e}}var $={},Y={};function Pn(e){var r=e.validateOnChange,t=r===void 0?!0:r,a=e.validateOnBlur,i=a===void 0?!0:a,o=e.validateOnMount,u=o===void 0?!1:o,v=e.isInitialValid,E=e.enableReinitialize,S=E===void 0?!1:E,M=e.onSubmit,x=k(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=T({validateOnChange:t,validateOnBlur:i,validateOnMount:u,onSubmit:M},x),F=d.useRef(f.initialValues),O=d.useRef(f.initialErrors||$),w=d.useRef(f.initialTouched||Y),I=d.useRef(f.initialStatus),j=d.useRef(!1),_=d.useRef({});d.useEffect(function(){return j.current=!0,function(){j.current=!1}},[]);var ee=d.useState(0),vr=ee[1],W=d.useRef({values:f.initialValues,errors:f.initialErrors||$,touched:f.initialTouched||Y,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),g=W.current,y=d.useCallback(function(n){var l=W.current;W.current=Un(l,n),l!==W.current&&vr(function(c){return c+1})},[]),ge=d.useCallback(function(n,l){return new Promise(function(c,m){var h=f.validate(n,l);h==null?c($):ue(h)?h.then(function(p){c(p||$)},function(p){m(p)}):c(h)})},[f.validate]),re=d.useCallback(function(n,l){var c=f.validationSchema,m=N(c)?c(l):c,h=l&&m.validateAt?m.validateAt(l,n):Gn(n,m);return new Promise(function(p,A){h.then(function(){p($)},function(V){V.name==="ValidationError"?p(kn(V)):A(V)})})},[f.validationSchema]),be=d.useCallback(function(n,l){return new Promise(function(c){return c(_.current[n].validate(l))})},[]),Te=d.useCallback(function(n){var l=Object.keys(_.current).filter(function(m){return N(_.current[m].validate)}),c=l.length>0?l.map(function(m){return be(m,C(n,m))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(c).then(function(m){return m.reduce(function(h,p,A){return p==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||p&&(h=U(h,l[A],p)),h},{})})},[be]),hr=d.useCallback(function(n){return Promise.all([Te(n),f.validationSchema?re(n):{},f.validate?ge(n):{}]).then(function(l){var c=l[0],m=l[1],h=l[2],p=fe.all([c,m,h],{arrayMerge:Hn});return p})},[f.validate,f.validationSchema,Te,ge,re]),L=R(function(n){return n===void 0&&(n=g.values),y({type:"SET_ISVALIDATING",payload:!0}),hr(n).then(function(l){return j.current&&(y({type:"SET_ISVALIDATING",payload:!1}),y({type:"SET_ERRORS",payload:l})),l})});d.useEffect(function(){u&&j.current===!0&&D(F.current,f.initialValues)&&L(F.current)},[u,L]);var G=d.useCallback(function(n){var l=n&&n.values?n.values:F.current,c=n&&n.errors?n.errors:O.current?O.current:f.initialErrors||{},m=n&&n.touched?n.touched:w.current?w.current:f.initialTouched||{},h=n&&n.status?n.status:I.current?I.current:f.initialStatus;F.current=l,O.current=c,w.current=m,I.current=h;var p=function(){y({type:"RESET_FORM",payload:{isSubmitting:!!n&&!!n.isSubmitting,errors:c,touched:m,status:h,values:l,isValidating:!!n&&!!n.isValidating,submitCount:n&&n.submitCount&&typeof n.submitCount=="number"?n.submitCount:0}})};if(f.onReset){var A=f.onReset(g.values,Oe);ue(A)?A.then(p):p()}else p()},[f.initialErrors,f.initialStatus,f.initialTouched]);d.useEffect(function(){j.current===!0&&!D(F.current,f.initialValues)&&S&&(F.current=f.initialValues,G(),u&&L(F.current))},[S,f.initialValues,G,u,L]),d.useEffect(function(){S&&j.current===!0&&!D(O.current,f.initialErrors)&&(O.current=f.initialErrors||$,y({type:"SET_ERRORS",payload:f.initialErrors||$}))},[S,f.initialErrors]),d.useEffect(function(){S&&j.current===!0&&!D(w.current,f.initialTouched)&&(w.current=f.initialTouched||Y,y({type:"SET_TOUCHED",payload:f.initialTouched||Y}))},[S,f.initialTouched]),d.useEffect(function(){S&&j.current===!0&&!D(I.current,f.initialStatus)&&(I.current=f.initialStatus,y({type:"SET_STATUS",payload:f.initialStatus}))},[S,f.initialStatus,f.initialTouched]);var Ee=R(function(n){if(_.current[n]&&N(_.current[n].validate)){var l=C(g.values,n),c=_.current[n].validate(l);return ue(c)?(y({type:"SET_ISVALIDATING",payload:!0}),c.then(function(m){return m}).then(function(m){y({type:"SET_FIELD_ERROR",payload:{field:n,value:m}}),y({type:"SET_ISVALIDATING",payload:!1})})):(y({type:"SET_FIELD_ERROR",payload:{field:n,value:c}}),Promise.resolve(c))}else if(f.validationSchema)return y({type:"SET_ISVALIDATING",payload:!0}),re(g.values,n).then(function(m){return m}).then(function(m){y({type:"SET_FIELD_ERROR",payload:{field:n,value:C(m,n)}}),y({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),pr=d.useCallback(function(n,l){var c=l.validate;_.current[n]={validate:c}},[]),yr=d.useCallback(function(n){delete _.current[n]},[]),Se=R(function(n,l){y({type:"SET_TOUCHED",payload:n});var c=l===void 0?i:l;return c?L(g.values):Promise.resolve()}),je=d.useCallback(function(n){y({type:"SET_ERRORS",payload:n})},[]),Ae=R(function(n,l){var c=N(n)?n(g.values):n;y({type:"SET_VALUES",payload:c});var m=l===void 0?t:l;return m?L(c):Promise.resolve()}),K=d.useCallback(function(n,l){y({type:"SET_FIELD_ERROR",payload:{field:n,value:l}})},[]),P=R(function(n,l,c){y({type:"SET_FIELD_VALUE",payload:{field:n,value:l}});var m=c===void 0?t:c;return m?L(U(g.values,n,l)):Promise.resolve()}),Fe=d.useCallback(function(n,l){var c=l,m=n,h;if(!le(n)){n.persist&&n.persist();var p=n.target?n.target:n.currentTarget,A=p.type,V=p.name,oe=p.id,se=p.value,Ir=p.checked,Jn=p.outerHTML,we=p.options,xr=p.multiple;c=l||V||oe,m=/number|range/.test(A)?(h=parseFloat(se),isNaN(h)?"":h):/checkbox/.test(A)?Kn(C(g.values,c),Ir,se):we&&xr?Wn(we):se}c&&P(c,m)},[P,g.values]),te=R(function(n){if(le(n))return function(l){return Fe(l,n)};Fe(n)}),B=R(function(n,l,c){l===void 0&&(l=!0),y({type:"SET_FIELD_TOUCHED",payload:{field:n,value:l}});var m=c===void 0?i:c;return m?L(g.values):Promise.resolve()}),Ie=d.useCallback(function(n,l){n.persist&&n.persist();var c=n.target,m=c.name,h=c.id,p=c.outerHTML,A=l||m||h;B(A,!0)},[B]),ne=R(function(n){if(le(n))return function(l){return Ie(l,n)};Ie(n)}),xe=d.useCallback(function(n){N(n)?y({type:"SET_FORMIK_STATE",payload:n}):y({type:"SET_FORMIK_STATE",payload:function(){return n}})},[]),Ce=d.useCallback(function(n){y({type:"SET_STATUS",payload:n})},[]),Ne=d.useCallback(function(n){y({type:"SET_ISSUBMITTING",payload:n})},[]),ae=R(function(){return y({type:"SUBMIT_ATTEMPT"}),L().then(function(n){var l=n instanceof Error,c=!l&&Object.keys(n).length===0;if(c){var m;try{if(m=br(),m===void 0)return}catch(h){throw h}return Promise.resolve(m).then(function(h){return j.current&&y({type:"SUBMIT_SUCCESS"}),h}).catch(function(h){if(j.current)throw y({type:"SUBMIT_FAILURE"}),h})}else if(j.current&&(y({type:"SUBMIT_FAILURE"}),l))throw n})}),gr=R(function(n){n&&n.preventDefault&&N(n.preventDefault)&&n.preventDefault(),n&&n.stopPropagation&&N(n.stopPropagation)&&n.stopPropagation(),ae().catch(function(l){console.warn("Warning: An unhandled error was caught from submitForm()",l)})}),Oe={resetForm:G,validateForm:L,validateField:Ee,setErrors:je,setFieldError:K,setFieldTouched:B,setFieldValue:P,setStatus:Ce,setSubmitting:Ne,setTouched:Se,setValues:Ae,setFormikState:xe,submitForm:ae},br=R(function(){return M(g.values,Oe)}),Tr=R(function(n){n&&n.preventDefault&&N(n.preventDefault)&&n.preventDefault(),n&&n.stopPropagation&&N(n.stopPropagation)&&n.stopPropagation(),G()}),Er=d.useCallback(function(n){return{value:C(g.values,n),error:C(g.errors,n),touched:!!C(g.touched,n),initialValue:C(F.current,n),initialTouched:!!C(w.current,n),initialError:C(O.current,n)}},[g.errors,g.touched,g.values]),Sr=d.useCallback(function(n){return{setValue:function(c,m){return P(n,c,m)},setTouched:function(c,m){return B(n,c,m)},setError:function(c){return K(n,c)}}},[P,B,K]),jr=d.useCallback(function(n){var l=X(n),c=l?n.name:n,m=C(g.values,c),h={name:c,value:m,onChange:te,onBlur:ne};if(l){var p=n.type,A=n.value,V=n.as,oe=n.multiple;p==="checkbox"?A===void 0?h.checked=!!m:(h.checked=!!(Array.isArray(m)&&~m.indexOf(A)),h.value=A):p==="radio"?(h.checked=m===A,h.value=A):V==="select"&&oe&&(h.value=h.value||[],h.multiple=!0)}return h},[ne,te,g.values]),ie=d.useMemo(function(){return!D(F.current,g.values)},[F.current,g.values]),Ar=d.useMemo(function(){return typeof v<"u"?ie?g.errors&&Object.keys(g.errors).length===0:v!==!1&&N(v)?v(f):v:g.errors&&Object.keys(g.errors).length===0},[v,ie,g.errors,f]),Fr=T({},g,{initialValues:F.current,initialErrors:O.current,initialTouched:w.current,initialStatus:I.current,handleBlur:ne,handleChange:te,handleReset:Tr,handleSubmit:gr,resetForm:G,setErrors:je,setFormikState:xe,setFieldTouched:B,setFieldValue:P,setFieldError:K,setStatus:Ce,setSubmitting:Ne,setTouched:Se,setValues:Ae,submitForm:ae,validateForm:L,validateField:Ee,isValid:Ar,dirty:ie,unregisterField:yr,registerField:pr,getFieldProps:jr,getFieldMeta:Er,getFieldHelpers:Sr,validateOnBlur:i,validateOnChange:t,validateOnMount:u});return Fr}function Bn(e){var r=Pn(e),t=e.component,a=e.children,i=e.render,o=e.innerRef;return d.useImperativeHandle(o,function(){return r}),d.createElement(Vn,{value:r},t?d.createElement(t,r):i?i(r):a?N(a)?a(r):Dn(a)?null:d.Children.only(a):null)}function kn(e){var r={};if(e.inner){if(e.inner.length===0)return U(r,e.path,e.message);for(var i=e.inner,t=Array.isArray(i),a=0,i=t?i:i[Symbol.iterator]();;){var o;if(t){if(a>=i.length)break;o=i[a++]}else{if(a=i.next(),a.done)break;o=a.value}var u=o;C(r,u.path)||(r=U(r,u.path,u.message))}}return r}function Gn(e,r,t,a){t===void 0&&(t=!1);var i=me(e);return r[t?"validateSync":"validate"](i,{abortEarly:!1,context:a||i})}function me(e){var r=Array.isArray(e)?[]:{};for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var a=String(t);Array.isArray(e[a])===!0?r[a]=e[a].map(function(i){return Array.isArray(i)===!0||_e(i)?me(i):i!==""?i:void 0}):_e(e[a])?r[a]=me(e[a]):r[a]=e[a]!==""?e[a]:void 0}return r}function Hn(e,r,t){var a=e.slice();return r.forEach(function(o,u){if(typeof a[u]>"u"){var v=t.clone!==!1,E=v&&t.isMergeableObject(o);a[u]=E?fe(Array.isArray(o)?[]:{},o,t):o}else t.isMergeableObject(o)?a[u]=fe(e[u],o,t):e.indexOf(o)===-1&&a.push(o)}),a}function Wn(e){return Array.from(e).filter(function(r){return r.selected}).map(function(r){return r.value})}function Kn(e,r,t){if(typeof e=="boolean")return!!r;var a=[],i=!1,o=-1;if(Array.isArray(e))a=e,o=e.indexOf(t),i=o>=0;else if(!t||t=="true"||t=="false")return!!r;return r&&t&&!i?a.concat(t):i?a.slice(0,o).concat(a.slice(o+1)):a}var Yn=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?d.useLayoutEffect:d.useEffect;function R(e){var r=d.useRef(e);return Yn(function(){r.current=e}),d.useCallback(function(){for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return r.current.apply(void 0,a)},[])}function ce(e){var r=e.validate,t=e.name,a=e.render,i=e.children,o=e.as,u=e.component,v=k(e,["validate","name","render","children","as","component"]),E=fr(),S=k(E,["validate","validationSchema"]),M=S.registerField,x=S.unregisterField;d.useEffect(function(){return M(t,{validate:r}),function(){x(t)}},[M,x,t,r]);var f=S.getFieldProps(T({name:t},v)),F=S.getFieldMeta(t),O={field:f,form:S};if(a)return a(T({},O,{meta:F}));if(N(i))return i(T({},O,{meta:F}));if(u){if(typeof u=="string"){var w=v.innerRef,I=k(v,["innerRef"]);return d.createElement(u,T({ref:w},f,I),i)}return d.createElement(u,T({field:f,form:S},v),i)}var j=o||"input";if(typeof j=="string"){var _=v.innerRef,ee=k(v,["innerRef"]);return d.createElement(j,T({ref:_},f,ee),i)}return d.createElement(j,T({},f,v),i)}var mr=d.forwardRef(function(e,r){var t=e.action,a=k(e,["action"]),i=t??"#",o=fr(),u=o.handleReset,v=o.handleSubmit;return d.createElement("form",T({onSubmit:v,ref:r,onReset:u,action:i},a))});mr.displayName="Form";const qn=e=>{console.log(e)},zn=()=>s.jsx("div",{className:"php-email-form",children:s.jsx("div",{className:"row",children:s.jsx(Bn,{initialValues:{firstName:"",name:"",lastName:"",email:"",subject:""},onSubmit:(e,{setSubmitting:r})=>{r(!1),qn(e)},children:s.jsxs(mr,{children:[s.jsx("div",{className:"col-md-12 mb-3",children:s.jsx("div",{className:"form-group",children:s.jsx(ce,{type:"text",name:"name",className:"form-control",id:"name",placeholder:"Your Name",required:!0})})}),s.jsx("div",{className:"col-md-12 mb-3",children:s.jsx("div",{className:"form-group",children:s.jsx(ce,{type:"email",className:"form-control",name:"email",id:"email",placeholder:"Your Email",required:!0})})}),s.jsx("div",{className:"col-md-12 mb-3",children:s.jsx("div",{className:"form-group",children:s.jsx(ce,{type:"text",className:"form-control",name:"subject",id:"subject",placeholder:"Subject",required:!0})})}),s.jsx("div",{className:"col-md-12",children:s.jsx("div",{className:"form-group",children:s.jsx("textarea",{className:"form-control",name:"message",rows:5,placeholder:"Message",required:!0})})}),s.jsxs("div",{className:"col-md-12 text-center my-3",children:[s.jsx("div",{className:"loading",children:"Loading"}),s.jsx("div",{className:"error-message"}),s.jsx("div",{className:"sent-message",children:"Your message has been sent. Thank you!"})]}),s.jsx("div",{className:"col-md-12 text-center",children:s.jsx("button",{type:"submit",className:"button button-a button-big button-rouded",children:"Send Message"})})]})})})}),Xn=()=>s.jsxs(s.Fragment,{children:[" ",s.jsxs("section",{id:"contact",className:"paralax-mf footer-paralax bg-image sect-mt4 route overlaybg",children:[s.jsx("div",{className:"overlay-mf"}),s.jsx("div",{className:"container",children:s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-sm-12",children:s.jsx("div",{className:"contact-mf",children:s.jsx("div",{id:"contact",className:"box-shadow-full",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col-md-6",children:[s.jsx("div",{className:"title-box-2",children:s.jsx("h5",{className:"title-left",children:"Send Message Us"})}),s.jsx("div",{children:s.jsx(zn,{})})]}),s.jsxs("div",{className:"col-md-6",children:[s.jsx("div",{className:"title-box-2 pt-4 pt-md-0",children:s.jsx("h5",{className:"title-left",children:"Get in Touch"})}),s.jsxs("div",{className:"more-info",children:[s.jsx("p",{className:"lead",children:"I noticed you visited my personal website! I'm thrilled to have you drop by. Feel free to leave a comment in the section below—I'd love to hear your thoughts, feedback, or any questions you might have. Your input means a lot to me, and it's a great way for us to connect. Looking forward to your comment!"}),s.jsxs("ul",{className:"list-ico",children:[s.jsxs("li",{children:[s.jsx("span",{className:"bi bi-geo-alt"}),"INDIA - kerala"]}),s.jsxs("li",{children:[s.jsx("span",{className:"bi bi-phone"})," 8086860760"]}),s.jsxs("li",{children:[s.jsx("span",{className:"bi bi-envelope"})," muhammedfayisthangal@gmail.com"]})]})]}),s.jsx("div",{className:"socials",children:s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx("a",{href:"",children:s.jsx("span",{className:"ico-circle",children:s.jsx("i",{className:"bi bi-facebook"})})})}),s.jsx("li",{children:s.jsx("a",{href:"https://instagram.com/fayis_elm?igshid=ZGUzMzM3NWJiOQ==",children:s.jsx("span",{className:"ico-circle",children:s.jsx("i",{className:"bi bi-instagram"})})})}),s.jsx("li",{children:s.jsx("a",{href:"",children:s.jsx("span",{className:"ico-circle",children:s.jsx("i",{className:"bi bi-twitter"})})})}),s.jsx("li",{children:s.jsx("a",{href:"https://www.linkedin.com/in/muhammad-fayis-thangal-9843011bb",children:s.jsx("span",{className:"ico-circle",children:s.jsx("i",{className:"bi bi-linkedin"})})})})]})})]})]})})})})})})]})]});export{Xn as default};
