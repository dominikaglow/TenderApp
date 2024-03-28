//@desc Get all tenders
//@route GET /tenders
//@access public
const getTenders = (req, res) => {
    res.status(200).json({message: "Get all tenders"});
};

//@desc Get tender by id
//@route GET /tenders/:id
//@access public
const getTender = (req, res) => {
    res.status(200).json({message: `Get tender ${req.params.id}`});
};

//@desc Create new tender
//@route POST /tenders
//@access public
const createTender = (req, res) => {
    console.log("request body is: ", req.body);
    res.status(201).json({message: "Create tender"});
};

module.exports = {getTenders, getTender, createTender};