import { createRouter, createWebHistory } from 'vue-router'
import  LoginPage from '../components/omc/login.vue'
import IndexPage from '../components/omc/index.vue'
import CreateOmc from '../components/omc/create_omc.vue'
import CreateAttendants from '../components/omc/create_attendant.vue'
import CreateMessages from '../components/omc/create_message.vue'
import CreateStation from '../components/omc/create_station.vue'
import DeletedMessages from '../components/omc/deleted_messages.vue'
import DraftMessages from '../components/omc/draft_messages.vue'
import ForgotPassword from '../components/omc/forgot-password.vue'
import ProfilePage from '../components/omc/profile.vue'
import ReadMessages from '../components/omc/read_message.vue'
import RegisterPage from '../components/omc/register.vue'
import SentMessage from '../components/omc/sent_messages.vue'
import UpdateAttendants from '../components/omc/update_attendants.vue'
import UpdateOmc from '../components/omc/update_omc.vue'
import UpdateStation from '../components/omc/update_station.vue'
import ViewAttendants from '../components/omc/view_attendants.vue'
import ViewMessages from '../components/omc/view_messages.vue'
import ViewOmc from '../components/omc/view_omc.vue'
import ViewPayments from '../components/omc/view_payments.vue'
import ViewStation from '../components/omc/view_station.vue'



const routes = [
    { 
        path: '/',
        name:'LoginPage',
        component: LoginPage,
    },
    {
        path: '/index',
        name:'IndexPage',
        component: IndexPage,
    },
    {
        path: '/create_omc',
        name:'CreateOmc',
        component: CreateOmc,
    },
    {
        path: '/create_attendant',
        name:'CreateAttendants',
        component: CreateAttendants,
    },
    {
        path: '/create_message',
        name:'CreateMessages',
        component: CreateMessages,
    },
    {
        path: '/create_station',
        name:'CreateStation',
        component: CreateStation,
    },
    {
        path: '/deleted_messages',
        name:'DeletedMessages',
        component: DeletedMessages,
    },
    {
        path: '/draft_messages',
        name:'DraftMessages',
        component: DraftMessages,
    },
    {
        path: '/forgot-password',
        name:'ForgotPassword',
        component: ForgotPassword,
    },
    {
        path: '/profile',
        name:'ProfilePage',
        component: ProfilePage,
    },
     {
        path: '/read_message',
        name:'ReadMessages',
        component: ReadMessages,
    },
     {
        path: '/sent_messages',
        name:'SentMessage',
        component: SentMessage,
    },
     {
        path: '/update_attendants',
        name:'UpdateAttendants',
        component: UpdateAttendants,
    },
     {
        path: '/update_omc',
        name:'UpdateOmc',
        component: UpdateOmc,
    },
    {
        path: '/update_station',
        name:'UpdateStation',
        component: UpdateStation,
    },
    {
        path: '/view_attendants',
        name:'ViewAttendants',
        component: ViewAttendants,
    },
    {
        path: '/register',
        name:'RegisterPage',
        component: RegisterPage,
    },
    {
        path: '/view_messages',
        name:'ViewMessages',
        component: ViewMessages,
    },
    {
        path: '/view_omc',
        name:'ViewOmc',
        component: ViewOmc,
    },
    {
        path: '/view_station',
        name:'ViewStation',
        component: ViewStation,
    },
    {
        path: '/view_payments',
        name:'ViewPayments',
        component: ViewPayments,
    },

]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router











