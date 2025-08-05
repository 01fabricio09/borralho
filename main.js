const frm = document.querySelector("from")
const resp = document.querySelector("h3")

frm.addEventListener("submity", (e) => {
    const nome = frm.inNome.value
    resp.innerText = 'Olá, ${nome}'
    e.preventDefault()
})