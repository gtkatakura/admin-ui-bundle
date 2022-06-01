```bash
~/projects/admin-ui-bundle (master) $ yarn build
yarn run v1.22.11
$ npx webpack
asset everything.js 3.67 MiB [compared for emit] [big] (name: everything)
asset import-provider.js 3.66 MiB [emitted] [big] (name: import-provider)
asset only-button.js 3.66 MiB [compared for emit] [big] (name: only-button)
orphan modules 4.5 MiB [orphan] 764 modules
runtime modules 2.59 KiB 12 modules
cacheable modules 10.6 MiB
  modules by path ./node_modules/ 221 KiB
    modules by path ./node_modules/react/ 7.98 KiB 4 modules
    modules by path ./node_modules/prop-types/ 2.58 KiB 3 modules
    modules by path ./node_modules/react-is/ 2.48 KiB 2 modules
    modules by path ./node_modules/react-dom/ 130 KiB 2 modules
    modules by path ./node_modules/scheduler/ 4.33 KiB
      ./node_modules/scheduler/index.js 198 bytes [built] [code generated]
      ./node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
  modules by path ./src/*.js + 259 modules 10.4 MiB
    ./src/import-provider.js + 259 modules 3.47 MiB [built] [code generated]
    ./src/only-button.js + 259 modules 3.47 MiB [built] [code generated]
    ./src/everything.js + 259 modules 3.47 MiB [built] [code generated]

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets:
  import-provider.js (3.66 MiB)
  only-button.js (3.66 MiB)
  everything.js (3.67 MiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  import-provider (3.66 MiB)
      import-provider.js
  only-button (3.66 MiB)
      only-button.js
  everything (3.67 MiB)
      everything.js


WARNING in webpack performance recommendations:
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.37.1 compiled with 3 warnings in 4684 ms
Done in 5.05s.
```
