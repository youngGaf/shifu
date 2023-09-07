import mongoose from "mongoose";

export const connect = async () => {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(`${process.env.MONGO_URI}`).then(() => {
        console.log('Successfully connected to mongodb atlas');
      });
    } catch (err: any) {
      console.error('App starting error:', err.stack);
    }
  }
};

export const disconnect = async () => {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
    console.log('Database closed successfully');
  }
};

