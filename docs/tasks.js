module.exports = {
    paths: {
      "/create": {
        post: {
          tags: [
            "Task"
          ],
          description: "Create Task",
          operationId: "createTask",
          parameters: [],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/TaskCreation",
                },
              },
            },
          },
          responses: {
            201: { description: "Task created successfully", 
                content: {"application/json": {
                   schema: {
                       $ref: "#/components/schemas/TaskResponse",
                     }
                }}
          },
            500: {
              description: "Server error",
            },
          },
        }
      },

    "/id/{_id}": {
      put: {
        tags: [
            "Task"
          ],
        description: "Update Task",
        operationId: "updateTask",
        parameters: [
          {
            name: "_id",
            in: "path",
            schema: {
              $ref: "#/components/schemas/_id",
            },
            description: "Id of Task to be updated",
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/TaskCreation" },
            },
          },
        },
        responses: {
          200: { description: "Task updated successfully", 
            content: {"application/json": {
               schema: {
                   $ref: "#/components/schemas/TaskResponse",
                 }
            }}
        },
          404: {description: "Task not found"},
          500: { description: "Server error" },
        },
      },
      get: {
        tags: [
            "Task"
          ],
        description: "Get Task",
        operationId: "getTask",
        parameters: [
          {
            name: "_id",
            in: "path",
            schema: {
              $ref: "#/components/schemas/_id",
            },
            description: "Id of Task",
          },
        ],
        
        responses: {
          200: { description: "Task returned successfully", 
                 content: {"application/json": {
                    schema: {
                        $ref: "#/components/schemas/Task",
                      }
                 }}
           },
          404: {description: "Task not found"},
          500: { description: "Server error" },
        },
      },
      delete: {
        tags: [
            "Task"
          ],
        description: "Delete Task",
        operationId: "deleteTask",
        parameters: [
          {
            name: "_id",
            in: "path",
            schema: {
              $ref: "#/components/schemas/_id",
            },
            description: "Deleting a done Task",
          },
        ],
        responses: {
          200: { description: "Task deleted successfully", 
            content: {"application/json": {
               schema: {
                   $ref: "#/components/schemas/TaskResponse",
                 }
            }}
      },
          404: {description: "Task not found"},
          500: { description: "Server error" },
        },
      },
    },
    "/" : {
        get: {
            tags: [
                "Task"
              ],
          description: "Get Tasks",
          operationId: "getTasks",
          parameters: [],
          responses: {
            200: { description: "Task getting successfully", 
                content: {"application/json": {
                   schema: {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/Task"       
                        },
                     }
                }}
          },
            500: { description: "Server error" },
          },
        },
      },
    "/markAsCompleted/:_id" : {
        put: {
            tags: [
                "Task"
              ],
            description: "Complete Task",
            operationId: "completeTask",
            parameters: [
              {
                name: "_id",
                in: "path",
                schema: {
                  $ref: "#/components/schemas/_id",
                },
                description: "Id of Task to be completed",
              },
            ],
            responses: {
              200: { description: "Task completed successfully", 
                content: {"application/json": {
                   schema: {
                       $ref: "#/components/schemas/TaskResponse",
                     }
                }}
            },
              500: { description: "Server error" },
            },
          },
    }
}
}