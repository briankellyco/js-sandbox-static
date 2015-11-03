// Module pattern is an anonymous function that bootstraps itself.
var jsFiddleConsole = function() {
    return({
        log: function(msg) {
          consoleDiv = document.getElementById('console');
          p = document.createElement('p');
          text = document.createTextNode(msg);
          p.appendChild(text);
          consoleDiv.appendChild(p);
        }
    });
}();