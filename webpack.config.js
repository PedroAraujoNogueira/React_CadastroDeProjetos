const path = require('path') 

module.exports = {
    // O entry receberá o caminho do arquivo de entrada que no nosso caso é o src/index.js.
    entry: path.resolve(__dirname, 'src', 'index.js'), // O path.resolve é usado para não haver erro entre diferentes Sistemas Operacionais(SO) na hora de ler o caminho do arquivo. Note que não colocamos barra(/), pois o próprio path.resolve vai se encarregar de colocar a barra de acordo com o SO que está sendo usado.

    output: { // Esse output é onde ele vai jogar aquele nosso bundle, que é o código transpilado pelo webpack, o código com as funcionalidades que o JavaScript já entende.
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js' // O nome onde esse arquivo irá ficar.  
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public') // O contentBase é basicamente o caminho para o diretório que contém os arquivos public da nossa aplicação, ou seja, o bundle.js e o index.html nesse nosso caso.
    }, 
    module:{
        rules: // Precisamos informar para o Webpack quem ele deve utilizar quando encontrar determinado tipo de arquivo. Por exemplo: para arquivos JavaScript(.js) o babel deve ser utilizado, ou seja, toda vez que o webpack encontrar um arquivo JavaScript o babel deve ser utilizado para transpilar esse arquivo para uma forma que o navegador entenda. Para arquivos CSS e imagem devemos utilizar outros loaders.
        [{
            test: /\.js$/, // Expressão regular que diz para pegarmos todos os arquivos que terminarem em '.js'
            exclude: /node_modules/, // Aqui estamos excluindo tudo que está dentro de node_modules. Pois os arquivos JavaScript dentro de node_modules já estão transpilados pelo babel então não faria sentido transpilarmos de novo.
            use: {
                loader: 'babel-loader' // Aqui estamos dizendo que usaremos o Babel pra interpretar todos os arquivos JS que nao estiverem dentro do node_modules.
            }
            
        }, {
            test: /\.css$/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' }
            ]
        }, {
            test: /.*\.(gif|png|jpe?g)$/i,
            use: { loader: 'file-loader' }
        }]
    }
}