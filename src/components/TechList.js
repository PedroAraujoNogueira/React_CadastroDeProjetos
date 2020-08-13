import React, { Component } from 'react' 
import TechItem from './TechItem'

class TechList extends Component {
    // Valor guardar no state todas as informações que podem ser manipuladas por esse componente.
    // constructor(props){ // Maneira certa de usar, não é preciso adicionar nenhum plugin para que possa ser usada.  
    //     super(props)
    //     this.state = {
    //         techs: [
    //             'Node.JS',
    //             'ReactJS',
    //             'ReactNative'
    //         ]    
    //     };
    // }

    // O babel por padrão não entende essas propriedades que são definidas diretamente na classe. // Para isso é preciso instalar um plugin do babel. @babel/plugin-proposal-class-properties.
    state = {
        newTech: '',
        techs: [ ]
    }

    // Executado assim que o componente aparece em tela.
    componentDidMount() {
        const techs = localStorage.getItem('techsLocal');

        if(techs){
            this.setState({ techs: JSON.parse(techs)})
        }
    }

    // Executado sempre que houver alterações nas props ou estado do componente.
    componentDidUpdate(prevProps, prevState){ // Esse método recebe as props e state antes de mudar, atraves dos parametros da função.

        // this.props e this.state acessa as props e o estado depois que foram mudados.
        if(prevState.techs !== this.state.techs){
            localStorage.setItem('techsLocal', JSON.stringify(this.state.techs))
        }
    }

    // Executado quando o componente deixa de existir.
    // Esse método serve para limparmos qualquer tipo de sujeira que o nosso componente possa ter deixado na nossa aplicação.
    componentWillUnmount() {

    } 

    handleInputChange = e => {
        this.setState({newTech: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({ 
            techs: [...this.state.techs, this.state.newTech],
            newTech: ''
        })
    }

    handleDelete = tech => {
        this.setState({ techs: this.state.techs.filter( t => t !== tech) })
    }

    // Todo componente escrito no formato de classe precisa Obrigatoriamente ter um método render().
    render() {
        return (
            <form onSubmit = {this.handleSubmit}> 
                <ul>
                    { this.state.techs.map(tech => <TechItem 
                        key={tech} 
                        tech={tech} 
                        onDelete={() => this.handleDelete(tech)}/> 
                    )}
                </ul>
                <input type="text" onChange={this.handleInputChange} value={this.state.newTech}/> 
                {/* onChange é um método que é executado cada vez que o valor do input muda. */}
                <button type="submit">Enviar</button>
            </form>    
        )
    }
}

export default TechList;