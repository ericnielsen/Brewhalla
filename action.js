function showDiv(theEvent) {
    var target = theEvent.target;
    var targetData = target.getAttribute('data-nav');
    var alisoData = document.getElementById('aliso').getAttribute('data-nav');
    var anaheimData = document.getElementById('anaheim').getAttribute('data-nav');
    var firstDiv = document.getElementById('first');
    var secondDiv = document.getElementById('second');

    var messageText = 'Breweries located in ' + target.textContent;
    var messageDiv = document.getElementById('message');
    messageDiv.innerHTML = messageText;

    if (targetData == alisoData) {
        firstDiv.style.display = "block";
    }
    else if (targetData ==anaheimData) {
        secondDiv.style.display ="block";
    }

}
var getList = document.getElementsByTagName('ul');
getList[0].addEventListener('click', function(event){console.log(event.target);
    showDiv(event)
}, false);

$('a').on('click', function(){
   var target = $(this).attr('rel');
   $("#"+target).show().siblings("div").hide();
});

