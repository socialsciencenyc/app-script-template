# app-script-template

Google Apps Script Application with webpack.

# For Local Development

For Apps Script local development, You need to be enable Apps Script API: https://script.google.com/home/usersettings. This project will be use [clasp](https://github.com/google/clasp) to push Apps Script Project.

.clasp.json:
```json
{
    "scriptId": "<YOUR_SCRIPT_ID>",
    "rootDir": "dist"
}
```

Please see [clasp](https://github.com/google/clasp) and [Command Line Interface using clasp](https://developers.google.com/apps-script/guides/clasp) for details.

# Deploy

```sh
$ npm run build
$ npm run push
```
