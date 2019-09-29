# Web Expenses Application (React POT)

Proof-of-Technology (POT) based upon React, Redux, Firebase Realtime Database, Firebase Cloud Hosting.

## Source Code / Screenshots / Demo
https://github.com/BrianNewell/react-expenses-firebase

https://react-expenses-firebase.firebaseapp.com

![](react-expenses-firebase-demo.gif)
## Basic functionality includes:

```
Anonymous Authentication (for demo purposes -- Expenses will persist until "Sign Out")
Authentication via Google SSO
CRUD (Create, Read, Update, Delete) of individual Expenses
Search / Filter (Text, Date Range) and Sort
Responsive design, i.e. adaptive display on Large (e.g. Desktop) and Small (e.g. Smartphone) devices
```

### "General" Steps to Repurpose/Extend:

* Fork, Clone, or Download project
* Install Node Modules (e.g. yarn install, npm install)
* Create "Firebase Project"
* Add "Firebase Web App"
* Create Firebase "Realtime Database"
<--- Set Database Rules --> 
```javascript
{
  "rules": {
    ".read": false,
    ".write": false,
    "users": {
      "$user_id":{
        ".read": "$user_id === auth.uid",
        ".write": "$user_id === auth.uid"
      }
    }
  }
}
```
* Create "/src/firebase/firebaseConfig.js" with correct "Firebase Web App" SDK Config values
* Install Firebase CLI (if not already installed)
* firebase login 
* firebase init (choose Hosting, "Firebase Project", enter "build" for public directory)
* Build project for deployment (e.g. yarn build, npm build)
* firebase deploy -m "Init deploy" 
