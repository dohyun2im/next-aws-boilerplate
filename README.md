## github action ci cd
```
1. github action (main push)
2. .github/workflows/ci_cd.yml run
3. dockerfile run
4. docker build
5. aws ecr push (github에 aws secret 작성 및 ci_cd.yml 파일 일부 수정해야 합니다.)
```

## husky
```
npm install 시 package.json 파일에 설정된 prepare을 통해 husky가 설치됩니다.
or 혹은 npx husky install을 터미널에 입력하여 직접 설치합니다.

터미널에서 다음 명령어를 실행하여 파일 실행 권한을 부여합니다.
- chmod +x .husky/commit-msg
- chmod +x .husky/pre-commit
- chmod +x .husky/pre-push

1. pre-commit : 커밋 전 .lintstagedrc 파일을 통해 검사합니다.
2. commit-msg :  
  ㄴ <type>(<scope>): <subject> 형식의 커밋 메시지를 작성했는지 .commitlintrc.ts 파일을 통해 검사합니다.
  ㄴ 관련 타입은 "Feat", "Fix", "Style", "Refactor", "Config", "Docs"입니다.
  ㄴ scope는 선택 사항입니다.
  ㄴ example 1. Feat: test
  ㄴ example 2. Feat(any): test
  ㄴ 검사가 통과된 메시지는 앞에 [브랜치명]을 붙여줍니다.
3. pre-push : commit push 전 빌드를 실행합니다. 이때 빌드가 실패하면 push되지 않습니다.
```

## Docker 관련
```
// docker 설치
brew install docker

// awscli 설치
brew install awscli

// AWS CONFIGURE
aws configure sso
SSO session name (Recommended): // Enter !!
SSO start URL [None]: {YourAwsOrgUrl}
SSO region [None]: ap-northeast-2
CLI default client Region [None]: {YourRegion}
CLI default output format [None]: // Enter !!
CLI profile name [AdministratorAccess-317352434087]: {YourName}

// AWS Login
aws ecr get-login-password --region {YourRegion} --profile {YourName} | docker login --username AWS --password-stdin {Your ECR URL}

// next.config.js 체크
const nextConfig = { output: "standalone", ... }

// 빌드
docker build -t myapp -f Dockerfile


// 로컬 실행
docker run -p 3000:3000 --rm myapp

// 터미널 확인
docker run --rm -it myapp /bin/sh

// 터미널에서 실행
docker run --rm -p 3000:3000 -it myapp /bin/sh
NEXTAUTH_URL=http://localhost:3000 node server.js

// DOCKER Tag change
docker tag myapp {ECR-URL}

// ECR PUSH
docker push {ECR-URL}

// docker STOP
docker ps
Docker stop {id}

// docker image remove
docker images
docker rmi {id}

// ECR PULL
docker pull {ECR-URL}

// Next.js build fail
https://github.com/vercel/next.js/issues/49777
```
