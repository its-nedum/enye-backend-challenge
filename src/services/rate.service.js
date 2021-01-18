const axios = require('axios');

const rateService = () => {
    // this method handles fetching the exchanges rates from the external API
    const rate = async (base, currency) => {
        try {
            const response = await axios.get(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${currency}`);
            const { data } = response;
            return data;
        } catch(error) {
            return error.response.data
        }
    }

    return {
        rate,
    }
}

module.exports = rateService;