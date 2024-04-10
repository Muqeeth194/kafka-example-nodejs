import { kafka_broker } from "./index.js";

const producer = kafka_broker.producer()

// connect the producer to the broker
await producer.connect()
console.log("Producer is connected");


await producer.send({
    topic: 'topic-1',
    messages: [
        // first message
        {
            partition: 0,
            key: "user",
            value: JSON.stringify({name: 'Muqeeth', age: 26})
        },
        {
            partition: 1,
            key: "user",
            value: JSON.stringify({name: 'Ahmed', age: 27})
        },
    ]
})
console.log("Producer sent the message");


await producer.disconnect()
console.log("Producer is disconneted");

