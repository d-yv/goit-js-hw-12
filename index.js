import{a as d,S as g,i as s}from"./assets/vendor-frHSA4Lh.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function f(a){return d.get("https://pixabay.com/api/",{params:{key:"50483673-3addba2370166e44fbbdc4d02",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>(console.error(r),null))}const n=document.querySelector(".loader"),c=document.querySelector(".gallery"),p=new g(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"});function y(a){const i=a.map(({webformatURL:r,largeImageURL:l,tags:e,likes:t,views:o,comments:u,downloads:m})=>`<li class="gallery-item">
              <a class="gallery-link" href=${l}>
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
                    <li class="markup-image-value">${o}</li>      
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
            </li>`).join("");c.innerHTML=i,p.refresh()}function h(){c.innerHTML=""}function b(){n.style.display="block"}function v(){n.style.display="none"}document.querySelector(".form").addEventListener("submit",async a=>{a.preventDefault();let i="";const r={title:"",titleColor:"red",position:"topRight"},l=a.target.elements["search-text"].value.trim();if(l!==""){i=l,h(),b();try{const t=(await f(i)).hits;t.length!==0?y(t):(r.title="Sorry, there are no images matching your search query. Please try again!",s.show(r))}catch(e){r.title="An error occurred while fetching images. Please try again later.",s.show(r),console.error("Fetch error:",e)}finally{v()}}else r.title="Form field must be filled in!",s.show(r);a.target.reset()});
//# sourceMappingURL=index.js.map
