import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import MyTest from '@/components/MyTest.vue'
import { useExtensionFilter } from '@/composable/useExtensionFilter'

test('Le rendu est correct ?', () => {
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
    const usersFiltered = useExtensionFilter(users as any, extSelected)
    expect(usersFiltered.value.length).toBe(1)
    expect(usersFiltered.value[0]).toHaveProperty('email', 'ana@gmail.com')
})