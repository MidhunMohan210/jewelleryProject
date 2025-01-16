import express from 'express'
import { getProducts } from '../controllers/productController.js'
import { createTestimonial } from '../controllers/testimonialController.js'


const router = express.Router()

router.get('/products',getProducts)
router.post('/create-testimonial',createTestimonial)



export default router