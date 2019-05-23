// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { desktopCapturer } = require('electron');

desktopCapturer.getSources( { types: ['window'] } )
    .then( windows => {
        console.log( windows );

        const div = document.querySelector('.windows');

        windows.forEach( ( window, index ) => {
            const windowDiv = document.createElement('div');
            windowDiv.classList.add('window-object')
            windowDiv.innerHTML = `${index + 1}: ${JSON.stringify( window, null, 4 ) }`;
            div.appendChild( windowDiv );
        } );

        // div.innerHTML = JSON.stringify( windows, null, 4 );
    } )
    .catch( err => console.error( err ) );
