function mudar(v) {
    let textarea = document.querySelector("#txt")
    let texto = "";
    if (textarea.value != "") {
        textarea.value = (textarea.value).trim()

        if (v == "maiu") {
            textarea.value = (textarea.value).toUpperCase()
        } else if (v == "minu") {
            textarea.value = (textarea.value).toLowerCase()
        } else if (v == "maiu_ini") {
            if (textarea.value[0] != " ") {
                textarea.value = (textarea.value)[0].toUpperCase() + (textarea.value).slice(1).toLowerCase()

            }
        } else if (v == "maiu_cada") {
            var separatorfrase = textarea.value.split(" ");

            for (var i in separatorfrase) {
                separatorfrase[i] = (separatorfrase[i][0]).toUpperCase() + (separatorfrase[i]).slice(1).toLowerCase();
                texto += separatorfrase[i] + " ";
            }
            textarea.value = texto;

        }
    }
}