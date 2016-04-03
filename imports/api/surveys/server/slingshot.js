
import { Slingshot } from 'meteor/edgee:slingshot'

Slingshot.fileRestrictions( 'uploadSurveyVideo', {
    allowedFileTypes: [ 'video/mp4', 'video/m4v' ],
    maxSize: null
})

Slingshot.createDirective( 'uploadSurveyVideo', Slingshot.S3Storage, {
    bucket: 'samelogic-videos',
    acl: 'public-read',
    authorize: function () {
        return true
    },
    key: function ( file, metaContext ) {
        return metaContext.surveyResponseId
    }
})