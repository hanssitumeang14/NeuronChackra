const inputFirstDate = document.getElementById("date_person1");
const inputSecondDate = document.getElementById("date_person2");
const inputFirstName = document.getElementById("name-partner1");
const inputSecondName = document.getElementById("name-partner2");
const btnChart = document.getElementById('createChart');
const compatibilityContainer = document.querySelector('.compatibility-container');
const errorOutput1 = document.querySelector('.errorOutput1');
const btnDownloadPDF1 = document.getElementById('downloadPDF');

compatibilityContainer.style.display = 'none';

let today = new Date();
document.getElementById('date_person1').setAttribute("max", today.toLocaleDateString("en-CA"));
document.getElementById('date_person2').setAttribute("max", today.toLocaleDateString("en-CA"));

let ancientDate1 = new Date(today.getFullYear() - 120, today.getMonth(), today.getDay());
document.getElementById('date_person1').setAttribute("min", ancientDate1.toLocaleDateString("en-CA"));
document.getElementById('date_person2').setAttribute("min", ancientDate1.toLocaleDateString("en-CA"));

inputFirstDate.value = '';
inputSecondDate.value = '';
inputFirstName.value = '';
inputSecondName.value = '';

let orang = {};
let orangKedua = {};
let points = {};
let purposes = {};
let chartHeart = {};

function checkAllValid() {
    const name1 = inputFirstName.value.trim();
    const name2 = inputSecondName.value.trim();
    const date1 = new Date(inputFirstDate.value);
    const date2 = new Date(inputSecondDate.value);
    errorOutput1.innerHTML = '';

    if (name1 && name2 && inputFirstDate.value && inputSecondDate.value) {
        const nameValid = validateNames(name1, name2);
        const dateValid = valideDates(date1, date2);

        if (nameValid === true && dateValid === true) {
            showButton();
        } else {
            hideButton();
            if (nameValid !== true) {
                errorOutput1.innerHTML = nameValid;
            } else if (dateValid !== true) {
                errorOutput1.innerHTML = dateValid;
            }
        }
    } else {
        hideButton();
    }
}

function showButton() {
    btnChart.style.display = 'block';
    setTimeout(() => {
        btnChart.style.opacity = '1';
    }, 10);
}

function hideButton() {
    btnChart.style.display = 'none';
    btnChart.style.opacity = '0';
}

function createPerson(per, apoint, bpoint, cpoint) {
    calculatePoints(apoint, bpoint, cpoint);
    per.points = points;
    per.purposes = purposes;
    per.chartHeart = chartHeart;
}

