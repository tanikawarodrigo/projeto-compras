const { getAll } = require('../../../../src/services/produtos')
const model = require('../../../../src/repositories')

/* global jest, describe, test, expect */
describe('Retorna a lista de produtos', () => {
  test('caso-01 : [Succeso] Consulta e retorna uma lista de produtos', async () => {
    expect(await getAll()).toMatchObject();
  })
})
