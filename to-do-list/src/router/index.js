import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue'
import EachCategory from '../views/EachCategory.vue'
import AllCategory from '../views/AllCategory.vue'
import ImportantList from '../views/ImportantList.vue'

const history = createWebHistory()
const routes = [
    { path: '/', name: 'All', component: AllCategory },
    { path: '/important', name: 'Important', component: ImportantList },
    { 
        path: '/:category', 
        name: 'EachCategory', 
        component: EachCategory
    }
    // { 
    //     path: '/:catchNotMatchPath(.*)',
    //     name: 'NotFound',
    //     component: NotFound
    // }
]

const router = createRouter({ history, routes })
export default router