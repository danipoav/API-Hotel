import { Router } from "express";
import { getAllContacts, getContact, deleteContact, createContact, updateContact } from "../controllers/contactController";

const router = Router();

router.get('/', getAllContacts);
router.get('/:id', getContact);
router.post('/', createContact);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact)

export default router;