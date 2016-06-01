
var reviews = [
  {
    name: 'Starbucks',
    reviewer: 'Tom',
    review: 'I enjoy coming here because the staff remembers me by name and they are very courteous. The place is clean and well kept.'
  },
  {
    name: 'La Salsa',
    reviewer: 'Brittney',
    review: 'They have a wide selection of salsas to choose from. My favorite is the avacado. It gets pretty busy for lunch time, so I like the fact that I can call ahead and place my order. Then I do not have to wait in line.'
  },
  {
    name: 'Discount Tire',
    reviewer: 'Sam',
    review: 'Buying tires can be pretty expensive if you come here. The upside is purchasing the warranty. Then whenever something happens to your tire, you can get it replaced for a reasonable price.'
  }
]
var push = document.getElementById('searchbutton');

function partialMatch(text) {
  var suggestions = [];
  for ( var i = 0; i < reviews.length; i = i + 1 ) {
    var offset = reviews[i].name.indexOf(text);
    if (offset === -1) {
    } else {
      suggestions.push(reviews[i]);
    }
  }
  return suggestions;
}

push.addEventListener('click', function() {
  var term = document.getElementById('term');
  var matches = partialMatch(term.value);
  for ( var i = 0; i < matches.length; i++ ) {
    document.body.appendChild(review(matches[i]))
  };
});
var msg = ' wrote a review for ';

function review(data) {
  var container = document.createElement('div');
  container.setAttribute('class', 'col-md-12 panel panel-default wrote');

  var customer = document.createElement('span');
  customer.textContent = data.reviewer;


  var write = document.createElement('span');
  write.textContent = msg;

  var business = document.createElement('span');
  business.textContent = data.name;

  var critique = document.createElement('div');
  critique.textContent = data.review;

  container.appendChild(customer);
  customer.appendChild(write);
  write.appendChild(business);
  business.appendChild(critique);
  return container;


}
