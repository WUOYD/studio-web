import { mount } from '@vue/test-utils'
import Footer from '../src/components/Footer.vue'

test('Header is loaded', async () => {

    const wrapper = mount(Footer)
    expect(wrapper.text()).toContain('')

})