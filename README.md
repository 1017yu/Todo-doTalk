# 📌 할 일(Todo) 관리 Page

## [투두두톡(TododoTalk)]('https://wutcha.netlify.app/')

<br />

## ⚒️ 프로젝트 소개

### API를 통해 POST, EDIT 등을 활용하여 Todo를 기록합니다.

### 포스트, 삭제, 편집, 할 일 목록, 할 일 완료 등의 기능을 담고 있습니다.

  <br />

---

## ⚙️ Stacks

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

## 🔧 Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)  
![Next](https://img.shields.io/badge/next-000000?style=for-the-badge&logo=Next.js&logoColor=white)

## 💻 Development

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=React&logoColor=white)
![Recoil](https://img.shields.io/badge/recoil-0075EB?style=for-the-badge&logo=recoil&logoColor=white)

## 🖍️ Style

![Styled-Component](https://img.shields.io/badge/styled%20Component-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

<br />

---

## 🔥 주요 기능 피드백

![ezgif com-video-to-gif (5)](https://github.com/1017yu/Programmers_Kled/assets/83483378/cf4eef31-1a83-4117-bbd5-f5b02814ea20)

<img width="600" alt="image" src="https://github.com/1017yu/Programmers_Kled/assets/83483378/7c3f6629-db2f-48f8-a607-5913973dd83a">

<br />

## 1. 할 일 목록(List)을 출력합니다.

<img width="591" alt="image" src="https://github.com/1017yu/Programmers_Kled/assets/83483378/63dab48b-8d73-45ff-b942-669eef431123">

<br />
<img width="587" alt="image" src="https://github.com/1017yu/Programmers_Kled/assets/83483378/c6567bf2-fad0-49b9-a0b0-53e918dba338">

```
TodoList 컴포넌트는 todoListState atom을 구독(참조)합니다.
`useRecoilState`와 `useSetRecoilState` 훅을 사용하여 todoList 데이터를 가져온 후 업데이트합니다.
이 때, TodoItem 컴포넌트를 렌더링하고 map 메소드를 통하여 리스트를 최종적으로 출력합니다.
```

<br />

---

## 2. 할 일 항목(Item)을 새롭게 추가합니다.

<br />

<img width="590" alt="image" src="https://github.com/1017yu/Programmers_Kled/assets/83483378/d1786f2d-304b-4ffa-b80f-357636aa59a4">

![ezgif com-video-to-gif](https://github.com/1017yu/Programmers_Kled/assets/83483378/d03d9120-aa54-44c8-a070-2d068f940627)

<br />

```
`TodoItemCreator.jsx`에서 input 값에 따라 POST 호출로 Todo-item 생성.
title은 inputValue, order는 현재 atom state의 배열 길이로 설정.
`setTodoList`를 통해 atom state를 업데이트합니다.
```

<br />

---

## 3. 할 일 항목(Item)을 수정합니다

![ezgif com-video-to-gif (2)](https://github.com/1017yu/Programmers_Kled/assets/83483378/de4c9ac8-1cd8-4391-8fed-d061ff5bfbce)

<img width="509" alt="image" src="https://github.com/1017yu/Programmers_Kled/assets/83483378/4d3bdf5c-0951-4ba6-b6fd-d634e0029985">
<img width="594" alt="image" src="https://github.com/1017yu/Programmers_Kled/assets/83483378/9b24ace5-166f-4373-92cd-539a76fe15b3">

<br />

```
현재 atom에 저장되어 있는 Todo-item의 id값과, 수정하고자 하는 item의 id값을 비교하여 atom의 state를 update한 뒤, order를 정렬한 후 GET 통신으로 최종 수정된 Todo-item을 출력.
```

<br />

---

## 4. 할 일 항목(Item)을 삭제합니다.

![ezgif com-video-to-gif (3)](https://github.com/1017yu/Programmers_Kled/assets/83483378/39d84b0a-e2ac-4ece-8f8a-61c3ed8bf15a)

<img width="638" alt="image" src="https://github.com/1017yu/Programmers_Kled/assets/83483378/6e96f99a-738e-4b6b-bd94-cce33972b9a8">

<br />

```
DELETE 요청 후, 수정 동작과 다르게 삭제 하고자 하는 Todo-item의 id값을 filter 메소드를 통해 비교-제외하여, atom state 배열을 수정합니다.
```

<br />

---

## 🧊 선택 기능 피드백

<br />

## 1. 할 일을 완료하지 않은 항목과 완료한 항목을 분류하여 출력.

![ezgif com-video-to-gif (4)](https://github.com/1017yu/Programmers_Kled/assets/83483378/3ae71f7a-d323-4c20-a0f2-9294b0d3c6b4)
<img width="621" alt="image" src="https://github.com/1017yu/Programmers_Kled/assets/83483378/7581f5ee-d375-46d0-9cb0-8c5c7cd7ceb4">
<img width="647" alt="image" src="https://github.com/1017yu/Programmers_Kled/assets/83483378/e615fb4d-c29c-4fd2-b97e-3bcc3882b268">

```
input의 checkbox checked 여부(done: true or false)에 따라 미완료-완료 항목을 구분하였음.
그에 따른 `background-color`와 `margin` 값을 달리하여 명확히 구분
```

<br />

---

## 2. 할 일 항목의 최신 수정일을 표시.

<br />

<img width="1440" alt="image" src="https://github.com/1017yu/Programmers_Kled/assets/83483378/7cafd468-8598-4d26-aa15-8df63fffb266">

<img width="919" alt="image" src="https://user-images.githubusercontent.com/83483378/236242060-1821b68c-ea30-4288-931d-5934ae7443a4.png">

```
검색 결과가 있으면(=data.Response가 Truty면) setPosts 함수를 사용하여 현재 페이지의 검색 결과를 posts 배열에 추가.
이전 posts 배열과 서버에서 반환된 data.Search 배열을 합함.
```

<br />

---

## 3. 할 일 목록이 출력되기 전에 로딩 애니메이션 출력

<img width="1282" alt="image" src="https://github.com/1017yu/Programmers_Kled/assets/83483378/d53186ee-c8ba-4283-a87f-f845fcd5c885">

<img width="544" alt="image" src="https://github.com/1017yu/Programmers_Kled/assets/83483378/2515d9d1-3af0-4e50-8f7f-b13fd0c40f09">

```
loading은 List의 로딩을 나타내는 상태 변수로서, `useState`를 사용하여 `false`로 초기화.
API 요청이 실행될 때 setLoading 함수를 호출하여 loading 상태를 true로 변경.
API 요청이 완료되면 다시 setLoading 함수를 호출하여 loading 상태를 false로 변경
```

<br />

---

---

## 🌵 셀프 피드백

- Todo-item 수정 시, Modal 구현, 완료 항목 일괄 삭제 시 Alert를 구현하여 UX를 개선하였습니다.
- Todo-Item이 쌓일 수록, scroll 위치를 옮겨, 마지막으로 작성한 Item으로 위치하도록 UX를 개선하였습니다.
- 처음으로 styled-component를 이용해 동적인 스타일링을 해보았습니다.
- 처음으로 Nextjs를 사용하여, 초기 렌더링 속도를 높이고, 데이터를 빠르게 렌더링 해보았습니다.
- 기능을 추가할 때마다 아주 간결하게나마 README에 기록하였습니다.
- 상세한 README 작성을 통해 다시 회고하며 복습할 수 있도록 정리하였습니다.

<br />

---

## 💧 아쉬운 점

- Todo-item을 삭제하는 컴포넌트들에 로직이 겹치는 등, 클린하게 로직을 짜지 못했다고 생각합니다.
- API를 중복하여 호출하는 부분이 있는데, 피드백 받고 싶습니다! 🔥
- 세세하게 컴포넌트를 나누지 못한 것 같아, 다소 난잡하게 보이는 JSX가 있습니다.
- props를 더 적극적으로 활용하지 못한 아쉬움이 있습니다.

## 업데이트 기록

<br />

`23.05.15`

- 기능이 추가 될 때마다, GET 요청 횟수 또한 비례하여 증가.

  -> GetTodoHook을 생성하여 기능을 분리하였음.

---

`23.05.16`

- TodoList 배열 길이에 따른 Task 개수 표기 기능 추가

---

`23.05.17`

- 최초 렌더링 시 GET 호출하여 저장된 Todo-Item 출력
  item 변수명 통일을 위한 수정

---

`23.05.19`

- 작성 시각과 편집 시각을 나타내는 기능 추가
  Edit 후 GET 호출 및 atom 업데이트
  Header와 Footer 분리
  input Component 상세 분리 시도

  -> 컴포넌트의 정체성이 뚜렷하지 않아 철회

---

`23.05.20`

- 단일 삭제 DelTodo Hook 생성, 완료된 항목(done: true) 삭제 기능 추가
- Todo-Item Edit 후, reorder 통신으로 order 정렬

---

`23.05.21`

- 완료된 항목(done: true) background-color, margin 변경.

  -> 완료-미완료 Todo-Item 명확히 구분할 수 있게 하였음.

- API가 순서에 상관없이 호출되는 오류 발생

  -> DelAllTodo 내 Promise.all 메소드를 통해 await 요청(DELETE)을 병렬적으로 처리하여 해결하였음.

- Todo-item이 쌓여 스크린에서 보이지 않았을 때를 대비하여, 마지막 POST된 item으로 스크롤을 이동시킴.

---

`23.05.22`

- 파비콘 추가
- 메모리 누수 에러 발생 -> 마운트 여부를 체크하도록 조건 추가
