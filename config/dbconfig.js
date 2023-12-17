import mongoose from "mongoose";

const connectToDB = async () => {
  const { connection } = await mongoose.connect(
    `mongodb+srv://antaranitdgp11:${process.env.DATABASE_PASSWORD}@cluster0.wqvijmq.mongodb.net/ImdbApp`
  );
  if (connection) {
    console.log(`Connection to Database ${connection.host}`);
  }
};
export default connectToDB;
