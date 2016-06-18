import React, { Component, PropTypes } from 'react'

export default class EmojiSelector extends Component{
    render(){
        const { onBlur, onChange, options, value, ...rest } = this.props

        const selected = options.find((e) => e.value == value)

        return (
            <div className="emoji-selector">
                <div className="help-block">
                    {rest.touched ? rest.error : ''}
                </div>
                <ul className="emoji-list">
                    {options.map(emoji =>
                        <li key={emoji.key}>
                            <label className={emoji.key} title={emoji.label}>
                                <input type="radio" name="emoji" checked={emoji.value == value} value={emoji.value} onChange={onChange} onBlur={onBlur} />
                                <i/>
                            </label>
                        </li>
                    )}
                </ul>
                {selected ? 
                    <div className="white-space-pre small-lite-txt">
                        {selected.feedback}
                    </div> : null
                }
            </div>
        )
    }
}

EmojiSelector.propTypes = {
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
    })),
    value: PropTypes.string    
}
