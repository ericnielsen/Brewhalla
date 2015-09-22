var getList = document.getElementsByTagName('ul');
getList[0].addEventListener('click', function(event) {
        var target = event.target;
         var messageText = 'Breweries located in ' + target.textContent + ':';
         var messageDiv = document.getElementById('message');
         messageDiv.innerHTML = messageText;
        var term =event.target.textContent;
        var request = new XMLHttpRequest();
        request.open('GET', 'http://localhost:1337/search/data/' + term);
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
                        var brewPic = document.createElement("p");
                        brewPic.innerHTML = "<img src =" + dataObject.image_url + ">";
                        var brewName = document.createElement("p");
                        brewName.setAttribute('class','nametitle');
                        brewName.textContent = dataObject.name;
                        var brewAdd = document.createElement("p");
                        brewAdd.textContent = dataObject.location.display_address;
                        var brewPhone = document.createElement("p");
                        brewPhone.textContent = dataObject.display_phone;
                        var brewEmail = document.createElement("p");
                        brewEmail.textContent = dataObject.url;
                        var brewRating = document.createElement("p");
                        brewRating.textContent = 'rating: ' + dataObject.rating;
                        var destDiv = document.getElementById('datacontent');
                        var picDiv = document.createElement("div");
                        picDiv.setAttribute('id', 'picdiv');
                        var dataDiv = document.createElement("div");
                        dataDiv.setAttribute('id', 'datadiv');
                        destDiv.appendChild(picDiv);
                        destDiv.appendChild(dataDiv);
                        picDiv.appendChild(brewPic);
                        dataDiv.appendChild(brewName);
                        dataDiv.appendChild(brewAdd);
                        dataDiv.appendChild(brewPhone);
                        dataDiv.appendChild(brewEmail);
                        dataDiv.appendChild(brewRating);
                    }
                }
            }
        });
    },
    false);