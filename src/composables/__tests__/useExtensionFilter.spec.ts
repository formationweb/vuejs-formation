import { test, expect, beforeEach, describe } from 'vitest'
import { useExtensionFilter } from '../useExtensionFilter'
import { ref } from 'vue'

test('Tester useExtensionFilter', () => {
    const users = ref([
        {
            name: 'ana',
            email: 'feferrgr@gmail.com',
            id: 1
        },
         {
            name: 'ben',
            email: 'fezezfzffze@gmail.biz',
            id: 2
        }
    ])
    const { extSelected, usersFiltered } = useExtensionFilter(users)
    extSelected.value = 'biz'
    expect(usersFiltered.value.length).toBe(1)
    expect(usersFiltered.value[0]).toHaveProperty('id', 2)
})