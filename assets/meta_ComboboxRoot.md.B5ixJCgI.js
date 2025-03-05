import{_ as r,c as i,e,au as t,o as l}from"./chunks/framework.6UEeBrHH.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/ComboboxRoot.md","filePath":"meta/ComboboxRoot.md","lastUpdated":1741142901000}'),p={name:"meta/ComboboxRoot.md"};function d(s,c,h,m,u,b){const o=t("PropsTable"),n=t("EmitsTable"),a=t("SlotsTable");return l(),i("div",null,[e(o,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'div'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"by",description:`<p>Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared.</p>
`,type:"string | ((a: AcceptableValue, b: AcceptableValue) => boolean)",required:!1},{name:"defaultOpen",description:`<p>The open state of the combobox when it is initially rendered. <br> Use when you do not need to control its open state.</p>
`,type:"boolean",required:!1},{name:"defaultValue",description:`<p>The value of the listbox when initially rendered. Use when you do not need to control the state of the Listbox</p>
`,type:"AcceptableValue | AcceptableValue[]",required:!1},{name:"dir",description:`<p>The reading direction of the listbox when applicable. <br> If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>
`,type:"'ltr' | 'rtl'",required:!1},{name:"disabled",description:`<p>When <code>true</code>, prevents the user from interacting with listbox</p>
`,type:"boolean",required:!1},{name:"highlightOnHover",description:`<p>When <code>true</code>, hover over item will trigger highlight</p>
`,type:"boolean",required:!1},{name:"ignoreFilter",description:`<p>When <code>true</code>, disable the default filters</p>
`,type:"boolean",required:!1},{name:"modelValue",description:`<p>The controlled value of the listbox. Can be binded with with <code>v-model</code>.</p>
`,type:"AcceptableValue | AcceptableValue[]",required:!1},{name:"multiple",description:`<p>Whether multiple options can be selected or not.</p>
`,type:"boolean",required:!1},{name:"name",description:`<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>
`,type:"string",required:!1},{name:"open",description:`<p>The controlled open state of the Combobox. Can be binded with with <code>v-model:open</code>.</p>
`,type:"boolean",required:!1},{name:"required",description:`<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>
`,type:"boolean",required:!1},{name:"resetSearchTermOnBlur",description:`<p>Whether to reset the searchTerm when the Combobox input blurred</p>
`,type:"boolean",required:!1,default:"true"},{name:"resetSearchTermOnSelect",description:`<p>Whether to reset the searchTerm when the Combobox value is selected</p>
`,type:"boolean",required:!1,default:"true"}]}),e(n,{data:[{name:"highlight",description:`<p>Event handler when highlighted element changes.</p>
`,type:"[payload: { ref: HTMLElement; value: AcceptableValue; }]"},{name:"update:modelValue",description:`<p>Event handler called when the value changes.</p>
`,type:"[value: AcceptableValue]"},{name:"update:open",description:`<p>Event handler called when the open state of the combobox changes.</p>
`,type:"[value: boolean]"}]}),e(a,{data:[{name:"open",description:`<p>Current open state</p>
`,type:"boolean"},{name:"modelValue",description:`<p>Current active value</p>
`,type:"AcceptableValue | AcceptableValue[]"}]})])}const y=r(p,[["render",d]]);export{g as __pageData,y as default};
