import { shallowMount } from '@vue/test-utils';
import Mentionable from '../../../src/views/AdminPage/MentionView.vue';

describe('Mentionable.vue', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(Mentionable, {
      propsData: {
        placement: 'bottom',
        keys: ['@'],
        items: ['John', 'Jane', 'Mary'],
        offset: 6,
        insertSpace: true,
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('updates the content when text is entered', async () => {
    const wrapper = shallowMount(Mentionable, {
      propsData: {
        placement: 'bottom',
        keys: ['@'],
        items: ['John', 'Jane', 'Mary'],
        offset: 6,
        insertSpace: true,
      },
    });

    const textarea = wrapper.find('textarea');
    textarea.setValue('Hello @John');
    await textarea.trigger('input');

    expect(wrapper.vm.content).toBe('Hello @John');
  });
});
