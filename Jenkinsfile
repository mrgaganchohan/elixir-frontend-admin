pipeline {
  agent any
    stages {
      
      stage('Build Stage') {
        steps {
          sh '/var/lib/jenkins/scripts/build_admin_portal.sh'
        }
      }
      
      //stage('Testing Stage') {
      //  steps {
      //    sh '/var/lib/jenkins/scripts/test-front-end-admin-portal.sh'
      //    sh 'echo "test stage"' 
      //  }
      //}
      
      stage('Deployment Stage') {
        steps {
          sh '/var/lib/jenkins/scripts/deploy_admin_portal.sh'
        }
      }
    }
}
