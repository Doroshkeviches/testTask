import Card from "../../pages/Card";
import Main from "../../pages/Main";

export const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/card:id',
        component: Card
    },
]