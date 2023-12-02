pipeline{
    agent any

    stages{
        stage("Git Access"){
            steps{
                echo "Git Accessing...."
            }
        }
        stage("Test"){
            steps{
                echo "Test Running...."
            }
        }
        stage("Build"){
            steps{
                echo "Build Running...."
            }
        }
        stage("Docker login"){
            steps{
                echo "Docker Loged In...."
            }
        }
        stage("Image Build"){
            steps{
                echo "Image Building...."
            }
        }
        stage("Pushing DockerHub"){
            steps{
                echo "Image Pushing into DockerHub...."
            }
        }
    }
}