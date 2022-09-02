var store = [{
        "title": "마크다운 #1",
        "excerpt":"NOTICE 🔅 Notice: 기본적인 노티스 ⚡️ Primary: 중요한 노티스 🚦 Info: 정보 노티스 ⛔️ Warning: 경고 노티스 ❌ Danger: Danger 노티스 ✅ Success: Success 노티스 하단의 중괄호를 이용해서 노티스 형태 알려주기. 아이콘은 직접 입력해 주는 방법밖에 없는 듯 하다. {: .notice--&lt;primary | info | warning | danger | success &gt;}...","categories": ["TIL"],
        "tags": ["markdown"],
        "url": "/til/markdown-1/",
        "teaser": null
      },{
        "title": "목표",
        "excerpt":"2022 목표 리액트 익히기 노마드코더 리액트 마스터 과정 마무리 코인트래커 트렐로 클론 넷플릭스 클론 노마드코더 무료 강좌 전체 마무리 트위터 클론 코딩 Next JS 시작하기 줌 클론코딩 실전형 리액트 Hooks 10개 Nest JS로 API만들기 초보자를 위한 리덕스 101 GraphQL로 영화 API 만들기 ‘지금 우리 학교는’ 리액트로 재탄생시키기 Node JS Express...","categories": ["GOAL"],
        "tags": ["goal","develop","plan"],
        "url": "/goal/life/",
        "teaser": null
      },{
        "title": "React basic",
        "excerpt":"Router 원하는 곳에 뿌려주는 용도. 기본 구성 방법 Link Link: 원하는 곳에 정보를 보낼 수 있다. Components return의 활용 //배열에 대한 map을 활용하여 반복된 리스트 출력해주기. //여기에서는 Coin 컴포넌트를 map으로 호출하여 반복 출력해주고 있다. &lt;Container&gt; &lt;Header&gt; &lt;Title&gt;Coins&lt;/Title&gt; &lt;/Header&gt; {loading? &lt;Loader&gt;Loading...&lt;/Loader&gt; : &lt;CoinsList&gt; {coins.map(coin =&gt; &lt;Coin key={coin.id}&gt; &lt;Link to={`/${coin.id}`}&gt; &lt;CoinWrapper&gt; &lt;Img...","categories": ["React"],
        "tags": ["React","develop","study"],
        "url": "/react/react-study/",
        "teaser": null
      },{
    "title": "마크다운 #1",
    "excerpt":"NOTICE 🔅 Notice: 기본적인 노티스 ⚡️ Primary: 중요한 노티스 🚦 Info: 정보 노티스 ⛔️ Warning: 경고 노티스 ❌ Danger: Danger 노티스 ✅ Success: Success 노티스 하단의 중괄호를 이용해서 노티스 형태 알려주기. 아이콘은 직접 입력해 주는 방법밖에 없는 듯 하다. {: .notice--&lt;primary | info | warning | danger | success &gt;}...","url": "http://localhost:4000/_posts/2022-09-01-markdown-1/"
  },{
    "title": "목표",
    "excerpt":"2022 목표 리액트 익히기 노마드코더 리액트 마스터 과정 마무리 코인트래커 트렐로 클론 넷플릭스 클론 노마드코더 무료 강좌 전체 마무리 트위터 클론 코딩 Next JS 시작하기 줌 클론코딩 실전형 리액트 Hooks 10개 Nest JS로 API만들기 초보자를 위한 리덕스 101 GraphQL로 영화 API 만들기 ‘지금 우리 학교는’ 리액트로 재탄생시키기 Node JS Express...","url": "http://localhost:4000/_posts/2022-09-02-life/"
  },{
    "title": "React basic",
    "excerpt":"Router 원하는 곳에 뿌려주는 용도. 기본 구성 방법 Link Link: 원하는 곳에 정보를 보낼 수 있다. Components return의 활용 //배열에 대한 map을 활용하여 반복된 리스트 출력해주기. //여기에서는 Coin 컴포넌트를 map으로 호출하여 반복 출력해주고 있다. &lt;Container&gt; &lt;Header&gt; &lt;Title&gt;Coins&lt;/Title&gt; &lt;/Header&gt; {loading? &lt;Loader&gt;Loading...&lt;/Loader&gt; : &lt;CoinsList&gt; {coins.map(coin =&gt; &lt;Coin key={coin.id}&gt; &lt;Link to={`/${coin.id}`}&gt; &lt;CoinWrapper&gt; &lt;Img...","url": "http://localhost:4000/_posts/2022-09-02-react-study/"
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
