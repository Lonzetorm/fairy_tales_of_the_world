import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => ({
        project: {
            title: 'Народные сказки',
        },
        modalSearch: false,
        modalAuthLogin: true,
        modalAuthCall: false,
        modalRegisterCall: false,
        modalDeleteConfirm: false,
        mobileMenuShown: false,
        taleUploadText: ''
    })
})