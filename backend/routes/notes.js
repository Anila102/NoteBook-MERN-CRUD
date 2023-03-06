 
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');
const express= require("express")
const router = express.Router();
// const JWT_SECRET = "ThisIsNotebookSecretJWT";


// Route to fetch all Notes

router.get("/fetchnotes", fetchuser, async (req, res) => {

    try {
        const notes = await Notes.find({ user: req.user.id })
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


// Route to add  Notes

router.post('/addnotes', fetchuser,
    [
        body('title', "Enter title ").isLength({ min: 3 }),
        body('description', "Enter description ").isLength({ min: 5 }),


    ],
    async (req, res) => {

        try {
            const { title, description, tag } = req.body;
            console.log(req.body);
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const notes = new Notes({
                title, description, tag, user: req.user.id
            })
            const savedNotes = await notes.save();
            res.json(savedNotes);

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

// Route to Update Notes

router.put("/updatenotes/:id", fetchuser, async (req, res) => {

    const { title, description, tag } = req.body;
    const newNote = {};
    if (title) { newNote.title = title }
    if (description) { newNote.description = description }
    if (tag) { newNote.tag = tag }

    // let note = await Notes.findById(req.params.id);
    //  console.log(note)
    //  if (!note) { return res.status(401).send("Not Found") }

    //  if (note.user.toString() !== req.user.id) {
    //      return res.status(401).send("Not Found")
    //  }

    //  note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
    res.json({ newNote })


})
// Route to delete Notes

router.delete("/deletenotes/:id", fetchuser, async (req, res) => {

    try {

        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(401).send("Not Found") }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Found")
        }

        note = await Notes.findByIdAndDelete(req.params.id);
        res.json({ "Success": "Note has been deleted", note: note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})


module.exports = router