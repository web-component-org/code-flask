# @web-component/code-flask

A web-component for easily creating code editors with [CodeFlask](https://kazzkiq.github.io/CodeFlask/).

# Props

| name        | type      | default | required |
| ----------- | --------- | ------- | -------- |
| language    | `string`  | `✖`     | yes      |
| lineNumbers | `boolean` | `false` | no       |
| rtl         | `boolean` | `false` | no       |

# Usage

Add `code-flask` web-component to your `index.html`.

```html
<script src='https://unpkg.com/@web-component/code-flask@0.0.1/dist/code-flask.js'></script>
```

Use it in your app.

```html
<code-flask language="js" line-numbers="true" rtl="true">
  const foo = { name: 'fooby' }
</code-flask>
```
