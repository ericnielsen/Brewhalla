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
                        brewPic.setAttribute('class', 'picloc');
                        brewPic.innerHTML = "<img class = 'pic' src =" + dataObject.image_url + ">";
                        var brewName = document.createElement("p");
                        brewName.setAttribute('class','nametitle');
                        brewName.innerHTML = "<a href=" + dataObject.url + ">" + dataObject.name +'</a>';
                        var brewAdd = document.createElement("p");
                        brewAdd.innerHTML = "Address: " + dataObject.location.display_address;
                        var brewPhone = document.createElement("p");
                        brewPhone.innerHTML = "Phone Number: " + dataObject.phone;
                        var brewRating = document.createElement("p");
                        brewRating.innerHTML = "YelpRating: " + "<img src =" + dataObject.rating_img_url_large + ">";
                        var picDiv = document.createElement("div");
                        picDiv.setAttribute('id', 'picdiv');
                        var dataDiv = document.createElement("div");
                        dataDiv.setAttribute('id', 'datadiv');
                        var blockDiv = document.createElement("div");
                        blockDiv.setAttribute('id', 'blockdiv');
                        blockDiv.setAttribute('class','row');
                        var destDiv = document.getElementById('datacontent');
                            destDiv.appendChild(blockDiv);
                            blockDiv.appendChild(picDiv);
                            blockDiv.appendChild(dataDiv);
                            picDiv.appendChild(brewPic);
                            dataDiv.appendChild(brewName);
                            dataDiv.appendChild(brewAdd);
                            dataDiv.appendChild(brewPhone);
                            dataDiv.appendChild(brewRating);
                    }
                }
            }
        });
    },
    false);