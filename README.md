# angular-tailwind-refresh

- So the thing is, after change the styling class a few times, the page stop refresh the changes, even with TAILWIND_MODE=watch (npm start)

- For example, the following code in index.html, change the bg-pink-30 to 40, 50, it would stop working 



```html
<body class="bg-pink-30">
  <app-root></app-root>
</body
```
