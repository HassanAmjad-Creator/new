const React = require('react')
const ReactDOM = require('react-dom')

const App = () => {
    const onBtnClick = () => {
        alert('hello world');
    }

    return (
        <button onclick={onBtnClick}>
        click me please!
        </button>
    )
    }

    module.exports = App
