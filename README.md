# 트윗 사이트 만들기

이 프로젝트는 React 프레임워크와 firebase를 이용하여 게시물을 업로드하는 트윗 사이트 프로젝트 입니다. async/await를 통하여 데이터를 비동기적으로 받아옵니다.
firebase를 활용하여 서버리스로 로그인, 로그아웃, 회원가입 기능을 구현하고, 리얼타임 CRUD를 구현하여 업로드, 수정, 삭제를 실시간으로 반영되게 했습니다.
env파일에 노출이 되면 안되는 정보를 작성하여 보호를 했습니다. GitHub Pages를 통해 웹 페이지를 배포를 하여 GitHub이 자동으로 해당 페이지를 호스팅해주게 했습니다.

## 완성작 보기
미리보기 : [https://kimjunho98.github.io/twit/]

## 사용스택
- node.js를 설치하고 사용합니다. 
- react를 사용하여 사이트를 완성합니다. 
- firebase를 이용하여 데이터를 가져오며 auth기능을 사용하여 사용자 관리를 합니다.
- gh-pages를 통해 사이트를 배포합니다.
- web-vitals를 통해 웹 페이지의 성능 및 사용자 경험을 평가를 측정하여 성능 이슈를 모니터링합니다.
- github를 사용하여 파일을 관리합니다.

## 프로젝트 실행
- react를 설치합니다. `npx create-react-app 프로젝트이름`
- react-router-dom을 설치합니다. `npm install react-router-dom`
- uuid를 설치합니다. `npm install uuid`
- firebase를 설치합니다. `npm install firebase`
- gh-pages를 설치합니다. `npm install gh-pages`
- dayjs를 설치합니다. `npm install dayjs`
- web-vitals를 설치합니다. `npm install web-vitals`
- fontawesome을 설치합니다. `@fortawesome/react-fontawesome`

