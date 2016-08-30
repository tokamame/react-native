---
id: quick-start-getting-started
title: Поехали!
layout: docs
category: Основы
permalink: docs/getting-started.html
next: tutorial
---

Добро пожаловать в React Native! Инструкции на этой странице помогут вам установить React Native на своей системе и вы сразу сможете создать приложение. Если вы уже установили React Native, то сразу переходите к [уроку](/react-native/docs/tutorial.html).

В зависимости от операционной системы , в которой вы ведете разработку, инструкции несколько отличаются для iOS или Android. Если вы собираетесь создавать кроссплатформенные приложения для iOS и Android, это прекрасно - просто выберите целевую ОС и ОС среды разработки ниже, так как процесс установки для разных систем имеет некоторые отличия.

<div class="toggler">
<style>
.toggler a {
  display: inline-block;
  padding: 10px 5px;
  margin: 2px;
  border: 1px solid #05A5D1;
  border-radius: 3px;
  text-decoration: none !important;
}
.display-os-mac .toggler .button-mac,
.display-os-linux .toggler .button-linux,
.display-os-windows .toggler .button-windows,
.display-platform-ios .toggler .button-ios,
.display-platform-android .toggler .button-android {
  background-color: #05A5D1;
  color: white;
}
block { display: none; }
.display-platform-ios.display-os-mac .ios.mac,
.display-platform-ios.display-os-linux .ios.linux,
.display-platform-ios.display-os-windows .ios.windows,
.display-platform-android.display-os-mac .android.mac,
.display-platform-android.display-os-linux .android.linux,
.display-platform-android.display-os-windows .android.windows {
  display: block;
}</style>
<span>Мобильная ОС:</span>
<a href="javascript:void(0);" class="button-ios" onclick="display('platform', 'ios')">iOS</a>
<a href="javascript:void(0);" class="button-android" onclick="display('platform', 'android')">Android</a>
<span>ОС разработки:</span>
<a href="javascript:void(0);" class="button-mac" onclick="display('os', 'mac')">Mac</a>
<a href="javascript:void(0);" class="button-linux" onclick="display('os', 'linux')">Linux</a>
<a href="javascript:void(0);" class="button-windows" onclick="display('os', 'windows')">Windows</a>
</div>

<!-- ######### LINUX AND WINDOWS for iOS ##################### -->

<block class="linux windows ios" />

## Не поддерживается

<div>К сожалению Aplle позволяет производить разработку для iOS только на системах Mac. Если вы хотите разрабатывать мобильные приложения для iOS, но все еще не приобрели Mac, вы можете попробовать начать с инструкций для <a href="" onclick="display('platform', 'android')">Android</a>.</div>

<center><img src="img/react-native-sorry-not-supported.png" width="150"></img></center>

<!-- ######### MAC for iOS ##################### -->

<block class="mac ios" />

## Зависимости для Mac + iOS

Вам потребуются Xcode, node.js, инструменты командной строки React Native и Watchman.

<block class="mac android" />

## Зависимости для Mac + Android

Вам потребуются Android Studio, node.js, инструменты командной строки React Native, и Watchman.

<block class="mac ios android" />

