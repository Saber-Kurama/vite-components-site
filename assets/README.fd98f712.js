import{d as st,m as W,e as ye,Z as J,H as F,j as o,$ as be,a0 as ht,a1 as he,a2 as $t,a3 as L,b as n,_ as rt,r as h,o as ot,c as ct,u as Wt,k as $e,w as u,a as e,n as ke,g as me}from"./index.3318a743.js";var Te=Object.defineProperty,Ae=Object.defineProperties,je=Object.getOwnPropertyDescriptors,kt=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable,mt=(t,a,s)=>a in t?Te(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,K=(t,a)=>{for(var s in a||(a={}))Ce.call(a,s)&&mt(t,s,a[s]);if(kt)for(var s of kt(a))Oe.call(a,s)&&mt(t,s,a[s]);return t},Jt=(t,a)=>Ae(t,je(a)),B=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Se(){this.__data__=[],this.size=0}var we=Se;function Ie(t,a){return t===a||t!==t&&a!==a}var Yt=Ie,Pe=Yt;function Ee(t,a){for(var s=t.length;s--;)if(Pe(t[s][0],a))return s;return-1}var N=Ee,De=N,xe=Array.prototype,Fe=xe.splice;function Le(t){var a=this.__data__,s=De(a,t);if(s<0)return!1;var r=a.length-1;return s==r?a.pop():Fe.call(a,s,1),--this.size,!0}var Be=Le,Me=N;function Ke(t){var a=this.__data__,s=Me(a,t);return s<0?void 0:a[s][1]}var Ge=Ke,Ne=N;function Ve(t){return Ne(this.__data__,t)>-1}var Ue=Ve,He=N;function Re(t,a){var s=this.__data__,r=He(s,t);return r<0?(++this.size,s.push([t,a])):s[r][1]=a,this}var ze=Re,qe=we,We=Be,Je=Ge,Ye=Ue,Xe=ze;function C(t){var a=-1,s=t==null?0:t.length;for(this.clear();++a<s;){var r=t[a];this.set(r[0],r[1])}}C.prototype.clear=qe;C.prototype.delete=We;C.prototype.get=Je;C.prototype.has=Ye;C.prototype.set=Xe;var V=C,Ze=V;function Qe(){this.__data__=new Ze,this.size=0}var ta=Qe;function ea(t){var a=this.__data__,s=a.delete(t);return this.size=a.size,s}var aa=ea;function na(t){return this.__data__.get(t)}var sa=na;function ra(t){return this.__data__.has(t)}var oa=ra,ca=typeof B=="object"&&B&&B.Object===Object&&B,Xt=ca,la=Xt,ua=typeof self=="object"&&self&&self.Object===Object&&self,ia=la||ua||Function("return this")(),$=ia,pa=$,fa=pa.Symbol,lt=fa,Tt=lt,Zt=Object.prototype,va=Zt.hasOwnProperty,_a=Zt.toString,P=Tt?Tt.toStringTag:void 0;function da(t){var a=va.call(t,P),s=t[P];try{t[P]=void 0;var r=!0}catch{}var c=_a.call(t);return r&&(a?t[P]=s:delete t[P]),c}var ga=da,ya=Object.prototype,ba=ya.toString;function ha(t){return ba.call(t)}var $a=ha,At=lt,ka=ga,ma=$a,Ta="[object Null]",Aa="[object Undefined]",jt=At?At.toStringTag:void 0;function ja(t){return t==null?t===void 0?Aa:Ta:jt&&jt in Object(t)?ka(t):ma(t)}var U=ja;function Ca(t){var a=typeof t;return t!=null&&(a=="object"||a=="function")}var D=Ca,Oa=U,Sa=D,wa="[object AsyncFunction]",Ia="[object Function]",Pa="[object GeneratorFunction]",Ea="[object Proxy]";function Da(t){if(!Sa(t))return!1;var a=Oa(t);return a==Ia||a==Pa||a==wa||a==Ea}var Qt=Da,xa=$,Fa=xa["__core-js_shared__"],La=Fa,Y=La,Ct=function(){var t=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function Ba(t){return!!Ct&&Ct in t}var Ma=Ba,Ka=Function.prototype,Ga=Ka.toString;function Na(t){if(t!=null){try{return Ga.call(t)}catch{}try{return t+""}catch{}}return""}var te=Na,Va=Qt,Ua=Ma,Ha=D,Ra=te,za=/[\\^$.*+?()[\]{}|]/g,qa=/^\[object .+?Constructor\]$/,Wa=Function.prototype,Ja=Object.prototype,Ya=Wa.toString,Xa=Ja.hasOwnProperty,Za=RegExp("^"+Ya.call(Xa).replace(za,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Qa(t){if(!Ha(t)||Ua(t))return!1;var a=Va(t)?Za:qa;return a.test(Ra(t))}var tn=Qa;function en(t,a){return t==null?void 0:t[a]}var an=en,nn=tn,sn=an;function rn(t,a){var s=sn(t,a);return nn(s)?s:void 0}var j=rn,on=j,cn=$,ln=on(cn,"Map"),ut=ln,un=j,pn=un(Object,"create"),H=pn,Ot=H;function fn(){this.__data__=Ot?Ot(null):{},this.size=0}var vn=fn;function _n(t){var a=this.has(t)&&delete this.__data__[t];return this.size-=a?1:0,a}var dn=_n,gn=H,yn="__lodash_hash_undefined__",bn=Object.prototype,hn=bn.hasOwnProperty;function $n(t){var a=this.__data__;if(gn){var s=a[t];return s===yn?void 0:s}return hn.call(a,t)?a[t]:void 0}var kn=$n,mn=H,Tn=Object.prototype,An=Tn.hasOwnProperty;function jn(t){var a=this.__data__;return mn?a[t]!==void 0:An.call(a,t)}var Cn=jn,On=H,Sn="__lodash_hash_undefined__";function wn(t,a){var s=this.__data__;return this.size+=this.has(t)?0:1,s[t]=On&&a===void 0?Sn:a,this}var In=wn,Pn=vn,En=dn,Dn=kn,xn=Cn,Fn=In;function O(t){var a=-1,s=t==null?0:t.length;for(this.clear();++a<s;){var r=t[a];this.set(r[0],r[1])}}O.prototype.clear=Pn;O.prototype.delete=En;O.prototype.get=Dn;O.prototype.has=xn;O.prototype.set=Fn;var Ln=O,St=Ln,Bn=V,Mn=ut;function Kn(){this.size=0,this.__data__={hash:new St,map:new(Mn||Bn),string:new St}}var Gn=Kn;function Nn(t){var a=typeof t;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?t!=="__proto__":t===null}var Vn=Nn,Un=Vn;function Hn(t,a){var s=t.__data__;return Un(a)?s[typeof a=="string"?"string":"hash"]:s.map}var R=Hn,Rn=R;function zn(t){var a=Rn(this,t).delete(t);return this.size-=a?1:0,a}var qn=zn,Wn=R;function Jn(t){return Wn(this,t).get(t)}var Yn=Jn,Xn=R;function Zn(t){return Xn(this,t).has(t)}var Qn=Zn,ts=R;function es(t,a){var s=ts(this,t),r=s.size;return s.set(t,a),this.size+=s.size==r?0:1,this}var as=es,ns=Gn,ss=qn,rs=Yn,os=Qn,cs=as;function S(t){var a=-1,s=t==null?0:t.length;for(this.clear();++a<s;){var r=t[a];this.set(r[0],r[1])}}S.prototype.clear=ns;S.prototype.delete=ss;S.prototype.get=rs;S.prototype.has=os;S.prototype.set=cs;var ls=S,us=V,is=ut,ps=ls,fs=200;function vs(t,a){var s=this.__data__;if(s instanceof us){var r=s.__data__;if(!is||r.length<fs-1)return r.push([t,a]),this.size=++s.size,this;s=this.__data__=new ps(r)}return s.set(t,a),this.size=s.size,this}var _s=vs,ds=V,gs=ta,ys=aa,bs=sa,hs=oa,$s=_s;function w(t){var a=this.__data__=new ds(t);this.size=a.size}w.prototype.clear=gs;w.prototype.delete=ys;w.prototype.get=bs;w.prototype.has=hs;w.prototype.set=$s;var ks=w;function ms(t,a){for(var s=-1,r=t==null?0:t.length;++s<r&&a(t[s],s,t)!==!1;);return t}var Ts=ms,As=j,js=function(){try{var t=As(Object,"defineProperty");return t({},"",{}),t}catch{}}(),Cs=js,wt=Cs;function Os(t,a,s){a=="__proto__"&&wt?wt(t,a,{configurable:!0,enumerable:!0,value:s,writable:!0}):t[a]=s}var ee=Os,Ss=ee,ws=Yt,Is=Object.prototype,Ps=Is.hasOwnProperty;function Es(t,a,s){var r=t[a];(!(Ps.call(t,a)&&ws(r,s))||s===void 0&&!(a in t))&&Ss(t,a,s)}var ae=Es,Ds=ae,xs=ee;function Fs(t,a,s,r){var c=!s;s||(s={});for(var i=-1,l=a.length;++i<l;){var p=a[i],v=r?r(s[p],t[p],p,s,t):void 0;v===void 0&&(v=t[p]),c?xs(s,p,v):Ds(s,p,v)}return s}var z=Fs;function Ls(t,a){for(var s=-1,r=Array(t);++s<t;)r[s]=a(s);return r}var Bs=Ls;function Ms(t){return t!=null&&typeof t=="object"}var x=Ms,Ks=U,Gs=x,Ns="[object Arguments]";function Vs(t){return Gs(t)&&Ks(t)==Ns}var Us=Vs,It=Us,Hs=x,ne=Object.prototype,Rs=ne.hasOwnProperty,zs=ne.propertyIsEnumerable,qs=It(function(){return arguments}())?It:function(t){return Hs(t)&&Rs.call(t,"callee")&&!zs.call(t,"callee")},Ws=qs,Js=Array.isArray,it=Js,G={exports:{}};function Ys(){return!1}var Xs=Ys;(function(t,a){var s=$,r=Xs,c=a&&!a.nodeType&&a,i=c&&!0&&t&&!t.nodeType&&t,l=i&&i.exports===c,p=l?s.Buffer:void 0,v=p?p.isBuffer:void 0,_=v||r;t.exports=_})(G,G.exports);var Zs=9007199254740991,Qs=/^(?:0|[1-9]\d*)$/;function tr(t,a){var s=typeof t;return a=a==null?Zs:a,!!a&&(s=="number"||s!="symbol"&&Qs.test(t))&&t>-1&&t%1==0&&t<a}var er=tr,ar=9007199254740991;function nr(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=ar}var se=nr,sr=U,rr=se,or=x,cr="[object Arguments]",lr="[object Array]",ur="[object Boolean]",ir="[object Date]",pr="[object Error]",fr="[object Function]",vr="[object Map]",_r="[object Number]",dr="[object Object]",gr="[object RegExp]",yr="[object Set]",br="[object String]",hr="[object WeakMap]",$r="[object ArrayBuffer]",kr="[object DataView]",mr="[object Float32Array]",Tr="[object Float64Array]",Ar="[object Int8Array]",jr="[object Int16Array]",Cr="[object Int32Array]",Or="[object Uint8Array]",Sr="[object Uint8ClampedArray]",wr="[object Uint16Array]",Ir="[object Uint32Array]",g={};g[mr]=g[Tr]=g[Ar]=g[jr]=g[Cr]=g[Or]=g[Sr]=g[wr]=g[Ir]=!0;g[cr]=g[lr]=g[$r]=g[ur]=g[kr]=g[ir]=g[pr]=g[fr]=g[vr]=g[_r]=g[dr]=g[gr]=g[yr]=g[br]=g[hr]=!1;function Pr(t){return or(t)&&rr(t.length)&&!!g[sr(t)]}var Er=Pr;function Dr(t){return function(a){return t(a)}}var pt=Dr,E={exports:{}};(function(t,a){var s=Xt,r=a&&!a.nodeType&&a,c=r&&!0&&t&&!t.nodeType&&t,i=c&&c.exports===r,l=i&&s.process,p=function(){try{var v=c&&c.require&&c.require("util").types;return v||l&&l.binding&&l.binding("util")}catch{}}();t.exports=p})(E,E.exports);var xr=Er,Fr=pt,Pt=E.exports,Et=Pt&&Pt.isTypedArray,Lr=Et?Fr(Et):xr,Br=Lr,Mr=Bs,Kr=Ws,Gr=it,Nr=G.exports,Vr=er,Ur=Br,Hr=Object.prototype,Rr=Hr.hasOwnProperty;function zr(t,a){var s=Gr(t),r=!s&&Kr(t),c=!s&&!r&&Nr(t),i=!s&&!r&&!c&&Ur(t),l=s||r||c||i,p=l?Mr(t.length,String):[],v=p.length;for(var _ in t)(a||Rr.call(t,_))&&!(l&&(_=="length"||c&&(_=="offset"||_=="parent")||i&&(_=="buffer"||_=="byteLength"||_=="byteOffset")||Vr(_,v)))&&p.push(_);return p}var re=zr,qr=Object.prototype;function Wr(t){var a=t&&t.constructor,s=typeof a=="function"&&a.prototype||qr;return t===s}var ft=Wr;function Jr(t,a){return function(s){return t(a(s))}}var oe=Jr,Yr=oe,Xr=Yr(Object.keys,Object),Zr=Xr,Qr=ft,to=Zr,eo=Object.prototype,ao=eo.hasOwnProperty;function no(t){if(!Qr(t))return to(t);var a=[];for(var s in Object(t))ao.call(t,s)&&s!="constructor"&&a.push(s);return a}var so=no,ro=Qt,oo=se;function co(t){return t!=null&&oo(t.length)&&!ro(t)}var ce=co,lo=re,uo=so,io=ce;function po(t){return io(t)?lo(t):uo(t)}var vt=po,fo=z,vo=vt;function _o(t,a){return t&&fo(a,vo(a),t)}var go=_o;function yo(t){var a=[];if(t!=null)for(var s in Object(t))a.push(s);return a}var bo=yo,ho=D,$o=ft,ko=bo,mo=Object.prototype,To=mo.hasOwnProperty;function Ao(t){if(!ho(t))return ko(t);var a=$o(t),s=[];for(var r in t)r=="constructor"&&(a||!To.call(t,r))||s.push(r);return s}var jo=Ao,Co=re,Oo=jo,So=ce;function wo(t){return So(t)?Co(t,!0):Oo(t)}var _t=wo,Io=z,Po=_t;function Eo(t,a){return t&&Io(a,Po(a),t)}var Do=Eo,Z={exports:{}};(function(t,a){var s=$,r=a&&!a.nodeType&&a,c=r&&!0&&t&&!t.nodeType&&t,i=c&&c.exports===r,l=i?s.Buffer:void 0,p=l?l.allocUnsafe:void 0;function v(_,y){if(y)return _.slice();var f=_.length,b=p?p(f):new _.constructor(f);return _.copy(b),b}t.exports=v})(Z,Z.exports);function xo(t,a){var s=-1,r=t.length;for(a||(a=Array(r));++s<r;)a[s]=t[s];return a}var Fo=xo;function Lo(t,a){for(var s=-1,r=t==null?0:t.length,c=0,i=[];++s<r;){var l=t[s];a(l,s,t)&&(i[c++]=l)}return i}var Bo=Lo;function Mo(){return[]}var le=Mo,Ko=Bo,Go=le,No=Object.prototype,Vo=No.propertyIsEnumerable,Dt=Object.getOwnPropertySymbols,Uo=Dt?function(t){return t==null?[]:(t=Object(t),Ko(Dt(t),function(a){return Vo.call(t,a)}))}:Go,dt=Uo,Ho=z,Ro=dt;function zo(t,a){return Ho(t,Ro(t),a)}var qo=zo;function Wo(t,a){for(var s=-1,r=a.length,c=t.length;++s<r;)t[c+s]=a[s];return t}var ue=Wo,Jo=oe,Yo=Jo(Object.getPrototypeOf,Object),ie=Yo,Xo=ue,Zo=ie,Qo=dt,tc=le,ec=Object.getOwnPropertySymbols,ac=ec?function(t){for(var a=[];t;)Xo(a,Qo(t)),t=Zo(t);return a}:tc,pe=ac,nc=z,sc=pe;function rc(t,a){return nc(t,sc(t),a)}var oc=rc,cc=ue,lc=it;function uc(t,a,s){var r=a(t);return lc(t)?r:cc(r,s(t))}var fe=uc,ic=fe,pc=dt,fc=vt;function vc(t){return ic(t,fc,pc)}var _c=vc,dc=fe,gc=pe,yc=_t;function bc(t){return dc(t,yc,gc)}var hc=bc,$c=j,kc=$,mc=$c(kc,"DataView"),Tc=mc,Ac=j,jc=$,Cc=Ac(jc,"Promise"),Oc=Cc,Sc=j,wc=$,Ic=Sc(wc,"Set"),Pc=Ic,Ec=j,Dc=$,xc=Ec(Dc,"WeakMap"),Fc=xc,Q=Tc,tt=ut,et=Oc,at=Pc,nt=Fc,ve=U,I=te,xt="[object Map]",Lc="[object Object]",Ft="[object Promise]",Lt="[object Set]",Bt="[object WeakMap]",Mt="[object DataView]",Bc=I(Q),Mc=I(tt),Kc=I(et),Gc=I(at),Nc=I(nt),A=ve;(Q&&A(new Q(new ArrayBuffer(1)))!=Mt||tt&&A(new tt)!=xt||et&&A(et.resolve())!=Ft||at&&A(new at)!=Lt||nt&&A(new nt)!=Bt)&&(A=function(t){var a=ve(t),s=a==Lc?t.constructor:void 0,r=s?I(s):"";if(r)switch(r){case Bc:return Mt;case Mc:return xt;case Kc:return Ft;case Gc:return Lt;case Nc:return Bt}return a});var gt=A,Vc=Object.prototype,Uc=Vc.hasOwnProperty;function Hc(t){var a=t.length,s=new t.constructor(a);return a&&typeof t[0]=="string"&&Uc.call(t,"index")&&(s.index=t.index,s.input=t.input),s}var Rc=Hc,zc=$,qc=zc.Uint8Array,Wc=qc,Kt=Wc;function Jc(t){var a=new t.constructor(t.byteLength);return new Kt(a).set(new Kt(t)),a}var yt=Jc,Yc=yt;function Xc(t,a){var s=a?Yc(t.buffer):t.buffer;return new t.constructor(s,t.byteOffset,t.byteLength)}var Zc=Xc,Qc=/\w*$/;function tl(t){var a=new t.constructor(t.source,Qc.exec(t));return a.lastIndex=t.lastIndex,a}var el=tl,Gt=lt,Nt=Gt?Gt.prototype:void 0,Vt=Nt?Nt.valueOf:void 0;function al(t){return Vt?Object(Vt.call(t)):{}}var nl=al,sl=yt;function rl(t,a){var s=a?sl(t.buffer):t.buffer;return new t.constructor(s,t.byteOffset,t.length)}var ol=rl,cl=yt,ll=Zc,ul=el,il=nl,pl=ol,fl="[object Boolean]",vl="[object Date]",_l="[object Map]",dl="[object Number]",gl="[object RegExp]",yl="[object Set]",bl="[object String]",hl="[object Symbol]",$l="[object ArrayBuffer]",kl="[object DataView]",ml="[object Float32Array]",Tl="[object Float64Array]",Al="[object Int8Array]",jl="[object Int16Array]",Cl="[object Int32Array]",Ol="[object Uint8Array]",Sl="[object Uint8ClampedArray]",wl="[object Uint16Array]",Il="[object Uint32Array]";function Pl(t,a,s){var r=t.constructor;switch(a){case $l:return cl(t);case fl:case vl:return new r(+t);case kl:return ll(t,s);case ml:case Tl:case Al:case jl:case Cl:case Ol:case Sl:case wl:case Il:return pl(t,s);case _l:return new r;case dl:case bl:return new r(t);case gl:return ul(t);case yl:return new r;case hl:return il(t)}}var El=Pl,Dl=D,Ut=Object.create,xl=function(){function t(){}return function(a){if(!Dl(a))return{};if(Ut)return Ut(a);t.prototype=a;var s=new t;return t.prototype=void 0,s}}(),Fl=xl,Ll=Fl,Bl=ie,Ml=ft;function Kl(t){return typeof t.constructor=="function"&&!Ml(t)?Ll(Bl(t)):{}}var Gl=Kl,Nl=gt,Vl=x,Ul="[object Map]";function Hl(t){return Vl(t)&&Nl(t)==Ul}var Rl=Hl,zl=Rl,ql=pt,Ht=E.exports,Rt=Ht&&Ht.isMap,Wl=Rt?ql(Rt):zl,Jl=Wl,Yl=gt,Xl=x,Zl="[object Set]";function Ql(t){return Xl(t)&&Yl(t)==Zl}var tu=Ql,eu=tu,au=pt,zt=E.exports,qt=zt&&zt.isSet,nu=qt?au(qt):eu,su=nu,ru=ks,ou=Ts,cu=ae,lu=go,uu=Do,iu=Z.exports,pu=Fo,fu=qo,vu=oc,_u=_c,du=hc,gu=gt,yu=Rc,bu=El,hu=Gl,$u=it,ku=G.exports,mu=Jl,Tu=D,Au=su,ju=vt,Cu=_t,Ou=1,Su=2,wu=4,_e="[object Arguments]",Iu="[object Array]",Pu="[object Boolean]",Eu="[object Date]",Du="[object Error]",de="[object Function]",xu="[object GeneratorFunction]",Fu="[object Map]",Lu="[object Number]",ge="[object Object]",Bu="[object RegExp]",Mu="[object Set]",Ku="[object String]",Gu="[object Symbol]",Nu="[object WeakMap]",Vu="[object ArrayBuffer]",Uu="[object DataView]",Hu="[object Float32Array]",Ru="[object Float64Array]",zu="[object Int8Array]",qu="[object Int16Array]",Wu="[object Int32Array]",Ju="[object Uint8Array]",Yu="[object Uint8ClampedArray]",Xu="[object Uint16Array]",Zu="[object Uint32Array]",d={};d[_e]=d[Iu]=d[Vu]=d[Uu]=d[Pu]=d[Eu]=d[Hu]=d[Ru]=d[zu]=d[qu]=d[Wu]=d[Fu]=d[Lu]=d[ge]=d[Bu]=d[Mu]=d[Ku]=d[Gu]=d[Ju]=d[Yu]=d[Xu]=d[Zu]=!0;d[Du]=d[de]=d[Nu]=!1;function M(t,a,s,r,c,i){var l,p=a&Ou,v=a&Su,_=a&wu;if(s&&(l=c?s(t,r,c,i):s(t)),l!==void 0)return l;if(!Tu(t))return t;var y=$u(t);if(y){if(l=yu(t),!p)return pu(t,l)}else{var f=gu(t),b=f==de||f==xu;if(ku(t))return iu(t,p);if(f==ge||f==_e||b&&!c){if(l=v||b?{}:hu(t),!p)return v?vu(t,uu(l,t)):fu(t,lu(l,t))}else{if(!d[f])return c?t:{};l=bu(t,f,p)}}i||(i=new ru);var m=i.get(t);if(m)return m;i.set(t,l),Au(t)?t.forEach(function(k){l.add(M(k,a,s,k,t,i))}):mu(t)&&t.forEach(function(k,T){l.set(T,M(k,a,s,T,t,i))});var q=_?v?du:_u:v?Cu:ju,bt=y?void 0:q(t);return ou(bt||t,function(k,T){bt&&(T=k,k=t[T]),cu(l,T,M(k,a,s,T,t,i))}),l}var Qu=M,ti=Qu,ei=1,ai=4;function ni(t){return ti(t,ei|ai)}var X=ni;const si=(t,a)=>{const s=r=>{const c=[];return r.forEach(i=>{if(i.label.toLowerCase().indexOf(a.toLowerCase())>-1)c.push(K({},i));else if(i.children){const l=s(i.children);l.length&&c.push(Jt(K({},i),{children:l}))}}),c};return s(t)},ri=(t,a)=>{const s=r=>{const c=[];return r.forEach(i=>{if(a.includes(i.value))c.push(K({},i));else if(i.children){const l=s(i.children);l.length&&c.push(Jt(K({},i),{children:l}))}}),c};return s(t)};var oi=st({name:"ATransferTree",props:{originData:{type:Array,required:!0},selectKey:{type:Array,default:()=>[]},modelValue:{type:String,default:""}},emits:["change","update:modelValue","selectKey","update:selectKey"],setup(t,{emit:a,expose:s}){const r=W(t.selectKey),c=W(t.modelValue),i=W(t.originData),l=ye(()=>{const f=r.value,b=X(J(t.originData));return ri(b,f)});F(()=>[c.value,t.originData],f=>{r.value=[];const b=X(J(t.originData));i.value=si(b,f[0])}),F(()=>c.value,f=>{a("update:modelValue",f),a("change",f)});const p=()=>{r.value=[]},v=f=>{const b=[...r.value||[]],m=b.findIndex(q=>q===f);b.splice(m,1),r.value=[...b]},_=f=>f.isLeaf?o(L,{type:"primary",style:{position:"absolute",right:0},onClick:()=>v(f.value)},{default:()=>[n("\u5220\u9664")]}):null;return F(()=>r.value,f=>{a("update:selectKey",f),a("selectKey",f)}),F(()=>t.selectKey,f=>{r.value=f}),s({getSelectData:()=>X(J(l.value))}),()=>o(be,{class:"transfer-tree"},{default:()=>[o(ht,{span:12,class:"transfer-tree_left"},{default:()=>[o(he,{placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u8FDB\u884C\u641C\u7D22",modelValue:c.value,"onUpdate:modelValue":f=>c.value=f},null),o($t,{checkable:!0,"default-expand-all":!0,"checked-keys":r.value,"onUpdate:checked-keys":f=>r.value=f,data:i.value,"checked-strategy":"child",fieldNames:{key:"value",title:"label"}},null)]}),o(ht,{span:12,class:"transfer-tree_right"},{default:()=>[o("div",{style:{display:"flex",justifyContent:"space-between"}},[o(L,{bold:!0},{default:()=>{var f;return[n("\u5DF2\u9009\u62E9\uFF08"),(f=r.value)==null?void 0:f.length,n("\uFF09")]}}),o(L,{type:"primary",style:{cursor:"pointer"},onClick:p},{default:()=>[n("\u6E05\u7A7A")]})]),l.value.length>0?o($t,{blockNode:!0,"default-expand-all":!0,data:l.value,fieldNames:{key:"value",title:"label"}},{extra:_}):o(L,{type:"secondary",class:"empty-data_right"},{default:()=>[n("\u8BF7\u4ECE\u5DE6\u4FA7\u9009\u62E9")]})]})]})}});const ci=oi,li={name:"BasicDemo",components:{ATransferTree:ci},data(){return{selectKey:[],searchVal:"",list:[{label:"1",value:1,children:[{label:"1-1",value:11,children:[{label:"1-1-1",value:111,isLeaf:!0},{label:"1-1-2",value:112,isLeaf:!0},{label:"1-1-3",value:113,isLeaf:!0},{label:"1-1-4",value:114,isLeaf:!0}]}]},{label:"2",value:3,children:[{label:"2-1",value:21,children:[{label:"2-1-1",value:211,isLeaf:!0},{label:"2-1-2",value:212,isLeaf:!0},{label:"2-1-3",value:213,isLeaf:!0},{label:"2-1-4",value:214,isLeaf:!0}]}]}]}}};function ui(t,a,s,r,c,i){const l=h("ATransferTree");return ot(),ct(l,{modelValue:c.searchVal,"onUpdate:modelValue":a[0]||(a[0]=p=>c.searchVal=p),"origin-data":c.list,"select-key":c.selectKey,"onUpdate:select-key":a[1]||(a[1]=p=>c.selectKey=p),style:{width:"800px",margin:"0 auto","background-color":"#fff"}},null,8,["modelValue","origin-data","select-key"])}var ii=rt(li,[["render",ui]]);const pi=st({name:"ArcoDemo",components:{VirtualDemo:ii},setup(){const{locale:t}=Wt();return{locale:t,getMessage:(s,r)=>t.value==="zh-CN"?s:r}}}),fi=e("p",null,[n("TransferTree \u7EC4\u4EF6\u4E2D\uFF0CselectList \u662F\u6839\u636E select-key \u52A8\u6001\u8BA1\u7B97\u7684\uFF0C\u5728 search \u7684\u65F6\u5019\u4F1A\u6E05\u7A7A select-key \u4E2D\u7684\u503C\u3002"),e("br"),n("\u540E\u7EED\u53EF\u4EE5\u5220\u9664 selectList\u3001select-key \u7684\u5F3A\u7ED1\u5B9A\u5173\u7CFB\u3002")],-1),vi=e("pre",{class:"code-content"},[e("code",{class:"language-lang"},[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),n("template")]),e("span",{class:"token punctuation"},">")]),n(`
  `),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),n("ATransferTree")]),n(`
    `),e("span",{class:"token attr-name"},"v-model"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),n("searchVal"),e("span",{class:"token punctuation"},'"')]),n(`
    `),e("span",{class:"token attr-name"},":origin-data"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),n("list"),e("span",{class:"token punctuation"},'"')]),n(`
    `),e("span",{class:"token attr-name"},[e("span",{class:"token namespace"},"v-model:"),n("select-key")]),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),n("selectKey"),e("span",{class:"token punctuation"},'"')]),n(`
    `),e("span",{class:"token special-attr"},[e("span",{class:"token attr-name"},"style"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),e("span",{class:"token value css language-css"},[e("span",{class:"token property"},"width"),e("span",{class:"token punctuation"},":"),n(" 800px"),e("span",{class:"token punctuation"},";"),n(),e("span",{class:"token property"},"margin"),e("span",{class:"token punctuation"},":"),n(" 0 auto"),e("span",{class:"token punctuation"},";"),n(),e("span",{class:"token property"},"background-color"),e("span",{class:"token punctuation"},":"),n(" #fff")]),e("span",{class:"token punctuation"},'"')])]),n(`
  `),e("span",{class:"token punctuation"},"/>")]),n(`
`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),n("template")]),e("span",{class:"token punctuation"},">")]),n(`

`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),n("script")]),n(),e("span",{class:"token attr-name"},"lang"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),n("ts"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token script"},[e("span",{class:"token language-javascript"},[n(`
`),e("span",{class:"token keyword"},"import"),n(" ATransferTree "),e("span",{class:"token keyword"},"from"),n(),e("span",{class:"token string"},"'@dangojs/a-transfer-tree'"),e("span",{class:"token punctuation"},";"),n(`

`),e("span",{class:"token keyword"},"export"),n(),e("span",{class:"token keyword"},"default"),n(),e("span",{class:"token punctuation"},"{"),n(`
  name`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token string"},"'BasicDemo'"),e("span",{class:"token punctuation"},","),n(`
  components`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token punctuation"},"{"),n(`
    ATransferTree`),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token function"},"data"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token punctuation"},"{"),n(`
    `),e("span",{class:"token keyword"},"return"),n(),e("span",{class:"token punctuation"},"{"),n(`
      selectKey`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token punctuation"},"["),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),n(`
      searchVal`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token string"},"''"),e("span",{class:"token punctuation"},","),n(`
      list`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token punctuation"},"["),n(`
        `),e("span",{class:"token punctuation"},"{"),n(`
          label`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token string"},"'1'"),e("span",{class:"token punctuation"},","),n(`
          value`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},","),n(`
          children`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token punctuation"},"["),n(`
            `),e("span",{class:"token punctuation"},"{"),n(`
              label`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token string"},"'1-1'"),e("span",{class:"token punctuation"},","),n(`
              value`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"11"),e("span",{class:"token punctuation"},","),n(`
              children`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token punctuation"},"["),n(`
                `),e("span",{class:"token punctuation"},"{"),n(" label"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token string"},"'1-1-1'"),e("span",{class:"token punctuation"},","),n(" value"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"111"),e("span",{class:"token punctuation"},","),n(" isLeaf"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token boolean"},"true"),n(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),n(`
                `),e("span",{class:"token punctuation"},"{"),n(" label"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token string"},"'1-1-2'"),e("span",{class:"token punctuation"},","),n(" value"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"112"),e("span",{class:"token punctuation"},","),n(" isLeaf"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token boolean"},"true"),n(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),n(`
                `),e("span",{class:"token punctuation"},"{"),n(" label"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token string"},"'1-1-3'"),e("span",{class:"token punctuation"},","),n(" value"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"113"),e("span",{class:"token punctuation"},","),n(" isLeaf"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token boolean"},"true"),n(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),n(`
                `),e("span",{class:"token punctuation"},"{"),n(" label"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token string"},"'1-1-4'"),e("span",{class:"token punctuation"},","),n(" value"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"114"),e("span",{class:"token punctuation"},","),n(" isLeaf"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token boolean"},"true"),n(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),n(`
              `),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),n(`
            `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),n(`
          `),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),n(`
        `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),n(`
        `),e("span",{class:"token punctuation"},"{"),n(`
          label`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token string"},"'2'"),e("span",{class:"token punctuation"},","),n(`
          value`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"3"),e("span",{class:"token punctuation"},","),n(`
          children`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token punctuation"},"["),n(`
            `),e("span",{class:"token punctuation"},"{"),n(`
              label`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token string"},"'2-1'"),e("span",{class:"token punctuation"},","),n(`
              value`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"21"),e("span",{class:"token punctuation"},","),n(`
              children`),e("span",{class:"token operator"},":"),n(),e("span",{class:"token punctuation"},"["),n(`
                `),e("span",{class:"token punctuation"},"{"),n(" label"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token string"},"'2-1-1'"),e("span",{class:"token punctuation"},","),n(" value"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"211"),e("span",{class:"token punctuation"},","),n(" isLeaf"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token boolean"},"true"),n(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),n(`
                `),e("span",{class:"token punctuation"},"{"),n(" label"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token string"},"'2-1-2'"),e("span",{class:"token punctuation"},","),n(" value"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"212"),e("span",{class:"token punctuation"},","),n(" isLeaf"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token boolean"},"true"),n(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),n(`
                `),e("span",{class:"token punctuation"},"{"),n(" label"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token string"},"'2-1-3'"),e("span",{class:"token punctuation"},","),n(" value"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"213"),e("span",{class:"token punctuation"},","),n(" isLeaf"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token boolean"},"true"),n(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),n(`
                `),e("span",{class:"token punctuation"},"{"),n(" label"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token string"},"'2-1-4'"),e("span",{class:"token punctuation"},","),n(" value"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"214"),e("span",{class:"token punctuation"},","),n(" isLeaf"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token boolean"},"true"),n(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),n(`
              `),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),n(`
            `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),n(`
          `),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),n(`
        `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),n(`
      `),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),n(`
    `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),n(`
  `),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),n(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),n("script")]),e("span",{class:"token punctuation"},">")]),n(`
`)])],-1);function _i(t,a,s,r,c,i){const l=h("virtual-demo"),p=h("cell-demo"),v=h("cell-code"),_=h("code-block");return ot(),ct(_,{id:"basic",title:t.getMessage("\u57FA\u672C\u7528\u6CD5","Basic Usage")},$e({default:u(()=>[o(p,null,{default:u(()=>[o(l)]),_:1}),o(v,null,{default:u(()=>[vi]),_:1})]),_:2},[t.locale==="zh-CN"?{name:"description",fn:u(()=>[fi])}:{name:"description",fn:u(()=>[])}]),1032,["title"])}var di=rt(pi,[["render",_i]]);const gi=st({name:"ArcoMain",components:{DemoBasic:di},setup(){const{locale:t}=Wt();return{locale:t,data:{meta:{type:"\u7EC4\u4EF6",category:"\u901A\u7528"},title:"\u6811\u5F62\u7A7F\u68AD\u6846 TransferTree",description:null},getMessage:(r,c)=>t.value==="zh-CN"?r:c}}}),yi=e("h2",{id:"api"},"API",-1),bi=e("h3",{id:"a-transfer-tree-props"},[e("code",null,"<a-transfer-tree>"),n(" Props")],-1),hi=e("colgroup",null,[e("col",{style:{"min-width":"120px"}})],-1),$i=n("\u53C2\u6570\u540D"),ki=n("\u63CF\u8FF0"),mi=n("\u7C7B\u578B"),Ti=n("\u9ED8\u8BA4\u503C"),Ai=n("origin-data "),ji=e("strong",null,"(\u5FC5\u586B)",-1),Ci=n("\u5DE6\u4FA7\u539F\u59CB\u503C"),Oi=e("code",null,"dataType[]",-1),Si=e("code",null,"-",-1),wi=n("select-key"),Ii=n("\u6811\u8282\u70B9\u9009\u4E2D\u7684key, v-model:selectKey"),Pi=e("code",null,"Array<string | number>",-1),Ei=e("code",null,"[]",-1),Di=n("model-value "),xi=e("strong",null,"(v-model)",-1),Fi=n("\u8F93\u5165\u6846\u7684\u503C, modelValue/v-model"),Li=e("code",null,"string",-1),Bi=e("code",null,"''",-1),Mi=e("h3",{id:"a-transfer-tree-events"},[e("code",null,"<a-transfer-tree>"),n(" Events")],-1),Ki=e("colgroup",null,[e("col",{style:{"min-width":"120px"}})],-1),Gi=n("\u4E8B\u4EF6\u540D"),Ni=n("\u63CF\u8FF0"),Vi=n("\u53C2\u6570"),Ui=n("change"),Hi=n("modelValue/v-model \u6539\u53D8\u7684\u65F6\u5019\u89E6\u53D1"),Ri=n("string: "),zi=e("code",null,"value",-1),qi=n("select-key"),Wi=n("selectKey \u7684\u503C\u6539\u53D8\u7684\u65F6\u5019\u89E6\u53D1"),Ji=e("code",null,"selectKey",-1),Yi=n("<string|number>[]");function Xi(t,a,s,r,c,i){const l=h("demo-basic"),p=h("a-th"),v=h("a-tr"),_=h("a-thead"),y=h("a-td"),f=h("a-tbody"),b=h("a-table"),m=h("arco-article");return ot(),ct(m,ke(me(t.data)),{default:u(()=>[o(l),yi,bi,o(b,{class:"component-api-table"},{default:u(()=>[hi,o(_,null,{default:u(()=>[o(v,null,{default:u(()=>[o(p,null,{default:u(()=>[$i]),_:1}),o(p,null,{default:u(()=>[ki]),_:1}),o(p,null,{default:u(()=>[mi]),_:1}),o(p,null,{default:u(()=>[Ti]),_:1})]),_:1})]),_:1}),o(f,null,{default:u(()=>[o(v,null,{default:u(()=>[o(y,null,{default:u(()=>[Ai,ji]),_:1}),o(y,null,{default:u(()=>[Ci]),_:1}),o(y,null,{default:u(()=>[Oi]),_:1}),o(y,null,{default:u(()=>[Si]),_:1})]),_:1}),o(v,null,{default:u(()=>[o(y,null,{default:u(()=>[wi]),_:1}),o(y,null,{default:u(()=>[Ii]),_:1}),o(y,null,{default:u(()=>[Pi]),_:1}),o(y,null,{default:u(()=>[Ei]),_:1})]),_:1}),o(v,null,{default:u(()=>[o(y,null,{default:u(()=>[Di,xi]),_:1}),o(y,null,{default:u(()=>[Fi]),_:1}),o(y,null,{default:u(()=>[Li]),_:1}),o(y,null,{default:u(()=>[Bi]),_:1})]),_:1})]),_:1})]),_:1}),Mi,o(b,{class:"component-api-table"},{default:u(()=>[Ki,o(_,null,{default:u(()=>[o(v,null,{default:u(()=>[o(p,null,{default:u(()=>[Gi]),_:1}),o(p,null,{default:u(()=>[Ni]),_:1}),o(p,null,{default:u(()=>[Vi]),_:1})]),_:1})]),_:1}),o(f,null,{default:u(()=>[o(v,null,{default:u(()=>[o(y,null,{default:u(()=>[Ui]),_:1}),o(y,null,{default:u(()=>[Hi]),_:1}),o(y,null,{default:u(()=>[Ri,zi]),_:1})]),_:1}),o(v,null,{default:u(()=>[o(y,null,{default:u(()=>[qi]),_:1}),o(y,null,{default:u(()=>[Wi]),_:1}),o(y,null,{default:u(()=>[Ji,Yi]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},16)}var Qi=rt(gi,[["render",Xi]]);export{Qi as default};
