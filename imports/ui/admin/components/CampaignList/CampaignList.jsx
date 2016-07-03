import React, {Component, PropTypes} from 'react'

class CampaignList extends Component {
    render() {
        const { campaigns } = this.props
        return (
            <div>
                <ul>
                    {campaigns.items.map((campaign) =>
                        <li>{campaign.title}</li>
                    )}
                </ul>
            </div>
        )
    }
}

CampaignList.propTypes = {
    campaigns: PropTypes.shape({
        items: PropTypes.array
    }).isRequired
}

export default CampaignList