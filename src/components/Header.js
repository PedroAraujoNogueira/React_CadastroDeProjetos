import React from 'react'

export default function Header({ title, children }/* ou props */){ // Para acessarmos o conteúdo que fica dentro da tag usamos uma propriedade que é criada pelo próprio React chamada children.
    return (
        <header>
            <h1>{title}</h1> {/* ou {props.title} */}
            {children}
        </header>
    )
}