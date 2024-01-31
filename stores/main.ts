import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => ({
        project: {
            title: 'Сказки',
        },
        modalAuthLogin: true
    })
})