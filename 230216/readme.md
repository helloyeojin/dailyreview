# Event handlers

<br>

## onclick event

```
<body>
  <button onclick="clickEvent()">click</button>
  <script>
    function clickEvent() {
      alert("click");
    }
  </script>
</body>
```

<br><br>

## onfocus, onblur event

```
<body>
  <form>
    <input type="text" onfocus="focustEvent()" onblur="blurEvent()" />
  </form>
  <script>
    function focustEvent() {
      console.log("focust on");
    }
    function blurEvent() {
      console.log("focust out");
    }
  </script>
</body>
```

<br><br>

## property listeners

```
<body>
  <button>click</button>

  <script>
    const btnE1 = document.querySelector("button");
    btnE1.onclick = function () {
      alert("click");
    };
  </script>
</body>
```

<br>
스크립트 내부의 내용은 아래와 같이 작성할 수도 있다.
<br>

```
btnE1.onclick = () => {
  alert("click");
}
```

```
btnE1.onclick = clickEvent;
  function clickEvent() {
    alert("clcik");
}
```

<br><br>

## addeventListener

<예제 1>

```
<body>
  <button>click</button>

  <script>
    const btnE1 = document.querySelector('button');
    btnE1.addEventListener('click', function() {
      // <노드>.addEventListener('이벤트 타입', 이벤트 함수)
      // On 제거
      alert('button click');
    });
  </script>
</body>
```

<br>
<예제 2>

```
<body>
  <button>click</button>

  <script>
    const btnE1 = document.querySelector("button");
    /* btnE1.addEventListener("click", function() {
    //<노드>.addEventListener("이벤트 타입", 이벤트 함수) // on 제거
    alert("button clicked");
  }); */

    const clickEvent = () => {
      alert("button clicked");
    };
    btnE1.addEventListener("click", clickEvent);
  </script>
</body>
```

<br><br>

## Event Object

- click

```
<body>
  <button>click</button>

  <script>
    const btnE1 = document.querySelector("button");
    btnE1.addEventListener("click", function (event) {
      // 내부적으로 이벤트 객체를 매개변수로 전달
      console.log(event);
      console.log("clientX:${event.clientX}");
      console.log("clientY:${event.clientY}");
      console.log("pageX:${event.pageX}");
      console.log("pageY:${event.pageY}");
      console.log("screenX:${event.screenX}");
      console.log("screenY:${event.screenY}");
    });
  </script>
</body>
```

위의 코드를 통해 사용자가 윈도우 창의 어느 지점을 클릭했는가에 대한 정보를 받아볼 수 있다.
<br><br>

- keyboard

```
<body>
  <form>
    <input type="text" />
  </form>

  <script>
    const inputEl = document.querySelector("input");
    inputEl.addEventListener("keydown", function (event) {
      // 내부적으로 이벤트 객체를 매개변수로 전달
      // keydown은 키를 눌렀을 때
      console.log(event);
      console.log(`keyCode:${event.keyCode}`);
      console.log(`ctrlKey:${event.ctrlKey}`);
      console.log(`altKey:${event.altKey}`);
      console.log(`shiftKey:${event.shiftKey}`);
    });
  </script>
</body>
```

위의 코드는 사용자가 입력창에서 어떤 키를 눌렀는가에 대한 정보를 받아볼 수 있게 해준다.

<br><br>

## this

```
<body>
  <p>text-1</p>
  <p>text-2</p>
  <p>text-3</p>

  <script>
    const pEl = document.querySelectorAll("p");
    pEl.forEach((el) => {
      el.addEventListener("click", function () {
        console.log(this);

        if (this.style.color === "red") {
          this.style.color = "black";
        } else {
          this.style.color = "red";
        }
      });
    });
  </script>
</body>
```

위의 코드에서 this는 사용자가 클릭했을 때, 클릭된 "그" 요소에 이벤트를 추가하게끔 해준다.
