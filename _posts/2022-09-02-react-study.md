---
title: "React basic"
excerpt: "study #1"
categories:
  - React
tags:
  - React
  - develop
  - study
---

# Router

**Router:**  
원하는 곳에 뿌려주는 용도.
{: .notice--info}

## Nested Router

라우터 안의 라우터
웹사이트에서 탭을 사용할 때 도움이 된다.
섹션이 나눠졌을 때도 만들 수 있지.

**Outlet 활용:**  
outlet을 활용하여 전체 Router에 필요한 컴포넌트 & Route를 등록해두고 실제로 불러와야할 컴포넌트에서 `<Outlet />`으로 삽입해준다.
{: .notice--info}

```javascript
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
    </Routes>
  );
}
```

니코가 한 방식과는 다른데, react-router-dom v6로 업데이트 되면서 달라졌음. 라우터에서 분기가 필요한 장면들을 넣어두고 (coin-tracker의 chart, price 처럼) 로직에 따라 해당하는 컴포넌트를 `<Outlet />`으로 불러온다는 개념으로 이해하고 있음.

## Link

**Link:**
원하는 곳에 정보를 보낼 수 있다. a태그와 다른 점은 새로고침을 하지 않는다는 것. a태그는 새로고침이 되지만 Link는 그렇지 않다. 따라서 새로고침 없이 원하는 동작을 시키기에 적합하다.
{: .notice--info}

# Components

## components return 해 주기

```javascript
//배열에 대한 map을 활용하여 반복된 리스트 출력해주기.
//여기에서는 Coin 컴포넌트를 map으로 호출하여 반복 출력해주고 있다.
<Container>
  <Header>
    <Title>Coins</Title>
  </Header>
  {loading ? (
    <Loader>Loading...</Loader>
  ) : (
    <CoinsList>
      {coins.map((coin) => (
        <Coin key={coin.id}>
          <Link to={`/${coin.id}`}>
            <CoinWrapper>
              <Img
                src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
              />
              {coin.name} &rarr;
            </CoinWrapper>
          </Link>
        </Coin>
      ))}
    </CoinsList>
  )}
</Container>
```

# Style

## reset css

**reset css:**  
브라우저가 가지고 있는 기본 css 스타일을 모두 **초기화**시켜준다.
{: .notice--info}

```css
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
```

## styled-components

```javascript
//Header
const Header = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//Coin List
const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};

  border-radius: 20px;
  margin-bottom: 15px;
  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: block;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;
```

컴포넌트마다 따로 스타일을 지정해 줄 수 있음. 이렇게 지정해 둔 스타일은 컴포넌트를 불러올 때마다 적용되기 때문에 리액트가 추구하는 방식에 참 어울린다는 생각이.. 기존 css에서 사용하던 모든 방식을 styled-components로도 대부분 사용할 수 있다.

### createGlobalStyle

**createGlobalStyle:**  
스타일을 전체 적용할 때, 어디에서 작업을 해야 할까? styled-components들은 각자의 컴포넌트에 대한 스타일을 적용할 수도 있지만, 전체에 대한 것도 마련해 두었다.
{: .notice--info}

```javascript
//App.tsx

//임포트
import { createGlobalStyle } from "styled-components";

//styled-components 생성 (feat. rest css)
const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  background-color: ${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor};
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

*{
  box-sizing: border-box;
}

a{
  text-decoration: none;
  color:inherit;
}
`;

//app 생성
function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}
```

이 컴포넌트는 렌더링 한 후에 전역 스코프에 스타일을 올려준다. 단독으로 적용되는 것이 아니라 전체, 글로벌로 적용.

### styled-reset

**styled-reset:**  
한 번에 reset css 만들어 줌.
{: .notice--info}

위의 방식이 맘에 들지 않는다면 styled-reset 패키지를 사용하면 된다. 손쉽게 reset-css를 적용해 준다고 하는데, 한 번 살펴봐야겠다.

### styled-components 안에 props 넣기

```javascript
//isActive라는 props를 세팅해주고.
const Tab =
  styled.span <
  { isActive: boolean } >
  `
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    background-color: rgba(0,0,0,0.5);
    padding: 7px 0px;
    border-radius: 10px;
    a {
        display: block;
    }
    
    // 스타일 세팅 할 때 props를 가져다가 사용하기. 삼항연산자는 거의 밥먹듯이 사용.
    color:${(props) =>
      props.isActive ? props.theme.accentColor : props.theme.textColor};
`;

