import{a as k,S as x,i as c}from"./assets/vendor-frHSA4Lh.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function d(t,i=1){const o="https://pixabay.com/api/";try{return(await k.get(o,{params:{key:"50483673-3addba2370166e44fbbdc4d02",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:i,per_page:15}})).data}catch(l){return console.error(l),null}}const g=document.querySelector(".loader"),y=document.querySelector(".gallery"),f=document.querySelector(".more-button"),S=new x(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"});function p(t){const i=t.map(({webformatURL:o,largeImageURL:l,tags:e,likes:r,views:n,comments:v,downloads:L})=>`<li class="gallery-item">
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
            </li>`).join("");y.insertAdjacentHTML("beforeend",i),S.refresh()}function q(){y.innerHTML=""}function h(){g.style.display="block"}function w(){g.style.display="none"}function b(){f.style.display="block"}function u(){f.style.display="none"}const s={title:"",titleColor:"red",position:"topRight"};let m="",a=1;const H=document.querySelector(".more-button");H.addEventListener("click",async()=>{a+=1,console.log(a,m),u(),h();try{const t=await d(m,a);console.log(t.totalHits-a*15),t.totalHits<=a*15&&(u(),s.title="We're sorry, but you've reached the end of search results.",c.show(s)),p(t.hits),window.scrollBy(0,window.innerHeight)}catch(t){return console.error(t),null}finally{w(),b()}});document.querySelector(".form").addEventListener("submit",async t=>{t.preventDefault(),u(),a=1;const i=t.target.elements["search-text"].value.trim();if(i!==""){m=i,q(),h();try{const o=await d(m,a),l=o.hits;if(console.log("imagesTotalHits, page*15  ",o.totalHits,a*15),l.length===0){s.title="Sorry, there are no images matching your search query. Please try again!",c.show(s);return}p(l),o.totalHits<=a*15?u():b()}catch(o){s.title="An error occurred while fetching images. Please try again later.",c.show(s),console.error("Fetch error:",o)}finally{w()}}else s.title="Form field must be filled in!",c.show(s);t.target.reset()});
//# sourceMappingURL=index.js.map
