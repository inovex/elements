const fs = require('fs')
const path = require('path')

const args = process.argv
const packageJsonPath = path.join(__dirname, 'package.json')
const packageJson = JSON.parse(
  fs.readFileSync(packageJsonPath, { encoding: 'utf-8'})
)

if (args[2] === 'preBuild') {
  delete packageJson['exports']
}
else if (args[2] === 'postBuild') {
  const extensions = ['.mjs', '.d.ts']
  const walk = (obj) => {
    for (const key in obj)
    {
      if (typeof obj[key] === 'object') {
        walk(obj[key])
      }
      else {
        const value = obj[key].toString()
        if (extensions.some((ext) => value.endsWith(ext)))
          obj[key] = './' + path.posix.join('dist', value)
      }
    }
  }
  walk(packageJson)
}

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))
