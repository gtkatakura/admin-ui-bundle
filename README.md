```bash
~/projects/vtex/admin-ui-bundle [indevasetup/gtkatakura] (master) $ yarn build
yarn run v1.22.10
warning ../package.json: No license field
$ npx webpack
asset everything.js 1.77 MiB [compared for emit] [big] (name: everything)
asset import-provider.js 1.77 MiB [compared for emit] [big] (name: import-provider)
asset only-button.js 1.77 MiB [compared for emit] [big] (name: only-button)
orphan modules 1.64 MiB [orphan] 299 modules
runtime modules 2.95 KiB 15 modules
cacheable modules 4.78 MiB
  modules by path ./node_modules/ 341 KiB
    modules by path ./node_modules/prop-types/ 2.58 KiB 3 modules
    modules by path ./node_modules/@vtex/admin-ui/ 2.48 KiB 2 modules
    modules by path ./node_modules/react/ 6.48 KiB 2 modules
    modules by path ./node_modules/react-dom/ 119 KiB 2 modules
    modules by path ./node_modules/downshift/ 2.48 KiB 2 modules
    modules by path ./node_modules/scheduler/ 4.91 KiB 2 modules
    modules by path ./node_modules/react-is/ 2.69 KiB 2 modules
  modules by path ./src/*.js + 213 modules 4.45 MiB
    ./src/import-provider.js + 213 modules 1.48 MiB [built] [code generated]
    ./src/only-button.js + 213 modules 1.48 MiB [built] [code generated]
    ./src/everything.js + 213 modules 1.48 MiB [built] [code generated]

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets:
  import-provider.js (1.77 MiB)
  only-button.js (1.77 MiB)
  everything.js (1.77 MiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  import-provider (1.77 MiB)
      import-provider.js
  only-button (1.77 MiB)
      only-button.js
  everything (1.77 MiB)
      everything.js


WARNING in webpack performance recommendations:
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.37.1 compiled with 3 warnings in 2476 ms
Done in 2.77s.
```
