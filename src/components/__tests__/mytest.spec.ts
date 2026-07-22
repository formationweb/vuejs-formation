import { beforeEach, describe, expect, test } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import MyTest from '../MyTest.vue'

describe('Tester MyTest Component', () => {
    let wrapper: VueWrapper

    beforeEach(() => {
        wrapper = mount(MyTest, {
            props: {
                title: 'Mon App'
            }
        })
    })

    test('Vérifier que title vaut Mon App', async () => {
        expect(wrapper.text()).toContain('Mon App')
    })
})