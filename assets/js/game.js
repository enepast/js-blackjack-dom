(()=>{"use strict";let e=["C","D","H","S"],t=["J","Q","K","A"],r=[],s=0,n=0,l=document.querySelector("#btnAsk"),a=document.querySelector("#btnStop"),i=document.querySelector("#btnNew"),d=document.querySelectorAll("small"),c=document.querySelector("#player-cards"),o=document.querySelector("#pc-cards"),u=0,$=0,y=()=>{r=[];for(let s=2;s<=10;s++)for(let n of e)r.push(s+n);for(let l of e)for(let a of t)r.push(a+l);return _.shuffle(r)},f=e=>{if(0===e.length)throw"There's no cards in the deck";return e.pop()},b=e=>{let t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t},h=(e,t)=>{let r=f(y());e+=b(r);let s=document.createElement("img");return s.classList.add("carta"),s.src=`assets/cartas/cartas/${r}.png`,t.append(s),e};l.addEventListener("click",()=>{u=h(s,c)+u,d[0].innerText=u,u>21?(d[0].innerText=u+" -> You lose :(",l.disabled=!0,a.disabled=!0):21===u&&(d[0].innerText=u+" -> Perfect Score :)",l.disabled=!0,a.disabled=!0)}),a.addEventListener("click",()=>{console.log("The PC says: my turn"),l.disabled=!0,a.disabled=!0;do $=h(n,o)+$;while($<=u);d[1].innerText=$,$>21||$<=u?d[1].innerText=$+" -> says: You win :(":$>u?d[1].innerText=$+" -> says: I win 3:)":d[1].innerText=$+" -> says: It's a draw :)("}),i.addEventListener("click",()=>{window.location.reload()})})();