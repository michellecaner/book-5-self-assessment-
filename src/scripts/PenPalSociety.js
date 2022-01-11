import { InputForm } from "./InputForm.js"
// import { Letters } from "./Letters.js"


export const PenPalSociety = () => {
    return `
        <h1 class="title">Pen Pal Society</h1>
        <section class="inputForm">
            ${InputForm()}
        </section>
        <section>
            <h2 class="letters">Letters</h2>
        </section>
            `
}
