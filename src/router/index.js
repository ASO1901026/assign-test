import Vue from 'vue'
import Router from 'vue-router'
import sign_in from '@/components/sign_in'
import student_user from "@/components/student_user"
import briefing_list from "@/components/briefing_list";
import calendar from "@/components/calendar";
import briefing_add from "@/components/briefing_add";
import Brifing from "@/components/Brifing";
import Details from "@/components/Details";

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            component: sign_in
        },
        {
            path: '/student_user',
            component: student_user
        },
        {
            path: '/briefing_list',
            component: briefing_list
        },
        {
            path: '/calendar',
            component: calendar
        },
        {
            path: '/briefing_add',
            component: briefing_add
        },
        {
            path:'/Brifing',
            component: Brifing
        },
        {
            path:'/Details',
            component: Details
        }
    ]
})