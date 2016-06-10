import React, { Component, PropTypes } from 'react'

export default class EmojiSelector extends Component{
    constructor(props){
        super(props)
        this.onChange = props.onChange
    }
    
    handleChange(event){
        this.onChange(event.target.value)
    }
    
    render(){
        const { emojis } = this.props
        return (
            <div className="emoji-selector"> 
                <ul className="emoji-list">
                {emojis.data.map(emoji =>
                    <li key={emoji.key}>
                        <label className={emoji.key}>
                            <input type="radio" name="emoji" checked={emoji.selected} value={emoji.value} onChange={this.handleChange.bind(this)} />
                            <i/>
                        </label>
                    </li>
                )}
                </ul>
            </div>
        )
    }
}

EmojiSelector.propTypes = {
    emojis: PropTypes.shape({
        data: PropTypes.array,
        selectedValue: PropTypes.number
    }),
    onChange: PropTypes.func
}
