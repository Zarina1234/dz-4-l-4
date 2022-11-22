//GET
    // fetch(' http://localhost:3000/cards')
    // .then(res => res.json())
    // .then(res => console.log(res))



//POST
let btnCreate = document.querySelector('.btn-create')
let form = document.querySelector('.form')
let btnDelete = document.querySelector('.btn-delete')


// btnCreate.addEventListener('submit', () => {
//     fetch(' http://localhost:3000/cards', {
//         method: 'POST',
//         headers: {
//             'Content-Type': "application/json"
//         },
//         body: JSON.stringify()
//     }).then(res => alert('вы удачно создали данные', res))
//     .catch(err => alert('Проблема создании карточки', err))
// })



form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch(' http://localhost:3000/cards', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            name: e.target [0].value,
            surname: e.target [1].value,
            email: e.target [2].value,
        })
    }).then((res) =>  {

        e.target[0].value = ''
        e.target[1].value = ''
        e.target[2].value = ''
})
    .catch((err) => alert(err))
})


//delete
btnDelete.addEventListener('click', () => {
    fetch('  http://localhost:3000/cards/2', {
        method:'DELETE'
    }).then(() => alert('вы успешно удалили'))
    .catch((err) => alert('ошибка при удалении карточки'))
})

