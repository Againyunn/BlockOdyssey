# [BlockOdyssey] 정재윤*프론트엔드개발*원티드

frontend code test

---

### [지원자 정보]

프론트엔드 개발, 정재윤

### [실행방법]

react를 실행할 수 있는 환경이 갖추어져있다는 전제로, 하기 3개 코드 실행 시 localhost 환경으로 실행하여 확인할 수 있습니다.

1.  `cd frontendcodetest` //파일로 진입

1.  `npm install` //사용된 패키지 다운로드

1.  `npm start` //로컬에서 실행

### [사용된 기술스택]

html, javascript, css, sass, react.js, redux-toolkit, react-query

### [프로젝트 구조]

1. 컴포넌트 및 페이지 기능 관련 구조

```
   src
   ├── App.js
   ├── assets
   │ └── icon
   │ ├── down-triangle.png
   │ ├── edge-arrow.png
   │ ├── next-arrow.png
   │ └── up-arrow.png
   ├── components
   │ ├── effectButton
   │ │ └── RippleButton.jsx
   │ ├── list
   │ │ ├── List.jsx
   │ │ └── ListFunctions.js
   │ ├── pagination
   │ │ ├── Pagination.jsx
   │ │ ├── PaginationFilter.jsx
   │ │ └── paginationData
   │ │ └── paginationData.js
   │ ├── queryString
   │ │ └── queryString.js
   │ ├── search
   │ │ ├── Search.jsx
   │ │ └── searchData
   │ │ └── searchData.js
   │ └── text
   │ └── textFormatter.js
   ├── config.js
   ├── index.js
   ├── pages
   │ └── ProductList.jsx
   ├── services
   │ └── products.js
   └── store
   ├── pagination.js
   ├── product.js
   └── store.js
```
   

2. 스타일 제어 구조

```
   static
   ├── css
   │ ├── app.css
   │ └── app.css.map
   └── style
   ├── \_variable.scss
   ├── app.scss
   ├── css
   │ ├── common.css
   │ ├── common.css.map
   │ ├── effectButton.css
   │ ├── effectButton.css.map
   │ ├── list.css
   │ ├── list.css.map
   │ ├── pagination.css
   │ ├── pagination.css.map
   │ ├── productList.css
   │ ├── productList.css.map
   │ ├── search.css
   │ └── search.css.map
   └── scss
   ├── common.scss
   ├── effectButton.scss
   ├── list.scss
   ├── pagination.scss
   ├── productList.scss
   └── search.scss
   ```

### [핵심 기능 구현 설명]

1. 페이지네이션, 검색, API 데이터 기능 구조화

![project_structure_diagram](/project_structure.svg)


2. 절대참조 기능 적용

실제 배포 상황 시, 상대참조보다 가독성이 좋으며 어떠한 환경에서도 빌드 시 파일 참조 관계 유지가 용이한 절대참조를 사용하였습니다.

3. style 중앙 제어 기능 적용

```
   static
   ├── css
   └── style
   ├── \_variable.scss
   ├── app.scss
   ├── css
   └── scss
```

app.scss와 \_variable.scss를 통해 프로젝트 전역에 사용할 변수와 스타일 선언 후 각 필요에 맞게 스타일을 호출하여 적용했습니다.

4. 각 기능별 폴더 구조 분리 및 컴포넌트화

서버를 포함한 외부에 데이터를 요청하거나 받아오는 기능들은 services라는 디렉토리 하위의 기능으로 분류하였습니다.
page는 실질적으로 각 페이지에서 구현해야 하는 기능을 제어하고 데이터를 처리하여 하위의 컴포넌트로 전달하는 기능을 수행하여,
각 하위 컴포넌트는 UI적인 측면에 초점을 맞추어 실질적인 화면을 그리고 사용자가 제어하는 값을 반영하는 기능을 수행해하도록 구조화하였습니다.
또한 components 하위에 각 기능별로 컴포넌트를 구성하고 내부에 함수를 정의하여 재사용성 및 확장성을 고려하였습니다.
나아가 UI적인 요소가 중요한 컴포넌트는 전역상태 대신 props를 통한 상태값 제어를 통해 타 기능 및 페이지에서의 사용이 용이하도록 구현했습니다.

### [특이사항]

코딩테스트 개발 명세 페이지에 별도로 서버 배포까지는 언급되어 있지 않아, 어떤 환경에서 테스트 될 지 몰라 build 및 배포과정은 수행하지 않았습니다.

감사합니다.
