import { test, expect, beforeEach, describe } from 'vitest'
import { useExtentionFilter } from '../useExtentionFilter'
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
    const { extension, usersFiltered } = useExtentionFilter(users)
    extension.value = 'biz'
    expect(usersFiltered.value.length).toBe(1)
    expect(usersFiltered.value[0]).toHaveProperty('id', 2)
})