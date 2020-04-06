import { TestBed, getTestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import { OcTokenService } from "../lib/api/Tokens";
import { OcMeService } from "../lib/api/Me";
import { OcUserService } from "../lib/api/Users";
import { OcProductService } from "../lib/api/Products";

const urlencode = encodeURIComponent;
const apiUrl = "https://api.ordercloud.io/v1";
describe("OcAuthService", () => {
  let injector: TestBed;
  let ocMeService: OcMeService;
  let ocUserService: OcUserService;
  let ocProductService: OcProductService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        OcMeService,
        {
          provide: OcTokenService,
          useValue: { GetAccess: () => "some-token" },
        },
      ],
    });
    injector = getTestBed();
    ocMeService = injector.get(OcMeService);
    ocUserService = injector.get(OcUserService);
    ocProductService = injector.get(OcProductService);
    http = injector.get(HttpTestingController);
  });

  it("can filter call with boolean", () => {
    let response;
    ocMeService
      .ListProducts({ filters: { "xp.Featured": true } })
      .subscribe((r) => (response = r));

    http
      .expectOne((request) => {
        const matchesUrl = request.url === `${apiUrl}/me/products`;
        const matchesMethod = request.method === "GET";
        const matchesQuery = request.params.toString() === "xp.Featured=true";

        return matchesUrl && matchesMethod && matchesQuery;
      })
      .flush('mockProductListResponse');

    expect(response).toEqual('mockProductListResponse');
  });

  it("can filter call with comparison operator", () => {
    let response;
    ocMeService
      .ListOrders({ filters: { DateSubmitted: '>2020-04-20' } })
      .subscribe((r) => (response = r));

    http
      .expectOne((request) => {
        const matchesUrl = request.url === `${apiUrl}/me/orders`;
        const matchesMethod = request.method === "GET";
        const matchesQuery = request.params.toString() === `DateSubmitted=${urlencode('>2020-04-20')}`;

        console.log(request.params.toString())
        console.log(urlencode('DateSubmitted=>2020-04-20'))
        return matchesUrl && matchesMethod && matchesQuery;
      })
      .flush('mockOrderListResponse');

    expect(response).toEqual('mockOrderListResponse');
  });

  it("can filter call with wildcard operator", () => {
    let response;
    ocUserService
      .List("my-mock-buyerid", { filters: { LastName: "Smith*" } })
      .subscribe((r) => (response = r));

    http
      .expectOne((request) => {
        const matchesUrl =
          request.url === `${apiUrl}/buyers/my-mock-buyerid/users`;
        const matchesMethod = request.method === "GET";
        const matchesQuery = request.params.toString() === "LastName=Smith*";

        return matchesUrl && matchesMethod && matchesQuery;
      })
      .flush('mockUserListResponse');

    expect(response).toEqual('mockUserListResponse');
  });

  it("can filter with logical OR operator", () => {
    let response;
    ocUserService
      .List("my-mock-buyerid", {
        filters: { LastName: "Smith*|*Jones" },
      })
      .subscribe((r) => (response = r));

    http
      .expectOne((request) => {
        const matchesUrl =
          request.url === `${apiUrl}/buyers/my-mock-buyerid/users`;
        const matchesMethod = request.method === "GET";
        const matchesQuery = request.params.toString() === `LastName=Smith*${urlencode('|')}*Jones`;

        return matchesUrl && matchesMethod && matchesQuery;
      })
      .flush('mockUserListResponse');

    expect(response).toEqual('mockUserListResponse');
  });

  it("can filter with logical AND operator", () => {
    let response;
    ocProductService.List({ filters: { 'xp.Color': ['!red', '!blue'] } })
      .subscribe((r) => (response = r));

    http
      .expectOne((request) => {
        const matchesUrl =
          request.url === `${apiUrl}/products`;
        const matchesMethod = request.method === "GET";
        const matchesQuery = request.params.toString() === "xp.Color=!red&xp.Color=!blue";

        return matchesUrl && matchesMethod && matchesQuery;
      })
      .flush('mockProductListResponse');

    expect(response).toEqual('mockProductListResponse');
  });

  it("can searchOn one field", () => {
    let response;
    ocProductService.List({searchOn: ['ID']})
      .subscribe((r) => (response = r));

    http
      .expectOne((request) => {
        const matchesUrl =
          request.url === `${apiUrl}/products`;
        const matchesMethod = request.method === "GET";
        const matchesQuery = request.params.toString() === "searchOn=ID";

        return matchesUrl && matchesMethod && matchesQuery;
      })
      .flush('mockProductListResponse');

    expect(response).toEqual('mockProductListResponse');
  });

  it("can searchOn many fields", () => {
    let response;
    ocProductService.List({searchOn: ['ID', 'Name', 'xp.Color']})
      .subscribe((r) => (response = r));

    http
      .expectOne((request) => {
        const matchesUrl =
          request.url === `${apiUrl}/products`;
        const matchesMethod = request.method === "GET";
        const matchesQuery = request.params.toString() === "searchOn=ID,Name,xp.Color";

        return matchesUrl && matchesMethod && matchesQuery;
      })
      .flush('mockProductListResponse');

    expect(response).toEqual('mockProductListResponse');
  });

  it("can sortBy one field", () => {
    let response;
    ocProductService.List({sortBy: ['ID']})
      .subscribe((r) => (response = r));

    http
      .expectOne((request) => {
        const matchesUrl =
          request.url === `${apiUrl}/products`;
        const matchesMethod = request.method === "GET";
        const matchesQuery = request.params.toString() === "sortBy=ID";

        return matchesUrl && matchesMethod && matchesQuery;
      })
      .flush('mocks.ProductList');

    expect(response).toEqual('mocks.ProductList');
  });

  it("can sortBy many fields", () => {
    let response;
    ocProductService.List({sortBy: ['ID', 'Name', 'xp.Color']})
      .subscribe((r) => (response = r));

    http
      .expectOne((request) => {
        const matchesUrl =
          request.url === `${apiUrl}/products`;
        const matchesMethod = request.method === "GET";
        const matchesQuery = request.params.toString() === "sortBy=ID,Name,xp.Color";

        return matchesUrl && matchesMethod && matchesQuery;
      })
      .flush('mocks.ProductList');

    expect(response).toEqual('mocks.ProductList');
  });

});
