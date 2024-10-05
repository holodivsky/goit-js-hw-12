import{a as w,S as v,i as h}from"./assets/vendor-u8rapaCG.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const m=async(o,e)=>{const a="46001925-09c36435a6f5ed4e05a6b9a17",r=new URLSearchParams({key:a,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:e});return(await w.get(`https://pixabay.com/api/?${r}`)).data};function p(o){return o.map(({webformatURL:e,largeImageURL:a,tags:r,likes:t,views:s,comments:n,downloads:b})=>`<li class="gallery-item">
            <a class="gallery-link" href="${a}">
              <img
                class="gallery-image"
                src="${e}"
                alt="${r}"
                width="360"
              />
            </a>
            <div class="thumb-block">
              <div class="block">
                <h2 class="tittle">Likes</h2>
                <p class="amount">${t}</p>
              </div>
              <div class="block">
                <h2 class="tittle">Views</h2>
                <p class="amount">${s}</p>
              </div>
              <div class="block">
                <h2 class="tittle">Comments</h2>
                <p class="amount">${n}</p>
              </div>
              <div class="block">
                <h2 class="tittle">Downloads</h2>
                <p class="amount">${b}</p>
              </div>
            </div>
          </li>`)}const f=document.querySelector(".js-search"),d=document.querySelector(".gallery"),c=document.querySelector(".load-btn"),u=()=>document.querySelector("span").classList.toggle("loader"),y=()=>h.show({message:"Please fill a field",backgroundColor:"red",color:"white"}),L=()=>h.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",color:"white"}),k=()=>h.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"yellow",color:"white"}),g=new v(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});let l="",i=1;const P=async o=>{if(o.preventDefault(),l=o.currentTarget.elements.search.value.toLowerCase().trim(),!l)return y();d.innerHTML="",c.style.display="none",i=1,u();try{const e=await m(l,i);if(!e.hits.length)return L();d.insertAdjacentHTML("beforeend",p(e.hits).join("")),g.refresh(),i++,c.style.display=e.totalHits>e.hits.length?"block":"none"}catch(e){console.log(e)}finally{u(),f.reset()}},S=async o=>{if(!l)return y();u();try{const e=await m(l,i);if(d.insertAdjacentHTML("beforeend",p(e.hits).join("")),i++,g.refresh(),window.scrollBy({top:200*2,behavior:"smooth"}),d.children.length>=e.totalHits)return c.style.display="none",k();c.style.display="block"}catch(e){console.log(e)}finally{u()}};f.addEventListener("submit",P);c.addEventListener("click",S);
//# sourceMappingURL=index.js.map
