# Welcome to your CDK TypeScript project!

## This one is from re:invent session on Building production prototypes

The sample builds a Lambda and API Gateway that accepts a JSON payload for a review, validates, then sends to an SQS Queue in a Lambda.

* [link](https://virtual.reinvent.awsevents.com/session-virtual/?v2477da705118cc74fd14460db021e1784e2eed5a7982c6482ec95cb2e86d259644b8741959f52a49e0e6908b82a9d860=122C5CC42913F81F2268C25C779A6A7A0361976A53761B9B0DBE51725FCE3203011982EAD1DAFE538090059FEF42E559)

To build and run:

```bash
npm run build
```

# first time...

```bash
cdk bootstrap
```

# subsequent changes

```bash
cdk deploy
```

# removing

```bash
cdk destroy
```

# testing

Use https://reqbin.com/req/c-dwjszac0/curl-post-json-example or PostMan or whatever... Here is the CURL example:

```bash
curl -X POST https://l38cw4xtm3.execute-api.us-east-1.amazonaws.com/prod/
   -H 'Content-Type: application/json'
   -d '{"productId":"2wwedfsdf","title":"Silly Love Songs", "text": "This is my silly love songs song", "rating": 2.5}'
```
The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
