const Kafka = require('kafkajs');

console.log("*** Consumer starts... ***");

const consumer = Kafka.KafkaConsumer({
    'group.id':'kafka',
    'metadata.broker.list':'localhost_9092'
}, {});

consumer.connect();

consumer.on('ready', () => {
    console.log('consumer ready...');
    consumer.subscribe(['task']);
    consumer.subscribe(['answer']);
    consumer.consume();
}).on('data', (data) => {
    console.log(`received message: ${data.value}`);
});