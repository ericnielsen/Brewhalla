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
        console.log('http://localhost:1337/search/data/' + term)
        request.send();
        request.addEventListener('load', function() {
            var reset = document.getElementById('datacontent');
            reset.innerHTML = "";
            var getData = JSON.parse(request.responseText);
            for(var i = 0; i < getData.businesses.length; i++) {
                var dataObject = getData.businesses[i];
                var dataCity = (dataObject.location.city);
                if (dataCity == term) {
                    for (var x = 0; x < dataObject.name[x].length; x++) {
                        var brewName = document.createElement("p");
                        brewName.textContent = dataObject.name;
                        var brewAdd = document.createElement("p");
                        brewAdd.textContent = dataObject.location.display_address;
                        var destDiv = document.getElementById('datacontent');
                        destDiv.appendChild(brewName);
                        destDiv.appendChild(brewAdd);
                    }
                }
            }
        });
    },
    false);