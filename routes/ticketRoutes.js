import express from "express";
import { purchaseTicket, getUserTickets, getEventTickets } from "../controllers/ticketController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Purchase ticket for an event
router.post("/:eventId", protect, purchaseTicket);

// Get tickets for a logged-in user
router.get("/my-tickets", protect, getUserTickets);

// Get all tickets for an event (for event organizers)
router.get("/event/:eventId", protect, getEventTickets);

export default router;
