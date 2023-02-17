# Week 0 — Billing and Architecture

#### Homework Hard Assignments

* ~~Set a Billing alarm~~ - **Done** - Email notification when bill exceeds 50%, 75%, and 100%.
* ~~Set a AWS Budget~~ - **Done** - Budget of $10.
* ~~Generating AWS Credentials~~ - **Done** - Created IAM account, created IAM group with Admin policy. Created policy to allow IAM user to manage their own MFA device and to prevent any activity without being signed in with MFA. Enabled MFA on both IAM account and root account.
* ~~Using CloudShell~~ - **Done** - Played with cloudshell, installed AWS CLI V2 and configured a default profile.
* ~~Conceptual Architecture Diagram or your Napkins~~ - **Done** - Just duplicated the one in class.
* ![1676233582164](image/week0/1676233582164.png)

#### Homework Stretch Assignments

* ~~Destroy your root account credentials, Set MFA, IAM role~~ - **Done** - Also using temp credentials through MFA with a session token.
* ~~Use EventBridge to hookup Health Dashboard to SNS and send notification when there is a service health issue~~. - **Done** - Created Evenbridge for all services under aws.health and created an SNS topic to send an email.
* ~~Review all the questions of each pillars in the Well Architected Tool (No specialized lens)~~ - **Done** - Lot of questions for each section. Most seem useful.
* Create an architectural diagram (to the best of your ability) the CI/CD logical pipeline in Lucid Charts
* ~~Research the technical and service limits of specific services and how they could impact the technical path for technical flexibility.~~ - **Done** - I reviewed the list of limits (https://docs.aws.amazon.com/general/latest/gr/aws-service-information.html) and knew about some of them. Route53, IAM, and WorkSpaces.
* ~~Open a support ticket and request a service limit.~~ - **Done** - I'm considering this done. I didn't open a support ticket, but have opened support tickets in the past for billing and account support. Almost opened a support ticket a while back for Route53 as I'm near the domain limit, but didn't as I'm not there yet.

#### Other Info

aws configure

Default profile - only used for generating temporary session tokens with MFA.

mfa profile - where session token info is stored, but rotated daily.

aws sts get-session-token --serial-number "arn:aws:iam::*MyAWSAccount#*:mfa/*XXXXXX*" --token-code *XXXXXX*

[mfa]
aws_access_key_id = example-access-key-as-in-returned-output
aws_secret_access_key = example-secret-access-key-as-in-returned-output
aws_session_token = example-session-Token-as-in-returned-output
aws_default_region = us-east-1

Health Dashboard - https://health.aws.amazon.com/health/home#/account/dashboard/open-issues

Eventbridge Pattern:

{
  "source": ["aws.health"],
  "detail-type": ["AWS Health Event"]
}

Received this alert through it later in the week. 

{"version":"0","id":"03d8c953-0dc6-076a-6acc-845c70904743","detail-type":"AWS Health Event","source":"aws.health","account":"959307184854","time":"2023-02-13T02:30:00Z","region":"us-east-1","resources":["959307184854"],"detail":{"eventArn":"arn:aws:health:global::event/S3/AWS_S3_OPERATIONAL_NOTIFICATION/AWS_S3_OPERATIONAL_NOTIFICATION_df072e12d385c104abac315b8e633d704763f70a923988b057a12ef6fb8cf6b8","service":"S3","eventTypeCode":"AWS_S3_OPERATIONAL_NOTIFICATION","eventTypeCategory":"accountNotification","startTime":"Mon, 13 Feb 2023 02:30:00 GMT","eventDescription":[{"language":"en_US","latestDescription":"We are reaching out to inform you that starting in April 2023 Amazon S3 will change the default security configuration for all new S3 buckets. For new buckets created after this date, S3 Block Public Access will be enabled, and S3 access control lists (ACLs) will be disabled.\n\nThe majority of S3 use cases do not need public access or ACLs. For most customers, no action is required. If you have use cases for public bucket access or the use of ACLs, you can disable Block Public Access or enable ACLs after you create an S3 bucket. In these cases, you may need to update automation scripts, CloudFormation templates, or other infrastructure configuration tools to configure these settings. To learn more, read the AWS News blog [1] and What's New announcement [2] on this change or visit our user guide for S3 Block Public Access [3] and S3 Object Ownership to disable ACLs [4]. Also, see our user guide for AWS CloudFormation on these settings [5][6].\n\nIf you have any questions or concerns, please reach out to AWS Support [7].\n\n[1]** **[https://aws.amazon.com/blogs/aws/heads-up-amazon-s3-security-changes-are-coming-in-april-of-2023/\n[2]](https://aws.amazon.com/blogs/aws/heads-up-amazon-s3-security-changes-are-coming-in-april-of-2023//n[2]) [https://aws.amazon.com/about-aws/whats-new/2022/12/amazon-s3-automatically-enable-block-public-access-disable-access-control-lists-buckets-april-2023/\n[3]](https://aws.amazon.com/about-aws/whats-new/2022/12/amazon-s3-automatically-enable-block-public-access-disable-access-control-lists-buckets-april-2023//n[3])[https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html\n[4]](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html/n[4])[https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html\n[5]](https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html/n[5])[https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-publicaccessblockconfiguration.html\n[6]](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-publicaccessblockconfiguration.html/n[6]) [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-ownershipcontrols.html\n[7]](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-ownershipcontrols.html/n[7]) [https://aws.amazon.com/support](https://aws.amazon.com/support)"}],"affectedEntities":[{"entityValue":"959307184854"}]}}
