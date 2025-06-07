import{a as d,S as g,i as s}from"./assets/vendor-frHSA4Lh.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function p(o,a=1){const r="https://pixabay.com/api/";try{return(await d.get(r,{params:{key:"50483673-3addba2370166e44fbbdc4d02",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:15}})).data}catch(i){return console.error(i),null}}const n=document.querySelector(".loader"),c=document.querySelector(".gallery"),f=document.querySelector(".more-button"),y=new g(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"});function h(o){const a=o.map(({webformatURL:r,largeImageURL:i,tags:e,likes:t,views:l,comments:u,downloads:m})=>`<li class="gallery-item">
              <a class="gallery-link" href=${i}>
                <img
                  src=${r}
                  alt="${e}"
                  width="360"
                  height="200"
                />
                <div class="markup-image">
                  <ul>
                    <li class="markup-image-text">likes</li>
                    <li class="markup-image-value">${t}</li>      
                  </ul>
                  <ul>
                    <li class="markup-image-text">views</li>
                    <li class="markup-image-value">${l}</li>      
                  </ul>
                  <ul>
                    <li class="markup-image-text">comments</li>
                    <li class="markup-image-value">${u}</li>      
                  </ul>
                  <ul>
                    <li class="markup-image-text">downloads</li>
                    <li class="markup-image-value">${m}</li>      
                  </ul>
                </div>
              </a>
            </li>`).join("");c.innerHTML=a,y.refresh()}function b(){c.innerHTML=""}function w(){n.style.display="block"}function v(){n.style.display="none"}function L(){f.style.display="block"}const k=1;document.querySelector(".form").addEventListener("submit",async o=>{o.preventDefault();let a="";const r={title:"",titleColor:"red",position:"topRight"},i=o.target.elements["search-text"].value.trim();if(i!==""){a=i,b(),w();try{const t=(await p(a,k)).hits;t.length!==0?(h(t),L()):(r.title="Sorry, there are no images matching your search query. Please try again!",s.show(r))}catch(e){r.title="An error occurred while fetching images. Please try again later.",s.show(r),console.error("Fetch error:",e)}finally{v()}}else r.title="Form field must be filled in!",s.show(r);o.target.reset()});
//# sourceMappingURL=index.js.map
