---
id: state
title: Состояние
layout: docs
category: Основы
permalink: docs/state.html
next: style
previous: props
---

Существуют два типа данных, управляющих компонентом: свойства `props` и состояние `state`. `props` устанавливаются родительским компонентом и явлются неизменными в течение всего жизненного цикла компонента. Для данных, которые могут меняться с течением времени, нужно использовать `state`.

Вообще, следует инициализировать `state` в конструкторе, а затем вызывать `setState` когда вам нужно его изменить.

Например, предположим, что мы хотим создать мигающий текст. Сам текст указывается лишь однажды, во время создания компонента. Таким образом, сам текст является `prop`. Свойство текста "включен или выключен" со временем изменится, поэтому мы сохраняем его в `state`.

```ReactNativeWebPlayer
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}

AppRegistry.registerComponent('BlinkApp', () => BlinkApp);
```

В реальном приложении вы, вероятно, не будете устанавливать состояние, используя таймер. Вероятнее вы будете менять состояние тогда, когда у вас есть новые данные, полученные с сервера или из ввода данных пользователем. Для управления потоком данных можно также использовать контейнер состояния, такой как [Redux](http://redux.js.org/index.html). В этом случае вместо непосредственного вызова `setState` для изменения состояния вы будете использовать Redux.

Состояние работает так же как в React. Поэтому чтобы узнать подробности обработки состояния, вам может понадобиться изучить [React.Component API](https://facebook.github.io/react/docs/component-api.html).

К этому моменту вам наверное немного наскучило что большинство наших примеров используют обычный черный текст, каким он является по умолчанию. Поэтому чтобы сделать ваше первое приложение более красивыми, необходимо [узнать о стиле](/react-native/docs/style.html).
