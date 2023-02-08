var i, j;

for (i = 1; i <= 3; i++) {
  document.write("<div>");
  document.write("<h3>" + i + "단</h3>");
  for (j = 1; j <= 9; j++) {
    document.write(i + "X" + j + " = " + i * j + "<br>");
  }
  document.write("</div>");
}