//실제 사용 장면
<Tabs>
  // styled-components를 사용할 때 props를 넣어주는 모습. 값을 다이렉트로 넣을
  수도 있고, js를 이용하여 로직을 넣을 수도 있다.
  <Tab isActive={chartMatch !== null}>
    <Link to={`/${coinId}/chart`}>Chart</Link>
  </Tab>
  <Tab isActive={priceMatch !== null}>
    <Link to={`/${coinId}/price`}>Price</Link>
  </Tab>
</Tabs>;
```

# Hooks

## useParams

**useParams:**  
현재 url에서 관심있는 정보를 잡아낼 수 있게 해주는 것.
{: .notice--info}

## useState

```javascript
//basic
const [loading, setLoading] = useState(true);
const [name, setName] = useState();

//with interface
const [coins, setCoins] = useState<CoinInterface[]>([]);
```

1. state 변수
2. 값을 변경 및 저장하면서 새롭게 rendering
3. 기본값 세팅가능.

## useLocation

현재 페이지에 들어오는 데이터를 체크해준다. useParams랑 무슨 차이지?
-> useParams는 라우팅을 할 때 주소를 구분짓기 위한 id값 정도를 건네주고 받고 하는 느낌. 보다 명확한 내용 파악 필요. 숙제<sup id="a1">[1](#f1)</sup>
-> useLocation은 현재 나한테 들어온 값을 체크할 수 있는 것.
-> Link를 사용해서 state를 전달할 수 있다.(state에는 다양한 데이터를 집어넣을 수 있지.)

rrd V6버전에서는 제네릭 사용 안됨. 따라서 as를 이용하여 접근.

```javascript
//routerstate 인터페이스 생성(타입?)
interface RouterState{
    name:string;
    rank:number;
}
const location = useLocation();
    const currentCoin = location.state as RouterState;

    console.log(currentCoin);
    console.log(typeof currentCoin);
```

## useMatch

**useMatch:**  
사용자가 특정한 URL에 있는지 그 여부를 알려주는 용도.
{: .notice--info}

**V6:** useMatch, **~V5**: useRouteMatch
{: .notice--info}

사용자가 선택한 URL에 들어가 있다면 Object를 돌려받고, 그 안에는 현재 url과 path, isExact:true가 들어있다. 원래대로라면. 허나 useMatch에서는 다른 값이 들어있다. 뭐 이걸로라도 현재 URL에 머물고 있는지 여부를 체크할 수 있다면 상관 없겠지. 만약 내가 해당 URL에 머물지 않는다면 null이 반환된다.

## React Hook Form

> [React Hook Form Docs](https://react-hook-form.com/)

### register

register function은 onchange, validate, value 가져오기 등의 모든 것을 한 큐에 해결해준다.

```javascript
import { useForm } from "react-hook-form";

function Foo() {
  const { register, watch, handleSubmit } = useForm();

  return (
    <div>
      <form>
        <input {...register("toDo")} placeholder="Write a to do" />
      </form>
      <button>Add</button>
    </div>
  );
}
```

register function 안에는 onChange, state 등 많은 것들이 이미 만들어져 있다. register를 콘솔로 찍어보면 다음과 같다. (문자열을 인수로 넣어줘야 한다.)

```javascript
{name: 'toDo', onChange: ƒ, onBlur: ƒ, ref: ƒ}
```

onBlur는 포커스에 대한 것을 관리해 준다. onChange는 값의 변경을 감지해주고, name은 물론 이름이다.  
이 register함수가 반환하는 객체를 가져다가 input에 props로 넣어준다. 이 때, `{...register("toDo")}`와 같이 구조 분해 할당해준다. watch는 input의 값의 변화를 실시간으로 관찰하여 state처럼 만들어준다.

### watch

watch는 값이 변동되는것을 실시간으로 감지하여 객체를 만들어준다. ~~vue에서 본 적 있지.~~ 로그로 찍어보면 인풋에 값이 들어올때마다 계속해서 출력되는 것을 볼 수 있다.

### handleSubmit

[handleSubmit docs](https://react-hook-form.com/api/useform/handlesubmit/)
{: .notice--info}

submit이 동작할 수 있도록 해주는 속성. 데이터가 유효할 때 동작하는 함수를 만들어서 집어넣어준다.

### formState:{ ... }

[formState docs](https://react-hook-form.com/api/useform/formstate)
{: .notice--info}

```javascript
import React from "react";
import { useForm } from "react-hook-form";

