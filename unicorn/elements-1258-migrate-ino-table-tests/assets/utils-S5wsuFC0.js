function d(){const a=document.querySelector("ino-radio-group"),e=document.querySelector(".datepicker-group ino-datepicker"),t=document.querySelector(".today"),r=document.querySelector(".thisWeek"),l=document.querySelector(".lastWeek"),n=()=>{e.value="02.03.2020",e.label="Am",a.value="at",e.range=!1},c=()=>{a.value="range",e.label="Zeitraum",e.range=!0,e.value="02.03.2020 bis 08.03.2020"},i=()=>{a.value="range",e.label="Zeitraum",e.range=!0,e.value="24.02.2020 bis 01.03.2020"},s=u=>{const o=u.target;switch(o.value){case"at":e.label="Am",e.range=!1;break;case"after":e.label="Ab",e.range=!1,a.value=="range"&&(e.value=e.value.split(" - ").shift());break;case"before":e.label="Bis",e.range=!1,a.value=="range"&&(e.value=e.value.split(" - ").pop());break;case"range":e.range=!0,e.label="Zeitraum";break}a.value=o.value};return t.addEventListener("click",n),r.addEventListener("click",c),l.addEventListener("click",i),a.addEventListener("checkedChange",s),()=>{t.removeEventListener("click",n),r.removeEventListener("click",c),l.removeEventListener("click",i),a.removeEventListener("checkedChange",s)}}export{d as r};
