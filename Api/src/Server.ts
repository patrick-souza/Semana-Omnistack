import app from './App';

app.set('port', 3333);

app
  .listen(app.settings['port'])
  .on('listening', () =>
    console.log(`server listen on port ${app.settings['port']}`)
  );
