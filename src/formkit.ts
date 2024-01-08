import { createInput } from '@formkit/vue'
import { FormKitNode } from '@formkit/core'


interface ITest {
  line1: string
}

function feature(node: FormKitNode<ITest>) {
}

const test = createInput({}, {
  props: ['endpoint'],

  features: [feature],
  family: '',
})