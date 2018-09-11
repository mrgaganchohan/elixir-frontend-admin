pipeline {
  agent any
    stages {
      
      stage('Build') {
        steps {
          sh 'npm install'
          sh 'pwd'
        }
      }
      
      stage('Test') {
        steps {
          sh './scripts/test-front-end-admin-portal.sh'
        }
      }
    }
}
