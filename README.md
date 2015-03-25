# laravel-elixir-sync

Watch source files and sync them to destination.

## Install

```sh
$ npm install laravel-elixir-sync --save-dev
```

## Usage

```javascript
var elixir = require('laravel-elixir');
require('laravel-elixir-sync');

elixir(function(mix) {
  mix.sync('resources/assets/js/**/*.js', 'public/js');
});
```

Then run tasks:

```bash
gulp
```

Or just sync folders only:

```bash
gulp sync
```

## License

MIT
