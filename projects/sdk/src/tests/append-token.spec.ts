import { TestBed, getTestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import { OcTokenService } from "../lib/api/Tokens";
import { OcOrderService } from "../lib/api/Orders";

import * as utils from "./utils";
const apiUrl = "https://api.ordercloud.io/v1";

describe("Appending correct token to requests", () => {
  let injector: TestBed;
  let ocTokenService: OcTokenService;
  let ocOrderService: OcOrderService;
  let http: HttpTestingController;

  const tokenService = {
    GetAccess: () => undefined,
    GetImpersonation: () => undefined,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        OcOrderService,
        { provide: OcTokenService, useValue: tokenService },
      ],
    });
    injector = getTestBed();
    ocOrderService = injector.get(OcOrderService);
    ocTokenService = injector.get(OcTokenService);
    http = injector.get(HttpTestingController);
  });

  it("should use impersonation token if call As() method", () => {
    const impersonationToken = utils.makeToken();
    spyOn(ocTokenService, "GetImpersonation").and.returnValue(
      impersonationToken
    );
    let response;
    ocOrderService
      .As()
      .Submit("Incoming", "mockorderid")
      .subscribe((r) => (response = r));

    http
      .expectOne((request) => {
        const matchesUrl =
          request.url === `${apiUrl}/orders/Incoming/mockorderid/submit`;
        const matchesMethod = request.method === "POST";
        const matchesBody = request.body === null;
        const matchesHeader =
          request.headers.get("Authorization") ===
          `Bearer ${impersonationToken}`;

        return matchesUrl && matchesMethod && matchesBody && matchesHeader;
      })
      .flush("mockOrderSubmitResponse");

    expect(response).toEqual("mockOrderSubmitResponse");
  });

  it("should prioritize passed in token on regular calls", () => {
    const passedinToken = utils.makeToken();
    let response;
    ocOrderService
      .Submit("Incoming", "mockorderid", { accessToken: passedinToken })
      .subscribe((r) => (response = r));

    http
      .expectOne((request) => {
        const matchesUrl =
          request.url === `${apiUrl}/orders/Incoming/mockorderid/submit`;
        const matchesMethod = request.method === "POST";
        const matchesBody = request.body === null;
        const matchesHeader =
          request.headers.get("Authorization") === `Bearer ${passedinToken}`;

        return matchesUrl && matchesMethod && matchesBody && matchesHeader;
      })
      .flush("mockOrderSubmitResponse");

    expect(response).toEqual("mockOrderSubmitResponse");
  });

  it("should prioritize passed in token on impersonated calls", () => {
    const impersonationToken = utils.makeToken();
    spyOn(ocTokenService, "GetImpersonation").and.returnValue(
      impersonationToken
    );
    const passedinToken = utils.makeToken();
    let response;
    ocOrderService
      .As()
      .Submit("Incoming", "mockorderid", { accessToken: passedinToken })
      .subscribe((r) => (response = r));

    http
      .expectOne((request) => {
        const matchesUrl =
          request.url === `${apiUrl}/orders/Incoming/mockorderid/submit`;
        const matchesMethod = request.method === "POST";
        const matchesBody = request.body === null;
        const matchesHeader =
          request.headers.get("Authorization") === `Bearer ${passedinToken}`;

        return matchesUrl && matchesMethod && matchesBody && matchesHeader;
      })
      .flush("mockOrderSubmitResponse");

    expect(response).toEqual("mockOrderSubmitResponse");
  });
});
