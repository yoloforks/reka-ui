import{_ as i,c as r,e,au as t,o as p}from"./chunks/framework.DhAtJbM3.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/PinInputRoot.md","filePath":"meta/PinInputRoot.md","lastUpdated":1741141824000}'),d={name:"meta/PinInputRoot.md"};function s(l,c,u,m,h,f){const n=t("PropsTable"),o=t("EmitsTable"),a=t("SlotsTable");return p(),r("div",null,[e(n,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'div'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"defaultValue",description:`<p>The default value of the pin inputs when it is initially rendered. Use when you do not need to control its checked state.</p>
`,type:"string[]",required:!1},{name:"dir",description:`<p>The reading direction of the combobox when applicable. <br> If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>
`,type:"'ltr' | 'rtl'",required:!1},{name:"disabled",description:`<p>When <code>true</code>, prevents the user from interacting with the pin input</p>
`,type:"boolean",required:!1},{name:"id",description:`<p>Id of the element</p>
`,type:"string",required:!1},{name:"mask",description:`<p>When <code>true</code>, pin inputs will be treated as password.</p>
`,type:"boolean",required:!1},{name:"modelValue",description:`<p>The controlled checked state of the pin input. Can be binded as <code>v-model</code>.</p>
`,type:"string[] | null",required:!1},{name:"name",description:`<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>
`,type:"string",required:!1},{name:"otp",description:`<p>When <code>true</code>, mobile devices will autodetect the OTP from messages or clipboard, and enable the autocomplete field.</p>
`,type:"boolean",required:!1},{name:"placeholder",description:`<p>The placeholder character to use for empty pin-inputs.</p>
`,type:"string",required:!1,default:"''"},{name:"required",description:`<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>
`,type:"boolean",required:!1},{name:"type",description:`<p>Input type for the inputs.</p>
`,type:"'number' | 'text'",required:!1,default:"'text'"}]}),e(o,{data:[{name:"complete",description:"",type:"[value: string[]]"},{name:"update:modelValue",description:`<p>Event handler called when the value changes.</p>
`,type:"[value: string[]]"}]}),e(a,{data:[{name:"modelValue",description:`<p>Current input values</p>
`,type:"string[]"}]})])}const y=i(d,[["render",s]]);export{g as __pageData,y as default};
