(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6544],{4793:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/explore",function(){return __webpack_require__(9071)}])},4564:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),_elements__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7332),classnames__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4184),classnames__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),_card_module_scss__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5222),_card_module_scss__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_card_module_scss__WEBPACK_IMPORTED_MODULE_3__);let Card=param=>{let{content,footer,cardClassName,footerClassName}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_elements__WEBPACK_IMPORTED_MODULE_1__.cU,{className:classnames__WEBPACK_IMPORTED_MODULE_2___default()([_card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().card,cardClassName]),disableElevation:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:_card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content,slot:"content",children:content}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{slot:"footer",className:classnames__WEBPACK_IMPORTED_MODULE_2___default()(footerClassName),children:footer})]})};__webpack_exports__.Z=Card},7645:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(dynamicOptions,options){let loadableFn=_loadable.default,loadableOptions=(null==options?void 0:options.suspense)?{}:{loading(param){let{error,isLoading,pastDelay}=param;return null}};if(dynamicOptions instanceof Promise?loadableOptions.loader=()=>dynamicOptions:"function"==typeof dynamicOptions?loadableOptions.loader=dynamicOptions:"object"==typeof dynamicOptions&&(loadableOptions=_extends({},loadableOptions,dynamicOptions)),(loadableOptions=_extends({},loadableOptions,options)).suspense&&(delete loadableOptions.ssr,delete loadableOptions.loading),loadableOptions.loadableGenerated&&delete(loadableOptions=_extends({},loadableOptions,loadableOptions.loadableGenerated)).loadableGenerated,"boolean"==typeof loadableOptions.ssr&&!loadableOptions.suspense){if(!loadableOptions.ssr)return delete loadableOptions.ssr,noSSR(loadableFn,loadableOptions);delete loadableOptions.ssr}return loadableFn(loadableOptions)},exports.noSSR=noSSR;var _extends=__webpack_require__(9419).Z,_interop_require_default=__webpack_require__(3903).Z,_loadable=(_interop_require_default(__webpack_require__(7294)),_interop_require_default(__webpack_require__(4588)));function noSSR(LoadableInitializer,loadableOptions){return delete loadableOptions.webpack,delete loadableOptions.modules,LoadableInitializer(loadableOptions)}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},3644:function(__unused_webpack_module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LoadableContext=void 0;var _react=(0,__webpack_require__(3903).Z)(__webpack_require__(7294));let LoadableContext=_react.default.createContext(null);exports.LoadableContext=LoadableContext},4588:function(__unused_webpack_module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends=__webpack_require__(9419).Z,_react=(0,__webpack_require__(199).Z)(__webpack_require__(7294)),_loadableContext=__webpack_require__(3644);let ALL_INITIALIZERS=[],READY_INITIALIZERS=[],initialized=!1;function load(loader){let promise=loader(),state={loading:!0,loaded:null,error:null};return state.promise=promise.then(loaded=>(state.loading=!1,state.loaded=loaded,loaded)).catch(err=>{throw state.loading=!1,state.error=err,err}),state}class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:res,_opts:opts}=this;res.loading&&("number"==typeof opts.delay&&(0===opts.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},opts.delay)),"number"==typeof opts.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},opts.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(_err=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(partial){this._state=_extends({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},partial),this._callbacks.forEach(callback=>callback())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(callback){return this._callbacks.add(callback),()=>{this._callbacks.delete(callback)}}constructor(loadFn,opts){this._loadFn=loadFn,this._opts=opts,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function Loadable(opts){return function(loadFn,options){let opts=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},options);opts.suspense&&(opts.lazy=_react.default.lazy(opts.loader));let subscription=null;function init(){if(!subscription){let sub=new LoadableSubscription(loadFn,opts);subscription={getCurrentValue:sub.getCurrentValue.bind(sub),subscribe:sub.subscribe.bind(sub),retry:sub.retry.bind(sub),promise:sub.promise.bind(sub)}}return subscription.promise()}if(!initialized){let moduleIds=opts.webpack?opts.webpack():opts.modules;moduleIds&&READY_INITIALIZERS.push(ids=>{for(let moduleId of moduleIds)if(-1!==ids.indexOf(moduleId))return init()})}function useLoadableModule(){init();let context=_react.default.useContext(_loadableContext.LoadableContext);context&&Array.isArray(opts.modules)&&opts.modules.forEach(moduleName=>{context(moduleName)})}let LoadableComponent=opts.suspense?function(props,ref){return useLoadableModule(),_react.default.createElement(opts.lazy,_extends({},props,{ref}))}:function(props,ref){useLoadableModule();let state=_react.useSyncExternalStore(subscription.subscribe,subscription.getCurrentValue,subscription.getCurrentValue);return _react.default.useImperativeHandle(ref,()=>({retry:subscription.retry}),[]),_react.default.useMemo(()=>{var obj;return state.loading||state.error?_react.default.createElement(opts.loading,{isLoading:state.loading,pastDelay:state.pastDelay,timedOut:state.timedOut,error:state.error,retry:subscription.retry}):state.loaded?_react.default.createElement((obj=state.loaded)&&obj.__esModule?obj.default:obj,props):null},[props,state])};return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",_react.default.forwardRef(LoadableComponent)}(load,opts)}function flushInitializers(initializers,ids){let promises=[];for(;initializers.length;){let init=initializers.pop();promises.push(init(ids))}return Promise.all(promises).then(()=>{if(initializers.length)return flushInitializers(initializers,ids)})}Loadable.preloadAll=()=>new Promise((resolveInitializers,reject)=>{flushInitializers(ALL_INITIALIZERS).then(resolveInitializers,reject)}),Loadable.preloadReady=function(){let ids=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(resolvePreload=>{let res=()=>(initialized=!0,resolvePreload());flushInitializers(READY_INITIALIZERS,ids).then(res,res)})},window.__NEXT_PRELOADREADY=Loadable.preloadReady,exports.default=Loadable},5030:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__N_SSG:function(){return __N_SSG},default:function(){return about}});var GITHUB_CONTRIBUTOR_ID_WHITELIST,GITHUB_CONTRIBUTOR_ID_WHITELIST1,jsx_runtime=__webpack_require__(5893),contributor_card_module=__webpack_require__(8098),contributor_card_module_default=__webpack_require__.n(contributor_card_module),card=__webpack_require__(4564),next_image=__webpack_require__(5675),image_default=__webpack_require__.n(next_image),next_link=__webpack_require__(1664),link_default=__webpack_require__.n(next_link);let ContributorsCard=param=>{let{username,avatarUrl,profileLink}=param;return(0,jsx_runtime.jsx)(card.Z,{cardClassName:contributor_card_module_default().contributorCard,content:(0,jsx_runtime.jsx)(image_default(),{className:contributor_card_module_default().Image,src:avatarUrl,width:100,height:100,alt:"Avatar of ".concat(username)}),footerClassName:contributor_card_module_default().footer,footer:(0,jsx_runtime.jsx)(link_default(),{href:profileLink,target:"_blank",children:username})})};var about_module=__webpack_require__(5169),about_module_default=__webpack_require__.n(about_module);(GITHUB_CONTRIBUTOR_ID_WHITELIST=GITHUB_CONTRIBUTOR_ID_WHITELIST1||(GITHUB_CONTRIBUTOR_ID_WHITELIST1={}))[GITHUB_CONTRIBUTOR_ID_WHITELIST.janivo=22963121]="janivo",GITHUB_CONTRIBUTOR_ID_WHITELIST[GITHUB_CONTRIBUTOR_ID_WHITELIST.silentHoo=1610894]="silentHoo",GITHUB_CONTRIBUTOR_ID_WHITELIST[GITHUB_CONTRIBUTOR_ID_WHITELIST.pfecht=26819398]="pfecht",GITHUB_CONTRIBUTOR_ID_WHITELIST[GITHUB_CONTRIBUTOR_ID_WHITELIST.BenPag=23154336]="BenPag",GITHUB_CONTRIBUTOR_ID_WHITELIST[GITHUB_CONTRIBUTOR_ID_WHITELIST.JCofman=2118956]="JCofman",GITHUB_CONTRIBUTOR_ID_WHITELIST[GITHUB_CONTRIBUTOR_ID_WHITELIST.Sl1nd=12165722]="Sl1nd",GITHUB_CONTRIBUTOR_ID_WHITELIST[GITHUB_CONTRIBUTOR_ID_WHITELIST.MariaLStefan=103122411]="MariaLStefan",GITHUB_CONTRIBUTOR_ID_WHITELIST[GITHUB_CONTRIBUTOR_ID_WHITELIST.AlessaRad=76041234]="AlessaRad",GITHUB_CONTRIBUTOR_ID_WHITELIST[GITHUB_CONTRIBUTOR_ID_WHITELIST.TobiasHeimGalindo=81302108]="TobiasHeimGalindo";var __N_SSG=!0,about=function(param){let{users=[]}=param;return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("section",{children:(0,jsx_runtime.jsxs)("h1",{className:about_module_default().header,children:["the ",(0,jsx_runtime.jsx)("b",{children:"contributors"})]})}),(0,jsx_runtime.jsx)("div",{className:about_module_default().container,children:users.map(contributor=>(0,jsx_runtime.jsx)(ContributorsCard,{avatarUrl:contributor.avatar_url,username:contributor.login,profileLink:contributor.html_url},contributor.id))})]})}},7332:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{$U:function(){return InoIcon},Hh:function(){return InoSegmentButton},K_:function(){return InoSegmentGroup},X$:function(){return InoTextarea},Y$:function(){return InoControlItem},cU:function(){return InoCard},d:function(){return InoRange},dq:function(){return InoList},qo:function(){return InoInput},v$:function(){return InoButton},v6:function(){return InoSwitch},vr:function(){return InoChip}});var next_dynamic__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5152),next_dynamic__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);let importElement=element=>next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(Promise.all([__webpack_require__.e(13),__webpack_require__.e(5722)]).then(__webpack_require__.bind(__webpack_require__,5722)).then(m=>m[element]),{loadableGenerated:{webpack:()=>[5722]},ssr:!1}),InoButton=importElement("InoButton"),InoChip=importElement("InoChip");importElement("InoTab"),importElement("InoTabBar"),importElement("InoTooltip");let InoIcon=importElement("InoIcon");importElement("InoPopover");let InoRange=importElement("InoRange");importElement("InoSnackbar");let InoInput=importElement("InoInput"),InoSwitch=importElement("InoSwitch"),InoControlItem=importElement("InoControlItem"),InoSegmentGroup=importElement("InoSegmentGroup"),InoCard=importElement("InoCard"),InoList=importElement("InoList"),InoSegmentButton=importElement("InoSegmentButton"),InoTextarea=importElement("InoTextarea")},9071:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1151),_about__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5030),_elements__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7332);function _createMdxContent(props){let _components=Object.assign({h1:"h1",ul:"ul",li:"li",p:"p"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1,{children:"My MDX page"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{children:"This is a list in markdown:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li,{children:"One"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li,{children:"Two"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li,{children:"Three"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p,{children:["Checkout my React component:\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_elements__WEBPACK_IMPORTED_MODULE_2__.vr,{children:"Chip"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_about__WEBPACK_IMPORTED_MODULE_1__.default,{})]})}__webpack_exports__.default=function(){let props=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:MDXLayout}=Object.assign({},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},8098:function(module){module.exports={contributorCard:"contributor-card_contributorCard__vLovC",footer:"contributor-card_footer__c_kMS",Image:"contributor-card_Image__TqdTm"}},5222:function(module){module.exports={card:"card_card__CZcwQ",content:"card_content__dTI7V",component:"card_component__pUR_Z",label:"card_label__IvoqR"}},5169:function(module){module.exports={header:"about_header__41YKz",container:"about_container__FyjFu"}},5152:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(7645)},1151:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{ah:function(){return useMDXComponents}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7294);let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}}},function(__webpack_require__){__webpack_require__.O(0,[9774,2888,179],function(){return __webpack_require__(__webpack_require__.s=4793)}),_N_E=__webpack_require__.O()}]);