// Esse será o arquivo de entrada da nossa aplicação, ou seja, tudo vai partir desse arquivo.

// const soma = (a, b) => a + b
// alert(soma(1,1))

import React from 'react'
import { render } from 'react-dom' // integração do react com o browser(a arvore de elementos), então toda vez que vamos trabalhar com o react no browser nós precisamos tambem da biblioteca do react-dom. // A função render é responsável por renderizar um código react ou componente react dentro de algum conteudo HTML. 

import App from './App'

render(<App/>, document.getElementById('app'))