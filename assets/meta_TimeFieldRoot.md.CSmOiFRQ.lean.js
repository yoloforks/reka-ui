import{_ as d,c as r,e,au as t,o as l}from"./chunks/framework.6UEeBrHH.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/TimeFieldRoot.md","filePath":"meta/TimeFieldRoot.md","lastUpdated":1741142901000}'),s={name:"meta/TimeFieldRoot.md"};function p(m,c,u,h,f,T){const a=t("PropsTable"),i=t("EmitsTable"),n=t("SlotsTable"),o=t("MethodsTable");return l(),r("div",null,[e(a,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'div'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"defaultPlaceholder",description:`<p>The default placeholder date</p>
`,type:"TimeValue",required:!1},{name:"defaultValue",description:`<p>The default value for the calendar</p>
`,type:"TimeValue",required:!1},{name:"dir",description:`<p>The reading direction of the time field when applicable. <br> If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>
`,type:"'ltr' | 'rtl'",required:!1},{name:"disabled",description:`<p>Whether or not the time field is disabled</p>
`,type:"boolean",required:!1,default:"false"},{name:"granularity",description:`<p>The granularity to use for formatting times. Defaults to minute if a Time is provided, otherwise defaults to minute. The field will render segments for each part of the date up to and including the specified granularity</p>
`,type:"'hour' | 'minute' | 'second'",required:!1},{name:"hideTimeZone",description:`<p>Whether or not to hide the time zone segment of the field</p>
`,type:"boolean",required:!1},{name:"hourCycle",description:`<p>The hour cycle used for formatting times. Defaults to the local preference</p>
`,type:"12 | 24",required:!1},{name:"id",description:`<p>Id of the element</p>
`,type:"string",required:!1},{name:"locale",description:`<p>The locale to use for formatting dates</p>
`,type:"string",required:!1},{name:"maxValue",description:`<p>The maximum date that can be selected</p>
`,type:"TimeValue",required:!1},{name:"minValue",description:`<p>The minimum date that can be selected</p>
`,type:"TimeValue",required:!1},{name:"modelValue",description:`<p>The controlled checked state of the field. Can be bound as <code>v-model</code>.</p>
`,type:"TimeValue | null",required:!1},{name:"name",description:`<p>The name of the field. Submitted with its owning form as part of a name/value pair.</p>
`,type:"string",required:!1},{name:"placeholder",description:`<p>The placeholder date, which is used to determine what time to display when no time is selected. This updates as the user navigates the field</p>
`,type:"TimeValue",required:!1},{name:"readonly",description:`<p>Whether or not the time field is readonly</p>
`,type:"boolean",required:!1,default:"false"},{name:"required",description:`<p>When <code>true</code>, indicates that the user must set the value before the owning form can be submitted.</p>
`,type:"boolean",required:!1}]}),e(i,{data:[{name:"update:modelValue",description:`<p>Event handler called whenever the model value changes</p>
`,type:"[date: TimeValue]"},{name:"update:placeholder",description:`<p>Event handler called whenever the placeholder value changes</p>
`,type:"[date: TimeValue]"}]}),e(n,{data:[{name:"modelValue",description:`<p>The current time of the field</p>
`,type:"TimeValue | undefined"},{name:"segments",description:`<p>The time field segment contents</p>
`,type:"{ part: SegmentPart; value: string; }[]"},{name:"isInvalid",description:`<p>Value if the input is invalid</p>
`,type:"boolean"}]}),e(o,{data:[{name:"setFocusedElement",description:`<p>Helper to set the focused element inside the DateField</p>
`,type:"(el: HTMLElement) => void"}]})])}const b=d(s,[["render",p]]);export{g as __pageData,b as default};
