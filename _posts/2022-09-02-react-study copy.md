---
title: "Recoil - React를 위한 상태관리 라이브러리"
excerpt: "study #3"
categories:
 - React
tags:
 - React
 - develop
 - study
 - recoil
---

# Recoil

> [Recoil library](https://recoiljs.org/ko/)  



**Global State:**  
어플리케이션이 특정 value에 접근해야 할 때 사용. 어떤 컴포넌트이든, 어떤 위치에 있든 특정 value에 접근하기 위해서는 global state상태여야 함.
{: notice--info}

**Recoil** : global state management. 다른 스크린들, 다른 컴포넌트들이 같은 state에 접근해야 할 때. 그 state의 값을 공유하며 다른 작업이 진행된다면 이 값은 반드시 공유되어야 한다. 그럴 때 Recoil을 사용하면 보다 쉽게 state를 공유할 수 있다. 
{: .notice--info}

# Basic

## 설치

**install:**  
`npm install recoil`
{: .notice--info}  

recoil 상태를 사용하는 컴포넌트는 부모 트리 어딘가에 나타나는 `RecoilRoot`가 필요함. 루트 컴포넌트가 `RecoilRoot`를 넣기에 가장 좋다.

```javascript
import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}
```  

## Atom  

Atom은 상태의 일부를 나타낸다. Atoms는 어떤 컴포넌트에서든 읽거나 쓸 수 있다. atom의 값을 읽는 컴포넌트들은 암묵적으로 atom을 구독한다. atom값의 변화를 감지 -> 구독중인 모든 컴포넌트가 재 렌더링 되는 결과가 발생한다.

**구독 → re렌더링:**  
Atom의 값을 구독하고 있는 컴포넌트들은 Atom의 값이 변경되면 자동으로 re렌더링된다. 
{: .notice--primary}

### Atom 생성  
```javascript
// src/atoms.ts atom 생성해두기
export const isDarkAtom = atom({
    key:"isDark", //unique ID
    default: false, //default value, initial value
});
```
### Atom 사용하기  
```javascript
// Chart.tsx 다른 컴포넌트에서 사용하기.
const isDark = useRecoilValue(isDarkAtom); // import ..atoms.ts
```  

### Atom 수정하기
```javascript
const setIsDarkAtom = useRecoilState(isDarkAtom); //import ..atoms.ts
const toggleDarkAtom = setIsDarkAtom(prev => !prev); //boolean 뒤집기
//...
<button onClick={toggleDarkAtom}>CHANGE!!</button>
```   

**useRecoilState:**
setState와 동일하게 사용된다. set할 때 기존 값을 가져와 작업해 주는 방식을 지향 `(prev => prev+1)` 
{: .notice--primary}

