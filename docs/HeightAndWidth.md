---
id: height-and-width
title: Высота и ширина
layout: docs
category: Основы
permalink: docs/height-and-width.html
next: flexbox
previous: style
---

Высота и ширина компонента определяют его размер на экране.

#### Фиксированные размеры

Самый простой способ установить размеры компонента это добавить к стилю фиксированные ширину (`width`) и высоту (`height`). Все размеры в React Native представляют собой независимые от разрешения пиксели.

```ReactNativeWebPlayer
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

AppRegistry.registerComponent('AwesomeProject', () => FixedDimensionsBasics);
```

Установка размеров таким способом характерна для компонентов, которые всегда должны отображаться с использованием точных размеров независимо от размеров экрана.

#### Размеры с использованием Flex

Для того чтобы создать компонент, который будет изменять размеры, основываясь на наличии свободного места на экране, используйте в стиле компонента свойство `flex`. Обычно вы будете использовать `flex: 1`, Компонент с таким свойством будет стремиться заполнить все свободное место по ширине экрана, равномерно распределяя компоненты в границах родительского компонента. Чем больше значение `flex`, тем больше пространства компонент займет относительно соседей.

> Компонент сможет занимать всю ширину, заполняя все свободное место, только если у его родителя размер больше 0. Если родительский элемент не будет иметь фиксированной ширины (`width`) и высоты (`height`) или `flex`, то у родителя будут размеры 0, и дочерние элементы `flex` не будут видны.

```ReactNativeWebPlayer
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

class FlexDimensionsBasics extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

AppRegistry.registerComponent('AwesomeProject', () => FlexDimensionsBasics);
```

Теперь вы знаете как контролировать размеры компонента. На следующем шаге вы [узнаете как расположить компонент на экране](/react-native/docs/flexbox.html).
