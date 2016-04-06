import { JobCollection }from 'meteor/vsivsi:job-collection'

var jc = JobCollection('surveyJobQueue')

jc.startJobServer()
