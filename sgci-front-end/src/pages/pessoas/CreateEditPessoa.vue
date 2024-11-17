<template>
  <div>
    <q-form ref='formPessoa' @submit='cadastrar' class="bg">
      <div class="bg"></div>
      <div class="main-container">
        <div class="q-mb-md">

          <h4 class="title">Cadatrar Pessoa</h4>

          <div class="divisor-inline"></div>
        </div>

        <div class="q-pa-md" style="margin-top: -30px">

          <h4 class="subtitulo">Dados básicos</h4>

          <!--Campos-->
          <div class="row q-col-gutter-x-lg">
            <div class="col-7">
              <q-input :rules="[val => !(val == null || val == '') || 'Campo Obrigatório']" v-model="pessoa.nome"
                label="Nome" dense />
            </div>
            <div class="col-2">
              <q-input :rules="[val => !(val == null || val == '') || 'Campo Obrigatório']" v-model="pessoa.documento"
                label="Documento" dense />
            </div>
            <div class="col-3">
              <q-input v-model="pessoa.profissao"
               :rules="[val => !(val == null || val == '') || 'Campo Obrigatório']"
                label="Profissão" dense />
            </div>
          </div>

          <div class="row q-col-gutter-lg" style="margin-top: -15px">
            <div class="col-7">
              <q-field ref="tipoPessoa" dense :model-value="pessoa.tipo" :rules="[vRequired]"
              label="Tipo de Pessoa" lazy-rules borderless stack-label>
                <template v-slot:control>
                  <q-option-group v-model="pessoa.tipo" :options="optionsTipoPessoa" type="radio" size="xs" inline />
                </template>
              </q-field>
            </div>

            <div class="col-5">
              <q-field dense ref="estadoCivil" :rules="[vRequired]" :model-value="pessoa.estadoCivil"
                label="Estado Civil" lazy-rules borderless stack-label>
                <template v-slot:control>
                  <q-option-group v-model="pessoa.estadoCivil" :options="optionsEstadoCivil" type="radio" size="xs"
                     inline />
                </template>
              </q-field>
            </div>
          </div>
        </div>

        <div class="q-pa-md" style="margin-top: -30px">
          <h4 class="subtitulo">Endereço</h4>

          <!--Campos-->
          <div class="row q-col-gutter-x-lg">
            <div class="col-3">
              <q-input :rules="[val => !(val == null || val == '') || 'Campo Obrigatório']" v-model="pessoa.endereco.estado"
                label="Estado" dense />
            </div>

            <div class="col-3">
              <q-input :rules="[val => !(val == null || val == '') || 'Campo Obrigatório']" v-model="pessoa.endereco.cep"
                label="CEP" dense />
            </div>

            <div class="col-3">
              <q-input :rules="[val => !(val == null || val == '') || 'Campo Obrigatório']" v-model="pessoa.endereco.cidade"
                label="Cidade" dense />
            </div>

            <div class="col-3">
              <q-input :rules="[val => !(val == null || val == '') || 'Campo Obrigatório']" v-model="pessoa.endereco.bairro"
                label="Bairro" dense />
            </div>

            <div class="col-5">
              <q-input :rules="[val => !(val == null || val == '') || 'Campo Obrigatório']" v-model="pessoa.endereco.rua"
                label="Rua" dense />
            </div>

            <div class="col-1">
              <q-input :rules="[val => !(val == null || val == '') || 'Campo Obrigatório']" v-model="pessoa.endereco.numero"
                label="Número" dense />
            </div>
          </div>

        </div>
        <div class="row">
          <!--Botoes-->
          <div class="col-12">
            <div style="float: right;">
              <q-btn label="Voltar" no-caps class="btn-voltar" />
              <q-btn type="cadastrar" label="Cadastrar" no-caps class="btn-cadastrar" />
            </div>
          </div>
        </div>
      </div>
    </q-form>

  </div>
</template>
<script>
import { pessoaService } from 'src/services/sgci-api-services'
import { ref } from 'vue'

export default {
  name: 'CreateEditPessoa',
  setup () {
    const pessoa = ref({
      id: null,
      nome: null,
      documento: null,
      profissao: null,
      tipo: ref(null),
      estadoCivil: ref(null),
      endereco: ref({
        cep: null,
        estado: null,
        cidade: null,
        rua: null,
        bairro: null,
        numero: null
      })
    })
    return {
      pessoa,
      optionsTipoPessoa: [
        {
          label: 'Pessoa Física',
          value: 'PESSOA_FISICA'
        },
        {
          label: 'Pessoa Jurídica',
          value: 'PESSOA_JURIDICA'
        }
      ],
      optionsEstadoCivil: [
        {
          label: 'Casado',
          value: 'CASADO'
        },
        {
          label: 'Solteiro',
          value: 'SOLTEIRO'
        },
        {
          label: 'Divorciado',
          value: 'DIVORCIADO'
        }
      ]
    }
  },
  methods: {
    cadastrar () {
      pessoaService.create(this.pessoa).then(Response => {
        console.log('Cadsttrou a pessoa com sucesso')
      })
    }
  }
}
</script>
