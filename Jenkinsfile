pipeline {
  agent any
    stages {
      
      stage('Build Stage') {
        steps {
          sh 'npm install'
          sh 'pwd'
        }
      }
      
      stage('Testing Stage') {
        steps {
          sh '/var/lib/jenkins/scripts/test-front-end-admin-portal.sh'
        }
      }
      
      stage('Deployment Stage') {
        steps {
          sh '/var/lib/jenkins/scripts/deploy-front-end-admin-portal.sh'
        }
      }
    }
}
