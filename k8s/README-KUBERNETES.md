# Kubernetes Deployment Steps

Run these commands from the project root.

## 1. Fix backend DB file
Replace `backend/config/db.js` with the code shared by ChatGPT.

## 2. Fix frontend API URL
In `frontend/frontend/src/components/QuizPage.js`, replace:
`http://backend:5000/api/questions/${category}` with `/api/questions/${category}`
and replace:
`http://backend:5000/api/submit` with `/api/submit`.

## 3. Fix frontend nginx proxy
Replace `frontend/frontend/nginx.conf` with the code shared by ChatGPT.

## 4. Build images
For Docker Desktop Kubernetes:
```bash
docker build -t quiz-backend:local ./backend
docker build -t quiz-frontend:local ./frontend/frontend
```

For Minikube:
```bash
eval $(minikube docker-env)
docker build -t quiz-backend:local ./backend
docker build -t quiz-frontend:local ./frontend/frontend
```

## 5. Deploy
```bash
kubectl apply -f k8s/mysql-secret.yaml
kubectl apply -f k8s/mysql-configmap.yaml
kubectl apply -f k8s/mysql.yaml
kubectl apply -f k8s/backend.yaml
kubectl apply -f k8s/frontend.yaml
```

## 6. Check
```bash
kubectl get pods
kubectl get svc
```

## 7. Open app
Docker Desktop Kubernetes:
```bash
open http://localhost:30080
```

Minikube:
```bash
minikube service frontend
```
