var Module = Module || {};
(function(_Module) {
    var name = "NoName";
    function getName() {
        return name;
    }
    _Module.showName = function() {
        console.log(name);
    }
    _Module.setName = function(x) {
        name = x;
    }
})(Module);

Module.showName();
Module.setName("Tom");
Module.showName();