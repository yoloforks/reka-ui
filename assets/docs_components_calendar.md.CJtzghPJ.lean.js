import{d as Y,e as P,I as c,f as Q,g as G,h as X,i as _,j as D,k as ee,l as ne,m as oe,n as se,o as le,p as M,q as j,r as W,s as O,t as L,u as U,v as N,w as R,x as V,y as I,z as $,A as z,B as K,C as Z,D as re,$ as pe,E as ie,F as de,G as Ee,H as ye}from"./chunks/theme.xbZkG0Yt.js";import{d as te,o as d,l as h,p as l,e as s,u as r,b as e,c as f,a6 as C,F as b,a3 as o,t as v,f as J,a as q,aM as E,au as g}from"./chunks/framework.6UEeBrHH.js";const ce={class:"flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0"},ue=te({__name:"index",setup(H){const T=u=>u.day===17||u.day===18;function n(u,w){return w===-1?u.subtract({years:1}):u.add({years:1})}return(u,w)=>(d(),h(r(le),{"is-date-unavailable":T,class:"mt-6 rounded-xl bg-white p-4 shadow-md","fixed-weeks":""},{default:l(({weekDays:t,grid:a})=>[s(r(Y),{class:"flex items-center justify-between"},{default:l(()=>[s(r(P),{class:"inline-flex items-center cursor-pointer text-black justify-center rounded-[9px] bg-transparent w-8 h-8 hover:bg-black hover:text-white active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black","prev-page":m=>n(m,-1)},{default:l(()=>[s(r(c),{icon:"radix-icons:double-arrow-left",class:"w-4 h-4"})]),_:1},8,["prev-page"]),s(r(P),{class:"inline-flex items-center cursor-pointer text-black justify-center rounded-[9px] bg-transparent w-8 h-8 hover:bg-black hover:text-white active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black"},{default:l(()=>[s(r(c),{icon:"radix-icons:chevron-left",class:"w-4 h-4"})]),_:1}),s(r(Q),{class:"text-sm text-black font-medium"}),s(r(G),{class:"inline-flex items-center cursor-pointer justify-center text-black rounded-[9px] bg-transparent w-8 h-8 hover:bg-black hover:text-white active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black"},{default:l(()=>[s(r(c),{icon:"radix-icons:chevron-right",class:"w-4 h-4"})]),_:1}),s(r(G),{class:"inline-flex items-center cursor-pointer justify-center text-black rounded-[9px] bg-transparent w-8 h-8 hover:bg-black hover:text-white active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black","next-page":m=>n(m,1)},{default:l(()=>[s(r(c),{icon:"radix-icons:double-arrow-right",class:"w-4 h-4"})]),_:1},8,["next-page"])]),_:1}),e("div",ce,[(d(!0),f(b,null,C(a,m=>(d(),h(r(X),{key:m.value.toString(),class:"w-full border-collapse select-none space-y-1"},{default:l(()=>[s(r(_),null,{default:l(()=>[s(r(D),{class:"mb-1 grid w-full grid-cols-7"},{default:l(()=>[(d(!0),f(b,null,C(t,B=>(d(),h(r(ee),{key:B,class:"rounded-md text-xs text-green8"},{default:l(()=>[o(v(B),1)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024),s(r(ne),{class:"grid"},{default:l(()=>[(d(!0),f(b,null,C(m.rows,(B,x)=>(d(),h(r(D),{key:`weekDate-${x}`,class:"grid grid-cols-7"},{default:l(()=>[(d(!0),f(b,null,C(B,y=>(d(),h(r(oe),{key:y.toString(),date:y,class:"relative text-center text-sm"},{default:l(()=>[s(r(se),{day:y,month:m.value,class:"relative flex items-center justify-center rounded-full whitespace-nowrap text-sm font-normal text-black w-8 h-8 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black data-[outside-view]:text-black/30 data-[selected]:!bg-green10 data-[selected]:text-white hover:bg-green5 data-[highlighted]:bg-green5 data-[unavailable]:pointer-events-none data-[unavailable]:text-black/30 data-[unavailable]:line-through before:absolute before:top-[5px] before:hidden before:rounded-full before:w-1 before:h-1 before:bg-white data-[today]:before:block data-[today]:before:bg-green9"},null,8,["day","month"])]),_:2},1032,["date"]))),128))]),_:2},1024))),128))]),_:2},1024)]),_:2},1024))),128))])]),_:1}))}}),me={class:"flex flex-col gap-4"},fe={class:"flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0"},Fe=te({__name:"index",setup(H){const T=[{locale:"en-US",label:"Default",ordering:"gregory"},{label:"Arabic (Algeria)",locale:"ar-DZ",territories:"DJ DZ EH ER IQ JO KM LB LY MA MR OM PS SD SY TD TN YE",ordering:"gregory islamic islamic-civil islamic-tbla"},{label:"Arabic (United Arab Emirates)",locale:"ar-AE",territories:"AE BH KW QA",ordering:"gregory islamic-umalqura islamic islamic-civil islamic-tbla"},{label:"Arabic (Egypt)",locale:"AR-EG",territories:"EG",ordering:"gregory coptic islamic islamic-civil islamic-tbla"},{label:"Arabic (Saudi Arabia)",locale:"ar-SA",territories:"SA",ordering:"islamic-umalqura gregory islamic islamic-rgsa"},{label:"Farsi (Iran)",locale:"fa-IR",territories:"IR",ordering:"persian gregory islamic islamic-civil islamic-tbla"},{label:"Farsi (Afghanistan)",locale:"fa-AF",territories:"AF IR",ordering:"persian gregory islamic islamic-civil islamic-tbla"},{label:"Amharic (Ethiopia)",locale:"am-ET",territories:"ET",ordering:"gregory ethiopic ethioaa"},{label:"Hebrew (Israel)",locale:"he-IL",territories:"IL",ordering:"gregory hebrew islamic islamic-civil islamic-tbla"},{label:"Hindi (India)",locale:"hi-IN",territories:"IN",ordering:"gregory indian"},{label:"Japanese (Japan)",locale:"ja-JP",territories:"JP",ordering:"gregory japanese"},{label:"Thai (Thailand)",locale:"th-TH",territories:"TH",ordering:"buddhist gregory"},{label:"Chinese (Taiwan)",locale:"zh-TW",territories:"TW",ordering:"gregory roc chinese"}],n=[{key:"gregory",name:"Gregorian"},{key:"japanese",name:"Japanese"},{key:"buddhist",name:"Buddhist"},{key:"roc",name:"Taiwan"},{key:"persian",name:"Persian"},{key:"indian",name:"Indian"},{key:"islamic-umalqura",name:"Islamic (Umm al-Qura)"},{key:"islamic-civil",name:"Islamic Civil"},{key:"islamic-tbla",name:"Islamic Tabular"},{key:"hebrew",name:"Hebrew"},{key:"coptic",name:"Coptic"},{key:"ethiopic",name:"Ethiopic"},{key:"ethioaa",name:"Ethiopic (Amete Alem)"}],u=J(T[0].locale),w=J(n[0].key),t=q(()=>T.find(y=>y.locale===u.value)),a=q(()=>t.value?t.value.ordering.split(" ").map(y=>n.find(i=>i.key===y)).filter(Boolean):[n[0]]),m=q(()=>n.filter(y=>!a.value.some(i=>i.key===y.key)));function B(y){u.value=y,w.value=t.value.ordering.split(" ")[0]}const x=q(()=>pe(de(Ee()),ie(w.value)));return(y,i)=>(d(),f("div",me,[s(r(M),{class:"text-white"},{default:l(()=>i[2]||(i[2]=[o("Locale")])),_:1}),s(r(z),{modelValue:u.value,"onUpdate:modelValue":[i[0]||(i[0]=p=>u.value=p),B]},{default:l(()=>[s(r(j),{class:"inline-flex min-w-[160px] items-center justify-between rounded-md px-[15px] text-xs leading-none h-[35px] gap-[5px] bg-white text-grass11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-green9 outline-none","aria-label":"Select a locale"},{default:l(()=>[s(r(W),{placeholder:"Please select a locale"},{default:l(()=>[o(v(t.value.label),1)]),_:1}),s(r(c),{icon:"radix-icons:chevron-down",class:"h-3.5 w-3.5"})]),_:1}),s(r(O),null,{default:l(()=>[s(r(L),{class:"min-w-[160px] bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100]","side-offset":5},{default:l(()=>[s(r(U),{class:"flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default"},{default:l(()=>[s(r(c),{icon:"radix-icons:chevron-up"})]),_:1}),s(r(N),{class:"p-[5px]"},{default:l(()=>[(d(),f(b,null,C(T,(p,F)=>s(r(R),{key:F,class:"text-xs leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",value:p.locale},{default:l(()=>[s(r(V),{class:"absolute left-0 w-[25px] inline-flex items-center justify-center"},{default:l(()=>[s(r(c),{icon:"radix-icons:check"})]),_:1}),s(r(I),null,{default:l(()=>[o(v(p.label),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1}),s(r($),{class:"flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default"},{default:l(()=>[s(r(c),{icon:"radix-icons:chevron-down"})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(r(M),{class:"text-white"},{default:l(()=>i[3]||(i[3]=[o("Calendar")])),_:1}),s(r(z),{modelValue:w.value,"onUpdate:modelValue":i[1]||(i[1]=p=>w.value=p)},{default:l(()=>[s(r(j),{class:"inline-flex min-w-[160px] items-center justify-between rounded-md px-[15px] text-xs leading-none h-[35px] gap-[5px] bg-white text-grass11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-green9 outline-none","aria-label":"Select a calendar"},{default:l(()=>[s(r(W),{placeholder:"Please select a calendar"},{default:l(()=>{var p;return[o(v((p=n.find(F=>F.key===w.value))==null?void 0:p.name),1)]}),_:1}),s(r(c),{icon:"radix-icons:chevron-down",class:"h-3.5 w-3.5"})]),_:1}),s(r(O),null,{default:l(()=>[s(r(L),{class:"min-w-[160px] bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100]","side-offset":5},{default:l(()=>[s(r(U),{class:"flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default"},{default:l(()=>[s(r(c),{icon:"radix-icons:chevron-up"})]),_:1}),s(r(N),{class:"p-[5px]"},{default:l(()=>[s(r(K),{class:"px-[25px] text-xs leading-[25px] text-mauve11"},{default:l(()=>i[4]||(i[4]=[o(" Preferred ")])),_:1}),s(r(Z),null,{default:l(()=>[(d(!0),f(b,null,C(a.value,(p,F)=>(d(),h(r(R),{key:F,class:"text-xs leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",value:p.key},{default:l(()=>[s(r(V),{class:"absolute left-0 w-[25px] inline-flex items-center justify-center"},{default:l(()=>[s(r(c),{icon:"radix-icons:check"})]),_:1}),s(r(I),null,{default:l(()=>[o(v(p.name),1)]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1}),s(r(re),{class:"h-[1px] bg-green6 m-[5px]"}),s(r(K),{class:"px-[25px] text-xs leading-[25px] text-mauve11"},{default:l(()=>i[5]||(i[5]=[o(" Other ")])),_:1}),s(r(Z),null,{default:l(()=>[(d(!0),f(b,null,C(m.value,(p,F)=>(d(),h(r(R),{key:F,class:"text-xs leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",value:p.key},{default:l(()=>[s(r(V),{class:"absolute left-0 w-[25px] inline-flex items-center justify-center"},{default:l(()=>[s(r(c),{icon:"radix-icons:check"})]),_:1}),s(r(I),null,{default:l(()=>[o(v(p.name),1)]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1})]),_:1}),s(r($),{class:"flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default"},{default:l(()=>[s(r(c),{icon:"radix-icons:chevron-down"})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(r(le),{"model-value":x.value,locale:u.value,class:"mt-6 rounded-xl bg-white p-4 shadow-md","fixed-weeks":""},{default:l(({weekDays:p,grid:F})=>[s(r(Y),{class:"flex items-center justify-between"},{default:l(()=>[s(r(P),{class:"inline-flex items-center cursor-pointer text-black justify-center rounded-[9px] bg-transparent w-8 h-8 hover:bg-black hover:text-white active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black"},{default:l(()=>[s(r(c),{icon:"radix-icons:chevron-left",class:"w-4 h-4"})]),_:1}),s(r(Q),{class:"text-sm text-black font-medium"}),s(r(G),{class:"inline-flex items-center cursor-pointer justify-center text-black rounded-[9px] bg-transparent w-8 h-8 hover:bg-black hover:text-white active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black"},{default:l(()=>[s(r(c),{icon:"radix-icons:chevron-right",class:"w-4 h-4"})]),_:1})]),_:1}),e("div",fe,[(d(!0),f(b,null,C(F,A=>(d(),h(r(X),{key:A.value.toString(),class:"w-full border-collapse select-none space-y-1"},{default:l(()=>[s(r(_),null,{default:l(()=>[s(r(D),{class:"mb-1 grid w-full grid-cols-7"},{default:l(()=>[(d(!0),f(b,null,C(p,k=>(d(),h(r(ee),{key:k,class:"rounded-md text-xs text-green8"},{default:l(()=>[o(v(k),1)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024),s(r(ne),{class:"grid"},{default:l(()=>[(d(!0),f(b,null,C(A.rows,(k,ae)=>(d(),h(r(D),{key:`weekDate-${ae}`,class:"grid grid-cols-7"},{default:l(()=>[(d(!0),f(b,null,C(k,S=>(d(),h(r(oe),{key:S.toString(),date:S,class:"relative text-center text-sm"},{default:l(()=>[s(r(se),{day:S,month:A.value,class:"relative flex items-center justify-center rounded-full whitespace-nowrap text-sm font-normal text-black w-8 h-8 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black data-[outside-view]:text-black/30 data-[selected]:!bg-green10 data-[selected]:text-white hover:bg-green5 data-[highlighted]:bg-green5 data-[unavailable]:pointer-events-none data-[unavailable]:text-black/30 data-[unavailable]:line-through before:absolute before:top-[5px] before:hidden before:rounded-full before:w-1 before:h-1 before:bg-white data-[today]:before:block data-[today]:before:bg-green9"},null,8,["day","month"])]),_:2},1032,["date"]))),128))]),_:2},1024))),128))]),_:2},1024)]),_:2},1024))),128))])]),_:1},8,["model-value","locale"])]))}}),ge={name:"index.vue",class:"language-vue"},Ce={class:"shiki github-dark vp-code",tabindex:"0"},be={class:"line"},he={style:{color:"#85E89D"}},we={class:"line"},Be={style:{color:"#85E89D"}},ve={class:"line"},Te={style:{color:"#85E89D"}},xe={class:"line"},ke={style:{color:"#85E89D"}},qe={class:"line"},De={style:{color:"#85E89D"}},Ae={class:"line"},Se={style:{color:"#85E89D"}},Re={class:"line"},Ve={style:{color:"#85E89D"}},Ie={class:"line"},Pe={style:{color:"#85E89D"}},Ge={class:"line"},He={style:{color:"#85E89D"}},Me={class:"line"},je={style:{color:"#85E89D"}},We={class:"line"},Oe={style:{color:"#85E89D"}},Le={class:"line"},Ue={style:{color:"#85E89D"}},Ne={class:"line"},$e={style:{color:"#85E89D"}},ze={class:"line"},Ke={style:{color:"#85E89D"}},Ze={class:"line"},Je={style:{color:"#85E89D"}},Ye={class:"line"},Qe={style:{color:"#85E89D"}},Xe={class:"line"},_e={style:{color:"#85E89D"}},en={class:"line"},nn={style:{color:"#85E89D"}},on={class:"line"},sn={style:{color:"#85E89D"}},ln={class:"line"},tn={style:{color:"#85E89D"}},an={class:"line"},rn={style:{color:"#85E89D"}},pn={class:"line"},dn={style:{color:"#85E89D"}},En={class:"line"},yn={style:{color:"#85E89D"}},cn={class:"line"},un={style:{color:"#85E89D"}},mn={name:"index.vue",class:"language-vue"},fn={class:"shiki github-dark vp-code",tabindex:"0"},Fn={class:"line"},gn={style:{color:"#85E89D"}},Cn={class:"line"},bn={style:{color:"#85E89D"}},hn={class:"line"},wn={style:{color:"#85E89D"}},Bn={class:"line"},vn={style:{color:"#85E89D"}},Tn={class:"line"},xn={style:{color:"#85E89D"}},kn={class:"line"},qn={style:{color:"#85E89D"}},Dn={class:"line"},An={style:{color:"#85E89D"}},Sn={class:"line"},Rn={style:{color:"#85E89D"}},Vn={class:"line"},In={style:{color:"#85E89D"}},Pn={class:"line"},Gn={style:{color:"#85E89D"}},Hn={class:"line"},Mn={style:{color:"#85E89D"}},jn={class:"line"},Wn={style:{color:"#85E89D"}},On={class:"line"},Ln={style:{color:"#85E89D"}},Un={class:"line"},Nn={style:{color:"#85E89D"}},$n={class:"line"},zn={style:{color:"#85E89D"}},Kn={class:"line"},Zn={style:{color:"#85E89D"}},Jn={class:"line"},Yn={style:{color:"#85E89D"}},Qn={class:"line"},Xn={style:{color:"#85E89D"}},_n={class:"line"},eo={style:{color:"#85E89D"}},no={class:"line"},oo={style:{color:"#85E89D"}},so={class:"line"},lo={style:{color:"#85E89D"}},to={class:"line"},ao={style:{color:"#85E89D"}},ro={class:"line"},po={style:{color:"#85E89D"}},io={class:"line"},Eo={style:{color:"#85E89D"}},yo={name:"vue",class:"language-vue"},co={class:"shiki github-dark vp-code",tabindex:"0"},uo={class:"line"},mo={style:{color:"#85E89D"}},fo={class:"line"},Fo={style:{color:"#85E89D"}},go={class:"line"},Co={style:{color:"#85E89D"}},bo={class:"line"},ho={style:{color:"#85E89D"}},wo={class:"line"},Bo={style:{color:"#85E89D"}},vo={class:"line"},To={style:{color:"#85E89D"}},xo={class:"line"},ko={style:{color:"#85E89D"}},qo={class:"line"},Do={style:{color:"#85E89D"}},Ao={class:"line"},So={style:{color:"#85E89D"}},Ro={class:"line"},Vo={style:{color:"#85E89D"}},Io={class:"line"},Po={style:{color:"#85E89D"}},Go={class:"line"},Ho={style:{color:"#85E89D"}},Mo={class:"line"},jo={style:{color:"#85E89D"}},Wo={class:"line"},Oo={style:{color:"#85E89D"}},Lo={class:"line"},Uo={style:{color:"#85E89D"}},No={class:"line"},$o={style:{color:"#85E89D"}},zo={class:"line"},Ko={style:{color:"#85E89D"}},Zo={class:"line"},Jo={style:{color:"#85E89D"}},Yo={class:"line"},Qo={style:{color:"#85E89D"}},Xo={class:"line"},_o={style:{color:"#85E89D"}},es={class:"line"},ns={style:{color:"#85E89D"}},os={name:"index.vue",class:"language-vue"},ss={class:"shiki github-dark vp-code",tabindex:"0"},ls={class:"line"},ts={style:{color:"#85E89D"}},as={class:"line"},rs={style:{color:"#85E89D"}},ps={class:"line"},is={style:{color:"#85E89D"}},ds={class:"line"},Es={style:{color:"#85E89D"}},ys={class:"line"},cs={style:{color:"#85E89D"}},us={class:"line"},ms={style:{color:"#85E89D"}},fs={class:"line"},Fs={style:{color:"#85E89D"}},gs={class:"line"},Cs={style:{color:"#85E89D"}},bs={class:"line"},hs={style:{color:"#85E89D"}},ws={class:"line"},Bs={style:{color:"#85E89D"}},vs={class:"line"},Ts={style:{color:"#85E89D"}},xs={class:"line"},ks={style:{color:"#85E89D"}},qs={class:"line"},Ds={style:{color:"#85E89D"}},As={class:"line"},Ss={style:{color:"#85E89D"}},Rs={class:"line"},Vs={style:{color:"#85E89D"}},Is={class:"line"},Ps={style:{color:"#85E89D"}},Gs={class:"line"},Hs={style:{color:"#85E89D"}},Ms={class:"line"},js={style:{color:"#85E89D"}},Ws={class:"line"},Os={style:{color:"#85E89D"}},Ls={class:"line"},Us={style:{color:"#85E89D"}},Ns={class:"line"},$s={style:{color:"#85E89D"}},zs={class:"line"},Ks={style:{color:"#85E89D"}},Zs={class:"line"},Js={style:{color:"#85E89D"}},Ys={class:"line"},Qs={style:{color:"#85E89D"}},Xs={class:"line"},_s={style:{color:"#85E89D"}},el={class:"line"},nl={style:{color:"#85E89D"}},ol={class:"line"},sl={style:{color:"#85E89D"}},ll={class:"line"},tl={style:{color:"#85E89D"}},al={name:"index.vue",class:"language-vue"},rl={class:"shiki github-dark vp-code",tabindex:"0"},pl={class:"line"},il={style:{color:"#85E89D"}},dl={class:"line"},El={style:{color:"#85E89D"}},yl={class:"line"},cl={style:{color:"#85E89D"}},ul={class:"line"},ml={style:{color:"#85E89D"}},fl={class:"line"},Fl={style:{color:"#85E89D"}},gl={class:"line"},Cl={style:{color:"#85E89D"}},bl={class:"line"},hl={style:{color:"#85E89D"}},wl={class:"line"},Bl={style:{color:"#85E89D"}},vl={class:"line"},Tl={style:{color:"#85E89D"}},xl={class:"line"},kl={style:{color:"#85E89D"}},ql={class:"line"},Dl={style:{color:"#85E89D"}},Al={class:"line"},Sl={style:{color:"#85E89D"}},Rl={class:"line"},Vl={style:{color:"#85E89D"}},Il={class:"line"},Pl={style:{color:"#85E89D"}},Gl={class:"line"},Hl={style:{color:"#85E89D"}},Ml={class:"line"},jl={style:{color:"#85E89D"}},Wl={class:"line"},Ol={style:{color:"#85E89D"}},Ll={class:"line"},Ul={style:{color:"#85E89D"}},Nl={class:"line"},$l={style:{color:"#85E89D"}},zl={class:"line"},Kl={style:{color:"#85E89D"}},Zl={class:"line"},Jl={style:{color:"#85E89D"}},Yl={class:"line"},Ql={style:{color:"#85E89D"}},Xl={class:"line"},_l={style:{color:"#85E89D"}},et={class:"line"},nt={style:{color:"#85E89D"}},ot={class:"line"},st={style:{color:"#85E89D"}},lt={class:"line"},tt={style:{color:"#85E89D"}},at={class:"line"},rt={style:{color:"#85E89D"}},pt={class:"line"},it={style:{color:"#85E89D"}},dt={name:"index.vue",class:"language-vue"},Et={class:"shiki github-dark vp-code",tabindex:"0"},yt={class:"line"},ct={style:{color:"#85E89D"}},ut={style:{color:"#85E89D"}},mt={class:"line"},ft={style:{color:"#85E89D"}},Ft={class:"line"},gt={style:{color:"#85E89D"}},Ct={class:"line"},bt={style:{color:"#85E89D"}},ht={class:"line"},wt={style:{color:"#85E89D"}},Bt={class:"line"},vt={style:{color:"#85E89D"}},Tt={class:"line"},xt={style:{color:"#85E89D"}},kt={class:"line"},qt={style:{color:"#85E89D"}},Dt={class:"line"},At={style:{color:"#85E89D"}},St={class:"line"},Rt={style:{color:"#85E89D"}},Vt={class:"line"},It={style:{color:"#85E89D"}},Pt={class:"line"},Gt={style:{color:"#85E89D"}},Ht={class:"line"},Mt={style:{color:"#85E89D"}},jt={class:"line"},Wt={style:{color:"#85E89D"}},Ot={class:"line"},Lt={style:{color:"#85E89D"}},Ut={class:"line"},Nt={style:{color:"#85E89D"}},$t={class:"line"},zt={style:{color:"#85E89D"}},Kt={class:"line"},Zt={style:{color:"#85E89D"}},Jt={class:"line"},Yt={style:{color:"#85E89D"}},Qt={class:"line"},Xt={style:{color:"#85E89D"}},_t={class:"line"},ea={style:{color:"#85E89D"}},na={class:"line"},oa={style:{color:"#85E89D"}},sa={class:"line"},la={style:{color:"#85E89D"}},ta={class:"line"},aa={style:{color:"#85E89D"}},ra={style:{color:"#85E89D"}},pa={class:"line"},ia={style:{color:"#85E89D"}},da={class:"line"},Ea={style:{color:"#85E89D"}},ya={class:"line"},ca={style:{color:"#85E89D"}},ua={class:"line"},ma={style:{color:"#85E89D"}},fa={class:"line"},Fa={style:{color:"#85E89D"}},ga={class:"line"},Ca={style:{color:"#85E89D"}},ba={class:"line"},ha={style:{color:"#85E89D"}},wa={class:"line"},Ba={style:{color:"#85E89D"}},va={class:"line"},Ta={style:{color:"#85E89D"}},xa={class:"line"},ka={style:{color:"#85E89D"}},qa={class:"line"},Da={style:{color:"#85E89D"}},Aa={class:"line"},Sa={style:{color:"#85E89D"}},Ra={class:"line"},Va={style:{color:"#85E89D"}},Ia={class:"line"},Pa={style:{color:"#85E89D"}},Ga={class:"line"},Ha={style:{color:"#85E89D"}},Ma={class:"line"},ja={style:{color:"#85E89D"}},Wa={class:"line"},Oa={style:{color:"#85E89D"}},La={class:"line"},Ua={style:{color:"#85E89D"}},Na={class:"line"},$a={style:{color:"#85E89D"}},za={class:"line"},Ka={style:{color:"#85E89D"}},Za={class:"line"},Ja={style:{color:"#85E89D"}},Ya={class:"line"},Qa={style:{color:"#85E89D"}},Xa={class:"line"},_a={style:{color:"#85E89D"}},er={class:"line"},nr={style:{color:"#85E89D"}},or={class:"line"},sr={style:{color:"#85E89D"}},lr={class:"line"},tr={style:{color:"#85E89D"}},ar={class:"line"},rr={style:{color:"#85E89D"}},pr={class:"line"},ir={style:{color:"#85E89D"}},dr={class:"line"},Er={style:{color:"#85E89D"}},yr={class:"line"},cr={style:{color:"#85E89D"}},ur={class:"line"},mr={style:{color:"#85E89D"}},fr={class:"line"},Fr={style:{color:"#85E89D"}},gr={class:"line"},Cr={style:{color:"#85E89D"}},br={class:"line"},hr={style:{color:"#85E89D"}},wr={class:"line"},Br={style:{color:"#85E89D"}},vr={class:"line"},Tr={style:{color:"#85E89D"}},xr={class:"line"},kr={style:{color:"#85E89D"}},qr={class:"line"},Dr={style:{color:"#85E89D"}},Ar={class:"line"},Sr={style:{color:"#85E89D"}},Rr={class:"line"},Vr={style:{color:"#85E89D"}},Ir={class:"line"},Pr={style:{color:"#85E89D"}},Gr={class:"line"},Hr={style:{color:"#85E89D"}},Mr={class:"line"},jr={style:{color:"#85E89D"}},Wr={class:"line"},Or={style:{color:"#85E89D"}},Lr={class:"line"},Ur={style:{color:"#85E89D"}},Nr={class:"line"},$r={style:{color:"#85E89D"}},zr={class:"line"},Kr={style:{color:"#85E89D"}},Zr={class:"line"},Jr={style:{color:"#85E89D"}},Yr={class:"line"},Qr={style:{color:"#85E89D"}},Xr={class:"line"},_r={style:{color:"#85E89D"}},ep={class:"line"},np={style:{color:"#85E89D"}},op={class:"line"},sp={style:{color:"#85E89D"}},lp={class:"line"},tp={style:{color:"#85E89D"}},ap={class:"line"},rp={style:{color:"#85E89D"}},pp={class:"line"},ip={style:{color:"#85E89D"}},dp={class:"line"},Ep={style:{color:"#85E89D"}},yp={class:"line"},cp={style:{color:"#85E89D"}},up={class:"line"},mp={style:{color:"#85E89D"}},fp={class:"line"},Fp={style:{color:"#85E89D"}},gp={class:"line"},Cp={style:{color:"#85E89D"}},bp={class:"line"},hp={style:{color:"#85E89D"}},wp={name:"index.vue",class:"language-vue"},Bp={class:"shiki github-dark vp-code",tabindex:"0"},vp={class:"line"},Tp={style:{color:"#85E89D"}},xp={style:{color:"#85E89D"}},kp={class:"line"},qp={style:{color:"#85E89D"}},Dp={class:"line"},Ap={style:{color:"#85E89D"}},Sp={class:"line"},Rp={style:{color:"#85E89D"}},Vp={class:"line"},Ip={style:{color:"#85E89D"}},Pp={class:"line"},Gp={style:{color:"#85E89D"}},Hp={class:"line"},Mp={style:{color:"#85E89D"}},jp={class:"line"},Wp={style:{color:"#85E89D"}},Op={class:"line"},Lp={style:{color:"#85E89D"}},Up={class:"line"},Np={style:{color:"#85E89D"}},$p={class:"line"},zp={style:{color:"#85E89D"}},Kp={class:"line"},Zp={style:{color:"#85E89D"}},Jp={class:"line"},Yp={style:{color:"#85E89D"}},Qp={class:"line"},Xp={style:{color:"#85E89D"}},_p={class:"line"},ei={style:{color:"#85E89D"}},ni={class:"line"},oi={style:{color:"#85E89D"}},si={class:"line"},li={style:{color:"#85E89D"}},ti={class:"line"},ai={style:{color:"#85E89D"}},ri={class:"line"},pi={style:{color:"#85E89D"}},ii={class:"line"},di={style:{color:"#85E89D"}},Ei={class:"line"},yi={style:{color:"#85E89D"}},ci={class:"line"},ui={style:{color:"#85E89D"}},mi={class:"line"},fi={style:{color:"#85E89D"}},Fi={class:"line"},gi={style:{color:"#85E89D"}},Ci={style:{color:"#85E89D"}},bi={class:"line"},hi={style:{color:"#85E89D"}},wi={class:"line"},Bi={style:{color:"#85E89D"}},vi={class:"line"},Ti={style:{color:"#85E89D"}},xi={class:"line"},ki={style:{color:"#85E89D"}},qi={class:"line"},Di={style:{color:"#85E89D"}},Ai={class:"line"},Si={style:{color:"#85E89D"}},Ri={class:"line"},Vi={style:{color:"#85E89D"}},Ii={class:"line"},Pi={style:{color:"#85E89D"}},Gi={class:"line"},Hi={style:{color:"#85E89D"}},Mi={class:"line"},ji={style:{color:"#85E89D"}},Wi={class:"line"},Oi={style:{color:"#85E89D"}},Li={class:"line"},Ui={style:{color:"#85E89D"}},Ni={class:"line"},$i={style:{color:"#85E89D"}},zi={class:"line"},Ki={style:{color:"#85E89D"}},Zi={class:"line"},Ji={style:{color:"#85E89D"}},Yi={class:"line"},Qi={style:{color:"#85E89D"}},Xi={class:"line"},_i={style:{color:"#85E89D"}},ed={class:"line"},nd={style:{color:"#85E89D"}},od={class:"line"},sd={style:{color:"#85E89D"}},ld={class:"line"},td={style:{color:"#85E89D"}},ad={class:"line"},rd={style:{color:"#85E89D"}},pd={class:"line"},id={style:{color:"#85E89D"}},dd={class:"line"},Ed={style:{color:"#85E89D"}},yd={class:"line"},cd={style:{color:"#85E89D"}},ud={class:"line"},md={style:{color:"#85E89D"}},fd={class:"line"},Fd={style:{color:"#85E89D"}},gd={class:"line"},Cd={style:{color:"#85E89D"}},bd={class:"line"},hd={style:{color:"#85E89D"}},wd={class:"line"},Bd={style:{color:"#85E89D"}},vd={class:"line"},Td={style:{color:"#85E89D"}},xd={class:"line"},kd={style:{color:"#85E89D"}},qd={class:"line"},Dd={style:{color:"#85E89D"}},Ad={class:"line"},Sd={style:{color:"#85E89D"}},Rd={class:"line"},Vd={style:{color:"#85E89D"}},Id={class:"line"},Pd={style:{color:"#85E89D"}},Gd={class:"line"},Hd={style:{color:"#85E89D"}},Md={class:"line"},jd={style:{color:"#85E89D"}},Wd={class:"line"},Od={style:{color:"#85E89D"}},Ld={class:"line"},Ud={style:{color:"#85E89D"}},Nd={class:"line"},$d={style:{color:"#85E89D"}},zd={class:"line"},Kd={style:{color:"#85E89D"}},Zd={class:"line"},Jd={style:{color:"#85E89D"}},Yd={class:"line"},Qd={style:{color:"#85E89D"}},Xd={class:"line"},_d={style:{color:"#85E89D"}},eE={class:"line"},nE={style:{color:"#85E89D"}},oE={class:"line"},sE={style:{color:"#85E89D"}},lE={class:"line"},tE={style:{color:"#85E89D"}},aE={class:"line"},rE={style:{color:"#85E89D"}},pE={class:"line"},iE={style:{color:"#85E89D"}},dE={class:"line"},EE={style:{color:"#85E89D"}},yE={class:"line"},cE={style:{color:"#85E89D"}},uE={class:"line"},mE={style:{color:"#85E89D"}},fE={class:"line"},FE={style:{color:"#85E89D"}},gE={class:"line"},CE={style:{color:"#85E89D"}},bE={class:"line"},hE={style:{color:"#85E89D"}},wE={class:"line"},BE={style:{color:"#85E89D"}},vE={class:"line"},TE={style:{color:"#85E89D"}},xE={class:"line"},kE={style:{color:"#85E89D"}},qE={class:"line"},DE={style:{color:"#85E89D"}},AE={class:"line"},SE={style:{color:"#85E89D"}},RE={class:"line"},VE={style:{color:"#85E89D"}},HE=JSON.parse('{"title":"Calendar","description":"Displays dates and days of the week, facilitating date-related interactions.","frontmatter":{"title":"Calendar","description":"Displays dates and days of the week, facilitating date-related interactions.","name":"calendar","sidebar":true},"headers":[{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Preface","slug":"preface","link":"#preface","children":[]},{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Anatomy","slug":"anatomy","link":"#anatomy","children":[]},{"level":2,"title":"API Reference","slug":"api-reference","link":"#api-reference","children":[{"level":3,"title":"Root","slug":"root","link":"#root","children":[]},{"level":3,"title":"Header","slug":"header","link":"#header","children":[]},{"level":3,"title":"Prev Button","slug":"prev-button","link":"#prev-button","children":[]},{"level":3,"title":"Next Button","slug":"next-button","link":"#next-button","children":[]},{"level":3,"title":"Heading","slug":"heading","link":"#heading","children":[]},{"level":3,"title":"Grid","slug":"grid","link":"#grid","children":[]},{"level":3,"title":"Grid Head","slug":"grid-head","link":"#grid-head","children":[]},{"level":3,"title":"Grid Body","slug":"grid-body","link":"#grid-body","children":[]},{"level":3,"title":"Grid Row","slug":"grid-row","link":"#grid-row","children":[]},{"level":3,"title":"Head Cell","slug":"head-cell","link":"#head-cell","children":[]},{"level":3,"title":"Cell","slug":"cell","link":"#cell","children":[]},{"level":3,"title":"Cell Trigger","slug":"cell-trigger","link":"#cell-trigger","children":[]}]},{"level":2,"title":"Examples","slug":"examples","link":"#examples","children":[{"level":3,"title":"Calendar with Year Incrementation","slug":"calendar-with-year-incrementation","link":"#calendar-with-year-incrementation","children":[]},{"level":3,"title":"Calendar with Locale and Calendar System Selection","slug":"calendar-with-locale-and-calendar-system-selection","link":"#calendar-with-locale-and-calendar-system-selection","children":[]}]},{"level":2,"title":"Accessibility","slug":"accessibility","link":"#accessibility","children":[{"level":3,"title":"Keyboard Interactions","slug":"keyboard-interactions","link":"#keyboard-interactions","children":[]}]}],"relativePath":"docs/components/calendar.md","filePath":"docs/components/calendar.md","lastUpdated":1741142868000}'),IE={name:"docs/components/calendar.md"},ME=Object.assign(IE,{setup(H){return(T,n)=>{const u=g("Badge"),w=g("Description"),t=g("link-hover-card-content"),a=g("link-hover-card"),m=g("ComponentPreview"),B=g("Highlights"),x=g("InstallationTabs"),y=g("SlotsTable"),i=g("DataAttributesTable"),p=g("PropsTable"),F=g("KeyboardTable");return d(),f("div",null,[n[2500]||(n[2500]=E("",1)),s(u,null,{default:l(()=>n[0]||(n[0]=[o("Alpha")])),_:1}),s(w,null,{default:l(()=>n[1]||(n[1]=[o(" Displays dates and days of the week, facilitating date-related interactions. ")])),_:1}),s(m,{name:"Calendar",type:"demo",files:"%7B%22css%22%3A%5B%22css%2Findex.vue%22%2C%22css%2Fstyles.css%22%5D%2C%22tailwind%22%3A%5B%22tailwind%2Findex.vue%22%2C%22tailwind%2Ftailwind.config.js%22%5D%7D"},{css:l(()=>[e("div",ge,[n[211]||(n[211]=e("button",{title:"Copy Code",class:"copy"},null,-1)),n[212]||(n[212]=e("span",{class:"lang"},"vue",-1)),e("pre",Ce,[e("code",null,[n[78]||(n[78]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"<"),e("span",{style:{color:"#85E89D"}},"script"),e("span",{style:{color:"#B392F0"}}," setup"),e("span",{style:{color:"#B392F0"}}," lang"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"ts"'),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[79]||(n[79]=o(`
`)),n[80]||(n[80]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#E1E4E8"}}," { Icon } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," '@iconify/vue'")],-1)),n[81]||(n[81]=o(`
`)),n[82]||(n[82]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#E1E4E8"}}," { CalendarCell, CalendarCellTrigger, CalendarGrid, CalendarGridBody, CalendarGridHead, CalendarGridRow, CalendarHeadCell, CalendarHeader, CalendarHeading, CalendarNext, CalendarPrev, CalendarRoot, "),e("span",{style:{color:"#F97583"}},"type"),e("span",{style:{color:"#E1E4E8"}}," CalendarRootProps } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," 'reka-ui'")],-1)),n[83]||(n[83]=o(`
`)),n[84]||(n[84]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#9ECBFF"}}," './styles.css'")],-1)),n[85]||(n[85]=o(`
`)),n[86]||(n[86]=e("span",{class:"line"},null,-1)),n[87]||(n[87]=o(`
`)),n[88]||(n[88]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#B392F0"}}," isDateUnavailable"),e("span",{style:{color:"#F97583"}},":"),e("span",{style:{color:"#B392F0"}}," CalendarRootProps"),e("span",{style:{color:"#E1E4E8"}},"["),e("span",{style:{color:"#9ECBFF"}},"'isDateUnavailable'"),e("span",{style:{color:"#E1E4E8"}},"] "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#E1E4E8"}}," ("),e("span",{style:{color:"#FFAB70"}},"date"),e("span",{style:{color:"#E1E4E8"}},") "),e("span",{style:{color:"#F97583"}},"=>"),e("span",{style:{color:"#E1E4E8"}}," {")],-1)),n[89]||(n[89]=o(`
`)),n[90]||(n[90]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"  return"),e("span",{style:{color:"#E1E4E8"}}," date.day "),e("span",{style:{color:"#F97583"}},"==="),e("span",{style:{color:"#79B8FF"}}," 17"),e("span",{style:{color:"#F97583"}}," ||"),e("span",{style:{color:"#E1E4E8"}}," date.day "),e("span",{style:{color:"#F97583"}},"==="),e("span",{style:{color:"#79B8FF"}}," 18")],-1)),n[91]||(n[91]=o(`
`)),n[92]||(n[92]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")],-1)),n[93]||(n[93]=o(`
`)),n[94]||(n[94]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"script"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[95]||(n[95]=o(`
`)),n[96]||(n[96]=e("span",{class:"line"},null,-1)),n[97]||(n[97]=o(`
`)),n[98]||(n[98]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"<"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[99]||(n[99]=o(`
`)),e("span",be,[n[3]||(n[3]=e("span",{style:{color:"#E1E4E8"}},"  <",-1)),e("span",he,[s(a,{name:"CalendarRoot"},{content:l(({})=>[s(t,{title:"slots",data:`[
  {
    "name": "date",
    "description": "<p>The current date of the placeholder</p>\\n",
    "type": "DateValue"
  },
  {
    "name": "grid",
    "description": "<p>The grid of dates</p>\\n",
    "type": "Grid<DateValue>[]"
  },
  {
    "name": "weekDays",
    "description": "<p>The days of the week</p>\\n",
    "type": "string[]"
  },
  {
    "name": "weekStartsOn",
    "description": "<p>The start of the week</p>\\n",
    "type": "0 | 1 | 2 | 3 | 4 | 5 | 6"
  },
  {
    "name": "locale",
    "description": "<p>The calendar locale</p>\\n",
    "type": "string"
  },
  {
    "name": "fixedWeeks",
    "description": "<p>Whether or not to always display 6 weeks in the calendar</p>\\n",
    "type": "boolean"
  },
  {
    "name": "modelValue",
    "description": "<p>The current date of the calendar</p>\\n",
    "type": "CalendarDate | CalendarDateTime | ZonedDateTime"
  }
]`})]),default:l(()=>[n[2]||(n[2]=o("CalendarRoot"))]),_:1})])]),n[100]||(n[100]=o(`
`)),n[101]||(n[101]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    v-slot"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"{ weekDays, grid }"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[102]||(n[102]=o(`
`)),n[103]||(n[103]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    :"),e("span",{style:{color:"#B392F0"}},"is-date-unavailable"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"isDateUnavailable"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[104]||(n[104]=o(`
`)),n[105]||(n[105]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"Calendar"')],-1)),n[106]||(n[106]=o(`
`)),n[107]||(n[107]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    fixed-weeks")],-1)),n[108]||(n[108]=o(`
`)),n[109]||(n[109]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  >")],-1)),n[110]||(n[110]=o(`
`)),e("span",we,[n[5]||(n[5]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",Be,[s(a,{name:"CalendarHeader"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[4]||(n[4]=o("CalendarHeader"))]),_:1})]),n[6]||(n[6]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[7]||(n[7]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[8]||(n[8]=e("span",{style:{color:"#9ECBFF"}},'"CalendarHeader"',-1)),n[9]||(n[9]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[111]||(n[111]=o(`
`)),e("span",ve,[n[11]||(n[11]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",Te,[s(a,{name:"CalendarPrev"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "prevPage",
    "description": "<p>The function to be used for the prev page. Overwrites the <code>prevPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[10]||(n[10]=o("CalendarPrev"))]),_:1})])]),n[112]||(n[112]=o(`
`)),n[113]||(n[113]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"CalendarNavButton"')],-1)),n[114]||(n[114]=o(`
`)),n[115]||(n[115]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      >")],-1)),n[116]||(n[116]=o(`
`)),n[117]||(n[117]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        <"),e("span",{style:{color:"#85E89D"}},"Icon")],-1)),n[118]||(n[118]=o(`
`)),n[119]||(n[119]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:chevron-left"')],-1)),n[120]||(n[120]=o(`
`)),n[121]||(n[121]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"Icon"')],-1)),n[122]||(n[122]=o(`
`)),n[123]||(n[123]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        />")],-1)),n[124]||(n[124]=o(`
`)),e("span",xe,[n[13]||(n[13]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",ke,[s(a,{name:"CalendarPrev"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "prevPage",
    "description": "<p>The function to be used for the prev page. Overwrites the <code>prevPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[12]||(n[12]=o("CalendarPrev"))]),_:1})]),n[14]||(n[14]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[125]||(n[125]=o(`
`)),e("span",qe,[n[16]||(n[16]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",De,[s(a,{name:"CalendarHeading"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "headingValue",
    "description": "<p>Current month and year</p>\\n",
    "type": "string"
  }
]`})]),default:l(()=>[n[15]||(n[15]=o("CalendarHeading"))]),_:1})]),n[17]||(n[17]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[18]||(n[18]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[19]||(n[19]=e("span",{style:{color:"#9ECBFF"}},'"CalendarHeading"',-1)),n[20]||(n[20]=e("span",{style:{color:"#E1E4E8"}}," />",-1))]),n[126]||(n[126]=o(`
`)),e("span",Ae,[n[22]||(n[22]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",Se,[s(a,{name:"CalendarNext"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nextPage",
    "description": "<p>The function to be used for the next page. Overwrites the <code>nextPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[21]||(n[21]=o("CalendarNext"))]),_:1})])]),n[127]||(n[127]=o(`
`)),n[128]||(n[128]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"CalendarNavButton"')],-1)),n[129]||(n[129]=o(`
`)),n[130]||(n[130]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      >")],-1)),n[131]||(n[131]=o(`
`)),n[132]||(n[132]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        <"),e("span",{style:{color:"#85E89D"}},"Icon")],-1)),n[133]||(n[133]=o(`
`)),n[134]||(n[134]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:chevron-right"')],-1)),n[135]||(n[135]=o(`
`)),n[136]||(n[136]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"Icon"')],-1)),n[137]||(n[137]=o(`
`)),n[138]||(n[138]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        />")],-1)),n[139]||(n[139]=o(`
`)),e("span",Re,[n[24]||(n[24]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",Ve,[s(a,{name:"CalendarNext"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nextPage",
    "description": "<p>The function to be used for the next page. Overwrites the <code>nextPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[23]||(n[23]=o("CalendarNext"))]),_:1})]),n[25]||(n[25]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[140]||(n[140]=o(`
`)),e("span",Ie,[n[27]||(n[27]=e("span",{style:{color:"#E1E4E8"}},"    </",-1)),e("span",Pe,[s(a,{name:"CalendarHeader"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[26]||(n[26]=o("CalendarHeader"))]),_:1})]),n[28]||(n[28]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[141]||(n[141]=o(`
`)),n[142]||(n[142]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    <"),e("span",{style:{color:"#85E89D"}},"div")],-1)),n[143]||(n[143]=o(`
`)),n[144]||(n[144]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"CalendarWrapper"')],-1)),n[145]||(n[145]=o(`
`)),n[146]||(n[146]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    >")],-1)),n[147]||(n[147]=o(`
`)),e("span",Ge,[n[30]||(n[30]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",He,[s(a,{name:"CalendarGrid"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"table\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[29]||(n[29]=o("CalendarGrid"))]),_:1})])]),n[148]||(n[148]=o(`
`)),n[149]||(n[149]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"        v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"month "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," grid"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[150]||(n[150]=o(`
`)),n[151]||(n[151]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"month.value."),e("span",{style:{color:"#B392F0"}},"toString"),e("span",{style:{color:"#E1E4E8"}},"()"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[152]||(n[152]=o(`
`)),n[153]||(n[153]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"CalendarGrid"')],-1)),n[154]||(n[154]=o(`
`)),n[155]||(n[155]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      >")],-1)),n[156]||(n[156]=o(`
`)),e("span",Me,[n[32]||(n[32]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",je,[s(a,{name:"CalendarGridHead"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"thead\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[31]||(n[31]=o("CalendarGridHead"))]),_:1})]),n[33]||(n[33]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[157]||(n[157]=o(`
`)),e("span",We,[n[35]||(n[35]=e("span",{style:{color:"#E1E4E8"}},"          <",-1)),e("span",Oe,[s(a,{name:"CalendarGridRow"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tr\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[34]||(n[34]=o("CalendarGridRow"))]),_:1})]),n[36]||(n[36]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[37]||(n[37]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[38]||(n[38]=e("span",{style:{color:"#9ECBFF"}},'"CalendarGridRow"',-1)),n[39]||(n[39]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[158]||(n[158]=o(`
`)),e("span",Le,[n[41]||(n[41]=e("span",{style:{color:"#E1E4E8"}},"            <",-1)),e("span",Ue,[s(a,{name:"CalendarHeadCell"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"th\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[40]||(n[40]=o("CalendarHeadCell"))]),_:1})])]),n[159]||(n[159]=o(`
`)),n[160]||(n[160]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"              v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"day "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," weekDays"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[161]||(n[161]=o(`
`)),n[162]||(n[162]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"day"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[163]||(n[163]=o(`
`)),n[164]||(n[164]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"              class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"CalendarHeadCell"')],-1)),n[165]||(n[165]=o(`
`)),n[166]||(n[166]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"            >")],-1)),n[167]||(n[167]=o(`
`)),n[168]||(n[168]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              {{ day }}")],-1)),n[169]||(n[169]=o(`
`)),e("span",Ne,[n[43]||(n[43]=e("span",{style:{color:"#E1E4E8"}},"            </",-1)),e("span",$e,[s(a,{name:"CalendarHeadCell"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"th\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[42]||(n[42]=o("CalendarHeadCell"))]),_:1})]),n[44]||(n[44]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[170]||(n[170]=o(`
`)),e("span",ze,[n[46]||(n[46]=e("span",{style:{color:"#E1E4E8"}},"          </",-1)),e("span",Ke,[s(a,{name:"CalendarGridRow"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tr\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[45]||(n[45]=o("CalendarGridRow"))]),_:1})]),n[47]||(n[47]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[171]||(n[171]=o(`
`)),e("span",Ze,[n[49]||(n[49]=e("span",{style:{color:"#E1E4E8"}},"        </",-1)),e("span",Je,[s(a,{name:"CalendarGridHead"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"thead\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[48]||(n[48]=o("CalendarGridHead"))]),_:1})]),n[50]||(n[50]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[172]||(n[172]=o(`
`)),e("span",Ye,[n[52]||(n[52]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",Qe,[s(a,{name:"CalendarGridBody"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tbody\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[51]||(n[51]=o("CalendarGridBody"))]),_:1})]),n[53]||(n[53]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[54]||(n[54]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[55]||(n[55]=e("span",{style:{color:"#9ECBFF"}},'"CalendarGridWrapper"',-1)),n[56]||(n[56]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[173]||(n[173]=o(`
`)),e("span",Xe,[n[58]||(n[58]=e("span",{style:{color:"#E1E4E8"}},"          <",-1)),e("span",_e,[s(a,{name:"CalendarGridRow"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tr\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[57]||(n[57]=o("CalendarGridRow"))]),_:1})])]),n[174]||(n[174]=o(`
`)),n[175]||(n[175]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"            v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"(weekDates, index) "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," month.rows"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[176]||(n[176]=o(`
`)),n[177]||(n[177]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"            :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"`weekDate-${'),e("span",{style:{color:"#E1E4E8"}},"index"),e("span",{style:{color:"#9ECBFF"}},'}`"')],-1)),n[178]||(n[178]=o(`
`)),n[179]||(n[179]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"            class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"CalendarGridRow"')],-1)),n[180]||(n[180]=o(`
`)),n[181]||(n[181]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          >")],-1)),n[182]||(n[182]=o(`
`)),e("span",en,[n[60]||(n[60]=e("span",{style:{color:"#E1E4E8"}},"            <",-1)),e("span",nn,[s(a,{name:"CalendarCell"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"td\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "date",
    "description": "<p>The date value for the cell</p>\\n",
    "type": "DateValue",
    "required": true
  }
]`})]),default:l(()=>[n[59]||(n[59]=o("CalendarCell"))]),_:1})])]),n[183]||(n[183]=o(`
`)),n[184]||(n[184]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"              v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"weekDate "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," weekDates"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[185]||(n[185]=o(`
`)),n[186]||(n[186]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"weekDate."),e("span",{style:{color:"#B392F0"}},"toString"),e("span",{style:{color:"#E1E4E8"}},"()"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[187]||(n[187]=o(`
`)),n[188]||(n[188]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              :"),e("span",{style:{color:"#B392F0"}},"date"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"weekDate"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[189]||(n[189]=o(`
`)),n[190]||(n[190]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"              class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"CalendarCell"')],-1)),n[191]||(n[191]=o(`
`)),n[192]||(n[192]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"            >")],-1)),n[193]||(n[193]=o(`
`)),e("span",on,[n[62]||(n[62]=e("span",{style:{color:"#E1E4E8"}},"              <",-1)),e("span",sn,[s(a,{name:"CalendarCellTrigger"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "day",
    "description": "<p>The date value provided to the cell trigger</p>\\n",
    "type": "DateValue",
    "required": true
  },
  {
    "name": "month",
    "description": "<p>The month in which the cell is rendered</p>\\n",
    "type": "DateValue",
    "required": true
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "dayValue",
    "description": "<p>Current day</p>\\n",
    "type": "string"
  },
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "selected",
    "description": "<p>Current selected state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "today",
    "description": "<p>Current today state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "outsideView",
    "description": "<p>Current outside view state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "outsideVisibleView",
    "description": "<p>Current outside visible view state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "unavailable",
    "description": "<p>Current unavailable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[61]||(n[61]=o("CalendarCellTrigger"))]),_:1})])]),n[194]||(n[194]=o(`
`)),n[195]||(n[195]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                :"),e("span",{style:{color:"#B392F0"}},"day"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"weekDate"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[196]||(n[196]=o(`
`)),n[197]||(n[197]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                :"),e("span",{style:{color:"#B392F0"}},"month"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"month.value"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[198]||(n[198]=o(`
`)),n[199]||(n[199]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"                class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"CalendarCellTrigger"')],-1)),n[200]||(n[200]=o(`
`)),n[201]||(n[201]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              />")],-1)),n[202]||(n[202]=o(`
`)),e("span",ln,[n[64]||(n[64]=e("span",{style:{color:"#E1E4E8"}},"            </",-1)),e("span",tn,[s(a,{name:"CalendarCell"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"td\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "date",
    "description": "<p>The date value for the cell</p>\\n",
    "type": "DateValue",
    "required": true
  }
]`})]),default:l(()=>[n[63]||(n[63]=o("CalendarCell"))]),_:1})]),n[65]||(n[65]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[203]||(n[203]=o(`
`)),e("span",an,[n[67]||(n[67]=e("span",{style:{color:"#E1E4E8"}},"          </",-1)),e("span",rn,[s(a,{name:"CalendarGridRow"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tr\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[66]||(n[66]=o("CalendarGridRow"))]),_:1})]),n[68]||(n[68]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[204]||(n[204]=o(`
`)),e("span",pn,[n[70]||(n[70]=e("span",{style:{color:"#E1E4E8"}},"        </",-1)),e("span",dn,[s(a,{name:"CalendarGridBody"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tbody\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[69]||(n[69]=o("CalendarGridBody"))]),_:1})]),n[71]||(n[71]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[205]||(n[205]=o(`
`)),e("span",En,[n[73]||(n[73]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",yn,[s(a,{name:"CalendarGrid"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"table\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[72]||(n[72]=o("CalendarGrid"))]),_:1})]),n[74]||(n[74]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[206]||(n[206]=o(`
`)),n[207]||(n[207]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    </"),e("span",{style:{color:"#85E89D"}},"div"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[208]||(n[208]=o(`
`)),e("span",cn,[n[76]||(n[76]=e("span",{style:{color:"#E1E4E8"}},"  </",-1)),e("span",un,[s(a,{name:"CalendarRoot"},{content:l(({})=>[s(t,{title:"slots",data:`[
  {
    "name": "date",
    "description": "<p>The current date of the placeholder</p>\\n",
    "type": "DateValue"
  },
  {
    "name": "grid",
    "description": "<p>The grid of dates</p>\\n",
    "type": "Grid<DateValue>[]"
  },
  {
    "name": "weekDays",
    "description": "<p>The days of the week</p>\\n",
    "type": "string[]"
  },
  {
    "name": "weekStartsOn",
    "description": "<p>The start of the week</p>\\n",
    "type": "0 | 1 | 2 | 3 | 4 | 5 | 6"
  },
  {
    "name": "locale",
    "description": "<p>The calendar locale</p>\\n",
    "type": "string"
  },
  {
    "name": "fixedWeeks",
    "description": "<p>Whether or not to always display 6 weeks in the calendar</p>\\n",
    "type": "boolean"
  },
  {
    "name": "modelValue",
    "description": "<p>The current date of the calendar</p>\\n",
    "type": "CalendarDate | CalendarDateTime | ZonedDateTime"
  }
]`})]),default:l(()=>[n[75]||(n[75]=o("CalendarRoot"))]),_:1})]),n[77]||(n[77]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[209]||(n[209]=o(`
`)),n[210]||(n[210]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),n[213]||(n[213]=e("div",{name:"styles.css",class:"language-css"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"css"),e("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"@import"),e("span",{style:{color:"#9ECBFF"}}," '@radix-ui/colors/black-alpha.css'"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"@import"),e("span",{style:{color:"#9ECBFF"}}," '@radix-ui/colors/grass.css'"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".Icon"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  width"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1.5"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1.5"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".Calendar"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  margin-top"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1.5"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-width"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#000000"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#ffffff"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  box-shadow"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#79B8FF"}}," 4"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," 6"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," -1"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," rgba"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"0.1"),e("span",{style:{color:"#E1E4E8"}},"), "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#79B8FF"}}," 2"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," 4"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," -1"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," rgba"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"0.06"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  padding"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"22"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarHeader"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  display"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"flex"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  justify-content"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"space-between"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  align-items"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarNavButton"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  display"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"inline-flex"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  justify-content"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  align-items"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  width"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"2.5"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"2.5"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#000000"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"transparent"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  cursor"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"pointer"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarNavButton:hover"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#ffffff"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#000000"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarHeading"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  font-weight"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"500"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#000000"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarWrapper"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  display"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"flex"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  padding-top"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  margin-top"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  flex-direction"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"column"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"@media"),e("span",{style:{color:"#E1E4E8"}}," ("),e("span",{style:{color:"#79B8FF"}},"min-width"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"640"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},") {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  .CalendarWrapper"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"    margin-left"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"    margin-top"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"    flex-direction"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"row"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  }")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarGrid"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  margin-top"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0.25"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  width"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"100"),e("span",{style:{color:"#F97583"}},"%"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  user-select"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"none"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-collapse"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"collapse"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarGridRow"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  display"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"grid"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  margin-bottom"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0.25"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  grid-template-columns"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"repeat"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"4"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"minmax"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#F97583"}},"fr"),e("span",{style:{color:"#E1E4E8"}},"));")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  width"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"100"),e("span",{style:{color:"#F97583"}},"%"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarGridRow"),e("span",{style:{color:"#E1E4E8"}},"["),e("span",{style:{color:"#B392F0"}},"data-reka-calendar-month-view"),e("span",{style:{color:"#E1E4E8"}},"] {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  grid-template-columns"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"repeat"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"7"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"minmax"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#F97583"}},"fr"),e("span",{style:{color:"#E1E4E8"}},"));")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarHeadCell"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-radius"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0.375"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  font-size"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0.75"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  line-height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#000000"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  font-weight"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"400"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarCell"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  position"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"relative"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  font-size"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0.875"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  line-height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1.25"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  text-align"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarCellTrigger"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  display"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"flex"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  position"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"relative"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  padding"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0.5"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  justify-content"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  align-items"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-width"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"transparent"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  outline-style"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"none"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  font-size"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0.875"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  line-height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1.25"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  font-weight"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"400"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#000000"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  white-space"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"nowrap"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"transparent"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarCellTrigger:hover"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#000000"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarCellTrigger:focus"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  box-shadow"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#79B8FF"}}," 0"),e("span",{style:{color:"#79B8FF"}}," 0"),e("span",{style:{color:"#79B8FF"}}," 2"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," #000000"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarCellTrigger"),e("span",{style:{color:"#E1E4E8"}},"["),e("span",{style:{color:"#B392F0"}},"data-disabled"),e("span",{style:{color:"#E1E4E8"}},"] {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  cursor"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"none"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"rgba"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},","),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},","),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},","),e("span",{style:{color:"#79B8FF"}},"0.3"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarCellTrigger"),e("span",{style:{color:"#E1E4E8"}},"["),e("span",{style:{color:"#B392F0"}},"data-selected"),e("span",{style:{color:"#E1E4E8"}},"] {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#000000"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#ffffff"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  font-weight"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"500"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarCellTrigger"),e("span",{style:{color:"#E1E4E8"}},"["),e("span",{style:{color:"#B392F0"}},"data-selected"),e("span",{style:{color:"#E1E4E8"}},"]"),e("span",{style:{color:"#B392F0"}},"::before"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#FFFFFF"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarCellTrigger"),e("span",{style:{color:"#E1E4E8"}},"["),e("span",{style:{color:"#B392F0"}},"data-unavailable"),e("span",{style:{color:"#E1E4E8"}},"] {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"rgba"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},","),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},","),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},","),e("span",{style:{color:"#79B8FF"}},"0.3"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  text-decoration"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"line-through"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarCellTrigger::before"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  content"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#9ECBFF"}},"''"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  position"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"absolute"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  top"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"5"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  left"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  width"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0.25"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0.25"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-radius"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"9999"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#FFFFFF"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarCellTrigger"),e("span",{style:{color:"#E1E4E8"}},"["),e("span",{style:{color:"#B392F0"}},"data-today"),e("span",{style:{color:"#E1E4E8"}},"]"),e("span",{style:{color:"#B392F0"}},"::before"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  display"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"block"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--grass-9"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")])])])],-1))]),tailwind:l(()=>[e("div",mn,[n[431]||(n[431]=e("button",{title:"Copy Code",class:"copy"},null,-1)),n[432]||(n[432]=e("span",{class:"lang"},"vue",-1)),e("pre",fn,[e("code",null,[n[290]||(n[290]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"<"),e("span",{style:{color:"#85E89D"}},"script"),e("span",{style:{color:"#B392F0"}}," setup"),e("span",{style:{color:"#B392F0"}}," lang"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"ts"'),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[291]||(n[291]=o(`
`)),n[292]||(n[292]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#E1E4E8"}}," { Icon } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," '@iconify/vue'")],-1)),n[293]||(n[293]=o(`
`)),n[294]||(n[294]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#E1E4E8"}}," { CalendarCell, CalendarCellTrigger, CalendarGrid, CalendarGridBody, CalendarGridHead, CalendarGridRow, CalendarHeadCell, CalendarHeader, CalendarHeading, CalendarNext, CalendarPrev, CalendarRoot, "),e("span",{style:{color:"#F97583"}},"type"),e("span",{style:{color:"#E1E4E8"}}," CalendarRootProps } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," 'reka-ui'")],-1)),n[295]||(n[295]=o(`
`)),n[296]||(n[296]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#E1E4E8"}}," { CalendarDate } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," '@internationalized/date'")],-1)),n[297]||(n[297]=o(`
`)),n[298]||(n[298]=e("span",{class:"line"},null,-1)),n[299]||(n[299]=o(`
`)),n[300]||(n[300]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," date"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#F97583"}}," new"),e("span",{style:{color:"#B392F0"}}," CalendarDate"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"2024"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"10"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"3"),e("span",{style:{color:"#E1E4E8"}},")")],-1)),n[301]||(n[301]=o(`
`)),n[302]||(n[302]=e("span",{class:"line"},null,-1)),n[303]||(n[303]=o(`
`)),n[304]||(n[304]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#B392F0"}}," isDateUnavailable"),e("span",{style:{color:"#F97583"}},":"),e("span",{style:{color:"#B392F0"}}," CalendarRootProps"),e("span",{style:{color:"#E1E4E8"}},"["),e("span",{style:{color:"#9ECBFF"}},"'isDateUnavailable'"),e("span",{style:{color:"#E1E4E8"}},"] "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#E1E4E8"}}," ("),e("span",{style:{color:"#FFAB70"}},"date"),e("span",{style:{color:"#E1E4E8"}},") "),e("span",{style:{color:"#F97583"}},"=>"),e("span",{style:{color:"#E1E4E8"}}," {")],-1)),n[305]||(n[305]=o(`
`)),n[306]||(n[306]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"  return"),e("span",{style:{color:"#E1E4E8"}}," date.day "),e("span",{style:{color:"#F97583"}},"==="),e("span",{style:{color:"#79B8FF"}}," 17"),e("span",{style:{color:"#F97583"}}," ||"),e("span",{style:{color:"#E1E4E8"}}," date.day "),e("span",{style:{color:"#F97583"}},"==="),e("span",{style:{color:"#79B8FF"}}," 18")],-1)),n[307]||(n[307]=o(`
`)),n[308]||(n[308]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")],-1)),n[309]||(n[309]=o(`
`)),n[310]||(n[310]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"script"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[311]||(n[311]=o(`
`)),n[312]||(n[312]=e("span",{class:"line"},null,-1)),n[313]||(n[313]=o(`
`)),n[314]||(n[314]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"<"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[315]||(n[315]=o(`
`)),e("span",Fn,[n[215]||(n[215]=e("span",{style:{color:"#E1E4E8"}},"  <",-1)),e("span",gn,[s(a,{name:"CalendarRoot"},{content:l(({})=>[s(t,{title:"slots",data:`[
  {
    "name": "date",
    "description": "<p>The current date of the placeholder</p>\\n",
    "type": "DateValue"
  },
  {
    "name": "grid",
    "description": "<p>The grid of dates</p>\\n",
    "type": "Grid<DateValue>[]"
  },
  {
    "name": "weekDays",
    "description": "<p>The days of the week</p>\\n",
    "type": "string[]"
  },
  {
    "name": "weekStartsOn",
    "description": "<p>The start of the week</p>\\n",
    "type": "0 | 1 | 2 | 3 | 4 | 5 | 6"
  },
  {
    "name": "locale",
    "description": "<p>The calendar locale</p>\\n",
    "type": "string"
  },
  {
    "name": "fixedWeeks",
    "description": "<p>Whether or not to always display 6 weeks in the calendar</p>\\n",
    "type": "boolean"
  },
  {
    "name": "modelValue",
    "description": "<p>The current date of the calendar</p>\\n",
    "type": "CalendarDate | CalendarDateTime | ZonedDateTime"
  }
]`})]),default:l(()=>[n[214]||(n[214]=o("CalendarRoot"))]),_:1})])]),n[316]||(n[316]=o(`
`)),n[317]||(n[317]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    v-slot"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"{ weekDays, grid }"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[318]||(n[318]=o(`
`)),n[319]||(n[319]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    :"),e("span",{style:{color:"#B392F0"}},"is-date-unavailable"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"isDateUnavailable"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[320]||(n[320]=o(`
`)),n[321]||(n[321]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    :"),e("span",{style:{color:"#B392F0"}},"default-value"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"date"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[322]||(n[322]=o(`
`)),n[323]||(n[323]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"mt-6 rounded-xl bg-white p-4 shadow-sm border"')],-1)),n[324]||(n[324]=o(`
`)),n[325]||(n[325]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    fixed-weeks")],-1)),n[326]||(n[326]=o(`
`)),n[327]||(n[327]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  >")],-1)),n[328]||(n[328]=o(`
`)),e("span",Cn,[n[217]||(n[217]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",bn,[s(a,{name:"CalendarHeader"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[216]||(n[216]=o("CalendarHeader"))]),_:1})]),n[218]||(n[218]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[219]||(n[219]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[220]||(n[220]=e("span",{style:{color:"#9ECBFF"}},'"flex items-center justify-between"',-1)),n[221]||(n[221]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[329]||(n[329]=o(`
`)),e("span",hn,[n[223]||(n[223]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",wn,[s(a,{name:"CalendarPrev"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "prevPage",
    "description": "<p>The function to be used for the prev page. Overwrites the <code>prevPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[222]||(n[222]=o("CalendarPrev"))]),_:1})])]),n[330]||(n[330]=o(`
`)),n[331]||(n[331]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"inline-flex items-center cursor-pointer text-black justify-center rounded-md bg-transparent w-7 h-7 hover:bg-stone-50 active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black"')],-1)),n[332]||(n[332]=o(`
`)),n[333]||(n[333]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      >")],-1)),n[334]||(n[334]=o(`
`)),n[335]||(n[335]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        <"),e("span",{style:{color:"#85E89D"}},"Icon")],-1)),n[336]||(n[336]=o(`
`)),n[337]||(n[337]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:chevron-left"')],-1)),n[338]||(n[338]=o(`
`)),n[339]||(n[339]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"w-4 h-4"')],-1)),n[340]||(n[340]=o(`
`)),n[341]||(n[341]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        />")],-1)),n[342]||(n[342]=o(`
`)),e("span",Bn,[n[225]||(n[225]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",vn,[s(a,{name:"CalendarPrev"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "prevPage",
    "description": "<p>The function to be used for the prev page. Overwrites the <code>prevPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[224]||(n[224]=o("CalendarPrev"))]),_:1})]),n[226]||(n[226]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[343]||(n[343]=o(`
`)),e("span",Tn,[n[228]||(n[228]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",xn,[s(a,{name:"CalendarHeading"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "headingValue",
    "description": "<p>Current month and year</p>\\n",
    "type": "string"
  }
]`})]),default:l(()=>[n[227]||(n[227]=o("CalendarHeading"))]),_:1})]),n[229]||(n[229]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[230]||(n[230]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[231]||(n[231]=e("span",{style:{color:"#9ECBFF"}},'"text-sm text-black font-medium"',-1)),n[232]||(n[232]=e("span",{style:{color:"#E1E4E8"}}," />",-1))]),n[344]||(n[344]=o(`
`)),n[345]||(n[345]=e("span",{class:"line"},null,-1)),n[346]||(n[346]=o(`
`)),e("span",kn,[n[234]||(n[234]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",qn,[s(a,{name:"CalendarNext"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nextPage",
    "description": "<p>The function to be used for the next page. Overwrites the <code>nextPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[233]||(n[233]=o("CalendarNext"))]),_:1})])]),n[347]||(n[347]=o(`
`)),n[348]||(n[348]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"inline-flex items-center cursor-pointer justify-center text-black rounded-md bg-transparent w-7 h-7 hover:bg-stone-50 active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black"')],-1)),n[349]||(n[349]=o(`
`)),n[350]||(n[350]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      >")],-1)),n[351]||(n[351]=o(`
`)),n[352]||(n[352]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        <"),e("span",{style:{color:"#85E89D"}},"Icon")],-1)),n[353]||(n[353]=o(`
`)),n[354]||(n[354]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:chevron-right"')],-1)),n[355]||(n[355]=o(`
`)),n[356]||(n[356]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"w-4 h-4"')],-1)),n[357]||(n[357]=o(`
`)),n[358]||(n[358]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        />")],-1)),n[359]||(n[359]=o(`
`)),e("span",Dn,[n[236]||(n[236]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",An,[s(a,{name:"CalendarNext"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nextPage",
    "description": "<p>The function to be used for the next page. Overwrites the <code>nextPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[235]||(n[235]=o("CalendarNext"))]),_:1})]),n[237]||(n[237]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[360]||(n[360]=o(`
`)),e("span",Sn,[n[239]||(n[239]=e("span",{style:{color:"#E1E4E8"}},"    </",-1)),e("span",Rn,[s(a,{name:"CalendarHeader"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[238]||(n[238]=o("CalendarHeader"))]),_:1})]),n[240]||(n[240]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[361]||(n[361]=o(`
`)),n[362]||(n[362]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    <"),e("span",{style:{color:"#85E89D"}},"div")],-1)),n[363]||(n[363]=o(`
`)),n[364]||(n[364]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0"')],-1)),n[365]||(n[365]=o(`
`)),n[366]||(n[366]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    >")],-1)),n[367]||(n[367]=o(`
`)),e("span",Vn,[n[242]||(n[242]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",In,[s(a,{name:"CalendarGrid"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"table\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[241]||(n[241]=o("CalendarGrid"))]),_:1})])]),n[368]||(n[368]=o(`
`)),n[369]||(n[369]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"        v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"month "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," grid"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[370]||(n[370]=o(`
`)),n[371]||(n[371]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"month.value."),e("span",{style:{color:"#B392F0"}},"toString"),e("span",{style:{color:"#E1E4E8"}},"()"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[372]||(n[372]=o(`
`)),n[373]||(n[373]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"w-full border-collapse select-none space-y-1"')],-1)),n[374]||(n[374]=o(`
`)),n[375]||(n[375]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      >")],-1)),n[376]||(n[376]=o(`
`)),e("span",Pn,[n[244]||(n[244]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",Gn,[s(a,{name:"CalendarGridHead"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"thead\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[243]||(n[243]=o("CalendarGridHead"))]),_:1})]),n[245]||(n[245]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[377]||(n[377]=o(`
`)),e("span",Hn,[n[247]||(n[247]=e("span",{style:{color:"#E1E4E8"}},"          <",-1)),e("span",Mn,[s(a,{name:"CalendarGridRow"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tr\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[246]||(n[246]=o("CalendarGridRow"))]),_:1})]),n[248]||(n[248]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[249]||(n[249]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[250]||(n[250]=e("span",{style:{color:"#9ECBFF"}},'"mb-1 grid w-full grid-cols-7"',-1)),n[251]||(n[251]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[378]||(n[378]=o(`
`)),e("span",jn,[n[253]||(n[253]=e("span",{style:{color:"#E1E4E8"}},"            <",-1)),e("span",Wn,[s(a,{name:"CalendarHeadCell"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"th\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[252]||(n[252]=o("CalendarHeadCell"))]),_:1})])]),n[379]||(n[379]=o(`
`)),n[380]||(n[380]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"              v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"day "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," weekDays"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[381]||(n[381]=o(`
`)),n[382]||(n[382]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"day"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[383]||(n[383]=o(`
`)),n[384]||(n[384]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"              class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"rounded-md text-xs text-green8"')],-1)),n[385]||(n[385]=o(`
`)),n[386]||(n[386]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"            >")],-1)),n[387]||(n[387]=o(`
`)),n[388]||(n[388]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              {{ day }}")],-1)),n[389]||(n[389]=o(`
`)),e("span",On,[n[255]||(n[255]=e("span",{style:{color:"#E1E4E8"}},"            </",-1)),e("span",Ln,[s(a,{name:"CalendarHeadCell"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"th\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[254]||(n[254]=o("CalendarHeadCell"))]),_:1})]),n[256]||(n[256]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[390]||(n[390]=o(`
`)),e("span",Un,[n[258]||(n[258]=e("span",{style:{color:"#E1E4E8"}},"          </",-1)),e("span",Nn,[s(a,{name:"CalendarGridRow"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tr\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[257]||(n[257]=o("CalendarGridRow"))]),_:1})]),n[259]||(n[259]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[391]||(n[391]=o(`
`)),e("span",$n,[n[261]||(n[261]=e("span",{style:{color:"#E1E4E8"}},"        </",-1)),e("span",zn,[s(a,{name:"CalendarGridHead"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"thead\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[260]||(n[260]=o("CalendarGridHead"))]),_:1})]),n[262]||(n[262]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[392]||(n[392]=o(`
`)),e("span",Kn,[n[264]||(n[264]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",Zn,[s(a,{name:"CalendarGridBody"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tbody\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[263]||(n[263]=o("CalendarGridBody"))]),_:1})]),n[265]||(n[265]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[266]||(n[266]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[267]||(n[267]=e("span",{style:{color:"#9ECBFF"}},'"grid"',-1)),n[268]||(n[268]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[393]||(n[393]=o(`
`)),e("span",Jn,[n[270]||(n[270]=e("span",{style:{color:"#E1E4E8"}},"          <",-1)),e("span",Yn,[s(a,{name:"CalendarGridRow"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tr\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[269]||(n[269]=o("CalendarGridRow"))]),_:1})])]),n[394]||(n[394]=o(`
`)),n[395]||(n[395]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"            v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"(weekDates, index) "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," month.rows"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[396]||(n[396]=o(`
`)),n[397]||(n[397]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"            :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"`weekDate-${'),e("span",{style:{color:"#E1E4E8"}},"index"),e("span",{style:{color:"#9ECBFF"}},'}`"')],-1)),n[398]||(n[398]=o(`
`)),n[399]||(n[399]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"            class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"grid grid-cols-7"')],-1)),n[400]||(n[400]=o(`
`)),n[401]||(n[401]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          >")],-1)),n[402]||(n[402]=o(`
`)),e("span",Qn,[n[272]||(n[272]=e("span",{style:{color:"#E1E4E8"}},"            <",-1)),e("span",Xn,[s(a,{name:"CalendarCell"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"td\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "date",
    "description": "<p>The date value for the cell</p>\\n",
    "type": "DateValue",
    "required": true
  }
]`})]),default:l(()=>[n[271]||(n[271]=o("CalendarCell"))]),_:1})])]),n[403]||(n[403]=o(`
`)),n[404]||(n[404]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"              v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"weekDate "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," weekDates"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[405]||(n[405]=o(`
`)),n[406]||(n[406]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"weekDate."),e("span",{style:{color:"#B392F0"}},"toString"),e("span",{style:{color:"#E1E4E8"}},"()"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[407]||(n[407]=o(`
`)),n[408]||(n[408]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              :"),e("span",{style:{color:"#B392F0"}},"date"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"weekDate"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[409]||(n[409]=o(`
`)),n[410]||(n[410]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"              class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"relative text-center text-sm"')],-1)),n[411]||(n[411]=o(`
`)),n[412]||(n[412]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"            >")],-1)),n[413]||(n[413]=o(`
`)),e("span",_n,[n[274]||(n[274]=e("span",{style:{color:"#E1E4E8"}},"              <",-1)),e("span",eo,[s(a,{name:"CalendarCellTrigger"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "day",
    "description": "<p>The date value provided to the cell trigger</p>\\n",
    "type": "DateValue",
    "required": true
  },
  {
    "name": "month",
    "description": "<p>The month in which the cell is rendered</p>\\n",
    "type": "DateValue",
    "required": true
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "dayValue",
    "description": "<p>Current day</p>\\n",
    "type": "string"
  },
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "selected",
    "description": "<p>Current selected state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "today",
    "description": "<p>Current today state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "outsideView",
    "description": "<p>Current outside view state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "outsideVisibleView",
    "description": "<p>Current outside visible view state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "unavailable",
    "description": "<p>Current unavailable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[273]||(n[273]=o("CalendarCellTrigger"))]),_:1})])]),n[414]||(n[414]=o(`
`)),n[415]||(n[415]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                :"),e("span",{style:{color:"#B392F0"}},"day"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"weekDate"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[416]||(n[416]=o(`
`)),n[417]||(n[417]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                :"),e("span",{style:{color:"#B392F0"}},"month"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"month.value"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[418]||(n[418]=o(`
`)),n[419]||(n[419]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"                class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"relative flex items-center justify-center rounded-full whitespace-nowrap text-sm font-normal text-black w-8 h-8 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black data-[outside-view]:text-black/30 data-[selected]:!bg-green10 data-[selected]:text-white hover:bg-green5 data-[highlighted]:bg-green5 data-[unavailable]:pointer-events-none data-[unavailable]:text-black/30 data-[unavailable]:line-through before:absolute before:top-[5px] before:hidden before:rounded-full before:w-1 before:h-1 before:bg-white data-[today]:before:block data-[today]:before:bg-green9 "')],-1)),n[420]||(n[420]=o(`
`)),n[421]||(n[421]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              />")],-1)),n[422]||(n[422]=o(`
`)),e("span",no,[n[276]||(n[276]=e("span",{style:{color:"#E1E4E8"}},"            </",-1)),e("span",oo,[s(a,{name:"CalendarCell"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"td\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "date",
    "description": "<p>The date value for the cell</p>\\n",
    "type": "DateValue",
    "required": true
  }
]`})]),default:l(()=>[n[275]||(n[275]=o("CalendarCell"))]),_:1})]),n[277]||(n[277]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[423]||(n[423]=o(`
`)),e("span",so,[n[279]||(n[279]=e("span",{style:{color:"#E1E4E8"}},"          </",-1)),e("span",lo,[s(a,{name:"CalendarGridRow"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tr\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[278]||(n[278]=o("CalendarGridRow"))]),_:1})]),n[280]||(n[280]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[424]||(n[424]=o(`
`)),e("span",to,[n[282]||(n[282]=e("span",{style:{color:"#E1E4E8"}},"        </",-1)),e("span",ao,[s(a,{name:"CalendarGridBody"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tbody\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[281]||(n[281]=o("CalendarGridBody"))]),_:1})]),n[283]||(n[283]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[425]||(n[425]=o(`
`)),e("span",ro,[n[285]||(n[285]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",po,[s(a,{name:"CalendarGrid"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"table\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[284]||(n[284]=o("CalendarGrid"))]),_:1})]),n[286]||(n[286]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[426]||(n[426]=o(`
`)),n[427]||(n[427]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    </"),e("span",{style:{color:"#85E89D"}},"div"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[428]||(n[428]=o(`
`)),e("span",io,[n[288]||(n[288]=e("span",{style:{color:"#E1E4E8"}},"  </",-1)),e("span",Eo,[s(a,{name:"CalendarRoot"},{content:l(({})=>[s(t,{title:"slots",data:`[
  {
    "name": "date",
    "description": "<p>The current date of the placeholder</p>\\n",
    "type": "DateValue"
  },
  {
    "name": "grid",
    "description": "<p>The grid of dates</p>\\n",
    "type": "Grid<DateValue>[]"
  },
  {
    "name": "weekDays",
    "description": "<p>The days of the week</p>\\n",
    "type": "string[]"
  },
  {
    "name": "weekStartsOn",
    "description": "<p>The start of the week</p>\\n",
    "type": "0 | 1 | 2 | 3 | 4 | 5 | 6"
  },
  {
    "name": "locale",
    "description": "<p>The calendar locale</p>\\n",
    "type": "string"
  },
  {
    "name": "fixedWeeks",
    "description": "<p>Whether or not to always display 6 weeks in the calendar</p>\\n",
    "type": "boolean"
  },
  {
    "name": "modelValue",
    "description": "<p>The current date of the calendar</p>\\n",
    "type": "CalendarDate | CalendarDateTime | ZonedDateTime"
  }
]`})]),default:l(()=>[n[287]||(n[287]=o("CalendarRoot"))]),_:1})]),n[289]||(n[289]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[429]||(n[429]=o(`
`)),n[430]||(n[430]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),n[433]||(n[433]=e("div",{name:"tailwind.config.js",class:"language-js"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"js"),e("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#E1E4E8"}}," { "),e("span",{style:{color:"#79B8FF"}},"blackA"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"grass"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"green"),e("span",{style:{color:"#E1E4E8"}}," } "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," require"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#9ECBFF"}},"'@radix-ui/colors'"),e("span",{style:{color:"#E1E4E8"}},")")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6A737D"}},"/** "),e("span",{style:{color:"#F97583"}},"@type"),e("span",{style:{color:"#B392F0"}}," {import('tailwindcss').Config}"),e("span",{style:{color:"#6A737D"}}," */")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"module"),e("span",{style:{color:"#E1E4E8"}},"."),e("span",{style:{color:"#79B8FF"}},"exports"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  content: ["),e("span",{style:{color:"#9ECBFF"}},"'./**/*.vue'"),e("span",{style:{color:"#E1E4E8"}},"],")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  theme: {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    extend: {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      colors: {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"        ..."),e("span",{style:{color:"#E1E4E8"}},"blackA,")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"        ..."),e("span",{style:{color:"#E1E4E8"}},"grass,")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"        ..."),e("span",{style:{color:"#E1E4E8"}},"green,")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      },")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    },")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  },")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  plugins: [],")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")])])])],-1))]),default:l(()=>[s(ye)]),_:1}),n[2501]||(n[2501]=E("",1)),s(B,{features:["Full keyboard navigation","Can be controlled or uncontrolled","Focus is fully managed","Localization support","Highly composable"]}),n[2502]||(n[2502]=E("",5)),s(x,{value:"@internationalized/date"},{npm:l(()=>n[434]||(n[434]=[e("div",{name:"npm",class:"language-sh"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"$"),e("span",{style:{color:"#9ECBFF"}}," npm"),e("span",{style:{color:"#9ECBFF"}}," add"),e("span",{style:{color:"#9ECBFF"}}," @internationalized/date")])])])],-1)])),pnpm:l(()=>n[435]||(n[435]=[e("div",{name:"pnpm",class:"language-sh"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"$"),e("span",{style:{color:"#9ECBFF"}}," pnpm"),e("span",{style:{color:"#9ECBFF"}}," add"),e("span",{style:{color:"#9ECBFF"}}," @internationalized/date")])])])],-1)])),yarn:l(()=>n[436]||(n[436]=[e("div",{name:"yarn",class:"language-sh"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"$"),e("span",{style:{color:"#9ECBFF"}}," yarn"),e("span",{style:{color:"#9ECBFF"}}," add"),e("span",{style:{color:"#9ECBFF"}}," @internationalized/date")])])])],-1)])),bun:l(()=>n[437]||(n[437]=[e("div",{name:"bun",class:"language-sh"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"$"),e("span",{style:{color:"#9ECBFF"}}," bun"),e("span",{style:{color:"#9ECBFF"}}," add"),e("span",{style:{color:"#9ECBFF"}}," @internationalized/date")])])])],-1)])),_:1}),n[2503]||(n[2503]=e("p",null,"Install the component from your command line.",-1)),s(x,{value:"reka-ui"},{npm:l(()=>n[438]||(n[438]=[e("div",{name:"npm",class:"language-sh"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"$"),e("span",{style:{color:"#9ECBFF"}}," npm"),e("span",{style:{color:"#9ECBFF"}}," add"),e("span",{style:{color:"#9ECBFF"}}," reka-ui")])])])],-1)])),pnpm:l(()=>n[439]||(n[439]=[e("div",{name:"pnpm",class:"language-sh"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"$"),e("span",{style:{color:"#9ECBFF"}}," pnpm"),e("span",{style:{color:"#9ECBFF"}}," add"),e("span",{style:{color:"#9ECBFF"}}," reka-ui")])])])],-1)])),yarn:l(()=>n[440]||(n[440]=[e("div",{name:"yarn",class:"language-sh"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"$"),e("span",{style:{color:"#9ECBFF"}}," yarn"),e("span",{style:{color:"#9ECBFF"}}," add"),e("span",{style:{color:"#9ECBFF"}}," reka-ui")])])])],-1)])),bun:l(()=>n[441]||(n[441]=[e("div",{name:"bun",class:"language-sh"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"$"),e("span",{style:{color:"#9ECBFF"}}," bun"),e("span",{style:{color:"#9ECBFF"}}," add"),e("span",{style:{color:"#9ECBFF"}}," reka-ui")])])])],-1)])),_:1}),n[2504]||(n[2504]=E("",2)),e("div",yo,[n[528]||(n[528]=e("button",{title:"Copy Code",class:"copy"},null,-1)),n[529]||(n[529]=e("span",{class:"lang"},"vue",-1)),e("pre",co,[e("code",null,[n[505]||(n[505]=E("",36)),e("span",uo,[n[443]||(n[443]=e("span",{style:{color:"#E1E4E8"}},"  <",-1)),e("span",mo,[s(a,{name:"CalendarRoot"},{content:l(({})=>[s(t,{title:"slots",data:`[
  {
    "name": "date",
    "description": "<p>The current date of the placeholder</p>\\n",
    "type": "DateValue"
  },
  {
    "name": "grid",
    "description": "<p>The grid of dates</p>\\n",
    "type": "Grid<DateValue>[]"
  },
  {
    "name": "weekDays",
    "description": "<p>The days of the week</p>\\n",
    "type": "string[]"
  },
  {
    "name": "weekStartsOn",
    "description": "<p>The start of the week</p>\\n",
    "type": "0 | 1 | 2 | 3 | 4 | 5 | 6"
  },
  {
    "name": "locale",
    "description": "<p>The calendar locale</p>\\n",
    "type": "string"
  },
  {
    "name": "fixedWeeks",
    "description": "<p>Whether or not to always display 6 weeks in the calendar</p>\\n",
    "type": "boolean"
  },
  {
    "name": "modelValue",
    "description": "<p>The current date of the calendar</p>\\n",
    "type": "CalendarDate | CalendarDateTime | ZonedDateTime"
  }
]`})]),default:l(()=>[n[442]||(n[442]=o("CalendarRoot"))]),_:1})]),n[444]||(n[444]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[506]||(n[506]=o(`
`)),e("span",fo,[n[446]||(n[446]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",Fo,[s(a,{name:"CalendarHeader"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[445]||(n[445]=o("CalendarHeader"))]),_:1})]),n[447]||(n[447]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[507]||(n[507]=o(`
`)),e("span",go,[n[449]||(n[449]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",Co,[s(a,{name:"CalendarPrev"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "prevPage",
    "description": "<p>The function to be used for the prev page. Overwrites the <code>prevPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[448]||(n[448]=o("CalendarPrev"))]),_:1})]),n[450]||(n[450]=e("span",{style:{color:"#E1E4E8"}}," />",-1))]),n[508]||(n[508]=o(`
`)),e("span",bo,[n[452]||(n[452]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",ho,[s(a,{name:"CalendarHeading"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "headingValue",
    "description": "<p>Current month and year</p>\\n",
    "type": "string"
  }
]`})]),default:l(()=>[n[451]||(n[451]=o("CalendarHeading"))]),_:1})]),n[453]||(n[453]=e("span",{style:{color:"#E1E4E8"}}," />",-1))]),n[509]||(n[509]=o(`
`)),e("span",wo,[n[455]||(n[455]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",Bo,[s(a,{name:"CalendarNext"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nextPage",
    "description": "<p>The function to be used for the next page. Overwrites the <code>nextPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[454]||(n[454]=o("CalendarNext"))]),_:1})]),n[456]||(n[456]=e("span",{style:{color:"#E1E4E8"}}," />",-1))]),n[510]||(n[510]=o(`
`)),e("span",vo,[n[458]||(n[458]=e("span",{style:{color:"#E1E4E8"}},"    </",-1)),e("span",To,[s(a,{name:"CalendarHeader"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[457]||(n[457]=o("CalendarHeader"))]),_:1})]),n[459]||(n[459]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[511]||(n[511]=o(`
`)),e("span",xo,[n[461]||(n[461]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",ko,[s(a,{name:"CalendarGrid"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"table\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[460]||(n[460]=o("CalendarGrid"))]),_:1})]),n[462]||(n[462]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[512]||(n[512]=o(`
`)),e("span",qo,[n[464]||(n[464]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",Do,[s(a,{name:"CalendarGridHead"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"thead\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[463]||(n[463]=o("CalendarGridHead"))]),_:1})]),n[465]||(n[465]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[513]||(n[513]=o(`
`)),e("span",Ao,[n[467]||(n[467]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",So,[s(a,{name:"CalendarGridRow"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tr\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[466]||(n[466]=o("CalendarGridRow"))]),_:1})]),n[468]||(n[468]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[514]||(n[514]=o(`
`)),e("span",Ro,[n[470]||(n[470]=e("span",{style:{color:"#E1E4E8"}},"          <",-1)),e("span",Vo,[s(a,{name:"CalendarHeadCell"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"th\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[469]||(n[469]=o("CalendarHeadCell"))]),_:1})]),n[471]||(n[471]=e("span",{style:{color:"#E1E4E8"}}," />",-1))]),n[515]||(n[515]=o(`
`)),e("span",Io,[n[473]||(n[473]=e("span",{style:{color:"#E1E4E8"}},"        </",-1)),e("span",Po,[s(a,{name:"CalendarGridRow"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tr\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[472]||(n[472]=o("CalendarGridRow"))]),_:1})]),n[474]||(n[474]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[516]||(n[516]=o(`
`)),e("span",Go,[n[476]||(n[476]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",Ho,[s(a,{name:"CalendarGridHead"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"thead\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[475]||(n[475]=o("CalendarGridHead"))]),_:1})]),n[477]||(n[477]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[517]||(n[517]=o(`
`)),e("span",Mo,[n[479]||(n[479]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",jo,[s(a,{name:"CalendarGridBody"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tbody\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[478]||(n[478]=o("CalendarGridBody"))]),_:1})]),n[480]||(n[480]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[518]||(n[518]=o(`
`)),e("span",Wo,[n[482]||(n[482]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",Oo,[s(a,{name:"CalendarGridRow"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tr\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[481]||(n[481]=o("CalendarGridRow"))]),_:1})]),n[483]||(n[483]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[519]||(n[519]=o(`
`)),e("span",Lo,[n[485]||(n[485]=e("span",{style:{color:"#E1E4E8"}},"          <",-1)),e("span",Uo,[s(a,{name:"CalendarCell"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"td\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "date",
    "description": "<p>The date value for the cell</p>\\n",
    "type": "DateValue",
    "required": true
  }
]`})]),default:l(()=>[n[484]||(n[484]=o("CalendarCell"))]),_:1})]),n[486]||(n[486]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[520]||(n[520]=o(`
`)),e("span",No,[n[488]||(n[488]=e("span",{style:{color:"#E1E4E8"}},"            <",-1)),e("span",$o,[s(a,{name:"CalendarCellTrigger"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "day",
    "description": "<p>The date value provided to the cell trigger</p>\\n",
    "type": "DateValue",
    "required": true
  },
  {
    "name": "month",
    "description": "<p>The month in which the cell is rendered</p>\\n",
    "type": "DateValue",
    "required": true
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "dayValue",
    "description": "<p>Current day</p>\\n",
    "type": "string"
  },
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "selected",
    "description": "<p>Current selected state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "today",
    "description": "<p>Current today state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "outsideView",
    "description": "<p>Current outside view state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "outsideVisibleView",
    "description": "<p>Current outside visible view state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "unavailable",
    "description": "<p>Current unavailable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[487]||(n[487]=o("CalendarCellTrigger"))]),_:1})]),n[489]||(n[489]=e("span",{style:{color:"#E1E4E8"}}," />",-1))]),n[521]||(n[521]=o(`
`)),e("span",zo,[n[491]||(n[491]=e("span",{style:{color:"#E1E4E8"}},"          </",-1)),e("span",Ko,[s(a,{name:"CalendarCell"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"td\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "date",
    "description": "<p>The date value for the cell</p>\\n",
    "type": "DateValue",
    "required": true
  }
]`})]),default:l(()=>[n[490]||(n[490]=o("CalendarCell"))]),_:1})]),n[492]||(n[492]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[522]||(n[522]=o(`
`)),e("span",Zo,[n[494]||(n[494]=e("span",{style:{color:"#E1E4E8"}},"        </",-1)),e("span",Jo,[s(a,{name:"CalendarGridRow"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tr\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[493]||(n[493]=o("CalendarGridRow"))]),_:1})]),n[495]||(n[495]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[523]||(n[523]=o(`
`)),e("span",Yo,[n[497]||(n[497]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",Qo,[s(a,{name:"CalendarGridBody"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tbody\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[496]||(n[496]=o("CalendarGridBody"))]),_:1})]),n[498]||(n[498]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[524]||(n[524]=o(`
`)),e("span",Xo,[n[500]||(n[500]=e("span",{style:{color:"#E1E4E8"}},"    </",-1)),e("span",_o,[s(a,{name:"CalendarGrid"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"table\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[499]||(n[499]=o("CalendarGrid"))]),_:1})]),n[501]||(n[501]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[525]||(n[525]=o(`
`)),e("span",es,[n[503]||(n[503]=e("span",{style:{color:"#E1E4E8"}},"  </",-1)),e("span",ns,[s(a,{name:"CalendarRoot"},{content:l(({})=>[s(t,{title:"slots",data:`[
  {
    "name": "date",
    "description": "<p>The current date of the placeholder</p>\\n",
    "type": "DateValue"
  },
  {
    "name": "grid",
    "description": "<p>The grid of dates</p>\\n",
    "type": "Grid<DateValue>[]"
  },
  {
    "name": "weekDays",
    "description": "<p>The days of the week</p>\\n",
    "type": "string[]"
  },
  {
    "name": "weekStartsOn",
    "description": "<p>The start of the week</p>\\n",
    "type": "0 | 1 | 2 | 3 | 4 | 5 | 6"
  },
  {
    "name": "locale",
    "description": "<p>The calendar locale</p>\\n",
    "type": "string"
  },
  {
    "name": "fixedWeeks",
    "description": "<p>Whether or not to always display 6 weeks in the calendar</p>\\n",
    "type": "boolean"
  },
  {
    "name": "modelValue",
    "description": "<p>The current date of the calendar</p>\\n",
    "type": "CalendarDate | CalendarDateTime | ZonedDateTime"
  }
]`})]),default:l(()=>[n[502]||(n[502]=o("CalendarRoot"))]),_:1})]),n[504]||(n[504]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[526]||(n[526]=o(`
`)),n[527]||(n[527]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),n[2505]||(n[2505]=E("",3)),s(y,{data:[{name:"date",description:`<p>The current date of the placeholder</p>
`,type:"DateValue"},{name:"grid",description:`<p>The grid of dates</p>
`,type:"Grid<DateValue>[]"},{name:"weekDays",description:`<p>The days of the week</p>
`,type:"string[]"},{name:"weekStartsOn",description:`<p>The start of the week</p>
`,type:"0 | 1 | 2 | 3 | 4 | 5 | 6"},{name:"locale",description:`<p>The calendar locale</p>
`,type:"string"},{name:"fixedWeeks",description:`<p>Whether or not to always display 6 weeks in the calendar</p>
`,type:"boolean"},{name:"modelValue",description:`<p>The current date of the calendar</p>
`,type:"CalendarDate | CalendarDateTime | ZonedDateTime"}]}),s(i,{data:[{attribute:"[data-readonly]",values:"Present when readonly"},{attribute:"[data-disabled]",values:"Present when disabled"},{attribute:"[data-invalid]",values:"Present when invalid"}]}),n[2506]||(n[2506]=E("",2)),s(p,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'div'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1}]}),n[2507]||(n[2507]=E("",2)),s(p,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'button'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"prevPage",description:`<p>The function to be used for the prev page. Overwrites the <code>prevPage</code> function set on the <code>CalendarRoot</code>.</p>
`,type:"((placeholder: DateValue) => DateValue)",required:!1}]}),s(y,{data:[{name:"disabled",description:`<p>Current disable state</p>
`,type:"boolean"}]}),s(i,{data:[{attribute:"[data-disabled]",values:"Present when disabled"}]}),n[2508]||(n[2508]=E("",2)),s(p,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'button'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"nextPage",description:`<p>The function to be used for the next page. Overwrites the <code>nextPage</code> function set on the <code>CalendarRoot</code>.</p>
`,type:"((placeholder: DateValue) => DateValue)",required:!1}]}),s(y,{data:[{name:"disabled",description:`<p>Current disable state</p>
`,type:"boolean"}]}),s(i,{data:[{attribute:"[data-disabled]",values:"Present when disabled"}]}),n[2509]||(n[2509]=E("",2)),s(p,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'div'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1}]}),s(y,{data:[{name:"headingValue",description:`<p>Current month and year</p>
`,type:"string"}]}),s(i,{data:[{attribute:"[data-disabled]",values:"Present when disabled"}]}),n[2510]||(n[2510]=E("",2)),s(p,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'table'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1}]}),s(i,{data:[{attribute:"[data-readonly]",values:"Present when readonly"},{attribute:"[data-disabled]",values:"Present when disabled"}]}),n[2511]||(n[2511]=E("",2)),s(p,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'thead'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1}]}),n[2512]||(n[2512]=E("",2)),s(p,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'tbody'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1}]}),n[2513]||(n[2513]=E("",2)),s(p,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'tr'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1}]}),n[2514]||(n[2514]=E("",2)),s(p,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'th'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1}]}),n[2515]||(n[2515]=E("",2)),s(p,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'td'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"date",description:`<p>The date value for the cell</p>
`,type:"DateValue",required:!0}]}),s(i,{data:[{attribute:"[data-disabled]",values:"Present when disabled"}]}),n[2516]||(n[2516]=E("",2)),s(p,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'div'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"day",description:`<p>The date value provided to the cell trigger</p>
`,type:"DateValue",required:!0},{name:"month",description:`<p>The month in which the cell is rendered</p>
`,type:"DateValue",required:!0}]}),s(y,{data:[{name:"dayValue",description:`<p>Current day</p>
`,type:"string"},{name:"disabled",description:`<p>Current disable state</p>
`,type:"boolean"},{name:"selected",description:`<p>Current selected state</p>
`,type:"boolean"},{name:"today",description:`<p>Current today state</p>
`,type:"boolean"},{name:"outsideView",description:`<p>Current outside view state</p>
`,type:"boolean"},{name:"outsideVisibleView",description:`<p>Current outside visible view state</p>
`,type:"boolean"},{name:"unavailable",description:`<p>Current unavailable state</p>
`,type:"boolean"}]}),s(i,{data:[{attribute:"[data-selected]",values:"Present when selected"},{attribute:"[data-value]",values:"The ISO string value of the date."},{attribute:"[data-disabled]",values:"Present when disabled"},{attribute:"[data-unavailable]",values:"Present when unavailable"},{attribute:"[data-today]",values:"Present when today"},{attribute:"[data-outside-view]",values:"Present when the date is outside the current month it is displayed in."},{attribute:"[data-outside-visible-view]",values:"Present when the date is outside the months that are visible on the calendar."},{attribute:"[data-focused]",values:"Present when focused"}]}),n[2517]||(n[2517]=E("",3)),s(m,{name:"CalendarYearIncrement",type:"demo",files:"%7B%22css%22%3A%5B%22css%2Findex.vue%22%2C%22css%2Fstyles.css%22%5D%2C%22tailwind%22%3A%5B%22tailwind%2Findex.vue%22%2C%22tailwind%2Ftailwind.config.js%22%5D%7D"},{css:l(()=>[e("div",os,[n[797]||(n[797]=e("button",{title:"Copy Code",class:"copy"},null,-1)),n[798]||(n[798]=e("span",{class:"lang"},"vue",-1)),e("pre",ss,[e("code",null,[n[616]||(n[616]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"<"),e("span",{style:{color:"#85E89D"}},"script"),e("span",{style:{color:"#B392F0"}}," setup"),e("span",{style:{color:"#B392F0"}}," lang"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"ts"'),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[617]||(n[617]=o(`
`)),n[618]||(n[618]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#E1E4E8"}}," { Icon } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," '@iconify/vue'")],-1)),n[619]||(n[619]=o(`
`)),n[620]||(n[620]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#E1E4E8"}}," { CalendarCell, CalendarCellTrigger, CalendarGrid, CalendarGridBody, CalendarGridHead, CalendarGridRow, CalendarHeadCell, CalendarHeader, CalendarHeading, CalendarNext, CalendarPrev, CalendarRoot, "),e("span",{style:{color:"#F97583"}},"type"),e("span",{style:{color:"#E1E4E8"}}," CalendarRootProps } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," 'reka-ui'")],-1)),n[621]||(n[621]=o(`
`)),n[622]||(n[622]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#9ECBFF"}}," './styles.css'")],-1)),n[623]||(n[623]=o(`
`)),n[624]||(n[624]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#F97583"}}," type"),e("span",{style:{color:"#E1E4E8"}}," { DateValue } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," '@internationalized/date'")],-1)),n[625]||(n[625]=o(`
`)),n[626]||(n[626]=e("span",{class:"line"},null,-1)),n[627]||(n[627]=o(`
`)),n[628]||(n[628]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#B392F0"}}," isDateUnavailable"),e("span",{style:{color:"#F97583"}},":"),e("span",{style:{color:"#B392F0"}}," CalendarRootProps"),e("span",{style:{color:"#E1E4E8"}},"["),e("span",{style:{color:"#9ECBFF"}},"'isDateUnavailable'"),e("span",{style:{color:"#E1E4E8"}},"] "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#E1E4E8"}}," ("),e("span",{style:{color:"#FFAB70"}},"date"),e("span",{style:{color:"#E1E4E8"}},") "),e("span",{style:{color:"#F97583"}},"=>"),e("span",{style:{color:"#E1E4E8"}}," {")],-1)),n[629]||(n[629]=o(`
`)),n[630]||(n[630]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"  return"),e("span",{style:{color:"#E1E4E8"}}," date.day "),e("span",{style:{color:"#F97583"}},"==="),e("span",{style:{color:"#79B8FF"}}," 17"),e("span",{style:{color:"#F97583"}}," ||"),e("span",{style:{color:"#E1E4E8"}}," date.day "),e("span",{style:{color:"#F97583"}},"==="),e("span",{style:{color:"#79B8FF"}}," 18")],-1)),n[631]||(n[631]=o(`
`)),n[632]||(n[632]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")],-1)),n[633]||(n[633]=o(`
`)),n[634]||(n[634]=e("span",{class:"line"},null,-1)),n[635]||(n[635]=o(`
`)),n[636]||(n[636]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"function"),e("span",{style:{color:"#B392F0"}}," pagingFunc"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"date"),e("span",{style:{color:"#F97583"}},":"),e("span",{style:{color:"#B392F0"}}," DateValue"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#FFAB70"}},"sign"),e("span",{style:{color:"#F97583"}},":"),e("span",{style:{color:"#E1E4E8"}}," -"),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#F97583"}}," |"),e("span",{style:{color:"#79B8FF"}}," 1"),e("span",{style:{color:"#E1E4E8"}},") {")],-1)),n[637]||(n[637]=o(`
`)),n[638]||(n[638]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"  if"),e("span",{style:{color:"#E1E4E8"}}," (sign "),e("span",{style:{color:"#F97583"}},"==="),e("span",{style:{color:"#F97583"}}," -"),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#E1E4E8"}},")")],-1)),n[639]||(n[639]=o(`
`)),n[640]||(n[640]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"    return"),e("span",{style:{color:"#E1E4E8"}}," date."),e("span",{style:{color:"#B392F0"}},"subtract"),e("span",{style:{color:"#E1E4E8"}},"({ years: "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#E1E4E8"}}," })")],-1)),n[641]||(n[641]=o(`
`)),n[642]||(n[642]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"  return"),e("span",{style:{color:"#E1E4E8"}}," date."),e("span",{style:{color:"#B392F0"}},"add"),e("span",{style:{color:"#E1E4E8"}},"({ years: "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#E1E4E8"}}," })")],-1)),n[643]||(n[643]=o(`
`)),n[644]||(n[644]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")],-1)),n[645]||(n[645]=o(`
`)),n[646]||(n[646]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"script"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[647]||(n[647]=o(`
`)),n[648]||(n[648]=e("span",{class:"line"},null,-1)),n[649]||(n[649]=o(`
`)),n[650]||(n[650]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"<"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[651]||(n[651]=o(`
`)),e("span",ls,[n[531]||(n[531]=e("span",{style:{color:"#E1E4E8"}},"  <",-1)),e("span",ts,[s(a,{name:"CalendarRoot"},{content:l(({})=>[s(t,{title:"slots",data:`[
  {
    "name": "date",
    "description": "<p>The current date of the placeholder</p>\\n",
    "type": "DateValue"
  },
  {
    "name": "grid",
    "description": "<p>The grid of dates</p>\\n",
    "type": "Grid<DateValue>[]"
  },
  {
    "name": "weekDays",
    "description": "<p>The days of the week</p>\\n",
    "type": "string[]"
  },
  {
    "name": "weekStartsOn",
    "description": "<p>The start of the week</p>\\n",
    "type": "0 | 1 | 2 | 3 | 4 | 5 | 6"
  },
  {
    "name": "locale",
    "description": "<p>The calendar locale</p>\\n",
    "type": "string"
  },
  {
    "name": "fixedWeeks",
    "description": "<p>Whether or not to always display 6 weeks in the calendar</p>\\n",
    "type": "boolean"
  },
  {
    "name": "modelValue",
    "description": "<p>The current date of the calendar</p>\\n",
    "type": "CalendarDate | CalendarDateTime | ZonedDateTime"
  }
]`})]),default:l(()=>[n[530]||(n[530]=o("CalendarRoot"))]),_:1})])]),n[652]||(n[652]=o(`
`)),n[653]||(n[653]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    v-slot"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"{ weekDays, grid }"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[654]||(n[654]=o(`
`)),n[655]||(n[655]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    :"),e("span",{style:{color:"#B392F0"}},"is-date-unavailable"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"isDateUnavailable"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[656]||(n[656]=o(`
`)),n[657]||(n[657]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"Calendar"')],-1)),n[658]||(n[658]=o(`
`)),n[659]||(n[659]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    fixed-weeks")],-1)),n[660]||(n[660]=o(`
`)),n[661]||(n[661]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  >")],-1)),n[662]||(n[662]=o(`
`)),e("span",as,[n[533]||(n[533]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",rs,[s(a,{name:"CalendarHeader"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[532]||(n[532]=o("CalendarHeader"))]),_:1})]),n[534]||(n[534]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[535]||(n[535]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[536]||(n[536]=e("span",{style:{color:"#9ECBFF"}},'"CalendarHeader"',-1)),n[537]||(n[537]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[663]||(n[663]=o(`
`)),e("span",ps,[n[539]||(n[539]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",is,[s(a,{name:"CalendarPrev"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "prevPage",
    "description": "<p>The function to be used for the prev page. Overwrites the <code>prevPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[538]||(n[538]=o("CalendarPrev"))]),_:1})])]),n[664]||(n[664]=o(`
`)),n[665]||(n[665]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"CalendarNavButton"')],-1)),n[666]||(n[666]=o(`
`)),n[667]||(n[667]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        :"),e("span",{style:{color:"#B392F0"}},"prev-page"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"date"),e("span",{style:{color:"#F97583"}},":"),e("span",{style:{color:"#B392F0"}}," DateValue"),e("span",{style:{color:"#E1E4E8"}},") "),e("span",{style:{color:"#F97583"}},"=>"),e("span",{style:{color:"#B392F0"}}," pagingFunc"),e("span",{style:{color:"#E1E4E8"}},"(date, "),e("span",{style:{color:"#F97583"}},"-"),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#E1E4E8"}},")"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[668]||(n[668]=o(`
`)),n[669]||(n[669]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      >")],-1)),n[670]||(n[670]=o(`
`)),n[671]||(n[671]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        <"),e("span",{style:{color:"#85E89D"}},"Icon")],-1)),n[672]||(n[672]=o(`
`)),n[673]||(n[673]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:double-arrow-left"')],-1)),n[674]||(n[674]=o(`
`)),n[675]||(n[675]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"Icon"')],-1)),n[676]||(n[676]=o(`
`)),n[677]||(n[677]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        />")],-1)),n[678]||(n[678]=o(`
`)),e("span",ds,[n[541]||(n[541]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",Es,[s(a,{name:"CalendarPrev"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "prevPage",
    "description": "<p>The function to be used for the prev page. Overwrites the <code>prevPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[540]||(n[540]=o("CalendarPrev"))]),_:1})]),n[542]||(n[542]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[679]||(n[679]=o(`
`)),e("span",ys,[n[544]||(n[544]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",cs,[s(a,{name:"CalendarPrev"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "prevPage",
    "description": "<p>The function to be used for the prev page. Overwrites the <code>prevPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[543]||(n[543]=o("CalendarPrev"))]),_:1})])]),n[680]||(n[680]=o(`
`)),n[681]||(n[681]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"CalendarNavButton"')],-1)),n[682]||(n[682]=o(`
`)),n[683]||(n[683]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      >")],-1)),n[684]||(n[684]=o(`
`)),n[685]||(n[685]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        <"),e("span",{style:{color:"#85E89D"}},"Icon")],-1)),n[686]||(n[686]=o(`
`)),n[687]||(n[687]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:chevron-left"')],-1)),n[688]||(n[688]=o(`
`)),n[689]||(n[689]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"Icon"')],-1)),n[690]||(n[690]=o(`
`)),n[691]||(n[691]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        />")],-1)),n[692]||(n[692]=o(`
`)),e("span",us,[n[546]||(n[546]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",ms,[s(a,{name:"CalendarPrev"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "prevPage",
    "description": "<p>The function to be used for the prev page. Overwrites the <code>prevPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[545]||(n[545]=o("CalendarPrev"))]),_:1})]),n[547]||(n[547]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[693]||(n[693]=o(`
`)),e("span",fs,[n[549]||(n[549]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",Fs,[s(a,{name:"CalendarHeading"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "headingValue",
    "description": "<p>Current month and year</p>\\n",
    "type": "string"
  }
]`})]),default:l(()=>[n[548]||(n[548]=o("CalendarHeading"))]),_:1})]),n[550]||(n[550]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[551]||(n[551]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[552]||(n[552]=e("span",{style:{color:"#9ECBFF"}},'"CalendarHeading"',-1)),n[553]||(n[553]=e("span",{style:{color:"#E1E4E8"}}," />",-1))]),n[694]||(n[694]=o(`
`)),e("span",gs,[n[555]||(n[555]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",Cs,[s(a,{name:"CalendarNext"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nextPage",
    "description": "<p>The function to be used for the next page. Overwrites the <code>nextPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[554]||(n[554]=o("CalendarNext"))]),_:1})])]),n[695]||(n[695]=o(`
`)),n[696]||(n[696]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"CalendarNavButton"')],-1)),n[697]||(n[697]=o(`
`)),n[698]||(n[698]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      >")],-1)),n[699]||(n[699]=o(`
`)),n[700]||(n[700]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        <"),e("span",{style:{color:"#85E89D"}},"Icon")],-1)),n[701]||(n[701]=o(`
`)),n[702]||(n[702]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:chevron-right"')],-1)),n[703]||(n[703]=o(`
`)),n[704]||(n[704]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"Icon"')],-1)),n[705]||(n[705]=o(`
`)),n[706]||(n[706]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        />")],-1)),n[707]||(n[707]=o(`
`)),e("span",bs,[n[557]||(n[557]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",hs,[s(a,{name:"CalendarNext"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nextPage",
    "description": "<p>The function to be used for the next page. Overwrites the <code>nextPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[556]||(n[556]=o("CalendarNext"))]),_:1})]),n[558]||(n[558]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[708]||(n[708]=o(`
`)),n[709]||(n[709]=e("span",{class:"line"},null,-1)),n[710]||(n[710]=o(`
`)),e("span",ws,[n[560]||(n[560]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",Bs,[s(a,{name:"CalendarNext"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nextPage",
    "description": "<p>The function to be used for the next page. Overwrites the <code>nextPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[559]||(n[559]=o("CalendarNext"))]),_:1})])]),n[711]||(n[711]=o(`
`)),n[712]||(n[712]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"CalendarNavButton"')],-1)),n[713]||(n[713]=o(`
`)),n[714]||(n[714]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        :"),e("span",{style:{color:"#B392F0"}},"next-page"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"date"),e("span",{style:{color:"#F97583"}},":"),e("span",{style:{color:"#B392F0"}}," DateValue"),e("span",{style:{color:"#E1E4E8"}},") "),e("span",{style:{color:"#F97583"}},"=>"),e("span",{style:{color:"#B392F0"}}," pagingFunc"),e("span",{style:{color:"#E1E4E8"}},"(date, "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#E1E4E8"}},")"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[715]||(n[715]=o(`
`)),n[716]||(n[716]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      >")],-1)),n[717]||(n[717]=o(`
`)),n[718]||(n[718]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        <"),e("span",{style:{color:"#85E89D"}},"Icon")],-1)),n[719]||(n[719]=o(`
`)),n[720]||(n[720]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:double-arrow-right"')],-1)),n[721]||(n[721]=o(`
`)),n[722]||(n[722]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"Icon"')],-1)),n[723]||(n[723]=o(`
`)),n[724]||(n[724]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        />")],-1)),n[725]||(n[725]=o(`
`)),e("span",vs,[n[562]||(n[562]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",Ts,[s(a,{name:"CalendarNext"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nextPage",
    "description": "<p>The function to be used for the next page. Overwrites the <code>nextPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[561]||(n[561]=o("CalendarNext"))]),_:1})]),n[563]||(n[563]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[726]||(n[726]=o(`
`)),e("span",xs,[n[565]||(n[565]=e("span",{style:{color:"#E1E4E8"}},"    </",-1)),e("span",ks,[s(a,{name:"CalendarHeader"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[564]||(n[564]=o("CalendarHeader"))]),_:1})]),n[566]||(n[566]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[727]||(n[727]=o(`
`)),n[728]||(n[728]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    <"),e("span",{style:{color:"#85E89D"}},"div")],-1)),n[729]||(n[729]=o(`
`)),n[730]||(n[730]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"CalendarWrapper"')],-1)),n[731]||(n[731]=o(`
`)),n[732]||(n[732]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    >")],-1)),n[733]||(n[733]=o(`
`)),e("span",qs,[n[568]||(n[568]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",Ds,[s(a,{name:"CalendarGrid"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"table\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[567]||(n[567]=o("CalendarGrid"))]),_:1})])]),n[734]||(n[734]=o(`
`)),n[735]||(n[735]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"        v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"month "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," grid"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[736]||(n[736]=o(`
`)),n[737]||(n[737]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"month.value."),e("span",{style:{color:"#B392F0"}},"toString"),e("span",{style:{color:"#E1E4E8"}},"()"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[738]||(n[738]=o(`
`)),n[739]||(n[739]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"CalendarGrid"')],-1)),n[740]||(n[740]=o(`
`)),n[741]||(n[741]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      >")],-1)),n[742]||(n[742]=o(`
`)),e("span",As,[n[570]||(n[570]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",Ss,[s(a,{name:"CalendarGridHead"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"thead\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[569]||(n[569]=o("CalendarGridHead"))]),_:1})]),n[571]||(n[571]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[743]||(n[743]=o(`
`)),e("span",Rs,[n[573]||(n[573]=e("span",{style:{color:"#E1E4E8"}},"          <",-1)),e("span",Vs,[s(a,{name:"CalendarGridRow"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tr\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[572]||(n[572]=o("CalendarGridRow"))]),_:1})]),n[574]||(n[574]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[575]||(n[575]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[576]||(n[576]=e("span",{style:{color:"#9ECBFF"}},'"CalendarGridRow"',-1)),n[577]||(n[577]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[744]||(n[744]=o(`
`)),e("span",Is,[n[579]||(n[579]=e("span",{style:{color:"#E1E4E8"}},"            <",-1)),e("span",Ps,[s(a,{name:"CalendarHeadCell"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"th\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[578]||(n[578]=o("CalendarHeadCell"))]),_:1})])]),n[745]||(n[745]=o(`
`)),n[746]||(n[746]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"              v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"day "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," weekDays"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[747]||(n[747]=o(`
`)),n[748]||(n[748]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"day"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[749]||(n[749]=o(`
`)),n[750]||(n[750]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"              class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"CalendarHeadCell"')],-1)),n[751]||(n[751]=o(`
`)),n[752]||(n[752]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"            >")],-1)),n[753]||(n[753]=o(`
`)),n[754]||(n[754]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              {{ day }}")],-1)),n[755]||(n[755]=o(`
`)),e("span",Gs,[n[581]||(n[581]=e("span",{style:{color:"#E1E4E8"}},"            </",-1)),e("span",Hs,[s(a,{name:"CalendarHeadCell"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"th\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[580]||(n[580]=o("CalendarHeadCell"))]),_:1})]),n[582]||(n[582]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[756]||(n[756]=o(`
`)),e("span",Ms,[n[584]||(n[584]=e("span",{style:{color:"#E1E4E8"}},"          </",-1)),e("span",js,[s(a,{name:"CalendarGridRow"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tr\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[583]||(n[583]=o("CalendarGridRow"))]),_:1})]),n[585]||(n[585]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[757]||(n[757]=o(`
`)),e("span",Ws,[n[587]||(n[587]=e("span",{style:{color:"#E1E4E8"}},"        </",-1)),e("span",Os,[s(a,{name:"CalendarGridHead"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"thead\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[586]||(n[586]=o("CalendarGridHead"))]),_:1})]),n[588]||(n[588]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[758]||(n[758]=o(`
`)),e("span",Ls,[n[590]||(n[590]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",Us,[s(a,{name:"CalendarGridBody"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tbody\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[589]||(n[589]=o("CalendarGridBody"))]),_:1})]),n[591]||(n[591]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[592]||(n[592]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[593]||(n[593]=e("span",{style:{color:"#9ECBFF"}},'"CalendarGridWrapper"',-1)),n[594]||(n[594]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[759]||(n[759]=o(`
`)),e("span",Ns,[n[596]||(n[596]=e("span",{style:{color:"#E1E4E8"}},"          <",-1)),e("span",$s,[s(a,{name:"CalendarGridRow"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tr\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[595]||(n[595]=o("CalendarGridRow"))]),_:1})])]),n[760]||(n[760]=o(`
`)),n[761]||(n[761]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"            v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"(weekDates, index) "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," month.rows"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[762]||(n[762]=o(`
`)),n[763]||(n[763]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"            :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"`weekDate-${'),e("span",{style:{color:"#E1E4E8"}},"index"),e("span",{style:{color:"#9ECBFF"}},'}`"')],-1)),n[764]||(n[764]=o(`
`)),n[765]||(n[765]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"            class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"CalendarGridRow"')],-1)),n[766]||(n[766]=o(`
`)),n[767]||(n[767]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          >")],-1)),n[768]||(n[768]=o(`
`)),e("span",zs,[n[598]||(n[598]=e("span",{style:{color:"#E1E4E8"}},"            <",-1)),e("span",Ks,[s(a,{name:"CalendarCell"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"td\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "date",
    "description": "<p>The date value for the cell</p>\\n",
    "type": "DateValue",
    "required": true
  }
]`})]),default:l(()=>[n[597]||(n[597]=o("CalendarCell"))]),_:1})])]),n[769]||(n[769]=o(`
`)),n[770]||(n[770]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"              v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"weekDate "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," weekDates"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[771]||(n[771]=o(`
`)),n[772]||(n[772]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"weekDate."),e("span",{style:{color:"#B392F0"}},"toString"),e("span",{style:{color:"#E1E4E8"}},"()"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[773]||(n[773]=o(`
`)),n[774]||(n[774]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              :"),e("span",{style:{color:"#B392F0"}},"date"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"weekDate"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[775]||(n[775]=o(`
`)),n[776]||(n[776]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"              class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"CalendarCell"')],-1)),n[777]||(n[777]=o(`
`)),n[778]||(n[778]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"            >")],-1)),n[779]||(n[779]=o(`
`)),e("span",Zs,[n[600]||(n[600]=e("span",{style:{color:"#E1E4E8"}},"              <",-1)),e("span",Js,[s(a,{name:"CalendarCellTrigger"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "day",
    "description": "<p>The date value provided to the cell trigger</p>\\n",
    "type": "DateValue",
    "required": true
  },
  {
    "name": "month",
    "description": "<p>The month in which the cell is rendered</p>\\n",
    "type": "DateValue",
    "required": true
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "dayValue",
    "description": "<p>Current day</p>\\n",
    "type": "string"
  },
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "selected",
    "description": "<p>Current selected state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "today",
    "description": "<p>Current today state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "outsideView",
    "description": "<p>Current outside view state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "outsideVisibleView",
    "description": "<p>Current outside visible view state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "unavailable",
    "description": "<p>Current unavailable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[599]||(n[599]=o("CalendarCellTrigger"))]),_:1})])]),n[780]||(n[780]=o(`
`)),n[781]||(n[781]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                :"),e("span",{style:{color:"#B392F0"}},"day"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"weekDate"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[782]||(n[782]=o(`
`)),n[783]||(n[783]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                :"),e("span",{style:{color:"#B392F0"}},"month"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"month.value"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[784]||(n[784]=o(`
`)),n[785]||(n[785]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"                class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"CalendarCellTrigger"')],-1)),n[786]||(n[786]=o(`
`)),n[787]||(n[787]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              />")],-1)),n[788]||(n[788]=o(`
`)),e("span",Ys,[n[602]||(n[602]=e("span",{style:{color:"#E1E4E8"}},"            </",-1)),e("span",Qs,[s(a,{name:"CalendarCell"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"td\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "date",
    "description": "<p>The date value for the cell</p>\\n",
    "type": "DateValue",
    "required": true
  }
]`})]),default:l(()=>[n[601]||(n[601]=o("CalendarCell"))]),_:1})]),n[603]||(n[603]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[789]||(n[789]=o(`
`)),e("span",Xs,[n[605]||(n[605]=e("span",{style:{color:"#E1E4E8"}},"          </",-1)),e("span",_s,[s(a,{name:"CalendarGridRow"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tr\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[604]||(n[604]=o("CalendarGridRow"))]),_:1})]),n[606]||(n[606]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[790]||(n[790]=o(`
`)),e("span",el,[n[608]||(n[608]=e("span",{style:{color:"#E1E4E8"}},"        </",-1)),e("span",nl,[s(a,{name:"CalendarGridBody"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tbody\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[607]||(n[607]=o("CalendarGridBody"))]),_:1})]),n[609]||(n[609]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[791]||(n[791]=o(`
`)),e("span",ol,[n[611]||(n[611]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",sl,[s(a,{name:"CalendarGrid"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"table\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[610]||(n[610]=o("CalendarGrid"))]),_:1})]),n[612]||(n[612]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[792]||(n[792]=o(`
`)),n[793]||(n[793]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    </"),e("span",{style:{color:"#85E89D"}},"div"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[794]||(n[794]=o(`
`)),e("span",ll,[n[614]||(n[614]=e("span",{style:{color:"#E1E4E8"}},"  </",-1)),e("span",tl,[s(a,{name:"CalendarRoot"},{content:l(({})=>[s(t,{title:"slots",data:`[
  {
    "name": "date",
    "description": "<p>The current date of the placeholder</p>\\n",
    "type": "DateValue"
  },
  {
    "name": "grid",
    "description": "<p>The grid of dates</p>\\n",
    "type": "Grid<DateValue>[]"
  },
  {
    "name": "weekDays",
    "description": "<p>The days of the week</p>\\n",
    "type": "string[]"
  },
  {
    "name": "weekStartsOn",
    "description": "<p>The start of the week</p>\\n",
    "type": "0 | 1 | 2 | 3 | 4 | 5 | 6"
  },
  {
    "name": "locale",
    "description": "<p>The calendar locale</p>\\n",
    "type": "string"
  },
  {
    "name": "fixedWeeks",
    "description": "<p>Whether or not to always display 6 weeks in the calendar</p>\\n",
    "type": "boolean"
  },
  {
    "name": "modelValue",
    "description": "<p>The current date of the calendar</p>\\n",
    "type": "CalendarDate | CalendarDateTime | ZonedDateTime"
  }
]`})]),default:l(()=>[n[613]||(n[613]=o("CalendarRoot"))]),_:1})]),n[615]||(n[615]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[795]||(n[795]=o(`
`)),n[796]||(n[796]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),n[799]||(n[799]=e("div",{name:"styles.css",class:"language-css"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"css"),e("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"@import"),e("span",{style:{color:"#9ECBFF"}}," '@radix-ui/colors/black-alpha.css'"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"@import"),e("span",{style:{color:"#9ECBFF"}}," '@radix-ui/colors/grass.css'"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".Icon"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  width"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1.5"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1.5"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".Calendar"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  margin-top"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1.5"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-width"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#000000"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#ffffff"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  box-shadow"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#79B8FF"}}," 4"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," 6"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," -1"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," rgba"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"0.1"),e("span",{style:{color:"#E1E4E8"}},"), "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#79B8FF"}}," 2"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," 4"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," -1"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," rgba"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"0.06"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  padding"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"22"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarHeader"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  display"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"flex"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  justify-content"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"space-between"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  align-items"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarNavButton"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  display"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"inline-flex"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  justify-content"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  align-items"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  width"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"2.5"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"2.5"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#000000"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"transparent"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  cursor"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"pointer"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarNavButton:hover"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#ffffff"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#000000"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarHeading"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  font-weight"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"500"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#000000"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"15"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarWrapper"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  display"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"flex"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  padding-top"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  margin-top"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  flex-direction"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"column"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"@media"),e("span",{style:{color:"#E1E4E8"}}," ("),e("span",{style:{color:"#79B8FF"}},"min-width"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"640"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},") {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  .CalendarWrapper"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"    margin-left"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"    margin-top"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"    flex-direction"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"row"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  }")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarGrid"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  margin-top"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0.25"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  width"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"100"),e("span",{style:{color:"#F97583"}},"%"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  user-select"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"none"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-collapse"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"collapse"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarGridRow"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  display"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"grid"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  margin-bottom"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0.25"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  grid-template-columns"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"repeat"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"4"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"minmax"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#F97583"}},"fr"),e("span",{style:{color:"#E1E4E8"}},"));")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  width"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"100"),e("span",{style:{color:"#F97583"}},"%"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarGridRow"),e("span",{style:{color:"#E1E4E8"}},"["),e("span",{style:{color:"#B392F0"}},"data-reka-calendar-month-view"),e("span",{style:{color:"#E1E4E8"}},"] {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  grid-template-columns"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"repeat"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"7"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"minmax"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#F97583"}},"fr"),e("span",{style:{color:"#E1E4E8"}},"));")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarHeadCell"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-radius"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0.375"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  font-size"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0.75"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  line-height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#000000"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  font-weight"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"400"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarCell"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  position"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"relative"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  font-size"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0.875"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  line-height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1.25"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  text-align"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarCellTrigger"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  display"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"flex"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  position"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"relative"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  padding"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0.5"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  justify-content"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  align-items"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-width"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"transparent"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  outline-style"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"none"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  font-size"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0.875"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  line-height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1.25"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  font-weight"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"400"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#000000"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  white-space"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"nowrap"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"transparent"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarCellTrigger:hover"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#000000"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarCellTrigger:focus"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  box-shadow"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#79B8FF"}}," 0"),e("span",{style:{color:"#79B8FF"}}," 0"),e("span",{style:{color:"#79B8FF"}}," 2"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," #000000"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarCellTrigger"),e("span",{style:{color:"#E1E4E8"}},"["),e("span",{style:{color:"#B392F0"}},"data-disabled"),e("span",{style:{color:"#E1E4E8"}},"] {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  cursor"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"none"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"rgba"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},","),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},","),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},","),e("span",{style:{color:"#79B8FF"}},"0.3"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarCellTrigger"),e("span",{style:{color:"#E1E4E8"}},"["),e("span",{style:{color:"#B392F0"}},"data-selected"),e("span",{style:{color:"#E1E4E8"}},"] {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#000000"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#ffffff"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  font-weight"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"500"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarCellTrigger"),e("span",{style:{color:"#E1E4E8"}},"["),e("span",{style:{color:"#B392F0"}},"data-selected"),e("span",{style:{color:"#E1E4E8"}},"]"),e("span",{style:{color:"#B392F0"}},"::before"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#FFFFFF"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarCellTrigger"),e("span",{style:{color:"#E1E4E8"}},"["),e("span",{style:{color:"#B392F0"}},"data-unavailable"),e("span",{style:{color:"#E1E4E8"}},"] {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"rgba"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},","),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},","),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},","),e("span",{style:{color:"#79B8FF"}},"0.3"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  text-decoration"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"line-through"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarCellTrigger::before"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  content"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#9ECBFF"}},"''"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  position"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"absolute"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  top"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"5"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  left"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  width"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0.25"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0.25"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-radius"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"9999"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#FFFFFF"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarCellTrigger"),e("span",{style:{color:"#E1E4E8"}},"["),e("span",{style:{color:"#B392F0"}},"data-today"),e("span",{style:{color:"#E1E4E8"}},"]"),e("span",{style:{color:"#B392F0"}},"::before"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  display"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"block"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--grass-9"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6A737D"}},"/* reset */")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"button"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  all"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"unset"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".Wrapper"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  display"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"flex"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  flex-direction"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"column"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  gap"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".Label"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#fff"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SelectTrigger"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  display"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"inline-flex"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  align-items"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  justify-content"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-radius"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"4"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  padding"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#79B8FF"}}," 15"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  font-size"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"13"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  line-height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"35"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  gap"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"5"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"white"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--grass-11"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  box-shadow"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#79B8FF"}}," 2"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," 10"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--black-a7"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SelectTrigger:hover"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--mauve-3"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SelectTrigger:focus"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  box-shadow"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#79B8FF"}}," 0"),e("span",{style:{color:"#79B8FF"}}," 0"),e("span",{style:{color:"#79B8FF"}}," 2"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," black"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SelectTrigger"),e("span",{style:{color:"#E1E4E8"}},"["),e("span",{style:{color:"#B392F0"}},"data-placeholder"),e("span",{style:{color:"#E1E4E8"}},"] {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--grass-9"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SelectIcon"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"Var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--grass-11"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SelectContent"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  overflow"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"hidden"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"white"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-radius"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"6"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  box-shadow"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," 10"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," 38"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," -10"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," rgba"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"22"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"23"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"24"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"0.35"),e("span",{style:{color:"#E1E4E8"}},"), "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," 10"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," 20"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," -15"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," rgba"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"22"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"23"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"24"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"0.2"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SelectViewport"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  padding"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"5"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SelectItem"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  font-size"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"13"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  line-height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--grass-11"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-radius"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"3"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  display"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"flex"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  align-items"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"25"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  padding"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#79B8FF"}}," 35"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," 0"),e("span",{style:{color:"#79B8FF"}}," 25"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  position"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"relative"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  user-select"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"none"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SelectItem"),e("span",{style:{color:"#E1E4E8"}},"["),e("span",{style:{color:"#B392F0"}},"data-disabled"),e("span",{style:{color:"#E1E4E8"}},"] {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--mauve-8"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  pointer-events"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"none"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SelectItem"),e("span",{style:{color:"#E1E4E8"}},"["),e("span",{style:{color:"#B392F0"}},"data-highlighted"),e("span",{style:{color:"#E1E4E8"}},"] {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  outline"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"none"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--grass-9"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--grass-1"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SelectLabel"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  padding"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#79B8FF"}}," 25"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  font-size"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"12"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  line-height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"25"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--mauve-11"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SelectSeparator"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--grass-6"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  margin"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"5"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SelectItemIndicator"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  position"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"absolute"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  left"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  width"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"25"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  display"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"inline-flex"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  align-items"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  justify-content"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SelectScrollButton"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  display"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"flex"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  align-items"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  justify-content"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"25"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"white"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--grass-11"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  cursor"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"default"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")])])])],-1))]),tailwind:l(()=>[e("div",al,[n[1067]||(n[1067]=e("button",{title:"Copy Code",class:"copy"},null,-1)),n[1068]||(n[1068]=e("span",{class:"lang"},"vue",-1)),e("pre",rl,[e("code",null,[n[886]||(n[886]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"<"),e("span",{style:{color:"#85E89D"}},"script"),e("span",{style:{color:"#B392F0"}}," setup"),e("span",{style:{color:"#B392F0"}}," lang"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"ts"'),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[887]||(n[887]=o(`
`)),n[888]||(n[888]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#E1E4E8"}}," { Icon } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," '@iconify/vue'")],-1)),n[889]||(n[889]=o(`
`)),n[890]||(n[890]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#F97583"}}," type"),e("span",{style:{color:"#E1E4E8"}}," { DateValue } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," '@internationalized/date'")],-1)),n[891]||(n[891]=o(`
`)),n[892]||(n[892]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#E1E4E8"}}," { CalendarCell, CalendarCellTrigger, CalendarGrid, CalendarGridBody, CalendarGridHead, CalendarGridRow, CalendarHeadCell, CalendarHeader, CalendarHeading, CalendarNext, CalendarPrev, CalendarRoot, "),e("span",{style:{color:"#F97583"}},"type"),e("span",{style:{color:"#E1E4E8"}}," CalendarRootProps } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," 'reka-ui'")],-1)),n[893]||(n[893]=o(`
`)),n[894]||(n[894]=e("span",{class:"line"},null,-1)),n[895]||(n[895]=o(`
`)),n[896]||(n[896]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#B392F0"}}," isDateUnavailable"),e("span",{style:{color:"#F97583"}},":"),e("span",{style:{color:"#B392F0"}}," CalendarRootProps"),e("span",{style:{color:"#E1E4E8"}},"["),e("span",{style:{color:"#9ECBFF"}},"'isDateUnavailable'"),e("span",{style:{color:"#E1E4E8"}},"] "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#E1E4E8"}}," ("),e("span",{style:{color:"#FFAB70"}},"date"),e("span",{style:{color:"#E1E4E8"}},") "),e("span",{style:{color:"#F97583"}},"=>"),e("span",{style:{color:"#E1E4E8"}}," {")],-1)),n[897]||(n[897]=o(`
`)),n[898]||(n[898]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"  return"),e("span",{style:{color:"#E1E4E8"}}," date.day "),e("span",{style:{color:"#F97583"}},"==="),e("span",{style:{color:"#79B8FF"}}," 17"),e("span",{style:{color:"#F97583"}}," ||"),e("span",{style:{color:"#E1E4E8"}}," date.day "),e("span",{style:{color:"#F97583"}},"==="),e("span",{style:{color:"#79B8FF"}}," 18")],-1)),n[899]||(n[899]=o(`
`)),n[900]||(n[900]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")],-1)),n[901]||(n[901]=o(`
`)),n[902]||(n[902]=e("span",{class:"line"},null,-1)),n[903]||(n[903]=o(`
`)),n[904]||(n[904]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"function"),e("span",{style:{color:"#B392F0"}}," pagingFunc"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"date"),e("span",{style:{color:"#F97583"}},":"),e("span",{style:{color:"#B392F0"}}," DateValue"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#FFAB70"}},"sign"),e("span",{style:{color:"#F97583"}},":"),e("span",{style:{color:"#E1E4E8"}}," -"),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#F97583"}}," |"),e("span",{style:{color:"#79B8FF"}}," 1"),e("span",{style:{color:"#E1E4E8"}},") {")],-1)),n[905]||(n[905]=o(`
`)),n[906]||(n[906]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"  if"),e("span",{style:{color:"#E1E4E8"}}," (sign "),e("span",{style:{color:"#F97583"}},"==="),e("span",{style:{color:"#F97583"}}," -"),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#E1E4E8"}},")")],-1)),n[907]||(n[907]=o(`
`)),n[908]||(n[908]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"    return"),e("span",{style:{color:"#E1E4E8"}}," date."),e("span",{style:{color:"#B392F0"}},"subtract"),e("span",{style:{color:"#E1E4E8"}},"({ years: "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#E1E4E8"}}," })")],-1)),n[909]||(n[909]=o(`
`)),n[910]||(n[910]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"  return"),e("span",{style:{color:"#E1E4E8"}}," date."),e("span",{style:{color:"#B392F0"}},"add"),e("span",{style:{color:"#E1E4E8"}},"({ years: "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#E1E4E8"}}," })")],-1)),n[911]||(n[911]=o(`
`)),n[912]||(n[912]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")],-1)),n[913]||(n[913]=o(`
`)),n[914]||(n[914]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"script"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[915]||(n[915]=o(`
`)),n[916]||(n[916]=e("span",{class:"line"},null,-1)),n[917]||(n[917]=o(`
`)),n[918]||(n[918]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"<"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[919]||(n[919]=o(`
`)),e("span",pl,[n[801]||(n[801]=e("span",{style:{color:"#E1E4E8"}},"  <",-1)),e("span",il,[s(a,{name:"CalendarRoot"},{content:l(({})=>[s(t,{title:"slots",data:`[
  {
    "name": "date",
    "description": "<p>The current date of the placeholder</p>\\n",
    "type": "DateValue"
  },
  {
    "name": "grid",
    "description": "<p>The grid of dates</p>\\n",
    "type": "Grid<DateValue>[]"
  },
  {
    "name": "weekDays",
    "description": "<p>The days of the week</p>\\n",
    "type": "string[]"
  },
  {
    "name": "weekStartsOn",
    "description": "<p>The start of the week</p>\\n",
    "type": "0 | 1 | 2 | 3 | 4 | 5 | 6"
  },
  {
    "name": "locale",
    "description": "<p>The calendar locale</p>\\n",
    "type": "string"
  },
  {
    "name": "fixedWeeks",
    "description": "<p>Whether or not to always display 6 weeks in the calendar</p>\\n",
    "type": "boolean"
  },
  {
    "name": "modelValue",
    "description": "<p>The current date of the calendar</p>\\n",
    "type": "CalendarDate | CalendarDateTime | ZonedDateTime"
  }
]`})]),default:l(()=>[n[800]||(n[800]=o("CalendarRoot"))]),_:1})])]),n[920]||(n[920]=o(`
`)),n[921]||(n[921]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    v-slot"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"{ weekDays, grid }"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[922]||(n[922]=o(`
`)),n[923]||(n[923]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    :"),e("span",{style:{color:"#B392F0"}},"is-date-unavailable"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"isDateUnavailable"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[924]||(n[924]=o(`
`)),n[925]||(n[925]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"mt-6 rounded-xl bg-white p-4 shadow-md"')],-1)),n[926]||(n[926]=o(`
`)),n[927]||(n[927]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"    fixed-weeks")],-1)),n[928]||(n[928]=o(`
`)),n[929]||(n[929]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  >")],-1)),n[930]||(n[930]=o(`
`)),e("span",dl,[n[803]||(n[803]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",El,[s(a,{name:"CalendarHeader"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[802]||(n[802]=o("CalendarHeader"))]),_:1})]),n[804]||(n[804]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[805]||(n[805]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[806]||(n[806]=e("span",{style:{color:"#9ECBFF"}},'"flex items-center justify-between"',-1)),n[807]||(n[807]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[931]||(n[931]=o(`
`)),e("span",yl,[n[809]||(n[809]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",cl,[s(a,{name:"CalendarPrev"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "prevPage",
    "description": "<p>The function to be used for the prev page. Overwrites the <code>prevPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[808]||(n[808]=o("CalendarPrev"))]),_:1})])]),n[932]||(n[932]=o(`
`)),n[933]||(n[933]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"inline-flex items-center cursor-pointer text-black justify-center rounded-[9px] bg-transparent w-8 h-8 hover:bg-black hover:text-white active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black"')],-1)),n[934]||(n[934]=o(`
`)),n[935]||(n[935]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        :"),e("span",{style:{color:"#B392F0"}},"prev-page"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"date"),e("span",{style:{color:"#F97583"}},":"),e("span",{style:{color:"#B392F0"}}," DateValue"),e("span",{style:{color:"#E1E4E8"}},") "),e("span",{style:{color:"#F97583"}},"=>"),e("span",{style:{color:"#B392F0"}}," pagingFunc"),e("span",{style:{color:"#E1E4E8"}},"(date, "),e("span",{style:{color:"#F97583"}},"-"),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#E1E4E8"}},")"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[936]||(n[936]=o(`
`)),n[937]||(n[937]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      >")],-1)),n[938]||(n[938]=o(`
`)),n[939]||(n[939]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        <"),e("span",{style:{color:"#85E89D"}},"Icon")],-1)),n[940]||(n[940]=o(`
`)),n[941]||(n[941]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:double-arrow-left"')],-1)),n[942]||(n[942]=o(`
`)),n[943]||(n[943]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"w-4 h-4"')],-1)),n[944]||(n[944]=o(`
`)),n[945]||(n[945]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        />")],-1)),n[946]||(n[946]=o(`
`)),e("span",ul,[n[811]||(n[811]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",ml,[s(a,{name:"CalendarPrev"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "prevPage",
    "description": "<p>The function to be used for the prev page. Overwrites the <code>prevPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[810]||(n[810]=o("CalendarPrev"))]),_:1})]),n[812]||(n[812]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[947]||(n[947]=o(`
`)),e("span",fl,[n[814]||(n[814]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",Fl,[s(a,{name:"CalendarPrev"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "prevPage",
    "description": "<p>The function to be used for the prev page. Overwrites the <code>prevPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[813]||(n[813]=o("CalendarPrev"))]),_:1})])]),n[948]||(n[948]=o(`
`)),n[949]||(n[949]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"inline-flex items-center cursor-pointer text-black justify-center rounded-[9px] bg-transparent w-8 h-8 hover:bg-black hover:text-white active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black"')],-1)),n[950]||(n[950]=o(`
`)),n[951]||(n[951]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      >")],-1)),n[952]||(n[952]=o(`
`)),n[953]||(n[953]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        <"),e("span",{style:{color:"#85E89D"}},"Icon")],-1)),n[954]||(n[954]=o(`
`)),n[955]||(n[955]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:chevron-left"')],-1)),n[956]||(n[956]=o(`
`)),n[957]||(n[957]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"w-4 h-4"')],-1)),n[958]||(n[958]=o(`
`)),n[959]||(n[959]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        />")],-1)),n[960]||(n[960]=o(`
`)),e("span",gl,[n[816]||(n[816]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",Cl,[s(a,{name:"CalendarPrev"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "prevPage",
    "description": "<p>The function to be used for the prev page. Overwrites the <code>prevPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[815]||(n[815]=o("CalendarPrev"))]),_:1})]),n[817]||(n[817]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[961]||(n[961]=o(`
`)),e("span",bl,[n[819]||(n[819]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",hl,[s(a,{name:"CalendarHeading"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "headingValue",
    "description": "<p>Current month and year</p>\\n",
    "type": "string"
  }
]`})]),default:l(()=>[n[818]||(n[818]=o("CalendarHeading"))]),_:1})]),n[820]||(n[820]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[821]||(n[821]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[822]||(n[822]=e("span",{style:{color:"#9ECBFF"}},'"text-sm text-black font-medium"',-1)),n[823]||(n[823]=e("span",{style:{color:"#E1E4E8"}}," />",-1))]),n[962]||(n[962]=o(`
`)),n[963]||(n[963]=e("span",{class:"line"},null,-1)),n[964]||(n[964]=o(`
`)),e("span",wl,[n[825]||(n[825]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",Bl,[s(a,{name:"CalendarNext"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nextPage",
    "description": "<p>The function to be used for the next page. Overwrites the <code>nextPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[824]||(n[824]=o("CalendarNext"))]),_:1})])]),n[965]||(n[965]=o(`
`)),n[966]||(n[966]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"inline-flex items-center cursor-pointer justify-center text-black rounded-[9px] bg-transparent w-8 h-8 hover:bg-black hover:text-white active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black"')],-1)),n[967]||(n[967]=o(`
`)),n[968]||(n[968]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      >")],-1)),n[969]||(n[969]=o(`
`)),n[970]||(n[970]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        <"),e("span",{style:{color:"#85E89D"}},"Icon")],-1)),n[971]||(n[971]=o(`
`)),n[972]||(n[972]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:chevron-right"')],-1)),n[973]||(n[973]=o(`
`)),n[974]||(n[974]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"w-4 h-4"')],-1)),n[975]||(n[975]=o(`
`)),n[976]||(n[976]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        />")],-1)),n[977]||(n[977]=o(`
`)),e("span",vl,[n[827]||(n[827]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",Tl,[s(a,{name:"CalendarNext"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nextPage",
    "description": "<p>The function to be used for the next page. Overwrites the <code>nextPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[826]||(n[826]=o("CalendarNext"))]),_:1})]),n[828]||(n[828]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[978]||(n[978]=o(`
`)),n[979]||(n[979]=e("span",{class:"line"},null,-1)),n[980]||(n[980]=o(`
`)),e("span",xl,[n[830]||(n[830]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",kl,[s(a,{name:"CalendarNext"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nextPage",
    "description": "<p>The function to be used for the next page. Overwrites the <code>nextPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[829]||(n[829]=o("CalendarNext"))]),_:1})])]),n[981]||(n[981]=o(`
`)),n[982]||(n[982]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"inline-flex items-center cursor-pointer justify-center text-black rounded-[9px] bg-transparent w-8 h-8 hover:bg-black hover:text-white active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black"')],-1)),n[983]||(n[983]=o(`
`)),n[984]||(n[984]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        :"),e("span",{style:{color:"#B392F0"}},"next-page"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"date"),e("span",{style:{color:"#F97583"}},":"),e("span",{style:{color:"#B392F0"}}," DateValue"),e("span",{style:{color:"#E1E4E8"}},") "),e("span",{style:{color:"#F97583"}},"=>"),e("span",{style:{color:"#B392F0"}}," pagingFunc"),e("span",{style:{color:"#E1E4E8"}},"(date, "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#E1E4E8"}},")"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[985]||(n[985]=o(`
`)),n[986]||(n[986]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      >")],-1)),n[987]||(n[987]=o(`
`)),n[988]||(n[988]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        <"),e("span",{style:{color:"#85E89D"}},"Icon")],-1)),n[989]||(n[989]=o(`
`)),n[990]||(n[990]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:double-arrow-right"')],-1)),n[991]||(n[991]=o(`
`)),n[992]||(n[992]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"w-4 h-4"')],-1)),n[993]||(n[993]=o(`
`)),n[994]||(n[994]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        />")],-1)),n[995]||(n[995]=o(`
`)),e("span",ql,[n[832]||(n[832]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",Dl,[s(a,{name:"CalendarNext"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nextPage",
    "description": "<p>The function to be used for the next page. Overwrites the <code>nextPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[831]||(n[831]=o("CalendarNext"))]),_:1})]),n[833]||(n[833]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[996]||(n[996]=o(`
`)),e("span",Al,[n[835]||(n[835]=e("span",{style:{color:"#E1E4E8"}},"    </",-1)),e("span",Sl,[s(a,{name:"CalendarHeader"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[834]||(n[834]=o("CalendarHeader"))]),_:1})]),n[836]||(n[836]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[997]||(n[997]=o(`
`)),n[998]||(n[998]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    <"),e("span",{style:{color:"#85E89D"}},"div")],-1)),n[999]||(n[999]=o(`
`)),n[1e3]||(n[1e3]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0"')],-1)),n[1001]||(n[1001]=o(`
`)),n[1002]||(n[1002]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    >")],-1)),n[1003]||(n[1003]=o(`
`)),e("span",Rl,[n[838]||(n[838]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",Vl,[s(a,{name:"CalendarGrid"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"table\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[837]||(n[837]=o("CalendarGrid"))]),_:1})])]),n[1004]||(n[1004]=o(`
`)),n[1005]||(n[1005]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"        v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"month "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," grid"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1006]||(n[1006]=o(`
`)),n[1007]||(n[1007]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"month.value."),e("span",{style:{color:"#B392F0"}},"toString"),e("span",{style:{color:"#E1E4E8"}},"()"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1008]||(n[1008]=o(`
`)),n[1009]||(n[1009]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"w-full border-collapse select-none space-y-1"')],-1)),n[1010]||(n[1010]=o(`
`)),n[1011]||(n[1011]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      >")],-1)),n[1012]||(n[1012]=o(`
`)),e("span",Il,[n[840]||(n[840]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",Pl,[s(a,{name:"CalendarGridHead"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"thead\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[839]||(n[839]=o("CalendarGridHead"))]),_:1})]),n[841]||(n[841]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1013]||(n[1013]=o(`
`)),e("span",Gl,[n[843]||(n[843]=e("span",{style:{color:"#E1E4E8"}},"          <",-1)),e("span",Hl,[s(a,{name:"CalendarGridRow"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tr\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[842]||(n[842]=o("CalendarGridRow"))]),_:1})]),n[844]||(n[844]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[845]||(n[845]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[846]||(n[846]=e("span",{style:{color:"#9ECBFF"}},'"mb-1 grid w-full grid-cols-7"',-1)),n[847]||(n[847]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1014]||(n[1014]=o(`
`)),e("span",Ml,[n[849]||(n[849]=e("span",{style:{color:"#E1E4E8"}},"            <",-1)),e("span",jl,[s(a,{name:"CalendarHeadCell"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"th\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[848]||(n[848]=o("CalendarHeadCell"))]),_:1})])]),n[1015]||(n[1015]=o(`
`)),n[1016]||(n[1016]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"              v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"day "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," weekDays"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1017]||(n[1017]=o(`
`)),n[1018]||(n[1018]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"day"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1019]||(n[1019]=o(`
`)),n[1020]||(n[1020]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"              class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"rounded-md text-xs text-green8"')],-1)),n[1021]||(n[1021]=o(`
`)),n[1022]||(n[1022]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"            >")],-1)),n[1023]||(n[1023]=o(`
`)),n[1024]||(n[1024]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              {{ day }}")],-1)),n[1025]||(n[1025]=o(`
`)),e("span",Wl,[n[851]||(n[851]=e("span",{style:{color:"#E1E4E8"}},"            </",-1)),e("span",Ol,[s(a,{name:"CalendarHeadCell"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"th\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[850]||(n[850]=o("CalendarHeadCell"))]),_:1})]),n[852]||(n[852]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1026]||(n[1026]=o(`
`)),e("span",Ll,[n[854]||(n[854]=e("span",{style:{color:"#E1E4E8"}},"          </",-1)),e("span",Ul,[s(a,{name:"CalendarGridRow"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tr\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[853]||(n[853]=o("CalendarGridRow"))]),_:1})]),n[855]||(n[855]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1027]||(n[1027]=o(`
`)),e("span",Nl,[n[857]||(n[857]=e("span",{style:{color:"#E1E4E8"}},"        </",-1)),e("span",$l,[s(a,{name:"CalendarGridHead"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"thead\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[856]||(n[856]=o("CalendarGridHead"))]),_:1})]),n[858]||(n[858]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1028]||(n[1028]=o(`
`)),e("span",zl,[n[860]||(n[860]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",Kl,[s(a,{name:"CalendarGridBody"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tbody\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[859]||(n[859]=o("CalendarGridBody"))]),_:1})]),n[861]||(n[861]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[862]||(n[862]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[863]||(n[863]=e("span",{style:{color:"#9ECBFF"}},'"grid"',-1)),n[864]||(n[864]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1029]||(n[1029]=o(`
`)),e("span",Zl,[n[866]||(n[866]=e("span",{style:{color:"#E1E4E8"}},"          <",-1)),e("span",Jl,[s(a,{name:"CalendarGridRow"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tr\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[865]||(n[865]=o("CalendarGridRow"))]),_:1})])]),n[1030]||(n[1030]=o(`
`)),n[1031]||(n[1031]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"            v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"(weekDates, index) "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," month.rows"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1032]||(n[1032]=o(`
`)),n[1033]||(n[1033]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"            :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"`weekDate-${'),e("span",{style:{color:"#E1E4E8"}},"index"),e("span",{style:{color:"#9ECBFF"}},'}`"')],-1)),n[1034]||(n[1034]=o(`
`)),n[1035]||(n[1035]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"            class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"grid grid-cols-7"')],-1)),n[1036]||(n[1036]=o(`
`)),n[1037]||(n[1037]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          >")],-1)),n[1038]||(n[1038]=o(`
`)),e("span",Yl,[n[868]||(n[868]=e("span",{style:{color:"#E1E4E8"}},"            <",-1)),e("span",Ql,[s(a,{name:"CalendarCell"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"td\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "date",
    "description": "<p>The date value for the cell</p>\\n",
    "type": "DateValue",
    "required": true
  }
]`})]),default:l(()=>[n[867]||(n[867]=o("CalendarCell"))]),_:1})])]),n[1039]||(n[1039]=o(`
`)),n[1040]||(n[1040]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"              v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"weekDate "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," weekDates"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1041]||(n[1041]=o(`
`)),n[1042]||(n[1042]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"weekDate."),e("span",{style:{color:"#B392F0"}},"toString"),e("span",{style:{color:"#E1E4E8"}},"()"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1043]||(n[1043]=o(`
`)),n[1044]||(n[1044]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              :"),e("span",{style:{color:"#B392F0"}},"date"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"weekDate"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1045]||(n[1045]=o(`
`)),n[1046]||(n[1046]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"              class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"relative text-center text-sm"')],-1)),n[1047]||(n[1047]=o(`
`)),n[1048]||(n[1048]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"            >")],-1)),n[1049]||(n[1049]=o(`
`)),e("span",Xl,[n[870]||(n[870]=e("span",{style:{color:"#E1E4E8"}},"              <",-1)),e("span",_l,[s(a,{name:"CalendarCellTrigger"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "day",
    "description": "<p>The date value provided to the cell trigger</p>\\n",
    "type": "DateValue",
    "required": true
  },
  {
    "name": "month",
    "description": "<p>The month in which the cell is rendered</p>\\n",
    "type": "DateValue",
    "required": true
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "dayValue",
    "description": "<p>Current day</p>\\n",
    "type": "string"
  },
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "selected",
    "description": "<p>Current selected state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "today",
    "description": "<p>Current today state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "outsideView",
    "description": "<p>Current outside view state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "outsideVisibleView",
    "description": "<p>Current outside visible view state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "unavailable",
    "description": "<p>Current unavailable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[869]||(n[869]=o("CalendarCellTrigger"))]),_:1})])]),n[1050]||(n[1050]=o(`
`)),n[1051]||(n[1051]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                :"),e("span",{style:{color:"#B392F0"}},"day"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"weekDate"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1052]||(n[1052]=o(`
`)),n[1053]||(n[1053]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                :"),e("span",{style:{color:"#B392F0"}},"month"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"month.value"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1054]||(n[1054]=o(`
`)),n[1055]||(n[1055]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"                class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"relative flex items-center justify-center rounded-full whitespace-nowrap text-sm font-normal text-black w-8 h-8 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black data-[outside-view]:text-black/30 data-[selected]:!bg-green10 data-[selected]:text-white hover:bg-green5 data-[highlighted]:bg-green5 data-[unavailable]:pointer-events-none data-[unavailable]:text-black/30 data-[unavailable]:line-through before:absolute before:top-[5px] before:hidden before:rounded-full before:w-1 before:h-1 before:bg-white data-[today]:before:block data-[today]:before:bg-green9 "')],-1)),n[1056]||(n[1056]=o(`
`)),n[1057]||(n[1057]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              />")],-1)),n[1058]||(n[1058]=o(`
`)),e("span",et,[n[872]||(n[872]=e("span",{style:{color:"#E1E4E8"}},"            </",-1)),e("span",nt,[s(a,{name:"CalendarCell"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"td\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "date",
    "description": "<p>The date value for the cell</p>\\n",
    "type": "DateValue",
    "required": true
  }
]`})]),default:l(()=>[n[871]||(n[871]=o("CalendarCell"))]),_:1})]),n[873]||(n[873]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1059]||(n[1059]=o(`
`)),e("span",ot,[n[875]||(n[875]=e("span",{style:{color:"#E1E4E8"}},"          </",-1)),e("span",st,[s(a,{name:"CalendarGridRow"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tr\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[874]||(n[874]=o("CalendarGridRow"))]),_:1})]),n[876]||(n[876]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1060]||(n[1060]=o(`
`)),e("span",lt,[n[878]||(n[878]=e("span",{style:{color:"#E1E4E8"}},"        </",-1)),e("span",tt,[s(a,{name:"CalendarGridBody"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tbody\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[877]||(n[877]=o("CalendarGridBody"))]),_:1})]),n[879]||(n[879]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1061]||(n[1061]=o(`
`)),e("span",at,[n[881]||(n[881]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",rt,[s(a,{name:"CalendarGrid"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"table\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[880]||(n[880]=o("CalendarGrid"))]),_:1})]),n[882]||(n[882]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1062]||(n[1062]=o(`
`)),n[1063]||(n[1063]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    </"),e("span",{style:{color:"#85E89D"}},"div"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[1064]||(n[1064]=o(`
`)),e("span",pt,[n[884]||(n[884]=e("span",{style:{color:"#E1E4E8"}},"  </",-1)),e("span",it,[s(a,{name:"CalendarRoot"},{content:l(({})=>[s(t,{title:"slots",data:`[
  {
    "name": "date",
    "description": "<p>The current date of the placeholder</p>\\n",
    "type": "DateValue"
  },
  {
    "name": "grid",
    "description": "<p>The grid of dates</p>\\n",
    "type": "Grid<DateValue>[]"
  },
  {
    "name": "weekDays",
    "description": "<p>The days of the week</p>\\n",
    "type": "string[]"
  },
  {
    "name": "weekStartsOn",
    "description": "<p>The start of the week</p>\\n",
    "type": "0 | 1 | 2 | 3 | 4 | 5 | 6"
  },
  {
    "name": "locale",
    "description": "<p>The calendar locale</p>\\n",
    "type": "string"
  },
  {
    "name": "fixedWeeks",
    "description": "<p>Whether or not to always display 6 weeks in the calendar</p>\\n",
    "type": "boolean"
  },
  {
    "name": "modelValue",
    "description": "<p>The current date of the calendar</p>\\n",
    "type": "CalendarDate | CalendarDateTime | ZonedDateTime"
  }
]`})]),default:l(()=>[n[883]||(n[883]=o("CalendarRoot"))]),_:1})]),n[885]||(n[885]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1065]||(n[1065]=o(`
`)),n[1066]||(n[1066]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),n[1069]||(n[1069]=e("div",{name:"tailwind.config.js",class:"language-js"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"js"),e("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#E1E4E8"}}," { "),e("span",{style:{color:"#79B8FF"}},"blackA"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"grass"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"green"),e("span",{style:{color:"#E1E4E8"}}," } "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," require"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#9ECBFF"}},"'@radix-ui/colors'"),e("span",{style:{color:"#E1E4E8"}},")")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6A737D"}},"/** "),e("span",{style:{color:"#F97583"}},"@type"),e("span",{style:{color:"#B392F0"}}," {import('tailwindcss').Config}"),e("span",{style:{color:"#6A737D"}}," */")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"module"),e("span",{style:{color:"#E1E4E8"}},"."),e("span",{style:{color:"#79B8FF"}},"exports"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  content: ["),e("span",{style:{color:"#9ECBFF"}},"'./**/*.vue'"),e("span",{style:{color:"#E1E4E8"}},"],")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  theme: {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    extend: {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      colors: {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"        ..."),e("span",{style:{color:"#E1E4E8"}},"blackA,")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"        ..."),e("span",{style:{color:"#E1E4E8"}},"grass,")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"        ..."),e("span",{style:{color:"#E1E4E8"}},"green,")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      },")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    },")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  },")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  plugins: [],")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")])])])],-1))]),default:l(()=>[s(ue)]),_:1}),n[2518]||(n[2518]=E("",2)),s(m,{name:"CalendarSelect",type:"demo",files:"%7B%22css%22%3A%5B%22css%2Findex.vue%22%2C%22css%2Fstyles.css%22%5D%2C%22tailwind%22%3A%5B%22tailwind%2Findex.vue%22%2C%22tailwind%2Ftailwind.config.js%22%5D%7D"},{css:l(()=>[e("div",dt,[n[1780]||(n[1780]=e("button",{title:"Copy Code",class:"copy"},null,-1)),n[1781]||(n[1781]=e("span",{class:"lang"},"vue",-1)),e("pre",Et,[e("code",null,[n[1378]||(n[1378]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"<"),e("span",{style:{color:"#85E89D"}},"script"),e("span",{style:{color:"#B392F0"}}," setup"),e("span",{style:{color:"#B392F0"}}," lang"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"ts"'),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[1379]||(n[1379]=o(`
`)),n[1380]||(n[1380]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#E1E4E8"}}," { Icon } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," '@iconify/vue'")],-1)),n[1381]||(n[1381]=o(`
`)),n[1382]||(n[1382]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#E1E4E8"}}," { createCalendar, getLocalTimeZone, toCalendar, today } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," '@internationalized/date'")],-1)),n[1383]||(n[1383]=o(`
`)),n[1384]||(n[1384]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#E1E4E8"}}," { CalendarCell, CalendarCellTrigger, CalendarGrid, CalendarGridBody, CalendarGridHead, CalendarGridRow, CalendarHeadCell, CalendarHeader, CalendarHeading, CalendarNext, CalendarPrev, CalendarRoot, Label, SelectContent, SelectGroup, SelectItem, SelectItemIndicator, SelectItemText, SelectLabel, SelectPortal, SelectRoot, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, SelectViewport } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," 'reka-ui'")],-1)),n[1385]||(n[1385]=o(`
`)),n[1386]||(n[1386]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#E1E4E8"}}," { computed, ref } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," 'vue'")],-1)),n[1387]||(n[1387]=o(`
`)),n[1388]||(n[1388]=e("span",{class:"line"},null,-1)),n[1389]||(n[1389]=o(`
`)),n[1390]||(n[1390]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," preferences"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#E1E4E8"}}," [")],-1)),n[1391]||(n[1391]=o(`
`)),n[1392]||(n[1392]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { locale: "),e("span",{style:{color:"#9ECBFF"}},"'en-US'"),e("span",{style:{color:"#E1E4E8"}},", label: "),e("span",{style:{color:"#9ECBFF"}},"'Default'"),e("span",{style:{color:"#E1E4E8"}},", ordering: "),e("span",{style:{color:"#9ECBFF"}},"'gregory'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[1393]||(n[1393]=o(`
`)),n[1394]||(n[1394]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { label: "),e("span",{style:{color:"#9ECBFF"}},"'Arabic (Algeria)'"),e("span",{style:{color:"#E1E4E8"}},", locale: "),e("span",{style:{color:"#9ECBFF"}},"'ar-DZ'"),e("span",{style:{color:"#E1E4E8"}},", territories: "),e("span",{style:{color:"#9ECBFF"}},"'DJ DZ EH ER IQ JO KM LB LY MA MR OM PS SD SY TD TN YE'"),e("span",{style:{color:"#E1E4E8"}},", ordering: "),e("span",{style:{color:"#9ECBFF"}},"'gregory islamic islamic-civil islamic-tbla'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[1395]||(n[1395]=o(`
`)),n[1396]||(n[1396]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { label: "),e("span",{style:{color:"#9ECBFF"}},"'Arabic (United Arab Emirates)'"),e("span",{style:{color:"#E1E4E8"}},", locale: "),e("span",{style:{color:"#9ECBFF"}},"'ar-AE'"),e("span",{style:{color:"#E1E4E8"}},", territories: "),e("span",{style:{color:"#9ECBFF"}},"'AE BH KW QA'"),e("span",{style:{color:"#E1E4E8"}},", ordering: "),e("span",{style:{color:"#9ECBFF"}},"'gregory islamic-umalqura islamic islamic-civil islamic-tbla'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[1397]||(n[1397]=o(`
`)),n[1398]||(n[1398]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { label: "),e("span",{style:{color:"#9ECBFF"}},"'Arabic (Egypt)'"),e("span",{style:{color:"#E1E4E8"}},", locale: "),e("span",{style:{color:"#9ECBFF"}},"'ar-EG'"),e("span",{style:{color:"#E1E4E8"}},", territories: "),e("span",{style:{color:"#9ECBFF"}},"'EG'"),e("span",{style:{color:"#E1E4E8"}},", ordering: "),e("span",{style:{color:"#9ECBFF"}},"'gregory coptic islamic islamic-civil islamic-tbla'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[1399]||(n[1399]=o(`
`)),n[1400]||(n[1400]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { label: "),e("span",{style:{color:"#9ECBFF"}},"'Arabic (Saudi Arabia)'"),e("span",{style:{color:"#E1E4E8"}},", locale: "),e("span",{style:{color:"#9ECBFF"}},"'ar-SA'"),e("span",{style:{color:"#E1E4E8"}},", territories: "),e("span",{style:{color:"#9ECBFF"}},"'SA'"),e("span",{style:{color:"#E1E4E8"}},", ordering: "),e("span",{style:{color:"#9ECBFF"}},"'islamic-umalqura gregory islamic islamic-rgsa'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[1401]||(n[1401]=o(`
`)),n[1402]||(n[1402]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { label: "),e("span",{style:{color:"#9ECBFF"}},"'Farsi (Iran)'"),e("span",{style:{color:"#E1E4E8"}},", locale: "),e("span",{style:{color:"#9ECBFF"}},"'fa-IR'"),e("span",{style:{color:"#E1E4E8"}},", territories: "),e("span",{style:{color:"#9ECBFF"}},"'IR'"),e("span",{style:{color:"#E1E4E8"}},", ordering: "),e("span",{style:{color:"#9ECBFF"}},"'persian gregory islamic islamic-civil islamic-tbla'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[1403]||(n[1403]=o(`
`)),n[1404]||(n[1404]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { label: "),e("span",{style:{color:"#9ECBFF"}},"'Farsi (Afghanistan)'"),e("span",{style:{color:"#E1E4E8"}},", locale: "),e("span",{style:{color:"#9ECBFF"}},"'fa-AF'"),e("span",{style:{color:"#E1E4E8"}},", territories: "),e("span",{style:{color:"#9ECBFF"}},"'AF IR'"),e("span",{style:{color:"#E1E4E8"}},", ordering: "),e("span",{style:{color:"#9ECBFF"}},"'persian gregory islamic islamic-civil islamic-tbla'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[1405]||(n[1405]=o(`
`)),n[1406]||(n[1406]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { label: "),e("span",{style:{color:"#9ECBFF"}},"'Amharic (Ethiopia)'"),e("span",{style:{color:"#E1E4E8"}},", locale: "),e("span",{style:{color:"#9ECBFF"}},"'am-ET'"),e("span",{style:{color:"#E1E4E8"}},", territories: "),e("span",{style:{color:"#9ECBFF"}},"'ET'"),e("span",{style:{color:"#E1E4E8"}},", ordering: "),e("span",{style:{color:"#9ECBFF"}},"'gregory ethiopic ethioaa'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[1407]||(n[1407]=o(`
`)),n[1408]||(n[1408]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { label: "),e("span",{style:{color:"#9ECBFF"}},"'Hebrew (Israel)'"),e("span",{style:{color:"#E1E4E8"}},", locale: "),e("span",{style:{color:"#9ECBFF"}},"'he-IL'"),e("span",{style:{color:"#E1E4E8"}},", territories: "),e("span",{style:{color:"#9ECBFF"}},"'IL'"),e("span",{style:{color:"#E1E4E8"}},", ordering: "),e("span",{style:{color:"#9ECBFF"}},"'gregory hebrew islamic islamic-civil islamic-tbla'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[1409]||(n[1409]=o(`
`)),n[1410]||(n[1410]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { label: "),e("span",{style:{color:"#9ECBFF"}},"'Hindi (India)'"),e("span",{style:{color:"#E1E4E8"}},", locale: "),e("span",{style:{color:"#9ECBFF"}},"'hi-IN'"),e("span",{style:{color:"#E1E4E8"}},", territories: "),e("span",{style:{color:"#9ECBFF"}},"'IN'"),e("span",{style:{color:"#E1E4E8"}},", ordering: "),e("span",{style:{color:"#9ECBFF"}},"'gregory indian'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[1411]||(n[1411]=o(`
`)),n[1412]||(n[1412]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { label: "),e("span",{style:{color:"#9ECBFF"}},"'Japanese (Japan)'"),e("span",{style:{color:"#E1E4E8"}},", locale: "),e("span",{style:{color:"#9ECBFF"}},"'ja-JP'"),e("span",{style:{color:"#E1E4E8"}},", territories: "),e("span",{style:{color:"#9ECBFF"}},"'JP'"),e("span",{style:{color:"#E1E4E8"}},", ordering: "),e("span",{style:{color:"#9ECBFF"}},"'gregory japanese'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[1413]||(n[1413]=o(`
`)),n[1414]||(n[1414]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { label: "),e("span",{style:{color:"#9ECBFF"}},"'Thai (Thailand)'"),e("span",{style:{color:"#E1E4E8"}},", locale: "),e("span",{style:{color:"#9ECBFF"}},"'th-TH'"),e("span",{style:{color:"#E1E4E8"}},", territories: "),e("span",{style:{color:"#9ECBFF"}},"'TH'"),e("span",{style:{color:"#E1E4E8"}},", ordering: "),e("span",{style:{color:"#9ECBFF"}},"'buddhist gregory'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[1415]||(n[1415]=o(`
`)),n[1416]||(n[1416]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { label: "),e("span",{style:{color:"#9ECBFF"}},"'Chinese (Taiwan)'"),e("span",{style:{color:"#E1E4E8"}},", locale: "),e("span",{style:{color:"#9ECBFF"}},"'zh-TW'"),e("span",{style:{color:"#E1E4E8"}},", territories: "),e("span",{style:{color:"#9ECBFF"}},"'TW'"),e("span",{style:{color:"#E1E4E8"}},", ordering: "),e("span",{style:{color:"#9ECBFF"}},"'gregory roc chinese'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[1417]||(n[1417]=o(`
`)),n[1418]||(n[1418]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"]")],-1)),n[1419]||(n[1419]=o(`
`)),n[1420]||(n[1420]=e("span",{class:"line"},null,-1)),n[1421]||(n[1421]=o(`
`)),n[1422]||(n[1422]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," calendars"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#E1E4E8"}}," [")],-1)),n[1423]||(n[1423]=o(`
`)),n[1424]||(n[1424]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { key: "),e("span",{style:{color:"#9ECBFF"}},"'gregory'"),e("span",{style:{color:"#E1E4E8"}},", name: "),e("span",{style:{color:"#9ECBFF"}},"'Gregorian'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[1425]||(n[1425]=o(`
`)),n[1426]||(n[1426]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { key: "),e("span",{style:{color:"#9ECBFF"}},"'japanese'"),e("span",{style:{color:"#E1E4E8"}},", name: "),e("span",{style:{color:"#9ECBFF"}},"'Japanese'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[1427]||(n[1427]=o(`
`)),n[1428]||(n[1428]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { key: "),e("span",{style:{color:"#9ECBFF"}},"'buddhist'"),e("span",{style:{color:"#E1E4E8"}},", name: "),e("span",{style:{color:"#9ECBFF"}},"'Buddhist'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[1429]||(n[1429]=o(`
`)),n[1430]||(n[1430]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { key: "),e("span",{style:{color:"#9ECBFF"}},"'roc'"),e("span",{style:{color:"#E1E4E8"}},", name: "),e("span",{style:{color:"#9ECBFF"}},"'Taiwan'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[1431]||(n[1431]=o(`
`)),n[1432]||(n[1432]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { key: "),e("span",{style:{color:"#9ECBFF"}},"'persian'"),e("span",{style:{color:"#E1E4E8"}},", name: "),e("span",{style:{color:"#9ECBFF"}},"'Persian'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[1433]||(n[1433]=o(`
`)),n[1434]||(n[1434]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { key: "),e("span",{style:{color:"#9ECBFF"}},"'indian'"),e("span",{style:{color:"#E1E4E8"}},", name: "),e("span",{style:{color:"#9ECBFF"}},"'Indian'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[1435]||(n[1435]=o(`
`)),n[1436]||(n[1436]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { key: "),e("span",{style:{color:"#9ECBFF"}},"'islamic-umalqura'"),e("span",{style:{color:"#E1E4E8"}},", name: "),e("span",{style:{color:"#9ECBFF"}},"'Islamic (Umm al-Qura)'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[1437]||(n[1437]=o(`
`)),n[1438]||(n[1438]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { key: "),e("span",{style:{color:"#9ECBFF"}},"'islamic-civil'"),e("span",{style:{color:"#E1E4E8"}},", name: "),e("span",{style:{color:"#9ECBFF"}},"'Islamic Civil'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[1439]||(n[1439]=o(`
`)),n[1440]||(n[1440]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { key: "),e("span",{style:{color:"#9ECBFF"}},"'islamic-tbla'"),e("span",{style:{color:"#E1E4E8"}},", name: "),e("span",{style:{color:"#9ECBFF"}},"'Islamic Tabular'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[1441]||(n[1441]=o(`
`)),n[1442]||(n[1442]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { key: "),e("span",{style:{color:"#9ECBFF"}},"'hebrew'"),e("span",{style:{color:"#E1E4E8"}},", name: "),e("span",{style:{color:"#9ECBFF"}},"'Hebrew'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[1443]||(n[1443]=o(`
`)),n[1444]||(n[1444]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { key: "),e("span",{style:{color:"#9ECBFF"}},"'coptic'"),e("span",{style:{color:"#E1E4E8"}},", name: "),e("span",{style:{color:"#9ECBFF"}},"'Coptic'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[1445]||(n[1445]=o(`
`)),n[1446]||(n[1446]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { key: "),e("span",{style:{color:"#9ECBFF"}},"'ethiopic'"),e("span",{style:{color:"#E1E4E8"}},", name: "),e("span",{style:{color:"#9ECBFF"}},"'Ethiopic'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[1447]||(n[1447]=o(`
`)),n[1448]||(n[1448]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { key: "),e("span",{style:{color:"#9ECBFF"}},"'ethioaa'"),e("span",{style:{color:"#E1E4E8"}},", name: "),e("span",{style:{color:"#9ECBFF"}},"'Ethiopic (Amete Alem)'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[1449]||(n[1449]=o(`
`)),n[1450]||(n[1450]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"]")],-1)),n[1451]||(n[1451]=o(`
`)),n[1452]||(n[1452]=e("span",{class:"line"},null,-1)),n[1453]||(n[1453]=o(`
`)),n[1454]||(n[1454]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," locale"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#B392F0"}}," ref"),e("span",{style:{color:"#E1E4E8"}},"(preferences["),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},"].locale)")],-1)),n[1455]||(n[1455]=o(`
`)),n[1456]||(n[1456]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," calendar"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#B392F0"}}," ref"),e("span",{style:{color:"#E1E4E8"}},"(calendars["),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},"].key)")],-1)),n[1457]||(n[1457]=o(`
`)),n[1458]||(n[1458]=e("span",{class:"line"},null,-1)),n[1459]||(n[1459]=o(`
`)),n[1460]||(n[1460]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," pref"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#B392F0"}}," computed"),e("span",{style:{color:"#E1E4E8"}},"(() "),e("span",{style:{color:"#F97583"}},"=>"),e("span",{style:{color:"#E1E4E8"}}," preferences."),e("span",{style:{color:"#B392F0"}},"find"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"p"),e("span",{style:{color:"#F97583"}}," =>"),e("span",{style:{color:"#E1E4E8"}}," p.locale "),e("span",{style:{color:"#F97583"}},"==="),e("span",{style:{color:"#E1E4E8"}}," locale.value))")],-1)),n[1461]||(n[1461]=o(`
`)),n[1462]||(n[1462]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," preferredCalendars"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#B392F0"}}," computed"),e("span",{style:{color:"#E1E4E8"}},"(() "),e("span",{style:{color:"#F97583"}},"=>"),e("span",{style:{color:"#E1E4E8"}}," pref.value "),e("span",{style:{color:"#F97583"}},"?"),e("span",{style:{color:"#E1E4E8"}}," pref.value.ordering."),e("span",{style:{color:"#B392F0"}},"split"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#9ECBFF"}},"' '"),e("span",{style:{color:"#E1E4E8"}},")."),e("span",{style:{color:"#B392F0"}},"map"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"p"),e("span",{style:{color:"#F97583"}}," =>"),e("span",{style:{color:"#E1E4E8"}}," calendars."),e("span",{style:{color:"#B392F0"}},"find"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"c"),e("span",{style:{color:"#F97583"}}," =>"),e("span",{style:{color:"#E1E4E8"}}," c.key "),e("span",{style:{color:"#F97583"}},"==="),e("span",{style:{color:"#E1E4E8"}}," p))."),e("span",{style:{color:"#B392F0"}},"filter"),e("span",{style:{color:"#E1E4E8"}},"(Boolean) "),e("span",{style:{color:"#F97583"}},":"),e("span",{style:{color:"#E1E4E8"}}," [calendars["),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},"]])")],-1)),n[1463]||(n[1463]=o(`
`)),n[1464]||(n[1464]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," otherCalendars"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#B392F0"}}," computed"),e("span",{style:{color:"#E1E4E8"}},"(() "),e("span",{style:{color:"#F97583"}},"=>"),e("span",{style:{color:"#E1E4E8"}}," calendars."),e("span",{style:{color:"#B392F0"}},"filter"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"c"),e("span",{style:{color:"#F97583"}}," =>"),e("span",{style:{color:"#F97583"}}," !"),e("span",{style:{color:"#E1E4E8"}},"preferredCalendars.value."),e("span",{style:{color:"#B392F0"}},"some"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"p"),e("span",{style:{color:"#F97583"}}," =>"),e("span",{style:{color:"#E1E4E8"}}," p"),e("span",{style:{color:"#F97583"}},"!"),e("span",{style:{color:"#E1E4E8"}},".key "),e("span",{style:{color:"#F97583"}},"==="),e("span",{style:{color:"#E1E4E8"}}," c.key)))")],-1)),n[1465]||(n[1465]=o(`
`)),n[1466]||(n[1466]=e("span",{class:"line"},null,-1)),n[1467]||(n[1467]=o(`
`)),n[1468]||(n[1468]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"function"),e("span",{style:{color:"#B392F0"}}," updateLocale"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"newLocale"),e("span",{style:{color:"#F97583"}},":"),e("span",{style:{color:"#79B8FF"}}," string"),e("span",{style:{color:"#E1E4E8"}},") {")],-1)),n[1469]||(n[1469]=o(`
`)),n[1470]||(n[1470]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  locale.value "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#E1E4E8"}}," newLocale")],-1)),n[1471]||(n[1471]=o(`
`)),n[1472]||(n[1472]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  calendar.value "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#E1E4E8"}}," pref.value"),e("span",{style:{color:"#F97583"}},"!"),e("span",{style:{color:"#E1E4E8"}},".ordering."),e("span",{style:{color:"#B392F0"}},"split"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#9ECBFF"}},"' '"),e("span",{style:{color:"#E1E4E8"}},")["),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},"]")],-1)),n[1473]||(n[1473]=o(`
`)),n[1474]||(n[1474]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")],-1)),n[1475]||(n[1475]=o(`
`)),n[1476]||(n[1476]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," value"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#B392F0"}}," computed"),e("span",{style:{color:"#E1E4E8"}},"(() "),e("span",{style:{color:"#F97583"}},"=>"),e("span",{style:{color:"#B392F0"}}," toCalendar"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#B392F0"}},"today"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#B392F0"}},"getLocalTimeZone"),e("span",{style:{color:"#E1E4E8"}},"()), "),e("span",{style:{color:"#B392F0"}},"createCalendar"),e("span",{style:{color:"#E1E4E8"}},"(calendar.value)))")],-1)),n[1477]||(n[1477]=o(`
`)),n[1478]||(n[1478]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"script"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[1479]||(n[1479]=o(`
`)),n[1480]||(n[1480]=e("span",{class:"line"},null,-1)),n[1481]||(n[1481]=o(`
`)),n[1482]||(n[1482]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"<"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[1483]||(n[1483]=o(`
`)),n[1484]||(n[1484]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  <"),e("span",{style:{color:"#85E89D"}},"div"),e("span",{style:{color:"#B392F0"}}," class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"Wrapper"'),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[1485]||(n[1485]=o(`
`)),e("span",yt,[n[1072]||(n[1072]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",ct,[s(a,{name:"Label"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"label\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "for",
    "description": "<p>The id of the element the label is associated with.</p>\\n",
    "type": "string",
    "required": false
  }
]`})]),default:l(()=>[n[1070]||(n[1070]=o("Label"))]),_:1})]),n[1073]||(n[1073]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1074]||(n[1074]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1075]||(n[1075]=e("span",{style:{color:"#9ECBFF"}},'"Label"',-1)),n[1076]||(n[1076]=e("span",{style:{color:"#E1E4E8"}},">Locale</",-1)),e("span",ut,[s(a,{name:"Label"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"label\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "for",
    "description": "<p>The id of the element the label is associated with.</p>\\n",
    "type": "string",
    "required": false
  }
]`})]),default:l(()=>[n[1071]||(n[1071]=o("Label"))]),_:1})]),n[1077]||(n[1077]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1486]||(n[1486]=o(`
`)),e("span",mt,[n[1079]||(n[1079]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",ft,[s(a,{name:"SelectRoot"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "autocomplete",
    "description": "<p>Native html input <code>autocomplete</code> attribute.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "by",
    "description": "<p>Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared.</p>\\n",
    "type": "string | ((a: AcceptableValue, b: AcceptableValue) => boolean)",
    "required": false
  },
  {
    "name": "defaultOpen",
    "description": "<p>The open state of the select when it is initially rendered. Use when you do not need to control its open state.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "defaultValue",
    "description": "<p>The value of the select when initially rendered. Use when you do not need to control the state of the Select</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "dir",
    "description": "<p>The reading direction of the combobox when applicable. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with Select</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled value of the Select. Can be bind as <code>v-model</code>.</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "multiple",
    "description": "<p>Whether multiple options can be selected or not.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "name",
    "description": "<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "open",
    "description": "<p>The controlled open state of the Select. Can be bind as <code>v-model:open</code>.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "required",
    "description": "<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),s(t,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[value: AcceptableValue]"
  },
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the context menu changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current input values</p>\\n",
    "type": "AcceptableValue | AcceptableValue[] | undefined"
  },
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[1078]||(n[1078]=o("SelectRoot"))]),_:1})])]),n[1487]||(n[1487]=o(`
`)),n[1488]||(n[1488]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      v-model"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"locale"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1489]||(n[1489]=o(`
`)),n[1490]||(n[1490]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      @"),e("span",{style:{color:"#B392F0"}},"update"),e("span",{style:{color:"#E1E4E8"}},":"),e("span",{style:{color:"#B392F0"}},"model-value"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"updateLocale"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1491]||(n[1491]=o(`
`)),n[1492]||(n[1492]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    >")],-1)),n[1493]||(n[1493]=o(`
`)),e("span",Ft,[n[1081]||(n[1081]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",gt,[s(a,{name:"SelectTrigger"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "",
    "type": "boolean",
    "required": false
  },
  {
    "name": "reference",
    "description": "<p>The reference (or anchor) element that is being referred to for positioning.</p>\\n<p>If not provided will use the current component as anchor.</p>\\n",
    "type": "ReferenceElement",
    "required": false
  }
]`})]),default:l(()=>[n[1080]||(n[1080]=o("SelectTrigger"))]),_:1})])]),n[1494]||(n[1494]=o(`
`)),n[1495]||(n[1495]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"SelectTrigger"')],-1)),n[1496]||(n[1496]=o(`
`)),n[1497]||(n[1497]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        aria-label"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"Select a locale"')],-1)),n[1498]||(n[1498]=o(`
`)),n[1499]||(n[1499]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      >")],-1)),n[1500]||(n[1500]=o(`
`)),e("span",Ct,[n[1083]||(n[1083]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",bt,[s(a,{name:"SelectValue"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "placeholder",
    "description": "<p>The content that will be rendered inside the <code>SelectValue</code> when no <code>value</code> or <code>defaultValue</code> is set.</p>\\n",
    "type": "string",
    "required": false,
    "default": "\\"\\""
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "selectedLabel",
    "description": "",
    "type": "string[]"
  },
  {
    "name": "modelValue",
    "description": "",
    "type": "AcceptableValue | AcceptableValue[] | undefined"
  }
]`})]),default:l(()=>[n[1082]||(n[1082]=o("SelectValue"))]),_:1})]),n[1084]||(n[1084]=e("span",{style:{color:"#B392F0"}}," placeholder",-1)),n[1085]||(n[1085]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1086]||(n[1086]=e("span",{style:{color:"#9ECBFF"}},'"Please select a locale"',-1)),n[1087]||(n[1087]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1501]||(n[1501]=o(`
`)),n[1502]||(n[1502]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          {{ pref"),e("span",{style:{color:"#F97583"}},"!"),e("span",{style:{color:"#E1E4E8"}},".label }}")],-1)),n[1503]||(n[1503]=o(`
`)),e("span",ht,[n[1089]||(n[1089]=e("span",{style:{color:"#E1E4E8"}},"        </",-1)),e("span",wt,[s(a,{name:"SelectValue"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "placeholder",
    "description": "<p>The content that will be rendered inside the <code>SelectValue</code> when no <code>value</code> or <code>defaultValue</code> is set.</p>\\n",
    "type": "string",
    "required": false,
    "default": "\\"\\""
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "selectedLabel",
    "description": "",
    "type": "string[]"
  },
  {
    "name": "modelValue",
    "description": "",
    "type": "AcceptableValue | AcceptableValue[] | undefined"
  }
]`})]),default:l(()=>[n[1088]||(n[1088]=o("SelectValue"))]),_:1})]),n[1090]||(n[1090]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1504]||(n[1504]=o(`
`)),n[1505]||(n[1505]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        <"),e("span",{style:{color:"#85E89D"}},"Icon")],-1)),n[1506]||(n[1506]=o(`
`)),n[1507]||(n[1507]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:chevron-down"')],-1)),n[1508]||(n[1508]=o(`
`)),n[1509]||(n[1509]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"Icon"')],-1)),n[1510]||(n[1510]=o(`
`)),n[1511]||(n[1511]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        />")],-1)),n[1512]||(n[1512]=o(`
`)),e("span",Bt,[n[1092]||(n[1092]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",vt,[s(a,{name:"SelectTrigger"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "",
    "type": "boolean",
    "required": false
  },
  {
    "name": "reference",
    "description": "<p>The reference (or anchor) element that is being referred to for positioning.</p>\\n<p>If not provided will use the current component as anchor.</p>\\n",
    "type": "ReferenceElement",
    "required": false
  }
]`})]),default:l(()=>[n[1091]||(n[1091]=o("SelectTrigger"))]),_:1})]),n[1093]||(n[1093]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1513]||(n[1513]=o(`
`)),n[1514]||(n[1514]=e("span",{class:"line"},null,-1)),n[1515]||(n[1515]=o(`
`)),e("span",Tt,[n[1095]||(n[1095]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",xt,[s(a,{name:"SelectPortal"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "defer",
    "description": "<p>Defer the resolving of a Teleport target until other parts of the\\napplication have mounted (requires Vue 3.5.0+)</p>\\n<p><a href=\\"https://vuejs.org/guide/built-ins/teleport.html#deferred-teleport\\" target=\\"_blank\\">reference</a></p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>Disable teleport and render the component inline</p>\\n<p><a href=\\"https://vuejs.org/guide/built-ins/teleport.html#disabling-teleport\\" target=\\"_blank\\">reference</a></p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "to",
    "description": "<p>Vue native teleport component prop <code>:to</code></p>\\n<p><a href=\\"https://vuejs.org/guide/built-ins/teleport.html#basic-usage\\" target=\\"_blank\\">reference</a></p>\\n",
    "type": "string | HTMLElement",
    "required": false
  }
]`})]),default:l(()=>[n[1094]||(n[1094]=o("SelectPortal"))]),_:1})]),n[1096]||(n[1096]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1516]||(n[1516]=o(`
`)),e("span",kt,[n[1098]||(n[1098]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",qt,[s(a,{name:"SelectContent"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "align",
    "description": "<p>The preferred alignment against the trigger.\\nMay change when collisions occur.</p>\\n",
    "type": "\\"start\\" | \\"center\\" | \\"end\\"",
    "required": false
  },
  {
    "name": "alignOffset",
    "description": "<p>An offset in pixels from the <code>start</code> or <code>end</code> alignment options.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "arrowPadding",
    "description": "<p>The padding between the arrow and the edges of the content.\\nIf your content has border-radius, this will prevent it from\\noverflowing the corners.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "avoidCollisions",
    "description": "<p>When <code>true</code>, overrides the side and align preferences\\nto prevent collisions with boundary edges.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "bodyLock",
    "description": "<p>The document.body will be lock, and scrolling will be disabled.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "collisionBoundary",
    "description": "<p>The element used as the collision boundary. By default\\nthis is the viewport, though you can provide additional\\nelement(s) to be included in this check.</p>\\n",
    "type": "Element | (Element | null)[] | null",
    "required": false
  },
  {
    "name": "collisionPadding",
    "description": "<p>The distance in pixels from the boundary edges where collision\\ndetection should occur. Accepts a number (same for all sides),\\nor a partial padding object, for example: { top: 20, left: 20 }.</p>\\n",
    "type": "number | Partial<Record<\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\", number>>",
    "required": false
  },
  {
    "name": "disableUpdateOnLayoutShift",
    "description": "<p>Whether to disable the update position for the content when the layout shifted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "hideWhenDetached",
    "description": "<p>Whether to hide the content when the trigger becomes fully occluded.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "position",
    "description": "<p>The positioning mode to use</p>\\n<p><code>item-aligned (default)</code> - behaves similarly to a native MacOS menu by positioning content relative to the active item. &lt;br&gt;\\n<code>popper</code> - positions content in the same way as our other primitives, for example <code>Popover</code> or <code>DropdownMenu</code>.</p>\\n",
    "type": "\\"popper\\" | \\"item-aligned\\"",
    "required": false
  },
  {
    "name": "positionStrategy",
    "description": "<p>The type of CSS position property to use.</p>\\n",
    "type": "\\"fixed\\" | \\"absolute\\"",
    "required": false
  },
  {
    "name": "prioritizePosition",
    "description": "<p>Force content to be position within the viewport.</p>\\n<p>Might overlap the reference element, which may not be desired.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "reference",
    "description": "<p>The custom element or virtual element that will be set as the reference\\nto position the floating element.</p>\\n<p>If provided, it will replace the default anchor element.</p>\\n",
    "type": "ReferenceElement",
    "required": false
  },
  {
    "name": "side",
    "description": "<p>The preferred side of the trigger to render against when open.\\nWill be reversed when collisions occur and avoidCollisions\\nis enabled.</p>\\n",
    "type": "\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\"",
    "required": false
  },
  {
    "name": "sideOffset",
    "description": "<p>The distance in pixels from the trigger.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "sticky",
    "description": "<p>The sticky behavior on the align axis. <code>partial</code> will keep the\\ncontent in the boundary as long as the trigger is at least partially\\nin the boundary whilst &quot;always&quot; will keep the content in the boundary\\nregardless.</p>\\n",
    "type": "\\"partial\\" | \\"always\\"",
    "required": false
  },
  {
    "name": "updatePositionStrategy",
    "description": "<p>Strategy to update the position of the floating element on every animation frame.</p>\\n",
    "type": "\\"always\\" | \\"optimized\\"",
    "required": false
  }
]`}),s(t,{title:"emits",data:`[
  {
    "name": "closeAutoFocus",
    "description": "<p>Event handler called when auto-focusing on close.\\nCan be prevented.</p>\\n",
    "type": "[event: Event]"
  },
  {
    "name": "escapeKeyDown",
    "description": "<p>Event handler called when the escape key is down.\\nCan be prevented.</p>\\n",
    "type": "[event: KeyboardEvent]"
  },
  {
    "name": "pointerDownOutside",
    "description": "<p>Event handler called when a <code>pointerdown</code> event happens outside of the <code>DismissableLayer</code>.\\nCan be prevented.</p>\\n",
    "type": "[event: PointerDownOutsideEvent]"
  }
]`})]),default:l(()=>[n[1097]||(n[1097]=o("SelectContent"))]),_:1})])]),n[1517]||(n[1517]=o(`
`)),n[1518]||(n[1518]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"SelectContent"')],-1)),n[1519]||(n[1519]=o(`
`)),n[1520]||(n[1520]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          :"),e("span",{style:{color:"#B392F0"}},"side-offset"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#79B8FF"}},"5"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1521]||(n[1521]=o(`
`)),n[1522]||(n[1522]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        >")],-1)),n[1523]||(n[1523]=o(`
`)),e("span",Dt,[n[1100]||(n[1100]=e("span",{style:{color:"#E1E4E8"}},"          <",-1)),e("span",At,[s(a,{name:"SelectScrollUpButton"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1099]||(n[1099]=o("SelectScrollUpButton"))]),_:1})]),n[1101]||(n[1101]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1102]||(n[1102]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1103]||(n[1103]=e("span",{style:{color:"#9ECBFF"}},'"SelectScrollButton"',-1)),n[1104]||(n[1104]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1524]||(n[1524]=o(`
`)),n[1525]||(n[1525]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"            <"),e("span",{style:{color:"#85E89D"}},"Icon"),e("span",{style:{color:"#B392F0"}}," icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:chevron-up"'),e("span",{style:{color:"#E1E4E8"}}," />")],-1)),n[1526]||(n[1526]=o(`
`)),e("span",St,[n[1106]||(n[1106]=e("span",{style:{color:"#E1E4E8"}},"          </",-1)),e("span",Rt,[s(a,{name:"SelectScrollUpButton"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1105]||(n[1105]=o("SelectScrollUpButton"))]),_:1})]),n[1107]||(n[1107]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1527]||(n[1527]=o(`
`)),n[1528]||(n[1528]=e("span",{class:"line"},null,-1)),n[1529]||(n[1529]=o(`
`)),e("span",Vt,[n[1109]||(n[1109]=e("span",{style:{color:"#E1E4E8"}},"          <",-1)),e("span",It,[s(a,{name:"SelectViewport"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nonce",
    "description": "<p>Will add <code>nonce</code> attribute to the style tag which can be used by Content Security Policy. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code>.</p>\\n",
    "type": "string",
    "required": false
  }
]`})]),default:l(()=>[n[1108]||(n[1108]=o("SelectViewport"))]),_:1})]),n[1110]||(n[1110]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1111]||(n[1111]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1112]||(n[1112]=e("span",{style:{color:"#9ECBFF"}},'"SelectViewport"',-1)),n[1113]||(n[1113]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1530]||(n[1530]=o(`
`)),e("span",Pt,[n[1115]||(n[1115]=e("span",{style:{color:"#E1E4E8"}},"            <",-1)),e("span",Gt,[s(a,{name:"SelectItem"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the item.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "textValue",
    "description": "<p>Optional text used for typeahead purposes.</p>\\n<p>By default the typeahead behavior will use the <code>.textContent</code> of the <code>SelectItemText</code> part.</p>\\n<p>Use this when the content is complex, or you have non-textual content inside.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "value",
    "description": "<p>The value given as data when submitted with a <code>name</code>.</p>\\n",
    "type": "AcceptableValue",
    "required": true
  }
]`}),s(t,{title:"emits",data:`[
  {
    "name": "select",
    "description": "<p>Event handler called when the selecting item. &lt;br&gt; It can be prevented by calling <code>event.preventDefault</code>.</p>\\n",
    "type": "[event: SelectEvent<AcceptableValue>]"
  }
]`})]),default:l(()=>[n[1114]||(n[1114]=o("SelectItem"))]),_:1})])]),n[1531]||(n[1531]=o(`
`)),n[1532]||(n[1532]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"              v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"(option, index) "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," preferences"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1533]||(n[1533]=o(`
`)),n[1534]||(n[1534]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"index"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1535]||(n[1535]=o(`
`)),n[1536]||(n[1536]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"              class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"SelectItem"')],-1)),n[1537]||(n[1537]=o(`
`)),n[1538]||(n[1538]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              :"),e("span",{style:{color:"#B392F0"}},"value"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"option.locale"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1539]||(n[1539]=o(`
`)),n[1540]||(n[1540]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"            >")],-1)),n[1541]||(n[1541]=o(`
`)),e("span",Ht,[n[1117]||(n[1117]=e("span",{style:{color:"#E1E4E8"}},"              <",-1)),e("span",Mt,[s(a,{name:"SelectItemIndicator"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1116]||(n[1116]=o("SelectItemIndicator"))]),_:1})]),n[1118]||(n[1118]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1119]||(n[1119]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1120]||(n[1120]=e("span",{style:{color:"#9ECBFF"}},'"SelectItemIndicator"',-1)),n[1121]||(n[1121]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1542]||(n[1542]=o(`
`)),n[1543]||(n[1543]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                <"),e("span",{style:{color:"#85E89D"}},"Icon"),e("span",{style:{color:"#B392F0"}}," icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:check"'),e("span",{style:{color:"#E1E4E8"}}," />")],-1)),n[1544]||(n[1544]=o(`
`)),e("span",jt,[n[1123]||(n[1123]=e("span",{style:{color:"#E1E4E8"}},"              </",-1)),e("span",Wt,[s(a,{name:"SelectItemIndicator"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1122]||(n[1122]=o("SelectItemIndicator"))]),_:1})]),n[1124]||(n[1124]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1545]||(n[1545]=o(`
`)),e("span",Ot,[n[1126]||(n[1126]=e("span",{style:{color:"#E1E4E8"}},"              <",-1)),e("span",Lt,[s(a,{name:"SelectItemText"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1125]||(n[1125]=o("SelectItemText"))]),_:1})]),n[1127]||(n[1127]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1546]||(n[1546]=o(`
`)),n[1547]||(n[1547]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                {{ option.label }}")],-1)),n[1548]||(n[1548]=o(`
`)),e("span",Ut,[n[1129]||(n[1129]=e("span",{style:{color:"#E1E4E8"}},"              </",-1)),e("span",Nt,[s(a,{name:"SelectItemText"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1128]||(n[1128]=o("SelectItemText"))]),_:1})]),n[1130]||(n[1130]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1549]||(n[1549]=o(`
`)),e("span",$t,[n[1132]||(n[1132]=e("span",{style:{color:"#E1E4E8"}},"            </",-1)),e("span",zt,[s(a,{name:"SelectItem"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the item.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "textValue",
    "description": "<p>Optional text used for typeahead purposes.</p>\\n<p>By default the typeahead behavior will use the <code>.textContent</code> of the <code>SelectItemText</code> part.</p>\\n<p>Use this when the content is complex, or you have non-textual content inside.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "value",
    "description": "<p>The value given as data when submitted with a <code>name</code>.</p>\\n",
    "type": "AcceptableValue",
    "required": true
  }
]`}),s(t,{title:"emits",data:`[
  {
    "name": "select",
    "description": "<p>Event handler called when the selecting item. &lt;br&gt; It can be prevented by calling <code>event.preventDefault</code>.</p>\\n",
    "type": "[event: SelectEvent<AcceptableValue>]"
  }
]`})]),default:l(()=>[n[1131]||(n[1131]=o("SelectItem"))]),_:1})]),n[1133]||(n[1133]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1550]||(n[1550]=o(`
`)),e("span",Kt,[n[1135]||(n[1135]=e("span",{style:{color:"#E1E4E8"}},"          </",-1)),e("span",Zt,[s(a,{name:"SelectViewport"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nonce",
    "description": "<p>Will add <code>nonce</code> attribute to the style tag which can be used by Content Security Policy. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code>.</p>\\n",
    "type": "string",
    "required": false
  }
]`})]),default:l(()=>[n[1134]||(n[1134]=o("SelectViewport"))]),_:1})]),n[1136]||(n[1136]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1551]||(n[1551]=o(`
`)),n[1552]||(n[1552]=e("span",{class:"line"},null,-1)),n[1553]||(n[1553]=o(`
`)),e("span",Jt,[n[1138]||(n[1138]=e("span",{style:{color:"#E1E4E8"}},"          <",-1)),e("span",Yt,[s(a,{name:"SelectScrollDownButton"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1137]||(n[1137]=o("SelectScrollDownButton"))]),_:1})]),n[1139]||(n[1139]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1140]||(n[1140]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1141]||(n[1141]=e("span",{style:{color:"#9ECBFF"}},'"SelectScrollButton"',-1)),n[1142]||(n[1142]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1554]||(n[1554]=o(`
`)),n[1555]||(n[1555]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"            <"),e("span",{style:{color:"#85E89D"}},"Icon"),e("span",{style:{color:"#B392F0"}}," icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:chevron-down"'),e("span",{style:{color:"#E1E4E8"}}," />")],-1)),n[1556]||(n[1556]=o(`
`)),e("span",Qt,[n[1144]||(n[1144]=e("span",{style:{color:"#E1E4E8"}},"          </",-1)),e("span",Xt,[s(a,{name:"SelectScrollDownButton"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1143]||(n[1143]=o("SelectScrollDownButton"))]),_:1})]),n[1145]||(n[1145]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1557]||(n[1557]=o(`
`)),e("span",_t,[n[1147]||(n[1147]=e("span",{style:{color:"#E1E4E8"}},"        </",-1)),e("span",ea,[s(a,{name:"SelectContent"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "align",
    "description": "<p>The preferred alignment against the trigger.\\nMay change when collisions occur.</p>\\n",
    "type": "\\"start\\" | \\"center\\" | \\"end\\"",
    "required": false
  },
  {
    "name": "alignOffset",
    "description": "<p>An offset in pixels from the <code>start</code> or <code>end</code> alignment options.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "arrowPadding",
    "description": "<p>The padding between the arrow and the edges of the content.\\nIf your content has border-radius, this will prevent it from\\noverflowing the corners.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "avoidCollisions",
    "description": "<p>When <code>true</code>, overrides the side and align preferences\\nto prevent collisions with boundary edges.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "bodyLock",
    "description": "<p>The document.body will be lock, and scrolling will be disabled.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "collisionBoundary",
    "description": "<p>The element used as the collision boundary. By default\\nthis is the viewport, though you can provide additional\\nelement(s) to be included in this check.</p>\\n",
    "type": "Element | (Element | null)[] | null",
    "required": false
  },
  {
    "name": "collisionPadding",
    "description": "<p>The distance in pixels from the boundary edges where collision\\ndetection should occur. Accepts a number (same for all sides),\\nor a partial padding object, for example: { top: 20, left: 20 }.</p>\\n",
    "type": "number | Partial<Record<\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\", number>>",
    "required": false
  },
  {
    "name": "disableUpdateOnLayoutShift",
    "description": "<p>Whether to disable the update position for the content when the layout shifted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "hideWhenDetached",
    "description": "<p>Whether to hide the content when the trigger becomes fully occluded.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "position",
    "description": "<p>The positioning mode to use</p>\\n<p><code>item-aligned (default)</code> - behaves similarly to a native MacOS menu by positioning content relative to the active item. &lt;br&gt;\\n<code>popper</code> - positions content in the same way as our other primitives, for example <code>Popover</code> or <code>DropdownMenu</code>.</p>\\n",
    "type": "\\"popper\\" | \\"item-aligned\\"",
    "required": false
  },
  {
    "name": "positionStrategy",
    "description": "<p>The type of CSS position property to use.</p>\\n",
    "type": "\\"fixed\\" | \\"absolute\\"",
    "required": false
  },
  {
    "name": "prioritizePosition",
    "description": "<p>Force content to be position within the viewport.</p>\\n<p>Might overlap the reference element, which may not be desired.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "reference",
    "description": "<p>The custom element or virtual element that will be set as the reference\\nto position the floating element.</p>\\n<p>If provided, it will replace the default anchor element.</p>\\n",
    "type": "ReferenceElement",
    "required": false
  },
  {
    "name": "side",
    "description": "<p>The preferred side of the trigger to render against when open.\\nWill be reversed when collisions occur and avoidCollisions\\nis enabled.</p>\\n",
    "type": "\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\"",
    "required": false
  },
  {
    "name": "sideOffset",
    "description": "<p>The distance in pixels from the trigger.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "sticky",
    "description": "<p>The sticky behavior on the align axis. <code>partial</code> will keep the\\ncontent in the boundary as long as the trigger is at least partially\\nin the boundary whilst &quot;always&quot; will keep the content in the boundary\\nregardless.</p>\\n",
    "type": "\\"partial\\" | \\"always\\"",
    "required": false
  },
  {
    "name": "updatePositionStrategy",
    "description": "<p>Strategy to update the position of the floating element on every animation frame.</p>\\n",
    "type": "\\"always\\" | \\"optimized\\"",
    "required": false
  }
]`}),s(t,{title:"emits",data:`[
  {
    "name": "closeAutoFocus",
    "description": "<p>Event handler called when auto-focusing on close.\\nCan be prevented.</p>\\n",
    "type": "[event: Event]"
  },
  {
    "name": "escapeKeyDown",
    "description": "<p>Event handler called when the escape key is down.\\nCan be prevented.</p>\\n",
    "type": "[event: KeyboardEvent]"
  },
  {
    "name": "pointerDownOutside",
    "description": "<p>Event handler called when a <code>pointerdown</code> event happens outside of the <code>DismissableLayer</code>.\\nCan be prevented.</p>\\n",
    "type": "[event: PointerDownOutsideEvent]"
  }
]`})]),default:l(()=>[n[1146]||(n[1146]=o("SelectContent"))]),_:1})]),n[1148]||(n[1148]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1558]||(n[1558]=o(`
`)),e("span",na,[n[1150]||(n[1150]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",oa,[s(a,{name:"SelectPortal"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "defer",
    "description": "<p>Defer the resolving of a Teleport target until other parts of the\\napplication have mounted (requires Vue 3.5.0+)</p>\\n<p><a href=\\"https://vuejs.org/guide/built-ins/teleport.html#deferred-teleport\\" target=\\"_blank\\">reference</a></p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>Disable teleport and render the component inline</p>\\n<p><a href=\\"https://vuejs.org/guide/built-ins/teleport.html#disabling-teleport\\" target=\\"_blank\\">reference</a></p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "to",
    "description": "<p>Vue native teleport component prop <code>:to</code></p>\\n<p><a href=\\"https://vuejs.org/guide/built-ins/teleport.html#basic-usage\\" target=\\"_blank\\">reference</a></p>\\n",
    "type": "string | HTMLElement",
    "required": false
  }
]`})]),default:l(()=>[n[1149]||(n[1149]=o("SelectPortal"))]),_:1})]),n[1151]||(n[1151]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1559]||(n[1559]=o(`
`)),e("span",sa,[n[1153]||(n[1153]=e("span",{style:{color:"#E1E4E8"}},"    </",-1)),e("span",la,[s(a,{name:"SelectRoot"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "autocomplete",
    "description": "<p>Native html input <code>autocomplete</code> attribute.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "by",
    "description": "<p>Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared.</p>\\n",
    "type": "string | ((a: AcceptableValue, b: AcceptableValue) => boolean)",
    "required": false
  },
  {
    "name": "defaultOpen",
    "description": "<p>The open state of the select when it is initially rendered. Use when you do not need to control its open state.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "defaultValue",
    "description": "<p>The value of the select when initially rendered. Use when you do not need to control the state of the Select</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "dir",
    "description": "<p>The reading direction of the combobox when applicable. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with Select</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled value of the Select. Can be bind as <code>v-model</code>.</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "multiple",
    "description": "<p>Whether multiple options can be selected or not.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "name",
    "description": "<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "open",
    "description": "<p>The controlled open state of the Select. Can be bind as <code>v-model:open</code>.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "required",
    "description": "<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),s(t,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[value: AcceptableValue]"
  },
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the context menu changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current input values</p>\\n",
    "type": "AcceptableValue | AcceptableValue[] | undefined"
  },
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[1152]||(n[1152]=o("SelectRoot"))]),_:1})]),n[1154]||(n[1154]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1560]||(n[1560]=o(`
`)),e("span",ta,[n[1157]||(n[1157]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",aa,[s(a,{name:"Label"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"label\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "for",
    "description": "<p>The id of the element the label is associated with.</p>\\n",
    "type": "string",
    "required": false
  }
]`})]),default:l(()=>[n[1155]||(n[1155]=o("Label"))]),_:1})]),n[1158]||(n[1158]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1159]||(n[1159]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1160]||(n[1160]=e("span",{style:{color:"#9ECBFF"}},'"Label"',-1)),n[1161]||(n[1161]=e("span",{style:{color:"#E1E4E8"}},">Calendar</",-1)),e("span",ra,[s(a,{name:"Label"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"label\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "for",
    "description": "<p>The id of the element the label is associated with.</p>\\n",
    "type": "string",
    "required": false
  }
]`})]),default:l(()=>[n[1156]||(n[1156]=o("Label"))]),_:1})]),n[1162]||(n[1162]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1561]||(n[1561]=o(`
`)),e("span",pa,[n[1164]||(n[1164]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",ia,[s(a,{name:"SelectRoot"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "autocomplete",
    "description": "<p>Native html input <code>autocomplete</code> attribute.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "by",
    "description": "<p>Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared.</p>\\n",
    "type": "string | ((a: AcceptableValue, b: AcceptableValue) => boolean)",
    "required": false
  },
  {
    "name": "defaultOpen",
    "description": "<p>The open state of the select when it is initially rendered. Use when you do not need to control its open state.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "defaultValue",
    "description": "<p>The value of the select when initially rendered. Use when you do not need to control the state of the Select</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "dir",
    "description": "<p>The reading direction of the combobox when applicable. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with Select</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled value of the Select. Can be bind as <code>v-model</code>.</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "multiple",
    "description": "<p>Whether multiple options can be selected or not.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "name",
    "description": "<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "open",
    "description": "<p>The controlled open state of the Select. Can be bind as <code>v-model:open</code>.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "required",
    "description": "<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),s(t,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[value: AcceptableValue]"
  },
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the context menu changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current input values</p>\\n",
    "type": "AcceptableValue | AcceptableValue[] | undefined"
  },
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[1163]||(n[1163]=o("SelectRoot"))]),_:1})]),n[1165]||(n[1165]=e("span",{style:{color:"#B392F0"}}," v-model",-1)),n[1166]||(n[1166]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1167]||(n[1167]=e("span",{style:{color:"#9ECBFF"}},'"',-1)),n[1168]||(n[1168]=e("span",{style:{color:"#E1E4E8"}},"calendar",-1)),n[1169]||(n[1169]=e("span",{style:{color:"#9ECBFF"}},'"',-1)),n[1170]||(n[1170]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1562]||(n[1562]=o(`
`)),e("span",da,[n[1172]||(n[1172]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",Ea,[s(a,{name:"SelectTrigger"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "",
    "type": "boolean",
    "required": false
  },
  {
    "name": "reference",
    "description": "<p>The reference (or anchor) element that is being referred to for positioning.</p>\\n<p>If not provided will use the current component as anchor.</p>\\n",
    "type": "ReferenceElement",
    "required": false
  }
]`})]),default:l(()=>[n[1171]||(n[1171]=o("SelectTrigger"))]),_:1})])]),n[1563]||(n[1563]=o(`
`)),n[1564]||(n[1564]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"SelectTrigger"')],-1)),n[1565]||(n[1565]=o(`
`)),n[1566]||(n[1566]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        aria-label"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"Select a calendar"')],-1)),n[1567]||(n[1567]=o(`
`)),n[1568]||(n[1568]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      >")],-1)),n[1569]||(n[1569]=o(`
`)),e("span",ya,[n[1174]||(n[1174]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",ca,[s(a,{name:"SelectValue"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "placeholder",
    "description": "<p>The content that will be rendered inside the <code>SelectValue</code> when no <code>value</code> or <code>defaultValue</code> is set.</p>\\n",
    "type": "string",
    "required": false,
    "default": "\\"\\""
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "selectedLabel",
    "description": "",
    "type": "string[]"
  },
  {
    "name": "modelValue",
    "description": "",
    "type": "AcceptableValue | AcceptableValue[] | undefined"
  }
]`})]),default:l(()=>[n[1173]||(n[1173]=o("SelectValue"))]),_:1})]),n[1175]||(n[1175]=e("span",{style:{color:"#B392F0"}}," placeholder",-1)),n[1176]||(n[1176]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1177]||(n[1177]=e("span",{style:{color:"#9ECBFF"}},'"Please select a calendar"',-1)),n[1178]||(n[1178]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1570]||(n[1570]=o(`
`)),n[1571]||(n[1571]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          {{ calendars."),e("span",{style:{color:"#B392F0"}},"find"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"c"),e("span",{style:{color:"#F97583"}}," =>"),e("span",{style:{color:"#E1E4E8"}}," c.key "),e("span",{style:{color:"#F97583"}},"==="),e("span",{style:{color:"#E1E4E8"}}," calendar)?.name }}")],-1)),n[1572]||(n[1572]=o(`
`)),e("span",ua,[n[1180]||(n[1180]=e("span",{style:{color:"#E1E4E8"}},"        </",-1)),e("span",ma,[s(a,{name:"SelectValue"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "placeholder",
    "description": "<p>The content that will be rendered inside the <code>SelectValue</code> when no <code>value</code> or <code>defaultValue</code> is set.</p>\\n",
    "type": "string",
    "required": false,
    "default": "\\"\\""
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "selectedLabel",
    "description": "",
    "type": "string[]"
  },
  {
    "name": "modelValue",
    "description": "",
    "type": "AcceptableValue | AcceptableValue[] | undefined"
  }
]`})]),default:l(()=>[n[1179]||(n[1179]=o("SelectValue"))]),_:1})]),n[1181]||(n[1181]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1573]||(n[1573]=o(`
`)),n[1574]||(n[1574]=e("span",{class:"line"},null,-1)),n[1575]||(n[1575]=o(`
`)),n[1576]||(n[1576]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        <"),e("span",{style:{color:"#85E89D"}},"Icon")],-1)),n[1577]||(n[1577]=o(`
`)),n[1578]||(n[1578]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:chevron-down"')],-1)),n[1579]||(n[1579]=o(`
`)),n[1580]||(n[1580]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"Icon"')],-1)),n[1581]||(n[1581]=o(`
`)),n[1582]||(n[1582]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        />")],-1)),n[1583]||(n[1583]=o(`
`)),e("span",fa,[n[1183]||(n[1183]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",Fa,[s(a,{name:"SelectTrigger"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "",
    "type": "boolean",
    "required": false
  },
  {
    "name": "reference",
    "description": "<p>The reference (or anchor) element that is being referred to for positioning.</p>\\n<p>If not provided will use the current component as anchor.</p>\\n",
    "type": "ReferenceElement",
    "required": false
  }
]`})]),default:l(()=>[n[1182]||(n[1182]=o("SelectTrigger"))]),_:1})]),n[1184]||(n[1184]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1584]||(n[1584]=o(`
`)),n[1585]||(n[1585]=e("span",{class:"line"},null,-1)),n[1586]||(n[1586]=o(`
`)),e("span",ga,[n[1186]||(n[1186]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",Ca,[s(a,{name:"SelectPortal"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "defer",
    "description": "<p>Defer the resolving of a Teleport target until other parts of the\\napplication have mounted (requires Vue 3.5.0+)</p>\\n<p><a href=\\"https://vuejs.org/guide/built-ins/teleport.html#deferred-teleport\\" target=\\"_blank\\">reference</a></p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>Disable teleport and render the component inline</p>\\n<p><a href=\\"https://vuejs.org/guide/built-ins/teleport.html#disabling-teleport\\" target=\\"_blank\\">reference</a></p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "to",
    "description": "<p>Vue native teleport component prop <code>:to</code></p>\\n<p><a href=\\"https://vuejs.org/guide/built-ins/teleport.html#basic-usage\\" target=\\"_blank\\">reference</a></p>\\n",
    "type": "string | HTMLElement",
    "required": false
  }
]`})]),default:l(()=>[n[1185]||(n[1185]=o("SelectPortal"))]),_:1})]),n[1187]||(n[1187]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1587]||(n[1587]=o(`
`)),e("span",ba,[n[1189]||(n[1189]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",ha,[s(a,{name:"SelectContent"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "align",
    "description": "<p>The preferred alignment against the trigger.\\nMay change when collisions occur.</p>\\n",
    "type": "\\"start\\" | \\"center\\" | \\"end\\"",
    "required": false
  },
  {
    "name": "alignOffset",
    "description": "<p>An offset in pixels from the <code>start</code> or <code>end</code> alignment options.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "arrowPadding",
    "description": "<p>The padding between the arrow and the edges of the content.\\nIf your content has border-radius, this will prevent it from\\noverflowing the corners.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "avoidCollisions",
    "description": "<p>When <code>true</code>, overrides the side and align preferences\\nto prevent collisions with boundary edges.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "bodyLock",
    "description": "<p>The document.body will be lock, and scrolling will be disabled.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "collisionBoundary",
    "description": "<p>The element used as the collision boundary. By default\\nthis is the viewport, though you can provide additional\\nelement(s) to be included in this check.</p>\\n",
    "type": "Element | (Element | null)[] | null",
    "required": false
  },
  {
    "name": "collisionPadding",
    "description": "<p>The distance in pixels from the boundary edges where collision\\ndetection should occur. Accepts a number (same for all sides),\\nor a partial padding object, for example: { top: 20, left: 20 }.</p>\\n",
    "type": "number | Partial<Record<\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\", number>>",
    "required": false
  },
  {
    "name": "disableUpdateOnLayoutShift",
    "description": "<p>Whether to disable the update position for the content when the layout shifted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "hideWhenDetached",
    "description": "<p>Whether to hide the content when the trigger becomes fully occluded.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "position",
    "description": "<p>The positioning mode to use</p>\\n<p><code>item-aligned (default)</code> - behaves similarly to a native MacOS menu by positioning content relative to the active item. &lt;br&gt;\\n<code>popper</code> - positions content in the same way as our other primitives, for example <code>Popover</code> or <code>DropdownMenu</code>.</p>\\n",
    "type": "\\"popper\\" | \\"item-aligned\\"",
    "required": false
  },
  {
    "name": "positionStrategy",
    "description": "<p>The type of CSS position property to use.</p>\\n",
    "type": "\\"fixed\\" | \\"absolute\\"",
    "required": false
  },
  {
    "name": "prioritizePosition",
    "description": "<p>Force content to be position within the viewport.</p>\\n<p>Might overlap the reference element, which may not be desired.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "reference",
    "description": "<p>The custom element or virtual element that will be set as the reference\\nto position the floating element.</p>\\n<p>If provided, it will replace the default anchor element.</p>\\n",
    "type": "ReferenceElement",
    "required": false
  },
  {
    "name": "side",
    "description": "<p>The preferred side of the trigger to render against when open.\\nWill be reversed when collisions occur and avoidCollisions\\nis enabled.</p>\\n",
    "type": "\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\"",
    "required": false
  },
  {
    "name": "sideOffset",
    "description": "<p>The distance in pixels from the trigger.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "sticky",
    "description": "<p>The sticky behavior on the align axis. <code>partial</code> will keep the\\ncontent in the boundary as long as the trigger is at least partially\\nin the boundary whilst &quot;always&quot; will keep the content in the boundary\\nregardless.</p>\\n",
    "type": "\\"partial\\" | \\"always\\"",
    "required": false
  },
  {
    "name": "updatePositionStrategy",
    "description": "<p>Strategy to update the position of the floating element on every animation frame.</p>\\n",
    "type": "\\"always\\" | \\"optimized\\"",
    "required": false
  }
]`}),s(t,{title:"emits",data:`[
  {
    "name": "closeAutoFocus",
    "description": "<p>Event handler called when auto-focusing on close.\\nCan be prevented.</p>\\n",
    "type": "[event: Event]"
  },
  {
    "name": "escapeKeyDown",
    "description": "<p>Event handler called when the escape key is down.\\nCan be prevented.</p>\\n",
    "type": "[event: KeyboardEvent]"
  },
  {
    "name": "pointerDownOutside",
    "description": "<p>Event handler called when a <code>pointerdown</code> event happens outside of the <code>DismissableLayer</code>.\\nCan be prevented.</p>\\n",
    "type": "[event: PointerDownOutsideEvent]"
  }
]`})]),default:l(()=>[n[1188]||(n[1188]=o("SelectContent"))]),_:1})])]),n[1588]||(n[1588]=o(`
`)),n[1589]||(n[1589]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"SelectContent"')],-1)),n[1590]||(n[1590]=o(`
`)),n[1591]||(n[1591]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          :"),e("span",{style:{color:"#B392F0"}},"side-offset"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#79B8FF"}},"5"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1592]||(n[1592]=o(`
`)),n[1593]||(n[1593]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        >")],-1)),n[1594]||(n[1594]=o(`
`)),e("span",wa,[n[1191]||(n[1191]=e("span",{style:{color:"#E1E4E8"}},"          <",-1)),e("span",Ba,[s(a,{name:"SelectScrollUpButton"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1190]||(n[1190]=o("SelectScrollUpButton"))]),_:1})]),n[1192]||(n[1192]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1193]||(n[1193]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1194]||(n[1194]=e("span",{style:{color:"#9ECBFF"}},'"SelectScrollButton"',-1)),n[1195]||(n[1195]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1595]||(n[1595]=o(`
`)),n[1596]||(n[1596]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"            <"),e("span",{style:{color:"#85E89D"}},"Icon"),e("span",{style:{color:"#B392F0"}}," icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:chevron-up"'),e("span",{style:{color:"#E1E4E8"}}," />")],-1)),n[1597]||(n[1597]=o(`
`)),e("span",va,[n[1197]||(n[1197]=e("span",{style:{color:"#E1E4E8"}},"          </",-1)),e("span",Ta,[s(a,{name:"SelectScrollUpButton"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1196]||(n[1196]=o("SelectScrollUpButton"))]),_:1})]),n[1198]||(n[1198]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1598]||(n[1598]=o(`
`)),n[1599]||(n[1599]=e("span",{class:"line"},null,-1)),n[1600]||(n[1600]=o(`
`)),e("span",xa,[n[1200]||(n[1200]=e("span",{style:{color:"#E1E4E8"}},"          <",-1)),e("span",ka,[s(a,{name:"SelectViewport"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nonce",
    "description": "<p>Will add <code>nonce</code> attribute to the style tag which can be used by Content Security Policy. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code>.</p>\\n",
    "type": "string",
    "required": false
  }
]`})]),default:l(()=>[n[1199]||(n[1199]=o("SelectViewport"))]),_:1})]),n[1201]||(n[1201]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1202]||(n[1202]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1203]||(n[1203]=e("span",{style:{color:"#9ECBFF"}},'"SelectViewport"',-1)),n[1204]||(n[1204]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1601]||(n[1601]=o(`
`)),e("span",qa,[n[1206]||(n[1206]=e("span",{style:{color:"#E1E4E8"}},"            <",-1)),e("span",Da,[s(a,{name:"SelectLabel"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "for",
    "description": "",
    "type": "string",
    "required": false
  }
]`})]),default:l(()=>[n[1205]||(n[1205]=o("SelectLabel"))]),_:1})]),n[1207]||(n[1207]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1208]||(n[1208]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1209]||(n[1209]=e("span",{style:{color:"#9ECBFF"}},'"SelectLabel"',-1)),n[1210]||(n[1210]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1602]||(n[1602]=o(`
`)),n[1603]||(n[1603]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              Preferred")],-1)),n[1604]||(n[1604]=o(`
`)),e("span",Aa,[n[1212]||(n[1212]=e("span",{style:{color:"#E1E4E8"}},"            </",-1)),e("span",Sa,[s(a,{name:"SelectLabel"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "for",
    "description": "",
    "type": "string",
    "required": false
  }
]`})]),default:l(()=>[n[1211]||(n[1211]=o("SelectLabel"))]),_:1})]),n[1213]||(n[1213]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1605]||(n[1605]=o(`
`)),e("span",Ra,[n[1215]||(n[1215]=e("span",{style:{color:"#E1E4E8"}},"            <",-1)),e("span",Va,[s(a,{name:"SelectGroup"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1214]||(n[1214]=o("SelectGroup"))]),_:1})]),n[1216]||(n[1216]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1606]||(n[1606]=o(`
`)),e("span",Ia,[n[1218]||(n[1218]=e("span",{style:{color:"#E1E4E8"}},"              <",-1)),e("span",Pa,[s(a,{name:"SelectItem"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the item.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "textValue",
    "description": "<p>Optional text used for typeahead purposes.</p>\\n<p>By default the typeahead behavior will use the <code>.textContent</code> of the <code>SelectItemText</code> part.</p>\\n<p>Use this when the content is complex, or you have non-textual content inside.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "value",
    "description": "<p>The value given as data when submitted with a <code>name</code>.</p>\\n",
    "type": "AcceptableValue",
    "required": true
  }
]`}),s(t,{title:"emits",data:`[
  {
    "name": "select",
    "description": "<p>Event handler called when the selecting item. &lt;br&gt; It can be prevented by calling <code>event.preventDefault</code>.</p>\\n",
    "type": "[event: SelectEvent<AcceptableValue>]"
  }
]`})]),default:l(()=>[n[1217]||(n[1217]=o("SelectItem"))]),_:1})])]),n[1607]||(n[1607]=o(`
`)),n[1608]||(n[1608]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"                v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"(option, index) "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," preferredCalendars"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1609]||(n[1609]=o(`
`)),n[1610]||(n[1610]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"index"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1611]||(n[1611]=o(`
`)),n[1612]||(n[1612]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"                class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"SelectItem"')],-1)),n[1613]||(n[1613]=o(`
`)),n[1614]||(n[1614]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                :"),e("span",{style:{color:"#B392F0"}},"value"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"option"),e("span",{style:{color:"#F97583"}},"!"),e("span",{style:{color:"#E1E4E8"}},".key"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1615]||(n[1615]=o(`
`)),n[1616]||(n[1616]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              >")],-1)),n[1617]||(n[1617]=o(`
`)),e("span",Ga,[n[1220]||(n[1220]=e("span",{style:{color:"#E1E4E8"}},"                <",-1)),e("span",Ha,[s(a,{name:"SelectItemIndicator"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1219]||(n[1219]=o("SelectItemIndicator"))]),_:1})]),n[1221]||(n[1221]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1222]||(n[1222]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1223]||(n[1223]=e("span",{style:{color:"#9ECBFF"}},'"SelectItemIndicator"',-1)),n[1224]||(n[1224]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1618]||(n[1618]=o(`
`)),n[1619]||(n[1619]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                  <"),e("span",{style:{color:"#85E89D"}},"Icon"),e("span",{style:{color:"#B392F0"}}," icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:check"'),e("span",{style:{color:"#E1E4E8"}}," />")],-1)),n[1620]||(n[1620]=o(`
`)),e("span",Ma,[n[1226]||(n[1226]=e("span",{style:{color:"#E1E4E8"}},"                </",-1)),e("span",ja,[s(a,{name:"SelectItemIndicator"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1225]||(n[1225]=o("SelectItemIndicator"))]),_:1})]),n[1227]||(n[1227]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1621]||(n[1621]=o(`
`)),e("span",Wa,[n[1229]||(n[1229]=e("span",{style:{color:"#E1E4E8"}},"                <",-1)),e("span",Oa,[s(a,{name:"SelectItemText"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1228]||(n[1228]=o("SelectItemText"))]),_:1})]),n[1230]||(n[1230]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1622]||(n[1622]=o(`
`)),n[1623]||(n[1623]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                  {{ option"),e("span",{style:{color:"#F97583"}},"!"),e("span",{style:{color:"#E1E4E8"}},".name }}")],-1)),n[1624]||(n[1624]=o(`
`)),e("span",La,[n[1232]||(n[1232]=e("span",{style:{color:"#E1E4E8"}},"                </",-1)),e("span",Ua,[s(a,{name:"SelectItemText"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1231]||(n[1231]=o("SelectItemText"))]),_:1})]),n[1233]||(n[1233]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1625]||(n[1625]=o(`
`)),e("span",Na,[n[1235]||(n[1235]=e("span",{style:{color:"#E1E4E8"}},"              </",-1)),e("span",$a,[s(a,{name:"SelectItem"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the item.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "textValue",
    "description": "<p>Optional text used for typeahead purposes.</p>\\n<p>By default the typeahead behavior will use the <code>.textContent</code> of the <code>SelectItemText</code> part.</p>\\n<p>Use this when the content is complex, or you have non-textual content inside.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "value",
    "description": "<p>The value given as data when submitted with a <code>name</code>.</p>\\n",
    "type": "AcceptableValue",
    "required": true
  }
]`}),s(t,{title:"emits",data:`[
  {
    "name": "select",
    "description": "<p>Event handler called when the selecting item. &lt;br&gt; It can be prevented by calling <code>event.preventDefault</code>.</p>\\n",
    "type": "[event: SelectEvent<AcceptableValue>]"
  }
]`})]),default:l(()=>[n[1234]||(n[1234]=o("SelectItem"))]),_:1})]),n[1236]||(n[1236]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1626]||(n[1626]=o(`
`)),e("span",za,[n[1238]||(n[1238]=e("span",{style:{color:"#E1E4E8"}},"            </",-1)),e("span",Ka,[s(a,{name:"SelectGroup"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1237]||(n[1237]=o("SelectGroup"))]),_:1})]),n[1239]||(n[1239]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1627]||(n[1627]=o(`
`)),e("span",Za,[n[1241]||(n[1241]=e("span",{style:{color:"#E1E4E8"}},"            <",-1)),e("span",Ja,[s(a,{name:"SelectSeparator"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1240]||(n[1240]=o("SelectSeparator"))]),_:1})]),n[1242]||(n[1242]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1243]||(n[1243]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1244]||(n[1244]=e("span",{style:{color:"#9ECBFF"}},'"SelectSeparator"',-1)),n[1245]||(n[1245]=e("span",{style:{color:"#E1E4E8"}}," />",-1))]),n[1628]||(n[1628]=o(`
`)),e("span",Ya,[n[1247]||(n[1247]=e("span",{style:{color:"#E1E4E8"}},"            <",-1)),e("span",Qa,[s(a,{name:"SelectLabel"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "for",
    "description": "",
    "type": "string",
    "required": false
  }
]`})]),default:l(()=>[n[1246]||(n[1246]=o("SelectLabel"))]),_:1})]),n[1248]||(n[1248]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1249]||(n[1249]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1250]||(n[1250]=e("span",{style:{color:"#9ECBFF"}},'"SelectLabel"',-1)),n[1251]||(n[1251]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1629]||(n[1629]=o(`
`)),n[1630]||(n[1630]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              Other")],-1)),n[1631]||(n[1631]=o(`
`)),e("span",Xa,[n[1253]||(n[1253]=e("span",{style:{color:"#E1E4E8"}},"            </",-1)),e("span",_a,[s(a,{name:"SelectLabel"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "for",
    "description": "",
    "type": "string",
    "required": false
  }
]`})]),default:l(()=>[n[1252]||(n[1252]=o("SelectLabel"))]),_:1})]),n[1254]||(n[1254]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1632]||(n[1632]=o(`
`)),e("span",er,[n[1256]||(n[1256]=e("span",{style:{color:"#E1E4E8"}},"            <",-1)),e("span",nr,[s(a,{name:"SelectGroup"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1255]||(n[1255]=o("SelectGroup"))]),_:1})]),n[1257]||(n[1257]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1633]||(n[1633]=o(`
`)),e("span",or,[n[1259]||(n[1259]=e("span",{style:{color:"#E1E4E8"}},"              <",-1)),e("span",sr,[s(a,{name:"SelectItem"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the item.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "textValue",
    "description": "<p>Optional text used for typeahead purposes.</p>\\n<p>By default the typeahead behavior will use the <code>.textContent</code> of the <code>SelectItemText</code> part.</p>\\n<p>Use this when the content is complex, or you have non-textual content inside.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "value",
    "description": "<p>The value given as data when submitted with a <code>name</code>.</p>\\n",
    "type": "AcceptableValue",
    "required": true
  }
]`}),s(t,{title:"emits",data:`[
  {
    "name": "select",
    "description": "<p>Event handler called when the selecting item. &lt;br&gt; It can be prevented by calling <code>event.preventDefault</code>.</p>\\n",
    "type": "[event: SelectEvent<AcceptableValue>]"
  }
]`})]),default:l(()=>[n[1258]||(n[1258]=o("SelectItem"))]),_:1})])]),n[1634]||(n[1634]=o(`
`)),n[1635]||(n[1635]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"                v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"(option, index) "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," otherCalendars"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1636]||(n[1636]=o(`
`)),n[1637]||(n[1637]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"index"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1638]||(n[1638]=o(`
`)),n[1639]||(n[1639]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"                class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"SelectItem"')],-1)),n[1640]||(n[1640]=o(`
`)),n[1641]||(n[1641]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                :"),e("span",{style:{color:"#B392F0"}},"value"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"option.key"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1642]||(n[1642]=o(`
`)),n[1643]||(n[1643]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              >")],-1)),n[1644]||(n[1644]=o(`
`)),e("span",lr,[n[1261]||(n[1261]=e("span",{style:{color:"#E1E4E8"}},"                <",-1)),e("span",tr,[s(a,{name:"SelectItemIndicator"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1260]||(n[1260]=o("SelectItemIndicator"))]),_:1})]),n[1262]||(n[1262]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1263]||(n[1263]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1264]||(n[1264]=e("span",{style:{color:"#9ECBFF"}},'"SelectItemIndicator"',-1)),n[1265]||(n[1265]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1645]||(n[1645]=o(`
`)),n[1646]||(n[1646]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                  <"),e("span",{style:{color:"#85E89D"}},"Icon"),e("span",{style:{color:"#B392F0"}}," icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:check"'),e("span",{style:{color:"#E1E4E8"}}," />")],-1)),n[1647]||(n[1647]=o(`
`)),e("span",ar,[n[1267]||(n[1267]=e("span",{style:{color:"#E1E4E8"}},"                </",-1)),e("span",rr,[s(a,{name:"SelectItemIndicator"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1266]||(n[1266]=o("SelectItemIndicator"))]),_:1})]),n[1268]||(n[1268]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1648]||(n[1648]=o(`
`)),e("span",pr,[n[1270]||(n[1270]=e("span",{style:{color:"#E1E4E8"}},"                <",-1)),e("span",ir,[s(a,{name:"SelectItemText"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1269]||(n[1269]=o("SelectItemText"))]),_:1})]),n[1271]||(n[1271]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1649]||(n[1649]=o(`
`)),n[1650]||(n[1650]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                  {{ option.name }}")],-1)),n[1651]||(n[1651]=o(`
`)),e("span",dr,[n[1273]||(n[1273]=e("span",{style:{color:"#E1E4E8"}},"                </",-1)),e("span",Er,[s(a,{name:"SelectItemText"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1272]||(n[1272]=o("SelectItemText"))]),_:1})]),n[1274]||(n[1274]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1652]||(n[1652]=o(`
`)),e("span",yr,[n[1276]||(n[1276]=e("span",{style:{color:"#E1E4E8"}},"              </",-1)),e("span",cr,[s(a,{name:"SelectItem"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the item.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "textValue",
    "description": "<p>Optional text used for typeahead purposes.</p>\\n<p>By default the typeahead behavior will use the <code>.textContent</code> of the <code>SelectItemText</code> part.</p>\\n<p>Use this when the content is complex, or you have non-textual content inside.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "value",
    "description": "<p>The value given as data when submitted with a <code>name</code>.</p>\\n",
    "type": "AcceptableValue",
    "required": true
  }
]`}),s(t,{title:"emits",data:`[
  {
    "name": "select",
    "description": "<p>Event handler called when the selecting item. &lt;br&gt; It can be prevented by calling <code>event.preventDefault</code>.</p>\\n",
    "type": "[event: SelectEvent<AcceptableValue>]"
  }
]`})]),default:l(()=>[n[1275]||(n[1275]=o("SelectItem"))]),_:1})]),n[1277]||(n[1277]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1653]||(n[1653]=o(`
`)),e("span",ur,[n[1279]||(n[1279]=e("span",{style:{color:"#E1E4E8"}},"            </",-1)),e("span",mr,[s(a,{name:"SelectGroup"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1278]||(n[1278]=o("SelectGroup"))]),_:1})]),n[1280]||(n[1280]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1654]||(n[1654]=o(`
`)),e("span",fr,[n[1282]||(n[1282]=e("span",{style:{color:"#E1E4E8"}},"          </",-1)),e("span",Fr,[s(a,{name:"SelectViewport"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nonce",
    "description": "<p>Will add <code>nonce</code> attribute to the style tag which can be used by Content Security Policy. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code>.</p>\\n",
    "type": "string",
    "required": false
  }
]`})]),default:l(()=>[n[1281]||(n[1281]=o("SelectViewport"))]),_:1})]),n[1283]||(n[1283]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1655]||(n[1655]=o(`
`)),n[1656]||(n[1656]=e("span",{class:"line"},null,-1)),n[1657]||(n[1657]=o(`
`)),e("span",gr,[n[1285]||(n[1285]=e("span",{style:{color:"#E1E4E8"}},"          <",-1)),e("span",Cr,[s(a,{name:"SelectScrollDownButton"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1284]||(n[1284]=o("SelectScrollDownButton"))]),_:1})]),n[1286]||(n[1286]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1287]||(n[1287]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1288]||(n[1288]=e("span",{style:{color:"#9ECBFF"}},'"SelectScrollButton"',-1)),n[1289]||(n[1289]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1658]||(n[1658]=o(`
`)),n[1659]||(n[1659]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"            <"),e("span",{style:{color:"#85E89D"}},"Icon"),e("span",{style:{color:"#B392F0"}}," icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:chevron-down"'),e("span",{style:{color:"#E1E4E8"}}," />")],-1)),n[1660]||(n[1660]=o(`
`)),e("span",br,[n[1291]||(n[1291]=e("span",{style:{color:"#E1E4E8"}},"          </",-1)),e("span",hr,[s(a,{name:"SelectScrollDownButton"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1290]||(n[1290]=o("SelectScrollDownButton"))]),_:1})]),n[1292]||(n[1292]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1661]||(n[1661]=o(`
`)),e("span",wr,[n[1294]||(n[1294]=e("span",{style:{color:"#E1E4E8"}},"        </",-1)),e("span",Br,[s(a,{name:"SelectContent"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "align",
    "description": "<p>The preferred alignment against the trigger.\\nMay change when collisions occur.</p>\\n",
    "type": "\\"start\\" | \\"center\\" | \\"end\\"",
    "required": false
  },
  {
    "name": "alignOffset",
    "description": "<p>An offset in pixels from the <code>start</code> or <code>end</code> alignment options.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "arrowPadding",
    "description": "<p>The padding between the arrow and the edges of the content.\\nIf your content has border-radius, this will prevent it from\\noverflowing the corners.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "avoidCollisions",
    "description": "<p>When <code>true</code>, overrides the side and align preferences\\nto prevent collisions with boundary edges.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "bodyLock",
    "description": "<p>The document.body will be lock, and scrolling will be disabled.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "collisionBoundary",
    "description": "<p>The element used as the collision boundary. By default\\nthis is the viewport, though you can provide additional\\nelement(s) to be included in this check.</p>\\n",
    "type": "Element | (Element | null)[] | null",
    "required": false
  },
  {
    "name": "collisionPadding",
    "description": "<p>The distance in pixels from the boundary edges where collision\\ndetection should occur. Accepts a number (same for all sides),\\nor a partial padding object, for example: { top: 20, left: 20 }.</p>\\n",
    "type": "number | Partial<Record<\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\", number>>",
    "required": false
  },
  {
    "name": "disableUpdateOnLayoutShift",
    "description": "<p>Whether to disable the update position for the content when the layout shifted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "hideWhenDetached",
    "description": "<p>Whether to hide the content when the trigger becomes fully occluded.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "position",
    "description": "<p>The positioning mode to use</p>\\n<p><code>item-aligned (default)</code> - behaves similarly to a native MacOS menu by positioning content relative to the active item. &lt;br&gt;\\n<code>popper</code> - positions content in the same way as our other primitives, for example <code>Popover</code> or <code>DropdownMenu</code>.</p>\\n",
    "type": "\\"popper\\" | \\"item-aligned\\"",
    "required": false
  },
  {
    "name": "positionStrategy",
    "description": "<p>The type of CSS position property to use.</p>\\n",
    "type": "\\"fixed\\" | \\"absolute\\"",
    "required": false
  },
  {
    "name": "prioritizePosition",
    "description": "<p>Force content to be position within the viewport.</p>\\n<p>Might overlap the reference element, which may not be desired.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "reference",
    "description": "<p>The custom element or virtual element that will be set as the reference\\nto position the floating element.</p>\\n<p>If provided, it will replace the default anchor element.</p>\\n",
    "type": "ReferenceElement",
    "required": false
  },
  {
    "name": "side",
    "description": "<p>The preferred side of the trigger to render against when open.\\nWill be reversed when collisions occur and avoidCollisions\\nis enabled.</p>\\n",
    "type": "\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\"",
    "required": false
  },
  {
    "name": "sideOffset",
    "description": "<p>The distance in pixels from the trigger.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "sticky",
    "description": "<p>The sticky behavior on the align axis. <code>partial</code> will keep the\\ncontent in the boundary as long as the trigger is at least partially\\nin the boundary whilst &quot;always&quot; will keep the content in the boundary\\nregardless.</p>\\n",
    "type": "\\"partial\\" | \\"always\\"",
    "required": false
  },
  {
    "name": "updatePositionStrategy",
    "description": "<p>Strategy to update the position of the floating element on every animation frame.</p>\\n",
    "type": "\\"always\\" | \\"optimized\\"",
    "required": false
  }
]`}),s(t,{title:"emits",data:`[
  {
    "name": "closeAutoFocus",
    "description": "<p>Event handler called when auto-focusing on close.\\nCan be prevented.</p>\\n",
    "type": "[event: Event]"
  },
  {
    "name": "escapeKeyDown",
    "description": "<p>Event handler called when the escape key is down.\\nCan be prevented.</p>\\n",
    "type": "[event: KeyboardEvent]"
  },
  {
    "name": "pointerDownOutside",
    "description": "<p>Event handler called when a <code>pointerdown</code> event happens outside of the <code>DismissableLayer</code>.\\nCan be prevented.</p>\\n",
    "type": "[event: PointerDownOutsideEvent]"
  }
]`})]),default:l(()=>[n[1293]||(n[1293]=o("SelectContent"))]),_:1})]),n[1295]||(n[1295]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1662]||(n[1662]=o(`
`)),e("span",vr,[n[1297]||(n[1297]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",Tr,[s(a,{name:"SelectPortal"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "defer",
    "description": "<p>Defer the resolving of a Teleport target until other parts of the\\napplication have mounted (requires Vue 3.5.0+)</p>\\n<p><a href=\\"https://vuejs.org/guide/built-ins/teleport.html#deferred-teleport\\" target=\\"_blank\\">reference</a></p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>Disable teleport and render the component inline</p>\\n<p><a href=\\"https://vuejs.org/guide/built-ins/teleport.html#disabling-teleport\\" target=\\"_blank\\">reference</a></p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "to",
    "description": "<p>Vue native teleport component prop <code>:to</code></p>\\n<p><a href=\\"https://vuejs.org/guide/built-ins/teleport.html#basic-usage\\" target=\\"_blank\\">reference</a></p>\\n",
    "type": "string | HTMLElement",
    "required": false
  }
]`})]),default:l(()=>[n[1296]||(n[1296]=o("SelectPortal"))]),_:1})]),n[1298]||(n[1298]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1663]||(n[1663]=o(`
`)),e("span",xr,[n[1300]||(n[1300]=e("span",{style:{color:"#E1E4E8"}},"    </",-1)),e("span",kr,[s(a,{name:"SelectRoot"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "autocomplete",
    "description": "<p>Native html input <code>autocomplete</code> attribute.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "by",
    "description": "<p>Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared.</p>\\n",
    "type": "string | ((a: AcceptableValue, b: AcceptableValue) => boolean)",
    "required": false
  },
  {
    "name": "defaultOpen",
    "description": "<p>The open state of the select when it is initially rendered. Use when you do not need to control its open state.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "defaultValue",
    "description": "<p>The value of the select when initially rendered. Use when you do not need to control the state of the Select</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "dir",
    "description": "<p>The reading direction of the combobox when applicable. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with Select</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled value of the Select. Can be bind as <code>v-model</code>.</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "multiple",
    "description": "<p>Whether multiple options can be selected or not.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "name",
    "description": "<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "open",
    "description": "<p>The controlled open state of the Select. Can be bind as <code>v-model:open</code>.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "required",
    "description": "<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),s(t,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[value: AcceptableValue]"
  },
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the context menu changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current input values</p>\\n",
    "type": "AcceptableValue | AcceptableValue[] | undefined"
  },
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[1299]||(n[1299]=o("SelectRoot"))]),_:1})]),n[1301]||(n[1301]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1664]||(n[1664]=o(`
`)),e("span",qr,[n[1303]||(n[1303]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",Dr,[s(a,{name:"CalendarRoot"},{content:l(({})=>[s(t,{title:"slots",data:`[
  {
    "name": "date",
    "description": "<p>The current date of the placeholder</p>\\n",
    "type": "DateValue"
  },
  {
    "name": "grid",
    "description": "<p>The grid of dates</p>\\n",
    "type": "Grid<DateValue>[]"
  },
  {
    "name": "weekDays",
    "description": "<p>The days of the week</p>\\n",
    "type": "string[]"
  },
  {
    "name": "weekStartsOn",
    "description": "<p>The start of the week</p>\\n",
    "type": "0 | 1 | 2 | 3 | 4 | 5 | 6"
  },
  {
    "name": "locale",
    "description": "<p>The calendar locale</p>\\n",
    "type": "string"
  },
  {
    "name": "fixedWeeks",
    "description": "<p>Whether or not to always display 6 weeks in the calendar</p>\\n",
    "type": "boolean"
  },
  {
    "name": "modelValue",
    "description": "<p>The current date of the calendar</p>\\n",
    "type": "CalendarDate | CalendarDateTime | ZonedDateTime"
  }
]`})]),default:l(()=>[n[1302]||(n[1302]=o("CalendarRoot"))]),_:1})])]),n[1665]||(n[1665]=o(`
`)),n[1666]||(n[1666]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      v-slot"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"{ weekDays, grid }"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1667]||(n[1667]=o(`
`)),n[1668]||(n[1668]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      :"),e("span",{style:{color:"#B392F0"}},"model-value"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"value"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1669]||(n[1669]=o(`
`)),n[1670]||(n[1670]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      :"),e("span",{style:{color:"#B392F0"}},"locale"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"locale"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1671]||(n[1671]=o(`
`)),n[1672]||(n[1672]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"Calendar"')],-1)),n[1673]||(n[1673]=o(`
`)),n[1674]||(n[1674]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      fixed-weeks")],-1)),n[1675]||(n[1675]=o(`
`)),n[1676]||(n[1676]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    >")],-1)),n[1677]||(n[1677]=o(`
`)),e("span",Ar,[n[1305]||(n[1305]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",Sr,[s(a,{name:"CalendarHeader"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1304]||(n[1304]=o("CalendarHeader"))]),_:1})]),n[1306]||(n[1306]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1307]||(n[1307]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1308]||(n[1308]=e("span",{style:{color:"#9ECBFF"}},'"CalendarHeader"',-1)),n[1309]||(n[1309]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1678]||(n[1678]=o(`
`)),e("span",Rr,[n[1311]||(n[1311]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",Vr,[s(a,{name:"CalendarPrev"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "prevPage",
    "description": "<p>The function to be used for the prev page. Overwrites the <code>prevPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[1310]||(n[1310]=o("CalendarPrev"))]),_:1})])]),n[1679]||(n[1679]=o(`
`)),n[1680]||(n[1680]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"CalendarNavButton"')],-1)),n[1681]||(n[1681]=o(`
`)),n[1682]||(n[1682]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        >")],-1)),n[1683]||(n[1683]=o(`
`)),n[1684]||(n[1684]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          <"),e("span",{style:{color:"#85E89D"}},"Icon")],-1)),n[1685]||(n[1685]=o(`
`)),n[1686]||(n[1686]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"            icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:chevron-left"')],-1)),n[1687]||(n[1687]=o(`
`)),n[1688]||(n[1688]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"            class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"Icon"')],-1)),n[1689]||(n[1689]=o(`
`)),n[1690]||(n[1690]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          />")],-1)),n[1691]||(n[1691]=o(`
`)),e("span",Ir,[n[1313]||(n[1313]=e("span",{style:{color:"#E1E4E8"}},"        </",-1)),e("span",Pr,[s(a,{name:"CalendarPrev"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "prevPage",
    "description": "<p>The function to be used for the prev page. Overwrites the <code>prevPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[1312]||(n[1312]=o("CalendarPrev"))]),_:1})]),n[1314]||(n[1314]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1692]||(n[1692]=o(`
`)),e("span",Gr,[n[1316]||(n[1316]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",Hr,[s(a,{name:"CalendarHeading"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "headingValue",
    "description": "<p>Current month and year</p>\\n",
    "type": "string"
  }
]`})]),default:l(()=>[n[1315]||(n[1315]=o("CalendarHeading"))]),_:1})]),n[1317]||(n[1317]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1318]||(n[1318]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1319]||(n[1319]=e("span",{style:{color:"#9ECBFF"}},'"CalendarHeading"',-1)),n[1320]||(n[1320]=e("span",{style:{color:"#E1E4E8"}}," />",-1))]),n[1693]||(n[1693]=o(`
`)),e("span",Mr,[n[1322]||(n[1322]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",jr,[s(a,{name:"CalendarNext"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nextPage",
    "description": "<p>The function to be used for the next page. Overwrites the <code>nextPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[1321]||(n[1321]=o("CalendarNext"))]),_:1})])]),n[1694]||(n[1694]=o(`
`)),n[1695]||(n[1695]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"CalendarNavButton"')],-1)),n[1696]||(n[1696]=o(`
`)),n[1697]||(n[1697]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        >")],-1)),n[1698]||(n[1698]=o(`
`)),n[1699]||(n[1699]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          <"),e("span",{style:{color:"#85E89D"}},"Icon")],-1)),n[1700]||(n[1700]=o(`
`)),n[1701]||(n[1701]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"            icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:chevron-right"')],-1)),n[1702]||(n[1702]=o(`
`)),n[1703]||(n[1703]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"            class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"Icon"')],-1)),n[1704]||(n[1704]=o(`
`)),n[1705]||(n[1705]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          />")],-1)),n[1706]||(n[1706]=o(`
`)),e("span",Wr,[n[1324]||(n[1324]=e("span",{style:{color:"#E1E4E8"}},"        </",-1)),e("span",Or,[s(a,{name:"CalendarNext"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nextPage",
    "description": "<p>The function to be used for the next page. Overwrites the <code>nextPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[1323]||(n[1323]=o("CalendarNext"))]),_:1})]),n[1325]||(n[1325]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1707]||(n[1707]=o(`
`)),e("span",Lr,[n[1327]||(n[1327]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",Ur,[s(a,{name:"CalendarHeader"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1326]||(n[1326]=o("CalendarHeader"))]),_:1})]),n[1328]||(n[1328]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1708]||(n[1708]=o(`
`)),n[1709]||(n[1709]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      <"),e("span",{style:{color:"#85E89D"}},"div")],-1)),n[1710]||(n[1710]=o(`
`)),n[1711]||(n[1711]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"CalendarWrapper"')],-1)),n[1712]||(n[1712]=o(`
`)),n[1713]||(n[1713]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      >")],-1)),n[1714]||(n[1714]=o(`
`)),e("span",Nr,[n[1330]||(n[1330]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",$r,[s(a,{name:"CalendarGrid"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"table\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1329]||(n[1329]=o("CalendarGrid"))]),_:1})])]),n[1715]||(n[1715]=o(`
`)),n[1716]||(n[1716]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"          v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"month "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," grid"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1717]||(n[1717]=o(`
`)),n[1718]||(n[1718]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"month.value."),e("span",{style:{color:"#B392F0"}},"toString"),e("span",{style:{color:"#E1E4E8"}},"()"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1719]||(n[1719]=o(`
`)),n[1720]||(n[1720]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"CalendarGrid"')],-1)),n[1721]||(n[1721]=o(`
`)),n[1722]||(n[1722]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        >")],-1)),n[1723]||(n[1723]=o(`
`)),e("span",zr,[n[1332]||(n[1332]=e("span",{style:{color:"#E1E4E8"}},"          <",-1)),e("span",Kr,[s(a,{name:"CalendarGridHead"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"thead\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1331]||(n[1331]=o("CalendarGridHead"))]),_:1})]),n[1333]||(n[1333]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1724]||(n[1724]=o(`
`)),e("span",Zr,[n[1335]||(n[1335]=e("span",{style:{color:"#E1E4E8"}},"            <",-1)),e("span",Jr,[s(a,{name:"CalendarGridRow"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tr\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1334]||(n[1334]=o("CalendarGridRow"))]),_:1})]),n[1336]||(n[1336]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1337]||(n[1337]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1338]||(n[1338]=e("span",{style:{color:"#9ECBFF"}},'"CalendarGridRow"',-1)),n[1339]||(n[1339]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1725]||(n[1725]=o(`
`)),e("span",Yr,[n[1341]||(n[1341]=e("span",{style:{color:"#E1E4E8"}},"              <",-1)),e("span",Qr,[s(a,{name:"CalendarHeadCell"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"th\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1340]||(n[1340]=o("CalendarHeadCell"))]),_:1})])]),n[1726]||(n[1726]=o(`
`)),n[1727]||(n[1727]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"                v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"day "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," weekDays"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1728]||(n[1728]=o(`
`)),n[1729]||(n[1729]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"day"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1730]||(n[1730]=o(`
`)),n[1731]||(n[1731]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"                class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"CalendarHeadCell"')],-1)),n[1732]||(n[1732]=o(`
`)),n[1733]||(n[1733]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              >")],-1)),n[1734]||(n[1734]=o(`
`)),n[1735]||(n[1735]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                {{ day }}")],-1)),n[1736]||(n[1736]=o(`
`)),e("span",Xr,[n[1343]||(n[1343]=e("span",{style:{color:"#E1E4E8"}},"              </",-1)),e("span",_r,[s(a,{name:"CalendarHeadCell"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"th\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1342]||(n[1342]=o("CalendarHeadCell"))]),_:1})]),n[1344]||(n[1344]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1737]||(n[1737]=o(`
`)),e("span",ep,[n[1346]||(n[1346]=e("span",{style:{color:"#E1E4E8"}},"            </",-1)),e("span",np,[s(a,{name:"CalendarGridRow"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tr\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1345]||(n[1345]=o("CalendarGridRow"))]),_:1})]),n[1347]||(n[1347]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1738]||(n[1738]=o(`
`)),e("span",op,[n[1349]||(n[1349]=e("span",{style:{color:"#E1E4E8"}},"          </",-1)),e("span",sp,[s(a,{name:"CalendarGridHead"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"thead\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1348]||(n[1348]=o("CalendarGridHead"))]),_:1})]),n[1350]||(n[1350]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1739]||(n[1739]=o(`
`)),e("span",lp,[n[1352]||(n[1352]=e("span",{style:{color:"#E1E4E8"}},"          <",-1)),e("span",tp,[s(a,{name:"CalendarGridBody"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tbody\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1351]||(n[1351]=o("CalendarGridBody"))]),_:1})]),n[1353]||(n[1353]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1354]||(n[1354]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1355]||(n[1355]=e("span",{style:{color:"#9ECBFF"}},'"CalendarGridWrapper"',-1)),n[1356]||(n[1356]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1740]||(n[1740]=o(`
`)),e("span",ap,[n[1358]||(n[1358]=e("span",{style:{color:"#E1E4E8"}},"            <",-1)),e("span",rp,[s(a,{name:"CalendarGridRow"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tr\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1357]||(n[1357]=o("CalendarGridRow"))]),_:1})])]),n[1741]||(n[1741]=o(`
`)),n[1742]||(n[1742]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"              v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"(weekDates, index) "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," month.rows"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1743]||(n[1743]=o(`
`)),n[1744]||(n[1744]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"`weekDate-${'),e("span",{style:{color:"#E1E4E8"}},"index"),e("span",{style:{color:"#9ECBFF"}},'}`"')],-1)),n[1745]||(n[1745]=o(`
`)),n[1746]||(n[1746]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"              class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"CalendarGridRow"')],-1)),n[1747]||(n[1747]=o(`
`)),n[1748]||(n[1748]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"            >")],-1)),n[1749]||(n[1749]=o(`
`)),e("span",pp,[n[1360]||(n[1360]=e("span",{style:{color:"#E1E4E8"}},"              <",-1)),e("span",ip,[s(a,{name:"CalendarCell"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"td\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "date",
    "description": "<p>The date value for the cell</p>\\n",
    "type": "DateValue",
    "required": true
  }
]`})]),default:l(()=>[n[1359]||(n[1359]=o("CalendarCell"))]),_:1})])]),n[1750]||(n[1750]=o(`
`)),n[1751]||(n[1751]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"                v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"weekDate "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," weekDates"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1752]||(n[1752]=o(`
`)),n[1753]||(n[1753]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"weekDate."),e("span",{style:{color:"#B392F0"}},"toString"),e("span",{style:{color:"#E1E4E8"}},"()"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1754]||(n[1754]=o(`
`)),n[1755]||(n[1755]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                :"),e("span",{style:{color:"#B392F0"}},"date"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"weekDate"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1756]||(n[1756]=o(`
`)),n[1757]||(n[1757]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"                class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"CalendarCell"')],-1)),n[1758]||(n[1758]=o(`
`)),n[1759]||(n[1759]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              >")],-1)),n[1760]||(n[1760]=o(`
`)),e("span",dp,[n[1362]||(n[1362]=e("span",{style:{color:"#E1E4E8"}},"                <",-1)),e("span",Ep,[s(a,{name:"CalendarCellTrigger"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "day",
    "description": "<p>The date value provided to the cell trigger</p>\\n",
    "type": "DateValue",
    "required": true
  },
  {
    "name": "month",
    "description": "<p>The month in which the cell is rendered</p>\\n",
    "type": "DateValue",
    "required": true
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "dayValue",
    "description": "<p>Current day</p>\\n",
    "type": "string"
  },
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "selected",
    "description": "<p>Current selected state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "today",
    "description": "<p>Current today state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "outsideView",
    "description": "<p>Current outside view state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "outsideVisibleView",
    "description": "<p>Current outside visible view state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "unavailable",
    "description": "<p>Current unavailable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[1361]||(n[1361]=o("CalendarCellTrigger"))]),_:1})])]),n[1761]||(n[1761]=o(`
`)),n[1762]||(n[1762]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                  :"),e("span",{style:{color:"#B392F0"}},"day"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"weekDate"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1763]||(n[1763]=o(`
`)),n[1764]||(n[1764]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                  :"),e("span",{style:{color:"#B392F0"}},"month"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"month.value"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[1765]||(n[1765]=o(`
`)),n[1766]||(n[1766]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"                  class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"CalendarCellTrigger"')],-1)),n[1767]||(n[1767]=o(`
`)),n[1768]||(n[1768]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                />")],-1)),n[1769]||(n[1769]=o(`
`)),e("span",yp,[n[1364]||(n[1364]=e("span",{style:{color:"#E1E4E8"}},"              </",-1)),e("span",cp,[s(a,{name:"CalendarCell"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"td\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "date",
    "description": "<p>The date value for the cell</p>\\n",
    "type": "DateValue",
    "required": true
  }
]`})]),default:l(()=>[n[1363]||(n[1363]=o("CalendarCell"))]),_:1})]),n[1365]||(n[1365]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1770]||(n[1770]=o(`
`)),e("span",up,[n[1367]||(n[1367]=e("span",{style:{color:"#E1E4E8"}},"            </",-1)),e("span",mp,[s(a,{name:"CalendarGridRow"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tr\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1366]||(n[1366]=o("CalendarGridRow"))]),_:1})]),n[1368]||(n[1368]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1771]||(n[1771]=o(`
`)),e("span",fp,[n[1370]||(n[1370]=e("span",{style:{color:"#E1E4E8"}},"          </",-1)),e("span",Fp,[s(a,{name:"CalendarGridBody"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tbody\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1369]||(n[1369]=o("CalendarGridBody"))]),_:1})]),n[1371]||(n[1371]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1772]||(n[1772]=o(`
`)),e("span",gp,[n[1373]||(n[1373]=e("span",{style:{color:"#E1E4E8"}},"        </",-1)),e("span",Cp,[s(a,{name:"CalendarGrid"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"table\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1372]||(n[1372]=o("CalendarGrid"))]),_:1})]),n[1374]||(n[1374]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1773]||(n[1773]=o(`
`)),n[1774]||(n[1774]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      </"),e("span",{style:{color:"#85E89D"}},"div"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[1775]||(n[1775]=o(`
`)),e("span",bp,[n[1376]||(n[1376]=e("span",{style:{color:"#E1E4E8"}},"    </",-1)),e("span",hp,[s(a,{name:"CalendarRoot"},{content:l(({})=>[s(t,{title:"slots",data:`[
  {
    "name": "date",
    "description": "<p>The current date of the placeholder</p>\\n",
    "type": "DateValue"
  },
  {
    "name": "grid",
    "description": "<p>The grid of dates</p>\\n",
    "type": "Grid<DateValue>[]"
  },
  {
    "name": "weekDays",
    "description": "<p>The days of the week</p>\\n",
    "type": "string[]"
  },
  {
    "name": "weekStartsOn",
    "description": "<p>The start of the week</p>\\n",
    "type": "0 | 1 | 2 | 3 | 4 | 5 | 6"
  },
  {
    "name": "locale",
    "description": "<p>The calendar locale</p>\\n",
    "type": "string"
  },
  {
    "name": "fixedWeeks",
    "description": "<p>Whether or not to always display 6 weeks in the calendar</p>\\n",
    "type": "boolean"
  },
  {
    "name": "modelValue",
    "description": "<p>The current date of the calendar</p>\\n",
    "type": "CalendarDate | CalendarDateTime | ZonedDateTime"
  }
]`})]),default:l(()=>[n[1375]||(n[1375]=o("CalendarRoot"))]),_:1})]),n[1377]||(n[1377]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[1776]||(n[1776]=o(`
`)),n[1777]||(n[1777]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  </"),e("span",{style:{color:"#85E89D"}},"div"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[1778]||(n[1778]=o(`
`)),n[1779]||(n[1779]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),n[1782]||(n[1782]=e("div",{name:"styles.css",class:"language-css"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"css"),e("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"@import"),e("span",{style:{color:"#9ECBFF"}}," '@radix-ui/colors/black-alpha.css'"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"@import"),e("span",{style:{color:"#9ECBFF"}}," '@radix-ui/colors/grass.css'"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".Icon"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  width"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1.5"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1.5"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".Calendar"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  margin-top"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1.5"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-width"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#000000"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#ffffff"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  box-shadow"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#79B8FF"}}," 4"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," 6"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," -1"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," rgba"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"0.1"),e("span",{style:{color:"#E1E4E8"}},"), "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#79B8FF"}}," 2"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," 4"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," -1"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," rgba"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"0.06"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  padding"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"22"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarHeader"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  display"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"flex"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  justify-content"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"space-between"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  align-items"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarNavButton"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  display"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"inline-flex"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  justify-content"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  align-items"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  width"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"2.5"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"2.5"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#000000"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"transparent"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  cursor"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"pointer"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarNavButton:hover"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#ffffff"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#000000"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarHeading"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  font-weight"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"500"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#000000"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"15"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarWrapper"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  display"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"flex"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  padding-top"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  margin-top"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  flex-direction"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"column"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"@media"),e("span",{style:{color:"#E1E4E8"}}," ("),e("span",{style:{color:"#79B8FF"}},"min-width"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"640"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},") {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"  .CalendarWrapper"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"    margin-left"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"    margin-top"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"    flex-direction"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"row"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  }")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarGrid"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  margin-top"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0.25"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  width"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"100"),e("span",{style:{color:"#F97583"}},"%"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  user-select"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"none"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-collapse"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"collapse"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarGridRow"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  display"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"grid"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  margin-bottom"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0.25"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  grid-template-columns"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"repeat"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"4"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"minmax"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#F97583"}},"fr"),e("span",{style:{color:"#E1E4E8"}},"));")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  width"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"100"),e("span",{style:{color:"#F97583"}},"%"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarGridRow"),e("span",{style:{color:"#E1E4E8"}},"["),e("span",{style:{color:"#B392F0"}},"data-reka-calendar-month-view"),e("span",{style:{color:"#E1E4E8"}},"] {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  grid-template-columns"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"repeat"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"7"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"minmax"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#F97583"}},"fr"),e("span",{style:{color:"#E1E4E8"}},"));")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarHeadCell"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-radius"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0.375"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  font-size"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0.75"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  line-height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#000000"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  font-weight"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"400"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarCell"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  position"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"relative"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  font-size"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0.875"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  line-height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1.25"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  text-align"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarCellTrigger"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  display"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"flex"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  position"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"relative"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  padding"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0.5"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  justify-content"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  align-items"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-width"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"transparent"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  outline-style"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"none"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  font-size"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0.875"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  line-height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1.25"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  font-weight"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"400"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#000000"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  white-space"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"nowrap"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"transparent"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarCellTrigger:hover"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#000000"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarCellTrigger:focus"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  box-shadow"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#79B8FF"}}," 0"),e("span",{style:{color:"#79B8FF"}}," 0"),e("span",{style:{color:"#79B8FF"}}," 2"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," #000000"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarCellTrigger"),e("span",{style:{color:"#E1E4E8"}},"["),e("span",{style:{color:"#B392F0"}},"data-disabled"),e("span",{style:{color:"#E1E4E8"}},"] {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  cursor"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"none"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"rgba"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},","),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},","),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},","),e("span",{style:{color:"#79B8FF"}},"0.3"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarCellTrigger"),e("span",{style:{color:"#E1E4E8"}},"["),e("span",{style:{color:"#B392F0"}},"data-selected"),e("span",{style:{color:"#E1E4E8"}},"] {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#000000"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#ffffff"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  font-weight"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"500"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarCellTrigger"),e("span",{style:{color:"#E1E4E8"}},"["),e("span",{style:{color:"#B392F0"}},"data-selected"),e("span",{style:{color:"#E1E4E8"}},"]"),e("span",{style:{color:"#B392F0"}},"::before"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#FFFFFF"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarCellTrigger"),e("span",{style:{color:"#E1E4E8"}},"["),e("span",{style:{color:"#B392F0"}},"data-unavailable"),e("span",{style:{color:"#E1E4E8"}},"] {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"rgba"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},","),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},","),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},","),e("span",{style:{color:"#79B8FF"}},"0.3"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  text-decoration"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"line-through"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarCellTrigger::before"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  content"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#9ECBFF"}},"''"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  position"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"absolute"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  top"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"5"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  left"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  width"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0.25"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0.25"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-radius"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"9999"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#FFFFFF"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".CalendarCellTrigger"),e("span",{style:{color:"#E1E4E8"}},"["),e("span",{style:{color:"#B392F0"}},"data-today"),e("span",{style:{color:"#E1E4E8"}},"]"),e("span",{style:{color:"#B392F0"}},"::before"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  display"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"block"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--grass-9"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6A737D"}},"/* reset */")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"button"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  all"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"unset"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".Wrapper"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  display"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"flex"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  flex-direction"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"column"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  gap"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#F97583"}},"rem"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".Label"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"#fff"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SelectTrigger"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  display"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"inline-flex"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  align-items"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  justify-content"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-radius"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"4"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  padding"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#79B8FF"}}," 15"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  font-size"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"13"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  line-height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"35"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  gap"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"5"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"white"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--grass-11"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  box-shadow"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#79B8FF"}}," 2"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," 10"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--black-a7"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SelectTrigger:hover"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--mauve-3"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SelectTrigger:focus"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  box-shadow"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#79B8FF"}}," 0"),e("span",{style:{color:"#79B8FF"}}," 0"),e("span",{style:{color:"#79B8FF"}}," 2"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," black"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SelectTrigger"),e("span",{style:{color:"#E1E4E8"}},"["),e("span",{style:{color:"#B392F0"}},"data-placeholder"),e("span",{style:{color:"#E1E4E8"}},"] {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--grass-9"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SelectIcon"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"Var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--grass-11"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SelectContent"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  overflow"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"hidden"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"white"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-radius"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"6"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  box-shadow"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," 10"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," 38"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," -10"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," rgba"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"22"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"23"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"24"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"0.35"),e("span",{style:{color:"#E1E4E8"}},"), "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," 10"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," 20"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," -15"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," rgba"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#79B8FF"}},"22"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"23"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"24"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"0.2"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SelectViewport"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  padding"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"5"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SelectItem"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  font-size"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"13"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  line-height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--grass-11"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  border-radius"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"3"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  display"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"flex"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  align-items"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"25"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  padding"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#79B8FF"}}," 35"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#79B8FF"}}," 0"),e("span",{style:{color:"#79B8FF"}}," 25"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  position"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"relative"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  user-select"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"none"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SelectItem"),e("span",{style:{color:"#E1E4E8"}},"["),e("span",{style:{color:"#B392F0"}},"data-disabled"),e("span",{style:{color:"#E1E4E8"}},"] {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--mauve-8"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  pointer-events"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"none"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SelectItem"),e("span",{style:{color:"#E1E4E8"}},"["),e("span",{style:{color:"#B392F0"}},"data-highlighted"),e("span",{style:{color:"#E1E4E8"}},"] {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  outline"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"none"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--grass-9"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--grass-1"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SelectLabel"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  padding"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#79B8FF"}}," 25"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  font-size"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"12"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  line-height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"25"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--mauve-11"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SelectSeparator"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"1"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--grass-6"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  margin"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"5"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SelectItemIndicator"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  position"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"absolute"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  left"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  width"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"25"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  display"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"inline-flex"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  align-items"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  justify-content"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},".SelectScrollButton"),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  display"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"flex"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  align-items"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  justify-content"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"center"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  height"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"25"),e("span",{style:{color:"#F97583"}},"px"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  background-color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"white"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  color"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"var"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"--grass-11"),e("span",{style:{color:"#E1E4E8"}},");")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"  cursor"),e("span",{style:{color:"#E1E4E8"}},": "),e("span",{style:{color:"#79B8FF"}},"default"),e("span",{style:{color:"#E1E4E8"}},";")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")])])])],-1))]),tailwind:l(()=>[e("div",wp,[n[2497]||(n[2497]=e("button",{title:"Copy Code",class:"copy"},null,-1)),n[2498]||(n[2498]=e("span",{class:"lang"},"vue",-1)),e("pre",Bp,[e("code",null,[n[2091]||(n[2091]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"<"),e("span",{style:{color:"#85E89D"}},"script"),e("span",{style:{color:"#B392F0"}}," setup"),e("span",{style:{color:"#B392F0"}}," lang"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"ts"'),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[2092]||(n[2092]=o(`
`)),n[2093]||(n[2093]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#E1E4E8"}}," { Icon } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," '@iconify/vue'")],-1)),n[2094]||(n[2094]=o(`
`)),n[2095]||(n[2095]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#E1E4E8"}}," { createCalendar, getLocalTimeZone, toCalendar, today } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," '@internationalized/date'")],-1)),n[2096]||(n[2096]=o(`
`)),n[2097]||(n[2097]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#E1E4E8"}}," { CalendarCell, CalendarCellTrigger, CalendarGrid, CalendarGridBody, CalendarGridHead, CalendarGridRow, CalendarHeadCell, CalendarHeader, CalendarHeading, CalendarNext, CalendarPrev, CalendarRoot, Label, SelectContent, SelectGroup, SelectItem, SelectItemIndicator, SelectItemText, SelectLabel, SelectPortal, SelectRoot, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, SelectViewport } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," 'reka-ui'")],-1)),n[2098]||(n[2098]=o(`
`)),n[2099]||(n[2099]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"import"),e("span",{style:{color:"#E1E4E8"}}," { computed, ref } "),e("span",{style:{color:"#F97583"}},"from"),e("span",{style:{color:"#9ECBFF"}}," 'vue'")],-1)),n[2100]||(n[2100]=o(`
`)),n[2101]||(n[2101]=e("span",{class:"line"},null,-1)),n[2102]||(n[2102]=o(`
`)),n[2103]||(n[2103]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," preferences"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#E1E4E8"}}," [")],-1)),n[2104]||(n[2104]=o(`
`)),n[2105]||(n[2105]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { locale: "),e("span",{style:{color:"#9ECBFF"}},"'en-US'"),e("span",{style:{color:"#E1E4E8"}},", label: "),e("span",{style:{color:"#9ECBFF"}},"'Default'"),e("span",{style:{color:"#E1E4E8"}},", ordering: "),e("span",{style:{color:"#9ECBFF"}},"'gregory'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[2106]||(n[2106]=o(`
`)),n[2107]||(n[2107]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { label: "),e("span",{style:{color:"#9ECBFF"}},"'Arabic (Algeria)'"),e("span",{style:{color:"#E1E4E8"}},", locale: "),e("span",{style:{color:"#9ECBFF"}},"'ar-DZ'"),e("span",{style:{color:"#E1E4E8"}},", territories: "),e("span",{style:{color:"#9ECBFF"}},"'DJ DZ EH ER IQ JO KM LB LY MA MR OM PS SD SY TD TN YE'"),e("span",{style:{color:"#E1E4E8"}},", ordering: "),e("span",{style:{color:"#9ECBFF"}},"'gregory islamic islamic-civil islamic-tbla'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[2108]||(n[2108]=o(`
`)),n[2109]||(n[2109]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { label: "),e("span",{style:{color:"#9ECBFF"}},"'Arabic (United Arab Emirates)'"),e("span",{style:{color:"#E1E4E8"}},", locale: "),e("span",{style:{color:"#9ECBFF"}},"'ar-AE'"),e("span",{style:{color:"#E1E4E8"}},", territories: "),e("span",{style:{color:"#9ECBFF"}},"'AE BH KW QA'"),e("span",{style:{color:"#E1E4E8"}},", ordering: "),e("span",{style:{color:"#9ECBFF"}},"'gregory islamic-umalqura islamic islamic-civil islamic-tbla'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[2110]||(n[2110]=o(`
`)),n[2111]||(n[2111]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { label: "),e("span",{style:{color:"#9ECBFF"}},"'Arabic (Egypt)'"),e("span",{style:{color:"#E1E4E8"}},", locale: "),e("span",{style:{color:"#9ECBFF"}},"'AR-EG'"),e("span",{style:{color:"#E1E4E8"}},", territories: "),e("span",{style:{color:"#9ECBFF"}},"'EG'"),e("span",{style:{color:"#E1E4E8"}},", ordering: "),e("span",{style:{color:"#9ECBFF"}},"'gregory coptic islamic islamic-civil islamic-tbla'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[2112]||(n[2112]=o(`
`)),n[2113]||(n[2113]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { label: "),e("span",{style:{color:"#9ECBFF"}},"'Arabic (Saudi Arabia)'"),e("span",{style:{color:"#E1E4E8"}},", locale: "),e("span",{style:{color:"#9ECBFF"}},"'ar-SA'"),e("span",{style:{color:"#E1E4E8"}},", territories: "),e("span",{style:{color:"#9ECBFF"}},"'SA'"),e("span",{style:{color:"#E1E4E8"}},", ordering: "),e("span",{style:{color:"#9ECBFF"}},"'islamic-umalqura gregory islamic islamic-rgsa'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[2114]||(n[2114]=o(`
`)),n[2115]||(n[2115]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { label: "),e("span",{style:{color:"#9ECBFF"}},"'Farsi (Iran)'"),e("span",{style:{color:"#E1E4E8"}},", locale: "),e("span",{style:{color:"#9ECBFF"}},"'fa-IR'"),e("span",{style:{color:"#E1E4E8"}},", territories: "),e("span",{style:{color:"#9ECBFF"}},"'IR'"),e("span",{style:{color:"#E1E4E8"}},", ordering: "),e("span",{style:{color:"#9ECBFF"}},"'persian gregory islamic islamic-civil islamic-tbla'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[2116]||(n[2116]=o(`
`)),n[2117]||(n[2117]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { label: "),e("span",{style:{color:"#9ECBFF"}},"'Farsi (Afghanistan)'"),e("span",{style:{color:"#E1E4E8"}},", locale: "),e("span",{style:{color:"#9ECBFF"}},"'fa-AF'"),e("span",{style:{color:"#E1E4E8"}},", territories: "),e("span",{style:{color:"#9ECBFF"}},"'AF IR'"),e("span",{style:{color:"#E1E4E8"}},", ordering: "),e("span",{style:{color:"#9ECBFF"}},"'persian gregory islamic islamic-civil islamic-tbla'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[2118]||(n[2118]=o(`
`)),n[2119]||(n[2119]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { label: "),e("span",{style:{color:"#9ECBFF"}},"'Amharic (Ethiopia)'"),e("span",{style:{color:"#E1E4E8"}},", locale: "),e("span",{style:{color:"#9ECBFF"}},"'am-ET'"),e("span",{style:{color:"#E1E4E8"}},", territories: "),e("span",{style:{color:"#9ECBFF"}},"'ET'"),e("span",{style:{color:"#E1E4E8"}},", ordering: "),e("span",{style:{color:"#9ECBFF"}},"'gregory ethiopic ethioaa'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[2120]||(n[2120]=o(`
`)),n[2121]||(n[2121]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { label: "),e("span",{style:{color:"#9ECBFF"}},"'Hebrew (Israel)'"),e("span",{style:{color:"#E1E4E8"}},", locale: "),e("span",{style:{color:"#9ECBFF"}},"'he-IL'"),e("span",{style:{color:"#E1E4E8"}},", territories: "),e("span",{style:{color:"#9ECBFF"}},"'IL'"),e("span",{style:{color:"#E1E4E8"}},", ordering: "),e("span",{style:{color:"#9ECBFF"}},"'gregory hebrew islamic islamic-civil islamic-tbla'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[2122]||(n[2122]=o(`
`)),n[2123]||(n[2123]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { label: "),e("span",{style:{color:"#9ECBFF"}},"'Hindi (India)'"),e("span",{style:{color:"#E1E4E8"}},", locale: "),e("span",{style:{color:"#9ECBFF"}},"'hi-IN'"),e("span",{style:{color:"#E1E4E8"}},", territories: "),e("span",{style:{color:"#9ECBFF"}},"'IN'"),e("span",{style:{color:"#E1E4E8"}},", ordering: "),e("span",{style:{color:"#9ECBFF"}},"'gregory indian'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[2124]||(n[2124]=o(`
`)),n[2125]||(n[2125]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { label: "),e("span",{style:{color:"#9ECBFF"}},"'Japanese (Japan)'"),e("span",{style:{color:"#E1E4E8"}},", locale: "),e("span",{style:{color:"#9ECBFF"}},"'ja-JP'"),e("span",{style:{color:"#E1E4E8"}},", territories: "),e("span",{style:{color:"#9ECBFF"}},"'JP'"),e("span",{style:{color:"#E1E4E8"}},", ordering: "),e("span",{style:{color:"#9ECBFF"}},"'gregory japanese'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[2126]||(n[2126]=o(`
`)),n[2127]||(n[2127]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { label: "),e("span",{style:{color:"#9ECBFF"}},"'Thai (Thailand)'"),e("span",{style:{color:"#E1E4E8"}},", locale: "),e("span",{style:{color:"#9ECBFF"}},"'th-TH'"),e("span",{style:{color:"#E1E4E8"}},", territories: "),e("span",{style:{color:"#9ECBFF"}},"'TH'"),e("span",{style:{color:"#E1E4E8"}},", ordering: "),e("span",{style:{color:"#9ECBFF"}},"'buddhist gregory'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[2128]||(n[2128]=o(`
`)),n[2129]||(n[2129]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { label: "),e("span",{style:{color:"#9ECBFF"}},"'Chinese (Taiwan)'"),e("span",{style:{color:"#E1E4E8"}},", locale: "),e("span",{style:{color:"#9ECBFF"}},"'zh-TW'"),e("span",{style:{color:"#E1E4E8"}},", territories: "),e("span",{style:{color:"#9ECBFF"}},"'TW'"),e("span",{style:{color:"#E1E4E8"}},", ordering: "),e("span",{style:{color:"#9ECBFF"}},"'gregory roc chinese'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[2130]||(n[2130]=o(`
`)),n[2131]||(n[2131]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"]")],-1)),n[2132]||(n[2132]=o(`
`)),n[2133]||(n[2133]=e("span",{class:"line"},null,-1)),n[2134]||(n[2134]=o(`
`)),n[2135]||(n[2135]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," calendars"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#E1E4E8"}}," [")],-1)),n[2136]||(n[2136]=o(`
`)),n[2137]||(n[2137]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { key: "),e("span",{style:{color:"#9ECBFF"}},"'gregory'"),e("span",{style:{color:"#E1E4E8"}},", name: "),e("span",{style:{color:"#9ECBFF"}},"'Gregorian'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[2138]||(n[2138]=o(`
`)),n[2139]||(n[2139]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { key: "),e("span",{style:{color:"#9ECBFF"}},"'japanese'"),e("span",{style:{color:"#E1E4E8"}},", name: "),e("span",{style:{color:"#9ECBFF"}},"'Japanese'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[2140]||(n[2140]=o(`
`)),n[2141]||(n[2141]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { key: "),e("span",{style:{color:"#9ECBFF"}},"'buddhist'"),e("span",{style:{color:"#E1E4E8"}},", name: "),e("span",{style:{color:"#9ECBFF"}},"'Buddhist'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[2142]||(n[2142]=o(`
`)),n[2143]||(n[2143]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { key: "),e("span",{style:{color:"#9ECBFF"}},"'roc'"),e("span",{style:{color:"#E1E4E8"}},", name: "),e("span",{style:{color:"#9ECBFF"}},"'Taiwan'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[2144]||(n[2144]=o(`
`)),n[2145]||(n[2145]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { key: "),e("span",{style:{color:"#9ECBFF"}},"'persian'"),e("span",{style:{color:"#E1E4E8"}},", name: "),e("span",{style:{color:"#9ECBFF"}},"'Persian'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[2146]||(n[2146]=o(`
`)),n[2147]||(n[2147]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { key: "),e("span",{style:{color:"#9ECBFF"}},"'indian'"),e("span",{style:{color:"#E1E4E8"}},", name: "),e("span",{style:{color:"#9ECBFF"}},"'Indian'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[2148]||(n[2148]=o(`
`)),n[2149]||(n[2149]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { key: "),e("span",{style:{color:"#9ECBFF"}},"'islamic-umalqura'"),e("span",{style:{color:"#E1E4E8"}},", name: "),e("span",{style:{color:"#9ECBFF"}},"'Islamic (Umm al-Qura)'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[2150]||(n[2150]=o(`
`)),n[2151]||(n[2151]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { key: "),e("span",{style:{color:"#9ECBFF"}},"'islamic-civil'"),e("span",{style:{color:"#E1E4E8"}},", name: "),e("span",{style:{color:"#9ECBFF"}},"'Islamic Civil'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[2152]||(n[2152]=o(`
`)),n[2153]||(n[2153]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { key: "),e("span",{style:{color:"#9ECBFF"}},"'islamic-tbla'"),e("span",{style:{color:"#E1E4E8"}},", name: "),e("span",{style:{color:"#9ECBFF"}},"'Islamic Tabular'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[2154]||(n[2154]=o(`
`)),n[2155]||(n[2155]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { key: "),e("span",{style:{color:"#9ECBFF"}},"'hebrew'"),e("span",{style:{color:"#E1E4E8"}},", name: "),e("span",{style:{color:"#9ECBFF"}},"'Hebrew'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[2156]||(n[2156]=o(`
`)),n[2157]||(n[2157]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { key: "),e("span",{style:{color:"#9ECBFF"}},"'coptic'"),e("span",{style:{color:"#E1E4E8"}},", name: "),e("span",{style:{color:"#9ECBFF"}},"'Coptic'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[2158]||(n[2158]=o(`
`)),n[2159]||(n[2159]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { key: "),e("span",{style:{color:"#9ECBFF"}},"'ethiopic'"),e("span",{style:{color:"#E1E4E8"}},", name: "),e("span",{style:{color:"#9ECBFF"}},"'Ethiopic'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[2160]||(n[2160]=o(`
`)),n[2161]||(n[2161]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  { key: "),e("span",{style:{color:"#9ECBFF"}},"'ethioaa'"),e("span",{style:{color:"#E1E4E8"}},", name: "),e("span",{style:{color:"#9ECBFF"}},"'Ethiopic (Amete Alem)'"),e("span",{style:{color:"#E1E4E8"}}," },")],-1)),n[2162]||(n[2162]=o(`
`)),n[2163]||(n[2163]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"]")],-1)),n[2164]||(n[2164]=o(`
`)),n[2165]||(n[2165]=e("span",{class:"line"},null,-1)),n[2166]||(n[2166]=o(`
`)),n[2167]||(n[2167]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," locale"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#B392F0"}}," ref"),e("span",{style:{color:"#E1E4E8"}},"(preferences["),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},"].locale)")],-1)),n[2168]||(n[2168]=o(`
`)),n[2169]||(n[2169]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," calendar"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#B392F0"}}," ref"),e("span",{style:{color:"#E1E4E8"}},"(calendars["),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},"].key)")],-1)),n[2170]||(n[2170]=o(`
`)),n[2171]||(n[2171]=e("span",{class:"line"},null,-1)),n[2172]||(n[2172]=o(`
`)),n[2173]||(n[2173]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," pref"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#B392F0"}}," computed"),e("span",{style:{color:"#E1E4E8"}},"(() "),e("span",{style:{color:"#F97583"}},"=>"),e("span",{style:{color:"#E1E4E8"}}," preferences."),e("span",{style:{color:"#B392F0"}},"find"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"p"),e("span",{style:{color:"#F97583"}}," =>"),e("span",{style:{color:"#E1E4E8"}}," p.locale "),e("span",{style:{color:"#F97583"}},"==="),e("span",{style:{color:"#E1E4E8"}}," locale.value))")],-1)),n[2174]||(n[2174]=o(`
`)),n[2175]||(n[2175]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," preferredCalendars"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#B392F0"}}," computed"),e("span",{style:{color:"#E1E4E8"}},"(() "),e("span",{style:{color:"#F97583"}},"=>"),e("span",{style:{color:"#E1E4E8"}}," pref.value "),e("span",{style:{color:"#F97583"}},"?"),e("span",{style:{color:"#E1E4E8"}}," pref.value.ordering."),e("span",{style:{color:"#B392F0"}},"split"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#9ECBFF"}},"' '"),e("span",{style:{color:"#E1E4E8"}},")."),e("span",{style:{color:"#B392F0"}},"map"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"p"),e("span",{style:{color:"#F97583"}}," =>"),e("span",{style:{color:"#E1E4E8"}}," calendars."),e("span",{style:{color:"#B392F0"}},"find"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"c"),e("span",{style:{color:"#F97583"}}," =>"),e("span",{style:{color:"#E1E4E8"}}," c.key "),e("span",{style:{color:"#F97583"}},"==="),e("span",{style:{color:"#E1E4E8"}}," p))."),e("span",{style:{color:"#B392F0"}},"filter"),e("span",{style:{color:"#E1E4E8"}},"(Boolean) "),e("span",{style:{color:"#F97583"}},":"),e("span",{style:{color:"#E1E4E8"}}," [calendars["),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},"]])")],-1)),n[2176]||(n[2176]=o(`
`)),n[2177]||(n[2177]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," otherCalendars"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#B392F0"}}," computed"),e("span",{style:{color:"#E1E4E8"}},"(() "),e("span",{style:{color:"#F97583"}},"=>"),e("span",{style:{color:"#E1E4E8"}}," calendars."),e("span",{style:{color:"#B392F0"}},"filter"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"c"),e("span",{style:{color:"#F97583"}}," =>"),e("span",{style:{color:"#F97583"}}," !"),e("span",{style:{color:"#E1E4E8"}},"preferredCalendars.value."),e("span",{style:{color:"#B392F0"}},"some"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"p"),e("span",{style:{color:"#F97583"}}," =>"),e("span",{style:{color:"#E1E4E8"}}," p"),e("span",{style:{color:"#F97583"}},"!"),e("span",{style:{color:"#E1E4E8"}},".key "),e("span",{style:{color:"#F97583"}},"==="),e("span",{style:{color:"#E1E4E8"}}," c.key)))")],-1)),n[2178]||(n[2178]=o(`
`)),n[2179]||(n[2179]=e("span",{class:"line"},null,-1)),n[2180]||(n[2180]=o(`
`)),n[2181]||(n[2181]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"function"),e("span",{style:{color:"#B392F0"}}," updateLocale"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"newLocale"),e("span",{style:{color:"#F97583"}},":"),e("span",{style:{color:"#79B8FF"}}," string"),e("span",{style:{color:"#E1E4E8"}},") {")],-1)),n[2182]||(n[2182]=o(`
`)),n[2183]||(n[2183]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  locale.value "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#E1E4E8"}}," newLocale")],-1)),n[2184]||(n[2184]=o(`
`)),n[2185]||(n[2185]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  calendar.value "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#E1E4E8"}}," pref.value"),e("span",{style:{color:"#F97583"}},"!"),e("span",{style:{color:"#E1E4E8"}},".ordering."),e("span",{style:{color:"#B392F0"}},"split"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#9ECBFF"}},"' '"),e("span",{style:{color:"#E1E4E8"}},")["),e("span",{style:{color:"#79B8FF"}},"0"),e("span",{style:{color:"#E1E4E8"}},"]")],-1)),n[2186]||(n[2186]=o(`
`)),n[2187]||(n[2187]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")],-1)),n[2188]||(n[2188]=o(`
`)),n[2189]||(n[2189]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#79B8FF"}}," value"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#B392F0"}}," computed"),e("span",{style:{color:"#E1E4E8"}},"(() "),e("span",{style:{color:"#F97583"}},"=>"),e("span",{style:{color:"#B392F0"}}," toCalendar"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#B392F0"}},"today"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#B392F0"}},"getLocalTimeZone"),e("span",{style:{color:"#E1E4E8"}},"()), "),e("span",{style:{color:"#B392F0"}},"createCalendar"),e("span",{style:{color:"#E1E4E8"}},"(calendar.value)))")],-1)),n[2190]||(n[2190]=o(`
`)),n[2191]||(n[2191]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"script"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[2192]||(n[2192]=o(`
`)),n[2193]||(n[2193]=e("span",{class:"line"},null,-1)),n[2194]||(n[2194]=o(`
`)),n[2195]||(n[2195]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"<"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[2196]||(n[2196]=o(`
`)),n[2197]||(n[2197]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  <"),e("span",{style:{color:"#85E89D"}},"div"),e("span",{style:{color:"#B392F0"}}," class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"flex flex-col gap-4"'),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[2198]||(n[2198]=o(`
`)),e("span",vp,[n[1785]||(n[1785]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",Tp,[s(a,{name:"Label"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"label\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "for",
    "description": "<p>The id of the element the label is associated with.</p>\\n",
    "type": "string",
    "required": false
  }
]`})]),default:l(()=>[n[1783]||(n[1783]=o("Label"))]),_:1})]),n[1786]||(n[1786]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1787]||(n[1787]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1788]||(n[1788]=e("span",{style:{color:"#9ECBFF"}},'"text-white"',-1)),n[1789]||(n[1789]=e("span",{style:{color:"#E1E4E8"}},">Locale</",-1)),e("span",xp,[s(a,{name:"Label"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"label\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "for",
    "description": "<p>The id of the element the label is associated with.</p>\\n",
    "type": "string",
    "required": false
  }
]`})]),default:l(()=>[n[1784]||(n[1784]=o("Label"))]),_:1})]),n[1790]||(n[1790]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2199]||(n[2199]=o(`
`)),e("span",kp,[n[1792]||(n[1792]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",qp,[s(a,{name:"SelectRoot"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "autocomplete",
    "description": "<p>Native html input <code>autocomplete</code> attribute.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "by",
    "description": "<p>Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared.</p>\\n",
    "type": "string | ((a: AcceptableValue, b: AcceptableValue) => boolean)",
    "required": false
  },
  {
    "name": "defaultOpen",
    "description": "<p>The open state of the select when it is initially rendered. Use when you do not need to control its open state.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "defaultValue",
    "description": "<p>The value of the select when initially rendered. Use when you do not need to control the state of the Select</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "dir",
    "description": "<p>The reading direction of the combobox when applicable. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with Select</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled value of the Select. Can be bind as <code>v-model</code>.</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "multiple",
    "description": "<p>Whether multiple options can be selected or not.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "name",
    "description": "<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "open",
    "description": "<p>The controlled open state of the Select. Can be bind as <code>v-model:open</code>.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "required",
    "description": "<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),s(t,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[value: AcceptableValue]"
  },
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the context menu changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current input values</p>\\n",
    "type": "AcceptableValue | AcceptableValue[] | undefined"
  },
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[1791]||(n[1791]=o("SelectRoot"))]),_:1})])]),n[2200]||(n[2200]=o(`
`)),n[2201]||(n[2201]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      v-model"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"locale"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[2202]||(n[2202]=o(`
`)),n[2203]||(n[2203]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      @"),e("span",{style:{color:"#B392F0"}},"update"),e("span",{style:{color:"#E1E4E8"}},":"),e("span",{style:{color:"#B392F0"}},"model-value"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"updateLocale"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[2204]||(n[2204]=o(`
`)),n[2205]||(n[2205]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    >")],-1)),n[2206]||(n[2206]=o(`
`)),e("span",Dp,[n[1794]||(n[1794]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",Ap,[s(a,{name:"SelectTrigger"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "",
    "type": "boolean",
    "required": false
  },
  {
    "name": "reference",
    "description": "<p>The reference (or anchor) element that is being referred to for positioning.</p>\\n<p>If not provided will use the current component as anchor.</p>\\n",
    "type": "ReferenceElement",
    "required": false
  }
]`})]),default:l(()=>[n[1793]||(n[1793]=o("SelectTrigger"))]),_:1})])]),n[2207]||(n[2207]=o(`
`)),n[2208]||(n[2208]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"inline-flex min-w-[160px] items-center justify-between rounded-md px-[15px] text-xs leading-none h-[35px] gap-[5px] bg-white text-grass11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-green9 outline-none"')],-1)),n[2209]||(n[2209]=o(`
`)),n[2210]||(n[2210]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        aria-label"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"Select a locale"')],-1)),n[2211]||(n[2211]=o(`
`)),n[2212]||(n[2212]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      >")],-1)),n[2213]||(n[2213]=o(`
`)),e("span",Sp,[n[1796]||(n[1796]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",Rp,[s(a,{name:"SelectValue"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "placeholder",
    "description": "<p>The content that will be rendered inside the <code>SelectValue</code> when no <code>value</code> or <code>defaultValue</code> is set.</p>\\n",
    "type": "string",
    "required": false,
    "default": "\\"\\""
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "selectedLabel",
    "description": "",
    "type": "string[]"
  },
  {
    "name": "modelValue",
    "description": "",
    "type": "AcceptableValue | AcceptableValue[] | undefined"
  }
]`})]),default:l(()=>[n[1795]||(n[1795]=o("SelectValue"))]),_:1})]),n[1797]||(n[1797]=e("span",{style:{color:"#B392F0"}}," placeholder",-1)),n[1798]||(n[1798]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1799]||(n[1799]=e("span",{style:{color:"#9ECBFF"}},'"Please select a locale"',-1)),n[1800]||(n[1800]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2214]||(n[2214]=o(`
`)),n[2215]||(n[2215]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          {{ pref"),e("span",{style:{color:"#F97583"}},"!"),e("span",{style:{color:"#E1E4E8"}},".label }}")],-1)),n[2216]||(n[2216]=o(`
`)),e("span",Vp,[n[1802]||(n[1802]=e("span",{style:{color:"#E1E4E8"}},"        </",-1)),e("span",Ip,[s(a,{name:"SelectValue"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "placeholder",
    "description": "<p>The content that will be rendered inside the <code>SelectValue</code> when no <code>value</code> or <code>defaultValue</code> is set.</p>\\n",
    "type": "string",
    "required": false,
    "default": "\\"\\""
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "selectedLabel",
    "description": "",
    "type": "string[]"
  },
  {
    "name": "modelValue",
    "description": "",
    "type": "AcceptableValue | AcceptableValue[] | undefined"
  }
]`})]),default:l(()=>[n[1801]||(n[1801]=o("SelectValue"))]),_:1})]),n[1803]||(n[1803]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2217]||(n[2217]=o(`
`)),n[2218]||(n[2218]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        <"),e("span",{style:{color:"#85E89D"}},"Icon")],-1)),n[2219]||(n[2219]=o(`
`)),n[2220]||(n[2220]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:chevron-down"')],-1)),n[2221]||(n[2221]=o(`
`)),n[2222]||(n[2222]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"h-3.5 w-3.5"')],-1)),n[2223]||(n[2223]=o(`
`)),n[2224]||(n[2224]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        />")],-1)),n[2225]||(n[2225]=o(`
`)),e("span",Pp,[n[1805]||(n[1805]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",Gp,[s(a,{name:"SelectTrigger"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "",
    "type": "boolean",
    "required": false
  },
  {
    "name": "reference",
    "description": "<p>The reference (or anchor) element that is being referred to for positioning.</p>\\n<p>If not provided will use the current component as anchor.</p>\\n",
    "type": "ReferenceElement",
    "required": false
  }
]`})]),default:l(()=>[n[1804]||(n[1804]=o("SelectTrigger"))]),_:1})]),n[1806]||(n[1806]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2226]||(n[2226]=o(`
`)),n[2227]||(n[2227]=e("span",{class:"line"},null,-1)),n[2228]||(n[2228]=o(`
`)),e("span",Hp,[n[1808]||(n[1808]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",Mp,[s(a,{name:"SelectPortal"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "defer",
    "description": "<p>Defer the resolving of a Teleport target until other parts of the\\napplication have mounted (requires Vue 3.5.0+)</p>\\n<p><a href=\\"https://vuejs.org/guide/built-ins/teleport.html#deferred-teleport\\" target=\\"_blank\\">reference</a></p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>Disable teleport and render the component inline</p>\\n<p><a href=\\"https://vuejs.org/guide/built-ins/teleport.html#disabling-teleport\\" target=\\"_blank\\">reference</a></p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "to",
    "description": "<p>Vue native teleport component prop <code>:to</code></p>\\n<p><a href=\\"https://vuejs.org/guide/built-ins/teleport.html#basic-usage\\" target=\\"_blank\\">reference</a></p>\\n",
    "type": "string | HTMLElement",
    "required": false
  }
]`})]),default:l(()=>[n[1807]||(n[1807]=o("SelectPortal"))]),_:1})]),n[1809]||(n[1809]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2229]||(n[2229]=o(`
`)),e("span",jp,[n[1811]||(n[1811]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",Wp,[s(a,{name:"SelectContent"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "align",
    "description": "<p>The preferred alignment against the trigger.\\nMay change when collisions occur.</p>\\n",
    "type": "\\"start\\" | \\"center\\" | \\"end\\"",
    "required": false
  },
  {
    "name": "alignOffset",
    "description": "<p>An offset in pixels from the <code>start</code> or <code>end</code> alignment options.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "arrowPadding",
    "description": "<p>The padding between the arrow and the edges of the content.\\nIf your content has border-radius, this will prevent it from\\noverflowing the corners.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "avoidCollisions",
    "description": "<p>When <code>true</code>, overrides the side and align preferences\\nto prevent collisions with boundary edges.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "bodyLock",
    "description": "<p>The document.body will be lock, and scrolling will be disabled.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "collisionBoundary",
    "description": "<p>The element used as the collision boundary. By default\\nthis is the viewport, though you can provide additional\\nelement(s) to be included in this check.</p>\\n",
    "type": "Element | (Element | null)[] | null",
    "required": false
  },
  {
    "name": "collisionPadding",
    "description": "<p>The distance in pixels from the boundary edges where collision\\ndetection should occur. Accepts a number (same for all sides),\\nor a partial padding object, for example: { top: 20, left: 20 }.</p>\\n",
    "type": "number | Partial<Record<\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\", number>>",
    "required": false
  },
  {
    "name": "disableUpdateOnLayoutShift",
    "description": "<p>Whether to disable the update position for the content when the layout shifted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "hideWhenDetached",
    "description": "<p>Whether to hide the content when the trigger becomes fully occluded.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "position",
    "description": "<p>The positioning mode to use</p>\\n<p><code>item-aligned (default)</code> - behaves similarly to a native MacOS menu by positioning content relative to the active item. &lt;br&gt;\\n<code>popper</code> - positions content in the same way as our other primitives, for example <code>Popover</code> or <code>DropdownMenu</code>.</p>\\n",
    "type": "\\"popper\\" | \\"item-aligned\\"",
    "required": false
  },
  {
    "name": "positionStrategy",
    "description": "<p>The type of CSS position property to use.</p>\\n",
    "type": "\\"fixed\\" | \\"absolute\\"",
    "required": false
  },
  {
    "name": "prioritizePosition",
    "description": "<p>Force content to be position within the viewport.</p>\\n<p>Might overlap the reference element, which may not be desired.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "reference",
    "description": "<p>The custom element or virtual element that will be set as the reference\\nto position the floating element.</p>\\n<p>If provided, it will replace the default anchor element.</p>\\n",
    "type": "ReferenceElement",
    "required": false
  },
  {
    "name": "side",
    "description": "<p>The preferred side of the trigger to render against when open.\\nWill be reversed when collisions occur and avoidCollisions\\nis enabled.</p>\\n",
    "type": "\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\"",
    "required": false
  },
  {
    "name": "sideOffset",
    "description": "<p>The distance in pixels from the trigger.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "sticky",
    "description": "<p>The sticky behavior on the align axis. <code>partial</code> will keep the\\ncontent in the boundary as long as the trigger is at least partially\\nin the boundary whilst &quot;always&quot; will keep the content in the boundary\\nregardless.</p>\\n",
    "type": "\\"partial\\" | \\"always\\"",
    "required": false
  },
  {
    "name": "updatePositionStrategy",
    "description": "<p>Strategy to update the position of the floating element on every animation frame.</p>\\n",
    "type": "\\"always\\" | \\"optimized\\"",
    "required": false
  }
]`}),s(t,{title:"emits",data:`[
  {
    "name": "closeAutoFocus",
    "description": "<p>Event handler called when auto-focusing on close.\\nCan be prevented.</p>\\n",
    "type": "[event: Event]"
  },
  {
    "name": "escapeKeyDown",
    "description": "<p>Event handler called when the escape key is down.\\nCan be prevented.</p>\\n",
    "type": "[event: KeyboardEvent]"
  },
  {
    "name": "pointerDownOutside",
    "description": "<p>Event handler called when a <code>pointerdown</code> event happens outside of the <code>DismissableLayer</code>.\\nCan be prevented.</p>\\n",
    "type": "[event: PointerDownOutsideEvent]"
  }
]`})]),default:l(()=>[n[1810]||(n[1810]=o("SelectContent"))]),_:1})])]),n[2230]||(n[2230]=o(`
`)),n[2231]||(n[2231]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"min-w-[160px] bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100]"')],-1)),n[2232]||(n[2232]=o(`
`)),n[2233]||(n[2233]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          :"),e("span",{style:{color:"#B392F0"}},"side-offset"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#79B8FF"}},"5"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[2234]||(n[2234]=o(`
`)),n[2235]||(n[2235]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        >")],-1)),n[2236]||(n[2236]=o(`
`)),e("span",Op,[n[1813]||(n[1813]=e("span",{style:{color:"#E1E4E8"}},"          <",-1)),e("span",Lp,[s(a,{name:"SelectScrollUpButton"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1812]||(n[1812]=o("SelectScrollUpButton"))]),_:1})]),n[1814]||(n[1814]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1815]||(n[1815]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1816]||(n[1816]=e("span",{style:{color:"#9ECBFF"}},'"flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default"',-1)),n[1817]||(n[1817]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2237]||(n[2237]=o(`
`)),n[2238]||(n[2238]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"            <"),e("span",{style:{color:"#85E89D"}},"Icon"),e("span",{style:{color:"#B392F0"}}," icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:chevron-up"'),e("span",{style:{color:"#E1E4E8"}}," />")],-1)),n[2239]||(n[2239]=o(`
`)),e("span",Up,[n[1819]||(n[1819]=e("span",{style:{color:"#E1E4E8"}},"          </",-1)),e("span",Np,[s(a,{name:"SelectScrollUpButton"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1818]||(n[1818]=o("SelectScrollUpButton"))]),_:1})]),n[1820]||(n[1820]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2240]||(n[2240]=o(`
`)),n[2241]||(n[2241]=e("span",{class:"line"},null,-1)),n[2242]||(n[2242]=o(`
`)),e("span",$p,[n[1822]||(n[1822]=e("span",{style:{color:"#E1E4E8"}},"          <",-1)),e("span",zp,[s(a,{name:"SelectViewport"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nonce",
    "description": "<p>Will add <code>nonce</code> attribute to the style tag which can be used by Content Security Policy. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code>.</p>\\n",
    "type": "string",
    "required": false
  }
]`})]),default:l(()=>[n[1821]||(n[1821]=o("SelectViewport"))]),_:1})]),n[1823]||(n[1823]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1824]||(n[1824]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1825]||(n[1825]=e("span",{style:{color:"#9ECBFF"}},'"p-[5px]"',-1)),n[1826]||(n[1826]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2243]||(n[2243]=o(`
`)),e("span",Kp,[n[1828]||(n[1828]=e("span",{style:{color:"#E1E4E8"}},"            <",-1)),e("span",Zp,[s(a,{name:"SelectItem"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the item.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "textValue",
    "description": "<p>Optional text used for typeahead purposes.</p>\\n<p>By default the typeahead behavior will use the <code>.textContent</code> of the <code>SelectItemText</code> part.</p>\\n<p>Use this when the content is complex, or you have non-textual content inside.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "value",
    "description": "<p>The value given as data when submitted with a <code>name</code>.</p>\\n",
    "type": "AcceptableValue",
    "required": true
  }
]`}),s(t,{title:"emits",data:`[
  {
    "name": "select",
    "description": "<p>Event handler called when the selecting item. &lt;br&gt; It can be prevented by calling <code>event.preventDefault</code>.</p>\\n",
    "type": "[event: SelectEvent<AcceptableValue>]"
  }
]`})]),default:l(()=>[n[1827]||(n[1827]=o("SelectItem"))]),_:1})])]),n[2244]||(n[2244]=o(`
`)),n[2245]||(n[2245]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"              v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"(option, index) "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," preferences"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[2246]||(n[2246]=o(`
`)),n[2247]||(n[2247]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"index"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[2248]||(n[2248]=o(`
`)),n[2249]||(n[2249]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"              class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"text-xs leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"')],-1)),n[2250]||(n[2250]=o(`
`)),n[2251]||(n[2251]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              :"),e("span",{style:{color:"#B392F0"}},"value"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"option.locale"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[2252]||(n[2252]=o(`
`)),n[2253]||(n[2253]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"            >")],-1)),n[2254]||(n[2254]=o(`
`)),e("span",Jp,[n[1830]||(n[1830]=e("span",{style:{color:"#E1E4E8"}},"              <",-1)),e("span",Yp,[s(a,{name:"SelectItemIndicator"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1829]||(n[1829]=o("SelectItemIndicator"))]),_:1})]),n[1831]||(n[1831]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1832]||(n[1832]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1833]||(n[1833]=e("span",{style:{color:"#9ECBFF"}},'"absolute left-0 w-[25px] inline-flex items-center justify-center"',-1)),n[1834]||(n[1834]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2255]||(n[2255]=o(`
`)),n[2256]||(n[2256]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                <"),e("span",{style:{color:"#85E89D"}},"Icon"),e("span",{style:{color:"#B392F0"}}," icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:check"'),e("span",{style:{color:"#E1E4E8"}}," />")],-1)),n[2257]||(n[2257]=o(`
`)),e("span",Qp,[n[1836]||(n[1836]=e("span",{style:{color:"#E1E4E8"}},"              </",-1)),e("span",Xp,[s(a,{name:"SelectItemIndicator"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1835]||(n[1835]=o("SelectItemIndicator"))]),_:1})]),n[1837]||(n[1837]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2258]||(n[2258]=o(`
`)),e("span",_p,[n[1839]||(n[1839]=e("span",{style:{color:"#E1E4E8"}},"              <",-1)),e("span",ei,[s(a,{name:"SelectItemText"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1838]||(n[1838]=o("SelectItemText"))]),_:1})]),n[1840]||(n[1840]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2259]||(n[2259]=o(`
`)),n[2260]||(n[2260]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                {{ option.label }}")],-1)),n[2261]||(n[2261]=o(`
`)),e("span",ni,[n[1842]||(n[1842]=e("span",{style:{color:"#E1E4E8"}},"              </",-1)),e("span",oi,[s(a,{name:"SelectItemText"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1841]||(n[1841]=o("SelectItemText"))]),_:1})]),n[1843]||(n[1843]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2262]||(n[2262]=o(`
`)),e("span",si,[n[1845]||(n[1845]=e("span",{style:{color:"#E1E4E8"}},"            </",-1)),e("span",li,[s(a,{name:"SelectItem"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the item.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "textValue",
    "description": "<p>Optional text used for typeahead purposes.</p>\\n<p>By default the typeahead behavior will use the <code>.textContent</code> of the <code>SelectItemText</code> part.</p>\\n<p>Use this when the content is complex, or you have non-textual content inside.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "value",
    "description": "<p>The value given as data when submitted with a <code>name</code>.</p>\\n",
    "type": "AcceptableValue",
    "required": true
  }
]`}),s(t,{title:"emits",data:`[
  {
    "name": "select",
    "description": "<p>Event handler called when the selecting item. &lt;br&gt; It can be prevented by calling <code>event.preventDefault</code>.</p>\\n",
    "type": "[event: SelectEvent<AcceptableValue>]"
  }
]`})]),default:l(()=>[n[1844]||(n[1844]=o("SelectItem"))]),_:1})]),n[1846]||(n[1846]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2263]||(n[2263]=o(`
`)),e("span",ti,[n[1848]||(n[1848]=e("span",{style:{color:"#E1E4E8"}},"          </",-1)),e("span",ai,[s(a,{name:"SelectViewport"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nonce",
    "description": "<p>Will add <code>nonce</code> attribute to the style tag which can be used by Content Security Policy. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code>.</p>\\n",
    "type": "string",
    "required": false
  }
]`})]),default:l(()=>[n[1847]||(n[1847]=o("SelectViewport"))]),_:1})]),n[1849]||(n[1849]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2264]||(n[2264]=o(`
`)),n[2265]||(n[2265]=e("span",{class:"line"},null,-1)),n[2266]||(n[2266]=o(`
`)),e("span",ri,[n[1851]||(n[1851]=e("span",{style:{color:"#E1E4E8"}},"          <",-1)),e("span",pi,[s(a,{name:"SelectScrollDownButton"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1850]||(n[1850]=o("SelectScrollDownButton"))]),_:1})]),n[1852]||(n[1852]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1853]||(n[1853]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1854]||(n[1854]=e("span",{style:{color:"#9ECBFF"}},'"flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default"',-1)),n[1855]||(n[1855]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2267]||(n[2267]=o(`
`)),n[2268]||(n[2268]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"            <"),e("span",{style:{color:"#85E89D"}},"Icon"),e("span",{style:{color:"#B392F0"}}," icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:chevron-down"'),e("span",{style:{color:"#E1E4E8"}}," />")],-1)),n[2269]||(n[2269]=o(`
`)),e("span",ii,[n[1857]||(n[1857]=e("span",{style:{color:"#E1E4E8"}},"          </",-1)),e("span",di,[s(a,{name:"SelectScrollDownButton"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1856]||(n[1856]=o("SelectScrollDownButton"))]),_:1})]),n[1858]||(n[1858]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2270]||(n[2270]=o(`
`)),e("span",Ei,[n[1860]||(n[1860]=e("span",{style:{color:"#E1E4E8"}},"        </",-1)),e("span",yi,[s(a,{name:"SelectContent"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "align",
    "description": "<p>The preferred alignment against the trigger.\\nMay change when collisions occur.</p>\\n",
    "type": "\\"start\\" | \\"center\\" | \\"end\\"",
    "required": false
  },
  {
    "name": "alignOffset",
    "description": "<p>An offset in pixels from the <code>start</code> or <code>end</code> alignment options.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "arrowPadding",
    "description": "<p>The padding between the arrow and the edges of the content.\\nIf your content has border-radius, this will prevent it from\\noverflowing the corners.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "avoidCollisions",
    "description": "<p>When <code>true</code>, overrides the side and align preferences\\nto prevent collisions with boundary edges.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "bodyLock",
    "description": "<p>The document.body will be lock, and scrolling will be disabled.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "collisionBoundary",
    "description": "<p>The element used as the collision boundary. By default\\nthis is the viewport, though you can provide additional\\nelement(s) to be included in this check.</p>\\n",
    "type": "Element | (Element | null)[] | null",
    "required": false
  },
  {
    "name": "collisionPadding",
    "description": "<p>The distance in pixels from the boundary edges where collision\\ndetection should occur. Accepts a number (same for all sides),\\nor a partial padding object, for example: { top: 20, left: 20 }.</p>\\n",
    "type": "number | Partial<Record<\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\", number>>",
    "required": false
  },
  {
    "name": "disableUpdateOnLayoutShift",
    "description": "<p>Whether to disable the update position for the content when the layout shifted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "hideWhenDetached",
    "description": "<p>Whether to hide the content when the trigger becomes fully occluded.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "position",
    "description": "<p>The positioning mode to use</p>\\n<p><code>item-aligned (default)</code> - behaves similarly to a native MacOS menu by positioning content relative to the active item. &lt;br&gt;\\n<code>popper</code> - positions content in the same way as our other primitives, for example <code>Popover</code> or <code>DropdownMenu</code>.</p>\\n",
    "type": "\\"popper\\" | \\"item-aligned\\"",
    "required": false
  },
  {
    "name": "positionStrategy",
    "description": "<p>The type of CSS position property to use.</p>\\n",
    "type": "\\"fixed\\" | \\"absolute\\"",
    "required": false
  },
  {
    "name": "prioritizePosition",
    "description": "<p>Force content to be position within the viewport.</p>\\n<p>Might overlap the reference element, which may not be desired.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "reference",
    "description": "<p>The custom element or virtual element that will be set as the reference\\nto position the floating element.</p>\\n<p>If provided, it will replace the default anchor element.</p>\\n",
    "type": "ReferenceElement",
    "required": false
  },
  {
    "name": "side",
    "description": "<p>The preferred side of the trigger to render against when open.\\nWill be reversed when collisions occur and avoidCollisions\\nis enabled.</p>\\n",
    "type": "\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\"",
    "required": false
  },
  {
    "name": "sideOffset",
    "description": "<p>The distance in pixels from the trigger.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "sticky",
    "description": "<p>The sticky behavior on the align axis. <code>partial</code> will keep the\\ncontent in the boundary as long as the trigger is at least partially\\nin the boundary whilst &quot;always&quot; will keep the content in the boundary\\nregardless.</p>\\n",
    "type": "\\"partial\\" | \\"always\\"",
    "required": false
  },
  {
    "name": "updatePositionStrategy",
    "description": "<p>Strategy to update the position of the floating element on every animation frame.</p>\\n",
    "type": "\\"always\\" | \\"optimized\\"",
    "required": false
  }
]`}),s(t,{title:"emits",data:`[
  {
    "name": "closeAutoFocus",
    "description": "<p>Event handler called when auto-focusing on close.\\nCan be prevented.</p>\\n",
    "type": "[event: Event]"
  },
  {
    "name": "escapeKeyDown",
    "description": "<p>Event handler called when the escape key is down.\\nCan be prevented.</p>\\n",
    "type": "[event: KeyboardEvent]"
  },
  {
    "name": "pointerDownOutside",
    "description": "<p>Event handler called when a <code>pointerdown</code> event happens outside of the <code>DismissableLayer</code>.\\nCan be prevented.</p>\\n",
    "type": "[event: PointerDownOutsideEvent]"
  }
]`})]),default:l(()=>[n[1859]||(n[1859]=o("SelectContent"))]),_:1})]),n[1861]||(n[1861]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2271]||(n[2271]=o(`
`)),e("span",ci,[n[1863]||(n[1863]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",ui,[s(a,{name:"SelectPortal"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "defer",
    "description": "<p>Defer the resolving of a Teleport target until other parts of the\\napplication have mounted (requires Vue 3.5.0+)</p>\\n<p><a href=\\"https://vuejs.org/guide/built-ins/teleport.html#deferred-teleport\\" target=\\"_blank\\">reference</a></p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>Disable teleport and render the component inline</p>\\n<p><a href=\\"https://vuejs.org/guide/built-ins/teleport.html#disabling-teleport\\" target=\\"_blank\\">reference</a></p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "to",
    "description": "<p>Vue native teleport component prop <code>:to</code></p>\\n<p><a href=\\"https://vuejs.org/guide/built-ins/teleport.html#basic-usage\\" target=\\"_blank\\">reference</a></p>\\n",
    "type": "string | HTMLElement",
    "required": false
  }
]`})]),default:l(()=>[n[1862]||(n[1862]=o("SelectPortal"))]),_:1})]),n[1864]||(n[1864]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2272]||(n[2272]=o(`
`)),e("span",mi,[n[1866]||(n[1866]=e("span",{style:{color:"#E1E4E8"}},"    </",-1)),e("span",fi,[s(a,{name:"SelectRoot"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "autocomplete",
    "description": "<p>Native html input <code>autocomplete</code> attribute.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "by",
    "description": "<p>Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared.</p>\\n",
    "type": "string | ((a: AcceptableValue, b: AcceptableValue) => boolean)",
    "required": false
  },
  {
    "name": "defaultOpen",
    "description": "<p>The open state of the select when it is initially rendered. Use when you do not need to control its open state.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "defaultValue",
    "description": "<p>The value of the select when initially rendered. Use when you do not need to control the state of the Select</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "dir",
    "description": "<p>The reading direction of the combobox when applicable. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with Select</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled value of the Select. Can be bind as <code>v-model</code>.</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "multiple",
    "description": "<p>Whether multiple options can be selected or not.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "name",
    "description": "<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "open",
    "description": "<p>The controlled open state of the Select. Can be bind as <code>v-model:open</code>.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "required",
    "description": "<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),s(t,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[value: AcceptableValue]"
  },
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the context menu changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current input values</p>\\n",
    "type": "AcceptableValue | AcceptableValue[] | undefined"
  },
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[1865]||(n[1865]=o("SelectRoot"))]),_:1})]),n[1867]||(n[1867]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2273]||(n[2273]=o(`
`)),e("span",Fi,[n[1870]||(n[1870]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",gi,[s(a,{name:"Label"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"label\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "for",
    "description": "<p>The id of the element the label is associated with.</p>\\n",
    "type": "string",
    "required": false
  }
]`})]),default:l(()=>[n[1868]||(n[1868]=o("Label"))]),_:1})]),n[1871]||(n[1871]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1872]||(n[1872]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1873]||(n[1873]=e("span",{style:{color:"#9ECBFF"}},'"text-white"',-1)),n[1874]||(n[1874]=e("span",{style:{color:"#E1E4E8"}},">Calendar</",-1)),e("span",Ci,[s(a,{name:"Label"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"label\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "for",
    "description": "<p>The id of the element the label is associated with.</p>\\n",
    "type": "string",
    "required": false
  }
]`})]),default:l(()=>[n[1869]||(n[1869]=o("Label"))]),_:1})]),n[1875]||(n[1875]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2274]||(n[2274]=o(`
`)),e("span",bi,[n[1877]||(n[1877]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",hi,[s(a,{name:"SelectRoot"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "autocomplete",
    "description": "<p>Native html input <code>autocomplete</code> attribute.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "by",
    "description": "<p>Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared.</p>\\n",
    "type": "string | ((a: AcceptableValue, b: AcceptableValue) => boolean)",
    "required": false
  },
  {
    "name": "defaultOpen",
    "description": "<p>The open state of the select when it is initially rendered. Use when you do not need to control its open state.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "defaultValue",
    "description": "<p>The value of the select when initially rendered. Use when you do not need to control the state of the Select</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "dir",
    "description": "<p>The reading direction of the combobox when applicable. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with Select</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled value of the Select. Can be bind as <code>v-model</code>.</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "multiple",
    "description": "<p>Whether multiple options can be selected or not.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "name",
    "description": "<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "open",
    "description": "<p>The controlled open state of the Select. Can be bind as <code>v-model:open</code>.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "required",
    "description": "<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),s(t,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[value: AcceptableValue]"
  },
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the context menu changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current input values</p>\\n",
    "type": "AcceptableValue | AcceptableValue[] | undefined"
  },
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[1876]||(n[1876]=o("SelectRoot"))]),_:1})]),n[1878]||(n[1878]=e("span",{style:{color:"#B392F0"}}," v-model",-1)),n[1879]||(n[1879]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1880]||(n[1880]=e("span",{style:{color:"#9ECBFF"}},'"',-1)),n[1881]||(n[1881]=e("span",{style:{color:"#E1E4E8"}},"calendar",-1)),n[1882]||(n[1882]=e("span",{style:{color:"#9ECBFF"}},'"',-1)),n[1883]||(n[1883]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2275]||(n[2275]=o(`
`)),e("span",wi,[n[1885]||(n[1885]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",Bi,[s(a,{name:"SelectTrigger"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "",
    "type": "boolean",
    "required": false
  },
  {
    "name": "reference",
    "description": "<p>The reference (or anchor) element that is being referred to for positioning.</p>\\n<p>If not provided will use the current component as anchor.</p>\\n",
    "type": "ReferenceElement",
    "required": false
  }
]`})]),default:l(()=>[n[1884]||(n[1884]=o("SelectTrigger"))]),_:1})])]),n[2276]||(n[2276]=o(`
`)),n[2277]||(n[2277]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"inline-flex min-w-[160px] items-center justify-between rounded-md px-[15px] text-xs leading-none h-[35px] gap-[5px] bg-white text-grass11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-green9 outline-none"')],-1)),n[2278]||(n[2278]=o(`
`)),n[2279]||(n[2279]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        aria-label"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"Select a calendar"')],-1)),n[2280]||(n[2280]=o(`
`)),n[2281]||(n[2281]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      >")],-1)),n[2282]||(n[2282]=o(`
`)),e("span",vi,[n[1887]||(n[1887]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",Ti,[s(a,{name:"SelectValue"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "placeholder",
    "description": "<p>The content that will be rendered inside the <code>SelectValue</code> when no <code>value</code> or <code>defaultValue</code> is set.</p>\\n",
    "type": "string",
    "required": false,
    "default": "\\"\\""
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "selectedLabel",
    "description": "",
    "type": "string[]"
  },
  {
    "name": "modelValue",
    "description": "",
    "type": "AcceptableValue | AcceptableValue[] | undefined"
  }
]`})]),default:l(()=>[n[1886]||(n[1886]=o("SelectValue"))]),_:1})]),n[1888]||(n[1888]=e("span",{style:{color:"#B392F0"}}," placeholder",-1)),n[1889]||(n[1889]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1890]||(n[1890]=e("span",{style:{color:"#9ECBFF"}},'"Please select a calendar"',-1)),n[1891]||(n[1891]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2283]||(n[2283]=o(`
`)),n[2284]||(n[2284]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          {{ calendars."),e("span",{style:{color:"#B392F0"}},"find"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#FFAB70"}},"c"),e("span",{style:{color:"#F97583"}}," =>"),e("span",{style:{color:"#E1E4E8"}}," c.key "),e("span",{style:{color:"#F97583"}},"==="),e("span",{style:{color:"#E1E4E8"}}," calendar)?.name }}")],-1)),n[2285]||(n[2285]=o(`
`)),e("span",xi,[n[1893]||(n[1893]=e("span",{style:{color:"#E1E4E8"}},"        </",-1)),e("span",ki,[s(a,{name:"SelectValue"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "placeholder",
    "description": "<p>The content that will be rendered inside the <code>SelectValue</code> when no <code>value</code> or <code>defaultValue</code> is set.</p>\\n",
    "type": "string",
    "required": false,
    "default": "\\"\\""
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "selectedLabel",
    "description": "",
    "type": "string[]"
  },
  {
    "name": "modelValue",
    "description": "",
    "type": "AcceptableValue | AcceptableValue[] | undefined"
  }
]`})]),default:l(()=>[n[1892]||(n[1892]=o("SelectValue"))]),_:1})]),n[1894]||(n[1894]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2286]||(n[2286]=o(`
`)),n[2287]||(n[2287]=e("span",{class:"line"},null,-1)),n[2288]||(n[2288]=o(`
`)),n[2289]||(n[2289]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        <"),e("span",{style:{color:"#85E89D"}},"Icon")],-1)),n[2290]||(n[2290]=o(`
`)),n[2291]||(n[2291]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:chevron-down"')],-1)),n[2292]||(n[2292]=o(`
`)),n[2293]||(n[2293]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"h-3.5 w-3.5"')],-1)),n[2294]||(n[2294]=o(`
`)),n[2295]||(n[2295]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        />")],-1)),n[2296]||(n[2296]=o(`
`)),e("span",qi,[n[1896]||(n[1896]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",Di,[s(a,{name:"SelectTrigger"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "",
    "type": "boolean",
    "required": false
  },
  {
    "name": "reference",
    "description": "<p>The reference (or anchor) element that is being referred to for positioning.</p>\\n<p>If not provided will use the current component as anchor.</p>\\n",
    "type": "ReferenceElement",
    "required": false
  }
]`})]),default:l(()=>[n[1895]||(n[1895]=o("SelectTrigger"))]),_:1})]),n[1897]||(n[1897]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2297]||(n[2297]=o(`
`)),n[2298]||(n[2298]=e("span",{class:"line"},null,-1)),n[2299]||(n[2299]=o(`
`)),e("span",Ai,[n[1899]||(n[1899]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",Si,[s(a,{name:"SelectPortal"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "defer",
    "description": "<p>Defer the resolving of a Teleport target until other parts of the\\napplication have mounted (requires Vue 3.5.0+)</p>\\n<p><a href=\\"https://vuejs.org/guide/built-ins/teleport.html#deferred-teleport\\" target=\\"_blank\\">reference</a></p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>Disable teleport and render the component inline</p>\\n<p><a href=\\"https://vuejs.org/guide/built-ins/teleport.html#disabling-teleport\\" target=\\"_blank\\">reference</a></p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "to",
    "description": "<p>Vue native teleport component prop <code>:to</code></p>\\n<p><a href=\\"https://vuejs.org/guide/built-ins/teleport.html#basic-usage\\" target=\\"_blank\\">reference</a></p>\\n",
    "type": "string | HTMLElement",
    "required": false
  }
]`})]),default:l(()=>[n[1898]||(n[1898]=o("SelectPortal"))]),_:1})]),n[1900]||(n[1900]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2300]||(n[2300]=o(`
`)),e("span",Ri,[n[1902]||(n[1902]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",Vi,[s(a,{name:"SelectContent"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "align",
    "description": "<p>The preferred alignment against the trigger.\\nMay change when collisions occur.</p>\\n",
    "type": "\\"start\\" | \\"center\\" | \\"end\\"",
    "required": false
  },
  {
    "name": "alignOffset",
    "description": "<p>An offset in pixels from the <code>start</code> or <code>end</code> alignment options.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "arrowPadding",
    "description": "<p>The padding between the arrow and the edges of the content.\\nIf your content has border-radius, this will prevent it from\\noverflowing the corners.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "avoidCollisions",
    "description": "<p>When <code>true</code>, overrides the side and align preferences\\nto prevent collisions with boundary edges.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "bodyLock",
    "description": "<p>The document.body will be lock, and scrolling will be disabled.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "collisionBoundary",
    "description": "<p>The element used as the collision boundary. By default\\nthis is the viewport, though you can provide additional\\nelement(s) to be included in this check.</p>\\n",
    "type": "Element | (Element | null)[] | null",
    "required": false
  },
  {
    "name": "collisionPadding",
    "description": "<p>The distance in pixels from the boundary edges where collision\\ndetection should occur. Accepts a number (same for all sides),\\nor a partial padding object, for example: { top: 20, left: 20 }.</p>\\n",
    "type": "number | Partial<Record<\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\", number>>",
    "required": false
  },
  {
    "name": "disableUpdateOnLayoutShift",
    "description": "<p>Whether to disable the update position for the content when the layout shifted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "hideWhenDetached",
    "description": "<p>Whether to hide the content when the trigger becomes fully occluded.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "position",
    "description": "<p>The positioning mode to use</p>\\n<p><code>item-aligned (default)</code> - behaves similarly to a native MacOS menu by positioning content relative to the active item. &lt;br&gt;\\n<code>popper</code> - positions content in the same way as our other primitives, for example <code>Popover</code> or <code>DropdownMenu</code>.</p>\\n",
    "type": "\\"popper\\" | \\"item-aligned\\"",
    "required": false
  },
  {
    "name": "positionStrategy",
    "description": "<p>The type of CSS position property to use.</p>\\n",
    "type": "\\"fixed\\" | \\"absolute\\"",
    "required": false
  },
  {
    "name": "prioritizePosition",
    "description": "<p>Force content to be position within the viewport.</p>\\n<p>Might overlap the reference element, which may not be desired.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "reference",
    "description": "<p>The custom element or virtual element that will be set as the reference\\nto position the floating element.</p>\\n<p>If provided, it will replace the default anchor element.</p>\\n",
    "type": "ReferenceElement",
    "required": false
  },
  {
    "name": "side",
    "description": "<p>The preferred side of the trigger to render against when open.\\nWill be reversed when collisions occur and avoidCollisions\\nis enabled.</p>\\n",
    "type": "\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\"",
    "required": false
  },
  {
    "name": "sideOffset",
    "description": "<p>The distance in pixels from the trigger.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "sticky",
    "description": "<p>The sticky behavior on the align axis. <code>partial</code> will keep the\\ncontent in the boundary as long as the trigger is at least partially\\nin the boundary whilst &quot;always&quot; will keep the content in the boundary\\nregardless.</p>\\n",
    "type": "\\"partial\\" | \\"always\\"",
    "required": false
  },
  {
    "name": "updatePositionStrategy",
    "description": "<p>Strategy to update the position of the floating element on every animation frame.</p>\\n",
    "type": "\\"always\\" | \\"optimized\\"",
    "required": false
  }
]`}),s(t,{title:"emits",data:`[
  {
    "name": "closeAutoFocus",
    "description": "<p>Event handler called when auto-focusing on close.\\nCan be prevented.</p>\\n",
    "type": "[event: Event]"
  },
  {
    "name": "escapeKeyDown",
    "description": "<p>Event handler called when the escape key is down.\\nCan be prevented.</p>\\n",
    "type": "[event: KeyboardEvent]"
  },
  {
    "name": "pointerDownOutside",
    "description": "<p>Event handler called when a <code>pointerdown</code> event happens outside of the <code>DismissableLayer</code>.\\nCan be prevented.</p>\\n",
    "type": "[event: PointerDownOutsideEvent]"
  }
]`})]),default:l(()=>[n[1901]||(n[1901]=o("SelectContent"))]),_:1})])]),n[2301]||(n[2301]=o(`
`)),n[2302]||(n[2302]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"min-w-[160px] bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100]"')],-1)),n[2303]||(n[2303]=o(`
`)),n[2304]||(n[2304]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          :"),e("span",{style:{color:"#B392F0"}},"side-offset"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#79B8FF"}},"5"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[2305]||(n[2305]=o(`
`)),n[2306]||(n[2306]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        >")],-1)),n[2307]||(n[2307]=o(`
`)),e("span",Ii,[n[1904]||(n[1904]=e("span",{style:{color:"#E1E4E8"}},"          <",-1)),e("span",Pi,[s(a,{name:"SelectScrollUpButton"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1903]||(n[1903]=o("SelectScrollUpButton"))]),_:1})]),n[1905]||(n[1905]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1906]||(n[1906]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1907]||(n[1907]=e("span",{style:{color:"#9ECBFF"}},'"flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default"',-1)),n[1908]||(n[1908]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2308]||(n[2308]=o(`
`)),n[2309]||(n[2309]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"            <"),e("span",{style:{color:"#85E89D"}},"Icon"),e("span",{style:{color:"#B392F0"}}," icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:chevron-up"'),e("span",{style:{color:"#E1E4E8"}}," />")],-1)),n[2310]||(n[2310]=o(`
`)),e("span",Gi,[n[1910]||(n[1910]=e("span",{style:{color:"#E1E4E8"}},"          </",-1)),e("span",Hi,[s(a,{name:"SelectScrollUpButton"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1909]||(n[1909]=o("SelectScrollUpButton"))]),_:1})]),n[1911]||(n[1911]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2311]||(n[2311]=o(`
`)),n[2312]||(n[2312]=e("span",{class:"line"},null,-1)),n[2313]||(n[2313]=o(`
`)),e("span",Mi,[n[1913]||(n[1913]=e("span",{style:{color:"#E1E4E8"}},"          <",-1)),e("span",ji,[s(a,{name:"SelectViewport"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nonce",
    "description": "<p>Will add <code>nonce</code> attribute to the style tag which can be used by Content Security Policy. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code>.</p>\\n",
    "type": "string",
    "required": false
  }
]`})]),default:l(()=>[n[1912]||(n[1912]=o("SelectViewport"))]),_:1})]),n[1914]||(n[1914]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1915]||(n[1915]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1916]||(n[1916]=e("span",{style:{color:"#9ECBFF"}},'"p-[5px]"',-1)),n[1917]||(n[1917]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2314]||(n[2314]=o(`
`)),e("span",Wi,[n[1919]||(n[1919]=e("span",{style:{color:"#E1E4E8"}},"            <",-1)),e("span",Oi,[s(a,{name:"SelectLabel"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "for",
    "description": "",
    "type": "string",
    "required": false
  }
]`})]),default:l(()=>[n[1918]||(n[1918]=o("SelectLabel"))]),_:1})]),n[1920]||(n[1920]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1921]||(n[1921]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1922]||(n[1922]=e("span",{style:{color:"#9ECBFF"}},'"px-[25px] text-xs leading-[25px] text-mauve11"',-1)),n[1923]||(n[1923]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2315]||(n[2315]=o(`
`)),n[2316]||(n[2316]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              Preferred")],-1)),n[2317]||(n[2317]=o(`
`)),e("span",Li,[n[1925]||(n[1925]=e("span",{style:{color:"#E1E4E8"}},"            </",-1)),e("span",Ui,[s(a,{name:"SelectLabel"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "for",
    "description": "",
    "type": "string",
    "required": false
  }
]`})]),default:l(()=>[n[1924]||(n[1924]=o("SelectLabel"))]),_:1})]),n[1926]||(n[1926]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2318]||(n[2318]=o(`
`)),e("span",Ni,[n[1928]||(n[1928]=e("span",{style:{color:"#E1E4E8"}},"            <",-1)),e("span",$i,[s(a,{name:"SelectGroup"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1927]||(n[1927]=o("SelectGroup"))]),_:1})]),n[1929]||(n[1929]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2319]||(n[2319]=o(`
`)),e("span",zi,[n[1931]||(n[1931]=e("span",{style:{color:"#E1E4E8"}},"              <",-1)),e("span",Ki,[s(a,{name:"SelectItem"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the item.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "textValue",
    "description": "<p>Optional text used for typeahead purposes.</p>\\n<p>By default the typeahead behavior will use the <code>.textContent</code> of the <code>SelectItemText</code> part.</p>\\n<p>Use this when the content is complex, or you have non-textual content inside.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "value",
    "description": "<p>The value given as data when submitted with a <code>name</code>.</p>\\n",
    "type": "AcceptableValue",
    "required": true
  }
]`}),s(t,{title:"emits",data:`[
  {
    "name": "select",
    "description": "<p>Event handler called when the selecting item. &lt;br&gt; It can be prevented by calling <code>event.preventDefault</code>.</p>\\n",
    "type": "[event: SelectEvent<AcceptableValue>]"
  }
]`})]),default:l(()=>[n[1930]||(n[1930]=o("SelectItem"))]),_:1})])]),n[2320]||(n[2320]=o(`
`)),n[2321]||(n[2321]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"                v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"(option, index) "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," preferredCalendars"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[2322]||(n[2322]=o(`
`)),n[2323]||(n[2323]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"index"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[2324]||(n[2324]=o(`
`)),n[2325]||(n[2325]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"                class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"text-xs leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"')],-1)),n[2326]||(n[2326]=o(`
`)),n[2327]||(n[2327]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                :"),e("span",{style:{color:"#B392F0"}},"value"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"option"),e("span",{style:{color:"#F97583"}},"!"),e("span",{style:{color:"#E1E4E8"}},".key"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[2328]||(n[2328]=o(`
`)),n[2329]||(n[2329]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              >")],-1)),n[2330]||(n[2330]=o(`
`)),e("span",Zi,[n[1933]||(n[1933]=e("span",{style:{color:"#E1E4E8"}},"                <",-1)),e("span",Ji,[s(a,{name:"SelectItemIndicator"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1932]||(n[1932]=o("SelectItemIndicator"))]),_:1})]),n[1934]||(n[1934]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1935]||(n[1935]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1936]||(n[1936]=e("span",{style:{color:"#9ECBFF"}},'"absolute left-0 w-[25px] inline-flex items-center justify-center"',-1)),n[1937]||(n[1937]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2331]||(n[2331]=o(`
`)),n[2332]||(n[2332]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                  <"),e("span",{style:{color:"#85E89D"}},"Icon"),e("span",{style:{color:"#B392F0"}}," icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:check"'),e("span",{style:{color:"#E1E4E8"}}," />")],-1)),n[2333]||(n[2333]=o(`
`)),e("span",Yi,[n[1939]||(n[1939]=e("span",{style:{color:"#E1E4E8"}},"                </",-1)),e("span",Qi,[s(a,{name:"SelectItemIndicator"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1938]||(n[1938]=o("SelectItemIndicator"))]),_:1})]),n[1940]||(n[1940]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2334]||(n[2334]=o(`
`)),e("span",Xi,[n[1942]||(n[1942]=e("span",{style:{color:"#E1E4E8"}},"                <",-1)),e("span",_i,[s(a,{name:"SelectItemText"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1941]||(n[1941]=o("SelectItemText"))]),_:1})]),n[1943]||(n[1943]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2335]||(n[2335]=o(`
`)),n[2336]||(n[2336]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                  {{ option"),e("span",{style:{color:"#F97583"}},"!"),e("span",{style:{color:"#E1E4E8"}},".name }}")],-1)),n[2337]||(n[2337]=o(`
`)),e("span",ed,[n[1945]||(n[1945]=e("span",{style:{color:"#E1E4E8"}},"                </",-1)),e("span",nd,[s(a,{name:"SelectItemText"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1944]||(n[1944]=o("SelectItemText"))]),_:1})]),n[1946]||(n[1946]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2338]||(n[2338]=o(`
`)),e("span",od,[n[1948]||(n[1948]=e("span",{style:{color:"#E1E4E8"}},"              </",-1)),e("span",sd,[s(a,{name:"SelectItem"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the item.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "textValue",
    "description": "<p>Optional text used for typeahead purposes.</p>\\n<p>By default the typeahead behavior will use the <code>.textContent</code> of the <code>SelectItemText</code> part.</p>\\n<p>Use this when the content is complex, or you have non-textual content inside.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "value",
    "description": "<p>The value given as data when submitted with a <code>name</code>.</p>\\n",
    "type": "AcceptableValue",
    "required": true
  }
]`}),s(t,{title:"emits",data:`[
  {
    "name": "select",
    "description": "<p>Event handler called when the selecting item. &lt;br&gt; It can be prevented by calling <code>event.preventDefault</code>.</p>\\n",
    "type": "[event: SelectEvent<AcceptableValue>]"
  }
]`})]),default:l(()=>[n[1947]||(n[1947]=o("SelectItem"))]),_:1})]),n[1949]||(n[1949]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2339]||(n[2339]=o(`
`)),e("span",ld,[n[1951]||(n[1951]=e("span",{style:{color:"#E1E4E8"}},"            </",-1)),e("span",td,[s(a,{name:"SelectGroup"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1950]||(n[1950]=o("SelectGroup"))]),_:1})]),n[1952]||(n[1952]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2340]||(n[2340]=o(`
`)),e("span",ad,[n[1954]||(n[1954]=e("span",{style:{color:"#E1E4E8"}},"            <",-1)),e("span",rd,[s(a,{name:"SelectSeparator"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1953]||(n[1953]=o("SelectSeparator"))]),_:1})]),n[1955]||(n[1955]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1956]||(n[1956]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1957]||(n[1957]=e("span",{style:{color:"#9ECBFF"}},'"h-[1px] bg-green6 m-[5px]"',-1)),n[1958]||(n[1958]=e("span",{style:{color:"#E1E4E8"}}," />",-1))]),n[2341]||(n[2341]=o(`
`)),e("span",pd,[n[1960]||(n[1960]=e("span",{style:{color:"#E1E4E8"}},"            <",-1)),e("span",id,[s(a,{name:"SelectLabel"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "for",
    "description": "",
    "type": "string",
    "required": false
  }
]`})]),default:l(()=>[n[1959]||(n[1959]=o("SelectLabel"))]),_:1})]),n[1961]||(n[1961]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1962]||(n[1962]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1963]||(n[1963]=e("span",{style:{color:"#9ECBFF"}},'"px-[25px] text-xs leading-[25px] text-mauve11"',-1)),n[1964]||(n[1964]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2342]||(n[2342]=o(`
`)),n[2343]||(n[2343]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              Other")],-1)),n[2344]||(n[2344]=o(`
`)),e("span",dd,[n[1966]||(n[1966]=e("span",{style:{color:"#E1E4E8"}},"            </",-1)),e("span",Ed,[s(a,{name:"SelectLabel"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "for",
    "description": "",
    "type": "string",
    "required": false
  }
]`})]),default:l(()=>[n[1965]||(n[1965]=o("SelectLabel"))]),_:1})]),n[1967]||(n[1967]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2345]||(n[2345]=o(`
`)),e("span",yd,[n[1969]||(n[1969]=e("span",{style:{color:"#E1E4E8"}},"            <",-1)),e("span",cd,[s(a,{name:"SelectGroup"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1968]||(n[1968]=o("SelectGroup"))]),_:1})]),n[1970]||(n[1970]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2346]||(n[2346]=o(`
`)),e("span",ud,[n[1972]||(n[1972]=e("span",{style:{color:"#E1E4E8"}},"              <",-1)),e("span",md,[s(a,{name:"SelectItem"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the item.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "textValue",
    "description": "<p>Optional text used for typeahead purposes.</p>\\n<p>By default the typeahead behavior will use the <code>.textContent</code> of the <code>SelectItemText</code> part.</p>\\n<p>Use this when the content is complex, or you have non-textual content inside.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "value",
    "description": "<p>The value given as data when submitted with a <code>name</code>.</p>\\n",
    "type": "AcceptableValue",
    "required": true
  }
]`}),s(t,{title:"emits",data:`[
  {
    "name": "select",
    "description": "<p>Event handler called when the selecting item. &lt;br&gt; It can be prevented by calling <code>event.preventDefault</code>.</p>\\n",
    "type": "[event: SelectEvent<AcceptableValue>]"
  }
]`})]),default:l(()=>[n[1971]||(n[1971]=o("SelectItem"))]),_:1})])]),n[2347]||(n[2347]=o(`
`)),n[2348]||(n[2348]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"                v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"(option, index) "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," otherCalendars"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[2349]||(n[2349]=o(`
`)),n[2350]||(n[2350]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"index"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[2351]||(n[2351]=o(`
`)),n[2352]||(n[2352]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"                class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"text-xs leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"')],-1)),n[2353]||(n[2353]=o(`
`)),n[2354]||(n[2354]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                :"),e("span",{style:{color:"#B392F0"}},"value"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"option.key"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[2355]||(n[2355]=o(`
`)),n[2356]||(n[2356]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              >")],-1)),n[2357]||(n[2357]=o(`
`)),e("span",fd,[n[1974]||(n[1974]=e("span",{style:{color:"#E1E4E8"}},"                <",-1)),e("span",Fd,[s(a,{name:"SelectItemIndicator"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1973]||(n[1973]=o("SelectItemIndicator"))]),_:1})]),n[1975]||(n[1975]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[1976]||(n[1976]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[1977]||(n[1977]=e("span",{style:{color:"#9ECBFF"}},'"absolute left-0 w-[25px] inline-flex items-center justify-center"',-1)),n[1978]||(n[1978]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2358]||(n[2358]=o(`
`)),n[2359]||(n[2359]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                  <"),e("span",{style:{color:"#85E89D"}},"Icon"),e("span",{style:{color:"#B392F0"}}," icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:check"'),e("span",{style:{color:"#E1E4E8"}}," />")],-1)),n[2360]||(n[2360]=o(`
`)),e("span",gd,[n[1980]||(n[1980]=e("span",{style:{color:"#E1E4E8"}},"                </",-1)),e("span",Cd,[s(a,{name:"SelectItemIndicator"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1979]||(n[1979]=o("SelectItemIndicator"))]),_:1})]),n[1981]||(n[1981]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2361]||(n[2361]=o(`
`)),e("span",bd,[n[1983]||(n[1983]=e("span",{style:{color:"#E1E4E8"}},"                <",-1)),e("span",hd,[s(a,{name:"SelectItemText"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1982]||(n[1982]=o("SelectItemText"))]),_:1})]),n[1984]||(n[1984]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2362]||(n[2362]=o(`
`)),n[2363]||(n[2363]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                  {{ option.name }}")],-1)),n[2364]||(n[2364]=o(`
`)),e("span",wd,[n[1986]||(n[1986]=e("span",{style:{color:"#E1E4E8"}},"                </",-1)),e("span",Bd,[s(a,{name:"SelectItemText"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"span\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1985]||(n[1985]=o("SelectItemText"))]),_:1})]),n[1987]||(n[1987]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2365]||(n[2365]=o(`
`)),e("span",vd,[n[1989]||(n[1989]=e("span",{style:{color:"#E1E4E8"}},"              </",-1)),e("span",Td,[s(a,{name:"SelectItem"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with the item.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "textValue",
    "description": "<p>Optional text used for typeahead purposes.</p>\\n<p>By default the typeahead behavior will use the <code>.textContent</code> of the <code>SelectItemText</code> part.</p>\\n<p>Use this when the content is complex, or you have non-textual content inside.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "value",
    "description": "<p>The value given as data when submitted with a <code>name</code>.</p>\\n",
    "type": "AcceptableValue",
    "required": true
  }
]`}),s(t,{title:"emits",data:`[
  {
    "name": "select",
    "description": "<p>Event handler called when the selecting item. &lt;br&gt; It can be prevented by calling <code>event.preventDefault</code>.</p>\\n",
    "type": "[event: SelectEvent<AcceptableValue>]"
  }
]`})]),default:l(()=>[n[1988]||(n[1988]=o("SelectItem"))]),_:1})]),n[1990]||(n[1990]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2366]||(n[2366]=o(`
`)),e("span",xd,[n[1992]||(n[1992]=e("span",{style:{color:"#E1E4E8"}},"            </",-1)),e("span",kd,[s(a,{name:"SelectGroup"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1991]||(n[1991]=o("SelectGroup"))]),_:1})]),n[1993]||(n[1993]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2367]||(n[2367]=o(`
`)),e("span",qd,[n[1995]||(n[1995]=e("span",{style:{color:"#E1E4E8"}},"          </",-1)),e("span",Dd,[s(a,{name:"SelectViewport"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nonce",
    "description": "<p>Will add <code>nonce</code> attribute to the style tag which can be used by Content Security Policy. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code>.</p>\\n",
    "type": "string",
    "required": false
  }
]`})]),default:l(()=>[n[1994]||(n[1994]=o("SelectViewport"))]),_:1})]),n[1996]||(n[1996]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2368]||(n[2368]=o(`
`)),n[2369]||(n[2369]=e("span",{class:"line"},null,-1)),n[2370]||(n[2370]=o(`
`)),e("span",Ad,[n[1998]||(n[1998]=e("span",{style:{color:"#E1E4E8"}},"          <",-1)),e("span",Sd,[s(a,{name:"SelectScrollDownButton"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[1997]||(n[1997]=o("SelectScrollDownButton"))]),_:1})]),n[1999]||(n[1999]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[2e3]||(n[2e3]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[2001]||(n[2001]=e("span",{style:{color:"#9ECBFF"}},'"flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default"',-1)),n[2002]||(n[2002]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2371]||(n[2371]=o(`
`)),n[2372]||(n[2372]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"            <"),e("span",{style:{color:"#85E89D"}},"Icon"),e("span",{style:{color:"#B392F0"}}," icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:chevron-down"'),e("span",{style:{color:"#E1E4E8"}}," />")],-1)),n[2373]||(n[2373]=o(`
`)),e("span",Rd,[n[2004]||(n[2004]=e("span",{style:{color:"#E1E4E8"}},"          </",-1)),e("span",Vd,[s(a,{name:"SelectScrollDownButton"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[2003]||(n[2003]=o("SelectScrollDownButton"))]),_:1})]),n[2005]||(n[2005]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2374]||(n[2374]=o(`
`)),e("span",Id,[n[2007]||(n[2007]=e("span",{style:{color:"#E1E4E8"}},"        </",-1)),e("span",Pd,[s(a,{name:"SelectContent"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "align",
    "description": "<p>The preferred alignment against the trigger.\\nMay change when collisions occur.</p>\\n",
    "type": "\\"start\\" | \\"center\\" | \\"end\\"",
    "required": false
  },
  {
    "name": "alignOffset",
    "description": "<p>An offset in pixels from the <code>start</code> or <code>end</code> alignment options.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "arrowPadding",
    "description": "<p>The padding between the arrow and the edges of the content.\\nIf your content has border-radius, this will prevent it from\\noverflowing the corners.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "avoidCollisions",
    "description": "<p>When <code>true</code>, overrides the side and align preferences\\nto prevent collisions with boundary edges.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "bodyLock",
    "description": "<p>The document.body will be lock, and scrolling will be disabled.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "collisionBoundary",
    "description": "<p>The element used as the collision boundary. By default\\nthis is the viewport, though you can provide additional\\nelement(s) to be included in this check.</p>\\n",
    "type": "Element | (Element | null)[] | null",
    "required": false
  },
  {
    "name": "collisionPadding",
    "description": "<p>The distance in pixels from the boundary edges where collision\\ndetection should occur. Accepts a number (same for all sides),\\nor a partial padding object, for example: { top: 20, left: 20 }.</p>\\n",
    "type": "number | Partial<Record<\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\", number>>",
    "required": false
  },
  {
    "name": "disableUpdateOnLayoutShift",
    "description": "<p>Whether to disable the update position for the content when the layout shifted.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "hideWhenDetached",
    "description": "<p>Whether to hide the content when the trigger becomes fully occluded.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "position",
    "description": "<p>The positioning mode to use</p>\\n<p><code>item-aligned (default)</code> - behaves similarly to a native MacOS menu by positioning content relative to the active item. &lt;br&gt;\\n<code>popper</code> - positions content in the same way as our other primitives, for example <code>Popover</code> or <code>DropdownMenu</code>.</p>\\n",
    "type": "\\"popper\\" | \\"item-aligned\\"",
    "required": false
  },
  {
    "name": "positionStrategy",
    "description": "<p>The type of CSS position property to use.</p>\\n",
    "type": "\\"fixed\\" | \\"absolute\\"",
    "required": false
  },
  {
    "name": "prioritizePosition",
    "description": "<p>Force content to be position within the viewport.</p>\\n<p>Might overlap the reference element, which may not be desired.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "reference",
    "description": "<p>The custom element or virtual element that will be set as the reference\\nto position the floating element.</p>\\n<p>If provided, it will replace the default anchor element.</p>\\n",
    "type": "ReferenceElement",
    "required": false
  },
  {
    "name": "side",
    "description": "<p>The preferred side of the trigger to render against when open.\\nWill be reversed when collisions occur and avoidCollisions\\nis enabled.</p>\\n",
    "type": "\\"top\\" | \\"right\\" | \\"bottom\\" | \\"left\\"",
    "required": false
  },
  {
    "name": "sideOffset",
    "description": "<p>The distance in pixels from the trigger.</p>\\n",
    "type": "number",
    "required": false
  },
  {
    "name": "sticky",
    "description": "<p>The sticky behavior on the align axis. <code>partial</code> will keep the\\ncontent in the boundary as long as the trigger is at least partially\\nin the boundary whilst &quot;always&quot; will keep the content in the boundary\\nregardless.</p>\\n",
    "type": "\\"partial\\" | \\"always\\"",
    "required": false
  },
  {
    "name": "updatePositionStrategy",
    "description": "<p>Strategy to update the position of the floating element on every animation frame.</p>\\n",
    "type": "\\"always\\" | \\"optimized\\"",
    "required": false
  }
]`}),s(t,{title:"emits",data:`[
  {
    "name": "closeAutoFocus",
    "description": "<p>Event handler called when auto-focusing on close.\\nCan be prevented.</p>\\n",
    "type": "[event: Event]"
  },
  {
    "name": "escapeKeyDown",
    "description": "<p>Event handler called when the escape key is down.\\nCan be prevented.</p>\\n",
    "type": "[event: KeyboardEvent]"
  },
  {
    "name": "pointerDownOutside",
    "description": "<p>Event handler called when a <code>pointerdown</code> event happens outside of the <code>DismissableLayer</code>.\\nCan be prevented.</p>\\n",
    "type": "[event: PointerDownOutsideEvent]"
  }
]`})]),default:l(()=>[n[2006]||(n[2006]=o("SelectContent"))]),_:1})]),n[2008]||(n[2008]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2375]||(n[2375]=o(`
`)),e("span",Gd,[n[2010]||(n[2010]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",Hd,[s(a,{name:"SelectPortal"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "defer",
    "description": "<p>Defer the resolving of a Teleport target until other parts of the\\napplication have mounted (requires Vue 3.5.0+)</p>\\n<p><a href=\\"https://vuejs.org/guide/built-ins/teleport.html#deferred-teleport\\" target=\\"_blank\\">reference</a></p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>Disable teleport and render the component inline</p>\\n<p><a href=\\"https://vuejs.org/guide/built-ins/teleport.html#disabling-teleport\\" target=\\"_blank\\">reference</a></p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "forceMount",
    "description": "<p>Used to force mounting when more control is needed. Useful when\\ncontrolling animation with Vue animation libraries.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "to",
    "description": "<p>Vue native teleport component prop <code>:to</code></p>\\n<p><a href=\\"https://vuejs.org/guide/built-ins/teleport.html#basic-usage\\" target=\\"_blank\\">reference</a></p>\\n",
    "type": "string | HTMLElement",
    "required": false
  }
]`})]),default:l(()=>[n[2009]||(n[2009]=o("SelectPortal"))]),_:1})]),n[2011]||(n[2011]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2376]||(n[2376]=o(`
`)),e("span",Md,[n[2013]||(n[2013]=e("span",{style:{color:"#E1E4E8"}},"    </",-1)),e("span",jd,[s(a,{name:"SelectRoot"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "autocomplete",
    "description": "<p>Native html input <code>autocomplete</code> attribute.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "by",
    "description": "<p>Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared.</p>\\n",
    "type": "string | ((a: AcceptableValue, b: AcceptableValue) => boolean)",
    "required": false
  },
  {
    "name": "defaultOpen",
    "description": "<p>The open state of the select when it is initially rendered. Use when you do not need to control its open state.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "defaultValue",
    "description": "<p>The value of the select when initially rendered. Use when you do not need to control the state of the Select</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "dir",
    "description": "<p>The reading direction of the combobox when applicable. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>When <code>true</code>, prevents the user from interacting with Select</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled value of the Select. Can be bind as <code>v-model</code>.</p>\\n",
    "type": "AcceptableValue | AcceptableValue[]",
    "required": false
  },
  {
    "name": "multiple",
    "description": "<p>Whether multiple options can be selected or not.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "name",
    "description": "<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "open",
    "description": "<p>The controlled open state of the Select. Can be bind as <code>v-model:open</code>.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "required",
    "description": "<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),s(t,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called when the value changes.</p>\\n",
    "type": "[value: AcceptableValue]"
  },
  {
    "name": "update:open",
    "description": "<p>Event handler called when the open state of the context menu changes.</p>\\n",
    "type": "[value: boolean]"
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "<p>Current input values</p>\\n",
    "type": "AcceptableValue | AcceptableValue[] | undefined"
  },
  {
    "name": "open",
    "description": "<p>Current open state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[2012]||(n[2012]=o("SelectRoot"))]),_:1})]),n[2014]||(n[2014]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2377]||(n[2377]=o(`
`)),n[2378]||(n[2378]=e("span",{class:"line"},null,-1)),n[2379]||(n[2379]=o(`
`)),e("span",Wd,[n[2016]||(n[2016]=e("span",{style:{color:"#E1E4E8"}},"    <",-1)),e("span",Od,[s(a,{name:"CalendarRoot"},{content:l(({})=>[s(t,{title:"slots",data:`[
  {
    "name": "date",
    "description": "<p>The current date of the placeholder</p>\\n",
    "type": "DateValue"
  },
  {
    "name": "grid",
    "description": "<p>The grid of dates</p>\\n",
    "type": "Grid<DateValue>[]"
  },
  {
    "name": "weekDays",
    "description": "<p>The days of the week</p>\\n",
    "type": "string[]"
  },
  {
    "name": "weekStartsOn",
    "description": "<p>The start of the week</p>\\n",
    "type": "0 | 1 | 2 | 3 | 4 | 5 | 6"
  },
  {
    "name": "locale",
    "description": "<p>The calendar locale</p>\\n",
    "type": "string"
  },
  {
    "name": "fixedWeeks",
    "description": "<p>Whether or not to always display 6 weeks in the calendar</p>\\n",
    "type": "boolean"
  },
  {
    "name": "modelValue",
    "description": "<p>The current date of the calendar</p>\\n",
    "type": "CalendarDate | CalendarDateTime | ZonedDateTime"
  }
]`})]),default:l(()=>[n[2015]||(n[2015]=o("CalendarRoot"))]),_:1})])]),n[2380]||(n[2380]=o(`
`)),n[2381]||(n[2381]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      v-slot"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"{ weekDays, grid }"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[2382]||(n[2382]=o(`
`)),n[2383]||(n[2383]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      :"),e("span",{style:{color:"#B392F0"}},"model-value"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"value"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[2384]||(n[2384]=o(`
`)),n[2385]||(n[2385]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      :"),e("span",{style:{color:"#B392F0"}},"locale"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"locale"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[2386]||(n[2386]=o(`
`)),n[2387]||(n[2387]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"mt-6 rounded-xl bg-white p-4 shadow-md"')],-1)),n[2388]||(n[2388]=o(`
`)),n[2389]||(n[2389]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"      fixed-weeks")],-1)),n[2390]||(n[2390]=o(`
`)),n[2391]||(n[2391]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    >")],-1)),n[2392]||(n[2392]=o(`
`)),e("span",Ld,[n[2018]||(n[2018]=e("span",{style:{color:"#E1E4E8"}},"      <",-1)),e("span",Ud,[s(a,{name:"CalendarHeader"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[2017]||(n[2017]=o("CalendarHeader"))]),_:1})]),n[2019]||(n[2019]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[2020]||(n[2020]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[2021]||(n[2021]=e("span",{style:{color:"#9ECBFF"}},'"flex items-center justify-between"',-1)),n[2022]||(n[2022]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2393]||(n[2393]=o(`
`)),e("span",Nd,[n[2024]||(n[2024]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",$d,[s(a,{name:"CalendarPrev"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "prevPage",
    "description": "<p>The function to be used for the prev page. Overwrites the <code>prevPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[2023]||(n[2023]=o("CalendarPrev"))]),_:1})])]),n[2394]||(n[2394]=o(`
`)),n[2395]||(n[2395]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"inline-flex items-center cursor-pointer text-black justify-center rounded-[9px] bg-transparent w-8 h-8 hover:bg-black hover:text-white active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black"')],-1)),n[2396]||(n[2396]=o(`
`)),n[2397]||(n[2397]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        >")],-1)),n[2398]||(n[2398]=o(`
`)),n[2399]||(n[2399]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          <"),e("span",{style:{color:"#85E89D"}},"Icon")],-1)),n[2400]||(n[2400]=o(`
`)),n[2401]||(n[2401]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"            icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:chevron-left"')],-1)),n[2402]||(n[2402]=o(`
`)),n[2403]||(n[2403]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"            class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"w-4 h-4"')],-1)),n[2404]||(n[2404]=o(`
`)),n[2405]||(n[2405]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          />")],-1)),n[2406]||(n[2406]=o(`
`)),e("span",zd,[n[2026]||(n[2026]=e("span",{style:{color:"#E1E4E8"}},"        </",-1)),e("span",Kd,[s(a,{name:"CalendarPrev"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "prevPage",
    "description": "<p>The function to be used for the prev page. Overwrites the <code>prevPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[2025]||(n[2025]=o("CalendarPrev"))]),_:1})]),n[2027]||(n[2027]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2407]||(n[2407]=o(`
`)),e("span",Zd,[n[2029]||(n[2029]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",Jd,[s(a,{name:"CalendarHeading"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "headingValue",
    "description": "<p>Current month and year</p>\\n",
    "type": "string"
  }
]`})]),default:l(()=>[n[2028]||(n[2028]=o("CalendarHeading"))]),_:1})]),n[2030]||(n[2030]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[2031]||(n[2031]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[2032]||(n[2032]=e("span",{style:{color:"#9ECBFF"}},'"text-sm text-black font-medium"',-1)),n[2033]||(n[2033]=e("span",{style:{color:"#E1E4E8"}}," />",-1))]),n[2408]||(n[2408]=o(`
`)),n[2409]||(n[2409]=e("span",{class:"line"},null,-1)),n[2410]||(n[2410]=o(`
`)),e("span",Yd,[n[2035]||(n[2035]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",Qd,[s(a,{name:"CalendarNext"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nextPage",
    "description": "<p>The function to be used for the next page. Overwrites the <code>nextPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[2034]||(n[2034]=o("CalendarNext"))]),_:1})])]),n[2411]||(n[2411]=o(`
`)),n[2412]||(n[2412]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"inline-flex items-center cursor-pointer justify-center text-black rounded-[9px] bg-transparent w-8 h-8 hover:bg-black hover:text-white active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black"')],-1)),n[2413]||(n[2413]=o(`
`)),n[2414]||(n[2414]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        >")],-1)),n[2415]||(n[2415]=o(`
`)),n[2416]||(n[2416]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          <"),e("span",{style:{color:"#85E89D"}},"Icon")],-1)),n[2417]||(n[2417]=o(`
`)),n[2418]||(n[2418]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"            icon"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"radix-icons:chevron-right"')],-1)),n[2419]||(n[2419]=o(`
`)),n[2420]||(n[2420]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"            class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"w-4 h-4"')],-1)),n[2421]||(n[2421]=o(`
`)),n[2422]||(n[2422]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          />")],-1)),n[2423]||(n[2423]=o(`
`)),e("span",Xd,[n[2037]||(n[2037]=e("span",{style:{color:"#E1E4E8"}},"        </",-1)),e("span",_d,[s(a,{name:"CalendarNext"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"button\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "nextPage",
    "description": "<p>The function to be used for the next page. Overwrites the <code>nextPage</code> function set on the <code>CalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[2036]||(n[2036]=o("CalendarNext"))]),_:1})]),n[2038]||(n[2038]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2424]||(n[2424]=o(`
`)),e("span",eE,[n[2040]||(n[2040]=e("span",{style:{color:"#E1E4E8"}},"      </",-1)),e("span",nE,[s(a,{name:"CalendarHeader"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[2039]||(n[2039]=o("CalendarHeader"))]),_:1})]),n[2041]||(n[2041]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2425]||(n[2425]=o(`
`)),n[2426]||(n[2426]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      <"),e("span",{style:{color:"#85E89D"}},"div")],-1)),n[2427]||(n[2427]=o(`
`)),n[2428]||(n[2428]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"        class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0"')],-1)),n[2429]||(n[2429]=o(`
`)),n[2430]||(n[2430]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      >")],-1)),n[2431]||(n[2431]=o(`
`)),e("span",oE,[n[2043]||(n[2043]=e("span",{style:{color:"#E1E4E8"}},"        <",-1)),e("span",sE,[s(a,{name:"CalendarGrid"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"table\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[2042]||(n[2042]=o("CalendarGrid"))]),_:1})])]),n[2432]||(n[2432]=o(`
`)),n[2433]||(n[2433]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"          v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"month "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," grid"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[2434]||(n[2434]=o(`
`)),n[2435]||(n[2435]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"          :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"month.value."),e("span",{style:{color:"#B392F0"}},"toString"),e("span",{style:{color:"#E1E4E8"}},"()"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[2436]||(n[2436]=o(`
`)),n[2437]||(n[2437]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"          class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"w-full border-collapse select-none space-y-1"')],-1)),n[2438]||(n[2438]=o(`
`)),n[2439]||(n[2439]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"        >")],-1)),n[2440]||(n[2440]=o(`
`)),e("span",lE,[n[2045]||(n[2045]=e("span",{style:{color:"#E1E4E8"}},"          <",-1)),e("span",tE,[s(a,{name:"CalendarGridHead"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"thead\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[2044]||(n[2044]=o("CalendarGridHead"))]),_:1})]),n[2046]||(n[2046]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2441]||(n[2441]=o(`
`)),e("span",aE,[n[2048]||(n[2048]=e("span",{style:{color:"#E1E4E8"}},"            <",-1)),e("span",rE,[s(a,{name:"CalendarGridRow"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tr\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[2047]||(n[2047]=o("CalendarGridRow"))]),_:1})]),n[2049]||(n[2049]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[2050]||(n[2050]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[2051]||(n[2051]=e("span",{style:{color:"#9ECBFF"}},'"mb-1 grid w-full grid-cols-7"',-1)),n[2052]||(n[2052]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2442]||(n[2442]=o(`
`)),e("span",pE,[n[2054]||(n[2054]=e("span",{style:{color:"#E1E4E8"}},"              <",-1)),e("span",iE,[s(a,{name:"CalendarHeadCell"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"th\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[2053]||(n[2053]=o("CalendarHeadCell"))]),_:1})])]),n[2443]||(n[2443]=o(`
`)),n[2444]||(n[2444]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"                v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"day "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," weekDays"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[2445]||(n[2445]=o(`
`)),n[2446]||(n[2446]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"day"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[2447]||(n[2447]=o(`
`)),n[2448]||(n[2448]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"                class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"rounded-md text-xs text-green8"')],-1)),n[2449]||(n[2449]=o(`
`)),n[2450]||(n[2450]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              >")],-1)),n[2451]||(n[2451]=o(`
`)),n[2452]||(n[2452]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                {{ day }}")],-1)),n[2453]||(n[2453]=o(`
`)),e("span",dE,[n[2056]||(n[2056]=e("span",{style:{color:"#E1E4E8"}},"              </",-1)),e("span",EE,[s(a,{name:"CalendarHeadCell"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"th\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[2055]||(n[2055]=o("CalendarHeadCell"))]),_:1})]),n[2057]||(n[2057]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2454]||(n[2454]=o(`
`)),e("span",yE,[n[2059]||(n[2059]=e("span",{style:{color:"#E1E4E8"}},"            </",-1)),e("span",cE,[s(a,{name:"CalendarGridRow"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tr\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[2058]||(n[2058]=o("CalendarGridRow"))]),_:1})]),n[2060]||(n[2060]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2455]||(n[2455]=o(`
`)),e("span",uE,[n[2062]||(n[2062]=e("span",{style:{color:"#E1E4E8"}},"          </",-1)),e("span",mE,[s(a,{name:"CalendarGridHead"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"thead\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[2061]||(n[2061]=o("CalendarGridHead"))]),_:1})]),n[2063]||(n[2063]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2456]||(n[2456]=o(`
`)),e("span",fE,[n[2065]||(n[2065]=e("span",{style:{color:"#E1E4E8"}},"          <",-1)),e("span",FE,[s(a,{name:"CalendarGridBody"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tbody\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[2064]||(n[2064]=o("CalendarGridBody"))]),_:1})]),n[2066]||(n[2066]=e("span",{style:{color:"#B392F0"}}," class",-1)),n[2067]||(n[2067]=e("span",{style:{color:"#E1E4E8"}},"=",-1)),n[2068]||(n[2068]=e("span",{style:{color:"#9ECBFF"}},'"grid"',-1)),n[2069]||(n[2069]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2457]||(n[2457]=o(`
`)),e("span",gE,[n[2071]||(n[2071]=e("span",{style:{color:"#E1E4E8"}},"            <",-1)),e("span",CE,[s(a,{name:"CalendarGridRow"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tr\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[2070]||(n[2070]=o("CalendarGridRow"))]),_:1})])]),n[2458]||(n[2458]=o(`
`)),n[2459]||(n[2459]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"              v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"(weekDates, index) "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," month.rows"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[2460]||(n[2460]=o(`
`)),n[2461]||(n[2461]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"`weekDate-${'),e("span",{style:{color:"#E1E4E8"}},"index"),e("span",{style:{color:"#9ECBFF"}},'}`"')],-1)),n[2462]||(n[2462]=o(`
`)),n[2463]||(n[2463]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"              class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"grid grid-cols-7"')],-1)),n[2464]||(n[2464]=o(`
`)),n[2465]||(n[2465]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"            >")],-1)),n[2466]||(n[2466]=o(`
`)),e("span",bE,[n[2073]||(n[2073]=e("span",{style:{color:"#E1E4E8"}},"              <",-1)),e("span",hE,[s(a,{name:"CalendarCell"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"td\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "date",
    "description": "<p>The date value for the cell</p>\\n",
    "type": "DateValue",
    "required": true
  }
]`})]),default:l(()=>[n[2072]||(n[2072]=o("CalendarCell"))]),_:1})])]),n[2467]||(n[2467]=o(`
`)),n[2468]||(n[2468]=e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"                v-for"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"weekDate "),e("span",{style:{color:"#F97583"}},"in"),e("span",{style:{color:"#E1E4E8"}}," weekDates"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[2469]||(n[2469]=o(`
`)),n[2470]||(n[2470]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                :"),e("span",{style:{color:"#B392F0"}},"key"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"weekDate."),e("span",{style:{color:"#B392F0"}},"toString"),e("span",{style:{color:"#E1E4E8"}},"()"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[2471]||(n[2471]=o(`
`)),n[2472]||(n[2472]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                :"),e("span",{style:{color:"#B392F0"}},"date"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"weekDate"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[2473]||(n[2473]=o(`
`)),n[2474]||(n[2474]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"                class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"relative text-center text-sm"')],-1)),n[2475]||(n[2475]=o(`
`)),n[2476]||(n[2476]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"              >")],-1)),n[2477]||(n[2477]=o(`
`)),e("span",wE,[n[2075]||(n[2075]=e("span",{style:{color:"#E1E4E8"}},"                <",-1)),e("span",BE,[s(a,{name:"CalendarCellTrigger"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"div\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "day",
    "description": "<p>The date value provided to the cell trigger</p>\\n",
    "type": "DateValue",
    "required": true
  },
  {
    "name": "month",
    "description": "<p>The month in which the cell is rendered</p>\\n",
    "type": "DateValue",
    "required": true
  }
]`}),s(t,{title:"slots",data:`[
  {
    "name": "dayValue",
    "description": "<p>Current day</p>\\n",
    "type": "string"
  },
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "selected",
    "description": "<p>Current selected state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "today",
    "description": "<p>Current today state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "outsideView",
    "description": "<p>Current outside view state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "outsideVisibleView",
    "description": "<p>Current outside visible view state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "unavailable",
    "description": "<p>Current unavailable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:l(()=>[n[2074]||(n[2074]=o("CalendarCellTrigger"))]),_:1})])]),n[2478]||(n[2478]=o(`
`)),n[2479]||(n[2479]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                  :"),e("span",{style:{color:"#B392F0"}},"day"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"weekDate"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[2480]||(n[2480]=o(`
`)),n[2481]||(n[2481]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                  :"),e("span",{style:{color:"#B392F0"}},"month"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"'),e("span",{style:{color:"#E1E4E8"}},"month.value"),e("span",{style:{color:"#9ECBFF"}},'"')],-1)),n[2482]||(n[2482]=o(`
`)),n[2483]||(n[2483]=e("span",{class:"line"},[e("span",{style:{color:"#B392F0"}},"                  class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"relative flex items-center justify-center rounded-full whitespace-nowrap text-sm font-normal text-black w-8 h-8 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black data-[outside-view]:text-black/30 data-[selected]:!bg-green10 data-[selected]:text-white hover:bg-green5 data-[highlighted]:bg-green5 data-[unavailable]:pointer-events-none data-[unavailable]:text-black/30 data-[unavailable]:line-through before:absolute before:top-[5px] before:hidden before:rounded-full before:w-1 before:h-1 before:bg-white data-[today]:before:block data-[today]:before:bg-green9 "')],-1)),n[2484]||(n[2484]=o(`
`)),n[2485]||(n[2485]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"                />")],-1)),n[2486]||(n[2486]=o(`
`)),e("span",vE,[n[2077]||(n[2077]=e("span",{style:{color:"#E1E4E8"}},"              </",-1)),e("span",TE,[s(a,{name:"CalendarCell"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"td\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "date",
    "description": "<p>The date value for the cell</p>\\n",
    "type": "DateValue",
    "required": true
  }
]`})]),default:l(()=>[n[2076]||(n[2076]=o("CalendarCell"))]),_:1})]),n[2078]||(n[2078]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2487]||(n[2487]=o(`
`)),e("span",xE,[n[2080]||(n[2080]=e("span",{style:{color:"#E1E4E8"}},"            </",-1)),e("span",kE,[s(a,{name:"CalendarGridRow"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tr\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[2079]||(n[2079]=o("CalendarGridRow"))]),_:1})]),n[2081]||(n[2081]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2488]||(n[2488]=o(`
`)),e("span",qE,[n[2083]||(n[2083]=e("span",{style:{color:"#E1E4E8"}},"          </",-1)),e("span",DE,[s(a,{name:"CalendarGridBody"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"tbody\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[2082]||(n[2082]=o("CalendarGridBody"))]),_:1})]),n[2084]||(n[2084]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2489]||(n[2489]=o(`
`)),e("span",AE,[n[2086]||(n[2086]=e("span",{style:{color:"#E1E4E8"}},"        </",-1)),e("span",SE,[s(a,{name:"CalendarGrid"},{content:l(({})=>[s(t,{title:"props",data:`[
  {
    "name": "as",
    "description": "<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>\\n",
    "type": "AsTag | Component",
    "required": false,
    "default": "\\"table\\""
  },
  {
    "name": "asChild",
    "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\\n<p>Read our <a href=\\"https://www.reka-ui.com/docs/guides/composition\\">Composition</a> guide for more details.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`})]),default:l(()=>[n[2085]||(n[2085]=o("CalendarGrid"))]),_:1})]),n[2087]||(n[2087]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2490]||(n[2490]=o(`
`)),n[2491]||(n[2491]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      </"),e("span",{style:{color:"#85E89D"}},"div"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[2492]||(n[2492]=o(`
`)),e("span",RE,[n[2089]||(n[2089]=e("span",{style:{color:"#E1E4E8"}},"    </",-1)),e("span",VE,[s(a,{name:"CalendarRoot"},{content:l(({})=>[s(t,{title:"slots",data:`[
  {
    "name": "date",
    "description": "<p>The current date of the placeholder</p>\\n",
    "type": "DateValue"
  },
  {
    "name": "grid",
    "description": "<p>The grid of dates</p>\\n",
    "type": "Grid<DateValue>[]"
  },
  {
    "name": "weekDays",
    "description": "<p>The days of the week</p>\\n",
    "type": "string[]"
  },
  {
    "name": "weekStartsOn",
    "description": "<p>The start of the week</p>\\n",
    "type": "0 | 1 | 2 | 3 | 4 | 5 | 6"
  },
  {
    "name": "locale",
    "description": "<p>The calendar locale</p>\\n",
    "type": "string"
  },
  {
    "name": "fixedWeeks",
    "description": "<p>Whether or not to always display 6 weeks in the calendar</p>\\n",
    "type": "boolean"
  },
  {
    "name": "modelValue",
    "description": "<p>The current date of the calendar</p>\\n",
    "type": "CalendarDate | CalendarDateTime | ZonedDateTime"
  }
]`})]),default:l(()=>[n[2088]||(n[2088]=o("CalendarRoot"))]),_:1})]),n[2090]||(n[2090]=e("span",{style:{color:"#E1E4E8"}},">",-1))]),n[2493]||(n[2493]=o(`
`)),n[2494]||(n[2494]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  </"),e("span",{style:{color:"#85E89D"}},"div"),e("span",{style:{color:"#E1E4E8"}},">")],-1)),n[2495]||(n[2495]=o(`
`)),n[2496]||(n[2496]=e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")],-1))])])]),n[2499]||(n[2499]=e("div",{name:"tailwind.config.js",class:"language-js"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"js"),e("pre",{class:"shiki github-dark vp-code",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"const"),e("span",{style:{color:"#E1E4E8"}}," { "),e("span",{style:{color:"#79B8FF"}},"blackA"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"grass"),e("span",{style:{color:"#E1E4E8"}},", "),e("span",{style:{color:"#79B8FF"}},"green"),e("span",{style:{color:"#E1E4E8"}}," } "),e("span",{style:{color:"#F97583"}},"="),e("span",{style:{color:"#B392F0"}}," require"),e("span",{style:{color:"#E1E4E8"}},"("),e("span",{style:{color:"#9ECBFF"}},"'@radix-ui/colors'"),e("span",{style:{color:"#E1E4E8"}},")")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6A737D"}},"/** "),e("span",{style:{color:"#F97583"}},"@type"),e("span",{style:{color:"#B392F0"}}," {import('tailwindcss').Config}"),e("span",{style:{color:"#6A737D"}}," */")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"module"),e("span",{style:{color:"#E1E4E8"}},"."),e("span",{style:{color:"#79B8FF"}},"exports"),e("span",{style:{color:"#F97583"}}," ="),e("span",{style:{color:"#E1E4E8"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  content: ["),e("span",{style:{color:"#9ECBFF"}},"'./**/*.vue'"),e("span",{style:{color:"#E1E4E8"}},"],")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  theme: {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    extend: {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      colors: {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"        ..."),e("span",{style:{color:"#E1E4E8"}},"blackA,")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"        ..."),e("span",{style:{color:"#E1E4E8"}},"grass,")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F97583"}},"        ..."),e("span",{style:{color:"#E1E4E8"}},"green,")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"      },")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"    },")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  },")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  plugins: [],")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"}")])])])],-1))]),default:l(()=>[s(Fe)]),_:1}),n[2519]||(n[2519]=E("",2)),s(F,{data:[{keys:["Tab"],description:"When focus moves onto the calendar, focuses the first navigation button."},{keys:["Space"],description:`
      <span>
          When the focus is on either <Code>CalendarNext</Code> or <Code>CalendarPrev</Code>, it navigates the calendar. Otherwise, it selects the date.
      </span>
    `},{keys:["Enter"],description:`
      <span>
          When the focus is on either <Code>CalendarNext</Code> or <Code>CalendarPrev</Code>, it navigates the calendar. Otherwise, it selects the date.
      </span>
    `},{keys:["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"],description:`
        When the focus is on <Code>CalendarCellTrigger</Code>, it navigates the dates, changing the month/year/decade if necessary.
      `}]})])}}});export{HE as __pageData,ME as default};
