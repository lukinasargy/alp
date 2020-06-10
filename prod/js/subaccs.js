document.addEventListener("DOMContentLoaded", function () {
	
	function getURLParams(url) {
		var url = url || location.search;
		var urlParams = {};
		var match,
			pl = /\+/g,
			search = /([^&=]+)=?([^&]*)/g,
			decode = function (s) {
				return decodeURIComponent(s.replace(pl, " "));
			},
			query = window.location.search.substring(1);
		while (match = search.exec(query))
			urlParams[decode(match[1])] = decode(match[2]);

		return urlParams;
	}

	function createHiddenInput(name, value) {
		let input = document.createElement('input');
		input.setAttribute("type", "hidden");
		input.setAttribute("name", name);
		input.setAttribute("value", value);
		return input;
	}

	function setHiddenInputs() {
		const forms_array = document.querySelectorAll("form");
		const params = getURLParams();


		for (let i = 0; i < forms_array.length; i++) {


			for (let key in params) {
				forms_array[i].insertBefore(createHiddenInput(key, params[key]), forms_array[i].firstChild);
			}
		}

	}

	setHiddenInputs();


});
