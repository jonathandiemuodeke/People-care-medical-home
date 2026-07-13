// ===============APPOINTMENT BOOKING FORM================
const form = document.querySelector(".appointment-form");

const form1_error = document.querySelector("#form1-error");
// console.log(form1_error);
const form2_error = document.querySelector("#form2-error");
// console.log(form2_error);
const form2 = document.querySelector(".form-2");
const submit_btn = document.querySelector(".submit-btn");

// ====selcting input fields===========
// ====form1 input fields ===========

const successAlert = document.createElement("div");
successAlert.classList.add("created-element");
// creating the child of succssAlert
const successChild = document.createElement("div");
successChild.classList.add("successChild");
successChild.textContent = "Booking succesful";
// appending successChild to successAlert
successAlert.appendChild(successChild);
//
const main_parent = document.querySelector(".appointment-form-container");
// main_parent.appendChild(successAlert);
// console.log(main_parent);
// ====selcting input fields===========
// ====form1 input fields ===========
const firstN = document.querySelector("#firstN");
const lastN = document.querySelector("#lastN");
const age = document.querySelector("#age");
const gender = document.querySelector("#gender-select");
const country = document.querySelector("#country-select");
const disability = document.querySelector("#disability-select");
const tell_disability = document.querySelector(".state-disability");
const disabiltyName = document.querySelector("#state-disability");
const file = document.getElementById("file");
// ====form2 input fields ===========
const relate = document.getElementById("relateabilty-select");
const health = document.querySelector("#health-select");
const disease = document.querySelector(".state-disease");
const diseaseName = document.querySelector(".disease-name");
const upload = document.getElementById("upload");
const reportNo = document.getElementById("report-no");
const reportYes = document.getElementById("report-yes");
// ====selcting input fields===========
// ========init

let error_message;

// ============
// form.addEventListener("submit", submit);
// function submit(e) {
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // ========part1=======
  if (firstN.value === "") {
    inputerror("Name", firstN);
    addBorder(firstN);
    return false;
  }
  if (lastN.value === "") {
    inputerror("Name", lastN);
    addBorder(lastN);
    return false;
  }
  if (age.value === "") {
    inputerror("age", age);
    addBorder(age);
    return false;
  }
  if (gender.value === "") {
    selecterror(gender);
    addBorder(gender);
    return false;
  }
  if (country.value === "") {
    selecterror(country);
    addBorder(country);
    return false;
  }
  if (disability.value === "") {
    selecterror(disability);
    addBorder(disability);
    return false;
  }
  if (disability.value === "other") {
    // tell_disability.classList.add("showdisability");
    showfunction(tell_disability);
  }
  if (disability.value !== "other") {
    tell_disability.style.display = "none";
    form2.style.display = "block";
  }
  // if (!diseaseName && diseaseName.value === "") {
  //   inputerror("name", diseaseName);
  //   addBorder(diseaseName);
  //   return false;
  // }
  form2.style.display = "block";
  cont_btn.style.display = "none";
  // cont_btn.classList.add("btn-hide");
  // }
  // ===x=====part1====x===
  if (relate.value === "") {
    selecterror(relate);
    addBorder(relate);
    return false;
  }
  if (health.value === "") {
    selecterror(health);
    addBorder(health);
    return false;
  }
  if (health.value === "disease") {
    disease.style.display = "block";
  }
  if (health.value !== "disease") {
    disease.style.display = "none";
  }
  if (disease.style.display === "block" && diseaseName.value === "") {
    inputerror("name", diseaseName);
    addBorder(diseaseName);
    return false;
  }
  if (health.value === "") {
    selecterror(health);
    addBorder(health);
    return false;
  }
  if (health.value === "") {
    selecterror(health);
    addBorder(health);
    return false;
  }
  if (disability.value === "other" && disabiltyName.value === "") {
    inputerror("name", disabiltyName);
    addBorder(disabiltyName);
    return false;
  }
  if (reportYes.checked) {
    upload.style.display = "block";
  }
  if (file.value === "") {
    selecterror(file);
    form2_error.innerHTML = "please select a file";
    addBorder(file);
    return false;
  }
  success();
  return true;
});
// e.preventDefault();
// if (relate.value === "") {
//   selecterror(relate);
//   addBorder(relate);
//   return false;
// }
// if (health.value === "") {
//   selecterror(health);
//   addBorder(health);
//   return false;
// }
// if (health.value === "disease") {
//   disease.style.display = "block";
// }
// if (health.value !== "disease") {
//   disease.style.display = "none";
// }
// if (disease.style.display === "block" && diseaseName.value === "") {
//   inputerror("name", diseaseName);
//   addBorder(diseaseName);
//   return false;
// }
// if (health.value === "") {
//   selecterror(health);
//   addBorder(health);
//   return false;
// }
// if (health.value === "") {
//   selecterror(health);
//   addBorder(health);
//   return false;
// }
// if (disability.value === "other" && disabiltyName.value === "") {
//   inputerror("name", disabiltyName);
//   addBorder(disabiltyName);
//   return false;
// }
// if (reportYes.checked) {
//   upload.style.display = "block";
// }
// if (file.value === "") {
//   selecterror(file);
//   form2_error.innerHTML = "please select a file";
//   addBorder(file);
//   return false;
// }
// success();
// return true;
// }

