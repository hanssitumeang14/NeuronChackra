const dateInput = document.getElementById("date");
const genderInput = document.getElementById("gender");
const nameInput = document.getElementById("name");
const btnAnswer = document.getElementById('get_the_answer');
const container = document.querySelector('.matrix-container');
const errorOutput = document.querySelector('.errorOutput');
const dateWrapper = document.querySelector('.input1-wrap');
const btnDownloadPDF = document.getElementById('downloadPDF');

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

btnDownloadPDF.addEventListener('click', () => {
  const { jsPDF } = window.jspdf || window.jspdf.jsPDF || window.jspdf;
  const doc = new jsPDF();

  // Warna dan font
  const titleColor = "#4b0082"; // ungu gelap
  const textColor = "#333";
  const tableBorderColor = "#4b0082";
  const headerBgColor = "#4b0082";
  const headerTextColor = "#fff";

  // Judul besar
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(titleColor);
  doc.text("Hasil Personal Matrix", 105, 20, null, null, "center");

  // Garis bawah judul
  doc.setDrawColor(75, 0, 130);
  doc.setLineWidth(0.8);
  doc.line(20, 25, 190, 25);

  // Salam pembuka personal
  const nama = titleCase(nameInput.value.trim());
  const tanggal = document.querySelector('.output-personal-date')?.innerText || '';
  const greeting = `Halo ${nama}, berikut hasil Personal Matrix kamu:`;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.setTextColor(textColor);
  doc.text(greeting, 20, 35);
  doc.text(tanggal, 20, 43);

  // Garis pemisah
  doc.setDrawColor(200);
  doc.setLineWidth(0.2);
  doc.line(20, 48, 190, 48);

  // Pengaturan tabel
  const startX = 20;
  let startY = 55;
  const colIndexWidth = 15;
  const col1Width = 105;
  const col2Width = 50;
  const rowHeight = 10;

  // HEADER (ungu) — 3 kolom
  doc.setFillColor(headerBgColor);
  doc.rect(startX, startY, colIndexWidth + col1Width + col2Width, rowHeight, 'F');

  doc.setDrawColor(tableBorderColor);
  doc.setLineWidth(0.8);
  doc.rect(startX, startY, colIndexWidth, rowHeight);
  doc.rect(startX + colIndexWidth, startY, col1Width, rowHeight);
  doc.rect(startX + colIndexWidth + col1Width, startY, col2Width, rowHeight);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(headerTextColor);
  doc.text("#", startX + colIndexWidth / 2, startY + 7, null, null, "center");
  doc.text("Matrix", startX + colIndexWidth + col1Width / 2, startY + 7, null, null, "center");
  doc.text("Value", startX + colIndexWidth + col1Width + col2Width / 2, startY + 7, null, null, "center");

  startY += rowHeight;

  // ISI tabel
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.setTextColor(textColor);

  const matrixValues = Object.entries(person.points);

  matrixValues.forEach(([key, value], index) => {
    if (startY + rowHeight > 280) {
      doc.addPage();
      startY = 20;

      // Ulangi header di halaman baru
      doc.setFillColor(headerBgColor);
      doc.rect(startX, startY, colIndexWidth + col1Width + col2Width, rowHeight, 'F');

      doc.setDrawColor(tableBorderColor);
      doc.setLineWidth(0.8);
      doc.rect(startX, startY, colIndexWidth, rowHeight);
      doc.rect(startX + colIndexWidth, startY, col1Width, rowHeight);
      doc.rect(startX + colIndexWidth + col1Width, startY, col2Width, rowHeight);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.setTextColor(headerTextColor);
      doc.text("#", startX + colIndexWidth / 2, startY + 7, null, null, "center");
      doc.text("Matrix", startX + colIndexWidth + col1Width / 2, startY + 7, null, null, "center");
      doc.text("Value", startX + colIndexWidth + col1Width + col2Width / 2, startY + 7, null, null, "center");

      startY += rowHeight;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      doc.setTextColor(textColor);
    }

    const cleanLabel = key.replace(/point/gi, "").toUpperCase();

    doc.rect(startX, startY, colIndexWidth, rowHeight);
    doc.rect(startX + colIndexWidth, startY, col1Width, rowHeight);
    doc.rect(startX + colIndexWidth + col1Width, startY, col2Width, rowHeight);

    doc.text(String(index + 1), startX + colIndexWidth / 2, startY + 7, null, null, "center");
    doc.text(cleanLabel, startX + colIndexWidth + col1Width / 2, startY + 7, null, null, "center");
    doc.text(String(value), startX + colIndexWidth + col1Width + col2Width / 2, startY + 7, null, null, "center");

    startY += rowHeight;
  });

  doc.save("hasil_personal_matrix.pdf");
});



