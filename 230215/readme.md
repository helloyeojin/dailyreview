# JS 속성값 추가, 변경, 삭제 etc.

클래스를 add하거나 delete할 수 있음<br>
add + delete 사용 시 토글되는 형태로 스타일 추가 가능

<br>

## add

스타일이나 속성값을 추가해줄 때
<br><br>
<예제 1>

```
<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ClassList</title>
    <style>
      .red-color {
        color: red;
      }

      .fs20 {
        font-size: 20px;
      }
    </style>

  </head>
  <body>
    <p id="text">text</p>
    <script>
      const pE1 = document.querySelector("#text");
      // 노드 선택
      pE1.classList.add("red-color", "fs20");
    </script>
  </body>
</html>
```

<br>
위 예제를 보면 text라는 id를 선택해와서 스타일 태그 안에 미리 정의되어 있는 "red-color", "fs20"이라는 스타일을 추가해주었음
<br><br><br><br>

## attribute

기존 속성값을 변경하거나 속성값을 추가할 때
<br><br>
<예제 1>

```
<script>

  const aE1 = document.querySelector("a");
  // 노드 선택

  const href = aE1.getAttribute("href");

  aE1.getAttribute("href", "https://www.daum.net");
  aE1.innerText = "DAUM";
  aE1.setAttribute("target", "_blank");
  // target 속성값을 _blank로 지정

</script>
```

<br><br>
<예제 2>

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Attribute2</title>
    <style>
      .red-color {
        color: red;
      }
    </style>
  </head>
  <body>
    <a href="https://www.naver.com" data-link="네이버">NAVER</a>
    <script>
      const aE1 = document.querySelector("a");
      // 선택
      aE1.setAttribute("data-link", "다음");
      aE1.setAttribute("class", "red-color");
      // class - red
    </script>
  </body>
</html>
```

<br><br>
<예제 3>

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Attribute3</title>
    <style>
      .red-color {
        color: red;
      }
    </style>
  </head>
  <body>
    <a href="https://www.naver.com" class="red-color">NAVER</a>

    <script>
      const aE1 = document.querySelector("a");
      // 선택
      aE1.removeAttribute("class");
    </script>
  </body>
</html>
```

<br><br><br><br>
classList는 추가의 개념
attribute는 초기화의 개념

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Attribute3</title>
    <style>
      .red-color {
        color: red;
      }
      .fs40 {
        font-size: 60px;
      }
    </style>
  </head>
  <body>
    <a href="https://www.naver.com" class="fs40">NAVER</a>

    <script>
      const aE1 = document.querySelector("a");
      // 선택
      aE1.classList.add("red-color");
      // 클래스 속성 추가
      aE1.setAttribute("class", "red-color");
      // 클래스 속성 초기화
    </script>
  </body>
</html>
```

<br><br><br><br>

# DOM
