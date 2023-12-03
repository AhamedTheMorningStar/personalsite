pipeline{
    agent any

    stages{
        stage("Git Access"){
            steps{
                echo "Git Accessing...."
            }
        }
        stage("Script Testing"){
            steps{
                script{
                    gv = load "script.groovy"
                }
            }
        }
        stage("Test"){
            steps{
                script{
                    env.ENV = input message: "Select the branch for pulling files", ok: "Done", parameters: [choice(name: 'Env', choices: ['main', 'test', 'dev'], description: '')]
                    gv.scriptTest()
                }
                echo "Pulling from ${ENV}"
                echo "Test Running...."
            }
        }
        stage("Build"){
            steps{
                script{
                    gv.buildscriptTest()
                }
                echo "Build Running...."
            }
        }
        stage("Docker login"){
            steps{
                script{
                    gv.dockerscriptTest()
                }
                echo "Docker Loged In...."
            }
        }
        stage("Image Build"){
            steps{
                script{
                    gv.imagescriptTest()
                }
                echo "Image Building...."
            }
        }
        stage("Pushing DockerHub"){
            input{
                    message "Select the Env for publishing"
                    ok "Done"
                    parameters {
                        choice(name: 'Env', choices: ['Main', 'Test', 'Dev'], description: '')
                    }
                }
            steps{
                script{
                    echo "Deploying to ${Env}"
                    gv.publishscriptTest()
                }
                echo "Image Pushing into DockerHub...."
            }
        }
    }
}