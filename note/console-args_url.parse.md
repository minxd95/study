# Console Argument

```javascript
const args = process.argv;
console.log(args);
/*
"node exam.js minseok" 으로 실행
실행결과
[
  'C:\\Program Files\\nodejs\\node.exe',
  'D:\\dev\\study\\study\\nodejs\\exam.js',
  'minseok'
]
*/
```

---

# url.parse(request.url, true)

```javascript
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?id=JavaScript',
  query: [Object: null prototype] { id: 'JavaScript' },
  pathname: '/', // argument를 제외한 경로
  path: '/?id=JavaScript',
  href: '/?id=JavaScript'
}
```
