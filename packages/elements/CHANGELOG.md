# [0.11.0](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.10.1...v0.11.0) (2020-02-07)


### Bug Fixes

* **ino-textarea:** set inner width to 100% ([6c37996](http://gitlab.inovex.de:2424/inovex-elements/core/commit/6c379962b7d1373d2537f17ff222548bfc4d59f5))


### Features

* **elements:** add email validation onBlur ([83a38f7](http://gitlab.inovex.de:2424/inovex-elements/core/commit/83a38f70abe453e8a93a129ab7cb520e9f7ca295))
* **elements:** add new ino-error prop to ino-input ([3e4ae46](http://gitlab.inovex.de:2424/inovex-elements/core/commit/3e4ae46b5cc26f57dd0c43ffac3b1d1d47d1d626))
* **elements:** add thousands sep., decimal places, unit to ino-input ([a7df4cb](http://gitlab.inovex.de:2424/inovex-elements/core/commit/a7df4cbe13e12c8069fddf29e760df080ccbcfd6))
* **elements:** ino-checkbox in inovex style ([5884df0](http://gitlab.inovex.de:2424/inovex-elements/core/commit/5884df0fd950fe02636731b7b6abf29af5f7b008))
* **icons:** add new icons, update icon names, update readme ([d176efa](http://gitlab.inovex.de:2424/inovex-elements/core/commit/d176efa3742fe51b6f3f880ec66378de5a5b31df))

### Breaking Changes
Some icons have been renamed to match the new naming convention. The new naming convention was introduced to reflect the newly added sizes and colors in the ID of each icon. The old naming convention was: `<id>-<a|b>` (e.g. `birthday-a`). The new naming convention is the following: `<id>-<size>-<grey>?` (e.g. `birthday-m`). If any of your used ino-icons has the suffix `-a` or `-b`, please search for the new id in the [ino-icon page](https://elements.inovex.io/dist/latest/storybook/?path=/story/ino-icon--default-usage) and update the `ino-icon`-Property accordingly (e.g. `birthday-a` -> `birthday-m`).

There are three different sizes: xs, s and m. The default which should be used is m. Many icons also have a grey version which has the suffix "-grey" (e.g. `birthday-m-grey`).



## [0.10.1](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.10.0...v0.10.1) (2019-12-09)



# [0.10.0](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.9.0...v0.10.0) (2019-12-09)



