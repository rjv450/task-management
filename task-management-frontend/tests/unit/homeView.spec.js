import home from "../../src/views/AdminPage/homeView.vue";
import {shallowMount} from "@vue/test-utils";


it('should render the component', async () => {
  const wrapper = await shallowMount(home,{ 
    propsData: {
      
      category:[]
          },  
     mocks: {
                  $store: {
                    state: {
                      projectId: '',
                      taskId:''
                    }
}}}
);

  expect(wrapper.exists()).toBe(true);
});