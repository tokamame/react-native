---
id: integration-with-existing-apps
title: Интеграция с приложениями
layout: docs
category: Руководства
permalink: docs/integration-with-existing-apps.html
next: colors
previous: more-resources
---

<div class="integration-toggler">
<style>
.integration-toggler a {
  display: inline-block;
  padding: 10px 5px;
  margin: 2px;
  border: 1px solid #05A5D1;
  border-radius: 3px;
  text-decoration: none !important;
}
.display-platform-objc .integration-toggler .button-objc,
.display-platform-swift .integration-toggler .button-swift,
.display-platform-android .integration-toggler .button-android {
  background-color: #05A5D1;
  color: white;
}
block { display: none; }
.display-platform-objc .objc,
.display-platform-swift .swift,
.display-platform-android .android {
  display: block;
}</style>
<span>Platform:</span>
<a href="javascript:void(0);" class="button-objc" onclick="display('platform', 'objc')">Objective-C</a>
<a href="javascript:void(0);" class="button-swift" onclick="display('platform', 'swift')">Swift</a>
<a href="javascript:void(0);" class="button-android" onclick="display('platform', 'android')">Android</a>
</div>

<block class="android" />

> Этот раздел будет вскоре обновлен чтобы показать интеграцию более приближенного к реальному приложения, такого как мобильное приложение 2048, которое использовалось для Objective-C и Swift.

<block class="objc swift android" />

## Ключевые понятия

React Native отлично поддходит для разработки новых мобильных приложений с нуля. Однако он также хорошо подходит для добавление нового представления или user flow к существующим нативным приложениям. За несколько шагов можно добавить новый функционал, разработанный на React Native, а также экраны, представления и т.д.

<block class="objc swift" />

Основные шаги для интеграции компонентов React Native в ваше приложение iOS:

1. Определитесь какие компоненты React Native вы хотите интегрировать.
2. Создайте `Podfile`, содержащий `subspec` для всех компонентов React Native, которые потребуются вам для интеграции.
3. Создайте свои компоненты React Native на JavaScript.
4. Добавьте новый обработчик событий, который создаст `RCTRootView`, который указывает на ваш компонент React Native и его имя `AppRegistry`, которое вы указали в `index.ios.js`.
5. Запустите сервер React Native и ваше нативное приложение.
6. Если нужно, добавьте другие компоненты React Native.
7. Исправьте все недочёты с помощью [отладки](/react-native/releases/next/docs/debugging.html).
8. Подготовьте [деплой](/react-native/docs/running-on-device-ios.html) (например с помощью скрипта `react-native-xcode.sh`).
9. Зарабатывайте!

<block class="android" />

Основные шаги для интеграции компонентов React Native в ваше приложение Android:

1. Определитесь какие компоненты React Native вы хотите интегрировать.
2. Установите `react-native` в корневой каталог вашего приложения Android. Вы увидите каталог `node_modules/`.
3. Создайте свои компоненты React Native на JavaScript.
4. Добавьте `com.facebook.react:react-native:+` и `maven` в ваш файл `build.gradle` с указанием на двоичные файлы `react-native`, расположенные в директории `node_nodules/`.
4. Создайте свою `Activity`, которая создает `ReactRootView`.
5. Запустите сервер React Native и ваше нативное приложение.
6. Если нужно, добавьте другие компоненты React Native.
7. Исправьте все недочёты с помощью [отладки](/react-native/releases/next/docs/debugging.html).
8. [Подготовьте](/react-native/releases/next/docs/signed-apk-android.html) [деплой](/react-native/docs/running-on-device-android.html).
9. Зарабатывайте!

<block class="objc swift android" />

## Зависимости

<block class="android" />

Выполнив примеры из урока [Как начать с Android](/react-native/docs/getting-started.html) , вы установите соответствующие зависимости (например, `npm`) для React Native, платформы Android и вашей излюбленной среды разработки.

<block class="objc swift" />

### Основные

В качестве первого шага изучите руководство [Знакомство с React Native](/react-native/docs/getting-started.html) для вашей среды разработки и целевой платформы iOS, чтобы установить необходимые для React Native зависимости.

### CocoaPods

