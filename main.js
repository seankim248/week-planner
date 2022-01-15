var data = {
  day: 'Monday'
};

var $addEntryButton = document.querySelector('.add-entry-button');
$addEntryButton.addEventListener('click', showEntryFunction);

function showEntryFunction(event) {
  var $overlay = document.querySelector('#add-entry');
  $overlay.classList.replace('hidden', 'display');
}

function updateEntryFunction(event) {
  var $overlay = document.querySelector('#update-entry');
  $overlay.classList.replace('hidden', 'display');
}
var $form = document.querySelector('form');
$form.addEventListener('submit', submitFunction);

var entries = [
  {
    day: 'Monday',
    time: '02:00',
    description: 'It is Monday.'
  },
  {
    day: 'Tuesday',
    time: '03:00',
    description: 'Yo wassup'
  },
  {
    day: 'Wednesday',
    time: '04:00',
    description: 'How ya doin'
  },
  {
    day: 'Thursday',
    time: '07:00',
    description: 'This is feature 2'
  },
  {
    day: 'Friday',
    time: '12:00',
    description: 'ok'
  }
];
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
}

function getEntries(dayOfWeek) {
  var dayData = [];
  for (var i = 0; i < entries.length; i++) {
    if (entries[i].day === dayOfWeek) {
      dayData.push(entries[i].time);
      dayData.push(entries[i].description);
    }
  }
  return dayData;
}

function renderEntries(arr) {
  var $tdList = document.querySelectorAll('tbody td');
  for (var i = 0; i < $tdList.length; i++) {
    $tdList[i].textContent = arr[i];
    if (i % 2 !== 0 && $tdList[i].textContent) {
      var $updateButton = document.createElement('button');
      $updateButton.className = 'update-btn';
      $updateButton.textContent = 'Update';
      $tdList[i].appendChild($updateButton);
    }

  }
}

renderEntries(getEntries('Monday'));

var $weekdaysBox = document.querySelector('.weekdays-box');
$weekdaysBox.addEventListener('click', function (e) {
  renderEntries(getEntries(e.target.textContent));
  var $span = document.querySelector('span');
  $span.textContent = e.target.textContent;
});

var $table = document.querySelector('table');
$table.addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    updateEntryFunction();
    var $updateButton = document.querySelector('.update-btn');
    var $updateDescription = $updateButton.closest('tr').querySelector('td:nth-child(2)').textContent;
    var $updateTime = $updateButton.closest('tr').querySelector('td:nth-child(1)').textContent;
    var $updateDayOfWeek = document.querySelector('#update-entry').querySelector('.day-of-week');
    var $timeInput = document.querySelector('#update-entry').querySelector('.time');
    var $descriptionInput = document.querySelector('#update-entry').querySelector('textarea');
    $updateDayOfWeek.value = data.day;
    $timeInput.value = $updateTime;
    $descriptionInput.value = $updateDescription;
  }
});
