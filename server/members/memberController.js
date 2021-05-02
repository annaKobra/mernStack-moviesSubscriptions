import {Router} from "express";
import * as memberBL from "./memberUtils";
const router = Router();

router.route('/').get(async (req, res) => {
    const members = await memberBL.getAll();
    return res.json(members);
});

router.route('/:id').get(async (req, res) => {
    try {
        const memberId = req.params.id;
        const member = await memberBL.getById(memberId);
        return res.json(member);
    } catch {
        res.status(404);
		res.send({ error: "Member doesn't exist!" })
    }
});

router.route('/').post(async (req, res) => {
    const newMemberData = req.body;
    const memberData = await memberBL.create(newMemberData);
    return res.json(memberData);
});

router.route('/:id').put(async (req,res) => {
    try {
        const memberData = req.body;
        const id = req.params.id;
        const updatedData = await memberBL.update(id, memberData);
        return res.json(updatedData);
    } catch {
        res.status(404);
		res.send({ error: "Member doesn't exist!" })
    }
});

router.route('/:id').delete(async (req, res) => {
    try {
        const memberId = req.params.id;
        const deletedMember = await memberBL.deleteById(memberId);
        return res.json(deletedMember);
    } catch {
        res.status(404);
		res.send({ error: "Member doesn't exist!" })
    }
});

export default router;


