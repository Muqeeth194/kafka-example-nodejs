import { kafka_broker } from "./index.js";
const group = process.argv[2];

async function init() {
        const consumer = kafka_broker.consumer({ groupId: group });
        await consumer.connect();
    
        await consumer.subscribe({ topics: ["topic-1"], fromBeginning: true });
    
        await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            console.log(
            `${group}: [${topic}]: PART:${partition}:`,
            message.value.toString()
            );
        },
        });
    }
    
    init();
