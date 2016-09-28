Flex-Mix
========

## Introduction
Welcome to Flex-Mix. 
Boilerplate based on Flex-Grid(http://flexboxgrid.com/) and SASS-structure boilerplate(https://github.com/HugoGiraudel/sass-boilerplate). 
This is my own solution for faster frontend development.

[![MIT Licensed][1]](#license)
[1]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat

## Installation
```
git clone https://github.com/DaniilSydorenko/flex-mix.git
```

### Bower 

```
bower install or bower install --allow-root
```

### NPM

```
npm install --save-dev
```

## Application structure

```
flex-mix/                           =>      Base catalog              
    assets/                         =>      Libraries, custom scripts and styles, media
        img/                        =>      Images
        js/                         =>      Scripts
            main.js                 =>      Initial file for custom scripts    
        libs/                       =>      Scripts libraries
            jquery-2.2.3.js         =>      JQuery
            modernizr-custom.js     =>      Modernizr
    dist/                           =>      Production build
        css/                        =>      Concatenated and minified styles
        js/                         =>      Concatenated and minified scripts
    src/                            =>      Application files
        scss/                       =>      SASS structure
            abstracts/              =>      Reusable code(mixins, variables)
            base/                   =>      Based styles(typography, helper classes)
            components/             =>      Application view components(buttons, breadcrumbs, etc.) 
            layout/                 =>      Reusable part of view(header, footer)
            pages/                  =>      Pages style rules
            themes/                 =>      Themes style rules
            vendor/                 =>      Outer libs
            main.scss               =>      Main file include all sass files(by @import)
    .gitignore                      =>      Gitignore file
    bower.json                      =>      Manifest file for Bower
    CHANGELOG.md                    =>      Log of application versions changes
    gulpfile.js                     =>      Gulp file
    index.html                      =>      Index file
    LICENSE.md                      =>      MIT license
    package.json                    =>      Manifest file for NPM
    README.md                       =>      Readme file
```

## Configuration

```

```

## Gulp tasks

#### clean
```
Remove all files from dist folder before building
```


License
-------

The MIT License (MIT)

Copyright (c) 2016 Daniil Sydorenko

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.