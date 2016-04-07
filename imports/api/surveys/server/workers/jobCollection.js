import { JobCollection } from 'meteor/vsivsi:job-collection'


var jc = JobCollection('surveyJobQueue')

jc.setLogStream(process.stdout)

jc.startJobServer()

export default jc