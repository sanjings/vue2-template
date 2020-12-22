import { Button } from 'element-ui';

export default {
  install: Vue => {
    Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }; // 全局配置
    Vue.use(Button);
    // Vue.use(Loading.directive);
    // Vue.prototype.$loading = Loading.service;
    // Vue.prototype.$msgbox = MessageBox;
    // Vue.prototype.$alert = MessageBox.alert;
    // Vue.prototype.$confirm = MessageBox.confirm;
    // Vue.prototype.$prompt = MessageBox.prompt;
    // Vue.prototype.$notify = Notification;
    // Vue.component(Message.name, Message)
    // Vue.prototype.$message = Message;
  }
};
