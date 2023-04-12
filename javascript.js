function add(num1, num2) {
  const addition = document.querySelector(".add");

  // addition.addEventListener("click", ())
}

function num1() {
  const num = document.querySelector(".add");
  let numOne;

  num.addEventListener("click", () => {
    numOne = num.textContent;

    console.log(numOne);
  });
}

num1();

