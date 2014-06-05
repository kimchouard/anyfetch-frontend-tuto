var jqxhr = $.ajax({
		type: 'GET',
		dataType: 'json',
		url: 'https://api.anyfetch.com/status'
	})
  .done(function(data) {
    console.log( data );
  })
  .fail(function(jqXHR, textStatus) {
    console.log(textStatus, jqXHR );
  });