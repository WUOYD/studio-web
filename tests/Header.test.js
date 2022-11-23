import { mount } from '@vue/test-utils'
import Header from '../src/components/Header.vue'

test('Header is loaded', async () => {

    const wrapper = mount(Header)
    expect(wrapper.text()).toContain('What the web')

})