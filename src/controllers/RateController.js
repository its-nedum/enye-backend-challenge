const rateService = require('../services/rate.service');

/* GET: /api/rates?base=CZK&currency=EUR,GBP,USD
*
* base => The home currency rate to be quoted against (eg. CZK)
* currency => The specific exchange rates based on a comma-separated symbols parameter (eg. EUR,GBP,USD)
*/
const getRates = async (req, res) => {
    const { base, currency } = req.query;

    // check if all query parameters are provided
    if (!base || !currency) {
        return res.status(400).json({
            message: 'Incomplete query parameter'
        });
    }

    try {
        // send the query parameters to the rate service to be processed
        const results = await rateService().rate(base, currency);

        if (!results) {
            return res.status(204);
        }

        return res.status(200).json({
            results
        });

    } catch(error) {
        return res.status(500).json({
            message: 'Internal server error',
        });
    }
}

module.exports = {
    getRates,
}