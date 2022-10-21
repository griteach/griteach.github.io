---
title: "Framer-motion"
excerpt: "study #5"
categories:
  - React
tags:
  - React
  - develop
  - study
  - motion
  - animation
---

# Framer-motion

> [motion docs](https://www.framer.com/docs/introduction/)

# 소개

# 설치

# motion 적용법

```javascript
<motion.div></motion.div>
```

motion을 통해서 불러와야 애니매이션을 적용할 수 있다.
motion에 `styled-components`를 적용하려면 아래와 같이 해야한다.

```javascript
//일반 styled-components
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//motion에 적용한 styled-components
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

<Wrapper>
  <Box variants={boxVariants} initial="start" animate="end">
    <Circle variants={circleVariants} />
    <Circle variants={circleVariants} />
    <Circle variants={circleVariants} />
    <Circle variants={circleVariants} />
  </Box>
</Wrapper>;
```

# Details

## 기본사용법

프로퍼티를 넣어서 원하는 값을 입력해준다.
initial : 원하는 초기 상태
animate : 원하는 최종 상태
transition : 그 트랜지션

## Variants

**define:**  
object를 사용해서 props들을 깔끔하게 정리해준다. object의 이름은 아무거나 상관없고, 안에 들어갈 props 이름도 상관없다. 다만,object에서 만든 이름을 그대로 motion에서 불러와야 한다.
{: .notice--info}

```javascript
const myVars = {
  start: { scale: 0 },
  end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.5 } },
};

function App() {
  return (
    <Wrapper>
      <Box variants={myVars} initial="start" animate="end" />
    </Wrapper>
  );
}
```
