import{_ as p,c as r,e,au as t,o as i}from"./chunks/framework.6UEeBrHH.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/StepperRoot.md","filePath":"meta/StepperRoot.md","lastUpdated":1741142868000}'),s={name:"meta/StepperRoot.md"};function d(l,c,m,h,u,f){const o=t("PropsTable"),n=t("EmitsTable"),a=t("SlotsTable");return i(),r("div",null,[e(o,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'div'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"defaultValue",description:`<p>The value of the step that should be active when initially rendered. Use when you do not need to control the state of the steps.</p>
`,type:"number",required:!1,default:"1"},{name:"dir",description:`<p>The reading direction of the combobox when applicable. <br> If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>
`,type:"'ltr' | 'rtl'",required:!1},{name:"linear",description:`<p>Whether or not the steps must be completed in order.</p>
`,type:"boolean",required:!1,default:"true"},{name:"modelValue",description:`<p>The controlled value of the step to activate. Can be bound as <code>v-model</code>.</p>
`,type:"number",required:!1},{name:"orientation",description:`<p>The orientation the steps are laid out.
Mainly so arrow navigation is done accordingly (left & right vs. up & down).</p>
`,type:"'vertical' | 'horizontal'",required:!1,default:"'horizontal'"}]}),e(n,{data:[{name:"update:modelValue",description:`<p>Event handler called when the value changes</p>
`,type:"[payload: number]"}]}),e(a,{data:[{name:"modelValue",description:`<p>Current step</p>
`,type:"number | undefined"},{name:"totalSteps",description:`<p>Total number of steps</p>
`,type:"number"},{name:"isNextDisabled",description:`<p>Whether or not the next step is disabled</p>
`,type:"boolean"},{name:"isPrevDisabled",description:`<p>Whether or not the previous step is disabled</p>
`,type:"boolean"},{name:"isFirstStep",description:`<p>Whether or not the first step is active</p>
`,type:"boolean"},{name:"isLastStep",description:`<p>Whether or not the last step is active</p>
`,type:"boolean"},{name:"goToStep",description:`<p>Go to a specific step</p>
`,type:""},{name:"nextStep",description:`<p>Go to the next step</p>
`,type:""},{name:"prevStep",description:`<p>Go to the previous step</p>
`,type:""}]})])}const v=p(s,[["render",d]]);export{y as __pageData,v as default};
