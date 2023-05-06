import addToMailchimp from 'gatsby-plugin-mailchimp'

const handleSubmit = async (email, otherFields) => {
    console.log("IN HANDLE SUBMIT")
    try {
        const result = await addToMailchimp(email, {
            FNAME: otherFields.firstName,
            LNAME: otherFields.lastName,
            PHONE: otherFields.phoneNumber,
            REASON: otherFields.reasons
        })
        console.log("RESULT: ", result)
        return result
    } catch(err) {
        console.log("ERROR: ", err)
    }
    console.log("DONE")
};

export default handleSubmit