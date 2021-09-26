import {
  Button,
  // ButtonGroup,
  // Pagination,
  // Dialog,
  // Autocomplete,
  // Dropdown,
  // DropdownMenu,
  // DropdownItem,
  // Menu,
  // Submenu,
  // MenuItem,
  // MenuItemGroup,
  // Input,
  // InputNumber,
  // Radio,
  // RadioGroup,
  // RadioButton,
  // Checkbox,
  // CheckboxButton,
  // CheckboxGroup,
  // Switch,
  // Select,
  // Option,
  // OptionGroup,
  // Table,
  // TableColumn,
  // DatePicker,
  // TimeSelect,
  // TimePicker,
  // Popover,
  // Tooltip,
  // Breadcrumb,
  // BreadcrumbItem,
  // Form,
  // FormItem,
  // Tabs,
  // TabPane,
  // Tag,
  // Tree,
  // Alert,
  // Slider,
  // Icon,
  // Row,
  // Col,
  // Upload,
  // Progress,
  // Spinner,
  // Badge,
  // Card,
  // Rate,
  // Steps,
  // Step,
  // Carousel,
  // CarouselItem,
  // Collapse,
  // CollapseItem,
  // Cascader,
  // ColorPicker,
  // Transfer,
  // Container,
  // Header,
  // Aside,
  // Main,
  // Footer,
  // Timeline,
  // TimelineItem,
  // Link,
  // Divider,
  // Image,
  // avatar,
  // Calendar,
  // Backtop,
  // PageHeader,
  // CascaderPanel,
  Loading,
  MessageBox,
  Message
  // Notification
} from 'element-ui';

export default {
  install: Vue => {
    Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }; // 全局配置
    Vue.use(Button);
    // Vue.use(ButtonGroup);
    // Vue.use(Select);
    // Vue.use(Option);
    // Vue.use(OptionGroup);
    // Vue.use(Pagination);
    // Vue.use(Dialog);
    // Vue.use(Table);
    // Vue.use(TableColumn);
    // Vue.use(Cascader);
    // Vue.use(Form);
    // Vue.use(FormItem);
    // Vue.use(Input);
    // Vue.use(InputNumber);
    // Vue.use(Row);
    // Vue.use(Col);
    // Vue.use(Badge);
    // Vue.use(Alert);
    // Vue.use(DatePicker);
    // Vue.use(Radio);
    // Vue.use(RadioGroup);
    // Vue.use(RadioButton);
    // Vue.use(Checkbox);
    // Vue.use(CheckboxGroup);
    // Vue.use(Tabs);
    // Vue.use(TabPane);
    // Vue.use(Menu);
    // Vue.use(Submenu);
    // Vue.use(MenuItem);
    // Vue.use(Tag);
    // Vue.use(Card);
    // Vue.use(Image);
    // Vue.use(Tooltip);
    // Vue.use(Popover);
    // Vue.use(avatar);
    Vue.use(Loading.directive);
    Vue.prototype.$loading = Loading.service;
    // Vue.prototype.$msgbox = MessageBox;
    Vue.prototype.$alert = MessageBox.alert;
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$prompt = MessageBox.prompt;
    Vue.prototype.$notify = Notification;
    Vue.component(Message.name, Message);
    Vue.prototype.$message = Message;
  }
};
