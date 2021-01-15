const rateService = require('../services/rate.service');

/*
*
*
*/
const getRates = async (req, res) => {
    const { base, currency } = req.query;

    if (!base || !currency) {
        return res.status(400).json({
            message: 'Incomplete query parameter'
        });
    }

    try {
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
            error,
        });
    }
}

module.exports = {
    getRates,
}