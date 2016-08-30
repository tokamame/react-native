/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var Prism = require('Prism');
var React = require('React');
var Site = require('Site');

var index = React.createClass({
  render: function() {
    return (
      <Site>
        <div className="hero">
          <div className="wrap">
            <div className="text"><strong>React Native</strong></div>
            <div className="minitext">
                Изучи один раз, пиши везде: создание мобильных приложений на React
            </div>
          </div>

          <div className="buttons-unit">
            <a href="docs/getting-started.html#content" className="button">Знакомство с React Native</a>
          </div>
        </div>

        <section className="content wrap">

          <div style={{margin: '40px auto', maxWidth: 800}}>

          <h2>Создавайте полноценные мобильные приложения, используя JavaScript и React</h2>
          <p>
              React Native позволяет вам создавать мобильные приложения, используя только JavaScript. Он использует тот же самый дизайн что и React, позволяя вам создавать насыщенные мобильные UI из декларативных компонентов.
          </p>

          <Prism>

{`import React, { Component } from 'react';
import { Text, View } from 'react-native';

class WhyReactNativeIsSoGreat extends Component {
  render() {
    return (
      <View>
        <Text>
          If you like React on the web, you'll like React Native.
        </Text>
        <Text>
          You just use native components like 'View' and 'Text',
          instead of web components like 'div' and 'span'.
        </Text>
      </View>
    );
  }
}`}
          </Prism>

          <h2>Приложение React Native - полноценное мобильное приложение</h2>
          <p>
              С React Native Вы не создаете “мобильное веб-приложение”, “приложение HTML5” или “гибридное приложение”. Вы создаете реальное мобильное приложение, которое неотличимо от приложения, созданного с использованием Objective C или Java. React Native использует те же самые фундаментальные стандартные блоки UI в что и  обычные приложения iOS и Android. Вы просто размещаете эти стандартные блоки, используя JavaScript и React.
          </p>

          <Prism>
{`import React, { Component } from 'react';
import { Image, ScrollView, Text } from 'react-native';

class AwkwardScrollingImageWithText extends Component {
  render() {
    return (
      <ScrollView>
        <Image source={{uri: 'https://i.chzbgr.com/full/7345954048/h7E2C65F9/'}} />
        <Text>
          On iOS, a React Native ScrollView uses a native UIScrollView.
          On Android, it uses a native ScrollView.

          On iOS, a React Native Image uses a native UIImageView.
          On Android, it uses a native ImageView.

          React Native wraps the fundamental native components, giving you
          the performance of a native app, plus the clean design of React.
        </Text>
      </ScrollView>
    );
  }
}`}
          </Prism>

          <h2>Не тратьте понапрасну время на перекомпиляцию</h2>
          <p>
              React Native позволяет вам создавать свои приложения быстрее. Вместо перекомпиляции можно немедленно перезагрузить свое приложение. Используя горячую перезагрузку, можно запустить даже новый код с сохранением состояния вашего приложения. Попробуйте, это просто волшебный опыт!
          </p>
          <br />
          <img src='https://media.giphy.com/media/13WZniThXy0hSE/giphy.gif' />

          <h2>Используйте нативнй код когда это нужно</h2>
          <p>
              React Native без сложностей объединяется с компонентами, написанными на Objective C, Java или Swift. Если вам нужно оптимизировать какие-то из аспектов своего приложения, то добавить нативный код очень просто. Также легко вы можете создать часть приложения на React Native, а часть - используя непосредственно  нативный код, так как работает  приложение Facebook.
          </p>

          <Prism>
{`import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TheGreatestComponentInTheWorld } from './your-native-code';

class SomethingFast extends Component {
  render() {
    return (
      <View>
        <TheGreatestComponentInTheWorld />
        <Text>
          TheGreatestComponentInTheWorld could use native Objective-C,
          Java, or Swift - the product development process is the same.
        </Text>
      </View>
    );
  }
}`}
          </Prism>
          </div>
          <section className="home-bottom-section">
            <div className="buttons-unit">
              <a href="docs/getting-started.html#content" className="button">Знакомство с React Native</a>
            </div>
          </section>
        </section>
      </Site>
    );
  }
});

module.exports = index;
