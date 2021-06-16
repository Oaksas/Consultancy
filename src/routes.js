import tourDetail from './components/tourDetail.vue';
import history from './components/history.vue';
import addAgents from  './components/addAgents.vue';
import Welcome from './components/welcome.vue';

import places from './components/places.vue';

import addTour from './components/addTour.vue';
import agentTours from './components/agentTours.vue';

import book from './components/book.vue';
import login from './components/login.vue'



export default[
    {path:'/book',name:"book",component:book}
    ,    {path:'/detail',name:"detail",component:tourDetail}

    ,
    {
        path:'/history',name:"history",component:history
    } ,
    {
        path:'/place/:id',name:"places",component:places
    } ,
   
    {
        path:'/addAgent',name:"addAgent",component:addAgents
    },
    {
        path:'/agentTours/:id',name:"agentTours",component:agentTours
    },
    {path:'/addTour',name:"addTour",component:addTour},



    {path:"/",  name:"welcome",component:Welcome},
{path:'/login',name:"login",component:login},
    

]
