const dateInput = document.getElementById("date");
const genderInput = document.getElementById("gender");
const nameInput = document.getElementById("name");
const btnAnswer = document.getElementById('get_the_answer');
const container = document.querySelector('.matrix-container');
const errorOutput = document.querySelector('.errorOutput');
const dateWrapper = document.querySelector('.input1-wrap');

// sets calendar limiter for dates that haven't occurred yet
let today1 = new Date();
document.getElementById('date').setAttribute("max", today1.toLocaleDateString("en-CA"));
// sets calendar limiter for dates that were earlier than 120 years ago
let ancientDate2 = new Date(today1.getFullYear() - 120, today1.getMonth(), today1.getDay());
document.getElementById('date').setAttribute("min", ancientDate2.toLocaleDateString("en-CA"));

// default input values for page reload
dateInput.value = '';
nameInput.value = '';
genderInput.value = '';

let person = {};
let points1 = {};
let purposes1 = {};
let chartHeart1 = {};
let years = {};

function checkAllValid() {
  const name = nameInput.value.trim();
  const date = new Date(dateInput.value);
  const gender = genderInput.value;
  errorOutput.innerHTML = '';

  if (name && dateInput.value && gender) {
    const nameValid = validateName(name);
    const dateValid = validateDate(date);

    if (nameValid === true && dateValid === true) {
      showButton();
    } else {
      hideButton();
      if (nameValid !== true) {
        errorOutput.innerHTML = nameValid;
      } else if (dateValid !== true) {
        errorOutput.innerHTML = dateValid;
      }
    }
  } else {
    hideButton();
  }
}

function showButton() {
  btnAnswer.style.display = 'block';
  setTimeout(() => {
    btnAnswer.style.opacity = '1';
  }, 10);
}

function hideButton() {
  btnAnswer.style.display = 'none';
  btnAnswer.style.opacity = '0';
}

function validateName(name) {
  /* name validation. Name can contain only letters, dash, or be written with space (if multiple names) */
  const nameValide = new RegExp("^[а-яё\\- ]*[a-z\\- ]*$", "i");
  
  if (!nameValide.test(name)) {
    return `<p>Name format is incorrect: allowed characters are letters, dash and space. Example: Anna, Anna-Maria, Anna Maria.</p>`;
  }
  return true;
}

function validateDate(date) {
  let errorMessage = '';
  
  if(date === 'Invalid Date' || isNaN(date.getFullYear())){
    errorMessage += `<p>Date is not valid.</p>`;
  }

  let today2 = new Date();
  if (date > today2) {
    errorMessage += `<p>Date can't be in the future.</p>`;
  }

  if (today2.getFullYear() - date.getFullYear() > 120) {
    errorMessage += `<p>Date can't be so far in the past.</p>`;
  }

  if (errorMessage !== '') return errorMessage;
  return true;
}

// one universal function for each person
function createPerson(per, apoint, bpoint, cpoint) {
  calculatePoints(apoint, bpoint, cpoint);
  per.points = points;
  per.purposes = purposes;
  per.chartHeart = chartHeart;
  per.years = years;
}

function titleCase(str) {
  return str.replace(/^[a-zа-яё]|[\- ][a-zа-яё]/g, function (a) { return a.toUpperCase(); })
}

btnAnswer.addEventListener('click', (evt) => {
  evt.preventDefault();

  const date = new Date(document.getElementById('date').value);
  const calculationDate = document.getElementById('date').value;
  const name = document.getElementById('name').value;
  const output = document.querySelector('.output-personal-date');

  output.innerHTML = '';
  errorOutput.innerHTML = '';

  const splitDate = calculationDate.split('-');
  const fullDate = `${splitDate[2]}.${splitDate[1]}.${splitDate[0]}`

  // Since we already validated, we can proceed directly
  output.innerHTML = titleCase(name) + ' ' + '<span>dengan Tanggal Lahir:</span>' + ' ' + fullDate;

  container.style.display = 'flex';
  container.scrollIntoView({behavior: "smooth"});
  let apoint = reduceNumber(+splitDate[2]); // day of birth
  let year = +splitDate[0]; //year of birth
  let bpoint = +splitDate[1]; // month of birth
  let cpoint = calculateYear(year); // c - year of birth

  createPerson(person, apoint, bpoint, cpoint);
  Points(person);
  ChartHeart();
  Purposes();
  outputYears(person.years);
  clearInputs(dateInput, nameInput);
});

function valide(date, name) {
  /* name validation. Name can contain only letters, dash, or be written with space (if multiple names) */
  let errorMessage = '';
  const nameValide = new RegExp("^[а-яё\\- ]*[a-z\\- ]*$", "i");

  if(date === 'Invalid Date'){
    console.log('invalid date');
  }

  if (name === '' || isNaN(date.getFullYear()) === true) {
    errorMessage += `<p>Tanggal lahir tidak valid, atau nama tidak terbaca</p>`;
  }

  let today = new Date();
  if (date > today) {
    errorMessage += `<p>Tanggal ada di masa depan</p>`;
  }

  if (today.getFullYear() - date.getFullYear() > 120) {
    errorMessage += `<p>Hanya bisa menghitung sampai 120 tahun ke belakang</p>`;
  }

  // sets calendar limiter for dates that were earlier than 120 years ago
  let ancientDate = new Date(today.getFullYear() - 120, today.getMonth(), today.getDay());
  document.getElementById('date').setAttribute("min", ancientDate.toLocaleDateString("en-CA"));

  if (!nameValide.test(name)) {
    errorMessage += `<p>Format nama kurang tepat, hanya karakter, spasi, dan - yang diperbolehkan</p>`;
  }
  if (errorMessage !== '') return errorMessage;

  return true;
}

nameInput.addEventListener('input', checkAllValid);
dateInput.addEventListener('input', checkAllValid);
genderInput.addEventListener('change', checkAllValid);
