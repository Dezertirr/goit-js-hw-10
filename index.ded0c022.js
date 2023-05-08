const n=document.getElementById("search-box"),e=document.querySelector(".country-list"),t=document.querySelector(".country-info");function i(n){const e=`\n        <h2>${n.name.official}</h2>\n        <p><span>Capital:</span> ${n.capital}</p>\n        <p><span>Population:</span> ${n.population}</p>\n        <p><span>Languages:</span> ${Object.values(n.languages).join(", ")}</p>\n        <img src="${n.flags.svg}" alt="Flag of ${n.name.official}" width="300" />\n    `;t.innerHTML=e}n.addEventListener("input",function(n,e){let t;return function(...i){clearTimeout(t),t=setTimeout((()=>{n.apply(this,i)}),e)}}((function(){const o=n.value;if(""===o)return e.innerHTML="",void(t.innerHTML="");fetch(`https://restcountries.com/v3.1/name/${o}`).then((n=>{if(!n.ok)throw new Error(`Such a country does not exist:${o}`);return n.json()})).then((n=>{if(e.innerHTML="",n.forEach((n=>{const t=function(n){const e=document.createElement("li");return e.innerHTML=`<img class='country-flag' src ='${n.flags.svg}' alt='Flag of ${n.name.official}' width='30' /><p>${n.name.official}</p>`,e.addEventListener("click",(()=>{i(n)})),e.classList.add("country-item"),e}(n);e.appendChild(t)})),1===n.length)for(i(n[0]);e.firstChild;)e.removeChild(e.firstChild);else t.innerHTML=""})).catch((n=>{console.log(n),e.innerHTML="",t.innerHTML=`<p class="error-message">${n.message}</p>`}))}),300));
//# sourceMappingURL=index.ded0c022.js.map
