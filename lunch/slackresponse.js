exports.about = function(){
    return 'Aplikacja służąca do zażądzania zamówieniami na lunch';
};

exports.help = function(){
    return 'Lista komend: \n' +
            'About - informacje o aplikacji\n' 
        +  'Menu - przedstawia aktualne menu\n'
        +  'Phone - dane adresowe do restauracji\n'
        +  'Random - wybiera losową potrawę z menu';
}

exports.unknownCommand = function(){
    return "unknown command";
}

exports.order = function(){
    
}