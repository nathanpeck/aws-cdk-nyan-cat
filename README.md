## Prerequisites

To perform this workshop, you’ll need the following:

* aws-cli. Installation instructions [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)
* Setup your AWS account credentials `aws configure`
* node.js. Installation instructions [here](https://nodejs.org) and version should be >= 8.12.0
* IDE or editor of choice.
* aws-cdk. Installation instructions: `npm install -g aws-cdk`

## Setup workspace with Typescript
* Create an empty directory. `mkdir cdk && cd cdk`
* Setup cdk project. `cdk init app --language typescript`

* Compile your Typescript code: Open a new terminal tab and navigate to the project directory. Run `npm run watch`

* Open your IDE or editor of choice and explore the project structure. App's entry point is cdk.json -> bin/cdk.ts -> lib/cdk-stack.ts

## Update Infrastructure for your app

* Setup a vpc, an ECS cluster and ApplicationLoadBalancedFargateService for our nginx app
* Install the required dependencies `npm install @aws-cdk/aws-ec2`, `npm install @aws-cdk/aws-ecs`, and `npm install @aws-cdk/aws-ecs-patterns`
* Check the typescript compiler tab to ensure there are no errors.

## Synthesize and deploy

* `cdk synth` generates an AWS CloudFormation template for your application stack.
* The first time you deploy an AWS CDK app into an environment (account/region), you’ll need to install a “bootstrap stack”. `cdk bootstrap`
* Let's deploy. `cdk deploy`. Once the deployment completes, you can look at your load balanced service URL as an output.

## Clean up
* `cdk destroy`
