// Import AWS SDK
const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

// Set the DynamoDB table name
const tableName = 'UserScores';

exports.handler = async (event) => {
    try {
        // Assuming `event` contains `userId` as path parameter and `scoreData` in the body
        const userId = event.pathParameters.userId;
        const { scoreData } = JSON.parse(event.body);

        // DynamoDB put operation parameters
        const params = {
            TableName: tableName,
            Item: {
                userId: userId,
                scoreData: scoreData,
                // Add any other attributes you might need
            },
        };

        // Save the data in DynamoDB
        await dynamoDB.put(params).promise();

        // Response
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Score data saved successfully"
            }),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "Failed to save score data"
            }),
        };
    }
};
