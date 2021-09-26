import{_ as s}from"./IconSfc.addeaf96.js";import{o as t,c as a,a5 as d}from"./vendor.bac705d4.js";const e={components:{}},l={class:"varlet-site-doc"},c=[d('<h1>BackTop 回到顶部</h1><div class="card"><h3>介绍</h3><p>返回页面顶部的操作按钮。</p></div><div class="card"><h3>引入</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { BackTop } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(BackTop)\n</code></pre></div><div class="card"><h3>基本使用</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;list in lists&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;list&quot;</span>&gt;</span>Scroll to bottom {{ list }}<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-back-top</span> <span class="hljs-attr">:duration</span>=<span class="hljs-string">&quot;300&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">const</span> lists = [...Array(<span class="hljs-number">100</span>).keys()]\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">return</span> {\n      lists\n    }\n  }\n}\n</code></pre></div><h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>target</code></td><td>触发滚动的对象</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>visibility-height</code></td><td>滚动高度达到此参数值才出现</td><td><em>string | number</em></td><td><code>200</code></td></tr><tr><td><code>duration</code></td><td>回到顶部所需时间（ms）</td><td><em>number</em></td><td><code>300</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>click</code></td><td>点击按钮触发的事件</td><td><code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>自定义按钮内容</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的css变量,可以使用<a href="#/zh-CN/style-provider">StyleProvider组件</a>进行样式定制</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--back-top-right</code></td><td><code>40px</code></td></tr><tr><td><code>--back-top-bottom</code></td><td><code>40px</code></td></tr><tr><td><code>--back-top-button-size</code></td><td><code>40px</code></td></tr></tbody></table></div>',9)];var n=s(e,[["render",function(s,d,e,n,h,r){return t(),a("div",l,c)}]]);export{n as default};
