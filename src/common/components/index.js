import Vue from 'vue';
import littleHeader from './littleHeader'

let componentMap = [
    littleHeader
];

componentMap.forEach(item=>{
    Vue.component(item.name,item);
})