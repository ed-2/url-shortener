import mongoose, {Schema} from 'mongoose';
import { stringifyConfiguration } from 'tslint/lib/configuration';
import { config } from '../config/Constants';

export class MongoConnection {
	public async connect(): Promise<void> {
		try {
			await mongoose.connect(config.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true});
			console.log('Database connected')
		} catch (err) {
			console.log('Verifique as configurações de conexão do arquivo .env');
			console.log('Acesse Network Access do mongoDB e atualize o seu IP atual');
			console.error(err.message);
			process.exit(1)
		}
	}
}
