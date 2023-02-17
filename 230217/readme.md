# jQuery

<br>

## 전체 선택자

```
<script src="jquery.js"></script>
  <script>
    $(function () {
     $("*").css("border", "1px solid blue");
    });
  </script>
```

<br>
<b><span style = "background-color: #46649b">$(" * ").css("border", "1px solid blue");</span></b>

위에서 \* 을 전체 선택자라 한다.

<br><br><br>

## 직접 선택자

```
<script>
  $(function () {
    $("#kb")
      .css("background-color", "#ff0"); // id선택자
      .css("border", "4px solid #f00"); // 체이닝 기법
  });
  $(function () {
    $("a")
      .attr("href", "https://www.google.com/");
      .attr("target", "_blank");
      .css("font-size", "100px"); // 체이닝 기법
  });
</script>
```

```
<body>
  <h1>제이쿼리</h1>
  <h2 id = "kb">선택자</h2>
  <a>국민</a>
  <h3>직접 선택자</h3>
</body>
```

<br>

- id는 <b><span style = "background-color: #46649b">#</span></b>, class는 <b><span style = "background-color: #46649b">.</span></b>으로 선택자 지정
- 요소 선택자는 태그 지정
- 동시 선택가능

  - <b><span style = "background-color: #46649b">$("#kb, h1")</span></b>
  - <b><span style = "background-color: #46649b">("h1#kb")</span></b> = h1 중에서 id값이 같은 것만 지정<br><br>

- <b>체이닝 기법</b>
  <br>$("#kb")
  <br>.css("font-size", "100px");
  <br>.css("border", "4px solid #f00");
  위와 같은 식으로 하나의 id 요소에 여러가지 메소드를 적용하는 것을 체이닝 기법이라 함<br><br>

- <b>선택한 요소에 지정한 스타일 적용</b>:
  <br><span style = "background-color: #46649b">$("css선택자").css("스타일 속성명", "값")</span>
- <b>선택한 요소에 지정한 속성 적용</b>:
  <br><span style = "background-color: #46649b">$("css선택자").css("속성명", "값")</span>

<br><br><br>

## 인접 관계 선택자

<br>

<예제1>

```
<script>
  $(function () {
    $("#22").parent().css("border", "4px solid #f00");
  });
</script>
```

```
<body>
  <h1>인접 관계 선택자</h1>
  <ul id="kb">
    <li>리스트1</li>
    <ul>
      <li id="22">리스트22</li>
      <li>리스트22-1</li>
    </ul>
    <li>리스트2</li>
    <li>리스트3</li>
  </ul>
  <h2 id="kb">선택자</h2>
</body>
```

<br>
<b><span style = "background-color: #46649b">$("#22")</span></b>가 선택하는 것은 "22"라는 id를 가진 '리스트22'이다. '리스트22'의 parent는 ul이므로 ul에 테두리가 둘러지게 된다.

<br><br>

<예제2>

```
<script>
  $(function () {
    $("#22 > h1").css("border", "4px solid #f00");

    $("#22 > section").children()
    .css({
    "background-color":"skyblue",
    "border": "4px solid #ff0"
    });
  });
</script>
```

```
<body>
  <h1>인접 관계 선택자</h1>
  <div id = 22>
    <h1>h1h1h1</h1>
    <section>
      <h2>h2h2h2</h2>
      <p>ppp</p>
    </section>
  <ul id="kb">
    <li>리스트1</li>
    <ul>
      <li id="22">리스트22</li>
      <li>리스트22-1</li>
    </ul>
    <li>리스트2</li>
    <li>리스트3</li>
  </ul>
  <h2 id="kb">선택자</h2>
</body>
```

<br>
<b><span style = "background-color: #46649b"></b>$("#22 > h1"</span>은 22라는 id를 가진 첫번째 div 밑의 <b><span style = "background-color: #46649b">h1</span></b>을 가져온다.

<br><b><span style = "background-color: #46649b">$("#22 > section").children()</span></b>는 첫번째 div 내 section, 그리고 section에 속해있는 <b><span style = "background-color: #46649b">h2('h2h2h2')와 p('ppp')</span></b>를 가져온다.

<br><br>

<예제3>

```
<script>
  $(function () {
    var style_1 = {
      "background-color": "#0ff",
      "border": "3px solid #f00",
    };
    var style_2 = {
      "background-color": "#ff0",
      "border": "3px dashed #f00",
    };

    $(".txt").prev().css(style_1);
    $(".txt + p").css(style_2);
    $(".txt").next().next().css(style_2);
  });
</script>
```

```
<body>
  <div id="tt">
    <h1>인접 관계 선택자</h1>
    <p>내용1</p>
    <p class="txt">내용2</p>
    <p>내용3</p>
    <p>내용4</p>
  </div>
</body>
```

<br>
<b><span style = "background-color: #46649b">$(".txt").prev()</span></b> = .txt 앞의 p('내용1')
<br><br>
<b><span style = "background-color: #46649b">$(".txt + p")</span></b> = .txt와 인접한 p('내용3')
  <br>만약 $("p + .txt")를 하면 첫번째 p의 다음 txt가 선택이 됨<br><br>
<b><span style = "background-color: #46649b">$(".txt").next().next()</span></b> = .txt 다음다음 p('내용4')

<br><br>

<예제4>

```
<script src="jquery.js"></script>
<script>
  $(function () {
    var style_1 = {
      "background-color": "#0ff",
      border: "3px solid #f00",
    };
    var style_2 = {
      "background-color": "#ff0",
      border: "3px dashed #f00",
    };

    $(".txt").prevAll().css(style_1);
    $(".txt").nextAll().css(style_2);
  });
</script>
```

```
<body>
  <h1>어휴</h1>
  <div id="tt">
    <h2>인접 관계 선택자</h2>
    <p>내용1</p>
    <p class="txt">내용2</p>
    <p>내용3</p>
    <p>내용4</p>
  </div>
</body>
```

<br>
<b><span style = "background-color: #46649b">$(".txt").prevAll()</span></b> = .txt 앞의 모든 요소
<br><br>
<b><span style = "background-color: #46649b">$(".txt").nextAll()</span></b> = .txt 다음의 모든 요소

<br><br>

<예제5>

```
<script>
  $(function () {
    var style_1 = {
      "background-color": "#0ff",
      border: "3px solid #f00",
    };
    var style_2 = {
      "background-color": "#ff0",
      border: "3px dashed #f00",
    };

    $(".txt").prevUntil(".t").css(style_1);
    $(".txt").nextUntil(".t2").css(style_2);
  });
</script>
```

```
<body>
  <h1>어휴</h1>
  <div id="tt">
    <h2 class="t">인접 관계 선택자</h2>
    <p>내용1</p>
    <p>내용2</p>
    <p class="txt">내용2</p>
    <p>내용3</p>
    <p>내용4</p>
    <p class="t2">내용5</p>
  </div>
</body>
```

<br>
<b><span style = "background-color: #46649b">$(".txt").prevUntil(".t")</span></b> = .t('인접 관계 선택자) 다음부터 .txt('내용2') 이전까지의 요소(역방향)
<br><br>

<b><span style = "background-color: #46649b">$(".txt").nextUntil(".t2")</span></b> = .txt('내용2') 다음부터 .t2('내용5') 이전까지의 요소

<br><br> 이처럼 <b>여러 요소를 다중으로 선택</b>해야 할 때는 <b><u>인접 관계 선택자</u></b>를, <b>하나의 개체만 선택</b>해야 한다고 하면 <b><u>직접 선택자</u></b>를 사용하면 된다.
