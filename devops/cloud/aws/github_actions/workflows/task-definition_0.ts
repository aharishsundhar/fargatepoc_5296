module.exports = {
    requiresCompatibilities: [
        "FARGATE"
    ],
    "inferenceAccelerators": [],
    "containerDefinitions": [
        {
            "name": "test1-5296",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-fargatepoc-5296-test1:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8017",
                    "protocol": "tcp",
                    "hostPort": "8017"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@fargatepoc.local:27017/fargatepoc_5296?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://fargatepoc.local:8080"},{"name":"SECURITYURL","value":"http://fargatepoc.local:8003"},{"name":"AUTHPROXYURL","value":"http://fargatepoc.local:8001"},{"name":"ADMINURL","value":"http://fargatepoc.local:8004"},{"name":"CAMUNDAURL","value":"http://fargatepoc.local:8002"},{"name":"GCAMURL","value":"http://fargatepoc.local:8007"},{"name":"APIGATEWAY","value":"http://fargatepoc.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "fargatepoc"
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
                    "awslogs-group": "/ecs/fargatepoc",
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
            "name": "test2-5296",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-fargatepoc-5296-test2:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8018",
                    "protocol": "tcp",
                    "hostPort": "8018"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@fargatepoc.local:27017/fargatepoc_5296?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://fargatepoc.local:8080"},{"name":"SECURITYURL","value":"http://fargatepoc.local:8003"},{"name":"AUTHPROXYURL","value":"http://fargatepoc.local:8001"},{"name":"ADMINURL","value":"http://fargatepoc.local:8004"},{"name":"CAMUNDAURL","value":"http://fargatepoc.local:8002"},{"name":"GCAMURL","value":"http://fargatepoc.local:8007"},{"name":"APIGATEWAY","value":"http://fargatepoc.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "fargatepoc"
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
                    "awslogs-group": "/ecs/fargatepoc",
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
            "name": "test3-5296",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-fargatepoc-5296-test3:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8019",
                    "protocol": "tcp",
                    "hostPort": "8019"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@fargatepoc.local:27017/fargatepoc_5296?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://fargatepoc.local:8080"},{"name":"SECURITYURL","value":"http://fargatepoc.local:8003"},{"name":"AUTHPROXYURL","value":"http://fargatepoc.local:8001"},{"name":"ADMINURL","value":"http://fargatepoc.local:8004"},{"name":"CAMUNDAURL","value":"http://fargatepoc.local:8002"},{"name":"GCAMURL","value":"http://fargatepoc.local:8007"},{"name":"APIGATEWAY","value":"http://fargatepoc.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "fargatepoc"
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
                    "awslogs-group": "/ecs/fargatepoc",
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
            "name": "test4-5296",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-fargatepoc-5296-test4:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8020",
                    "protocol": "tcp",
                    "hostPort": "8020"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@fargatepoc.local:27017/fargatepoc_5296?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://fargatepoc.local:8080"},{"name":"SECURITYURL","value":"http://fargatepoc.local:8003"},{"name":"AUTHPROXYURL","value":"http://fargatepoc.local:8001"},{"name":"ADMINURL","value":"http://fargatepoc.local:8004"},{"name":"CAMUNDAURL","value":"http://fargatepoc.local:8002"},{"name":"GCAMURL","value":"http://fargatepoc.local:8007"},{"name":"APIGATEWAY","value":"http://fargatepoc.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "fargatepoc"
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
                    "awslogs-group": "/ecs/fargatepoc",
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
            "name": "gepitemtagsmanager-5296",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-fargatepoc-5296-gepitemtagsmanager:latest`,
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
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@fargatepoc.local:27017/fargatepoc_5296?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://fargatepoc.local:8080"},{"name":"SECURITYURL","value":"http://fargatepoc.local:8003"},{"name":"AUTHPROXYURL","value":"http://fargatepoc.local:8001"},{"name":"ADMINURL","value":"http://fargatepoc.local:8004"},{"name":"CAMUNDAURL","value":"http://fargatepoc.local:8002"},{"name":"GCAMURL","value":"http://fargatepoc.local:8007"},{"name":"APIGATEWAY","value":"http://fargatepoc.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "fargatepoc"
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
                    "awslogs-group": "/ecs/fargatepoc",
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
            "name": "test6-5296",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-fargatepoc-5296-test6:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8022",
                    "protocol": "tcp",
                    "hostPort": "8022"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@fargatepoc.local:27017/fargatepoc_5296?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://fargatepoc.local:8080"},{"name":"SECURITYURL","value":"http://fargatepoc.local:8003"},{"name":"AUTHPROXYURL","value":"http://fargatepoc.local:8001"},{"name":"ADMINURL","value":"http://fargatepoc.local:8004"},{"name":"CAMUNDAURL","value":"http://fargatepoc.local:8002"},{"name":"GCAMURL","value":"http://fargatepoc.local:8007"},{"name":"APIGATEWAY","value":"http://fargatepoc.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "fargatepoc"
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
                    "awslogs-group": "/ecs/fargatepoc",
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
            "name": "test7-5296",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-fargatepoc-5296-test7:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8023",
                    "protocol": "tcp",
                    "hostPort": "8023"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@fargatepoc.local:27017/fargatepoc_5296?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://fargatepoc.local:8080"},{"name":"SECURITYURL","value":"http://fargatepoc.local:8003"},{"name":"AUTHPROXYURL","value":"http://fargatepoc.local:8001"},{"name":"ADMINURL","value":"http://fargatepoc.local:8004"},{"name":"CAMUNDAURL","value":"http://fargatepoc.local:8002"},{"name":"GCAMURL","value":"http://fargatepoc.local:8007"},{"name":"APIGATEWAY","value":"http://fargatepoc.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "fargatepoc"
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
                    "awslogs-group": "/ecs/fargatepoc",
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
            "name": "test8-5296",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-fargatepoc-5296-test8:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8024",
                    "protocol": "tcp",
                    "hostPort": "8024"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@fargatepoc.local:27017/fargatepoc_5296?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://fargatepoc.local:8080"},{"name":"SECURITYURL","value":"http://fargatepoc.local:8003"},{"name":"AUTHPROXYURL","value":"http://fargatepoc.local:8001"},{"name":"ADMINURL","value":"http://fargatepoc.local:8004"},{"name":"CAMUNDAURL","value":"http://fargatepoc.local:8002"},{"name":"GCAMURL","value":"http://fargatepoc.local:8007"},{"name":"APIGATEWAY","value":"http://fargatepoc.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "fargatepoc"
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
                    "awslogs-group": "/ecs/fargatepoc",
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
            "name": "test9-5296",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-fargatepoc-5296-test9:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8025",
                    "protocol": "tcp",
                    "hostPort": "8025"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@fargatepoc.local:27017/fargatepoc_5296?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://fargatepoc.local:8080"},{"name":"SECURITYURL","value":"http://fargatepoc.local:8003"},{"name":"AUTHPROXYURL","value":"http://fargatepoc.local:8001"},{"name":"ADMINURL","value":"http://fargatepoc.local:8004"},{"name":"CAMUNDAURL","value":"http://fargatepoc.local:8002"},{"name":"GCAMURL","value":"http://fargatepoc.local:8007"},{"name":"APIGATEWAY","value":"http://fargatepoc.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "fargatepoc"
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
                    "awslogs-group": "/ecs/fargatepoc",
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
            "name": "test10-5296",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-fargatepoc-5296-test10:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8026",
                    "protocol": "tcp",
                    "hostPort": "8026"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@fargatepoc.local:27017/fargatepoc_5296?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://fargatepoc.local:8080"},{"name":"SECURITYURL","value":"http://fargatepoc.local:8003"},{"name":"AUTHPROXYURL","value":"http://fargatepoc.local:8001"},{"name":"ADMINURL","value":"http://fargatepoc.local:8004"},{"name":"CAMUNDAURL","value":"http://fargatepoc.local:8002"},{"name":"GCAMURL","value":"http://fargatepoc.local:8007"},{"name":"APIGATEWAY","value":"http://fargatepoc.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "fargatepoc"
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
                    "awslogs-group": "/ecs/fargatepoc",
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
        "name": "fargatepoc",
        "host": null,
        "dockerVolumeConfiguration": null
        }
    ],
    "networkMode": "awsvpc",
    "memory": "4096",
    "cpu": "1024",
    "executionRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`,
    "family": "fargatepoc0",
    "tags": [],
    "placementConstraints": [],
    "taskRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`

};
var ConfigurationJSON = JSON.stringify(module.exports);
const config = module.exports;

const jsonConfig = JSON.parse(JSON.stringify(ConfigurationJSON))

console.log(jsonConfig)
