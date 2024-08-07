import {EventEmitter} from 'events';

const myEmmiter = new EventEmitter();

function greetHandler(name) {
    console.log('Hello, World! from ' + name);
}

function goodbyeHandler(name) {
    console.log('Good Bye, Friends! ' + name);
}

// register event listner
myEmmiter.on('greet', greetHandler);
myEmmiter.on('goodbye', goodbyeHandler);

// emit events
myEmmiter.emit('greet', 'John');
myEmmiter.emit('goodbye', "John");


// error handling
myEmmiter.on('error', (err) => {
  console.log('An Error Occured: ' + err);
})

// simulate error
myEmmiter.emit('error', new Error('something went wrong'));
