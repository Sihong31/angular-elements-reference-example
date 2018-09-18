const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

  const files = [
    './dist/AngularElementDemoApp/runtime.js',
    './dist/AngularElementDemoApp/polyfills.js',
    './dist/AngularElementDemoApp/main.js'
  ]

  await fs.ensureDir('elements')

  await concat(files, 'elements/demo-counter.js')
  console.info('elements created successfully!')
})()
