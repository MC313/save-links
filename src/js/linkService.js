import formatReminderTimeIntoUTC from '../js/utils';

export const saveLink = async ({ name, url, tags, phone, timeValue, timeUnit }) => {
    const link = {
        name,
        url,
        tags: tags && tags.split(','),
        phone,
        reminder: formatReminderTimeIntoUTC(timeValue, timeUnit)
    };

    console.log('saving link', link);
    try {
        const response = await fetch('https://r65032qxcg.execute-api.us-east-1.amazonaws.com/dev/links', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(link)
        });
        return await response.json();
    } catch (error) {
        console.error('An error occured try again');
    }
};
