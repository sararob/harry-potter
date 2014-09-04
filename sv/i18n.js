(function(G){G['i18n']={lc:{"sv":function(n){return n===1?"one":"other"}},
c:function(d,k){if(!d)throw new Error("MessageFormat: Data required for '"+k+"'.")},
n:function(d,k,o){if(isNaN(d[k]))throw new Error("MessageFormat: '"+k+"' isn't a number.");return d[k]-(o||0)},
v:function(d,k){i18n.c(d,k);return d[k]},
p:function(d,k,o,l,p){i18n.c(d,k);return d[k] in p?p[d[k]]:(k=i18n.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){i18n.c(d,k);return d[k] in p?p[d[k]]:p.other}}
i18n["bookstore"]={
"store":function(d){return "Bookhandel"}}
i18n["cost"]={
"cost":function(d){return "49"},
"currency":function(d){return "SEK"}}
i18n["covers"]={
"one":function(d){return "css/covers/sv-1.jpg"},
"two":function(d){return "css/covers/sv-2.jpg"},
"three":function(d){return "css/covers/sv-3.jpg"}}
i18n["sub/folder/plural"]={
"text":function(d){return "You've read "+i18n.p(d,"NUM_BOOKS",0,"sv",{"one":"one book","other":i18n.n(d,"NUM_BOOKS")+" books"})+"."}}
i18n["titles"]={
"one":function(d){return "Harry Potter och de vises sten"},
"two":function(d){return "Harry Potter och Hemligheternas kammare"},
"three":function(d){return "Harry Potter och f&aring;ngen fr&aring;n Azkaban"}}
})(this);
