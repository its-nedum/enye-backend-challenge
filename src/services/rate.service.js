const axios = require('axios');

const rateService = () => {
    const rate = async (base, currency) => {
        try {
            const response = await axios.get(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${currency}`);
            const { data } = response;
            return data;
        } catch(error) {
            console.log(error)
        }
    }

    return {
        rate,
    }
}

module.exports = rateService;