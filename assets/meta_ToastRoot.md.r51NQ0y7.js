import{_ as i,c as r,e,au as t,o as s}from"./chunks/framework.6UEeBrHH.js";const w=JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/ToastRoot.md","filePath":"meta/ToastRoot.md","lastUpdated":1741142868000}'),p={name:"meta/ToastRoot.md"};function d(l,c,m,h,u,v){const n=t("PropsTable"),o=t("EmitsTable"),a=t("SlotsTable");return s(),r("div",null,[e(n,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'li'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"defaultOpen",description:`<p>The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.</p>
`,type:"boolean",required:!1,default:"true"},{name:"duration",description:`<p>Time in milliseconds that toast should remain visible for. Overrides value
given to <code>ToastProvider</code>.</p>
`,type:"number",required:!1},{name:"forceMount",description:`<p>Used to force mounting when more control is needed. Useful when
controlling animation with Vue animation libraries.</p>
`,type:"boolean",required:!1},{name:"open",description:`<p>The controlled open state of the dialog. Can be bind as <code>v-model:open</code>.</p>
`,type:"boolean",required:!1},{name:"type",description:`<p>Control the sensitivity of the toast for accessibility purposes.</p>
<p>For toasts that are the result of a user action, choose <code>foreground</code>. Toasts generated from background tasks should use <code>background</code>.</p>
`,type:"'foreground' | 'background'",required:!1,default:"'foreground'"}]}),e(o,{data:[{name:"escapeKeyDown",description:`<p>Event handler called when the escape key is down. It can be prevented by calling <code>event.preventDefault</code>.</p>
`,type:"[event: KeyboardEvent]"},{name:"pause",description:`<p>Event handler called when the dismiss timer is paused. This occurs when the pointer is moved over the viewport, the viewport is focused or when the window is blurred.</p>
`,type:"[]"},{name:"resume",description:`<p>Event handler called when the dismiss timer is resumed. This occurs when the pointer is moved away from the viewport, the viewport is blurred or when the window is focused.</p>
`,type:"[]"},{name:"swipeCancel",description:"",type:"[event: SwipeEvent]"},{name:"swipeEnd",description:`<p>Event handler called at the end of a swipe interaction. It can be prevented by calling <code>event.preventDefault</code>.</p>
`,type:"[event: SwipeEvent]"},{name:"swipeMove",description:`<p>Event handler called during a swipe interaction. It can be prevented by calling <code>event.preventDefault</code>.</p>
`,type:"[event: SwipeEvent]"},{name:"swipeStart",description:`<p>Event handler called when starting a swipe interaction. It can be prevented by calling <code>event.preventDefault</code>.</p>
`,type:"[event: SwipeEvent]"},{name:"update:open",description:`<p>Event handler called when the open state changes</p>
`,type:"[value: boolean]"}]}),e(a,{data:[{name:"open",description:`<p>Current open state</p>
`,type:"boolean"},{name:"remaining",description:`<p>Remaining time (in ms)</p>
`,type:"number"},{name:"duration",description:`<p>Total time the toast will remain visible for (in ms)</p>
`,type:"number"}]})])}const b=i(p,[["render",d]]);export{w as __pageData,b as default};
