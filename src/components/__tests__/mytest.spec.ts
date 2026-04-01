import { test, expect, beforeEach, describe } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import MyTest from '../MyTest.vue'

let component: VueWrapper

class UserServiceMock {
    async getUsers() {
        return [
            {
                id: 1, 
                name: 'ana'
            }
        ]
    }
}

describe('Tester le composant mytest', () => {
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
})