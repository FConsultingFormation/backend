# Code Citations

## License: unknown
https://github.com/jozzbruer/Go-Full-Stack/tree/9c98aa33a630bab0343ba5c2ac1c758991b0ae13/backend/server.js

```
(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
};

const port = normalizePort(process.env.PORT || '3000');
app.set('port'
```


## License: unknown
https://github.com/jozzbruer/Go-Full-Stack-2/tree/a4c63940994b4bbffc9b4df57a1d529f8c7f6dfd/backend/server.js

```
{
  const port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
};

const port = normalizePort(process.env.PORT || '3000');
app.
```


## License: Apache_2_0
https://github.com/SiddharthaChowdhury/express-boilerplate/tree/1443b93072ad390ec20999e3120e2325b228de1b/app/app.js

```
' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use
```


## License: unknown
https://github.com/romaingd/Dev/tree/7f0f7f64be1c90f335e6e784b72081940cffb5c1/OpenClassrooms/019-Node_js_Express_and_MongoDB/go-fullstack-recipe/backend/server.js

```
.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
```


## License: unknown
https://github.com/Rian-Sanjaya/Recipe-Fullstack/tree/7de55ac862aacfb207f79a049d0b7f98bcbaf629/backend/server.js

```
requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

//
```

