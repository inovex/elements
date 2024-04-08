import{c as G,g as Ja,a as Xa}from"./_commonjsHelpers-BosuxZz1.js";var Ha={},rr=function(r){return r&&r.Math===Math&&r},w=rr(typeof globalThis=="object"&&globalThis)||rr(typeof window=="object"&&window)||rr(typeof self=="object"&&self)||rr(typeof G=="object"&&G)||rr(typeof G=="object"&&G)||function(){return this}()||Function("return this")(),Ue={},I=function(r){try{return!!r()}catch{return!0}},Qa=I,A=!Qa(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7}),Za=I,Cr=!Za(function(){var r=(function(){}).bind();return typeof r!="function"||r.hasOwnProperty("prototype")}),ro=Cr,pr=Function.prototype.call,_=ro?pr.bind(pr):function(){return pr.apply(pr,arguments)},Ln={},Bn={}.propertyIsEnumerable,Mn=Object.getOwnPropertyDescriptor,eo=Mn&&!Bn.call({1:2},1);Ln.f=eo?function(e){var t=Mn(this,e);return!!t&&t.enumerable}:Bn;var _r=function(r,e){return{enumerable:!(r&1),configurable:!(r&2),writable:!(r&4),value:e}},Gn=Cr,Un=Function.prototype,me=Un.call,to=Gn&&Un.bind.bind(me,me),E=Gn?to:function(r){return function(){return me.apply(r,arguments)}},Kn=E,no=Kn({}.toString),ao=Kn("".slice),K=function(r){return ao(no(r),8,-1)},oo=E,io=I,vo=K,Wr=Object,uo=oo("".split),co=io(function(){return!Wr("z").propertyIsEnumerable(0)})?function(r){return vo(r)==="String"?uo(r,""):Wr(r)}:Wr,X=function(r){return r==null},so=X,lo=TypeError,Dr=function(r){if(so(r))throw new lo("Can't call method on "+r);return r},fo=co,yo=Dr,H=function(r){return fo(yo(r))},qr=typeof document=="object"&&document.all,m=typeof qr>"u"&&qr!==void 0?function(r){return typeof r=="function"||r===qr}:function(r){return typeof r=="function"},po=m,x=function(r){return typeof r=="object"?r!==null:po(r)},Jr=w,$o=m,go=function(r){return $o(r)?r:void 0},cr=function(r,e){return arguments.length<2?go(Jr[r]):Jr[r]&&Jr[r][e]},bo=E,Ke=bo({}.isPrototypeOf),ho=typeof navigator<"u"&&String(navigator.userAgent)||"",kn=w,Xr=ho,$t=kn.process,gt=kn.Deno,bt=$t&&$t.versions||gt&&gt.version,ht=bt&&bt.v8,j,xr;ht&&(j=ht.split("."),xr=j[0]>0&&j[0]<4?1:+(j[0]+j[1]));!xr&&Xr&&(j=Xr.match(/Edge\/(\d+)/),(!j||j[1]>=74)&&(j=Xr.match(/Chrome\/(\d+)/),j&&(xr=+j[1])));var ke=xr,St=ke,So=I,Oo=w,Io=Oo.String,Vn=!!Object.getOwnPropertySymbols&&!So(function(){var r=Symbol("symbol detection");return!Io(r)||!(Object(r)instanceof Symbol)||!Symbol.sham&&St&&St<41}),Eo=Vn,zn=Eo&&!Symbol.sham&&typeof Symbol.iterator=="symbol",mo=cr,To=m,wo=Ke,Po=zn,xo=Object,Yn=Po?function(r){return typeof r=="symbol"}:function(r){var e=mo("Symbol");return To(e)&&wo(e.prototype,xo(r))},Ro=String,Ve=function(r){try{return Ro(r)}catch{return"Object"}},Ao=m,jo=Ve,Co=TypeError,Fr=function(r){if(Ao(r))return r;throw new Co(jo(r)+" is not a function")},_o=Fr,Do=X,Nr=function(r,e){var t=r[e];return Do(t)?void 0:_o(t)},Hr=_,Qr=m,Zr=x,Fo=TypeError,No=function(r,e){var t,n;if(e==="string"&&Qr(t=r.toString)&&!Zr(n=Hr(t,r))||Qr(t=r.valueOf)&&!Zr(n=Hr(t,r))||e!=="string"&&Qr(t=r.toString)&&!Zr(n=Hr(t,r)))return n;throw new Fo("Can't convert object to primitive value")},Wn={exports:{}},Ot=w,Lo=Object.defineProperty,ze=function(r,e){try{Lo(Ot,r,{value:e,configurable:!0,writable:!0})}catch{Ot[r]=e}return e},Bo=w,Mo=ze,It="__core-js_shared__",Et=Wn.exports=Bo[It]||Mo(It,{});(Et.versions||(Et.versions=[])).push({version:"3.36.0",mode:"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",source:"https://github.com/zloirock/core-js"});var Ye=Wn.exports,mt=Ye,We=function(r,e){return mt[r]||(mt[r]=e||{})},Go=Dr,Uo=Object,Lr=function(r){return Uo(Go(r))},Ko=E,ko=Lr,Vo=Ko({}.hasOwnProperty),L=Object.hasOwn||function(e,t){return Vo(ko(e),t)},zo=E,Yo=0,Wo=Math.random(),qo=zo(1 .toString),qe=function(r){return"Symbol("+(r===void 0?"":r)+")_"+qo(++Yo+Wo,36)},Jo=w,Xo=We,Tt=L,Ho=qe,Qo=Vn,Zo=zn,q=Jo.Symbol,re=Xo("wks"),ri=Zo?q.for||q:q&&q.withoutSetter||Ho,T=function(r){return Tt(re,r)||(re[r]=Qo&&Tt(q,r)?q[r]:ri("Symbol."+r)),re[r]},ei=_,wt=x,Pt=Yn,ti=Nr,ni=No,ai=T,oi=TypeError,ii=ai("toPrimitive"),vi=function(r,e){if(!wt(r)||Pt(r))return r;var t=ti(r,ii),n;if(t){if(e===void 0&&(e="default"),n=ei(t,r,e),!wt(n)||Pt(n))return n;throw new oi("Can't convert object to primitive value")}return e===void 0&&(e="number"),ni(r,e)},ui=vi,ci=Yn,qn=function(r){var e=ui(r,"string");return ci(e)?e:e+""},si=w,xt=x,Te=si.document,li=xt(Te)&&xt(Te.createElement),Je=function(r){return li?Te.createElement(r):{}},fi=A,di=I,yi=Je,Jn=!fi&&!di(function(){return Object.defineProperty(yi("div"),"a",{get:function(){return 7}}).a!==7}),pi=A,$i=_,gi=Ln,bi=_r,hi=H,Si=qn,Oi=L,Ii=Jn,Rt=Object.getOwnPropertyDescriptor;Ue.f=pi?Rt:function(e,t){if(e=hi(e),t=Si(t),Ii)try{return Rt(e,t)}catch{}if(Oi(e,t))return bi(!$i(gi.f,e,t),e[t])};var D={},Ei=A,mi=I,Xn=Ei&&mi(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42}),Ti=x,wi=String,Pi=TypeError,F=function(r){if(Ti(r))return r;throw new Pi(wi(r)+" is not an object")},xi=A,Ri=Jn,Ai=Xn,$r=F,At=qn,ji=TypeError,ee=Object.defineProperty,Ci=Object.getOwnPropertyDescriptor,te="enumerable",ne="configurable",ae="writable";D.f=xi?Ai?function(e,t,n){if($r(e),t=At(t),$r(n),typeof e=="function"&&t==="prototype"&&"value"in n&&ae in n&&!n[ae]){var a=Ci(e,t);a&&a[ae]&&(e[t]=n.value,n={configurable:ne in n?n[ne]:a[ne],enumerable:te in n?n[te]:a[te],writable:!1})}return ee(e,t,n)}:ee:function(e,t,n){if($r(e),t=At(t),$r(n),Ri)try{return ee(e,t,n)}catch{}if("get"in n||"set"in n)throw new ji("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var _i=A,Di=D,Fi=_r,sr=_i?function(r,e,t){return Di.f(r,e,Fi(1,t))}:function(r,e,t){return r[e]=t,r},Hn={exports:{}},we=A,Ni=L,Qn=Function.prototype,Li=we&&Object.getOwnPropertyDescriptor,Xe=Ni(Qn,"name"),Bi=Xe&&(function(){}).name==="something",Mi=Xe&&(!we||we&&Li(Qn,"name").configurable),Zn={EXISTS:Xe,PROPER:Bi,CONFIGURABLE:Mi},Gi=E,Ui=m,Pe=Ye,Ki=Gi(Function.toString);Ui(Pe.inspectSource)||(Pe.inspectSource=function(r){return Ki(r)});var ra=Pe.inspectSource,ki=w,Vi=m,jt=ki.WeakMap,zi=Vi(jt)&&/native code/.test(String(jt)),Yi=We,Wi=qe,Ct=Yi("keys"),He=function(r){return Ct[r]||(Ct[r]=Wi(r))},Br={},qi=zi,ea=w,Ji=x,Xi=sr,oe=L,ie=Ye,Hi=He,Qi=Br,_t="Object already initialized",xe=ea.TypeError,Zi=ea.WeakMap,Rr,vr,Ar,rv=function(r){return Ar(r)?vr(r):Rr(r,{})},ev=function(r){return function(e){var t;if(!Ji(e)||(t=vr(e)).type!==r)throw new xe("Incompatible receiver, "+r+" required");return t}};if(qi||ie.state){var N=ie.state||(ie.state=new Zi);N.get=N.get,N.has=N.has,N.set=N.set,Rr=function(r,e){if(N.has(r))throw new xe(_t);return e.facade=r,N.set(r,e),e},vr=function(r){return N.get(r)||{}},Ar=function(r){return N.has(r)}}else{var z=Hi("state");Qi[z]=!0,Rr=function(r,e){if(oe(r,z))throw new xe(_t);return e.facade=r,Xi(r,z,e),e},vr=function(r){return oe(r,z)?r[z]:{}},Ar=function(r){return oe(r,z)}}var lr={set:Rr,get:vr,has:Ar,enforce:rv,getterFor:ev},Qe=E,tv=I,nv=m,gr=L,Re=A,av=Zn.CONFIGURABLE,ov=ra,ta=lr,iv=ta.enforce,vv=ta.get,Dt=String,Er=Object.defineProperty,uv=Qe("".slice),cv=Qe("".replace),sv=Qe([].join),lv=Re&&!tv(function(){return Er(function(){},"length",{value:8}).length!==8}),fv=String(String).split("String"),dv=Hn.exports=function(r,e,t){uv(Dt(e),0,7)==="Symbol("&&(e="["+cv(Dt(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),t&&t.getter&&(e="get "+e),t&&t.setter&&(e="set "+e),(!gr(r,"name")||av&&r.name!==e)&&(Re?Er(r,"name",{value:e,configurable:!0}):r.name=e),lv&&t&&gr(t,"arity")&&r.length!==t.arity&&Er(r,"length",{value:t.arity});try{t&&gr(t,"constructor")&&t.constructor?Re&&Er(r,"prototype",{writable:!1}):r.prototype&&(r.prototype=void 0)}catch{}var n=iv(r);return gr(n,"source")||(n.source=sv(fv,typeof e=="string"?e:"")),r};Function.prototype.toString=dv(function(){return nv(this)&&vv(this).source||ov(this)},"toString");var na=Hn.exports,yv=m,pv=D,$v=na,gv=ze,k=function(r,e,t,n){n||(n={});var a=n.enumerable,o=n.name!==void 0?n.name:e;if(yv(t)&&$v(t,o,n),n.global)a?r[e]=t:gv(e,t);else{try{n.unsafe?r[e]&&(a=!0):delete r[e]}catch{}a?r[e]=t:pv.f(r,e,{value:t,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return r},Mr={},bv=Math.ceil,hv=Math.floor,Sv=Math.trunc||function(e){var t=+e;return(t>0?hv:bv)(t)},Ov=Sv,Gr=function(r){var e=+r;return e!==e||e===0?0:Ov(e)},Iv=Gr,Ev=Math.max,mv=Math.min,Tv=function(r,e){var t=Iv(r);return t<0?Ev(t+e,0):mv(t,e)},wv=Gr,Pv=Math.min,aa=function(r){var e=wv(r);return e>0?Pv(e,9007199254740991):0},xv=aa,Ze=function(r){return xv(r.length)},Rv=H,Av=Tv,jv=Ze,Ft=function(r){return function(e,t,n){var a=Rv(e),o=jv(a);if(o===0)return!r&&-1;var i=Av(n,o),c;if(r&&t!==t){for(;o>i;)if(c=a[i++],c!==c)return!0}else for(;o>i;i++)if((r||i in a)&&a[i]===t)return r||i||0;return!r&&-1}},Cv={includes:Ft(!0),indexOf:Ft(!1)},_v=E,ve=L,Dv=H,Fv=Cv.indexOf,Nv=Br,Nt=_v([].push),oa=function(r,e){var t=Dv(r),n=0,a=[],o;for(o in t)!ve(Nv,o)&&ve(t,o)&&Nt(a,o);for(;e.length>n;)ve(t,o=e[n++])&&(~Fv(a,o)||Nt(a,o));return a},rt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Lv=oa,Bv=rt,Mv=Bv.concat("length","prototype");Mr.f=Object.getOwnPropertyNames||function(e){return Lv(e,Mv)};var ia={};ia.f=Object.getOwnPropertySymbols;var Gv=cr,Uv=E,Kv=Mr,kv=ia,Vv=F,zv=Uv([].concat),Yv=Gv("Reflect","ownKeys")||function(e){var t=Kv.f(Vv(e)),n=kv.f;return n?zv(t,n(e)):t},Lt=L,Wv=Yv,qv=Ue,Jv=D,Xv=function(r,e,t){for(var n=Wv(e),a=Jv.f,o=qv.f,i=0;i<n.length;i++){var c=n[i];!Lt(r,c)&&!(t&&Lt(t,c))&&a(r,c,o(e,c))}},Hv=I,Qv=m,Zv=/#|\.prototype\./,fr=function(r,e){var t=eu[ru(r)];return t===nu?!0:t===tu?!1:Qv(e)?Hv(e):!!e},ru=fr.normalize=function(r){return String(r).replace(Zv,".").toLowerCase()},eu=fr.data={},tu=fr.NATIVE="N",nu=fr.POLYFILL="P",va=fr,br=w,au=Ue.f,ou=sr,iu=k,vu=ze,uu=Xv,cu=va,dr=function(r,e){var t=r.target,n=r.global,a=r.stat,o,i,c,f,v,u;if(n?i=br:a?i=br[t]||vu(t,{}):i=br[t]&&br[t].prototype,i)for(c in e){if(v=e[c],r.dontCallGetSet?(u=au(i,c),f=u&&u.value):f=i[c],o=cu(n?c:t+(a?".":"#")+c,r.forced),!o&&f!==void 0){if(typeof v==typeof f)continue;uu(v,f)}(r.sham||f&&f.sham)&&ou(v,"sham",!0),iu(i,c,v,r)}},su=K,ua=Array.isArray||function(e){return su(e)==="Array"},lu=TypeError,fu=9007199254740991,du=function(r){if(r>fu)throw lu("Maximum allowed index exceeded");return r},yu=A,pu=D,$u=_r,gu=function(r,e,t){yu?pu.f(r,e,$u(0,t)):r[e]=t},bu=T,hu=bu("toStringTag"),ca={};ca[hu]="z";var et=String(ca)==="[object z]",Su=et,Ou=m,mr=K,Iu=T,Eu=Iu("toStringTag"),mu=Object,Tu=mr(function(){return arguments}())==="Arguments",wu=function(r,e){try{return r[e]}catch{}},Ur=Su?mr:function(r){var e,t,n;return r===void 0?"Undefined":r===null?"Null":typeof(t=wu(e=mu(r),Eu))=="string"?t:Tu?mr(e):(n=mr(e))==="Object"&&Ou(e.callee)?"Arguments":n},Pu=E,xu=I,sa=m,Ru=Ur,Au=cr,ju=ra,la=function(){},fa=Au("Reflect","construct"),tt=/^\s*(?:class|function)\b/,Cu=Pu(tt.exec),_u=!tt.test(la),er=function(e){if(!sa(e))return!1;try{return fa(la,[],e),!0}catch{return!1}},da=function(e){if(!sa(e))return!1;switch(Ru(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return _u||!!Cu(tt,ju(e))}catch{return!0}};da.sham=!0;var Du=!fa||xu(function(){var r;return er(er.call)||!er(Object)||!er(function(){r=!0})||r})?da:er,Bt=ua,Fu=Du,Nu=x,Lu=T,Bu=Lu("species"),Mt=Array,Mu=function(r){var e;return Bt(r)&&(e=r.constructor,Fu(e)&&(e===Mt||Bt(e.prototype))?e=void 0:Nu(e)&&(e=e[Bu],e===null&&(e=void 0))),e===void 0?Mt:e},Gu=Mu,Uu=function(r,e){return new(Gu(r))(e===0?0:e)},Ku=I,ku=T,Vu=ke,zu=ku("species"),Yu=function(r){return Vu>=51||!Ku(function(){var e=[],t=e.constructor={};return t[zu]=function(){return{foo:1}},e[r](Boolean).foo!==1})},Wu=dr,qu=I,Ju=ua,Xu=x,Hu=Lr,Qu=Ze,Gt=du,Ut=gu,Zu=Uu,rc=Yu,ec=T,tc=ke,ya=ec("isConcatSpreadable"),nc=tc>=51||!qu(function(){var r=[];return r[ya]=!1,r.concat()[0]!==r}),ac=function(r){if(!Xu(r))return!1;var e=r[ya];return e!==void 0?!!e:Ju(r)},oc=!nc||!rc("concat");Wu({target:"Array",proto:!0,arity:1,forced:oc},{concat:function(e){var t=Hu(this),n=Zu(t,0),a=0,o,i,c,f,v;for(o=-1,c=arguments.length;o<c;o++)if(v=o===-1?t:arguments[o],ac(v))for(f=Qu(v),Gt(a+f),i=0;i<f;i++,a++)i in v&&Ut(n,a,v[i]);else Gt(a+1),Ut(n,a++,v);return n.length=a,n}});var pa={},ic=oa,vc=rt,uc=Object.keys||function(e){return ic(e,vc)},cc=A,sc=Xn,lc=D,fc=F,dc=H,yc=uc;pa.f=cc&&!sc?Object.defineProperties:function(e,t){fc(e);for(var n=dc(t),a=yc(t),o=a.length,i=0,c;o>i;)lc.f(e,c=a[i++],n[c]);return e};var pc=cr,$c=pc("document","documentElement"),gc=F,bc=pa,Kt=rt,hc=Br,Sc=$c,Oc=Je,Ic=He,kt=">",Vt="<",Ae="prototype",je="script",$a=Ic("IE_PROTO"),ue=function(){},ga=function(r){return Vt+je+kt+r+Vt+"/"+je+kt},zt=function(r){r.write(ga("")),r.close();var e=r.parentWindow.Object;return r=null,e},Ec=function(){var r=Oc("iframe"),e="java"+je+":",t;return r.style.display="none",Sc.appendChild(r),r.src=String(e),t=r.contentWindow.document,t.open(),t.write(ga("document.F=Object")),t.close(),t.F},hr,Tr=function(){try{hr=new ActiveXObject("htmlfile")}catch{}Tr=typeof document<"u"?document.domain&&hr?zt(hr):Ec():zt(hr);for(var r=Kt.length;r--;)delete Tr[Ae][Kt[r]];return Tr()};hc[$a]=!0;var Kr=Object.create||function(e,t){var n;return e!==null?(ue[Ae]=gc(e),n=new ue,ue[Ae]=null,n[$a]=e):n=Tr(),t===void 0?n:bc.f(n,t)},mc=T,Tc=Kr,wc=D.f,Ce=mc("unscopables"),_e=Array.prototype;_e[Ce]===void 0&&wc(_e,Ce,{configurable:!0,value:Tc(null)});var Pc=function(r){_e[Ce][r]=!0},yr={},xc=I,Rc=!xc(function(){function r(){}return r.prototype.constructor=null,Object.getPrototypeOf(new r)!==r.prototype}),Ac=L,jc=m,Cc=Lr,_c=He,Dc=Rc,Yt=_c("IE_PROTO"),De=Object,Fc=De.prototype,ba=Dc?De.getPrototypeOf:function(r){var e=Cc(r);if(Ac(e,Yt))return e[Yt];var t=e.constructor;return jc(t)&&e instanceof t?t.prototype:e instanceof De?Fc:null},Nc=I,Lc=m,Bc=x,Wt=ba,Mc=k,Gc=T,Fe=Gc("iterator"),ha=!1,U,ce,se;[].keys&&(se=[].keys(),"next"in se?(ce=Wt(Wt(se)),ce!==Object.prototype&&(U=ce)):ha=!0);var Uc=!Bc(U)||Nc(function(){var r={};return U[Fe].call(r)!==r});Uc&&(U={});Lc(U[Fe])||Mc(U,Fe,function(){return this});var Sa={IteratorPrototype:U,BUGGY_SAFARI_ITERATORS:ha},Kc=D.f,kc=L,Vc=T,qt=Vc("toStringTag"),kr=function(r,e,t){r&&!t&&(r=r.prototype),r&&!kc(r,qt)&&Kc(r,qt,{configurable:!0,value:e})},zc=Sa.IteratorPrototype,Yc=Kr,Wc=_r,qc=kr,Jc=yr,Xc=function(){return this},Hc=function(r,e,t,n){var a=e+" Iterator";return r.prototype=Yc(zc,{next:Wc(+!n,t)}),qc(r,a,!1),Jc[a]=Xc,r},Qc=E,Zc=Fr,rs=function(r,e,t){try{return Qc(Zc(Object.getOwnPropertyDescriptor(r,e)[t]))}catch{}},es=x,ts=function(r){return es(r)||r===null},ns=ts,as=String,os=TypeError,is=function(r){if(ns(r))return r;throw new os("Can't set "+as(r)+" as a prototype")},vs=rs,us=F,cs=is,Oa=Object.setPrototypeOf||("__proto__"in{}?function(){var r=!1,e={},t;try{t=vs(Object.prototype,"__proto__","set"),t(e,[]),r=e instanceof Array}catch{}return function(a,o){return us(a),cs(o),r?t(a,o):a.__proto__=o,a}}():void 0),ss=dr,ls=_,Ia=Zn,fs=m,ds=Hc,Jt=ba,Xt=Oa,ys=kr,ps=sr,le=k,$s=T,gs=yr,Ea=Sa,bs=Ia.PROPER,hs=Ia.CONFIGURABLE,Ht=Ea.IteratorPrototype,Sr=Ea.BUGGY_SAFARI_ITERATORS,tr=$s("iterator"),Qt="keys",nr="values",Zt="entries",Ss=function(){return this},nt=function(r,e,t,n,a,o,i){ds(t,e,n);var c=function(l){if(l===a&&y)return y;if(!Sr&&l&&l in u)return u[l];switch(l){case Qt:return function(){return new t(this,l)};case nr:return function(){return new t(this,l)};case Zt:return function(){return new t(this,l)}}return function(){return new t(this)}},f=e+" Iterator",v=!1,u=r.prototype,p=u[tr]||u["@@iterator"]||a&&u[a],y=!Sr&&p||c(a),d=e==="Array"&&u.entries||p,b,h,O;if(d&&(b=Jt(d.call(new r)),b!==Object.prototype&&b.next&&(Jt(b)!==Ht&&(Xt?Xt(b,Ht):fs(b[tr])||le(b,tr,Ss)),ys(b,f,!0))),bs&&a===nr&&p&&p.name!==nr&&(hs?ps(u,"name",nr):(v=!0,y=function(){return ls(p,this)})),a)if(h={values:c(nr),keys:o?y:c(Qt),entries:c(Zt)},i)for(O in h)(Sr||v||!(O in u))&&le(u,O,h[O]);else ss({target:e,proto:!0,forced:Sr||v},h);return u[tr]!==y&&le(u,tr,y,{name:a}),gs[e]=y,h},at=function(r,e){return{value:r,done:e}},Os=H,ot=Pc,rn=yr,ma=lr,Is=D.f,Es=nt,Or=at,ms=A,Ta="Array Iterator",Ts=ma.set,ws=ma.getterFor(Ta),Ps=Es(Array,"Array",function(r,e){Ts(this,{type:Ta,target:Os(r),index:0,kind:e})},function(){var r=ws(this),e=r.target,t=r.index++;if(!e||t>=e.length)return r.target=void 0,Or(void 0,!0);switch(r.kind){case"keys":return Or(t,!1);case"values":return Or(e[t],!1)}return Or([t,e[t]],!1)},"values"),en=rn.Arguments=rn.Array;ot("keys");ot("values");ot("entries");if(ms&&en.name!=="values")try{Is(en,"name",{value:"values"})}catch{}var xs=et,Rs=Ur,As=xs?{}.toString:function(){return"[object "+Rs(this)+"]"},js=et,Cs=k,_s=As;js||Cs(Object.prototype,"toString",_s,{unsafe:!0});var wa={exports:{}},Pa={},Ds=E,Fs=Ds([].slice),Ns=K,Ls=H,xa=Mr.f,Bs=Fs,Ra=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],Ms=function(r){try{return xa(r)}catch{return Bs(Ra)}};Pa.f=function(e){return Ra&&Ns(e)==="Window"?Ms(e):xa(Ls(e))};var Gs=I,Us=Gs(function(){if(typeof ArrayBuffer=="function"){var r=new ArrayBuffer(8);Object.isExtensible(r)&&Object.defineProperty(r,"a",{value:8})}}),Ks=I,ks=x,Vs=K,tn=Us,wr=Object.isExtensible,zs=Ks(function(){wr(1)}),Ys=zs||tn?function(e){return!ks(e)||tn&&Vs(e)==="ArrayBuffer"?!1:wr?wr(e):!0}:wr,Ws=I,qs=!Ws(function(){return Object.isExtensible(Object.preventExtensions({}))}),Js=dr,Xs=E,Hs=Br,Qs=x,it=L,Zs=D.f,nn=Mr,rl=Pa,vt=Ys,el=qe,tl=qs,Aa=!1,B=el("meta"),nl=0,ut=function(r){Zs(r,B,{value:{objectID:"O"+nl++,weakData:{}}})},al=function(r,e){if(!Qs(r))return typeof r=="symbol"?r:(typeof r=="string"?"S":"P")+r;if(!it(r,B)){if(!vt(r))return"F";if(!e)return"E";ut(r)}return r[B].objectID},ol=function(r,e){if(!it(r,B)){if(!vt(r))return!0;if(!e)return!1;ut(r)}return r[B].weakData},il=function(r){return tl&&Aa&&vt(r)&&!it(r,B)&&ut(r),r},vl=function(){ul.enable=function(){},Aa=!0;var r=nn.f,e=Xs([].splice),t={};t[B]=1,r(t).length&&(nn.f=function(n){for(var a=r(n),o=0,i=a.length;o<i;o++)if(a[o]===B){e(a,o,1);break}return a},Js({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:rl.f}))},ul=wa.exports={enable:vl,fastKey:al,getWeakData:ol,onFreeze:il};Hs[B]=!0;var ja=wa.exports,cl=K,sl=E,ll=function(r){if(cl(r)==="Function")return sl(r)},an=ll,fl=Fr,dl=Cr,yl=an(an.bind),Ca=function(r,e){return fl(r),e===void 0?r:dl?yl(r,e):function(){return r.apply(e,arguments)}},pl=T,$l=yr,gl=pl("iterator"),bl=Array.prototype,hl=function(r){return r!==void 0&&($l.Array===r||bl[gl]===r)},Sl=Ur,on=Nr,Ol=X,Il=yr,El=T,ml=El("iterator"),_a=function(r){if(!Ol(r))return on(r,ml)||on(r,"@@iterator")||Il[Sl(r)]},Tl=_,wl=Fr,Pl=F,xl=Ve,Rl=_a,Al=TypeError,jl=function(r,e){var t=arguments.length<2?Rl(r):e;if(wl(t))return Pl(Tl(t,r));throw new Al(xl(r)+" is not iterable")},Cl=_,vn=F,_l=Nr,Dl=function(r,e,t){var n,a;vn(r);try{if(n=_l(r,"return"),!n){if(e==="throw")throw t;return t}n=Cl(n,r)}catch(o){a=!0,n=o}if(e==="throw")throw t;if(a)throw n;return vn(n),t},Fl=Ca,Nl=_,Ll=F,Bl=Ve,Ml=hl,Gl=Ze,un=Ke,Ul=jl,Kl=_a,cn=Dl,kl=TypeError,Pr=function(r,e){this.stopped=r,this.result=e},sn=Pr.prototype,Da=function(r,e,t){var n=t&&t.that,a=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),i=!!(t&&t.IS_ITERATOR),c=!!(t&&t.INTERRUPTED),f=Fl(e,n),v,u,p,y,d,b,h,O=function(s){return v&&cn(v,"normal",s),new Pr(!0,s)},l=function(s){return a?(Ll(s),c?f(s[0],s[1],O):f(s[0],s[1])):c?f(s,O):f(s)};if(o)v=r.iterator;else if(i)v=r;else{if(u=Kl(r),!u)throw new kl(Bl(r)+" is not iterable");if(Ml(u)){for(p=0,y=Gl(r);y>p;p++)if(d=l(r[p]),d&&un(sn,d))return d;return new Pr(!1)}v=Ul(r,u)}for(b=o?r.next:v.next;!(h=Nl(b,v)).done;){try{d=l(h.value)}catch(s){cn(v,"throw",s)}if(typeof d=="object"&&d&&un(sn,d))return d}return new Pr(!1)},Vl=Ke,zl=TypeError,Fa=function(r,e){if(Vl(e,r))return r;throw new zl("Incorrect invocation")},Yl=T,Na=Yl("iterator"),La=!1;try{var Wl=0,ln={next:function(){return{done:!!Wl++}},return:function(){La=!0}};ln[Na]=function(){return this},Array.from(ln,function(){throw 2})}catch{}var ql=function(r,e){try{if(!e&&!La)return!1}catch{return!1}var t=!1;try{var n={};n[Na]=function(){return{next:function(){return{done:t=!0}}}},r(n)}catch{}return t},Jl=m,Xl=x,fn=Oa,Hl=function(r,e,t){var n,a;return fn&&Jl(n=e.constructor)&&n!==t&&Xl(a=n.prototype)&&a!==t.prototype&&fn(r,a),r},Ql=dr,Zl=w,rf=E,dn=va,ef=k,tf=ja,nf=Da,af=Fa,of=m,vf=X,fe=x,de=I,uf=ql,cf=kr,sf=Hl,lf=function(r,e,t){var n=r.indexOf("Map")!==-1,a=r.indexOf("Weak")!==-1,o=n?"set":"add",i=Zl[r],c=i&&i.prototype,f=i,v={},u=function(l){var s=rf(c[l]);ef(c,l,l==="add"?function(g){return s(this,g===0?0:g),this}:l==="delete"?function($){return a&&!fe($)?!1:s(this,$===0?0:$)}:l==="get"?function(g){return a&&!fe(g)?void 0:s(this,g===0?0:g)}:l==="has"?function(g){return a&&!fe(g)?!1:s(this,g===0?0:g)}:function(g,S){return s(this,g===0?0:g,S),this})},p=dn(r,!of(i)||!(a||c.forEach&&!de(function(){new i().entries().next()})));if(p)f=t.getConstructor(e,r,n,o),tf.enable();else if(dn(r,!0)){var y=new f,d=y[o](a?{}:-0,1)!==y,b=de(function(){y.has(1)}),h=uf(function(l){new i(l)}),O=!a&&de(function(){for(var l=new i,s=5;s--;)l[o](s,s);return!l.has(-0)});h||(f=e(function(l,s){af(l,c);var $=sf(new i,l,f);return vf(s)||nf(s,$[o],{that:$,AS_ENTRIES:n}),$}),f.prototype=c,c.constructor=f),(b||O)&&(u("delete"),u("has"),n&&u("get")),(O||d)&&u(o),a&&c.clear&&delete c.clear}return v[r]=f,Ql({global:!0,constructor:!0,forced:f!==i},v),cf(f,r),a||t.setStrong(f,r,n),f},yn=na,ff=D,Ba=function(r,e,t){return t.get&&yn(t.get,e,{getter:!0}),t.set&&yn(t.set,e,{setter:!0}),ff.f(r,e,t)},df=k,yf=function(r,e,t){for(var n in e)df(r,n,e[n],t);return r},pf=cr,$f=Ba,gf=T,bf=A,pn=gf("species"),hf=function(r){var e=pf(r);bf&&e&&!e[pn]&&$f(e,pn,{configurable:!0,get:function(){return this}})},$n=Kr,Sf=Ba,gn=yf,Of=Ca,If=Fa,Ef=X,mf=Da,Tf=nt,Ir=at,wf=hf,ar=A,bn=ja.fastKey,Ma=lr,hn=Ma.set,ye=Ma.getterFor,Pf={getConstructor:function(r,e,t,n){var a=r(function(v,u){If(v,o),hn(v,{type:e,index:$n(null),first:void 0,last:void 0,size:0}),ar||(v.size=0),Ef(u)||mf(u,v[n],{that:v,AS_ENTRIES:t})}),o=a.prototype,i=ye(e),c=function(v,u,p){var y=i(v),d=f(v,u),b,h;return d?d.value=p:(y.last=d={index:h=bn(u,!0),key:u,value:p,previous:b=y.last,next:void 0,removed:!1},y.first||(y.first=d),b&&(b.next=d),ar?y.size++:v.size++,h!=="F"&&(y.index[h]=d)),v},f=function(v,u){var p=i(v),y=bn(u),d;if(y!=="F")return p.index[y];for(d=p.first;d;d=d.next)if(d.key===u)return d};return gn(o,{clear:function(){for(var u=this,p=i(u),y=p.first;y;)y.removed=!0,y.previous&&(y.previous=y.previous.next=void 0),y=y.next;p.first=p.last=void 0,p.index=$n(null),ar?p.size=0:u.size=0},delete:function(v){var u=this,p=i(u),y=f(u,v);if(y){var d=y.next,b=y.previous;delete p.index[y.index],y.removed=!0,b&&(b.next=d),d&&(d.previous=b),p.first===y&&(p.first=d),p.last===y&&(p.last=b),ar?p.size--:u.size--}return!!y},forEach:function(u){for(var p=i(this),y=Of(u,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:p.first;)for(y(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(u){return!!f(this,u)}}),gn(o,t?{get:function(u){var p=f(this,u);return p&&p.value},set:function(u,p){return c(this,u===0?0:u,p)}}:{add:function(u){return c(this,u=u===0?0:u,u)}}),ar&&Sf(o,"size",{configurable:!0,get:function(){return i(this).size}}),a},setStrong:function(r,e,t){var n=e+" Iterator",a=ye(e),o=ye(n);Tf(r,e,function(i,c){hn(this,{type:n,target:i,state:a(i),kind:c,last:void 0})},function(){for(var i=o(this),c=i.kind,f=i.last;f&&f.removed;)f=f.previous;return!i.target||!(i.last=f=f?f.next:i.state.first)?(i.target=void 0,Ir(void 0,!0)):Ir(c==="keys"?f.key:c==="values"?f.value:[f.key,f.value],!1)},t?"entries":"values",!t,!0),wf(e)}},xf=lf,Rf=Pf;xf("Set",function(r){return function(){return r(this,arguments.length?arguments[0]:void 0)}},Rf);var Af=Ur,jf=String,Vr=function(r){if(Af(r)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return jf(r)},ct=E,Cf=Gr,_f=Vr,Df=Dr,Ff=ct("".charAt),Sn=ct("".charCodeAt),Nf=ct("".slice),On=function(r){return function(e,t){var n=_f(Df(e)),a=Cf(t),o=n.length,i,c;return a<0||a>=o?r?"":void 0:(i=Sn(n,a),i<55296||i>56319||a+1===o||(c=Sn(n,a+1))<56320||c>57343?r?Ff(n,a):i:r?Nf(n,a,a+2):(i-55296<<10)+(c-56320)+65536)}},Ga={codeAt:On(!1),charAt:On(!0)},Lf=Ga.charAt,Bf=Vr,Ua=lr,Mf=nt,In=at,Ka="String Iterator",Gf=Ua.set,Uf=Ua.getterFor(Ka);Mf(String,"String",function(r){Gf(this,{type:Ka,string:Bf(r),index:0})},function(){var e=Uf(this),t=e.string,n=e.index,a;return n>=t.length?In(void 0,!0):(a=Lf(t,n),e.index+=a.length,In(a,!1))});var Kf={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},kf=Je,pe=kf("span").classList,En=pe&&pe.constructor&&pe.constructor.prototype,Vf=En===Object.prototype?void 0:En,mn=w,ka=Kf,zf=Vf,or=Ps,Tn=sr,Yf=kr,Wf=T,$e=Wf("iterator"),ge=or.values,Va=function(r,e){if(r){if(r[$e]!==ge)try{Tn(r,$e,ge)}catch{r[$e]=ge}if(Yf(r,e,!0),ka[e]){for(var t in or)if(r[t]!==or[t])try{Tn(r,t,or[t])}catch{r[t]=or[t]}}}};for(var be in ka)Va(mn[be]&&mn[be].prototype,be);Va(zf,"DOMTokenList");var qf=F,Jf=function(){var r=qf(this),e="";return r.hasIndices&&(e+="d"),r.global&&(e+="g"),r.ignoreCase&&(e+="i"),r.multiline&&(e+="m"),r.dotAll&&(e+="s"),r.unicode&&(e+="u"),r.unicodeSets&&(e+="v"),r.sticky&&(e+="y"),e},st=I,Xf=w,lt=Xf.RegExp,ft=st(function(){var r=lt("a","y");return r.lastIndex=2,r.exec("abcd")!==null}),Hf=ft||st(function(){return!lt("a","y").sticky}),Qf=ft||st(function(){var r=lt("^r","gy");return r.lastIndex=2,r.exec("str")!==null}),Zf={BROKEN_CARET:Qf,MISSED_STICKY:Hf,UNSUPPORTED_Y:ft},rd=I,ed=w,td=ed.RegExp,nd=rd(function(){var r=td(".","s");return!(r.dotAll&&r.test(`
`)&&r.flags==="s")}),ad=I,od=w,id=od.RegExp,vd=ad(function(){var r=id("(?<a>b)","g");return r.exec("b").groups.a!=="b"||"b".replace(r,"$<a>c")!=="bc"}),J=_,zr=E,ud=Vr,cd=Jf,sd=Zf,ld=We,fd=Kr,dd=lr.get,yd=nd,pd=vd,$d=ld("native-string-replace",String.prototype.replace),jr=RegExp.prototype.exec,Ne=jr,gd=zr("".charAt),bd=zr("".indexOf),hd=zr("".replace),he=zr("".slice),Le=function(){var r=/a/,e=/b*/g;return J(jr,r,"a"),J(jr,e,"a"),r.lastIndex!==0||e.lastIndex!==0}(),za=sd.BROKEN_CARET,Be=/()??/.exec("")[1]!==void 0,Sd=Le||Be||za||yd||pd;Sd&&(Ne=function(e){var t=this,n=dd(t),a=ud(e),o=n.raw,i,c,f,v,u,p,y;if(o)return o.lastIndex=t.lastIndex,i=J(Ne,o,a),t.lastIndex=o.lastIndex,i;var d=n.groups,b=za&&t.sticky,h=J(cd,t),O=t.source,l=0,s=a;if(b&&(h=hd(h,"y",""),bd(h,"g")===-1&&(h+="g"),s=he(a,t.lastIndex),t.lastIndex>0&&(!t.multiline||t.multiline&&gd(a,t.lastIndex-1)!==`
`)&&(O="(?: "+O+")",s=" "+s,l++),c=new RegExp("^(?:"+O+")",h)),Be&&(c=new RegExp("^"+O+"$(?!\\s)",h)),Le&&(f=t.lastIndex),v=J(jr,b?c:t,s),b?v?(v.input=he(v.input,l),v[0]=he(v[0],l),v.index=t.lastIndex,t.lastIndex+=v[0].length):t.lastIndex=0:Le&&v&&(t.lastIndex=t.global?v.index+v[0].length:f),Be&&v&&v.length>1&&J($d,v[0],c,function(){for(u=1;u<arguments.length-2;u++)arguments[u]===void 0&&(v[u]=void 0)}),v&&d)for(v.groups=p=fd(null),u=0;u<d.length;u++)y=d[u],p[y[0]]=v[y[1]];return v});var dt=Ne,Od=dr,wn=dt;Od({target:"RegExp",proto:!0,forced:/./.exec!==wn},{exec:wn});var Id=Cr,Ya=Function.prototype,Pn=Ya.apply,xn=Ya.call,Ed=typeof Reflect=="object"&&Reflect.apply||(Id?xn.bind(Pn):function(){return xn.apply(Pn,arguments)}),Rn=_,An=k,md=dt,jn=I,Wa=T,Td=sr,wd=Wa("species"),Se=RegExp.prototype,Pd=function(r,e,t,n){var a=Wa(r),o=!jn(function(){var v={};return v[a]=function(){return 7},""[r](v)!==7}),i=o&&!jn(function(){var v=!1,u=/a/;return r==="split"&&(u={},u.constructor={},u.constructor[wd]=function(){return u},u.flags="",u[a]=/./[a]),u.exec=function(){return v=!0,null},u[a](""),!v});if(!o||!i||t){var c=/./[a],f=e(a,""[r],function(v,u,p,y,d){var b=u.exec;return b===md||b===Se.exec?o&&!d?{done:!0,value:Rn(c,u,p,y)}:{done:!0,value:Rn(v,p,u,y)}:{done:!1}});An(String.prototype,r,f[0]),An(Se,a,f[1])}n&&Td(Se[a],"sham",!0)},xd=Ga.charAt,Rd=function(r,e,t){return e+(t?xd(r,e).length:1)},yt=E,Ad=Lr,jd=Math.floor,Oe=yt("".charAt),Cd=yt("".replace),Ie=yt("".slice),_d=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,Dd=/\$([$&'`]|\d{1,2})/g,Fd=function(r,e,t,n,a,o){var i=t+r.length,c=n.length,f=Dd;return a!==void 0&&(a=Ad(a),f=_d),Cd(o,f,function(v,u){var p;switch(Oe(u,0)){case"$":return"$";case"&":return r;case"`":return Ie(e,0,t);case"'":return Ie(e,i);case"<":p=a[Ie(u,1,-1)];break;default:var y=+u;if(y===0)return v;if(y>c){var d=jd(y/10);return d===0?v:d<=c?n[d-1]===void 0?Oe(u,1):n[d-1]+Oe(u,1):v}p=n[y-1]}return p===void 0?"":p})},Cn=_,Nd=F,Ld=m,Bd=K,Md=dt,Gd=TypeError,Ud=function(r,e){var t=r.exec;if(Ld(t)){var n=Cn(t,r,e);return n!==null&&Nd(n),n}if(Bd(r)==="RegExp")return Cn(Md,r,e);throw new Gd("RegExp#exec called on incompatible receiver")},Kd=Ed,_n=_,Yr=E,kd=Pd,Vd=I,zd=F,Yd=m,Wd=X,qd=Gr,Jd=aa,Y=Vr,Xd=Dr,Hd=Rd,Qd=Nr,Zd=Fd,ry=Ud,ey=T,Me=ey("replace"),ty=Math.max,ny=Math.min,ay=Yr([].concat),Ee=Yr([].push),Dn=Yr("".indexOf),Fn=Yr("".slice),oy=function(r){return r===void 0?r:String(r)},iy=function(){return"a".replace(/./,"$0")==="$0"}(),Nn=function(){return/./[Me]?/./[Me]("a","$0")==="":!1}(),vy=!Vd(function(){var r=/./;return r.exec=function(){var e=[];return e.groups={a:"7"},e},"".replace(r,"$<a>")!=="7"});kd("replace",function(r,e,t){var n=Nn?"$":"$0";return[function(o,i){var c=Xd(this),f=Wd(o)?void 0:Qd(o,Me);return f?_n(f,o,c,i):_n(e,Y(c),o,i)},function(a,o){var i=zd(this),c=Y(a);if(typeof o=="string"&&Dn(o,n)===-1&&Dn(o,"$<")===-1){var f=t(e,i,c,o);if(f.done)return f.value}var v=Yd(o);v||(o=Y(o));var u=i.global,p;u&&(p=i.unicode,i.lastIndex=0);for(var y=[],d;d=ry(i,c),!(d===null||(Ee(y,d),!u));){var b=Y(d[0]);b===""&&(i.lastIndex=Hd(c,Jd(i.lastIndex),p))}for(var h="",O=0,l=0;l<y.length;l++){d=y[l];for(var s=Y(d[0]),$=ty(ny(qd(d.index),c.length),0),g=[],S,V=1;V<d.length;V++)Ee(g,oy(d[V]));var Q=d.groups;if(v){var Z=ay([s],g,$,c);Q!==void 0&&Ee(Z,Q),S=Y(Kd(o,void 0,Z))}else S=Zd(s,c,$,g,Q,o);$>=O&&(h+=Fn(c,O,$)+S,O=$+s.length)}return h+Fn(c,O)}]},!vy||!iy||Nn);var ir;typeof window<"u"?ir=window:typeof G<"u"?ir=G:typeof self<"u"?ir=self:ir={};var uy=ir;const qa=Ja(uy);var cy=qa.LOGLEVEL,R=qa.console,M={trace:1,debug:2,info:3,warn:4,error:5,silent:10},sy=cy,W=M[sy]||M.info,ur={trace:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return W<=M.trace&&R.trace.apply(R,[e].concat(n))},debug:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return W<=M.debug&&R.debug.apply(R,[e].concat(n))},info:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return W<=M.info&&R.info.apply(R,[e].concat(n))},warn:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return W<=M.warn&&R.warn.apply(R,[e].concat(n))},error:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return W<=M.error&&R.error.apply(R,[e].concat(n))},log:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return W<M.silent&&R.log.apply(R,[e].concat(n))}},Ge=new Set,P=function(e){return function(t){if(!Ge.has(t)){Ge.add(t);for(var n=arguments.length,a=new Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];return ur[e].apply(ur,[t].concat(a))}}};P.clear=function(){return Ge.clear()};P.trace=P("trace");P.debug=P("debug");P.info=P("info");P.warn=P("warn");P.error=P("error");P.log=P("log");var C=function(e){return function(){for(var t=[],n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];if(a.length){var i=/<span\s+style=(['"])([^'"]*)\1\s*>/gi,c=/<\/span>/gi,f;for(t.push(a[0].replace(i,"%c").replace(c,"%c"));f=i.exec(a[0]);)t.push(f[2]),t.push("");for(var v=1;v<a.length;v++)t.push(a[v])}ur[e].apply(ur,t)}};C.trace=C("trace");C.debug=C("debug");C.info=C("info");C.warn=C("warn");C.error=C("error");const ly=Object.freeze(Object.defineProperty({__proto__:null,logger:ur,once:P,pretty:C},Symbol.toStringTag,{value:"Module"})),fy=Xa(ly);(function(r){var e=G&&G.__assign||function(){return e=Object.assign||function(l){for(var s,$=1,g=arguments.length;$<g;$++){s=arguments[$];for(var S in s)Object.prototype.hasOwnProperty.call(s,S)&&(l[S]=s[S])}return l},e.apply(this,arguments)};Object.defineProperty(r,"__esModule",{value:!0}),r.extractComponentDescription=r.extractArgTypes=r.extractArgTypesFactory=r.extractArgTypesFromElements=r.getStencilDocJson=r.setStencilDocJson=void 0;var t=fy,n=function(l){if(!l)return!1;if(typeof l=="string")return!0;throw new Error('Provided component needs to be a string. e.g. component: "my-element"')},a=function(l){if(!l)return!1;if(l.components&&Array.isArray(l.components))return!0;throw new Error(`You need to setup valid meta data in your preview.js via setStencilDocJson().
    The meta data can be generated with the stencil output target 'docs-json'.`)},o=function(l,s){if(!n(l)||!a(s))return null;var $=s.components.find(function(g){return g.tag.toUpperCase()===l.toUpperCase()});return $||t.logger.warn("Component not found in stencil doc json: ".concat(l)),$},i=function(l){return l.values.filter(function(s){return["string","number"].includes(s.type)}).map(function(s){return s.value})},c=function(l){var s,$=null;switch(l.type){case"string":s={type:"text"};break;case"number":s={type:"number"};break;case"boolean":s={type:"boolean"};break;case"function":case"void":s=null;break;default:$=i(l),$.length===0?s={type:"object"}:$.length<5?s={type:"radio"}:s={type:"select"}}return{control:s,options:$}},f=function(l,s){var $=s.dashCase;return l&&l.reduce(function(g,S){var V=c(S),Q=V.control,Z=V.options,pt=$===!0&&S.attr||S.name;return g[pt]={name:S.attr||S.name,description:S.docs,type:{required:S.required},control:Q,table:{category:"props",type:{summary:S.type},defaultValue:{summary:S.default}}},Z!==null&&(g[pt].options=Z),g},{})},v=function(l){return l&&l.reduce(function(s,$){return s["event-".concat($.event)]={name:$.event,description:$.docs,type:{name:"void"},control:null,table:{category:"events",type:{summary:$.detail}}},s},{})},u=function(l){return l&&l.reduce(function(s,$){return s["method-".concat($.name)]={name:$.name,description:$.docs,type:{name:"void"},control:null,table:{category:"methods",type:{summary:$.signature}}},s},{})},p=function(l,s){return l&&l.reduce(function($,g){var S={name:"void"};return $["".concat(s.replace(/\s/g,"-").toLowerCase(),"-").concat(g.name)]={name:g.name,required:!1,description:g.docs,control:null,type:S,table:{category:s,type:S}},$},{})},y=function(l){window.__STORYBOOK_STENCIL_DOC_JSON__=l};r.setStencilDocJson=y;var d=function(){return window.__STORYBOOK_STENCIL_DOC_JSON__};r.getStencilDocJson=d;var b=function(l,s,$){var g=o(l,s);return g&&e(e(e(e(e(e({},f(g.props,$)),v(g.events)),u(g.methods)),p(g.slots,"slots")),p(g.styles,"css custom properties")),p(g.parts,"css shadow parts"))};r.extractArgTypesFromElements=b;var h=function(l){return l===void 0&&(l={}),function(s){return(0,r.extractArgTypesFromElements)(s,(0,r.getStencilDocJson)(),e({dashCase:!1},l))}};r.extractArgTypesFactory=h,r.extractArgTypes=(0,r.extractArgTypesFactory)();var O=function(l){var s=o(l,(0,r.getStencilDocJson)());return s&&(s.readme||s.docs)};r.extractComponentDescription=O})(Ha);export{Ha as d};
