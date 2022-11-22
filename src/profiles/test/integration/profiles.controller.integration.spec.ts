import { Test } from '@nestjs/testing'
import { Connection } from 'mongoose'
import { DatabaseService } from 'src/database/database.service';
import { AppModule } from '../../../app.module'
import { profileStub } from '../stubs/profiles.stub';
import * as request from 'supertest'

describe('ProfileController', () => {
    let dbConnection: Connection;
    let httpServer: any;
    let app: any;

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [AppModule]
        }).compile();

        app = moduleRef.createNestApplication();
        await app.init();
        dbConnection = moduleRef.get<DatabaseService>(DatabaseService).getDbHandle();
        httpServer = app.getHttpServer();
    })

    afterAll(async () => {
        await app.close();
    })

    beforeEach(async () => {
        await dbConnection.collection('profiles').deleteMany({});
    })

    describe('findAll', () => {
        it('should return an array of users', async () => {
            //making a global user to insert into the db
            await dbConnection.collection('profiles').insertOne(profileStub())
            const response = await request(httpServer).get('/profiles');

            expect(response.status).toBe(200);
            expect(response.body).toMatchObject([profileStub()]);
        })
    })
})