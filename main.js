function somar() {
  var tn1 = window.document.getElementById("num1");
  var tn2 = window.document.getElementById("num2");
  var botão = window.document.getElementsByClassName("botão");
  var res = window.document.getElementById("res");
  var n1 = Number(tn1.value);
  var n2 = Number(tn2.value);
  var s = n1 + n2;
  res.innerHTML = `${n1} + ${n2} = ${s}`;
}
