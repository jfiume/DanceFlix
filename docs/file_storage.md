# File Storage on Cloudinary and YouTube

Image files are stored on Cloudinary.

Video files are stored on YouTube.

The two file types follow separate implementations - direct upload and pass-through upload.

Due to the large file sizes, video files are uploaded directly to S3. Meanwhile, images are uploaded through Rails.

## Direct Upload

For uploading potentially large video files, a direct uploading process from YouTube is necessary. This is to avoid request timeouts during upload, a limitation of Rails on Heroku.

Upon selecting a video file, the client initiates a direct upload.

First, the frontend application requests for a presigned URL and a public URL from the server. The presigned URL is for making the POST request to the appropriate YouTube bucket. The public URL is eventually stored in the database as the track's audio URL.

In the backend, Rails fetches for these URLs through the AWS SDK, and delivers them as JSON to the client.


## Pass-Through Upload

For image files that on average are less than 5MB, a pass-through upload is sufficient.

Upon submitting a new track, or updating a user or track, the image file (if attached) is included as form data in a POST/PATCH request to the server.
