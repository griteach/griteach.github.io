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

1. 원하는 곳에 뿌려주는 용도.
2. 기본 구성 방법

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
        <Route
          path="messages"
          element={<DashboardMessages />}
        />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
    </Routes>
  );
}
```


## Link

**Link:**
원하는 곳에 정보를 보낼 수 있다.
{: .notice--info}

# Components

## return의 활용
```javascript

//배열에 대한 map을 활용하여 반복된 리스트 출력해주기.
//여기에서는 Coin 컴포넌트를 map으로 호출하여 반복 출력해주고 있다.
<Container>
        <Header>
        <Title>Coins</Title>
        </Header>
        {loading? <Loader>Loading...</Loader> : <CoinsList>
            {coins.map(coin => <Coin key={coin.id}>
                <Link to={`/${coin.id}`}>
                    <CoinWrapper>
                        <Img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}/>
                        {coin.name} &rarr;
                    </CoinWrapper>        
                </Link>
                    
                </Coin>)}
        </CoinsList>}
        
    </Container>

```



# Style

## reset css
```css
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

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
```

## styled-components

```javascript
//Header
const Header = styled.div`
    height:10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

//Coin List
const Coin = styled.li`
    background-color: white;
    color:${props => props.theme.bgColor};
    
    border-radius: 20px;
    margin-bottom: 15px;
    a{
        padding: 20px;
        transition: color 0.2s ease-in;
        display: block;
    }
    &:hover{
        a{
            color:${props => props.theme.accentColor};
        }
    }
`;
```
컴포넌트마다 따로 스타일을 지정해 줄 수 있다. 이렇게 지정해 둔 스타일은 컴포넌트를 불러올 때마다 적용되기 때문에 리액트가 추구하는 방식에 참 어울린다는 생각이.. 기존 css에서 사용하던 모든 방식을 styled-components로도 대부분 사용할 수 있다. 

### createGlobalStyle

> 스타일을 전체 적용할 때, 어디에서 작업을 해야 할까? styled-components들은 각자의 컴포넌트에 대한 스타일을 적용할 수도 있지만, 전체에 대한 것도 마련해 두었다.

```javascript
import {createGlobalStyle} from 'styled-components';
```

이 컴포넌트는 렌더링 한 후에 전역 스코프에 스타일을 올려준다. 단독으로 적용되는 것이 아니라 전체, 글로벌로 적용.

### styled-reset
1. 한 번에 reset css 시켜줌.


# Hooks

## useParams

1. 현재 url에서 관심있는 정보를 잡아낼 수 있게 해주는 것.

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
-> useParams는 라우팅을 할 때 주소를 구분짓기 위한 id값 정도를 건네주고 받고 하는 느낌. 
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


ㄹ