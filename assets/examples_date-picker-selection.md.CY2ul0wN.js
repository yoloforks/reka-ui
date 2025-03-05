import{a$ as A,b0 as P,I as R,G as E,b1 as M,b2 as O,b3 as I,b4 as k,b5 as S,b6 as $,b7 as G,b8 as Z,b9 as N,ba as v,bb as W,F as u}from"./chunks/theme.xbZkG0Yt.js";import{d as U,f as Q,o as d,c as y,b as n,F as f,a6 as g,e as o,p as t,u as i,t as F,n as x,L as c,l as b,a3 as s,aM as Y,au as C}from"./chunks/framework.6UEeBrHH.js";const H={class:"rounded-xl bg-white shadow-sm border flex flex-col-reverse lg:flex-row"},j={class:"lg:w-40 lg:border-r border-gray-100 p-4"},K=["onClick"],z={key:0,class:"flex items-center"},J={class:"font-semibold flex-1 text-center"},X={key:1,class:"flex items-center"},h={class:"font-semibold flex-1 text-center"},_={class:"flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0"},nn={class:"flex items-center border rounded-md p-1 shadow-sm [[data-invalid]_&]:border-red-500"},en={class:"flex items-center border rounded-md p-1 shadow-sm [[data-invalid]_&]:border-red-500"},sn=U({__name:"index",setup(V){const B=A("en-UK"),e=Q(),D=[{label:"Today",action:()=>{const p=u(E());e.value={start:p,end:p}}},{label:"Yesterday",action:()=>{const p=u(E()).subtract({days:1});e.value={start:p,end:p}}},{label:"Last 7 days",action:()=>{e.value={start:u(E()).subtract({days:6}),end:u(E())}}},{label:"Last 30 days",action:()=>{e.value={start:u(E()).subtract({days:29}),end:u(E())}}},{label:"This month",action:()=>{const p=u(E()),l=p.set({day:1});e.value={start:l,end:p}}},{label:"Last month",action:()=>{const a=u(E()).subtract({months:1}).set({day:1}),r=a.add({months:1}).subtract({days:1});e.value={start:a,end:r}}},{label:"This quarter",action:()=>{const p=u(E()),l=p.month,a=l-l%3,r=p.set({month:a,day:1});e.value={start:r,end:p}}},{label:"Last quarter",action:()=>{const p=u(E()),l=p.month,a=Math.floor(l/3);let r;a===0?r=p.subtract({years:1}).set({month:10,day:1}):r=p.set({month:a*3-2,day:1});const m=r.add({months:3}).subtract({days:1});e.value={start:r,end:m}}},{label:"This year",action:()=>{const p=u(E()),l=p.set({month:1,day:1});e.value={start:l,end:p}}},{label:"Last year",action:()=>{const a=u(E()).subtract({years:1}).set({month:1,day:1}),r=a.add({years:1}).subtract({days:1});e.value={start:a,end:r}}}];return(p,l)=>(d(),y("div",H,[n("div",j,[(d(),y(f,null,g(D,a=>n("button",{key:a.label,class:"flex w-full rounded-md bg-transparent hover:bg-gray-100 transition px-3 py-2 text-left text-[13px]",onClick:a.action},F(a.label),9,K)),64))]),n("div",null,[o(i(N),{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=a=>e.value=a),class:"flex space-y-4 flex-col lg:flex-row lg:space-y-0 p-4","fixed-weeks":"","number-of-months":2,locale:"en-UK"},{default:t(({weekDays:a,grid:r})=>[(d(!0),y(f,null,g(r,(m,T)=>(d(),y("div",{key:m.value.toString(),class:x({"mr-4":T===0})},[T===0?(d(),y("div",z,[o(i(P),{class:"inline-flex items-center cursor-pointer text-black justify-center rounded-md bg-transparent w-7 h-7 hover:bg-stone-50 active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black"},{default:t(()=>[o(i(R),{icon:"radix-icons:chevron-left",class:"w-4 h-4"})]),_:1}),n("span",J,F(i(B).custom(m.value.toDate(i(E)()),{month:"long",year:"numeric"})),1),l[2]||(l[2]=n("span",{class:"w-7"},null,-1))])):c("",!0),T===r.length-1?(d(),y("div",X,[l[3]||(l[3]=n("span",{class:"w-7"},null,-1)),n("span",h,F(i(B).custom(m.value.toDate(i(E)()),{month:"long",year:"numeric"})),1),o(i(M),{class:"place-self-end inline-flex items-center cursor-pointer justify-center text-black rounded-md bg-transparent w-7 h-7 hover:bg-stone-50 active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black"},{default:t(()=>[o(i(R),{icon:"radix-icons:chevron-right",class:"w-4 h-4"})]),_:1})])):c("",!0),n("div",_,[o(i(O),{class:"w-full border-collapse select-none space-y-1"},{default:t(()=>[o(i(I),null,{default:t(()=>[o(i(k),{class:"mb-1 grid w-full grid-cols-7"},{default:t(()=>[(d(!0),y(f,null,g(a,w=>(d(),b(i(S),{key:w,class:"rounded-md text-xs text-green8"},{default:t(()=>[s(F(w),1)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024),o(i($),{class:"grid"},{default:t(()=>[(d(!0),y(f,null,g(m.rows,(w,L)=>(d(),b(i(k),{key:`weekDate-${L}`,class:"grid grid-cols-7"},{default:t(()=>[(d(!0),y(f,null,g(w,q=>(d(),b(i(G),{key:q.toString(),date:q,class:"aspect-square lg:w-[34px] my-0.5 p-0 first:[&:has([data-selected])]:rounded-l-full last:[&:has([data-selected])]:rounded-r-full [&:has([data-selected][data-selection-end])]:rounded-r-full [&:not(:has([data-highlighted])):has([data-selected][data-selection-start])]:rounded-l-full first:[&:has([data-highlighted])]:rounded-l-full last:[&:has([data-highlighted])]:rounded-r-full [&:has([data-highlighted-end])]:rounded-r-full [&:has([data-highlighted-start])]:rounded-l-full [&:has([data-selected])]:bg-green3 [&:has([data-highlighted])]:bg-green3"},{default:t(()=>[o(i(Z),{day:q,month:m.value,class:"relative flex items-center rounded-full justify-center whitespace-nowrap text-sm font-normal w-full h-full text-black outline-none focus:shadow-[0_0_0_2px] transition duration-100 focus:shadow-black hover:bg-green10 hover:text-white data-[selection-start]:bg-green10 data-[selection-end]:bg-green10 data-[selection-start]:text-white data-[selection-end]:text-white data-[highlighted-start]:bg-green10 data-[highlighted-start]:text-white data-[highlighted-end]:bg-green10 data-[highlighted-end]:text-white data-[unavailable]:pointer-events-none data-[unavailable]:text-black/30 data-[unavailable]:line-through before:absolute before:bottom-[3px] before:hidden before:rounded-full before:w-1 before:h-1 before:bg-white data-[today]:before:block data-[today]:before:bg-green9 data-[outside-month]:opacity-25"},null,8,["day","month"])]),_:2},1032,["date"]))),128))]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)])],2))),128))]),_:1},8,["modelValue"]),o(i(W),{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=a=>e.value=a),locale:"en-UK",class:"p-4 border-t border-gray-100 flex items-center select-none"},{default:t(({segments:a})=>[n("div",nn,[(d(!0),y(f,null,g(a.start,r=>(d(),y(f,{key:r.part},[r.part==="literal"?(d(),b(i(v),{key:0,part:r.part,type:"start"},{default:t(()=>[s(F(r.value),1)]),_:2},1032,["part"])):(d(),b(i(v),{key:1,part:r.part,class:x(["text-center rounded p-0.5 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-green9",[r.part==="year"?"w-10":"w-8"]]),type:"start"},{default:t(()=>[s(F(r.value),1)]),_:2},1032,["part","class"]))],64))),128))]),l[4]||(l[4]=n("span",{class:"mx-2"},"-",-1)),n("div",en,[(d(!0),y(f,null,g(a.end,r=>(d(),y(f,{key:r.part},[r.part==="literal"?(d(),b(i(v),{key:0,part:r.part,type:"end"},{default:t(()=>[s(F(r.value),1)]),_:2},1032,["part"])):(d(),b(i(v),{key:1,part:r.part,class:x(["text-center rounded p-0.5 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-green9",[r.part==="year"?"w-10":"w-8"]]),type:"end"},{default:t(()=>[s(F(r.value),1)]),_:2},1032,["part","class"]))],64))),128))]),l[5]||(l[5]=n("span",{class:"ml-4 text-red-500 font-semibold text-sm [[data-invalid]_&]:block hidden"},"Invalid date",-1))]),_:1},8,["modelValue"])])]))}}),on={name:"index.vue",class:"language-vue"},tn={class:"shiki github-dark vp-code",tabindex:"0"},ln={class:"line"},an={style:{color:"#85E89D"}},rn={class:"line"},pn={style:{color:"#85E89D"}},dn={class:"line"},En={style:{color:"#85E89D"}},yn={class:"line"},un={style:{color:"#85E89D"}},mn={class:"line"},fn={style:{color:"#85E89D"}},Fn={class:"line"},gn={style:{color:"#85E89D"}},bn={class:"line"},Cn={style:{color:"#85E89D"}},wn={class:"line"},vn={style:{color:"#85E89D"}},Bn={class:"line"},Dn={style:{color:"#85E89D"}},Tn={class:"line"},qn={style:{color:"#85E89D"}},xn={class:"line"},Rn={style:{color:"#85E89D"}},kn={class:"line"},cn={style:{color:"#85E89D"}},Vn={class:"line"},Ln={style:{color:"#85E89D"}},An={class:"line"},Pn={style:{color:"#85E89D"}},Mn={class:"line"},On={style:{color:"#85E89D"}},In={class:"line"},Sn={style:{color:"#85E89D"}},$n={class:"line"},Gn={style:{color:"#85E89D"}},Zn={class:"line"},Nn={style:{color:"#85E89D"}},Wn={class:"line"},Un={style:{color:"#85E89D"}},Qn={class:"line"},Yn={style:{color:"#85E89D"}},Hn={class:"line"},jn={style:{color:"#85E89D"}},Kn={class:"line"},zn={style:{color:"#85E89D"}},Jn={class:"line"},Xn={style:{color:"#85E89D"}},hn={class:"line"},_n={style:{color:"#85E89D"}},ne={class:"line"},ee={style:{color:"#85E89D"}},se={class:"line"},oe={style:{color:"#85E89D"}},te={class:"line"},le={style:{color:"#85E89D"}},ae={class:"line"},re={style:{color:"#85E89D"}},pe={class:"line"},ie={style:{color:"#85E89D"}},de={class:"line"},Ee={style:{color:"#85E89D"}},ye={class:"line"},ue={style:{color:"#85E89D"}},ge=JSON.parse('{"title":"Date Picker Selection","description":"","frontmatter":{"title":"Date Picker Selection","tags":["Range Calendar","Date Range Field"],"sidebar":true},"headers":[{"level":3,"title":"Date Picker Selection","slug":"date-picker-selection-1","link":"#date-picker-selection-1","children":[]}],"relativePath":"examples/date-picker-selection.md","filePath":"examples/date-picker-selection.md","lastUpdated":1741142868000}'),me={name:"examples/date-picker-selection.md"},be=Object.assign(me,{setup(V){return(B,e)=>{const D=C("Description"),p=C("Tags"),l=C("link-hover-card-content"),a=C("link-hover-card"),r=C("ComponentPreview"),m=C("ExampleSection");return d(),y("div",null,[e[664]||(e[664]=Y('<h1 id="date-picker-selection" tabindex="-1" class="group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max">Date Picker Selection <a class="header-anchor [&amp;_span]:focus:opacity-100 [&amp;_span_&gt;_span]:focus:outline" href="#date-picker-selection" aria-label="Permalink to &quot;Date Picker Selection&quot;"><span class="absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex">​<span class="flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"><svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></span></span></a></h1>',1)),o(D,null,{default:t(()=>e[0]||(e[0]=[n("p",null,"Date pickers let users select a date or a range of dates. They commonly use in booking systems.",-1)])),_:1}),o(p),o(r,{name:"DatePickerSelection",type:"example",files:"%7B%22tailwind%22%3A%5B%22index.vue%22%5D%7D"},{tailwind:t(()=>[n("div",on,[e[661]||(e[661]=n("button",{title:"Copy Code",class:"copy"},null,-1)),e[662]||(e[662]=n("span",{class:"lang"},"vue",-1)),n("pre",tn,[n("code",null,[e[87]||(e[87]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"<"),n("span",{style:{color:"#85E89D"}},"script"),n("span",{style:{color:"#B392F0"}}," setup"),n("span",{style:{color:"#B392F0"}}," lang"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"ts"'),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[88]||(e[88]=s(`
`)),e[89]||(e[89]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"import"),n("span",{style:{color:"#E1E4E8"}}," { Icon } "),n("span",{style:{color:"#F97583"}},"from"),n("span",{style:{color:"#9ECBFF"}}," '@iconify/vue'")],-1)),e[90]||(e[90]=s(`
`)),e[91]||(e[91]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"import"),n("span",{style:{color:"#E1E4E8"}}," { getLocalTimeZone, today } "),n("span",{style:{color:"#F97583"}},"from"),n("span",{style:{color:"#9ECBFF"}}," '@internationalized/date'")],-1)),e[92]||(e[92]=s(`
`)),e[93]||(e[93]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"import"),n("span",{style:{color:"#E1E4E8"}}," { DateRangeFieldInput, DateRangeFieldRoot, RangeCalendarCell, RangeCalendarCellTrigger, RangeCalendarGrid, RangeCalendarGridBody, RangeCalendarGridHead, RangeCalendarGridRow, RangeCalendarHeadCell, RangeCalendarNext, RangeCalendarPrev, RangeCalendarRoot, useDateFormatter } "),n("span",{style:{color:"#F97583"}},"from"),n("span",{style:{color:"#9ECBFF"}}," 'reka-ui'")],-1)),e[94]||(e[94]=s(`
`)),e[95]||(e[95]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"import"),n("span",{style:{color:"#F97583"}}," type"),n("span",{style:{color:"#E1E4E8"}}," { DateRange } "),n("span",{style:{color:"#F97583"}},"from"),n("span",{style:{color:"#9ECBFF"}}," 'reka-ui'")],-1)),e[96]||(e[96]=s(`
`)),e[97]||(e[97]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"import"),n("span",{style:{color:"#E1E4E8"}}," { ref } "),n("span",{style:{color:"#F97583"}},"from"),n("span",{style:{color:"#9ECBFF"}}," 'vue'")],-1)),e[98]||(e[98]=s(`
`)),e[99]||(e[99]=n("span",{class:"line"},null,-1)),e[100]||(e[100]=s(`
`)),e[101]||(e[101]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"const"),n("span",{style:{color:"#79B8FF"}}," formatter"),n("span",{style:{color:"#F97583"}}," ="),n("span",{style:{color:"#B392F0"}}," useDateFormatter"),n("span",{style:{color:"#E1E4E8"}},"("),n("span",{style:{color:"#9ECBFF"}},"'en-UK'"),n("span",{style:{color:"#E1E4E8"}},")")],-1)),e[102]||(e[102]=s(`
`)),e[103]||(e[103]=n("span",{class:"line"},null,-1)),e[104]||(e[104]=s(`
`)),e[105]||(e[105]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"const"),n("span",{style:{color:"#79B8FF"}}," selectedRange"),n("span",{style:{color:"#F97583"}}," ="),n("span",{style:{color:"#B392F0"}}," ref"),n("span",{style:{color:"#E1E4E8"}},"<"),n("span",{style:{color:"#B392F0"}},"DateRange"),n("span",{style:{color:"#E1E4E8"}},">()")],-1)),e[106]||(e[106]=s(`
`)),e[107]||(e[107]=n("span",{class:"line"},null,-1)),e[108]||(e[108]=s(`
`)),e[109]||(e[109]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"const"),n("span",{style:{color:"#79B8FF"}}," quickOptions"),n("span",{style:{color:"#F97583"}}," ="),n("span",{style:{color:"#E1E4E8"}}," [")],-1)),e[110]||(e[110]=s(`
`)),e[111]||(e[111]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"  {")],-1)),e[112]||(e[112]=s(`
`)),e[113]||(e[113]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    label: "),n("span",{style:{color:"#9ECBFF"}},"'Today'"),n("span",{style:{color:"#E1E4E8"}},",")],-1)),e[114]||(e[114]=s(`
`)),e[115]||(e[115]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"    action"),n("span",{style:{color:"#E1E4E8"}},": () "),n("span",{style:{color:"#F97583"}},"=>"),n("span",{style:{color:"#E1E4E8"}}," {")],-1)),e[116]||(e[116]=s(`
`)),e[117]||(e[117]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"      const"),n("span",{style:{color:"#79B8FF"}}," _today"),n("span",{style:{color:"#F97583"}}," ="),n("span",{style:{color:"#B392F0"}}," today"),n("span",{style:{color:"#E1E4E8"}},"("),n("span",{style:{color:"#B392F0"}},"getLocalTimeZone"),n("span",{style:{color:"#E1E4E8"}},"())")],-1)),e[118]||(e[118]=s(`
`)),e[119]||(e[119]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      selectedRange.value "),n("span",{style:{color:"#F97583"}},"="),n("span",{style:{color:"#E1E4E8"}}," {")],-1)),e[120]||(e[120]=s(`
`)),e[121]||(e[121]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        start: _today,")],-1)),e[122]||(e[122]=s(`
`)),e[123]||(e[123]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        end: _today,")],-1)),e[124]||(e[124]=s(`
`)),e[125]||(e[125]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      }")],-1)),e[126]||(e[126]=s(`
`)),e[127]||(e[127]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    },")],-1)),e[128]||(e[128]=s(`
`)),e[129]||(e[129]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"  },")],-1)),e[130]||(e[130]=s(`
`)),e[131]||(e[131]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"  {")],-1)),e[132]||(e[132]=s(`
`)),e[133]||(e[133]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    label: "),n("span",{style:{color:"#9ECBFF"}},"'Yesterday'"),n("span",{style:{color:"#E1E4E8"}},",")],-1)),e[134]||(e[134]=s(`
`)),e[135]||(e[135]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"    action"),n("span",{style:{color:"#E1E4E8"}},": () "),n("span",{style:{color:"#F97583"}},"=>"),n("span",{style:{color:"#E1E4E8"}}," {")],-1)),e[136]||(e[136]=s(`
`)),e[137]||(e[137]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"      const"),n("span",{style:{color:"#79B8FF"}}," yesterday"),n("span",{style:{color:"#F97583"}}," ="),n("span",{style:{color:"#B392F0"}}," today"),n("span",{style:{color:"#E1E4E8"}},"("),n("span",{style:{color:"#B392F0"}},"getLocalTimeZone"),n("span",{style:{color:"#E1E4E8"}},"())."),n("span",{style:{color:"#B392F0"}},"subtract"),n("span",{style:{color:"#E1E4E8"}},"({ days: "),n("span",{style:{color:"#79B8FF"}},"1"),n("span",{style:{color:"#E1E4E8"}}," })")],-1)),e[138]||(e[138]=s(`
`)),e[139]||(e[139]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      selectedRange.value "),n("span",{style:{color:"#F97583"}},"="),n("span",{style:{color:"#E1E4E8"}}," {")],-1)),e[140]||(e[140]=s(`
`)),e[141]||(e[141]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        start: yesterday,")],-1)),e[142]||(e[142]=s(`
`)),e[143]||(e[143]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        end: yesterday,")],-1)),e[144]||(e[144]=s(`
`)),e[145]||(e[145]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      }")],-1)),e[146]||(e[146]=s(`
`)),e[147]||(e[147]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    },")],-1)),e[148]||(e[148]=s(`
`)),e[149]||(e[149]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"  },")],-1)),e[150]||(e[150]=s(`
`)),e[151]||(e[151]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"  {")],-1)),e[152]||(e[152]=s(`
`)),e[153]||(e[153]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    label: "),n("span",{style:{color:"#9ECBFF"}},"'Last 7 days'"),n("span",{style:{color:"#E1E4E8"}},",")],-1)),e[154]||(e[154]=s(`
`)),e[155]||(e[155]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"    action"),n("span",{style:{color:"#E1E4E8"}},": () "),n("span",{style:{color:"#F97583"}},"=>"),n("span",{style:{color:"#E1E4E8"}}," {")],-1)),e[156]||(e[156]=s(`
`)),e[157]||(e[157]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      selectedRange.value "),n("span",{style:{color:"#F97583"}},"="),n("span",{style:{color:"#E1E4E8"}}," {")],-1)),e[158]||(e[158]=s(`
`)),e[159]||(e[159]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        start: "),n("span",{style:{color:"#B392F0"}},"today"),n("span",{style:{color:"#E1E4E8"}},"("),n("span",{style:{color:"#B392F0"}},"getLocalTimeZone"),n("span",{style:{color:"#E1E4E8"}},"())."),n("span",{style:{color:"#B392F0"}},"subtract"),n("span",{style:{color:"#E1E4E8"}},"({ days: "),n("span",{style:{color:"#79B8FF"}},"6"),n("span",{style:{color:"#E1E4E8"}}," }),")],-1)),e[160]||(e[160]=s(`
`)),e[161]||(e[161]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        end: "),n("span",{style:{color:"#B392F0"}},"today"),n("span",{style:{color:"#E1E4E8"}},"("),n("span",{style:{color:"#B392F0"}},"getLocalTimeZone"),n("span",{style:{color:"#E1E4E8"}},"()),")],-1)),e[162]||(e[162]=s(`
`)),e[163]||(e[163]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      }")],-1)),e[164]||(e[164]=s(`
`)),e[165]||(e[165]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    },")],-1)),e[166]||(e[166]=s(`
`)),e[167]||(e[167]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"  },")],-1)),e[168]||(e[168]=s(`
`)),e[169]||(e[169]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"  {")],-1)),e[170]||(e[170]=s(`
`)),e[171]||(e[171]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    label: "),n("span",{style:{color:"#9ECBFF"}},"'Last 30 days'"),n("span",{style:{color:"#E1E4E8"}},",")],-1)),e[172]||(e[172]=s(`
`)),e[173]||(e[173]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"    action"),n("span",{style:{color:"#E1E4E8"}},": () "),n("span",{style:{color:"#F97583"}},"=>"),n("span",{style:{color:"#E1E4E8"}}," {")],-1)),e[174]||(e[174]=s(`
`)),e[175]||(e[175]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      selectedRange.value "),n("span",{style:{color:"#F97583"}},"="),n("span",{style:{color:"#E1E4E8"}}," {")],-1)),e[176]||(e[176]=s(`
`)),e[177]||(e[177]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        start: "),n("span",{style:{color:"#B392F0"}},"today"),n("span",{style:{color:"#E1E4E8"}},"("),n("span",{style:{color:"#B392F0"}},"getLocalTimeZone"),n("span",{style:{color:"#E1E4E8"}},"())."),n("span",{style:{color:"#B392F0"}},"subtract"),n("span",{style:{color:"#E1E4E8"}},"({ days: "),n("span",{style:{color:"#79B8FF"}},"29"),n("span",{style:{color:"#E1E4E8"}}," }),")],-1)),e[178]||(e[178]=s(`
`)),e[179]||(e[179]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        end: "),n("span",{style:{color:"#B392F0"}},"today"),n("span",{style:{color:"#E1E4E8"}},"("),n("span",{style:{color:"#B392F0"}},"getLocalTimeZone"),n("span",{style:{color:"#E1E4E8"}},"()),")],-1)),e[180]||(e[180]=s(`
`)),e[181]||(e[181]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      }")],-1)),e[182]||(e[182]=s(`
`)),e[183]||(e[183]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    },")],-1)),e[184]||(e[184]=s(`
`)),e[185]||(e[185]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"  },")],-1)),e[186]||(e[186]=s(`
`)),e[187]||(e[187]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"  {")],-1)),e[188]||(e[188]=s(`
`)),e[189]||(e[189]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    label: "),n("span",{style:{color:"#9ECBFF"}},"'This month'"),n("span",{style:{color:"#E1E4E8"}},",")],-1)),e[190]||(e[190]=s(`
`)),e[191]||(e[191]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"    action"),n("span",{style:{color:"#E1E4E8"}},": () "),n("span",{style:{color:"#F97583"}},"=>"),n("span",{style:{color:"#E1E4E8"}}," {")],-1)),e[192]||(e[192]=s(`
`)),e[193]||(e[193]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"      const"),n("span",{style:{color:"#79B8FF"}}," now"),n("span",{style:{color:"#F97583"}}," ="),n("span",{style:{color:"#B392F0"}}," today"),n("span",{style:{color:"#E1E4E8"}},"("),n("span",{style:{color:"#B392F0"}},"getLocalTimeZone"),n("span",{style:{color:"#E1E4E8"}},"())")],-1)),e[194]||(e[194]=s(`
`)),e[195]||(e[195]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"      const"),n("span",{style:{color:"#79B8FF"}}," startOfMonth"),n("span",{style:{color:"#F97583"}}," ="),n("span",{style:{color:"#E1E4E8"}}," now."),n("span",{style:{color:"#B392F0"}},"set"),n("span",{style:{color:"#E1E4E8"}},"({ day: "),n("span",{style:{color:"#79B8FF"}},"1"),n("span",{style:{color:"#E1E4E8"}}," })")],-1)),e[196]||(e[196]=s(`
`)),e[197]||(e[197]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      selectedRange.value "),n("span",{style:{color:"#F97583"}},"="),n("span",{style:{color:"#E1E4E8"}}," {")],-1)),e[198]||(e[198]=s(`
`)),e[199]||(e[199]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        start: startOfMonth,")],-1)),e[200]||(e[200]=s(`
`)),e[201]||(e[201]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        end: now,")],-1)),e[202]||(e[202]=s(`
`)),e[203]||(e[203]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      }")],-1)),e[204]||(e[204]=s(`
`)),e[205]||(e[205]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    },")],-1)),e[206]||(e[206]=s(`
`)),e[207]||(e[207]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"  },")],-1)),e[208]||(e[208]=s(`
`)),e[209]||(e[209]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"  {")],-1)),e[210]||(e[210]=s(`
`)),e[211]||(e[211]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    label: "),n("span",{style:{color:"#9ECBFF"}},"'Last month'"),n("span",{style:{color:"#E1E4E8"}},",")],-1)),e[212]||(e[212]=s(`
`)),e[213]||(e[213]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"    action"),n("span",{style:{color:"#E1E4E8"}},": () "),n("span",{style:{color:"#F97583"}},"=>"),n("span",{style:{color:"#E1E4E8"}}," {")],-1)),e[214]||(e[214]=s(`
`)),e[215]||(e[215]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"      const"),n("span",{style:{color:"#79B8FF"}}," now"),n("span",{style:{color:"#F97583"}}," ="),n("span",{style:{color:"#B392F0"}}," today"),n("span",{style:{color:"#E1E4E8"}},"("),n("span",{style:{color:"#B392F0"}},"getLocalTimeZone"),n("span",{style:{color:"#E1E4E8"}},"())")],-1)),e[216]||(e[216]=s(`
`)),e[217]||(e[217]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"      const"),n("span",{style:{color:"#79B8FF"}}," lastMonth"),n("span",{style:{color:"#F97583"}}," ="),n("span",{style:{color:"#E1E4E8"}}," now."),n("span",{style:{color:"#B392F0"}},"subtract"),n("span",{style:{color:"#E1E4E8"}},"({ months: "),n("span",{style:{color:"#79B8FF"}},"1"),n("span",{style:{color:"#E1E4E8"}}," })")],-1)),e[218]||(e[218]=s(`
`)),e[219]||(e[219]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"      const"),n("span",{style:{color:"#79B8FF"}}," startOfLastMonth"),n("span",{style:{color:"#F97583"}}," ="),n("span",{style:{color:"#E1E4E8"}}," lastMonth."),n("span",{style:{color:"#B392F0"}},"set"),n("span",{style:{color:"#E1E4E8"}},"({ day: "),n("span",{style:{color:"#79B8FF"}},"1"),n("span",{style:{color:"#E1E4E8"}}," })")],-1)),e[220]||(e[220]=s(`
`)),e[221]||(e[221]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"      const"),n("span",{style:{color:"#79B8FF"}}," endOfLastMonth"),n("span",{style:{color:"#F97583"}}," ="),n("span",{style:{color:"#E1E4E8"}}," startOfLastMonth."),n("span",{style:{color:"#B392F0"}},"add"),n("span",{style:{color:"#E1E4E8"}},"({ months: "),n("span",{style:{color:"#79B8FF"}},"1"),n("span",{style:{color:"#E1E4E8"}}," })."),n("span",{style:{color:"#B392F0"}},"subtract"),n("span",{style:{color:"#E1E4E8"}},"({ days: "),n("span",{style:{color:"#79B8FF"}},"1"),n("span",{style:{color:"#E1E4E8"}}," })")],-1)),e[222]||(e[222]=s(`
`)),e[223]||(e[223]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      selectedRange.value "),n("span",{style:{color:"#F97583"}},"="),n("span",{style:{color:"#E1E4E8"}}," {")],-1)),e[224]||(e[224]=s(`
`)),e[225]||(e[225]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        start: startOfLastMonth,")],-1)),e[226]||(e[226]=s(`
`)),e[227]||(e[227]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        end: endOfLastMonth,")],-1)),e[228]||(e[228]=s(`
`)),e[229]||(e[229]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      }")],-1)),e[230]||(e[230]=s(`
`)),e[231]||(e[231]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    },")],-1)),e[232]||(e[232]=s(`
`)),e[233]||(e[233]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"  },")],-1)),e[234]||(e[234]=s(`
`)),e[235]||(e[235]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"  {")],-1)),e[236]||(e[236]=s(`
`)),e[237]||(e[237]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    label: "),n("span",{style:{color:"#9ECBFF"}},"'This quarter'"),n("span",{style:{color:"#E1E4E8"}},",")],-1)),e[238]||(e[238]=s(`
`)),e[239]||(e[239]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"    action"),n("span",{style:{color:"#E1E4E8"}},": () "),n("span",{style:{color:"#F97583"}},"=>"),n("span",{style:{color:"#E1E4E8"}}," {")],-1)),e[240]||(e[240]=s(`
`)),e[241]||(e[241]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"      const"),n("span",{style:{color:"#79B8FF"}}," now"),n("span",{style:{color:"#F97583"}}," ="),n("span",{style:{color:"#B392F0"}}," today"),n("span",{style:{color:"#E1E4E8"}},"("),n("span",{style:{color:"#B392F0"}},"getLocalTimeZone"),n("span",{style:{color:"#E1E4E8"}},"())")],-1)),e[242]||(e[242]=s(`
`)),e[243]||(e[243]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"      const"),n("span",{style:{color:"#79B8FF"}}," currentMonth"),n("span",{style:{color:"#F97583"}}," ="),n("span",{style:{color:"#E1E4E8"}}," now.month")],-1)),e[244]||(e[244]=s(`
`)),e[245]||(e[245]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"      const"),n("span",{style:{color:"#79B8FF"}}," startMonth"),n("span",{style:{color:"#F97583"}}," ="),n("span",{style:{color:"#E1E4E8"}}," currentMonth "),n("span",{style:{color:"#F97583"}},"-"),n("span",{style:{color:"#E1E4E8"}}," (currentMonth "),n("span",{style:{color:"#F97583"}},"%"),n("span",{style:{color:"#79B8FF"}}," 3"),n("span",{style:{color:"#E1E4E8"}},")")],-1)),e[246]||(e[246]=s(`
`)),e[247]||(e[247]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"      const"),n("span",{style:{color:"#79B8FF"}}," startOfQuarter"),n("span",{style:{color:"#F97583"}}," ="),n("span",{style:{color:"#E1E4E8"}}," now."),n("span",{style:{color:"#B392F0"}},"set"),n("span",{style:{color:"#E1E4E8"}},"({ month: startMonth, day: "),n("span",{style:{color:"#79B8FF"}},"1"),n("span",{style:{color:"#E1E4E8"}}," })")],-1)),e[248]||(e[248]=s(`
`)),e[249]||(e[249]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      selectedRange.value "),n("span",{style:{color:"#F97583"}},"="),n("span",{style:{color:"#E1E4E8"}}," {")],-1)),e[250]||(e[250]=s(`
`)),e[251]||(e[251]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        start: startOfQuarter,")],-1)),e[252]||(e[252]=s(`
`)),e[253]||(e[253]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        end: now,")],-1)),e[254]||(e[254]=s(`
`)),e[255]||(e[255]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      }")],-1)),e[256]||(e[256]=s(`
`)),e[257]||(e[257]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    },")],-1)),e[258]||(e[258]=s(`
`)),e[259]||(e[259]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"  },")],-1)),e[260]||(e[260]=s(`
`)),e[261]||(e[261]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"  {")],-1)),e[262]||(e[262]=s(`
`)),e[263]||(e[263]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    label: "),n("span",{style:{color:"#9ECBFF"}},"'Last quarter'"),n("span",{style:{color:"#E1E4E8"}},",")],-1)),e[264]||(e[264]=s(`
`)),e[265]||(e[265]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"    action"),n("span",{style:{color:"#E1E4E8"}},": () "),n("span",{style:{color:"#F97583"}},"=>"),n("span",{style:{color:"#E1E4E8"}}," {")],-1)),e[266]||(e[266]=s(`
`)),e[267]||(e[267]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"      const"),n("span",{style:{color:"#79B8FF"}}," now"),n("span",{style:{color:"#F97583"}}," ="),n("span",{style:{color:"#B392F0"}}," today"),n("span",{style:{color:"#E1E4E8"}},"("),n("span",{style:{color:"#B392F0"}},"getLocalTimeZone"),n("span",{style:{color:"#E1E4E8"}},"())")],-1)),e[268]||(e[268]=s(`
`)),e[269]||(e[269]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"      const"),n("span",{style:{color:"#79B8FF"}}," currentMonth"),n("span",{style:{color:"#F97583"}}," ="),n("span",{style:{color:"#E1E4E8"}}," now.month")],-1)),e[270]||(e[270]=s(`
`)),e[271]||(e[271]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"      const"),n("span",{style:{color:"#79B8FF"}}," currentQuarter"),n("span",{style:{color:"#F97583"}}," ="),n("span",{style:{color:"#E1E4E8"}}," Math."),n("span",{style:{color:"#B392F0"}},"floor"),n("span",{style:{color:"#E1E4E8"}},"(currentMonth "),n("span",{style:{color:"#F97583"}},"/"),n("span",{style:{color:"#79B8FF"}}," 3"),n("span",{style:{color:"#E1E4E8"}},")")],-1)),e[272]||(e[272]=s(`
`)),e[273]||(e[273]=n("span",{class:"line"},null,-1)),e[274]||(e[274]=s(`
`)),e[275]||(e[275]=n("span",{class:"line"},[n("span",{style:{color:"#6A737D"}},"      // If we're in the first quarter, we need to go back to last year")],-1)),e[276]||(e[276]=s(`
`)),e[277]||(e[277]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"      let"),n("span",{style:{color:"#E1E4E8"}}," startOfLastQuarter")],-1)),e[278]||(e[278]=s(`
`)),e[279]||(e[279]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"      if"),n("span",{style:{color:"#E1E4E8"}}," (currentQuarter "),n("span",{style:{color:"#F97583"}},"==="),n("span",{style:{color:"#79B8FF"}}," 0"),n("span",{style:{color:"#E1E4E8"}},") {")],-1)),e[280]||(e[280]=s(`
`)),e[281]||(e[281]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        startOfLastQuarter "),n("span",{style:{color:"#F97583"}},"="),n("span",{style:{color:"#E1E4E8"}}," now")],-1)),e[282]||(e[282]=s(`
`)),e[283]||(e[283]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"          ."),n("span",{style:{color:"#B392F0"}},"subtract"),n("span",{style:{color:"#E1E4E8"}},"({ years: "),n("span",{style:{color:"#79B8FF"}},"1"),n("span",{style:{color:"#E1E4E8"}}," })")],-1)),e[284]||(e[284]=s(`
`)),e[285]||(e[285]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"          ."),n("span",{style:{color:"#B392F0"}},"set"),n("span",{style:{color:"#E1E4E8"}},"({ month: "),n("span",{style:{color:"#79B8FF"}},"10"),n("span",{style:{color:"#E1E4E8"}},", day: "),n("span",{style:{color:"#79B8FF"}},"1"),n("span",{style:{color:"#E1E4E8"}}," }) "),n("span",{style:{color:"#6A737D"}},"// October 1st of previous year")],-1)),e[286]||(e[286]=s(`
`)),e[287]||(e[287]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      }")],-1)),e[288]||(e[288]=s(`
`)),e[289]||(e[289]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"      else"),n("span",{style:{color:"#E1E4E8"}}," {")],-1)),e[290]||(e[290]=s(`
`)),e[291]||(e[291]=n("span",{class:"line"},[n("span",{style:{color:"#6A737D"}},"      // Otherwise, just go back 3 months from the start of current quarter")],-1)),e[292]||(e[292]=s(`
`)),e[293]||(e[293]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        startOfLastQuarter "),n("span",{style:{color:"#F97583"}},"="),n("span",{style:{color:"#E1E4E8"}}," now")],-1)),e[294]||(e[294]=s(`
`)),e[295]||(e[295]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"          ."),n("span",{style:{color:"#B392F0"}},"set"),n("span",{style:{color:"#E1E4E8"}},"({ month: currentQuarter "),n("span",{style:{color:"#F97583"}},"*"),n("span",{style:{color:"#79B8FF"}}," 3"),n("span",{style:{color:"#F97583"}}," -"),n("span",{style:{color:"#79B8FF"}}," 2"),n("span",{style:{color:"#E1E4E8"}},", day: "),n("span",{style:{color:"#79B8FF"}},"1"),n("span",{style:{color:"#E1E4E8"}}," })")],-1)),e[296]||(e[296]=s(`
`)),e[297]||(e[297]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      }")],-1)),e[298]||(e[298]=s(`
`)),e[299]||(e[299]=n("span",{class:"line"},null,-1)),e[300]||(e[300]=s(`
`)),e[301]||(e[301]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"      const"),n("span",{style:{color:"#79B8FF"}}," endOfLastQuarter"),n("span",{style:{color:"#F97583"}}," ="),n("span",{style:{color:"#E1E4E8"}}," startOfLastQuarter."),n("span",{style:{color:"#B392F0"}},"add"),n("span",{style:{color:"#E1E4E8"}},"({ months: "),n("span",{style:{color:"#79B8FF"}},"3"),n("span",{style:{color:"#E1E4E8"}}," })."),n("span",{style:{color:"#B392F0"}},"subtract"),n("span",{style:{color:"#E1E4E8"}},"({ days: "),n("span",{style:{color:"#79B8FF"}},"1"),n("span",{style:{color:"#E1E4E8"}}," })")],-1)),e[302]||(e[302]=s(`
`)),e[303]||(e[303]=n("span",{class:"line"},null,-1)),e[304]||(e[304]=s(`
`)),e[305]||(e[305]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      selectedRange.value "),n("span",{style:{color:"#F97583"}},"="),n("span",{style:{color:"#E1E4E8"}}," {")],-1)),e[306]||(e[306]=s(`
`)),e[307]||(e[307]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        start: startOfLastQuarter,")],-1)),e[308]||(e[308]=s(`
`)),e[309]||(e[309]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        end: endOfLastQuarter,")],-1)),e[310]||(e[310]=s(`
`)),e[311]||(e[311]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      }")],-1)),e[312]||(e[312]=s(`
`)),e[313]||(e[313]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    },")],-1)),e[314]||(e[314]=s(`
`)),e[315]||(e[315]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"  },")],-1)),e[316]||(e[316]=s(`
`)),e[317]||(e[317]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"  {")],-1)),e[318]||(e[318]=s(`
`)),e[319]||(e[319]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    label: "),n("span",{style:{color:"#9ECBFF"}},"'This year'"),n("span",{style:{color:"#E1E4E8"}},",")],-1)),e[320]||(e[320]=s(`
`)),e[321]||(e[321]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"    action"),n("span",{style:{color:"#E1E4E8"}},": () "),n("span",{style:{color:"#F97583"}},"=>"),n("span",{style:{color:"#E1E4E8"}}," {")],-1)),e[322]||(e[322]=s(`
`)),e[323]||(e[323]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"      const"),n("span",{style:{color:"#79B8FF"}}," now"),n("span",{style:{color:"#F97583"}}," ="),n("span",{style:{color:"#B392F0"}}," today"),n("span",{style:{color:"#E1E4E8"}},"("),n("span",{style:{color:"#B392F0"}},"getLocalTimeZone"),n("span",{style:{color:"#E1E4E8"}},"())")],-1)),e[324]||(e[324]=s(`
`)),e[325]||(e[325]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"      const"),n("span",{style:{color:"#79B8FF"}}," startOfYear"),n("span",{style:{color:"#F97583"}}," ="),n("span",{style:{color:"#E1E4E8"}}," now."),n("span",{style:{color:"#B392F0"}},"set"),n("span",{style:{color:"#E1E4E8"}},"({ month: "),n("span",{style:{color:"#79B8FF"}},"1"),n("span",{style:{color:"#E1E4E8"}},", day: "),n("span",{style:{color:"#79B8FF"}},"1"),n("span",{style:{color:"#E1E4E8"}}," })")],-1)),e[326]||(e[326]=s(`
`)),e[327]||(e[327]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      selectedRange.value "),n("span",{style:{color:"#F97583"}},"="),n("span",{style:{color:"#E1E4E8"}}," {")],-1)),e[328]||(e[328]=s(`
`)),e[329]||(e[329]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        start: startOfYear,")],-1)),e[330]||(e[330]=s(`
`)),e[331]||(e[331]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        end: now,")],-1)),e[332]||(e[332]=s(`
`)),e[333]||(e[333]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      }")],-1)),e[334]||(e[334]=s(`
`)),e[335]||(e[335]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    },")],-1)),e[336]||(e[336]=s(`
`)),e[337]||(e[337]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"  },")],-1)),e[338]||(e[338]=s(`
`)),e[339]||(e[339]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"  {")],-1)),e[340]||(e[340]=s(`
`)),e[341]||(e[341]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    label: "),n("span",{style:{color:"#9ECBFF"}},"'Last year'"),n("span",{style:{color:"#E1E4E8"}},",")],-1)),e[342]||(e[342]=s(`
`)),e[343]||(e[343]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"    action"),n("span",{style:{color:"#E1E4E8"}},": () "),n("span",{style:{color:"#F97583"}},"=>"),n("span",{style:{color:"#E1E4E8"}}," {")],-1)),e[344]||(e[344]=s(`
`)),e[345]||(e[345]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"      const"),n("span",{style:{color:"#79B8FF"}}," now"),n("span",{style:{color:"#F97583"}}," ="),n("span",{style:{color:"#B392F0"}}," today"),n("span",{style:{color:"#E1E4E8"}},"("),n("span",{style:{color:"#B392F0"}},"getLocalTimeZone"),n("span",{style:{color:"#E1E4E8"}},"())")],-1)),e[346]||(e[346]=s(`
`)),e[347]||(e[347]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"      const"),n("span",{style:{color:"#79B8FF"}}," lastYear"),n("span",{style:{color:"#F97583"}}," ="),n("span",{style:{color:"#E1E4E8"}}," now."),n("span",{style:{color:"#B392F0"}},"subtract"),n("span",{style:{color:"#E1E4E8"}},"({ years: "),n("span",{style:{color:"#79B8FF"}},"1"),n("span",{style:{color:"#E1E4E8"}}," })")],-1)),e[348]||(e[348]=s(`
`)),e[349]||(e[349]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"      const"),n("span",{style:{color:"#79B8FF"}}," startOfLastYear"),n("span",{style:{color:"#F97583"}}," ="),n("span",{style:{color:"#E1E4E8"}}," lastYear."),n("span",{style:{color:"#B392F0"}},"set"),n("span",{style:{color:"#E1E4E8"}},"({ month: "),n("span",{style:{color:"#79B8FF"}},"1"),n("span",{style:{color:"#E1E4E8"}},", day: "),n("span",{style:{color:"#79B8FF"}},"1"),n("span",{style:{color:"#E1E4E8"}}," })")],-1)),e[350]||(e[350]=s(`
`)),e[351]||(e[351]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"      const"),n("span",{style:{color:"#79B8FF"}}," endOfLastYear"),n("span",{style:{color:"#F97583"}}," ="),n("span",{style:{color:"#E1E4E8"}}," startOfLastYear."),n("span",{style:{color:"#B392F0"}},"add"),n("span",{style:{color:"#E1E4E8"}},"({ years: "),n("span",{style:{color:"#79B8FF"}},"1"),n("span",{style:{color:"#E1E4E8"}}," })."),n("span",{style:{color:"#B392F0"}},"subtract"),n("span",{style:{color:"#E1E4E8"}},"({ days: "),n("span",{style:{color:"#79B8FF"}},"1"),n("span",{style:{color:"#E1E4E8"}}," })")],-1)),e[352]||(e[352]=s(`
`)),e[353]||(e[353]=n("span",{class:"line"},null,-1)),e[354]||(e[354]=s(`
`)),e[355]||(e[355]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      selectedRange.value "),n("span",{style:{color:"#F97583"}},"="),n("span",{style:{color:"#E1E4E8"}}," {")],-1)),e[356]||(e[356]=s(`
`)),e[357]||(e[357]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        start: startOfLastYear,")],-1)),e[358]||(e[358]=s(`
`)),e[359]||(e[359]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        end: endOfLastYear,")],-1)),e[360]||(e[360]=s(`
`)),e[361]||(e[361]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      }")],-1)),e[362]||(e[362]=s(`
`)),e[363]||(e[363]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    },")],-1)),e[364]||(e[364]=s(`
`)),e[365]||(e[365]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"  },")],-1)),e[366]||(e[366]=s(`
`)),e[367]||(e[367]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"]")],-1)),e[368]||(e[368]=s(`
`)),e[369]||(e[369]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"script"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[370]||(e[370]=s(`
`)),e[371]||(e[371]=n("span",{class:"line"},null,-1)),e[372]||(e[372]=s(`
`)),e[373]||(e[373]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"<"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[374]||(e[374]=s(`
`)),e[375]||(e[375]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"  <"),n("span",{style:{color:"#85E89D"}},"div"),n("span",{style:{color:"#B392F0"}}," class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"rounded-xl bg-white shadow-sm border flex flex-col-reverse lg:flex-row"'),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[376]||(e[376]=s(`
`)),e[377]||(e[377]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    <"),n("span",{style:{color:"#85E89D"}},"div"),n("span",{style:{color:"#B392F0"}}," class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"lg:w-40 lg:border-r border-gray-100 p-4"'),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[378]||(e[378]=s(`
`)),e[379]||(e[379]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      <"),n("span",{style:{color:"#85E89D"}},"button")],-1)),e[380]||(e[380]=s(`
`)),e[381]||(e[381]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"        v-for"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"option "),n("span",{style:{color:"#F97583"}},"in"),n("span",{style:{color:"#E1E4E8"}}," quickOptions"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[382]||(e[382]=s(`
`)),e[383]||(e[383]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        :"),n("span",{style:{color:"#B392F0"}},"key"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"option.label"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[384]||(e[384]=s(`
`)),e[385]||(e[385]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"        class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"flex w-full rounded-md bg-transparent hover:bg-gray-100 transition px-3 py-2 text-left text-[13px]"')],-1)),e[386]||(e[386]=s(`
`)),e[387]||(e[387]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        @"),n("span",{style:{color:"#B392F0"}},"click"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"option.action"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[388]||(e[388]=s(`
`)),e[389]||(e[389]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      >")],-1)),e[390]||(e[390]=s(`
`)),e[391]||(e[391]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        {{ option.label }}")],-1)),e[392]||(e[392]=s(`
`)),e[393]||(e[393]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      </"),n("span",{style:{color:"#85E89D"}},"button"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[394]||(e[394]=s(`
`)),e[395]||(e[395]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    </"),n("span",{style:{color:"#85E89D"}},"div"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[396]||(e[396]=s(`
`)),e[397]||(e[397]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    <"),n("span",{style:{color:"#85E89D"}},"div"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[398]||(e[398]=s(`
`)),n("span",ln,[e[2]||(e[2]=n("span",{style:{color:"#E1E4E8"}},"      <",-1)),n("span",an,[o(a,{name:"RangeCalendarRoot"},{content:t(({})=>[o(l,{title:"props",data:`[
  {
    "name": "allowNonContiguousRanges",
    "description": "<p>When combined with <code>isDateUnavailable</code>, determines whether non-contiguous ranges, i.e. ranges containing unavailable dates, may be selected.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
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
    "name": "calendarLabel",
    "description": "<p>The accessible label for the calendar</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "defaultPlaceholder",
    "description": "<p>The default placeholder date</p>\\n",
    "type": "DateValue",
    "required": false
  },
  {
    "name": "defaultValue",
    "description": "<p>The default value for the calendar</p>\\n",
    "type": "DateRange",
    "required": false,
    "default": "{ start: undefined, end: undefined }"
  },
  {
    "name": "dir",
    "description": "<p>The reading direction of the calendar when applicable. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>Whether or not the calendar is disabled</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "fixedWeeks",
    "description": "<p>Whether or not to always display 6 weeks in the calendar</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "initialFocus",
    "description": "<p>If true, the calendar will focus the selected day, today, or the first day of the month depending on what is visible when the calendar is mounted</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "isDateDisabled",
    "description": "<p>A function that returns whether or not a date is disabled</p>\\n",
    "type": "Matcher",
    "required": false
  },
  {
    "name": "isDateUnavailable",
    "description": "<p>A function that returns whether or not a date is unavailable</p>\\n",
    "type": "Matcher",
    "required": false
  },
  {
    "name": "locale",
    "description": "<p>The locale to use for formatting dates</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "maxValue",
    "description": "<p>The maximum date that can be selected</p>\\n",
    "type": "DateValue",
    "required": false
  },
  {
    "name": "minValue",
    "description": "<p>The minimum date that can be selected</p>\\n",
    "type": "DateValue",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled checked state of the calendar. Can be bound as <code>v-model</code>.</p>\\n",
    "type": "DateRange | null",
    "required": false
  },
  {
    "name": "nextPage",
    "description": "<p>A function that returns the next page of the calendar. It receives the current placeholder as an argument inside the component.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  },
  {
    "name": "numberOfMonths",
    "description": "<p>The number of months to display at once</p>\\n",
    "type": "number",
    "required": false,
    "default": "1"
  },
  {
    "name": "pagedNavigation",
    "description": "<p>This property causes the previous and next buttons to navigate by the number of months displayed at once, rather than one month</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "placeholder",
    "description": "<p>The placeholder date, which is used to determine what month to display when no date is selected. This updates as the user navigates the calendar and can be used to programmatically control the calendar view</p>\\n",
    "type": "DateValue",
    "required": false
  },
  {
    "name": "preventDeselect",
    "description": "<p>Whether or not to prevent the user from deselecting a date without selecting another date first</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "prevPage",
    "description": "<p>A function that returns the previous page of the calendar. It receives the current placeholder as an argument inside the component.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  },
  {
    "name": "readonly",
    "description": "<p>Whether or not the calendar is readonly</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "weekdayFormat",
    "description": "<p>The format to use for the weekday strings provided via the weekdays slot prop</p>\\n",
    "type": "\\"long\\" | \\"short\\" | \\"narrow\\"",
    "required": false,
    "default": "\\"narrow\\""
  },
  {
    "name": "weekStartsOn",
    "description": "<p>The day of the week to start the calendar on</p>\\n",
    "type": "0 | 1 | 2 | 3 | 4 | 5 | 6",
    "required": false,
    "default": "0"
  }
]`}),o(l,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called whenever the model value changes</p>\\n",
    "type": "[date: DateRange]"
  },
  {
    "name": "update:placeholder",
    "description": "<p>Event handler called whenever the placeholder value changes</p>\\n",
    "type": "[date: DateValue]"
  },
  {
    "name": "update:startValue",
    "description": "<p>Event handler called whenever the start value changes</p>\\n",
    "type": "[date: DateValue]"
  }
]`}),o(l,{title:"slots",data:`[
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
    "description": "<p>The current date range</p>\\n",
    "type": "DateRange"
  }
]`}),o(l,{title:"methods",data:`[
  {
    "name": "isDateDisabled",
    "description": "<p>A function that returns whether or not a date is disabled</p>\\n",
    "type": "Matcher"
  },
  {
    "name": "isDateUnavailable",
    "description": "<p>A function that returns whether or not a date is unavailable</p>\\n",
    "type": "Matcher"
  }
]`})]),default:t(()=>[e[1]||(e[1]=s("RangeCalendarRoot"))]),_:1})])]),e[399]||(e[399]=s(`
`)),e[400]||(e[400]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"        v-slot"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"{ weekDays, grid }"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[401]||(e[401]=s(`
`)),e[402]||(e[402]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"        v-model"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"selectedRange"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[403]||(e[403]=s(`
`)),e[404]||(e[404]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"        class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"flex space-y-4 flex-col lg:flex-row lg:space-y-0 p-4"')],-1)),e[405]||(e[405]=s(`
`)),e[406]||(e[406]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"        fixed-weeks")],-1)),e[407]||(e[407]=s(`
`)),e[408]||(e[408]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        :"),n("span",{style:{color:"#B392F0"}},"number-of-months"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#79B8FF"}},"2"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[409]||(e[409]=s(`
`)),e[410]||(e[410]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"        locale"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"en-UK"')],-1)),e[411]||(e[411]=s(`
`)),e[412]||(e[412]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      >")],-1)),e[413]||(e[413]=s(`
`)),e[414]||(e[414]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        <"),n("span",{style:{color:"#85E89D"}},"div")],-1)),e[415]||(e[415]=s(`
`)),e[416]||(e[416]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"          v-for"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"(month, index) "),n("span",{style:{color:"#F97583"}},"in"),n("span",{style:{color:"#E1E4E8"}}," grid"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[417]||(e[417]=s(`
`)),e[418]||(e[418]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"          :"),n("span",{style:{color:"#B392F0"}},"key"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"month.value."),n("span",{style:{color:"#B392F0"}},"toString"),n("span",{style:{color:"#E1E4E8"}},"()"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[419]||(e[419]=s(`
`)),e[420]||(e[420]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"          :"),n("span",{style:{color:"#B392F0"}},"class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"{ "),n("span",{style:{color:"#9ECBFF"}},"'mr-4'"),n("span",{style:{color:"#E1E4E8"}},": index "),n("span",{style:{color:"#F97583"}},"==="),n("span",{style:{color:"#79B8FF"}}," 0"),n("span",{style:{color:"#E1E4E8"}}," }"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[421]||(e[421]=s(`
`)),e[422]||(e[422]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        >")],-1)),e[423]||(e[423]=s(`
`)),e[424]||(e[424]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"          <"),n("span",{style:{color:"#85E89D"}},"div")],-1)),e[425]||(e[425]=s(`
`)),e[426]||(e[426]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"            v-if"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"index "),n("span",{style:{color:"#F97583"}},"==="),n("span",{style:{color:"#79B8FF"}}," 0"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[427]||(e[427]=s(`
`)),e[428]||(e[428]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"            class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"flex items-center"')],-1)),e[429]||(e[429]=s(`
`)),e[430]||(e[430]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"          >")],-1)),e[431]||(e[431]=s(`
`)),n("span",rn,[e[4]||(e[4]=n("span",{style:{color:"#E1E4E8"}},"            <",-1)),n("span",pn,[o(a,{name:"RangeCalendarPrev"},{content:t(({})=>[o(l,{title:"props",data:`[
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
    "description": "<p>The function to be used for the prev page. Overwrites the <code>prevPage</code> function set on the <code>RangeCalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),o(l,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:t(()=>[e[3]||(e[3]=s("RangeCalendarPrev"))]),_:1})])]),e[432]||(e[432]=s(`
`)),e[433]||(e[433]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"              class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"inline-flex items-center cursor-pointer text-black justify-center rounded-md bg-transparent w-7 h-7 hover:bg-stone-50 active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black"')],-1)),e[434]||(e[434]=s(`
`)),e[435]||(e[435]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"            >")],-1)),e[436]||(e[436]=s(`
`)),e[437]||(e[437]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"              <"),n("span",{style:{color:"#85E89D"}},"Icon")],-1)),e[438]||(e[438]=s(`
`)),e[439]||(e[439]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"                icon"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"radix-icons:chevron-left"')],-1)),e[440]||(e[440]=s(`
`)),e[441]||(e[441]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"                class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"w-4 h-4"')],-1)),e[442]||(e[442]=s(`
`)),e[443]||(e[443]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"              />")],-1)),e[444]||(e[444]=s(`
`)),n("span",dn,[e[6]||(e[6]=n("span",{style:{color:"#E1E4E8"}},"            </",-1)),n("span",En,[o(a,{name:"RangeCalendarPrev"},{content:t(({})=>[o(l,{title:"props",data:`[
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
    "description": "<p>The function to be used for the prev page. Overwrites the <code>prevPage</code> function set on the <code>RangeCalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),o(l,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:t(()=>[e[5]||(e[5]=s("RangeCalendarPrev"))]),_:1})]),e[7]||(e[7]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[445]||(e[445]=s(`
`)),e[446]||(e[446]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"            <"),n("span",{style:{color:"#85E89D"}},"span"),n("span",{style:{color:"#B392F0"}}," class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"font-semibold flex-1 text-center"'),n("span",{style:{color:"#E1E4E8"}},">{{ formatter."),n("span",{style:{color:"#B392F0"}},"custom"),n("span",{style:{color:"#E1E4E8"}},"(month.value."),n("span",{style:{color:"#B392F0"}},"toDate"),n("span",{style:{color:"#E1E4E8"}},"("),n("span",{style:{color:"#B392F0"}},"getLocalTimeZone"),n("span",{style:{color:"#E1E4E8"}},"()), { month: "),n("span",{style:{color:"#9ECBFF"}},"'long'"),n("span",{style:{color:"#E1E4E8"}},", year: "),n("span",{style:{color:"#9ECBFF"}},"'numeric'"),n("span",{style:{color:"#E1E4E8"}}," }) }}</"),n("span",{style:{color:"#85E89D"}},"span"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[447]||(e[447]=s(`
`)),e[448]||(e[448]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"            <"),n("span",{style:{color:"#85E89D"}},"span"),n("span",{style:{color:"#B392F0"}}," class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"w-7"'),n("span",{style:{color:"#FDAEB7","font-style":"italic"}}," /"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[449]||(e[449]=s(`
`)),e[450]||(e[450]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"          </"),n("span",{style:{color:"#85E89D"}},"div"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[451]||(e[451]=s(`
`)),e[452]||(e[452]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"          <"),n("span",{style:{color:"#85E89D"}},"div")],-1)),e[453]||(e[453]=s(`
`)),e[454]||(e[454]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"            v-if"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"index "),n("span",{style:{color:"#F97583"}},"==="),n("span",{style:{color:"#E1E4E8"}}," (grid."),n("span",{style:{color:"#79B8FF"}},"length"),n("span",{style:{color:"#F97583"}}," -"),n("span",{style:{color:"#79B8FF"}}," 1"),n("span",{style:{color:"#E1E4E8"}},")"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[455]||(e[455]=s(`
`)),e[456]||(e[456]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"            class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"flex items-center"')],-1)),e[457]||(e[457]=s(`
`)),e[458]||(e[458]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"          >")],-1)),e[459]||(e[459]=s(`
`)),e[460]||(e[460]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"            <"),n("span",{style:{color:"#85E89D"}},"span"),n("span",{style:{color:"#B392F0"}}," class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"w-7"'),n("span",{style:{color:"#FDAEB7","font-style":"italic"}}," /"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[461]||(e[461]=s(`
`)),e[462]||(e[462]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"            <"),n("span",{style:{color:"#85E89D"}},"span"),n("span",{style:{color:"#B392F0"}}," class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"font-semibold flex-1 text-center"'),n("span",{style:{color:"#E1E4E8"}},">{{ formatter."),n("span",{style:{color:"#B392F0"}},"custom"),n("span",{style:{color:"#E1E4E8"}},"(month.value."),n("span",{style:{color:"#B392F0"}},"toDate"),n("span",{style:{color:"#E1E4E8"}},"("),n("span",{style:{color:"#B392F0"}},"getLocalTimeZone"),n("span",{style:{color:"#E1E4E8"}},"()), { month: "),n("span",{style:{color:"#9ECBFF"}},"'long'"),n("span",{style:{color:"#E1E4E8"}},", year: "),n("span",{style:{color:"#9ECBFF"}},"'numeric'"),n("span",{style:{color:"#E1E4E8"}}," }) }}</"),n("span",{style:{color:"#85E89D"}},"span"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[463]||(e[463]=s(`
`)),n("span",yn,[e[9]||(e[9]=n("span",{style:{color:"#E1E4E8"}},"            <",-1)),n("span",un,[o(a,{name:"RangeCalendarNext"},{content:t(({})=>[o(l,{title:"props",data:`[
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
    "description": "<p>The function to be used for the next page. Overwrites the <code>nextPage</code> function set on the <code>RangeCalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),o(l,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:t(()=>[e[8]||(e[8]=s("RangeCalendarNext"))]),_:1})])]),e[464]||(e[464]=s(`
`)),e[465]||(e[465]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"              class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"place-self-end inline-flex items-center cursor-pointer justify-center text-black rounded-md bg-transparent w-7 h-7 hover:bg-stone-50 active:scale-98 active:transition-all focus:shadow-[0_0_0_2px] focus:shadow-black"')],-1)),e[466]||(e[466]=s(`
`)),e[467]||(e[467]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"            >")],-1)),e[468]||(e[468]=s(`
`)),e[469]||(e[469]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"              <"),n("span",{style:{color:"#85E89D"}},"Icon")],-1)),e[470]||(e[470]=s(`
`)),e[471]||(e[471]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"                icon"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"radix-icons:chevron-right"')],-1)),e[472]||(e[472]=s(`
`)),e[473]||(e[473]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"                class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"w-4 h-4"')],-1)),e[474]||(e[474]=s(`
`)),e[475]||(e[475]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"              />")],-1)),e[476]||(e[476]=s(`
`)),n("span",mn,[e[11]||(e[11]=n("span",{style:{color:"#E1E4E8"}},"            </",-1)),n("span",fn,[o(a,{name:"RangeCalendarNext"},{content:t(({})=>[o(l,{title:"props",data:`[
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
    "description": "<p>The function to be used for the next page. Overwrites the <code>nextPage</code> function set on the <code>RangeCalendarRoot</code>.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  }
]`}),o(l,{title:"slots",data:`[
  {
    "name": "disabled",
    "description": "<p>Current disable state</p>\\n",
    "type": "boolean"
  }
]`})]),default:t(()=>[e[10]||(e[10]=s("RangeCalendarNext"))]),_:1})]),e[12]||(e[12]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[477]||(e[477]=s(`
`)),e[478]||(e[478]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"          </"),n("span",{style:{color:"#85E89D"}},"div"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[479]||(e[479]=s(`
`)),e[480]||(e[480]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"          <"),n("span",{style:{color:"#85E89D"}},"div"),n("span",{style:{color:"#B392F0"}}," class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0"'),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[481]||(e[481]=s(`
`)),n("span",Fn,[e[14]||(e[14]=n("span",{style:{color:"#E1E4E8"}},"            <",-1)),n("span",gn,[o(a,{name:"RangeCalendarGrid"},{content:t(({})=>[o(l,{title:"props",data:`[
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
]`})]),default:t(()=>[e[13]||(e[13]=s("RangeCalendarGrid"))]),_:1})])]),e[482]||(e[482]=s(`
`)),e[483]||(e[483]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"              class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"w-full border-collapse select-none space-y-1"')],-1)),e[484]||(e[484]=s(`
`)),e[485]||(e[485]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"            >")],-1)),e[486]||(e[486]=s(`
`)),n("span",bn,[e[16]||(e[16]=n("span",{style:{color:"#E1E4E8"}},"              <",-1)),n("span",Cn,[o(a,{name:"RangeCalendarGridHead"},{content:t(({})=>[o(l,{title:"props",data:`[
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
]`})]),default:t(()=>[e[15]||(e[15]=s("RangeCalendarGridHead"))]),_:1})]),e[17]||(e[17]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[487]||(e[487]=s(`
`)),n("span",wn,[e[19]||(e[19]=n("span",{style:{color:"#E1E4E8"}},"                <",-1)),n("span",vn,[o(a,{name:"RangeCalendarGridRow"},{content:t(({})=>[o(l,{title:"props",data:`[
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
]`})]),default:t(()=>[e[18]||(e[18]=s("RangeCalendarGridRow"))]),_:1})]),e[20]||(e[20]=n("span",{style:{color:"#B392F0"}}," class",-1)),e[21]||(e[21]=n("span",{style:{color:"#E1E4E8"}},"=",-1)),e[22]||(e[22]=n("span",{style:{color:"#9ECBFF"}},'"mb-1 grid w-full grid-cols-7"',-1)),e[23]||(e[23]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[488]||(e[488]=s(`
`)),n("span",Bn,[e[25]||(e[25]=n("span",{style:{color:"#E1E4E8"}},"                  <",-1)),n("span",Dn,[o(a,{name:"RangeCalendarHeadCell"},{content:t(({})=>[o(l,{title:"props",data:`[
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
]`})]),default:t(()=>[e[24]||(e[24]=s("RangeCalendarHeadCell"))]),_:1})])]),e[489]||(e[489]=s(`
`)),e[490]||(e[490]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"                    v-for"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"day "),n("span",{style:{color:"#F97583"}},"in"),n("span",{style:{color:"#E1E4E8"}}," weekDays"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[491]||(e[491]=s(`
`)),e[492]||(e[492]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"                    :"),n("span",{style:{color:"#B392F0"}},"key"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"day"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[493]||(e[493]=s(`
`)),e[494]||(e[494]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"                    class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"rounded-md text-xs text-green8"')],-1)),e[495]||(e[495]=s(`
`)),e[496]||(e[496]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"                  >")],-1)),e[497]||(e[497]=s(`
`)),e[498]||(e[498]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"                    {{ day }}")],-1)),e[499]||(e[499]=s(`
`)),n("span",Tn,[e[27]||(e[27]=n("span",{style:{color:"#E1E4E8"}},"                  </",-1)),n("span",qn,[o(a,{name:"RangeCalendarHeadCell"},{content:t(({})=>[o(l,{title:"props",data:`[
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
]`})]),default:t(()=>[e[26]||(e[26]=s("RangeCalendarHeadCell"))]),_:1})]),e[28]||(e[28]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[500]||(e[500]=s(`
`)),n("span",xn,[e[30]||(e[30]=n("span",{style:{color:"#E1E4E8"}},"                </",-1)),n("span",Rn,[o(a,{name:"RangeCalendarGridRow"},{content:t(({})=>[o(l,{title:"props",data:`[
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
]`})]),default:t(()=>[e[29]||(e[29]=s("RangeCalendarGridRow"))]),_:1})]),e[31]||(e[31]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[501]||(e[501]=s(`
`)),n("span",kn,[e[33]||(e[33]=n("span",{style:{color:"#E1E4E8"}},"              </",-1)),n("span",cn,[o(a,{name:"RangeCalendarGridHead"},{content:t(({})=>[o(l,{title:"props",data:`[
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
]`})]),default:t(()=>[e[32]||(e[32]=s("RangeCalendarGridHead"))]),_:1})]),e[34]||(e[34]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[502]||(e[502]=s(`
`)),n("span",Vn,[e[36]||(e[36]=n("span",{style:{color:"#E1E4E8"}},"              <",-1)),n("span",Ln,[o(a,{name:"RangeCalendarGridBody"},{content:t(({})=>[o(l,{title:"props",data:`[
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
]`})]),default:t(()=>[e[35]||(e[35]=s("RangeCalendarGridBody"))]),_:1})]),e[37]||(e[37]=n("span",{style:{color:"#B392F0"}}," class",-1)),e[38]||(e[38]=n("span",{style:{color:"#E1E4E8"}},"=",-1)),e[39]||(e[39]=n("span",{style:{color:"#9ECBFF"}},'"grid"',-1)),e[40]||(e[40]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[503]||(e[503]=s(`
`)),n("span",An,[e[42]||(e[42]=n("span",{style:{color:"#E1E4E8"}},"                <",-1)),n("span",Pn,[o(a,{name:"RangeCalendarGridRow"},{content:t(({})=>[o(l,{title:"props",data:`[
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
]`})]),default:t(()=>[e[41]||(e[41]=s("RangeCalendarGridRow"))]),_:1})])]),e[504]||(e[504]=s(`
`)),e[505]||(e[505]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"                  v-for"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"(weekDates, rowIndex) "),n("span",{style:{color:"#F97583"}},"in"),n("span",{style:{color:"#E1E4E8"}}," month.rows"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[506]||(e[506]=s(`
`)),e[507]||(e[507]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"                  :"),n("span",{style:{color:"#B392F0"}},"key"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"`weekDate-${'),n("span",{style:{color:"#E1E4E8"}},"rowIndex"),n("span",{style:{color:"#9ECBFF"}},'}`"')],-1)),e[508]||(e[508]=s(`
`)),e[509]||(e[509]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"                  class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"grid grid-cols-7"')],-1)),e[510]||(e[510]=s(`
`)),e[511]||(e[511]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"                >")],-1)),e[512]||(e[512]=s(`
`)),n("span",Mn,[e[44]||(e[44]=n("span",{style:{color:"#E1E4E8"}},"                  <",-1)),n("span",On,[o(a,{name:"RangeCalendarCell"},{content:t(({})=>[o(l,{title:"props",data:`[
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
    "description": "",
    "type": "DateValue",
    "required": true
  }
]`})]),default:t(()=>[e[43]||(e[43]=s("RangeCalendarCell"))]),_:1})])]),e[513]||(e[513]=s(`
`)),e[514]||(e[514]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"                    v-for"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"weekDate "),n("span",{style:{color:"#F97583"}},"in"),n("span",{style:{color:"#E1E4E8"}}," weekDates"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[515]||(e[515]=s(`
`)),e[516]||(e[516]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"                    :"),n("span",{style:{color:"#B392F0"}},"key"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"weekDate."),n("span",{style:{color:"#B392F0"}},"toString"),n("span",{style:{color:"#E1E4E8"}},"()"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[517]||(e[517]=s(`
`)),e[518]||(e[518]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"                    :"),n("span",{style:{color:"#B392F0"}},"date"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"weekDate"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[519]||(e[519]=s(`
`)),e[520]||(e[520]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"                    class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"aspect-square lg:w-[34px] my-0.5 p-0 first:[&:has([data-selected])]:rounded-l-full last:[&:has([data-selected])]:rounded-r-full [&:has([data-selected][data-selection-end])]:rounded-r-full [&:not(:has([data-highlighted])):has([data-selected][data-selection-start])]:rounded-l-full')],-1)),e[521]||(e[521]=s(`
`)),e[522]||(e[522]=n("span",{class:"line"},[n("span",{style:{color:"#9ECBFF"}},"                first:[&:has([data-highlighted])]:rounded-l-full last:[&:has([data-highlighted])]:rounded-r-full [&:has([data-highlighted-end])]:rounded-r-full [&:has([data-highlighted-start])]:rounded-l-full")],-1)),e[523]||(e[523]=s(`
`)),e[524]||(e[524]=n("span",{class:"line"},[n("span",{style:{color:"#9ECBFF"}},"                  [&:has([data-selected])]:bg-green3  [&:has([data-highlighted])]:bg-green3")],-1)),e[525]||(e[525]=s(`
`)),e[526]||(e[526]=n("span",{class:"line"},[n("span",{style:{color:"#9ECBFF"}},'                "')],-1)),e[527]||(e[527]=s(`
`)),e[528]||(e[528]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"                  >")],-1)),e[529]||(e[529]=s(`
`)),n("span",In,[e[46]||(e[46]=n("span",{style:{color:"#E1E4E8"}},"                    <",-1)),n("span",Sn,[o(a,{name:"RangeCalendarCellTrigger"},{content:t(({})=>[o(l,{title:"props",data:`[
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
    "description": "",
    "type": "DateValue",
    "required": true
  },
  {
    "name": "month",
    "description": "",
    "type": "DateValue",
    "required": true
  }
]`}),o(l,{title:"slots",data:`[
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
  },
  {
    "name": "highlighted",
    "description": "<p>Current highlighted state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "highlightedStart",
    "description": "<p>Current highlighted start state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "highlightedEnd",
    "description": "<p>Current highlighted end state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "selectionStart",
    "description": "<p>Current selection start state</p>\\n",
    "type": "boolean"
  },
  {
    "name": "selectionEnd",
    "description": "<p>Current selection end state</p>\\n",
    "type": "boolean"
  }
]`})]),default:t(()=>[e[45]||(e[45]=s("RangeCalendarCellTrigger"))]),_:1})])]),e[530]||(e[530]=s(`
`)),e[531]||(e[531]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"                      :"),n("span",{style:{color:"#B392F0"}},"day"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"weekDate"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[532]||(e[532]=s(`
`)),e[533]||(e[533]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"                      :"),n("span",{style:{color:"#B392F0"}},"month"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"month.value"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[534]||(e[534]=s(`
`)),e[535]||(e[535]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"                      class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"relative flex items-center  rounded-full justify-center whitespace-nowrap text-sm font-normal w-full h-full text-black outline-none focus:shadow-[0_0_0_2px] transition duration-100 focus:shadow-black hover:bg-green10 hover:text-white data-[selection-start]:bg-green10 data-[selection-end]:bg-green10 data-[selection-start]:text-white data-[selection-end]:text-white data-[highlighted-start]:bg-green10 data-[highlighted-start]:text-white data-[highlighted-end]:bg-green10 data-[highlighted-end]:text-white data-[unavailable]:pointer-events-none data-[unavailable]:text-black/30 data-[unavailable]:line-through before:absolute before:bottom-[3px] before:hidden before:rounded-full before:w-1 before:h-1 before:bg-white data-[today]:before:block data-[today]:before:bg-green9 data-[outside-month]:opacity-25"')],-1)),e[536]||(e[536]=s(`
`)),e[537]||(e[537]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"                    />")],-1)),e[538]||(e[538]=s(`
`)),n("span",$n,[e[48]||(e[48]=n("span",{style:{color:"#E1E4E8"}},"                  </",-1)),n("span",Gn,[o(a,{name:"RangeCalendarCell"},{content:t(({})=>[o(l,{title:"props",data:`[
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
    "description": "",
    "type": "DateValue",
    "required": true
  }
]`})]),default:t(()=>[e[47]||(e[47]=s("RangeCalendarCell"))]),_:1})]),e[49]||(e[49]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[539]||(e[539]=s(`
`)),n("span",Zn,[e[51]||(e[51]=n("span",{style:{color:"#E1E4E8"}},"                </",-1)),n("span",Nn,[o(a,{name:"RangeCalendarGridRow"},{content:t(({})=>[o(l,{title:"props",data:`[
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
]`})]),default:t(()=>[e[50]||(e[50]=s("RangeCalendarGridRow"))]),_:1})]),e[52]||(e[52]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[540]||(e[540]=s(`
`)),n("span",Wn,[e[54]||(e[54]=n("span",{style:{color:"#E1E4E8"}},"              </",-1)),n("span",Un,[o(a,{name:"RangeCalendarGridBody"},{content:t(({})=>[o(l,{title:"props",data:`[
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
]`})]),default:t(()=>[e[53]||(e[53]=s("RangeCalendarGridBody"))]),_:1})]),e[55]||(e[55]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[541]||(e[541]=s(`
`)),n("span",Qn,[e[57]||(e[57]=n("span",{style:{color:"#E1E4E8"}},"            </",-1)),n("span",Yn,[o(a,{name:"RangeCalendarGrid"},{content:t(({})=>[o(l,{title:"props",data:`[
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
]`})]),default:t(()=>[e[56]||(e[56]=s("RangeCalendarGrid"))]),_:1})]),e[58]||(e[58]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[542]||(e[542]=s(`
`)),e[543]||(e[543]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"          </"),n("span",{style:{color:"#85E89D"}},"div"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[544]||(e[544]=s(`
`)),e[545]||(e[545]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        </"),n("span",{style:{color:"#85E89D"}},"div"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[546]||(e[546]=s(`
`)),n("span",Hn,[e[60]||(e[60]=n("span",{style:{color:"#E1E4E8"}},"      </",-1)),n("span",jn,[o(a,{name:"RangeCalendarRoot"},{content:t(({})=>[o(l,{title:"props",data:`[
  {
    "name": "allowNonContiguousRanges",
    "description": "<p>When combined with <code>isDateUnavailable</code>, determines whether non-contiguous ranges, i.e. ranges containing unavailable dates, may be selected.</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
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
    "name": "calendarLabel",
    "description": "<p>The accessible label for the calendar</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "defaultPlaceholder",
    "description": "<p>The default placeholder date</p>\\n",
    "type": "DateValue",
    "required": false
  },
  {
    "name": "defaultValue",
    "description": "<p>The default value for the calendar</p>\\n",
    "type": "DateRange",
    "required": false,
    "default": "{ start: undefined, end: undefined }"
  },
  {
    "name": "dir",
    "description": "<p>The reading direction of the calendar when applicable. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>Whether or not the calendar is disabled</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "fixedWeeks",
    "description": "<p>Whether or not to always display 6 weeks in the calendar</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "initialFocus",
    "description": "<p>If true, the calendar will focus the selected day, today, or the first day of the month depending on what is visible when the calendar is mounted</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "isDateDisabled",
    "description": "<p>A function that returns whether or not a date is disabled</p>\\n",
    "type": "Matcher",
    "required": false
  },
  {
    "name": "isDateUnavailable",
    "description": "<p>A function that returns whether or not a date is unavailable</p>\\n",
    "type": "Matcher",
    "required": false
  },
  {
    "name": "locale",
    "description": "<p>The locale to use for formatting dates</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "maxValue",
    "description": "<p>The maximum date that can be selected</p>\\n",
    "type": "DateValue",
    "required": false
  },
  {
    "name": "minValue",
    "description": "<p>The minimum date that can be selected</p>\\n",
    "type": "DateValue",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled checked state of the calendar. Can be bound as <code>v-model</code>.</p>\\n",
    "type": "DateRange | null",
    "required": false
  },
  {
    "name": "nextPage",
    "description": "<p>A function that returns the next page of the calendar. It receives the current placeholder as an argument inside the component.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  },
  {
    "name": "numberOfMonths",
    "description": "<p>The number of months to display at once</p>\\n",
    "type": "number",
    "required": false,
    "default": "1"
  },
  {
    "name": "pagedNavigation",
    "description": "<p>This property causes the previous and next buttons to navigate by the number of months displayed at once, rather than one month</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "placeholder",
    "description": "<p>The placeholder date, which is used to determine what month to display when no date is selected. This updates as the user navigates the calendar and can be used to programmatically control the calendar view</p>\\n",
    "type": "DateValue",
    "required": false
  },
  {
    "name": "preventDeselect",
    "description": "<p>Whether or not to prevent the user from deselecting a date without selecting another date first</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "prevPage",
    "description": "<p>A function that returns the previous page of the calendar. It receives the current placeholder as an argument inside the component.</p>\\n",
    "type": "((placeholder: DateValue) => DateValue)",
    "required": false
  },
  {
    "name": "readonly",
    "description": "<p>Whether or not the calendar is readonly</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "weekdayFormat",
    "description": "<p>The format to use for the weekday strings provided via the weekdays slot prop</p>\\n",
    "type": "\\"long\\" | \\"short\\" | \\"narrow\\"",
    "required": false,
    "default": "\\"narrow\\""
  },
  {
    "name": "weekStartsOn",
    "description": "<p>The day of the week to start the calendar on</p>\\n",
    "type": "0 | 1 | 2 | 3 | 4 | 5 | 6",
    "required": false,
    "default": "0"
  }
]`}),o(l,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called whenever the model value changes</p>\\n",
    "type": "[date: DateRange]"
  },
  {
    "name": "update:placeholder",
    "description": "<p>Event handler called whenever the placeholder value changes</p>\\n",
    "type": "[date: DateValue]"
  },
  {
    "name": "update:startValue",
    "description": "<p>Event handler called whenever the start value changes</p>\\n",
    "type": "[date: DateValue]"
  }
]`}),o(l,{title:"slots",data:`[
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
    "description": "<p>The current date range</p>\\n",
    "type": "DateRange"
  }
]`}),o(l,{title:"methods",data:`[
  {
    "name": "isDateDisabled",
    "description": "<p>A function that returns whether or not a date is disabled</p>\\n",
    "type": "Matcher"
  },
  {
    "name": "isDateUnavailable",
    "description": "<p>A function that returns whether or not a date is unavailable</p>\\n",
    "type": "Matcher"
  }
]`})]),default:t(()=>[e[59]||(e[59]=s("RangeCalendarRoot"))]),_:1})]),e[61]||(e[61]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[547]||(e[547]=s(`
`)),e[548]||(e[548]=n("span",{class:"line"},null,-1)),e[549]||(e[549]=s(`
`)),n("span",Kn,[e[63]||(e[63]=n("span",{style:{color:"#E1E4E8"}},"      <",-1)),n("span",zn,[o(a,{name:"DateRangeFieldRoot"},{content:t(({})=>[o(l,{title:"props",data:`[
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
    "name": "defaultPlaceholder",
    "description": "<p>The default placeholder date</p>\\n",
    "type": "DateValue",
    "required": false
  },
  {
    "name": "defaultValue",
    "description": "<p>The default value for the calendar</p>\\n",
    "type": "DateRange",
    "required": false
  },
  {
    "name": "dir",
    "description": "<p>The reading direction of the date field when applicable. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>Whether or not the date field is disabled</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "granularity",
    "description": "<p>The granularity to use for formatting times. Defaults to day if a CalendarDate is provided, otherwise defaults to minute. The field will render segments for each part of the date up to and including the specified granularity</p>\\n",
    "type": "\\"day\\" | \\"hour\\" | \\"minute\\" | \\"second\\"",
    "required": false
  },
  {
    "name": "hideTimeZone",
    "description": "<p>Whether or not to hide the time zone segment of the field</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "hourCycle",
    "description": "<p>The hour cycle used for formatting times. Defaults to the local preference</p>\\n",
    "type": "12 | 24",
    "required": false
  },
  {
    "name": "id",
    "description": "<p>Id of the element</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "isDateUnavailable",
    "description": "<p>A function that returns whether or not a date is unavailable</p>\\n",
    "type": "Matcher",
    "required": false
  },
  {
    "name": "locale",
    "description": "<p>The locale to use for formatting dates</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "maxValue",
    "description": "<p>The maximum date that can be selected</p>\\n",
    "type": "DateValue",
    "required": false
  },
  {
    "name": "minValue",
    "description": "<p>The minimum date that can be selected</p>\\n",
    "type": "DateValue",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled checked state of the calendar. Can be bound as <code>v-model</code>.</p>\\n",
    "type": "DateRange | null",
    "required": false
  },
  {
    "name": "name",
    "description": "<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "placeholder",
    "description": "<p>The placeholder date, which is used to determine what month to display when no date is selected. This updates as the user navigates the calendar and can be used to programmatically control the calendar view</p>\\n",
    "type": "DateValue",
    "required": false
  },
  {
    "name": "readonly",
    "description": "<p>Whether or not the date field is readonly</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "required",
    "description": "<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),o(l,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called whenever the model value changes</p>\\n",
    "type": "[DateRange]"
  },
  {
    "name": "update:placeholder",
    "description": "<p>Event handler called whenever the placeholder value changes</p>\\n",
    "type": "[date: DateValue]"
  }
]`}),o(l,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "",
    "type": "DateRange | null"
  },
  {
    "name": "segments",
    "description": "",
    "type": "{ start: { part: SegmentPart; value: string; }[]; end: { part: SegmentPart; value: string; }[]; }"
  }
]`}),o(l,{title:"methods",data:`[
  {
    "name": "isDateUnavailable",
    "description": "<p>A function that returns whether or not a date is unavailable</p>\\n",
    "type": "Matcher"
  },
  {
    "name": "setFocusedElement",
    "description": "",
    "type": "(el: HTMLElement) => void"
  }
]`})]),default:t(()=>[e[62]||(e[62]=s("DateRangeFieldRoot"))]),_:1})])]),e[550]||(e[550]=s(`
`)),e[551]||(e[551]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"        v-slot"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"{ segments }"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[552]||(e[552]=s(`
`)),e[553]||(e[553]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"        v-model"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"selectedRange"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[554]||(e[554]=s(`
`)),e[555]||(e[555]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"        locale"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"en-UK"')],-1)),e[556]||(e[556]=s(`
`)),e[557]||(e[557]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"        class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"p-4 border-t border-gray-100 flex items-center select-none"')],-1)),e[558]||(e[558]=s(`
`)),e[559]||(e[559]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"      >")],-1)),e[560]||(e[560]=s(`
`)),e[561]||(e[561]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        <"),n("span",{style:{color:"#85E89D"}},"div"),n("span",{style:{color:"#B392F0"}}," class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"flex items-center border rounded-md p-1 shadow-sm [[data-invalid]_&]:border-red-500"'),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[562]||(e[562]=s(`
`)),e[563]||(e[563]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"          <"),n("span",{style:{color:"#85E89D"}},"template")],-1)),e[564]||(e[564]=s(`
`)),e[565]||(e[565]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"            v-for"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"item "),n("span",{style:{color:"#F97583"}},"in"),n("span",{style:{color:"#E1E4E8"}}," segments.start"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[566]||(e[566]=s(`
`)),e[567]||(e[567]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"            :"),n("span",{style:{color:"#B392F0"}},"key"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"item.part"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[568]||(e[568]=s(`
`)),e[569]||(e[569]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"          >")],-1)),e[570]||(e[570]=s(`
`)),n("span",Jn,[e[65]||(e[65]=n("span",{style:{color:"#E1E4E8"}},"            <",-1)),n("span",Xn,[o(a,{name:"DateRangeFieldInput"},{content:t(({})=>[o(l,{title:"props",data:`[
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
    "name": "part",
    "description": "<p>The part of the date to render</p>\\n",
    "type": "\\"day\\" | \\"month\\" | \\"year\\" | \\"hour\\" | \\"minute\\" | \\"second\\" | \\"dayPeriod\\" | \\"literal\\" | \\"timeZoneName\\"",
    "required": true
  },
  {
    "name": "type",
    "description": "<p>The type of field to render (start or end)</p>\\n",
    "type": "\\"start\\" | \\"end\\"",
    "required": true
  }
]`})]),default:t(()=>[e[64]||(e[64]=s("DateRangeFieldInput"))]),_:1})])]),e[571]||(e[571]=s(`
`)),e[572]||(e[572]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"              v-if"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"item.part "),n("span",{style:{color:"#F97583"}},"==="),n("span",{style:{color:"#9ECBFF"}},` 'literal'"`)],-1)),e[573]||(e[573]=s(`
`)),e[574]||(e[574]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"              :"),n("span",{style:{color:"#B392F0"}},"part"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"item.part"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[575]||(e[575]=s(`
`)),e[576]||(e[576]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"              type"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"start"')],-1)),e[577]||(e[577]=s(`
`)),e[578]||(e[578]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"            >")],-1)),e[579]||(e[579]=s(`
`)),e[580]||(e[580]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"              {{ item.value }}")],-1)),e[581]||(e[581]=s(`
`)),n("span",hn,[e[67]||(e[67]=n("span",{style:{color:"#E1E4E8"}},"            </",-1)),n("span",_n,[o(a,{name:"DateRangeFieldInput"},{content:t(({})=>[o(l,{title:"props",data:`[
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
    "name": "part",
    "description": "<p>The part of the date to render</p>\\n",
    "type": "\\"day\\" | \\"month\\" | \\"year\\" | \\"hour\\" | \\"minute\\" | \\"second\\" | \\"dayPeriod\\" | \\"literal\\" | \\"timeZoneName\\"",
    "required": true
  },
  {
    "name": "type",
    "description": "<p>The type of field to render (start or end)</p>\\n",
    "type": "\\"start\\" | \\"end\\"",
    "required": true
  }
]`})]),default:t(()=>[e[66]||(e[66]=s("DateRangeFieldInput"))]),_:1})]),e[68]||(e[68]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[582]||(e[582]=s(`
`)),n("span",ne,[e[70]||(e[70]=n("span",{style:{color:"#E1E4E8"}},"            <",-1)),n("span",ee,[o(a,{name:"DateRangeFieldInput"},{content:t(({})=>[o(l,{title:"props",data:`[
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
    "name": "part",
    "description": "<p>The part of the date to render</p>\\n",
    "type": "\\"day\\" | \\"month\\" | \\"year\\" | \\"hour\\" | \\"minute\\" | \\"second\\" | \\"dayPeriod\\" | \\"literal\\" | \\"timeZoneName\\"",
    "required": true
  },
  {
    "name": "type",
    "description": "<p>The type of field to render (start or end)</p>\\n",
    "type": "\\"start\\" | \\"end\\"",
    "required": true
  }
]`})]),default:t(()=>[e[69]||(e[69]=s("DateRangeFieldInput"))]),_:1})])]),e[583]||(e[583]=s(`
`)),e[584]||(e[584]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"              v-else")],-1)),e[585]||(e[585]=s(`
`)),e[586]||(e[586]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"              :"),n("span",{style:{color:"#B392F0"}},"part"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"item.part"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[587]||(e[587]=s(`
`)),e[588]||(e[588]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"              class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"text-center rounded p-0.5  focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-green9"')],-1)),e[589]||(e[589]=s(`
`)),e[590]||(e[590]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"              :"),n("span",{style:{color:"#B392F0"}},"class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"[item.part "),n("span",{style:{color:"#F97583"}},"==="),n("span",{style:{color:"#9ECBFF"}}," 'year'"),n("span",{style:{color:"#F97583"}}," ?"),n("span",{style:{color:"#9ECBFF"}}," 'w-10'"),n("span",{style:{color:"#F97583"}}," :"),n("span",{style:{color:"#9ECBFF"}}," 'w-8'"),n("span",{style:{color:"#E1E4E8"}},"]"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[591]||(e[591]=s(`
`)),e[592]||(e[592]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"              type"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"start"')],-1)),e[593]||(e[593]=s(`
`)),e[594]||(e[594]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"            >")],-1)),e[595]||(e[595]=s(`
`)),e[596]||(e[596]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"              {{ item.value }}")],-1)),e[597]||(e[597]=s(`
`)),n("span",se,[e[72]||(e[72]=n("span",{style:{color:"#E1E4E8"}},"            </",-1)),n("span",oe,[o(a,{name:"DateRangeFieldInput"},{content:t(({})=>[o(l,{title:"props",data:`[
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
    "name": "part",
    "description": "<p>The part of the date to render</p>\\n",
    "type": "\\"day\\" | \\"month\\" | \\"year\\" | \\"hour\\" | \\"minute\\" | \\"second\\" | \\"dayPeriod\\" | \\"literal\\" | \\"timeZoneName\\"",
    "required": true
  },
  {
    "name": "type",
    "description": "<p>The type of field to render (start or end)</p>\\n",
    "type": "\\"start\\" | \\"end\\"",
    "required": true
  }
]`})]),default:t(()=>[e[71]||(e[71]=s("DateRangeFieldInput"))]),_:1})]),e[73]||(e[73]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[598]||(e[598]=s(`
`)),e[599]||(e[599]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"          </"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[600]||(e[600]=s(`
`)),e[601]||(e[601]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        </"),n("span",{style:{color:"#85E89D"}},"div"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[602]||(e[602]=s(`
`)),e[603]||(e[603]=n("span",{class:"line"},null,-1)),e[604]||(e[604]=s(`
`)),e[605]||(e[605]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        <"),n("span",{style:{color:"#85E89D"}},"span"),n("span",{style:{color:"#B392F0"}}," class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"mx-2"'),n("span",{style:{color:"#E1E4E8"}},">-</"),n("span",{style:{color:"#85E89D"}},"span"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[606]||(e[606]=s(`
`)),e[607]||(e[607]=n("span",{class:"line"},null,-1)),e[608]||(e[608]=s(`
`)),e[609]||(e[609]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        <"),n("span",{style:{color:"#85E89D"}},"div"),n("span",{style:{color:"#B392F0"}}," class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"flex items-center border rounded-md p-1 shadow-sm [[data-invalid]_&]:border-red-500"'),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[610]||(e[610]=s(`
`)),e[611]||(e[611]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"          <"),n("span",{style:{color:"#85E89D"}},"template")],-1)),e[612]||(e[612]=s(`
`)),e[613]||(e[613]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"            v-for"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"item "),n("span",{style:{color:"#F97583"}},"in"),n("span",{style:{color:"#E1E4E8"}}," segments.end"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[614]||(e[614]=s(`
`)),e[615]||(e[615]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"            :"),n("span",{style:{color:"#B392F0"}},"key"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"item.part"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[616]||(e[616]=s(`
`)),e[617]||(e[617]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"          >")],-1)),e[618]||(e[618]=s(`
`)),n("span",te,[e[75]||(e[75]=n("span",{style:{color:"#E1E4E8"}},"            <",-1)),n("span",le,[o(a,{name:"DateRangeFieldInput"},{content:t(({})=>[o(l,{title:"props",data:`[
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
    "name": "part",
    "description": "<p>The part of the date to render</p>\\n",
    "type": "\\"day\\" | \\"month\\" | \\"year\\" | \\"hour\\" | \\"minute\\" | \\"second\\" | \\"dayPeriod\\" | \\"literal\\" | \\"timeZoneName\\"",
    "required": true
  },
  {
    "name": "type",
    "description": "<p>The type of field to render (start or end)</p>\\n",
    "type": "\\"start\\" | \\"end\\"",
    "required": true
  }
]`})]),default:t(()=>[e[74]||(e[74]=s("DateRangeFieldInput"))]),_:1})])]),e[619]||(e[619]=s(`
`)),e[620]||(e[620]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"              v-if"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"item.part "),n("span",{style:{color:"#F97583"}},"==="),n("span",{style:{color:"#9ECBFF"}},` 'literal'"`)],-1)),e[621]||(e[621]=s(`
`)),e[622]||(e[622]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"              :"),n("span",{style:{color:"#B392F0"}},"part"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"item.part"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[623]||(e[623]=s(`
`)),e[624]||(e[624]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"              type"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"end"')],-1)),e[625]||(e[625]=s(`
`)),e[626]||(e[626]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"            >")],-1)),e[627]||(e[627]=s(`
`)),e[628]||(e[628]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"              {{ item.value }}")],-1)),e[629]||(e[629]=s(`
`)),n("span",ae,[e[77]||(e[77]=n("span",{style:{color:"#E1E4E8"}},"            </",-1)),n("span",re,[o(a,{name:"DateRangeFieldInput"},{content:t(({})=>[o(l,{title:"props",data:`[
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
    "name": "part",
    "description": "<p>The part of the date to render</p>\\n",
    "type": "\\"day\\" | \\"month\\" | \\"year\\" | \\"hour\\" | \\"minute\\" | \\"second\\" | \\"dayPeriod\\" | \\"literal\\" | \\"timeZoneName\\"",
    "required": true
  },
  {
    "name": "type",
    "description": "<p>The type of field to render (start or end)</p>\\n",
    "type": "\\"start\\" | \\"end\\"",
    "required": true
  }
]`})]),default:t(()=>[e[76]||(e[76]=s("DateRangeFieldInput"))]),_:1})]),e[78]||(e[78]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[630]||(e[630]=s(`
`)),n("span",pe,[e[80]||(e[80]=n("span",{style:{color:"#E1E4E8"}},"            <",-1)),n("span",ie,[o(a,{name:"DateRangeFieldInput"},{content:t(({})=>[o(l,{title:"props",data:`[
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
    "name": "part",
    "description": "<p>The part of the date to render</p>\\n",
    "type": "\\"day\\" | \\"month\\" | \\"year\\" | \\"hour\\" | \\"minute\\" | \\"second\\" | \\"dayPeriod\\" | \\"literal\\" | \\"timeZoneName\\"",
    "required": true
  },
  {
    "name": "type",
    "description": "<p>The type of field to render (start or end)</p>\\n",
    "type": "\\"start\\" | \\"end\\"",
    "required": true
  }
]`})]),default:t(()=>[e[79]||(e[79]=s("DateRangeFieldInput"))]),_:1})])]),e[631]||(e[631]=s(`
`)),e[632]||(e[632]=n("span",{class:"line"},[n("span",{style:{color:"#F97583"}},"              v-else")],-1)),e[633]||(e[633]=s(`
`)),e[634]||(e[634]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"              :"),n("span",{style:{color:"#B392F0"}},"part"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"item.part"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[635]||(e[635]=s(`
`)),e[636]||(e[636]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"              class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"text-center rounded p-0.5  focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-green9"')],-1)),e[637]||(e[637]=s(`
`)),e[638]||(e[638]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"              :"),n("span",{style:{color:"#B392F0"}},"class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"'),n("span",{style:{color:"#E1E4E8"}},"[item.part "),n("span",{style:{color:"#F97583"}},"==="),n("span",{style:{color:"#9ECBFF"}}," 'year'"),n("span",{style:{color:"#F97583"}}," ?"),n("span",{style:{color:"#9ECBFF"}}," 'w-10'"),n("span",{style:{color:"#F97583"}}," :"),n("span",{style:{color:"#9ECBFF"}}," 'w-8'"),n("span",{style:{color:"#E1E4E8"}},"]"),n("span",{style:{color:"#9ECBFF"}},'"')],-1)),e[639]||(e[639]=s(`
`)),e[640]||(e[640]=n("span",{class:"line"},[n("span",{style:{color:"#B392F0"}},"              type"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"end"')],-1)),e[641]||(e[641]=s(`
`)),e[642]||(e[642]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"            >")],-1)),e[643]||(e[643]=s(`
`)),e[644]||(e[644]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"              {{ item.value }}")],-1)),e[645]||(e[645]=s(`
`)),n("span",de,[e[82]||(e[82]=n("span",{style:{color:"#E1E4E8"}},"            </",-1)),n("span",Ee,[o(a,{name:"DateRangeFieldInput"},{content:t(({})=>[o(l,{title:"props",data:`[
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
    "name": "part",
    "description": "<p>The part of the date to render</p>\\n",
    "type": "\\"day\\" | \\"month\\" | \\"year\\" | \\"hour\\" | \\"minute\\" | \\"second\\" | \\"dayPeriod\\" | \\"literal\\" | \\"timeZoneName\\"",
    "required": true
  },
  {
    "name": "type",
    "description": "<p>The type of field to render (start or end)</p>\\n",
    "type": "\\"start\\" | \\"end\\"",
    "required": true
  }
]`})]),default:t(()=>[e[81]||(e[81]=s("DateRangeFieldInput"))]),_:1})]),e[83]||(e[83]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[646]||(e[646]=s(`
`)),e[647]||(e[647]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"          </"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[648]||(e[648]=s(`
`)),e[649]||(e[649]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        </"),n("span",{style:{color:"#85E89D"}},"div"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[650]||(e[650]=s(`
`)),e[651]||(e[651]=n("span",{class:"line"},null,-1)),e[652]||(e[652]=s(`
`)),e[653]||(e[653]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"        <"),n("span",{style:{color:"#85E89D"}},"span"),n("span",{style:{color:"#B392F0"}}," class"),n("span",{style:{color:"#E1E4E8"}},"="),n("span",{style:{color:"#9ECBFF"}},'"ml-4 text-red-500 font-semibold text-sm [[data-invalid]_&]:block hidden"'),n("span",{style:{color:"#E1E4E8"}},">Invalid date</"),n("span",{style:{color:"#85E89D"}},"span"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[654]||(e[654]=s(`
`)),n("span",ye,[e[85]||(e[85]=n("span",{style:{color:"#E1E4E8"}},"      </",-1)),n("span",ue,[o(a,{name:"DateRangeFieldRoot"},{content:t(({})=>[o(l,{title:"props",data:`[
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
    "name": "defaultPlaceholder",
    "description": "<p>The default placeholder date</p>\\n",
    "type": "DateValue",
    "required": false
  },
  {
    "name": "defaultValue",
    "description": "<p>The default value for the calendar</p>\\n",
    "type": "DateRange",
    "required": false
  },
  {
    "name": "dir",
    "description": "<p>The reading direction of the date field when applicable. &lt;br&gt; If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>\\n",
    "type": "\\"ltr\\" | \\"rtl\\"",
    "required": false
  },
  {
    "name": "disabled",
    "description": "<p>Whether or not the date field is disabled</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "granularity",
    "description": "<p>The granularity to use for formatting times. Defaults to day if a CalendarDate is provided, otherwise defaults to minute. The field will render segments for each part of the date up to and including the specified granularity</p>\\n",
    "type": "\\"day\\" | \\"hour\\" | \\"minute\\" | \\"second\\"",
    "required": false
  },
  {
    "name": "hideTimeZone",
    "description": "<p>Whether or not to hide the time zone segment of the field</p>\\n",
    "type": "boolean",
    "required": false
  },
  {
    "name": "hourCycle",
    "description": "<p>The hour cycle used for formatting times. Defaults to the local preference</p>\\n",
    "type": "12 | 24",
    "required": false
  },
  {
    "name": "id",
    "description": "<p>Id of the element</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "isDateUnavailable",
    "description": "<p>A function that returns whether or not a date is unavailable</p>\\n",
    "type": "Matcher",
    "required": false
  },
  {
    "name": "locale",
    "description": "<p>The locale to use for formatting dates</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "maxValue",
    "description": "<p>The maximum date that can be selected</p>\\n",
    "type": "DateValue",
    "required": false
  },
  {
    "name": "minValue",
    "description": "<p>The minimum date that can be selected</p>\\n",
    "type": "DateValue",
    "required": false
  },
  {
    "name": "modelValue",
    "description": "<p>The controlled checked state of the calendar. Can be bound as <code>v-model</code>.</p>\\n",
    "type": "DateRange | null",
    "required": false
  },
  {
    "name": "name",
    "description": "<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>\\n",
    "type": "string",
    "required": false
  },
  {
    "name": "placeholder",
    "description": "<p>The placeholder date, which is used to determine what month to display when no date is selected. This updates as the user navigates the calendar and can be used to programmatically control the calendar view</p>\\n",
    "type": "DateValue",
    "required": false
  },
  {
    "name": "readonly",
    "description": "<p>Whether or not the date field is readonly</p>\\n",
    "type": "boolean",
    "required": false,
    "default": "false"
  },
  {
    "name": "required",
    "description": "<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>\\n",
    "type": "boolean",
    "required": false
  }
]`}),o(l,{title:"emits",data:`[
  {
    "name": "update:modelValue",
    "description": "<p>Event handler called whenever the model value changes</p>\\n",
    "type": "[DateRange]"
  },
  {
    "name": "update:placeholder",
    "description": "<p>Event handler called whenever the placeholder value changes</p>\\n",
    "type": "[date: DateValue]"
  }
]`}),o(l,{title:"slots",data:`[
  {
    "name": "modelValue",
    "description": "",
    "type": "DateRange | null"
  },
  {
    "name": "segments",
    "description": "",
    "type": "{ start: { part: SegmentPart; value: string; }[]; end: { part: SegmentPart; value: string; }[]; }"
  }
]`}),o(l,{title:"methods",data:`[
  {
    "name": "isDateUnavailable",
    "description": "<p>A function that returns whether or not a date is unavailable</p>\\n",
    "type": "Matcher"
  },
  {
    "name": "setFocusedElement",
    "description": "",
    "type": "(el: HTMLElement) => void"
  }
]`})]),default:t(()=>[e[84]||(e[84]=s("DateRangeFieldRoot"))]),_:1})]),e[86]||(e[86]=n("span",{style:{color:"#E1E4E8"}},">",-1))]),e[655]||(e[655]=s(`
`)),e[656]||(e[656]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"    </"),n("span",{style:{color:"#85E89D"}},"div"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[657]||(e[657]=s(`
`)),e[658]||(e[658]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"  </"),n("span",{style:{color:"#85E89D"}},"div"),n("span",{style:{color:"#E1E4E8"}},">")],-1)),e[659]||(e[659]=s(`
`)),e[660]||(e[660]=n("span",{class:"line"},[n("span",{style:{color:"#E1E4E8"}},"</"),n("span",{style:{color:"#85E89D"}},"template"),n("span",{style:{color:"#E1E4E8"}},">")],-1))])])])]),default:t(()=>[o(sn)]),_:1}),o(m,null,{default:t(()=>e[663]||(e[663]=[n("h3",{id:"date-picker-selection-1",tabindex:"-1",class:"group relative border-none mb-4 lg:-ml-2 lg:pl-2 lg:pr-2 w-max"},[s("Date Picker Selection "),n("a",{class:"header-anchor [&_span]:focus:opacity-100 [&_span_>_span]:focus:outline",href:"#date-picker-selection-1","aria-label":'Permalink to "Date Picker Selection"'},[n("span",{class:"absolute top-0 -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 focus:opacity-100 lg:flex"},[s("​"),n("span",{class:"flex h-6 w-6 items-center justify-center rounded-md outline-2 outline-primary text-green-400 shadow-sm hover:text-green-700 hover:shadow dark:bg-primary/20 dark:text-primary/80 dark:shadow-none dark:hover:bg-primary/40 dark:hover:text-primary"},[n("svg",{width:"12",height:"12",fill:"none","aria-hidden":"true"},[n("path",{d:"M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"})])])])])],-1),n("p",null,"Dual-calendar display that shows two months side by side for easier date range selection, and quick selection options in a sidebar panel",-1)])),_:1})])}}});export{ge as __pageData,be as default};
