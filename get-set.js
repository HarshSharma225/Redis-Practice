import { createClient } from 'redis';

const client = createClient({
    username: 'default',
    password: '20ihUs6upTdt4zKgjaKvT6TGHvuLvXgU',
    socket: {
        host: 'slateblue-business-macrofast-40136.db.redis.io',
        port: 17342
    }
});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

// let res = await client.set("name","Radha")
let name = await client.get("name")

console.log(name);

process.exit(0);