var express = require('express');
var app = express();

app.get('/', (req, res) => {
	let html_code ="";
	for (i = 0; i < 50; i++) {
		if ((i+1) % 2 == 0) {
			html_code = html_code + `<p>${i+1} Soy Par!</p>`;
		} else {
			html_code = html_code + `<p>${i+1} Soy Impar!</p>`;
		} 
		
	}
	res.send(html_code);
});

app.listen(3000, () => console.log('Listening on port 3000!'));