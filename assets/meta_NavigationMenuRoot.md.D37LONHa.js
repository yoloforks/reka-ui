import{_ as r,c as i,e,au as t,o as d}from"./chunks/framework.6UEeBrHH.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/NavigationMenuRoot.md","filePath":"meta/NavigationMenuRoot.md","lastUpdated":1741142901000}'),l={name:"meta/NavigationMenuRoot.md"};function s(p,u,c,m,h,f){const n=t("PropsTable"),o=t("EmitsTable"),a=t("SlotsTable");return d(),i("div",null,[e(n,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'nav'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"defaultValue",description:`<p>The value of the menu item that should be active when initially rendered.</p>
<p>Use when you do not need to control the value state.</p>
`,type:"string",required:!1},{name:"delayDuration",description:`<p>The duration from when the pointer enters the trigger until the tooltip gets opened.</p>
`,type:"number",required:!1,default:"200"},{name:"dir",description:`<p>The reading direction of the combobox when applicable.</p>
<p>If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>
`,type:"'ltr' | 'rtl'",required:!1},{name:"disableClickTrigger",description:`<p>If <code>true</code>, menu cannot be open by click on trigger</p>
`,type:"boolean",required:!1,default:"false"},{name:"disableHoverTrigger",description:`<p>If <code>true</code>, menu cannot be open by hover on trigger</p>
`,type:"boolean",required:!1,default:"false"},{name:"disablePointerLeaveClose",description:`<p>If <code>true</code>, menu will not close during pointer leave event</p>
`,type:"boolean",required:!1},{name:"modelValue",description:`<p>The controlled value of the menu item to activate. Can be used as <code>v-model</code>.</p>
`,type:"string",required:!1},{name:"orientation",description:`<p>The orientation of the menu.</p>
`,type:"'vertical' | 'horizontal'",required:!1,default:"'horizontal'"},{name:"skipDelayDuration",description:`<p>How much time a user has to enter another trigger without incurring a delay again.</p>
`,type:"number",required:!1,default:"300"},{name:"unmountOnHide",description:`<p>When <code>true</code>, the element will be unmounted on closed state.</p>
`,type:"boolean",required:!1,default:"true"}]}),e(o,{data:[{name:"update:modelValue",description:`<p>Event handler called when the value changes.</p>
`,type:"[value: string]"}]}),e(a,{data:[{name:"modelValue",description:`<p>Current input values</p>
`,type:"string"}]})])}const v=r(l,[["render",s]]);export{b as __pageData,v as default};
