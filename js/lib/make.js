const make = {
  main: `소환사의 협곡에서 EU 스타일 포지션 상 정글이라는 중립 지역을 중점으로 운용하는
포지션을 지칭한다.보통 '정글'이라고도 불리며, 인게임 공식 명칭으로는 '정글
사냥꾼'이라고 불린다. 우정머의 주인공이다 ???: 우정머 원딜과 함께 EU 스타일의
가장 큰 특징이자, 다른 MOBA와 리그 오브 레전드를 구분짓는 가장 특이한
포지션이기도 하다.초반부터 모든 라인에 개입할 수 있고, 라인전을 수행하지 않는
굉장히 특이한 포지션으로 대개의 경우 성장 능력보다는 성장을 보조하는 능력을
중점적으로 보는 경우가 많다.라인전 개입이 초반부터 가능하다는 점 때문에 게임
내에서 높은 영향력을 가졌으며, 동시에 그 막중한 책임 탓에 정치질 또한 자주
당하는 포지션으로 널리 알려져 있다.특히, 정글러의 초반 개입이 중요한 탑
라인과의 관계는 애증으로 유명.과거 이동기와 큰 갱킹 임팩트를 지닌 챔피언이
없고, 메타도 시야 위주로 와드만 박고 돌아다니던 시절엔 서폿과 마찬가지로
와딩노예라는 오명도 있었다.하지만 2015년 중반기부터 라이엇에서 정글에 힘을
실어주기 시작한 뒤로는 정글러의 실력이 전체 게임 초중반 흐름을 좌우하는 포지션이
되었다.한마디로 자기 팀이건 상대 팀이건 '혼자서' 게임을 터트리기 쉬운
포지션으로, 라이너가 못하면 그 라인 하나만 터질 뿐이지만 정글러가 못하면 게임이
터진다.`,
  list: function(filelist) {
    let result = "<ol>";
    filelist.forEach(item => {
      result += `<a href="/?id=${item}"><li>${item}</li></a>`;
    });
    result += "</ol>";
    return result;
  },
  template: function(title, list, content) {
    return `
<!DOCTYPE html>
<html>
  <head>
    <title>정글러 - ${title}</title>
    <meta charset="utf-8">
    <script src="https://minxd95.github.io/http-js-node/js/colors.js"></script>
    <link rel="stylesheet" href="https://minxd95.github.io/http-js-node/js/style.css">
  </head>
  <body>
    <div class="wrap">
      <h1><a href="/">정글러</a></h1>
      <div id="grid">
        ${list}
        <div id="article">
          ${content}
        </div>
      </div>
    </div>
  </body>
</html>
`;
  }
};
module.exports = make;
