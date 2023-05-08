import addToMailchimp from 'gatsby-plugin-mailchimp'

const handleSubmit = async (email, otherFields) => {
    const result = await addToMailchimp(email, {
        FNAME: otherFields.firstName,
        LNAME: otherFields.lastName,
        PHONE: otherFields.phoneNumber,
        REASON: otherFields.reasons
    })
    return result
};

export default handleSubmit