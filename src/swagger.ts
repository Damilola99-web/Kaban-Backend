import swaggerAutogen from 'swagger-autogen';

import { config } from 'dotenv';
config();
console.log(process.env.HOST_URL);

const doc = {
	info: {
		title: 'Kaban API',
		description: 'The API documentation for the kaban task management app',
	},
	host: process.env.HOST_URL,
	schemes: ['http', 'https'],
};

const outputFile = './documentation/swagger.json';
const endpointsFile = ['./index.js', './route.js'];

swaggerAutogen(outputFile, endpointsFile, doc);
