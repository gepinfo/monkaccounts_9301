module.exports = {
    requiresCompatibilities: [
        "FARGATE"
    ],
    "inferenceAccelerators": [],
    "containerDefinitions": [
        {
            "name": "monkgl-9301",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-monkaccounts-9301-monkgl:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8014",
                    "protocol": "tcp",
                    "hostPort": "8014"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@monkaccounts.local:27017/monkaccounts_9301?authSource=admin"},{"name":"MONGO_DOMAIN","value":"monkaccounts.local"},{"name":"CAMUNDAPOD_URL","value":"http://monkaccounts.local:8080"},{"name":"SECURITYURL","value":"http://monkaccounts.local:8003"},{"name":"AUTHPROXYURL","value":"http://monkaccounts.local:8001"},{"name":"ADMINURL","value":"http://monkaccounts.local:8004"},{"name":"CAMUNDAURL","value":"http://monkaccounts.local:8002"},{"name":"GCAMURL","value":"http://monkaccounts.local:8007"},{"name":"APIGATEWAY","value":"http://monkaccounts.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "monkaccounts"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/monkaccounts",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "monkchartofaccounts-9301",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-monkaccounts-9301-monkchartofaccounts:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8015",
                    "protocol": "tcp",
                    "hostPort": "8015"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@monkaccounts.local:27017/monkaccounts_9301?authSource=admin"},{"name":"MONGO_DOMAIN","value":"monkaccounts.local"},{"name":"CAMUNDAPOD_URL","value":"http://monkaccounts.local:8080"},{"name":"SECURITYURL","value":"http://monkaccounts.local:8003"},{"name":"AUTHPROXYURL","value":"http://monkaccounts.local:8001"},{"name":"ADMINURL","value":"http://monkaccounts.local:8004"},{"name":"CAMUNDAURL","value":"http://monkaccounts.local:8002"},{"name":"GCAMURL","value":"http://monkaccounts.local:8007"},{"name":"APIGATEWAY","value":"http://monkaccounts.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "monkaccounts"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/monkaccounts",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "gepitemtagsmanager-9301",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-monkaccounts-9301-gepitemtagsmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8006",
                    "protocol": "tcp",
                    "hostPort": "8006"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@monkaccounts.local:27017/monkaccounts_9301?authSource=admin"},{"name":"MONGO_DOMAIN","value":"monkaccounts.local"},{"name":"CAMUNDAPOD_URL","value":"http://monkaccounts.local:8080"},{"name":"SECURITYURL","value":"http://monkaccounts.local:8003"},{"name":"AUTHPROXYURL","value":"http://monkaccounts.local:8001"},{"name":"ADMINURL","value":"http://monkaccounts.local:8004"},{"name":"CAMUNDAURL","value":"http://monkaccounts.local:8002"},{"name":"GCAMURL","value":"http://monkaccounts.local:8007"},{"name":"APIGATEWAY","value":"http://monkaccounts.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "monkaccounts"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/monkaccounts",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
    ],
    "volumes": [
        {
        "fsxWindowsFileServerVolumeConfiguration": null,
        "efsVolumeConfiguration": {
            "transitEncryptionPort": null,
            "fileSystemId": `${process.env.EFS_ID}`,
            "authorizationConfig": {
            "iam": "DISABLED",
            "accessPointId": null
            },
            "transitEncryption": "DISABLED",
            "rootDirectory": "/"
        },
        "name": "monkaccounts",
        "host": null,
        "dockerVolumeConfiguration": null
        }
    ],
    "networkMode": "awsvpc",
    "memory": "4096",
    "cpu": "1024",
    "executionRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`,
    "family": "monkaccounts0",
    "tags": [],
    "placementConstraints": [],
    "taskRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`

};
var ConfigurationJSON = JSON.stringify(module.exports);
const config = module.exports;

const jsonConfig = JSON.parse(JSON.stringify(ConfigurationJSON))

console.log(jsonConfig)
