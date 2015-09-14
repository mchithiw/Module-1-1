$(function () {


	//read json from url
	$.ajax({
		url: "http://it-ebooks-api.info/v1/search/modern%20web",
		dataType: 'json'
	}).done(function(data) {

		//counter to track # of results
		var counter = 0;

		//loop through all book objects
		$.each(data.Books, function(key, value) {

			//get data from file
			var title = value.Title;
			var subTitle = value.SubTitle;
			var desc = value.Description;
			var img = value.Image;
			var isbn = value.isbn;

			//form list element for each book
			var li = "<li class=\"book\" id=\"" + isbn + "\"></li>";
			$(".main-list").append(li);

			var id = "#" + isbn;

			//create book-specific elements to append to li
			if (typeof title != "undefined")
			{
				var bookTitle = "<p class=\"book-title\">" + title + "</p>";
				$(id).append(bookTitle);
			}

			if (typeof subTitle != "undefined")
			{
				var bookSub = "<p class=\"book-subtitle\"> - " + subTitle + "</p>";
				$(id).append(bookSub);
			}

			if (typeof img != "undefined")
			{
				var bookImg = "<img class=\"book-img\" alt=\"Book Image\" src=\"" + img + "\"> </img>";
				$(id).append(bookImg);
			}

			if (typeof desc != "undefined")
			{
				var bookDesc = "<p class=\"book-desc\">" + desc + "</p>";
				$(id).append(bookDesc);
			}

			if (typeof isbn != "undefined")
			{
				var bookIsbn = "<p class=\"book-isbn\"> ISBN: " + isbn + "</p>";
				$(id).append(bookIsbn);
			}

			//unique isbn identifier for each li element to append other elements

			counter++;
			
		});

		var numResults = "<p class=\"num-results\">" + counter + " results </p>";

		$(".main-list").prepend(numResults);


	});



});