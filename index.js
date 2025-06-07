import{a as h,S as b,i as c}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();async function u(t,r=1){const a="https://pixabay.com/api/";try{return(await h.get(a,{params:{key:"50483673-3addba2370166e44fbbdc4d02",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}catch(i){return console.error(i),null}}const m=document.querySelector(".loader"),d=document.querySelector(".gallery"),g=document.querySelector(".more-button"),w=new b(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"});function p(t){const r=t.map(({webformatURL:a,largeImageURL:i,tags:e,likes:o,views:s,comments:y,downloads:f})=>`<li class="gallery-item">
              <a class="gallery-link" href=${i}>
                <img
                  src=${a}
                  alt="${e}"
                  width="360"
                  height="200"
                />
                <div class="markup-image">
                  <ul>
                    <li class="markup-image-text">likes</li>
                    <li class="markup-image-value">${o}</li>      
                  </ul>
                  <ul>
                    <li class="markup-image-text">views</li>
                    <li class="markup-image-value">${s}</li>      
                  </ul>
                  <ul>
                    <li class="markup-image-text">comments</li>
                    <li class="markup-image-value">${y}</li>      
                  </ul>
                  <ul>
                    <li class="markup-image-text">downloads</li>
                    <li class="markup-image-value">${f}</li>      
                  </ul>
                </div>
              </a>
            </li>`).join("");d.insertAdjacentHTML("beforeend",r),w.refresh()}function L(){d.innerHTML=""}function v(){m.style.display="block"}function k(){m.style.display="none"}function x(){g.style.display="block"}function S(){g.style.display="none"}let n="",l=1;const q=document.querySelector(".more-button");q.addEventListener("click",async()=>{l+=1,console.log(l,n);try{const t=await u(n,l);console.log(t.totalHits-l*15),t.totalHits<=l*15&&S(),p(t.hits)}catch(t){return console.error(t),null}});document.querySelector(".form").addEventListener("submit",async t=>{t.preventDefault(),l=1;const r={title:"",titleColor:"red",position:"topRight"},a=t.target.elements["search-text"].value.trim();if(a!==""){n=a,L(),v();try{const e=(await u(n,l)).hits;e.length!==0?(p(e),x()):(r.title="Sorry, there are no images matching your search query. Please try again!",c.show(r))}catch(i){r.title="An error occurred while fetching images. Please try again later.",c.show(r),console.error("Fetch error:",i)}finally{k()}}else r.title="Form field must be filled in!",c.show(r);t.target.reset()});
//# sourceMappingURL=index.js.map
