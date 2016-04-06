import { JobCollection }from 'meteor/vsivsi:job-collection'

var jc = JobCollection('surveyJobQueue')

jc.startJobServer()

jc.processJobs('startVideoAnalysis', (job, callback) =>{
    job.done()
    callback()
})

export default jc