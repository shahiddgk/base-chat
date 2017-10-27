// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyApFZ0arM3pE2Hd4df_XW_XY1UFyHbzz90',
    authDomain: 'chat-demo-902d0.firebaseapp.com',
    databaseURL: 'https://chat-demo-902d0.firebaseio.com',
    projectId: 'chat-demo-902d0',
    storageBucket: 'chat-demo-902d0.appspot.com',
    messagingSenderId: '700071626748'
  }
};
