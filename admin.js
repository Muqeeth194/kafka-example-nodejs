import { kafka_broker } from "./index.js";

async function init() {
    const admin = kafka_broker.admin();
    console.log("Admin connecting...");
    admin.connect();
    console.log("Adming Connection Success...");

    console.log("Creating Topic");
    await admin.createTopics({
        topics: [
            {
            topic: "topic-1",
            numPartitions: 2,
            },
        ],
        });
        console.log("Topic Created Success");
    
        console.log("Disconnecting Admin..");
        await admin.disconnect();
    }
    
    init();