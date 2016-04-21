import React, { Component, PropTypes } from 'react'

export default class EmojiSelector extends Component{
    render(){
        const { emojis, onSelectionChanged } = this.props
        console.log(emojis)
        return (
            <div> 
                <ul>
                {emojis.map(emoji =>
                    <li key={emoji.key}>
                        {emoji.label} - {emoji.value} - icon: {emoji.icon} selected: {emoji.selected ? 'true' : 'false'}
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
