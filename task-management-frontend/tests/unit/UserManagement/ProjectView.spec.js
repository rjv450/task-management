import { shallowMount } from "@vue/test-utils";
import ProjectView from '../../../src/views/AdminPage/ProjectView.vue';
describe('Profile Page', () => {

    it('should render the component', () => {
        const wrapper = shallowMount(ProjectView,{ 
              }
    );
    
        expect(wrapper.exists()).toBe(true);
      });
    

});