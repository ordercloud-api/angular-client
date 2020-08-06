import { TestBed, getTestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import { OcAuthService } from "../lib/api/Auth";
import { ApiRole } from "../lib/models/ApiRole";
import { AccessToken } from "../lib/models/AccessToken";

interface TestData {
  authUrl: string;
  username: string;
  password: string;
  clientSecret: string;
  clientID: string;
  scope: ApiRole[];
  authHeaders: {
    "Content-Type": string;
    Accept: string;
  };
  mockResponse: Required<AccessToken>;
}
const testdata: TestData = {
  authUrl: "https://api.ordercloud.io/oauth/token",
  username: "$crhistian", // handles special chars
  password: "87awesomesauce#$%^&", // handles special chars
  clientSecret: "my-mock-secret",
  clientID: "12345678-1234-1C34-1234-6BAB2E6CB1F0",
  scope: ["BuyerAdmin", "WebhookAdmin"],
  authHeaders: {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  },
  mockResponse: {
    access_token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3IiOiJjYWZlcmlvYnV5ZXIiLCJjaWQiOiI3ZmM4NzE2Ni1kNDJhLTRmMmQtOTU4Ny0xNTlkOTgxNTYzMTQiLCJ1IjoiNDI0NTYxIiwidXNydHlwZSI6ImJ1eWVyIiwicm9sZSI6WyJBZGRyZXNzQWRtaW4iLCJBZGRyZXNzUmVhZGVyIiwiQWRtaW5BZGRyZXNzQWRtaW4iLCJBcHByb3ZhbFJ1bGVSZWFkZXIiLCJCdXllclJlYWRlciIsIkJ1eWVyVXNlckFkbWluIiwiQnV5ZXJVc2VyUmVhZGVyIiwiQ2F0YWxvZ1JlYWRlciIsIk1lQWRtaW4iLCJNZUNyZWRpdENhcmRBZG1pbiIsIk1lWHBBZG1pbiIsIk9yZGVyUmVhZGVyIiwiUGFzc3dvcmRSZXNldCIsIlNoaXBtZW50UmVhZGVyIiwiU2hvcHBlciIsIlVzZXJHcm91cEFkbWluIiwiVXNlckdyb3VwUmVhZGVyIl0sImlzcyI6Imh0dHBzOi8vYXV0aC5vcmRlcmNsb3VkLmlvIiwiYXVkIjoiaHR0cHM6Ly9hcGkub3JkZXJjbG91ZC5pbyIsImV4cCI6MTU4NjA2ODA2MiwibmJmIjoxNTg2MDMyMDYyfQ.XN6-uToBxIKCAb6VQ7ukkhn2HD9viZZP6AzhQUvIRPQ",
    token_type: "bearer",
    expires_in: 35999,
    refresh_token: "mock-refresh-token",
  },
};

const urlencode = encodeURIComponent;
describe("OcAuthService", () => {
  let injector: TestBed;
  let service: OcAuthService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OcAuthService],
    });
    injector = getTestBed();
    service = injector.get(OcAuthService);
    http = injector.get(HttpTestingController);
  });

  it("should auth with login", () => {
    let response;
    service
      .Login(
        testdata.username,
        testdata.password,
        testdata.clientID,
        testdata.scope
      )
      .subscribe((r) => (response = r));

    http
      .expectOne((request) => {
        const matchesUrl = request.url === testdata.authUrl;
        const matchesMethod = request.method === "POST";
        const matchesBody =
          request.body ===
          `grant_type=password&scope=${urlencode(
            testdata.scope.join(" ")
          )}&client_id=${testdata.clientID}&username=${urlencode(
            testdata.username
          )}&password=${urlencode(testdata.password)}`;

        return matchesUrl && matchesMethod && matchesBody;
      })
      .flush(testdata.mockResponse);
    
    expect(response).toEqual(testdata.mockResponse)
  });

  it("should auth with elevated login", () => {
    let response;
    service
      .ElevatedLogin(
        testdata.clientSecret,
        testdata.username,
        testdata.password,
        testdata.clientID,
        testdata.scope
      )
      .subscribe((r) => (response = r));

    http
      .expectOne((request) => {
        const matchesUrl = request.url === testdata.authUrl;
        const matchesMethod = request.method === "POST";
        const matchesBody =
          request.body ===
          `grant_type=client_credentials&scope=${urlencode(
            testdata.scope.join(" ")
          )}&client_id=${testdata.clientID}&username=${urlencode(
            testdata.username
          )}&password=${urlencode(testdata.password)}&client_secret=${testdata.clientSecret}`;

        return matchesUrl && matchesMethod && matchesBody;
      })
      .flush(testdata.mockResponse);
    
    expect(response).toEqual(testdata.mockResponse)
  });

  it("should auth with client credentials", () => {
    let response;
    service
      .ClientCredentials(
        testdata.clientSecret,
        testdata.clientID,
        testdata.scope
      )
      .subscribe((r) => (response = r));

    http
      .expectOne((request) => {
        const matchesUrl = request.url === testdata.authUrl;
        const matchesMethod = request.method === "POST";
        const matchesBody =
          request.body ===
          `grant_type=password&scope=${urlencode(
            testdata.scope.join(" ")
          )}&client_id=${testdata.clientID}&client_secret=${testdata.clientSecret}`;

        return matchesUrl && matchesMethod && matchesBody;
      })
      .flush(testdata.mockResponse);
    
    expect(response).toEqual(testdata.mockResponse)
  });

  it("should auth with refresh token", () => {
    const refreshToken = 'mock-refresh-token'

    let response;
    service
      .RefreshToken(
        refreshToken,
        testdata.clientID
      )
      .subscribe((r) => (response = r));

    http
      .expectOne((request) => {
        const matchesUrl = request.url === testdata.authUrl;
        const matchesMethod = request.method === "POST";
        const matchesBody =
          request.body ===
          `grant_type=refresh_token&client_id=${testdata.clientID}&refresh_token=${refreshToken}`;

        return matchesUrl && matchesMethod && matchesBody;
      })
      .flush(testdata.mockResponse);
    
    expect(response).toEqual(testdata.mockResponse)
  });

  it("should auth anonymous", () => {
    let response;
    service
      .Anonymous(
        testdata.clientID,
        testdata.scope
      )
      .subscribe((r) => (response = r));

    http
      .expectOne((request) => {
        const matchesUrl = request.url === testdata.authUrl;
        const matchesMethod = request.method === "POST";
        const matchesBody =
          request.body ===
          `grant_type=client_credentials&client_id=${testdata.clientID}&scope=${urlencode(testdata.scope.join(' '))}`;

        return matchesUrl && matchesMethod && matchesBody;
      })
      .flush(testdata.mockResponse);
    
    expect(response).toEqual(testdata.mockResponse)
  });

});
