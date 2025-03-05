import{_ as i,c as r,e,au as t,o as l}from"./chunks/framework.6UEeBrHH.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/ListboxRoot.md","filePath":"meta/ListboxRoot.md","lastUpdated":1741142868000}'),p={name:"meta/ListboxRoot.md"};function s(d,c,h,u,m,b){const o=t("PropsTable"),a=t("EmitsTable"),n=t("SlotsTable");return l(),r("div",null,[e(o,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'div'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"by",description:`<p>Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared.</p>
`,type:"string | ((a: AcceptableValue, b: AcceptableValue) => boolean)",required:!1},{name:"defaultValue",description:`<p>The value of the listbox when initially rendered. Use when you do not need to control the state of the Listbox</p>
`,type:"AcceptableValue | AcceptableValue[]",required:!1},{name:"dir",description:`<p>The reading direction of the listbox when applicable. <br> If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>
`,type:"'ltr' | 'rtl'",required:!1},{name:"disabled",description:`<p>When <code>true</code>, prevents the user from interacting with listbox</p>
`,type:"boolean",required:!1},{name:"highlightOnHover",description:`<p>When <code>true</code>, hover over item will trigger highlight</p>
`,type:"boolean",required:!1},{name:"modelValue",description:`<p>The controlled value of the listbox. Can be binded with with <code>v-model</code>.</p>
`,type:"AcceptableValue | AcceptableValue[]",required:!1},{name:"multiple",description:`<p>Whether multiple options can be selected or not.</p>
`,type:"boolean",required:!1},{name:"name",description:`<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>
`,type:"string",required:!1},{name:"orientation",description:`<p>The orientation of the listbox. <br>Mainly so arrow navigation is done accordingly (left & right vs. up & down)</p>
`,type:"'vertical' | 'horizontal'",required:!1,default:"'vertical'"},{name:"required",description:`<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>
`,type:"boolean",required:!1},{name:"selectionBehavior",description:`<p>How multiple selection should behave in the collection.</p>
`,type:"'toggle' | 'replace'",required:!1,default:"'toggle'"}]}),e(a,{data:[{name:"entryFocus",description:`<p>Event handler called when container is being focused. Can be prevented.</p>
`,type:"[event: CustomEvent<any>]"},{name:"highlight",description:`<p>Event handler when highlighted element changes.</p>
`,type:"[payload: { ref: HTMLElement; value: AcceptableValue; }]"},{name:"leave",description:`<p>Event handler called when the mouse leave the container</p>
`,type:"[event: Event]"},{name:"update:modelValue",description:`<p>Event handler called when the value changes.</p>
`,type:"[value: AcceptableValue]"}]}),e(n,{data:[{name:"modelValue",description:`<p>Current active value</p>
`,type:"AcceptableValue | AcceptableValue[] | undefined"}]})])}const g=i(p,[["render",s]]);export{v as __pageData,g as default};
