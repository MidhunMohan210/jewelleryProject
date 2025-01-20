import express from 'express'
import { getProducts } from '../controllers/productController.js'
import { createTestimonial,deleteTestimonial,editTestimonials,getTestimonials } from '../controllers/testimonialController.js'


const router = express.Router()

router.get('/products',getProducts)
router.post('/create-testimonial',createTestimonial)
router.get('/list-testimonials',getTestimonials)
router.put('/edit-testimonials/:id',editTestimonials)
router.delete('/delete-testimonials/:id',deleteTestimonial)





export default router