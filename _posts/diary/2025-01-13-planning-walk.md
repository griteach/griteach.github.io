---
title: 기획 산책 1
date: 2025-01-13 16:09:00 +0900
categories: [Diary]
tags: [diary, planning-walk]     # TAG names should always be lowercase
---

# 기획 산책 1

> 생각이 나지 않거나 가슴이 답답할 땐 산책만한 것이 없더라.

## intro
2024년을 육아휴직으로 꿈같은 시간을 보냈다. 보냈어야 했다. 보냈다고 봐야하나? 아무튼 1년 간 육아휴직을 하면서 개발과 육아를 병행하였다. 큰 아이의 학교 적응은 나름대로 성공이었다. 그런데 개발 쪽에서도 그러했는가는 살짝 고개를 갸우뚱 하게 된다. 최초에 목표로 했던 런칭은 어려워졌고, 자신만만했던 나의 과거가 떠오르면서 나도 모르게 고개가 숙여진다. 

후회하진 않는다. 왜냐하면 내가 처한 상황에서 할 수 있는 것들을 했고, 배웠고, 시행착오를 겪었기 때문에 더 이상 나를 채찍질하거나 자책감으로 괴로워하지 말자고 생각했다. 이 생각은 지금도 변하지 않았다. 후회가 아니라 얼만큼 만족하냐고 물었을 때 고개가 갸우뚱해질 뿐이다.

## 기획 엎어버리기

산책을 하면서 막힌 부분을 생각해 봤다. 최초 기획은 올인원 디스플레이 웹 서비스였다. 학교시스템과 학급시스템을 통합관리하고, 학사일정을 토대로 두 개의 시스템이 서로 연동되는 것을 목표로 하였다. 학사일정을 어떻게든 만들어내려다가 데이터베이스 모델링에 어려움을 겪으면서 최초 기획을 수정하기로 하였다.

두 번째 기획은 기존 내용을 다 없애고 학교 시스템만 구축하는 것이었다. 프로젝트도 새로 구성했다. 챗gpt 구독을 취소하고 cursor IDE를 새롭게 구독했다. 미니멀한 상태에서 일단 배포를 해보자라는 생각으로 접근했다. 뼈대를 만들고 vercel에 배포도 했다. 때마침 노마드코더에서 데이터베이스 강좌가 나왔길래, 거금 10만원을 들여서 열심히 수강했다. 데이터베이스에 대한 기초를 배우고 나서 학교 시스템에 적용해봤다. 나름의 진전이 있었다. 그런데 학교 시스템만 구축하려고 했는데도 불구하고 계속해서 데이터베이스와 연동, api 서버(cron을 위한)가 발목을 잡았다. 여전히 내가 다루기엔 앱의 볼륨이 크다는 생각이 들었다. 그리고 화면 구성에서도 날씨, 공지사항 외의 다른 내용을 넣자니 뭔가 필요하진 않지만 비워둘 순 없어 마구잡이로 채워넣는건 아닐까 하는 의구심이 나를 계속해서 멈칫하게 만들었다.

오늘 산책을 하면서 문득 생각이 났다. 그래서 내가 최초에 앱을 만들고자 했던 이유가 무엇이었던가. 사용자가 평소에 나도 모르게 시간을 빼앗기는 반복 단순 작업을 대신 해줌으로써 사용자의 정신적, 신체적 에너지를 확보해 주기 위함이 아니었던가. 그래서 대시보드를 만들고 기존에 사용자가 직접 컨트롤 했던 부분을 자동화 해주고자 했던것 아닌가. 1차, 2차 시도는 나름의 의미가 있었다. 내가 어디까지 할 수 있고 무엇을 알고 있고 무엇을 모르고 있는지, 그리고 무엇을 만들 수 있는지 알 수 있는 좋은 경험이었다. 

세 번째 기획은 이렇다. 학급 시스템으로 가되, 사용자가 바로 사용할 수 있는 기능만 넣어서 배포해보자. 재료는 준비가 되었고 이걸 잘 조합하기만 하면 된다. 날씨, 급식, 공지사항, 캐싱, db, 배포, auth, UI 등등 모두 다 건드려봤다. api 서버를 따로 구축해서 원하는 데이터를 뽑아낼 수 있도록 하고, 사무실에서 바로 사용할 수 있는 기능들만 배치해보자. 1년 학사일정, 전체행사 등의 큰 개념은 일단 미뤄두자. 이제 한 달 반 정도 남았다. 할 수 있는 만큼 해 보고, 그 다음 배포해서 내가 직접 사용해보자. 나도 이젠 복직해야하니까... 직접 사용하면서 계속 만들어보자.

## outro

> 성공은 포기하지 않는자만 누릴 수 있다.

포기하고 싶은 생각이 들지 않는다. 이게 집착인지 뭔지 잘 모르겠지만, 포기에 대한 생각은 전혀 없다. 시간 낭비? 에너지 낭비? 그럼 이거 안하면 대체 뭐 할건데. 올 해 멘붕이 와서 손 놔버린 시간보다 열심히 노력한 시간이 더 많았다. 육아휴직이든 아니든 힘든건 힘든거고, 멘붕이 오는건 멘붕이 오는거다. 그럼에도 불구하고, 시간이 많았음에도 불구하고 열심히 노력한 시간이 더 많았다는 사실에 나름 만족하고 있다. 그래서 후회가 없다. 정말로. 
복직하면 아무래도 더 많은 에너지가 필요하겠지만, 그래도 포기하지 않을 것이다. 그냥 내가 하고 싶어서 하는거고, 목표를 달성했을 때, 얼마나 기쁠지 궁금하다. 

그냥 계속 하자. Just do it. That's enough.