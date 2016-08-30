# React Native [![Build Status](https://travis-ci.org/egeshi/react-native.svg?branch=master)](https://travis-ci.org/egeshi/react-native) [![Circle CI](https://circleci.com/gh/facebook/react-native.svg?style=svg)](https://circleci.com/gh/facebook/react-native) [![npm version](https://badge.fury.io/js/react-native.svg)](https://badge.fury.io/js/react-native)

React Native позволяет Вам создвать приложения мирового класса на нативных платформах, используя имеющийся опыт разработки на основе JavaScript и [React](https://facebook.github.io/react). React Native сконцентирован на предложении одинаковой эффективности для разработчика на всех платформах, которые вам интересны - выучи однажды, пиши везде. Facebook использует React Native в различных рабочих мобильных приложениях и будет продолжать инвестировать в React Native.

Поддерживаемые операционные системы >= Android 4.1 (API 16) и >= iOS 7.0.

- [С чего начать?](#getting-started)
- [Получение помощи](#getting-help)
- [Документация](#documentation)
- [Примеры](#examples)
- [Расширение React Native](#extending-react-native)
- [Обновление](#upgrading)
- [Запросы](#opening-issues)
- [Содействие](#contributing)
- [Лицензия](#license)

## Введение

Введение в React Native на русском можно изучить на [сайте русской документации по React Native](http://reactnativedocs.ru/).

## С чего начать?

- Для установки React Native и зависимостей изучите [руководство для начинающих](https://facebook.github.io/react-native/docs/getting-started.html).
- Чтобы создать свой первый проект, который получает реальные данные и выводит их на экран в списке, изучите [этот урок](https://facebook.github.io/react-native/docs/sample-application-movies.html).
- Изучить список компонентов, которые поставляются вместе с React Native, используйте в качестве примера [проект UIExplorer](#examples).
- Для отладки приложений установите инструменты разработчика React для [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) или [Firefox](https://addons.mozilla.org/firefox/addon/react-devtools/) [(узнать больше)](https://facebook.github.io/react-native/docs/debugging.html).
- Попробуйте мобильные приложения с [Выставки](https://facebook.github.io/react-native/showcase.html) чтобы увидеть на что способен React Native!

## Получение помощи

Для получения помощи используйте ресурсы сообщества. Используйте GitHub для того, чтобы сообщить об ошибке и для запроса новых функций.

- Задайте вопрос с тегом `react-native` на [StackOverflow](https://stackoverflow.com/)
- С командой всегда можно пообщаться в чате [Reactiflux](https://discord.gg/0ZcbPKXt5bWJVmUY) на канале #react-native
- Ясно сформулируйте свой запрос новых функций или голосуйте за существующие на [Product Pains](https://productpains.com/product/react-native/)
- Начните дискуссию на [React Discussion Board](https://discuss.reactjs.org/)
- Подключайтесь к каналу  #reactnative на IRC: chat.freenode.net
- Если вы думаете что обнаружили ошибку, пожалуйста [создайте запрос](#opening-issues)

## Документация

[Документация на сайте](http://reactnativedocs.ru/) разделена на несколько разделов.
- Есть **уроки** в которых рассказывается об [отладке](http://reactnativedocs.ru/docs/debugging.html), [интеграции с существующими мобильными приложениями](http://reactnativedocs.ru/docs/integration-with-existing-apps.html), и [системой распознавания жестов](http://reactnativedocs.ru/docs/gesture-responder-system.html).
- Раздел **Компоненты** описываются компоненты React, такие как [`View`](http://reactnativedocs.ru/docs/view.html) и [`Navigator`](http://reactnativedocs.ru/docs/navigator.html).
- Раздел **API** рассказывает о других библиотеках, таких как [Animated](http://reactnativedocs.ru/docs/animated.html) и [StyleSheet](http://reactnativedocs.ru/docs/stylesheet.html) которые непосредственно не являются компонентами React.
- Также React Native предоставляет некоторые **Polyfills** которые предлагают web-подобные API.

Пожалуй самый отличный способ узнать больше о компонентах и APIs, включенных в React Native, состоит в том, чтобы читать код. В каталоге `Libraries` вы можете найти исходный код таких компонентов как, например `ScrollView` и `Navigator`. Пример UIExplorer демонстрирует некоторые способы использования этих компонентов. Из исходного кода можно получить точное понимание работы каждого из компонентов и API.

Документация по React Native освещает только компоненты API и темы, специфические для React Native (React on iOS and Android). Для более полной документации относительно API React, который совместно используется React Native и React DOM, обратитесь к [документации по React](https://facebook.github.io/react/).

## Примеры

- `git clone https://github.com/facebook/react-native.git`
- `cd react-native && npm install`

### Запуск примеров на iOS

Теперь просто откройте любой пример (файл `.xcodeproj` в каждом из подкаталогов в директории `Examples`) и выберите Run в Xcode.

### Запуск примеров на Android

Не забудьте что вам понадобится установленный Android NDK подробности смотрите в [зависимостях](https://github.com/egeshi/react-native/blob/master/ReactAndroid/README.md#prerequisites).

```bash
./gradlew :Examples:Movies:android:app:installDebug
# Start the packager in a separate shell (make sure you ran npm install):
./packager/packager.sh
# Open the Movies app in your emulator
```

## Расширение React Native

- Ищете компонент? [JS.coach](https://js.coach/react-native)
- Разработчики пишут и публикуют модули React Native в npm и выкладывают открытый код на GitHub.
- Создание модулей помогает расширять экосистему React Native и сообщество. Рекомендуется писать модули для ваших вариантов использования и добавлять их в npm.
- Если вы интересуетесь расширением нативной функциональности, изучайте руководства по нативным модулям ([iOS](http://reactnativedocs.ru/docs/native-modules-ios.html), [Android](http://reactnativedocs.ru/docs/native-modules-android.html)) и нативным компонентам UI ([iOS](http://reactnativedocs.ru/docs/native-components-ios.html), [Android](http://reactnativedocs.ru/docs/native-components-android.html)).

## Обновление

React Native находится в процессе активного развития. Смотрите руководство по [обновлению React Native](http://reactnativedocs.ru/docs/upgrading.html) для сохранения своего проекта актуальным.

## Создание вопросов

Если вы заметили ошибку в React Native, разработчики хотели бы узнать о ней. Просмотрите [существующие вопросы](https://github.com/facebook/react-native/issues) и, прежде чем открыть новый вопрос, попытайтесь убедиться что ваша проблема еще не замечена. Всегда полезно указать версию React Native и ОС, которые вы используете. Пожалуйста, также добавляйте лог стека и уменьшенный кейс репозитории когда это возможно.

Вопросы на GitHub предназначены для отчетов об ошибках и запросов новых функций. Для помощи и вопросов по использованию React Native используйте ресурсы, перечисленные в разделе [Получение помощи](#getting-help). [Product Pains](https://productpains.com/product/react-native/) - особенно  хороший способ чтобы рассказать про ваш интерес к функции или проблеме. Ресурсы для обработви проблем ограничены и, сохраняя список нерешенных вопросов небольшим, команда разработчиков сможет ответить достаточно быстро.

## Содействие

Для получения дополнительной информации о содействии PR и запросов, смотрите [Contribution Guidelines](https://github.com/facebook/react-native/blob/master/CONTRIBUTING.md).

[Хорошее первое задание](https://github.com/facebook/react-native/labels/Good%20First%20Task) - лучшая отправная точка для PR.

Разрабочики поощряют сообщество спрашивать и отвечать на вопросы на Stack Overflow с [тегом react-native](https://stackoverflow.com/questions/tagged/react-native).  Это отличный способ помочь и включиться в сообщество!

## Лицензия

React распространяется по лицензии [BSD licensed](./LICENSE). Также выделяются дополнительные [патентные права](./PATENTS).

Документация по React распространяется по [лицензии Creative Commons](./LICENSE-docs).

Примеры, предоставленные в этом репозитории и в документации [лицензируются отдельно](./LICENSE-examples), так же как и некоторые из [пользовательских компонентов](./LICENSE-CustomComponents).
