# Readme

## Setup
1. run `npm install`
2. Create a private repository on ECR, and copy the repository URI.

In the commands Below, make sure to substitute `[ACCOUNT_ID]` with your own account ID, and `[REPOSITORY_URI]` with the repository URI that you copied.

## Build and push to ECR
1. Hookup your docker client to ECR. `aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin [ACCOUNT_ID].dkr.ecr.us-east-1.amazonaws.com`

2. Build the docker image, replace `REPOSITORY_URI` with the repository URI that you copied: `docker build --no-cache -t [REPOSITORY_URI] .`

3. Push the image to ECR: `docker push [REPOSITORY_URI]`