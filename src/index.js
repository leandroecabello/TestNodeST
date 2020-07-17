const app = require('./app/app')

const main  = (async () => {
    await app.listen(app.get('port'), () => {
        console.log(`Server is running at port ${app.get('port')}`)
    })
})()




