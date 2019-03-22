$(document).ready(function(){
    $('input[type="file"]').change(function(e){
        const fileName = e.target.files[0].name;
        alert('The file "' + fileName +  '" has been selected.');
    });
});

const postDocx = () => {
	$.ajax({
		url: "http://localhost:8000/docx",
		type: "POST",
		crossDomain: "true",
		xhrFields: {
			withCredentials: false
		},
		data: {
			file: {

			}
		},
		dataType: 'JSON',
		success: function(data, textStatus, jqXHR) {

		},
		error: function(jqXHR, textStatus, errorThrown) {

		}
	});
};

const postPdf = () => {
	$.ajax({
		url: "http://localhost:8000/pdf",
		type: "POST",
		crossDomain: "true",
		xhrFields: {
			withCredentials: false
		},
		data: {
			file: {

			}
		},
		dataType: 'JSON',
		success: function(data, textStatus, jqXHR) {

		},
		error: function(jqXHR, textStatus, errorThrown) {

		}
	});
};