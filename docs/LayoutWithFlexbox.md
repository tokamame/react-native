---
id: flexbox
title: Разметка Flexbox
layout: docs
category: Основы
permalink: docs/flexbox.html
next: handling-text-input
previous: height-and-width
---

Компонент позволяет указать разметку своих дочерних элементов, используя алгоритм . Flexbox разработан для того чтобы обеспечить непротиворечивую разметку для различных размеров экрана.

В основном для создания правильной разметки страницы вы будете использовать комбинацию `flexDirection`, `alignItems`, и `justifyContent`.

> Flexbox в React Native работает согласно тем же принципам что и CSS на веб-страницах, но с некоторыми исключениями. При использовании `flexDirection` применяются другие значения по умолчанию. Так, вместо строки `row` используется колонка `column`; значением по умолчанию для `alignItems` вместо `flex-start` является `stretch`, а параметр `flex` поддерживает только целые числа.

#### Направление Flex

Использование `flexDirection` в стиле (`style`) компонента определяет основную ось (**primary axis**) его разметки. Как должны быть расположены дочерние элементы? Горизонтально (`row`) или вертикально (`column`)? Значение по умолчанию - `column`.

```ReactNativeWebPlayer
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

class FlexDirectionBasics extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

AppRegistry.registerComponent('AwesomeProject', () => FlexDirectionBasics);
```

#### Распределение элементов

Указание `justifyContent` в стиле компонента определяет распределение (**distribution**) дочерних элементов вдоль главной оси (**primary axis**). Как должны быть распределены дочерние элементы? В начале, центре, конце или расположены через равномерные интервалы? Возможные варианты: `flex-start`, `center`, `flex-end`, `space-around`, и `space-between`.

```ReactNativeWebPlayer
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

class JustifyContentBasics extends Component {
  render() {
    return (
      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

AppRegistry.registerComponent('AwesomeProject', () => JustifyContentBasics);
```

#### Выравнивание элементов

Указание `alignItems` в стиле компонента определяет выравнивание (**alignment**) дочерних элементов вдоль вторичной оси (**secondary axis**) (если главная ось - строка  `row`, то вторичная - колонка `column`, и наоборот). Дочерние элементы должны быть выравнены по левой стороне, центру, правой стороне, или распределены для заполнения всего свободного пространства? Доступные параметры: `flex-start`, `center`, `flex-end`, и `stretch`.

> Чтобы использовать `stretch`, у дочерних элементов не должно быть фиксированного размера вдоль вторичной оси. Например, `alignItems: stretch` не применяется, пока для дочерних элементов используется свойство `width: 50`.

```ReactNativeWebPlayer
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

class AlignItemsBasics extends Component {
  render() {
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

AppRegistry.registerComponent('AwesomeProject', () => AlignItemsBasics);
```

#### Подробнее

Мы изучили основы работы со стилями, но есть много других стилей, которые вероятно понадобятся вам для разметки. Полный список свойств, управляющих разметкой компонентов вы можете найти [на этой странице](/react-native/docs/layout-props.html).

Мы вплотную подошли к тому чтобы создать первое рабочее приложение. Одна важная деталь, которую мы еще не изучили, это способ получать введенные пользователем данные, так что давайте двигаться дальше чтобы узнать [как обработать ввод текста с помощью компонента TextInput.](/react-native/docs/handling-text-input.html).
