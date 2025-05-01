import { defineStore } from 'pinia'


export const useUserStore = defineStore('user', {
    state: () => ({
        name: '张三',
        age: 18
    }),

})