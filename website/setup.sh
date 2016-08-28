#!/bin/bash

# Copyright (c) 2015-present, Facebook, Inc.
# All rights reserved.
#
# This source code is licensed under the BSD-style license found in the
# LICENSE file in the root directory of this source tree. An additional grant
# of patent rights can be found in the PATENTS file in the same directory.

# Start in website/ even if run from root directory
cd "$(dirname "$0")"

cd ../../
if [ "$TRAVIS" ]; then
  git clone "https://egeshi@github.com/egeshi/react-native.git" react-native-gh-pages
else
  git clone git://github.com/egeshi/react-native.git react-native-gh-pages
fi
cd react-native-gh-pages
git checkout origin/gh-pages-ru
git checkout -b gh-pages-ru
git branch --set-upstream-to=origin/gh-pages-ru
cd ../react-native/website
