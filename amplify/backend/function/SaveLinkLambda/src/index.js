/* Amplify Params - DO NOT EDIT
	
Amplify Params - DO NOT EDIT */

exports.handler = async (event) => {
    const body = JSON.parse(event.body);

    /**
     1. Valid required params
     2. Determine if reminder param is set
     3. Save data to link database
     4. If reminder param exists set reminder
     */
    if (!validParams(body)) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Invalid parameter value." })
        }
    };

    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};

const requiredParams = ["name", "url"];

function validParams(params) {
    for (const param of requiredParams) {
        if (!params[param]) return false;
    }
};
