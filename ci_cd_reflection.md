Static Analysis Checks in CI/CD

CI/CD Purpose

CI/CD main goal is to make delivery of software quicker, safer and repeatable by automating how code is integrated, tested and released. CI pushes developers to merge changes frequently and every push has automated build, tests and checks. CD refers to automatically testing and building packages so they are ready for deployment.

Automating style checks for projects you see an increase in quality for the below reasons:

- Improved consistency and standardization.
- Catches styling/formatting errors earlier.
- Improves code readability.
- Improves long term maintainability.

Some challenges when when enforcing checks in CI/CD

- Flaky tests: test that produce false negatives, hinder the crediability of the CI/CD pipeline.
- Slow pipelines can cause bottlenecks for developers as checks build up large queues.

small vs large teams CI/CD pipelines.

Small Teams optimise for speed, trunk-based dev PR's

- Basic Automation will minimal test coverage, usually for tasks like building and running tests.
- Entry tools are integrated into development environment.
- Given limited number of developers who share code inte

Large Teams

- Complex and scalable infrastructure.
- Automation past builds and test, will be implemented in security checks and deployment.
- Standardized tools and processes across teams.
- Automation for security checks, deployments and rollbacks.
- complex test pyramid with more resourcess than a small team to boost unit test times.
