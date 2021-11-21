require('dotenv').config();

const db = {
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	name: process.env.NAME
}

export const config = {
	API_URL: 'http://localhost:3000',
	MONGO_CONNECTION: `mongodb+srv://${db.user}:${db.password}@cluster0.ydjvy.mongodb.net/${db.name}?retryWrites=true&w=majority`,
}