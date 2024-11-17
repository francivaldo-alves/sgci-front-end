import axios from 'axios'

const apiSgci = axios.create({
  baseURL: process.env.API_SGCI
})

export class PessoaService {
  path = '/pessoas'

  create (pessoa) {
    return apiSgci.post(this.path, pessoa)
  }
}

export const pessoaService = new PessoaService()
