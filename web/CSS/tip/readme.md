## 줄바꿈 방지
```css
white-space: no-wrap;
```

## auto fill 방지
```css
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
transition: background-color 5000s;
-webkit-text-fill-color: #fff !important;
}
```

## table 태그 column width 비율 다르게 설정하기
colgroup 및 col 태그 사용
```css
table {
    width: 100%;
    table-layout: fixed;
}
.column1 {
    width: 30%;
}
.column2 {
    width: 70%;
}
```

```html
<table>
    <colgroup>
        <col class="column1" />
        <col class="column2" />
    </colgroup>
    <tr>
        <th>header1</th>
        <th>header2</th>
    </tr>
    <tr>
        <td>data1</td>
        <td>data2</td>
    </tr>
</table>
```
출처: https://stackoverflow.com/questions/41654751/html-table-column-width-percentage/41654853
