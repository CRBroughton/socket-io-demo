import { mount } from '@vue/test-utils'
import name from '@/pages/users/[name].vue'

interface Props {
  name: string
}

const bootstrap = (props: Props) => {
  return mount(name, { props })
}

describe('name Component', () => {
  it('mounts and renders', () => {
    const name = 'Craig'
    const wrapper = bootstrap({ name })

    expect(wrapper.text()).toContain(name)
  })
})
