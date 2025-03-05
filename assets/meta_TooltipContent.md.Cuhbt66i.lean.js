import{_ as i,c as a,e,au as n,o as r}from"./chunks/framework.6UEeBrHH.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/TooltipContent.md","filePath":"meta/TooltipContent.md","lastUpdated":1741142384000}'),s={name:"meta/TooltipContent.md"};function d(p,l,c,h,u,m){const t=n("PropsTable"),o=n("EmitsTable");return r(),a("div",null,[e(t,{data:[{name:"align",description:`<p>The preferred alignment against the trigger.
May change when collisions occur.</p>
`,type:"'start' | 'center' | 'end'",required:!1},{name:"alignOffset",description:`<p>An offset in pixels from the <code>start</code> or <code>end</code> alignment options.</p>
`,type:"number",required:!1},{name:"ariaLabel",description:`<p>By default, screenreaders will announce the content inside
the component. If this is not descriptive enough, or you have
content that cannot be announced, use aria-label as a more
descriptive label.</p>
`,type:"string",required:!1},{name:"arrowPadding",description:`<p>The padding between the arrow and the edges of the content.
If your content has border-radius, this will prevent it from
overflowing the corners.</p>
`,type:"number",required:!1},{name:"as",description:`<p>The element or component this component should render as. Can be overwritten by <code>asChild</code>.</p>
`,type:"AsTag | Component",required:!1,default:"'div'"},{name:"asChild",description:`<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>
<p>Read our <a href='https://www.reka-ui.com/docs/guides/composition'>Composition</a> guide for more details.</p>
`,type:"boolean",required:!1},{name:"avoidCollisions",description:`<p>When <code>true</code>, overrides the side and align preferences
to prevent collisions with boundary edges.</p>
`,type:"boolean",required:!1},{name:"collisionBoundary",description:`<p>The element used as the collision boundary. By default
this is the viewport, though you can provide additional
element(s) to be included in this check.</p>
`,type:"Element | (Element | null)[] | null",required:!1},{name:"collisionPadding",description:`<p>The distance in pixels from the boundary edges where collision
detection should occur. Accepts a number (same for all sides),
or a partial padding object, for example: { top: 20, left: 20 }.</p>
`,type:"number | Partial<Record<'top' | 'right' | 'bottom' | 'left', number>>",required:!1},{name:"forceMount",description:`<p>Used to force mounting when more control is needed. Useful when
controlling animation with Vue animation libraries.</p>
`,type:"boolean",required:!1},{name:"hideWhenDetached",description:`<p>Whether to hide the content when the trigger becomes fully occluded.</p>
`,type:"boolean",required:!1},{name:"positionStrategy",description:`<p>The type of CSS position property to use.</p>
`,type:"'fixed' | 'absolute'",required:!1},{name:"side",description:`<p>The preferred side of the trigger to render against when open.
Will be reversed when collisions occur and avoidCollisions
is enabled.</p>
`,type:"'top' | 'right' | 'bottom' | 'left'",required:!1,default:"'top'"},{name:"sideOffset",description:`<p>The distance in pixels from the trigger.</p>
`,type:"number",required:!1},{name:"sticky",description:`<p>The sticky behavior on the align axis. <code>partial</code> will keep the
content in the boundary as long as the trigger is at least partially
in the boundary whilst "always" will keep the content in the boundary
regardless.</p>
`,type:"'partial' | 'always'",required:!1},{name:"updatePositionStrategy",description:`<p>Strategy to update the position of the floating element on every animation frame.</p>
`,type:"'always' | 'optimized'",required:!1}]}),e(o,{data:[{name:"escapeKeyDown",description:`<p>Event handler called when focus moves to the destructive action after opening. It can be prevented by calling <code>event.preventDefault</code></p>
`,type:"[event: KeyboardEvent]"},{name:"pointerDownOutside",description:`<p>Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling <code>event.preventDefault</code>.</p>
`,type:"[event: Event]"}]})])}const y=i(s,[["render",d]]);export{g as __pageData,y as default};
