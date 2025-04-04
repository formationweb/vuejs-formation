import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import MyTest from '../MyTest.vue'
import { Ref, ref } from 'vue'
import { useExtensionFilter } from '../../composables/useExtensionFilter'
import { User } from '../../interfaces/User'

test('tester le contenu du composant', () => {
    const component = mount(MyTest, {
        props: {
            title: 'Mon App'
        }
    })
    expect(component.text()).toBe('Mon App')
})

test('Tester le filtre', () => {
    const users = ref([
        {
            name: 'ana',
            email: 'ana@gmail.com',
            id: 1
        },
        {
            name: 'ana',
            email: 'ana@gmail.biz',
            id: 2
        }
    ])
    const { extSelected, usersFiltered } = useExtensionFilter(users as Ref<User[]>)
    extSelected.value = 'biz'
    expect(usersFiltered.value.length).toBe(1)
    expect(usersFiltered.value[0]).toHaveProperty('id', 2)
})