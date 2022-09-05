var store = [{
        "title": "마크다운 #1",
        "excerpt":"NOTICE 🔅 Notice: 기본적인 노티스 ⚡️ Primary: 중요한 노티스 🚦 Info: 정보 노티스 ⛔️ Warning: 경고 노티스 ❌ Danger: Danger 노티스 ✅ Success: Success 노티스 하단의 중괄호를 이용해서 노티스 형태 알려주기. 아이콘은 직접 입력해 주는 방법밖에 없는 듯 하다. {: .notice--&lt;primary | info | warning | danger | success &gt;}...","categories": ["TIL"],
        "tags": ["markdown"],
        "url": "/til/markdown-1/",
        "teaser": null
      },{
        "title": "목표",
        "excerpt":"2022 목표 리액트 스터디 노마드코더 리액트 마스터 과정 마무리 코인트래커 (~22.9.5.) github : coin-tracker-react State management 트렐로 클론 Animations 넷플릭스 클론 노마드코더 무료 강좌 전체 마무리 실전형 리액트 Hooks 10개 초보자를 위한 리덕스 101 Next JS 시작하기 (SSR을 강화시켜주는 React Framework) 최종적으로 SSR이 SEO에서 중요한 역할을 하기에, Next JS를 알아야...","categories": ["GOAL"],
        "tags": ["goal","develop","plan"],
        "url": "/goal/life/",
        "teaser": null
      },{
        "title": "React basic",
        "excerpt":"Router Router: 원하는 곳에 뿌려주는 용도. Nested Router 라우터 안의 라우터 웹사이트에서 탭을 사용할 때 도움이 된다. 섹션이 나눠졌을 때도 만들 수 있지. Outlet 활용: outlet을 활용하여 전체 Router에 필요한 컴포넌트 &amp; Route를 등록해두고 실제로 불러와야할 컴포넌트에서 &lt;Outlet /&gt;으로 삽입해준다. function Dashboard() { return ( &lt;div&gt; &lt;h1&gt;Dashboard&lt;/h1&gt; {/* This element...","categories": ["React"],
        "tags": ["React","develop","study"],
        "url": "/react/react-study/",
        "teaser": null
      },{
    "title": "마크다운 #1",
    "excerpt":"NOTICE 🔅 Notice: 기본적인 노티스 ⚡️ Primary: 중요한 노티스 🚦 Info: 정보 노티스 ⛔️ Warning: 경고 노티스 ❌ Danger: Danger 노티스 ✅ Success: Success 노티스 하단의 중괄호를 이용해서 노티스 형태 알려주기. 아이콘은 직접 입력해 주는 방법밖에 없는 듯 하다. {: .notice--&lt;primary | info | warning | danger | success &gt;}...","url": "http://localhost:4000/_posts/2022-09-01-markdown-1/"
  },{
    "title": "목표",
    "excerpt":"2022 목표 리액트 스터디 노마드코더 리액트 마스터 과정 마무리 코인트래커 (~22.9.5.) github : coin-tracker-react State management 트렐로 클론 Animations 넷플릭스 클론 노마드코더 무료 강좌 전체 마무리 실전형 리액트 Hooks 10개 초보자를 위한 리덕스 101 Next JS 시작하기 (SSR을 강화시켜주는 React Framework) 최종적으로 SSR이 SEO에서 중요한 역할을 하기에, Next JS를 알아야...","url": "http://localhost:4000/_posts/2022-09-02-life/"
  },{
    "title": "React basic",
    "excerpt":"Router Router: 원하는 곳에 뿌려주는 용도. Nested Router 라우터 안의 라우터 웹사이트에서 탭을 사용할 때 도움이 된다. 섹션이 나눠졌을 때도 만들 수 있지. Outlet 활용: outlet을 활용하여 전체 Router에 필요한 컴포넌트 &amp; Route를 등록해두고 실제로 불러와야할 컴포넌트에서 &lt;Outlet /&gt;으로 삽입해준다. function Dashboard() { return ( &lt;div&gt; &lt;h1&gt;Dashboard&lt;/h1&gt; {/* This element...","url": "http://localhost:4000/_posts/2022-09-02-react-study/"
  },{
    "title": "About",
    "excerpt":"  ","url": "http://localhost:4000/about/"
  },{
    "title": "Posts by Category",
    "excerpt":" ","url": "http://localhost:4000/categories/"
  },{
    "title": null,
    "excerpt":"","url": "http://localhost:4000/"
  },{
    "title": null,
    "excerpt":"var idx = lunr(function () { this.field('title') this.field('excerpt') this.field('categories') this.field('tags') this.ref('id') this.pipeline.remove(lunr.trimmer) for (var item in store) { this.add({ title: store[item].title, excerpt: store[item].excerpt, categories: store[item].categories, tags: store[item].tags, id: item }) } }); $(document).ready(function() { $('input#search').on('keyup', function () { var resultdiv = $('#results'); var query = $(this).val().toLowerCase(); var result = idx.query(function...","url": "http://localhost:4000/assets/js/lunr/lunr-en.js"
  },{
    "title": null,
    "excerpt":"step1list = new Array(); step1list[\"ΦΑΓΙΑ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΟΥ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΩΝ\"] = \"ΦΑ\"; step1list[\"ΣΚΑΓΙΑ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΟΥ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΩΝ\"] = \"ΣΚΑ\"; step1list[\"ΟΛΟΓΙΟΥ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΑ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΩΝ\"] = \"ΟΛΟ\"; step1list[\"ΣΟΓΙΟΥ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΑ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΩΝ\"] = \"ΣΟ\"; step1list[\"ΤΑΤΟΓΙΑ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΟΥ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΩΝ\"] = \"ΤΑΤΟ\"; step1list[\"ΚΡΕΑΣ\"]...","url": "http://localhost:4000/assets/js/lunr/lunr-gr.js"
  },{
    "title": null,
    "excerpt":"var store = [ {%- for c in site.collections -%} {%- if forloop.last -%} {%- assign l = true -%} {%- endif -%} {%- assign docs = c.docs | where_exp:'doc','doc.search != false' -%} {%- for doc in docs -%} {%- if doc.header.teaser -%} {%- capture teaser -%}{{ doc.header.teaser }}{%- endcapture...","url": "http://localhost:4000/assets/js/lunr/lunr-store.js"
  },{
    "title": "Posts by Tag",
    "excerpt":"","url": "http://localhost:4000/tags/"
  },{
    "title": null,
    "excerpt":"{% if page.xsl %} {% endif %} {% assign collections = site.collections | where_exp:'collection','collection.output != false' %}{% for collection in collections %}{% assign docs = collection.docs | where_exp:'doc','doc.sitemap != false' %}{% for doc in docs %} {{ doc.url | replace:'/index.html','/' | absolute_url | xml_escape }} {% if doc.last_modified_at or doc.date...","url": "http://localhost:4000/sitemap.xml"
  },{
    "title": null,
    "excerpt":"Sitemap: {{ \"sitemap.xml\" | absolute_url }} ","url": "http://localhost:4000/robots.txt"
  },{
    "title": null,
    "excerpt":"{% if page.xsl %}{% endif %}Jekyll{{ site.time | date_to_xmlschema }}{{ page.url | absolute_url | xml_escape }}{% assign title = site.title | default: site.name %}{% if page.collection != \"posts\" %}{% assign collection = page.collection | capitalize %}{% assign title = title | append: \" | \" | append: collection %}{% endif...","url": "http://localhost:4000/feed.xml"
  }]
