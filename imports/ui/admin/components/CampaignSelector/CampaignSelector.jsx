import React, { Component, PropTypes } from 'react'
import Dropdown from 'react-dropdown'

export default class CampaignSelector extends Component{
    constructor(props){
        super(props)
    }
    
    handleChange(event){
        this.props.onChange({
            _id: event.value,
            title: event.label
        })
    }
    render(){
        const {campaigns} = this.props
        
        const options = campaigns.items !== undefined ? campaigns.items.map((c) => {
            return {
                value: c._id,
                label: c.title
            }
        }) : []
        
        let selectedCampaign = undefined
        if(campaigns.current){
            selectedCampaign = {
                value: campaigns.current._id,
                label: campaigns.current.title
            }   
        }
        
        return (
            <div>
                <h3>Campaigns</h3>
                <Dropdown options={options} onChange={this.handleChange.bind(this)} value={selectedCampaign} placeholder="Select a campaign" />
            </div>
        )
    }
}

CampaignSelector.propTypes = {
    onChange: PropTypes.func,
    campaigns: PropTypes.shape({
        items: PropTypes.array,
        current: PropTypes.shape({
            _id: PropTypes.string,
            title: PropTypes.string
        })
    })
}
