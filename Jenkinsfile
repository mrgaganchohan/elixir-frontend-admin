pipeline {
  agent any
    stages {
      
      stage('Build Stage') {
        steps {
          sh 'echo "Running NPM install"'
          sh 'npm install'
          sh 'echo "Building Project"'
          sh 'npm run build'
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
          sh 'echo "Deploying Project"'
          sh 'rm -rf /opt/frontend-admin/*'
          sh 'cp -R build/* /opt/frontend-admin/'
        }
      }
    }
}
