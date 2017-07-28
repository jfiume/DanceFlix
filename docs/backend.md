# Backend

DanceFlix runs on Ruby on Rails and is hosted on Heroku. The sole purpose of the backend is to provide RESTful APIs and respond with JSON data.

## Heroku

BinaryCanary application performance management (APM) is used to automatically ping the Heroku dyno, keeping it awake for faster client response.

## Database

PostgreSQL RDBMS is a must for Heroku.

## Dependencies

Other notable dependencies include:

- Cloudinary for image attachment and processing
- BCrypt for password-salting and hashing for a secure authentication system
- YouTube for video hosting
