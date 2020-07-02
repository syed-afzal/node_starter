exports.fieldsValidaton = (data, requirements) => {
    for (const key of requirements) {
        if (data[key] === '' || data[key] === null || !data[key]) {
            return {
                code: 400,
                success: false,
                message: "Please Send " + key
            };
        }
        if (key === 'email' && !verifyEmail(data[key]))
            return {
                code: 400,
                success: false,
                message: "Please Send Correct" + key
            };
    }
    return {
        success: true
    }
};

const verifyEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
