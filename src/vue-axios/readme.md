## How to install

```
import Vue from 'vue';
import axios from 'axios';
import { VueAxios } from 'mdb-admin-toolkit';
Vue.use(VueAxios, axios);

```

## Usage

```
Vue.axios.get(api).then((response) => {
  console.log(response.data)
})

this.axios.get(api).then((response) => {
  console.log(response.data)
})

this.$http.get(api).then((response) => {
  console.log(response.data)
})
```
