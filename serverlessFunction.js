async function main(params) {
  const { CloudantV1 } = require("@ibm-cloud/cloudant");
  const { IamAuthenticator } = require("ibm-cloud-sdk-core");
  const authenticator = new IamAuthenticator({ apikey: "Your Key" });
  const cloudant = CloudantV1.newInstance({
    authenticator: authenticator,
  });
  cloudant.setServiceUrl("Your URL");

  try {
    if (params.st) {
      const result = await findDealershipByState(cloudant, params.st);
      const code = result.length ? 200 : 404;
      return {
        statusCode: code,
        headers: { "Content-Type": "application/json" },
        body: result,
      };
    } else if (params.id) {
      const result = await findDealershipById(cloudant, params.id);
      const code = result.length ? 200 : 404;
      return {
        statusCode: code,
        headers: { "Content-Type": "application/json" },
        body: result,
      };
    } else {
      const result = await findAllDealerships(cloudant);
      const code = result.length ? 200 : 404;
      return {
        statusCode: code,
        headers: { "Content-Type": "application/json" },
        body: result,
      };
    }
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: { error: "Internal Server Error" },
    };
  }
}

async function findDealershipByState(cloudant, state) {
  const result = await cloudant.postFind({
    db: "dealership",
    selector: { st: state },
  });
  return result.result.docs;
}

async function findDealershipById(cloudant, id) {
  const result = await cloudant.postFind({
    db: "dealership",
    selector: { id: parseInt(id) },
  });
  return result.result.docs;
}

async function findAllDealerships(cloudant) {
  const result = await cloudant.postAllDocs({
    db: "dealership",
    includeDocs: true,
    limit: 10,
  });
  return result.result.rows;
}
