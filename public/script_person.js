const dateInput = document.getElementById("date");
const genderInputs = document.querySelectorAll('input[name="gender"]');
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
genderInputs.forEach(input => input.checked = false);

let person = {};
let points1 = {};
let purposes1 = {};
let chartHeart1 = {};
let years = {};

function checkAllValid() {
  const name = nameInput.value.trim();
  const date = new Date(dateInput.value);
  const selectedGender = document.querySelector('input[name="gender"]:checked');
  const gender = selectedGender ? selectedGender.value : '';
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

  if (date === 'Invalid Date' || isNaN(date.getFullYear())) {
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
  container.scrollIntoView({ behavior: "smooth" });
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

  if (date === 'Invalid Date') {
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
genderInputs.forEach(input => input.addEventListener('change', checkAllValid));

btnDownloadPDF.addEventListener('click', async () => {
  loading.style.display = 'block';
  try {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    await generatePDF(doc);
    doc.save('hasil_personal_matrix.pdf');
  } catch (err) {
    console.error('Gagal membuat PDF:', err);
    alert('Terjadi kesalahan saat membuat PDF.');
  } finally {
    loading.style.display = 'none';
  }
});

async function generatePDF(doc) {
  const tanggal = document.querySelector('.output-personal-date')?.innerText || '';
  const textColor = [0, 0, 0];
  const purple = [75, 0, 130];
  const grey = [220];
  const margin = 20;
  const sectionSpacing = 10;

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let y = margin;

  // Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(...purple);
  doc.text('Hasil Personal Matrix', pageWidth / 2, y, null, null, 'center');

  y += 7;
  doc.setDrawColor(...purple);
  doc.setLineWidth(0.5);
  doc.line(margin, y, pageWidth - margin, y);

  y += sectionSpacing;
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...textColor);
  doc.text(`Halo: ${tanggal}`, margin, y);

  y += 5;
  doc.setDrawColor(...grey);
  doc.setLineWidth(0.1);
  doc.line(margin, y, pageWidth - margin, y);
  y += sectionSpacing;

  // Element references
  const container = document.querySelector('.matrix-wrapper');
  if (!container) return alert('Elemen .matrix-wrapper tidak ditemukan');

  const matrixEl = container.querySelector('#matrix-personal');
  const tableEl = container.querySelector('#chakra_table');
  const infoEl = container.querySelector('#info-text');
  if (!matrixEl || !tableEl || !infoEl) return alert('Beberapa elemen tidak lengkap untuk PDF');

  // Atasi warna oklab
  document.querySelectorAll('*').forEach(el => {
    const style = getComputedStyle(el);
    ['color', 'backgroundColor', 'borderColor'].forEach(prop => {
      const val = style[prop];
      if (val.includes('oklab') || val.includes('oklch')) el.style[prop] = '#ffffff';
    });
  });

  // Wrapper utama
  const wrapper = document.createElement('div');
  wrapper.style.width = '2000px'; // 💥 Lebih lebar
  wrapper.style.margin = '0 auto';
  wrapper.style.background = '#0a0a23';
  wrapper.style.color = '#fff';
  wrapper.style.padding = '80px 120px';
  wrapper.style.boxSizing = 'border-box';
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.gap = '80px';

  // Top row (matrix + info)
  const topRow = document.createElement('div');
  topRow.style.display = 'grid';
  topRow.style.gridTemplateColumns = '65% 35%';
  topRow.style.gap = '10px';
  topRow.style.alignItems = 'flex-start';

  const matrixClone = matrixEl.cloneNode(true);
  matrixClone.style.width = '100%';
  matrixClone.style.marginTop = '40px';
  matrixClone.style.transform = 'scale(1.3)';

  const infoClone = infoEl.cloneNode(true);
  infoClone.style.width = '100%';
  matrixClone.style.marginRight = '10x';
  infoClone.style.fontSize = '2.4rem';

  topRow.appendChild(matrixClone);
  topRow.appendChild(infoClone);

  // Tabel chakra (dibesarkan)
  const tableClone = tableEl.cloneNode(true);
  tableClone.style.width = '100%';
  tableClone.style.fontSize = '2.4rem';
  tableClone.style.padding = '30px';
  tableClone.style.marginTop = '60px';

  // Tambahkan padding ke semua sel tabel
  tableClone.querySelectorAll('th, td').forEach(cell => {
    cell.style.padding = '18px 30px';
    cell.style.fontSize = '2.4rem';
  });

  // Gabung ke wrapper
  wrapper.appendChild(topRow);
  wrapper.appendChild(tableClone);
  document.body.appendChild(wrapper);

  try {
    await new Promise((resolve) => setTimeout(resolve, 500)); // beri delay agar style dan render DOM stabil

    const canvas = await html2canvas(wrapper, {
      scale: 1.5,
      backgroundColor: '#0a0a23',
      useCORS: true
    });

    const imgData = canvas.toDataURL('image/png');
    const originalWidth = canvas.width;
    const originalHeight = canvas.height;

    const maxImgWidth = pageWidth - 2 * margin;
    const maxImgHeight = pageHeight - y - margin;
    const aspectRatio = originalHeight / originalWidth;

    let imgWidth = maxImgWidth;
    let imgHeight = imgWidth * aspectRatio;

    if (imgHeight > maxImgHeight) {
      imgHeight = maxImgHeight;
      imgWidth = imgHeight / aspectRatio;
    }

    const xOffset = (pageWidth - imgWidth) / 2;
    doc.addImage(imgData, 'PNG', xOffset, y, imgWidth, imgHeight);
  } catch (err) {
    console.error('Gagal render HTML ke Canvas:', err);
  } finally {
    document.body.removeChild(wrapper);
  }
}

const buttonWa = document.getElementById('buttonWa');
if (buttonWa) {
  buttonWa.addEventListener('click', () => {
    const phone = '6287861517165';
    const message = encodeURIComponent('Maaf saya bingung bacanya, mohon penjelasannya yaa.. Terimakasih');
    const waLink = `https://wa.me/${phone}?text=${message}`;
    window.open(waLink, '_blank');
  });
}




