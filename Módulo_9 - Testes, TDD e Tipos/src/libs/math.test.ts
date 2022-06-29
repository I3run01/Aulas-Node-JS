import { Math } from './Math'

describe('Testing math library', () => {


    //Executa antes de cada teste
    beforeEach(() => {
        //bla bla bla
    })

    //Executa depois de cada teste
    afterEach(() => {
        //bla bla bla
    })

    //executa antes de cada teste  
    beforeAll(() => {
        //bla bla bla
    })

    //executa depois de cada teste
    afterAll(() => {
        //bla bla bla
    })

    it('should sun two numbers correctly', () => {
        const response = Math.sum(5, 10)
        expect(response).toBe(15)
    })
    
    it('should subtract two numbers correctly', () => {
        const response = Math.sub(4, 2)
        expect(response).toBe(2)
    })
    
    it('should multiply two numbers correctly', () => {
        const response = Math.mut(3,5)
        expect(response).toBe(15)
    
        const response2 = Math.mut(0, 3)
        expect(response2).toBe(0)
    })
    
    it('should divide two numbers corretly', () => {
        const response = Math.div(15,5)
        expect(response).toBe(3)

        const response2 = Math.div(3,0)
        expect(response2).toBe(false)
        
        //posso usar também
        //expect(response2).toBeFalsy() 
        //expect(response2).toBeTruthy()
        //expect(response2).tobeUndefined()

    })

    //Se tiver o it.only, roda apanas esse objeto
    it('contar quantos caracteres tem na string', () => {
        const response = 'DENIED'
        expect(response).toHaveLength(6)
    })

    it(' se possui a propriedade EMAIL', ()=> {
            const response = {
                name: 'Boniely',
                email: 'suporte@b7web.com.br'
            }

            expect(response).toHaveProperty('email')
    })

    it('Se a propriedade não é undefined', ()=> {
        const response = {
            name: 'Boniely',
            email: 'suporte@b7web.com.br'
        }

        expect(response).not.toBeUndefined()
    })

    it('Se o numero é maior que 15', () => {
        const response = 20
        expect(response).toBeGreaterThan(15)

        //Tenho também
            //toBeLessThan
            //toBeGreaterThanOrEqual
            //toBeLessThanOrEqual
    })

    /*
    it('Se der um erro', () => {
        const response = Math.div(10,0)

        expect(response).toThrow(new Error('Não divide por zero'))
    })
    */

})

