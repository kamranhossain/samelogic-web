import React, { Component, PropTypes } from 'react'

export default class EmojiSelector extends Component{
    render(){
        const { emojis, onSelectionChanged } = this.props
        return (
            <div> 
                <ul>
                {emojis.map(emoji =>
                    <li key={emoji.key}>
                        {emoji.label} - {emoji.value} - icon: {emoji.icon}
                    </li>
                )}
                </ul>
            </div>
        )
    }
}

EmojiSelector.propTypes = {
    selected: React.PropTypes.number,
    onSelectionChanged: React.PropTypes.func
}
