### <b>1)Get All Tasks API:</b>
In which we can directly access the data inside the database using mongoose method .find(),by using we will get all data but we want some formatted data like created and updated date & time according in human readable format so for that a)first apply map for access each task b)make formatted according to our requirement c)then return

### <b>2)Create Task API:</b>
In which first we take data from user and check is it already present or not, a)if present then return 'Task already present', b)if not then create it by using .create() method of mongoose, c)and return the formatted data as same as data in API get all task.

### <b>3)Update Task API:</b>
In which we take updated data from req.body and task's id from req.params check task is present or not and then update it by using findByIdAndUpdate and return in model as we already declare timestamps:true so mongoose automatically update it whenever there will be any changes happen to any particular task and return that date and time

### <b>4)Delete Task API:</b>
In which we take directly id of task which user want to delete through req.params(url),check task present or not and then by using findByIdAndDelete method of mongoose delete it successfully
