import { Invoice } from "./classes/Invoice.js"
import { ListTemplate } from "./classes/ListTemplate.js"
import { Payments } from "./classes/Payments.js"
import { HasFormatter } from "./interfaces/HasFormatter"

//inputs
const form = document.querySelector('.new-item-form') as HTMLFormElement
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

//list template instances
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  let doc: HasFormatter
  if (type.value == 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payments(tofrom.value, details.value, amount.valueAsNumber)
  }

  list.render(doc,type.value,'end')
})