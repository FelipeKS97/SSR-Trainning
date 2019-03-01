import 'babel-polyfill';
import express from 'express';
import createStore from './helpers/createStore'
import renderer from './helpers/renderer'
import proxy from 'express-http-proxy'
import { matchRoutes } from 'react-router-config'
import Routes from './client/Routes'
const app = express();

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
        opts.header['x-forwarded-host'] = 'localhost:3000';
        return opts
    }})
)

app.use(express.static('public'))

app.get('*', (req, res) => {

    const store = createStore();

    const promises = matchRoutes(Routes, req.path).map(
        ({ route }) => {
            return route.loadData && route.loadData(store)
        }
    )

    Promise.all(promises)
        .then(() => {
            res.send(renderer(req, store))
        })
})

app.listen(3000, () => {
    console.log('listening on port 3000')

});