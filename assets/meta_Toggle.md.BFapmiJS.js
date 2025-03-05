import{_ as s,c as r,e,au as t,o as d}from"./chunks/framework.6UEeBrHH.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/Toggle.md","filePath":"meta/Toggle.md","lastUpdated":1741142901000}'),i={name:"meta/Toggle.md"};function l(p,c,m,u,h,f){const o=t("PropsTable"),a=t("EmitsTable"),n=t("SlotsTable");return d(),r("div",null,[e(o,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'button'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"defaultValue",description:`<p>The pressed state of the toggle when it is initially rendered. Use when you do not need to control its open state.</p>
`,type:"boolean",required:!1},{name:"disabled",description:`<p>When <code>true</code>, prevents the user from interacting with the toggle.</p>
`,type:"boolean",required:!1,default:"false"},{name:"modelValue",description:`<p>The controlled pressed state of the toggle. Can be bind as <code>v-model</code>.</p>
`,type:"boolean | null",required:!1},{name:"name",description:`<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>
`,type:"string",required:!1},{name:"required",description:`<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>
`,type:"boolean",required:!1}]}),e(a,{data:[{name:"update:modelValue",description:`<p>Event handler called when the value of the toggle changes.</p>
`,type:"[value: boolean]"}]}),e(n,{data:[{name:"modelValue",description:`<p>Current pressed state</p>
`,type:"boolean"}]})])}const _=s(i,[["render",l]]);export{b as __pageData,_ as default};
