import Vue from 'vue';
import Header from './components/header';


//进行全局组件注册，需要用哪个公共组件，就导入哪个公共组件，然后添加进这个数组中
let componentMap = [
    Header,
];


componentMap.forEach(item => {
    Vue.component(item.name, item);
});