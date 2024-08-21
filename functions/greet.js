exports.handler = async function(event, context) {
    const data = JSON.parse(event.body);

    if (!data.name) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Please provide a name.' }),
        };
    }

    const greeting = `Hello, ${data.name}! Welcome to Netlify Cloud Functions.`;

    return {
        statusCode: 200,
        body: JSON.stringify({ message: greeting }),
    };
};
