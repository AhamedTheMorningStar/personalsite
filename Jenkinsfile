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
                    gv.scriptTest()
                }
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
                    message "Select the Environment for publishing"
                    ok "Done"
                    parameters{
                        choice(name: 'Environment', choices: ['Main', 'Test', 'Dev'], description: '')
                    }
                }
            steps{
                script{
                    echo "Deploying to ${Environment}"
                    gv.publishscriptTest()
                }
                echo "Image Pushing into DockerHub...."
            }
        }
    }
}