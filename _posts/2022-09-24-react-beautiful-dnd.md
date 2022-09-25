---
title: "Drag and Drop with (rbd)"
excerpt: "study #4"
categories:
  - React
tags:
  - React
  - develop
  - study
  - rbd
  - drag and drop
---

# React beautiful dnd (rbd)

> [RBD library](https://www.npmjs.com/package/react-beautiful-dnd)

**RBD:**  
어플리케이션이 특정 value에 접근해야 할 때 사용. 어떤 컴포넌트이든, 어떤 위치에 있든 특정 value에 접근하기 위해서는 global state상태여야 함.
{: notice--info}

**Recoil** : global state management. 다른 스크린들, 다른 컴포넌트들이 같은 state에 접근해야 할 때. 그 state의 값을 공유하며 다른 작업이 진행된다면 이 값은 반드시 공유되어야 한다. 그럴 때 Recoil을 사용하면 보다 쉽게 state를 공유할 수 있다.
{: .notice--info}

# Basic

## 설치

**install:**  
`npm i react-beautiful-dnd`
{: .notice--info}

recoil 상태를 사용하는 컴포넌트는 부모 트리 어딘가에 나타나는 `RecoilRoot`가 필요함. 루트 컴포넌트가 `RecoilRoot`를 넣기에 가장 좋다.

```javascript
import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}
```

## atom

Atom은 상태의 일부를 나타낸다. Atoms는 어떤 컴포넌트에서든 읽거나 쓸 수 있다. atom의 값을 읽는 컴포넌트들은 암묵적으로 atom을 구독한다. atom값의 변화를 감지 -> 구독중인 모든 컴포넌트가 재 렌더링 되는 결과가 발생한다.

**구독 → re렌더링:**  
Atom의 값을 구독하고 있는 컴포넌트들은 Atom의 값이 변경되면 자동으로 re렌더링된다.
{: .notice--primary}

### atom 생성

```javascript
// src/atoms.ts atom 생성해두기
export const isDarkAtom = atom({
  key: "isDark", //unique ID
  default: false, //default value, initial value
});
```

### atom 사용하기

```javascript
// Chart.tsx 다른 컴포넌트에서 사용하기.
const isDark = useRecoilValue(isDarkAtom); // import ..atoms.ts
```

### atom 수정하기

```javascript
const setIsDarkAtom = useRecoilState(isDarkAtom); //import ..atoms.ts
const toggleDarkAtom = setIsDarkAtom((prev) => !prev); //boolean 뒤집기
//...
<button onClick={toggleDarkAtom}>CHANGE!!</button>;
```

**useRecoilState:**
setState와 동일하게 사용된다. set할 때 기존 값을 가져와 작업해 주는 방식을 지향 `(prev => prev+1)`
{: .notice--primary}

## selector

**selector:**  
derived state: state를 입력받아서 그걸 변형한 후 다시 state를 반환한다. 변형된 스테이트. 기존의 스테이트를 필요한 방식으로 변형하여 반환할 수 있다.
{: .notice--info}

```javascript
import { atom, selector } from "recoil";

export const toDoSelector = selector({
  key: "toDoSelelctor",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [
      toDos.filter((toDo) => toDo.category === "TO_DO"),
      toDos.filter((toDo) => toDo.category === "DOING"),
      toDos.filter((toDo) => toDo.category === "DONE"),
    ];
  },
});
```

`get`이 있어야 다른 atom을 내부로 가져올 수 있다. `key`는 이름이라고 보면 되고.

`Array.filter`를 활용하여 조건에 맞는 배열을 만들어 낸다. `filter`는 해당 조건에 맞지 않는 요소는 버리고 조건에 맞는 녀석들로만 배열을 만들어준다.

```javascript
const ToDoList = () => {
  //배열을 가져올 때는 아래와 같이 차례대로 입력해 주면 된다.
  const [todo, doing, done] = useRecoilValue(toDoSelector);

  return (
    <div>
      <h1>ToDos</h1>
      <hr></hr>
      <CreateToDo />
      <h2>ToDo</h2>
      <ul>
        {todo.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
    </div>
  );
};
```

state를 가져와서 원본은 유지한채로 변형시킨 state를 만들어서 반환한다. 즉, 원본은 바꾸지 않고 내가 원하는 방식대로 변환하여 사용하는 것이 핵심 포인트.

`set`은 atom의 값을 변경시켜주는 프로퍼티.

```javascript
export const hourSelector =
  selector <
  number >
  {
    key: "hours",
    get: ({ get }) => {
      const currentMinute = get(minuteState);

      return currentMinute / 60;
    },
    set: ({ set }, newValue) => {
      const minutes = Number(newValue) * 60;
      set(minuteState, minutes);
    },
  };
```

set은 반환값이 없다(void). 변경하고자 하는 대상을 정하여 원하는 값(만들어진 값)을 넣어주면 된다.
