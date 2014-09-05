//Set localstorage variable to selected language
$('input').click(function(e){
    e.preventDefault();
    var $target = $(e.target);
    var lang = $target.attr('name');
    localStorage.setItem('lang', lang);
    location.reload();
});

//Create a global language variable and set moment's global locale
var language = localStorage
  .getItem('lang') || 'en-GB';
moment.locale(language);

//Dates each book was published
var dates = {
  'one': 867283200, 
  'two': 899347779, 
  'three': 931402179
};

//Add bookstore name to header using MESSAGEFORMAT.JS
$('<span>').text(
  window.i18n['bookstore'].store())
  .appendTo($('#header')
);

//Get cost
var cost = parseInt(window.i18n['cost'].cost());
var currency = window.i18n['cost'].currency();

//Format the currency using the INTERNATIONALIZATION API
var formattedCost = cost.toLocaleString(
  language, {style: 'currency', currency: currency}
);

//Add data for each book
for (var i in window.i18n['titles']) {

  $('<div class="book" id="book-' + i + '">')
    .appendTo($('#content'));

  //Add the title and cover image using MESSAGEFORMAT.JS
  var title = (window.i18n['titles'][i])();

  $('<div class="title">')
    .html(title)
    .appendTo($('#book-' + i));

  var cover = (window.i18n['covers'][i])();

  $('<img class="cover">')
    .attr({'src': cover, 'class': 'covers'})
    .appendTo($('#book-' + i));

  //Format the date using MOMENT.JS
  var formattedDate = moment(dates[i], "X")
    .format("LL");
  $('<div class="date">')
    .text(formattedDate)
    .appendTo($('#book-' + i));

  $('<div class="cost">')
    .text(formattedCost)
    .appendTo($('#book-' + i));
}