Мы рекомендуем устанавливать Watchman с помощью [Homebrew](http://brew.sh/).

```
brew install node
brew install watchman
```

Node включает в себя npm, с помощью которго вы сможете установить иснструменты командной строки React Native.

```
npm install -g react-native-cli
```

Если вы увидите ошибку, связанную с доступом к файлам, попробуйте повторить установку через sudo: `sudo npm install -g react-native-cli`.

Если вы увидите ошибку `Cannot find module 'npmlog'`, попробуйте сначала запустить: `curl -0 -L http://npmjs.org/install.sh | sudo sh`.

<block class="mac ios" />

Установить Xcode проще всего из [Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12).

<block class="mac android" />

Загрузите и установите [Android Studio](https://developer.android.com/studio/install.html).

Если вы планируете вносить изменения в код Java, мы бы посоветовали [Gradle Daemon](https://docs.gradle.org/2.9/userguide/gradle_daemon.html), который значительно ускоряет сборку.


<!-- ######### LINUX and WINDOWS for ANDROID ##################### -->

<block class="linux android" />

## Зависимости для Linux + Android

<block class="windows android" />

## Зависимости для Windows + Android

<block class="linux windows android" />

Вам потребуется node.js, инструменты командной строки React Native, Watchman, и Android Studio.

<block class="linux android" />

Для установки Node.js версии 4 или полее поздней следуйте [инструкции по установке для вашего дистрибутива Linux](https://nodejs.org/en/download/package-manager/) to install Node.js 4 or newer.

<block class='windows android' />

Для установки node.js и Python2 рекоменуем воспользоваться [Chocolatey](https://chocolatey.org), популярный менеджер пакетов для Windows. Откройте командную строку в роли Администратора, а затем запустите:

```
choco install nodejs.install
choco install python2
```

<block class="windows linux android" />

Node поставляется с npm, с помощью которого вы сможете установить инструменты командной строки React Native.

```
npm install -g react-native-cli
```

<block class="windows linux android" />

Загрузите и установите [Android Studio](https://developer.android.com/studio/install.html).

<block class="linux android" />

[Watchman](https://facebook.github.io/watchman) это инструмент, созданный Facebook для наблюдения за изменениями в файловой системе. Его использование поможет увеличить производительность, но вам необязательно его устанавливать если процесс установки окажется слишком сложным. Используйте [инструкции по установке Watchman](https://facebook.github.io/watchman/docs/install.html#installing-from-source) чтобы скомпилировать его из исходного кода.

<block class="windows linux android" />

Если вы планируете вносить изменения в код Java, мы бы посоветовали [Gradle Daemon](https://docs.gradle.org/2.9/userguide/gradle_daemon.html), который значительно ускоряет сборку.

<block class="mac ios android" />

## Проверка установки React Native

<block class="mac ios" />

Для создания проекта "AwesomeProject" используйте командную строку React Native, затем выполните `react-native run-ios` в созданной папке.

```
react-native init AwesomeProject
cd AwesomeProject
react-native run-ios
```

Вскоре вы увидите приложение, запущенное в симуляторе iOS. `react-native run-ios` это только один из нескольких способой запустить ваше мобильное приложение. Вы также можете запустить его непосредственно из Xcode или Nuclide.

<block class="mac android" />

Для создания проекта "AwesomeProject" используйте командную строку React Native, затем выполните `react-native run-android` в созданной папке.

```
react-native init AwesomeProject
cd AwesomeProject
react-native run-android
```

Спустя недолгое время вы увидите приложение, запущенное в эмуляторе Android. `react-native run-android`  это только один из нескольких способой запустить ваше мобильное приложение. Вы также можете запустить его непосредственно из Android Studio или Nuclide.

<block class="mac ios android" />

### Внесение изменений в код вашего мобильного приложения

После того как вы смогли запустить мобильное приложение, можно попробовать внести изменения в его код.

<block class="mac ios" />

- Откройте `index.ios.js` в текстовом редакторе и измените какие-то строки кода.
- Чтобы изменения отобразились в симуляторе iOS, нажмите `Command⌘ + R` и мобильное приложение обновится!

<block class="mac android" />

- Откройте `index.android.js` в текстовом редакторе и измените какие-то строки кода.
- Дважды нажмите клавишу `R` или выберите `Reload` из Меню Разработчика (Developer Menu) для того чтобы внесенные изменения отобразились в эмуляторе Android!

<block class="mac ios android" />

### Готово!

Поздравляем! Вы успешно запустили и изменили мобильное приложение React Native.

<center><img src="img/react-native-congratulations.png" width="150"></img></center>

<block class="windows linux android" />

## Проверка установки React Native

Для создания проекта "AwesomeProject" используйте командную строку React Native, затем выполните `react-native run-android` в созданной папке.

```
react-native init AwesomeProject
cd AwesomeProject
react-native run-android
```

Если все было сделано верно, вы должны в скором времени увидеть ваше приложение в эмуляторе Android.

> Иногда случается так что упаковщик не запускается автоматически при выполнении
`react-native run-android`. В этом случае вы можете запустить его вручную: `react-native start`.

<block class="windows android" />

> Если, работая в ОС Windows, вы видите ошибку `ERROR  Watcher took too long to load` попробуйте увеличить значение timeout в [этом файле](https://github.com/facebook/react-native/blob/5fa33f3d07f8595a188f6fe04d6168a6ede1e721/packager/react-packager/src/DependencyResolver/FileWatcher/index.js#L16) (он находится в папке `node_modules/react-native/` вашего проекта).

<block class="windows linux android" />

### Внесение изменений в код вашего мобильного приложения

После того как вы смогли запустить мобильное приложение, можно попробовать внести изменения в его код.

- Откройте файл `index.android.js` в текстовом редакторе и измените что-нибудь в нем.
- Дважды нажмите клавишу `R` или выберите `Reload` в Меню Разработчика (Developer Menu) чтобы увидеть изменения на экране эмулятора!

### Готово!

Поздравляем! Вы успешно запустили и изменили мобильное приложение React Native.

<center><img src="img/react-native-congratulations.png" width="150"></img></center>

<block class="mac windows linux ios android" />

## Что дальше?

- Если вы хотите добавить код React Native к существующему приложению, изучите [руководство по интеграции](docs/integration-with-existing-apps.html).

- Если у вас возникли сложности, вы можете найти ответ в разделе [решения проблем](docs/troubleshooting.html#content).

- Если вы хотите узнать больше про React Native, переходите к [уроку](docs/tutorial.html).

<script>
// Convert <div>...<span><block /></span>...</div>
// Into <div>...<block />...</div>
var blocks = document.getElementsByTagName('block');
for (var i = 0; i < blocks.length; ++i) {
  var block = blocks[i];
  var span = blocks[i].parentNode;
  var container = span.parentNode;
  container.insertBefore(block, span);
  container.removeChild(span);
}
// Convert <div>...<block />content<block />...</div>
// Into <div>...<block>content</block><block />...</div>
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
          var devOS = null;
          var targetPlatform = null;
          // Could be more than one target os and dev platform, but just choose some sort of order
          // of priority here.

          // Dev OS
          if (parent.className.indexOf('mac') > -1) {
            devOS = 'mac';
          } else if (parent.className.indexOf('linux') > -1) {
            devOS = 'linux';
          } else if (parent.className.indexOf('windows') > -1) {
            devOS = 'windows';
          } else {
            break; // assume we don't have anything.
          }

          // Target Platform
          if (parent.className.indexOf('ios') > -1) {
            targetPlatform = 'ios';
          } else if (parent.className.indexOf('android') > -1) {
            targetPlatform = 'android';
          } else {
            break; // assume we don't have anything.
          }
          // We would have broken out if both targetPlatform and devOS hadn't been filled.
          display('os', devOS);
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
  var isWindows = navigator.platform === 'Win32';
  display('os', isMac ? 'mac' : (isWindows ? 'windows' : 'linux'));
  display('platform', isMac ? 'ios' : 'android');
}
</script>
