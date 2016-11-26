---
id: using-a-scrollview
title: Использование ScrollView
layout: docs
category: Основы
permalink: docs/using-a-scrollview.html
next: using-a-listview
previous: handling-text-input
---

[`ScrollView`](/react-native/docs/scrollview.html) это универсальный контейнер с возможностью прокрутки, который может содержать в себе различные компоненты и представления. Элементы со скроллом не обязательно должны быть однородными, а представление можно прокрутить вертикально и горизонтально (указав свойство `horizontal`).

Данный пример создает вертикальный `ScrollView` с использованием изображений и текста.

```ReactNativeWebPlayer
import React, { Component } from 'react';
import{ AppRegistry, ScrollView, Image, Text, View } from 'react-native'

class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
      return(
        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:96}}>What's the best</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
    );
  }
}


AppRegistry.registerComponent(
  'IScrolledDownAndWhatHappenedNextShockedMe',
  () => IScrolledDownAndWhatHappenedNextShockedMe);
```

`ScrollView` в первую очередь предназначен для того чтобы отобразить небольшое количество элементов, имеющих конечный размер. Все элементы и представления `ScrollView` отрисовываются даже если не видны в настоящий момент на экране устройства. Если у вас есть относительно длинный список элементов, которые могут уместиться на экране, то вместо компонента `ScrollView` следует использовать `ListView`. Так что давайте теперь [узнаем что представляет собой ListView](/react-native/docs/using-a-listview.html).
