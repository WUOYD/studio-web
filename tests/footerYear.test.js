import { mount } from '@vue/test-utils'
import Footer from '../src/components/Footer.vue'

test('Footer year is correct', async () => {
    const wrapper = mount(Footer);
    const year = new Date().getFullYear();
    expect(wrapper.text()).toContain(year);
})