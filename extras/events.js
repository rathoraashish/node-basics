const events = require('events');
const eventEmitter = new events()

// eventEmitter.on('start', () => {
//     console.log('started')
// })

eventEmitter.on('start', (start, end) => {
    console.log(`started from ${start} to ${end}`)
})

eventEmitter.emit('start', 1, 100)

// eventEmitter.emit('start');