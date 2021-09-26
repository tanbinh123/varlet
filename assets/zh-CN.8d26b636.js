import{_ as s}from"./IconSfc.addeaf96.js";import{o as a,c as t,a5 as d}from"./vendor.bac705d4.js";const e={components:{}},l={class:"varlet-site-doc"},n=[d('<h1>分割线</h1><div class="card"><h3>介绍</h3><p>用于分隔列表或布局的各个部分。</p></div><div class="card"><h3>引入</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Divider } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Divider)\n</code></pre></div><div class="card"><h3>基本使用</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-divider</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>虚线</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-divider</span> <span class="hljs-attr">dashed</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>缩进</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-divider</span> <span class="hljs-attr">inset</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-divider</span> <span class="hljs-attr">:inset</span>=<span class="hljs-string">&quot;36&quot;</span> <span class="hljs-attr">margin</span>=<span class="hljs-string">&quot;36px 0&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-divider</span> <span class="hljs-attr">inset</span>=<span class="hljs-string">&quot;-36px&quot;</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>垂直分割线</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>文字<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-divider</span> <span class="hljs-attr">vertical</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>文字<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-divider</span> <span class="hljs-attr">vertical</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>文字<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n</code></pre></div><div class="card"><h3>带有文字描述的分割线</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-divider</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;文字描述&quot;</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>自定义</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-divider</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;heart-outline&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 16px; color: rgb(41, 121, 255);&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-divider</span>&gt;</span>\n</code></pre></div><h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>inset</code></td><td>设置缩进距离，正负号可控制缩进方向。当传递 <code>true</code> 时默认缩进为 <code>72px</code></td><td><em>boolean | number | string</em></td><td><code>false</code></td></tr><tr><td><code>vertical</code></td><td>是否垂直</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>dashed</code></td><td>虚线</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>description</code></td><td>分割线的文字描述</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>margin</code></td><td>设置分割线样式的 <code>margin</code> 属性</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>自定义分割线文字描述内容</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的css变量,可以使用<a href="#/zh-CN/style-provider">StyleProvider组件</a>进行样式定制</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--divider-color</code></td><td><code>#bcc2cb</code></td></tr><tr><td><code>--divider-text-color</code></td><td><code>#888</code></td></tr><tr><td><code>--divider-text-margin</code></td><td><code>8px 0</code></td></tr><tr><td><code>--divider-text-padding</code></td><td><code>0 8px</code></td></tr><tr><td><code>--divider-inset</code></td><td><code>72px</code></td></tr><tr><td><code>--divider-vertical-inset</code></td><td><code>8px</code></td></tr></tbody></table></div>',13)];var c=s(e,[["render",function(s,d,e,c,r,p){return a(),t("div",l,n)}]]);export{c as default};
