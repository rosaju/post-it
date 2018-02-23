import React from 'react'
import { connect } from 'react-redux'
import { adicionarNota, removeNota, habilitarEdicao, alterarNota } from '../action'
import Page from './index'

const mapStateToProps = state => { listaNotas: state.notas }

const mapDispatchToProps = dispatch => (
    {
        adicionarNota: (titulo, texto, formulario, posicao) => {
            if (posicao === undefined) {
                dispatch(adicionarNota(titulo, texto))
                formulario.reset()
            } else {
                dispatch(adicionarNota(posicao, titulo, texto))
            }
        },
        removeNota: (evento, posicao) => {
            evento.stopPropagation()
            dispatch(removeNota(posicao))
        },
        editarFormulario: posicao => {
            editaNota(habilitarEdicao(posicao))
        }
    }
)

const PageContainer = connect(mapStateToProps, mapDispatchToProps)(Page)

export default PageContainer



