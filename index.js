const canvas = document.getElementById('mainCanvas');

const worker = new Worker('worker.js');

const offscreen = canvas.transferControlToOffscreen();
worker.postMessage( {canvas: offscreen}, [offscreen] );

const channel = new MessageChannel();
worker.postMessage( {port: channel.port1}, [channel.port1] );

channel.port2.onmessage = (event) => {
    console.log('Сообщение от Worker: ', event.data);
};
