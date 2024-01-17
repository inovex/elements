try{
(()=>{var S=__STORYBOOK_ADDONS__,{addons:r,types:y,mockChannel:f}=__STORYBOOK_ADDONS__;var s="post-current-story";r.register(s,a=>{function t(){let{storyId:_}=a.getUrlState();window.parent.postMessage({type:s,storyId:_},"*")}t();let d=setInterval(t,1e3);window.addEventListener("beforeunload",()=>clearInterval(d))});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
