import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


// 初始化状态，要写成一个对象，因为该state要管理n多个组件的状态
const state = {
    sumA:99
}

// 创建一个actions，值为一个对象，包含：n个相应组件“动作”的函数
const actions = {
   jia(context,value){
    context.commit('JIA',value);
   }
}

// 创建一个mutations，值为一个对象，包含：那个真正用于加工状态的函数
const mutations = {
    JIA(state,value){
        state.sumA += value;
    }
}

// 创建store，用于管理：state对象、actions对象、mutations对象
const store = new Vuex.Store({
    state,
    actions,
    mutations
});
export default store