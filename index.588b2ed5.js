!function(){var n,t,e,a=document.getElementById("search-box"),c=document.querySelector(".country-list"),o=document.querySelector(".country-info");function i(n){var t="\n        <h2>".concat(n.name.official,"</h2>\n        <p><span>Capital:</span> ").concat(n.capital,"</p>\n        <p><span>Population:</span> ").concat(n.population,"</p>\n        <p><span>Languages:</span> ").concat(Object.values(n.languages).join(", "),'</p>\n        <img src="').concat(n.flags.svg,'" alt="Flag of ').concat(n.name.official,'" width="300" />\n    ');o.innerHTML=t}a.addEventListener("input",(n=function(){var n=a.value;if(""===n)return c.innerHTML="",void(o.innerHTML="");fetch("https://restcountries.com/v3.1/name/".concat(n)).then((function(t){if(!t.ok)throw new Error("Such a country does not exist:".concat(n));return t.json()})).then((function(n){if(c.innerHTML="",n.forEach((function(n){var t=function(n){var t=document.createElement("li");return t.innerHTML="<img class='country-flag' src ='".concat(n.flags.svg,"' alt='Flag of ").concat(n.name.official,"' width='30' /><p>").concat(n.name.official,"</p>"),t.addEventListener("click",(function(){i(n)})),t.classList.add("country-item"),t}(n);c.appendChild(t)})),1===n.length)for(i(n[0]);c.firstChild;)c.removeChild(c.firstChild);else o.innerHTML=""})).catch((function(n){console.log(n),c.innerHTML="",o.innerHTML='<p class="error-message">'.concat(n.message,"</p>")}))},t=300,function(){for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];var i=this;clearTimeout(e),e=setTimeout((function(){n.apply(i,c)}),t)}))}();
//# sourceMappingURL=index.588b2ed5.js.map
