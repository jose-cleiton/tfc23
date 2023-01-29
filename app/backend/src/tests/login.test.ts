import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import users from '../database/models/User.model';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testing /login router', () => {

  it('Check login - if the informations are correct', async () => {
    sinon.stub(users, 'findOne').resolves({
      "email": "admin@admin.com",
      "password": "secret_admin"
    } as any)
    const result = await chai.request(app).post("/login").send({
      "email": "admin@admin.com",
      "password": "secret_admin"
    })
    expect(result.status).to.be.eq(200);
  });
});
