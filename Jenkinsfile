pipeline {
  agent any
  environment {
    CI = 'true'
  }
    stages {
      
      stage('Build') {
        steps {
          sh 'npm install'
          sh 'pwd'
        }
      }
      
      stage('Test') {
        steps {
          sh './jenkins/scripts/test-front-end-admin-portal.sh'
        }
      }
    }
}
