import{_ as t}from"./IconSfc.addeaf96.js";import{o as s,c as e,a5 as a}from"./vendor.bac705d4.js";const d={components:{}},l={class:"varlet-site-doc"},n=[a('<h1>Input</h1><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Input } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Input)\n</code></pre></div><div class="card"><h3>Basic Usage</h3><p>The component automatically analyzes whether the value passed in is a string or a number, The same type is returned.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-string">&#39;&#39;</span>)\n\n    <span class="hljs-keyword">return</span> { value }\n  }\n}\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Please enter text&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>Plain Mode</h3><p>If you only need the basic functionality of the component, you can remove some styles through attributes.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-input</span> \n  <span class="hljs-attr">:hint</span>=<span class="hljs-string">&quot;false&quot;</span> \n  <span class="hljs-attr">:line</span>=<span class="hljs-string">&quot;false&quot;</span> \n  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Please enter text&quot;</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n/&gt;</span>\n</code></pre></div><div class="card"><h3>Textarea</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Please enter text&quot;</span> <span class="hljs-attr">textarea</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>Maxlength</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Please enter text&quot;</span> <span class="hljs-attr">:maxlength</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>Disabled</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Please enter text&quot;</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>Readonly</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Please enter text&quot;</span> <span class="hljs-attr">readonly</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>Clearable</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Please enter text&quot;</span> <span class="hljs-attr">clearable</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>Display Icon</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Icon)\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Please enter text&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">prepend-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;plus&quot;</span>/&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">append-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;minus&quot;</span>/&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-input</span>&gt;</span>\n</code></pre></div><div class="card"><h3>Validate</h3><p>The values are validated by passing in an array of validators，If the validator returns <code>true</code>, the validation passes. Other values are converted to text as a user prompt.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-input</span>\n  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Please enter text&quot;</span>\n  <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; v.length &gt; 6 || &#39;Text length must be greater than 6&#39;]&quot;</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n/&gt;</span>\n</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of the binding</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>placeholder</code></td><td>placeholder</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>type</code></td><td>Input type, The optional value is <code>text</code> <code>password</code></td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>maxlength</code></td><td>Maxlength</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>textarea</code></td><td>Is it a textarea</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>rows</code></td><td>Number of lines to display in the textarea</td><td><em>string | number</em></td><td><code>8</code></td></tr><tr><td><code>line</code></td><td>Whether to display a dividing line</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hint</code></td><td>Whether to use placeholder as hint</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>text-color</code></td><td>Text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>focus-color</code></td><td>The primary color in focus</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>blur-color</code></td><td>The primary color in blur</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>clearable</code></td><td>Whether the clearable</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>resize</code></td><td>Whether textarea can be dragged to resize</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>validate-trigger</code></td><td>Timing to trigger validation, The optional value is <code>onFocus</code> <code>onBlur</code> <code>onChange</code> <code>onClick</code> <code>onClear</code> <code>onInput</code></td><td><em>ValidateTriggers[]</em></td><td><code>[&#39;onInput&#39;, &#39;onClear&#39;]</code></td></tr><tr><td><code>rules</code></td><td>The validation rules, Returns <code>true</code> to indicate that the validation passed,The remaining values are converted to text as user prompts</td><td><em>Array&lt;(v: string | number) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>focus</code></td><td>Focus</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>blur</code></td><td>Blur</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clearing validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding(The string type is set to <code>&#39;&#39;</code>,The number type is set to <code>0</code>) and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>focus</code></td><td>Trigger while focusing</td><td><code>event: Event</code></td></tr><tr><td><code>blur</code></td><td>Triggered when out of focus</td><td><code>event: Event</code></td></tr><tr><td><code>click</code></td><td>Triggered on Click</td><td><code>event: Event</code></td></tr><tr><td><code>clear</code></td><td>Triggered on Clearance</td><td>`value: string</td></tr><tr><td><code>input</code></td><td>Trigger on input</td><td>`value: string</td></tr><tr><td><code>change</code></td><td>Trigger on change</td><td>`value: string</td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>prepend-icon</code></td><td>Prepend Icon</td><td><code>-</code></td></tr><tr><td><code>append-icon</code></td><td>Append Icon</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--input-input-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--input-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--input-blur-color</code></td><td><code>#888</code></td></tr><tr><td><code>--input-focus-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--input-placeholder-size</code></td><td><code>16px</code></td></tr><tr><td><code>--input-textarea-height</code></td><td><code>auto</code></td></tr><tr><td><code>--input-textarea-padding-top</code></td><td><code>8px</code></td></tr><tr><td><code>--input-icon-padding</code></td><td><code>16px 0 0</code></td></tr><tr><td><code>--input-icon-size</code></td><td><code>20px</code></td></tr><tr><td><code>--input-input-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--input-line-size</code></td><td><code>1px</code></td></tr><tr><td><code>--input-line-spread-size</code></td><td><code>2px</code></td></tr><tr><td><code>--input-disabled-color</code></td><td><code>#aaa</code></td></tr></tbody></table></div>',17)];var o=t(d,[["render",function(t,a,d,o,c,r){return s(),e("div",l,n)}]]);export{o as default};
