import Emojis from '/imports/api/collections/emojis'

export default function(){            
    const autoFormField = this.field('emoji')
    if(!autoFormField.isSet){
        this.unset()
        return
    }
    const emoji = Emojis.value(autoFormField.value)
    if(typeof emoji === 'undefined'){
        this.unset()
        return
    }
    return emoji
}