interface FormInputs = {
  email: string
}

export default function App() {
  const {
    register,
    handleSubmit,
    // Read the formState before render to subscribe the form state through Proxy
    formState: { errors, isDirty, isSubmitting, touchedFields, submitCount },
  } = useForm<FormInputs>({
    defaultValues:{
      email:"@gmail.com",
    }
  });
  const onSubmit = (data: FormInputs) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email") {
        required:"This is required.",
        minLength:{
          value:5,
          message:"Your email is too short.",
        }
        }} />
      <ErrorMessage
          errors={errors}
          name="email"
          render={
              ({message}) => <p>{message}</p>
              //styled-components 사용해도 됨 ㅋㅋ
          } />
      <input type="submit" />
    </form>
  );
}

```

FormInputs 인터페이스를 생성해준다. 인풋으로 받아올 데이터들의 타입과 이름을 정해준다. 디폴트값을 적용할 수도 있다. 에러메시지를 만들어두어야

# React Query

**공식사이트:**  
[React Query Docs](https://tanstack.com/query/v4/docs/quick-start)
{: .notice--info}

**버전 문제 확인:**  
react 버전이 18이면 타입스크립트에서 react query를 못 불러옵니다
npm i @tanstack/react-query 를 입력해서 모듈을 설치하면 react query불러오기가 가능해집니다

그리고 @tanstack/react-query에서 useQuery를 사용할때 query key의 값은 대괄호로 묶어줘야합니다

const { isLoading, data } = useQuery(["allCoins"], fetchCoins);
{: .notice--warning}

```javascript
import { QueryClient, QueryClientProvider } from 'react-query';


//queryClient 생성
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <React.StrictMode>
  //QueryClientProvider 감싸기
  //props는 client={queryClient}로 넣어주기(필수)
  //그 외에는 건드릴 것 없는듯?
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>

);
```

1. fetcher 함수
   fetcher 함수 만들기. (fetch)함수와 더불어 json이라든지 state에 저장하는 작업이라든지 이러한 것들을 모두 합쳐놓은 듯한 느낌?

2. 자동으로 캐싱이 된다.
   가져온 데이터는 캐시에 저장해 두었다가, 필요할 때 꺼내 쓴다. fetch를 사용했다면 매번 접속할 때마다 api에 접근했겠지만, react query는 캐시에 데이터를 저장해 두었다가 필요할 때 꺼내어 쓴다.

3. isLoading, data가 자동으로 포함돼있다.

4. 비구조화 할당 시 이름 바꾸기
   비구조화 할당시 이름 바꾸기
   이번에는, 비구조화 할당을 하는 과정에서 선언 할 값의 이름을 바꾸는 방법을 알아보겠습니다.

예를 들어서 다음과 같은 코드가 있다고 가정해봅시다.

```javascript
const animal = {
  name: "멍멍이",
  type: "개",
};

const nickname = animal.name;

console.log(nickname); // 멍멍이
```

위 코드에서는 animal.name 값을 nickname 값에 담고 있는데요, 이름이 같다면 그냥 우리가 이전에 배웠던 대로 비구조화 할당을 쓰면 되는데 지금은 이름이 서로 다릅니다.

이러한 상황에서는 : 문자를 사용해서 이름을 바꿔줄 수 있습니다.

```javascript
const animal = {
  name: "멍멍이",
  type: "개",
};

const { name: nickname } = animal;
console.log(nickname);
```

위 코드는 'animal 객체 안에 있는 name 을 nickname 이라고 선언하겠다.' 라는 의미입니다.

# etc

## react-helmet

**react-helmet:**  
컴포넌트. 여기서 무엇을 render하든지 그것이 문서의 head로 가게된다. Helmet은 head로 가는 direct link일 뿐이다. 타이틀, css, favicon 등등 모든 것을 적용할 수 있다.
{: .notice--info}

```javascript
//아래의 코드를 컴포넌트 안에 넣어주면 된다.
//타이틀 뿐 아니라 css, favicon등등 모두 가능
//js로 로직을 넣을 수도 있으니 상황에 따라 필요한 데이터를 전달할 수 있다.
<Helmet>
  <title>Coins</title>
</Helmet>
```

---

<b id="f1">1</b>
