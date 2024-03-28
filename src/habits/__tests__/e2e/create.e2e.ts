import request = require('supertest');
import { StatusCodes } from 'http-status-codes';

import app from '../../../app';
import { dbConnect } from '../../../utils/dbConnect';


describe("Create E2E", async () => {
    beforeAll(async () => {
        await dbConnect();
    });

    test("success", async () => {
        const response = await request(app)
            .post("/api/v1/habits/")
            .send({
                name: "H1",
                points: 5,
                target: 10,
                mandatory: true,
            });
        console.log(response.body);
        expect(response.statusCode).toBe(StatusCodes.OK);
    });
});
