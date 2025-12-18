function hideAll(){
  document.querySelectorAll(".section").forEach(s => s.classList.add("hidden"));
}

function goHome(){
  hideAll();
  document.getElementById("home").classList.remove("hidden");
}

function showCompanyLogin(){
  hideAll();
  document.getElementById("companyLogin").classList.remove("hidden");
}

function showStudentLogin(){
  hideAll();
  document.getElementById("studentLogin").classList.remove("hidden");
}

function loginCompany(e){
  e.preventDefault();
  hideAll();
  document.getElementById("companyPage").classList.remove("hidden");
}

function loginStudent(e){
  e.preventDefault();
  hideAll();
  document.getElementById("studentPage").classList.remove("hidden");
}
