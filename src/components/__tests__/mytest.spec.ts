import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MyTest from '../MyTest.vue'
import { useExtensionFilter } from '@/composables/useExtensionFilter'
import { ref } from 'vue'

test('Le composant contient Mon App', () => {
    const component = mount(MyTest, {
        props: {
            title: 'Mon App'
        }
    })
    expect(component.text()).toContain('Mon App')
})

test('Tester useExtensionFilter', () => {
    const users = ref([
        {
            name: 'ana',
            email: 'dadzfez@gmail.com',
            id: 1
        },
        {
            name: 'ben',
            email: 'fefze@gmail.biz',
            id: 2
        }
    ])
    const { extSelected, usersFiltered } = useExtensionFilter(users)
    extSelected.value = 'biz'
    expect(usersFiltered.value.length).toBe(1)
    expect(usersFiltered.value[0]).toHaveProperty('id', 2)
})