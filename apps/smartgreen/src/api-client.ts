 import {initQueryClient} from '@ts-rest/react-query'
import { contract } from 'api-contract'


 const apiClient = initQueryClient(contract, {
    baseHeaders: {},
    baseUrl: 'https://smart-1-hl3w.onrender.com'

    //https://smart-1-hl3w.onrender.com
 })

 export default apiClient