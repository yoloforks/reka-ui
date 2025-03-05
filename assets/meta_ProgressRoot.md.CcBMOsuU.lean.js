import{_ as s,c as l,e,au as a,o as p}from"./chunks/framework.6UEeBrHH.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/ProgressRoot.md","filePath":"meta/ProgressRoot.md","lastUpdated":1741142901000}'),d={name:"meta/ProgressRoot.md"};function i(u,m,c,h,b,f){const t=a("PropsTable"),n=a("EmitsTable"),o=a("SlotsTable"),r=a("MethodsTable");return p(),l("div",null,[e(t,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'div'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"getValueLabel",description:`<p>A function to get the accessible label text representing the current value in a human-readable format.</p>
<p>If not provided, the value label will be read as the numeric value as a percentage of the max value.</p>
`,type:"((value: number, max: number) => string)",required:!1,default:"`${Math.round((value / max) * DEFAULT_MAX)}%`"},{name:"max",description:`<p>The maximum progress value.</p>
`,type:"number",required:!1,default:"DEFAULT_MAX"},{name:"modelValue",description:`<p>The progress value. Can be bind as <code>v-model</code>.</p>
`,type:"number | null",required:!1}]}),e(n,{data:[{name:"update:max",description:`<p>Event handler called when the max value changes</p>
`,type:"[value: number]"},{name:"update:modelValue",description:`<p>Event handler called when the progress value changes</p>
`,type:"[value: string[]]"}]}),e(o,{data:[{name:"modelValue",description:`<p>Current input values</p>
`,type:"number | null | undefined"}]}),e(r,{data:[{name:"getValueLabel",description:`<p>A function to get the accessible label text representing the current value in a human-readable format.</p>
<p>If not provided, the value label will be read as the numeric value as a percentage of the max value.</p>
`,type:"(value: number, max: number) => string"}]})])}const _=s(d,[["render",i]]);export{g as __pageData,_ as default};
