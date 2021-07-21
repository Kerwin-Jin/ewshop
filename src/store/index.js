import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    sum:5,
    myname:'老刘'
}

const actions = {
    jia(context,value){
        context.commit("JIA",value);
    },
    jian(context,value){
        context.commit("JIAN",value);
    }
}

const mutations = {
    JIA(state,value){
        state.sum += value;
    },
    JIAN(state,value){
        state.sum -= value;
    }
}

const getters = {
    bigSum(state){
        return state.sum * 100;
    }
}

const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})

export default store;