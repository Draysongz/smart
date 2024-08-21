 import {initQueryClient} from '@ts-rest/react-query'
 import {contract} from 'api-contract'


 const apiClient = initQueryClient(contract, {
    baseHeaders: {},
    baseUrl: process.env.PRODUCTION_API_URL || 'https://smartgreen.vercel.app/'
 })

 export default apiClient