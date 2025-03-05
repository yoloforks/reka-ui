import{_ as r,c as i,e,au as t,o as d}from"./chunks/framework.BvEsjwOO.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/TabsRoot.md","filePath":"meta/TabsRoot.md","lastUpdated":1741141490000}'),s={name:"meta/TabsRoot.md"};function l(p,c,m,u,h,f){const a=t("PropsTable"),o=t("EmitsTable"),n=t("SlotsTable");return d(),i("div",null,[e(a,{data:[{name:"activationMode",description:`<p>Whether a tab is activated automatically (on focus) or manually (on click).</p>
`,type:"'automatic' | 'manual'",required:!1,default:"'automatic'"},{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'div'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"defaultValue",description:`<p>The value of the tab that should be active when initially rendered. Use when you do not need to control the state of the tabs</p>
`,type:"string | number",required:!1},{name:"dir",description:`<p>The reading direction of the combobox when applicable. <br> If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>
`,type:"'ltr' | 'rtl'",required:!1},{name:"modelValue",description:`<p>The controlled value of the tab to activate. Can be bind as <code>v-model</code>.</p>
`,type:"string | number",required:!1},{name:"orientation",description:`<p>The orientation the tabs are laid out.
Mainly so arrow navigation is done accordingly (left & right vs. up & down)</p>
`,type:"'vertical' | 'horizontal'",required:!1,default:"'horizontal'"},{name:"unmountOnHide",description:`<p>When <code>true</code>, the element will be unmounted on closed state.</p>
`,type:"boolean",required:!1,default:"true"}]}),e(o,{data:[{name:"update:modelValue",description:`<p>Event handler called when the value changes</p>
`,type:"[payload: StringOrNumber]"}]}),e(n,{data:[{name:"modelValue",description:`<p>Current input values</p>
`,type:"string | number"}]})])}const v=r(s,[["render",l]]);export{g as __pageData,v as default};
