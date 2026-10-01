const STORAGE_KEY = "lkpd-algoritma-struktur-data-v1";
const fields = [...document.querySelectorAll("[data-save]")];
const toast = document.getElementById("toast");

function showToast(message){
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.__toast);
  window.__toast = setTimeout(()=>toast.classList.remove("show"), 1800);
}

function saveData(){
  const data = fields.map((el,i)=>({
    i,
    type: el.type || el.tagName.toLowerCase(),
    value: el.type === "checkbox" ? el.checked : el.value
  }));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  showToast("Jawaban tersimpan di perangkat.");
}

function loadData(){
  try{
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    data.forEach(item=>{
      const el = fields[item.i];
      if(!el) return;
      if(el.type === "checkbox") el.checked = !!item.value;
      else el.value = item.value ?? "";
    });
  }catch(e){}
}

function updateProgress(){
  let answered = 0, total = 0;
  fields.forEach(el=>{
    if(el.type === "checkbox") return;
    total++;
    if(String(el.value || "").trim()) answered++;
  });
  const pct = total ? Math.round(answered/total*100) : 0;
  document.getElementById("progressBar").style.width = pct+"%";
  document.getElementById("progressText").textContent = pct+"% selesai";
  document.getElementById("progressCount").textContent = answered+" / "+total+" pertanyaan";
}

fields.forEach(el=>{
  el.addEventListener("input", updateProgress);
  el.addEventListener("change", updateProgress);
});

document.getElementById("saveBtn").addEventListener("click", saveData);

document.getElementById("pdfBtn").addEventListener("click", async ()=>{
  saveData();
  const group = document.getElementById("groupName").value.trim() || "Kelompok";
  const name = `LKPD-Informatika-${group.replace(/[^a-z0-9_-]+/gi,"-")}.pdf`;
  const element = document.getElementById("worksheet");
  const options = {
    margin: [8,8,8,8],
    filename: name,
    image: {type:"jpeg", quality:0.96},
    html2canvas: {scale:1.5, useCORS:true, logging:false},
    jsPDF: {unit:"mm", format:"a4", orientation:"portrait"},
    pagebreak: {mode:["css","legacy"]}
  };
  showToast("Membuat PDF...");
  try{
    await html2pdf().set(options).from(element).save();
    showToast("PDF berhasil dibuat.");
  }catch(err){
    console.error(err);
    showToast("PDF gagal dibuat. Coba lagi.");
  }
});

loadData();
updateProgress();
