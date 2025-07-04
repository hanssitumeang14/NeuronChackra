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
genderInputs.forEach(input => input.addEventListener('change', checkAllValid));

btnDownloadPDF.addEventListener('click', async () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });

  const nama = titleCase(nameInput.value.trim());
  const tanggal = document.querySelector('.output-personal-date')?.innerText || '';

  const textColor = [0, 0, 0];
  const purple = [75, 0, 130];
  const grey = [220];

  const titleFontSize = 18;
  const sectionSpacing = 8;
  const margin = 20;

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  let y = 20;

  // Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(titleFontSize);
  doc.setTextColor(...purple);
  doc.text('Hasil Personal Matrix', pageWidth / 2, y, null, null, 'center');

  y += 7;
  doc.setDrawColor(...purple);
  doc.setLineWidth(0.5);
  doc.line(margin, y, pageWidth - margin, y);

  y += sectionSpacing;

  // Biodata
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...textColor);
  doc.text(`Halo: ${tanggal}`, margin, y);

  y += 5;
  doc.setLineWidth(0.1);
  doc.setDrawColor(...grey);
  doc.line(margin, y, pageWidth - margin, y);

  y += sectionSpacing;

  const container = document.querySelector('.matrix-wrapper');
  if (!container) {
    alert('Elemen .matrix-wrapper tidak ditemukan');
    return;
  }

  // Diagram SVG
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(...purple);
  doc.text(`1. Hasil Diagram Kamu:`, margin, y);
  y += 5;

  const svgElement = container.querySelector('svg');
  if (svgElement && window.canvg) {
    // Force copy inline styles (fill/stroke)
    svgElement.querySelectorAll('*').forEach(el => {
      const computedStyle = window.getComputedStyle(el);
      const fill = computedStyle.fill;
      const stroke = computedStyle.stroke;
      if (fill && fill !== 'none') el.setAttribute('fill', fill);
      if (stroke && stroke !== 'none') el.setAttribute('stroke', stroke);
    });

    const svgString = new XMLSerializer().serializeToString(svgElement);
    const canvas = document.createElement('canvas');
    const originalWidth = svgElement.clientWidth || 500;
    const originalHeight = svgElement.clientHeight || 500;
    canvas.width = originalWidth * 2; // Higher resolution
    canvas.height = originalHeight * 2;

    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    try {
      const v = await window.canvg.Canvg.fromString(ctx, svgString);
      await v.render();

      const imgData = canvas.toDataURL('image/png');

      const aspectRatio = canvas.height / canvas.width;

      const maxScale = 1.2;
      const maxImgWidth = (pageWidth - 2 * margin) * maxScale;
      const maxImgHeight = (pageHeight - y - margin) * maxScale;

      let imgWidth = maxImgWidth;
      let imgHeight = imgWidth * aspectRatio;

      if (imgHeight > maxImgHeight) {
        imgHeight = maxImgHeight;
        imgWidth = imgHeight / aspectRatio;
      }

      const xOffset = (pageWidth - imgWidth) / 2;
      doc.addImage(imgData, 'PNG', xOffset, y, imgWidth, imgHeight);
      y += imgHeight + sectionSpacing;
    } catch (error) {
      console.error('Error rendering SVG:', error);
    }
  }

  // Chakra Table
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(...purple);
  if (y + 10 > pageHeight - margin) {
  doc.addPage();  // Menambahkan halaman baru jika sudah mendekati batas
  y = margin;  // Mengatur y kembali ke margin atas halaman baru
}
  doc.text(`2. Table Personal Kamu:`, margin, y);
  y += 5;

  const table = container.querySelector('#chakra_table table');
  if (table) {
    doc.autoTable({
      html: table,
      startY: y,
      styles: {
        font: 'helvetica',
        fontSize: 10,
        textColor: textColor,
      },
      headStyles: {
        fillColor: purple,
        textColor: [255, 255, 255],
      },
      theme: 'grid',
      margin: { left: margin, right: margin },
    });

    y = doc.lastAutoTable.finalY + sectionSpacing;
  }
  
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(...purple);
  if (y + 10 > pageHeight - margin) {
  doc.addPage();  // Menambahkan halaman baru jika sudah mendekati batas
  y = margin;  // Mengatur y kembali ke margin atas halaman baru
}
  doc.text(`3. Penjelasan Detail:`, margin, y);
  y += 5;

 const infoTextEl = container.querySelector('#info-text');
if (infoTextEl) {
  try {

document.querySelectorAll('*').forEach(el => {
  const style = getComputedStyle(el);
  ['color', 'backgroundColor', 'borderColor'].forEach(prop => {
    const value = style[prop];
    if (value.includes('oklab') || value.includes('oklch')) {
      el.style[prop] = '#ffffff'; // fallback aman, bisa diganti sesuai tema
    }
  });
});


    const canvas = await html2canvas(infoTextEl, {
      scale: 3, // HD quality
      backgroundColor: '#0a0a23', // latar belakang sama seperti web
      useCORS: true
    });

    const imgData = canvas.toDataURL('image/png');

    // Ukuran dan penempatan
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
    y += imgHeight + sectionSpacing;
  } catch (err) {
    console.error('Gagal render #info-text:', err);
  }
}


  doc.save('hasil_personal_matrix.pdf');
});




