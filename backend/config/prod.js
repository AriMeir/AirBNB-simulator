export default {
  dbURL: process.env.MONGO_URL || 'mongodb+srv://qwe123qwe:qwe123qwe@cluster0.2xlbc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  dbName : process.env.DB_NAME || 'Airbnb'
}
