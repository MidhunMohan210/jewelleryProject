import express from 'express'
import { getProducts } from '../controllers/productController.js'
import { createTestimonial } from '../controllers/testimonialController.js'
import { createSubDetail, getSubDetails } from '../controllers/subDetailsController.js'


const router = express.Router()

router.get('/products',getProducts)
router.post('/create-testimonial',createTestimonial)

///sub details route
router.post('/create-subdetails',createSubDetail)
router.get('/get-subdetails',getSubDetails)





export default router