function getCurrentTime(){const t=new Date,n=t.getHours(),e=t.getMinutes();return`${n}:${e.length<1?"0"+e:e}`}async function getURL(){const{url:t}=await getCurrentTab();return t}async function getCurrentTab(){let[t]=await chrome.tabs.query({active:!0,currentWindow:!0});return t}document.addEventListener("DOMContentLoaded",(async function(){}));