Now I have this settings in samsung device turn off, settings->Labs->Enable website theme

```js
const mode = useColorMode();
```

| isSamsungBrowser | phone mode | mode  | usePreferredDark() | useDark() | I actually want this |
| ---------------- | ---------- | ----- | ------------------ | --------- | -------------------- |
| true             | light      | light | false              | false     | false                |
| true             | dark       | light | false              | false     | true                 |
| false            | ...        | ...   | ...                | ...       | false                |


And here is when I enable the samsung browser and make it true : settings->Labs->Enable website theme

| isSamsungBrowser | phone mode | mode  | usePreferredDark() | useDark() | I actually want this |
| ---------------- | ---------- | ----- | ------------------ | --------- | -------------------- |
| true             | light      | light | false              | false     | false                |
| true             | dark       | dark  | true               | true      | false                |
| false            | ...        | ...   | ...                | ...       | false                |
