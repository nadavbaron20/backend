require('dotenv').config();
const connectDB = require('./config/db');
const { cards, users } = require('./data/data');
const Card = require('./models/Card');
const User = require('./models/User');
const seedAll = async () => {
  console.log('\nDatabase seeding started...');
  try {
    // Seed cards
    await Card.deleteMany();
    const insertedCards = await Card.insertMany(cards);
    console.log(`  [i] Inserted ${insertedCards.length} cards`);
    // Seed users
    await User.deleteMany();
    const insertedUsers = await User.insertMany(users);
    console.log(`  [i] Inserted ${insertedUsers.length} users`);
    // Success
    console.log('[v] Completed successfully');
    process.exit(0);
  } catch (e) {
    // Error
    console.log('[x] Seeding error');
    console.log(e.message);
    process.exit(1);
  }
};
// Connect to database and seed all collections
connectDB().then(seedAll);