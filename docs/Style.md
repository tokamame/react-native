---
id: style
title: Стили
layout: docs
category: Основы
permalink: docs/style.html
next: height-and-width
previous: state
---

При работе с React Native, для того чтобы определить стили, не нужно использовать специальный язык или синтаксис. Вы просто разрабатываете свое приложение, используя JavaScript. Все базовые компоненты имеют свойство под названием Стиль (`style`). Названия и значения стилей обычно соответствуют стилям CSS, за исключением ключей, которые в CSS пишутся через дефис, например, `backgroundColor` вместо `background-color`.

Свойство `style` обычно представляет собой объект JavaScript. В уроке мы используем их в таком виде в образцах кода для простоты. Однако можно передать и массив стилей. В этом случае последний стиль в массиве имеет приоритет, и таким образом можно использовать эту особенность для создания наследования стилей.

Поскольку сложность компонентов обычно увеличивается, часто для указания нескольких стилей в одном месте, более чистым решением является использование `StyleSheet.create`. Например:

```ReactNativeWebPlayer
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

AppRegistry.registerComponent('LotsOfStyles', () => LotsOfStyles);
```

Один общий паттерн, это назначение вашему компоненту свойства style, которое, в свою очередь, может быть использовано при разработке субкомпонентов. Эту особенность можно использовать для того чтобы сделать стили "каскадируемыми", как это реализовано в CSS.

Есть немало других способов настроить стиль текста. Их полный список вы можете найти в [руководстве по компоненту Text](/react-native/docs/text.html).

Теперь вы знаете как украсить свой текст. Следующий шаг будущего мастера стилей это узнать [как управлять размерами компонента](/react-native/docs/height-and-width.html).
