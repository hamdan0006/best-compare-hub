const express =require('express');
const app = express();
const router = express.Router();
const CardController =require('../controller/Credit-controller');
const upload =require('../middleware/cloud-img-middleware');
const {createCard} =require('../controller/Credit-controller');


const {PostCard} =require('../controller/Apply-card-controller');
const Applycard =require('../controller/Apply-card-controller');

const {authMiddleware,adminMiddleware }=require('../middleware/post-card-middleware')

const ApplyLoan =require('../controller/Apply-Loan-controller');
const {PostApplyLoan} = require('../controller/Apply-Loan-controller');


const ApplyPeronalLoan =require('../controller/Personal-Loan-controller')

const {PostPersonalLoan} =require('../controller/Personal-Loan-controller')


const ApplyAutoLoan =require('../controller/Auto-loan-controller');
const {PostAutoLoan} =require('../controller/Auto-loan-controller');


// apply loan middleware 
const {validateLoan, checkLoanValidation} =require('../middleware/Apply-Loan-middleware');


const {validateContact, checkValidation} =require('../middleware/Apply-card-middlware');


// vouchers import 

const VoucherController = require('../controller/Voucher-post-controller');

const Voucher =require('../controller/Voucher-post-controller')
const {createVoucher}=require('../controller/Voucher-post-controller');



const AplyVoucher =require('../controller/Apply-Voucher-controller');
const {PostVoucher } =require('../controller/Apply-Voucher-controller');


// contact imports 

const Contact =require('../controller/Contact-controller');
const {PostContact} =require('../controller/Contact-controller');

// companylisting import 

const companylisting =require('../controller/CompanyListing-controller');
const {PostCompanyListing}=require('../controller/CompanyListing-controller');

// islamic finance 

const IslamicFinance =require('../controller/Islamic-finance-controller');
const {PostISlFinanceListing}=require('../controller/Islamic-finance-controller');


// debt consol 

const Debtconsol =require('../controller/debt-consol-controller');
const {PostDebtConsole}=require('../controller/debt-consol-controller');


// sitemap imports 

const { generateSitemap } = require("../Sitemap/sitemap");


router.post('/',authMiddleware,adminMiddleware, upload.single('image'), CardController.createCard);

// GET all blogs
router.get('/credit-cards', CardController.getAllCard);

router.get('/credit-cards/welcome-offers', CardController.getAllCard);

router.get('/credit-cards/balance-transfer', CardController.getAllCard);

router.get('/credit-cards/airport-services', CardController.getAllCard);

router.get('/credit-cards/free-for-life', CardController.getAllCard);


// vouchers route 

router.post('/hot-promotions',authMiddleware,adminMiddleware, upload.single('image'), createVoucher);

router.post('/hot-promotions/apply', validateContact, checkValidation, AplyVoucher.PostVoucher );

router.get('/hot-promotions',VoucherController.getAllVouchers);
router.get('/hot-promotions/:id',VoucherController.getVoucherById);



// GET blog by ID
router.get('/:id', CardController.getCardById);

router.post('/credit-cards/apply',validateContact, checkValidation, Applycard.PostCard);

// router.post('/contact-us', Applycard.PostCard);

router.post('/apply-now',validateLoan, checkLoanValidation ,ApplyLoan.PostApplyLoan);

router.post('/personal-loan/apply-now', validateLoan, checkLoanValidation ,ApplyPeronalLoan.PostPersonalLoan );

router.post('/auto-loan/apply-now', validateLoan, checkLoanValidation ,ApplyAutoLoan.PostAutoLoan );


// contact route

router.post('/contact-us' ,Contact.PostContact );

// companylisting route 

router.post('/company-listing' ,companylisting.PostCompanyListing);


router.post('/Islamic-finance',IslamicFinance.PostISlFinanceListing);


// debt consol 

router.post('/debt-consolidation',Debtconsol.PostDebtConsole)

// site maps 

router.get("/sitemap.xml", generateSitemap);




module.exports=router;