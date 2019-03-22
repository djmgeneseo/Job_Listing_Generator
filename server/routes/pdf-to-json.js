var pdf_table_extractor = require("pdf-table-extractor");

const convertPdfToJson = (file, res) => {
	const successHelper = (result) => {
		console.log('PDF file recieved!')
		res.send(result)
	}

	const errorHelper = (result) => {
		res.send(result);
	}

	pdf_table_extractor(file.path, successHelper, errorHelper);
}

module.exports = function(app) {
	app.post('/pdf', (req, res) => {
		convertPdfToJson(req.files['file'], res);
	});
}