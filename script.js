function mudar(v) {
    let textarea = document.querySelector("#txt")
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
        }
    }
}