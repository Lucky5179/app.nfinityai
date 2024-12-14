import{s as je,e as c,a as C,t as K,c as d,d as g,w as B,f as I,q as X,g as m,h as u,I as J,J as Ie,y as ye,i as R,j as t,K as Te,n as Ee,o as Ae,v as He,x as xe,F as ke,r as ie}from"../chunks/scheduler.Bo5rxkXI.js";import{S as Le,i as Ve,t as oe,d as Me,e as te,g as Pe,c as Ge,a as $e,m as Be,f as Ue}from"../chunks/index.BXG-_PB9.js";import{e as ze,m as Se}from"../chunks/mediaQuery.D7fHuHNS.js";import{c as qe}from"../chunks/utils.CcZNOUuG.js";import{i as Ye}from"../chunks/sidebar.gC7qFE1O.js";import{B as Oe}from"../chunks/Button.C-W2ZKx2.js";function Fe(i,e,s){const r=i.slice();return r[9]=e[s],r}function We(i){let e,s,r=ze(i[3]),n=[];for(let a=0;a<r.length;a+=1)n[a]=De(Fe(i,r,a));const b=a=>oe(n[a],1,1,()=>{n[a]=null});return{c(){e=c("ul");for(let a=0;a<n.length;a+=1)n[a].c();this.h()},l(a){e=d(a,"UL",{class:!0});var p=g(e);for(let l=0;l<n.length;l+=1)n[l].l(p);p.forEach(m),this.h()},h(){u(e,"class","scrollbar-hide flex snap-x snap-mandatory gap-1 overflow-x-auto px-4 md:mx-[-1rem] md:grid md:grid-cols-2 md:justify-items-center md:gap-4 md:px-0 lg:mx-0 xl:grid-cols-3 xl:gap-7 svelte-qncz3x")},m(a,p){R(a,e,p);for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(e,null);s=!0},p(a,p){if(p&24){r=ze(a[3]);let l;for(l=0;l<r.length;l+=1){const _=Fe(a,r,l);n[l]?(n[l].p(_,p),te(n[l],1)):(n[l]=De(_),n[l].c(),te(n[l],1),n[l].m(e,null))}for(Pe(),l=r.length;l<n.length;l+=1)b(l);Me()}},i(a){if(!s){for(let p=0;p<r.length;p+=1)te(n[p]);s=!0}},o(a){n=n.filter(Boolean);for(let p=0;p<n.length;p+=1)oe(n[p]);s=!1},d(a){a&&m(e),He(n,a)}}}function Re(i){let e,s='<p class="text-lg">Sorry, tier information is temporarily unavailable.</p> <p class="mt-2 text-sm">Please try refreshing the page later.</p>';return{c(){e=c("div"),e.innerHTML=s,this.h()},l(r){e=d(r,"DIV",{class:!0,"data-svelte-h":!0}),B(e)!=="svelte-ey7ei2"&&(e.innerHTML=s),this.h()},h(){u(e,"class","px-4 py-8 text-center")},m(r,n){R(r,e,n)},p:xe,i:xe,o:xe,d(r){r&&m(e)}}}function Qe(i){let e;return{c(){e=K("Buy on Uniswap")},l(s){e=X(s,"Buy on Uniswap")},m(s,r){R(s,e,r)},d(s){s&&m(e)}}}function De(i){let e,s,r,n,b,a,p=i[9].name+"",l,_,f,w,h,j="$NFNT total",Z,L,q=i[9].required_nfnt_total+"",E,N,T,V,se="Starting Credits",Q,z,U=i[9].starting_credits+"",Y,M,P,k,le="Monthly credits",F,O,o=i[9].monthly_credits+"",v,A,S,G,$="Bonus Credits",ee,ne,ae=i[9].bonus_credits+"",ce,_e,W,ve,de,ue,D;return W=new Oe({props:{className:"w-40 mx-auto mt-auto",href:"https://app.uniswap.org/explore/tokens/ethereum/0x0000000000000000000",$$slots:{default:[Qe]},$$scope:{ctx:i}}}),{c(){e=c("li"),s=c("div"),r=c("img"),b=C(),a=c("h3"),l=K(p),_=C(),f=c("div"),w=c("div"),h=c("span"),h.textContent=j,Z=C(),L=c("span"),E=K(q),N=C(),T=c("div"),V=c("span"),V.textContent=se,Q=C(),z=c("span"),Y=K(U),M=C(),P=c("div"),k=c("span"),k.textContent=le,F=C(),O=c("span"),v=K(o),A=C(),S=c("div"),G=c("span"),G.textContent=$,ee=C(),ne=c("span"),ce=K(ae),_e=C(),Ge(W.$$.fragment),ve=C(),this.h()},l(y){e=d(y,"LI",{class:!0,style:!0});var x=g(e);s=d(x,"DIV",{class:!0});var re=g(s);r=d(re,"IMG",{src:!0,alt:!0,class:!0}),re.forEach(m),b=I(x),a=d(x,"H3",{class:!0});var ge=g(a);l=X(ge,p),ge.forEach(m),_=I(x),f=d(x,"DIV",{class:!0});var H=g(f);w=d(H,"DIV",{class:!0});var fe=g(w);h=d(fe,"SPAN",{"data-svelte-h":!0}),B(h)!=="svelte-9p88dm"&&(h.textContent=j),Z=I(fe),L=d(fe,"SPAN",{});var be=g(L);E=X(be,q),be.forEach(m),fe.forEach(m),N=I(H),T=d(H,"DIV",{class:!0});var pe=g(T);V=d(pe,"SPAN",{"data-svelte-h":!0}),B(V)!=="svelte-16csbgk"&&(V.textContent=se),Q=I(pe),z=d(pe,"SPAN",{});var we=g(z);Y=X(we,U),we.forEach(m),pe.forEach(m),M=I(H),P=d(H,"DIV",{class:!0});var me=g(P);k=d(me,"SPAN",{"data-svelte-h":!0}),B(k)!=="svelte-1g6pcm7"&&(k.textContent=le),F=I(me),O=d(me,"SPAN",{});var Ne=g(O);v=X(Ne,o),Ne.forEach(m),me.forEach(m),A=I(H),S=d(H,"DIV",{class:!0});var he=g(S);G=d(he,"SPAN",{"data-svelte-h":!0}),B(G)!=="svelte-1ljx8d1"&&(G.textContent=$),ee=I(he),ne=d(he,"SPAN",{});var Ce=g(ne);ce=X(Ce,ae),Ce.forEach(m),he.forEach(m),_e=I(H),$e(W.$$.fragment,H),H.forEach(m),ve=I(x),x.forEach(m),this.h()},h(){ye(r.src,n=`/tiers/${i[9].name}.png`)||u(r,"src",n),u(r,"alt",""),u(r,"class","absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 scale-[4.5] object-contain"),u(s,"class","relative z-[1] h-12 w-full"),u(a,"class","relative z-[1] mb-14 mt-4 text-[1.5rem]"),u(w,"class","flex w-full justify-between"),u(T,"class","flex w-full justify-between"),u(P,"class","flex w-full justify-between"),u(S,"class","flex w-full justify-between"),u(f,"class","relative z-[1] flex w-full flex-col gap-4"),u(e,"class",de=ke(qe("s:px-5 xs:text-[0.875rem] flex max-w-80 flex-shrink-0 snap-center flex-col items-center overflow-hidden px-3 pb-5 pt-14 text-[0.725rem] md:w-full xl:px-10",i[9].name==="Infinity"?"nfinityGradient":"cardGradient"))+" svelte-qncz3x"),u(e,"style",ue=!i[4].md&&"width: 298px;")},m(y,x){R(y,e,x),t(e,s),t(s,r),t(e,b),t(e,a),t(a,l),t(e,_),t(e,f),t(f,w),t(w,h),t(w,Z),t(w,L),t(L,E),t(f,N),t(f,T),t(T,V),t(T,Q),t(T,z),t(z,Y),t(f,M),t(f,P),t(P,k),t(P,F),t(P,O),t(O,v),t(f,A),t(f,S),t(S,G),t(S,ee),t(S,ne),t(ne,ce),t(f,_e),Be(W,f,null),t(e,ve),D=!0},p(y,x){(!D||x&8&&!ye(r.src,n=`/tiers/${y[9].name}.png`))&&u(r,"src",n),(!D||x&8)&&p!==(p=y[9].name+"")&&ie(l,p),(!D||x&8)&&q!==(q=y[9].required_nfnt_total+"")&&ie(E,q),(!D||x&8)&&U!==(U=y[9].starting_credits+"")&&ie(Y,U),(!D||x&8)&&o!==(o=y[9].monthly_credits+"")&&ie(v,o),(!D||x&8)&&ae!==(ae=y[9].bonus_credits+"")&&ie(ce,ae);const re={};x&4096&&(re.$$scope={dirty:x,ctx:y}),W.$set(re),(!D||x&8&&de!==(de=ke(qe("s:px-5 xs:text-[0.875rem] flex max-w-80 flex-shrink-0 snap-center flex-col items-center overflow-hidden px-3 pb-5 pt-14 text-[0.725rem] md:w-full xl:px-10",y[9].name==="Infinity"?"nfinityGradient":"cardGradient"))+" svelte-qncz3x"))&&u(e,"class",de),(!D||x&16&&ue!==(ue=!y[4].md&&"width: 298px;"))&&u(e,"style",ue)},i(y){D||(te(W.$$.fragment,y),D=!0)},o(y){oe(W.$$.fragment,y),D=!1},d(y){y&&m(e),Ue(W)}}}function Je(i){let e,s,r='<h1 class="font-nippo text-[1.675rem] leading-[1.3em] lg:text-[1.875rem]">NFNT Credit System</h1> <p class="text svelte-qncz3x">1 Gen = <strong>$0.25 USD</strong></p>',n,b,a,p,l,_,f,w,h,j,Z=`<h2 id="credit-components" class="font-bold">Explanation of Credit Components</h2> <ul aria-labelledby="credit-components" class="list svelte-qncz3x"><li><strong>Starting Credits:</strong>
				The amount of credits allocated to your account when you join a tier.</li> <li><strong>Monthly Credits:</strong>
				The credits you receive every week as long as you maintain your $NFNT holdings at the required
				tier level.</li> <li><strong>Top-Up Bonus:</strong>
				Receive extra credits when you top up a minimum of $50.</li></ul> <h2 id="flexibility-benefits" class="mt-10 font-bold">Flexibility and Benefits for All Users</h2> <p>Whether you&#39;re a small holder or a large one, the NFINITY Credit System is designed to reward
			you.
			<br/>
			You can:</p> <ul aria-labelledby="flexibility-benefits" class="list svelte-qncz3x"><li>Gain early and exclusive access to models as a $NFNT holder.</li> <li>Receive free weekly credits based on your tier.</li> <li>Enjoy discounted credit prices when you pay with $NFNT.</li> <li>Accumulate long-term benefits as you hold and grow your $NFNT balance.</li></ul>`,L,q,E,N,T,V,se,Q,z,U="Exclusive Discounts <br/> for $NFNT Payments",Y,M,P=`You can choose to pay for credits directly with $NFNT and receive a 25% discount. This means
				that if you choose to pay with $NFNT, you get more value and access to additional credits at
				a reduced cost. This discount applies automatically at checkout when you select $NFNT as
				your payment method.`,k;const le=[Re,We],F=[];function O(o,v){return o[3].length===0?0:1}return _=O(i),f=F[_]=le[_](i),{c(){e=c("section"),s=c("div"),s.innerHTML=r,n=C(),b=c("p"),a=K(`Credits are used to access and generate AI models on the NFINITY platform. Instead of expensive
		subscriptions, our pay-per-generation system allows users to pay only for the services they
		need, offering flexibility and control.`),l=C(),f.c(),w=C(),h=c("section"),j=c("div"),j.innerHTML=Z,L=C(),q=c("div"),E=c("div"),N=c("div"),T=c("img"),Q=C(),z=c("h2"),z.innerHTML=U,Y=C(),M=c("p"),M.textContent=P,this.h()},l(o){e=d(o,"SECTION",{class:!0});var v=g(e);s=d(v,"DIV",{class:!0,"data-svelte-h":!0}),B(s)!=="svelte-103rqu3"&&(s.innerHTML=r),n=I(v),b=d(v,"P",{class:!0,style:!0});var A=g(b);a=X(A,`Credits are used to access and generate AI models on the NFINITY platform. Instead of expensive
		subscriptions, our pay-per-generation system allows users to pay only for the services they
		need, offering flexibility and control.`),A.forEach(m),v.forEach(m),l=I(o),f.l(o),w=I(o),h=d(o,"SECTION",{class:!0});var S=g(h);j=d(S,"DIV",{class:!0,"data-svelte-h":!0}),B(j)!=="svelte-1s68crk"&&(j.innerHTML=Z),L=I(S),q=d(S,"DIV",{class:!0});var G=g(q);E=d(G,"DIV",{class:!0});var $=g(E);N=d($,"DIV",{class:!0,style:!0});var ee=g(N);T=d(ee,"IMG",{src:!0,alt:!0,class:!0}),ee.forEach(m),Q=I($),z=d($,"H2",{class:!0,"data-svelte-h":!0}),B(z)!=="svelte-1dj8ayu"&&(z.innerHTML=U),Y=I($),M=d($,"P",{class:!0,"data-svelte-h":!0}),B(M)!=="svelte-1a4r8oy"&&(M.textContent=P),$.forEach(m),G.forEach(m),S.forEach(m),this.h()},h(){u(s,"class","mb-4 flex items-center gap-9"),u(b,"class","text transition-all duration-200 svelte-qncz3x"),J(b,"width",i[2]+"px"),J(b,"max-width","100%"),u(e,"class","font-avantGarde mb-8 mt-10 px-4 font-medium md:mb-14 md:mt-0 md:px-0"),Ie(()=>i[6].call(e)),u(j,"class",""),ye(T.src,V="/nfinity.webp")||u(T,"src",V),u(T,"alt",""),u(T,"class","block"),u(N,"class","mx-auto"),J(N,"margin-top","-"+i[0]*.28+"px"),J(N,"margin-bottom","-"+i[0]*.28+"px"),Ie(()=>i[7].call(N)),u(z,"class","font-nippo mb-1 text-center text-[1rem]"),u(M,"class","text text-center svelte-qncz3x"),u(E,"class","discount relative flex max-w-[22rem] flex-col rounded-[0.625rem] px-5 pb-10 xl:px-10 svelte-qncz3x"),u(q,"class","flex items-center justify-center"),u(h,"class","text font-avantGarde mt-12 grid gap-10 px-4 font-medium md:px-0 lg:grid-cols-[650fr_380fr] svelte-qncz3x")},m(o,v){R(o,e,v),t(e,s),t(e,n),t(e,b),t(b,a),p=Te(e,i[6].bind(e)),R(o,l,v),F[_].m(o,v),R(o,w,v),R(o,h,v),t(h,j),t(h,L),t(h,q),t(q,E),t(E,N),t(N,T),se=Te(N,i[7].bind(N)),t(E,Q),t(E,z),t(E,Y),t(E,M),k=!0},p(o,[v]){(!k||v&4)&&J(b,"width",o[2]+"px");let A=_;_=O(o),_===A?F[_].p(o,v):(Pe(),oe(F[A],1,1,()=>{F[A]=null}),Me(),f=F[_],f?f.p(o,v):(f=F[_]=le[_](o),f.c()),te(f,1),f.m(w.parentNode,w)),(!k||v&1)&&J(N,"margin-top","-"+o[0]*.28+"px"),(!k||v&1)&&J(N,"margin-bottom","-"+o[0]*.28+"px")},i(o){k||(te(f),k=!0)},o(o){oe(f),k=!1},d(o){o&&(m(e),m(l),m(w),m(h)),p(),F[_].d(o),se()}}}function Ke(i,e,s){let r,n,b;Ee(i,Ye,h=>s(8,n=h)),Ee(i,Se,h=>s(4,b=h));let{data:a}=e,p,l,_;Ae(()=>{s(2,_=l);const h=()=>{s(2,_=l),!n&&Se.md&&s(2,_-=240)};return window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h)}});function f(){l=this.clientWidth,s(1,l)}function w(){p=this.clientHeight,s(0,p)}return i.$$set=h=>{"data"in h&&s(5,a=h.data)},i.$$.update=()=>{i.$$.dirty&32&&s(3,{tiers:r=[]}=a||{},r)},[p,l,_,r,b,a,f,w]}class nt extends Le{constructor(e){super(),Ve(this,e,Ke,Je,je,{data:5})}}export{nt as component};
