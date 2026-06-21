import Request from "../models/Request.js";

export const getRequests = async (req, res) => {
    try {

        const status = req.query.status;

        const query = {};

        if (status) {
           query.status = status;
        }

        const requests = await Request.find(query);

        if(requests === null){
            return res.status(404).json({
                status : false,
                message : "Requests Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: requests,
        });
    } catch (error) {
        res.status(500).json({ 
            status : false,
            error : error.message
        });
    }
};

export const getRequestById = async (req, res) => {
    const requestId = req.params.id;
    try {
        const request = await Request.findById(requestId);
        if(!request){
            return res.status(404).json({
                status : false,
                message : "Request Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: request,
        });
    } catch (error) {
        res.status(500).json({ 
            status : false,
            error : error.message
        });
    }
};

export const createRequest = async (req, res) => {
    try {
        const request = await Request.create(req.body);

        if(!request){
            return res.status(404).json({
                status : false,
                message : "Request Not Created. Please Try Again"
            });
        }

        res.status(201).json({
            success: true,
            data: request,
        });
    } catch (error) {
        res.status(500).json({ 
            status : false,
            error : error.message
        });
    }
};

export const updateRequestStatus = async (req, res) => {
    const requestId = req.params.id;
    const { status } = req.body;
    try {
        const request = await Request.findByIdAndUpdate(
        requestId,
        {
          status: status,
        },
        { new: true });

        if(!request) return res.status(400).json({
            status : false,
            message : "Request Not Updated"
        })

        res.status(200).json({
            success: true,
            data: request,
        });
    } catch (error) {
        res.status(500).json({ 
            status : false,
            error : error.message
        });
    }
};

export const getRecentRequests = async (req, res) => {
    try {
        const requests = await Request.find().sort({ createdAt: -1 }).limit(5);

        if(!requests) return res.status(404).json({
            status : false,
            message : "No Recent Requests Found"
        });

        res.status(200).json({
            success: true,
            data: requests,
        });
    } catch (error) {
        res.status(500).json({ 
            status : false,
            error : error.message
        });
    }
};