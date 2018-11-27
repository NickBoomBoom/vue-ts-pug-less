import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'
Vue.use(Vuex)
interface State {
  title: string,
  deviceType: number
}

let state : State = {
  title: 'ky h5',
  deviceType: 0   // 0 未定义  1 ios  2 android  3 iosx
}

export default new Vuex.Store({
  state,
  getters: {
    storeDeviceType(state): number {
      return state.deviceType
    },
    storeTitle(state): string {
      return state.title
    }
  },
  mutations: {
    SET_TITLE(state, title: string): void {
      state.title = title
    },
    SET_DEVICE_TYPE(state, type: number):void{
      console.log(type)
      state.deviceType = type
    }
  },
  actions: {
    async async_title({ state, commit }) {
      commit('SET_TITLE', 'ACTIONS 异步处理')
    },
  }
})
