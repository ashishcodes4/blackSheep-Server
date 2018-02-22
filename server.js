










const express = require('express');
const app = express();
const port = process.env.PORT ;

app.get('/', (req, res) => {
	res.send('root route');
})

app.post('/sign', (req, res) => {
	console.log('from the post sign in page');
})

app.listen(8000, ()=>{
	console.log("server running on port 8000" );
})