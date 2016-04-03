
import { Slingshot } from 'meteor/edgee:slingshot'

Slingshot.fileRestrictions( 'uploadSurveyVideo', {
    allowedFileTypes: [ 'video/mp4' ],
    maxSize: 1 * 1024 * 1024
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