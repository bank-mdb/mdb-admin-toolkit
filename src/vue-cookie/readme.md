## How to install

```
import Vue from 'vue';
import { VueCookie } from 'mdb-admin-toolkit';
Vue.use(VueCookie);

or

let config = {expires = 1d, path = '/', domain = '', secure = '', sameSite = ''};
Vue.use(VueCookie,config);

```

## Usage

### Set a cookie

```
Vue.$cookie.set('theme','default');
or
Vue.$cookie.set(keyName, value,{expires = 1d, path = '/', domain = '', secure = '', sameSite = ''})   //return this
```

### Get a cookie

```
Vue.$cookie.get('cookieName'); // return value
```

### Remove a cookie

```
Vue.$cookie.remove('cookieName');
```

### Get All cookie name

```
Vue.$cookie.keys();// return a array
```

## Advance

### set expire times , input string type

| Unit | full name |
| ---- | --------- |
| y    | year      |
| m    | month     |
| d    | day       |
| h    | hour      |
| min  | minute    |
| s    | second    |

```
this.$cookie.set("token","value",{expires:"60s"});  // 60 second after, expire
this.$cookie.set("token","value",{expires:"30MIN"}); // 30 minute after, expire, ignore case
this.$cookie.set("token","value",{expires:"24d"});  // 24 day after, expire
this.$cookie.set("token","value",{expires:"4m"}); // 4 month after, expire
this.$cookie.set("token","value",{expires:"16h"});  // 16 hour after, expire
this.$cookie.set("token","value",{expires:"3y"}); // 3 year after, expire
```
