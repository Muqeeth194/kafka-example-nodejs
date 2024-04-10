import { Kafka } from 'kafkajs';

// Create the client with the broker list
export const kafka_broker = new Kafka({
    clientId: 'my-kafka-app',
    brokers: ['192.168.1.2:9092']
  })