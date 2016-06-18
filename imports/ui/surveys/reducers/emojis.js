import Emojis from '/imports/api/collections/emojis' 

const initialState = {
    items: Emojis.nodes.filter((e) => e.includeInSnapsSurvey)
}

export default function emojis(state = initialState){
        
    return state     
}
