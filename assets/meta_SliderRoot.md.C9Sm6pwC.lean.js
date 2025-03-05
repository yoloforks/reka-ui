import{_ as o,c as i,e,au as t,o as d}from"./chunks/framework.6UEeBrHH.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/SliderRoot.md","filePath":"meta/SliderRoot.md","lastUpdated":1741142384000}'),l={name:"meta/SliderRoot.md"};function s(p,m,u,c,h,f){const n=t("PropsTable"),a=t("EmitsTable"),r=t("SlotsTable");return d(),i("div",null,[e(n,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'div'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"defaultValue",description:`<p>The value of the slider when initially rendered. Use when you do not need to control the state of the slider.</p>
`,type:"number[]",required:!1,default:"[0]"},{name:"dir",description:`<p>The reading direction of the combobox when applicable. <br> If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>
`,type:"'ltr' | 'rtl'",required:!1},{name:"disabled",description:`<p>When <code>true</code>, prevents the user from interacting with the slider.</p>
`,type:"boolean",required:!1,default:"false"},{name:"inverted",description:`<p>Whether the slider is visually inverted.</p>
`,type:"boolean",required:!1,default:"false"},{name:"max",description:`<p>The maximum value for the range.</p>
`,type:"number",required:!1,default:"100"},{name:"min",description:`<p>The minimum value for the range.</p>
`,type:"number",required:!1,default:"0"},{name:"minStepsBetweenThumbs",description:`<p>The minimum permitted steps between multiple thumbs.</p>
`,type:"number",required:!1,default:"0"},{name:"modelValue",description:`<p>The controlled value of the slider. Can be bind as <code>v-model</code>.</p>
`,type:"number[] | null",required:!1},{name:"name",description:`<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>
`,type:"string",required:!1},{name:"orientation",description:`<p>The orientation of the slider.</p>
`,type:"'vertical' | 'horizontal'",required:!1,default:"'horizontal'"},{name:"required",description:`<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>
`,type:"boolean",required:!1},{name:"step",description:`<p>The stepping interval.</p>
`,type:"number",required:!1,default:"1"}]}),e(a,{data:[{name:"update:modelValue",description:`<p>Event handler called when the slider value changes</p>
`,type:"[payload: number[]]"},{name:"valueCommit",description:`<p>Event handler called when the value changes at the end of an interaction.</p>
<p>Useful when you only need to capture a final value e.g. to update a backend service.</p>
`,type:"[payload: number[]]"}]}),e(r,{data:[{name:"modelValue",description:`<p>Current slider values</p>
`,type:"number[] | null"}]})])}const y=o(l,[["render",s]]);export{v as __pageData,y as default};
