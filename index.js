const ec2 = require('@aws-cdk/aws-ec2');
const ecs = require('@aws-cdk/aws-ecs');
const ecsPatterns = require('@aws-cdk/aws-ecs-patterns');
const cdk = require('@aws-cdk/core');

class NyanStack extends cdk.Stack {
  constructor(parent, id, props) {
    super(parent, id, props);

    // Create VPC and Fargate Cluster
    // NOTE: Limit AZs to avoid reaching resource quotas
    const vpc = new ec2.Vpc(this, 'MyVpc', { maxAzs: 2 });
    const cluster = new ecs.Cluster(this, 'Cluster', { vpc });

    // Instantiate Fargate Service with just cluster and image
    const fargateService = new ecsPatterns.ApplicationLoadBalancedFargateService(this, 'nyan-service', {
      cluster,
      taskImageOptions: {
        image: ecs.ContainerImage.fromAsset('nyan-cat'),
      },
    });
  }
}

const app = new cdk.App();
const nyan = new NyanStack(app, 'aws-cdk-nyan-cat');

app.synth();
