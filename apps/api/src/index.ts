import { defineAbilityFor, projectSchema } from '@saas/auth'

const ability = defineAbilityFor({ role: 'MEMBER', id: 'user-1' })

const project = projectSchema.parse({
  id: 'project-1',
  name: 'Project 1',
  description: 'Description for Project 1',
  ownerId: 'user-1',
})

console.log(ability.can('get', 'Billing'))
console.log(ability.can('create', 'Invite'))
console.log(ability.can('update', 'Project'))
console.log(ability.can('delete', 'Project'))
