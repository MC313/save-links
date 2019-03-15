import { formatReminderTimeIntoUTC } from '../js/utils';

export const saveLink = async ({ name, url, tags, phone, timeValue, timeUnit }) => {
    const link = {
        name: name.value,
        url: url.value,
        tags: tags.value && tags.value.trim().split(',') || tags.value,
        phone: phone.value,
        reminder: formatReminderTimeIntoUTC(timeValue.value, timeUnit.value)
    };

    try {
        await fetch('https://r65032qxcg.execute-api.us-east-1.amazonaws.com/dev/links', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(link)
        });
    } catch (error) {
        console.error('An error occured try again', error);
    }
};
