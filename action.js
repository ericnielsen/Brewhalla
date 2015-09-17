function showDiv(theEvent) {
    var target = theEvent.target;
    var targetData = target.getAttribute('data-nav');
    var alisoData = document.getElementById('aliso').getAttribute('data-nav');
    var firstDiv = document.getElementById('first');
    if (targetData == alisoData) {
        firstDiv.style.display = "block";
    }
}

var getList = document.getElementsByTagName('ul');
getList[0].addEventListener('click', function(event){console.log(event.target)
    showDiv(event)
}, false);