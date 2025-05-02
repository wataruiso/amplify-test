const config = {
  "auth": {
    "user_pool_id": process.env.APP_USER_POOL_ID,
    "aws_region": process.env.APP_REGION,
    "user_pool_client_id": process.env.APP_WEB_CLIENT_ID,
    "identity_pool_id": process.env.APP_IDENTITY_POOL_ID,
    "mfa_methods": [],
    "standard_required_attributes": [
      "email"
    ],
    "username_attributes": [
      "email"
    ],
    "user_verification_types": [
      "email"
    ],
    "groups": [],
    "mfa_configuration": "NONE",
    "password_policy": {
      "min_length": 8,
      "require_lowercase": true,
      "require_numbers": true,
      "require_symbols": true,
      "require_uppercase": true
    },
  },
  "storage": {
    "aws_region": process.env.APP_REGION,
    "bucket_name": process.env.APP_S3_BUCKET_NAME,
    "buckets": [
      {
        "name": process.env.APP_S3_BUCKET_NAME,
        "bucket_name": process.env.APP_S3_BUCKET_NAME,
        "aws_region": process.env.APP_REGION,
        "paths": {
          "logs/*": {
            "authenticated": [
              "get",
              "list",
              "write",
              "delete"
            ]
          }
        }
      }
    ]
  },
  "version": "1.4"
}
  
export default config;