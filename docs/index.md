# jake - simple nodejs task runner

* [install](install)
* [usage](usage)
* [config](config)

**simple example**

```bash
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
