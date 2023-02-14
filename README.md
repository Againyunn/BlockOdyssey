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

2. 스타일 제어 구조

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

### [핵심 기능 구현 설명]

1. 페이지네이션, 검색, API 데이터 기능 구조화

<mxfile host="app.diagrams.net" modified="2023-02-14T02:04:16.789Z" agent="5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36" etag="sOFkNAGIq9gc71prS4uV" version="20.6.0" type="device"><diagram id="C5RBs43oDa-KdzZeNtuy" name="Page-1">7V1tl6K4Ev41nPupPRBehI+i9kzv9vb0tD07cz8iRuUOgoPYrfvrb0ISJCSC2oK90+7ZM2PKGCBV9dRTlZBR9P5i8ynxlvO/4gkMFaBONoo+UABwHAv9iQVbIrBslQhmSTAhooJgFPwDiVBj0nUwgSsqI6I0jsM0WPJCP44i6KeczEuS+JXvNo3DCSdYejMoCEa+F4rS78EknROpDbo7+WcYzObsyprlkG8WHutMn2Q19ybxa0GkDxW9n8RxSj4tNn0Y4rlj8/L9bvs9vP9pffrj6+qX98398/nh7xsy2O0xP8kfIYFRet6hDTL0ixeu6XzRZ023bAKTeB1NIB5EVXR3ni5C9FFDH/8H03RLFe6t0xiJ4iSdx7M48sL7OF7SftM4Smk3DbdhNOlhxaJ2FEeQSG6DMKSXQC3a3UatVZrEP3PV4d/nesCdQ28MQ9fzf86y++zHYZwUBp4gW6CPsru34U6KLpYm2x94sI7Jmv/NbwQ1BhuutaWtA1VCVbeK14kPK/pRJ0u9ZAbpeGD615+vw9FT8HQz8v/+49fy69OMqljFz1Uwb6rwTzBeQHSTqAN1Vma6CQy9NHjhXcKjnjXLf5aP9BgH6LF2XeLpdIXuizMv1ocCheFQv6GXNsuXIc9Gf7UbCH0o3PlOlFmv3JKlMyOx3Hrt87YttV6JlRd8oGjbZmatXpKWrDuT8fZdaf9SFV/A1vbZ1sHGxKn4WH3q2iX0WYADFXB40DGAU4MJbzSGcRj7PzlryO/oESYBmlaYvDMT0dWWTKTqLgvB6zGJJ2s/vQ9WqRjH5vFivEb34L7OgxSOll42Ba+I9fA2wMUXrNNbbxGEWMmfYfgC08D3SsrGluKFwSxCDR9pAOtJFrjQJYNohlrWrvWcWSYKxGhIpHUWwBSgTzxoT/18pMI3lm/D8fToKPQCkxRuKuMG/VY3eDA3mA5fdxRKU2lwmRfoEyOHZ9e1LSEqVoiu6q7Rb61Zms0GkYRBLhn2FddVerYyHCi2qThqJrGVnso6o7sp9BdHoBKkrYizJ+vXGhM/d5xzjxufaKiHnyUK0sALyQC05+6mXMW+VVC8RPfiDBVHK9wLuQ5/7bpbROO5QLGN7CF7itvPBu7jh0QSx1Yc8+Ch+ngc8kNbV5xBNlRX6fWzq1iKXT1xSFjUR4tUch96XoRL8pEjJ5Z74gaDjhBO8bTBTZD+YPePPpNBuiZt7gbBjdP4aC1/pDjA+m8ZLLyNTuajqtywpQEOIZslfDIdp2Oqu/9KI5J4J1BPYVhT54e11BKc7eGwyAa9baHbEndY7Z8AE8ivswNIMuKpBFmqeudkBC0jgotxFOELUB+UIcKbrIHhQVdcI5PYWAjUI3GoGjyOZX//NnihXk/hgvl9pdMX2Kpt2kXQ0TqqqtfATgWzPBuR1MCRgIMev5RI3hgtJrGG3gE675sOwl7nNDzRESypugBLbGT9sAz5WHTRSxNo2Vrz6KIxjrmDl6dguQyhu07TOKqgAlo9Iy9z7VnorVbUYGucrimGXA4Vpi1hyEDCkI2mGDJztWI65M2CCPlMHCHMwj7+u2lBLwfsNrUgzYiZFi5UttCUo5inNASUo97zPIiEyMfVNlhwLBY3tPOWKaqqobVlCkduRO0UstQKt6xwSLXeIfd4y6ETfHD2b1oHZv/dprxKl3DXixYHubUCrc7LTqF2qFHnmIJTNu1vQPS3ilD0Bofbw84s3i675lsJ1NkXIQQ7jZfYz6UFSRQhl/ijvw0DZJiJXu/xY2LC9+NckKcTX9YpGgYyeCY27HQ01c7/VzW9SdTYp50CalgS0DCbAo3TSoarefx6l8IFsg/LW+D5j8arJelabp+ayqKZT3nF8iVemhIW68FUJFSZsR4D3wt79ItFMJlkaCezJB4BmzIEzSyTMusgQ9Ab42QXXkriOVm3npTVVR2k8YR9c3g8aTpcOG2FizdZh1gXW+7nZxfC7NLK0HQ6Bb50ZWhijS3TatC57RI17EqoodEmymuyLSwHwDwMoZ/CR7x76LC1kWJguBzw0zWCdwj7QK3PGlqFfSBmXkxLuJShyFbz8Bc3xBHxMp5mLjeKdA3PdB97n+4ees93Xx4Uc1BQPxn7Y0Z+u8QATcECAJO1YwJiVXIEvcSfC4p5F4k3UC1uAoFjiOjaauINjPdEneqYU+UGnH1Fqt+GbrGFi3e+sQuIxZxV5pN0886VcwmwwAdWoHYvzLmAeRLnmtJFiMPoFsXpgzoHq56fWe6VmskMqAs4A9KNSzMzWWmm/TDTyH7NxlG+++9A+a6g4o9TCkXuVEJs9SCHaw6w92/+OUcqNBr2nvqfr2kQg1tO+YYKBOW3mwXpYiIs3yH9HnIgy+T33xi6pMLU7uIjOInt+OsETwRltQMv9Q4kM0vyi/+s0DVDGM3Sahb0cWmNYZm8qQAJMbb1Nj1NtlB9xpLT05fBt/4z6nV/N8J/Pffc++EVd9meLKfEc9m+vSLysuSpHXvYX5w+hz3cfnvo4wLk6GoCbBG6yzMvSyygtWwBYqqMtygUg8IeLjyHGw/lMzggFApJVJrXlkB9pJ4GG8i2KcvSnnKhw/ahvNAxtk3DbBTQgdbhIV3TRBeWbuhjJYnzK1BMZHqPd1hlMHkJ0JS/Twcrb9ZsDHP1rqAycbnfsTqtEl6xvoCc7hkpZrQMogjuT0CvTofHNSU8ql2nE/PVDDWRv10xs6Q+zcFbSjj9yZaNpPoDDenPEDNO5HyJdw159d4HzENDXlO1O1Ye5r3vK1wn21Ga4DeYrwqsUqCjX1qBYsVidVXgXgWCkgJ1WR1BpkBGTs+vQEkdgbxXaavsrXH2gqVt41cryWfXwE3cU8evgdMOLnlZs9PpsG4WfhUTj2Mq7uCjM1hDDKByAtQBEhLbXAwVawfIifvxYnENoJXum6++FLWnSTMQoHaaorCGbI08O6LB0bL3pZljYjd0snMVVD07GoKcV5G9OW0b2GMB8WThlx/db/ndZpojUXvrTiueSYOafT1ToKBbJOlpBJyvSt5TXrDK4AzY7oGL6lmsClWflCA5CoGcrELjOLKELg7rOHYDxe4zgxngkxRwz0F2tsIAXyI/WwHHcYN9+PCmYgiBQJZJWXbLliLWotZJSFWaETf03N4i0yg5SwPsPhO2h4zGtXdxgthZblVXI+CMwOBNQJaLtW4CYjWr1gQIXLh9LkYQ6LANmgL0cobPw07ZlDILyhOHnvnhbUQg/NKMz27ZTEzZ+wolTeENTsu9E0PP0PXGrLt6lgnraqVFNclpcIx88emx1dBUaSK5TuBkvblZpXEiLsm0sL2s2wG62rUc8qfm2JIk6Uw7iCuMR1QhexlHhEGn1VcwRV6cHdxc1tTve0jjOZVaet3mUrsKNZEE+/FiiSJD1MbmslP8QEIHZH4AGpsykQ2u1uObQ6atjRN6GphxDVx6ykX2lU/3zaRqOarBcGF1DEszdZv+aTdj9PwwTCGGCButxgJdjAVHb4oCezZFTdeRT17cPmw31O9SOD3JMyWHZUlpXFMlUlNcZzzn7ri7h8Hwx3VnHNtX7fDb0k1btklAOwsOoObun8UgZ+vs/m0Rffh/</diagram></mxfile>

2. 절대참조 기능 적용

실제 배포 상황 시, 상대참조보다 가독성이 좋으며 어떠한 환경에서도 빌드 시 파일 참조 관계 유지가 용이한 절대참조를 사용하였습니다.

3. style 중앙 제어 기능 적용

   static
   ├── css
   └── style
   ├── \_variable.scss
   ├── app.scss
   ├── css
   └── scss

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
