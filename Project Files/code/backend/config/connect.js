// const mongoose = require('mongoose');

// const connectionOfDb = () => {
//   mongoose
//     .connect(process.env.MONGO_DB, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(() => {
//       console.log('Connected to MongoDB');
//     })
//     .catch((err) => {
//       throw new Error(`Could not connect to MongoDB: ${err}`);
//     });
// };

// module.exports = connectionOfDb;


const mongoose = require('mongoose');

const connectionOfDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("MongoDB Connection Error:", error);
    process.exit(1);
  }
};

module.exports = connectionOfDb;
