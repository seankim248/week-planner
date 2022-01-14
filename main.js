var $addEntryButton = document.querySelector('.add-entry-button');
$addEntryButton.addEventListener('click', showEntryFunction);

function showEntryFunction(event) {
  var $overlay = document.querySelector('.overlay');
  $overlay.classList.replace('hidden', 'display');
}

var $form = document.querySelector('form');
$form.addEventListener('submit', submitFunction);

var entries = [];
function submitFunction(event) {
  event.preventDefault();
  var $overlay = document.querySelector('.overlay');
  $overlay.classList.replace('display', 'hidden');
  var $dayInput = document.querySelector('.day-of-week');
  var $dayInputValue = $dayInput.value;
  var $time = document.querySelector('.time');
  var $timeValue = $time.value;
  var $description = document.querySelector('textarea');
  var $descriptionValue = $description.value;
  var entryData = {
    day: $dayInputValue,
    time: $timeValue,
    description: $descriptionValue
  };
  entries.push(entryData);
  $form.reset();
  console.log(entries);
}
