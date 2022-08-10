let app = document.getElementById("App");
let data = {
  title: "un titre223",
  content: "Un contenu des..",
  description: "dool",
};
const patternRegex = /\{{([\s]*[^;\s\{]+[\s]*)\}}/g;
let template = app.innerHTML;
let match;
while ((match = patternRegex.exec(template))) {
  let mustached = match[0];
  let key = match[1].trim();
  let value = data[key];

  if (value == undefined) {
    console.error("key", key, "inexistante");
    value = "";
  }
  template = template.replace(mustached, value);
}
app.innerHTML = template;
