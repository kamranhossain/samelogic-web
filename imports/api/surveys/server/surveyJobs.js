import { JobCollection, Job }from 'meteor/vsivsi:job-collection'

var jc = JobCollection('surveyJobQueue')

jc.startJobServer()