let compatibilityMatrix = [];
const fillMatrix = (orang, orangKedua) => {
    compatibilityMatrix = [
        { id: "compatibilityApoint", value: reduceNumber(orang.points.apoint + orangKedua.points.apoint) },
        { id: "compatibilityBpoint", value: reduceNumber(orang.points.bpoint + orangKedua.points.bpoint) },
        { id: "compatibilityCpoint", value: reduceNumber(orang.points.cpoint + orangKedua.points.cpoint) },
        { id: "compatibilityDpoint", value: reduceNumber(orang.points.dpoint + orangKedua.points.dpoint) },
        { id: "compatibilityEpoint", value: reduceNumber(orang.points.epoint + orangKedua.points.epoint) },
        { id: "compatibilityFpoint", value: reduceNumber(orang.points.fpoint + orangKedua.points.fpoint) },
        { id: "compatibilityGpoint", value: reduceNumber(orang.points.gpoint + orangKedua.points.gpoint) },
        { id: "compatibilityHpoint", value: reduceNumber(orang.points.hpoint + orangKedua.points.hpoint) },
        { id: "compatibilityIpoint", value: reduceNumber(orang.points.ipoint + orangKedua.points.ipoint) },
        { id: "compatibilityJpoint", value: reduceNumber(orang.points.jpoint + orangKedua.points.jpoint) },
        { id: "compatibilityNpoint", value: reduceNumber(orang.points.npoint + orangKedua.points.npoint) },
        { id: "compatibilityLpoint", value: reduceNumber(orang.points.lpoint + orangKedua.points.lpoint) },
        { id: "compatibilityKpoint", value: reduceNumber(orang.points.kpoint + orangKedua.points.kpoint) },
        { id: "compatibilityMpoint", value: reduceNumber(orang.points.mpoint + orangKedua.points.mpoint) },
        { id: "compatibilitySpoint", value: reduceNumber(orang.points.spoint + orangKedua.points.spoint) },
        { id: "compatibilityOpoint", value: reduceNumber(orang.points.opoint + orangKedua.points.opoint) },
        { id: "compatibilityTpoint", value: reduceNumber(orang.points.tpoint + orangKedua.points.tpoint) },
        { id: "compatibilityPpoint", value: reduceNumber(orang.points.ppoint + orangKedua.points.ppoint) },
        { id: "compatibilityQpoint", value: reduceNumber(orang.points.qpoint + orangKedua.points.qpoint) },
        { id: "compatibilityRpoint", value: reduceNumber(orang.points.rpoint + orangKedua.points.rpoint) },
        { id: "compatibilityVpoint", value: reduceNumber(orang.points.vpoint + orangKedua.points.vpoint) },
        { id: "compatibilityUpoint", value: reduceNumber(orang.points.upoint + orangKedua.points.upoint) },
        {
            id: "compatibilitySkypoint",
            value: reduceNumber(
                reduceNumber(orang.points.bpoint + orangKedua.points.bpoint) +
                reduceNumber(orang.points.dpoint + orangKedua.points.dpoint)
            ),
        },
        {
            id: "compatibilityEarthpoint",
            value: reduceNumber(
                reduceNumber(orang.points.apoint + orangKedua.points.apoint) +
                reduceNumber(orang.points.cpoint + orangKedua.points.cpoint)
            ),
        },
        {
            id: "compatibilityRelationship",
            value: reduceNumber(
                reduceNumber(
                    reduceNumber(orang.points.bpoint + orangKedua.points.bpoint) +
                    reduceNumber(orang.points.dpoint + orangKedua.points.dpoint)
                ) +
                reduceNumber(
                    reduceNumber(orang.points.apoint + orangKedua.points.apoint) +
                    reduceNumber(orang.points.cpoint + orangKedua.points.cpoint)
                )
            ),
        },
        {
            id: "compatibilityMalepoint",
            value: reduceNumber(
                reduceNumber(orang.points.fpoint + orangKedua.points.fpoint) +
                reduceNumber(orang.points.ipoint + orangKedua.points.ipoint)
            ),
        },
        {
            id: "compatibilityFemalepoint",
            value: reduceNumber(
                reduceNumber(orang.points.gpoint + orangKedua.points.gpoint) +
                reduceNumber(orang.points.hpoint + orangKedua.points.hpoint)
            ),
        },
        {
            id: "compatibilityUnion",
            value: reduceNumber(
                reduceNumber(
                    reduceNumber(orang.points.fpoint + orangKedua.points.fpoint) +
                    reduceNumber(orang.points.ipoint + orangKedua.points.ipoint)
                ) +
                reduceNumber(
                    reduceNumber(orang.points.gpoint + orangKedua.points.gpoint) +
                    reduceNumber(orang.points.hpoint + orangKedua.points.hpoint)
                )
            ),
        },
        {
            id: "compatibilityHarmony1",
            value: reduceNumber(
                reduceNumber(
                    reduceNumber(orang.points.bpoint + orangKedua.points.bpoint) +
                    reduceNumber(orang.points.dpoint + orangKedua.points.dpoint)
                ) +
                reduceNumber(
                    reduceNumber(orang.points.apoint + orangKedua.points.apoint) +
                    reduceNumber(orang.points.cpoint + orangKedua.points.cpoint)
                )
            ),
        },
        {
            id: "compatibilityHarmony2",
            value: reduceNumber(
                reduceNumber(
                    reduceNumber(orang.points.fpoint + orangKedua.points.fpoint) +
                    reduceNumber(orang.points.ipoint + orangKedua.points.ipoint)
                ) +
                reduceNumber(
                    reduceNumber(orang.points.gpoint + orangKedua.points.gpoint) +
                    reduceNumber(orang.points.hpoint + orangKedua.points.hpoint)
                )
            ),
        },
        {
            id: "compatibilityHarmony",
            value: reduceNumber(
                reduceNumber(
                    reduceNumber(
                        reduceNumber(orang.points.bpoint + orangKedua.points.bpoint) +
                        reduceNumber(orang.points.dpoint + orangKedua.points.dpoint)
                    ) +
                    reduceNumber(
                        reduceNumber(orang.points.apoint + orangKedua.points.apoint) +
                        reduceNumber(orang.points.cpoint + orangKedua.points.cpoint)
                    )
                ) +
                reduceNumber(
                    reduceNumber(
                        reduceNumber(orang.points.fpoint + orangKedua.points.fpoint) +
                        reduceNumber(orang.points.ipoint + orangKedua.points.ipoint)
                    ) +
                    reduceNumber(
                        reduceNumber(orang.points.gpoint + orangKedua.points.gpoint) +
                        reduceNumber(orang.points.hpoint + orangKedua.points.hpoint)
                    )
                )
            ),
        }
    ];
}

