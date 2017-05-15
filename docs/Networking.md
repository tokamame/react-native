---
id: network
title: Сетевые данные
layout: docs
category: Основы
permalink: docs/network.html
next: using-navigators
previous: using-a-listview
---

Многие мобильные приложения загружают ресурсы с удаленных URL. Вам может понадобиться сделать POST-запрос к REST API, или вы, возможно, просто хотите получить блок статического контента с другого сервера.

## Использование Fetch

React Native предоставляет для подобных потребностей [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). Fetch покажется более знакомым, если вы прежде использовали `XMLHttpRequest` или другие сетевые API. Для дополнительной информации вы можете обратиться к руководству MDN по [использованию Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

#### Создание запросов

Чтобы получить контент с определенного URL, просто укажите адрес, с которого вы хотите получить данные:

```js
fetch('https://mywebsite.com/mydata.json')
```

Fetch также получает второй дополнительный параметр, который позволяет настроить HTTP-запрос. Можно указать дополнительные заголовки или произвести POST-запрос:

```js
fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  })
})
```

Для полного списка свойств обратитесь к [документации по Fetch Request](https://developer.mozilla.org/en-US/docs/Web/API/Request).

#### Обработка ответа сервера

Вышеуказанные примеры показывают как создать запрос. Во многих случаях вам потребуется сделать что-то с ответом.

Работа с сетевыми данными по сути асинхронная операция. Методы Fetch возвратят [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), который позволяет непосредственно создавать код, работающий асинхронно:

  ```js
  function getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  ```

Также в приложении React Native можно использовать синтаксис ES7 `async`/`await`:

  ```js
  async function getMoviesFromApi() {
    try {
      let response = await fetch('https://facebook.github.io/react-native/movies.json');
      let responseJson = await response.json();
      return responseJson.movies;
    } catch(error) {
      console.error(error);
    }
  }
  ```

Не забывайте фиксировать любые ошибки, которые могут быть выданы `fetch`, иначе они будут тихо отброшены.

> По умолчанию iOS будет блокировать любой запрос, не использующий SSL. Если вам нужно получить данные с ресурса с использованием HTTP, вам сначала потребуется добавить исключение App Transport Security. Если вам заранее известно, к каким доменам вам необходим доступ, более безопасным будет добавить в список исключений только эти домены. Если домены заранее не известны, вы можете [полностью отключить ATS](/react-native/docs/integration-with-existing-apps.html#app-transport-security). Обратитесь к [документации Apple](https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW33) для полного описания.

### Использование других библиотек

В React Native встроен [XMLHttpRequest API](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) Это означает что можно пользоваться сторонними библиотеками, такими как [frisbee](https://github.com/niftylettuce/frisbee) или [axios](https://github.com/mzabriskie/axios), которые зависят от XMLHttpRequest API, или, если вам удобнее, можно использовать непосредственно XMLHttpRequest API.

```js
var request = new XMLHttpRequest();
request.onreadystatechange = (e) => {
  if (request.readyState !== 4) {
    return;
  }

  if (request.status === 200) {
    console.log('success', request.responseText);
  } else {
    console.warn('error');
  }
};

request.open('GET', 'https://mywebsite.com/endpoint/');
request.send();
```

> Модель обеспечения безопасности для XMLHttpRequest отличается от используемой для web, поскольку в нативных приложениях остутствует концепция [CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing).

## Поддержка WebSocket

React Native предоставляет поддержку [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket), протокола, который обеспечивает полнодуплексные коммуникационные каналы по отдельному TCP-соединению

```js
var ws = new WebSocket('ws://host.com/path');

ws.onopen = () => {
  // connection opened

  ws.send('something'); // send a message
};

ws.onmessage = (e) => {
  // a message was received
  console.log(e.data);
};

ws.onerror = (e) => {
  // an error occurred
  console.log(e.message);
};

ws.onclose = (e) => {
  // connection closed
  console.log(e.code, e.reason);
};
```

Теперь ваше мобильное приложение может выводить на экран любые данные, и вам, вероятно, скоро понадобится организовать этот контент в виде нескольких экранов. Чтобы управлять переходами между этими экранами, нужно узнать о [навигаторах](/react-native/docs/using-navigators.html).
