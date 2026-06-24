import { test, expect, beforeEach, describe } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import MyTest from '../MyTest.vue'

describe('Tester le composant mytest', () => {
    let component: VueWrapper

    beforeEach(() => {
        component = mount(MyTest)
    })

    test('Le composant contient titre Mon App', () => {
        expect(component.text()).toContain('Mon App')
    })
})