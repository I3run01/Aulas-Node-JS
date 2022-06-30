import request  from "supertest";
import app from '../app'
import { User } from '../models/User'

describe('Testing api routes', () => {

    let email = 'test@jest.com'
    let password = '1234'

    beforeAll( async () => {
        await User.sync({force: true})
    })

    it('shoult ping pong', (done) => {
        request(app)
            .get('/ping')
            .then(response => {
                expect(response.body.pong).toBeTruthy()
                return done()
            })
    })
    
    it('shoult register a new user', (done) => {
        request(app)
            .post('/register')
            .send(`email=${email}&password=${password}`)
            .then(response => {
                expect(response.body.error).toBeUndefined
                expect(response.body).toHaveProperty(`id`)
                return done()
            })
    })

    it('shoult not allow to register with existing email', (done) => {
        request(app)
            .post('/register')
            .send(`email=${email}&password=${password}`)
            .then(response => {
                expect(response.body.error).not.toBeUndefined
                return done()
            })
    })

    it('shoult not allow to register without password', (done) => {
        request(app)
            .post('/register')
            .send(`email=${email}`)
            .then(response => {
                expect(response.body.error).not.toBeUndefined
                return done()
            })
    })

    it('shoult not allow to register without email', (done) => {
        request(app)
            .post('/register')
            .send(`password=${password}`)
            .then(response => {
                expect(response.body.error).not.toBeUndefined
                return done()
            })
    })

    it('shoult not allow to register without email', (done) => {
        request(app)
            .post('/register')
            .send(``)
            .then(response => {
                expect(response.body.error).not.toBeUndefined
                return done()
            })
    })





} )