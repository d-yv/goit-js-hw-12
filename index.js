import{a as k,S as x,i as c}from"./assets/vendor-frHSA4Lh.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function d(t,i=1){const o="https://pixabay.com/api/";try{return(await k.get(o,{params:{key:"50483673-3addba2370166e44fbbdc4d02",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:i,per_page:15}})).data}catch(l){return console.error(l),null}}const y=document.querySelector(".loader"),g=document.querySelector(".gallery"),f=document.querySelector(".more-button"),S=new x(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"});function p(t){const i=t.map(({webformatURL:o,largeImageURL:l,tags:e,likes:r,views:n,comments:v,downloads:L})=>`<li class="gallery-item">
              <a class="gallery-link" href=${l}>
                <img
                  src=${o}
                  alt="${e}"
                  width="360"
                  height="200"
                />
                <div class="markup-image">
                  <ul>
                    <li class="markup-image-text">likes</li>
                    <li class="markup-image-value">${r}</li>      
                  </ul>
                  <ul>
                    <li class="markup-image-text">views</li>
                    <li class="markup-image-value">${n}</li>      
                  </ul>
                  <ul>
                    <li class="markup-image-text">comments</li>
                    <li class="markup-image-value">${v}</li>      
                  </ul>
                  <ul>
                    <li class="markup-image-text">downloads</li>
                    <li class="markup-image-value">${L}</li>      
                  </ul>
                </div>
              </a>
            </li>`).join("");g.insertAdjacentHTML("beforeend",i),S.refresh()}function q(){g.innerHTML=""}function h(){y.style.display="block"}function b(){y.style.display="none"}function w(){f.style.display="block"}function u(){f.style.display="none"}const a={title:"",titleColor:"red",position:"topRight"};let m="",s=1;const P=document.querySelector(".more-button");P.addEventListener("click",async()=>{s+=1,u(),h();try{const t=await d(m,s);t.totalHits<=s*15?(u(),a.title="We're sorry, but you've reached the end of search results.",c.show(a)):w(),p(t.hits);const o=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:o.width*2+48,behavior:"smooth"})}catch(t){return console.error(t),null}finally{b()}});document.querySelector(".form").addEventListener("submit",async t=>{t.preventDefault(),u(),s=1;const i=t.target.elements["search-text"].value.trim();if(i!==""){m=i,q(),h();try{const o=await d(m,s),l=o.hits;if(l.length===0){a.title="Sorry, there are no images matching your search query. Please try again!",c.show(a);return}p(l),o.totalHits<=s*15?u():w()}catch(o){a.title="An error occurred while fetching images. Please try again later.",c.show(a),console.error("Fetch error:",o)}finally{b()}}else a.title="Form field must be filled in!",c.show(a);t.target.reset()});
//# sourceMappingURL=index.js.map
