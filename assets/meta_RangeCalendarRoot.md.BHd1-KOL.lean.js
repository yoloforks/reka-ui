import{_ as d,c as i,e,au as a,o as l}from"./chunks/framework.DhAtJbM3.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/RangeCalendarRoot.md","filePath":"meta/RangeCalendarRoot.md","lastUpdated":1741141824000}'),s={name:"meta/RangeCalendarRoot.md"};function p(c,h,u,m,f,y){const t=a("PropsTable"),n=a("EmitsTable"),r=a("SlotsTable"),o=a("MethodsTable");return l(),i("div",null,[e(t,{data:[{name:"allowNonContiguousRanges",description:`<p>When combined with <code>isDateUnavailable</code>, determines whether non-contiguous ranges, i.e. ranges containing unavailable dates, may be selected.</p>
`,type:"boolean",required:!1,default:"false"},{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'div'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"calendarLabel",description:`<p>The accessible label for the calendar</p>
`,type:"string",required:!1},{name:"defaultPlaceholder",description:`<p>The default placeholder date</p>
`,type:"DateValue",required:!1},{name:"defaultValue",description:`<p>The default value for the calendar</p>
`,type:"DateRange",required:!1,default:"{ start: undefined, end: undefined }"},{name:"dir",description:`<p>The reading direction of the calendar when applicable. <br> If omitted, inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right) reading mode.</p>
`,type:"'ltr' | 'rtl'",required:!1},{name:"disabled",description:`<p>Whether or not the calendar is disabled</p>
`,type:"boolean",required:!1,default:"false"},{name:"fixedWeeks",description:`<p>Whether or not to always display 6 weeks in the calendar</p>
`,type:"boolean",required:!1,default:"false"},{name:"initialFocus",description:`<p>If true, the calendar will focus the selected day, today, or the first day of the month depending on what is visible when the calendar is mounted</p>
`,type:"boolean",required:!1,default:"false"},{name:"isDateDisabled",description:`<p>A function that returns whether or not a date is disabled</p>
`,type:"Matcher",required:!1},{name:"isDateUnavailable",description:`<p>A function that returns whether or not a date is unavailable</p>
`,type:"Matcher",required:!1},{name:"locale",description:`<p>The locale to use for formatting dates</p>
`,type:"string",required:!1},{name:"maxValue",description:`<p>The maximum date that can be selected</p>
`,type:"DateValue",required:!1},{name:"minValue",description:`<p>The minimum date that can be selected</p>
`,type:"DateValue",required:!1},{name:"modelValue",description:`<p>The controlled checked state of the calendar. Can be bound as <code>v-model</code>.</p>
`,type:"DateRange | null",required:!1},{name:"nextPage",description:`<p>A function that returns the next page of the calendar. It receives the current placeholder as an argument inside the component.</p>
`,type:"((placeholder: DateValue) => DateValue)",required:!1},{name:"numberOfMonths",description:`<p>The number of months to display at once</p>
`,type:"number",required:!1,default:"1"},{name:"pagedNavigation",description:`<p>This property causes the previous and next buttons to navigate by the number of months displayed at once, rather than one month</p>
`,type:"boolean",required:!1,default:"false"},{name:"placeholder",description:`<p>The placeholder date, which is used to determine what month to display when no date is selected. This updates as the user navigates the calendar and can be used to programmatically control the calendar view</p>
`,type:"DateValue",required:!1},{name:"preventDeselect",description:`<p>Whether or not to prevent the user from deselecting a date without selecting another date first</p>
`,type:"boolean",required:!1,default:"false"},{name:"prevPage",description:`<p>A function that returns the previous page of the calendar. It receives the current placeholder as an argument inside the component.</p>
`,type:"((placeholder: DateValue) => DateValue)",required:!1},{name:"readonly",description:`<p>Whether or not the calendar is readonly</p>
`,type:"boolean",required:!1,default:"false"},{name:"weekdayFormat",description:`<p>The format to use for the weekday strings provided via the weekdays slot prop</p>
`,type:"'long' | 'short' | 'narrow'",required:!1,default:"'narrow'"},{name:"weekStartsOn",description:`<p>The day of the week to start the calendar on</p>
`,type:"0 | 1 | 2 | 3 | 4 | 5 | 6",required:!1,default:"0"}]}),e(n,{data:[{name:"update:modelValue",description:`<p>Event handler called whenever the model value changes</p>
`,type:"[date: DateRange]"},{name:"update:placeholder",description:`<p>Event handler called whenever the placeholder value changes</p>
`,type:"[date: DateValue]"},{name:"update:startValue",description:`<p>Event handler called whenever the start value changes</p>
`,type:"[date: DateValue]"}]}),e(r,{data:[{name:"date",description:`<p>The current date of the placeholder</p>
`,type:"DateValue"},{name:"grid",description:`<p>The grid of dates</p>
`,type:"Grid<DateValue>[]"},{name:"weekDays",description:`<p>The days of the week</p>
`,type:"string[]"},{name:"weekStartsOn",description:`<p>The start of the week</p>
`,type:"0 | 1 | 2 | 3 | 4 | 5 | 6"},{name:"locale",description:`<p>The calendar locale</p>
`,type:"string"},{name:"fixedWeeks",description:`<p>Whether or not to always display 6 weeks in the calendar</p>
`,type:"boolean"},{name:"modelValue",description:`<p>The current date range</p>
`,type:"DateRange"}]}),e(o,{data:[{name:"isDateDisabled",description:`<p>A function that returns whether or not a date is disabled</p>
`,type:"Matcher"},{name:"isDateUnavailable",description:`<p>A function that returns whether or not a date is unavailable</p>
`,type:"Matcher"}]})])}const v=d(s,[["render",p]]);export{g as __pageData,v as default};
