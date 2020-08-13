const modal = $.modal({
    title: 'Войти',
    closable: true,
    content: `
        <h4> Content </h4>
        <p>Lorem ipsum dolor sit amet.</p>
    `,
    width: '400px',
    footerButtons: [
        {tag: 'a', link: '#',text: 'Ok', type: 'prymary', handler() {
            modal.setContent(`
                Забыли пароль
            `)
            }
        }
    ]
})

const modal2 = $.modal({
    title: 'Регистрация',
    closable: true,
    content: `
        <input type='text' />
    `,
    width: '600px',
    footerButtons: [
        {tag: 'button', text: 'Ok', type: 'prymary', handler() {
            modal2.setContent(`
                Мы отправили вам пароль
            `)
            }
        }
    ]

})


document.addEventListener('click', function(e) {
    switch(e.target.dataset.showModal) {
        case '1':
            modal.open()
            break;
        case '2':
            modal2.open()
            break;
    }
})