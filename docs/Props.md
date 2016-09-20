---
id: props
title: Свойства
layout: docs
category: Основы
permalink: docs/props.html
next: state
previous: tutorial
---

Большинство компонентов может быть настроено при создании с помощью различных параметров. Эти параметры создания
называют свойствами (`props`).

Например, один из основных компонентов React Native - `Image`. Когда вы создаете изображение, можно использовать
свойство `source` для указания изображения, которое должен показывать компонент.

```ReactNativeWebPlayer
import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

AppRegistry.registerComponent('Bananas', () => Bananas);
```

Обратите внимание что для того чтобы встроить переменную `pic` в JSX, `{pic}` заключается в фигурные скобки. В JSX в
фигурных скобках можно разместить любое выражение JavaScript.

Создаваемые вами компоненты также могут использовать `props`. Эта особенность позволяет создать единственный компонент,
который можно использовать в разных местах в вашем приложении, лишь изменив его свойства. Просто используйте
`this.props` в функции `render` вашего компонента. Например:

```ReactNativeWebPlayer
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}

AppRegistry.registerComponent('LotsOfGreetings', () => LotsOfGreetings);
```

Использование `name` как свойства позволяет нам настроить компонент `Greeting` таким образом, что мы можем снова
использовать компонент для разных поздравлений. Этот пример использует компонент `Greeting` в JSX точно так же как
встроенные компоненты. Такая возможность делает React настолько крутым. Если вам потребуется другой набор
примитивов UI, просто создайте новые.

Другим нововведением является компонент [`View`](/react-native/docs/view.html). [`View`](/react-native/docs/view.html)
используется как контейнер для других компонентов чтобы управлять их стилями и расположением.

Используя свойства (`props`) и основные компоненты, такие как [`Text`](/react-native/docs/text.html),
[`Image`](/react-native/docs/image.html) и [`View`](/react-native/docs/view.html) можно создать большое разнообразие
статических экранов. Чтобы узнать как производить изменения в вашем приложении, нужно
[узнать про State](/react-native/docs/state.html).
