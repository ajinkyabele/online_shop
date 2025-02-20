# Online Shop – Hackathon Phase 1 Submission

📌 Overview

This project contains a Vite-based e-commerce application that runs inside a Docker container. It follows security best practices, ensuring a lightweight, optimized, and secure deployment.

## Task Descriptions & Implementations of Docker Container:

I have made four docker images with four differnet differnt docker files with sucessfull implementation of the ecommerce aplication also .The four Dockerfiles and their functionality are as follows

Dockerfile Overview

1. Basic Development Dockerfile
This Dockerfile is a simple setup for a development environment.

Steps:

• Sets the working directory to /app

• Copies package.json and installs dependencies

• Copies the application code

• Exposes port 3000

• Runs the application in development mode with:
```
CMD ["npm", "run", "dev"]
```

Use Case: Suitable for local development where hot-reloading is required.

2. Multi-Stage Build for Production

This Dockerfile improves the setup by implementing a multi-stage build for better performance and security.

Stage 1: Build the Application

• Installs dependencies

• Copies application code

• Builds the Vite application using:
```
RUN npm run build
```
Stage 2: Serve Static Files

• Uses a minimal Node.js base image

• Installs a static file server (serve)

• Copies built files (dist/)

• Starts a static file server on port 3000 using:
```
CMD ["serve", "-s", "dist", "-l", "3000"]
```

Use Case: This setup is optimized for production by serving static files instead of running the app in development mode.

3. Secure & Minimal Production Dockerfile

This Dockerfile is optimized for security and performance.

Key Enhancements:

• Uses a non-root user (appuser) for better security.

• Copies only necessary dependencies for the final stage.

• Ensures correct permissions to avoid permission-related issues.

• Uses npx vite preview instead of serve for serving the application.

Use Case: Best suited for secure deployments where non-root execution is required.

Best Practices Implemented:

• Multi-stage builds reduce the final image size.

• Non-root user enhances security.

• Separation of build and runtime stages ensures a clean and optimized container.

• Using npm run build ensures that only the final built application is deployed.


## Docker images which i have made and pushes to dockerhub


```
ajinkya111/online-app
```
```
ajinkya111/online-app-slim 
```
```
ajinkya111/online-app-multistage
```
```
ajinkya111/online-app-multistage-security
```
## All The commands Whichever used for this Hackathon

1) Docker

Containerization Principles

• Consider how to package and deploy the application using Docker.

• Create a Dockerfile and optimize it for best practices.

• Example Dockerfile snippet:
```
FROM node:18-slim
• WORKDIR /app
• COPY package*.json ./
• RUN npm install
• COPY . .
• EXPOSE 3000
• CMD ["npm", "run", "dev"]
```
• Build a Docker image:
```
docker build -t my-app .
```
• Run a container:
```
docker run -d -p 3000:3000 my-app
```
• List running containers:
```
docker ps
```
• Stop a running container:
```
docker stop container_id
```
• Remove a container:
```
docker rm container_id
```
• Remove an image:
```
docker rmi image_id
```

2) Git & GitHub

Repository Management

• Fork and clone the repository.
```bash
 git clone <https://github.com/iemafzalhassan/online_shop.git>
```
• Create a new branch for your work using:
```bash
git checkout -b feature-branch
```
• Ensure your commit history is clean and well-documented by making meaningful commits:
```bash
git commit -m "Add meaningful feature"
```
• Check the status of your repository:
```bash
git status
```
• Add changes to staging:
```bash
git add .
```
• Push changes to your branch:
```bash
git push origin feature-branch
```
• Merge the branch after approval:
```bash
git merge feature-branch
```
• Pull the latest changes from the main branch:
```bash
git pull origin main
```

Collaboration Practices

• Follow best practices for version control:

◦ Make descriptive commits.

◦ Create pull requests.

◦ Engage in code reviews.

• Reset a commit:
```bash
git reset --hard HEAD~1
```
• Stash changes temporarily:
```bash
git stash
```

• Apply stashed changes:
```
git stash pop
```
Workflow Optimization

• Identify areas for improvement in the Git workflow.

• Document suggestions for workflow enhancements in the repository.

3)Linux

Command Line Proficiency

• Review code for Linux command usage.

• Verify that file operations, system scripts, and environment configurations are functioning correctly.

• Test with:
```
chmod +x script.sh
• ./script.sh
```
• List all files in a directory:
```
ls -la
```
• Check current directory:
```
pwd
```
• Create a new directory:
```
mkdir new_folder
```
• Move files:
```
mv file.txt /destination/
```
• Delete a file:
```
rm file.txt
```
• Display running processes:
```
ps aux
```
• Monitor system resource usage:
```
top
```
System Administration

• Examine Linux-based operations such as:

◦ Permissions

◦ File management

◦ Process monitoring

• Improve efficiency and document implemented changes.

Documentation

• Clearly document any Linux-related enhancements.

• Explain optimizations and their impact on
 performance or usability.

    
## License

This project is licensed under the MIT License.


## Authors

Developed by [Ajinkya Bele] - Feel free to contribute! 🚀

This README explains everything clearly! Let me know if you want any modifications. 🚀
