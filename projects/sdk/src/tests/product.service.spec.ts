import { TestBed, getTestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import { OcTokenService } from "../lib/api/Tokens";
import { OcProductService } from "../lib/api/Products";
import { Product } from 'dist/sdk/lib/models';

const apiUrl = "https://api.ordercloud.io/v1";

describe("OcProductService", () => {
  let injector: TestBed;
  let service: OcProductService;
  let http: HttpTestingController;

  const tokenService = {
      GetAccess: () => undefined
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OcProductService, { provide: OcTokenService, useValue: tokenService}],
    });
    injector = getTestBed();
    service = injector.get(OcProductService);
    http = injector.get(HttpTestingController);
  });

  it("can create product", () => {
    const product: Product = {
        Name: 'Tennis Balls',
        ID: 'TB2038'
    }

    let response;
    service.Create(product)
      .subscribe((r) => (response = r));

    http
      .expectOne((request) => {
        const matchesUrl =
          request.url === `${apiUrl}/products`;
        const matchesMethod = request.method === "POST";
        const matchesBody = JSON.stringify(request.body) === JSON.stringify(product);

        return matchesUrl && matchesMethod && matchesBody;
      })
      .flush("mockProductCreateResponse");

    expect(response).toEqual("mockProductCreateResponse");
  });

  it("can patch product", () => {
    const productID = 'mockproductid'
    const partialProduct: Partial<Product> = {
        Description: 'This product is pretty sweet, trust me',
    }

    let response;
    service.Patch(productID, partialProduct)
      .subscribe((r) => (response = r));

    http
      .expectOne((request) => {
        const matchesUrl =
          request.url === `${apiUrl}/products/${productID}`;
        const matchesMethod = request.method === "PATCH";
        const matchesBody = JSON.stringify(request.body) === JSON.stringify(partialProduct);

        return matchesUrl && matchesMethod && matchesBody;
      })
      .flush("mockProductPatchResponse");

    expect(response).toEqual("mockProductPatchResponse");
  });

  it("can save product", () => {
    const productID = 'mockproductid'
    const product: Product = {
        Name: 'Tennis Balls',
        Description: 'This product is pretty sweet, trust me',
    }

    let response;
    service.Save(productID, product)
      .subscribe((r) => (response = r));

    http
      .expectOne((request) => {
        const matchesUrl =
          request.url === `${apiUrl}/products/${productID}`;
        const matchesMethod = request.method === "PUT";
        const matchesBody = JSON.stringify(request.body) === JSON.stringify(product);

        return matchesUrl && matchesMethod && matchesBody;
      })
      .flush("mockProductSaveResponse");

    expect(response).toEqual("mockProductSaveResponse");
  });

  it("can delete product", () => {
    const productID = 'mockproductid'
    let response;
    service.Delete(productID)
      .subscribe((r) => (response = r));

    http
      .expectOne((request) => {
        const matchesUrl =
          request.url === `${apiUrl}/products/${productID}`;
        const matchesMethod = request.method === "DELETE";
        const matchesBody = request.body === null

        return matchesUrl && matchesMethod && matchesBody;
      })
      .flush(null);

    expect(response).toEqual(null);
  });


});
