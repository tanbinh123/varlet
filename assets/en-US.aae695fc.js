import{_ as t}from"./IconSfc.8e5067c1.js";import{o as s,c as e,a6 as a}from"./vendor.cfbfc887.js";const d={components:{}},n={class:"varlet-site-doc"},c=a(`<h1>DatePicker</h1><div class="card"><h3>Intro</h3><p>Used to select a date or date range.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { DatePicker } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(DatePicker)
</code></pre></div><div class="card"><h3>Basic Usage</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-date-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;date&quot;</span> /&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> date = ref(<span class="hljs-string">&#39;2021-04-08&#39;</span>)
    
    <span class="hljs-keyword">return</span> {
      date
    }
  }
}
</code></pre></div><div class="card"><h3>Month Picker</h3><p>Use <code>type</code> prop to change the type of the picker. The default value of <code>type</code> is <code>date</code>.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-date-picker</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;month&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">shadow</span> /&gt;</span>
</code></pre></div><div class="card"><h3>Multiple</h3><p>Use <code>multiple</code> prop to select multiple dates, at this time, <code>date</code> is an array.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-date-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">multiple</span> /&gt;</span>
</code></pre></div><div class="card"><h3>Range</h3><p>Use <code>range</code> prop to select date range, at this time, <code>date</code> is <code>[startDate, endDate]</code>.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-date-picker</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">range</span>&gt;</span>
</code></pre></div><div class="card"><h3>Date Limit</h3><p>Use <code>min</code> and <code>max</code> prop to allow the maximum and minimum date, and use <code>allowed-dates</code> prop to limit the dates that can be selected.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-date-picker</span> 
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;date&quot;</span> 
  <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;2020-10-15&quot;</span>
  <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;2021-01-15&quot;</span> 
  <span class="hljs-attr">:allowed-dates</span>=<span class="hljs-string">&quot;allowedDates&quot;</span>
/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> date = ref(<span class="hljs-string">&#39;2020-11-11&#39;</span>)

    <span class="hljs-keyword">const</span> allowedDates = <span class="hljs-function">(<span class="hljs-params">val</span>) =&gt;</span> {
      <span class="hljs-keyword">return</span> <span class="hljs-built_in">parseInt</span>(val.split(<span class="hljs-string">&#39;-&#39;</span>)[<span class="hljs-number">2</span>], <span class="hljs-number">10</span>) % <span class="hljs-number">2</span> === <span class="hljs-number">1</span>
    }
    
    <span class="hljs-keyword">return</span> {
      date,
      allowedDates,
    }
  }
}
</code></pre></div><div class="card"><h3>Custom</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-date-picker</span>
  <span class="hljs-attr">shadow</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;month&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;date&quot;</span>
  <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;2016-07&quot;</span>
  <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;2022-01&quot;</span>
  <span class="hljs-attr">header-color</span>=<span class="hljs-string">&quot;purple&quot;</span>
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#7bb872&quot;</span>
  <span class="hljs-attr">first-day-of-week</span>=<span class="hljs-string">&quot;1&quot;</span>
  <span class="hljs-attr">:allowed-dates</span>=<span class="hljs-string">&quot;allowedDates&quot;</span>
  @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">year</span>=<span class="hljs-string">&quot;{ year }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{{ year }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">month</span>=<span class="hljs-string">&quot;{ year, month }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{{ year }}-{{ month }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-date-picker</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> date = ref(<span class="hljs-string">&#39;2021-02&#39;</span>)

    <span class="hljs-keyword">const</span> allowedDates = <span class="hljs-function">(<span class="hljs-params">val</span>) =&gt;</span> {
      <span class="hljs-keyword">return</span> <span class="hljs-built_in">parseInt</span>(val.split(<span class="hljs-string">&#39;-&#39;</span>)[<span class="hljs-number">1</span>], <span class="hljs-number">10</span>) % <span class="hljs-number">2</span> === <span class="hljs-number">1</span>
    }

    <span class="hljs-keyword">const</span> change = <span class="hljs-function">(<span class="hljs-params">date</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(date)
    }
    
    <span class="hljs-keyword">return</span> {
      date,
      change,
      allowedDates
    }
  }
}
</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>Selected date\uFF08ISO 8601 format, <code>YYYY-MM-DD</code> or <code>YYYY-MM</code>\uFF09</td><td><em>string[] | string</em></td><td><code>-</code></td></tr><tr><td><code>type</code></td><td>Picker type, optional values<code>date, month</code></td><td><em>string</em></td><td><code>date</code></td></tr><tr><td><code>allowed-dates</code></td><td>Restricts which dates can be selected</td><td><em>function</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>Picker color</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>header-color</code></td><td>Color of picker header. If not specified it will use the color defined by color prop or the default picker color.</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>shadow</code></td><td>Whether to add a shadow</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>first-day-of-week</code></td><td>Sets the first day of the week, starting with 0 for Sunday.</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>min</code></td><td>Minimum allowed date/month (ISO 8601 format)</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>max</code></td><td>Maximum allowed date/month (ISO 8601 format)</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>show-current</code></td><td>Whether to display the current date</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>readonly</code></td><td>readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>multiple</code></td><td>Allow the selection of multiple dates</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>range</code></td><td>Allow the selection of date range</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Emitted after date changed</td><td><code>value: string | string[]</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><p><code>weekIndex</code> means the nth day of the week, starting with <code>0</code> for Sunday.</p><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>year</code></td><td>Custom the year in the title</td><td><code>year: YYYY</code></td></tr><tr><td><code>month</code></td><td>Custom the month in the title</td><td><code>year: YYYY</code> <br> <code>month: MM</code></td></tr><tr><td><code>date</code></td><td>Custom the date in the title</td><td><code>year: YYYY</code> <br> <code>month: MM</code> <code>date: DD</code> <br> <code>week: weekIndex</code></td></tr><tr><td><code>range</code></td><td>Custom the range in the title</td><td><code>choose: [startData, endDate]</code></td></tr><tr><td><code>multiple</code></td><td>Custom the multiple in the title</td><td><code>choose: [&#39;YYYY-MM-DD&#39; | &#39;YYYY-MM&#39;]</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--date-picker-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--date-picker-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--date-picker-min-width</code></td><td><code>290px</code></td></tr><tr><td><code>--date-picker-height</code></td><td><code>385px</code></td></tr><tr><td><code>--date-picker-title-padding</code></td><td><code>16px</code></td></tr><tr><td><code>--date-picker-title-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--date-picker-title-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--date-picker-title-year-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--date-picker-title-year-font-weight</code></td><td><code>500</code></td></tr><tr><td><code>--date-picker-title-year-margin-bottom</code></td><td><code>8px</code></td></tr><tr><td><code>--date-picker-title-date-height</code></td><td><code>48px</code></td></tr><tr><td><code>--date-picker-title-date-font-size</code></td><td><code>34px</code></td></tr><tr><td><code>--date-picker-title-date-font-weight</code></td><td><code>500</code></td></tr><tr><td><code>--date-picker-title-date-range-font-size</code></td><td><code>20px</code></td></tr><tr><td><code>--picker-header-padding</code></td><td><code>4px 16px</code></td></tr><tr><td><code>--picker-header-padding</code></td><td><code>4px 16px</code></td></tr><tr><td><code>--month-picker-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--month-picker-item-width</code></td><td><code>33%</code></td></tr><tr><td><code>--month-picker-item-height</code></td><td><code>56px</code></td></tr><tr><td><code>--month-picker-item-button-max-width</code></td><td><code>140px</code></td></tr><tr><td><code>--year-picker-font-weight</code></td><td><code>400</code></td></tr><tr><td><code>--year-picker-item-padding</code></td><td><code>8px 0</code></td></tr><tr><td><code>--year-picker-item-active-font-size</code></td><td><code>26px</code></td></tr><tr><td><code>--year-picker-item-active-font-weight</code></td><td><code>500</code></td></tr><tr><td><code>--year-picker-item-active-font-padding</code></td><td><code>10px 0</code></td></tr><tr><td><code>--year-picker-item-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--day-picker-content-item-width</code></td><td><code>14.28%</code></td></tr><tr><td><code>--day-picker-content-item-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--day-picker-content-item-padding</code></td><td><code>2px 0</code></td></tr><tr><td><code>--day-picker-content-item-button-width</code></td><td><code>32px</code></td></tr><tr><td><code>--day-picker-content-item-button-height</code></td><td><code>32px</code></td></tr><tr><td><code>--day-picker-content-item-button-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--day-picker-head-item-color</code></td><td><code>rgba(0, 0, 0, 0.38)</code></td></tr><tr><td><code>--day-picker-head-item-padding</code></td><td><code>8px 0</code></td></tr><tr><td><code>--day-picker-head-item-font-weight</code></td><td><code>600</code></td></tr></tbody></table></div>`,14),o=[c];function l(r,p,h,i,m,j){return s(),e("div",n,o)}var y=t(d,[["render",l]]);export{y as default};