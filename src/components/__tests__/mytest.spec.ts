import { beforeEach, expect, test } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import MyTest from '../MyTest.vue'
import { ref } from 'vue'
import { useExtensionFilter } from '../../composables/useExtensionFilter'

let component: VueWrapper

class UserServiceMock {
    getUsers() {
        return Promise.resolve([
            {
                id: 1,
                name: 'ana'
            }
        ])
    }
}

beforeEach(() => {
    component = mount(MyTest, {
        props: {
            title: 'Mon App'
        },
        global: {
            provide: {
                userService: new UserServiceMock()
            }
        }
    })
})

test('Le composant contient Mon App', () => {
    expect(component.text()).toContain('Mon App')
})

test('Tester useExtensionFilter', () => {
    const users = ref([
        {
            name: 'ana',
            email: 'sazdfret@gmail.com',
            id: 1
        },
        {
            name: 'ben',
            email: 'cvb@gmail.biz',
            id: 2
        }
    ])
    const { extSelected, usersFiltered } = useExtensionFilter(users)
    extSelected.value = 'biz'
    expect(usersFiltered.value.length).toBe(1)
    expect(usersFiltered.value[0]).toHaveProperty('id', 2)
})