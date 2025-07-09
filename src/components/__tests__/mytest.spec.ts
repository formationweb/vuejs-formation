import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import MyTest from '../MyTest.vue'
import { useExtensionFilter } from '@/composables/useExtensionFilter'
import { ref } from 'vue'

test('1+1 == 2 ?', () => {
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

   const { extSelected, usersFiltered } = useExtensionFilter(users)
   extSelected.value = 'biz'
   expect(usersFiltered.value.length).toBe(1)
   expect(usersFiltered.value[0]).toHaveProperty('id', 2)
})