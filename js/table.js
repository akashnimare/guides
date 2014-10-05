 $(function() {

        $.getJSON('assets/data.json', function(data){

          var html='<thead><tr><th>Fellow ID</th><th>Name</th><th>Specialization</th><th>Area of Interest</th><th>Subarea of Interest</th><th>ApplicantType</th><th>Accommodation</th></tr></thead><tbody>';
          for (i in data) {
       


            html += '<tr><td>' + data[i].ID + 
            '</td><td>' + data[i].Name + 
            '</td><td>' + data[i].Specialization + 
            '</td><td>' + data[i]['Area of Interest'] + 
            '</td><td>'+ data[i].Subarea +
            '</td><td>' + data[i].ApplicantType +
            '</td><td>' + data[i].Accommodation
            '</td></tr>';
          }
          html += '</tbody>';
          $('table').html(html).dataTable(
            {"bPaginate":false, 
            "bFilter":true, 
            "bInfo": false,
            "bSort": true, 
            "bAutoWidth": false,
             
           "aaSorting":[[0,'asc']]});
          $('.loader').remove();
        });
      });