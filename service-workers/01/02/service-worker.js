self.addEventListener('install', function(e){
    console.log('Install Event : ', e);
});

self.addEventListener('activate', function(e){
    console.log('Activate Event : ', e);
});

self.addEventListener('statechange', function(e){
    console.log('State Change : ', e.target.state);
});