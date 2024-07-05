import MyTest from '@/components/MyTest.vue'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import { ref } from 'vue'
import { useExtensionFilter } from '../../composable/useExtensionFilter'

test('1+1 est égal à 2', () => {
    const component = mount(MyTest, {
        props: {
            title: 'Mon App'
        }
    })
    expect(component.text()).toBe('Mon App')
})

test('tester le filtre', () => {
    const users = ref([
        {
            name: 'ana',
            email: 'ana@gmail.com',
            id: 1,
            username: 'aa'
        },
        {
            name: 'ana',
            email: 'ana@gmail.biz',
            id: 2,
            username: 'aa'
        }
    ])
    const extSelected = ref('com')
    const usersFiltered = useExtensionFilter(users, extSelected)
    expect(usersFiltered.value.length).toBe(1)
    expect(usersFiltered.value[0]).toHaveProperty('email', 'ana@gmail.com')
})