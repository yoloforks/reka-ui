import{_ as r,c as i,e,au as t,o as d}from"./chunks/framework.6UEeBrHH.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/RadioGroupRoot.md","filePath":"meta/RadioGroupRoot.md","lastUpdated":1741142868000}'),s={name:"meta/RadioGroupRoot.md"};function p(l,c,m,u,h,f){const o=t("PropsTable"),a=t("EmitsTable"),n=t("SlotsTable");return d(),i("div",null,[e(o,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'div'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"defaultValue",description:`<p>The value of the radio item that should be checked when initially rendered.</p>
<p>Use when you do not need to control the state of the radio items.</p>
`,type:"AcceptableValue",required:!1},{name:"dir",description:`<p>The reading direction of the combobox when applicable. <br> If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>
`,type:"'ltr' | 'rtl'",required:!1},{name:"disabled",description:`<p>When <code>true</code>, prevents the user from interacting with radio items.</p>
`,type:"boolean",required:!1,default:"false"},{name:"loop",description:`<p>When <code>true</code>, keyboard navigation will loop from last item to first, and vice versa.</p>
`,type:"boolean",required:!1,default:"true"},{name:"modelValue",description:`<p>The controlled value of the radio item to check. Can be binded as <code>v-model</code>.</p>
`,type:"AcceptableValue",required:!1},{name:"name",description:`<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>
`,type:"string",required:!1},{name:"orientation",description:`<p>The orientation of the component.</p>
`,type:"'vertical' | 'horizontal'",required:!1},{name:"required",description:`<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>
`,type:"boolean",required:!1,default:"false"}]}),e(a,{data:[{name:"update:modelValue",description:`<p>Event handler called when the radio group value changes</p>
`,type:"[payload: string]"}]}),e(n,{data:[{name:"modelValue",description:`<p>Current input values</p>
`,type:"null | string | number | Record<string, any>"}]})])}const v=r(s,[["render",p]]);export{g as __pageData,v as default};
