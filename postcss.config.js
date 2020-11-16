module.exports = {
    plugins: [
        require('postcss-css-variables')({
            variables:{
                '--some-color': 'red'
            }
        })
    ]
}