module.exports = {
    components:{
        schemas:{
            Task:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"task identification number",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    title:{
                        type:'string',
                        description:"task title",
                        example:"Aprender Swagger"
                    },
                    completed:{
                        type: 'boolean',
                        description:"task completed true or false",
                        example:"false"
                    },
                }
            },
            TaskResponse:{
                type:'object',
                properties:{
                    message:{
                        type:'string',
                        description:"message",
                        example:"Task successfully updated"
                    },
                    task:{
                        $ref: "#/components/schemas/Task",
                    },
                }
            },
            TaskCreation:{
                type:'object',
                properties:{
                    title:{
                        type:'string',
                        description:"task title",
                        example:"Aprender Swagger"
                    }
                }
            },
            _id:{
                type:'objectId',
                description:"An id of a task",
                example: "6201064b0028de7866e2b2c4"
            },
        }
    }
}