// =============
// main_form.preventDefault();

// form.addEventListener("submit", formFunction);
// function formFunction() {
//   submit();
// }

// ======end of main function====
// contFunction();
// function part1() {
const cont_btn = document.querySelector(".btn-continue");
//   // console.log(cont_btn);
//   cont_btn.addEventListener("click", contFunc);
//   function contFunc() {
//     if (firstN.value === "") {
//       inputerror("Name", firstN);
//       addBorder(firstN);
//       return false;
//     }
//     if (lastN.value === "") {
//       inputerror("Name", lastN);
//       addBorder(lastN);
//       return false;
//     }
//     if (age.value === "") {
//       inputerror("age", age);
//       addBorder(age);
//       return false;
//     }
//     if (gender.value === "") {
//       selecterror(gender);
//       addBorder(gender);
//       return false;
//     }
//     if (country.value === "") {
//       selecterror(country);
//       addBorder(country);
//       return false;
//     }
//     if (disability.value === "") {
//       selecterror(disability);
//       addBorder(disability);
//       return false;
//     }
//     if (disability.value === "other") {
//       // tell_disability.classList.add("showdisability");
//       showfunction(tell_disability);
//     }
//     if (disability.value !== "other") {
//       tell_disability.style.display = "none";
//       form2.style.display = "block";
//     }
//     // if (!diseaseName && diseaseName.value === "") {
//     //   inputerror("name", diseaseName);
//     //   addBorder(diseaseName);
//     //   return false;
//     // }
//     form2.style.display = "block";
//     cont_btn.style.display = "none";
//   }
// }
// function contFunction(e) {
//   e.preventDefault();

// }

function showfunction(name) {
  name.style.display = "block";
  if (name !== name) {
    name.style.display = "none";
  }
}
// ========error function=========
function inputerror(message, name) {
  if (form2.style.display === "block") {
    form1_error.innerHTML = "";
    form2_error.innerHTML = `please enter a valid  ${message}`;
    setTimeout(function () {
      form2_error.innerHTML = "";
    }, 2000);
  }
  form1_error.innerHTML = `please enter a valid  ${message}`;
  const flag = form1_error;
  name.style.borderColor = "red";
  setTimeout(function () {
    form1_error.innerHTML = "";
  }, 2000);
  return `${flag}`;
  // console.log("error");
}
function selecterror(name) {
  if (form2.style.display === "block") {
    form1_error.innerHTML = "";
    form2_error.innerHTML = `please select a valid option`;
    const flag = form1_error;
    name.style.borderColor = "red";
    setTimeout(function () {
      form2_error.innerHTML = "";
    }, 2000);
    return flag;
  }
  form1_error.innerHTML = `please select a valid option`;
  const flag = form1_error;
  name.style.borderColor = "red";
  setTimeout(function () {
    form1_error.innerHTML = "";
  }, 2000);
  return flag;
  // console.log("error");
}
function addBorder(name) {
  setTimeout(function () {
    name.style.borderColor = "";
  }, 2000);
}
function success() {
  main_parent.appendChild(successAlert);
  setTimeout(function () {
    main_parent.removeChild(successAlert);
  }, 3000);
}
// formFunction();
console.log(tell_disability);

//
//
