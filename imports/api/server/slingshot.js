
import { Slingshot } from 'meteor/edgee:slingshot'
import { Meteor } from 'meteor/meteor'


Slingshot.fileRestrictions( 'uploadSurveyVideo', {
    allowedFileTypes: [ 'video/mp4', 'video/m4v', 'video/quicktime', 'video/x-ms-wmv' ],
    maxSize: null
})

Slingshot.createDirective( 'uploadSurveyVideo', Slingshot.S3Storage, {
    bucket: Meteor.settings.AWSVideoBucket,
    acl: 'public-read',
    authorize: function () {
        return true
    },
    key: function ( file, metaContext ) {
        return metaContext.surveyResponseId
    }
})