function outputCompatibilityMatrixValues() {
    const elements = document.querySelectorAll('[id^="compatibility"]');
    compatibilityMatrix.forEach((matrixItem) => {
        elements.forEach((el) => {
            if (el.id === matrixItem.id) {
                el.innerHTML = matrixItem.value;
            }
        });
    });
}

function titleCase(str) {
    return str.replace(/^[a-zа-яё]|[\- ][a-zа-яё]/g, function (a) { return a.toUpperCase(); })
}

btnChart.addEventListener('click', (evt) => {
    evt.preventDefault();
    const calculationDateFirst = document.getElementById('date_person1').value;
    const calculationDateSecond = document.getElementById('date_person2').value;
    const output2 = document.querySelector('.output2');

    errorOutput1.innerHTML = '';

    const splitDateFirst = calculationDateFirst.split('-');
    const splitDateSecond = calculationDateSecond.split('-');
    const fullDateFirst = `${splitDateFirst[2]}.${splitDateFirst[1]}.${splitDateFirst[0]}`;
    const fullDateSecond = `${splitDateSecond[2]}.${splitDateSecond[1]}.${splitDateSecond[0]}`;

    output2.innerHTML = titleCase(inputFirstName.value) + ' & ' + titleCase(inputSecondName.value) + ' ' + '<span>dengan Tanggal Lahir:</span>' + ' ' + fullDateFirst + ' & ' + fullDateSecond;

    let apoint = reduceNumber(+splitDateFirst[2]);
    let bpoint = +splitDateFirst[1];
    let year = +splitDateFirst[0];
    let cpoint = calculateYear(year);
    createPerson(orang, apoint, bpoint, cpoint);

    let secondApoint = reduceNumber(+splitDateSecond[2]);
    let secondBpoint = +splitDateSecond[1];
    let year2 = +splitDateSecond[0];
    let secondCpoint = calculateYear(year2);
    createPerson(orangKedua, secondApoint, secondBpoint, secondCpoint);

    fillMatrix(orang, orangKedua);
    compatibilityContainer.style.display = 'flex';
    compatibilityContainer.scrollIntoView({ behavior: "smooth" });
    outputCompatibilityMatrixValues();
    clearInputs();
});

function validateNames(name1, name2) {
    const nameValide = new RegExp("^[а-яё\\- ]*[a-z\\- ]*$", "i");
    let errorMessage = '';

    if (!nameValide.test(name1)) {
        errorMessage += `<p>Format nama Partner 1 salah.</p>`;
    }

    if (!nameValide.test(name2)) {
        errorMessage += `<p>Format nama Partner 2 salah.</p>`;
    }

    if (errorMessage !== '') return errorMessage;
    return true;
}

function valideDates(date1, date2) {
    let errorMessage = '';

    if (isNaN(date1.getFullYear()) || isNaN(date2.getFullYear())) {
        errorMessage += `<p>Tanggal tidak valid.</p>`;
    }

    if (date1 > today || date2 > today) {
        errorMessage += `<p>Tanggal tidak boleh di masa depan.</p>`;
    }

    if (today.getFullYear() - date1.getFullYear() > 120 || today.getFullYear() - date2.getFullYear() > 120) {
        errorMessage += `<p>Hanya bisa menghitung sampai 120 tahun ke belakang.</p>`;
    }

    if (errorMessage !== '') return errorMessage;
    return true;
}

