import { test, expect, beforeEach, describe } from 'vitest'
import { useExtensionFilter } from '../useExtensionFilter'
import { ref } from 'vue'

test('Tester useExtensionFilter', () => {
    const users = ref([
        {
            name: 'ana',
            email: 'feferrgr@gmail.com',
            username: 'feffe',
            id: 1
        },
         {
            name: 'ben',
            email: 'fezezfzffze@gmail.biz',
            username: 'grggr',
            id: 2
        }
    ])
   const { extSelected, usersFiltered } = useExtensionFilter(users as any)
    extSelected.value = 'biz'
     expect(usersFiltered.value.length).toBe(1)
    expect(usersFiltered.value[0]).toHaveProperty('id', 2)
})