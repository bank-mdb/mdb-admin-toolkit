# Usage

```
import {VueBus} from 'mdb-admin-toolkit';

Vue.use(VueBus);
```

## Listen and clean

```
// ...
created() {
  this.$bus.on('add-todo', this.addTodo);
  this.$bus.once('once', () => console.log('This listener will only fire once'));
},
beforeDestroy() {
  this.$bus.off('add-todo', this.addTodo);
},
methods: {
  addTodo(newTodo) {
    this.todos.push(newTodo);
  }
}
```

## Trigger

```
// ...
methods: {
  addTodo() {
    this.$bus.emit('add-todo', { text: this.newTodoText });
    this.$bus.emit('once');
    this.newTodoText = '';
  }
}
```

# Another way to use vue-bus

```
// xxx.js
import Vue from 'vue';

Vue.bus.emit('someEvent');
```

see at https://github.com/yangmingshan/vue-bus
