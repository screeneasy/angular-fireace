angular-fireace
===============
__firebase + ace = fireace__

use fireace to have collaborative editing that's as easy as using an html tag:

```
<fireace firebaseurl="https://<your-project>.firebaseio.com/codecollab/myhash"></fireace>
```

also don't forget to add the dependency in your project:

```
angular.module('foo', ['fireace'])
```

Dependencies
============
[ace-ui](https://github.com/angular-ui/ui-ace)
[ace-builds](https://github.com/ajaxorg/ace-builds/)
[angularFire](https://github.com/firebase/angularFire)
[angular](https://github.com/angular/angular.js)
