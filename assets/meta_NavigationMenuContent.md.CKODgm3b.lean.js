import{_ as a,c as i,e,au as n,o as s}from"./chunks/framework.6UEeBrHH.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/NavigationMenuContent.md","filePath":"meta/NavigationMenuContent.md","lastUpdated":1741142901000}'),d={name:"meta/NavigationMenuContent.md"};function r(c,p,l,m,u,h){const t=n("PropsTable"),o=n("EmitsTable");return s(),i("div",null,[e(t,{data:[{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'div'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"disableOutsidePointerEvents",description:`<p>When <code>true</code>, hover/focus/click interactions will be disabled on elements outside
the <code>DismissableLayer</code>. Users will need to click twice on outside elements to
interact with them: once to close the <code>DismissableLayer</code>, and again to trigger the element.</p>
`,type:"boolean",required:!1},{name:"forceMount",description:`<p>Used to force mounting when more control is needed. Useful when
controlling animation with Vue animation libraries.</p>
`,type:"boolean",required:!1}]}),e(o,{data:[{name:"escapeKeyDown",description:`<p>Event handler called when the escape key is down.
Can be prevented.</p>
`,type:"[event: KeyboardEvent]"},{name:"focusOutside",description:`<p>Event handler called when the focus moves outside of the <code>DismissableLayer</code>.
Can be prevented.</p>
`,type:"[event: FocusOutsideEvent]"},{name:"interactOutside",description:`<p>Event handler called when an interaction happens outside the <code>DismissableLayer</code>.
Specifically, when a <code>pointerdown</code> event happens outside or focus moves outside of it.
Can be prevented.</p>
`,type:"[event: PointerDownOutsideEvent | FocusOutsideEvent]"},{name:"pointerDownOutside",description:`<p>Event handler called when a <code>pointerdown</code> event happens outside of the <code>DismissableLayer</code>.
Can be prevented.</p>
`,type:"[event: PointerDownOutsideEvent]"}]})])}const b=a(d,[["render",r]]);export{f as __pageData,b as default};
