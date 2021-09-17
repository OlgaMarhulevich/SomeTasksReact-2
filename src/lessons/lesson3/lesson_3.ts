import axios from "axios";

console.log('lesson 3');

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

//GET
axiosInstance.get('/posts').then(res => console.log(res.data))
axiosInstance.get('/posts/1').then(res => console.log(res.data))
//POST
axiosInstance.post('/posts', {
    title: 'NEW',
    body: 'something',
    userId: 1
}).then(res => console.log(res.data))
//PUT
axiosInstance.put('/posts/1', {id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,}).then(res => console.log(res.data))
//PATCH
axiosInstance.patch('/posts/1', {title: 'foo'})
    .then(res => console.log(res.data))
//DELETE
axiosInstance.delete('/posts/1')
    .then(res => console.log(res.data))



// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661