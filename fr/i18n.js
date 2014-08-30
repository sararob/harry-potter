(function(G){G['i18n']={lc:{"fr":function(n){return n===0||n==1?"one":"other"}},
c:function(d,k){if(!d)throw new Error("MessageFormat: Data required for '"+k+"'.")},
n:function(d,k,o){if(isNaN(d[k]))throw new Error("MessageFormat: '"+k+"' isn't a number.");return d[k]-(o||0)},
v:function(d,k){i18n.c(d,k);return d[k]},
p:function(d,k,o,l,p){i18n.c(d,k);return d[k] in p?p[d[k]]:(k=i18n.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){i18n.c(d,k);return d[k] in p?p[d[k]]:p.other}}
i18n["bookstore"]={
"store":function(d){return "Librairie"}}
i18n["cost"]={
"cost":function(d){return "5"},
"currency":function(d){return "EUR"}}
i18n["covers"]={
"one":function(d){return "css/covers/fr-1.jpg"},
"two":function(d){return "css/covers/fr-2.jpg"},
"three":function(d){return "css/covers/fr-3.jpg"}}
i18n["titles"]={
"one":function(d){return "Harry Potter A L'Ecole des Sorciers"},
"two":function(d){return "Harry Potter Et la Chambre des Secrets"},
"three":function(d){return "Harry Potter Et le Prisonnier D'Azkaban"}}
})(this);
