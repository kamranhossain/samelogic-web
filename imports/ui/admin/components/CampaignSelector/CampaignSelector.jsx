import React, { Component, PropTypes } from 'react'
import Dropdown from 'react-dropdown'

export default class CampaignSelector extends Component{
    render(){
        const {campaigns, onChange, selectedCampaign} = this.props
        
        const options = campaigns.map((c) => {
            return {
                value: c._id,
                label: c.title
            }
        })
        const selected = {
            value: selectedCampaign._id,
            label: selectedCampaign.title
        }
        
        return (
            <div>
                <h3>Campaigns</h3>
                <Dropdown options={options} onChange={onChange} value={selected} placeholder="Select a campaign" />
            </div>
        )
    }
}

CampaignSelector.propTypes = {
    onChange: PropTypes.func,
    campaigns: PropTypes.array,
    selectedCampaign: PropTypes.shape({
        _id: PropTypes.string,
        title: PropTypes.string
    })
}
