export default function(campaignCollection) {
    return (campaignName) => {
        return campaignCollection.find({
            title: campaignName
        })
    }
}