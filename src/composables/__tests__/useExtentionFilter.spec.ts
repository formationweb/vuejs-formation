import { describe, expect, test } from "vitest";
import { useExtensionFilter } from '../useExtensionFilter'
import { ref } from "vue";

describe('Tester useExtensionFilter', () => {
    test('tester le filtre', () => {
        const users = ref([
            {
                id: 1,
                email: 'ana@gmail.com'
            },
            {
                id: 2,
                email: 'ana@gmail.biz'
            }
        ])
        const { extSelected, usersFiltered } = useExtensionFilter(users as any)
        extSelected.value = 'biz'
        expect(usersFiltered.value).toHaveLength(1)
        expect(usersFiltered.value[0]).toHaveProperty('id', 2)
    })
})