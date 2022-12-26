import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { TextInput, Button } from '@ignite-ui/react'
import { Form } from './styles'

import { ArrowRight } from 'phosphor-react'

const claimUsernameFormSchema = zod.object({
  username: zod.string(),
})

type ClaimUsernameFormData = zod.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const { register, handleSubmit } = useForm<ClaimUsernameFormData>()

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    console.log(data)
  }

  return (
    <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
      <TextInput
        size="sm"
        prefix="ignite.com/"
        placeholder="seu-usuário"
        {...register('username')}
      />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}
