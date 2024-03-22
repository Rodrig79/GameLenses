/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "us-west-1",
    "aws_cognito_identity_pool_id": "us-west-1:31660553-095c-4b6e-a79a-d3839fde5e81",
    "aws_cognito_region": "us-west-1",
    "aws_user_pools_id": "us-west-1_j1lUEjG3q",
    "aws_user_pools_web_client_id": "g70qmvvlehg0cn48g0vj9dkpe",
    "oauth": {
        "domain": "gamelenses-dev.auth.us-west-1.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "http://localhost:3000/,https://main.dy1kvdit4vuhp.amplifyapp.com/",
        "redirectSignOut": "http://localhost:3000/,https://main.dy1kvdit4vuhp.amplifyapp.com/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [
        "GOOGLE"
    ],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ],
    "aws_dynamodb_all_tables_region": "us-west-1",
    "aws_dynamodb_table_schemas": [
        {
            "tableName": "UserData-dev",
            "region": "us-west-1"
        }
    ],
    "aws_storage_bucket": "yourappname-yourappenv-files123456-uploads",
    "aws_storage_region": "us-west-2"
};


export default awsmobile;
