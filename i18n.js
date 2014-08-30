(function(G){G['i18n']={lc:{"en":function(n){return n===1?"one":"other"}},
c:function(d,k){if(!d)throw new Error("MessageFormat: Data required for '"+k+"'.")},
n:function(d,k,o){if(isNaN(d[k]))throw new Error("MessageFormat: '"+k+"' isn't a number.");return d[k]-(o||0)},
v:function(d,k){i18n.c(d,k);return d[k]},
p:function(d,k,o,l,p){i18n.c(d,k);return d[k] in p?p[d[k]]:(k=i18n.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){i18n.c(d,k);return d[k] in p?p[d[k]]:p.other}}
i18n["de/titles"]={
"store":function(d){return "Buchhandlung"},
"one":function(d){return "Harry Potter Und der Stein der Weisen"},
"two":function(d){return "Harry Potter Und die Kammer des Schreckens"},
"three":function(d){return "Harry Potter Und der Gefangene von Askaban"}}
i18n["en-GB/titles"]={
"store":function(d){return "Bookshop"},
"one":function(d){return "Harry Potter and the Philosopher's Stone"},
"two":function(d){return "Harry Potter and the Chamber of Secrets"},
"three":function(d){return "Harry Potter and the Prisoner of Azkaban"}}
i18n["en-US/titles"]={
"store":function(d){return "Bookstore"},
"one":function(d){return "Harry Potter and the Sorcerer's Stone"},
"two":function(d){return "Harry Potter and the Chamber of Secrets"},
"three":function(d){return "Harry Potter and the Prisoner of Azkaban"}}
i18n["es/titles"]={
"store":function(d){return "Librería"},
"one":function(d){return "Harry Potter y la Piedra Filosofal"},
"two":function(d){return "Harry Potter y la Cámara Secreta"},
"three":function(d){return "Harry Potter y el Prisionero de Azkaban"}}
i18n["fr/titles"]={
"store":function(d){return "Librairie"},
"one":function(d){return "Harry Potter A L'Ecole des Sorciers"},
"two":function(d){return "Harry Potter et la Chambre des Secrets"},
"three":function(d){return "Harry Potter Et le Prisonnier D'Azkaban"}}
})(this);
