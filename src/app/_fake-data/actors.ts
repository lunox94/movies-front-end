import { ActorModel } from '../_models';

export const fakeActors: ActorModel[] = [
    {
        id: 1,
        name: 'Tom Hanks',
        dateOfBirth: new Date(Date.now()),
        photo: 'https://www.bing.com/th?id=AMMS_dc40638f9f7c6b1d32653befe34375d7&w=116&h=160&c=2&rs=1&o=6&pid=SANGAM',
    },
    {
        id: 2,
        name: 'Robert de Niro',
        dateOfBirth: new Date(Date.now()),
        photo: 'https://www.bing.com/th?u=https%3a%2f%2ftse1.mm.bing.net%2fth%3fid%3dOIP.osWLVhVsHBqaPvmprCdNsgHaJ0&ehk=hZfyWSFe6H6wweSaoQblBZ%2bd4qOI5hDbFekWRFGb4sU%3d&w=121&h=160&c=2&rs=1&o=6&pid=AppEx',
    },
    {
        id: 3,
        name: 'Tom Holland',
        dateOfBirth: new Date(Date.now()),
        photo: 'https://www.bing.com/th?id=OIP.CpW_kEsyGV-XwnrY0goVkAHaJt&w=180&h=225&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
    },
    {
        id: 4,
        name: 'Samuel L Jackson',
        dateOfBirth: new Date(Date.now()),
        photo: 'https://th.bing.com/th/id/OIP.HwjHzR64I4KJZx6WROhDBAHaHN?w=162&h=180&c=7&r=0&o=5&pid=1.7',
    },
];
