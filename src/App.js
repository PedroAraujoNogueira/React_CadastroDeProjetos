import React, { useState, useEffect } from 'react'
import api from './services/api.js'

import './App.css'
import fotoTeste from './assets/tecnologias.jpg'

import Header from './components/Header'

function App(){
    // O useState retorna um array com 2 posições:
    // Na primeira posição receberá a variável com o valor inicial(que é passado no parametro do método useState()).
    // Na segunda posição teremos uma função usada para atualizar o valor da primeira posição.
    const [projects, setProjects] = useState([]) // Como parametro do useState() devemos passar o valor inicial da variável e vale lembrar que quando definimos o valor inicial da variável é importante que esse valor seja do mesmo tipo que a variável vai continuar recebendo posteriormente durante o dercorrer do programa.
    
    useEffect(() => { // A useEffect é usada para disparar funções. O useEffect recebe dois parâmetros, o primeiro parametro é a função que será disparada. O segundo parametro é quando queremos disparar essa função, como não colocamos nada no segundo parametro então a função vai ser disparada assim que a pagina for carregada. 
        api.get('/projects1').then(response => {
            setProjects(response.data)
            console.log(response)
        })
        console.log('2')
        console.log('3')
    }, [])

    async function handleAddProject(){ 
        const response =  await api.post('./projects1', {
                title: `Novo do projeto ${Date.now()}`,
                owner: "Pedro Araújo"
            })
        console.log(response)

        const project = response.data

        setProjects([...projects, project])
    }
    
    return ( 
        // Não podemos retornar vários componentes sem ter algo envolvendo eles. Para podermos fazer isso usamos o fragment que são esses "<> </>" que estão envolvendo os componentes.
        <>  
            {/* As propriedades podem ter o nome que quisermos */}
            <Header title="Projects"/>
            
            <img width="200" src={fotoTeste}></img>
            
            <ul>
                {/* Quando fazemos uma iteração no react onde nós percorremos um vetor, o React precisa que identifiquemos cada iteração com uma chave(key) que deve ser única. */}
                {projects.map(project => {
                    return <li key={project.id}> {project.title} </li>
                })}
            </ul>    

            <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>      
        </>
    ) 
    // <h1>Hello World componentizado</h1>
}

export default App