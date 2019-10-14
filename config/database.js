const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://sei:${process.env.DATABASE_URL}@sei-1hogc.gcp.mongodb.net/react-mastermind?retryWrites=true&w=majority`, { useNewUrlParser: true });

const db = mongoose.connection;

db.once('connected', () => {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});