import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => ({
        project: {
            title: 'Народные сказки',
        },
        modalAuthLogin: true,
        modalAuthCall: false
    })
})