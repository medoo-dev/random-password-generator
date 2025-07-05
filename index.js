const password = document.getElementById("password");
const generateBtn = document.getElementById("gen");
let p = document.querySelector("p");
let range = document.getElementById("length");

// Password Letters
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
  ""
);
const specials = "!@#$%^&*()_+{}[]|\\:;\"'<>,.?/~`-=€£¥•√π÷×¶∆§©®™✓".split("");

// Checkboxes
const checks = document.querySelectorAll(".checks input");

checks.forEach((check) => {
  check.addEventListener("change", () => {
    updateAllChars();
    generatePass(range.value);
  });
});
let allChars = [];
function updateAllChars() {
  allChars = []; // نفرّغ المصفوفة كل مرة الأول
  checks.forEach((check) => {
    if (check.checked) {
      if (check.dataset.type === "nums") {
        allChars.push(...nums);
      } else if (check.dataset.type === "letters") {
        allChars.push(...letters);
      } else if (check.dataset.type === "specials") {
        allChars.push(...specials);
      }
    }
  });

  console.log(allChars); // بس علشان نشوف النتيجة في الـ console
  console.log(allChars); // بس علشان نشوف النتيجة في الـ console
}

updateAllChars();
function generatePass(count) {
  let pass = [];

  for (let i = 0; i < count; i++) {
    pass.push(allChars[Math.floor(Math.random() * allChars.length)]);
  }

  password.value = pass.join("");
}

range.oninput = () => {
  p.innerHTML = range.value;
  generatePass(range.value);
};
generateBtn.addEventListener("click", () => {
  generatePass(range.value);
});

generatePass(range.value);
const copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", () => {
  if (password.value.length >= 1) {
    navigator.clipboard.writeText(password.value);
    copyBtn.innerHTML = "Copied!";
    setTimeout(() => {
      copyBtn.innerHTML = "Copy";
    }, 1500);
  }
});
