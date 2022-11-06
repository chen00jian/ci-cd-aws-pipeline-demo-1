
import * as cdk from 'aws-cdk-lib';
import * as sm from "aws-cdk-lib/aws-secretsmanager";

// AWS Secrets Manager
// aws secretsmanager create-secret --name ImportedSecret --secret-string mygroovybucket
export class SecretsManagerStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // arn:aws:secretsmanager:<region>:<account-id-number>:secret:<secret-name>-<random-6-characters>
    // arn:aws:secretsmanager:ap-northeast-1:244883597250:secret:github-token-haven-gOGfKU
    const secretCompleteArn = 'arn:aws:secretsmanager:ap-northeast-1:244883597250:secret:github-token-haven-gOGfKU';
    const secret = sm.Secret.fromSecretAttributes(this, "ImportedSecret", { secretCompleteArn });
    console.log("secret:", secret);
  }
}


