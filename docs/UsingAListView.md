---
id: using-a-listview
title: Использование ListView
layout: docs
category: Основы
permalink: docs/using-a-listview.html
next: network
previous: using-a-scrollview
---

Компонент `ListView` выводит на экран список изменяемых, но подобным образом структурированных данных с возможностью вертикальной прокруткой.

`ListView` лучше всего подходит для отображения длинных списков данных, в которых количество элементов может со временем измениться. В отличие от более универсального [`ScrollView`](/react-native/docs/using-a-scrollview.html), `ListView` отрисовывает только те элементы, которые в настоящий момент видны на экране, а не все сразу.

Компоненту `ListView` требуются два свойства: `dataSource` и `renderRow`. `dataSource` представляет собой источник данных для списка. `renderRow` получает из источника один элемент и возвращает отформатированный компонент для отображения на экране устройства.

Образец кода, приведенный ниже, создает простой `ListView` из указанных в коде данных. Сначала он инициализирует `dataSource` который будет использоваться для заполнения `ListView`. Каждый элемент в `dataSource` затем отображается как компонент `Text`. После этого отображается `ListView` и все компоненты `Text`.

> Для использования `ListView` необходимо наличие функции `rowHasChanged`. Здесь мы допускаем что строка изменилась, если текущая строка, на которой мы находимся, не является такой же как предыдущая строка.

```ReactNativeWebPlayer
import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View } from 'react-native';

class ListViewBasics extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }
  render() {
    return (
      <View style={{paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

// App registration and rendering
AppRegistry.registerComponent('ListViewBasics', () => ListViewBasics);
```

Один из наиболее частых способов использования `ListView` это вывод на экран данных, полученных от сервера. Чтобы получить их, вам нужно [узнать про работу с сетевыми данными в React Native](/react-native/docs/network.html).
