import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import MyTest from '../MyTest.vue'
import { ref } from 'vue'
import { useExtensionFilter } from '@/composables/useExtensionFilter'

test('Vérifier que titre vaut mon App', () => {
    const component = mount(MyTest, {
        props: {
            title: 'Mon App'
        }
    })
    expect(component.text()).toContain('Mon App')
})

test('tester le filtre', () => {
    const users = ref([
        {
            name: 'ana',
            email: 'ana@gmail.com',
            id: 1
        },
        {
            name: 'ana',
            email: 'ana@gmail.tv',
            id: 2
        }
    ])
    const { extSelected, usersFiltered } = useExtensionFilter(users)
    extSelected.value = 'tv'
    expect(usersFiltered.value.length).toBe(1)
    expect(usersFiltered.value[0]).toHaveProperty('id', 2)

})