import mongoose, { ConnectOptions } from 'mongoose';

const mongoUrl = process.env.MONGO_URL || 'mongodb://math-db:27017/questions';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
};

export default connectDB;
