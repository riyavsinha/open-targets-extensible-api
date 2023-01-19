# Open Targets Extended

This repository manages the extended version of the [OpenTargets Genetics API](https://genetics-docs.opentargets.org/data-access/graphql-api).

This works by using a `docker-compose` setup to coordinate 2 services:
1. The Node server backend that delegates calls to the OpenTargets API while augmenting response with custom data as necessary
1. The Postgres SQL database storing the custom data to be served alongside OpenTargets data

## Quickstart

Prerequisites: You must have Docker installed.

1. Clone the repository
1. From the main directory, run
```
docker compose up
```
This will run both services. You can verify the setup is working by making any normal graphql requests to your local API server running on port 4000. For example, through CURL:
```
curl -X POST -H 'Content-Type: application/json' localhost:4000 -d '{"operationName":"VariantPageQuery","variables":{"variantId":"1_154453788_C_T"},"query":"query VariantPageQuery($variantId: String!) {\n  variantInfo(variantId: $variantId) {\n    rsId\n    chromosome\n    position\n    chromosomeB37\n    positionB37\n    refAllele\n    altAllele\n    nearestGene {\n      id\n      symbol\n      __typename\n    }\n    nearestGeneDistance\n    nearestCodingGene {\n      id\n      symbol\n      __typename\n    }\n    nearestCodingGeneDistance\n    mostSevereConsequence\n    caddRaw\n    caddPhred\n    gnomadAFR\n    gnomadAMR\n    gnomadASJ\n    gnomadEAS\n    gnomadFIN\n    gnomadNFE\n    gnomadNFEEST\n    gnomadNFENWE\n    gnomadNFESEU\n    gnomadOTH\n    __typename\n  }\n}\n"}'
```
Should return:
```
{"data":{"variantInfo":{"rsId":"rs4129267","chromosome":"1","position":154453788,"chromosomeB37":"1","positionB37":154426264,"refAllele":"C","altAllele":"T","nearestGene":{"id":"ENSG00000163239","symbol":"TDRD10","__typename":"Gene"},"nearestGeneDistance":48431,"nearestCodingGene":{"id":"ENSG00000163239","symbol":"TDRD10","__typename":"Gene"},"nearestCodingGeneDistance":48431,"mostSevereConsequence":"intron_variant","caddRaw":0.705045,"caddPhred":11.13,"gnomadAFR":0.13748274275195582,"gnomadAMR":0.5094339622641509,"gnomadASJ":0.4517241379310345,"gnomadEAS":0.3795336787564767,"gnomadFIN":0.3019573978123201,"gnomadNFE":0.37592809691285656,"gnomadNFEEST":0.34029916410030797,"gnomadNFENWE":0.3897058823529412,"gnomadNFESEU":0.5283018867924528,"gnomadOTH":0.3318014705882353,"__typename":"Variant"}}}
```
