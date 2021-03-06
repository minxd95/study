# File System

## fs.readDir

파일 목록 가져오기

```javascript
const fs = require("fs");
fs.readDir(_dir, (err, files) => {
  // _dir 디렉토리의 파일 목록을 files라는 이름의 배열로 가져옴.
  if (err) throw err;
});
```

---

# NPM (Node Package Manager)

### NPM에서 패키치 설치하기

```
npm install [패키지명] -g
```

-g : 모든 경로에서 해당 패키지를 실행할 수 있게 함

---

# PM2 (Process Manager 2)

> 'Q' Key : 현재 기능에서 나가기

```
pm2 start main.js
```

main.js를 pm2로 실행

끝에 "--watch" : 소스코드 변경사항 실시간 반영

```
pm2 monit
```

관련 프로세스 및 로그 출력

```
pm2 list
```

현재 pm2로 실행중인 프로세스의 목록

```
pm2 stop main
```

main 이라는 프로세스 종료

```
pm2 log
```

log 보기
