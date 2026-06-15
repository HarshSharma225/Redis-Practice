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

// let res = await client.set("cId",120,"123")
// let res = await client.mSet({"FullName": "Harsh Sharma", "LastName":"Sharma"})

// INSERT IN LIST
// let res = await client.lPush("animals","lion")
// let res = await client.rPush("animals",["monkey","zebra","Dog"])

// let res = await client.lRange('animals', 0,-1);
// let res = await client.lRange('animals', 1,2);

// await client.lPush("animals","cat");
let res = await client.blPop("animals",0);
console.log(res)


process.exit(0);