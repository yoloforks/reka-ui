import{_ as r,c as i,e,au as t,o as l}from"./chunks/framework.BvEsjwOO.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/ToggleGroupRoot.md","filePath":"meta/ToggleGroupRoot.md","lastUpdated":1741141490000}'),d={name:"meta/ToggleGroupRoot.md"};function s(p,c,u,m,h,f){const o=t("PropsTable"),a=t("EmitsTable"),n=t("SlotsTable");return l(),i("div",null,[e(o,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'div'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"defaultValue",description:`<p>The default active value of the item(s).</p>
<p>Use when you do not need to control the state of the item(s).</p>
`,type:"AcceptableValue | AcceptableValue[]",required:!1},{name:"dir",description:`<p>The reading direction of the combobox when applicable. <br> If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>
`,type:"'ltr' | 'rtl'",required:!1},{name:"disabled",description:`<p>When <code>true</code>, prevents the user from interacting with the toggle group and all its items.</p>
`,type:"boolean",required:!1,default:"false"},{name:"loop",description:`<p>When <code>loop</code> and <code>rovingFocus</code> is <code>true</code>, keyboard navigation will loop from last item to first, and vice versa.</p>
`,type:"boolean",required:!1,default:"true"},{name:"modelValue",description:`<p>The controlled value of the active item(s).</p>
<p>Use this when you need to control the state of the items. Can be binded with <code>v-model</code></p>
`,type:"AcceptableValue | AcceptableValue[]",required:!1},{name:"name",description:`<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>
`,type:"string",required:!1},{name:"orientation",description:`<p>The orientation of the component, which determines how focus moves: <code>horizontal</code> for left/right arrows and <code>vertical</code> for up/down arrows.</p>
`,type:"'vertical' | 'horizontal'",required:!1},{name:"required",description:`<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>
`,type:"boolean",required:!1},{name:"rovingFocus",description:`<p>When <code>false</code>, navigating through the items using arrow keys will be disabled.</p>
`,type:"boolean",required:!1,default:"true"},{name:"type",description:`<p>Determines whether a "single" or "multiple" items can be selected at a time.</p>
<p>This prop will overwrite the inferred type from <code>modelValue</code> and <code>defaultValue</code>.</p>
`,type:"'single' | 'multiple'",required:!1}]}),e(a,{data:[{name:"update:modelValue",description:`<p>Event handler called when the value of the toggle changes.</p>
`,type:"[payload: AcceptableValue | AcceptableValue[]]"}]}),e(n,{data:[{name:"modelValue",description:`<p>Current toggle values</p>
`,type:"AcceptableValue | AcceptableValue[] | undefined"}]})])}const v=r(d,[["render",s]]);export{b as __pageData,v as default};
