import { expect, test, describe, beforeEach } from 'vitest'
import { VueWrapper, mount } from '@vue/test-utils'
import MyTest from '../MyTest.vue'

describe('Tester le composant mytest', () => {
    let component: VueWrapper

    beforeEach(() => {
        component = mount(MyTest)
    })

    test('Est ce title affiche bien', () => {
        // const h1 = component.find('h1')
        // expect(h1.text()).toBe('My App')
        expect(component.text()).toContain('My App')
    })
})