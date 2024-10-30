'use strict'

const MongoClient = require("mongodb").MongoClient;

const MongoDBMaster = class {
  constructor(){
    this.url = "mongodb://127.0.0.1:27017/"
    this.client = new MongoClient(this.url);
  }

  connect = async function(){
    await this.client.connect();
    this.db = this.client.db("bot_data");
    this.users = this.db.collection("users");
    this.sessions = this.db.collection("sessions");
  }

  disconnect = async function(){
    await this.client.disconnect();
  }
}

//module.exports = MongoDBMaster;

let x = new MongoDBMaster();
x.connect().then(a => {
x.sessions.insertOne({
  id: 1212121212,
  stage: "AGE"
});
})


