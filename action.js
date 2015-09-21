var getList = document.getElementsByTagName('ul');
getList[0].addEventListener('click', function(event) {

        /* var target = event.target;
         var messageText = 'Breweries located in ' + target.textContent;
         var messageDiv = document.getElementById('message');
         messageDiv.innerHTML = messageText;
         */
        var term = event.target.textContent;
        var request = new XMLHttpRequest();
        request.open('GET', 'http://localhost:1337/search/data/' + term);
        request.send();
        request.addEventListener('load', function() {
            var getData = JSON.parse(request.responseText);
            //console.log(getData.businesses[0].name);
            for(var i = 0; i < getData.businesses.length; i++) {
                //console.log(getData.businesses[i]);
                var dataObject = getData.businesses[i];
                var dataCity = (dataObject.location.city);
             if (dataCity == term) {
                //console.log('test')
                console.log(dataObject.name);
                console.log(dataObject.location.display_address)
             }
            }


            /* var test = getData.businesses[0].name;
             var dataDiv = document.getElementById('datacontent');
             dataDiv.textContent = test; */
        });
    },
    false);

