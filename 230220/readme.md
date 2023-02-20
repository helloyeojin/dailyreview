# Event

<br>

## click, mouseover, mouseout

<br>

<b><예제 1></b>

```
<script>
  $(function () {
    $(".btn1").click(function () {
      $(".btn1").parent().next().css({"color": "#f00"});
    });

    $(".btn2").on({
      "mouseover focus" : function () {
        $(".btn2").parent().next().css({"color": "#0f0"});
      },
      "mouseout blur" : function () {
        $(".btn2").parent().next().css({"color": "#000"});
      }
    })

    $(".btn1").click();
    $(".btn2").trigger("mouseover");
  });
</script>
```

```
<body>
  <p>
    <button class = "btn1">button1</button>
  </p>
  <p>내용1</p>
  <p>
    <button class = "btn2">button2</button>
  </p>
  <p>내용2</p>
</body>
```

<br><br>

<b><ins>NOTE</ins></b>

단독 이벤트 등록 시 =>

```
$(function () {
  $(".btn1").click(function () {
    $(".btn1").parent().next().css({"color": "#f00"});
});
```

<br>

하나의 객체에 대하여 그룹 이벤트를 등록하는 경우 <br>=> <b>".on" 메소드</b> 사용

```
$(".btn2").on({ // .on 메소드를 이용한 그룹 이벤트 등록
  "mouseover focus" : function () {
    $(".btn2").parent().next().css({"color": "#0f0"});
  },
  "mouseout blur" : function () {
    $(".btn2").parent().next().css({"color": "#000"});
  }
})
```

<br>

강제 이벤트 등록 =>

```
$(".btn1").click();
  $(".btn2").trigger("mouseover");
});
```

<br><br><br>

<b><예제 2></b>

```
<script>
  $(function () {
    $(".btn1").click(function () {
      $(".btn1").parent().next().css({"color": "#f00"});
    });

    $(".btn2").on({ // .on 메소드를 이용한 그룹 이벤트 등록
      "mouseover focus" : function () {
        $(".btn2").parent().next().css({"color": "#0f0"});
      },
      "mouseout blur" : function () {
        $(".btn2").parent().next().css({"color": "#00f"});
      }
    })

    // 강제 이벤트(행동하지 않았는데 행동한 것처럼)
    $(".btn1").off("click");
    $(".btn2").off("mouseover focus");
  });
</script>
```
```
<body>
  <p>
    <button class = "btn1">button1</button>
  </p>
  <p>내용1</p>
  <p>
    <button class = "btn2">button2</button>
  </p>
  <p>내용2</p>
</body>
```

<br><br><br>

## ready, load

<br>

```
<script>
  $(function () {
    $(document).ready(function () {
      var h1 = $(".img1").height();
      console.log("ready :", h1); // ready : 값
    });

    $(window).load(function () {
      var h2 = $(".img1").height();
      console.log("ready :", h2); // load : 값
    });
  });
</script>
```
```
<body>
  <p>
    <img src = "https://place-hold.it/300x300" class = "img1"/>button1
  </p>
  <p>내용1</p>
  <p>
    <button class = "btn2">button2</button>
  </p>
  <p>내용2</p>
</body>
```

<br>

* <b>ready</b> = DOM이 완성된 이후에 호출되는 callback 함수
  
  페이지의 DOM만 완성된 상태(로딩 중)에서 무엇을 보여줄 것이냐를 정할수 있음 -> 로드되는 동안 컨텐츠를 윈도우 창에 띄움으로써 고객의 이탈 방지

* <b>onload</b> = img와 같은 다른 요소가 모두 load된 이후에 호출되는 callback 함수

    페이지가 완전히 로드된 이후에 무엇을 보여줄 것이냐를 정할 수 있음

<br><br><br>

## preventDefault

<br>

```
<script>
  $(function(){
    $(".btn1").on("click", function(e){
      e.preventDefault();
      $(".txt1").css({"background-color" : "#ff0"});
    });
    $(".btn2").on("click", function(e){
      e.preventDefault();
      $(".txt2").css({"background-color" : "#0ff"});
    });
    $(".btn3").on("dblclick", function(e){
      e.preventDefault();
      $(".txt3").css({"background-color" : "#0f0"});
    });
  });
</script>
```

```
<body>
  <p>
    <a href = "https://www.naver.com" class = "btn1">button1</a>
  </p>
  <p class = "txt1">text1</p>
  <p>
    <a href = "https://www.naver.com" class = "btn2">button2</a>
  </p>
  <p class = "txt2">text2</p>
  <p>
    <button class = "btn3">내용3</button>
  </p>
  <p class = "txt3">text3</p>
</body>
```

<br>
<br>

## mouseover / mouseout, hover

<br>

```
$(function(){
    $(".btn1").on({
      "mouseover": function(){
        $(".txt1")
        .css({"background-color" : "yellow"});
      },
      "mouseout": function(){
        $(".txt1")
        .css({"background" : "none"});
      }
    });

    $(".btn2").hover(function(){
      $(".txt2").css({"background-color" : "aqua"});
    }, function(){
      $(".txt2").css({"background-color" : "white"});
    });
  });
</script>
```

```
<body>
  <p>
    <button class = "btn1">mouseover / mouseout</button>
  </p>
  <p class = "txt1">text1</p>
  <p>
    <button class = "btn2">hover</button>
  </p>
  <p class = "txt2">text2</p>
</body>
```

<br>
위 코드에서 hover는 마우스오버 / 마우스아웃을 지정하지 않고도 두 가지 효과를 한 번에 줄 수 있다. 보통은 호버를 많이 사용하는 편이나, 이 효과를 한 번만 쓰려고 하는 경우 마우스오버 / 마우스아웃도 사용할 수 있다.

<br><br><br>

## mouseover


<br><br><br>

## 이벤트 해지

<br>

```
<script>
  $(function() {
    $(".btn_1").on("mouseover", function() {
      alert("HELOOO!");
    });
    $(document).on("mouseover", ".btn_2", function() {
      alert("welcome!");
    });

    var btn_2 = $("<p><button class =\"btn_2\">버튼 2</button></p>");
    $("#wrap").append(btn_2);

    $(".del_1").on("click", function() {
      $(".btn_1").off("mouseover");
    });
    $(".del_2").on("click", function() {
      $(document).off("mouseover", ".btn_2");
    });
  });
</script>
```
```
<body>
  <div id = "wrap">
    <p class = "btn_wrap">
      <button class = "btn_1">버튼 1</button>
    </p>
  </div>
  <p>
    <button class = "del_1">버튼 1 이벤트 해지</button>
    <button class = "del_2">버튼 2 이벤트 해지</button>
  </p>
</body>
```

<br><br>

<b><ins>NOTE</ins></b>

```
var btn_2 = $("<p><button class =\"btn_2\">버튼 2</button></p>");
$("#wrap").append(btn_2);
```


원래 html에는 버튼 2가 없지만 위의 var btn_2를 통해 버튼을 생성해주고, 

```
$(document).on("mouseover", ".btn_2", function() {
    alert("welcome!");
  });
```
위의 코드를 통해 버튼 2에 이벤트를 등록해준다.
