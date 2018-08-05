# jake - simple nodejs task runner

* [install](install)
* [usage](usage)
* [config](config)
* [faq](#faq)

**simple example**

```bash
// install global
$ npm i -g @naxmefy/jake

// install local
npm i @naxmefy/jake

// list tasks
$ jake -T

// execute task
$ jake anytask --any=config
$ jake my:task --any=config
$ jake my:awesome:task --any=config
```

```javascript
// my-task.js
const jake = require('jake')

jake.namespace('my', () => {
  jake.task('task', () => {
    // ... doSomething();
  })

  jake.task('execute-another-task', () => {
    jake.execute('another-task', {
      some: 'options to pass'
    })
  })
})
```

## FAQ

* [Why another **jake**?](#why-another-jake)
* [How **jake** find the tasks?](#how-jake-find-the-tasks)
* [Are there configurations for the behavior of **jake**?](#are-there-configurations-for-the-behavior-of-jake)

### Why another **jake**?

cuz the others does not satisfy me :P

### How **jake** find the tasks?

**jake** automatically scans installed modules and is looking for tasks.
Tasks can be applied through several ways (conventions):

1. a folder named `jake` - files inside will be loaded
2. files named `*.jake.js`
3. config property named `jake` inside `package.json`

### Are there configurations for the behavior of **jake**?

Yes. **jake** can be configured through `rc`-files and package.json
