import { beforeEach, describe, expect, test } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import MyTest from '../MyTest.vue'

describe('Tester le composant mytest', () => {
    let component: VueWrapper

    beforeEach(() => {
        component = mount(MyTest)
    })

    test('le composant contient mon App', () => {
        //const h1 = component.find('h1')
        //expect(h1.text()).toBe('Mon App')

        expect(component.text()).toContain('Mon App')
    })
})