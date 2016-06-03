export default function(campaignCollection) {
    return (campaignName) => {
        return campaignCollection.find({ $text: { $search: campaignName } })
    }
}