function getData() {
  $.get('/data')
    .then(function(data) {
      for ( var i = 0; i < data.length; i++ ) {
        $('#people').append(
          '<div class="person">' +
            '<h3>Name: ' + data[i].name + '</h3>' +
            '<p>Age: ' + data[i].age + '</p>' +
          '</div>'
        );
      }
    });
}

getData();