inputFirstName.addEventListener('input', checkAllValid);
inputSecondName.addEventListener('input', checkAllValid);
inputFirstDate.addEventListener('input', checkAllValid);
inputSecondDate.addEventListener('input', checkAllValid);

function clearInputs() {
    inputFirstDate.value = '';
    inputSecondDate.value = '';
    inputFirstName.value = '';
    inputSecondName.value = '';
    hideButton();
}

btnDownloadPDF1.addEventListener('click', async () => {
    loading.style.display = 'block';
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
        await generateCompatibilityPDF(doc);
        doc.save('hasil_compatibility_matrix.pdf');
    } catch (err) {
        console.error("Gagal membuat PDF:", err);
        alert("Terjadi kesalahan saat membuat PDF.");
    } finally {
        loading.style.display = 'none';
    }
});

async function generateCompatibilityPDF(doc) {
    const nama1 = titleCase(inputFirstName.value.trim());
    const nama2 = titleCase(inputSecondName.value.trim());
    const tanggal = document.querySelector('.output2')?.innerText || '';

    const textColor = [0, 0, 0];
    const purple = [75, 0, 130];
    const grey = [220];
    const margin = 20;
    const sectionSpacing = 10;

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let y = margin;

    // Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(...purple);
    doc.text("Hasil Compatibility Matrix", pageWidth / 2, y, null, null, "center");

    y += 7;
    doc.setDrawColor(...purple);
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageWidth - margin, y);

    y += sectionSpacing;
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...textColor);
    doc.text(`Hai! Ini hasil kecocokan antara ${nama1} dan ${nama2}:`, margin, y);

    y += 5;
    doc.text(tanggal, margin, y);

    y += 5;
    doc.setDrawColor(...grey);
    doc.setLineWidth(0.1);
    doc.line(margin, y, pageWidth - margin, y);
    y += sectionSpacing;

    // Blok warna oklab/oklch
    document.querySelectorAll('*').forEach(el => {
        const style = getComputedStyle(el);
        ['color', 'backgroundColor', 'borderColor'].forEach(prop => {
            const val = style[prop];
            if (val.includes('oklab') || val.includes('oklch')) el.style[prop] = '#ffffff';
        });
    });

    // Ambil elemen diagram dan info
    const svgEl = document.querySelector(".compatibility-container")?.querySelector("svg");
    const infoEl = document.querySelector("#info-text-compatibility");
    if (!svgEl || !infoEl) return alert('Elemen diagram atau info tidak ditemukan');

    // Clone wrapper container
    const wrapper = document.createElement('div');
    wrapper.style.width = '2000px';
    wrapper.style.margin = '0 auto';
    wrapper.style.background = '#0a0a23';
    wrapper.style.color = '#fff';
    wrapper.style.padding = '80px 120px';
    wrapper.style.boxSizing = 'border-box';
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.gap = '60px';

    // Clone diagram
    const diagramWrapper = document.createElement('div');
    const diagramClone = svgEl.cloneNode(true);
    diagramWrapper.appendChild(diagramClone);
    diagramWrapper.style.alignSelf = 'center';
    diagramWrapper.style.marginBottom = '20px';
    diagramWrapper.style.marginTop = '20px';
    diagramWrapper.style.transform = 'scale(1.4)';
    wrapper.appendChild(diagramWrapper);

    // Clone info
    const infoClone = infoEl.cloneNode(true);
    infoClone.style.fontSize = '1.3rem';
    infoClone.querySelectorAll('*').forEach(child => {
        child.style.fontSize = '1.3rem';
    });
    wrapper.appendChild(infoClone);

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

const buttonWa1 = document.getElementById('buttonWa1');
if (buttonWa1) {
  buttonWa1.addEventListener('click', () => {
    const phone = '6287861517165';
    const message = encodeURIComponent('Maaf saya bingung bacanya, mohon penjelasannya yaa.. Terimakasih');
    const waLink = `https://wa.me/${phone}?text=${message}`;
    window.open(waLink, '_blank');
  });
}





