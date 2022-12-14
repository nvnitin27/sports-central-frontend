import {connectMongo} from '../../../utils/connectMongo';
import Test from '../../../models/testmodel';

export default async function addTest(req, res) {
    const { name, email } = req.body;
    await connectMongo();

    const test = await Test.create(req.body)

    res.json({test});
}
