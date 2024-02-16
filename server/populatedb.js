#! /usr/bin/env node

console.log(
  'This script populates some test players to database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"',
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Player = require('./models/player');

const players = [];

const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log('Debug: About to connect');
  await mongoose.connect(mongoDB);
  console.log('Debug: Should be connected?');
  await createPlayers();

  console.log('Debug: Closing mongoose');
  mongoose.connection.close();
}

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const remainingSeconds = timeInSeconds % 60;

  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

// We pass the index to the ...Create functions so that, for example,
// genre[0] will always be the Fantasy genre, regardless of the order
// in which the elements of promise.all's argument complete.
async function playerCreate(index, name, seconds) {
  const time = formatTime(seconds);
  const player = new Player({ name, seconds, time });

  await player.save();
  players[index] = player;
  console.log(`Added player: ${name, seconds, time}`);
}

async function createPlayers() {
  console.log('Adding players');
  await Promise.all([
    playerCreate(0, 'Supermen', 300),
    playerCreate(1, 'Spidermen', 4000),
    playerCreate(2, 'Captain America', 2000),
  ]);
}