[CocoaPods](http://cocoapods.org) - менеджер пакетов для разработки на Mac и iOS. Он используется чтобы добавить актуальный код платформы React Native в ваш проект.

```bash
$ sudo gem install cocoapods
```

> Технически, можно не использовать CocoaPods, но при этом вам потребуется устаноить библиотеки и дополнения компоновщика вручную, что чрезмерно усложнит этот процесс.

## Демонстрационное мобильное приложение

<block class="objc" />

Предположим что [мобильное приложение для интеграции](https://github.com/JoelMarcey/iOS-2048) это игра [2048](https://en.wikipedia.org/wiki/2048_(video_game)). Вот так выглядит главное меню нативного приложения без использования React Native.

<block class="swift" />

Предположим что [мобильное приложение для интеграции](https://github.com/JoelMarcey/swift-2048) это игра [2048](https://en.wikipedia.org/wiki/2048_(video_game). Вот так выглядит главное меню нативного приложения без использования React Native.

<block class="objc swift" />

![До интеграции RN](img/react-native-existing-app-integration-ios-before.png)

## Зависимости

Для интеграция с React Native требуются React и модули nodejs React Native. Платформа React Native предоставит код, с помощью которого осуществляется интеграции вашего приложения.


### `package.json`

В файл `package.json` мы добавим зависимости пакета. Создайте этот файл в корневой директории вашего проекта если его там еще нет.

> Обычно при работе с проектами React Native вы разместите такие файлы как `package.json`, `index.ios.js` и т.д. в корневом каталоге вашего проекта, а затем расположите нативный код iOS в подкаталоге `ios/` в папке проекта Xcode (например, `.xcodeproj`).

Ниже указан пример пример файла `package.json`, содержащего минимальную конфигурацию.

> Номера версий могут менятся в зависимости от ваших потребностей. Но в большинстве случаев будет достаточно последних версий [React](https://github.com/facebook/react/releases) и [React Native](https://github.com/facebook/react/releases).

<block class="objc" />

```bash
{
  "name": "NumberTileGame",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start"
  },
  "dependencies": {
    "react": "15.0.2",
    "react-native": "0.26.1"
  }
}
```

<block class="swift" />

```bash
{
  "name": "swift-2048",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start"
  },
  "dependencies": {
    "react": "15.0.2",
    "react-native": "0.26.1"
  }
}
```

<block class="objc swift" />

### Установка пакетов

Установите React и модули React Native с помощью менеджера пакетов Node. Модули Node будут установлены в каталог `node_modules/` в корневой директории вашего проекта.

```bash
# From the directory containing package.json project, install the modules
# The modules will be installed in node_modules/
$ npm install
```

## Платформа React Native

Вы [уже установили](#package-dependencies) платформу React Native в виде модуля Node в вашем проекте. Теперь мы установим CocoaPods `Podfile` с дополнительными компонентами.

### Subspecs

Перед тем как интегрировать React Native в свое приложение, определитесь какие компоненты платформы React Native потребуются для вашего проекта. На этом этапе появляются `subspec`. При создании `Podfile`, вы указываете зависимости библиотек React Native, которые установите для того чтобы ваше приложение могло пользоваться ими. Каждая библиотека указывается в `Podfile` как `subspec`.


Список поддерживаемых `subspec` находится в файле [`node_modules/react-native/React.podspec`](https://github.com/facebook/react-native/blob/master/React.podspec). Они обычно называются соответственно функциональности. Например, вам всегда понадобится `subspec` `Core`. Она предоставит вам `AppRegistry`, `StyleSheet`, `View` и другие базовые библиотеки React Native. Если вы захотите добавить библиотеку `Text` (например, для элементов `<Text>`), то вам потребуется `subspec` `RCTText`. Если вы захотите добавить библиотеку `Image` (например, для элементов `<Image>`), то вам потребуется `subspec` `RCTImage`.

#### Podfile

После того как вы установили React и компоненты React Native в директорию `node_modules` с помощью Node и выбрали, какие элементы React Native вам требуется интегрировать, можете создать свой `Podfile` чтобы установить эти компоненты для использования в вашем приложении.

Проще всего создать `Podfile` это использовать команду `init` CocoaPods в каталоге нативного кода iOS в вашем проекте:

```bash
## В директории, где расположен ваш нативный код iOS (например, где находится файл `.xcodeproj`)
$ pod init
```

`Podfile` будет создан и расположится в каталоге *iOS* (например, `ios/`) вашего проекта и будет содержать базовую установку, которую можно настроить под ваши конктретные нужды. В итоге `Podfile` должен выглядеть как-то так:

<block class="objc" />

```
# Target это скорее всего это название вашего проекта.
target 'NumberTileGame' do

  # Директория 'node_modules' вероятно расположена в корневой папке вашего проекта,
  # но если она находится не там, измените `:path` соответственно
  pod 'React', :path => '../node_modules/react-native', :subspecs => [
    'Core',
    'RCTText',
    'RCTWebSocket', # нужно для отладки
    # Добавьте любые другие subspec, которые вы  хотите использованть в своем проекте
  ]

end
```

<block class="swift" />

```
source 'https://github.com/CocoaPods/Specs.git'

# Требуется для приложений Swift
platform :ios, '8.0'
use_frameworks!

# Target это скорее всего это название вашего проекта.
target 'swift-2048' do

  # Директория 'node_modules' вероятно расположена в корневой папке вашего проекта,
  # но если она находится не там, измените `:path` соответственно
  pod 'React', :path => '../node_modules/react-native', :subspecs => [
    'Core',
    'RCTText',
    'RCTWebSocket', # needed for debugging
    # Добавьте любые другие subspec, которые вы  хотите использованть в своем проекте
  ]

end
```

<block class="objc swift" />

#### Установка Pod

После того, как вы создали `Podfile`, вы можете установить pod React Native.

```bash
$ pod install
```

Вы должны увидеть такой вывод:

```bash
Analyzing dependencies
Fetching podspec for `React` from `../node_modules/react-native`
Downloading dependencies
Installing React (0.26.0)
Generating Pods project
Integrating client project
Sending stats
Pod installation complete! There are 3 dependencies from the Podfile and 1 total pod installed.
```

<block class="swift" />

> Если вы видите предупреждение "*The `swift-2048 [Debug]` target overrides the `FRAMEWORK_SEARCH_PATHS` build setting defined in `Pods/Target Support Files/Pods-swift-2048/Pods-swift-2048.debug.xcconfig`. This can lead to problems with the CocoaPods installation*", убедитесь что настройка `Framework Search Paths` в меню `Build Settings` для режимов `Debug` и `Release` содержит только `$(inherited)`.

<block class="objc swift" />

## Интеграция кода

Теперь, когда у нас есть основа пакета, мы изменим нативное приложение чтобы интегрировать React Native в приложение. Для нашего мобильного приложения 2048 мы добавим экран "High Score" с помощью React Native.

### Компонент React Native

Первые строки кода, которые мы напишем, являются реальным кодом React Native для нового экрана "High Score",который будет интегрирован в наше приложение.

#### Создайте файл `index.ios.js`

Сначала создайте пустой файл `index.ios.js`. Для простоты мы создаем этот файл в корнвой директории проекта.

> `index.ios.js` отправная точка для приложений React Native на iOS. Он требуется всегда. Это может быть небольшой файл, который `require` другие файлы, являющиеся частью вашего компонента React Native или приложения, или он может содержать весь код, который необходим вашему приложению. В нашем случае мы просто поместим весь код в файл `index.ios.js`

```bash
# В корневой директории вашего проекта
$ touch index.ios.js
```

#### Добавьте свой код React Native

Создайте свой компонент в файле `index.ios.js`. В нашем образце мы добавим простой компонент `<Text>` в стилизованный компонент `<View>`

```js
'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class RNHighScores extends React.Component {
  render() {
    var contents = this.props["scores"].map(
      score => <Text key={score.name}>{score.name}:{score.value}{"\n"}</Text>
    );
    return (
      <View style={styles.container}>
        <Text style={styles.highScoresTitle}>
          2048 High Scores!
        </Text>
        <Text style={styles.scores}>
          {contents}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  highScoresTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  scores: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// Module name
AppRegistry.registerComponent('RNHighScores', () => RNHighScores);
```

> `RNHighScores` это название вашего модуля, которое будет использоваться для добавления представления в React Native из вашего приложения iOS.

## Магия: `RCTRootView`

Теперь, когда ваш компонент React Native создан в `index.ios.js`, нужно присоединить компонент к новому или существующему `ViewController`. Проще всего это сделать - создать дополнительный создать путь события к вашему компоненту и затем добавить этот компонент к существующему `ViewController`.

Мы свяжем наш компонент React Native с новым нативным представлением во `ViewController` который фактически будет содержать его, вызывая `RCTRootView` .

### Создайте путь событи

В главное меню игры можно добавить новую ссылку для перехода на страницу "High Score", созданную с помощью React Native.

![Путь события](img/react-native-add-react-native-integration-link.png)

#### Обработчик события

Теперь мы добавим обработчик события к ссылке меню. Для этого к основному `ViewController` вашего приложения будет добавлен новый метод. Здесь главную роль играет `RCTRootView`.

Когда вы создаете приложение React Native, вы используете упаковщик React Native чтобы создать файл `index.ios.bundle`, который будет обслуживаться сервером React Native. Внутри `index.ios.bundle` будет расположен наш модуль `RNHighScore`. Таким образом, мы должны направить наш `RCTRootView` на расположение ресурса `index.ios.bundle` (через `NSURL`) и связать его с модулем.

Для упрощения отладки мобильного приложения, зарегистрируем тот факт что обработчик событий был вызван. Затем мы создадим строку с указанием расположения нашего кода React Native, который назодится в `index.ios.bundle`. Наконец, мы создадим основной `RCTRootView`. Обратите внимание на то как мы указываем `RNHighScores` как `moduleName` который мы создали [ранее](#the-react-native-component) при написании кода нашего компонента React Native.

<block class="objc" />

Сначала произведите `import` библиотеки `RCTRootView`.

```
#import "RCTRootView.h"
```

> `initialProperties` указаны здесь в иллюстративных целях для того чтобы у нас были некоторые данные для нашего представления "High Scores". Чтобы получить доступ к этим данным в нашем компоненте React Native, мы будем использовать `this.props`.

```
- (IBAction)highScoreButtonPressed:(id)sender {
    NSLog(@"High Score Button Pressed");
    NSURL *jsCodeLocation = [NSURL
                             URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios"];
    RCTRootView *rootView =
      [[RCTRootView alloc] initWithBundleURL : jsCodeLocation
                           moduleName        : @"RNHighScores"
                           initialProperties :
                             @{
                               @"scores" : @[
                                 @{
                                   @"name" : @"Alex",
                                   @"value": @"42"
                                  },
                                 @{
                                   @"name" : @"Joel",
                                   @"value": @"10"
                                 }
                               ]
                             }
                           launchOptions    : nil];
    UIViewController *vc = [[UIViewController alloc] init];
    vc.view = rootView;
    [self presentViewController:vc animated:YES completion:nil];
}
```

> Обратите внимание что `RCTRootView initWithURL` запускает новую JSC VM. Чтобы оптимизировать использование ресурсов и упростить коммуникацию между представлениями React Native в различных частях вашего нативного мобильного приложения, вы можете использовать различные представления React Native, которые связаны с отдельной средой выполнения JS. Чтобы сделать это, используйте [`RCTBridge initWithBundleURL`](https://github.com/facebook/react-native/blob/master/React/Base/RCTBridge.h#L93) вместо `[RCTRootView alloc] initWithURL` чтобы создать мост, а затем используйте `RCTRootView initWithBridge`.

<block class="swift" />

First `import` the `React` library.

```
import React
```

> `initialProperties`указаны здесь в иллюстративных целях для того чтобы у нас были некоторые данные для нашего представления "High Scores". Чтобы получить доступ к этим данным в нашем компоненте React Native, мы будем использовать`this.props`.

```
@IBAction func highScoreButtonTapped(sender : UIButton) {
  NSLog("Hello")
  let jsCodeLocation = NSURL(string: "http://localhost:8081/index.ios.bundle?platform=ios")
  let mockData:NSDictionary = ["scores":
      [
          ["name":"Alex", "value":"42"],
          ["name":"Joel", "value":"10"]
      ]
  ]

  let rootView = RCTRootView(
      bundleURL: jsCodeLocation,
      moduleName: "RNHighScores",
      initialProperties: mockData as [NSObject : AnyObject],
      launchOptions: nil
  )
  let vc = UIViewController()
  vc.view = rootView
  self.presentViewController(vc, animated: true, completion: nil)
}
```

> Обратите внимание что `RCTRootView bundleURL` запускает новую JSC VM. Чтобы оптимизировать использование ресурсов и упростить коммуникацию между представлениями React Native в различных частях вашего нативного мобильного приложения, вы можете использовать различные представления React Native, которые связаны с отдельной средой выполнения JS. Чтобы сделать это, используйте [`RCTBridge initWithBundleURL`](https://github.com/facebook/react-native/blob/master/React/Base/RCTBridge.h#L93) вместо `RCTRootView bundleURL`, чтобы создать мост, а затем используйте `RCTRootView initWithBridge`.

<block class="objc" />

> При создании рабочей версии вашего мобильного приложения NSURL может указать на предварительно собранный файл на диске подобным образом `[[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];`. Чтобы сгенерировать этот файл, вы можете использовать скрипт `react-native-xcode.sh` из директории `node_modules/react-native/packager/`.

<block class="swift" />

> При создании рабочей версии вашего мобильного приложения NSURL может указывать на предварительно собранный файл на диске подобным образом `let mainBundle = NSBundle(URLForResource: "main" withExtension:"jsbundle")`. Чтобы сгенерировать этот файл, вы можете использовать скрипт `react-native-xcode.sh` из директории `node_modules/react-native/packager/`.

<block class="objc swift" />

#### Связка

Свяжите новую ссылку в главном меню с новым методом обработчика событий.

![Путь события](img/react-native-add-react-native-integration-wire-up.png)

> Один из самых простых способов сделать это - открыть представление в сценарии и нажать правой кнопкой на новой ссылке. Выберите, например, событие `Touch Up Inside`, перетащите в сценарий, а затем выберите создаваемый метод из списка.

## перетащите в сценарий, а затем выберите создаваемый метод из списка

Вы проделали все основные шаги, необходимые для интегрирования React Native с вашим приложением. Теперь мы запустим упаковщик React Native чтобы создать пакет `index.ios.bundle` и сервер, работающий на `localhost`, чтобы запустить его  .

### App Transport Security

Apple блокирует загрузку неявных полнотекстовых ресурсов по HTTP. Поэтому мы должны добавить указанный файл `Info.plist` (или его эквивалент).

```xml
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSExceptionDomains</key>
    <dict>
        <key>localhost</key>
        <dict>
            <key>NSTemporaryExceptionAllowsInsecureHTTPLoads</key>
            <true/>
        </dict>
    </dict>
</dict>
```

### Запустите упаковщик

```bash
# В корневой директории вашего проекта, где расположена папка `node_modules`.
$ npm start
```

### Запустите мобильное приложение

Запустите сборку с помощью Xcode или вашего избранного редактора, а затем как обычно запустите ваше нативное приложение iOS. Вы также можете запустить мобильное приложение с использованием командной строки:

```bash
# В корневой директории вашего проекта
$ react-native run-ios
```

В нашем примере приложения вы должны увидеть ссылку на "High Scores", а после нажатия на нее вы сможете увидеть рендеринг вашего компонента React Native..

Основной экран *нативного* приложения:

![Основной экран](img/react-native-add-react-native-integration-example-home-screen.png)

Экран *React Native*, отображающий экран High Scores:

![High Scores](img/react-native-add-react-native-integration-example-high-scores.png)

> Если при запуске мобильного приложения у вас появляются проблемы с определением модуля, пожалуйста, посмотрите [возможное описание решения на GitHub](https://github.com/facebook/react-native/issues/4968). [ Этот комментарий](https://github.com/facebook/react-native/issues/4968#issuecomment-220941717) был новейшим решением этой проблемы на момент написания этой версии документации.

### Посмотреть код

<block class="objc" />

Вы можете изучить приведенный здесь код на [GitHub](https://github.com/JoelMarcey/iOS-2048/commit/9ae70c7cdd53eb59f5f7c7daab382b0300ed3585).

<block class="swift" />

Вы можете изучить приведенный здесь код на [GitHub](https://github.com/JoelMarcey/swift-2048/commit/13272a31ee6dd46dc68b1dcf4eaf16c1a10f5229).

<block class="android" />

## Добавьте JS в свое мобильное приложение

В корневом каталоге вашего мобильного приложения запустите:

    $ npm init
    $ npm install --save react react-native
    $ curl -o .flowconfig https://raw.githubusercontent.com/facebook/react-native/master/.flowconfig

Этот код создаст модуль nodejs для вашего мобильного приложения и добавит зависимость npm `react-native`. Теперь откройте только что созданный файл `package.json` и добавьте следующий код в раздел `scripts`:

    "start": "node node_modules/react-native/local-cli/cli.js start"

Скопируйте и вставьте нижеследующий код в файл `index.android.js` находящийся в вашем корневом каталоге. Это скелет мобильного приложения React Native:

```js
'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class HelloWorld extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello, World</Text>
      </View>
    )
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
```

## Подготовка существующего мобильного приложения

In your app's `build.gradle` file add the React Native dependency:
```
dependencies {
    ...
    compile "com.facebook.react:react-native:+" // From node_modules.
}
```

> If you want to ensure that you are always using a specific React Native version in your native build, replace `+` with an actual React Native version you've downloaded from `npm`.

В файл `build.gradle` вашего проекта добавьте локальный каталог React Native maven:

```
allprojects {
    repositories {
        ...
        maven {
            // All of React Native (JS, Android binaries) is installed from npm
            url "$rootDir/../node_modules/react-native/android"
        }
    }
    ...
}
```

> Make sure that the path is correct! You shouldn’t run into any “Failed to resolve: com.facebook.react:react-native:0.x.x" errors after running Gradle sync in Android Studio.

Next, make sure you have the Internet permission in your `AndroidManifest.xml`:

    <uses-permission android:name="android.permission.INTERNET" />

Это потребуется только в режиме разработки для перезагрузки JavaScript с сервера для разработки. Если необходимо, вы можете убрать этот код в сборке продакшн-версии..

## Добавьте нативный код

Добавьте нативный код чтобы запустить среду выполнения React Native и заставить ее что-то отобразить. Чтобы это сделать, мы собираемся создать `Activity`, которая создаст `ReactRootView`, запустит приложение React и настроит его как основное представление.

> If you are targetting Android version <5, use the `AppCompatActivity` class from the `com.android.support:appcompat` package instead of `Activity`.

> If you find out later that your app crashes due to `Didn't find class "com.facebook.jni.IteratorHelper"` exception, uncomment the `setUseOldBridge` line. [See related issue on GitHub.](https://github.com/facebook/react-native/issues/8701)

```java
public class MyReactActivity extends Activity implements DefaultHardwareBackBtnHandler {
    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        mReactRootView = new ReactRootView(this);
        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setBundleAssetName("index.android.bundle")
                .setJSMainModuleName("index.android")
                .addPackage(new MainReactPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                //.setUseOldBridge(true) // uncomment this line if your app crashes
                .build();
        mReactRootView.startReactApplication(mReactInstanceManager, "HelloWorld", null);

        setContentView(mReactRootView);
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }
}
```

> If you are using a starter kit for React Native, replace the "HelloWorld" string with the one in your index.android.js file (it’s the first argument to the `AppRegistry.registerComponent()` method).

If you are using Android Studio, use `Alt + Enter` to add all missing imports in your MyReactActivity class. Be careful to use your package’s `BuildConfig` and not the one from the `...facebook...` package.

We need set the theme of `MyReactActivity` to `Theme.AppCompat.Light.NoActionBar` because some components rely on this theme.
```xml
<activity
  android:name=".MyReactActivity"
  android:label="@string/app_name"
  android:theme="@style/Theme.AppCompat.Light.NoActionBar">
</activity>
```



> `ReactInstanceManager` может быть использован совместно различными активностями и/или фрагментами. Вам потребуется создать собственный `ReactFragment` или `ReactActivity` и иметь *контейнер* синглета, который содержит `ReactInstanceManager`. Когда вам требуется `ReactInstanceManager` (например, чтобы подключить `ReactInstanceManager` к жизненному циклу Активностей или Фрагментов), используйте предлагаемый синглет.

Затем нам нужно передать колбэки жизненного цикла Активности в `ReactInstanceManager`:

```java
@Override
protected void onPause() {
    super.onPause();

    if (mReactInstanceManager != null) {
        mReactInstanceManager.onPause();
    }
}

@Override
protected void onResume() {
    super.onResume();

    if (mReactInstanceManager != null) {
        mReactInstanceManager.onResume(this, this);
    }
}

@Override
protected void onDestroy() {
    super.onDestroy();

    if (mReactInstanceManager != null) {
        mReactInstanceManager.onDestroy();
    }
}
```

Мы также должны обработать нажатие кнопки "Назад" в React Native:

```java
@Override
 public void onBackPressed() {
    if (mReactInstanceManager != null) {
        mReactInstanceManager.onBackPressed();
    } else {
        super.onBackPressed();
    }
}
```

Вышеприведенный код позволяет JavaScript управлять тем, что происходит, когда пользователь нажимает аппаратную кнопку "Назад" (например, для реализации навигации). Если JavaScript не обрабатывает нажатие кнопки "Назад", может быть вызван метод `invokeDefaultOnBackPressed`. По умолчанию это просто завершит вашу `Activity`.

Finally, we need to hook up the dev menu. By default, this is activated by (rage) shaking the device, but this is not very useful in emulators. So we make it show when you press the hardware menu button (use `Ctrl + M` if you're using Android Studio emulator):

```java
@Override
public boolean onKeyUp(int keyCode, KeyEvent event) {
    if (keyCode == KeyEvent.KEYCODE_MENU && mReactInstanceManager != null) {
        mReactInstanceManager.showDevOptionsDialog();
        return true;
    }
    return super.onKeyUp(keyCode, event);
}
```

Вот и все. Теперь ваша Активность готова к запуску кода JavaScript

## Запустите ваше мобильное приложение

Чтобы запустить ваше мобильное приложение, нужно сначала запустить сервер разработки. Чтобы сделать это, просто выполните нижеследующую команду из корневого каталога:

    $ npm start

Now build and run your Android app as normal (`./gradlew installDebug` from command-line; in Android Studio just create debug build as usual).

> If you are using Android Studio for your builds and not the Gradle Wrapper directly, make sure you install [watchman](https://facebook.github.io/watchman/) before running `npm start`. It will prevent the packager from crashing due to conflicts between Android Studio and the React Native packager.

Once you reach your React-powered activity inside the app, it should load the JavaScript code from the development server and display:

![Скриншот](img/EmbeddedAppAndroid.png)

<script>
// Конвертация <div>...<span><block /></span>...</div>
// В форму <div>...<block />...</div>
var blocks = document.getElementsByTagName('block');
for (var i = 0; i < blocks.length; ++i) {
  var block = blocks[i];
  var span = blocks[i].parentNode;
  var container = span.parentNode;
  container.insertBefore(block, span);
  container.removeChild(span);
}
// Конвертация <div>...<block />content<block />...</div>
// В форму <div>...<block>content</block><block />...</div>
blocks = document.getElementsByTagName('block');
for (var i = 0; i < blocks.length; ++i) {
  var block = blocks[i];
  while (block.nextSibling && block.nextSibling.tagName !== 'BLOCK') {
    block.appendChild(block.nextSibling);
  }
}
function display(type, value) {
  var container = document.getElementsByTagName('block')[0].parentNode;
  container.className = 'display-' + type + '-' + value + ' ' +
    container.className.replace(RegExp('display-' + type + '-[a-z]+ ?'), '');
  console.log(container.className);
  event && event.preventDefault();
}

// If we are coming to the page with a hash in it (i.e. from a search, for example), try to get
// us as close as possible to the correct platform and dev os using the hashtag and block walk up.
var foundHash = false;
if (window.location.hash !== '' && window.location.hash !== 'content') { // content is default
  var hashLinks = document.querySelectorAll('a.hash-link');
  for (var i = 0; i < hashLinks.length && !foundHash; ++i) {
    if (hashLinks[i].hash === window.location.hash) {
      var parent = hashLinks[i].parentElement;
      while (parent) {
        if (parent.tagName === 'BLOCK') {
          var targetPlatform = null;
          // Could be more than one target platform, but just choose some sort of order
          // of priority here.

          // Target Platform
          if (parent.className.indexOf('objc') > -1) {
            targetPlatform = 'objc';
          } else if (parent.className.indexOf('swift') > -1) {
            targetPlatform = 'swift';
          } else if (parent.className.indexOf('android') > -1) {
            targetPlatform = 'android';
          } else {
            break; // assume we don't have anything.
          }
          // We would have broken out if both targetPlatform and devOS hadn't been filled.
          display('platform', targetPlatform);
          foundHash = true;
          break;
        }
        parent = parent.parentElement;
      }
    }
  }
}
// Do the default if there is no matching hash
if (!foundHash) {
  var isMac = navigator.platform === 'MacIntel';
  display('platform', isMac ? 'objc' : 'android');
}
</script>

## Creating a release build in Android Studio

You can use Android Studio to create your release builds too! It’s as easy as creating release builds of your previously-existing native Android app. There’s just one additional step, which you’ll have to do before every release build. You need to execute the following to create a React Native bundle, which’ll be included with your native Android app:

    $ react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/com/your-company-name/app-package-name/src/main/assets/index.android.bundle --assets-dest android/com/your-company-name/app-package-name/src/main/res/

Don’t forget to replace the paths with correct ones and create the assets folder if it doesn’t exist!

Now just create a release build of your native app from within Android Studio as usual and you should be good to go!
