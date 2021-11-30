import * as cdk from '@aws-cdk/core';
import * as sqs from '@aws-cdk/aws-sqs';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigateway from '@aws-cdk/aws-apigateway';
import * as path from 'path';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const queue = new sqs.Queue(this, 'myQueue');
    const backend = new lambda.Function(this, 'myFunction', {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'index.handler',
      environment: {'SQS_QUEUE_URL': queue.queueUrl},
      code: lambda.Code.fromAsset(path.join(__dirname, 'lambda'))
    });

    queue.grantSendMessages(backend);
    
    const api = new apigateway.LambdaRestApi(this, 'myApi', {
      handler: backend
    })
  }
}
